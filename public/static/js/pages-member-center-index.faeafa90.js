(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-member-center-index"],{5233:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-grid",class:{"u-border-top u-border-left":t.border},style:[t.gridStyle]},[t._t("default")],2)},s=[]},"5f37":function(t,e,i){"use strict";i.r(e);var n=i("f094"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},"6ab1":function(t,e,i){"use strict";i.r(e);var n=i("5233"),a=i("5f37");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("9b9a");var r,o=i("f0c5"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"1bbe4ec0",null,!1,n["a"],r);e["default"]=c.exports},"76b9":function(t,e,i){"use strict";var n=i("c048"),a=i.n(n);a.a},"82d9":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/* 边框颜色 */\r\n/* 图片加载中颜色 */\r\n/* 行为相关颜色 */\r\n/*文字颜色*/.u-grid-item[data-v-af8b2ed2]{-webkit-box-sizing:border-box;box-sizing:border-box;background:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;position:relative;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.u-grid-item-hover[data-v-af8b2ed2]{background:#f7f7f7!important}.u-grid-marker-box[data-v-af8b2ed2]{position:absolute;display:inline-block;line-height:0}.u-grid-marker-wrap[data-v-af8b2ed2]{position:absolute}.u-grid-item-box[data-v-af8b2ed2]{padding:%?30?% 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1;width:100%;height:100%}',""]),t.exports=e},"9b9a":function(t,e,i){"use strict";var n=i("c858"),a=i.n(n);a.a},"9d06":function(t,e,i){"use strict";i.r(e);var n=i("fe0b"),a=i("b760");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("76b9");var r,o=i("f0c5"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"7f523786",null,!1,n["a"],r);e["default"]=c.exports},a799:function(t,e,i){"use strict";var n=i("b64f"),a=i.n(n);a.a},ad07:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-grid-item",props:{bgColor:{type:String,default:"#ffffff"},index:{type:[Number,String],default:""}},inject:["uGrid"],data:function(){return{hoverClass:""}},created:function(){this.hoverClass=this.uGrid.hoverClass},computed:{colNum:function(){return this.col<2?2:this.col>12?12:this.col},width:function(){return 100/Number(this.uGrid.col)+"%"},showBorder:function(){return this.uGrid.border}},methods:{click:function(){this.$emit("click",this.index),this.uGrid.click(this.index)}}};e.default=n},b64f:function(t,e,i){var n=i("82d9");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("1b330fbd",n,!0,{sourceMap:!1,shadowMode:!1})},b760:function(t,e,i){"use strict";i.r(e);var n=i("e11c"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},c048:function(t,e,i){var n=i("d557");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("08f7ae49",n,!0,{sourceMap:!1,shadowMode:!1})},c858:function(t,e,i){var n=i("d6ff");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("cc9c64b2",n,!0,{sourceMap:!1,shadowMode:!1})},d557:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/* 边框颜色 */\r\n/* 图片加载中颜色 */\r\n/* 行为相关颜色 */\r\n/*文字颜色*/uni-button[data-v-7f523786]::after{border:none}.ser-son uni-button[data-v-7f523786]{position:relative;display:block;margin-left:auto;margin-right:auto;padding-left:0;padding-right:0;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center;text-decoration:none;line-height:1.35;-webkit-tap-highlight-color:transparent;overflow:hidden;color:#000;background-color:#fff;width:100%;height:100%}.u-badge[data-v-7f523786]{z-index:999}.top_title[data-v-7f523786]{position:relative;top:0;width:100%;z-index:99;background-size:100%;background-repeat:no-repeat;height:%?90?%;background-position:%?0?% %?-130?%;color:#fff}.top_box[data-v-7f523786]{height:%?360?%;background-repeat:no-repeat;background-size:100%;background-position:%?0?% %?-220?%;color:#fff}.top_box .user_info[data-v-7f523786]{height:%?200?%}.top_box .headimgurl[data-v-7f523786]{margin-left:%?20?%;width:%?120?%;height:%?120?%;border-radius:50%;overflow:hidden;border:%?3?% solid #fff;background-color:#fff}.top_box .headimgurl uni-image[data-v-7f523786]{border-radius:50%;width:100%;height:100%}.top_box .headimgEdit[data-v-7f523786]{position:absolute;top:%?100?%;left:%?70?%}.top_box .icon_set[data-v-7f523786]{position:absolute;top:%?10?%;right:%?20?%}.top_box .icon_set .set_text[data-v-7f523786]{font-size:%?22?%;color:#fff}.card_box[data-v-7f523786]{background-color:#fff;border-radius:%?20?%;margin:%?20?%;width:auto;color:#333;padding:%?30?% 0}.nickname[data-v-7f523786]{min-width:%?100?%;max-width:%?300?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;-webkit-box-orient:vertical}.role_name[data-v-7f523786]{min-width:%?90?%;line-height:%?40?%;color:#fff;padding:%?2?% %?10?%;display:inline-block;text-align:center;background:-webkit-linear-gradient(350deg,#f8cd89 1%,#f6a957);background:linear-gradient(100deg,#f8cd89 1%,#f6a957);border-radius:%?20?%}.menu_box[data-v-7f523786]{border-radius:%?20?%;background-color:#fff}.tip-msg-dian[data-v-7f523786]{position:absolute;right:%?-5?%;top:%?0?%;width:%?15?%;height:%?15?%;background-color:#fff;border-radius:50%}',""]),t.exports=e},d6ff:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/* 边框颜色 */\r\n/* 图片加载中颜色 */\r\n/* 行为相关颜色 */\r\n/*文字颜色*/.u-grid[data-v-1bbe4ec0]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center}',""]),t.exports=e},de78:function(t,e,i){"use strict";i.r(e);var n=i("f49c"),a=i("e8dd");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("a799");var r,o=i("f0c5"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"af8b2ed2",null,!1,n["a"],r);e["default"]=c.exports},e11c:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("d6ca")),s={components:{tabbar:a.default},data:function(){return{contact_imgurl:"/static/public/images/cneter_comment.png",now_page:"",baseUrl:this.config.baseUrl,setting:{},top_bg:"",userInfo:{user_id:0,role:{},account:{balance_money:"0.00",use_integral:"0"}},orderStats:{wait_pay_num:0,wait_shipping_num:0,wait_sign_num:0},collectNum:0,unReadMsgNum:0,headimgurl:"",navMenu:{},teamCount:{allNum:0,underNum:0},teamConsume:0}},onLoad:function(t){this.now_page=this.$mp.page.route},onShow:function(){this.setting=uni.getStorageSync("setting"),""!=this.setting.user_center_top_bg&&(this.top_bg=this.config.baseUrl+this.setting.user_center_top_bg);var t=this;""!=this.setting.user_center_top_nav_bgc&&setTimeout((function(){uni.setNavigationBarColor({backgroundColor:t.setting.user_center_top_nav_bgc})}),500),this.getCenterInfo()},methods:{getCenterInfo:function(){var t=this;this.$u.post("member/api.center/getCenterInfo").then((function(e){if(console.log(e),e.data.userInfo?(t.userInfo=e.data.userInfo,t.orderStats=e.data.orderStats,t.collectNum=e.data.collectNum,t.teamCount=e.data.teamCount,t.teamConsume=e.data.teamConsume,t.unReadMsgNum=e.data.unReadMsgNum,""!=t.userInfo.headimgurl&&(t.headimgurl=t.config.baseUrl+t.userInfo.headimgurl)):t.app.delAuthCode(),t.userInfo["role_id"]>12&&""==t.userInfo["signature"])return uni.showModal({title:t.app.langReplace("提示"),content:"成为代理需签署合同,是否前往签署.",showCancel:!0,confirmText:t.app.langReplace("前往签署"),cancelText:t.app.langReplace("取消"),success:function(t){t.confirm?uni.redirectTo({url:"/pages/member/center/signContract"}):uni.redirectTo({url:"/pages/shop/index/index"})}}),!1})),this.$u.post("member/api.center/getCenterNavMenu").then((function(e){t.navMenu=e.data.navMenu}))},centerNav:function(t){"tel"==t.bind_type?uni.makePhoneCall({phoneNumber:t.url+"",success:function(t){console.log("调用成功!")},fail:function(t){console.log("调用失败!")}}):this.app.goPage(t.url)}}};e.default=s},e8dd:function(t,e,i){"use strict";i.r(e);var n=i("ad07"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},f094:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-grid",props:{col:{type:[Number,String],default:3},border:{type:Boolean,default:!0},align:{type:String,default:"left"},hoverClass:{type:String,default:"u-hover-class"}},data:function(){return{index:0}},provide:function(){return{uGrid:this}},computed:{gridStyle:function(){var t={};switch(this.align){case"left":t.justifyContent="flex-start";break;case"center":t.justifyContent="center";break;case"right":t.justifyContent="flex-end";break;default:t.justifyContent="flex-start"}return t}},methods:{click:function(t){this.$emit("click",t)}}};e.default=n},f49c:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-grid-item",style:{background:t.bgColor,width:t.width},attrs:{"hover-class":t.hoverClass,"hover-stay-time":200},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"u-grid-item-box",class:[t.showBorder?"u-border-right u-border-bottom":""]},[t._t("default")],2)],1)},s=[]},fe0b:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var n={uIcon:i("c688").default,uGrid:i("6ab1").default,uGridItem:i("de78").default,uBadge:i("2273").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"page-body",class:[t.app.setCStyle()]},[i("v-uni-view",{staticClass:"top_title",style:{"background-image":"url("+t.top_bg+")"}},[i("v-uni-view",{staticClass:"fs34 text-center p20"},[t._v(t._s(t.app.langReplace("个人中心")))])],1),i("v-uni-view",{staticClass:"top_box",style:{"background-image":"url("+t.top_bg+")"}},[i("v-uni-view",{staticClass:"user_info relative smll"},[i("v-uni-view",{staticClass:"headimgurl ",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.app.goPage("editInfo")}}},[i("v-uni-image",{attrs:{width:"120rpx",height:"120rpx",mode:"aspectFill",src:t.headimgurl?t.headimgurl:"/static/public/images/headimgurl.jpg"}})],1),t.userInfo.user_id>0?i("v-uni-view",{staticClass:"flex_bd ml20"},[i("v-uni-view",{staticClass:"smll"},[i("v-uni-text",{staticClass:"fs32 nickname"},[t._v(t._s(t.userInfo.nick_name))]),1==t.setting.user_center_show_role?i("v-uni-view",{staticClass:"role_name fs20"},[t._v(t._s(t.userInfo.role.role_name))]):t._e()],1),i("v-uni-view",{staticClass:"smll mt20 fs22"},[i("v-uni-view",{staticClass:"mr30"},[t._v("UID："+t._s(t.userInfo.user_id))]),i("v-uni-view",[t._v(t._s(t.app.langReplace("手机号码"))+"："+t._s(t.userInfo.mobile))])],1),i("v-uni-view",{staticClass:"smll mt20 fs22"},[i("v-uni-view",[t._v(t._s(t.app.langReplace("我的邀请码"))+"："+t._s(t.userInfo.token))])],1)],1):i("v-uni-view",{staticClass:"plr10"},[i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.app.goPage("/pages/member/passport/login")}}},[t._v(t._s(t.app.langReplace("登陆/注册")))])],1),i("v-uni-view",{staticClass:"icon_set smll text-center"},[i("v-uni-view",{staticClass:"mr30 relative",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.app.goPage("/pages/public/message/index")}}},[i("u-icon",{attrs:{name:"bell",color:"#FFFFFF",size:"45"}}),i("v-uni-view",{staticClass:"set_text"},[t._v(t._s(t.app.langReplace("通知")))]),t.unReadMsgNum>0?i("v-uni-view",{staticClass:"tip-msg-dian"}):t._e()],1),i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.app.goPage("set")}}},[i("u-icon",{attrs:{name:"setting",color:"#FFFFFF",size:"45"}}),i("v-uni-view",{staticClass:"set_text"},[t._v(t._s(t.app.langReplace("设置")))])],1)],1)],1),i("v-uni-view",{staticClass:"card_box fs40"},[i("u-grid",{attrs:{col:4,border:!1}},[i("u-grid-item",{staticClass:"p0",attrs:{"bg-color":"none"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.app.goPage("/pages/member/wallet/index")}}},[i("v-uni-view",{staticClass:"ff"},[t._v(t._s(t.userInfo.account.balance_money))]),i("v-uni-view",{staticClass:"fs26 color-99"},[t._v(t._s(t.app.langReplace("余额")))])],1),i("u-grid-item",{staticClass:"p0",attrs:{"bg-color":"none"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.app.goPage("/pages/member/fans/index")}}},[i("v-uni-view",{staticClass:"ff"},[t._v(t._s(t.teamCount.allNum>0?t.teamCount.allNum:0))]),i("v-uni-view",{staticClass:"fs26 color-99"},[t._v(t._s(t.app.langReplace("粉丝")))])],1),i("u-grid-item",{staticClass:"p0",attrs:{"bg-color":"none"}},[i("v-uni-view",{staticClass:"ff"},[t._v(t._s(t.teamConsume>0?t.teamConsume:0))]),i("v-uni-view",{staticClass:"fs26 color-99"},[t._v(t._s(t.app.langReplace("团队业绩")))])],1),t.userInfo.role_id>19?i("u-grid-item",{staticClass:"p0",attrs:{"bg-color":"none"}},[i("v-uni-view",{staticClass:"ff"},[t._v(t._s(t.setting.team_pool>0?t.setting.team_pool:0))]),i("v-uni-view",{staticClass:"fs26 color-99"},[t._v(t._s(t.app.langReplace("奖金池")))])],1):i("u-grid-item",{staticClass:"p0",attrs:{"bg-color":"none"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.app.goPage("/pages/member/center/collect")}}},[i("v-uni-view",{staticClass:"ff"},[t._v(t._s(t.collectNum))]),i("v-uni-view",{staticClass:"fs26 color-99"},[t._v(t._s(t.app.langReplace("收藏")))])],1)],1)],1)],1),i("v-uni-view",{staticClass:"pbox pt10"},[i("v-uni-view",{staticClass:"menu_box mt20"},[i("v-uni-view",{staticClass:"p20"},[i("v-uni-text",{staticClass:"fs28 font-w600"},[t._v(t._s(t.app.langReplace("我的订单")))]),i("v-uni-view",{staticClass:"fs24 fr color-99 font-wn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.app.goPage("/pages/shop/order/list?state=0")}}},[t._v(t._s(t.app.langReplace("查看全部"))),i("u-icon",{attrs:{name:"arrow-right"}})],1)],1),i("u-grid",{staticClass:"fs28",attrs:{col:t.setting.shop_after_sale_limit>0?5:4,border:!1}},[i("u-grid-item",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.app.goPage("/pages/shop/order/list?state=1")}}},[i("u-badge",{attrs:{count:t.orderStats.wait_pay_num,offset:[20,20]}}),i("u-icon",{attrs:{name:t.baseUrl+t.setting.user_center_oicon_wait_pay,size:48}}),i("v-uni-view",{staticClass:"mt10 fs26 color-99 text-center "},[t._v(t._s(t.app.langReplace("待付款")))])],1),i("u-grid-item",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.app.goPage("/pages/shop/order/list?state=2")}}},[i("u-badge",{attrs:{count:t.orderStats.wait_shipping_num,offset:[20,20]}}),i("u-icon",{attrs:{name:t.baseUrl+t.setting.user_center_oicon_wait_shipping,size:48}}),i("v-uni-view",{staticClass:"mt10 fs26 color-99 text-center"},[t._v(t._s(t.app.langReplace("待发货")))])],1),i("u-grid-item",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.app.goPage("/pages/shop/order/list?state=3")}}},[i("u-badge",{attrs:{count:t.orderStats.wait_sign_num,offset:[20,20]}}),i("u-icon",{attrs:{name:t.baseUrl+t.setting.user_center_oicon_wait_sign,size:48}}),i("v-uni-view",{staticClass:"mt10 fs26 color-99 text-center"},[t._v(t._s(t.app.langReplace("待收货")))])],1),i("u-grid-item",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.app.goPage("/pages/shop/order/list?state=4")}}},[i("u-icon",{attrs:{name:t.baseUrl+t.setting.user_center_oicon_sign,size:48}}),i("v-uni-view",{staticClass:"mt10 fs26 color-99 text-center"},[t._v(t._s(t.app.langReplace("已完成")))])],1),i("u-grid-item",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.app.goPage("/pages/shop/aftersale/index")}}},[i("u-icon",{attrs:{name:t.baseUrl+t.setting.user_center_oicon_after_sale,size:48}}),i("v-uni-view",{staticClass:"mt10 fs26 color-99 text-center"},[t._v(t._s(t.app.langReplace("售后")))])],1)],1),i("v-uni-view",{staticClass:"p5"})],1),i("v-uni-view",{staticClass:"menu_box mt20 mb60"},[i("v-uni-view",{staticClass:"p20 b-tottom"},[i("v-uni-text",{staticClass:"fs30 font-w700"},[t._v(t._s(t.app.langReplace("我的工具")))])],1),0==t.setting.user_center_nav_tpl?i("u-grid",{staticClass:"fs28",attrs:{col:4,border:!1}},t._l(t.navMenu,(function(e,n){return i("u-grid-item",{key:n,staticClass:"mt10 mb10",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.centerNav(e)}}},[i("u-icon",{attrs:{name:t.baseUrl+e.imgurl,size:68}}),i("v-uni-view",{staticClass:"mt10 fs24"},[t._v(t._s(e.title))])],1)})),1):t._e(),t._l(t.navMenu,(function(e,n){return 1==t.setting.user_center_nav_tpl?i("v-uni-view",{key:n},[i("v-uni-view",{staticClass:"list-cell b-b mt20",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.centerNav(e)}}},[i("u-icon",{staticClass:"mr20",attrs:{name:t.baseUrl+e.imgurl,size:68}}),i("v-uni-view",{staticClass:"cell-tit fs28"},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"cell-more"},[i("u-icon",{attrs:{name:"arrow-right"}})],1)],1)],1):t._e()}))],2)],1),i("tabbar",{attrs:{now_page:t.now_page,getCartNum:0}})],1)},s=[]}}]);