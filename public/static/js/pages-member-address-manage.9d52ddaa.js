(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-member-address-manage"],{"0152":function(t,e,i){"use strict";i.r(e);var a=i("f7fe"),r=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=r.a},"0497":function(t,e,i){"use strict";i.r(e);var a=i("1c4e"),r=i("27c1");for(var n in r)"default"!==n&&function(t){i.d(e,t,(function(){return r[t]}))}(n);i("c8ef");var o,s=i("f0c5"),d=Object(s["a"])(r["default"],a["b"],a["c"],!1,null,"7be551fb",null,!1,a["a"],o);e["default"]=d.exports},"09f0":function(t,e,i){var a=i("938c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=i("4f06").default;r("16cdae4e",a,!0,{sourceMap:!1,shadowMode:!1})},1544:function(t,e,i){"use strict";i.r(e);var a=i("ffce"),r=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=r.a},1616:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-button",{staticClass:"u-btn u-line-1 u-fix-ios-appearance",class:["u-size-"+t.size,t.plain?"u-btn--"+t.type+"--plain":"",t.loading?"u-loading":"","circle"==t.shape?"u-round-circle":"",t.hairLine?t.showHairLineBorder:"u-btn--bold-border","u-btn--"+t.type,t.disabled?"u-btn--"+t.type+"--disabled":""],style:[t.customStyle],attrs:{id:"u-wave-btn",disabled:t.disabled,"form-type":t.formType,"open-type":t.openType,"app-parameter":t.appParameter,"hover-stop-propagation":t.hoverStopPropagation,"send-message-title":t.sendMessageTitle,"send-message-path":"sendMessagePath",lang:t.lang,"data-name":t.dataName,"session-from":t.sessionFrom,"send-message-img":t.sendMessageImg,"show-message-card":t.showMessageCard,"hover-class":t.getHoverClass,loading:t.loading},on:{getphonenumber:function(e){arguments[0]=e=t.$handleEvent(e),t.getphonenumber.apply(void 0,arguments)},getuserinfo:function(e){arguments[0]=e=t.$handleEvent(e),t.getuserinfo.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.error.apply(void 0,arguments)},opensetting:function(e){arguments[0]=e=t.$handleEvent(e),t.opensetting.apply(void 0,arguments)},launchapp:function(e){arguments[0]=e=t.$handleEvent(e),t.launchapp.apply(void 0,arguments)},click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.click(e)}}},[t._t("default"),t.ripple?i("v-uni-view",{staticClass:"u-wave-ripple",class:[t.waveActive?"u-wave-active":""],style:{top:t.rippleTop+"px",left:t.rippleLeft+"px",width:t.fields.targetWidth+"px",height:t.fields.targetWidth+"px","background-color":t.rippleBgColor||"rgba(0, 0, 0, 0.15)"}}):t._e()],2)},n=[]},"1c4e":function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var a={uLoading:i("dd04").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-switch",class:[1==t.value?"u-switch--on":"",t.disabled?"u-switch--disabled":""],style:[t.switchStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"u-switch__node node-class"},[i("u-loading",{staticClass:"u-switch__loading",attrs:{show:t.loading,size:.6*t.size,color:t.loadingColor}})],1)],1)},n=[]},"219a":function(t,e,i){"use strict";i("c975"),i("d3b7"),i("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"u-button",props:{hairLine:{type:Boolean,default:!0},type:{type:String,default:"default"},size:{type:String,default:"default"},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},openType:{type:String,default:""},formType:{type:String,default:""},appParameter:{type:String,default:""},hoverStopPropagation:{type:Boolean,default:!1},lang:{type:String,default:"en"},sessionFrom:{type:String,default:""},sendMessageTitle:{type:String,default:""},sendMessagePath:{type:String,default:""},sendMessageImg:{type:String,default:""},showMessageCard:{type:Boolean,default:!1},hoverBgColor:{type:String,default:""},rippleBgColor:{type:String,default:""},ripple:{type:Boolean,default:!1},hoverClass:{type:String,default:""},customStyle:{type:Object,default:function(){return{}}},dataName:{type:String,default:""}},computed:{getHoverClass:function(){if(this.loading||this.disabled||this.ripple||this.hoverClass)return"";var t="";return t=this.plain?"u-"+this.type+"-plain-hover":"u-"+this.type+"-hover",t},showHairLineBorder:function(){return["primary","success","error","warning"].indexOf(this.type)>=0&&!this.plain?"":"u-hairline-border"}},data:function(){return{rippleTop:0,rippleLeft:0,fields:{},waveActive:!1}},methods:{click:function(t){!0!==this.loading&&!0!==this.disabled&&(this.ripple&&(this.waveActive=!1,this.$nextTick((function(){this.getWaveQuery(t)}))),this.$emit("click"))},getWaveQuery:function(t){var e=this;this.getElQuery().then((function(i){var a=i[0];if(a.width&&a.width&&(a.targetWidth=a.height>a.width?a.height:a.width,a.targetWidth)){e.fields=a;var r="",n="";r=t.touches[0].clientX,n=t.touches[0].clientY,e.rippleTop=n-a.top-a.targetWidth/2,e.rippleLeft=r-a.left-a.targetWidth/2,e.$nextTick((function(){e.waveActive=!0}))}}))},getElQuery:function(){var t=this;return new Promise((function(e){var i="";i=uni.createSelectorQuery().in(t),i.select(".u-btn").boundingClientRect(),i.exec((function(t){e(t)}))}))},getphonenumber:function(t){this.$emit("getphonenumber",t)},getuserinfo:function(t){this.$emit("getuserinfo",t)},error:function(t){this.$emit("error",t)},opensetting:function(t){this.$emit("opensetting",t)},launchapp:function(t){this.$emit("launchapp",t)}}};e.default=a},"25fc":function(t,e,i){var a=i("3d8f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=i("4f06").default;r("6f89d5d6",a,!0,{sourceMap:!1,shadowMode:!1})},"27c1":function(t,e,i){"use strict";i.r(e);var a=i("9a66"),r=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=r.a},"2a58":function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var a={uIcon:i("c688").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-toast",class:[t.isShow?"u-show":"","u-type-"+t.config.type,"u-position-"+t.config.position],style:{zIndex:t.uZIndex}},[i("v-uni-view",{staticClass:"u-icon-wrap"},[t.config.icon?i("u-icon",{staticClass:"u-icon",attrs:{name:t.iconName,size:30,color:t.config.type}}):t._e()],1),i("v-uni-text",{staticClass:"u-text"},[t._v(t._s(t.config.title))])],1)},n=[]},"3b68":function(t,e,i){"use strict";i.r(e);var a=i("cc71"),r=i("497a");for(var n in r)"default"!==n&&function(t){i.d(e,t,(function(){return r[t]}))}(n);i("ba02");var o,s=i("f0c5"),d=Object(s["a"])(r["default"],a["b"],a["c"],!1,null,"3f6b82de",null,!1,a["a"],o);e["default"]=d.exports},"3c62":function(t,e,i){"use strict";var a=i("b6bd"),r=i.n(a);r.a},"3d8f":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/* 边框颜色 */\r\n/* 图片加载中颜色 */\r\n/* 行为相关颜色 */\r\n/*文字颜色*/.u-loading-circle[data-v-c76b6aea]{display:inline-block;vertical-align:middle;width:%?28?%;height:%?28?%;background:0 0;border-radius:50%;border:2px solid;border-color:#e5e5e5 #e5e5e5 #e5e5e5 #8f8d8e;-webkit-animation:u-circle-data-v-c76b6aea 1s linear infinite;animation:u-circle-data-v-c76b6aea 1s linear infinite}.u-loading-flower[data-v-c76b6aea]{width:20px;height:20px;display:inline-block;vertical-align:middle;-webkit-animation:a 1s steps(12) infinite;animation:u-flower-data-v-c76b6aea 1s steps(12) infinite;background:transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat;background-size:100%}@-webkit-keyframes u-flower-data-v-c76b6aea{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes u-flower-data-v-c76b6aea{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes u-circle-data-v-c76b6aea{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]),t.exports=e},"497a":function(t,e,i){"use strict";i.r(e);var a=i("9f69"),r=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=r.a},"5e5b":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("v-uni-view",{staticClass:"u-loading",class:"circle"==t.mode?"u-loading-circle":"u-loading-flower",style:[t.cricleStyle]}):t._e()},n=[]},"68b2":function(t,e,i){"use strict";i.r(e);var a=i("219a"),r=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=r.a},"6ad0":function(t,e,i){"use strict";var a=i("25fc"),r=i.n(a);r.a},"6fa7":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/* 边框颜色 */\r\n/* 图片加载中颜色 */\r\n/* 行为相关颜色 */\r\n/*文字颜色*/.u-switch[data-v-7be551fb]{position:relative;display:inline-block;-webkit-box-sizing:initial;box-sizing:initial;width:2em;height:1em;background-color:#fff;border:1px solid rgba(0,0,0,.1);border-radius:1em;-webkit-transition:background-color .3s;transition:background-color .3s;font-size:%?50?%}.u-switch__node[data-v-7be551fb]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;position:absolute;top:0;left:0;border-radius:100%;z-index:1;width:1em;height:1em;background-color:#fff;background-color:#fff;-webkit-box-shadow:0 3px 1px 0 rgba(0,0,0,.05),0 2px 2px 0 rgba(0,0,0,.1),0 3px 3px 0 rgba(0,0,0,.05);box-shadow:0 3px 1px 0 rgba(0,0,0,.05),0 2px 2px 0 rgba(0,0,0,.1),0 3px 3px 0 rgba(0,0,0,.05);box-shadow:0 3px 1px 0 rgba(0,0,0,.05),0 2px 2px 0 rgba(0,0,0,.1),0 3px 3px 0 rgba(0,0,0,.05);-webkit-transition:-webkit-transform .3s cubic-bezier(.3,1.05,.4,1.05);transition:-webkit-transform .3s cubic-bezier(.3,1.05,.4,1.05);transition:transform .3s cubic-bezier(.3,1.05,.4,1.05);transition:transform .3s cubic-bezier(.3,1.05,.4,1.05),-webkit-transform .3s cubic-bezier(.3,1.05,.4,1.05);-webkit-transition:-webkit-transform cubic-bezier(.3,1.05,.4,1.05);transition:-webkit-transform cubic-bezier(.3,1.05,.4,1.05);transition:transform cubic-bezier(.3,1.05,.4,1.05);transition:transform cubic-bezier(.3,1.05,.4,1.05),-webkit-transform cubic-bezier(.3,1.05,.4,1.05);transition:transform .3s cubic-bezier(.3,1.05,.4,1.05)}.u-switch__loading[data-v-7be551fb]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.u-switch--on[data-v-7be551fb]{background-color:#1989fa}.u-switch--on .u-switch__node[data-v-7be551fb]{-webkit-transform:translateX(1em);transform:translateX(1em)}.u-switch--disabled[data-v-7be551fb]{opacity:.4}',""]),t.exports=e},7046:function(t,e,i){"use strict";var a=i("09f0"),r=i.n(a);r.a},"7e0c":function(t,e,i){var a=i("962c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=i("4f06").default;r("70143714",a,!0,{sourceMap:!1,shadowMode:!1})},"938c":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/* 边框颜色 */\r\n/* 图片加载中颜色 */\r\n/* 行为相关颜色 */\r\n/*文字颜色*/.u-toast[data-v-20659286]{position:fixed;z-index:-1;-webkit-transition:opacity .3s;transition:opacity .3s;text-align:center;color:#fff;border-radius:%?8?%;background:#585858;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%;opacity:0;pointer-events:none;padding:0 %?40?%}.u-toast.u-show[data-v-20659286]{opacity:1}.u-text[data-v-20659286]{word-break:keep-all;white-space:nowrap;line-height:normal}.u-icon[data-v-20659286]{margin-right:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;line-height:normal}.u-position-center[data-v-20659286]{left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.u-position-top[data-v-20659286]{left:50%;top:20%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.u-position-bottom[data-v-20659286]{left:50%;bottom:20%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.u-type-primary[data-v-20659286]{color:#2979ff;background-color:#ecf5ff;border:1px solid #d7eafe}.u-type-success[data-v-20659286]{color:#19be6b;background-color:#dbf1e1;border:1px solid #bef5c8}.u-type-error[data-v-20659286]{color:#fa3534;background-color:#fef0f0;border:1px solid #fde2e2}.u-type-warning[data-v-20659286]{color:#f90;background-color:#fdf6ec;border:1px solid #faecd8}.u-type-info[data-v-20659286]{color:#909399;background-color:#f4f4f5;border:1px solid #ebeef5}.u-type-default[data-v-20659286]{color:#fff;background-color:#585858}',""]),t.exports=e},"962c":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/* 边框颜色 */\r\n/* 图片加载中颜色 */\r\n/* 行为相关颜色 */\r\n/*文字颜色*/[data-v-3f6b82de] .line{color:#c0c4cc;font-size:%?28?%}.page-body .top .item[data-v-3f6b82de]{padding:%?0?% %?20?%;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?28?%;line-height:%?100?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:solid %?2?% #f8f8f8;position:relative}.page-body .top .item .left[data-v-3f6b82de]{width:%?200?%}.page-body .top .item uni-input[data-v-3f6b82de]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;font-size:%?28?%}.page-body .top .right-arrow[data-v-3f6b82de]{display:inline-block;width:%?16?%;height:%?16?%;border-top:%?1?% solid #666;border-right:%?1?% solid #666;-webkit-transform:rotate(45deg);transform:rotate(45deg);position:absolute;right:%?20?%}.page-body .top .address uni-textarea[data-v-3f6b82de]{height:%?100?%;line-height:%?50?%;padding:%?10?% %?40?%;font-size:%?28?%}.page-body .top .site-clipboard[data-v-3f6b82de]{padding-right:%?40?%}.page-body .top .site-clipboard uni-textarea[data-v-3f6b82de]{height:%?150?%;background-color:#f7f7f7;line-height:%?60?%;margin:%?40?% auto;padding:%?20?%}.page-body .top .site-clipboard .clipboard[data-v-3f6b82de]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?26?%;color:#909399;height:%?80?%}.page-body .top .site-clipboard .clipboard .icon[data-v-3f6b82de]{margin-top:%?6?%;margin-left:%?10?%}.page-body .top .isdefault[data-v-3f6b82de]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.page-body .top .isdefault .tips[data-v-3f6b82de]{font-size:%?24?%;color:#999}',""]),t.exports=e},"9a66":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"u-switch",props:{loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},size:{type:[Number,String],default:50},activeColor:{type:String,default:"#2979ff"},inactiveColor:{type:String,default:"#ffffff"},value:{type:Boolean,default:!1},vibrateShort:{type:Boolean,default:!1},activeValue:{type:[Number,String,Boolean],default:!0},inactiveValue:{type:[Number,String,Boolean],default:!1}},data:function(){return{}},computed:{switchStyle:function(){var t={};return t.fontSize=this.size+"rpx",t.backgroundColor=this.value?this.activeColor:this.inactiveColor,t},loadingColor:function(){return this.value?this.activeColor:null}},methods:{onClick:function(){var t=this;this.disabled||this.loading||(this.vibrateShort&&uni.vibrateShort(),this.$emit("input",!this.value),this.$nextTick((function(){t.$emit("change",t.value?t.activeValue:t.inactiveValue)})))}}};e.default=a},"9bee":function(t,e,i){"use strict";i.r(e);var a=i("1616"),r=i("68b2");for(var n in r)"default"!==n&&function(t){i.d(e,t,(function(){return r[t]}))}(n);i("3c62");var o,s=i("f0c5"),d=Object(s["a"])(r["default"],a["b"],a["c"],!1,null,"41917922",null,!1,a["a"],o);e["default"]=d.exports},"9f69":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{from:"",region_code:[],addressData:{address_id:0,is_default:!1},region_show:!1,isLoading:!1,distinguishAddress:""}},onLoad:function(t){this.app.isLogin(this),this.from=t.from;var e="新增地址";"edit"===t.type&&(e="编辑地址",this.manageType="edit",this.addressData=JSON.parse(t.data),this.region_code=[this.addressData.province,this.addressData.city,this.addressData.district],this.addressData.regionIds=this.addressData.province+","+this.addressData.city+","+this.addressData.district,1==this.addressData.is_default?this.addressData.is_default=!0:this.addressData.is_default=!1),e=this.app.langReplace(e),uni.setNavigationBarTitle({title:e})},methods:{switchChange:function(t){this.addressData.is_default=t.detail},confirmRegion:function(t){this.addressData.merger_name=t.province.label+","+t.city.label+","+t.area.label,this.addressData.region_code=[t.province.value,t.city.value,t.area.value],this.addressData.regionIds=t.province.value+","+t.city.value+","+t.area.value},runDistinguishAddress:function(){var t=this;if(this.distinguishAddress){var e={};e.address=this.distinguishAddress,this.isLoading=!0,this.$u.post("member/api.address/DistinguishAddress",e).then((function(e){if(t.isLoading=!1,0==e.code)return!1;t.addressData.province=0;var i="",a="",r="";e.data.province.region_id>0&&(t.addressData.province=e.data.province.region_id,i=e.data.province.region_name),t.addressData.city=0,e.data.city.region_id>0&&(t.addressData.city=e.data.city.region_id,a=e.data.city.region_name),t.addressData.district=0,e.data.district.region_id>0&&(t.addressData.district=e.data.district.region_id,r=e.data.district.region_name),t.region_code=[t.addressData.province,t.addressData.city,t.addressData.district],t.addressData.regionIds=t.addressData.province+","+t.addressData.city+","+t.addressData.district,t.addressData.merger_name=i+","+a+","+r,t.addressData.consignee=e.data.name,t.addressData.mobile=e.data.mobile,t.addressData.address=e.data.info})).catch((function(e){t.isLoading=!1}))}else this.$refs.uToast.show({title:this.app.langReplace("请贴贴需要识别的地址信息"),type:"error",position:"top"})},submit:function(){var t=this;if(1==this.isLoading)return!1;var e=this.addressData;if(e.consignee)if(/(^1[0-9]{10}$)/.test(e.mobile))if(e.address){this.isLoading=!0;var i=getCurrentPages(),a=i[i.length-2];console.log(a);var r="edit"==this.manageType?"member/api.address/edit":"member/api.address/add";this.$u.post(r,e).then((function(e){t.isLoading=!1;var i=("edit"==t.manageType?"修改":"添加")+"成功";i=t.app.langReplace(i),t.$refs.uToast.show({title:i,type:"success",position:"top"}),uni.setStorageSync("address_id",e.data.address_id),setTimeout((function(){a.getAddress(),uni.navigateBack()}),800)})).catch((function(e){t.isLoading=!1}))}else this.$refs.uToast.show({title:this.app.langReplace("请输入详细地址"),type:"error",position:"top"});else this.$refs.uToast.show({title:this.app.langReplace("请输入正确的手机号码"),type:"error",position:"top"});else this.$refs.uToast.show({title:this.app.langReplace("请填写收货人姓名"),type:"error",position:"top"})}}};e.default=a},b39e:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/* 边框颜色 */\r\n/* 图片加载中颜色 */\r\n/* 行为相关颜色 */\r\n/*文字颜色*/.u-btn[data-v-41917922]::after{border:none}.u-btn[data-v-41917922]{position:relative;border:0;display:inline-block;overflow:hidden;line-height:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;cursor:pointer;padding:0 %?40?%;z-index:1;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .15s;transition:all .15s}.u-btn--bold-border[data-v-41917922]{border:1px solid #fff}.u-btn--default[data-v-41917922]{color:#606266;border-color:#c0c4cc;background-color:#fff}.u-btn--primary[data-v-41917922]{color:#fff;border-color:#2979ff;background-color:#2979ff}.u-btn--success[data-v-41917922]{color:#fff;border-color:#19be6b;background-color:#19be6b}.u-btn--error[data-v-41917922]{color:#fff;border-color:#fa3534;background-color:#fa3534}.u-btn--warning[data-v-41917922]{color:#fff;border-color:#f90;background-color:#f90}.u-btn--default--disabled[data-v-41917922]{color:#fff;border-color:#e4e7ed;background-color:#fff}.u-btn--primary--disabled[data-v-41917922]{color:#fff!important;border-color:#a0cfff!important;background-color:#a0cfff!important}.u-btn--success--disabled[data-v-41917922]{color:#fff!important;border-color:#71d5a1!important;background-color:#71d5a1!important}.u-btn--error--disabled[data-v-41917922]{color:#fff!important;border-color:#fab6b6!important;background-color:#fab6b6!important}.u-btn--warning--disabled[data-v-41917922]{color:#fff!important;border-color:#fcbd71!important;background-color:#fcbd71!important}.u-btn--primary--plain[data-v-41917922]{color:#2979ff!important;border-color:#a0cfff!important;background-color:#ecf5ff!important}.u-btn--success--plain[data-v-41917922]{color:#19be6b!important;border-color:#71d5a1!important;background-color:#dbf1e1!important}.u-btn--error--plain[data-v-41917922]{color:#fa3534!important;border-color:#fab6b6!important;background-color:#fef0f0!important}.u-btn--warning--plain[data-v-41917922]{color:#f90!important;border-color:#fcbd71!important;background-color:#fdf6ec!important}.u-hairline-border[data-v-41917922]:after{content:" ";position:absolute;pointer-events:none;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transform-origin:0 0;transform-origin:0 0;left:0;top:0;width:199.8%;height:199.7%;-webkit-transform:scale(.5);transform:scale(.5);border:1px solid currentColor;z-index:1}.u-wave-ripple[data-v-41917922]{z-index:0;position:absolute;border-radius:100%;background-clip:padding-box;pointer-events:none;-webkit-user-select:none;user-select:none;-webkit-transform:scale(0);transform:scale(0);opacity:1;-webkit-transform-origin:center;transform-origin:center}.u-wave-ripple.u-wave-active[data-v-41917922]{opacity:0;-webkit-transform:scale(2);transform:scale(2);-webkit-transition:opacity 1s linear,-webkit-transform .4s linear;transition:opacity 1s linear,-webkit-transform .4s linear;transition:opacity 1s linear,transform .4s linear;transition:opacity 1s linear,transform .4s linear,-webkit-transform .4s linear}.u-round-circle[data-v-41917922]{border-radius:%?100?%}.u-round-circle[data-v-41917922]::after{border-radius:%?100?%}.u-loading[data-v-41917922]::after{background-color:hsla(0,0%,100%,.35)}.u-size-default[data-v-41917922]{font-size:%?30?%;height:%?80?%;line-height:%?80?%}.u-size-medium[data-v-41917922]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;width:auto;font-size:%?26?%;height:%?70?%;line-height:%?70?%;padding:0 %?80?%}.u-size-mini[data-v-41917922]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;width:auto;font-size:%?22?%;padding-top:1px;height:%?50?%;line-height:%?50?%;padding:0 %?20?%}.u-primary-plain-hover[data-v-41917922]{color:#fff!important;background:#2b85e4!important}.u-default-plain-hover[data-v-41917922]{color:#2b85e4!important;background:#ecf5ff!important}.u-success-plain-hover[data-v-41917922]{color:#fff!important;background:#18b566!important}.u-warning-plain-hover[data-v-41917922]{color:#fff!important;background:#f29100!important}.u-error-plain-hover[data-v-41917922]{color:#fff!important;background:#dd6161!important}.u-info-plain-hover[data-v-41917922]{color:#fff!important;background:#82848a!important}.u-default-hover[data-v-41917922]{color:#2b85e4!important;border-color:#2b85e4!important;background-color:#ecf5ff!important}.u-primary-hover[data-v-41917922]{background:#2b85e4!important;color:#fff}.u-success-hover[data-v-41917922]{background:#18b566!important;color:#fff}.u-info-hover[data-v-41917922]{background:#82848a!important;color:#fff}.u-warning-hover[data-v-41917922]{background:#f29100!important;color:#fff}.u-error-hover[data-v-41917922]{background:#dd6161!important;color:#fff}',""]),t.exports=e},b6bd:function(t,e,i){var a=i("b39e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=i("4f06").default;r("7f7daf40",a,!0,{sourceMap:!1,shadowMode:!1})},ba02:function(t,e,i){"use strict";var a=i("7e0c"),r=i.n(a);r.a},c8ef:function(t,e,i){"use strict";var a=i("e86f"),r=i.n(a);r.a},cc71:function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var a={uSwitch:i("0497").default,uButton:i("9bee").default,uToast:i("e6b0").default,uPicker:i("a476").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"page-body",class:[t.app.setCStyle(t.from)]},[i("v-uni-view",{staticClass:"top"},[i("v-uni-view",{staticClass:"item mlr20 br20 mt20"},[i("v-uni-view",{staticClass:"left"},[t._v(t._s(t.app.langReplace("收货人")))]),i("v-uni-input",{attrs:{type:"text","placeholder-class":"line",placeholder:t.app.langReplace("请填写收货人姓名")},model:{value:t.addressData.consignee,callback:function(e){t.$set(t.addressData,"consignee",e)},expression:"addressData.consignee"}})],1),i("v-uni-view",{staticClass:"item mlr20 br20 mt20"},[i("v-uni-view",{staticClass:"left"},[t._v(t._s(t.app.langReplace("手机号码")))]),i("v-uni-input",{attrs:{type:"number","placeholder-class":"line",placeholder:t.app.langReplace("请填写收货人手机号")},model:{value:t.addressData.mobile,callback:function(e){t.$set(t.addressData,"mobile",e)},expression:"addressData.mobile"}})],1),i("v-uni-view",{staticClass:"item mlr20 br20 mt20",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.region_show=!0}}},[i("v-uni-view",{staticClass:"left"},[t._v(t._s(t.app.langReplace("所在地区")))]),i("v-uni-input",{attrs:{disabled:!0,type:"text","placeholder-class":"line",placeholder:t.app.langReplace("省市区县")},model:{value:t.addressData.merger_name,callback:function(e){t.$set(t.addressData,"merger_name",e)},expression:"addressData.merger_name"}}),i("v-uni-text",{staticClass:"right-arrow"})],1),i("v-uni-view",{staticClass:"item address mlr20 br20 mt20"},[i("v-uni-view",{staticClass:"left"},[t._v(t._s(t.app.langReplace("详细地址")))]),i("v-uni-textarea",{attrs:{type:"text","placeholder-class":"line",placeholder:t.app.langReplace("详细地址：如道路、小区、栋楼号等")},model:{value:t.addressData.address,callback:function(e){t.$set(t.addressData,"address",e)},expression:"addressData.address"}})],1),i("v-uni-view",{staticClass:"isdefault mlr20 bg-white p20 br20 mt20"},[i("v-uni-view",{staticClass:"left"},[i("v-uni-view",{staticClass:"set"},[t._v(t._s(t.app.langReplace("设置默认地址")))]),i("v-uni-view",{staticClass:"tips"},[t._v(t._s(t.app.langReplace("每次下单会默认推荐该地址")))])],1),i("v-uni-view",{staticClass:"right"},[i("u-switch",{attrs:{"active-color":"#fc4a5b"},model:{value:t.addressData.is_default,callback:function(e){t.$set(t.addressData,"is_default",e)},expression:"addressData.is_default"}})],1)],1),t.addressData.address_id<1?i("v-uni-view",{staticClass:"item mt50"},[i("v-uni-textarea",{staticClass:" h150",attrs:{type:"text","placeholder-class":"line",placeholder:t.app.langReplace("贴贴地址信息,进行识别")},model:{value:t.distinguishAddress,callback:function(e){t.distinguishAddress=e},expression:"distinguishAddress"}}),i("u-button",{attrs:{size:"mini",type:"warning"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.runDistinguishAddress.apply(void 0,arguments)}}},[t._v(t._s(t.app.langReplace("识别")))])],1):t._e()],1),i("u-toast",{ref:"uToast"}),i("u-picker",{ref:"uPicker",attrs:{mode:"region","area-code":t.region_code},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.confirmRegion.apply(void 0,arguments)}},model:{value:t.region_show,callback:function(e){t.region_show=e},expression:"region_show"}}),i("v-uni-button",{staticClass:"bottom-btn primarybtn",attrs:{type:"warning",shape:"circle"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v(t._s(t.app.langReplace("提交")))])],1)},n=[]},dd04:function(t,e,i){"use strict";i.r(e);var a=i("5e5b"),r=i("1544");for(var n in r)"default"!==n&&function(t){i.d(e,t,(function(){return r[t]}))}(n);i("6ad0");var o,s=i("f0c5"),d=Object(s["a"])(r["default"],a["b"],a["c"],!1,null,"c76b6aea",null,!1,a["a"],o);e["default"]=d.exports},e6b0:function(t,e,i){"use strict";i.r(e);var a=i("2a58"),r=i("0152");for(var n in r)"default"!==n&&function(t){i.d(e,t,(function(){return r[t]}))}(n);i("7046");var o,s=i("f0c5"),d=Object(s["a"])(r["default"],a["b"],a["c"],!1,null,"20659286",null,!1,a["a"],o);e["default"]=d.exports},e86f:function(t,e,i){var a=i("6fa7");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=i("4f06").default;r("be9b03cc",a,!0,{sourceMap:!1,shadowMode:!1})},f7fe:function(t,e,i){"use strict";i("c975"),i("a9e3"),i("b64b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"u-toast",props:{zIndex:{type:[Number,String],default:""}},data:function(){return{isShow:!1,timer:null,config:{params:{},title:"",type:"",duration:2e3,isTab:!1,url:"",icon:!0,position:"center",callback:null,back:!1}}},computed:{iconName:function(){if(["error","warning","success","info"].indexOf(this.config.type)>=0&&this.config.icon){var t=this.$u.type2icon(this.config.type);return t}},uZIndex:function(){return this.isShow?this.zIndex?this.zIndex:this.$u.zIndex.toast:"999999"}},methods:{show:function(t){var e=this;this.config=this.$u.deepMerge(this.config,t),this.timer&&(clearTimeout(this.timer),this.timer=null),this.isShow=!0,this.timer=setTimeout((function(){e.isShow=!1,clearTimeout(e.timer),e.timer=null,"function"===typeof e.config.callback&&e.config.callback(),e.timeEnd()}),this.config.duration)},hide:function(){this.isShow=!1,this.timer&&(clearTimeout(this.timer),this.timer=null)},timeEnd:function(){if(this.config.url){if("/"!=this.config.url[0]&&(this.config.url="/"+this.config.url),Object.keys(this.config.params).length){var t="";/.*\/.*\?.*=.*/.test(this.config.url)?(t=this.$u.queryParams(this.config.params,!1),this.config.url=this.config.url+"&"+t):(t=this.$u.queryParams(this.config.params),this.config.url+=t)}this.config.isTab?uni.switchTab({url:this.config.url}):uni.navigateTo({url:this.config.url})}else this.config.back&&this.$u.route({type:"back"})}}};e.default=a},ffce:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"u-loading",props:{mode:{type:String,default:"circle"},color:{type:String,default:"#c7c7c7"},size:{type:[String,Number],default:"34"},show:{type:Boolean,default:!0}},computed:{cricleStyle:function(){var t={};return t.width=this.size+"rpx",t.height=this.size+"rpx","circle"==this.mode&&(t.borderColor="#e4e4e4 #e4e4e4 #e4e4e4 ".concat(this.color?this.color:"#c7c7c7")),t}}};e.default=a}}]);