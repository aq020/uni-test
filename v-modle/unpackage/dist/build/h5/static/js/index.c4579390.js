(function(n){function e(e){for(var i,r,u=e[0],c=e[1],d=e[2],s=0,l=[];s<u.length;s++)r=u[s],a[r]&&l.push(a[r][0]),a[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(n[i]=c[i]);g&&g(e);while(l.length)l.shift()();return o.push.apply(o,d||[]),t()}function t(){for(var n,e=0;e<o.length;e++){for(var t=o[e],i=!0,r=1;r<t.length;r++){var c=t[r];0!==a[c]&&(i=!1)}i&&(o.splice(e--,1),n=u(u.s=t[0]))}return n}var i={},a={index:0},o=[];function r(n){return u.p+"static/js/"+({"pages-index-index":"pages-index-index","pages-index-v1":"pages-index-v1","pages-index-v2":"pages-index-v2","pages-index-v3":"pages-index-v3","pages-index-v4":"pages-index-v4","pages-index-v5":"pages-index-v5","pages-index-v6":"pages-index-v6"}[n]||n)+"."+{"pages-index-index":"72c14d2d","pages-index-v1":"9a1eaef9","pages-index-v2":"f662e14e","pages-index-v3":"273cb146","pages-index-v4":"8e177b35","pages-index-v5":"3c7bc768","pages-index-v6":"5152e01d"}[n]+".js"}function u(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(n){var e=[],t=a[n];if(0!==t)if(t)e.push(t[2]);else{var i=new Promise(function(e,i){t=a[n]=[e,i]});e.push(t[2]=i);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=r(n),o=function(e){c.onerror=c.onload=null,clearTimeout(d);var t=a[n];if(0!==t){if(t){var i=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,r=new Error("Loading chunk "+n+" failed.\n("+i+": "+o+")");r.type=i,r.request=o,t[1](r)}a[n]=void 0}};var d=setTimeout(function(){o({type:"timeout",target:c})},12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},u.m=n,u.c=i,u.d=function(n,e,t){u.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},u.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},u.t=function(n,e){if(1&e&&(n=u(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)u.d(t,i,function(e){return n[e]}.bind(null,i));return t},u.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return u.d(e,"a",e),e},u.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},u.p="/",u.oe=function(n){throw console.error(n),n};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var g=d;o.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("3b46")},1447:function(n,e,t){"use strict";var i,a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("App",{attrs:{keepAliveInclude:n.keepAliveInclude}})},o=[];t.d(e,"b",function(){return a}),t.d(e,"c",function(){return o}),t.d(e,"a",function(){return i})},"3b46":function(n,e,t){"use strict";var i=t("288e"),a=i(t("cebc"));t("cadf"),t("551c"),t("097d"),t("5d59"),t("1c31"),t("921b");var o=i(t("e143")),r=i(t("e3c6"));o.default.config.productionTip=!1,r.default.mpType="app";var u=new o.default((0,a.default)({},r.default));u.$mount()},"5d59":function(n,e,t){"use strict";(function(n){var e=t("288e"),i=e(t("5176")),a=e(t("e143"));n["____E300D3F____"]=!0,delete n["____E300D3F____"],n.__uniConfig={tabBar:{position:"bottom",list:[{text:"主页",pagePath:"pages/index/index",iconPath:"",selectedIconPath:"",redDot:!1,badge:""},{text:"设置",pagePath:"pages/index/v1",iconPath:"",selectedIconPath:"",redDot:!1,badge:""}],color:"#333333",selectedColor:"#007AFF",backgroundColor:"#f7f7fa",borderStyle:"black"},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"邓振球",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}},n.__uniConfig.router={mode:"hash",base:"/"},n.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:3e3},n.__uniConfig.debug=!1,n.__uniConfig.networkTimeout={request:6e3,connectSocket:6e3,uploadFile:6e3,downloadFile:6e3},n.__uniConfig.sdkConfigs={},n.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",n.__uniConfig.nvue={"flex-direction":"column"},a.default.component("pages-index-index",function(n){var e={component:t.e("pages-index-index").then(function(){return n(t("a30d"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e}),a.default.component("pages-index-v1",function(n){var e={component:t.e("pages-index-v1").then(function(){return n(t("69c3"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e}),a.default.component("pages-index-v2",function(n){var e={component:t.e("pages-index-v2").then(function(){return n(t("51ec"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e}),a.default.component("pages-index-v3",function(n){var e={component:t.e("pages-index-v3").then(function(){return n(t("0231"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e}),a.default.component("pages-index-v4",function(n){var e={component:t.e("pages-index-v4").then(function(){return n(t("4cc7"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e}),a.default.component("pages-index-v5",function(n){var e={component:t.e("pages-index-v5").then(function(){return n(t("83a2"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e}),a.default.component("pages-index-v6",function(n){var e={component:t.e("pages-index-v6").then(function(){return n(t("bf47"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e}),n.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(n){return n("Page",{props:(0,i.default)({isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0},__uniConfig.globalStyle,{navigationBarTitleText:"邓振球"})},[n("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0,windowTop:44}},{path:"/pages/index/v1",component:{render:function(n){return n("Page",{props:(0,i.default)({isQuit:!0,isTabBar:!0,tabBarIndex:1},__uniConfig.globalStyle,{navigationBarTitleText:"邓振球1"})},[n("pages-index-v1",{slot:"page"})])}},meta:{id:2,name:"pages-index-v1",isNVue:!1,pagePath:"pages/index/v1",isQuit:!0,isTabBar:!0,tabBarIndex:1,windowTop:44}},{path:"/pages/index/v2",component:{render:function(n){return n("Page",{props:(0,i.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"邓振球2"})},[n("pages-index-v2",{slot:"page"})])}},meta:{name:"pages-index-v2",isNVue:!1,pagePath:"pages/index/v2",windowTop:44}},{path:"/pages/index/v3",component:{render:function(n){return n("Page",{props:(0,i.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"邓振球3"})},[n("pages-index-v3",{slot:"page"})])}},meta:{name:"pages-index-v3",isNVue:!1,pagePath:"pages/index/v3",windowTop:44}},{path:"/pages/index/v4",component:{render:function(n){return n("Page",{props:(0,i.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"邓振球4"})},[n("pages-index-v4",{slot:"page"})])}},meta:{name:"pages-index-v4",isNVue:!1,pagePath:"pages/index/v4",windowTop:44}},{path:"/pages/index/v5",component:{render:function(n){return n("Page",{props:(0,i.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"邓振球5"})},[n("pages-index-v5",{slot:"page"})])}},meta:{name:"pages-index-v5",isNVue:!1,pagePath:"pages/index/v5",windowTop:44}},{path:"/pages/index/v6",component:{render:function(n){return n("Page",{props:(0,i.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"邓振球6"})},[n("pages-index-v6",{slot:"page"})])}},meta:{name:"pages-index-v6",isNVue:!1,pagePath:"pages/index/v6",windowTop:44}},{path:"/preview-image",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}]}).call(this,t("c8ba"))},"7d63":function(n,e,t){"use strict";var i=t("df40"),a=t.n(i);a.a},b17d:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};e.default=i},c5f3:function(n,e,t){e=n.exports=t("2350")(!1),e.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */",""])},c616:function(n,e,t){"use strict";t.r(e);var i=t("b17d"),a=t.n(i);for(var o in i)"default"!==o&&function(n){t.d(e,n,function(){return i[n]})}(o);e["default"]=a.a},df40:function(n,e,t){var i=t("c5f3");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var a=t("4f06").default;a("b619bd9c",i,!0,{sourceMap:!1,shadowMode:!1})},e3c6:function(n,e,t){"use strict";t.r(e);var i=t("1447"),a=t("c616");for(var o in a)"default"!==o&&function(n){t.d(e,n,function(){return a[n]})}(o);t("7d63");var r,u=t("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=c.exports},f833:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={appid:"__UNI__E300D3F"};e.default=i},fc89:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={pages:{"pages/index/index":{navigationBarTitleText:"邓振球"},"pages/index/v1":{navigationBarTitleText:"邓振球1"},"pages/index/v2":{navigationBarTitleText:"邓振球2"},"pages/index/v3":{navigationBarTitleText:"邓振球3"},"pages/index/v4":{navigationBarTitleText:"邓振球4"},"pages/index/v5":{navigationBarTitleText:"邓振球5"},"pages/index/v6":{navigationBarTitleText:"邓振球6"}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"邓振球",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}};e.default=i}});