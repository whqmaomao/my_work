<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: 流年 <liu21st@gmail.com>
// +----------------------------------------------------------------------

// 应用公共文件
function getLetterArr(){
	return ['A', 'B', 'C','D', 'E', 'F','G', 'H', 'I', 'J', 'K', 'L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
}

/**
 * [exportGoodsExcel 导出报表]
 * @param  array  $data            [导出的数据]
 * @param  array  $exportData      [显示的数据]
 * @param  array  $ColumnDimension [列宽]
 * @param  string $fileName        [文件名]
 * @return [type]                  [description]
 */
function exportExcel($data = array() , $exportData = array() , $ColumnDimension = array(),$fileName = '订单列表_',$fileType = "xlsx")
{
    // // 引入类库
    require'../extend/phpexcel/PHPExcel.php'; 
    // 文件名和文件类型
    $fileName = $fileName.date('YmdHis');
    $obj = new \PHPExcel();
    // 以下内容是excel文件的信息描述信息
    $obj->getProperties()->setCreator(''); //设置创建者
    $obj->getProperties()->setLastModifiedBy(''); //设置修改者
    $obj->getProperties()->setTitle(''); //设置标题
    $obj->getProperties()->setSubject(''); //设置主题
    $obj->getProperties()->setDescription(''); //设置描述
    $obj->getProperties()->setKeywords('');//设置关键词
    $obj->getProperties()->setCategory('');//设置类型
    // 设置当前sheet
    $obj->setActiveSheetIndex(0);
    // 设置当前sheet的名称
    $obj->getActiveSheet()->setTitle($fileName);
    $letter = getLetterArr();
    $list = [];
    $count = count($exportData);
    for ($i=0; $i < $count; $i++) { 
        if ($i < 26) {
            array_push($list,$letter[$i]);
        }else{
            array_push($list,'A'.$letter[$i%26]);
        }
    }
    // 设置第一列为纯文本
    $obj->getActiveSheet()->getStyle('A')->getNumberFormat()->setFormatCode(\PHPExcel_Style_NumberFormat::FORMAT_TEXT);
    $j = 0;
    foreach ($exportData as $name) {
        $obj->getActiveSheet()->setCellValue($list[$j] . '1', $name);
        $j ++;
    }

    // 填充第n(n>=2, n∈N*)行数据
    foreach ($data as $key => $value) {
        $z = 0;
        foreach ($exportData as $k => $name) {
            if (is_numeric($value[$k]) == true) {
                $obj->setActiveSheetIndex(0)->setCellValueExplicit($list[$z]. ($key + 2), $value[$k], \PHPExcel_Cell_DataType::TYPE_STRING);
            }else{
                $obj->getActiveSheet()->setCellValue($list[$z]. ($key + 2), $value[$k]);
            }

            $z ++;
        }

    }

    // 设置加粗和左对齐
    foreach ($list as $col) {
        // 设置第一行加粗
        $obj->getActiveSheet()->getStyle($col . '1')->getFont()->setBold(true);
        // 设置第1-n行，左对齐
        // for ($i = 1; $i <= $length + 1; $i++) {
        //     $obj->getActiveSheet()->getStyle($col . $i)->getAlignment()->setHorizontal(\PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
        // }
    }

    // 设置列宽
    foreach ($ColumnDimension as $indexs => $vo) {
        $obj->getActiveSheet()->getColumnDimension($indexs)->setWidth($vo);
    }
    

    // 导出
    ob_clean();
    if ($fileType == 'xls') {
        header('Content-Type: application/vnd.ms-excel');
        header('Content-Disposition: attachment;filename="' . $fileName . '.xls');
        header('Cache-Control: max-age=1');
        $objWriter = new \PHPExcel_Writer_Excel5($obj);
        $objWriter->save('php://output');
        exit;
    } elseif ($fileType == 'xlsx') {
        header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        header('Content-Disposition: attachment;filename="' . $fileName . '.xlsx');
        header('Cache-Control: max-age=1');
        $objWriter = \PHPExcel_IOFactory::createWriter($obj, 'Excel2007');
        $objWriter->save('php://output');
        exit;
    }

}
/**
 * 语言包定义
 * @param $cn_msg string 中文提示
 * @param $keys array 提示对应key值
 * @param $param array 替换参数
 * @return string
 */
function langMsg($cn_msg,$keys = [],$param = []){
    if (empty($keys) == true){//没有设置提示对应key值，直接返回中文
        return $cn_msg;
    }
    if (defined('LANG') == false || LANG == 'cn'){//未设置语言常量
        return $cn_msg.'-'.LANG;
    }

    $keys = explode('.',$keys);
    $langFile = dirname(__DIR__) . '/application/'.$keys[0].'/lang/'.LANG.'.php';
    if (is_file($langFile) == false){//语言包不存在
        return $cn_msg;
    }
    $lang = include($langFile);
    unset($keys[0]);
    foreach ($keys as $key){
        if (empty($lang[$key])){
            return $cn_msg;
        }
        $lang = $lang[$key];
    }
    if (empty($param)){
        return $lang;
    }
    $replace = [];
    foreach ($param as $key=>$val){
        $replace[] = '$'.($key+1);
    }
    return str_replace($replace,$param,$lang);
}
/**
 * 驼峰命名转下划线命名
 * @param $str
 * @return string
 */
function toUnderScore($str)
{
    $dstr = preg_replace_callback('/([A-Z]+)/', function ($matchs) {
        return '_' . strtolower($matchs[0]);
    }, $str);
    return trim(preg_replace('/_{2,}/', '_', $dstr), '_');
}

/**
 * @param $url 链接直址
 * @param array $arr 参数
 * @param bool $isNotHtml 是否带html结尾
 * @param bool $domain 是否补全域名
 * @param bool $replaceAdmin 是否过滤后台zpadmin.php路径
 * @return mixed
 */
function _url($url,$arr=[],$isNotHtml=true,$domain = false,$replaceAdminPath=false){

    if ($domain === '/'){
        $url = url($url,$arr,$isNotHtml,false);
    }else{
         $url = url($url,$arr,$isNotHtml,$domain);
    }
    if (empty($domain) == false || $replaceAdminPath == true){
        $url = str_replace($_SERVER['SCRIPT_NAME'],'',$url);
    }

	return str_replace(array('%E3%80%90','%E3%80%91','%5B%5B','%5D%5D','%5B','%5D'),array("'+","+'",'{{','}}','[',']'),$url);
}
/**
 * 获取当前页面完整URL地址，前台调用
 *
 */
function getUrl($val='',$type='',$var=array()) {
    if (strstr($val,'http:')) return $val;
    if($type == 'img'){
        $sys_protocal = isset($_SERVER['SERVER_PORT']) && $_SERVER['SERVER_PORT'] == '443' ? 'https://' : 'http://';
        return $sys_protocal.(isset($_SERVER['SERVER_NAME']) ? $_SERVER['SERVER_NAME'] : '').str_replace('./','',$val);
    }
    $var['share_token'] = $GLOBALS['userInfo']['token'];
    return url($val,$var,false,true);
}
/**
 * 后台生成密码hash值
 * @param $password
 * @return string
 */
function _hash($password)
{
    return md5(md5($password) . 'main_salt_zpTRx');
}

/**
 * 前台生成密码hash值
 * @param $password
 * @return string
 */
function f_hash($password)
{
    return md5('@by_'.md5(md5($password).'pwd@2019'));
}
//验证手机号码
function checkMobile($mobile = ''){
    $preg_mobile='/^1\d{10}$/ims';
    if(preg_match($preg_mobile,$mobile)){
        return true;
    }
    return false;
}
/*------------------------------------------------------ */
//-- 检查是否是身份证号
/*------------------------------------------------------ */
function isIdCard($number) {
    // 转化为大写，如出现x
    $number = strtoupper($number);
    //加权因子
    $wi = array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
    //校验码串
    $ai = array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
    //按顺序循环处理前17位
    $sigma = 0;
    for ($i = 0;$i < 17;$i++) {
        //提取前17位的其中一位，并将变量类型转为实数
        $b = (int) $number{$i};

        //提取相应的加权因子
        $w = $wi[$i];

        //把从身份证号码中提取的一位数字和加权因子相乘，并累加
        $sigma += $b * $w;
    }
    //计算序号
    $snumber = $sigma % 11;

    //按照序号从校验码串中提取相应的字符。
    $check_number = $ai[$snumber];

    if ($number{17} == $check_number) {
        return true;
    } else {
        return false;
    }
}
/*------------------------------------------------------ */
//-- 联系电话隐藏,156****312
/*------------------------------------------------------ */
function mobileSubstr($phone = '', $strlen = false)
{
    if (empty($phone) == true) return '无记录';
    if (is_numeric($phone) == false) return $phone;
    if (strlen($phone) <= 6) return $phone;
    $phone_back =  substr_replace($phone, "*****", strlen($phone)-8, 5);

    if ($strlen)   $phone_back .= ' ［长度：'.strlen($phone).'］';

    return $phone_back;
}
/*------------------------------------------------------ */
//-- 过滤掉emoji表情
/*------------------------------------------------------ */ 
function repEmoji($str){
    $str = preg_replace_callback( '/./u',function (array $match) {
                return strlen($match[0]) >= 4 ? '' : $match[0];
            },$str);
     return $str;
}
/*------------------------------------------------------ */
//-- 获取会员信息
/*------------------------------------------------------ */ 
function userInfo($user_id,$return=true,$field=''){
	static $userList;
	static $userModel;
	if ($user_id < 1) return $return == true ? '--' : [];
	if (!isset($userModel)){
		 $userModel = model('app\member\model\UsersModel');	
	}
	if (!isset($userList[$user_id])){
		$userList[$user_id] = $userModel->info($user_id);
	}
	if (empty($userList[$user_id])) return $return == true ? '--' : [];
	$info = $userList[$user_id];
	if ($return == true){
	    if (empty($field)){
            return $info['nick_name'];
        }else{
            return $info[$field];
        }
    }
	return $info;
}

/*------------------------------------------------------ */
//-- 格式化价格
//-- @access  public
//-- @param   float   $price  价格
//-- @param   int     $type   类型
//-- @param   int     $scale   保留小数位
//-- @return  string
/*------------------------------------------------------ */
function priceFormat($price,$show_yuan = false,$type=0,$scale = 2){
	switch ($type){
		case 0://不四舍五入，保留两位小数
            $price = bcdiv($price,1,$scale);
			break;
		case 1: // 四舍五入，保留两位小数
            $price = round($price,$scale);
			break;
		case 2: // 先四舍五入，不保留小数
			$price = round($price);
			break;
	}   

    if($show_yuan == false) return sprintf("%s", $price);
	else return sprintf("￥%s元", $price);
}
//价格拆分显示
function priceShow($price){
    $price = explode('.',$price);
    return '<span>￥</span><small>'.$price[0].'</small>.<span>'.$price[1].'</span>';
}
//价格以万位显示
function priceToW($price){
    if ($price > 10000){
        return sprintf("%.2f",$price / 10000).'万';
    }
    return $price;
}
/**
 * curl请求指定url
 * @param $url
 * @param array $data
 * @return mixed
 */
function curl($url, $data = [])
{
    // 处理get数据
    if (!empty($data)) {
        $url = $url . '?' . http_build_query($data);
    }
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_HEADER, false);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);//这个是重点。
    $result = curl_exec($curl);
    curl_close($curl);
    return $result;
}
/*------------------------------------------------------ */
//-- 模板自定义判断
//-- val 传入值
//-- dval  判断值
//-- rval 处理返回
//-- default 是否默认
/*------------------------------------------------------ */
function tplckval($val='',$dval='',$rval='',$default = false){
	if (empty($val) == true && $val !== 0){
		if (empty($val) == true && $default === true) return $rval;
		if (empty($dval) == true) return '';
	}

	if (is_array($dval)) return (in_array($val,$dval))?$rval:'';

	if ($val === $dval) return $rval;

	if (strstr($dval,'=')){
		$dval = explode('=',$dval);
		return ($val == $dval[1]) ? $rval : $default;
	}
	if (strstr($dval,'<>')){
		$dval = explode('<>',$dval);
		return ($val <> $dval[1]) ? $rval : $default;
	}
	if (strstr($dval,'>=')){
		$dval = explode('>=',$dval);
		return ($val >= $dval[1]) ? $rval : $default;
	}
	if (strstr($dval,'>')){
		$dval = explode('>',$dval);
		return ($val > $dval[1]) ? $rval : $default;
	}
	if (strstr($dval,'<=')){
		$dval = explode('<=',$dval);
		return ($val <= $dval[1]) ? $rval : $default;
	}
	if (strstr($dval,'<')){
		$dval = explode('<',$dval);
		return ($val < $dval[1]) ? $rval : $default;
	}

}
/*------------------------------------------------------ */
//-- 模板中调用，将GMT时间戳格式化为用户自定义时区日期
/*------------------------------------------------------ */
function dateTpl($time = '',$format = '',$return_false = false){    
	if ($format === true){ 
		$time = time();
		$format = 'Y-m-d H:i';
	}elseif (empty($time)){
		 return ($return_false == false) ? '没有记录' : '';
	}
	if (empty($format)){
		$format = 'Y-m-d H:i';
	}
    if ($return_false == true){
        return date($format, $time);
    }
	if (date('Y') == date('Y', $time)){
        $format = str_replace('Y-','',$format);
    }else{
        $format = 'Y-m-d';
    }
    return date($format, $time);
}
/*------------------------------------------------------ */
//-- 返回一个带子级别的数组
//--@Param $rows 数组源; 设置：必要;
//--@Param $parent_id 顶级pid; 设置：不需要;
//--@Param $leve 默认层级;设置; 不需要;
//--@Param $newrows 递归子类的id; 设置：不需要;
/*------------------------------------------------------ */
function returnRows($rows,$pid = 0,$level = 1){	
	static $newrows = array();
	if ($level == 1) $newrows = array();  
	$icon = array('│ ','├─ ','└─ ');
	$now_id = 0;
	foreach ($rows as $key=>$row){
		$_pid = isset($row['pid'])?$row['pid']:0;
		if ($pid != $_pid) continue;	
		if (isset($newrows[$row['id']])) continue;						
		$children = returnChildren($rows,$row['id']);
		$row['children'] = ($children) ? $row['id'].','.join(',',$children) : $row['id'];
		$row['level'] = $level;
		if ($level > 1){
			$now_icon = '';
			for($i=1;$i<$level;$i++){
				$now_icon .= ($i == $level-1) ? $icon[1] : $icon[0];
			}
			$row['icon'] = $now_icon;
		}else{
			$row['icon'] = '';	
		}
		
		$now_id = $row['id'];
		$newrows[$now_id] = $row;
		unset($rows[$key]);		
		$nc = count($newrows);
		if ($rows){
			 $newrows = returnRows($rows,$now_id,($level+1));
		}
		if (count($newrows) > $nc){
			$end_arr = end($newrows);
			if ($end_arr['icon']) $newrows[$end_arr['id']]['icon'] = str_replace($icon[1],$icon[2],$end_arr['icon']);
		}
	}
	if ($now_id > 0) $newrows[$now_id]['icon'] = str_replace($icon[1],$icon[2],$newrows[$now_id]['icon']);
	unset($rows);
	return $newrows;
}
function returnChildren(&$rows,$pid = 0){
	$newrows = array();
	foreach ($rows as $key=>$row){
        if(isset($row['pid']) == false) continue;
        if ($pid != $row['pid']) continue;
		$children = returnChildren($rows,$row['id']);
		if ($children) $row['id'] .= ','.join(',',$children);
		$newrows[] = $row['id'];
	}
	return $newrows;
}
/*------------------------------------------------------ */
//-- 返回一个带有缩进级别的数组
/*------------------------------------------------------ */
function returnRecArr(&$rows){
	$newrows = array();
	foreach ($rows as $key=>$row){
		$newrows[$row['pid']][$row['id']] = $row;
	}
	return $newrows;
}
/*------------------------------------------------------ */
//-- 将数组转换组下拉选项
//-- @param   array   $arr             所有的数组
//-- @param   int     $selected        选中项
//-- @param   boolean     $islimit     是否判断限制不可选
//-- @param   int     $level           返回等级
//-- @param   int     $kd_type           快递类型：0 快递100； 1 快递鸟
//-- @return  string
/*------------------------------------------------------ */
function arrToSel(&$rows = array(), $selected = 0, $islimit = false, $level = 0 ){
	$select = '';
	$selected = explode(',',$selected);
	if (empty($rows)){
	    return $select;
    }
	foreach ($rows AS $key=>$val){
		if (is_array($val) == false){
			$selectedArr = (in_array($key,$selected)) ? "selected='selected'" : '';
			$select .= '<option value="'.$key.'" '.$selectedArr.'>'.$val.'</option>';
			 continue;	
		}
		if ($level > 0 && $val['level'] > $level) continue;		
		$select .= '<option ';
		if ($islimit === true && $val['children'] != $val['id'] ){
			$val['id'] = '';
			$select .=  ' style="background:#999;" ';
		}
		
		if (isset($val['status']) && $val['status'] == 0){
			$select .=  ' style="color:#CCC;" ';
		}elseif (isset($val['is_sys']) && $val['is_sys'] == 1){
			$select .=  ' style="color:#ff0000;"  ';
		}
	    $text = htmlspecialchars(strip_tags($val['name']));
		if (empty($val['dict_val']) == false){
			$select .= ' value="'.$val['ext_val'].'"  ';
			$selval = $val['ext_val'];
		}else{
			$select .= ' value="'.$val['id'].'" ';
			$selval = $val['id'];
			
		}
		$select .= (in_array($selval,$selected)) ? "selected='selected'" : '';
		if (empty($val['children'])){
            $val['children'] = '';
        }
		$select .= ' data-text="'.$text.'"   data-children="' . $val['children'] . '"   label="'.$text.'" >';
		if (isset($val['icon'])) $select .= $val['icon'];
		$select .= $text;
		$select .= '</option>';
	}
	return $select;
}
/*------------------------------------------------------ */
//-- 判断是否json，是返回数组
/*------------------------------------------------------ */
function isJson($string) {
 $arr = json_decode($string,true);
 return (json_last_error() == JSON_ERROR_NONE) ? $arr : $string;
}
/*------------------------------------------------------ */
//-- 创建目录
/*------------------------------------------------------ */   
function makeDir($folder){
    $reval = false;
    if (!file_exists($folder)){
        /* 如果目录不存在则尝试创建该目录 */
        @umask(0);
        /* 将目录路径拆分成数组 */
        preg_match_all('/([^\/]*)\/?/i', $folder, $atmp);
        /* 如果第一个字符为/则当作物理路径处理 */
        $base = ($atmp[0][0] == '/') ? '/' : '';
        /* 遍历包含路径信息的数组 */
        foreach ($atmp[1] as $val){
            if ('' != $val){
                $base .= $val;
                if ('..' == $val || '.' == $val){
                    /* 如果目录为.或者..则直接补/继续下一个循环 */
                    $base .= '/';
                    continue;
                }
            }else{continue;}
            $base .= '/';
            if (!file_exists($base)){
                /* 尝试创建目录，如果创建失败则继续循环 */
                if (@mkdir(rtrim($base, '/'), 0777)){
                    @chmod($base, 0777);
                    $reval = true;
                }
            }
        }
    }else{
        /* 路径已经存在。返回该路径是不是一个目录 */
        $reval = is_dir($folder);
    }
    clearstatcache();
    return $reval;
}
/*------------------------------------------------------ 
 * 校验日期格式是否正确
 * @param string $date 日期
 * @param string $formats 需要检验的格式数组
 * @return boolean
------------------------------------------------------ */
function checkDateIsValid($date, $formats = array("Y-m-d H:i:s","Y-m-d H:i")){
    $unixTime = strtotime($date);
    if (!$unixTime) return false;  //strtotime转换不对，日期格式显然不对
	 //校验日期的有效性，只要满足其中一个格式就OK
	if (!is_array($formats)) $formats = explode(',',$formats);
    foreach ($formats as $format) {
    	if (date($format, $unixTime) == $date)  return true;
	}
    return false;
}
/*------------------------------------------------------ */
//-- 系统配置读取
/*------------------------------------------------------ */
function settings($key = ''){
	static $settings;
	if (!isset($settings)){
		 $settings = model('app\mainadmin\model\SettingsModel')->getRows();
	}
	if (empty($key) == false){
		return isJson($settings[$key]);		
	}
	return $settings;
}
/*------------------------------------------------------ */
//-- 生成指定长度的随机字符串(包含大写英文字母, 小写英文字母, 数字)
//-- @param int $length 需要生成的字符串的长度
//-- @return string 包含 大小写英文字母 和 数字 的随机字符串
/*------------------------------------------------------ */
function random_str($length,$isupper = false){
    //生成一个包含 大写英文字母, 小写英文字母, 数字 的数组
    $arr = $isupper ? array_merge(range('A','H'),range('J','M'),range('P','Y'),range(1,9)) : array_merge(range('A', 'Y'),range(1, 9), range('a', 'y'));
    $str = '';
    $arr_len = count($arr);
    for ($i = 0; $i < $length; $i++){
        $rand = mt_rand(0, $arr_len-1);
        $str.=$arr[$rand];
    }
    return $str;
}
/*------------------------------------------------------ */
//-- 时间转换计算
/*------------------------------------------------------ */
function timeTran($show_time) {  
    $dur = time() - $show_time;  
    if ($dur < 0) {  
        return '刚刚';  
    } 
	if ($dur < 60) {  
		return $dur . '秒前';  
	}
	if ($dur < 3600) {  
		return floor($dur / 60) . '分钟前';  
	} 
	if ($dur < 86400) {  
		return floor($dur / 3600) . '小时前';  
	} 
	if ($dur < 259200) {//3天内  
		return floor($dur / 86400) . '天前';  
	}
	return date("Y-m-d", $show_time); 
}
 /*------------------------------------------------------ */
// * 对银行卡号进行掩码处理
// * @param  string $bankCardNo 银行卡号
//* @return string             掩码后的银行卡号
/*------------------------------------------------------ */
function formatBankCardNo($bankCardNo){
	//截取银行卡号前4位
	$prefix = substr($bankCardNo,0,4);
	//截取银行卡号后4位
	$suffix = substr($bankCardNo,-4,4);
	$maskBankCardNo = $prefix." **** **** **** ".$suffix;
	return $maskBankCardNo;
}

/**
 * 获取url 中的各个参数  类似于 pay_code=alipay&bank_code=ICBC-DEBIT
 * @param type $str
 * @return type
 */
function parseUrlParam($str){
    $data = array();
    $str = explode('?',$str);
    $str = end($str);
    $parameter = explode('&',$str);
    foreach($parameter as $val){
        $tmp = explode('=',$val);
        $data[$tmp[0]] = $tmp[1];
    }
    return $data;
}
/**
 *   实现中文字串截取无乱码的方法
 */
function getSubstr($string, $start, $length) {
      if(mb_strlen($string,'utf-8')>$length){
          $str = mb_substr($string, $start, $length,'utf-8');
          return $str.'...';
      }else{
          return $string;
      }
}

/*------------------------------------------------------ */
// * 获取数组中的某一列
// * @param array $arr 数组
//* *@param string $key_name  列名
// @return array  返回那一列的数组
/*------------------------------------------------------ */
function getArrColumn($arr, $key_name)
{
    $arr2 = array();
    foreach ($arr as $key => $val) {
        $arr2[] = $val[$key_name];
    }
    return $arr2;
}
/*------------------------------------------------------ */
//-- 获取文件格式
//-- @param string $file 网络地址/base64/本地文件
/*------------------------------------------------------ */
function getFileExtend($file){
    if (substr($file,0,4) == 'http'){//网络图片
        $pathInfo = get_headers($file,true);
        $extend = strtolower($pathInfo['Content-Type']);
    }elseif (strstr($file,'base64,') == true) {//base64图片
        $extend = trim(substr($file,5,10),';');
        $file = base64_decode(str_replace('data:'.$extend.';base64,','',$file));
        $extend = strtolower($extend);
    }else {
        $extend = strtolower(end(explode('.', $file)));
    }
    if (strstr($extend,'image')){//识别为图片处理
        if ($extend == 'image/png'){
            $extend = 'png';
        }elseif ($extend == 'image/gif'){
            $extend = 'gif';
        }elseif ($extend == 'image/php'){
            return false;
        }else{
            $extend = 'jpg';
        }
    }
    if ($extend == 'jpeg'){
        $extend = 'jpg';
    }
    if (in_array($extend,['jpg','jpeg','png','gif','mp4']) == false){
        $extend = 'jpg';
    }
    return [$file,$extend];
}
/*------------------------------------------------------ */
//-- 保存base64图片
//-- @param string $base64_image_content base64
//-- @param string $file_path 保存图片路径
//-- @param string $file_path 图片名
/*------------------------------------------------------ */
function base64ToImage($base64_image_content,$file_path,$file_name){
    if (preg_match('/^(data:\s*image\/(\w+);base64,)/', $base64_image_content, $result)){
        if(!file_exists($file_path)){
            //检查是否有该文件夹，如果没有就创建，并给予最高权限
            makeDir($file_path);
        }
        if (file_put_contents($file_path.$file_name, base64_decode(str_replace($result[1], '', $base64_image_content)))){
            return true;
        }
    }
    return false;
}

/*------------------------------------------------------ */
//-- 保存网络图片到本地
//-- @param string $url 网络图片地址
//-- @return string $path 保存的路径及文件名 ./public/upload/headimg/s3f21sdf3s1ads.jpg
/*------------------------------------------------------ */
function downloadImage($url,$path){
    $ch=curl_init();
    $timeout=5;
    curl_setopt($ch,CURLOPT_URL,$url);
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
    curl_setopt($ch,CURLOPT_CONNECTTIMEOUT,$timeout);
    $img=curl_exec($ch);
    curl_close($ch);

    $fp2=@fopen($path,'a');
    fwrite($fp2,$img);
    fclose($fp2);
    unset($img,$url);

    return true;
}

/**
* 获取用户真实IP
*/
function get_client_ip($type = 0) {
    $type       =  $type ? 1 : 0;
    $ip         =   'unknown';
    if ($ip !== 'unknown') return $ip[$type];
    if(empty($_SERVER['HTTP_X_REAL_IP'])==false){//nginx 代理模式下，获取客户端真实 IP
        $ip=$_SERVER['HTTP_X_REAL_IP'];
    }elseif (isset($_SERVER['HTTP_CLIENT_IP'])) {//客户端的 ip
        $ip     =   $_SERVER['HTTP_CLIENT_IP'];
    }elseif (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {//浏览当前页面的用户计算机的网关
        $arr    =   explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
        $pos    =   array_search('unknown',$arr);
        if(false !== $pos) unset($arr[$pos]);
        $ip     =   trim($arr[0]);
    }elseif (isset($_SERVER['REMOTE_ADDR'])) {
        $ip     =   $_SERVER['REMOTE_ADDR'];//浏览当前页面的用户计算机的 ip 地址
    }else{
        $ip=$_SERVER['REMOTE_ADDR'];
    }
    // IP 地址合法验证
    $long = sprintf("%u",ip2long($ip));
    $ip   = $long ? array($ip, $long) : array('0.0.0.0', 0);
    return $ip[$type];
}

/**
* 过滤微信名里面的表情特殊符号
*/
function filterEmoji($str){
	$str = preg_replace('/[\x{1F600}-\x{1F64F}]/u', '', $str);
	$str = preg_replace('/[\x{1F300}-\x{1F5FF}]/u', '', $str);
	$str = preg_replace('/[\x{1F680}-\x{1F6FF}]/u', '', $str);
	$str = preg_replace('/[\x{2600}-\x{26FF}]/u', '', $str);
	$str = preg_replace('/[\x{2700}-\x{27BF}]/u', '', $str);
	$str = str_replace(array('"','\''), '', $str);
	$str = preg_replace_callback( '/./u',function (array $match) {
      		return strlen($match[0]) >= 4 ? '' : $match[0];
    	},$str);
	$str  = addslashes(trim($str));
 	return $str;
}

/**
 * 获取当前页面完整URL地址，前台调用
 *
 */
function getWxBackUrl() {
    $sys_protocal = isset($_SERVER['SERVER_PORT']) && $_SERVER['SERVER_PORT'] == '443' ? 'https://' : 'http://';
        $php_self = $_SERVER['PHP_SELF'] ? $_SERVER['PHP_SELF'] : $_SERVER['SCRIPT_NAME'];
        $path_info = isset($_SERVER['PATH_INFO']) ? $_SERVER['PATH_INFO'] : '';
        $relate_url = isset($_SERVER['REQUEST_URI']) ? $_SERVER['REQUEST_URI'] : $php_self.(isset($_SERVER['QUERY_STRING']) ? '?'.$_SERVER['QUERY_STRING'] : $path_info);
        return $sys_protocal.(isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : '').$relate_url;
}
/**
 * redis锁
 * $mkey string 键值
 * $second string 秒，锁定多少秒,-1时销毁
 * return bool
 */
function redisLook($mkey = '',$second = 5){
    $cache = \think\facade\Cache::init();
    $redis = $cache->handler();
    $mkey = config('cache.prefix').$mkey;
    if ($second == -1){
        return $redis->del($mkey);
    }
    $lock_time = $redis->setnx($mkey,time()+$second);
    if ($lock_time == false){
        $lock_time = $redis->get($mkey);
        if(time()>$lock_time){
            $redis->del($mkey);
            $lock_time = $redis->setnx($mkey,time()+$second);
            if ($lock_time == false) return false;
        }else{
            return false;
        }
    }
    return true;
}
/**
 * 异步执行
 * $rule string 路由规则 application/model/fun
 * $param array 其它参数
 */
function asynRun($rule,$param=[]){
    $cache = \think\facade\Cache::init();
    $redis = $cache->handler();
    $cachePrefix = config('cache.prefix');
    $redis->lPush($cachePrefix.$rule,json_encode($param));
    asynRuning($rule);
    return true;
}
function asynRuning($rule){
    $cachePrefix = config('cache.prefix');
    $res = redisLook($cachePrefix.$rule.'ARunLook');//获取锁，保证只会产生一个进程
    if ($res !== true){
        return true;
    }
    $param = [];
    $param['rule'] = $rule;
    $param['postsigntime'] = time();
    $query = isset($param)? http_build_query($param) : '';
    $sign = md5($query.config('config.apikey'));
    $query .= '&sign='.$sign;

    if (function_exists('popen')){//本地测试使用，服务器上此为禁用函数
        $url = getcwd().'/asynRun.php';
        $query = str_replace('&',' ',$query);
        ///Applications/MAMP/bin/php/php7.1.33/bin/php
        pclose(popen('php '.$url.' '.$query.' &','r'));
        //echo fread($pid,9500);
        return true;
    }elseif (function_exists('lzasyn')){//建议使用此方法，需加载lzasyn.so扩展
        $url = getcwd().'/asynRun.php';
        $query = str_replace('&',' ',$query);
        pclose(lzasyn($url.' '.$query.' &','r'));
        return true;
    }

    $url = config('config.host_path').'/asynRun.php';
    $urlinfo = parse_url($url);
    $host = $urlinfo['host'];
    $path = $urlinfo['path'];

    if (strstr($url,'https')){
        $host = 'ssl://'.$host;
        $port = 443;
    }else{
        $port = 80;
    }
    $errno = 0;
    $errstr = '';
    $timeout = 10;
    $fp = fsockopen($host, $port, $errno, $errstr, $timeout);
    $out = "POST ".$path." HTTP/1.1\r\n";
    $out .= "host:".$urlinfo['host']."\r\n";
    $out .= "content-length:".strlen($query)."\r\n";
    $out .= "content-type:application/x-www-form-urlencoded\r\n";
    $out .= "connection:close\r\n\r\n";
    $out .= $query;
    fputs($fp, $out);
    usleep(1000);
    fclose($fp);
}
/**
 * 是否小程序加载
 */
function isXcxWebView(){
    if (strpos($_SERVER['HTTP_USER_AGENT'], 'miniProgram')){
        return 1;
    }
    return 0;
}
/**
 * 计算剩余时间，只显示分钟和秒
 * $limitTime int 限制时间
 */
function lastLimitTime($limitTime){
    $lastTime = $limitTime - time();
    if ($lastTime > 60){
        return intval($lastTime / 60).'分';
    }
    return $lastTime.'秒';
}
/**
 * 生成前端api登陆token最大有效期7天，超出时长无效
 */
function getAppToken(){
    return base64_encode(authcode(time(),config('config.apikey'),'ENCODE',7 * 86400));
}
/**
 * 根据token生成对应的redisKEy值
 * $limitTime int 限制时间
 */
function getAppTokenKey($token){
    $appsessionid = request()->header('appsessionid');
    return 'applogin_'.substr($appsessionid,-4).$token;
}
/**
 * 复制文件
 * $file string 原文件
 * $newPath string 新文件路径
 */
function copyFile($file,$newPath){
    if(file_exists('.'.$file)==false){
        return false;
    }
    makeDir($newPath);//创建文件夹
    $extend = getFileExtend($file);
    $newFile = $newPath.random_str(15).rand(10,99).'.'.$extend[1];
    copy('.'.$file,$newFile); //拷贝到新目录
    return trim($newFile,'.');
}


//函数authcode($string,  $key, $operation, $expiry)中的$string：字符串，明文或密文；$operation：DECODE表示解密，其它表示加密；$key：密匙；$expiry：密文有效期。
function authcode($string,  $key = '',$operation = 'DECODE', $expiry = 0) {
    // 动态密匙长度，相同的明文会生成不同密文就是依靠动态密匙
    $ckey_length = 4;
    // 密匙
    $key = md5($key);
    // 密匙a会参与加解密
    $keya = md5(substr($key, 0, 16));
    // 密匙b会用来做数据完整性验证
    $keyb = md5(substr($key, 16, 16));
    // 密匙c用于变化生成的密文
    $keyc = $ckey_length ? ($operation == 'DECODE' ? substr($string, 0, $ckey_length): substr(md5(microtime()), -$ckey_length)) : '';
    // 参与运算的密匙
    $cryptkey = $keya.md5($keya.$keyc);
    $key_length = strlen($cryptkey);
    // 明文，前10位用来保存时间戳，解密时验证数据有效性，10到26位用来保存$keyb(密匙b)，
    //解密时会通过这个密匙验证数据完整性
    // 如果是解码的话，会从第$ckey_length位开始，因为密文前$ckey_length位保存 动态密匙，以保证解密正确
    $string = $operation == 'DECODE' ? base64_decode(substr($string, $ckey_length)) :  sprintf('%010d', $expiry ? $expiry + time() : 0).substr(md5($string.$keyb), 0, 16).$string;
    $string_length = strlen($string);
    $result = '';
    $box = range(0, 255);
    $rndkey = array();
    // 产生密匙簿
    for($i = 0; $i <= 255; $i++) {
        $rndkey[$i] = ord($cryptkey[$i % $key_length]);
    }
    // 用固定的算法，打乱密匙簿，增加随机性，好像很复杂，实际上对并不会增加密文的强度
    for($j = $i = 0; $i < 256; $i++) {
        $j = ($j + $box[$i] + $rndkey[$i]) % 256;
        $tmp = $box[$i];
        $box[$i] = $box[$j];
        $box[$j] = $tmp;
    }
    // 核心加解密部分
    for($a = $j = $i = 0; $i < $string_length; $i++) {
        $a = ($a + 1) % 256;
        $j = ($j + $box[$a]) % 256;
        $tmp = $box[$a];
        $box[$a] = $box[$j];
        $box[$j] = $tmp;
        // 从密匙簿得出密匙进行异或，再转成字符
        $result .= chr(ord($string[$i]) ^ ($box[($box[$a] + $box[$j]) % 256]));
    }
    if($operation == 'DECODE') {
        // 验证数据有效性，请看未加密明文的格式
        if((substr($result, 0, 10) == 0 || substr($result, 0, 10) - time() > 0) &&  substr($result, 10, 16) == substr(md5(substr($result, 26).$keyb), 0, 16)) {
            return substr($result, 26);
        } else {
            return '';
        }
    } else {
        // 把动态密匙保存在密文里，这也是为什么同样的明文，生产不同密文后能解密的原因
        // 因为加密后的密文可能是一些特殊字符，复制过程可能会丢失，所以用base64编码
        return $keyc.str_replace('=', '', base64_encode($result));
    }
}


/**
 * 获取域名，主要解决新增的异步处理lzasyn方法，请求时没有$_SERVER['SERVER_NAME']，导致产生无必要的错误日志
 * $ishttp bool 是否带上http
 * return string
 */
function getServerName($ishttp = true){
    $SERVER_NAME = '';
    if (empty($_SERVER['SERVER_NAME']) == false){
        if ($ishttp == true){
            $SERVER_NAME = isset($_SERVER['SERVER_PORT']) && $_SERVER['SERVER_PORT'] == '443' ? 'https://'.$_SERVER['SERVER_NAME'] : 'http://'.$_SERVER['SERVER_NAME'];
        }else{
            $SERVER_NAME = $_SERVER['SERVER_NAME'];
        }
    }
    return $SERVER_NAME;
}

//清空文件夹函数和清空文件夹后删除空文件夹函数的处理
function deldir($path){
    //如果是目录则继续
    if(is_dir($path)){
        //扫描一个文件夹内的所有文件夹和文件并返回数组
        $p = scandir($path);
        foreach($p as $val){
            //排除目录中的.和..
            if($val !="." && $val !=".."){
                //如果是目录则递归子目录，继续操作
                if(is_dir($path.$val)){
                    ////子目录中操作删除文件夹和文件
                    deldir($path.$val.'/');
                }else{
                    unlink($path.$val);
                }
            }
        }
        rmdir($path);
    }
}
//htmlToPdf
function htmlToPdf($html = '',$title = "标题",$fileName = "",$seal = '',$seal_x = 0,$seal_y = 0,$showType= 'F'){
    //PDF输出的方式。I，在浏览器中打开；D，以文件形式下载；F，保存到服务器中；S，以字符串形式输出；E：以邮件的附件输出。
    $pdf=new \TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);
    // 设置打印模式
    //设置文件信息，头部的信息设置
    $pdf->SetCreator(PDF_CREATOR);
    $pdf->SetAuthor("");
    $pdf->SetTitle($title);
    $pdf->SetSubject('');
    $pdf->SetKeywords('');//设置关键字
    // 是否显示页眉
    $pdf->setPrintHeader(false);
    // 设置页眉显示的内容
    $pdf->SetHeaderData('logo.png', 60, '', '', array(0,64,255), array(0,64,128));
    // 设置页眉字体
    $pdf->setHeaderFont(Array('deja2vusans', '', '12'));
    // 页眉距离顶部的距离
    $pdf->SetHeaderMargin('5');
    // 是否显示页脚
    $pdf->setPrintFooter(true);
    // 设置页脚显示的内容
    $pdf->setFooterData(array(0,64,0), array(0,64,128));
    // 设置页脚的字体
    $pdf->setFooterFont(Array('dejavusans', '', '10'));
    // 设置页脚距离底部的距离
    $pdf->SetFooterMargin('10');
    // 设置默认等宽字体
    $pdf->SetDefaultMonospacedFont(PDF_FONT_MONOSPACED);
    // 设置行高
    $pdf->setCellHeightRatio(1);
    // 设置左、上、右的间距
    $pdf->SetMargins('10', '0', '10');
    // 设置是否自动分页 距离底部多少距离时分页
    $pdf->SetAutoPageBreak(TRUE, '15');
    // 设置图像比例因子
    $pdf->setImageScale(PDF_IMAGE_SCALE_RATIO);
    $pdf->setFontSubsetting(true);
    $pdf->AddPage("A4","Landscape",true,true);
    // 设置字体
    $pdf->SetFont('stsongstdlight', '', 14, '', true);
    $pdf->writeHTML($html);//HTML生成PDF
    //$pdf->writeHTMLCell(0, 0, '', '', $html, 0, 1, 0, true, '', true);
    ob_end_clean();
    ob_clean();
    $path = $_SERVER['DOCUMENT_ROOT'].'upload/pdf/';
    //判断保存目录是否存在，不存在则进行创建
    makeDir($path);
    //$pdf->setPage(5);
    if (empty($seal) == false){
        $seal = trim($seal,'/');
        $pdf->Image($seal, $seal_x, $seal_y, 50, '', '', '', '', false, 300);
    }
    $pdf->SetProtection(array('modify'));
    $pdf->Output($path."{$fileName}.pdf", $showType);
}
