!function t(e,i,s){function n(r,o){if(!i[r]){if(!e[r]){var c="function"==typeof require&&require;if(!o&&c)return c(r,!0);if(a)return a(r,!0);throw new Error("Cannot find module '"+r+"'")}var u=i[r]={exports:{}};e[r][0].call(u.exports,function(t){var i=e[r][1][t];return n(i?i:t)},u,u.exports,t,e,i,s)}return i[r].exports}for(var a="function"==typeof require&&require,r=0;r<s.length;r++)n(s[r]);return n}({1:[function(t){"use strict";{var e=t("./modules/handshake"),i=t("./modules/profiles"),s=t("./modules/tabs");t("../../../bower_components/fitvids/jquery.fitvids")}e.init(),i.init(),s.init(),$(".Entry").fitVids()},{"../../../bower_components/fitvids/jquery.fitvids":5,"./modules/handshake":2,"./modules/profiles":3,"./modules/tabs":4}],2:[function(t,e){"use strict";var i=function(){};i.prototype={$el:$(".Handshake"),$items:$(".Handshake-item"),itemSelector:".Handshake-item",$menuItems:$(".Menu a"),msgSelector:".Handshake-message",$currentItem:$(),currentIndex:null,menuDataAttribute:"description",animateInClass:"Handshake-item--animate-in",animateOutClass:"Handshake-item--animate-out"},i.prototype.init=function(){return $("html").hasClass("csstransitions")?(this.addMessages(),void this.interactions()):!1},i.prototype.addMessages=function(){var t,e=this,i=[];$.each(this.$menuItems,function(s){var n,a=$(this).data(e.menuDataAttribute);void 0!==a&&(void 0===t&&(t=s),n=e.$items.clone(),n.find(e.msgSelector).text(a),n.data("menu-item",s),$(this).data("menu-item",s),i.push(n))}),this.$el.empty(),this.$el.append(i),this.activate(t)},i.prototype.interactions=function(){var t=this;this.$menuItems.on("mouseenter",function(){var e=$(this).data("menu-item");t.activate(e)})},i.prototype.activate=function(t){var e;void 0!==t&&t!==this.currentIndex&&(e=this.$el.find(this.itemSelector).filter(function(){return $(this).data("menu-item")===t?!0:void 0}),this.$currentItem.removeClass(this.animateInClass),this.$currentItem.addClass(this.animateOutClass),e.removeClass(this.animateOutClass),e.addClass(this.animateInClass),this.$currentItem=e,this.currentIndex=t)},e.exports=new i},{}],3:[function(t,e){"use strict";var i=function(){};i.prototype={$el:$(".Profile"),linkSelector:".js-profile-reveal",contentSelector:".Profile-content",inactiveClass:"inactive",showDetailsText:"Show details",hideDetailsText:"Hide details"},i.prototype.init=function(){var t=this;$.each(this.$el,function(){var e=$(this).find(t.linkSelector),i=$(this).find(t.contentSelector);e.on("click",function(s){s.preventDefault(),i.toggleClass(t.inactiveClass),e.text(i.hasClass(t.inactiveClass)?t.showDetailsText:t.hideDetailsText)})})},e.exports=new i},{}],4:[function(t,e){"use strict";var i=function(){};i.prototype={$el:$(".Tabs"),$menu:$(".Tabs-menu"),$menuItem:$(".Tabs-menu-item"),$tabs:$(".Tab"),tabActiveClass:"Tab--active",menuItemActiveClass:"Tabs-menu-item--active"},i.prototype.init=function(){this.setup(),this.interactions()},i.prototype.setup=function(){this.activate(0)},i.prototype.activate=function(t){this.$menuItem.removeClass(this.menuItemActiveClass),this.$tabs.removeClass(this.tabActiveClass),this.$menuItem.eq(t).addClass(this.menuItemActiveClass),this.$tabs.eq(t).addClass(this.tabActiveClass)},i.prototype.interactions=function(){var t=this;this.$menuItem.on("click",function(e){e.preventDefault(),t.activate($(this).index())})},e.exports=new i},{}],5:[function(){!function(t){"use strict";t.fn.fitVids=function(e){var i={customSelector:null};if(!document.getElementById("fit-vids-style")){var s=document.head||document.getElementsByTagName("head")[0],n=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",a=document.createElement("div");a.innerHTML='<p>x</p><style id="fit-vids-style">'+n+"</style>",s.appendChild(a.childNodes[1])}return e&&t.extend(i,e),this.each(function(){var e=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];i.customSelector&&e.push(i.customSelector);var s=t(this).find(e.join(","));s=s.not("object object"),s.each(function(){var e=t(this);if(!("embed"===this.tagName.toLowerCase()&&e.parent("object").length||e.parent(".fluid-width-video-wrapper").length)){var i="object"===this.tagName.toLowerCase()||e.attr("height")&&!isNaN(parseInt(e.attr("height"),10))?parseInt(e.attr("height"),10):e.height(),s=isNaN(parseInt(e.attr("width"),10))?e.width():parseInt(e.attr("width"),10),n=i/s;if(!e.attr("id")){var a="fitvid"+Math.floor(999999*Math.random());e.attr("id",a)}e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*n+"%"),e.removeAttr("height").removeAttr("width")}})})}}(window.jQuery||window.Zepto)},{}]},{},[1]);