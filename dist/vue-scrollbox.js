!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("VueScrollbox",[],t):"object"==typeof exports?exports.VueScrollbox=t():e.VueScrollbox=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function o(e){n(2)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),i=n.n(r),a=n(7),s=o,l=a(i.a,null,!1,s,"data-v-5a45b667",null);t.default=l.exports},function(e,t,n){var o=n(3);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(5)("4d3ea8c5",o,!0)},function(e,t,n){t=e.exports=n(4)(void 0),t.push([e.i,'\n.scroll-box[data-v-5a45b667], .scroll-box__viewport[data-v-5a45b667], .scroll-box__canvas[data-v-5a45b667] {\n  box-sizing: border-box;\n  min-width: 0;\n  min-height: 0;\n  margin: 0;\n  padding: 0;\n}\n.scroll-box[data-v-5a45b667] {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0px;\n          flex: 1 1 0px;\n}\n.scroll-box__viewport[data-v-5a45b667] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0px;\n          flex: 1 1 0px;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.scroll-box__canvas[data-v-5a45b667] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n}\n.scroll-box[mode="horizontal"] > .scroll-box__viewport[data-v-5a45b667] {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.scroll-box[mode="horizontal"] > .scroll-box__viewport > .scroll-box__canvas[data-v-5a45b667] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row nowrap;\n            flex-flow: row nowrap;\n}\n.scroll-box[mode="vertical"] > .scroll-box__viewport[data-v-5a45b667] {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.scroll-box[mode="vertical"] > .scroll-box__viewport > .scroll-box__canvas[data-v-5a45b667] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column nowrap;\n            flex-flow: column nowrap;\n}\n.scroll-box[mode="auto"] > .scroll-box__viewport[data-v-5a45b667] {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  overflow: auto;\n}\n.scroll-box[mode="auto"] > .scroll-box__viewport > .scroll-box__canvas[data-v-5a45b667] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column nowrap;\n            flex-flow: column nowrap;\n}\n',""])},function(e,t){function n(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=n(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){function o(e){for(var t=0;t<e.length;t++){var n=e[t],o=f[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(i(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var a=[],r=0;r<n.parts.length;r++)a.push(i(n.parts[r]));f[n.id]={id:n.id,refs:1,parts:a}}}}function r(){var e=document.createElement("style");return e.type="text/css",u.appendChild(e),e}function i(e){var t,n,o=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(o){if(h)return v;o.parentNode.removeChild(o)}if(x){var i=p++;o=d||(d=r()),t=a.bind(null,o,i,!1),n=a.bind(null,o,i,!0)}else o=r(),t=s.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}function a(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=b(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function s(e,t){var n=t.css,o=t.media,r=t.sourceMap;if(o&&e.setAttribute("media",o),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(6),f={},u=l&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,h=!1,v=function(){},x="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){h=n;var r=c(e,t);return o(r),function(t){for(var n=[],i=0;i<r.length;i++){var a=r[i],s=f[a.id];s.refs--,n.push(s)}t?(r=c(e,t),o(r)):r=[];for(var i=0;i<n.length;i++){var s=n[i];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete f[s.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=i[0],s=i[1],l=i[2],c=i[3],f={id:e+":"+r,css:s,media:l,sourceMap:c};o[a]?o[a].parts.push(f):n.push(o[a]={id:a,parts:[f]})}return n}},function(e,t){e.exports=function(e,t,n,o,r,i){var a,s=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(a=e,s=e.default);var c="function"==typeof s?s.options:s;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),r&&(c._scopeId=r);var f;if(i?(f=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=f):o&&(f=o),f){var u=c.functional,d=u?c.render:c.beforeCreate;u?(c._injectStyles=f,c.render=function(e,t){return f.call(t),d(e,t)}):c.beforeCreate=d?[].concat(d,f):[f]}return{esModule:a,exports:s,options:c}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"vue-scrollbox",render:function(e){var t=e("div",{class:"scroll-box__canvas",style:{width:null!=this.width?this.width+"px":null,height:null!=this.height?this.height+"px":null}},this.$slots.default);return e("div",{class:"scroll-box"},[e("div",{class:"scroll-box__viewport",on:{scroll:this.onScroll}},[t])])},props:{width:{type:Number},height:{type:Number}},data:function(){return{viewport:{width:0,height:0},canvas:{left:0,top:0,width:0,height:0},clock:{timer:null,DELAY:200},events:{SCROLL:"scroll",RESIZE:"resize"}}},mounted:function(){this.onTick()},beforeDestroy:function(){this.clearTimer()},methods:{scroll:function(){var e={left:this.canvas.left,top:this.canvas.top};this.$emit(this.events.SCROLL,e)},resize:function(){var e={width:this.viewport.width,height:this.viewport.height},t={width:this.canvas.width,height:this.canvas.height};this.$emit(this.events.RESIZE,e,t)},onScroll:function(e){var t=this.canvas.left,n=this.canvas.top;this.canvas.left=this.$el.children[0].scrollLeft,this.canvas.top=this.$el.children[0].scrollTop,(this.canvas.left!==t||this.canvas.top!==n)&&this.scroll()},onTick:function(){var e=this;this.updateSize(),this.clearTimer(),this.clock.timer=setTimeout(function(t){e.onTick()},this.clock.DELAY)},clearTimer:function(){clearTimeout(this.clock.timer)},updateSize:function(){var e=this.updateViewport(),t=this.updateCanvas();(e||t)&&this.resize()},updateViewport:function(){var e=this.$el.children[0],t=e.offsetWidth,n=e.offsetHeight,o=this.viewport.width!==t||this.viewport.height!==n;return this.viewport.width=t,this.viewport.height=n,o},updateCanvas:function(){var e=this.$el.children[0].children[0],t=e.offsetWidth,n=e.offsetHeight,o=this.canvas.width!==t||this.canvas.height!==n;return this.canvas.width=t,this.canvas.height=n,o}}}}])});