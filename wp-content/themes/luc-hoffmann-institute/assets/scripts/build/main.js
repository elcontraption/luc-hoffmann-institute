!function t(e,n,i){function s(o,r){if(!n[o]){if(!e[o]){var u="function"==typeof require&&require;if(!r&&u)return u(o,!0);if(a)return a(o,!0);throw new Error("Cannot find module '"+o+"'")}var h=n[o]={exports:{}};e[o][0].call(h.exports,function(t){var n=e[o][1][t];return s(n?n:t)},h,h.exports,t,e,n,i)}return n[o].exports}for(var a="function"==typeof require&&require,o=0;o<i.length;o++)s(i[o]);return s}({1:[function(t){"use strict";var e=t("./modules/handshake");e.init()},{"./modules/handshake":2}],2:[function(t,e){"use strict";var n=function(){};n.prototype.settings={elSelector:".Handshake",animateElSelector:".Handshake-inner",msgSelector:".Handshake-message",menuItemsSelector:".menu a",menuDataAttribute:"description",animateInClass:"Handshake-inner--animate-in",animateOutClass:"Handshake-inner--animate-out"},n.prototype.init=function(t){this.options=$.extend(!0,{},this.settings,t),this.$el=$(this.options.elSelector),this.$animateEl=$(this.options.animateElSelector),this.$menuItems=$(this.options.menuItemsSelector),this.$currentMsg=$(),this.currentIndex=null,this.addMessages(),this.interactions()},n.prototype.addMessages=function(){var t,e=this;$.each(this.$menuItems,function(n){var i,s=$(this).data(e.options.menuDataAttribute);void 0!==s&&(void 0===t&&(t=n),i=e.$animateEl.clone(),i.find(e.options.msgSelector).text(s),i.data("menu-item",n),$(this).data("menu-item",n),e.$el.append(i))}),this.activate(t)},n.prototype.interactions=function(){var t=this;this.$menuItems.on("mouseenter",function(){var e=$(this).data("menu-item");t.activate(e)})},n.prototype.activate=function(t){var e;t!==this.currentIndex&&(e=this.$el.find(this.options.animateElSelector).filter(function(){return $(this).data("menu-item")===t?!0:void 0}),this.$currentMsg.removeClass(this.options.animateInClass),this.$currentMsg.addClass(this.options.animateOutClass),e.removeClass(this.options.animateOutClass),e.addClass(this.options.animateInClass),this.$currentMsg=e,this.currentIndex=t)},n.prototype.updateMsg=function(t){var e=this.$animateEl.clone();e.find(this.options.msgSelector).text(t),this.$el.find(this.options.animateElSelector).removeClass(this.options.animateOutClass),e.prependTo(this.$el),e.addClass(this.options.animateInClass)},e.exports=new n},{}]},{},[1]);