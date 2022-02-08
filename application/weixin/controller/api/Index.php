<?php
/*------------------------------------------------------ */
//-- 微信
//-- Author: iqgmy
/*------------------------------------------------------ */
namespace app\weixin\controller\api;
use app\ApiController;

use app\weixin\model\WeiXinUsersModel;
use app\weixin\model\WeiXinModel;
use app\weixin\model\WeiXinMpModel;
use app\weixin\model\WeiXinInviteLogModel;
use app\member\model\UsersModel;


class Index  extends ApiController{

    public function initialize(){
        parent::initialize();
        $this->Model = new WeiXinUsersModel();
    }

    /*------------------------------------------------------ */
    //--  获取微信小程序/公众号的openId
    /*------------------------------------------------------ */
    public function getOpenId(){
        $code = input('code','','trim');
        $type = input('type','','trim');
        $auto_login = input('auto_login',0,'intval');
        if ($type == 'MP'){
            $is_mp = 1;
            $res = file_get_contents('https://api.weixin.qq.com/sns/jscode2session?appid='.settings('xcx_appid').'&secret='.settings('xcx_appsecret').'&js_code='.$code.'&grant_type=authorization_co');
            $wxModel = new WeiXinMpModel();
        }else{
            $is_mp = 0;
            $res = file_get_contents("https://api.weixin.qq.com/sns/oauth2/access_token?appid=" .settings('weixin_appid') . "&secret=" .settings('weixin_appsecret') . "&code=" . $code . "&grant_type=authorization_code");
            $wxModel = new WeiXinModel();
        }
        $data = json_decode($res,true);
        if (empty($data['openid'])){
            return $this->error($data['errcode'].'-'.$data['errmsg']);
        }

        $where[] = ['wx_openid','=',$data['openid']];
        $where[] = ['is_mp','=',$is_mp];
        $wxuInfo = $this->Model->where($where)->find();
        if (empty($wxuInfo)){//数据不存在，写入
            $inData['is_mp'] = $is_mp;
            $inData['wx_openid'] = $data['openid'];
            if (empty($data['unionid']) == false){
                $inData['unionid'] = $data['unionid'];
            }
            $inData['add_time'] = time();

            $this->Model->save($inData);
            $wxuInfo = $this->Model->where($where)->find();
        }else{
            //未知是否有坑，理论上只会从无到冇，不应该存在A变B
            if ($wxuInfo['unionid'] != $data['unionid']){
                $upData['unionid'] = $data['unionid'];
            }

        }

        if ($wxuInfo['update_time'] < time() - 86400 ){
            //获取关注信息
            $wxArr = $wxModel->getWxUserInfoSubscribe($wxuInfo['wx_openid']);

            if ($wxArr['subscribe'] == 1){
                $upData['sex'] = $wxArr['sex'];
                $upData['subscribe'] = $wxArr['subscribe'] * 1;
                $upData['wx_nickname'] = $wxArr['nickname'];
                $upData['wx_headimgurl'] = $wxArr['headimgurl'];
                $upData['wx_city'] = $wxArr['city'];
                $upData['wx_province'] = $wxArr['province'];
            }else{
                if(isset($data['access_token'])){
                    $wxUserInfo = $wxModel->getAccWxUserInfo($wxuInfo['wx_openid'],$data['access_token']);
                    $upData['wx_nickname'] = $wxUserInfo['nickname'];
                    $upData['wx_headimgurl'] = $wxUserInfo['headimgurl'];
                }
                $upData['subscribe'] = 0;
            }
            $upData['update_time'] = time();
        }

        if (empty($data['session_key']) == false){
            $upData['session_key'] = $data['session_key'];
            unset($data['session_key']);
        }

        if (empty($upData) == false){
            $this->Model->where('wxuid',$wxuInfo['wxuid'])->update($upData);
        }

        if ($wxuInfo['user_id'] < 1){
            $share_token = input('share_token', '', 'trim');
            if (empty($share_token) == false){
                $WeiXinInviteLogModel = new WeiXinInviteLogModel();
                $_share_token = $WeiXinInviteLogModel->where('wxuid',$wxuInfo['wxuid'])->order('id DESC')->value('share_token');
                if ($_share_token != $share_token){
                    $wxlog['wxuid'] = $wxuInfo['wxuid'];
                    $wxlog['user_id'] =  (new UsersModel)->getShareUser($share_token);
                    $wxlog['share_token'] = $share_token;
                    $wxlog['add_time'] = time();
                    $WeiXinInviteLogModel->save($wxlog);
                }
            }
        }else{
            if ($auto_login == 1 && settings('wx_auto_login') == 1){ //公众号自动登陆
                $data['token'] = (new UsersModel)->doLogin($wxuInfo['user_id']);
            }
        }
        return $this->success($data);
    }

    /*------------------------------------------------------ */
    //--  微信小程序手机号码登陆
    /*------------------------------------------------------ */
    public function loginByMpPhone(){
        $openid = input('openid','','trim');
        $iv = input('iv','','trim');
        $encryptedData = input('encryptedData','','trim');
        $dataObj = $this->Model->WXBizDataCrypt($openid,$iv,$encryptedData);
        if (is_array($dataObj) == false){
            return $this->error($dataObj);
        }
        $UsersModel = new UsersModel();
        $userInfo = $UsersModel->where('mobile',$dataObj['phoneNumber'])->field('user_id,is_ban,token')->find();
        if (empty($userInfo) == false){
            if ($userInfo['is_ban'] == 1) {
                return $this->error(langMsg('用户已被禁用.', 'member.login.is_ban'));
            }
            $data['share_token'] = $userInfo['token'];
            $data['token'] = $UsersModel->doLogin($userInfo['user_id']);
        }else{
            $data['phoneNumber'] = $dataObj['phoneNumber'];
            $data['must_reg'] = 1;//相关手机号码未注册会员，提示并跳转注册
        }
        return $this->success($data);
    }
    /*------------------------------------------------------ */
    //--  微信公众号分享
    /*------------------------------------------------------ */
    public function getShareSign(){
        $url = input('url','','trim');
        $data = (new WeiXinModel)->getSignPackage($url);
        $data['debug'] = 0;//是否开启调试
        $data['user_token'] = $this->userInfo['token'];
        return $this->success($data);
    }
    /*------------------------------------------------------ */
    //--  绑定微信
    /*------------------------------------------------------ */
    public function bindWxUser(){
        $openid = input('openid','','trim');
        if (empty($openid)){
            return $this->error('获取openid失败.');
        }
        $source = request()->header('source');
        if ($source != 'H5-WX' && $source != 'MP-WEIXIN'){
            return $this->error('非微信访问，无法操作.');
        }
        $is_mp = $source == 'MP-WEIXIN' ? 1 : 0;
        $where[] = ['user_id','=',$this->userInfo['user_id']];
        $where[] = ['is_mp','=',$is_mp];
        $wxInfo = $this->Model->where($where)->find();
        if (empty($wxInfo) == false){
            if ($wxInfo['wx_openid'] == $openid){
                return $this->error('当前绑定的微信一致，无须修改.');
            }
        }
        $where = [];
        $where[] = ['wx_openid','=',$openid];
        $where[] = ['is_mp','=',$is_mp];
        $res = $this->Model->where($where)->update(['user_id'=>$this->userInfo['user_id']]);
        if ($res < 1){
            return $this->error('绑定失败，请重试.');
        }
        $data['wx_nickname'] = $this->Model->where($where)->value('wx_nickname');
        return $this->success($data);
    }
    /*------------------------------------------------------ */
    //--  解绑微信
    /*------------------------------------------------------ */
    public function unbindWxUser(){
        $source = request()->header('source');
        if ($source != 'H5-WX' && $source != 'MP-WEIXIN'){
            return $this->error('非微信访问，无法操作.');
        }
        $is_mp = $source == 'MP-WEIXIN' ? 1 : 0;
        $where[] = ['user_id','=',$this->userInfo['user_id']];
        $where[] = ['is_mp','=',$is_mp];
        $wxInfo = $this->Model->where($where)->find();
        if (empty($wxInfo)){
            return $this->error('当前没有绑定微信.');
        }
        $res = $this->Model->where($where)->update(['user_id'=>0]);
        if ($res < 1){
            return $this->error('绑定失败，请重试.');
        }
        return $this->success();
    }
}?>