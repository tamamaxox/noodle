!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r;r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,r.Noodle=t()}}(function(){return function t(r,e,n){function o(s,c){if(!e[s]){if(!r[s]){var a="function"==typeof require&&require;if(!c&&a)return a(s,!0);if(i)return i(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var f=e[s]={exports:{}};r[s][0].call(f.exports,function(t){var e=r[s][1][t];return o(e?e:t)},f,f.exports,t,r,e,n)}return e[s].exports}for(var i="function"==typeof require&&require,s=0;s<n.length;s++)o(n[s]);return o}({1:[function(t,r,e){function n(t){function r(t,r){o(t,function(t){r.push(t)})}return r(t,this),this}var o=t("./each");t("./likeArray"),t("./isArray");n.prototype={constructor:n,length:0,__isArrLike:!0,version:"1.0"},r.exports=n},{"./each":2,"./isArray":5,"./likeArray":6}],2:[function(t,r,e){function n(t,r){for(var e=0;e<t.length;e++)r(t[e],e);return t}r.exports=n},{}],3:[function(t,r,e){function n(t,r,e){t.prototype[r]=function(){return this.__lastReturn=e.apply(this,arguments),this}}function o(t,r,e){t.prototype[r]=function(){return this.__lastReturn=e.apply(s.slice.call(this),arguments),this}}function i(t,r,e){t.prototype[r]=function(){var t=e.apply(this,arguments);return t.__lastReturn=this,t}}var s=t("../var/arr");r.exports={setMutator:n,setAccessor:o,setGenerator:i}},{"../var/arr":9}],4:[function(t,r,e){var n=t("../var/arr"),o=t("./ArrLike.js"),i=t("./each"),s=t("./extendFunction"),c=s.setMutator,a=s.setAccessor,u=["pop","push","reverse","shift","sort","splice","unshift","copyWithin","fill"],f=["concat","join","slice","toString","toLocaleString","some","every","includes","indexOf","lastIndexOf","forEach","map","entries","filter","find","findIndex","keys","values"];i(u,function(t){n[t]&&c(o,t,n[t])}),i(f,function(t){n[t]&&a(o,t,n[t])}),o.prototype.getReturn=function(){return this.__lastReturn},o.prototype.lastReturn=function(t){return t.call(this,this.__lastReturn),this},r.exports=o},{"../var/arr":9,"./ArrLike.js":1,"./each":2,"./extendFunction":3}],5:[function(t,r,e){r.exports=function(t){return!(!Array.isArray||!Array.isArray(t))||"[object Array]"===Object.prototype.toString.call(t)}},{}],6:[function(t,r,e){r.exports=function(t){return null!=t&&("number"==typeof t.length&&"object"==typeof t||void 0)}},{}],7:[function(t,r,e){function n(){return new a(arguments)}t("./polyfill");var o=t("./core/extendFunction"),i=o.setMutator,s=o.setAccessor,c=o.setGenerator,a=t("./core/ArrLike");t("./core/functions"),n.setMutator=function(t,r){return i(a,"$"+t,r)},n.setAccessor=function(t,r){return s(a,"$"+t,r)},n.setGenerator=function(t,r){return c(a,"$"+t,r)},r.exports=n},{"./core/ArrLike":1,"./core/extendFunction":3,"./core/functions":4,"./polyfill":8}],8:[function(t,r,e){Array.prototype.indexOf||(Array.prototype.indexOf=function(t,r){var e;if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),o=n.length>>>0;if(0===o)return-1;var i=+r||0;if(Math.abs(i)===1/0&&(i=0),i>=o)return-1;for(e=Math.max(i>=0?i:o-Math.abs(i),0);e<o;){if(e in n&&n[e]===t)return e;e++}return-1}),Array.prototype.forEach||(Array.prototype.forEach=function(t,r){var e,n;if(null===this)throw new TypeError(" this is null or not defined");var o=Object(this),i=o.length>>>0;if("function"!=typeof t)throw new TypeError(t+" is not a function");for(arguments.length>1&&(e=r),n=0;n<i;){var s;n in o&&(s=o[n],t.call(e,s,n,o)),n++}}),function(){"use strict";var t=Array.prototype.slice;try{t.call(document.documentElement)}catch(r){Array.prototype.slice=function(r,e){if(e="undefined"!=typeof e?e:this.length,"[object Array]"===Object.prototype.toString.call(this))return t.call(this,r,e);var n,o,i=[],s=this.length,c=r||0;c=c>=0?c:Math.max(0,s+c);var a="number"==typeof e?Math.min(e,s):s;if(e<0&&(a=s+e),o=a-c,o>0)if(i=new Array(o),this.charAt)for(n=0;n<o;n++)i[n]=this.charAt(c+n);else for(n=0;n<o;n++)i[n]=this[c+n];return i}}}()},{}],9:[function(t,r,e){r.exports=new Array},{}],10:[function(t,r,e){var n=t("./src/core/each"),o=t("./src/core/isArray"),i=t("./src/core/likeArray");r.exports={each:n,isArray:o,likeArray:i}},{"./src/core/each":2,"./src/core/isArray":5,"./src/core/likeArray":6}],11:[function(t,r,e){function n(t,r,e){return t.setAttribute(r,e),t}function o(t,r){return t.getAttribute(r)}var i=t("./core");i.setAccessor("setAttribute",function(t,r){this.forEach(function(e){n(e,t,r)})}),i.setAccessor("getAttribute",function(t){return 0!==this.length?o(this[0],t):""})},{"./core":13}],12:[function(t,r,e){function n(t,r){return t.className=r,t}function o(t){return t.className}function i(t,r){return new RegExp("\\b("+r.split(u).join("|")+")\\b").test(t.className)}function s(t,r){return t.className=r?h(t.className.replace(new RegExp("\\b("+r.split(u).join("|")+")\\b","g"),"").split(u).join(" ")):"",t}function c(t,r){if(""===t.className)t.className=r;else{var e=t.className,n=[];a(r.split(u),function(t){new RegExp("\\b("+t+")\\b").test(e)||n.push(" "+t)}),t.className+=n.join("")}return t}var a=t("array-like/utils").each,u=t("./var/space"),f=t("./core"),l=t("./utils"),h=l.trim;f.setAccessor("setClass",function(t){this.forEach(function(r){n(r,t)})}),f.setAccessor("hasClass",function(t){return 0!==this.length&&i(this[0],t)}),f.setAccessor("getClass",function(){return 0!==this.length?o(this[0]):""}),f.setAccessor("removeClass",function(t){this.forEach(function(r){s(r,t)})}),f.setAccessor("addClass",function(t){this.forEach(function(r){c(r,t)})})},{"./core":13,"./utils":18,"./var/space":19,"array-like/utils":10}],13:[function(t,r,e){function n(t,r){if(1===arguments.length){if("string"!=typeof t)return o(t);r=t,t=document}var e=t.querySelectorAll(r);return o.apply(o,e)}var o=t("array-like");n.setAccessor=o.setAccessor,n.setMutator=o.setMutator,n.setGenerator=o.setGenerator,r.exports=n},{"array-like":7}],14:[function(t,r,e){function n(t){var r=document.createElement("div");return r.innerHTML=t,r.children[0]}var o=t("array-like"),i=t("array-like/utils").each,s=t("./core");s.setAccessor("append",function(t){"string"==typeof t&&(t=n(t)),this.forEach(function(r){r.appendChild(t)})}),s.setGenerator("querySelector",function(t){var r=[];return this.forEach(function(e){i(e.querySelectorAll(t),function(t){r.indexOf(t)===-1&&r.push(t)})}),o.apply(o,r)}),s.setAccessor("html",function(t){if(0===arguments.length){if(0!==this.length)return this[0].innerHTML}else this.forEach(function(r){r.innerHTML=t})})},{"./core":13,"array-like":7,"array-like/utils":10}],15:[function(t,r,e){var n=t("./core");n.setAccessor("addEventListener",function(t,r,e){var n=arguments;return this.forEach(function(t){t.addEventListener.apply(t,n)}),r}),n.setAccessor("one",function(t,r,e){var n=function(o){r.call(this,o),this.removeEventListener(t,n,e)};return this.forEach(function(r){r.addEventListener.call(r,t,n,e)}),n}),n.setAccessor("on",function(t,r,e,n){var o=function(t){var n=this.querySelectorAll(r);if(n){for(var o=t.target,i=-1;o&&(i=Array.prototype.indexOf.call(n,o))===-1;)o=o.parentElement;i>-1&&e.call(o,t)}};return this.forEach(function(r){r.addEventListener(t,o,n)}),o}),n.setAccessor("removeEventListener",function(t,r,e){this.forEach(function(n){n.removeEventListener(t,r,e)})})},{"./core":13}],16:[function(t,r,e){var n=t("./core");t("./event"),t("./dom"),t("./class"),t("./attribute"),t("./prop"),r.exports=n},{"./attribute":11,"./class":12,"./core":13,"./dom":14,"./event":15,"./prop":17}],17:[function(t,r,e){},{}],18:[function(t,r,e){var n="".trim?function(t){return t.trim()}:function(t){return(t+"").replace(/^\s\s*/,"").replace(/\s\s*$/,"")};r.exports={trim:n}},{}],19:[function(t,r,e){r.exports=/\s+/},{}]},{},[16])(16)});
//# sourceMappingURL=bundle.js.map
