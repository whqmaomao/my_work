(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesA-fightgroup-info"],{"0335":function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={uIcon:i("c688").default,uGrid:i("6ab1").default,uGridItem:i("de78").default,uParse:i("f52e").default},s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"page-body",class:[t.app.setCStyle()]},[i("v-uni-view",{staticClass:"carousel"},[i("v-uni-swiper",{attrs:{"indicator-dots":!0,circular:"true",duration:"400"}},t._l(t.imgList,(function(e,a){return i("v-uni-swiper-item",{key:a,staticClass:"swiper-item"},[i("v-uni-view",{staticClass:"image-wrapper"},[i("v-uni-image",{staticClass:"loaded",attrs:{src:t.baseUrl+e.goods_img,mode:"aspectFill"}})],1)],1)})),1)],1),i("v-uni-view",{staticClass:"introduce-section"},[i("v-uni-view",{staticClass:"smll mb20"},[i("v-uni-view",{staticClass:"price-box base-color flex_bd"},[i("v-uni-text",{staticClass:"price-tip fs28"},[t._v("¥")]),i("v-uni-text",{staticClass:"price ff fs52"},[t._v(t._s(t.selectFGoods.show_price))]),1==t.selectGoods.is_spec?i("v-uni-text",{staticClass:"ml10 fs32 font-w600 color-f6"},[t._v(t._s(t.app.langReplace("起")))]):t._e(),i("v-uni-text",{staticClass:"bg-base color-ff plr10 fs22 ml10"},[t._v(t._s(t.app.langReplace("拼团价")))])],1),t.selectFGoods.buy_goods_num>0?i("v-uni-view",{staticClass:"fs22"},[t._v(t._s(t.app.langReplace("已拼"))+":"+t._s(t.selectFGoods.buy_goods_num)+t._s(t.app.langReplace("件")))]):t._e()],1),i("v-uni-text",{staticClass:"title"},[i("v-uni-text",{staticClass:"font-w700 color-f6"},[t._v("【"+t._s(t.selectFGoods.success_num)+"人团】")]),t._v(t._s(t.selectGoods.goods_name))],1),t.selectFGoods.share_desc?i("v-uni-view",{staticClass:"fs28 color-99"},[t._v(t._s(t.selectFGoods.share_desc))]):t._e()],1),i("v-uni-view",{staticClass:"bg-white mt20 p20 fs flex fs30"},[i("v-uni-view",{staticClass:"flex_bd"},[0==t.selectFGoods.fg_status?i("v-uni-text",[t._v(t._s(t.app.langReplace("距开始"))+"："+t._s(t.liveCountdown[0]))]):1==t.selectFGoods.fg_status?i("v-uni-text",{staticClass:"color-red"},[t._v(t._s(t.app.langReplace("距结束"))+"："+t._s(t.liveCountdown[0]))]):9==t.selectFGoods.fg_status?i("v-uni-text",[t._v(t._s(t.app.langReplace("已结束")))]):t._e()],1),i("v-uni-view",{staticClass:"fr color-99 fs28",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggletipUp.apply(void 0,arguments)}}},[t._v(t._s(t.app.langReplace("参团规则"))),i("u-icon",{attrs:{name:"arrow-right"}})],1)],1),t.fgingListArr.length>0?i("v-uni-view",{staticClass:"bg-white mt20 p20"},[i("v-uni-view",{staticClass:"smll mb20"},[i("v-uni-view",{staticClass:"flex_bd fs30 font-w600"},[t._v(t._s(t.app.langReplace("正在拼单")))]),i("v-uni-view",{staticClass:"color-99 fs28",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeFgingBox.apply(void 0,arguments)}}},[t._v(t._s(t.app.langReplace("查看全部"))),i("u-icon",{attrs:{name:"arrow-right"}})],1)],1),i("v-uni-view",{staticStyle:{height:"180rpx",overflow:"hidden"}},[i("v-uni-swiper",{attrs:{autoplay:"true",circular:"true",interval:5e3,vertical:"true","disable-touch":"true"}},t._l(t.fgingListArr,(function(e,a){return i("v-uni-swiper-item",{key:a},t._l(e,(function(e,a){return i("v-uni-view",{key:a,staticClass:"flex mt10 fs28 smll"},[i("v-uni-view",{staticClass:"flex_bd"},[i("v-uni-view",{staticClass:"smll"},[i("v-uni-view",{staticClass:"fgUserImg"},[i("v-uni-image",{staticClass:"w100",attrs:{src:e.order[0].headimgurl?t.baseUrl+e.order[0].headimgurl:"/static/public/images/headimgurl.jpg",mode:"widthFix"}})],1),i("v-uni-text",{staticClass:"flex_bd ml20"},[t._v(t._s(e.order[0].nick_name))]),i("v-uni-view",{staticClass:"mr10 color-99"},[t._v(t._s(t.app.langReplace("还差"))+"："),i("v-uni-text",{staticClass:"base-color mr10"},[t._v(t._s(e.last_num))])],1)],1)],1),1==t.selectFGoods.fg_status?i("v-uni-view",{staticClass:"p10 plr20 color-ff bg-base br10",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toggleSpec("fgbuy",e.gid)}}},[t._v(t._s(t.app.langReplace("去拼单")))]):0==t.selectFGoods.fg_status?i("v-uni-view",{staticClass:"p10 plr20 color-ff bg-gray br10"},[t._v(t._s(t.app.langReplace("待开团")))]):i("v-uni-view",{staticClass:"p10 plr20 color-ff bg-gray br10"},[t._v(t._s(t.app.langReplace("已结束")))])],1)})),1)})),1)],1)],1):t._e(),i("v-uni-view",{attrs:{id:"comment_box"}},[1==t.selectGoods.shop_goods_comment?i("v-uni-view",{staticClass:"comment_box mt20"},[i("v-uni-view",{staticClass:"title smll"},[i("v-uni-view",{staticClass:"flex_bd"},[t._v(t._s(t.app.langReplace("用户评论"))),i("v-uni-text",{staticClass:"num"},[t._v("("+t._s(t.comment.count)+")")])],1),i("v-uni-view",{staticClass:"more",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.app.goPage("/pages/shop/comment/index?goods_id="+t.goods_id)}}},[t._v(t._s(t.app.langReplace("更多"))),i("u-icon",{attrs:{name:"arrow-right"}})],1)],1),!0===t.comment.loaded&&0===t.comment.list.length?i("v-uni-view",{staticClass:"empty-box"}):t._e(),t._l(t.comment.list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"list mt20"},[i("v-uni-view",{staticClass:"tit smll"},[i("v-uni-view",{staticClass:"image "},[i("v-uni-image",{attrs:{src:t.baseUrl+e.headimgurl}})],1),i("v-uni-view",{staticClass:"flex_bd"},[t._v(t._s(e.user_name))]),i("v-uni-view",{staticClass:"time"},[t._v(t._s(e._time))])],1),i("v-uni-view",{staticClass:"content"},[t._v(t._s(e.content))]),i("v-uni-view",{staticClass:"images"},[i("u-grid",{staticClass:"u_grid",attrs:{col:4,border:!1}},t._l(e.imgs,(function(a,s){return i("u-grid-item",{key:s,on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.app.showImg(e.imgs,s,t.config.baseUrl)}}},[i("v-uni-image",{attrs:{src:t.baseUrl+a}})],1)})),1)],1)],1)}))],2):t._e()],1),i("v-uni-view",{staticClass:"detail_desc mt20",attrs:{id:"detail_desc"}},[i("v-uni-view",{staticClass:"title "},[i("v-uni-view",[t._v(t._s(t.app.langReplace("详情")))])],1),2==t.selectGoods.video_position&&""!=t.selectGoods.video_url?i("v-uni-view",[0==t.videoPaly?i("v-uni-view",{staticClass:"video_cover",staticStyle:{"min-height":"500rpx"}},[i("v-uni-image",{staticClass:"bg",staticStyle:{height:"100%",width:"100%"},attrs:{src:t.baseUrl+t.selectGoods.video_cover}}),i("v-uni-image",{staticClass:"play",attrs:{src:"/static/public/images/video_icon/video_play.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.startplay.apply(void 0,arguments)}}})],1):i("v-uni-video",{staticStyle:{width:"100%"},attrs:{"enable-progress-gesture":!1,autoplay:"true",muted:t.sound,src:t.baseUrl+t.selectGoods.video_url},on:{pause:function(e){arguments[0]=e=t.$handleEvent(e),t.videoPaly=!1},ended:function(e){arguments[0]=e=t.$handleEvent(e),t.videoPaly=!1}}},[i("v-uni-cover-image",{staticClass:"voice",attrs:{src:t.sound?t.mute:t.voice},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changevoice.apply(void 0,arguments)}}})],1)],1):t._e(),i("u-parse",{attrs:{content:t.desc,imageProp:{mode:"widthFix"},noData:""},on:{navigate:function(e){arguments[0]=e=t.$handleEvent(e),t.goUrl.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"page-bottom flex"},[i("v-uni-view",{staticClass:"p-b-btn ",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.app.goPage("/pages/shop/index/index")}}},[i("u-icon",{attrs:{name:"home",size:"46",color:"#000"}}),i("v-uni-text",[t._v(t._s(t.app.langReplace("首页")))])],1),i("v-uni-view",{staticClass:"p-b-btn relative",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.app.goPage("/pages/shop/flow/cart")}}},[i("u-icon",{attrs:{name:"shopping-cart",size:"46",color:"#000"}}),i("v-uni-text",[t._v(t._s(t.app.langReplace("购物车")))]),i("v-uni-view",{staticClass:"cartNum bg-base"},[t._v(t._s(t.cartNum))])],1),i("v-uni-view",{staticClass:"p-b-btn ",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.collect.apply(void 0,arguments)}}},[1==t.selectGoods.is_collect?i("u-icon",{staticClass:"base-color",attrs:{name:"heart-fill",size:"46"}}):i("u-icon",{attrs:{name:"heart",size:"46",color:"#000"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.collect.apply(void 0,arguments)}}}),i("v-uni-text",[t._v(t._s(t.app.langReplace("收藏")))])],1),i("v-uni-view",{staticClass:" fg_btn_group flex_bd fs32 flex"},[1==t.selectGoods.is_alone_sale?i("v-uni-view",{staticClass:" action_btn no-border block bg-light ",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleSpec("onbuycart")}}},[t._v("￥"+t._s(t.selectGoods.min_price)),i("v-uni-view",[t._v(t._s(t.app.langReplace("单独购买")))])],1):t._e(),i("v-uni-view",{staticClass:" action_btn flex_bd no-border block bg-base",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleSpec("fgbuy",t.d_join_id)}}},[t._v("￥"+t._s(t.selectFGoods.show_price)),0==t.d_join_id?i("v-uni-view",[t._v(t._s(t.app.langReplace("发起拼单")))]):i("v-uni-view",[t._v(t._s(t.app.langReplace("参与拼单")))])],1)],1)],1),i("goodsSpec",{attrs:{specClass:t.specClass,specSelected:t.specSelected,selectGoods:t.selectGoods,selectGoodsPrice:t.selectGoodsPrice,selectGoodSmarketPrice:t.selectGoodSmarketPrice,selectGoodsNumber:t.selectGoodsNumber,selectGoodsImg:t.selectGoodsImg,specList:t.specList,specChildList:t.specChildList,selectSkuId:t.selectSkuId,byType:t.byType,fg_id:t.fg_id,join_id:t.join_id},on:{selectSpec:function(e){arguments[0]=e=t.$handleEvent(e),t.selectSpec.apply(void 0,arguments)},toggleSpec:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleSpec.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"popup",class:t.tipUpClass,on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.stopPrevent.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggletipUp.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"mask"}),i("v-uni-view",{staticClass:"layer attr-content",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.stopPrevent.apply(void 0,arguments)}}},[i("u-icon",{staticClass:"close",attrs:{name:"close",size:"28"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggletipUp.apply(void 0,arguments)}}}),i("v-uni-text",{staticClass:"fs36 font-w700"},[t._v(t._s(t.app.langReplace("参团规则")))]),i("v-uni-view",{staticClass:"h200 mt20 fw28 color-66"},[t._v("1、"+t._s(t.app.langReplace("如规定时间内团内人数不足，则订单取消，支付款原路返还")))])],1)],1),i("v-uni-view",{staticClass:"fgingbox",class:t.fgingboxClass,on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.stopPrevent.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content"},[i("u-icon",{staticClass:"close",attrs:{name:"close",size:"26"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeFgingBox.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"title"},[t._v(t._s(t.app.langReplace("可参与的拼单")))]),i("v-uni-view",{staticClass:"fglist",on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.stopPrevent.apply(void 0,arguments)}}},[t._l(t.fgingList,(function(e,a){return a<10?i("v-uni-view",{key:a,staticClass:"flex mt10 fs28 smll"},[i("v-uni-view",{staticClass:"flex_bd"},[i("v-uni-view",{staticClass:"smll"},[i("v-uni-view",{staticClass:"fgUserImg"},[i("v-uni-image",{staticClass:"w100",attrs:{src:e.order[0].headimgurl?t.baseUrl+e.order[0].headimgurl:"/static/public/images/headimgurl.jpg",mode:"widthFix"}})],1),i("v-uni-text",{staticClass:"flex_bd ml20"},[t._v(t._s(e.order[0].nick_name))]),i("v-uni-view",{staticClass:"mr10 color-99"},[t._v(t._s(t.app.langReplace("还差"))+"："),i("v-uni-text",{staticClass:"base-color"},[t._v(t._s(e.last_num))])],1)],1)],1),i("v-uni-view",{staticClass:"p10 plr20 color-ff bg-base br10",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toggleSpec("fgbuy",e.gid)}}},[t._v(t._s(t.app.langReplace("去拼单")))])],1):t._e()})),i("v-uni-view",{staticClass:"text-center color-cc fs28 mt20 hide"},[t._v("仅显示10个可参与的拼单")])],2)],1)],1)],1)},o=[]},"06c5":function(t,e,i){"use strict";i("a630"),i("fb6a"),i("d3b7"),i("25f0"),i("3ca3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var a=s(i("6b75"));function s(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(t){if("string"===typeof t)return(0,a.default)(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?(0,a.default)(t,e):void 0}}},"17bd":function(t,e,i){"use strict";var a=i("2898"),s=i.n(a);s.a},2898:function(t,e,i){var a=i("957a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("39249817",a,!0,{sourceMap:!1,shadowMode:!1})},5233:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-grid",class:{"u-border-top u-border-left":t.border},style:[t.gridStyle]},[t._t("default")],2)},o=[]},"5f37":function(t,e,i){"use strict";i.r(e);var a=i("f094"),s=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=s.a},"6ab1":function(t,e,i){"use strict";i.r(e);var a=i("5233"),s=i("5f37");for(var o in s)"default"!==o&&function(t){i.d(e,t,(function(){return s[t]}))}(o);i("9b9a");var n,r=i("f0c5"),c=Object(r["a"])(s["default"],a["b"],a["c"],!1,null,"1bbe4ec0",null,!1,a["a"],n);e["default"]=c.exports},"6b75":function(t,e,i){"use strict";function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,a=new Array(e);i<e;i++)a[i]=t[i];return a}Object.defineProperty(e,"__esModule",{value:!0}),e.default=a},"82d9":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/* 边框颜色 */\r\n/* 图片加载中颜色 */\r\n/* 行为相关颜色 */\r\n/*文字颜色*/.u-grid-item[data-v-af8b2ed2]{-webkit-box-sizing:border-box;box-sizing:border-box;background:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;position:relative;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.u-grid-item-hover[data-v-af8b2ed2]{background:#f7f7f7!important}.u-grid-marker-box[data-v-af8b2ed2]{position:absolute;display:inline-block;line-height:0}.u-grid-marker-wrap[data-v-af8b2ed2]{position:absolute}.u-grid-item-box[data-v-af8b2ed2]{padding:%?30?% 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1;width:100%;height:100%}',""]),t.exports=e},"957a":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/* 边框颜色 */\r\n/* 图片加载中颜色 */\r\n/* 行为相关颜色 */\r\n/*文字颜色*/uni-page-body[data-v-0f149b5a]{background:#f8f8f8;padding-bottom:%?160?%}.navigation[data-v-0f149b5a]{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:44px;position:fixed;top:%?0?%;\r\ntop:%?80?%;\r\nright:0;z-index:999;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;opacity:0}.navigation .nav-tab[data-v-0f149b5a]{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;font-size:%?32?%;color:#999;background:#fff}.navigation .nav-tab .tab-item[data-v-0f149b5a]{position:relative;line-height:%?90?%}.navigation .nav-tab .current[data-v-0f149b5a]{font-weight:700;color:#333}.navigation .nav-tab .current[data-v-0f149b5a]::before{content:" ";position:absolute;bottom:0;left:50%;width:%?30?%;margin-left:%?-15?%;border-bottom:%?6?% solid}.carousel[data-v-0f149b5a]{height:%?750?%}.carousel uni-swiper[data-v-0f149b5a]{height:100%}.carousel .image-wrapper[data-v-0f149b5a]{width:100%;height:100%}.carousel .swiper-item[data-v-0f149b5a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-align-content:center;align-content:center;height:%?750?%;overflow:hidden}.carousel .swiper-item uni-image[data-v-0f149b5a]{width:100%;height:100%}.prom[data-v-0f149b5a]{height:%?114?%;background-color:#ffe6ea}.prom .price-box[data-v-0f149b5a]{width:%?400?%;height:100%;padding-left:%?20?%;background:-webkit-linear-gradient(355deg,#fe385d,#fe5f80);background:linear-gradient(-265deg,#fe385d,#fe5f80);-webkit-box-shadow:%?-2?% %?0?% %?10?% %?0?% rgba(255,247,247,.38);box-shadow:%?-2?% %?0?% %?10?% %?0?% rgba(255,247,247,.38)}.prom .price-box-radius[data-v-0f149b5a]{border-top:%?110?% solid transparent;border-left:%?60?% solid #fe5f80;border-bottom:%?110?% solid transparent}\r\n/* 标题简介 */.introduce-section[data-v-0f149b5a]{background:#fff;padding:%?20?% %?30?%;position:relative}.introduce-section .title[data-v-0f149b5a]{font-size:%?30?%;color:#333;line-height:%?40?%;padding-right:%?20?%}.introduce-section .price-box[data-v-0f149b5a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:baseline;-webkit-align-items:baseline;align-items:baseline;height:%?64?%;padding:%?10?% 0;font-size:%?30?%}.introduce-section .price-box .price[data-v-0f149b5a]{margin-left:%?5?%;font-size:%?40?%}.introduce-section .m-price[data-v-0f149b5a]{color:#999;text-decoration:line-through}.introduce-section .bot-row[data-v-0f149b5a]{margin-top:%?10?%;font-size:%?26?%;color:#999;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.introduce-section .bot-row uni-text[data-v-0f149b5a]{margin-left:%?5?%}.sku_select[data-v-0f149b5a]{margin-top:%?20?%;background:#fff}.sku_select .c-row[data-v-0f149b5a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?20?%;position:relative;font-weight:700}.sku_select .tit[data-v-0f149b5a]{font-size:%?30?%}.sku_select .con[data-v-0f149b5a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-left:%?40?%;color:#999}.sku_select .con .selected-text[data-v-0f149b5a]{margin-right:%?10?%}\r\n/* 评论 */.comment_box[data-v-0f149b5a]{background-color:#fff;padding:%?0?% %?20?%}.comment_box .title[data-v-0f149b5a]{padding:%?30?% %?0?%;font-weight:500;font-size:%?32?%;border-bottom:%?1?% solid #efefef}.comment_box .title .num[data-v-0f149b5a]{color:#999}.comment_box .title .more[data-v-0f149b5a]{font-size:%?28?%;font-weight:400;color:#999}.comment_box .list .tit[data-v-0f149b5a]{font-size:%?28?%;color:#999}.comment_box .list .tit .image[data-v-0f149b5a]{width:%?80?%;height:%?80?%;border:%?1?% solid #f8f8f8;border-radius:50%;overflow:hidden;margin-right:%?10?%}.comment_box .list .tit .image uni-image[data-v-0f149b5a]{width:100%;height:100%;border-radius:50%}.comment_box .list .content[data-v-0f149b5a]{padding-top:%?10?%;color:#333;font-size:%?28?%}.comment_box .list .images[data-v-0f149b5a]{min-height:%?30?%}.comment_box .list .images .u_grid .u-grid-item[data-v-0f149b5a]{height:%?220?%;padding:%?0?% %?10?%}.comment_box .list .images uni-image[data-v-0f149b5a]{width:100%;height:100%;border-radius:%?10?%}\r\n/*  详情 */.detail_desc[data-v-0f149b5a]{background:#fff;padding:%?0?% %?20?%;padding-bottom:%?160?%}.detail_desc .title[data-v-0f149b5a]{padding:%?20?% %?0?%;font-weight:500;font-size:%?32?%}.detail_desc .d-header[data-v-0f149b5a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?80?%;font-size:%?30?%;color:#333;position:relative}.detail_desc .d-header uni-text[data-v-0f149b5a]{padding:0 %?20?%;background:#fff;position:relative;z-index:1}.detail_desc .d-header[data-v-0f149b5a]:after{position:absolute;left:50%;top:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:%?300?%;height:0;content:"";border-bottom:1px solid #ccc}.detail_desc img[data-v-0f149b5a]{width:100%}\r\n/* 底部操作菜单 */.page-bottom[data-v-0f149b5a]{position:fixed;left:0;right:0;bottom:0;z-index:95;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;background:#fff;padding:%?10?% %?10?% %?10?% %?0?%}.page-bottom .p-b-btn[data-v-0f149b5a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?24?%;color:#999;width:%?96?%;height:%?80?%}.page-bottom .p-b-btn .yticon[data-v-0f149b5a]{font-size:%?40?%;line-height:%?48?%;color:#999}.page-bottom .p-b-btn.active[data-v-0f149b5a], .page-bottom .p-b-btn.active .yticon[data-v-0f149b5a]{color:#fc4a5b}.page-bottom .p-b-btn .icon-fenxiang2[data-v-0f149b5a]{font-size:%?42?%;-webkit-transform:translateY(%?-2?%);transform:translateY(%?-2?%)}.page-bottom .p-b-btn .icon-shoucang[data-v-0f149b5a]{font-size:%?46?%}.page-bottom .action_btn_group[data-v-0f149b5a]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?80?%;border-radius:%?40?%;overflow:hidden;margin-left:%?10?%;position:relative}.page-bottom .action_btn_group[data-v-0f149b5a]:after{content:"";position:absolute;top:50%;right:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);height:%?28?%;width:0;border-right:1px solid hsla(0,0%,100%,.5)}.page-bottom .action_btn_group .action_btn[data-v-0f149b5a]{text-align:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:50%;height:100%;font-size:%?30?%;color:#fff;padding:0;border-radius:0;background:transparent}.page-bottom .fg_btn_group[data-v-0f149b5a]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?80?%;border-radius:%?40?%;overflow:hidden;margin-left:%?10?%;position:relative;line-height:%?40?%}.page-bottom .fg_btn_group .action_btn[data-v-0f149b5a]{text-align:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:45%;height:100%;color:#fff}.page-bottom .cartNum[data-v-0f149b5a]{position:absolute;top:%?-10?%;right:0;border-radius:%?18?%;color:#fff;display:inline-block;font-size:%?24?%;min-height:%?30?%;line-height:%?30?%;min-width:%?30?%;padding:0 %?8?%;text-align:center;white-space:nowrap;border:%?2?% solid #fff}.voice[data-v-0f149b5a]{width:%?60?%;height:%?60?%;position:absolute;top:%?50?%;right:%?30?%}.share-image-box[data-v-0f149b5a]{position:fixed;top:0;width:100%;height:100%;z-index:999}.share-image-box .share-main[data-v-0f149b5a]{position:relative;width:100%;height:100%}.share-image-box .share-mask[data-v-0f149b5a]{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#000;opacity:.85}.share-image-box .share-close[data-v-0f149b5a]{position:absolute;top:%?180?%;right:10%;width:%?50?%;height:%?50?%;border:%?4?% solid #fff;border-radius:50%;text-align:center}.share-image-box .share-img[data-v-0f149b5a]{position:absolute;top:%?248?%;left:calc(50% - %?295?%);width:%?580?%;height:%?850?%;margin:0 auto;overflow:hidden}.share-image-box .share-img uni-image[data-v-0f149b5a]{width:%?580?%;height:%?850?%}.share-image-box .btn-box[data-v-0f149b5a]{position:absolute;top:%?1140?%;left:calc(50% - %?295?%);width:%?590?%}.share-image-box .btn-box .btn[data-v-0f149b5a]{min-width:50%;padding:%?0?% %?10?%;border:%?2?% solid #fff;margin:%?0?% auto;border-radius:%?20?%;line-height:%?70?%;text-align:center;color:#fff}.fgingbox[data-v-0f149b5a]{position:fixed;top:0;left:0;z-index:99;width:100%;height:100vh;background-color:rgba(0,0,0,.5)}.fgingbox .content[data-v-0f149b5a]{position:absolute;left:10%;top:20%;width:80%;height:%?800?%;background-color:#fff;border-radius:%?20?%}.fgingbox .content .close[data-v-0f149b5a]{float:right;background-color:#ccc;padding:%?15?%;border-radius:50%;margin-top:%?-25?%;margin-right:%?-25?%;text-align:center}.fgingbox .content .title[data-v-0f149b5a]{margin-top:%?20?%;height:%?70?%;font-size:%?36?%;text-align:center;border-bottom:%?1?% solid #f1f1f1}.fgingbox .content .fglist[data-v-0f149b5a]{padding:%?20?%;height:calc(100% - %?91?%);overflow:hidden;overflow-y:auto}.fgUserImg[data-v-0f149b5a]{width:%?80?%;height:%?80?%;border-radius:50%;border:%?1?% solid #ccc;overflow:hidden}body.?%PAGE?%[data-v-0f149b5a]{background:#f8f8f8}',""]),t.exports=e},"9b9a":function(t,e,i){"use strict";var a=i("c858"),s=i.n(a);s.a},a799:function(t,e,i){"use strict";var a=i("b64f"),s=i.n(a);s.a},ad07:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"u-grid-item",props:{bgColor:{type:String,default:"#ffffff"},index:{type:[Number,String],default:""}},inject:["uGrid"],data:function(){return{hoverClass:""}},created:function(){this.hoverClass=this.uGrid.hoverClass},computed:{colNum:function(){return this.col<2?2:this.col>12?12:this.col},width:function(){return 100/Number(this.uGrid.col)+"%"},showBorder:function(){return this.uGrid.border}},methods:{click:function(){this.$emit("click",this.index),this.uGrid.click(this.index)}}};e.default=a},b02b:function(t,e,i){"use strict";var a=i("4ea4");i("4160"),i("a15b"),i("b64b"),i("e25e"),i("ac1f"),i("5319"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=a(i("b85c"));i("96cf");var o=a(i("1da1")),n=a(i("f33a")),r={components:{goodsSpec:n.default},data:function(){return{fg_id:0,join_id:0,d_join_id:0,goods_id:0,cartNum:0,scrollTop:0,tabActive:0,detailDesclTop:0,commentTop:0,baseUrl:this.config.baseUrl,specClass:"none",specSelectedArr:{},specSelected:[],byType:"",imgList:[],desc:"",specList:[],specChildList:[],selectFGoods:{fg_cate:{}},selectGoods:{},selectSkuId:0,selectGoodsPrice:"0.00",selectGoodSmarketPrice:"0.00",selectGoodsNumber:0,selectGoodsImg:"",comment:{count:0,list:[]},isLoading:!1,liveCountTimes:"",liveCountdown:[],tipUpClass:"none",fgingboxClass:"hide",fgingList:[],fgingListArr:[],getFGingNum:0,isGetFGing:!0}},onLoad:function(t){var e=this;return(0,o.default)(regeneratorRuntime.mark((function i(){var a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:a=e.app.langReplace("拼团详情"),uni.setNavigationBarTitle({title:a}),e.fg_id=parseInt(t.fg_id),"undefined"==typeof t.join_id?e.d_join_id=0:e.d_join_id=parseInt(t.join_id),e.getGoodsInfo(),e.getComment(),e.loadCartNum();case 7:case"end":return i.stop()}}),i)})))()},onShow:function(){this.isGetFGing=!0,this.getFGing()},onHide:function(){this.isGetFGing=!1},computed:{},methods:{goUrl:function(t){this.app.goPage(t)},getGoodsInfo:function(){var t=this;this.$u.post("fightgroup/api.goods/info",{fg_id:this.fg_id}).then((function(e){t.selectFGoods=e.data,t.selectGoods=e.data.goods,t.selectGoods.show_price=t.selectFGoods.show_price,t.selectGoods.show_stock_num=e.data.show_stock_num,t.goods_id=e.data.goods.goods_id,t.imgList=e.data.goods.imgList,t.desc=e.data.goods.m_goods_desc,t.getLiveTimeCount([e.data.downDate]),0==t.selectGoods.is_spec?(t.selectGoodsImg=t.config.baseUrl+e.data.goods.goods_thumb,t.selectGoodsPrice=e.data.goods.fg_sale_price,t.selectGoodSmarketPrice=e.data.goods.market_price):t.specList=e.data.goods.specList}))},getFGing:function(){var t=this;if(0==this.isGetFGing||this.getFGingNum>5)return!1;this.$u.post("fightgroup/api.goods/getFGing",{showLoading:!1,fg_id:this.fg_id}).then((function(e){t.getFGingNum++,t.fgingList=e.data,t.fgingListArr=[];var i=t,a=[];t.fgingList.forEach((function(t,e){a.push(t),e%2==1&&(i.fgingListArr.push(a),a=[])})),a.length>0&&i.fgingListArr.push(a);var s=1;t.fgingList.length>0&&(s=t.fgingList.length),setTimeout((function(){t.getFGing()}),5e3*s)}))},getComment:function(){var t=this;this.$u.post("shop/api.comment/getListByGoods",{goods_id:this.goods_id,limit:3}).then((function(e){t.comment.count=e.data.total_count,t.comment.list=e.data.list,t.$set(t.comment,"loaded",!0)}))},collect:function(){var t=this;if(1==this.isLoading)return!1;this.isLoading=!0,this.$u.post("shop/api.goods/collect",{goods_id:this.goods_id}).then((function(e){t.isLoading=!1;var i=t.selectGoods.is_collect;t.selectGoods.is_collect=1==i?0:1})).catch((function(e){t.isLoading=!1}))},toggletipUp:function(){var t=this;"show"===this.tipUpClass?(this.tipUpClass="hide",setTimeout((function(){t.tipUpClass="none"}),250)):"none"===this.tipUpClass&&(this.tipUpClass="show")},toggleSpec:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"fgbuy",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(this.join_id=i,"show"===this.specClass?("onbuycart"==e&&this.loadCartNum(),this.specClass="hide",setTimeout((function(){t.specClass="none"}),250)):"none"===this.specClass&&(this.specClass="show"),this.byType=e,1==this.selectGoods.is_spec){if(this.specChildList=[],this.selectGoods.specChildList.forEach((function(e){e.selected=!1,t.specChildList.push(e)})),"undefined"==typeof this.specSelectedArr[e]){var a=[];this.specSelectedArr[e]=a}else this.specChildList.forEach((function(i){var a,o=(0,s.default)(t.specSelectedArr[e]);try{for(o.s();!(a=o.n()).done;){var n=a.value;n.id===i.id&&t.$set(i,"selected",!0)}}catch(r){o.e(r)}finally{o.f()}}));this.specSelected=this.specSelectedArr[e],this.showSelectSpec()}else"fgbuy"==e?(this.selectGoodsPrice=this.selectGoods.fg_sale_price,this.selectGoodsNumber=this.selectGoods.fg_sale_number):(this.selectGoodsPrice=this.selectGoods.sale_price,this.selectGoodsNumber=this.selectGoods.goods_number)},selectSpec:function(t){var e=[];t.forEach((function(t){!0===t.selected&&e.push(t)})),this.specSelectedArr[this.byType]=e,this.specSelected=e,this.showSelectSpec()},showSelectSpec:function(){var t=this;this.selectSkuId=0;var e=[];this.specSelected.forEach((function(t){e.push(t.id)}));var i=e.join(":");if(Object.keys(this.selectGoods.sub_goods).forEach((function(e){var a=t.selectGoods.sub_goods[e];if(i==a.sku_val)return t.selectGoodSmarketPrice=a.market_price,"fgbuy"==t.byType?a.fg_sale_price>0&&(t.selectSkuId=parseInt(a.sku_id),t.selectGoodsPrice=a.fg_sale_price,t.selectGoodsNumber=a.fg_goods_number):a.sale_price>0&&(t.selectSkuId=parseInt(a.sku_id),t.selectGoodsPrice=a.sale_price,t.selectGoodsNumber=a.goods_number),!1})),this.selectSkuId<1&&(this.selectGoodsImg=this.config.baseUrl+this.selectGoods.goods_thumb),e.length<1)return!1;var a=[];this.specList.forEach((function(t,i){2==t.img_type&&a.push(e[i])}));var s=a.join(":");this.selectGoods.imgSkuList.forEach((function(e){if(s==e.sku_val)return t.selectGoodsImg=t.config.baseUrl+e.goods_thumb,!1}))},getLiveTimeCount:function(t){var e=this;"undefined"!=typeof this.liveCountTimes&&clearInterval(this.liveCountTimes),this.liveCountTimes=setInterval((function(){var i=(new Date).getTime(),a=[];t.forEach((function(t,s){var o="",n=t.replace(/-/g,"/"),r=new Date(n).getTime(),c=null;if(r-i>0){var l=(r-i)/1e3;if(l>0){var d=parseInt(l/86400),u=parseInt(l%86400/3600),f=parseInt(l%86400%3600/60),b=parseInt(l%86400%3600%60),g=Math.floor(1e3*l%1e3/100);c={day:d<10?"0"+d:d,hou:u<10?"0"+u:u,min:f<10?"0"+f:f,sec:b<10?"0"+b:b},d>0&&(o+=c.day+"天"),u>0&&(o+=c.hou+":"),o+=c.min+":"+c.sec,o+=":"+g}else 1==e.selectFGoods.fg_status?(e.selectFGoods.fg_status=9,o="已结束"):(e.selectFGoods.fg_status=1,this.getLiveTimeCount([e.selectFGoods._end_date]),o="已开团")}else o="已结束";a[s]=o})),e.liveCountdown=a}),100)},closeFgingBox:function(){"show"===this.fgingboxClass?this.fgingboxClass="hide":this.fgingboxClass="show"},loadCartNum:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$u.post("shop/api.flow/getCartInfo").then((function(e){t.cartNum=e.data.num}));case 1:case"end":return e.stop()}}),e)})))()},stopPrevent:function(){}}};e.default=r},b4d0:function(t,e,i){"use strict";i.r(e);var a=i("0335"),s=i("fa16");for(var o in s)"default"!==o&&function(t){i.d(e,t,(function(){return s[t]}))}(o);i("17bd");var n,r=i("f0c5"),c=Object(r["a"])(s["default"],a["b"],a["c"],!1,null,"0f149b5a",null,!1,a["a"],n);e["default"]=c.exports},b64f:function(t,e,i){var a=i("82d9");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("1b330fbd",a,!0,{sourceMap:!1,shadowMode:!1})},b85c:function(t,e,i){"use strict";i("a4d3"),i("e01a"),i("d28b"),i("d3b7"),i("3ca3"),i("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var a=s(i("06c5"));function s(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var i;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=(0,a.default)(t))||e&&t&&"number"===typeof t.length){i&&(t=i);var s=0,o=function(){};return{s:o,n:function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,r=!0,c=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return r=t.done,t},e:function(t){c=!0,n=t},f:function(){try{r||null==i["return"]||i["return"]()}finally{if(c)throw n}}}}},c858:function(t,e,i){var a=i("d6ff");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("cc9c64b2",a,!0,{sourceMap:!1,shadowMode:!1})},d6ff:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/* 边框颜色 */\r\n/* 图片加载中颜色 */\r\n/* 行为相关颜色 */\r\n/*文字颜色*/.u-grid[data-v-1bbe4ec0]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center}',""]),t.exports=e},de78:function(t,e,i){"use strict";i.r(e);var a=i("f49c"),s=i("e8dd");for(var o in s)"default"!==o&&function(t){i.d(e,t,(function(){return s[t]}))}(o);i("a799");var n,r=i("f0c5"),c=Object(r["a"])(s["default"],a["b"],a["c"],!1,null,"af8b2ed2",null,!1,a["a"],n);e["default"]=c.exports},e8dd:function(t,e,i){"use strict";i.r(e);var a=i("ad07"),s=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=s.a},f094:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"u-grid",props:{col:{type:[Number,String],default:3},border:{type:Boolean,default:!0},align:{type:String,default:"left"},hoverClass:{type:String,default:"u-hover-class"}},data:function(){return{index:0}},provide:function(){return{uGrid:this}},computed:{gridStyle:function(){var t={};switch(this.align){case"left":t.justifyContent="flex-start";break;case"center":t.justifyContent="center";break;case"right":t.justifyContent="flex-end";break;default:t.justifyContent="flex-start"}return t}},methods:{click:function(t){this.$emit("click",t)}}};e.default=a},f49c:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-grid-item",style:{background:t.bgColor,width:t.width},attrs:{"hover-class":t.hoverClass,"hover-stay-time":200},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"u-grid-item-box",class:[t.showBorder?"u-border-right u-border-bottom":""]},[t._t("default")],2)],1)},o=[]},fa16:function(t,e,i){"use strict";i.r(e);var a=i("b02b"),s=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=s.a}}]);