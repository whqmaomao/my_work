(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesB-channel-team-invite"],{1616:function(t,e,a){"use strict";var r;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-button",{staticClass:"u-btn u-line-1 u-fix-ios-appearance",class:["u-size-"+t.size,t.plain?"u-btn--"+t.type+"--plain":"",t.loading?"u-loading":"","circle"==t.shape?"u-round-circle":"",t.hairLine?t.showHairLineBorder:"u-btn--bold-border","u-btn--"+t.type,t.disabled?"u-btn--"+t.type+"--disabled":""],style:[t.customStyle],attrs:{id:"u-wave-btn",disabled:t.disabled,"form-type":t.formType,"open-type":t.openType,"app-parameter":t.appParameter,"hover-stop-propagation":t.hoverStopPropagation,"send-message-title":t.sendMessageTitle,"send-message-path":"sendMessagePath",lang:t.lang,"data-name":t.dataName,"session-from":t.sessionFrom,"send-message-img":t.sendMessageImg,"show-message-card":t.showMessageCard,"hover-class":t.getHoverClass,loading:t.loading},on:{getphonenumber:function(e){arguments[0]=e=t.$handleEvent(e),t.getphonenumber.apply(void 0,arguments)},getuserinfo:function(e){arguments[0]=e=t.$handleEvent(e),t.getuserinfo.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.error.apply(void 0,arguments)},opensetting:function(e){arguments[0]=e=t.$handleEvent(e),t.opensetting.apply(void 0,arguments)},launchapp:function(e){arguments[0]=e=t.$handleEvent(e),t.launchapp.apply(void 0,arguments)},click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.click(e)}}},[t._t("default"),t.ripple?a("v-uni-view",{staticClass:"u-wave-ripple",class:[t.waveActive?"u-wave-active":""],style:{top:t.rippleTop+"px",left:t.rippleLeft+"px",width:t.fields.targetWidth+"px",height:t.fields.targetWidth+"px","background-color":t.rippleBgColor||"rgba(0, 0, 0, 0.15)"}}):t._e()],2)},o=[]},"219a":function(t,e,a){"use strict";a("c975"),a("d3b7"),a("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"u-button",props:{hairLine:{type:Boolean,default:!0},type:{type:String,default:"default"},size:{type:String,default:"default"},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},openType:{type:String,default:""},formType:{type:String,default:""},appParameter:{type:String,default:""},hoverStopPropagation:{type:Boolean,default:!1},lang:{type:String,default:"en"},sessionFrom:{type:String,default:""},sendMessageTitle:{type:String,default:""},sendMessagePath:{type:String,default:""},sendMessageImg:{type:String,default:""},showMessageCard:{type:Boolean,default:!1},hoverBgColor:{type:String,default:""},rippleBgColor:{type:String,default:""},ripple:{type:Boolean,default:!1},hoverClass:{type:String,default:""},customStyle:{type:Object,default:function(){return{}}},dataName:{type:String,default:""}},computed:{getHoverClass:function(){if(this.loading||this.disabled||this.ripple||this.hoverClass)return"";var t="";return t=this.plain?"u-"+this.type+"-plain-hover":"u-"+this.type+"-hover",t},showHairLineBorder:function(){return["primary","success","error","warning"].indexOf(this.type)>=0&&!this.plain?"":"u-hairline-border"}},data:function(){return{rippleTop:0,rippleLeft:0,fields:{},waveActive:!1}},methods:{click:function(t){!0!==this.loading&&!0!==this.disabled&&(this.ripple&&(this.waveActive=!1,this.$nextTick((function(){this.getWaveQuery(t)}))),this.$emit("click"))},getWaveQuery:function(t){var e=this;this.getElQuery().then((function(a){var r=a[0];if(r.width&&r.width&&(r.targetWidth=r.height>r.width?r.height:r.width,r.targetWidth)){e.fields=r;var i="",o="";i=t.touches[0].clientX,o=t.touches[0].clientY,e.rippleTop=o-r.top-r.targetWidth/2,e.rippleLeft=i-r.left-r.targetWidth/2,e.$nextTick((function(){e.waveActive=!0}))}}))},getElQuery:function(){var t=this;return new Promise((function(e){var a="";a=uni.createSelectorQuery().in(t),a.select(".u-btn").boundingClientRect(),a.exec((function(t){e(t)}))}))},getphonenumber:function(t){this.$emit("getphonenumber",t)},getuserinfo:function(t){this.$emit("getuserinfo",t)},error:function(t){this.$emit("error",t)},opensetting:function(t){this.$emit("opensetting",t)},launchapp:function(t){this.$emit("launchapp",t)}}};e.default=r},"3c62":function(t,e,a){"use strict";var r=a("b6bd"),i=a.n(r);i.a},"51c8":function(t,e,a){"use strict";var r=a("bb4a"),i=a.n(r);i.a},"68b2":function(t,e,a){"use strict";a.r(e);var r=a("219a"),i=a.n(r);for(var o in r)"default"!==o&&function(t){a.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"72bc":function(t,e,a){var r=a("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/* 边框颜色 */\r\n/* 图片加载中颜色 */\r\n/* 行为相关颜色 */\r\n/*文字颜色*/.top_box[data-v-45ce2708]{text-align:center;padding-top:%?100?%;color:#333;font-size:%?36?%;font-weight:600}.top_box .img[data-v-45ce2708]{width:%?150?%;display:block;margin:%?0?% auto;margin-bottom:%?30?%}.type_radio[data-v-45ce2708]{padding:%?0?% %?50?%}.type_radio .radio_box[data-v-45ce2708]{display:-webkit-box;display:-webkit-flex;display:flex;width:90%;padding:%?30?%;margin-top:%?30?%;background-color:#f5f5f5;border-radius:%?50?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.type_radio .radio_box .label[data-v-45ce2708]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.type_radio .radio_box .label .tip[data-v-45ce2708]{display:block;font-size:%?26?%;color:#999}',""]),t.exports=e},"7e6c":function(t,e,a){"use strict";a.r(e);var r=a("88d4"),i=a.n(r);for(var o in r)"default"!==o&&function(t){a.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"81c9":function(t,e,a){"use strict";a.r(e);var r=a("a40e"),i=a.n(r);for(var o in r)"default"!==o&&function(t){a.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"88d4":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{roleList:{},select_role_id:0}},onLoad:function(){var t=this;this.$u.post("channel/api.proxy_users/getInviteRole").then((function(e){t.roleList=e.data.roleList}))},onShow:function(){},computed:{},onReady:function(){},methods:{select:function(t){this.select_role_id=t.target.value},next:function(){if(this.select_role_id<1)return this.$u.toast("请选择邀请代理层级."),!1;this.app.goPage("/pagesB/channel/team/invitePoster?role_id="+this.select_role_id)}}};e.default=r},"90d0":function(t,e,a){"use strict";a.r(e);var r=a("e9f8"),i=a("81c9");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("51c8");var n,s=a("f0c5"),d=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"4d0290e0",null,!1,r["a"],n);e["default"]=d.exports},"98fa":function(t,e,a){var r=a("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/* 边框颜色 */\r\n/* 图片加载中颜色 */\r\n/* 行为相关颜色 */\r\n/*文字颜色*/.u-image[data-v-4d0290e0]{background-color:#f3f4f6;position:relative;-webkit-transition:opacity .5s ease-in-out;transition:opacity .5s ease-in-out}.u-image__image[data-v-4d0290e0]{width:100%;height:100%}.u-image__loading[data-v-4d0290e0], .u-image__error[data-v-4d0290e0]{position:absolute;top:0;left:0;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background-color:#f3f4f6;color:#909399;font-size:%?46?%}',""]),t.exports=e},"9bee":function(t,e,a){"use strict";a.r(e);var r=a("1616"),i=a("68b2");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("3c62");var n,s=a("f0c5"),d=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"41917922",null,!1,r["a"],n);e["default"]=d.exports},a40e:function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={props:{src:{type:String,default:""},mode:{type:String,default:"aspectFill"},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"auto"},shape:{type:String,default:"square"},borderRadius:{type:[String,Number],default:0},lazyLoad:{type:Boolean,default:!0},showMenuByLongpress:{type:Boolean,default:!0},loadingIcon:{type:String,default:"photo"},errorIcon:{type:String,default:"error-circle"},showLoading:{type:Boolean,default:!0},showError:{type:Boolean,default:!0},fade:{type:Boolean,default:!0},webp:{type:Boolean,default:!1},duration:{type:[String,Number],default:500}},data:function(){return{isError:!1,loading:!0,opacity:1,durationTime:this.duration,backgroundStyle:{}}},computed:{wrapStyle:function(){var t={};return t.width=this.$u.addUnit(this.width),t.height=this.$u.addUnit(this.height),t.borderRadius="circle"==this.shape?"50%":this.$u.addUnit(this.borderRadius),t.overflow=this.borderRadius>0?"hidden":"visible",this.fade&&(t.opacity=this.opacity,t.transition="opacity ".concat(Number(this.durationTime)/1e3,"s ease-in-out")),t}},methods:{onClick:function(){this.$emit("click")},onErrorHandler:function(){this.loading=!1,this.isError=!0,this.$emit("error")},onLoadHandler:function(){var t=this;if(this.loading=!1,this.isError=!1,this.$emit("load"),!this.fade)return this.removeBgColor();this.opacity=0,this.durationTime=0,setTimeout((function(){t.durationTime=t.duration,t.opacity=1,setTimeout((function(){t.removeBgColor()}),t.durationTime)}),50)},removeBgColor:function(){this.backgroundStyle={backgroundColor:"transparent"}}}};e.default=r},b39e:function(t,e,a){var r=a("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/* 边框颜色 */\r\n/* 图片加载中颜色 */\r\n/* 行为相关颜色 */\r\n/*文字颜色*/.u-btn[data-v-41917922]::after{border:none}.u-btn[data-v-41917922]{position:relative;border:0;display:inline-block;overflow:hidden;line-height:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;cursor:pointer;padding:0 %?40?%;z-index:1;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .15s;transition:all .15s}.u-btn--bold-border[data-v-41917922]{border:1px solid #fff}.u-btn--default[data-v-41917922]{color:#606266;border-color:#c0c4cc;background-color:#fff}.u-btn--primary[data-v-41917922]{color:#fff;border-color:#2979ff;background-color:#2979ff}.u-btn--success[data-v-41917922]{color:#fff;border-color:#19be6b;background-color:#19be6b}.u-btn--error[data-v-41917922]{color:#fff;border-color:#fa3534;background-color:#fa3534}.u-btn--warning[data-v-41917922]{color:#fff;border-color:#f90;background-color:#f90}.u-btn--default--disabled[data-v-41917922]{color:#fff;border-color:#e4e7ed;background-color:#fff}.u-btn--primary--disabled[data-v-41917922]{color:#fff!important;border-color:#a0cfff!important;background-color:#a0cfff!important}.u-btn--success--disabled[data-v-41917922]{color:#fff!important;border-color:#71d5a1!important;background-color:#71d5a1!important}.u-btn--error--disabled[data-v-41917922]{color:#fff!important;border-color:#fab6b6!important;background-color:#fab6b6!important}.u-btn--warning--disabled[data-v-41917922]{color:#fff!important;border-color:#fcbd71!important;background-color:#fcbd71!important}.u-btn--primary--plain[data-v-41917922]{color:#2979ff!important;border-color:#a0cfff!important;background-color:#ecf5ff!important}.u-btn--success--plain[data-v-41917922]{color:#19be6b!important;border-color:#71d5a1!important;background-color:#dbf1e1!important}.u-btn--error--plain[data-v-41917922]{color:#fa3534!important;border-color:#fab6b6!important;background-color:#fef0f0!important}.u-btn--warning--plain[data-v-41917922]{color:#f90!important;border-color:#fcbd71!important;background-color:#fdf6ec!important}.u-hairline-border[data-v-41917922]:after{content:" ";position:absolute;pointer-events:none;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transform-origin:0 0;transform-origin:0 0;left:0;top:0;width:199.8%;height:199.7%;-webkit-transform:scale(.5);transform:scale(.5);border:1px solid currentColor;z-index:1}.u-wave-ripple[data-v-41917922]{z-index:0;position:absolute;border-radius:100%;background-clip:padding-box;pointer-events:none;-webkit-user-select:none;user-select:none;-webkit-transform:scale(0);transform:scale(0);opacity:1;-webkit-transform-origin:center;transform-origin:center}.u-wave-ripple.u-wave-active[data-v-41917922]{opacity:0;-webkit-transform:scale(2);transform:scale(2);-webkit-transition:opacity 1s linear,-webkit-transform .4s linear;transition:opacity 1s linear,-webkit-transform .4s linear;transition:opacity 1s linear,transform .4s linear;transition:opacity 1s linear,transform .4s linear,-webkit-transform .4s linear}.u-round-circle[data-v-41917922]{border-radius:%?100?%}.u-round-circle[data-v-41917922]::after{border-radius:%?100?%}.u-loading[data-v-41917922]::after{background-color:hsla(0,0%,100%,.35)}.u-size-default[data-v-41917922]{font-size:%?30?%;height:%?80?%;line-height:%?80?%}.u-size-medium[data-v-41917922]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;width:auto;font-size:%?26?%;height:%?70?%;line-height:%?70?%;padding:0 %?80?%}.u-size-mini[data-v-41917922]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;width:auto;font-size:%?22?%;padding-top:1px;height:%?50?%;line-height:%?50?%;padding:0 %?20?%}.u-primary-plain-hover[data-v-41917922]{color:#fff!important;background:#2b85e4!important}.u-default-plain-hover[data-v-41917922]{color:#2b85e4!important;background:#ecf5ff!important}.u-success-plain-hover[data-v-41917922]{color:#fff!important;background:#18b566!important}.u-warning-plain-hover[data-v-41917922]{color:#fff!important;background:#f29100!important}.u-error-plain-hover[data-v-41917922]{color:#fff!important;background:#dd6161!important}.u-info-plain-hover[data-v-41917922]{color:#fff!important;background:#82848a!important}.u-default-hover[data-v-41917922]{color:#2b85e4!important;border-color:#2b85e4!important;background-color:#ecf5ff!important}.u-primary-hover[data-v-41917922]{background:#2b85e4!important;color:#fff}.u-success-hover[data-v-41917922]{background:#18b566!important;color:#fff}.u-info-hover[data-v-41917922]{background:#82848a!important;color:#fff}.u-warning-hover[data-v-41917922]{background:#f29100!important;color:#fff}.u-error-hover[data-v-41917922]{background:#dd6161!important;color:#fff}',""]),t.exports=e},b61c:function(t,e,a){var r=a("72bc");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=a("4f06").default;i("55c25192",r,!0,{sourceMap:!1,shadowMode:!1})},b6bd:function(t,e,a){var r=a("b39e");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=a("4f06").default;i("7f7daf40",r,!0,{sourceMap:!1,shadowMode:!1})},bb4a:function(t,e,a){var r=a("98fa");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=a("4f06").default;i("f9c0ac3c",r,!0,{sourceMap:!1,shadowMode:!1})},bbc6:function(t,e,a){"use strict";var r=a("b61c"),i=a.n(r);i.a},c9d1:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return r}));var r={uImage:a("90d0").default,uButton:a("9bee").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"page-body bg-white"},[a("v-uni-view",{staticClass:"top_box"},[a("v-uni-view",{staticClass:"img"},[a("u-image",{attrs:{width:"150rpx",height:"150rpx",src:"/pagesB/static/channel/images/title_icon/icon_01.png"}})],1),a("v-uni-text",[t._v("邀请代理")])],1),a("v-uni-view",{staticClass:"type_radio mt60"},[a("v-uni-radio-group",{on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.select.apply(void 0,arguments)}}},t._l(t.roleList,(function(e,r){return a("v-uni-label",{key:r,staticClass:"radio_box"},[a("v-uni-view",{staticClass:"label "},[t._v(t._s(e.label)),a("v-uni-view",{staticClass:"tip"},[t._v(t._s(e.limit_tip))])],1),a("v-uni-radio",{staticClass:"radio",attrs:{value:e.value.toString()}})],1)})),1),a("u-button",{staticClass:"block mt80",attrs:{size:"default",shape:"circle",type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.next.apply(void 0,arguments)}}},[t._v("确定邀请")])],1)],1)},o=[]},e9f8:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return r}));var r={uIcon:a("c688").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"u-image",style:[t.wrapStyle,t.backgroundStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.isError?t._e():a("v-uni-image",{staticClass:"u-image__image",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)},attrs:{src:t.src,mode:t.mode,"lazy-load":t.lazyLoad},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.onErrorHandler.apply(void 0,arguments)},load:function(e){arguments[0]=e=t.$handleEvent(e),t.onLoadHandler.apply(void 0,arguments)}}}),t.showLoading&&t.loading?a("v-uni-view",{staticClass:"u-image__loading",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)}},[t.$slots.loading?t._t("loading"):a("u-icon",{attrs:{name:t.loadingIcon}})],2):t._e(),t.showError&&t.isError&&!t.loading?a("v-uni-view",{staticClass:"u-image__error",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)}},[t.$slots.error?t._t("error"):a("u-icon",{attrs:{name:t.errorIcon}})],2):t._e()],1)},o=[]},ebd0:function(t,e,a){"use strict";a.r(e);var r=a("c9d1"),i=a("7e6c");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("bbc6");var n,s=a("f0c5"),d=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"45ce2708",null,!1,r["a"],n);e["default"]=d.exports}}]);