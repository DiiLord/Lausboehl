var makeBSS=function(m,O){var P={},n={init:function(h,g){this.counter=0;this.el=h;this.$items=h.querySelectorAll("figure");this.numItems=this.$items.length;g=g||{};g.auto=g.auto||false;this.opts={auto:"undefined"==typeof g.auto?false:g.auto,speed:"undefined"==typeof g.auto.speed?1500:g.auto.speed,pauseOnHover:"undefined"==typeof g.auto.pauseOnHover?false:g.auto.pauseOnHover,fullScreen:"undefined"==typeof g.fullScreen?false:g.fullScreen,swipe:"undefined"==typeof g.swipe?false:g.swipe};this.$items[0].classList.add("bss-show");
this.injectControls(h);this.addEventListeners(h);this.opts.auto&&this.autoCycle(this.el,this.opts.speed,this.opts.pauseOnHover);this.opts.fullScreen&&this.addFullScreen(this.el);this.opts.swipe&&this.addSwipe(this.el)},showCurrent:function(h){this.counter=h>0?this.counter+1===this.numItems?0:this.counter+1:this.counter-1<0?this.numItems-1:this.counter-1;[].forEach.call(this.$items,function(g){g.classList.remove("bss-show")});this.$items[this.counter].classList.add("bss-show")},injectControls:function(h){var g=
document.createElement("span"),o=document.createElement("span"),k=document.createDocumentFragment();g.classList.add("bss-prev");o.classList.add("bss-next");g.innerHTML="«";o.innerHTML="»";k.appendChild(g);k.appendChild(o);h.appendChild(k)},addEventListeners:function(h){var g=this;h.querySelector(".bss-next").addEventListener("click",function(){g.showCurrent(1)},false);h.querySelector(".bss-prev").addEventListener("click",function(){g.showCurrent(-1)},false);h.onkeydown=function(o){o=o||
window.event;37===o.keyCode?g.showCurrent(-1):39===o.keyCode&&g.showCurrent(1)}},autoCycle:function(h,g,o){var k=this,v=window.setInterval(function(){k.showCurrent(1)},g);o&&(h.addEventListener("mouseover",function(){v=clearInterval(v)},false),h.addEventListener("mouseout",function(){v=window.setInterval(function(){k.showCurrent(1)},g)},false))},addFullScreen:function(h){var g=this,o=document.createElement("span");o.classList.add("bss-fullscreen");h.appendChild(o);h.querySelector(".bss-fullscreen").addEventListener("click",
function(){g.toggleFullScreen(h)},false)},addSwipe:function(h){var g=this;h=new Hammer(h);h.on("swiperight",function(){g.showCurrent(-1)});h.on("swipeleft",function(){g.showCurrent(1)})},toggleFullScreen:function(h){document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement?document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():
document.webkitExitFullscreen&&document.webkitExitFullscreen():document.documentElement.requestFullscreen?h.requestFullscreen():document.documentElement.msRequestFullscreen?h.msRequestFullscreen():document.documentElement.mozRequestFullScreen?h.mozRequestFullScreen():document.documentElement.webkitRequestFullscreen&&h.webkitRequestFullscreen(h.ALLOW_KEYBOARD_INPUT)}};[].forEach.call(document.querySelectorAll(m),function(h){P=Object.create(n);P.init(h,O)})};
(function(m,O,P,n){function h(a,b,c){return Array.isArray(a)?(g(a,c[b],c),true):false}function g(a,b,c){var d;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==n)for(d=0;d<a.length;){b.call(c,a[d],d,a);d++}else for(d in a)a.hasOwnProperty(d)&&b.call(c,a[d],d,a)}function o(a,b,c){var d="DEPRECATED METHOD: "+b+"\n"+c+" AT \n";return function(){var e=Error("get-stack-trace");e=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):
"Unknown Stack Trace";var f=m.console&&(m.console.warn||m.console.log);return f&&f.call(m.console,d,e),a.apply(this,arguments)}}function k(a,b,c){var d=b.prototype;b=a.prototype=Object.create(d);b.constructor=a;b._super=d;c&&w(b,c)}function v(a,b){return function(){return a.apply(b,arguments)}}function ga(a,b){return typeof a==Na?a.apply(b?b[0]||n:n,b):a}function Q(a,b,c){g(R(b),function(d){a.addEventListener(d,c,false)})}function S(a,b,c){g(R(b),function(d){a.removeEventListener(d,c,false)})}function ta(a,
b){for(;a;){if(a==b)return true;a=a.parentNode}return false}function R(a){return a.trim().split(/\s+/g)}function G(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function T(a){return Array.prototype.slice.call(a,0)}function ua(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var i=b?a[f][b]:a[f];G(e,i)<0&&d.push(a[f]);e[f]=i;f++}return c&&(d=b?d.sort(function(j,B){return j[b]>B[b]}):d.sort()),d}function U(a,b){for(var c,d,e=b[0].toUpperCase()+
b.slice(1),f=0;f<va.length;){if(c=va[f],d=c?c+e:b,d in a)return d;f++}return n}function wa(a){a=a.ownerDocument||a;return a.defaultView||a.parentWindow||m}function r(a,b){var c=this;this.manager=a;this.callback=b;this.element=a.element;this.target=a.options.inputTarget;this.domHandler=function(d){ga(a.options.enable,[a])&&c.handler(d)};this.init()}function Oa(a){var b=a.options.inputClass;return new (b?b:Pa?ha:Qa?V:xa?ia:W)(a,Ra)}function Ra(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,
f=b&p&&d-e===0;d=b&(l|q)&&d-e===0;c.isFirst=!!f;c.isFinal=!!d;f&&(a.session={});c.eventType=b;b=a.session;f=c.pointers;d=f.length;b.firstInput||(b.firstInput=ya(c));d>1&&!b.firstMultiple?b.firstMultiple=ya(c):1===d&&(b.firstMultiple=false);e=b.firstInput;var i=(d=b.firstMultiple)?d.center:e.center,j=c.center=za(f);c.timeStamp=ja();c.deltaTime=c.timeStamp-e.timeStamp;c.angle=ka(i,j);c.distance=X(i,j);e=c.center;i=b.offsetDelta||{};j=b.prevDelta||{};var B=b.prevInput||{};c.eventType!==p&&B.eventType!==
l||(j=b.prevDelta={x:B.deltaX||0,y:B.deltaY||0},i=b.offsetDelta={x:e.x,y:e.y});c.deltaX=j.x+(e.x-i.x);c.deltaY=j.y+(e.y-i.y);c.offsetDirection=Aa(c.deltaX,c.deltaY);e={x:c.deltaX/c.deltaTime||0,y:c.deltaY/c.deltaTime||0};c.overallVelocityX=e.x;c.overallVelocityY=e.y;c.overallVelocity=C(e.x)>C(e.y)?e.x:e.y;c.scale=d?X(f[0],f[1],Y)/X(d.pointers[0],d.pointers[1],Y):1;c.rotation=d?ka(f[1],f[0],Y)+ka(d.pointers[1],d.pointers[0],Y):0;c.maxPointers=b.prevInput?c.pointers.length>b.prevInput.maxPointers?c.pointers.length:
b.prevInput.maxPointers:c.pointers.length;j=b.lastInterval||c;f=c.timeStamp-j.timeStamp;if(c.eventType!=q&&(f>Sa||j.velocity===n)){e=c.deltaX-j.deltaX;j=c.deltaY-j.deltaY;i={x:e/f||0,y:j/f||0};f=i.x;d=i.y;i=C(i.x)>C(i.y)?i.x:i.y;e=Aa(e,j);b.lastInterval=c}else{i=j.velocity;f=j.velocityX;d=j.velocityY;e=j.direction}c.velocity=i;c.velocityX=f;c.velocityY=d;c.direction=e;b=a.element;ta(c.srcEvent.target,b)&&(b=c.srcEvent.target);c.target=b;a.emit("hammer.input",c);a.recognize(c);a.session.prevInput=
c}function ya(a){for(var b=[],c=0;c<a.pointers.length;){b[c]={clientX:H(a.pointers[c].clientX),clientY:H(a.pointers[c].clientY)};c++}return{timeStamp:ja(),pointers:b,center:za(b),deltaX:a.deltaX,deltaY:a.deltaY}}function za(a){var b=a.length;if(1===b)return{x:H(a[0].clientX),y:H(a[0].clientY)};for(var c=0,d=0,e=0;b>e;){c+=a[e].clientX;d+=a[e].clientY;e++}return{x:H(c/b),y:H(d/b)}}function Aa(a,b){return a===b?la:C(a)>=C(b)?0>a?Z:$:0>b?J:K}function X(a,b,c){c||(c=Ba);var d=b[c[0]]-a[c[0]];a=b[c[1]]-
a[c[1]];return Math.sqrt(d*d+a*a)}function ka(a,b,c){c||(c=Ba);return 180*Math.atan2(b[c[1]]-a[c[1]],b[c[0]]-a[c[0]])/Math.PI}function W(){this.evEl=Ta;this.evWin=Ua;this.pressed=false;r.apply(this,arguments)}function ha(){this.evEl=Ca;this.evWin=Da;r.apply(this,arguments);this.store=this.manager.session.pointerEvents=[]}function Ea(){this.evTarget=Va;this.evWin=Wa;this.started=false;r.apply(this,arguments)}function V(){this.evTarget=Xa;this.targetIds={};r.apply(this,arguments)}function Ya(a,b){var c=
T(a.touches),d=this.targetIds;if(b&(p|D)&&1===c.length)return d[c[0].identifier]=true,[c,c];var e,f=T(a.changedTouches),i=[],j=this.target;if(e=c.filter(function(B){return ta(B.target,j)}),b===p)for(c=0;c<e.length;){d[e[c].identifier]=true;c++}for(c=0;c<f.length;){d[f[c].identifier]&&i.push(f[c]);b&(l|q)&&delete d[f[c].identifier];c++}return i.length?[ua(e.concat(i),"identifier",true),i]:void 0}function ia(){r.apply(this,arguments);var a=v(this.handler,this);this.touch=new V(this.manager,a);this.mouse=
new W(this.manager,a);this.primaryTouch=null;this.lastTouches=[]}function Fa(a){a=a.changedPointers[0];if(a.identifier===this.primaryTouch){var b={x:a.clientX,y:a.clientY};this.lastTouches.push(b);var c=this.lastTouches;setTimeout(function(){var d=c.indexOf(b);d>-1&&c.splice(d,1)},Za)}}function ma(a,b){this.manager=a;this.set(b)}function $a(a){if(a.indexOf(E)>-1)return E;var b=a.indexOf(L)>-1,c=a.indexOf(M)>-1;return b&&c?E:b||c?b?L:M:a.indexOf(na)>-1?na:Ga}function x(a){this.options=w({},this.defaults,
a||{});this.id=ab++;this.manager=null;this.options.enable=this.options.enable===n?true:this.options.enable;this.state=aa;this.simultaneous={};this.requireFail=[]}function Ha(a){return a&N?"cancel":a&A?"end":a&I?"move":a&s?"start":""}function Ia(a){return a==K?"down":a==J?"up":a==Z?"left":a==$?"right":""}function ba(a,b){var c=b.manager;return c?c.get(a):a}function t(){x.apply(this,arguments)}function ca(){t.apply(this,arguments);this.pY=this.pX=null}function oa(){t.apply(this,arguments)}function pa(){x.apply(this,
arguments);this._input=this._timer=null}function qa(){t.apply(this,arguments)}function ra(){t.apply(this,arguments)}function da(){x.apply(this,arguments);this.pCenter=this.pTime=false;this._input=this._timer=null;this.count=0}function y(a,b){return b=b||{},b.recognizers=b.recognizers===n?y.defaults.preset:b.recognizers,new sa(a,b)}function sa(a,b){this.options=w({},y.defaults,b||{});this.options.inputTarget=this.options.inputTarget||a;this.handlers={};this.session={};this.recognizers=[];this.oldCssProps=
{};this.element=a;this.input=Oa(this);this.touchAction=new ma(this,this.options.touchAction);Ja(this,true);g(this.options.recognizers,function(c){var d=this.add(new c[0](c[1]));c[2]&&d.recognizeWith(c[2]);c[3]&&d.requireFailure(c[3])},this)}function Ja(a,b){var c=a.element;if(c.style){var d;g(a.options.cssProps,function(e,f){d=U(c.style,f);b?(a.oldCssProps[d]=c.style[d],c.style[d]=e):c.style[d]=a.oldCssProps[d]||""});b||(a.oldCssProps={})}}function bb(a,b){var c=O.createEvent("Event");c.initEvent(a,
true,true);c.gesture=b;b.target.dispatchEvent(c)}var w,va=["","webkit","Moz","MS","ms","o"],cb=O.createElement("div"),Na="function",H=Math.round,C=Math.abs,ja=Date.now;w="function"!=typeof Object.assign?function(a){if(a===n||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var d=arguments[c];if(d!==n&&null!==d)for(var e in d)d.hasOwnProperty(e)&&(b[e]=d[e])}return b}:Object.assign;var Ka=o(function(a,b,c){for(var d=Object.keys(b),
e=0;e<d.length;){(!c||c&&a[d[e]]===n)&&(a[d[e]]=b[d[e]]);e++}return a},"extend","Use `assign`."),db=o(function(a,b){return Ka(a,b,true)},"merge","Use `assign`."),ab=1,ea=/mobile|tablet|ip(ad|hone|od)|android/i,xa="ontouchstart"in m,Pa=U(m,"PointerEvent")!==n,Qa=xa&&ea.test(navigator.userAgent),Sa=25,p=1,D=2,l=4,q=8,la=1,Z=2,$=4,J=8,K=16,u=Z|$,F=J|K;ea=u|F;var Ba=["x","y"],Y=["clientX","clientY"];r.prototype={handler:function(){},init:function(){this.evEl&&Q(this.element,this.evEl,this.domHandler);
this.evTarget&&Q(this.target,this.evTarget,this.domHandler);this.evWin&&Q(wa(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&S(this.element,this.evEl,this.domHandler);this.evTarget&&S(this.target,this.evTarget,this.domHandler);this.evWin&&S(wa(this.element),this.evWin,this.domHandler)}};var eb={mousedown:p,mousemove:D,mouseup:l},Ta="mousedown",Ua="mousemove mouseup";k(W,r,{handler:function(a){var b=eb[a.type];b&p&&0===a.button&&(this.pressed=true);b&D&&1!==a.which&&(b=l);
this.pressed&&(b&l&&(this.pressed=false),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:"mouse",srcEvent:a}))}});var fb={pointerdown:p,pointermove:D,pointerup:l,pointercancel:q,pointerout:q},gb={2:"touch",3:"pen",4:"mouse",5:"kinect"},Ca="pointerdown",Da="pointermove pointerup pointercancel";m.MSPointerEvent&&!m.PointerEvent&&(Ca="MSPointerDown",Da="MSPointerMove MSPointerUp MSPointerCancel");k(ha,r,{handler:function(a){var b=this.store,c=false,d=a.type.toLowerCase().replace("ms",
"");d=fb[d];var e=gb[a.pointerType]||a.pointerType,f=e=="touch",i=G(b,a.pointerId,"pointerId");d&p&&(0===a.button||f)?0>i&&(b.push(a),i=b.length-1):d&(l|q)&&(c=true);0>i||(b[i]=a,this.callback(this.manager,d,{pointers:b,changedPointers:[a],pointerType:e,srcEvent:a}),c&&b.splice(i,1))}});var hb={touchstart:p,touchmove:D,touchend:l,touchcancel:q},Va="touchstart",Wa="touchstart touchmove touchend touchcancel";k(Ea,r,{handler:function(a){var b=hb[a.type];if(b===p&&(this.started=true),this.started){var c,
d=T(a.touches);c=T(a.changedTouches);c=(b&(l|q)&&(d=ua(d.concat(c),"identifier",true)),[d,c]);b&(l|q)&&c[0].length-c[1].length===0&&(this.started=false);this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:"touch",srcEvent:a})}}});var ib={touchstart:p,touchmove:D,touchend:l,touchcancel:q},Xa="touchstart touchmove touchend touchcancel";k(V,r,{handler:function(a){var b=ib[a.type],c=Ya.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:"touch",
srcEvent:a})}});var Za=2500;k(ia,r,{handler:function(a,b,c){var d=c.pointerType=="touch",e=c.pointerType=="mouse";if(!(e&&c.sourceCapabilities&&c.sourceCapabilities.firesTouchEvents)){if(d)b&p?(this.primaryTouch=c.changedPointers[0].identifier,Fa.call(this,c)):b&(l|q)&&Fa.call(this,c);else{if(d=e)a:{d=c.srcEvent.clientX;e=c.srcEvent.clientY;for(var f=0;f<this.lastTouches.length;f++){var i=this.lastTouches[f],j=Math.abs(e-i.y);if(25>=Math.abs(d-i.x)&&25>=j){d=true;break a}}d=false}if(d)return}this.callback(a,
b,c)}},destroy:function(){this.touch.destroy();this.mouse.destroy()}});var La=U(cb.style,"touchAction"),Ma=La!==n,Ga="auto",na="manipulation",E="none",L="pan-x",M="pan-y",fa=function(){if(!Ma)return false;var a={},b=m.CSS&&m.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(c){a[c]=b?m.CSS.supports("touch-action",c):true}),a}();ma.prototype={set:function(a){a=="compute"&&(a=this.compute());Ma&&this.manager.element.style&&fa[a]&&(this.manager.element.style[La]=
a);this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){ga(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),$a(a.join(" "))},preventDefaults:function(a){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=d.indexOf(E)>-1&&!fa[E],f=d.indexOf(M)>-1&&!fa[M];d=d.indexOf(L)>-1&&!fa[L];if(e){var i=a.distance<
2,j=a.deltaTime<250;if(1===a.pointers.length&&i&&j)return}return d&&f?void 0:e||f&&c&u||d&&c&F?this.preventSrc(b):void 0},preventSrc:function(a){this.manager.session.prevented=true;a.preventDefault()}};var aa=1,s=2,I=4,A=8,z=A,N=16;x.prototype={defaults:{},set:function(a){return w(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(h(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=ba(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),
this},dropRecognizeWith:function(a){return h(a,"dropRecognizeWith",this)?this:(a=ba(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(h(a,"requireFailure",this))return this;var b=this.requireFail;return a=ba(a,this),-1===G(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(h(a,"dropRequireFailure",this))return this;a=ba(a,this);a=G(this.requireFail,a);return a>-1&&this.requireFail.splice(a,1),this},hasRequireFailures:function(){return this.requireFail.length>
0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(e){c.manager.emit(e,a)}var c=this,d=this.state;A>d&&b(c.options.event+Ha(d));b(c.options.event);a.additionalEvent&&b(a.additionalEvent);d>=A&&b(c.options.event+Ha(d))},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=32)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(32|aa)))return false;a++}return true},recognize:function(a){a=w({},a);return ga(this.options.enable,
[this,a])?(this.state&(z|N|32)&&(this.state=aa),this.state=this.process(a),void(this.state&(s|I|A|N)&&this.tryEmit(a))):(this.reset(),void(this.state=32))},process:function(){},getTouchAction:function(){},reset:function(){}};k(t,x,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(s|I);a=this.attrTest(a);return d&&(c&q||!a)?b|N:d||a?c&l?b|A:b&s?b|I:s:32}});k(ca,t,{defaults:{event:"pan",
threshold:10,pointers:1,direction:ea},getTouchAction:function(){var a=this.options.direction,b=[];return a&u&&b.push(M),a&F&&b.push(L),b},directionTest:function(a){var b=this.options,c,d=a.distance,e=a.direction;c=a.deltaY;return e&b.direction||b.direction&u||(e=0===c?la:0>c?J:K,d=Math.abs(a.deltaY)),a.direction=e,d>b.threshold&&e&b.direction},attrTest:function(a){return t.prototype.attrTest.call(this,a)&&(this.state&s||!(this.state&s)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX;this.pY=
a.deltaY;var b=Ia(a.direction);b&&(a.additionalEvent=this.options.event+b);this._super.emit.call(this,a)}});k(oa,t,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[E]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&s)},emit:function(a){if(1!==a.scale)a.additionalEvent=this.options.event+(a.scale<1?"in":"out");this._super.emit.call(this,a)}});k(pa,x,{defaults:{event:"press",pointers:1,time:251,
threshold:9},getTouchAction:function(){return[Ga]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,e=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(l|q)&&!e)this.reset();else if(a.eventType&p){this.reset();this._timer=setTimeout(v(function(){this.state=z;this.tryEmit()},this),b.time)}else if(a.eventType&l)return z;return 32},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===z&&(a&&a.eventType&l?this.manager.emit(this.options.event+
"up",a):(this._input.timeStamp=ja(),this.manager.emit(this.options.event,this._input)))}});k(qa,t,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[E]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&s)}});k(ra,t,{defaults:{event:"swipe",threshold:10,velocity:0.3,direction:u|F,pointers:1},getTouchAction:function(){return ca.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;
return c&(u|F)||c&u||c&F&&(b=a.overallVelocityY),this._super.attrTest.call(this,a)&&c&a.offsetDirection&&a.distance>this.options.threshold&&a.maxPointers==this.options.pointers&&C(b)>this.options.velocity&&a.eventType&l},emit:function(a){var b=Ia(a.offsetDirection);b&&this.manager.emit(this.options.event+b,a);this.manager.emit(this.options.event,a)}});k(da,x,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[na]},process:function(a){var b=
this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,e=a.deltaTime<b.time;if(this.reset(),a.eventType&p&&0===this.count)return this.failTimeout();if(d&&e&&c){if(a.eventType!=l)return this.failTimeout();c=this.pTime?a.timeStamp-this.pTime<b.interval:true;d=!this.pCenter||X(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp;this.pCenter=a.center;d&&c?this.count+=1:this.count=1;this._input=a;if(0===this.count%b.taps)return this.hasRequireFailures()?(this._timer=setTimeout(v(function(){this.state=
z;this.tryEmit()},this),b.interval),s):z}return 32},failTimeout:function(){return this._timer=setTimeout(v(function(){this.state=32},this),this.options.interval),32},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==z&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}});y.VERSION="2.0.8";y.defaults={domEvents:false,touchAction:"compute",enable:true,inputTarget:null,inputClass:null,preset:[[qa,{enable:false}],[oa,{enable:false},["rotate"]],[ra,
{direction:u}],[ca,{direction:u},["swipe"]],[da],[da,{event:"doubletap",taps:2},["tap"]],[pa]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};sa.prototype={set:function(a){return w(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?2:1},recognize:function(a){var b=this.session;
if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&z)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;){c=d[f];b.stopped===2||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a);!e&&c.state&(s|I|A)&&(e=b.curRecognizer=c);f++}}},get:function(a){if(a instanceof x)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(h(a,"add",this))return this;var b=this.get(a.options.event);
return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(h(a,"remove",this))return this;if(a=this.get(a)){var b=this.recognizers;a=G(b,a);-1!==a&&(b.splice(a,1),this.touchAction.update())}return this},on:function(a,b){if(a!==n&&b!==n){var c=this.handlers;return g(R(a),function(d){c[d]=c[d]||[];c[d].push(b)}),this}},off:function(a,b){if(a!==n){var c=this.handlers;return g(R(a),function(d){b?c[d]&&c[d].splice(G(c[d],b),1):delete c[d]}),this}},
emit:function(a,b){this.options.domEvents&&bb(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a;b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;){c[d](b);d++}}},destroy:function(){this.element&&Ja(this,false);this.handlers={};this.session={};this.input.destroy();this.element=null}};w(y,{INPUT_START:p,INPUT_MOVE:D,INPUT_END:l,INPUT_CANCEL:q,STATE_POSSIBLE:aa,STATE_BEGAN:s,STATE_CHANGED:I,STATE_ENDED:A,STATE_RECOGNIZED:z,STATE_CANCELLED:N,
STATE_FAILED:32,DIRECTION_NONE:la,DIRECTION_LEFT:Z,DIRECTION_RIGHT:$,DIRECTION_UP:J,DIRECTION_DOWN:K,DIRECTION_HORIZONTAL:u,DIRECTION_VERTICAL:F,DIRECTION_ALL:ea,Manager:sa,Input:r,TouchAction:ma,TouchInput:V,MouseInput:W,PointerEventInput:ha,TouchMouseInput:ia,SingleTouchInput:Ea,Recognizer:x,AttrRecognizer:t,Tap:da,Pan:ca,Swipe:ra,Pinch:oa,Rotate:qa,Press:pa,on:Q,off:S,each:g,merge:db,extend:Ka,assign:w,inherit:k,bindFn:v,prefixed:U});("undefined"!=typeof m?m:"undefined"!=typeof self?self:{}).Hammer=
y;"function"==typeof define&&define.amd?define(function(){return y}):"undefined"!=typeof module&&module.exports?module.exports=y:m[P]=y})(window,document,"Hammer");