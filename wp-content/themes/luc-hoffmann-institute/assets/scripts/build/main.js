!function t(e,i,n){function s(a,r){if(!i[a]){if(!e[a]){var d="function"==typeof require&&require;if(!r&&d)return d(a,!0);if(o)return o(a,!0);throw new Error("Cannot find module '"+a+"'")}var l=i[a]={exports:{}};e[a][0].call(l.exports,function(t){var i=e[a][1][t];return s(i?i:t)},l,l.exports,t,e,i,n)}return i[a].exports}for(var o="function"==typeof require&&require,a=0;a<n.length;a++)s(n[a]);return s}({1:[function(t){"use strict";{var e=t("./modules/handshake"),i=t("./modules/profiles");t("../../../bower_components/fitvids/jquery.fitvids")}e.init(),i.init(),$(".entry").fitVids()},{"../../../bower_components/fitvids/jquery.fitvids":4,"./modules/handshake":2,"./modules/profiles":3}],2:[function(t,e){"use strict";var i=function(){};i.prototype.settings={elSelector:".Handshake",animateElSelector:".Handshake-inner",msgSelector:".Handshake-message",menuItemsSelector:".Menu a",menuDataAttribute:"description",animateInClass:"Handshake-inner--animate-in",animateOutClass:"Handshake-inner--animate-out"},i.prototype.init=function(t){this.options=$.extend(!0,{},this.settings,t),this.$el=$(this.options.elSelector),this.$animateEl=$(this.options.animateElSelector),this.$menuItems=$(this.options.menuItemsSelector),this.$currentMsg=$(),this.currentIndex=null,this.addMessages(),this.interactions()},i.prototype.addMessages=function(){var t,e=this;$.each(this.$menuItems,function(i){var n,s=$(this).data(e.options.menuDataAttribute);void 0!==s&&(void 0===t&&(t=i),n=e.$animateEl.clone(),n.find(e.options.msgSelector).text(s),n.data("menu-item",i),$(this).data("menu-item",i),e.$el.append(n))}),this.activate(t)},i.prototype.interactions=function(){var t=this;this.$menuItems.on("mouseenter",function(){var e=$(this).data("menu-item");t.activate(e)})},i.prototype.activate=function(t){var e;t!==this.currentIndex&&(e=this.$el.find(this.options.animateElSelector).filter(function(){return $(this).data("menu-item")===t?!0:void 0}),this.$currentMsg.removeClass(this.options.animateInClass),this.$currentMsg.addClass(this.options.animateOutClass),e.removeClass(this.options.animateOutClass),e.addClass(this.options.animateInClass),this.$currentMsg=e,this.currentIndex=t)},i.prototype.updateMsg=function(t){var e=this.$animateEl.clone();e.find(this.options.msgSelector).text(t),this.$el.find(this.options.animateElSelector).removeClass(this.options.animateOutClass),e.prependTo(this.$el),e.addClass(this.options.animateInClass)},e.exports=new i},{}],3:[function(t,e){"use strict";var i=function(){};i.prototype={$el:$(".Profile"),linkSelector:".js-profile-reveal",contentSelector:".Profile-content",inactiveClass:"inactive",showDetailsText:"Show details",hideDetailsText:"Hide details"},i.prototype.init=function(){var t=this;$.each(this.$el,function(){var e=$(this).find(t.linkSelector),i=$(this).find(t.contentSelector);e.on("click",function(n){n.preventDefault(),i.toggleClass(t.inactiveClass),e.text(i.hasClass(t.inactiveClass)?t.showDetailsText:t.hideDetailsText)})})},e.exports=new i},{}],4:[function(){!function(t){"use strict";t.fn.fitVids=function(e){var i={customSelector:null};if(!document.getElementById("fit-vids-style")){var n=document.head||document.getElementsByTagName("head")[0],s=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",o=document.createElement("div");o.innerHTML='<p>x</p><style id="fit-vids-style">'+s+"</style>",n.appendChild(o.childNodes[1])}return e&&t.extend(i,e),this.each(function(){var e=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];i.customSelector&&e.push(i.customSelector);var n=t(this).find(e.join(","));n=n.not("object object"),n.each(function(){var e=t(this);if(!("embed"===this.tagName.toLowerCase()&&e.parent("object").length||e.parent(".fluid-width-video-wrapper").length)){var i="object"===this.tagName.toLowerCase()||e.attr("height")&&!isNaN(parseInt(e.attr("height"),10))?parseInt(e.attr("height"),10):e.height(),n=isNaN(parseInt(e.attr("width"),10))?e.width():parseInt(e.attr("width"),10),s=i/n;if(!e.attr("id")){var o="fitvid"+Math.floor(999999*Math.random());e.attr("id",o)}e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*s+"%"),e.removeAttr("height").removeAttr("width")}})})}}(window.jQuery||window.Zepto)},{}]},{},[1]);