(function(){var h={},mt={},c={id:"fca4ecab8763adf324237cb9f77f9e65",dm:["liulanqi.baidu.com"],js:"tongji.baidu.com/hm-web/js/",etrk:[],icon:'/hmt/icon/21|gif|20|20',ctrk:false,align:-1,nv:-1,vdur:1800000,age:31536000000,rec:0,rp:[],trust:0,vcard:0,qiao:0,lxb:0,conv:0,comm:0,apps:''};var p=!0,q=null,r=!1;mt.j={};mt.j.Ha=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.j.cookieEnabled=navigator.cookieEnabled;mt.j.javaEnabled=navigator.javaEnabled();mt.j.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.j.ra=(window.screen.width||0)+"x"+(window.screen.height||0);mt.j.colorDepth=window.screen.colorDepth||0;mt.cookie={};
mt.cookie.set=function(a,d,e){var b;e.F&&(b=new Date,b.setTime(b.getTime()+e.F));document.cookie=a+"="+d+(e.domain?"; domain="+e.domain:"")+(e.path?"; path="+e.path:"")+(b?"; expires="+b.toGMTString():"")+(e.La?"; secure":"")};mt.cookie.get=function(a){return(a=RegExp("(^| )"+a+"=([^;]*)(;|$)").exec(document.cookie))?a[2]:q};mt.q={};mt.q.Da=function(a){return document.getElementById(a)};mt.q.Ea=function(a,d){for(d=d.toUpperCase();(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==d)return a;return q};
(mt.q.pa=function(){function a(){if(!a.z){a.z=p;for(var d=0,e=b.length;d<e;d++)b[d]()}}function d(){try{document.documentElement.doScroll("left")}catch(b){setTimeout(d,1);return}a()}var e=r,b=[],l;document.addEventListener?l=function(){document.removeEventListener("DOMContentLoaded",l,r);a()}:document.attachEvent&&(l=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",l),a())});(function(){if(!e)if(e=p,"complete"===document.readyState)a.z=p;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",
l,r),window.addEventListener("load",a,r);else if(document.attachEvent){document.attachEvent("onreadystatechange",l);window.attachEvent("onload",a);var b=r;try{b=window.frameElement==q}catch(n){}document.documentElement.doScroll&&b&&d()}})();return function(d){a.z?d():b.push(d)}}()).z=r;mt.event={};mt.event.e=function(a,d,e){a.attachEvent?a.attachEvent("on"+d,function(b){e.call(a,b)}):a.addEventListener&&a.addEventListener(d,e,r)};
mt.event.preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=r};mt.l={};mt.l.parse=function(){return(new Function('return (" + source + ")'))()};
mt.l.stringify=function(){function a(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var b=e[a];if(b)return b;b=a.charCodeAt();return"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16)}));return'"'+a+'"'}function d(a){return 10>a?"0"+a:a}var e={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(b){switch(typeof b){case "undefined":return"undefined";case "number":return isFinite(b)?String(b):"null";case "string":return a(b);case "boolean":return String(b);
default:if(b===q)return"null";if(b instanceof Array){var e=["["],g=b.length,n,f,k;for(f=0;f<g;f++)switch(k=b[f],typeof k){case "undefined":case "function":case "unknown":break;default:n&&e.push(","),e.push(mt.l.stringify(k)),n=1}e.push("]");return e.join("")}if(b instanceof Date)return'"'+b.getFullYear()+"-"+d(b.getMonth()+1)+"-"+d(b.getDate())+"T"+d(b.getHours())+":"+d(b.getMinutes())+":"+d(b.getSeconds())+'"';n=["{"];f=mt.l.stringify;for(g in b)if(Object.prototype.hasOwnProperty.call(b,g))switch(k=
b[g],typeof k){case "undefined":case "unknown":case "function":break;default:e&&n.push(","),e=1,n.push(f(g)+":"+f(k))}n.push("}");return n.join("")}}}();mt.lang={};mt.lang.d=function(a,d){return"[object "+d+"]"==={}.toString.call(a)};mt.lang.Ia=function(a){return mt.lang.d(a,"Number")&&isFinite(a)};mt.lang.Ka=function(a){return mt.lang.d(a,"String")};mt.localStorage={};
mt.localStorage.C=function(){if(!mt.localStorage.f)try{mt.localStorage.f=document.createElement("input"),mt.localStorage.f.type="hidden",mt.localStorage.f.style.display="none",mt.localStorage.f.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.f)}catch(a){return r}return p};
mt.localStorage.set=function(a,d,e){var b=new Date;b.setTime(b.getTime()+e||31536E6);try{window.localStorage?(d=b.getTime()+"|"+d,window.localStorage.setItem(a,d)):mt.localStorage.C()&&(mt.localStorage.f.expires=b.toUTCString(),mt.localStorage.f.load(document.location.hostname),mt.localStorage.f.setAttribute(a,d),mt.localStorage.f.save(document.location.hostname))}catch(l){}};
mt.localStorage.get=function(a){if(window.localStorage){if(a=window.localStorage.getItem(a)){var d=a.indexOf("|"),e=a.substring(0,d)-0;if(e&&e>(new Date).getTime())return a.substring(d+1)}}else if(mt.localStorage.C())try{return mt.localStorage.f.load(document.location.hostname),mt.localStorage.f.getAttribute(a)}catch(b){}return q};
mt.localStorage.remove=function(a){if(window.localStorage)window.localStorage.removeItem(a);else if(mt.localStorage.C())try{mt.localStorage.f.load(document.location.hostname),mt.localStorage.f.removeAttribute(a),mt.localStorage.f.save(document.location.hostname)}catch(d){}};mt.sessionStorage={};mt.sessionStorage.set=function(a,d){if(window.sessionStorage)try{window.sessionStorage.setItem(a,d)}catch(e){}};
mt.sessionStorage.get=function(a){return window.sessionStorage?window.sessionStorage.getItem(a):q};mt.sessionStorage.remove=function(a){window.sessionStorage&&window.sessionStorage.removeItem(a)};mt.S={};mt.S.log=function(a,d){var e=new Image,b="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[b]=e;e.onload=e.onerror=e.onabort=function(){e.onload=e.onerror=e.onabort=q;e=window[b]=q;d&&d(a)};e.src=a};mt.B={};
mt.B.ga=function(){var a="";if(navigator.plugins&&navigator.mimeTypes.length){var d=navigator.plugins["Shockwave Flash"];d&&d.description&&(a=d.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(d=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a=d.GetVariable("$version"))&&(a=a.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(e){}return a};
mt.B.Y=function(a,d,e,b,l){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+a+'" width="'+e+'" height="'+b+'"><param name="movie" value="'+d+'" /><param name="flashvars" value="'+(l||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+a+'" width="'+e+'" height="'+b+'" src="'+d+'" flashvars="'+(l||"")+'" allowscriptaccess="always" /></object>'};mt.url={};
mt.url.i=function(a,d){var e=a.match(RegExp("(^|&|\\?|#)("+d+")=([^&#]*)(&|$|#)",""));return e?e[3]:q};mt.url.Ga=function(a){return(a=a.match(/^(https?:)\/\//))?a[1]:q};mt.url.da=function(a){return(a=a.match(/^(https?:\/\/)?([^\/\?#]*)/))?a[2].replace(/.*@/,""):q};mt.url.M=function(a){return(a=mt.url.da(a))?a.replace(/:\d+$/,""):a};mt.url.Fa=function(a){return(a=a.match(/^(https?:\/\/)?[^\/]*(.*)/))?a[2].replace(/[\?#].*/,"").replace(/^$/,"/"):q};
h.o={na:"http://tongji.baidu.com/hm-web/welcome/ico",R:"log.hm.baidu.com/hm.gif",V:"baidu.com",ka:"hmmd",la:"hmpl",ia:"hmkw",ha:"hmci",ma:"hmsr",m:0,h:Math.round(+new Date/1E3),protocol:"https:"==document.location.protocol?"https:":"http:",Ja:0,za:6E5,Aa:10,Ba:1024,ya:1,Q:2147483647,T:"cc cf ci ck cl cm cp cw ds ep et fl ja ln lo lt nv rnd si st su v cv lv api tt u".split(" ")};
(function(){var a={k:{},e:function(a,e){this.k[a]=this.k[a]||[];this.k[a].push(e)},r:function(a,e){this.k[a]=this.k[a]||[];for(var b=this.k[a].length,l=0;l<b;l++)this.k[a][l](e)}};return h.s=a})();
(function(){function a(a,b){var l=document.createElement("script");l.charset="utf-8";d.d(b,"Function")&&(l.readyState?l.onreadystatechange=function(){if("loaded"===l.readyState||"complete"===l.readyState)l.onreadystatechange=q,b()}:l.onload=function(){b()});l.src=a;var g=document.getElementsByTagName("script")[0];g.parentNode.insertBefore(l,g)}var d=mt.lang;return h.load=a})();
(function(){var a=h.o,d=mt.B,e={init:function(){if(""!==c.icon){var b;b=c.icon.split("|");var e=a.na+"?s="+c.id,g=("http:"==a.protocol?"http://eiv":"https://bs")+".baidu.com"+b[0]+"."+b[1];switch(b[1]){case "swf":b=d.Y("HolmesIcon"+a.h,g,b[2],b[3],"s="+e);break;case "gif":b='<a href="'+e+'" target="_blank"><img border="0" src="'+g+'" width="'+b[2]+'" height="'+b[3]+'"></a>';break;default:b='<a href="'+e+'" target="_blank">'+b[0]+"</a>"}document.write(b)}}};h.s.e("pv-b",e.init);return e})();
(function(){function a(){return function(){h.b.a.nv=0;h.b.a.st=4;h.b.a.et=3;h.b.a.ep=h.D.ea()+","+h.D.ca();h.b.g()}}function d(){clearTimeout(x);var a;w&&(a="visible"==document[w]);y&&(a=!document[y]);f="undefined"==typeof a?p:a;if((!n||!k)&&f&&m)u=p,t=+new Date;else if(n&&k&&(!f||!m))u=r,s+=+new Date-t;n=f;k=m;x=setTimeout(d,100)}function e(a){var t=document,k="";if(a in t)k=a;else for(var s=["webkit","ms","moz","o"],b=0;b<s.length;b++){var d=s[b]+a.charAt(0).toUpperCase()+a.slice(1);if(d in t){k=
d;break}}return k}function b(a){if(!("focus"==a.type||"blur"==a.type)||!(a.target&&a.target!=window))m="focus"==a.type||"focusin"==a.type?p:r,d()}var l=mt.event,g=h.s,n=p,f=p,k=p,m=p,v=+new Date,t=v,s=0,u=p,w=e("visibilityState"),y=e("hidden"),x;d();(function(){var a=w.replace(/[vV]isibilityState/,"visibilitychange");l.e(document,a,d);l.e(window,"pageshow",d);l.e(window,"pagehide",d);"object"==typeof document.onfocusin?(l.e(document,"focusin",b),l.e(document,"focusout",b)):(l.e(window,"focus",b),
l.e(window,"blur",b))})();h.D={ea:function(){return+new Date-v},ca:function(){return u?+new Date-t+s:s}};g.e("pv-b",function(){l.e(window,"unload",a())});return h.D})();
(function(){var a=mt.lang,d=h.o,e=h.load,b={oa:function(b){if((void 0===window._dxt||a.d(window._dxt,"Array"))&&"undefined"!==typeof h.b){var g=h.b.G();e([d.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(g)].join(""),b)}},xa:function(b){if(a.d(b,"String")||a.d(b,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",b])}};return h.Z=b})();
(function(){function a(k){for(var b in k)if({}.hasOwnProperty.call(k,b)){var d=k[b];e.d(d,"Object")||e.d(d,"Array")?a(d):k[b]=String(d)}}function d(a){return a.replace?a.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):a}var e=mt.lang,b=mt.l,l=h.o,g=h.s,n=h.Z,f={N:q,p:[],A:0,O:r,init:function(){f.c=0;f.N={push:function(){f.J.apply(f,arguments)}};g.e("pv-b",function(){f.$();f.aa()});g.e("pv-d",f.ba);g.e("stag-b",function(){h.b.a.api=f.c||f.A?f.c+"_"+f.A:""});g.e("stag-d",function(){h.b.a.api=
0;f.c=0;f.A=0})},$:function(){var a=window._hmt;if(a&&a.length)for(var b=0;b<a.length;b++){var d=a[b];switch(d[0]){case "_setAccount":1<d.length&&/^[0-9a-z]{32}$/.test(d[1])&&(f.c|=1,window._bdhm_account=d[1]);break;case "_setAutoPageview":if(1<d.length&&(d=d[1],r===d||p===d))f.c|=2,window._bdhm_autoPageview=d}}},aa:function(){if("undefined"===typeof window._bdhm_account||window._bdhm_account===c.id){window._bdhm_account=c.id;var a=window._hmt;if(a&&a.length)for(var b=0,d=a.length;b<d;b++)e.d(a[b],
"Array")&&"_trackEvent"!==a[b][0]&&"_trackRTEvent"!==a[b][0]?f.J(a[b]):f.p.push(a[b]);window._hmt=f.N}},ba:function(){if(0<f.p.length)for(var a=0,b=f.p.length;a<b;a++)f.J(f.p[a]);f.p=q},J:function(a){if(e.d(a,"Array")){var b=a[0];if(f.hasOwnProperty(b)&&e.d(f[b],"Function"))f[b](a)}},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"==a[1].charAt(0)){f.c|=4;h.b.a.et=0;h.b.a.ep="";h.b.H?(h.b.a.nv=0,h.b.a.st=4):h.b.H=p;var b=h.b.a.u,d=h.b.a.su;h.b.a.u=l.protocol+"//"+document.location.host+
a[1];f.O||(h.b.a.su=document.location.href);h.b.g();h.b.a.u=b;h.b.a.su=d}},_trackEvent:function(a){2<a.length&&(f.c|=8,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=4,h.b.a.ep=d(a[1])+"*"+d(a[2])+(a[3]?"*"+d(a[3]):"")+(a[4]?"*"+d(a[4]):""),h.b.g())},_setCustomVar:function(a){if(!(4>a.length)){var b=a[1],e=a[4]||3;if(0<b&&6>b&&0<e&&4>e){f.A++;for(var t=(h.b.a.cv||"*").split("!"),s=t.length;s<b-1;s++)t.push("*");t[b-1]=e+"*"+d(a[2])+"*"+d(a[3]);h.b.a.cv=t.join("!");a=h.b.a.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,
"");""!==a?h.b.setData("Hm_cv_"+c.id,encodeURIComponent(a),c.age):h.b.qa("Hm_cv_"+c.id)}}},_setReferrerOverride:function(a){1<a.length&&(h.b.a.su=a[1].charAt&&"/"==a[1].charAt(0)?l.protocol+"//"+window.location.host+a[1]:a[1],f.O=p)},_trackOrder:function(d){d=d[1];e.d(d,"Object")&&(a(d),f.c|=16,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=94,h.b.a.ep=b.stringify(d),h.b.g())},_trackMobConv:function(a){if(a={webim:1,tel:2,map:3,sms:4,callback:5,share:6}[a[1]])f.c|=32,h.b.a.et=93,h.b.a.ep=a,h.b.g()},_trackRTPageview:function(d){d=
d[1];e.d(d,"Object")&&(a(d),d=b.stringify(d),512>=encodeURIComponent(d).length&&(f.c|=64,h.b.a.rt=d))},_trackRTEvent:function(d){d=d[1];if(e.d(d,"Object")){a(d);d=encodeURIComponent(b.stringify(d));var m=function(a){var b=h.b.a.rt;f.c|=128;h.b.a.et=90;h.b.a.rt=a;h.b.g();h.b.a.rt=b},g=d.length;if(900>=g)m.call(this,d);else for(var g=Math.ceil(g/900),t="block|"+Math.round(Math.random()*l.Q).toString(16)+"|"+g+"|",s=[],u=0;u<g;u++)s.push(u),s.push(d.substring(900*u,900*u+900)),m.call(this,t+s.join("|")),
s=[]}},_setUserId:function(a){a=a[1];n.oa();n.xa(a)}};f.init();h.W=f;return h.W})();
(function(){function a(){"undefined"==typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=p,this.a={},this.H=r,this.init())}var d=mt.url,e=mt.S,b=mt.B,l=mt.lang,g=mt.cookie,n=mt.j,f=mt.localStorage,k=mt.sessionStorage,m=h.o,v=h.s;a.prototype={I:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length==a.length},P:function(a,b){a=a.replace(/^https?:\/\//,"");return 0===a.indexOf(b)},w:function(a){for(var b=0;b<c.dm.length;b++)if(-1<
c.dm[b].indexOf("/")){if(this.P(a,c.dm[b]))return p}else{var e=d.M(a);if(e&&this.I(e,c.dm[b]))return p}return r},G:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.I(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[\/\?#].*/,"");return a},L:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.P(document.location.href,d))return d.replace(/^[^\/]+(\/.*)/,"$1")+"/"}return"/"},fa:function(){if(!document.referrer)return m.h-m.m>c.vdur?1:4;var a=
r;this.w(document.referrer)&&this.w(document.location.href)?a=p:(a=d.M(document.referrer),a=this.I(a||"",document.location.hostname));return a?m.h-m.m>c.vdur?1:4:3},getData:function(a){try{return g.get(a)||k.get(a)||f.get(a)}catch(b){}},setData:function(a,b,d){try{g.set(a,b,{domain:this.G(),path:this.L(),F:d}),d?f.set(a,b,d):k.set(a,b)}catch(e){}},qa:function(a){try{g.set(a,"",{domain:this.G(),path:this.L(),F:-1}),k.remove(a),f.remove(a)}catch(b){}},va:function(){var a,b,d,e,f;m.m=this.getData("Hm_lpvt_"+
c.id)||0;13==m.m.length&&(m.m=Math.round(m.m/1E3));b=this.fa();a=4!=b?1:0;if(d=this.getData("Hm_lvt_"+c.id)){e=d.split(",");for(f=e.length-1;0<=f;f--)13==e[f].length&&(e[f]=""+Math.round(e[f]/1E3));for(;2592E3<m.h-e[0];)e.shift();f=4>e.length?2:3;for(1===a&&e.push(m.h);4<e.length;)e.shift();d=e.join(",");e=e[e.length-1]}else d=m.h,e="",f=1;this.setData("Hm_lvt_"+c.id,d,c.age);this.setData("Hm_lpvt_"+c.id,m.h);d=m.h==this.getData("Hm_lpvt_"+c.id)?"1":"0";if(0===c.nv&&this.w(document.location.href)&&
(""===document.referrer||this.w(document.referrer)))a=0,b=4;this.a.nv=a;this.a.st=b;this.a.cc=d;this.a.lt=e;this.a.lv=f},ua:function(){for(var a=[],b=0,d=m.T.length;b<d;b++){var e=m.T[b],f=this.a[e];"undefined"!=typeof f&&""!==f&&a.push(e+"="+encodeURIComponent(f))}b=this.a.et;this.a.rt&&(0===b?a.push("rt="+encodeURIComponent(this.a.rt)):90===b&&a.push("rt="+this.a.rt));return a.join("&")},wa:function(){this.va();this.a.si=c.id;this.a.su=document.referrer;this.a.ds=n.ra;this.a.cl=n.colorDepth+"-bit";
this.a.ln=n.language;this.a.ja=n.javaEnabled?1:0;this.a.ck=n.cookieEnabled?1:0;this.a.lo="number"==typeof _bdhm_top?1:0;this.a.fl=b.ga();this.a.v="1.0.94";this.a.cv=decodeURIComponent(this.getData("Hm_cv_"+c.id)||"");1==this.a.nv&&(this.a.tt=document.title||"");var a=document.location.href;this.a.cm=d.i(a,m.ka)||"";this.a.cp=d.i(a,m.la)||"";this.a.cw=d.i(a,m.ia)||"";this.a.ci=d.i(a,m.ha)||"";this.a.cf=d.i(a,m.ma)||""},init:function(){try{this.wa(),0===this.a.nv?this.ta():this.K(".*"),h.b=this,this.X(),
v.r("pv-b"),this.sa()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));e.log(m.protocol+"//"+m.R+"?"+b.join("&"))}},sa:function(){function a(){v.r("pv-d")}"undefined"===typeof window._bdhm_autoPageview||window._bdhm_autoPageview===p?(this.H=p,this.a.et=0,this.a.ep="",this.g(a)):a()},g:function(a){var b=this;b.a.rnd=Math.round(Math.random()*m.Q);v.r("stag-b");var d=m.protocol+"//"+
m.R+"?"+b.ua();v.r("stag-d");b.U(d);e.log(d,function(d){b.K(d);l.d(a,"Function")&&a.call(b)})},X:function(){var a=document.location.hash.substring(1),b=RegExp(c.id),e=-1<document.referrer.indexOf(m.V)?p:r,f=d.i(a,"jn"),l=/^heatlink$|^select$/.test(f);a&&(b.test(a)&&e&&l)&&(a=document.createElement("script"),a.setAttribute("type","text/javascript"),a.setAttribute("charset","utf-8"),a.setAttribute("src",m.protocol+"//"+c.js+f+".js?"+this.a.rnd),f=document.getElementsByTagName("script")[0],f.parentNode.insertBefore(a,
f))},U:function(a){var b=k.get("Hm_unsent_"+c.id)||"",d=this.a.u?"":"&u="+encodeURIComponent(document.location.href),b=encodeURIComponent(a.replace(/^https?:\/\//,"")+d)+(b?","+b:"");k.set("Hm_unsent_"+c.id,b)},K:function(a){var b=k.get("Hm_unsent_"+c.id)||"";b&&((b=b.replace(RegExp(encodeURIComponent(a.replace(/^https?:\/\//,"")).replace(/([\*\(\)])/g,"\\$1")+"(%26u%3D[^,]*)?,?","g"),"").replace(/,$/,""))?k.set("Hm_unsent_"+c.id,b):k.remove("Hm_unsent_"+c.id))},ta:function(){var a=this,b=k.get("Hm_unsent_"+
c.id);if(b)for(var b=b.split(","),d=function(b){e.log(m.protocol+"//"+decodeURIComponent(b).replace(/^https?:\/\//,""),function(b){a.K(b)})},f=0,l=b.length;f<l;f++)d(b[f])}};return new a})();
(function(){var a=mt.q,d=mt.event,e=mt.url,b=mt.l;try{if(window.performance&&performance.timing&&"undefined"!==typeof h.b){var l=+new Date,g=function(a){var b=performance.timing,d=b[a+"Start"]?b[a+"Start"]:0;a=b[a+"End"]?b[a+"End"]:0;return{start:d,end:a,value:0<a-d?a-d:0}},n=q;a.pa(function(){n=+new Date});var f=function(){var a,d,f;f=g("navigation");d=g("request");f={netAll:d.start-f.start,netDns:g("domainLookup").value,netTcp:g("connect").value,srv:g("response").start-d.start,dom:performance.timing.domInteractive-
performance.timing.fetchStart,loadEvent:g("loadEvent").end-f.start};a=document.referrer;var s=q;d=q;if("www.baidu.com"===(a.match(/^(http[s]?:\/\/)?([^\/]+)(.*)/)||[])[2])s=e.i(a,"qid"),d=e.i(a,"click_t");a=s;f.qid=a!=q?a:"";d!=q?(f.bdDom=n?n-d:0,f.bdRun=l-d,f.bdDef=g("navigation").start-d):(f.bdDom=0,f.bdRun=0,f.bdDef=0);h.b.a.et=87;h.b.a.ep=b.stringify(f);h.b.g()};d.e(window,"load",function(){setTimeout(f,500)})}}catch(k){}})();
(function(){var a=h.o,d={init:function(){try{if("http:"===a.protocol){var b=document.createElement("IFRAME");b.setAttribute("src","http://boscdn.bpc.baidu.com/v1/holmes-moplus/mp-cdn.html");b.style.display="none";b.style.width="1";b.style.height="1";b.Ca="0";document.body.appendChild(b)}}catch(d){}}},e=navigator.userAgent.toLowerCase();-1<e.indexOf("android")&&-1===e.indexOf("micromessenger")&&d.init()})();
(function(){var a=mt.lang,d=mt.event,e=mt.l;if(c.comm&&"undefined"!==typeof h.b){var b=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},l=/.*\/swt(\/)?([\?|#].*)?$/i,g={click:function(){for(var a=[],d=b(document.getElementsByTagName("a")),d=[].concat.apply(d,b(document.getElementsByTagName("area"))),d=[].concat.apply(d,b(document.getElementsByTagName("img"))),e=/openZoosUrl\(|swt/,f=/\/LR\/Chatpre\.aspx/,g=0,m=d.length;g<m;g++){var k=d[g],n=k.getAttribute("onclick"),
k=k.getAttribute("href");(e.test(n)||f.test(k)||l.test(k))&&a.push(d[g])}return a}},n=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===r)return r},f=function(b,d){var f={n:"swt",t:"clk"};f.v=b;if(d){var g=d.getAttribute("href"),k=d.getAttribute("onclick")?""+d.getAttribute("onclick"):q;l.test(g)?(f.sn="mediate",f.snv=g):a.d(k,"String")&&(-1===k.indexOf("openZoosUrl")&&-1!==k.indexOf("swt"))&&(g=d.getAttribute("id")||"",f.sn="wrap",f.snv=k,f.id=g)}h.b.a.et=86;h.b.a.ep=e.stringify(f);
h.b.g();for(f=+new Date;500>=+new Date-f;);},k,m="/zoosnet"+(/\/$/.test("/zoosnet")?"":"/"),v=function(b,d){if(k===d)return f(m+b,d),r;if(a.d(d,"Array")||a.d(d,"NodeList"))for(var e=0,g=d.length;e<g;e++)if(k===d[e])return f(m+b+"/"+(e+1),d[e]),r};d.e(document,"click",function(b){b=b||window.event;k=b.target||b.srcElement;var d={};for(n(g,function(b,e){d[b]=a.d(e,"Function")?e():document.getElementById(e)});k&&k!==document&&n(d,v)!==r;)k=k.parentNode})}})();})();
