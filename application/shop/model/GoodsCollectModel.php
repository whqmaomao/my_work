<?php
namespace app\shop\model;
use app\BaseModel;
use think\facade\Cache;

//*------------------------------------------------------ */
//-- εεζΆθ
/*------------------------------------------------------ */
class GoodsCollectModel extends BaseModel
{
	protected $table = 'shop_goods_collect';
	public  $pk = 'collect_id';
	
}
