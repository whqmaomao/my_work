(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesB-channel-center-authorizedMy"],{"13e1":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page-body"},[n("v-uni-view",{staticClass:"bg-white  p40"},[-1==t.satuts?n("v-uni-view",{staticClass:"errorBox"},[t._v(t._s(t.errorInfo))]):t._e(),1==t.satuts?n("v-uni-view",{staticClass:"successBox"},[n("v-uni-view",{staticClass:"title"},[t._v("基本信息")]),n("v-uni-view",{staticClass:"field"},[n("v-uni-text",{staticClass:"label"},[t._v("被授权人：")]),t._v(t._s(t.info.real_name?t.info.real_name:"未填写"))],1),n("v-uni-view",{staticClass:"field"},[n("v-uni-text",{staticClass:"label"},[t._v("授权身份：")]),t._v(t._s(t.info.role_name))],1),t.info.img_url?n("v-uni-view",[n("v-uni-image",{staticClass:"w100",attrs:{src:t.baseUrl+t.info.img_url,mode:"widthFix"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.app.showImg(t.baseUrl+t.info.img_url)}}})],1):t._e()],1):t._e()],1),n("bottomShare",{attrs:{imgFile:t.baseUrl+t.info.img_url,url:t.info.share_url}})],1)},s=[]},6599:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("ff71")),s={components:{bottomShare:a.default},data:function(){return{satuts:0,errorInfo:"",info:{},baseUrl:this.config.baseUrl}},onLoad:function(t){var e=this;this.$u.post("channel/api.publics/getAuthorizedInfo",{field:"my"}).then((function(t){if(e.satuts=t.code,e.errorInfo=t.msg,-1==t.code)return!1;e.info=t.data}))},onShow:function(){},computed:{},onReady:function(){},methods:{}};e.default=s},7279:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/* 边框颜色 */\r\n/* 图片加载中颜色 */\r\n/* 行为相关颜色 */\r\n/*文字颜色*/.errorBox[data-v-6f702a3c]{text-align:center;height:%?300?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#3b7bf6}.successBox .title[data-v-6f702a3c]{font-size:%?35?%;color:#000;margin-bottom:%?20?%}.successBox .field[data-v-6f702a3c]{line-height:%?60?%}.successBox .field .label[data-v-6f702a3c]{color:#999}',""]),t.exports=e},"8b5b":function(t,e,n){"use strict";n.r(e);var i=n("6599"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},b633:function(t,e,n){var i=n("7279");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("476a40be",i,!0,{sourceMap:!1,shadowMode:!1})},bed4:function(t,e,n){"use strict";var i=n("b633"),a=n.n(i);a.a},c2a4:function(t,e,n){"use strict";n.r(e);var i=n("13e1"),a=n("8b5b");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("bed4");var r,o=n("f0c5"),c=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"6f702a3c",null,!1,i["a"],r);e["default"]=c.exports}}]);