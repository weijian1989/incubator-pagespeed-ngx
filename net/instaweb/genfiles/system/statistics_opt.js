(function(){var h=h||{},k=this;function aa(){}
function l(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function m(a){return"string"==typeof a}var ba="closure_uid_"+(1E9*Math.random()>>>0),ca=0;function da(a,b,c){return a.call.apply(a.bind,arguments)}function ea(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?da:ea;return p.apply(null,arguments)}var fa=Date.now||function(){return+new Date};function q(a,b){function c(){}c.prototype=b.prototype;a.T=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.U=function(a,c,f){for(var g=Array(arguments.length-2),n=2;n<arguments.length;n++)g[n-2]=arguments[n];return b.prototype[c].apply(a,g)}};function ga(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}var ha=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function r(a,b){return-1!=a.indexOf(b)}function t(a,b){return a<b?-1:a>b?1:0};function u(a){if(Error.captureStackTrace)Error.captureStackTrace(this,u);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}q(u,Error);u.prototype.name="CustomError";function v(a,b){b.unshift(a);u.call(this,ga.apply(null,b));b.shift()}q(v,u);v.prototype.name="AssertionError";function ia(a,b){throw new v("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var ja=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(m(a))return m(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};function ka(a){var b;a:{b=la;for(var c=a.length,d=m(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:m(a)?a.charAt(b):a[b]};var w;a:{var ma=k.navigator;if(ma){var na=ma.userAgent;if(na){w=na;break a}}w=""};function oa(a){return null!==a&&"withCredentials"in a}var pa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qa(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<pa.length;f++)c=pa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var ra=r(w,"Opera")||r(w,"OPR"),x=r(w,"Trident")||r(w,"MSIE"),sa=r(w,"Edge"),y=r(w,"Gecko")&&!(r(w.toLowerCase(),"webkit")&&!r(w,"Edge"))&&!(r(w,"Trident")||r(w,"MSIE"))&&!r(w,"Edge"),z=r(w.toLowerCase(),"webkit")&&!r(w,"Edge");function ta(){var a=w;if(y)return/rv\:([^\);]+)(\)|;)/.exec(a);if(sa)return/Edge\/([\d\.]+)/.exec(a);if(x)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(z)return/WebKit\/(\S+)/.exec(a)}function ua(){var a=k.document;return a?a.documentMode:void 0}
var va=function(){if(ra&&k.opera){var a;var b=k.opera.version;try{a=b()}catch(c){a=b}return a}a="";(b=ta())&&(a=b?b[1]:"");return x&&(b=ua(),b>parseFloat(a))?String(b):a}(),wa={};
function A(a){var b;if(!(b=wa[a])){b=0;for(var c=ha(String(va)).split("."),d=ha(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",n=d[f]||"",N=RegExp("(\\d*)(\\D*)","g"),mb=RegExp("(\\d*)(\\D*)","g");do{var F=N.exec(g)||["","",""],G=mb.exec(n)||["","",""];if(0==F[0].length&&0==G[0].length)break;b=t(0==F[1].length?0:parseInt(F[1],10),0==G[1].length?0:parseInt(G[1],10))||t(0==F[2].length,0==G[2].length)||t(F[2],G[2])}while(0==b)}b=wa[a]=0<=b}return b}
var xa=k.document,ya=xa&&x?ua()||("CSS1Compat"==xa.compatMode?parseInt(va,10):5):void 0;var B;(B=!x)||(B=9<=+ya);var za=B,Aa=x&&!A("9");!z||A("528");y&&A("1.9b")||x&&A("8")||ra&&A("9.5")||z&&A("528");y&&!A("8")||x&&A("9");var C="closure_listenable_"+(1E6*Math.random()|0),Ba=0;function Ca(a,b,c,d,e){this.listener=a;this.a=null;this.src=b;this.type=c;this.D=!!d;this.F=e;++Ba;this.v=this.C=!1}function D(a){a.v=!0;a.listener=null;a.a=null;a.src=null;a.F=null};function E(a){this.src=a;this.a={};this.b=0}function Da(a,b,c,d,e){var f=b.toString();b=a.a[f];b||(b=a.a[f]=[],a.b++);var g=Ea(b,c,d,e);-1<g?(a=b[g],a.C=!1):(a=new Ca(c,a.src,f,!!d,e),a.C=!1,b.push(a));return a}function Fa(a,b){var c=b.type;if(c in a.a){var d=a.a[c],e=ja(d,b),f;(f=0<=e)&&Array.prototype.splice.call(d,e,1);f&&(D(b),0==a.a[c].length&&(delete a.a[c],a.b--))}}function Ea(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.v&&f.listener==b&&f.D==!!c&&f.F==d)return e}return-1};function Ga(){0!=Ha&&(this[ba]||(this[ba]=++ca));this.A=this.A;this.O=this.O}var Ha=0;Ga.prototype.A=!1;function H(a,b){this.type=a;this.a=this.target=b}H.prototype.b=function(){};function Ia(a){Ia[" "](a);return a}Ia[" "]=aa;function I(a,b){H.call(this,a?a.type:"");this.f=this.a=this.target=null;if(a){this.type=a.type;this.target=a.target||a.srcElement;this.a=b;var c=a.relatedTarget;if(c&&y)try{Ia(c.nodeName)}catch(d){}this.f=a;a.defaultPrevented&&this.b()}}q(I,H);I.prototype.b=function(){I.T.b.call(this);var a=this.f;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Aa)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Ja="closure_lm_"+(1E6*Math.random()|0),Ka={},La=0;
function J(a,b,c,d,e){if("array"==l(b))for(var f=0;f<b.length;f++)J(a,b[f],c,d,e);else if(c=Ma(c),a&&a[C])Da(a.f,String(b),c,d,e);else{if(!b)throw Error("Invalid event type");var f=!!d,g=K(a);g||(a[Ja]=g=new E(a));c=Da(g,b,c,d,e);if(!c.a){d=Na();c.a=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,f);else if(a.attachEvent)a.attachEvent(Oa(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");La++}}}
function Na(){var a=Pa,b=za?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function Qa(a,b,c,d,e){if("array"==l(b))for(var f=0;f<b.length;f++)Qa(a,b[f],c,d,e);else(c=Ma(c),a&&a[C])?(a=a.f,b=String(b).toString(),b in a.a&&(f=a.a[b],c=Ea(f,c,d,e),-1<c&&(D(f[c]),Array.prototype.splice.call(f,c,1),0==f.length&&(delete a.a[b],a.b--)))):a&&(a=K(a))&&(b=a.a[b.toString()],a=-1,b&&(a=Ea(b,c,!!d,e)),(c=-1<a?b[a]:null)&&Ra(c))}
function Ra(a){if("number"!=typeof a&&a&&!a.v){var b=a.src;if(b&&b[C])Fa(b.f,a);else{var c=a.type,d=a.a;b.removeEventListener?b.removeEventListener(c,d,a.D):b.detachEvent&&b.detachEvent(Oa(c),d);La--;(c=K(b))?(Fa(c,a),0==c.b&&(c.src=null,b[Ja]=null)):D(a)}}}function Oa(a){return a in Ka?Ka[a]:Ka[a]="on"+a}function Sa(a,b,c,d){var e=!0;if(a=K(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.D==c&&!f.v&&(f=Ta(f,d),e=e&&!1!==f)}return e}
function Ta(a,b){var c=a.listener,d=a.F||a.src;a.C&&Ra(a);return c.call(d,b)}
function Pa(a,b){if(a.v)return!0;if(!za){var c;if(!(c=b))a:{c=["window","event"];for(var d=k,e;e=c.shift();)if(null!=d[e])d=d[e];else{c=null;break a}c=d}e=c;c=new I(e,this);d=!0;if(!(0>e.keyCode||void 0!=e.returnValue)){a:{var f=!1;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(N){f=!0}if(f||void 0==e.returnValue)e.returnValue=!0}e=[];for(f=c.a;f;f=f.parentNode)e.push(f);for(var f=a.type,g=e.length-1;0<=g;g--){c.a=e[g];var n=Sa(e[g],f,!0,c),d=d&&n}for(g=0;g<e.length;g++)c.a=e[g],n=Sa(e[g],f,!1,c),
d=d&&n}return d}return Ta(a,new I(b,this))}function K(a){a=a[Ja];return a instanceof E?a:null}var Ua="__closure_events_fn_"+(1E9*Math.random()>>>0);function Ma(a){if("function"==l(a))return a;a[Ua]||(a[Ua]=function(b){return a.handleEvent(b)});return a[Ua]};function L(){Ga.call(this);this.f=new E(this);this.M=this}q(L,Ga);L.prototype[C]=!0;L.prototype.removeEventListener=function(a,b,c,d){Qa(this,a,b,c,d)};function M(a,b){var c=a.M,d=b,e=d.type||d;if(m(d))d=new H(d,c);else if(d instanceof H)d.target=d.target||c;else{var f=d,d=new H(e,c);qa(d,f)}c=d.a=c;Va(c,e,!0,d);Va(c,e,!1,d)}
function Va(a,b,c,d){if(b=a.f.a[String(b)]){b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.v&&g.D==c){var n=g.listener,N=g.F||g.src;g.C&&Fa(a.f,g);e=!1!==n.call(N,d)&&e}}}};function Wa(a,b,c){if("function"==l(a))c&&(a=p(a,c));else if(a&&"function"==typeof a.handleEvent)a=p(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<+b?-1:k.setTimeout(a,b||0)};function Xa(){}Xa.prototype.a=null;function Ya(a){var b;(b=a.a)||(b={},Za(a)&&(b[0]=!0,b[1]=!0),b=a.a=b);return b};var $a;function ab(){}q(ab,Xa);function bb(a){return(a=Za(a))?new ActiveXObject(a):new XMLHttpRequest}function Za(a){if(!a.b&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.b=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.b}$a=new ab;function O(a,b){this.b={};this.a=[];this.g=this.f=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)cb(this,arguments[d],arguments[d+1])}else if(a){var e;if(a instanceof O)e=a.G(),d=a.S();else{var c=[],f=0;for(e in a)c[f++]=e;e=c;c=[];f=0;for(d in a)c[f++]=a[d];d=c}for(c=0;c<e.length;c++)cb(this,e[c],d[c])}}O.prototype.S=function(){db(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};
O.prototype.G=function(){db(this);return this.a.concat()};O.prototype.clear=function(){this.b={};this.g=this.f=this.a.length=0};function db(a){if(a.f!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];Object.prototype.hasOwnProperty.call(a.b,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.f!=a.a.length){for(var e={},c=b=0;b<a.a.length;)d=a.a[b],Object.prototype.hasOwnProperty.call(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}}
function cb(a,b,c){Object.prototype.hasOwnProperty.call(a.b,b)||(a.f++,a.a.push(b),a.g++);a.b[b]=c}O.prototype.forEach=function(a,b){for(var c=this.G(),d=0;d<c.length;d++){var e=c[d];a.call(b,Object.prototype.hasOwnProperty.call(this.b,e)?this.b[e]:void 0,e,this)}};O.prototype.clone=function(){return new O(this)};function eb(a,b,c,d,e){this.reset(a,b,c,d,e)}eb.prototype.a=null;var fb=0;eb.prototype.reset=function(a,b,c,d,e){"number"==typeof e||fb++;d||fa();this.b=b;delete this.a};function gb(a){this.g=a;this.b=this.f=this.a=null}function P(a,b){this.name=a;this.value=b}P.prototype.toString=function(){return this.name};var hb=new P("SEVERE",1E3),ib=new P("CONFIG",700),jb=new P("FINE",500);function kb(a){if(a.f)return a.f;if(a.a)return kb(a.a);ia("Root logger has no level set.");return null}
gb.prototype.log=function(a,b,c){if(a.value>=kb(this).value)for("function"==l(b)&&(b=b()),a=new eb(a,String(b),this.g),c&&(a.a=c),c="log:"+a.b,k.console&&(k.console.timeStamp?k.console.timeStamp(c):k.console.markTimeline&&k.console.markTimeline(c)),k.msWriteProfilerMark&&k.msWriteProfilerMark(c),c=this;c;)c=c.a};var lb={},Q=null;
function nb(a){Q||(Q=new gb(""),lb[""]=Q,Q.f=ib);var b;if(!(b=lb[a])){b=new gb(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=nb(a.substr(0,c));c.b||(c.b={});c.b[d]=b;b.a=c;lb[a]=b}return b};function R(a,b){a&&a.log(jb,b,void 0)};function ob(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);};var pb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function S(a){L.call(this);this.N=new O;this.u=a||null;this.b=!1;this.s=this.c=null;this.a=this.L=this.l="";this.g=this.H=this.j=this.B=!1;this.i=0;this.m=null;this.J=qb;this.o=this.R=!1}q(S,L);var qb="",rb=S.prototype,sb=nb("goog.net.XhrIo");rb.h=sb;var tb=/^https?$/i,ub=["POST","PUT"];
function vb(a,b){if(a.c)throw Error("[goog.net.XhrIo] Object is active with another request="+a.l+"; newUri="+b);a.l=b;a.a="";a.L="GET";a.B=!1;a.b=!0;a.c=a.u?bb(a.u):bb($a);a.s=a.u?Ya(a.u):Ya($a);a.c.onreadystatechange=p(a.I,a);try{R(a.h,T(a,"Opening Xhr")),a.H=!0,a.c.open("GET",String(b),!0),a.H=!1}catch(f){R(a.h,T(a,"Error opening Xhr: "+f.message));wb(a,f);return}var c=a.N.clone(),d=ka(c.G()),e=k.FormData&&!1;!(0<=ja(ub,"GET"))||d||e||cb(c,"Content-Type","application/x-www-form-urlencoded;charset=utf-8");
c.forEach(function(a,b){this.c.setRequestHeader(b,a)},a);a.J&&(a.c.responseType=a.J);oa(a.c)&&(a.c.withCredentials=a.R);try{xb(a),0<a.i&&(a.o=yb(a.c),R(a.h,T(a,"Will abort after "+a.i+"ms if incomplete, xhr2 "+a.o)),a.o?(a.c.timeout=a.i,a.c.ontimeout=p(a.K,a)):a.m=Wa(a.K,a.i,a)),R(a.h,T(a,"Sending request")),a.j=!0,a.c.send(""),a.j=!1}catch(f){R(a.h,T(a,"Send error: "+f.message)),wb(a,f)}}function yb(a){return x&&A(9)&&"number"==typeof a.timeout&&void 0!==a.ontimeout}
function la(a){return"content-type"==a.toLowerCase()}S.prototype.K=function(){"undefined"!=typeof h&&this.c&&(this.a="Timed out after "+this.i+"ms, aborting",R(this.h,T(this,this.a)),M(this,"timeout"),this.c&&this.b&&(R(this.h,T(this,"Aborting")),this.b=!1,this.g=!0,this.c.abort(),this.g=!1,M(this,"complete"),M(this,"abort"),zb(this)))};function wb(a,b){a.b=!1;a.c&&(a.g=!0,a.c.abort(),a.g=!1);a.a=b;Ab(a);zb(a)}function Ab(a){a.B||(a.B=!0,M(a,"complete"),M(a,"error"))}
S.prototype.I=function(){this.A||(this.H||this.j||this.g?Bb(this):this.P())};S.prototype.P=function(){Bb(this)};
function Bb(a){if(a.b&&"undefined"!=typeof h)if(a.s[1]&&4==U(a)&&2==V(a))R(a.h,T(a,"Local request error detected and ignored"));else if(a.j&&4==U(a))Wa(a.I,0,a);else if(M(a,"readystatechange"),4==U(a)){R(a.h,T(a,"Request complete"));a.b=!1;try{if(Cb(a))M(a,"complete"),M(a,"success");else{var b;try{b=2<U(a)?a.c.statusText:""}catch(c){R(a.h,"Can not get status: "+c.message),b=""}a.a=b+" ["+V(a)+"]";Ab(a)}}finally{zb(a)}}}
function zb(a){if(a.c){xb(a);var b=a.c,c=a.s[0]?aa:null;a.c=null;a.s=null;M(a,"ready");try{b.onreadystatechange=c}catch(d){(a=a.h)&&a.log(hb,"Problem encountered resetting onreadystatechange: "+d.message,void 0)}}}function xb(a){a.c&&a.o&&(a.c.ontimeout=null);"number"==typeof a.m&&(k.clearTimeout(a.m),a.m=null)}
function Cb(a){var b=V(a),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=String(a.l).match(pb)[1]||null,!a&&k.self&&k.self.location&&(a=k.self.location.protocol,a=a.substr(0,a.length-1)),b=!tb.test(a?a.toLowerCase():"");c=b}return c}function U(a){return a.c?a.c.readyState:0}function V(a){try{return 2<U(a)?a.c.status:-1}catch(b){return-1}}function T(a,b){return b+" ["+a.L+" "+a.l+" "+V(a)+"]"};function W(a){this.b=a||new S;this.a=[];a=document.getElementById("stat").textContent.split("\n");for(var b=0;b<a.length;++b){var c=a[b].split(":");2>c.length||this.a.push({name:c[0].trim(),value:c[1].trim()})}this.j=this.a.length;this.m={statsName:0};this.w={statsName:0};this.i="";this.l=this.f=this.g=!1;a=document.createElement("div");a.style.overflow="hidden";a.style.clear="both";b=document.createElement("div");b.id="ui-div";b.innerHTML='<table id="ui-table" border=1 style="float:left; border-collapse: collapse;border-color:silver;"><tr valign="center"><td>Auto refresh (every 5 seconds): <input type="checkbox" id="auto-refresh" '+
(this.g?"checked":"")+'></td><td>&nbsp;&nbsp;&nbsp;&nbsp;Filter: <input id="text-filter" type="text" size="70"></td></tr></table>';a.appendChild(b);b=document.createElement("div");b.id="num";b.className="pagespeed-show-number";a.appendChild(b);document.body.insertBefore(a,document.getElementById("stat"));Db(this)}W.prototype.B=function(){this.g=!this.g};W.prototype.s=function(){this.f=!this.f;Eb(this)};W.prototype.A=function(a){this.i=a.value;Eb(this)};
function Db(a,b){document.getElementById("num").textContent="The number of statistics: "+(void 0!=b?b:a.a.length).toString()+"/"+a.j}W.prototype.error=function(){var a=this.a;if("array"!=l(a))for(var b=a.length-1;0<=b;b--)delete a[b];this.j=a.length=0;Db(this);document.getElementById("stat").textContent="Sorry, failed to update the statistics. Please wait and try again later."};
function Eb(a){a.f?Fb(a):a.a.sort(Gb);var b;var c=a.a,d=c.length;if(0<d){b=Array(d);for(var e=0;e<d;e++)b[e]=c[e]}else b=[];if(a.i)for(e=b.length-1;0<=e;--e)b[e].name&&r(b[e].name.toLowerCase(),a.i.toLowerCase())||b.splice(e,1);Db(a,b.length);c=document.createElement("table");for(e=0;e<b.length;++e){var f=c.insertRow(-1),d=f.insertCell(0);d.textContent=b[e].name;d.className="pagespeed-stats-name";d=f.insertCell(1);d.textContent=b[e].value;d.className="pagespeed-stats-value";d=f.insertCell(2);d.textContent=
a.w[b[e].name].toString();d.className="pagespeed-stats-number-of-changes"}b=c.createTHead().insertRow(0);d=b.insertCell(0);d.innerHTML='Name <input type="checkbox" id="sort-alpha" title="Sort in alphabetical order."'+(a.f?"":"checked")+">";d.className="pagespeed-stats-first-column";b.insertCell(1).textContent="Value";d=b.insertCell(2);d.innerHTML='Number of changes <input type="checkbox" id="sort-freq" title="Sort by the number of changes(descending order)."'+(a.f?"checked":"")+">";d.title="How many times the value changes during the auto-refresh.\nThe number of changes only accumulates when auto-refresh is on.";
d.className="pagespeed-stats-third-column";d=document.getElementById("stat");d.innerHTML="";d.appendChild(c);J(document.getElementById("sort-freq"),"change",p(a.s,a));J(document.getElementById("sort-alpha"),"change",p(a.s,a))}function Gb(a,b){return a.name>b.name?1:a.name<b.name?-1:0}function Fb(a){a.a.sort(p(function(a,c){var d=this.w[a.name],e=this.w[c.name];return e!=d?e-d:Gb(a,c)},a))}
W.prototype.o=function(){if(!this.b.c&&(!this.l||this.g)){this.l=!0;var a=location.pathname,b=a.lastIndexOf("/",a.length-2);vb(this.b,0<b?a.substring(0,b)+"/stats_json":a+"/stats_json")}};
W.prototype.u=function(){if(Cb(this.b)){var a;var b=this.b;a=b.c?ob(b.c.responseText):void 0;b=a.variables;a=a.maxlength;if("object"!=l(b)||"number"!=l(a))this.error();else{a=[];for(var c in b)if("_"!=c[c.length-1]){var d=c.replace(/-/g,"_");"_"==d[0]&&(d=d.substring(1));a.push({name:d,value:b[c].toString()});var e=b[c],f=this.w[d];void 0==f?this.w[d]=e?1:0:e!=this.m[d]&&(this.w[d]=f+1);this.m[d]=e}this.a=a;this.j=a.length;Eb(this)}}else c=this.b,console.log(m(c.a)?c.a:String(c.a)),this.error()};
function Hb(){J(window,"load",function(){var a=new W,b=document.getElementById("text-filter");J(b,"keyup",p(a.A,a,b));J(document.getElementById("auto-refresh"),"change",p(a.B,a));setInterval(p(a.o,a),5E3);J(a.b,"complete",p(a.u,a));a.o()})}var X=["pagespeed","Statistics","Start"],Y=k;X[0]in Y||!Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===Hb?Y[Z]?Y=Y[Z]:Y=Y[Z]={}:Y[Z]=Hb;})();
