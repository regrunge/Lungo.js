/**
 *
 *    /$$
 *   | $$
 *   | $$       /$$   /$$ /$$$$$$$   /$$$$$$   /$$$$$$
 *   | $$      | $$  | $$| $$__  $$ /$$__  $$ /$$__  $$
 *   | $$      | $$  | $$| $$  \ $$| $$  \ $$| $$  \ $$
 *   | $$      | $$  | $$| $$  | $$| $$  | $$| $$  | $$
 *   | $$$$$$$$|  $$$$$$/| $$  | $$|  $$$$$$$|  $$$$$$/
 *   |________/ \______/ |__/  |__/ \____  $$ \______/
 *                                  /$$  \ $$
 *                                 |  $$$$$$/
 *                                  \______/
 *
 * @copyright 2011 TapQuo Inc (c)
 * @license   http://www.github.com/tapquo/lungo/blob/master/LICENSE.txt
 * @version   1.1.2
 * @link      https://github.com/TapQuo/Lungo.js
 *
 * @author   Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
 * @author   Guillermo Pascual <pasku@tapquo.com> || @pasku1
 */

var Quo=function(){function a(c,b){c=c||g;c.__proto__=a.prototype;c.selector=b||"";return c}function d(c){if(c){var b=d.getDomainSelector(c);return a(b,c)}else return a()}var g=[];d.extend=function(c){Array.prototype.slice.call(arguments,1).forEach(function(b){for(key in b)c[key]=b[key]});return c};a.prototype=d.fn={};return d}();window.Quo=Quo;"$$"in window||(window.$$=Quo);
(function(a){function d(b){return b.filter(function(f){return f!==undefined&&f!==null})}var g=Object.prototype,c=[];a.toType=function(b){return g.toString.call(b).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()};a.isOwnProperty=function(b,f){return g.hasOwnProperty.call(b,f)};a.getDomainSelector=function(b){var f=null,e=[1,9,11],l=a.toType(b);if(l==="array")f=d(b);else if(l==="string")f=a.query(document,b);else if(e.indexOf(b.nodeType)>=0||b===window)f=[b];return f};a.map=function(b,f){var e=[],l;if(a.toType(b)===
"array")for(l=0;l<b.length;l++){var k=f(b[l],l);k!=null&&e.push(k)}else for(l in b){k=f(b[l],l);k!=null&&e.push(k)}return e.length>0?[].concat.apply([],e):e};a.each=function(b,f){var e;if(a.toType(b)==="array")for(e=0;e<b.length;e++){if(f.call(b[e],e,b[e])===false)break}else for(e in b)if(f.call(b[e],e,b[e])===false)break;return b};a.mix=function(){for(var b={},f=0,e=arguments.length;f<e;f++){var l=arguments[f],k;for(k in l)if(a.isOwnProperty(l,k)&&l[k]!==undefined)b[k]=l[k]}return b};a.fn.forEach=
c.forEach;a.fn.indexOf=c.indexOf;a.fn.map=function(b){return a.map(this,function(f,e){return b.call(f,e,f)})};a.fn.instance=function(b){return this.map(function(){return this[b]})};a.fn.filter=function(b){return a([].filter.call(this,function(f){return f.parentNode&&a.query(f.parentNode,b).indexOf(f)>=0}))}})(Quo);
(function(a){a.fn.attr=function(d,g){return a.toType(d)==="string"&&g===undefined?this[0].getAttribute(d):this.each(function(){this.setAttribute(d,g)})};a.fn.data=function(d,g){return this.attr("data-"+d,g)};a.fn.val=function(d){return a.toType(d)==="string"?this.each(function(){this.value=d}):this.length>0?this[0].value:null};a.fn.show=function(){return this.style("display","block")};a.fn.hide=function(){return this.style("display","none")};a.fn.height=function(){return this.offset().height};a.fn.width=
function(){return this.offset().width};a.fn.offset=function(){var d=this[0].getBoundingClientRect();return{left:d.left+window.pageXOffset,top:d.top+window.pageYOffset,width:d.width,height:d.height}};a.fn.remove=function(){return this.each(function(){this.parentNode!=null&&this.parentNode.removeChild(this)})}})(Quo);
(function(a){var d=/WebKit\/([\d.]+)/,g={android:/(Android)\s+([\d.]+)/,ipad:/(iPad).*OS\s([\d_]+)/,iphone:/(iPhone\sOS)\s([\d_]+)/,blackberry:/(BlackBerry).*Version\/([\d.]+)/,webos:/(webOS|hpwOS)[\s\/]([\d.]+)/},c=null;a.isMobile=function(){c=c||b();return c.isMobile};a.environment=function(){return c=c||b()};a.isOnline=function(){return navigator.onLine};var b=function(){var f=navigator.userAgent,e={},l=f.match(d);e.browser=l?l[0]:f;var k;for(os in g)if(l=f.match(g[os])){k={name:os==="iphone"||
os==="ipad"?"ios":os,version:l[2].replace("_",".")};break}e.os=k;e.isMobile=e.os?true:false;return e}})(Quo);
(function(a){a.fn.text=function(d){return!d?this[0].textContent:this.each(function(){this.textContent=d})};a.fn.html=function(d){return a.toType("value")==="string"?this.each(function(){this.innerHTML=d}):this[0].innerHTML};a.fn.append=function(d){return this.each(function(){if(a.toType(d)==="string"){var g=document.createElement();g.innerHTML=d;this.appendChild(g.firstChild)}else this.parentNode.insertBefore(d)})};a.fn.prepend=function(d){return this.each(function(){if(a.toType(d)==="string")this.innerHTML=
d+this.innerHTML;else{var g=this.parentNode;g.insertBefore(d,g.firstChild)}})};a.fn.empty=function(){return this.each(function(){this.innerHTML=null})}})(Quo);
(function(a){a.query=function(c,b){var f=document.querySelectorAll(b);return f=Array.prototype.slice.call(f)};a.fn.parent=function(c){var b=c?d(this):this.instance("parentNode");return g(b,c)};a.fn.siblings=function(c){var b=this.map(function(f,e){return Array.prototype.slice.call(e.parentNode.children).filter(function(l){return l!==e})});return g(b,c)};a.fn.children=function(c){var b=this.map(function(){return Array.prototype.slice.call(this.children)});return g(b,c)};a.fn.get=function(c){return c===
undefined?this:this[c]};a.fn.first=function(){return a(this[0])};a.fn.last=function(){return a(this[this.length-1])};a.fn.closest=function(c,b){var f=this[0],e=a(c);for(e.length||(f=null);f&&e.indexOf(f)<0;)f=f!==b&&f!==document&&f.parentNode;return a(f)};a.fn.each=function(c){this.forEach(function(b,f){c.call(b,f,b)});return this};var d=function(c){for(var b=[];c.length>0;)c=a.map(c,function(f){if((f=f.parentNode)&&f!==document&&b.indexOf(f)<0){b.push(f);return f}});return b},g=function(c,b){return b===
undefined?a(c):a(c).filter(b)}})(Quo);
(function(a){function d(g,c){return c.split(/\s+/g).indexOf(g)>=0}a.fn.addClass=function(g){return this.each(function(){d(g,this.className)||(this.className+=" "+g)})};a.fn.removeClass=function(g){return this.each(function(){if(d(g,this.className))this.className=this.className.replace(g," ")})};a.fn.toggleClass=function(g){return this.each(function(){if(d(g,this.className))this.className=this.className.replace(g," ");else this.className+=" "+g})};a.fn.hasClass=function(g){return d(g,this[0].className)};
a.fn.style=function(g,c){return!c?this[0].style[g]||document.defaultView.getComputedStyle(this[0],"")[g]:this.each(function(){this.style[g]=c})}})(Quo);
(function(a){function d(k,h){if(h.contentType)h.headers["Content-Type"]=h.contentType;if(h.dataType)h.headers.Accept=f[h.dataType];for(header in h.headers)k.setRequestHeader(header,h.headers[header])}function g(k,h){k.onreadystatechange={};k.abort();h.error.call(h.context,"QuoJS \u00bb $$.ajax : timeout exceeded",k,h)}function c(k,h){var j=k.responseText;if(j)if(h.dataType===b.MIME)try{j=JSON.parse(j)}catch(m){j=m;h.error.call(h.context,"Parse Error",k,h)}return j}var b={TYPE:"GET",MIME:"json"},f=
{script:"text/javascript, application/javascript",json:"application/json",xml:"application/xml, text/xml",html:"text/html",text:"text/plain"},e=0;a.ajaxSettings={type:b.TYPE,async:true,success:{},error:{},context:null,dataType:b.MIME,headers:{},xhr:function(){return new window.XMLHttpRequest},crossDomain:false,timeout:0};a.ajax=function(k){var h=a.mix(a.ajaxSettings,k);if(/=\?/.test(h.url))return a.jsonp(h);var j=h.xhr();j.onreadystatechange=function(){if(j.readyState===4){clearTimeout(m);if(j.status===
200){if(h.async){var q=c(j,h);h.success.call(h.context,q,j)}}else h.error.call(h.context,"QuoJS \u00bb $$.ajax",j,h)}};j.open(h.type,h.url,h.async);d(j,h);if(h.timeout>0)var m=setTimeout(function(){g(j,h)},h.timeout);j.send(h.data);return h.async?j:c(j,h)};a.jsonp=function(k){var h="jsonp"+ ++e,j=document.createElement("script"),m={abort:function(){a(j).remove();if(h in window)window[h]={}}},q;window[h]=function(s){clearTimeout(q);a(j).remove();delete window[h];k.success.call(k.context,s,m)};j.src=
k.url.replace(/=\?/,"="+h);a("head").append(j);if(k.timeout>0)q=setTimeout(function(){g(m,k)},k.timeout);return m};a.get=function(k,h,j,m){k+=l(h);return a.ajax({url:k,success:j,dataType:m})};a.post=function(k,h,j,m){return a.ajax({type:"POST",url:k,data:h,success:j,dataType:m,contentType:"application/x-www-form-urlencoded"})};a.json=function(k,h,j){k+=l(h);return a.ajax({url:k,success:j,dataType:b.MIME})};var l=function(k){var h="?",j;for(j in k)if(k.hasOwnProperty(j)){if(h!=="?")h+="&";h+=j+"="+
k[j]}return h==="?"?"":h}})(Quo);
(function(a){var d={touch:"touchstart",tap:"tap"},g=/complete|loaded|interactive/;["touch","tap"].forEach(function(c){a.fn[c]=function(b){a(document.body).delegate(this.selector,d[c],b);return this}});a.fn.on=function(c,b,f){return b===undefined||a.toType(b)==="function"?this.bind(c,b):this.delegate(b,c,f)};a.fn.off=function(c,b,f){return b===undefined||a.toType(b)==="function"?this.unbind(c,b):this.undelegate(b,c,f)};a.fn.ready=function(c){g.test(document.readyState)?c(a):document.addEventListener("DOMContentLoaded",
function(){c(a)},false);return this}})(Quo);
(function(a){function d(j,m,q,s,u){m=a.isMobile()?m:h[m];var w=j._id||(j._id=e++);w=l[w]||(l[w]=[]);u=u&&u(q,m);m={event:m,callback:q,selector:s,proxy:c(u,q,j),delegate:u,index:w.length};w.push(m);j.addEventListener(m.event,m.proxy,false)}function g(j,m,q,s){m=a.isMobile()?m:h[m];var u=j._id||(j._id=e++);b(u,m,q,s).forEach(function(w){delete l[u][w.index];j.removeEventListener(w.event,w.proxy,false)})}function c(j,m,q){m=j||m;return function(s){var u=m.apply(q,[s].concat(s.data));u===false&&s.preventDefault();
return u}}function b(j,m,q,s){return(l[j]||[]).filter(function(u){return u&&(!m||u.event==m)&&(!q||u.fn==q)&&(!s||u.selector==s)})}function f(j){var m=a.extend({originalEvent:j},j);a.each(k,function(q,s){m[q]=function(){this[s]=function(){return true};return j[q].apply(j,arguments)};m[s]=function(){return false}});return m}var e=1,l={},k={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"},h={touchstart:"mousedown",touchmove:"mousemove",
touchend:"mouseup",tap:"click",doubletap:"dblclick",orientationchange:"resize"};a.Event=function(j){var m=document.createEvent("Events");m.initEvent(j,true,true,null,null,null,null,null,null,null,null,null,null,null,null);return m};a.fn.bind=function(j,m){return this.each(function(){d(this,j,m)})};a.fn.unbind=function(j,m){return this.each(function(){g(this,j,m)})};a.fn.delegate=function(j,m,q){return this.each(function(s,u){d(u,m,q,j,function(w){return function(z){var y=a(z.target).closest(j,u).get(0);
if(y){var i=a.extend(f(z),{currentTarget:y,liveFired:u});return w.apply(y,[i].concat([].slice.call(arguments,1)))}}})})};a.fn.undelegate=function(j,m,q){return this.each(function(){g(this,m,q,j)})};a.fn.trigger=function(j){a.isMobile()||console.log("Event "+j+" captured.");if(a.toType(j)==="string")j=a.Event(j);return this.each(function(){this.dispatchEvent(j)})}})(Quo);
(function(a){function d(h){var j=Date.now(),m=j-(e.last||j);h=a.isMobile()?h.touches[0]:h;l&&clearTimeout(l);e={el:a("tagName"in h.target?h.target:h.target.parentNode),x1:h.pageX,y1:h.pageY,isDoubleTap:m>0&&m<=250?true:false,last:j};setTimeout(f,k)}function g(h){h=a.isMobile()?h.touches[0]:h;e.x2=h.pageX;e.y2=h.pageY}function c(){if(e.isDoubleTap){e.el.trigger("doubleTap");e={}}else if(e.x2>0||e.y2>0){(Math.abs(e.x1-e.x2)>30||Math.abs(e.y1-e.y2)>30)&&e.el.trigger("swipe")&&e.el.trigger("swipe"+(Math.abs(e.x1-
e.x2)>=Math.abs(e.y1-e.y2)?e.x1-e.x2>0?"Left":"Right":e.y1-e.y2>0?"Up":"Down"));e.x1=e.x2=e.y1=e.y2=e.last=0;e={}}else{e.el.trigger("tap");l=setTimeout(function(){l=null;e={}},250)}}function b(){e={};clearTimeout(l)}function f(){if(e.last&&Date.now()-e.last>=k){e.el.trigger("longTap");e={}}}var e={},l,k=750;["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","longTap"].forEach(function(h){a.fn[h]=function(j){return this.on(h,j)}});a(document).ready(function(){var h=a(document.body);
h.bind("touchstart",d);h.bind("touchmove",g);h.bind("touchend",c);h.bind("touchcancel",b)})})(Quo);(function(){var a=Math,d=/webkit/i.test(navigator.appVersion)?"webkit":/firefox/i.test(navigator.userAgent)?"Moz":"opera"in window?"O":"";/android/gi.test(navigator.appVersion);var g=/iphone|ipad/gi.test(navigator.appVersion),c=/playbook/gi.test(navigator.appVersion),b=/hp-tablet/gi.test(navigator.appVersion),f="WebKitCSSMatrix"in window&&"m11"in new WebKitCSSMatrix,e="ontouchstart"in window&&!b,l=d+"Transform"in document.documentElement.style,k=g||c,h=function(){return window.requestAnimationFrame||
window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(i){return setTimeout(i,17)}}(),j=window.cancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout,m="onorientationchange"in window?"orientationchange":"resize",q=e?"touchstart":"mousedown",
s=e?"touchmove":"mousemove",u=e?"touchend":"mouseup",w=e?"touchcancel":"mouseup",z="translate"+(f?"3d(":"("),y=f?",0)":")";g=function(i,o){var n=document,r;this.wrapper=typeof i=="object"?i:n.getElementById(i);this.wrapper.style.overflow="hidden";this.scroller=this.wrapper.children[0];this.options={hScroll:true,vScroll:true,x:0,y:0,bounce:true,bounceLock:false,momentum:true,lockDirection:true,useTransform:true,useTransition:false,onRefresh:null,onBeforeScrollStart:function(p){for(var t=p.target;t.nodeType!=
1;)t=t.parentNode;t.tagName!="SELECT"&&t.tagName!="INPUT"&&t.tagName!="TEXTAREA"&&p.preventDefault()},onScrollStart:null,onBeforeScrollMove:null,onScrollMove:null,onBeforeScrollEnd:null,onScrollEnd:null,onTouchEnd:null,onDestroy:null};for(r in o)this.options[r]=o[r];this.x=this.options.x;this.y=this.options.y;this.options.useTransform=l?this.options.useTransform:false;this.options.hScrollbar=this.options.hScroll&&this.options.hScrollbar;this.options.vScrollbar=this.options.vScroll&&this.options.vScrollbar;
this.options.useTransition=k&&this.options.useTransition;this.scroller.style[d+"TransitionProperty"]=this.options.useTransform?"-"+d.toLowerCase()+"-transform":"top left";this.scroller.style[d+"TransitionDuration"]="0";this.scroller.style[d+"TransformOrigin"]="0 0";if(this.options.useTransition)this.scroller.style[d+"TransitionTimingFunction"]="cubic-bezier(0.33,0.66,0.66,1)";if(this.options.useTransform)this.scroller.style[d+"Transform"]=z+this.x+"px,"+this.y+"px"+y;else this.scroller.style.cssText+=
";position:absolute;top:"+this.y+"px;left:"+this.x+"px";this.refresh();this._bind(m,window);this._bind(q);e||this._bind("mouseout",this.wrapper)};g.prototype={enabled:true,x:0,y:0,steps:[],scale:1,handleEvent:function(i){switch(i.type){case q:if(!e&&i.button!==0)break;this._start(i);break;case s:this._move(i);break;case u:case w:this._end(i);break;case m:this._resize();break;case "mouseout":this._mouseout(i);break;case "webkitTransitionEnd":this._transitionEnd(i)}},_resize:function(){this.refresh()},
_pos:function(i,o){i=this.hScroll?i:0;o=this.vScroll?o:0;if(this.options.useTransform)this.scroller.style[d+"Transform"]=z+i+"px,"+o+"px"+y+" scale("+this.scale+")";else{i>>=0;o>>=0;this.scroller.style.left=i+"px";this.scroller.style.top=o+"px"}this.x=i;this.y=o},_start:function(i){var o=e?i.touches[0]:i,n,r;if(this.enabled){this.options.onBeforeScrollStart&&this.options.onBeforeScrollStart.call(this,i);this.options.useTransition&&this._transitionTime(0);this.zoomed=this.animating=this.moved=false;
this.dirY=this.dirX=this.absDistY=this.absDistX=this.distY=this.distX=0;if(this.options.momentum){if(this.options.useTransform){n=getComputedStyle(this.scroller,null)[d+"Transform"].replace(/[^0-9-.,]/g,"").split(",");r=n[4]*1;n=n[5]*1}else{r=getComputedStyle(this.scroller,null).left.replace(/[^0-9-]/g,"")*1;n=getComputedStyle(this.scroller,null).top.replace(/[^0-9-]/g,"")*1}if(r!=this.x||n!=this.y){this.options.useTransition?this._unbind("webkitTransitionEnd"):j(this.aniTime);this.steps=[];this._pos(r,
n)}}this.startX=this.x;this.startY=this.y;this.pointX=o.pageX;this.pointY=o.pageY;this.startTime=i.timeStamp||Date.now();this.options.onScrollStart&&this.options.onScrollStart.call(this,i);this._bind(s);this._bind(u);this._bind(w)}},_move:function(i){var o=e?i.touches[0]:i,n=o.pageX-this.pointX,r=o.pageY-this.pointY,p=this.x+n,t=this.y+r,v=i.timeStamp||Date.now();this.options.onBeforeScrollMove&&this.options.onBeforeScrollMove.call(this,i);this.pointX=o.pageX;this.pointY=o.pageY;if(p>0||p<this.maxScrollX)p=
this.options.bounce?this.x+n/2:p>=0||this.maxScrollX>=0?0:this.maxScrollX;if(t>0||t<this.maxScrollY)t=this.options.bounce?this.y+r/2:t>=0||this.maxScrollY>=0?0:this.maxScrollY;if(this.absDistX<6&&this.absDistY<6){this.distX+=n;this.distY+=r;this.absDistX=a.abs(this.distX);this.absDistY=a.abs(this.distY)}else{if(this.options.lockDirection)if(this.absDistX>this.absDistY+5){t=this.y;r=0}else if(this.absDistY>this.absDistX+5){p=this.x;n=0}this.moved=true;this._pos(p,t);this.dirX=n>0?-1:n<0?1:0;this.dirY=
r>0?-1:r<0?1:0;if(v-this.startTime>300){this.startTime=v;this.startX=this.x;this.startY=this.y}this.options.onScrollMove&&this.options.onScrollMove.call(this,i)}},_end:function(i){if(!(e&&i.touches.length!=0)){var o=e?i.changedTouches[0]:i,n,r,p={dist:0,time:0},t={dist:0,time:0},v=(i.timeStamp||Date.now())-this.startTime;n=this.x;r=this.y;this._unbind(s);this._unbind(u);this._unbind(w);this.options.onBeforeScrollEnd&&this.options.onBeforeScrollEnd.call(this,i);if(this.moved){if(v<300&&this.options.momentum){p=
n?this._momentum(n-this.startX,v,-this.x,this.scrollerW-this.wrapperW+this.x,this.options.bounce?this.wrapperW:0):p;t=r?this._momentum(r-this.startY,v,-this.y,this.maxScrollY<0?this.scrollerH-this.wrapperH+this.y:0,this.options.bounce?this.wrapperH:0):t;n=this.x+p.dist;r=this.y+t.dist;if(this.x>0&&n>0||this.x<this.maxScrollX&&n<this.maxScrollX)p={dist:0,time:0};if(this.y>0&&r>0||this.y<this.maxScrollY&&r<this.maxScrollY)t={dist:0,time:0}}if(p.dist||t.dist){o=a.max(a.max(p.time,t.time),10);this.scrollTo(n>>
0,r>>0,o)}else this._resetPos(200)}else{if(e){for(n=o.target;n.nodeType!=1;)n=n.parentNode;if(n.tagName!="SELECT"&&n.tagName!="INPUT"&&n.tagName!="TEXTAREA"){r=document.createEvent("MouseEvents");r.initMouseEvent("click",true,true,i.view,1,o.screenX,o.screenY,o.clientX,o.clientY,i.ctrlKey,i.altKey,i.shiftKey,i.metaKey,0,null);r._fake=true;n.dispatchEvent(r)}}this._resetPos(200)}this.options.onTouchEnd&&this.options.onTouchEnd.call(this,i)}},_resetPos:function(i){var o=this.x>=0?0:this.x<this.maxScrollX?
this.maxScrollX:this.x,n=this.y>=0||this.maxScrollY>0?0:this.y<this.maxScrollY?this.maxScrollY:this.y;if(o==this.x&&n==this.y){if(this.moved){this.options.onScrollEnd&&this.options.onScrollEnd.call(this);this.moved=false}}else this.scrollTo(o,n,i||0)},_mouseout:function(i){var o=i.relatedTarget;if(o)for(;o=o.parentNode;)if(o==this.wrapper)return;this._end(i)},_transitionEnd:function(i){if(i.target==this.scroller){this._unbind("webkitTransitionEnd");this._startAni()}},_startAni:function(){var i=this,
o=i.x,n=i.y,r=Date.now(),p,t,v;if(!i.animating)if(i.steps.length){p=i.steps.shift();if(p.x==o&&p.y==n)p.time=0;i.animating=true;i.moved=true;if(i.options.useTransition){i._transitionTime(p.time);i._pos(p.x,p.y);i.animating=false;p.time?i._bind("webkitTransitionEnd"):i._resetPos(0)}else{v=function(){var x=Date.now();if(x>=r+p.time){i._pos(p.x,p.y);i.animating=false;i.options.onAnimationEnd&&i.options.onAnimationEnd.call(i);i._startAni()}else{x=(x-r)/p.time-1;t=a.sqrt(1-x*x);x=(p.x-o)*t+o;i._pos(x,
(p.y-n)*t+n);if(i.animating)i.aniTime=h(v)}};v()}}else i._resetPos(400)},_transitionTime:function(i){this.scroller.style[d+"TransitionDuration"]=i+"ms"},_momentum:function(i,o,n,r,p){o=a.abs(i)/o;var t=o*o/0.0012,v=0;v=0;if(i>0&&t>n){v=p/(6/(t/o*6.0E-4));n+=v;o=o*n/t;t=n}else if(i<0&&t>r){v=p/(6/(t/o*6.0E-4));r+=v;o=o*r/t;t=r}t*=i<0?-1:1;v=o/6.0E-4;return{dist:t,time:v>>0}},_offset:function(i){for(var o=-i.offsetLeft,n=-i.offsetTop;i=i.offsetParent;){o-=i.offsetLeft;n-=i.offsetTop}return{left:o,top:n}},
_bind:function(i,o,n){(o||this.scroller).addEventListener(i,this,!!n)},_unbind:function(i,o,n){(o||this.scroller).removeEventListener(i,this,!!n)},destroy:function(){this.scroller.style[d+"Transform"]="";this._unbind(m,window);this._unbind(q);this._unbind(s);this._unbind(u);this._unbind(w);this._unbind("mouseout",this.wrapper);this.options.useTransition&&this._unbind("webkitTransitionEnd");this.options.onDestroy&&this.options.onDestroy.call(this)},refresh:function(){var i;this.wrapperW=this.wrapper.clientWidth;
this.wrapperH=this.wrapper.clientHeight;this.scrollerW=this.scroller.offsetWidth;this.scrollerH=this.scroller.offsetHeight;this.maxScrollX=this.wrapperW-this.scrollerW;this.maxScrollY=this.wrapperH-this.scrollerH;this.dirY=this.dirX=0;this.hScroll=this.options.hScroll&&this.maxScrollX<0;this.vScroll=this.options.vScroll&&(!this.options.bounceLock&&!this.hScroll||this.scrollerH>this.wrapperH);i=this._offset(this.wrapper);this.wrapperOffsetLeft=-i.left;this.wrapperOffsetTop=-i.top;this.scroller.style[d+
"TransitionDuration"]="0";this._resetPos(200)},scrollTo:function(i,o,n,r){var p=i;this.stop();p.length||(p=[{x:i,y:o,time:n,relative:r}]);i=0;for(o=p.length;i<o;i++){if(p[i].relative){p[i].x=this.x-p[i].x;p[i].y=this.y-p[i].y}this.steps.push({x:p[i].x,y:p[i].y,time:p[i].time||0})}this._startAni()},scrollToElement:function(i,o){var n;if(i=i.nodeType?i:this.scroller.querySelector(i)){n=this._offset(i);n.left+=this.wrapperOffsetLeft;n.top+=this.wrapperOffsetTop;n.left=n.left>0?0:n.left<this.maxScrollX?
this.maxScrollX:n.left;n.top=n.top>0?0:n.top<this.maxScrollY?this.maxScrollY:n.top;o=o===undefined?a.max(a.abs(n.left)*2,a.abs(n.top)*2):o;this.scrollTo(n.left,n.top,o)}},disable:function(){this.stop();this._resetPos(0);this.enabled=false;this._unbind(s);this._unbind(u);this._unbind(w)},enable:function(){this.enabled=true},stop:function(){j(this.aniTime);this.steps=[];this.animating=this.moved=false}};if(typeof exports!=="undefined")exports.iScroll=g;else window.iScroll=g})();
var LUNGO=LUNGO||{};LUNGO.VERSION="1.1.1";LUNGO.Attributes||(LUNGO.Attributes={});LUNGO.Data||(LUNGO.Data={});LUNGO.Sugar||(LUNGO.Sugar={});LUNGO.View||(LUNGO.View={});LUNGO.Device||(LUNGO.Device={});LUNGO.App=function(a){var d={id:1,name:"lungo_app",version:1,icon:""};return{init:function(g){d=a.Core.mix(d,g);a.Boot()},get:function(g){return d[g]}}}(LUNGO);LUNGO.Core=function(a,d){var g=Array.prototype,c=function(e,l){return d.isOwnProperty(e,l)},b=function(e){return d.toType(e)},f=function(e){return g.slice.call(e,0)};return{log:function(e,l){a.Core.isMobile()||console[e===1?"log":e===2?"warn":"error"](l)},execute:function(){var e=f(arguments),l=e.shift();b(l)==="function"&&l.apply(null,e)},bind:function(e,l){return function(){return l.apply(e,f(arguments))}},mix:function(){for(var e=e||{},l=0,k=arguments.length;l<k;l++){var h=arguments[l],j;for(j in h)if(c(h,
j))e[j]=h[j]}return e},isOwnProperty:c,toType:b,toArray:f,isMobile:function(){return d.isMobile()},environment:function(){return d.environment()}}}(LUNGO,Quo);LUNGO.dom=function(a){return $$(a)};LUNGO.Service=function(a,d){return{get:function(g,c,b,f){return d.get(g,c,b,f)},post:function(g,c,b,f){return d.post(g,c,b,f)},json:function(g,c,b){return d.json(g,c,b)},Settings:d.ajaxSettings}}(LUNGO,Quo);LUNGO.Router=function(a){var d={SHOW:"show",HIDE:"hide"},g=function(c){var b=false;if(a.dom(c).length>0)b=true;else a.Core.log(3,"Lungo.Router ERROR: The target "+c+" does not exists.");return b};return{section:function(c){c=c.indexOf("#")?"#"+c:c;if(g("section"+c)){a.dom(a.Router.History.current()).removeClass(d.SHOW).addClass(d.HIDE);a.dom(c).addClass(d.SHOW);a.dom(c).removeClass(d.HIDE);a.Router.History.add(c)}},article:function(c,b){g(c+" article"+b)&&a.View.Article.show(c,b)},back:function(){a.dom(a.Router.History.current()).removeClass(d.SHOW);
a.Router.History.removeLast();a.dom(a.Router.History.current()).removeClass(d.HIDE).addClass(d.SHOW)}}}(LUNGO);LUNGO.Router.History=function(){var a=[],d=function(){return a[a.length-1]};return{add:function(g){g!==d()&&a.push(g)},current:d,removeLast:function(){a.length-=1}}}();LUNGO.View.Article=function(a){var d={ARTICLE:"article",NAVIGATION_ITEM:"a"},g={ACTIVE:"current"};return{show:function(c,b){var f=c+" "+d.NAVIGATION_ITEM;a.dom(f).removeClass(g.ACTIVE);f=a.dom(f+'[href="'+b+'"]');f.addClass(g.ACTIVE);(f=f.data("title"))&&a.dom(c+" header .title, "+c+" footer .title").text(f);a.dom(c+" "+d.ARTICLE).removeClass(g.ACTIVE);a.dom(b).addClass(g.ACTIVE)}}}(LUNGO);LUNGO.View.Resize=function(a){return{scroll:function(d){var g=d.children().first(),c=g.children().first();if(a.View.Scroll.isHorizontal(d)){c=g.children().length*c.width();g.style("width",c+"px")}else{var b=g.children().length;d=Math.floor(d.width()/c.width());c=Math.ceil(b/d)*c.height();g.style("height",c+"px")}},article:function(d,g,c,b){g=d.children(g);if(g.length>0){b=g[b]();d.children("article").style(c,b+"px")}},toolbars:function(){for(var d=".toolbar nav",g=a.dom(d),c=0,b=g.length;c<b;c++){d=
a.dom(g[c]);var f=d.children();d=d.width()/f.length;f.style("width",d+"px")}}}}(LUNGO);LUNGO.View.Template=function(a){var d={};return{create:function(g,c){d[g]=c},exists:function(g){return d[g]?true:false},get:function(g){return d[g]},binding:function(g,c,b,f){a.View.Template.Binding.create(g,c,b,f)}}}(LUNGO);LUNGO.View.Template.Binding=function(a){var d=/\{{.*?\}}/gi,g=function(c,b){var f,e;for(e in c)if(a.Core.isOwnProperty(c,e)){f=RegExp("{{"+e+"}}","g");b=b.replace(f,c[e])}return b.replace(d,"")};return{create:function(c,b,f,e){if(a.View.Template.exists(b)){b=a.View.Template.get(b);var l=a.Core.toType(f);if(l==="array"){l="";for(var k=0,h=f.length;k<h;k++)l+=g(f[k],b);f=l}else if(l==="object")f=g(f,b);else{a.Core.log(3,"View.Template ERROR >> No type defined.");f=void 0}f=f;a.dom("#"+c).html(f);a.Core.execute(e)}else a.Core.log(3,
"lng.View.Template.binding: id "+b+" not exists")},dataAttribute:function(c,b){var f=c.data(b.tag);if(f){f=b.html.replace("{{value}}",f);c.prepend(f)}}}}(LUNGO);LUNGO.View.Template.List=function(a){var d=null,g=function(){var c=d.order_field,b=d.order_type==="desc"?-1:1;c&&b&&d.data.sort(function(f,e){return f[c]<e[c]?-b:f[c]>e[c]?b:0})};return{create:function(c){d=c;d.container_id+="_list";c=false;var b=!!a.dom(d.container_id),f=a.View.Template.exists(d.template_id);if(b&&f){a.dom("#"+d.container_id).html("");b=a.Core.toType(d.data);if(b==="array"||b==="object")c=true}if(c){g();a.View.Template.Binding.create(d.container_id,d.template_id,d.data);c=a.dom("#"+
d.container_id).parent().attr("id");a.View.Scroll.create(c,{snap:"li"})}}}}(LUNGO);LUNGO.View.Scroll=function(a){var d={hScroll:false,vScroll:false,useTransition:true,momentum:true,lockDirection:true,fixedScrollbar:true,fadeScrollbar:true,hideScrollbar:true},g=function(b){return b.hasClass("horizontal")?true:false},c=function(b,f){a.Data.Cache.exists("scrolls")||a.Data.Cache.set("scrolls",{});var e=a.Data.Cache.get("scrolls");if(e[b])e[b].refresh();else e[b]=new iScroll(b,f);a.Data.Cache.set("scrolls",e)};return{create:function(b,f){if(b){var e=a.dom("#"+b);setTimeout(function(){var l=
false,k=e[0];if(k.clientHeight<k.scrollHeight){l=true;k=a.dom(k).children().first();k.style("height","auto");k.style("height",k.height()+90+"px")}if(l){l=f;k=g(e)?"hScroll":"vScroll";l||(l={});l[k]=true;f=l=a.Core.mix(d,l);c(b,f)}},100)}else a.Core.log(3,"ERROR: Impossible to create a <scroll> without ID")},update:function(b,f){var e=a.dom("#"+b),l=e.children().first();if(l.length===0){e.html('<div id="'+b+'_scrl"></div>');l=e.children().first()}l.html(f);a.View.Resize.scroll(e);!a.Data.Cache.get("scrolls",
b)&&c(b);a.Data.Cache.get("scrolls",b).refresh()},remove:function(b){if(a.Data.Cache.exists("scrolls")){a.Data.Cache.get("scrolls",b).destroy();a.Data.Cache.remove("scrolls",b)}},isHorizontal:g}}(LUNGO);LUNGO.View.Aside=function(a){return{toggle:function(d){a.dom(d+" article").toggleClass("aside")}}}(LUNGO);LUNGO.View.Element=function(a){var d={BUBBLE:".bubble.count"};return{count:function(g,c){var b=a.dom(g);if(b)if(c>0){var f=b.children(d.BUBBLE);if(f.length>0)f.html(c);else{f=LUNGO.Attributes.Data.Count.html.replace("{{value}}",c);b.append(f)}}else b.children(d.BUBBLE).remove()}}}(LUNGO);LUNGO.Attributes.Data={Search:{tag:"search",selector:".list",html:'<li class="search {{value}}"><input type="search" placeholder="Search..."><a href="#" class="button" data-icon="search"></a></li>'},Count:{tag:"count",selector:"*",html:'<span class="bubble count">{{value}}</span>'},Search:{tag:"search",selector:"*",html:'<input type="search" placeholder="{{value}}"/><a href="#" class="button" data-icon="search"></a>'},Icon:{tag:"icon",selector:"*",html:'<span class="icon {{value}}"></span>'},Image:{tag:"image",
selector:"*",html:'<img src="{{value}}" class="icon" />'},Title:{tag:"title",selector:"header, footer, article",html:'<span class="title">{{value}}</span>'},Back:{tag:"back",selector:"header, footer",html:'<a href="#back" data-target="section" class="onleft button"><span class="icon {{value}}"></span></a>'}};LUNGO.Data.Cache=function(a){var d={},g=function(b){return arguments.length===1?d[b]:d[arguments[0]][arguments[1]]},c=function(b){return d[b]?true:false};return{set:function(b,f){d[b]=c(b)?a.Core.mix(g(b),f):f},get:g,remove:function(b){if(arguments.length===1)delete d[b];else delete d[arguments[0]][arguments[1]]},exists:c}}(LUNGO);LUNGO.Data.Sql=function(a){var d={name:"lungo_db",version:"1.0",size:65536,schema:[]},g=null,c=function(k,h){a.Core.log(1,"lng.Data.Sql >> "+k);g.transaction(function(j){j.executeSql(k,[],function(m,q){f(h,q)},l)})},b=function(k,h){var j="",m;for(m in k)if(a.Core.isOwnProperty(k,m)){var q=k[m];if(j)j+=" "+h+" ";j+=m+"=";j+=isNaN(q)?'"'+q+'"':q}return j},f=function(k,h){a.Core.toType(k)==="function"&&setTimeout(k,100,h)},e=function(k,h){var j="",m="",q;for(q in h)if(a.Core.isOwnProperty(h,q)){var s=
h[q];j+=j?", "+q:q;if(m)m+=", ";m+=isNaN(s)?'"'+s+'"':s}c("INSERT INTO "+k+" ("+j+") VALUES ("+m+")")},l=function(k,h){a.Core.log(3,"lng.Data.Sql >> "+h.code+": "+h.message)};return{init:function(k){d=a.Core.mix(d,k);if(g=openDatabase(d.name,d.version,d.name,d.size)){k=d.schema;var h=k.length;if(h)for(var j=0;j<h;j++){var m=k[j];m.drop===true&&c("DROP TABLE IF EXISTS "+m.name);var q=m.name;m=m.fields;var s="",u=void 0;for(u in m)if(a.Core.isOwnProperty(m,u)){if(s)s+=", ";s+=u+" "+m[u]}c("CREATE TABLE IF NOT EXISTS "+
q+" ("+s+");")}}else a.Core.log(3,"lng.Data.Sql >> Failed to connect to database.")},select:function(k,h,j){h=h?" WHERE "+b(h,"AND"):"";c("SELECT * FROM "+k+h,function(m){for(var q=[],s=0,u=m.rows.length;s<u;s++)q.push(m.rows.item(s));f(j,q)})},insert:function(k,h){if(a.Core.toType(h)==="object")e(k,h);else for(row in h)e(k,h[row])},update:function(k,h,j){k="UPDATE "+k+" SET "+b(h,",");if(j)k+=" WHERE "+b(j,"AND");c(k)},drop:function(k,h){var j=h?" WHERE "+b(h,"AND"):"";c("DELETE FROM "+k+j+";")},
execute:c}}(LUNGO);LUNGO.Data.Storage=function(){return{}}(LUNGO);LUNGO.Boot=function(a){return function(){a.Boot.Layout.start();a.Boot.Events.start();a.Boot.Data.start();a.Boot.Section.start();a.Boot.Article.start();a.Boot.Stats.start()}}(LUNGO);LUNGO.Boot.Stats=function(a){var d=function(){a.Service.post("http://www.lungojs.com/stats/",{name:a.App.get("name"),version:a.App.get("version"),icon:a.App.get("icon")},function(){})};return{start:function(){a.Core.isMobile()&&d()}}}(LUNGO);LUNGO.Boot.Layout=function(a){var d=null,g=null,c=function(){if(!location.hash||!d.addEventListener){d.scrollTo(0,1);var b=1,f=setInterval(function(){if(g.body){clearInterval(f);b="scrollTop"in g.body?g.body.scrollTop:1;d.scrollTo(0,b===1?0:1)}},15);d.addEventListener("load",function(){setTimeout(function(){d.scrollTo(0,b===1?0:1)},0)},false)}};return{start:function(){if(a.Core.isMobile()){d=window;g=d.document;if(d.innerHeight==356){a.dom("body").style("height","416px");c()}}}}}(LUNGO);LUNGO.Boot.Article=function(a){var d={LIST_IN_ARTICLE:"article.list",SCROLL_IN_ARTICLE:".scrollable",CHECKBOX_IN_ARTICLE:".checkbox, .radio"},g=function(e,l){for(var k=a.dom(e),h=0,j=k.length;h<j;h++){var m=a.dom(k[h]);a.Core.execute(l,m)}},c=function(e){if(e.children().length===0){var l=e.attr("id");e.append('<ul id="'+l+'_list"></ul>')}},b=function(e){e=e.attr("id");a.View.Scroll.create(e)},f=function(e){e.append("<span>&nbsp;</span>")};return{start:function(){g(d.LIST_IN_ARTICLE,c);g(d.SCROLL_IN_ARTICLE,
b);g(d.CHECKBOX_IN_ARTICLE,f)}}}(LUNGO);LUNGO.Boot.Data=function(a){return{start:function(){var d=a.Attributes.Data,g;for(g in d)if(a.Core.isOwnProperty(d,g))for(var c=d[g],b=a.dom(c.selector),f=0,e=b.length;f<e;f++){var l=a.dom(b[f]);a.View.Template.Binding.dataAttribute(l,c)}}}}(LUNGO);LUNGO.Boot.Events=function(a){var d=function(e){e.preventDefault()},g=function(){a.View.Resize.toolbars()},c=function(e){var l=a.dom(this);l=f(l);a.View.Aside.toggle(l);e.preventDefault()},b=function(e){var l=a.dom(this);switch(l.data("target")){case "section":var k=l.attr("href");k==="#back"?a.Router.back():a.Router.section(k);break;case "article":k=f(l);l=l.attr("href");a.Router.article(k,l);break;case "aside":k=f(l);a.View.Aside.toggle(k)}e.preventDefault()},f=function(e){return"#"+e.parent("section").attr("id")};
return{start:function(){a.dom(document).on("touchmove",d);a.dom(window).on("orientationchange",g);a.dom("aside a[href][data-target]").tap(c);a.dom("a[href][data-target]").tap(b)}}}(LUNGO);LUNGO.Boot.Section=function(a){var d={ARTICLE:"article",SECTION:"section"};return{start:function(){var g=a.dom(d.SECTION),c=g.first(),b="#"+c.attr("id");c.addClass("current");a.Router.History.add(b);if(a.Core.isMobile()){c=a.Core.environment();c.os.name==="ios"&&c.os.version>="4."&&g.style("position","fixed")}c=0;for(b=g.length;c<b;c++)a.dom(g[c]).children(d.ARTICLE).first().addClass("current");a.dom("aside").addClass("show");a.View.Resize.toolbars()}}}(LUNGO);