/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(t,e,n){t.exports=n(152)},122:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=122},137:function(t,e,n){"use strict";var r=n(46);n.n(r).a},138:function(t,e,n){(t.exports=n(49)(!1)).push([t.i,".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""])},139:function(t,e,n){"use strict";var r=n(47);n.n(r).a},140:function(t,e,n){(t.exports=n(49)(!1)).push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#fff;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}",""])},147:function(t,e,n){"use strict";var r=n(48);n.n(r).a},148:function(t,e,n){(t.exports=n(49)(!1)).push([t.i,"html{font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}",""])},150:function(t,e,n){var map={"./general.js":151};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=150},151:function(t,e,n){"use strict";n.r(e),n.d(e,"state",function(){return r}),n.d(e,"mutations",function(){return o}),n.d(e,"getters",function(){return c}),n.d(e,"actions",function(){return l});n(43);var r=function(){return{audioSources:["none","music","microphone"],audioSource:"none"}},o={set:function(t,e){var n=e.name,r=e.value;t[n]=r}},c={state:function(t){return t}},l={}},152:function(t,e,n){"use strict";n.r(e);n(74),n(36),n(37);var r=n(28),o=(n(59),n(109),n(10)),c=(n(62),n(64),n(86),n(21),n(67),n(43),n(66),n(114),n(121),n(0)),l=(n(71),n(122)),f=l.keys();function d(t){var e=l(t);return e.default||e}var h={},m=!0,v=!1,x=void 0;try{for(var y,w=f[Symbol.iterator]();!(m=(y=w.next()).done);m=!0){var _=y.value;h[_.replace(/^\.\//,"").replace(/\.(js|mjs|ts)$/,"")]=d(_)}}catch(t){v=!0,x=t}finally{try{m||null==w.return||w.return()}finally{if(v)throw x}}var C=h,k=(n(93),n(123),n(124),n(126),n(128),n(129),n(132),n(12)),$=function(){return{}};function j(t){c.a.config.errorHandler&&c.a.config.errorHandler(t)}function E(t,e){var n=t.options.data||$;!e&&t.options.hasAsyncData||(t.options.hasAsyncData=!0,t.options.data=function(){var data=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),Object(k.a)({},data,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data))}function O(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=c.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function S(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function R(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).reduce(function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r},[])}))}function T(t){return Promise.all(R(t,function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e,n,r,o){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return r.components[o]=O(e),t.abrupt("return",r.components[o]);case 6:case"end":return t.stop()}},t,this)}));return function(e,n,r,o){return t.apply(this,arguments)}}()))}function N(t){return A.apply(this,arguments)}function A(){return(A=Object(o.a)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T(e);case 2:return t.abrupt("return",Object(k.a)({},e,{meta:S(e).map(function(t,n){return Object(k.a)({},t.options.meta,(e.matched[n]||{}).meta)})}));case 3:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function M(t,e){return L.apply(this,arguments)}function L(){return(L=Object(o.a)(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,store:e.store,payload:n.payload,error:n.error,base:"/microphone",env:{}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,path,n){if(t){e.context._redirected=!0;var o=Object(r.a)(path);if("number"==typeof t||"undefined"!==o&&"object"!==o||(n=path||{},path=t,o=Object(r.a)(path),t=302),"object"===o&&(path=e.router.resolve(path).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))throw path=K(path,n),window.location.replace(path),new Error("ERR_REDIRECT");e.context.next({path:path,query:n,status:t})}},e.context.nuxtState=window.__NUXT__),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=9;break}return t.next=8,N(n.route);case 8:e.context.route=t.sent;case 9:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=15;break}return t.next=14,N(n.from);case 14:e.context.from=t.sent;case 15:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function U(t,e){var n;return(n=2===t.length?new Promise(function(n){t(e,function(t,data){t&&e.error(t),n(data=data||{})})}):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function P(base,t){var path=window.location.pathname;return"hash"===t?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),decodeURI(path||"/")+window.location.search+window.location.hash)}function D(t,e){return function(t){for(var e=new Array(t.length),i=0;i<t.length;i++)"object"===Object(r.a)(t[i])&&(e[i]=new RegExp("^(?:"+t[i].pattern+")$"));return function(n,r){for(var path="",data=n||{},o=r||{},c=o.pretty?J:encodeURIComponent,l=0;l<t.length;l++){var f=t[l];if("string"!=typeof f){var d=data[f.name||"pathMatch"],h=void 0;if(null==d){if(f.optional){f.partial&&(path+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(Array.isArray(d)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(d)+"`");if(0===d.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var m=0;m<d.length;m++){if(h=c(d[m]),!e[l].test(h))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(h)+"`");path+=(0===m?f.prefix:f.delimiter)+h}}else{if(h=f.asterisk?encodeURI(d).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):c(d),!e[l].test(h))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+h+'"');path+=f.prefix+h}}else path+=f}return path}}(function(t,e){var n,r=[],o=0,c=0,path="",l=e&&e.delimiter||"/";for(;null!=(n=B.exec(t));){var f=n[0],d=n[1],h=n.index;if(path+=t.slice(c,h),c=h+f.length,d)path+=d[1];else{var m=t[c],v=n[2],x=n[3],y=n[4],w=n[5],_=n[6],C=n[7];path&&(r.push(path),path="");var k=null!=v&&null!=m&&m!==v,$="+"===_||"*"===_,j="?"===_||"*"===_,E=n[2]||l,pattern=y||w;r.push({name:x||o++,prefix:v||"",delimiter:E,optional:j,repeat:$,partial:k,asterisk:!!C,pattern:pattern?H(pattern):C?".*":"[^"+F(E)+"]+?"})}}c<t.length&&(path+=t.substr(c));path&&r.push(path);return r}(t,e))}function I(t,e){var n={},r=Object(k.a)({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}function z(t){var e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e="[".concat(t.constructor.name,"]")}return Object(k.a)({},t,{message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500})}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var B=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function J(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function F(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function H(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function K(t,e){var n,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):t.startsWith("//")&&(t=t.substring(2));var o,c=t.split("/"),l=(n?n+"://":"//")+c.shift(),path=c.filter(Boolean).join("/");return 2===(c=path.split("#")).length&&(path=c[0],o=c[1]),l+=path?"/"+path:"",e&&"{}"!==JSON.stringify(e)&&(l+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),l+=o?"#"+o:""}var G=n(98),Q=n.n(G),X=n(72),V=function(){return Promise.all([n.e(4),n.e(2)]).then(n.bind(null,157)).then(function(t){return t.default||t})};c.a.use(X.a),window.history.scrollRestoration="manual";var W=function(t,e,n){var r=!1;return t.matched.length<2&&t.matched.every(function(t){return!1!==t.components.default.options.scrollToTop})?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new Promise(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})};var Y=n(99),Z=n.n(Y),tt=Object(k.a)({},Z.a,{name:"NoSsr"}),et={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render:function(t,e){var n=e.parent,data=e.data,r=e.props;data.nuxtChild=!0;for(var o=n,c=n.$nuxt.nuxt.transitions,l=n.$nuxt.nuxt.defaultTransition,f=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&f++,n=n.$parent;data.nuxtChildDepth=f;var d=c[f]||l,h={};nt.forEach(function(t){void 0!==d[t]&&(h[t]=d[t])});var m={};ot.forEach(function(t){"function"==typeof d[t]&&(m[t]=d[t].bind(o))});var v=m.beforeEnter;m.beforeEnter=function(t){if(window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")}),v)return v.call(o,t)};var x=[t("router-view",data)];return r.keepAlive&&(x=[t("keep-alive",{props:r.keepAliveProps},x)]),t("transition",{props:h,on:m},x)}},nt=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],ot=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],it={name:"NuxtError",props:{error:{type:Object,default:null}},head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}},at=(n(137),n(27)),st=Object(at.a)(it,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?n("p",{staticClass:"description"},[n("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null).exports,ut={name:"Nuxt",components:{NuxtChild:et,NuxtError:st},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||D(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},beforeCreate:function(){c.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render:function(t){return this.nuxt.err?t("NuxtError",{props:{error:this.nuxt.err}}):t("NuxtChild",{key:this.routerViewKey,props:this.$props})}},ct={name:"NuxtLoading",data:function(){return{percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}},computed:{left:function(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy:function(){this.clear()},methods:{clear:function(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start:function(){var t=this;return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(function(){return t.startTimer()},this.throttle):this.startTimer(),this},set:function(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get:function(){return this.percent},increase:function(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease:function(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause:function(){return clearInterval(this._timer),this},resume:function(){return this.startTimer(),this},finish:function(){return this.percent=this.reversed?0:100,this.hide(),this},hide:function(){var t=this;return this.clear(),setTimeout(function(){t.show=!1,t.$nextTick(function(){t.percent=0,t.reversed=!1})},500),this},fail:function(){return this.canSucceed=!1,this},startTimer:function(){var t=this;this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(function(){t.skipTimerCount>0?t.skipTimerCount--:(t.reversed?t.decrease(t._cut):t.increase(t._cut),t.continuous&&(t.percent>=100?(t.skipTimerCount=1,t.reversed=!t.reversed):t.percent<=0&&(t.skipTimerCount=1,t.reversed=!t.reversed)))},100)}},render:function(t){var e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}},lt=(n(139),Object(at.a)(ct,void 0,void 0,!1,null,null,null).exports),ft=(n(141),n(100)),pt=n(101),ht=function(){function t(){Object(ft.a)(this,t)}return Object(pt.a)(t,[{key:"mounted",value:function(){this.initAudio()}},{key:"initAudio",value:function(){this.mediaDevices=navigator.mediaDevices||(navigator.mozGetUserMedia||navigator.webkitGetUserMedia?{getUserMedia:function(t){return new Promise(function(e,n){(navigator.mozGetUserMedia||navigator.webkitGetUserMedia).call(navigator,t,e,n)})}}:null),this.mediaDevices?this.mediaDevices.getUserMedia({audio:!0}).then(function(t){document.getElementById("button").addEventListener("click",function(){var e=new(window.AudioContext||window.webkitAudioContext),n=e.createMediaStreamSource(t),r=e.createAnalyser(t);r.fftSize=1024,n.connect(r);var data=new Uint8Array(r.fftSize);!function t(){r.getByteFrequencyData(data);var e=0;data.forEach(function(t){e+=t}),console.log(e),document.getElementById("sum").innerHTML=e,requestAnimationFrame(t)}()},!1)}):console.log("getUserMedia() not supported.")}}]),t}(),mt={mounted:function(){this.three=new ht,this.three.mounted()}},vt=(n(147),{_default:Object(at.a)(mt,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("button",{staticStyle:{display:"none"},attrs:{id:"button"}},[this._v("button")]),this._v(" "),e("nuxt")],1)},[],!1,null,null,null).exports}),xt={head:{title:"microphone",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"My shining Nuxt.js project"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],style:[],script:[]},render:function(t,e){var n=t("NuxtLoading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),c=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter:function(t){window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")})}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,c])},data:function(){return{isOnline:!0,layout:null,layoutName:""}},beforeCreate:function(){c.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){c.a.prototype.$nuxt=this,window.$nuxt=this,this.refreshOnlineStatus(),window.addEventListener("online",this.refreshOnlineStatus),window.addEventListener("offline",this.refreshOnlineStatus),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline:function(){return!this.isOnline}},methods:{refreshOnlineStatus:function(){void 0===window.navigator.onLine?this.isOnline=!0:this.isOnline=window.navigator.onLine},errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&vt["_"+t]||(t="default"),this.layoutName=t,this.layout=vt["_"+t],this.layout},loadLayout:function(t){return t&&vt["_"+t]||(t="default"),Promise.resolve(vt["_"+t])}},components:{NuxtLoading:lt}},gt=(n(149),n(73));c.a.use(gt.a);var yt,bt=console,wt=["state","getters","actions","mutations"],_t={};!function(){var t=(yt=n(150)).keys().sort(function(t,e){var n=t.split("/").length-e.split("/").length;return 0===n&&t.includes("/index.")?n=-1:0===n&&e.includes("/index.")&&(n=1),n}),e=t.find(function(path){return path.includes("./index.")});if(e&&(_t=kt(e,{isRoot:!0})),"function"==typeof _t)return bt.warn("Classic mode for store/ is deprecated and will be removed in Nuxt 3.");_t.modules=_t.modules||{};var r=!0,o=!1,c=void 0;try{for(var l,f=t[Symbol.iterator]();!(r=(l=f.next()).done);r=!0){var path=l.value,d=path.replace(/^\.\//,"").replace(/\.(js|mjs|ts)$/,"");if("index"!==d){var h=d.split("/"),m=h[h.length-1],v=kt(path,{isState:"state"===m});if(wt.includes(m)){var x=m;jt($t(_t,h,{isProperty:!0}),v,x)}else{"index"===m&&(h.pop(),m=h[h.length-1]);for(var y=$t(_t,h),w=0;w<wt.length;w++){var _=wt[w];jt(y,v[_],_)}}}}}catch(t){o=!0,c=t}finally{try{r||null==f.return||f.return()}finally{if(o)throw c}}}();var Ct=_t instanceof Function?_t:function(){return new gt.a.Store(Object.assign({strict:!1},_t))};function kt(path){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.isRoot,n=void 0!==e&&e,r=t.isState,o=void 0!==r&&r,c=yt(path),l=c.default||c;if(o&&"function"!=typeof l){bt.warn("".concat(path," should export a method that returns an object"));var f=Object.assign({},l);return function(){return f}}if(n&&l.commit)throw new Error("[nuxt] store/"+path.replace("./","")+" should export a method that returns a Vuex instance.");if(n&&"function"!=typeof l&&(l=Object.assign({},l)),l.state&&"function"!=typeof l.state){bt.warn("'state' should be a method that returns an object in ".concat(path));var d=Object.assign({},l.state);l=Object.assign({},l,{state:function(){return d}})}return l}function $t(t,e){var n=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).isProperty,r=void 0!==n&&n;if(!e.length||r&&1===e.length)return t;var o=e.shift();return t.modules[o]=t.modules[o]||{},t.modules[o].namespaced=!0,t.modules[o].modules=t.modules[o].modules||{},$t(t.modules[o],e,{isProperty:r})}function jt(t,e,n){e&&("state"===n?t.state=e||t.state:t[n]=Object.assign({},t[n],e))}c.a.component(tt.name,tt),c.a.component(et.name,et),c.a.component("NChild",et),c.a.component(ut.name,ut),c.a.use(Q.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var Et={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function Ot(){return(Ot=Object(o.a)(regeneratorRuntime.mark(function t(e){var n,r,o,c,l,f,path;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new X.a({mode:"history",base:"/microphone",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:W,routes:[{path:"/",component:V,name:"index"}],fallback:!1});case 2:return n=t.sent,(r=Ct(e)).$router=n,o=r.registerModule,r.registerModule=function(path,t,e){return o.call(r,path,t,Object.assign({preserveState:!0},e))},c=Object(k.a)({router:n,store:r,nuxt:{defaultTransition:Et,transitions:[Et],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?Object.assign({},Et,{name:t}):Object.assign({},Et,t):Et}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,c.context._errored=!!t,t=t?z(t):null;var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},xt),r.app=c,l=e?e.next:function(t){return c.router.push(t)},e?f=n.resolve(e.url).route:(path=P(n.options.base),f=n.resolve(path).route),t.next=13,M(c,{route:f,next:l,error:c.nuxt.error.bind(c),store:r,payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 13:window.__NUXT__&&window.__NUXT__.state&&r.replaceState(window.__NUXT__.state),t.next=17;break;case 17:return t.abrupt("return",{app:c,store:r,router:n});case 18:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}var St=window.requestIdleCallback||function(t){var e=Date.now();return setTimeout(function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})},1)},Rt=window.IntersectionObserver&&new window.IntersectionObserver(function(t){t.forEach(function(t){var e=t.intersectionRatio,link=t.target;e<=0||link.__prefetch()})}),Tt={name:"NuxtLink",extends:c.a.component("RouterLink"),props:{noPrefetch:{type:Boolean,default:!1}},mounted:function(){this.noPrefetch||St(this.observe,{timeout:2e3})},beforeDestroy:function(){this.__observed&&(Rt.unobserve(this.$el),delete this.$el.__prefetch)},methods:{observe:function(){Rt&&this.shouldPrefetch()&&(this.$el.__prefetch=this.prefetch.bind(this),Rt.observe(this.$el),this.__observed=!0)},shouldPrefetch:function(){return this.getPrefetchComponents().length>0},canPrefetch:function(){var t=navigator.connection;return!(this.$nuxt.isOffline||t&&((t.effectiveType||"").includes("2g")||t.saveData))},getPrefetchComponents:function(){return this.$router.resolve(this.to,this.$route,this.append).resolved.matched.map(function(t){return t.components.default}).filter(function(t){return"function"==typeof t&&!t.options&&!t.__prefetched})},prefetch:function(){if(this.canPrefetch()){Rt.unobserve(this.$el);var t=this.getPrefetchComponents(),e=!0,n=!1,r=void 0;try{for(var o,c=t[Symbol.iterator]();!(e=(o=c.next()).done);e=!0){var l=o.value;try{l(),l.__prefetched=!0}catch(t){}}}catch(t){n=!0,r=t}finally{try{e||null==c.return||c.return()}finally{if(n)throw r}}}}}};c.a.component(Tt.name,Tt),c.a.component("NLink",Tt);var Nt,At,Mt=[],Lt=window.__NUXT__||{};Object.assign(c.a.config,{silent:!0,performance:!1});var Ut=c.a.config.errorHandler||console.error;function Pt(t,e,n){var r=function(component){var t=function(component,t){if(!component||!component.options||!component.options[t])return{};var option=component.options[t];if("function"==typeof option){for(var e=arguments.length,n=new Array(e>2?e-2:0),r=2;r<e;r++)n[r-2]=arguments[r];return option.apply(void 0,n)}return option}(component,"transition",e,n)||{};return"string"==typeof t?{name:t}:t};return t.map(function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter(function(t){return o[t]&&t.toLowerCase().includes("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function Dt(t,e,n){return qt.apply(this,arguments)}function qt(){return(qt=Object(o.a)(regeneratorRuntime.mark(function t(e,n,r){var o,c,l,f,d=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!Nt.nuxt.err||n.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?I(e.query,n.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,t.next=7,T(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return d._diffQuery[t]})})&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),r(),t.next=23;break;case 12:if(t.prev=12,t.t0=t.catch(4),c=t.t0||{},l=c.statusCode||c.status||c.response&&c.response.status||500,f=c.message||"",!/^Loading chunk (\d)+ failed\./.test(f)){t.next=20;break}return window.location.reload(!0),t.abrupt("return");case 20:this.error({statusCode:l,message:f}),this.$nuxt.$emit("routeChanged",e,n,c),r();case 23:case"end":return t.stop()}},t,this,[[4,12]])}))).apply(this,arguments)}function It(t,e){return Lt.serverRendered&&e&&E(t,e),t._Ctor=t,t}function zt(t,e,n){var r=this,o=[],c=!1;if(void 0!==n&&(o=[],(n=O(n)).options.middleware&&(o=o.concat(n.options.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof C[t]&&(c=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),C[t])}),!c)return function t(e,n){return!e.length||n._redirected||n._errored?Promise.resolve():U(e[0],n).then(function(){return t(e.slice(1),n)})}(o,e)}function Bt(t,e,n){return Jt.apply(this,arguments)}function Jt(){return(Jt=Object(o.a)(regeneratorRuntime.mark(function t(e,n,r){var o,c,l,f,d,h,m,v,x,y,w,_,C,k,$,O,R=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return Mt=e===n?[]:S(n,o=[]).map(function(t,i){return D(n.matched[o[i]].path)(n.params)}),c=!1,l=function(path){n.path===path.path&&R.$loading.finish&&R.$loading.finish(),n.path!==path.path&&R.$loading.pause&&R.$loading.pause(),c||(c=!0,r(path))},t.next=7,M(Nt,{route:e,from:n,next:l.bind(this)});case 7:if(this._dateLastError=Nt.nuxt.dateErr,this._hadError=!!Nt.nuxt.err,(d=S(e,f=[])).length){t.next=25;break}return t.next=14,zt.call(this,d,Nt.context);case 14:if(!c){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof st.layout?st.layout(Nt.context):st.layout);case 18:return h=t.sent,t.next=21,zt.call(this,d,Nt.context,h);case 21:if(!c){t.next=23;break}return t.abrupt("return");case 23:return Nt.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 25:return d.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(Pt(d,e,n)),t.prev=27,t.next=30,zt.call(this,d,Nt.context);case 30:if(!c){t.next=32;break}return t.abrupt("return");case 32:if(!Nt.context._errored){t.next=34;break}return t.abrupt("return",r());case 34:return"function"==typeof(m=d[0].options.layout)&&(m=m(Nt.context)),t.next=38,this.loadLayout(m);case 38:return m=t.sent,t.next=41,zt.call(this,d,Nt.context,m);case 41:if(!c){t.next=43;break}return t.abrupt("return");case 43:if(!Nt.context._errored){t.next=45;break}return t.abrupt("return",r());case 45:v=!0,t.prev=46,x=!0,y=!1,w=void 0,t.prev=50,_=d[Symbol.iterator]();case 52:if(x=(C=_.next()).done){t.next=64;break}if("function"==typeof(k=C.value).options.validate){t.next=56;break}return t.abrupt("continue",61);case 56:return t.next=58,k.options.validate(Nt.context);case 58:if(v=t.sent){t.next=61;break}return t.abrupt("break",64);case 61:x=!0,t.next=52;break;case 64:t.next=70;break;case 66:t.prev=66,t.t0=t.catch(50),y=!0,w=t.t0;case 70:t.prev=70,t.prev=71,x||null==_.return||_.return();case 73:if(t.prev=73,!y){t.next=76;break}throw w;case 76:return t.finish(73);case 77:return t.finish(70);case 78:t.next=84;break;case 80:return t.prev=80,t.t1=t.catch(46),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",r());case 84:if(v){t.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 87:return t.next=89,Promise.all(d.map(function(t,i){if(t._path=D(e.matched[f[i]].path)(e.params),t._dataRefresh=!1,R._pathChanged&&R._queryChanged||t._path!==Mt[i])t._dataRefresh=!0;else if(!R._pathChanged&&R._queryChanged){var n=t.options.watchQuery;!0===n?t._dataRefresh=!0:Array.isArray(n)&&(t._dataRefresh=n.some(function(t){return R._diffQuery[t]}))}if(!R._hadError&&R._isMounted&&!t._dataRefresh)return Promise.resolve();var r=[],o=t.options.asyncData&&"function"==typeof t.options.asyncData,c=!!t.options.fetch,l=o&&c?30:45;if(o){var d=U(t.options.asyncData,Nt.context).then(function(e){E(t,e),R.$loading.increase&&R.$loading.increase(l)});r.push(d)}if(R.$loading.manual=!1===t.options.loading,c){var p=t.options.fetch(Nt.context);p&&(p instanceof Promise||"function"==typeof p.then)||(p=Promise.resolve(p)),p.then(function(t){R.$loading.increase&&R.$loading.increase(l)}),r.push(p)}return Promise.all(r)}));case 89:c||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r()),t.next=106;break;case 92:if(t.prev=92,t.t2=t.catch(27),"ERR_REDIRECT"!==($=t.t2||{}).message){t.next=97;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,n,$));case 97:return Mt=[],j($),"function"==typeof(O=st.layout)&&(O=O(Nt.context)),t.next=103,this.loadLayout(O);case 103:this.error($),this.$nuxt.$emit("routeChanged",e,n,$),r();case 106:case"end":return t.stop()}},t,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])}))).apply(this,arguments)}function Ft(t,e){R(t,function(t,e,n,o){return"object"!==Object(r.a)(t)||t.options||((t=c.a.extend(t))._Ctor=t,n.components[o]=t),t})}function Ht(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?st.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(Nt.context)),this.setLayout(e)}function Kt(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||c.a.nextTick(function(){var e=[],r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))}(t,e),o=S(t,e);r.forEach(function(t,i){if(t&&t.constructor._dataRefresh&&o[i]===t.constructor&&"function"==typeof t.constructor.options.data){var e=t.constructor.options.data.call(t);for(var n in e)c.a.set(t.$data,n,e[n])}}),Ht.call(n,t)})}function Gt(t){window.onNuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),At.afterEach(function(e,n){c.a.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}function Qt(){return(Qt=Object(o.a)(regeneratorRuntime.mark(function t(e){var n,r,l,f;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return Nt=e.app,At=e.router,e.store,t.next=5,Promise.all((path=void 0,path=P((d=At).options.base,d.options.mode),R(d.match(path),function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e,n,r,o,c){var l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return l=It(O(e),Lt.data?Lt.data[c]:null),r.components[o]=l,t.abrupt("return",l);case 7:case"end":return t.stop()}},t,this)}));return function(e,n,r,o,c){return t.apply(this,arguments)}}())));case 5:return n=t.sent,r=new c.a(Nt),l=Lt.layout||"default",t.next=10,r.loadLayout(l);case 10:if(r.setLayout(l),f=function(){r.$mount("#__nuxt"),c.a.nextTick(function(){Gt(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(Pt(n,At.currentRoute)),Mt=At.currentRoute.matched.map(function(t){return D(t.path)(At.currentRoute.params)})),r.$loading={},Lt.error&&r.error(Lt.error),At.beforeEach(Dt.bind(r)),At.beforeEach(Bt.bind(r)),At.afterEach(Ft),At.afterEach(Kt.bind(r)),!Lt.serverRendered){t.next=23;break}return f(),t.abrupt("return");case 23:Bt.call(r,At.currentRoute,At.currentRoute,function(path){if(!path)return Ft(At.currentRoute,At.currentRoute),Ht.call(r,At.currentRoute),void f();At.push(path,function(){return f()},function(t){if(!t)return f();Ut(t)})});case 24:case"end":return t.stop()}var d,path},t,this)}))).apply(this,arguments)}(function(t){return Ot.apply(this,arguments)})().then(function(t){return Qt.apply(this,arguments)}).catch(function(t){t.message="[nuxt] Error while mounting app: "+t.message,Ut(t)})},46:function(t,e,n){var content=n(138);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("b675d82e",content,!0,{sourceMap:!1})},47:function(t,e,n){var content=n(140);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("17cfdfa9",content,!0,{sourceMap:!1})},48:function(t,e,n){var content=n(148);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("aab9a468",content,!0,{sourceMap:!1})},49:function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var content=function(t,e){var content=t[1]||"",n=t[3];if(!n)return content;if(e&&"function"==typeof btoa){var r=(c=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(c))))+" */"),o=n.sources.map(function(source){return"/*# sourceURL="+n.sourceRoot+source+" */"});return[content].concat(o).concat([r]).join("\n")}var c;return[content].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+content+"}":content}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(i=0;i<t.length;i++){var c=t[i];null!=c[0]&&r[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="("+c[2]+") and ("+n+")"),e.push(c))}},e}},50:function(t,e,n){"use strict";function r(t,e){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],c=o[0],l={id:t+":"+i,css:o[1],media:o[2],sourceMap:o[3]};r[c]?r[c].parts.push(l):n.push(r[c]={id:c,parts:[l]})}return n}n.r(e),n.d(e,"default",function(){return y});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c={},head=o&&(document.head||document.getElementsByTagName("head")[0]),l=null,f=0,d=!1,h=function(){},m=null,v="data-vue-ssr-id",x="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function y(t,e,n,o){d=n,m=o||{};var l=r(t,e);return w(l),function(e){for(var n=[],i=0;i<l.length;i++){var o=l[i];(f=c[o.id]).refs--,n.push(f)}e?w(l=r(t,e)):l=[];for(i=0;i<n.length;i++){var f;if(0===(f=n[i]).refs){for(var d=0;d<f.parts.length;d++)f.parts[d]();delete c[f.id]}}}}function w(t){for(var i=0;i<t.length;i++){var e=t[i],n=c[e.id];if(n){n.refs++;for(var r=0;r<n.parts.length;r++)n.parts[r](e.parts[r]);for(;r<e.parts.length;r++)n.parts.push(C(e.parts[r]));n.parts.length>e.parts.length&&(n.parts.length=e.parts.length)}else{var o=[];for(r=0;r<e.parts.length;r++)o.push(C(e.parts[r]));c[e.id]={id:e.id,refs:1,parts:o}}}}function _(){var t=document.createElement("style");return t.type="text/css",head.appendChild(t),t}function C(t){var e,n,r=document.querySelector("style["+v+'~="'+t.id+'"]');if(r){if(d)return h;r.parentNode.removeChild(r)}if(x){var o=f++;r=l||(l=_()),e=j.bind(null,r,o,!1),n=j.bind(null,r,o,!0)}else r=_(),e=function(t,e){var n=e.css,r=e.media,o=e.sourceMap;r&&t.setAttribute("media",r);m.ssrId&&t.setAttribute(v,e.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}var k,$=(k=[],function(t,e){return k[t]=e,k.filter(Boolean).join("\n")});function j(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=$(e,o);else{var c=document.createTextNode(o),l=t.childNodes;l[e]&&t.removeChild(l[e]),l.length?t.insertBefore(c,l[e]):t.appendChild(c)}}},99:function(t,e,n){"use strict";var r={name:"NoSsr",functional:!0,props:{placeholder:String,placeholderTag:{type:String,default:"div"}},render:function(t,e){var n=e.parent,r=e.slots,o=e.props,c=r(),l=c.default;void 0===l&&(l=[]);var f=c.placeholder;return n._isMounted?l:(n.$once("hook:mounted",function(){n.$forceUpdate()}),o.placeholderTag&&(o.placeholder||f)?t(o.placeholderTag,{class:["no-ssr-placeholder"]},o.placeholder||f):l.length>0?l.map(function(){return t(!1)}):t(!1))}};t.exports=r}},[[102,3,1]]]);