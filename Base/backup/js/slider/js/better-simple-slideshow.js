var makeBSS=function(e,t){var n=document.querySelectorAll(e),s={},u={init:function(e,t){this.counter=0,this.el=e,this.$items=e.querySelectorAll("figure"),this.numItems=this.$items.length,t=t||{},t.auto=t.auto||!1,this.opts={auto:"undefined"==typeof t.auto?!1:t.auto,speed:"undefined"==typeof t.auto.speed?1500:t.auto.speed,pauseOnHover:"undefined"==typeof t.auto.pauseOnHover?!1:t.auto.pauseOnHover,fullScreen:"undefined"==typeof t.fullScreen?!1:t.fullScreen,swipe:"undefined"==typeof t.swipe?!1:t.swipe},this.$items[0].classList.add("bss-show"),this.injectControls(e),this.addEventListeners(e),this.opts.auto&&this.autoCycle(this.el,this.opts.speed,this.opts.pauseOnHover),this.opts.fullScreen&&this.addFullScreen(this.el),this.opts.swipe&&this.addSwipe(this.el)},showCurrent:function(e){e>0?this.counter=this.counter+1===this.numItems?0:this.counter+1:this.counter=this.counter-1<0?this.numItems-1:this.counter-1,[].forEach.call(this.$items,function(e){e.classList.remove("bss-show")}),this.$items[this.counter].classList.add("bss-show")},injectControls:function(e){var t=document.createElement("span"),n=document.createElement("span"),s=document.createDocumentFragment();t.classList.add("bss-prev"),n.classList.add("bss-next"),t.innerHTML="&laquo;",n.innerHTML="&raquo;",s.appendChild(t),s.appendChild(n),e.appendChild(s)},addEventListeners:function(e){var t=this;e.querySelector(".bss-next").addEventListener("click",function(){t.showCurrent(1)},!1),e.querySelector(".bss-prev").addEventListener("click",function(){t.showCurrent(-1)},!1),e.onkeydown=function(e){e=e||window.event,37===e.keyCode?t.showCurrent(-1):39===e.keyCode&&t.showCurrent(1)}},autoCycle:function(e,t,n){var s=this,u=window.setInterval(function(){s.showCurrent(1)},t);n&&(e.addEventListener("mouseover",function(){u=clearInterval(u)},!1),e.addEventListener("mouseout",function(){u=window.setInterval(function(){s.showCurrent(1)},t)},!1))},addFullScreen:function(e){var t=this,n=document.createElement("span");n.classList.add("bss-fullscreen"),e.appendChild(n),e.querySelector(".bss-fullscreen").addEventListener("click",function(){t.toggleFullScreen(e)},!1)},addSwipe:function(e){var t=this,n=new Hammer(e);n.on("swiperight",function(e){t.showCurrent(-1)}),n.on("swipeleft",function(e){t.showCurrent(1)})},toggleFullScreen:function(e){document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement?document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen():document.documentElement.requestFullscreen?e.requestFullscreen():document.documentElement.msRequestFullscreen?e.msRequestFullscreen():document.documentElement.mozRequestFullScreen?e.mozRequestFullScreen():document.documentElement.webkitRequestFullscreen&&e.webkitRequestFullscreen(e.ALLOW_KEYBOARD_INPUT)}};[].forEach.call(n,function(e){s=Object.create(u),s.init(e,t)})};