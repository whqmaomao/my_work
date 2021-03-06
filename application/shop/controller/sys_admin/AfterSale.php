<?php

namespace app\shop\controller\sys_admin;
use think\Db;
use app\AdminController;

use app\shop\model\AfterSaleModel;
use app\shop\model\OrderGoodsModel;
use app\shop\model\OrderModel;
use app\member\model\AccountModel;
use app\member\model\AccountLogModel;

/**
 * 售后相关
 * Class Index
 */
class AfterSale extends AdminController
{
    public $listType = '';
    //*------------------------------------------------------ */
    //-- 初始化
    /*------------------------------------------------------ */
    public function initialize()
    {
        parent::initialize();
        $this->Model = new AfterSaleModel();
    }

    //*------------------------------------------------------ */
    //-- 待审核
    /*------------------------------------------------------ */
    public function wait_check()
    {
        $this->assign('title','待审核');
        $this->listType = 'wait_check';
        $this->getList(true);
        return $this->fetch('index');
    }
    //*------------------------------------------------------ */
    //-- 待退货
    /*------------------------------------------------------ */
    public function wait_return()
    {
        $this->assign('title','待退货');
        $this->listType = 'wait_return';
        $this->getList(true);
        return $this->fetch('index');
    }
    //*------------------------------------------------------ */
    //-- 待退货（供应商）
    /*------------------------------------------------------ */
    public function wait_return_s()
    {
        $this->assign('title','待退货（供应商）');
        $this->listType = 'wait_return_s';
        $this->getList(true);
        return $this->fetch('index');
    }
    //*------------------------------------------------------ */
    //-- 待收货
    /*------------------------------------------------------ */
    public function wait_sign()
    {
        $this->assign('title','待收货');
        $this->listType = 'wait_sign';
        $this->getList(true);
        return $this->fetch('index');
    }
    //*------------------------------------------------------ */
    //-- 已完成
    /*------------------------------------------------------ */
    public function complete()
    {
        $this->assign('title','已完成');
        $this->listType = 'complete';
        $this->getList(true);
        return $this->fetch('index');
    }
    //*------------------------------------------------------ */
    //-- 待审核
    /*------------------------------------------------------ */
    public function fail()
    {
        $this->assign('title','审核失败');
        $this->listType = 'fail';
        $this->getList(true);
        return $this->fetch('index');
    }
    /*------------------------------------------------------ */
    //-- 获取列表
    //-- $runData boolean 是否返回模板
    /*------------------------------------------------------ */
    public function getList($runData = false)
    {
        if ($runData == true){
            $reportrange = input('reportrange', '', 'trim');
            if (empty($reportrange) == false) {
                $reportrange = str_replace('_', '/', $reportrange);
                $dtime = explode('-', $reportrange);
                $this->assign("start_date", $dtime[0]);
                $this->assign("end_date", $dtime[1]);
            } else {
                $this->assign("start_date", date('Y/m/01', strtotime("-1 months")));
                $this->assign("end_date", date('Y/m/d'));
            }
        }
        $where = [];
        if (empty($this->listType)){
            $this->listType = input('listType','','trim');
        }
        $reportrange = input('reportrange', '', 'trim');
        if (empty($reportrange) == false) {
            $reportrange = str_replace('_', '/', $reportrange);
            $dtime = explode('-', $reportrange);
            $where[] = ['add_time', 'between', [strtotime($dtime[0]), strtotime($dtime[1]) + 86399]];
        } else {
            $where[] = ['add_time', 'between', [strtotime("-1 months"), time()]];
        }
        $keyword = input('keyword', '', 'trim');
        $searchBy = input('searchBy', '', 'trim');
        switch ($searchBy) {
            case 'as_sn':
                $where[] = ['as_sn', '=', $keyword ];
                break;
            case 'goods_sn':
                $where[] = ['goods_sn', '=', $keyword];
                break;
            case 'shipping_no':
                $where[] = ['shipping_no', '=', $keyword];
                break;
            case 'order_sn':
                $where[] = ['order_sn', '=',$keyword];
                break;
            case 'user_id':
                $where[] = ['user_id', '=', $keyword];
                break;
            default:
                break;
        }
        switch ($this->listType) {
            case 'wait_check':
                $where[] = ['status', '=', 0];
                break;
            case 'wait_return':
	    	$where[] = ['supplyer_id', '=', 0];
                $where[] = ['status', '=', 2];
                break;
	    case 'wait_return_s':
	    	$where[] = ['supplyer_id', '>', 0];
                $where[] = ['status', '=', 2];
                break;
            case 'wait_sign':
                $where[] = ['status', '=', 3];
                break;
            case 'complete':
                $where[] = ['status', '=', 9];
                break;
            case 'fail':
                $where[] = ['status', '=', 1];
                break;
            default:
                break;
        }

        $data = $this->getPageList($this->Model, $where);
        $OrderGoodsModel = new OrderGoodsModel();
        foreach ($data['list'] as $key=>$row){
//            $row['goods'] = $OrderGoodsModel->find($row['rec_id'])->toArray();
            $row['goods'] = $OrderGoodsModel->find($row['rec_id']);
            $data['list'][$key] = $row;
        }
        $this->assign("data", $data);
        $this->assign("listType", $this->listType);
        $this->assign("as_type", $this->Model->type);
        $this->assign("as_status", $this->Model->status);
        if ($runData == false) {
            $data['content'] = $this->fetch('list')->getContent();
            unset($data['list']);
            return $this->success('', '', $data);
        }
        return true;
    }
    /*------------------------------------------------------ */
    //-- 订单详细页
    /*------------------------------------------------------ */
    public function asInfo($row)
    {
        $this->assign("as_status", $this->Model->status);
        $this->assign("as_type", $this->Model->type);
        $orderInfo = (new OrderModel)->info($row['order_id']);
        $this->assign('orderInfo',$orderInfo);
        $goods = (new OrderGoodsModel)->find($row['rec_id']);
        $this->assign('goods',$goods);
        $row['imgs'] = explode(',',$row['imgs']);
        return $row;
    }
    /*------------------------------------------------------ */
    //-- 售后审核处理
    /*------------------------------------------------------ */
    public function check()
    {
        $as_id = input('as_id', 0, 'intval');
        $upData['status'] = input('status', 0, 'intval');
        $upData['remark'] = input('remark', '','trim');
        if ($upData['status'] == 0){
            return $this->error('请选择需求的操作.');
        }
        if ($upData['status'] == 1 && empty($upData['remark'])){
            return $this->error('拒绝售后，需要填写拒绝说明.');
        }
        $asInfo = $this->Model->find($as_id);
        if ($asInfo['status'] != 0){
            return $this->error('当前状态不允许此操作.');
        }

        $upData['check_admin'] = AUID;
        $upData['check_time'] = time();
        Db::startTrans();//启动事务
        $res = $this->Model->where('as_id',$as_id)->update($upData);
        if ($res < 1){
            Db::rollback();// 回滚事务
            return $this->error('提交处理失败-1，请重试.');
        }

        $OrderModel = new OrderModel();
        $oupData['is_after_sale'] = 9;
        $oupData['update_time'] = time();
        //修改订单
        if ($upData['status'] == 2 && $asInfo['type'] == 'return_goods') {//通过时执行,退货
            $oupData['tuikuan_money'] = ['INC', $asInfo['return_money']];
            $oupData['is_dividend'] = 2;//重新计算佣金
        }
        $res = $OrderModel->where('order_id',$asInfo['order_id'])->update($oupData);
        if ($res < 1){
            Db::rollback();// 回滚事务
            return $this->error('提交处理失败-2，请重试.');
        }

        $OrderModel->cleanMemcache($asInfo['order_id']);
        //end
        if ($upData['status'] == 1){
            $ogupData['after_sale_num'] = ['DEC', $asInfo['goods_number']];
            $res = (new OrderGoodsModel)->where('rec_id', $asInfo['rec_id'])->update($ogupData);
            if ($res < 1){
                Db::rollback();// 回滚事务
                return $this->error('提交处理失败-3，请重试.');
            }
        }
        if ($upData['status'] == 2) {//通过售后才执行订单商品处理
            $ogupData['return_goods_number'] = ['INC', $asInfo['goods_number']];
            $res = (new OrderGoodsModel)->where('rec_id', $asInfo['rec_id'])->update($ogupData);
            if ($res < 1){
                Db::rollback();// 回滚事务
                return $this->error('提交处理失败-4，请重试.');
            }
        }
        Db::commit();// 提交事务
        if ($upData['status'] == 2 && $asInfo['type'] == 'return_goods') {//通过时执行,重新计算分佣
            $orderInfo = $OrderModel->where('order_id', $asInfo['order_id'])->find()->toArry();
            $OrderModel->runDistribution($orderInfo);
        }
        if ($upData['status'] > 0) {
            //模板消息通知
            $WeiXinMsgTplModel = new \app\weixin\model\WeiXinMsgTplModel();
            $WeiXinUsersModel = new \app\weixin\model\WeiXinUsersModel();
            if ($upData['status'] == 1) {//拒时执行
                $asInfo['send_scene'] = 'after_sale_fail_msg';//拒绝通知
            }elseif($upData['status'] == 2) {//通过时执行
                $asInfo['send_scene'] = 'after_sale_ok_msg';//通过通知
            }
            $wxInfo = $WeiXinUsersModel->where('user_id', $asInfo['user_id'])->field('wx_openid,wx_nickname')->find();
            $asInfo['openid'] = $wxInfo['wx_openid'];
            $asInfo['send_nick_name'] = $wxInfo['wx_nickname'];
            $WeiXinMsgTplModel->send($asInfo);//模板消息通知
        }

        $this->Model->_log($as_id, '后台审核',$this->Model->status[$upData['status']],'admin',AUID);
        return $this->success('处理成功.');
    }
    /*------------------------------------------------------ */
    //-- 售后收到退货商品确认
    /*------------------------------------------------------ */
    public function sign($isForce = false)
    {
        $as_id = input('as_id', 0, 'intval');
        $asInfo = $this->Model->find($as_id);
        if ($asInfo['status'] != 3){
            return $this->error('当前状态不允许此操作.');
        }
        if ($isForce == false && $asInfo['supplyer_id'] > 0){
            return $this->error('当前请求无法完成此操作.');
        }
        Db::startTrans();//启动事务
        $upData['status'] = 9;
        $upData['update_time'] = time();
        $res = $this->Model->where('as_id',$as_id)->update($upData);

        if ($res < 1){
            Db::rollback();// 回滚事务
            return $this->error('处理失败，请重试.');
        }
        if ($asInfo['return_money'] > 0) {
            $OrderModel = new OrderModel();
            $orderInfo = $OrderModel->info($asInfo['order_id']);
            if ($orderInfo['money_paid'] > 0) {
                if ($orderInfo['pay_code'] == 'balance' || $orderInfo['pay_code'] == 'offline') {
                    $inData['balance_money'] = $asInfo['return_money'];
                    $inData['change_type'] = 9;
                    $inData['by_id'] = $asInfo['as_id'];
                    $inData['change_desc'] = '售后退款到余额:' . $asInfo['return_money'];
                    $res = (new AccountModel)->change($inData, $asInfo['user_id']);
                    if ($res != true) {
                        Db::rollback();//回滚
                        return $this->error('退款到余额失败，请重试.');
                    }
                } else {//在线退款
                    $code = str_replace('/', '\\', "/payment/" . $orderInfo['pay_code'] . "/" . $orderInfo['pay_code']);
                    $payment = new $code();
                    $orderInfo['refund_amount'] = $asInfo['return_money'];
                    if ($orderInfo['pid'] > 0) {
                        $poWhere[] = ['order_id', '=', $orderInfo['pid']];
                        $poWhere[] = ['is_split', '=', 2];
                        $orderInfo['money_paid'] = $OrderModel->where($poWhere)->value('money_paid');
                        $orderInfo['money_paid'] = $orderInfo['money_paid'] * 1;
                    }
                    $res = $payment->refund($orderInfo);
                    if ($res !== true) {
                        Db::rollback();//回滚
                        return '请求退款接口失败：' . $res;
                    }
                }

            }
            if ($isForce == true) {
                $log = '强制执行-确定收到退货，并打款给用户';
            } else {
                $log = '确定收到退货，并打款给用户';
            }
        }elseif($asInfo['type'] == 'change_goods'){
            $log = '确定收到退回商品，线上售后成功，线下重发商品';
        }else{
            $log = '售后完成，无须退款';
        }
        Db::commit();// 提交事务
        //模板消息通知
        $WeiXinMsgTplModel = new \app\weixin\model\WeiXinMsgTplModel();
        $WeiXinUsersModel = new \app\weixin\model\WeiXinUsersModel();
        $asInfo['send_scene'] = 'after_sale_refund_msg';//售后退款通知
        $wxInfo = $WeiXinUsersModel->where('user_id', $asInfo['user_id'])->field('wx_openid,wx_nickname')->find();
        $asInfo['openid'] = $wxInfo['wx_openid'];
        $asInfo['send_nick_name'] = $wxInfo['wx_nickname'];
        $WeiXinMsgTplModel->send($asInfo);//模板消息通知
        $this->Model->_log($as_id, $log,$this->Model->status[9],'admin',AUID);
        return $this->success('处理成功.');
    }
    /*------------------------------------------------------ */
    //-- 售后收到退货商品确认
    /*------------------------------------------------------ */
    public function forceSign()
    {
        return $this->sign(true);
    }
}
