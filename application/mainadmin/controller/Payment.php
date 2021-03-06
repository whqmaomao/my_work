<?php
namespace app\mainadmin\controller;
use app\AdminController;
use app\mainadmin\model\PaymentModel;
use think\facade\Env;
/**
 * 支付列表
 * Class Index
 * @package app\store\controller
 */
class Payment extends AdminController
{
	
	/*------------------------------------------------------ */
	//-- 优先执行
	/*------------------------------------------------------ */
	public function initialize(){
        parent::initialize();
		$this->Model = new PaymentModel(); 
    }
	/*------------------------------------------------------ */
    //--首页
    /*------------------------------------------------------ */
    public function index()
    {
		$this->assign("_list", $this->Model->getRows());
        return $this->fetch('index');
    }
 	/*------------------------------------------------------ */
	//-- 信息页调用
	//-- $data array 自动读取对应的数据
	/*------------------------------------------------------ */
	public function asInfo($data){
		if (empty($data['pay_code']) == false){
            $file = Env::get('extend_path')."/payment/".$data['pay_code']."/config.php";
            $def_config = include $file;
			$data['def_config'] = $def_config['config'];
		}
		$data['pay_config'] = json_decode(urldecode($data['pay_config']),true);
        return $data;
	}
   /*------------------------------------------------------ */
	//-- 修改前调用
	/*------------------------------------------------------ */
	public function beforeEdit($row){
	    foreach ($row['pay_config'] as $key=>$pay_config){
	        if (is_array($pay_config) == false){
                $pay_config = trim($pay_config);
            }
            $row['pay_config'][$key] = $pay_config;
        }
		$row['pay_config'] = urlencode(json_encode($row['pay_config']));
		return $row;
	}
	/*------------------------------------------------------ */
	//-- 修改后调用
	/*------------------------------------------------------ */
	public function afterEdit($row){		
		$this->_Log($row['pay_id'],'修改支付配置');
		$this->Model->cleanMemcache();//清除缓存
		return $this->success('修改成功.',url('index'));
	}
	/*------------------------------------------------------ */
	//-- 快速修改后处理
	/*------------------------------------------------------ */
    public function afterAjax($id,$data){		
		$log = '快速修改支付：'.$data['pay_name'];
		if (isset($data['status'])){
			$log .= '状态：';
			$log .= ($data['status'] == 1)?'开启':'关闭';	
		}elseif (isset($data['is_buy_pay'])){
            $log .= '用于购买：';
            $log .= ($data['status'] == 1)?'开启':'关闭';
        }elseif (isset($data['status'])){
            $log .= '用于充值：';
            $log .= ($data['status'] == 1)?'开启':'关闭';
        }
		$this->Model->cleanMemcache();//清除缓存
		$this->_Log($id,$log);
		return true;		
	}
    /*------------------------------------------------------ */
    //-- 上传证书文件
    /*------------------------------------------------------ */
    public function uploadCert(){
        $file_type = end(explode('.',$_FILES['file']['name']));
        if (in_array($file_type,['pem']) == false){
            $result['code'] = 0;
            $result['msg'] = '格式不对，只支持 (pem格式)，请核实.';
            return $this->ajaxReturn($result);
        }
        $code = input('code','','trim');
        $dir ='../Data/cert/'.$code.'/';
        makeDir($dir);
        $file_name = $_FILES['file']['name'];
        move_uploaded_file($_FILES['file']['tmp_name'],$dir.$file_name);
        $result['code'] = 1;
        $result['filename'] = trim($dir.$file_name,'.');
        return $this->ajaxReturn($result);
    }
}
