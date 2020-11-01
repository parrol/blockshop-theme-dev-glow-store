/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";function n(e,t,n){var r,i,o=(n=n||Z).createElement("script");if(o.text=e,t)for(r in pe)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function r(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?ie[oe.call(e)]||"object":typeof e}function i(e){var t=!!e&&"length"in e&&e.length,n=r(e);return!ce(e)&&!fe(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}function o(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}function s(e,t,n){return ce(t)?he.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?he.grep(e,function(e){return e===t!==n}):"string"!=typeof t?he.grep(e,function(e){return-1<re.call(t,e)!==n}):he.filter(t,e,n)}function a(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function l(e){return e}function u(e){throw e}function c(e,t,n,r){var i;try{e&&ce(i=e.promise)?i.call(e).done(t).fail(n):e&&ce(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}function f(){Z.removeEventListener("DOMContentLoaded",f),e.removeEventListener("load",f),he.ready()}function p(e,t){return t.toUpperCase()}function d(e){return e.replace(Ie,"ms-").replace(Ne,p)}function h(){this.expando=he.expando+h.uid++}function m(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ze,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:De.test(i)?JSON.parse(i):i)}catch(e){}Oe.set(e,t,n)}else n=void 0;return n}function g(e,t,n,r){var i,o,s=20,a=r?function(){return r.cur()}:function(){return he.css(e,t,"")},l=a(),u=n&&n[3]||(he.cssNumber[t]?"":"px"),c=e.nodeType&&(he.cssNumber[t]||"px"!==u&&+l)&&qe.exec(he.css(e,t));if(c&&c[3]!==u){for(l/=2,u=u||c[3],c=+l||1;s--;)he.style(e,t,c+u),(1-o)*(1-(o=a()/l||.5))<=0&&(s=0),c/=o;c*=2,he.style(e,t,c+u),n=n||[]}return n&&(c=+c||+l||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=u,r.start=c,r.end=i)),i}function v(e,t){for(var n,r,i,o,s,a,l,u=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(u[c]=Le.get(r,"display")||null,u[c]||(r.style.display="")),""===r.style.display&&Me(r)&&(u[c]=(l=s=o=void 0,s=(i=r).ownerDocument,a=i.nodeName,(l=Fe[a])||(o=s.body.appendChild(s.createElement(a)),l=he.css(o,"display"),o.parentNode.removeChild(o),"none"===l&&(l="block"),Fe[a]=l)))):"none"!==n&&(u[c]="none",Le.set(r,"display",n)));for(c=0;c<f;c++)null!=u[c]&&(e[c].style.display=u[c]);return e}function y(e,t){var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&o(e,t)?he.merge([e],n):n}function b(e,t){for(var n=0,r=e.length;n<r;n++)Le.set(e[n],"globalEval",!t||Le.get(t[n],"globalEval"))}function x(e,t,n,i,o){for(var s,a,l,u,c,f,p=t.createDocumentFragment(),d=[],h=0,m=e.length;h<m;h++)if((s=e[h])||0===s)if("object"===r(s))he.merge(d,s.nodeType?[s]:s);else if(Je.test(s)){for(a=a||p.appendChild(t.createElement("div")),l=(Ue.exec(s)||["",""])[1].toLowerCase(),u=Ye[l]||Ye._default,a.innerHTML=u[1]+he.htmlPrefilter(s)+u[2],f=u[0];f--;)a=a.lastChild;he.merge(d,a.childNodes),(a=p.firstChild).textContent=""}else d.push(t.createTextNode(s));for(p.textContent="",h=0;s=d[h++];)if(i&&-1<he.inArray(s,i))o&&o.push(s);else if(c=_e(s),a=y(p.appendChild(s),"script"),c&&b(a),n)for(f=0;s=a[f++];)Xe.test(s.type||"")&&n.push(s);return p}function w(){return!0}function S(){return!1}function C(e,t){return e===function(){try{return Z.activeElement}catch(e){}}()==("focus"===t)}function T(e,t,n,r,i,o){var s,a;if("object"==typeof t){for(a in"string"!=typeof n&&(r=r||n,n=void 0),t)T(e,a,n,r,t[a],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=S;else if(!i)return e;return 1===o&&(s=i,(i=function(e){return he().off(e),s.apply(this,arguments)}).guid=s.guid||(s.guid=he.guid++)),e.each(function(){he.event.add(this,t,i,r,n)})}function E(e,t,n){n?(Le.set(e,t,!1),he.event.add(e,t,{namespace:!1,handler:function(e){var r,i,o=Le.get(this,t);if(1&e.isTrigger&&this[t]){if(o.length)(he.event.special[t]||{}).delegateType&&e.stopPropagation();else if(o=ee.call(arguments),Le.set(this,t,o),r=n(this,t),this[t](),o!==(i=Le.get(this,t))||r?Le.set(this,t,!1):i={},o!==i)return e.stopImmediatePropagation(),e.preventDefault(),i.value}else o.length&&(Le.set(this,t,{value:he.event.trigger(he.extend(o[0],he.Event.prototype),o.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Le.get(e,t)&&he.event.add(e,t,w)}function k(e,t){return o(e,"table")&&o(11!==t.nodeType?t:t.firstChild,"tr")&&he(e).children("tbody")[0]||e}function P(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function A(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function I(e,t){var n,r,i,o,s,a,l,u;if(1===t.nodeType){if(Le.hasData(e)&&(o=Le.access(e),s=Le.set(t,o),u=o.events))for(i in delete s.handle,s.events={},u)for(n=0,r=u[i].length;n<r;n++)he.event.add(t,i,u[i][n]);Oe.hasData(e)&&(a=Oe.access(e),l=he.extend({},a),Oe.set(t,l))}}function N(e,t,r,i){t=te.apply([],t);var o,s,a,l,u,c,f=0,p=e.length,d=p-1,h=t[0],m=ce(h);if(m||1<p&&"string"==typeof h&&!ue.checkClone&&rt.test(h))return e.each(function(n){var o=e.eq(n);m&&(t[0]=h.call(this,n,o.html())),N(o,t,r,i)});if(p&&(s=(o=x(t,e[0].ownerDocument,!1,e,i)).firstChild,1===o.childNodes.length&&(o=s),s||i)){for(l=(a=he.map(y(o,"script"),P)).length;f<p;f++)u=o,f!==d&&(u=he.clone(u,!0,!0),l&&he.merge(a,y(u,"script"))),r.call(e[f],u,f);if(l)for(c=a[a.length-1].ownerDocument,he.map(a,A),f=0;f<l;f++)u=a[f],Xe.test(u.type||"")&&!Le.access(u,"globalEval")&&he.contains(c,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?he._evalUrl&&!u.noModule&&he._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):n(u.textContent.replace(it,""),u,c))}return e}function j(e,t,n){for(var r,i=t?he.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||he.cleanData(y(r)),r.parentNode&&(n&&_e(r)&&b(y(r,"script")),r.parentNode.removeChild(r));return e}function L(e,t,n){var r,i,o,s,a=e.style;return(n=n||st(e))&&(""!==(s=n.getPropertyValue(t)||n[t])||_e(e)||(s=he.style(e,t)),!ue.pixelBoxStyles()&&ot.test(s)&&at.test(t)&&(r=a.width,i=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=r,a.minWidth=i,a.maxWidth=o)),void 0!==s?s+"":s}function O(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}function D(e){return he.cssProps[e]||ct[e]||(e in ut?e:ct[e]=function(e){for(var t=e[0].toUpperCase()+e.slice(1),n=lt.length;n--;)if((e=lt[n]+t)in ut)return e}(e)||e)}function z(e,t,n){var r=qe.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function R(e,t,n,r,i,o){var s="width"===t?1:0,a=0,l=0;if(n===(r?"border":"content"))return 0;for(;s<4;s+=2)"margin"===n&&(l+=he.css(e,n+Ve[s],!0,i)),r?("content"===n&&(l-=he.css(e,"padding"+Ve[s],!0,i)),"margin"!==n&&(l-=he.css(e,"border"+Ve[s]+"Width",!0,i))):(l+=he.css(e,"padding"+Ve[s],!0,i),"padding"!==n?l+=he.css(e,"border"+Ve[s]+"Width",!0,i):a+=he.css(e,"border"+Ve[s]+"Width",!0,i));return!r&&0<=o&&(l+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-l-a-.5))||0),l}function q(e,t,n){var r=st(e),i=(!ue.boxSizingReliable()||n)&&"border-box"===he.css(e,"boxSizing",!1,r),o=i,s=L(e,t,r),a="offset"+t[0].toUpperCase()+t.slice(1);if(ot.test(s)){if(!n)return s;s="auto"}return(!ue.boxSizingReliable()&&i||"auto"===s||!parseFloat(s)&&"inline"===he.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===he.css(e,"boxSizing",!1,r),(o=a in e)&&(s=e[a])),(s=parseFloat(s)||0)+R(e,t,n||(i?"border":"content"),o,r,s)+"px"}function V(e,t,n,r,i){return new V.prototype.init(e,t,n,r,i)}function W(){gt&&(!1===Z.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(W):e.setTimeout(W,he.fx.interval),he.fx.tick())}function _(){return e.setTimeout(function(){mt=void 0}),mt=Date.now()}function H(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=Ve[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function M(e,t,n){for(var r,i=($.tweeners[t]||[]).concat($.tweeners["*"]),o=0,s=i.length;o<s;o++)if(r=i[o].call(n,t,e))return r}function $(e,t,n){var r,i,o=0,s=$.prefilters.length,a=he.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;for(var t=mt||_(),n=Math.max(0,u.startTime+u.duration-t),r=1-(n/u.duration||0),o=0,s=u.tweens.length;o<s;o++)u.tweens[o].run(r);return a.notifyWith(e,[u,r,n]),r<1&&s?n:(s||a.notifyWith(e,[u,1,0]),a.resolveWith(e,[u]),!1)},u=a.promise({elem:e,props:he.extend({},t),opts:he.extend(!0,{specialEasing:{},easing:he.easing._default},n),originalProperties:t,originalOptions:n,startTime:mt||_(),duration:n.duration,tweens:[],createTween:function(t,n){var r=he.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)u.tweens[n].run(1);return t?(a.notifyWith(e,[u,1,0]),a.resolveWith(e,[u,t])):a.rejectWith(e,[u,t]),this}}),c=u.props;for((!function(e,t){var n,r,i,o,s;for(n in e)if(i=t[r=d(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(s=he.cssHooks[r])&&"expand"in s)for(n in o=s.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,u.opts.specialEasing));o<s;o++)if(r=$.prefilters[o].call(u,e,c,u.opts))return ce(r.stop)&&(he._queueHooks(u.elem,u.opts.queue).stop=r.stop.bind(r)),r;return he.map(c,M,u),ce(u.opts.start)&&u.opts.start.call(e,u),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always),he.fx.timer(he.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u}function F(e){return(e.match(Ee)||[]).join(" ")}function B(e){return e.getAttribute&&e.getAttribute("class")||""}function U(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(Ee)||[]}function X(e,t,n,i){var o;if(Array.isArray(t))he.each(t,function(t,r){n||jt.test(e)?i(e,r):X(e+"["+("object"==typeof r&&null!=r?t:"")+"]",r,n,i)});else if(n||"object"!==r(t))i(e,t);else for(o in t)X(e+"["+o+"]",t[o],n,i)}function Y(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(Ee)||[];if(ce(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function G(e,t,n,r){function i(a){var l;return o[a]=!0,he.each(e[a]||[],function(e,a){var u=a(t,n,r);return"string"!=typeof u||s||o[u]?s?!(l=u):void 0:(t.dataTypes.unshift(u),i(u),!1)}),l}var o={},s=e===Mt;return i(t.dataTypes[0])||!o["*"]&&i("*")}function Q(e,t){var n,r,i=he.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&he.extend(!0,e,r),e}var J=[],Z=e.document,K=Object.getPrototypeOf,ee=J.slice,te=J.concat,ne=J.push,re=J.indexOf,ie={},oe=ie.toString,se=ie.hasOwnProperty,ae=se.toString,le=ae.call(Object),ue={},ce=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},fe=function(e){return null!=e&&e===e.window},pe={type:!0,src:!0,nonce:!0,noModule:!0},de="3.4.1",he=function(e,t){return new he.fn.init(e,t)},me=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;he.fn=he.prototype={jquery:de,constructor:he,length:0,toArray:function(){return ee.call(this)},get:function(e){return null==e?ee.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=he.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return he.each(this,e)},map:function(e){return this.pushStack(he.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(ee.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:ne,sort:J.sort,splice:J.splice},he.extend=he.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,l=arguments.length,u=!1;for("boolean"==typeof s&&(u=s,s=arguments[a]||{},a++),"object"==typeof s||ce(s)||(s={}),a===l&&(s=this,a--);a<l;a++)if(null!=(e=arguments[a]))for(t in e)r=e[t],"__proto__"!==t&&s!==r&&(u&&r&&(he.isPlainObject(r)||(i=Array.isArray(r)))?(n=s[t],o=i&&!Array.isArray(n)?[]:i||he.isPlainObject(n)?n:{},i=!1,s[t]=he.extend(u,o,r)):void 0!==r&&(s[t]=r));return s},he.extend({expando:"jQuery"+(de+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==oe.call(e)||(t=K(e))&&("function"!=typeof(n=se.call(t,"constructor")&&t.constructor)||ae.call(n)!==le))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){n(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(i(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(me,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(i(Object(e))?he.merge(n,"string"==typeof e?[e]:e):ne.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:re.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,s=!n;i<o;i++)!t(e[i],i)!==s&&r.push(e[i]);return r},map:function(e,t,n){var r,o,s=0,a=[];if(i(e))for(r=e.length;s<r;s++)null!=(o=t(e[s],s,n))&&a.push(o);else for(s in e)null!=(o=t(e[s],s,n))&&a.push(o);return te.apply([],a)},guid:1,support:ue}),"function"==typeof Symbol&&(he.fn[Symbol.iterator]=J[Symbol.iterator]),he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){ie["[object "+t+"]"]=t.toLowerCase()});var ge=function(e){function t(e,t,n,r){var i,o,s,a,l,c,p,d=t&&t.ownerDocument,h=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==h&&9!==h&&11!==h)return n;if(!r&&((t?t.ownerDocument||t:q)!==I&&A(t),t=t||I,j)){if(11!==h&&(l=me.exec(e)))if(i=l[1]){if(9===h){if(!(s=t.getElementById(i)))return n;if(s.id===i)return n.push(s),n}else if(d&&(s=d.getElementById(i))&&z(t,s)&&s.id===i)return n.push(s),n}else{if(l[2])return G.apply(n,t.getElementsByTagName(e)),n;if((i=l[3])&&y.getElementsByClassName&&t.getElementsByClassName)return G.apply(n,t.getElementsByClassName(i)),n}if(y.qsa&&!$[e+" "]&&(!L||!L.test(e))&&(1!==h||"object"!==t.nodeName.toLowerCase())){if(p=e,d=t,1===h&&ae.test(e)){for((a=t.getAttribute("id"))?a=a.replace(be,xe):t.setAttribute("id",a=R),o=(c=S(e)).length;o--;)c[o]="#"+a+" "+f(c[o]);p=c.join(","),d=ge.test(e)&&u(t.parentNode)||t}try{return G.apply(n,d.querySelectorAll(p)),n}catch(t){$(e,!0)}finally{a===R&&t.removeAttribute("id")}}}return T(e.replace(ie,"$1"),t,n,r)}function n(){var e=[];return function t(n,r){return e.push(n+" ")>b.cacheLength&&delete t[e.shift()],t[n+" "]=r}}function r(e){return e[R]=!0,e}function i(e){var t=I.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),r=n.length;r--;)b.attrHandle[n[r]]=t}function s(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function a(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&Se(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function l(e){return r(function(t){return t=+t,r(function(n,r){for(var i,o=e([],n.length,t),s=o.length;s--;)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}function u(e){return e&&void 0!==e.getElementsByTagName&&e}function c(){}function f(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function p(e,t,n){var r=t.dir,i=t.next,o=i||r,s=n&&"parentNode"===o,a=W++;return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||s)return e(t,n,i);return!1}:function(t,n,l){var u,c,f,p=[V,a];if(l){for(;t=t[r];)if((1===t.nodeType||s)&&e(t,n,l))return!0}else for(;t=t[r];)if(1===t.nodeType||s)if(c=(f=t[R]||(t[R]={}))[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((u=c[o])&&u[0]===V&&u[1]===a)return p[2]=u[2];if((c[o]=p)[2]=e(t,n,l))return!0}return!1}}function d(e){return 1<e.length?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function h(e,t,n,r,i){for(var o,s=[],a=0,l=e.length,u=null!=t;a<l;a++)(o=e[a])&&(n&&!n(o,r,i)||(s.push(o),u&&t.push(a)));return s}function m(e,n,i,o,s,a){return o&&!o[R]&&(o=m(o)),s&&!s[R]&&(s=m(s,a)),r(function(r,a,l,u){var c,f,p,d=[],m=[],g=a.length,v=r||function(e,n,r){for(var i=0,o=n.length;i<o;i++)t(e,n[i],r);return r}(n||"*",l.nodeType?[l]:l,[]),y=!e||!r&&n?v:h(v,d,e,l,u),b=i?s||(r?e:g||o)?[]:a:y;if(i&&i(y,b,l,u),o)for(c=h(b,m),o(c,[],l,u),f=c.length;f--;)(p=c[f])&&(b[m[f]]=!(y[m[f]]=p));if(r){if(s||e){if(s){for(c=[],f=b.length;f--;)(p=b[f])&&c.push(y[f]=p);s(null,b=[],c,u)}for(f=b.length;f--;)(p=b[f])&&-1<(c=s?J(r,p):d[f])&&(r[c]=!(a[c]=p))}}else b=h(b===a?b.splice(g,b.length):b),s?s(null,a,b,u):G.apply(a,b)})}function g(e){for(var t,n,r,i=e.length,o=b.relative[e[0].type],s=o||b.relative[" "],a=o?1:0,l=p(function(e){return e===t},s,!0),u=p(function(e){return-1<J(t,e)},s,!0),c=[function(e,n,r){var i=!o&&(r||n!==E)||((t=n).nodeType?l(e,n,r):u(e,n,r));return t=null,i}];a<i;a++)if(n=b.relative[e[a].type])c=[p(d(c),n)];else{if((n=b.filter[e[a].type].apply(null,e[a].matches))[R]){for(r=++a;r<i&&!b.relative[e[r].type];r++);return m(1<a&&d(c),1<a&&f(e.slice(0,a-1).concat({value:" "===e[a-2].type?"*":""})).replace(ie,"$1"),n,a<r&&g(e.slice(a,r)),r<i&&g(e=e.slice(r)),r<i&&f(e))}c.push(n)}return d(c)}var v,y,b,x,w,S,C,T,E,k,P,A,I,N,j,L,O,D,z,R="sizzle"+1*new Date,q=e.document,V=0,W=0,_=n(),H=n(),M=n(),$=n(),F=function(e,t){return e===t&&(P=!0),0},B={}.hasOwnProperty,U=[],X=U.pop,Y=U.push,G=U.push,Q=U.slice,J=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},Z="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",ee="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",te="\\["+K+"*("+ee+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ee+"))|)"+K+"*\\]",ne=":("+ee+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+te+")*)|.*)\\)|)",re=new RegExp(K+"+","g"),ie=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),oe=new RegExp("^"+K+"*,"+K+"*"),se=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),ae=new RegExp(K+"|>"),le=new RegExp(ne),ue=new RegExp("^"+ee+"$"),ce={ID:new RegExp("^#("+ee+")"),CLASS:new RegExp("^\\.("+ee+")"),TAG:new RegExp("^("+ee+"|[*])"),ATTR:new RegExp("^"+te),PSEUDO:new RegExp("^"+ne),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+Z+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},fe=/HTML$/i,pe=/^(?:input|select|textarea|button)$/i,de=/^h\d$/i,he=/^[^{]+\{\s*\[native \w/,me=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ge=/[+~]/,ve=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),ye=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},be=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,xe=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},we=function(){A()},Se=p(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{G.apply(U=Q.call(q.childNodes),q.childNodes),U[q.childNodes.length].nodeType}catch(v){G={apply:U.length?function(e,t){Y.apply(e,Q.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}for(v in y=t.support={},w=t.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!fe.test(t||n&&n.nodeName||"HTML")},A=t.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:q;return r!==I&&9===r.nodeType&&r.documentElement&&(N=(I=r).documentElement,j=!w(I),q!==I&&(n=I.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",we,!1):n.attachEvent&&n.attachEvent("onunload",we)),y.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),y.getElementsByTagName=i(function(e){return e.appendChild(I.createComment("")),!e.getElementsByTagName("*").length}),y.getElementsByClassName=he.test(I.getElementsByClassName),y.getById=i(function(e){return N.appendChild(e).id=R,!I.getElementsByName||!I.getElementsByName(R).length}),y.getById?(b.filter.ID=function(e){var t=e.replace(ve,ye);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if(void 0!==t.getElementById&&j){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var t=e.replace(ve,ye);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},b.find.ID=function(e,t){if(void 0!==t.getElementById&&j){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];for(i=t.getElementsByName(e),r=0;o=i[r++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=y.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):y.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=y.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&j)return t.getElementsByClassName(e)},O=[],L=[],(y.qsa=he.test(I.querySelectorAll))&&(i(function(e){N.appendChild(e).innerHTML="<a id='"+R+"'></a><select id='"+R+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&L.push("[*^$]="+K+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||L.push("\\["+K+"*(?:value|"+Z+")"),e.querySelectorAll("[id~="+R+"-]").length||L.push("~="),e.querySelectorAll(":checked").length||L.push(":checked"),e.querySelectorAll("a#"+R+"+*").length||L.push(".#.+[+~]")}),i(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=I.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&L.push("name"+K+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&L.push(":enabled",":disabled"),N.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&L.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),L.push(",.*:")})),(y.matchesSelector=he.test(D=N.matches||N.webkitMatchesSelector||N.mozMatchesSelector||N.oMatchesSelector||N.msMatchesSelector))&&i(function(e){y.disconnectedMatch=D.call(e,"*"),D.call(e,"[s!='']:x"),O.push("!=",ne)}),L=L.length&&new RegExp(L.join("|")),O=O.length&&new RegExp(O.join("|")),t=he.test(N.compareDocumentPosition),z=t||he.test(N.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},F=t?function(e,t){if(e===t)return P=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!y.sortDetached&&t.compareDocumentPosition(e)===n?e===I||e.ownerDocument===q&&z(q,e)?-1:t===I||t.ownerDocument===q&&z(q,t)?1:k?J(k,e)-J(k,t):0:4&n?-1:1)}:function(e,t){if(e===t)return P=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],l=[t];if(!i||!o)return e===I?-1:t===I?1:i?-1:o?1:k?J(k,e)-J(k,t):0;if(i===o)return s(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)l.unshift(n);for(;a[r]===l[r];)r++;return r?s(a[r],l[r]):a[r]===q?-1:l[r]===q?1:0}),I},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==I&&A(e),y.matchesSelector&&j&&!$[n+" "]&&(!O||!O.test(n))&&(!L||!L.test(n)))try{var r=D.call(e,n);if(r||y.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){$(n,!0)}return 0<t(n,I,null,[e]).length},t.contains=function(e,t){return(e.ownerDocument||e)!==I&&A(e),z(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==I&&A(e);var n=b.attrHandle[t.toLowerCase()],r=n&&B.call(b.attrHandle,t.toLowerCase())?n(e,t,!j):void 0;return void 0!==r?r:y.attributes||!j?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.escape=function(e){return(e+"").replace(be,xe)},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],r=0,i=0;if(P=!y.detectDuplicates,k=!y.sortStable&&e.slice(0),e.sort(F),P){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return k=null,e},x=t.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=x(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=x(t);return n},(b=t.selectors={cacheLength:50,createPseudo:r,match:ce,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(ve,ye),e[3]=(e[3]||e[4]||e[5]||"").replace(ve,ye),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return ce.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&le.test(n)&&(t=S(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(ve,ye).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=_[e+" "];return t||(t=new RegExp("(^|"+K+")"+e+"("+K+"|$)"))&&_(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(i){var o=t.attr(i,e);return null==o?"!="===n:!n||(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&-1<o.indexOf(r):"$="===n?r&&o.slice(-r.length)===r:"~="===n?-1<(" "+o.replace(re," ")+" ").indexOf(r):"|="===n&&(o===r||o.slice(0,r.length+1)===r+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,f,p,d,h,m=o!==s?"nextSibling":"previousSibling",g=t.parentNode,v=a&&t.nodeName.toLowerCase(),y=!l&&!a,b=!1;if(g){if(o){for(;m;){for(p=t;p=p[m];)if(a?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=m="only"===e&&!h&&"nextSibling"}return!0}if(h=[s?g.firstChild:g.lastChild],s&&y){for(b=(d=(u=(c=(f=(p=g)[R]||(p[R]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===V&&u[1])&&u[2],p=d&&g.childNodes[d];p=++d&&p&&p[m]||(b=d=0)||h.pop();)if(1===p.nodeType&&++b&&p===t){c[e]=[V,d,b];break}}else if(y&&(b=d=(u=(c=(f=(p=t)[R]||(p[R]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===V&&u[1]),!1===b)for(;(p=++d&&p&&p[m]||(b=d=0)||h.pop())&&((a?p.nodeName.toLowerCase()!==v:1!==p.nodeType)||!++b||(y&&((c=(f=p[R]||(p[R]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[V,b]),p!==t)););return(b-=i)===r||b%r==0&&0<=b/r}}},PSEUDO:function(e,n){var i,o=b.pseudos[e]||b.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return o[R]?o(n):1<o.length?(i=[e,e,"",n],b.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),s=i.length;s--;)e[r=J(e,i[s])]=!(t[r]=i[s])}):function(e){return o(e,0,i)}):o}},pseudos:{not:r(function(e){var t=[],n=[],i=C(e.replace(ie,"$1"));return i[R]?r(function(e,t,n,r){for(var o,s=i(e,null,r,[]),a=e.length;a--;)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),t[0]=null,!n.pop()}}),has:r(function(e){return function(n){return 0<t(e,n).length}}),contains:r(function(e){return e=e.replace(ve,ye),function(t){return-1<(t.textContent||x(t)).indexOf(e)}}),lang:r(function(e){return ue.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(ve,ye).toLowerCase(),function(t){var n;do{if(n=j?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===N},focus:function(e){return e===I.activeElement&&(!I.hasFocus||I.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:a(!1),disabled:a(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return de.test(e.nodeName)},input:function(e){return pe.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:l(function(){return[0]}),last:l(function(e,t){return[t-1]}),eq:l(function(e,t,n){return[n<0?n+t:n]}),even:l(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:l(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:l(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:l(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[v]=function(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}(v);for(v in{submit:!0,reset:!0})b.pseudos[v]=function(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}(v);return c.prototype=b.filters=b.pseudos,b.setFilters=new c,S=t.tokenize=function(e,n){var r,i,o,s,a,l,u,c=H[e+" "];if(c)return n?0:c.slice(0);for(a=e,l=[],u=b.preFilter;a;){for(s in r&&!(i=oe.exec(a))||(i&&(a=a.slice(i[0].length)||a),l.push(o=[])),r=!1,(i=se.exec(a))&&(r=i.shift(),o.push({value:r,type:i[0].replace(ie," ")}),a=a.slice(r.length)),b.filter)!(i=ce[s].exec(a))||u[s]&&!(i=u[s](i))||(r=i.shift(),o.push({value:r,type:s,matches:i}),a=a.slice(r.length));if(!r)break}return n?a.length:a?t.error(e):H(e,l).slice(0)},C=t.compile=function(e,n){var i,o,s,a,l,u,c=[],f=[],p=M[e+" "];if(!p){for(n||(n=S(e)),i=n.length;i--;)(p=g(n[i]))[R]?c.push(p):f.push(p);(p=M(e,(o=f,a=0<(s=c).length,l=0<o.length,u=function(e,n,r,i,u){var c,f,p,d=0,m="0",g=e&&[],v=[],y=E,x=e||l&&b.find.TAG("*",u),w=V+=null==y?1:Math.random()||.1,S=x.length;for(u&&(E=n===I||n||u);m!==S&&null!=(c=x[m]);m++){if(l&&c){for(f=0,n||c.ownerDocument===I||(A(c),r=!j);p=o[f++];)if(p(c,n||I,r)){i.push(c);break}u&&(V=w)}a&&((c=!p&&c)&&d--,e&&g.push(c))}if(d+=m,a&&m!==d){for(f=0;p=s[f++];)p(g,v,n,r);if(e){if(0<d)for(;m--;)g[m]||v[m]||(v[m]=X.call(i));v=h(v)}G.apply(i,v),u&&!e&&0<v.length&&1<d+s.length&&t.uniqueSort(i)}return u&&(V=w,E=y),g},a?r(u):u))).selector=e}return p},T=t.select=function(e,t,n,r){
var i,o,s,a,l,c="function"==typeof e&&e,p=!r&&S(e=c.selector||e);if(n=n||[],1===p.length){if(2<(o=p[0]=p[0].slice(0)).length&&"ID"===(s=o[0]).type&&9===t.nodeType&&j&&b.relative[o[1].type]){if(!(t=(b.find.ID(s.matches[0].replace(ve,ye),t)||[])[0]))return n;c&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=ce.needsContext.test(e)?0:o.length;i--&&(s=o[i],!b.relative[a=s.type]);)if((l=b.find[a])&&(r=l(s.matches[0].replace(ve,ye),ge.test(o[0].type)&&u(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&f(o)))return G.apply(n,r),n;break}}return(c||C(e,p))(r,t,!j,n,!t||ge.test(e)&&u(t.parentNode)||t),n},y.sortStable=R.split("").sort(F).join("")===R,y.detectDuplicates=!!P,A(),y.sortDetached=i(function(e){return 1&e.compareDocumentPosition(I.createElement("fieldset"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),y.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(Z,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),t}(e);he.find=ge,he.expr=ge.selectors,he.expr[":"]=he.expr.pseudos,he.uniqueSort=he.unique=ge.uniqueSort,he.text=ge.getText,he.isXMLDoc=ge.isXML,he.contains=ge.contains,he.escapeSelector=ge.escape;var ve=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&he(e).is(n))break;r.push(e)}return r},ye=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},be=he.expr.match.needsContext,xe=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;he.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?he.find.matchesSelector(r,e)?[r]:[]:he.find.matches(e,he.grep(t,function(e){return 1===e.nodeType}))},he.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(he(e).filter(function(){for(t=0;t<r;t++)if(he.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)he.find(e,i[t],n);return 1<r?he.uniqueSort(n):n},filter:function(e){return this.pushStack(s(this,e||[],!1))},not:function(e){return this.pushStack(s(this,e||[],!0))},is:function(e){return!!s(this,"string"==typeof e&&be.test(e)?he(e):e||[],!1).length}});var we,Se=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(he.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||we,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:Se.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof he?t[0]:t,he.merge(this,he.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:Z,!0)),xe.test(r[1])&&he.isPlainObject(t))for(r in t)ce(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=Z.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):ce(e)?void 0!==n.ready?n.ready(e):e(he):he.makeArray(e,this)}).prototype=he.fn,we=he(Z);var Ce=/^(?:parents|prev(?:Until|All))/,Te={children:!0,contents:!0,next:!0,prev:!0};he.fn.extend({has:function(e){var t=he(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(he.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],s="string"!=typeof e&&he(e);if(!be.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?-1<s.index(n):1===n.nodeType&&he.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?he.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?re.call(he(e),this[0]):re.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(he.uniqueSort(he.merge(this.get(),he(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),he.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return ve(e,"parentNode")},parentsUntil:function(e,t,n){return ve(e,"parentNode",n)},next:function(e){return a(e,"nextSibling")},prev:function(e){return a(e,"previousSibling")},nextAll:function(e){return ve(e,"nextSibling")},prevAll:function(e){return ve(e,"previousSibling")},nextUntil:function(e,t,n){return ve(e,"nextSibling",n)},prevUntil:function(e,t,n){return ve(e,"previousSibling",n)},siblings:function(e){return ye((e.parentNode||{}).firstChild,e)},children:function(e){return ye(e.firstChild)},contents:function(e){return void 0!==e.contentDocument?e.contentDocument:(o(e,"template")&&(e=e.content||e),he.merge([],e.childNodes))}},function(e,t){he.fn[e]=function(n,r){var i=he.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=he.filter(r,i)),1<this.length&&(Te[e]||he.uniqueSort(i),Ce.test(e)&&i.reverse()),this.pushStack(i)}});var Ee=/[^\x20\t\r\n\f]+/g;he.Callbacks=function(e){var t,n;e="string"==typeof e?(t=e,n={},he.each(t.match(Ee)||[],function(e,t){n[t]=!0}),n):he.extend({},e);var i,o,s,a,l=[],u=[],c=-1,f=function(){for(a=a||e.once,s=i=!0;u.length;c=-1)for(o=u.shift();++c<l.length;)!1===l[c].apply(o[0],o[1])&&e.stopOnFalse&&(c=l.length,o=!1);e.memory||(o=!1),i=!1,a&&(l=o?[]:"")},p={add:function(){return l&&(o&&!i&&(c=l.length-1,u.push(o)),function t(n){he.each(n,function(n,i){ce(i)?e.unique&&p.has(i)||l.push(i):i&&i.length&&"string"!==r(i)&&t(i)})}(arguments),o&&!i&&f()),this},remove:function(){return he.each(arguments,function(e,t){for(var n;-1<(n=he.inArray(t,l,n));)l.splice(n,1),n<=c&&c--}),this},has:function(e){return e?-1<he.inArray(e,l):0<l.length},empty:function(){return l&&(l=[]),this},disable:function(){return a=u=[],l=o="",this},disabled:function(){return!l},lock:function(){return a=u=[],o||i||(l=o=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||f()),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!s}};return p},he.extend({Deferred:function(t){var n=[["notify","progress",he.Callbacks("memory"),he.Callbacks("memory"),2],["resolve","done",he.Callbacks("once memory"),he.Callbacks("once memory"),0,"resolved"],["reject","fail",he.Callbacks("once memory"),he.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return i.then(null,e)},pipe:function(){var e=arguments;return he.Deferred(function(t){he.each(n,function(n,r){var i=ce(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&ce(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){function o(t,n,r,i){return function(){var a=this,c=arguments,f=function(){var e,f;if(!(t<s)){if((e=r.apply(a,c))===n.promise())throw new TypeError("Thenable self-resolution");f=e&&("object"==typeof e||"function"==typeof e)&&e.then,ce(f)?i?f.call(e,o(s,n,l,i),o(s,n,u,i)):(s++,f.call(e,o(s,n,l,i),o(s,n,u,i),o(s,n,l,n.notifyWith))):(r!==l&&(a=void 0,c=[e]),(i||n.resolveWith)(a,c))}},p=i?f:function(){try{f()}catch(e){he.Deferred.exceptionHook&&he.Deferred.exceptionHook(e,p.stackTrace),s<=t+1&&(r!==u&&(a=void 0,c=[e]),n.rejectWith(a,c))}};t?p():(he.Deferred.getStackHook&&(p.stackTrace=he.Deferred.getStackHook()),e.setTimeout(p))}}var s=0;return he.Deferred(function(e){n[0][3].add(o(0,e,ce(i)?i:l,e.notifyWith)),n[1][3].add(o(0,e,ce(t)?t:l)),n[2][3].add(o(0,e,ce(r)?r:u))}).promise()},promise:function(e){return null!=e?he.extend(e,i):i}},o={};return he.each(n,function(e,t){var s=t[2],a=t[5];i[t[1]]=s.add,a&&s.add(function(){r=a},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),s.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=s.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=ee.call(arguments),o=he.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=1<arguments.length?ee.call(arguments):n,--t||o.resolveWith(r,i)}};if(t<=1&&(c(e,o.done(s(n)).resolve,o.reject,!t),"pending"===o.state()||ce(i[n]&&i[n].then)))return o.then();for(;n--;)c(i[n],s(n),o.reject);return o.promise()}});var ke=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;he.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&ke.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},he.readyException=function(t){e.setTimeout(function(){throw t})};var Pe=he.Deferred();he.fn.ready=function(e){return Pe.then(e).catch(function(e){he.readyException(e)}),this},he.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--he.readyWait:he.isReady)||(he.isReady=!0)!==e&&0<--he.readyWait||Pe.resolveWith(Z,[he])}}),he.ready.then=Pe.then,"complete"===Z.readyState||"loading"!==Z.readyState&&!Z.documentElement.doScroll?e.setTimeout(he.ready):(Z.addEventListener("DOMContentLoaded",f),e.addEventListener("load",f));var Ae=function(e,t,n,i,o,s,a){var l=0,u=e.length,c=null==n;if("object"===r(n))for(l in o=!0,n)Ae(e,t,l,n[l],!0,s,a);else if(void 0!==i&&(o=!0,ce(i)||(a=!0),c&&(a?(t.call(e,i),t=null):(c=t,t=function(e,t,n){return c.call(he(e),n)})),t))for(;l<u;l++)t(e[l],n,a?i:i.call(e[l],l,t(e[l],n)));return o?e:c?t.call(e):u?t(e[0],n):s},Ie=/^-ms-/,Ne=/-([a-z])/g,je=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};h.uid=1,h.prototype={cache:function(e){var t=e[this.expando];return t||(t={},je(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[d(t)]=n;else for(r in t)i[d(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][d(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(d):(t=d(t))in r?[t]:t.match(Ee)||[]).length;for(;n--;)delete r[t[n]]}(void 0===t||he.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!he.isEmptyObject(t)}};var Le=new h,Oe=new h,De=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ze=/[A-Z]/g;he.extend({hasData:function(e){return Oe.hasData(e)||Le.hasData(e)},data:function(e,t,n){return Oe.access(e,t,n)},removeData:function(e,t){Oe.remove(e,t)},_data:function(e,t,n){return Le.access(e,t,n)},_removeData:function(e,t){Le.remove(e,t)}}),he.fn.extend({data:function(e,t){var n,r,i,o=this[0],s=o&&o.attributes;if(void 0===e){if(this.length&&(i=Oe.get(o),1===o.nodeType&&!Le.get(o,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&0===(r=s[n].name).indexOf("data-")&&(r=d(r.slice(5)),m(o,r,i[r]));Le.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){Oe.set(this,e)}):Ae(this,function(t){var n;if(o&&void 0===t)return void 0!==(n=Oe.get(o,e))?n:void 0!==(n=m(o,e))?n:void 0;this.each(function(){Oe.set(this,e,t)})},null,t,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Oe.remove(this,e)})}}),he.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Le.get(e,t),n&&(!r||Array.isArray(n)?r=Le.access(e,t,he.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=he.queue(e,t),r=n.length,i=n.shift(),o=he._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){he.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Le.get(e,n)||Le.access(e,n,{empty:he.Callbacks("once memory").add(function(){Le.remove(e,[t+"queue",n])})})}}),he.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?he.queue(this[0],e):void 0===t?this:this.each(function(){var n=he.queue(this,e,t);he._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&he.dequeue(this,e)})},dequeue:function(e){return this.each(function(){he.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=he.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)(n=Le.get(o[s],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var Re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,qe=new RegExp("^(?:([+-])=|)("+Re+")([a-z%]*)$","i"),Ve=["Top","Right","Bottom","Left"],We=Z.documentElement,_e=function(e){return he.contains(e.ownerDocument,e)},He={composed:!0};We.getRootNode&&(_e=function(e){return he.contains(e.ownerDocument,e)||e.getRootNode(He)===e.ownerDocument});var Me=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&_e(e)&&"none"===he.css(e,"display")},$e=function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=s[o];return i},Fe={};he.fn.extend({show:function(){return v(this,!0)},hide:function(){return v(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Me(this)?he(this).show():he(this).hide()})}});var Be=/^(?:checkbox|radio)$/i,Ue=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Xe=/^$|^module$|\/(?:java|ecma)script/i,Ye={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Ye.optgroup=Ye.option,Ye.tbody=Ye.tfoot=Ye.colgroup=Ye.caption=Ye.thead,Ye.th=Ye.td;var Ge,Qe,Je=/<|&#?\w+;/;Ge=Z.createDocumentFragment().appendChild(Z.createElement("div")),(Qe=Z.createElement("input")).setAttribute("type","radio"),Qe.setAttribute("checked","checked"),Qe.setAttribute("name","t"),Ge.appendChild(Qe),ue.checkClone=Ge.cloneNode(!0).cloneNode(!0).lastChild.checked,Ge.innerHTML="<textarea>x</textarea>",ue.noCloneChecked=!!Ge.cloneNode(!0).lastChild.defaultValue;var Ze=/^key/,Ke=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,et=/^([^.]*)(?:\.(.+)|)/;he.event={global:{},add:function(e,t,n,r,i){var o,s,a,l,u,c,f,p,d,h,m,g=Le.get(e);if(g)for(n.handler&&(n=(o=n).handler,i=o.selector),i&&he.find.matchesSelector(We,i),n.guid||(n.guid=he.guid++),(l=g.events)||(l=g.events={}),(s=g.handle)||(s=g.handle=function(t){return void 0!==he&&he.event.triggered!==t.type?he.event.dispatch.apply(e,arguments):void 0}),u=(t=(t||"").match(Ee)||[""]).length;u--;)d=m=(a=et.exec(t[u])||[])[1],h=(a[2]||"").split(".").sort(),d&&(f=he.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=he.event.special[d]||{},c=he.extend({type:d,origType:m,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&he.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=l[d])||((p=l[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,s)||e.addEventListener&&e.addEventListener(d,s)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),he.event.global[d]=!0)},remove:function(e,t,n,r,i){var o,s,a,l,u,c,f,p,d,h,m,g=Le.hasData(e)&&Le.get(e);if(g&&(l=g.events)){for(u=(t=(t||"").match(Ee)||[""]).length;u--;)if(d=m=(a=et.exec(t[u])||[])[1],h=(a[2]||"").split(".").sort(),d){for(f=he.event.special[d]||{},p=l[d=(r?f.delegateType:f.bindType)||d]||[],a=a[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=p.length;o--;)c=p[o],!i&&m!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));s&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,g.handle)||he.removeEvent(e,d,g.handle),delete l[d])}else for(d in l)he.event.remove(e,d+t[u],n,r,!0);he.isEmptyObject(l)&&Le.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,s,a=he.event.fix(e),l=new Array(arguments.length),u=(Le.get(this,"events")||{})[a.type]||[],c=he.event.special[a.type]||{};for(l[0]=a,t=1;t<arguments.length;t++)l[t]=arguments[t];if(a.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,a)){for(s=he.event.handlers.call(this,a,u),t=0;(i=s[t++])&&!a.isPropagationStopped();)for(a.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!a.isImmediatePropagationStopped();)a.rnamespace&&!1!==o.namespace&&!a.rnamespace.test(o.namespace)||(a.handleObj=o,a.data=o.data,void 0!==(r=((he.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,l))&&!1===(a.result=r)&&(a.preventDefault(),a.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,a),a.result}},handlers:function(e,t){var n,r,i,o,s,a=[],l=t.delegateCount,u=e.target;if(l&&u.nodeType&&!("click"===e.type&&1<=e.button))for(;u!==this;u=u.parentNode||this)if(1===u.nodeType&&("click"!==e.type||!0!==u.disabled)){for(o=[],s={},n=0;n<l;n++)void 0===s[i=(r=t[n]).selector+" "]&&(s[i]=r.needsContext?-1<he(i,this).index(u):he.find(i,this,null,[u]).length),s[i]&&o.push(r);o.length&&a.push({elem:u,handlers:o})}return u=this,l<t.length&&a.push({elem:u,handlers:t.slice(l)}),a},addProp:function(e,t){Object.defineProperty(he.Event.prototype,e,{enumerable:!0,configurable:!0,get:ce(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[he.expando]?e:new he.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return Be.test(t.type)&&t.click&&o(t,"input")&&E(t,"click",w),!1},trigger:function(e){var t=this||e;return Be.test(t.type)&&t.click&&o(t,"input")&&E(t,"click"),!0},_default:function(e){var t=e.target;return Be.test(t.type)&&t.click&&o(t,"input")&&Le.get(t,"click")||o(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},he.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},he.Event=function(e,t){if(!(this instanceof he.Event))return new he.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?w:S,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&he.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[he.expando]=!0},he.Event.prototype={constructor:he.Event,isDefaultPrevented:S,isPropagationStopped:S,isImmediatePropagationStopped:S,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=w,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=w,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=w,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},he.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Ze.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ke.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},he.event.addProp),he.each({focus:"focusin",blur:"focusout"},function(e,t){he.event.special[e]={setup:function(){return E(this,e,C),!1},trigger:function(){return E(this,e),!0},delegateType:t}}),he.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){he.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=e.relatedTarget,i=e.handleObj;return r&&(r===this||he.contains(this,r))||(e.type=i.origType,n=i.handler.apply(this,arguments),e.type=t),n}}}),he.fn.extend({on:function(e,t,n,r){return T(this,e,t,n,r)},one:function(e,t,n,r){return T(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,he(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=S),this.each(function(){he.event.remove(this,e,n,t)})}});var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,nt=/<script|<style|<link/i,rt=/checked\s*(?:[^=]|=\s*.checked.)/i,it=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;he.extend({htmlPrefilter:function(e){return e.replace(tt,"<$1></$2>")},clone:function(e,t,n){var r,i,o,s,a,l,u,c=e.cloneNode(!0),f=_e(e);if(!(ue.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||he.isXMLDoc(e)))for(s=y(c),r=0,i=(o=y(e)).length;r<i;r++)a=o[r],l=s[r],"input"===(u=l.nodeName.toLowerCase())&&Be.test(a.type)?l.checked=a.checked:"input"!==u&&"textarea"!==u||(l.defaultValue=a.defaultValue);if(t)if(n)for(o=o||y(e),s=s||y(c),r=0,i=o.length;r<i;r++)I(o[r],s[r]);else I(e,c);return 0<(s=y(c,"script")).length&&b(s,!f&&y(e,"script")),c},cleanData:function(e){for(var t,n,r,i=he.event.special,o=0;void 0!==(n=e[o]);o++)if(je(n)){if(t=n[Le.expando]){if(t.events)for(r in t.events)i[r]?he.event.remove(n,r):he.removeEvent(n,r,t.handle);n[Le.expando]=void 0}n[Oe.expando]&&(n[Oe.expando]=void 0)}}}),he.fn.extend({detach:function(e){return j(this,e,!0)},remove:function(e){return j(this,e)},text:function(e){return Ae(this,function(e){return void 0===e?he.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return N(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||k(this,e).appendChild(e)})},prepend:function(){return N(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=k(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return N(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return N(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(he.cleanData(y(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return he.clone(this,e,t)})},html:function(e){return Ae(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!nt.test(e)&&!Ye[(Ue.exec(e)||["",""])[1].toLowerCase()]){e=he.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(he.cleanData(y(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return N(this,arguments,function(t){var n=this.parentNode;he.inArray(this,e)<0&&(he.cleanData(y(this)),n&&n.replaceChild(t,this))},e)}}),he.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){he.fn[e]=function(e){for(var n,r=[],i=he(e),o=i.length-1,s=0;s<=o;s++)n=s===o?this:this.clone(!0),he(i[s])[t](n),ne.apply(r,n.get());return this.pushStack(r)}});var ot=new RegExp("^("+Re+")(?!px)[a-z%]+$","i"),st=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},at=new RegExp(Ve.join("|"),"i");!function(){function t(){if(u){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",We.appendChild(l).appendChild(u);var t=e.getComputedStyle(u);r="1%"!==t.top,a=12===n(t.marginLeft),u.style.right="60%",s=36===n(t.right),i=36===n(t.width),u.style.position="absolute",o=12===n(u.offsetWidth/3),We.removeChild(l),u=null}}function n(e){return Math.round(parseFloat(e))}var r,i,o,s,a,l=Z.createElement("div"),u=Z.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",ue.clearCloneStyle="content-box"===u.style.backgroundClip,he.extend(ue,{boxSizingReliable:function(){return t(),i},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),r},reliableMarginLeft:function(){return t(),a},scrollboxSize:function(){return t(),o}}))}();var lt=["Webkit","Moz","ms"],ut=Z.createElement("div").style,ct={},ft=/^(none|table(?!-c[ea]).+)/,pt=/^--/,dt={position:"absolute",visibility:"hidden",display:"block"},ht={letterSpacing:"0",fontWeight:"400"};he.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=L(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=d(t),l=pt.test(t),u=e.style;if(l||(t=D(a)),s=he.cssHooks[t]||he.cssHooks[a],void 0===n)return s&&"get"in s&&void 0!==(i=s.get(e,!1,r))?i:u[t];"string"==(o=typeof n)&&(i=qe.exec(n))&&i[1]&&(n=g(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||l||(n+=i&&i[3]||(he.cssNumber[a]?"":"px")),ue.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,r))||(l?u.setProperty(t,n):u[t]=n))}},css:function(e,t,n,r){var i,o,s,a=d(t);return pt.test(t)||(t=D(a)),(s=he.cssHooks[t]||he.cssHooks[a])&&"get"in s&&(i=s.get(e,!0,n)),void 0===i&&(i=L(e,t,r)),"normal"===i&&t in ht&&(i=ht[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),he.each(["height","width"],function(e,t){he.cssHooks[t]={get:function(e,n,r){if(n)return!ft.test(he.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?q(e,t,r):$e(e,dt,function(){return q(e,t,r)})},set:function(e,n,r){var i,o=st(e),s=!ue.scrollboxSize()&&"absolute"===o.position,a=(s||r)&&"border-box"===he.css(e,"boxSizing",!1,o),l=r?R(e,t,r,a,o):0;return a&&s&&(l-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-R(e,t,"border",!1,o)-.5)),l&&(i=qe.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=he.css(e,t)),z(0,n,l)}}}),he.cssHooks.marginLeft=O(ue.reliableMarginLeft,function(e,t){if(t)return(parseFloat(L(e,"marginLeft"))||e.getBoundingClientRect().left-$e(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),he.each({margin:"",padding:"",border:"Width"},function(e,t){he.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+Ve[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(he.cssHooks[e+t].set=z)}),he.fn.extend({css:function(e,t){return Ae(this,function(e,t,n){var r,i,o={},s=0;if(Array.isArray(t)){for(r=st(e),i=t.length;s<i;s++)o[t[s]]=he.css(e,t[s],!1,r);return o}return void 0!==n?he.style(e,t,n):he.css(e,t)},e,t,1<arguments.length)}}),((he.Tween=V).prototype={constructor:V,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||he.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(he.cssNumber[n]?"":"px")},cur:function(){var e=V.propHooks[this.prop];return e&&e.get?e.get(this):V.propHooks._default.get(this)},run:function(e){var t,n=V.propHooks[this.prop];return this.options.duration?this.pos=t=he.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):V.propHooks._default.set(this),this}}).init.prototype=V.prototype,(V.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=he.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){he.fx.step[e.prop]?he.fx.step[e.prop](e):1!==e.elem.nodeType||!he.cssHooks[e.prop]&&null==e.elem.style[D(e.prop)]?e.elem[e.prop]=e.now:he.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=V.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},he.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},he.fx=V.prototype.init,he.fx.step={};var mt,gt,vt,yt,bt=/^(?:toggle|show|hide)$/,xt=/queueHooks$/;he.Animation=he.extend($,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return g(n.elem,e,qe.exec(t),n),n}]},tweener:function(e,t){ce(e)?(t=e,e=["*"]):e=e.match(Ee);for(var n,r=0,i=e.length;r<i;r++)n=e[r],$.tweeners[n]=$.tweeners[n]||[],$.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,s,a,l,u,c,f="width"in t||"height"in t,p=this,d={},h=e.style,m=e.nodeType&&Me(e),g=Le.get(e,"fxshow");for(r in n.queue||(null==(s=he._queueHooks(e,"fx")).unqueued&&(s.unqueued=0,a=s.empty.fire,s.empty.fire=function(){s.unqueued||a()}),s.unqueued++,p.always(function(){p.always(function(){s.unqueued--,he.queue(e,"fx").length||s.empty.fire()})})),t)if(i=t[r],bt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(m?"hide":"show")){if("show"!==i||!g||void 0===g[r])continue;m=!0}d[r]=g&&g[r]||he.style(e,r)}if((l=!he.isEmptyObject(t))||!he.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(u=g&&g.display)&&(u=Le.get(e,"display")),"none"===(c=he.css(e,"display"))&&(u?c=u:(v([e],!0),u=e.style.display||u,c=he.css(e,"display"),v([e]))),("inline"===c||"inline-block"===c&&null!=u)&&"none"===he.css(e,"float")&&(l||(p.done(function(){h.display=u}),null==u&&(c=h.display,u="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),l=!1,d)l||(g?"hidden"in g&&(m=g.hidden):g=Le.access(e,"fxshow",{display:u}),o&&(g.hidden=!m),m&&v([e],!0),p.done(function(){for(r in m||v([e]),Le.remove(e,"fxshow"),d)he.style(e,r,d[r])})),l=M(m?g[r]:0,r,p),r in g||(g[r]=l.start,m&&(l.end=l.start,l.start=0))}],prefilter:function(e,t){t?$.prefilters.unshift(e):$.prefilters.push(e)}}),he.speed=function(e,t,n){var r=e&&"object"==typeof e?he.extend({},e):{complete:n||!n&&t||ce(e)&&e,duration:e,easing:n&&t||t&&!ce(t)&&t};return he.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in he.fx.speeds?r.duration=he.fx.speeds[r.duration]:r.duration=he.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){ce(r.old)&&r.old.call(this),r.queue&&he.dequeue(this,r.queue)},r},he.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Me).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=he.isEmptyObject(e),o=he.speed(t,n,r),s=function(){var t=$(this,he.extend({},e),o);(i||Le.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||!1===o.queue?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=he.timers,s=Le.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&xt.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||he.dequeue(this,e)})},finish:function(e){
return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=Le.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=he.timers,s=r?r.length:0;for(n.finish=!0,he.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<s;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),he.each(["toggle","show","hide"],function(e,t){var n=he.fn[t];he.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(H(t,!0),e,r,i)}}),he.each({slideDown:H("show"),slideUp:H("hide"),slideToggle:H("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){he.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),he.timers=[],he.fx.tick=function(){var e,t=0,n=he.timers;for(mt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||he.fx.stop(),mt=void 0},he.fx.timer=function(e){he.timers.push(e),he.fx.start()},he.fx.interval=13,he.fx.start=function(){gt||(gt=!0,W())},he.fx.stop=function(){gt=null},he.fx.speeds={slow:600,fast:200,_default:400},he.fn.delay=function(t,n){return t=he.fx&&he.fx.speeds[t]||t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},vt=Z.createElement("input"),yt=Z.createElement("select").appendChild(Z.createElement("option")),vt.type="checkbox",ue.checkOn=""!==vt.value,ue.optSelected=yt.selected,(vt=Z.createElement("input")).value="t",vt.type="radio",ue.radioValue="t"===vt.value;var wt,St=he.expr.attrHandle;he.fn.extend({attr:function(e,t){return Ae(this,he.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){he.removeAttr(this,e)})}}),he.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?he.prop(e,t,n):(1===o&&he.isXMLDoc(e)||(i=he.attrHooks[t.toLowerCase()]||(he.expr.match.bool.test(t)?wt:void 0)),void 0!==n?null===n?void he.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=he.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!ue.radioValue&&"radio"===t&&o(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(Ee);if(i&&1===e.nodeType)for(;n=i[r++];)e.removeAttribute(n)}}),wt={set:function(e,t,n){return!1===t?he.removeAttr(e,n):e.setAttribute(n,n),n}},he.each(he.expr.match.bool.source.match(/\w+/g),function(e,t){var n=St[t]||he.find.attr;St[t]=function(e,t,r){var i,o,s=t.toLowerCase();return r||(o=St[s],St[s]=i,i=null!=n(e,t,r)?s:null,St[s]=o),i}});var Ct=/^(?:input|select|textarea|button)$/i,Tt=/^(?:a|area)$/i;he.fn.extend({prop:function(e,t){return Ae(this,he.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[he.propFix[e]||e]})}}),he.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&he.isXMLDoc(e)||(t=he.propFix[t]||t,i=he.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=he.find.attr(e,"tabindex");return t?parseInt(t,10):Ct.test(e.nodeName)||Tt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),ue.optSelected||(he.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),he.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){he.propFix[this.toLowerCase()]=this}),he.fn.extend({addClass:function(e){var t,n,r,i,o,s,a,l=0;if(ce(e))return this.each(function(t){he(this).addClass(e.call(this,t,B(this)))});if((t=U(e)).length)for(;n=this[l++];)if(i=B(n),r=1===n.nodeType&&" "+F(i)+" "){for(s=0;o=t[s++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(a=F(r))&&n.setAttribute("class",a)}return this},removeClass:function(e){var t,n,r,i,o,s,a,l=0;if(ce(e))return this.each(function(t){he(this).removeClass(e.call(this,t,B(this)))});if(!arguments.length)return this.attr("class","");if((t=U(e)).length)for(;n=this[l++];)if(i=B(n),r=1===n.nodeType&&" "+F(i)+" "){for(s=0;o=t[s++];)for(;-1<r.indexOf(" "+o+" ");)r=r.replace(" "+o+" "," ");i!==(a=F(r))&&n.setAttribute("class",a)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):ce(e)?this.each(function(n){he(this).toggleClass(e.call(this,n,B(this),t),t)}):this.each(function(){var t,i,o,s;if(r)for(i=0,o=he(this),s=U(e);t=s[i++];)o.hasClass(t)?o.removeClass(t):o.addClass(t);else void 0!==e&&"boolean"!==n||((t=B(this))&&Le.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":Le.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&-1<(" "+F(B(n))+" ").indexOf(t))return!0;return!1}});var Et=/\r/g;he.fn.extend({val:function(e){var t,n,r,i=this[0];return arguments.length?(r=ce(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,he(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=he.map(i,function(e){return null==e?"":e+""})),(t=he.valHooks[this.type]||he.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))})):i?(t=he.valHooks[i.type]||he.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(Et,""):null==n?"":n:void 0}}),he.extend({valHooks:{option:{get:function(e){var t=he.find.attr(e,"value");return null!=t?t:F(he.text(e))}},select:{get:function(e){var t,n,r,i=e.options,s=e.selectedIndex,a="select-one"===e.type,l=a?null:[],u=a?s+1:i.length;for(r=s<0?u:a?s:0;r<u;r++)if(((n=i[r]).selected||r===s)&&!n.disabled&&(!n.parentNode.disabled||!o(n.parentNode,"optgroup"))){if(t=he(n).val(),a)return t;l.push(t)}return l},set:function(e,t){for(var n,r,i=e.options,o=he.makeArray(t),s=i.length;s--;)((r=i[s]).selected=-1<he.inArray(he.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),he.each(["radio","checkbox"],function(){he.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<he.inArray(he(e).val(),t)}},ue.checkOn||(he.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),ue.focusin="onfocusin"in e;var kt=/^(?:focusinfocus|focusoutblur)$/,Pt=function(e){e.stopPropagation()};he.extend(he.event,{trigger:function(t,n,r,i){var o,s,a,l,u,c,f,p,d=[r||Z],h=se.call(t,"type")?t.type:t,m=se.call(t,"namespace")?t.namespace.split("."):[];if(s=p=a=r=r||Z,3!==r.nodeType&&8!==r.nodeType&&!kt.test(h+he.event.triggered)&&(-1<h.indexOf(".")&&(h=(m=h.split(".")).shift(),m.sort()),u=h.indexOf(":")<0&&"on"+h,(t=t[he.expando]?t:new he.Event(h,"object"==typeof t&&t)).isTrigger=i?2:3,t.namespace=m.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:he.makeArray(n,[t]),f=he.event.special[h]||{},i||!f.trigger||!1!==f.trigger.apply(r,n))){if(!i&&!f.noBubble&&!fe(r)){for(l=f.delegateType||h,kt.test(l+h)||(s=s.parentNode);s;s=s.parentNode)d.push(s),a=s;a===(r.ownerDocument||Z)&&d.push(a.defaultView||a.parentWindow||e)}for(o=0;(s=d[o++])&&!t.isPropagationStopped();)p=s,t.type=1<o?l:f.bindType||h,(c=(Le.get(s,"events")||{})[t.type]&&Le.get(s,"handle"))&&c.apply(s,n),(c=u&&s[u])&&c.apply&&je(s)&&(t.result=c.apply(s,n),!1===t.result&&t.preventDefault());return t.type=h,i||t.isDefaultPrevented()||f._default&&!1!==f._default.apply(d.pop(),n)||!je(r)||u&&ce(r[h])&&!fe(r)&&((a=r[u])&&(r[u]=null),he.event.triggered=h,t.isPropagationStopped()&&p.addEventListener(h,Pt),r[h](),t.isPropagationStopped()&&p.removeEventListener(h,Pt),he.event.triggered=void 0,a&&(r[u]=a)),t.result}},simulate:function(e,t,n){var r=he.extend(new he.Event,n,{type:e,isSimulated:!0});he.event.trigger(r,null,t)}}),he.fn.extend({trigger:function(e,t){return this.each(function(){he.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return he.event.trigger(e,t,n,!0)}}),ue.focusin||he.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){he.event.simulate(t,e.target,he.event.fix(e))};he.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=Le.access(r,t);i||r.addEventListener(e,n,!0),Le.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=Le.access(r,t)-1;i?Le.access(r,t,i):(r.removeEventListener(e,n,!0),Le.remove(r,t))}}});var At=e.location,It=Date.now(),Nt=/\?/;he.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(t){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||he.error("Invalid XML: "+t),n};var jt=/\[\]$/,Lt=/\r?\n/g,Ot=/^(?:submit|button|image|reset|file)$/i,Dt=/^(?:input|select|textarea|keygen)/i;he.param=function(e,t){var n,r=[],i=function(e,t){var n=ce(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!he.isPlainObject(e))he.each(e,function(){i(this.name,this.value)});else for(n in e)X(n,e[n],t,i);return r.join("&")},he.fn.extend({serialize:function(){return he.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=he.prop(this,"elements");return e?he.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!he(this).is(":disabled")&&Dt.test(this.nodeName)&&!Ot.test(e)&&(this.checked||!Be.test(e))}).map(function(e,t){var n=he(this).val();return null==n?null:Array.isArray(n)?he.map(n,function(e){return{name:t.name,value:e.replace(Lt,"\r\n")}}):{name:t.name,value:n.replace(Lt,"\r\n")}}).get()}});var zt=/%20/g,Rt=/#.*$/,qt=/([?&])_=[^&]*/,Vt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Wt=/^(?:GET|HEAD)$/,_t=/^\/\//,Ht={},Mt={},$t="*/".concat("*"),Ft=Z.createElement("a");Ft.href=At.href,he.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:At.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(At.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":he.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Q(Q(e,he.ajaxSettings),t):Q(he.ajaxSettings,e)},ajaxPrefilter:Y(Ht),ajaxTransport:Y(Mt),ajax:function(t,n){function r(t,n,r,a){var u,p,d,x,w,S=n;c||(c=!0,l&&e.clearTimeout(l),i=void 0,s=a||"",C.readyState=0<t?4:0,u=200<=t&&t<300||304===t,r&&(x=function(e,t,n){for(var r,i,o,s,a=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){l.unshift(i);break}if(l[0]in n)o=l[0];else{for(i in n){if(!l[0]||e.converters[i+" "+l[0]]){o=i;break}s||(s=i)}o=o||s}if(o)return o!==l[0]&&l.unshift(o),n[o]}(h,C,r)),x=function(e,t,n,r){var i,o,s,a,l,u={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)u[s.toLowerCase()]=e.converters[s];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(!(s=u[l+" "+o]||u["* "+o]))for(i in u)if((a=i.split(" "))[1]===o&&(s=u[l+" "+a[0]]||u["* "+a[0]])){!0===s?s=u[i]:!0!==u[i]&&(o=a[0],c.unshift(a[1]));break}if(!0!==s)if(s&&e.throws)t=s(t);else try{t=s(t)}catch(e){return{state:"parsererror",error:s?e:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}(h,x,C,u),u?(h.ifModified&&((w=C.getResponseHeader("Last-Modified"))&&(he.lastModified[o]=w),(w=C.getResponseHeader("etag"))&&(he.etag[o]=w)),204===t||"HEAD"===h.type?S="nocontent":304===t?S="notmodified":(S=x.state,p=x.data,u=!(d=x.error))):(d=S,!t&&S||(S="error",t<0&&(t=0))),C.status=t,C.statusText=(n||S)+"",u?v.resolveWith(m,[p,S,C]):v.rejectWith(m,[C,S,d]),C.statusCode(b),b=void 0,f&&g.trigger(u?"ajaxSuccess":"ajaxError",[C,h,u?p:d]),y.fireWith(m,[C,S]),f&&(g.trigger("ajaxComplete",[C,h]),--he.active||he.event.trigger("ajaxStop")))}"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,s,a,l,u,c,f,p,d,h=he.ajaxSetup({},n),m=h.context||h,g=h.context&&(m.nodeType||m.jquery)?he(m):he.event,v=he.Deferred(),y=he.Callbacks("once memory"),b=h.statusCode||{},x={},w={},S="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(c){if(!a)for(a={};t=Vt.exec(s);)a[t[1].toLowerCase()+" "]=(a[t[1].toLowerCase()+" "]||[]).concat(t[2]);t=a[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return c?s:null},setRequestHeader:function(e,t){return null==c&&(e=w[e.toLowerCase()]=w[e.toLowerCase()]||e,x[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)C.always(e[C.status]);else for(t in e)b[t]=[b[t],e[t]];return this},abort:function(e){var t=e||S;return i&&i.abort(t),r(0,t),this}};if(v.promise(C),h.url=((t||h.url||At.href)+"").replace(_t,At.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(Ee)||[""],null==h.crossDomain){u=Z.createElement("a");try{u.href=h.url,u.href=u.href,h.crossDomain=Ft.protocol+"//"+Ft.host!=u.protocol+"//"+u.host}catch(t){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=he.param(h.data,h.traditional)),G(Ht,h,n,C),c)return C;for(p in(f=he.event&&h.global)&&0==he.active++&&he.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Wt.test(h.type),o=h.url.replace(Rt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(zt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(Nt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(qt,"$1"),d=(Nt.test(o)?"&":"?")+"_="+It+++d),h.url=o+d),h.ifModified&&(he.lastModified[o]&&C.setRequestHeader("If-Modified-Since",he.lastModified[o]),he.etag[o]&&C.setRequestHeader("If-None-Match",he.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&C.setRequestHeader("Content-Type",h.contentType),C.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]),h.headers)C.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(m,C,h)||c))return C.abort();if(S="abort",y.add(h.complete),C.done(h.success),C.fail(h.error),i=G(Mt,h,n,C)){if(C.readyState=1,f&&g.trigger("ajaxSend",[C,h]),c)return C;h.async&&0<h.timeout&&(l=e.setTimeout(function(){C.abort("timeout")},h.timeout));try{c=!1,i.send(x,r)}catch(t){if(c)throw t;r(-1,t)}}else r(-1,"No Transport");return C},getJSON:function(e,t,n){return he.get(e,t,n,"json")},getScript:function(e,t){return he.get(e,void 0,t,"script")}}),he.each(["get","post"],function(e,t){he[t]=function(e,n,r,i){return ce(n)&&(i=i||r,r=n,n=void 0),he.ajax(he.extend({url:e,type:t,dataType:i,data:n,success:r},he.isPlainObject(e)&&e))}}),he._evalUrl=function(e,t){return he.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){he.globalEval(e,t)}})},he.fn.extend({wrapAll:function(e){var t;return this[0]&&(ce(e)&&(e=e.call(this[0])),t=he(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return ce(e)?this.each(function(t){he(this).wrapInner(e.call(this,t))}):this.each(function(){var t=he(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=ce(e);return this.each(function(n){he(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){he(this).replaceWith(this.childNodes)}),this}}),he.expr.pseudos.hidden=function(e){return!he.expr.pseudos.visible(e)},he.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},he.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},Ut=he.ajaxSettings.xhr();ue.cors=!!Ut&&"withCredentials"in Ut,ue.ajax=Ut=!!Ut,he.ajaxTransport(function(t){var n,r;if(ue.cors||Ut&&!t.crossDomain)return{send:function(i,o){var s,a=t.xhr();if(a.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(s in t.xhrFields)a[s]=t.xhrFields[s];for(s in t.mimeType&&a.overrideMimeType&&a.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest"),i)a.setRequestHeader(s,i[s]);n=function(e){return function(){n&&(n=r=a.onload=a.onerror=a.onabort=a.ontimeout=a.onreadystatechange=null,"abort"===e?a.abort():"error"===e?"number"!=typeof a.status?o(0,"error"):o(a.status,a.statusText):o(Bt[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=n(),r=a.onerror=a.ontimeout=n("error"),void 0!==a.onabort?a.onabort=r:a.onreadystatechange=function(){4===a.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{a.send(t.hasContent&&t.data||null)}catch(i){if(n)throw i}},abort:function(){n&&n()}}}),he.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),he.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return he.globalEval(e),e}}}),he.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),he.ajaxTransport("script",function(e){var t,n;if(e.crossDomain||e.scriptAttrs)return{send:function(r,i){t=he("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),Z.head.appendChild(t[0])},abort:function(){n&&n()}}});var Xt,Yt=[],Gt=/(=)\?(?=&|$)|\?\?/;he.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||he.expando+"_"+It++;return this[e]=!0,e}}),he.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=!1!==t.jsonp&&(Gt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gt.test(t.data)&&"data");if(a||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=ce(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(Gt,"$1"+i):!1!==t.jsonp&&(t.url+=(Nt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||he.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){void 0===o?he(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),s&&ce(o)&&o(s[0]),s=o=void 0}),"script"}),ue.createHTMLDocument=((Xt=Z.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Xt.childNodes.length),he.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(ue.createHTMLDocument?((r=(t=Z.implementation.createHTMLDocument("")).createElement("base")).href=Z.location.href,t.head.appendChild(r)):t=Z),o=!n&&[],(i=xe.exec(e))?[t.createElement(i[1])]:(i=x([e],t,o),o&&o.length&&he(o).remove(),he.merge([],i.childNodes)));var r,i,o},he.fn.load=function(e,t,n){var r,i,o,s=this,a=e.indexOf(" ");return-1<a&&(r=F(e.slice(a)),e=e.slice(0,a)),ce(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<s.length&&he.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?he("<div>").append(he.parseHTML(e)).find(r):e)}).always(n&&function(e,t){s.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},he.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){he.fn[t]=function(e){return this.on(t,e)}}),he.expr.pseudos.animated=function(e){return he.grep(he.timers,function(t){return e===t.elem}).length},he.offset={setOffset:function(e,t,n){var r,i,o,s,a,l,u=he.css(e,"position"),c=he(e),f={};"static"===u&&(e.style.position="relative"),a=c.offset(),o=he.css(e,"top"),l=he.css(e,"left"),("absolute"===u||"fixed"===u)&&-1<(o+l).indexOf("auto")?(s=(r=c.position()).top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(l)||0),ce(t)&&(t=t.call(e,n,he.extend({},a))),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):c.css(f)}},he.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){he.offset.setOffset(this,e,t)});var t,n,r=this[0];return r?r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===he.css(r,"position"))t=r.getBoundingClientRect();else{for(t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===he.css(e,"position");)e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=he(e).offset()).top+=he.css(e,"borderTopWidth",!0),i.left+=he.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-he.css(r,"marginTop",!0),left:t.left-i.left-he.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===he.css(e,"position");)e=e.offsetParent;return e||We})}}),he.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;he.fn[e]=function(r){return Ae(this,function(e,r,i){var o;if(fe(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),he.each(["top","left"],function(e,t){he.cssHooks[t]=O(ue.pixelPosition,function(e,n){if(n)return n=L(e,t),ot.test(n)?he(e).position()[t]+"px":n})}),he.each({Height:"height",Width:"width"},function(e,t){he.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){he.fn[r]=function(i,o){var s=arguments.length&&(n||"boolean"!=typeof i),a=n||(!0===i||!0===o?"margin":"border");return Ae(this,function(t,n,i){var o;return fe(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?he.css(t,n,a):he.style(t,n,i,a)},t,s?i:void 0,s)}})}),he.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){he.fn[t]=function(e,n){return 0<arguments.length?this.on(t,null,e,n):this.trigger(t)}}),he.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),he.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),he.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),ce(e))return r=ee.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(ee.call(arguments)))}).guid=e.guid=e.guid||he.guid++,i},he.holdReady=function(e){e?he.readyWait++:he.ready(!0)},he.isArray=Array.isArray,he.parseJSON=JSON.parse,he.nodeName=o,he.isFunction=ce,he.isWindow=fe,he.camelCase=d,he.type=r,he.now=Date.now,he.isNumeric=function(e){var t=he.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return he});var Qt=e.jQuery,Jt=e.$;return he.noConflict=function(t){return e.$===he&&(e.$=Jt),t&&e.jQuery===he&&(e.jQuery=Qt),he},t||(e.jQuery=e.$=he),he}),/*! VelocityJS.org (1.5.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
function(e){"use strict";function t(e){var t=e.length,r=n.type(e);return"function"!==r&&!n.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===r||0===t||"number"==typeof t&&t>0&&t-1 in e))}if(!e.jQuery){var n=function(e,t){return new n.fn.init(e,t)};n.isWindow=function(e){return e&&e===e.window},n.type=function(e){return e?"object"==typeof e||"function"==typeof e?i[s.call(e)]||"object":typeof e:e+""},n.isArray=Array.isArray||function(e){return"array"===n.type(e)},n.isPlainObject=function(e){var t;if(!e||"object"!==n.type(e)||e.nodeType||n.isWindow(e))return!1;try{if(e.constructor&&!o.call(e,"constructor")&&!o.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}for(t in e);return void 0===t||o.call(e,t)},n.each=function(e,n,r){var i=0,o=e.length,s=t(e);if(r){if(s)for(;i<o&&!1!==n.apply(e[i],r);i++);else for(i in e)if(e.hasOwnProperty(i)&&!1===n.apply(e[i],r))break}else if(s)for(;i<o&&!1!==n.call(e[i],i,e[i]);i++);else for(i in e)if(e.hasOwnProperty(i)&&!1===n.call(e[i],i,e[i]))break;return e},n.data=function(e,t,i){if(void 0===i){var o=e[n.expando],s=o&&r[o];if(void 0===t)return s;if(s&&t in s)return s[t]}else if(void 0!==t){var a=e[n.expando]||(e[n.expando]=++n.uuid);return r[a]=r[a]||{},r[a][t]=i,i}},n.removeData=function(e,t){var i=e[n.expando],o=i&&r[i];o&&(t?n.each(t,function(e,t){delete o[t]}):delete r[i])},n.extend=function(){var e,t,r,i,o,s,a=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof a&&(c=a,a=arguments[l]||{},l++),"object"!=typeof a&&"function"!==n.type(a)&&(a={}),l===u&&(a=this,l--);l<u;l++)if(o=arguments[l])for(i in o)o.hasOwnProperty(i)&&(e=a[i],r=o[i],a!==r&&(c&&r&&(n.isPlainObject(r)||(t=n.isArray(r)))?(t?(t=!1,s=e&&n.isArray(e)?e:[]):s=e&&n.isPlainObject(e)?e:{},a[i]=n.extend(c,s,r)):void 0!==r&&(a[i]=r)));return a},n.queue=function(e,r,i){if(e){r=(r||"fx")+"queue";var o=n.data(e,r);return i?(!o||n.isArray(i)?o=n.data(e,r,function(e,n){var r=n||[];return e&&(t(Object(e))?function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;)e[i++]=t[r++];if(n!==n)for(;void 0!==t[r];)e[i++]=t[r++];e.length=i}(r,"string"==typeof e?[e]:e):[].push.call(r,e)),r}(i)):o.push(i),o):o||[]}},n.dequeue=function(e,t){n.each(e.nodeType?[e]:e,function(e,r){t=t||"fx";var i=n.queue(r,t),o=i.shift();"inprogress"===o&&(o=i.shift()),o&&("fx"===t&&i.unshift("inprogress"),o.call(r,function(){n.dequeue(r,t)}))})},n.fn=n.prototype={init:function(e){if(e.nodeType)return this[0]=e,this;throw new Error("Not a DOM node.")},offset:function(){var t=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:t.top+(e.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:t.left+(e.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){var e=this[0],t=function(e){for(var t=e.offsetParent;t&&"html"!==t.nodeName.toLowerCase()&&t.style&&"static"===t.style.position;)t=t.offsetParent;return t||document}(e),r=this.offset(),i=/^(?:body|html)$/i.test(t.nodeName)?{top:0,left:0}:n(t).offset();return r.top-=parseFloat(e.style.marginTop)||0,r.left-=parseFloat(e.style.marginLeft)||0,t.style&&(i.top+=parseFloat(t.style.borderTopWidth)||0,i.left+=parseFloat(t.style.borderLeftWidth)||0),{top:r.top-i.top,left:r.left-i.left}}};var r={};n.expando="velocity"+(new Date).getTime(),n.uuid=0;for(var i={},o=i.hasOwnProperty,s=i.toString,a="Boolean Number String Function Array Date RegExp Object Error".split(" "),l=0;l<a.length;l++)i["[object "+a[l]+"]"]=a[l].toLowerCase();n.fn.init.prototype=n.fn,e.Velocity={Utilities:n}}}(window),function(e){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e():"function"==typeof define&&define.amd?define(e):e()}(function(){"use strict";return function(e,t,n,r){/* Array compacting. Copyright Lo-Dash. MIT License: https://github.com/lodash/lodash/blob/master/LICENSE.txt */
function i(e){for(var t=-1,n=e?e.length:0,r=[];++t<n;){var i=e[t];i&&r.push(i)}return r}function o(e){return x.isWrapped(e)?e=y.call(e):x.isNode(e)&&(e=[e]),e}function s(e){var t=h.data(e,"velocity");return null===t?r:t}function a(e,t){var n=s(e);n&&n.delayTimer&&!n.delayPaused&&(n.delayRemaining=n.delay-t+n.delayBegin,n.delayPaused=!0,clearTimeout(n.delayTimer.setTimeout))}function l(e,t){var n=s(e);n&&n.delayTimer&&n.delayPaused&&(n.delayPaused=!1,n.delayTimer.setTimeout=setTimeout(n.delayTimer.next,n.delayRemaining))}function u(e){return function(t){return Math.round(t*e)*(1/e)}}/* Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */
function c(e,n,r,i){function o(e,t){return 1-3*t+3*e}function s(e,t){return 3*t-6*e}function a(e){return 3*e}function l(e,t,n){return((o(t,n)*e+s(t,n))*e+a(t))*e}function u(e,t,n){return 3*o(t,n)*e*e+2*s(t,n)*e+a(t)}function c(t,n){for(var i=0;i<m;++i){var o=u(n,e,r);if(0===o)return n;n-=(l(n,e,r)-t)/o}return n}function f(){for(var t=0;t<b;++t)C[t]=l(t*x,e,r)}function p(t,n,i){var o,s,a=0;do{s=n+(i-n)/2,o=l(s,e,r)-t,o>0?i=s:n=s}while(Math.abs(o)>v&&++a<y);return s}function d(t){for(var n=0,i=1,o=b-1;i!==o&&C[i]<=t;++i)n+=x;--i;var s=(t-C[i])/(C[i+1]-C[i]),a=n+s*x,l=u(a,e,r);return l>=g?c(t,a):0===l?a:p(t,n,n+x)}function h(){T=!0,e===n&&r===i||f()}var m=4,g=.001,v=1e-7,y=10,b=11,x=1/(b-1),w="Float32Array"in t;if(4!==arguments.length)return!1;for(var S=0;S<4;++S)if("number"!=typeof arguments[S]||isNaN(arguments[S])||!isFinite(arguments[S]))return!1;e=Math.min(e,1),r=Math.min(r,1),e=Math.max(e,0),r=Math.max(r,0);var C=w?new Float32Array(b):new Array(b),T=!1,E=function(t){return T||h(),e===n&&r===i?t:0===t?0:1===t?1:l(d(t),n,i)};E.getControlPoints=function(){return[{x:e,y:n},{x:r,y:i}]};var k="generateBezier("+[e,n,r,i]+")";return E.toString=function(){return k},E}function f(e,t){var n=e;return x.isString(e)?T.Easings[e]||(n=!1):n=x.isArray(e)&&1===e.length?u.apply(null,e):x.isArray(e)&&2===e.length?E.apply(null,e.concat([t])):!(!x.isArray(e)||4!==e.length)&&c.apply(null,e),!1===n&&(n=T.Easings[T.defaults.easing]?T.defaults.easing:C),n}function p(e){if(e){var t=T.timestamp&&!0!==e?e:v.now(),n=T.State.calls.length;n>1e4&&(T.State.calls=i(T.State.calls),n=T.State.calls.length);for(var o=0;o<n;o++)if(T.State.calls[o]){var a=T.State.calls[o],l=a[0],u=a[2],c=a[3],f=!!c,g=null,y=a[5],b=a[6];if(c||(c=T.State.calls[o][3]=t-16),y){if(!0!==y.resume)continue;c=a[3]=Math.round(t-b-16),a[5]=null}b=a[6]=t-c;for(var w=Math.min(b/u.duration,1),S=0,C=l.length;S<C;S++){var E=l[S],P=E.element;if(s(P)){var I=!1;if(u.display!==r&&null!==u.display&&"none"!==u.display){if("flex"===u.display){var N=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];h.each(N,function(e,t){k.setPropertyValue(P,"display",t)})}k.setPropertyValue(P,"display",u.display)}u.visibility!==r&&"hidden"!==u.visibility&&k.setPropertyValue(P,"visibility",u.visibility);for(var j in E)if(E.hasOwnProperty(j)&&"element"!==j){var L,O=E[j],D=x.isString(O.easing)?T.Easings[O.easing]:O.easing;if(x.isString(O.pattern)){var z=1===w?function(e,t,n){var r=O.endValue[t];return n?Math.round(r):r}:function(e,t,n){var r=O.startValue[t],i=O.endValue[t]-r,o=r+i*D(w,u,i);return n?Math.round(o):o};L=O.pattern.replace(/{(\d+)(!)?}/g,z)}else if(1===w)L=O.endValue;else{var R=O.endValue-O.startValue;L=O.startValue+R*D(w,u,R)}if(!f&&L===O.currentValue)continue;if(O.currentValue=L,"tween"===j)g=L;else{var q;if(k.Hooks.registered[j]){q=k.Hooks.getRoot(j);var V=s(P).rootPropertyValueCache[q];V&&(O.rootPropertyValue=V)}var W=k.setPropertyValue(P,j,O.currentValue+(m<9&&0===parseFloat(L)?"":O.unitType),O.rootPropertyValue,O.scrollData);k.Hooks.registered[j]&&(k.Normalizations.registered[q]?s(P).rootPropertyValueCache[q]=k.Normalizations.registered[q]("extract",null,W[1]):s(P).rootPropertyValueCache[q]=W[1]),"transform"===W[0]&&(I=!0)}}u.mobileHA&&s(P).transformCache.translate3d===r&&(s(P).transformCache.translate3d="(0px, 0px, 0px)",I=!0),I&&k.flushTransformCache(P)}}u.display!==r&&"none"!==u.display&&(T.State.calls[o][2].display=!1),u.visibility!==r&&"hidden"!==u.visibility&&(T.State.calls[o][2].visibility=!1),u.progress&&u.progress.call(a[1],a[1],w,Math.max(0,c+u.duration-t),c,g),1===w&&d(o)}}T.State.isTicking&&A(p)}function d(e,t){if(!T.State.calls[e])return!1;for(var n=T.State.calls[e][0],i=T.State.calls[e][1],o=T.State.calls[e][2],a=T.State.calls[e][4],l=!1,u=0,c=n.length;u<c;u++){var f=n[u].element;t||o.loop||("none"===o.display&&k.setPropertyValue(f,"display",o.display),"hidden"===o.visibility&&k.setPropertyValue(f,"visibility",o.visibility));var p=s(f);if(!0!==o.loop&&(h.queue(f)[1]===r||!/\.velocityQueueEntryFlag/i.test(h.queue(f)[1]))&&p){p.isAnimating=!1,p.rootPropertyValueCache={};var d=!1;h.each(k.Lists.transforms3D,function(e,t){var n=/^scale/.test(t)?1:0,i=p.transformCache[t];p.transformCache[t]!==r&&new RegExp("^\\("+n+"[^.]").test(i)&&(d=!0,delete p.transformCache[t])}),o.mobileHA&&(d=!0,delete p.transformCache.translate3d),d&&k.flushTransformCache(f),k.Values.removeClass(f,"velocity-animating")}if(!t&&o.complete&&!o.loop&&u===c-1)try{o.complete.call(i,i)}catch(e){setTimeout(function(){throw e},1)}a&&!0!==o.loop&&a(i),p&&!0===o.loop&&!t&&(h.each(p.tweensContainer,function(e,t){if(/^rotate/.test(e)&&(parseFloat(t.startValue)-parseFloat(t.endValue))%360==0){var n=t.startValue;t.startValue=t.endValue,t.endValue=n}/^backgroundPosition/.test(e)&&100===parseFloat(t.endValue)&&"%"===t.unitType&&(t.endValue=0,t.startValue=100)}),T(f,"reverse",{loop:!0,delay:o.delay})),!1!==o.queue&&h.dequeue(f,o.queue)}T.State.calls[e]=!1;for(var m=0,g=T.State.calls.length;m<g;m++)if(!1!==T.State.calls[m]){l=!0;break}!1===l&&(T.State.isTicking=!1,delete T.State.calls,T.State.calls=[])}var h,m=function(){if(n.documentMode)return n.documentMode;for(var e=7;e>4;e--){var t=n.createElement("div");if(t.innerHTML="\x3c!--[if IE "+e+"]><span></span><![endif]--\x3e",t.getElementsByTagName("span").length)return t=null,e}return r}(),g=function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var n,r=(new Date).getTime();/* Technique by Erik Moller. MIT license: https://gist.github.com/paulirish/1579671 */
return n=Math.max(0,16-(r-e)),e=r+n,setTimeout(function(){t(r+n)},n)}}(),v=function(){var e=t.performance||{};if("function"!=typeof e.now){var n=e.timing&&e.timing.navigationStart?e.timing.navigationStart:(new Date).getTime();e.now=function(){return(new Date).getTime()-n}}return e}(),y=function(){var e=Array.prototype.slice;try{return e.call(n.documentElement),e}catch(t){return function(t,n){var r=this.length;if("number"!=typeof t&&(t=0),"number"!=typeof n&&(n=r),this.slice)return e.call(this,t,n);var i,o=[],s=t>=0?t:Math.max(0,r+t),a=n<0?r+n:Math.min(n,r),l=a-s;if(l>0)if(o=new Array(l),this.charAt)for(i=0;i<l;i++)o[i]=this.charAt(s+i);else for(i=0;i<l;i++)o[i]=this[s+i];return o}}}(),b=function(){return Array.prototype.includes?function(e,t){return e.includes(t)}:Array.prototype.indexOf?function(e,t){return e.indexOf(t)>=0}:function(e,t){for(var n=0;n<e.length;n++)if(e[n]===t)return!0;return!1}},x={isNumber:function(e){return"number"==typeof e},isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isWrapped:function(e){return e&&e!==t&&x.isNumber(e.length)&&!x.isString(e)&&!x.isFunction(e)&&!x.isNode(e)&&(0===e.length||x.isNode(e[0]))},isSVG:function(e){return t.SVGElement&&e instanceof t.SVGElement},isEmptyObject:function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}},w=!1;if(e.fn&&e.fn.jquery?(h=e,w=!0):h=t.Velocity.Utilities,m<=8&&!w)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(m<=7)return void(jQuery.fn.velocity=jQuery.fn.animate);var S=400,C="swing",T={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:n.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[],delayedElements:{count:0}},CSS:{},Utilities:h,Redirects:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:S,easing:C,begin:r,complete:r,progress:r,display:r,visibility:r,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0,promiseRejectEmpty:!0},init:function(e){h.data(e,"velocity",{isSVG:x.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:5,patch:0},debug:!1,timestamp:!0,pauseAll:function(e){var t=(new Date).getTime();h.each(T.State.calls,function(t,n){if(n){if(e!==r&&(n[2].queue!==e||!1===n[2].queue))return!0;n[5]={resume:!1}}}),h.each(T.State.delayedElements,function(e,n){n&&a(n,t)})},resumeAll:function(e){var t=(new Date).getTime();h.each(T.State.calls,function(t,n){if(n){if(e!==r&&(n[2].queue!==e||!1===n[2].queue))return!0;n[5]&&(n[5].resume=!0)}}),h.each(T.State.delayedElements,function(e,n){n&&l(n,t)})}};t.pageYOffset!==r?(T.State.scrollAnchor=t,T.State.scrollPropertyLeft="pageXOffset",T.State.scrollPropertyTop="pageYOffset"):(T.State.scrollAnchor=n.documentElement||n.body.parentNode||n.body,T.State.scrollPropertyLeft="scrollLeft",T.State.scrollPropertyTop="scrollTop");/* Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
/* Given a tension, friction, and duration, a simulation at 60FPS will first run without a defined duration in order to calculate the full path. A second pass
		 then adjusts the time delta -- using the relation between actual time and duration -- to calculate the path for the duration-constrained animation. */
var E=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,n,r){var i={x:t.x+r.dx*n,v:t.v+r.dv*n,tension:t.tension,friction:t.friction};return{dx:i.v,dv:e(i)}}function n(n,r){var i={dx:n.v,dv:e(n)},o=t(n,.5*r,i),s=t(n,.5*r,o),a=t(n,r,s),l=1/6*(i.dx+2*(o.dx+s.dx)+a.dx),u=1/6*(i.dv+2*(o.dv+s.dv)+a.dv);return n.x=n.x+l*r,n.v=n.v+u*r,n}return function e(t,r,i){var o,s,a,l={x:-1,v:0,tension:null,friction:null},u=[0],c=0;for(t=parseFloat(t)||500,r=parseFloat(r)||20,i=i||null,l.tension=t,l.friction=r,o=null!==i,o?(c=e(t,r),s=c/i*.016):s=.016;;)if(a=n(a||l,s),u.push(1+a.x),c+=16,!(Math.abs(a.x)>1e-4&&Math.abs(a.v)>1e-4))break;return o?function(e){return u[e*(u.length-1)|0]}:c}}();T.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},h.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(e,t){T.Easings[t[0]]=c.apply(null,t[1])});var k=T.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"],units:["%","em","ex","ch","rem","vw","vh","vmin","vmax","cm","mm","Q","in","pc","pt","px","deg","grad","rad","turn","s","ms"],colorNames:{aliceblue:"240,248,255",antiquewhite:"250,235,215",aquamarine:"127,255,212",aqua:"0,255,255",azure:"240,255,255",beige:"245,245,220",bisque:"255,228,196",black:"0,0,0",blanchedalmond:"255,235,205",blueviolet:"138,43,226",blue:"0,0,255",brown:"165,42,42",burlywood:"222,184,135",cadetblue:"95,158,160",chartreuse:"127,255,0",chocolate:"210,105,30",coral:"255,127,80",cornflowerblue:"100,149,237",cornsilk:"255,248,220",crimson:"220,20,60",cyan:"0,255,255",darkblue:"0,0,139",darkcyan:"0,139,139",darkgoldenrod:"184,134,11",darkgray:"169,169,169",darkgrey:"169,169,169",darkgreen:"0,100,0",darkkhaki:"189,183,107",darkmagenta:"139,0,139",darkolivegreen:"85,107,47",darkorange:"255,140,0",darkorchid:"153,50,204",darkred:"139,0,0",darksalmon:"233,150,122",darkseagreen:"143,188,143",darkslateblue:"72,61,139",darkslategray:"47,79,79",darkturquoise:"0,206,209",darkviolet:"148,0,211",deeppink:"255,20,147",deepskyblue:"0,191,255",dimgray:"105,105,105",dimgrey:"105,105,105",dodgerblue:"30,144,255",firebrick:"178,34,34",floralwhite:"255,250,240",forestgreen:"34,139,34",fuchsia:"255,0,255",gainsboro:"220,220,220",ghostwhite:"248,248,255",gold:"255,215,0",goldenrod:"218,165,32",gray:"128,128,128",grey:"128,128,128",greenyellow:"173,255,47",green:"0,128,0",honeydew:"240,255,240",hotpink:"255,105,180",indianred:"205,92,92",indigo:"75,0,130",ivory:"255,255,240",khaki:"240,230,140",lavenderblush:"255,240,245",lavender:"230,230,250",lawngreen:"124,252,0",lemonchiffon:"255,250,205",lightblue:"173,216,230",lightcoral:"240,128,128",lightcyan:"224,255,255",lightgoldenrodyellow:"250,250,210",lightgray:"211,211,211",lightgrey:"211,211,211",lightgreen:"144,238,144",lightpink:"255,182,193",lightsalmon:"255,160,122",lightseagreen:"32,178,170",lightskyblue:"135,206,250",lightslategray:"119,136,153",lightsteelblue:"176,196,222",lightyellow:"255,255,224",limegreen:"50,205,50",lime:"0,255,0",linen:"250,240,230",magenta:"255,0,255",maroon:"128,0,0",mediumaquamarine:"102,205,170",mediumblue:"0,0,205",mediumorchid:"186,85,211",mediumpurple:"147,112,219",mediumseagreen:"60,179,113",mediumslateblue:"123,104,238",mediumspringgreen:"0,250,154",mediumturquoise:"72,209,204",mediumvioletred:"199,21,133",midnightblue:"25,25,112",mintcream:"245,255,250",mistyrose:"255,228,225",moccasin:"255,228,181",navajowhite:"255,222,173",navy:"0,0,128",oldlace:"253,245,230",olivedrab:"107,142,35",olive:"128,128,0",orangered:"255,69,0",orange:"255,165,0",orchid:"218,112,214",palegoldenrod:"238,232,170",palegreen:"152,251,152",paleturquoise:"175,238,238",palevioletred:"219,112,147",papayawhip:"255,239,213",peachpuff:"255,218,185",peru:"205,133,63",pink:"255,192,203",plum:"221,160,221",powderblue:"176,224,230",purple:"128,0,128",red:"255,0,0",rosybrown:"188,143,143",royalblue:"65,105,225",saddlebrown:"139,69,19",salmon:"250,128,114",sandybrown:"244,164,96",seagreen:"46,139,87",seashell:"255,245,238",sienna:"160,82,45",silver:"192,192,192",skyblue:"135,206,235",slateblue:"106,90,205",slategray:"112,128,144",snow:"255,250,250",springgreen:"0,255,127",steelblue:"70,130,180",tan:"210,180,140",teal:"0,128,128",thistle:"216,191,216",tomato:"255,99,71",turquoise:"64,224,208",violet:"238,130,238",wheat:"245,222,179",whitesmoke:"245,245,245",white:"255,255,255",yellowgreen:"154,205,50",yellow:"255,255,0"}},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<k.Lists.colors.length;e++){var t="color"===k.Lists.colors[e]?"0 0 0 1":"255 255 255 1";k.Hooks.templates[k.Lists.colors[e]]=["Red Green Blue Alpha",t]}var n,r,i;if(m)for(n in k.Hooks.templates)if(k.Hooks.templates.hasOwnProperty(n)){r=k.Hooks.templates[n],i=r[0].split(" ");var o=r[1].match(k.RegEx.valueSplit);"Color"===i[0]&&(i.push(i.shift()),o.push(o.shift()),k.Hooks.templates[n]=[i.join(" "),o.join(" ")])}for(n in k.Hooks.templates)if(k.Hooks.templates.hasOwnProperty(n)){r=k.Hooks.templates[n],i=r[0].split(" ");for(var s in i)if(i.hasOwnProperty(s)){var a=n+i[s],l=s;k.Hooks.registered[a]=[n,l]}}},getRoot:function(e){var t=k.Hooks.registered[e];return t?t[0]:e},getUnit:function(e,t){var n=(e.substr(t||0,5).match(/^[a-z%]+/)||[])[0]||"";return n&&b(k.Lists.units,n)?n:""},fixColors:function(e){return e.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g,function(e,t,n){return k.Lists.colorNames.hasOwnProperty(n)?(t||"rgba(")+k.Lists.colorNames[n]+(t?"":",1)"):t+n})},cleanRootPropertyValue:function(e,t){return k.RegEx.valueUnwrap.test(t)&&(t=t.match(k.RegEx.valueUnwrap)[1]),k.Values.isCSSNullValue(t)&&(t=k.Hooks.templates[e][1]),t},extractValue:function(e,t){var n=k.Hooks.registered[e];if(n){var r=n[0],i=n[1];return t=k.Hooks.cleanRootPropertyValue(r,t),t.toString().match(k.RegEx.valueSplit)[i]}return t},injectValue:function(e,t,n){var r=k.Hooks.registered[e];if(r){var i,o=r[0],s=r[1];return n=k.Hooks.cleanRootPropertyValue(o,n),i=n.toString().match(k.RegEx.valueSplit),i[s]=t,i.join(" ")}return n}},Normalizations:{registered:{clip:function(e,t,n){switch(e){case"name":return"clip";case"extract":var r;return k.RegEx.wrappedValueAlreadyExtracted.test(n)?r=n:(r=n.toString().match(k.RegEx.valueUnwrap),r=r?r[1].replace(/,(\s+)?/g," "):n),r;case"inject":return"rect("+n+")"}},blur:function(e,t,n){switch(e){case"name":return T.State.isFirefox?"filter":"-webkit-filter";case"extract":var r=parseFloat(n);if(!r&&0!==r){var i=n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);r=i?i[1]:0}return r;case"inject":return parseFloat(n)?"blur("+n+")":"none"}},opacity:function(e,t,n){if(m<=8)switch(e){case"name":return"filter";case"extract":var r=n.toString().match(/alpha\(opacity=(.*)\)/i);return n=r?r[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(n)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(n),10)+")"}else switch(e){case"name":return"opacity";case"extract":case"inject":return n}}},register:function(){function e(e,t,n){if("border-box"===k.getPropertyValue(t,"boxSizing").toString().toLowerCase()===(n||!1)){var r,i,o=0,s="width"===e?["Left","Right"]:["Top","Bottom"],a=["padding"+s[0],"padding"+s[1],"border"+s[0]+"Width","border"+s[1]+"Width"];for(r=0;r<a.length;r++)i=parseFloat(k.getPropertyValue(t,a[r])),isNaN(i)||(o+=i);return n?-o:o}return 0}function t(t,n){return function(r,i,o){switch(r){case"name":return t;case"extract":return parseFloat(o)+e(t,i,n);case"inject":return parseFloat(o)-e(t,i,n)+"px"}}}m&&!(m>9)||T.State.isGingerbread||(k.Lists.transformsBase=k.Lists.transformsBase.concat(k.Lists.transforms3D));for(var n=0;n<k.Lists.transformsBase.length;n++)!function(){var e=k.Lists.transformsBase[n];k.Normalizations.registered[e]=function(t,n,i){switch(t){case"name":return"transform";case"extract":return s(n)===r||s(n).transformCache[e]===r?/^scale/i.test(e)?1:0:s(n).transformCache[e].replace(/[()]/g,"");case"inject":var o=!1;switch(e.substr(0,e.length-1)){case"translate":o=!/(%|px|em|rem|vw|vh|\d)$/i.test(i);break;case"scal":case"scale":T.State.isAndroid&&s(n).transformCache[e]===r&&i<1&&(i=1),o=!/(\d)$/i.test(i);break;case"skew":case"rotate":o=!/(deg|\d)$/i.test(i)}return o||(s(n).transformCache[e]="("+i+")"),s(n).transformCache[e]}}}();for(var i=0;i<k.Lists.colors.length;i++)!function(){var e=k.Lists.colors[i];k.Normalizations.registered[e]=function(t,n,i){switch(t){case"name":return e;case"extract":var o;if(k.RegEx.wrappedValueAlreadyExtracted.test(i))o=i;else{var s,a={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(i)?s=a[i]!==r?a[i]:a.black:k.RegEx.isHex.test(i)?s="rgb("+k.Values.hexToRgb(i).join(" ")+")":/^rgba?\(/i.test(i)||(s=a.black),o=(s||i).toString().match(k.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return(!m||m>8)&&3===o.split(" ").length&&(o+=" 1"),o;case"inject":return/^rgb/.test(i)?i:(m<=8?4===i.split(" ").length&&(i=i.split(/\s+/).slice(0,3).join(" ")):3===i.split(" ").length&&(i+=" 1"),(m<=8?"rgb":"rgba")+"("+i.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")")}}}();k.Normalizations.registered.innerWidth=t("width",!0),k.Normalizations.registered.innerHeight=t("height",!0),k.Normalizations.registered.outerWidth=t("width"),k.Normalizations.registered.outerHeight=t("height")}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(m||T.State.isAndroid&&!T.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(T.State.prefixMatches[e])return[T.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],n=0,r=t.length;n<r;n++){var i;if(i=0===n?e:t[n]+e.replace(/^\w/,function(e){return e.toUpperCase()}),x.isString(T.State.prefixElement.style[i]))return T.State.prefixMatches[e]=i,[i,!0]}return[e,!1]}},Values:{/* Hex to RGB conversion. Copyright Tim Down: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb */
hexToRgb:function(e){var t,n=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return e=e.replace(n,function(e,t,n,r){return t+t+n+n+r+r}),t=r.exec(e),t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[0,0,0]},isCSSNullValue:function(e){return!e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":/^(table)$/i.test(t)?"table":/^(tbody)$/i.test(t)?"table-row-group":"block"},addClass:function(e,t){if(e)if(e.classList)e.classList.add(t);else if(x.isString(e.className))e.className+=(e.className.length?" ":"")+t;else{var n=e.getAttribute(m<=7?"className":"class")||"";e.setAttribute("class",n+(n?" ":"")+t)}},removeClass:function(e,t){if(e)if(e.classList)e.classList.remove(t);else if(x.isString(e.className))e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ");else{var n=e.getAttribute(m<=7?"className":"class")||"";e.setAttribute("class",n.replace(new RegExp("(^|s)"+t.split(" ").join("|")+"(s|$)","gi")," "))}}},getPropertyValue:function(e,n,i,o){function a(e,n){var i=0;if(m<=8)i=h.css(e,n);else{var l=!1;/^(width|height)$/.test(n)&&0===k.getPropertyValue(e,"display")&&(l=!0,k.setPropertyValue(e,"display",k.Values.getDisplayType(e)));var u=function(){l&&k.setPropertyValue(e,"display","none")};if(!o){if("height"===n&&"border-box"!==k.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(k.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(k.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(k.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(k.getPropertyValue(e,"paddingBottom"))||0);return u(),c}if("width"===n&&"border-box"!==k.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var f=e.offsetWidth-(parseFloat(k.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(k.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(k.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(k.getPropertyValue(e,"paddingRight"))||0);return u(),f}}var p;p=s(e)===r?t.getComputedStyle(e,null):s(e).computedStyle?s(e).computedStyle:s(e).computedStyle=t.getComputedStyle(e,null),"borderColor"===n&&(n="borderTopColor"),i=9===m&&"filter"===n?p.getPropertyValue(n):p[n],""!==i&&null!==i||(i=e.style[n]),u()}if("auto"===i&&/^(top|right|bottom|left)$/i.test(n)){var d=a(e,"position");("fixed"===d||"absolute"===d&&/top|left/i.test(n))&&(i=h(e).position()[n]+"px")}return i}var l;if(k.Hooks.registered[n]){var u=n,c=k.Hooks.getRoot(u);i===r&&(i=k.getPropertyValue(e,k.Names.prefixCheck(c)[0])),k.Normalizations.registered[c]&&(i=k.Normalizations.registered[c]("extract",e,i)),l=k.Hooks.extractValue(u,i)}else if(k.Normalizations.registered[n]){var f,p;f=k.Normalizations.registered[n]("name",e),"transform"!==f&&(p=a(e,k.Names.prefixCheck(f)[0]),k.Values.isCSSNullValue(p)&&k.Hooks.templates[n]&&(p=k.Hooks.templates[n][1])),l=k.Normalizations.registered[n]("extract",e,p)}if(!/^[\d-]/.test(l)){var d=s(e);if(d&&d.isSVG&&k.Names.SVGAttribute(n))if(/^(height|width)$/i.test(n))try{l=e.getBBox()[n]}catch(e){l=0}else l=e.getAttribute(n);else l=a(e,k.Names.prefixCheck(n)[0])}return k.Values.isCSSNullValue(l)&&(l=0),T.debug>=2&&console.log("Get "+n+": "+l),l},setPropertyValue:function(e,n,r,i,o){var a=n;if("scroll"===n)o.container?o.container["scroll"+o.direction]=r:"Left"===o.direction?t.scrollTo(r,o.alternateValue):t.scrollTo(o.alternateValue,r);else if(k.Normalizations.registered[n]&&"transform"===k.Normalizations.registered[n]("name",e))k.Normalizations.registered[n]("inject",e,r),a="transform",r=s(e).transformCache[n];else{if(k.Hooks.registered[n]){var l=n,u=k.Hooks.getRoot(n);i=i||k.getPropertyValue(e,u),r=k.Hooks.injectValue(l,r,i),n=u}if(k.Normalizations.registered[n]&&(r=k.Normalizations.registered[n]("inject",e,r),n=k.Normalizations.registered[n]("name",e)),a=k.Names.prefixCheck(n)[0],m<=8)try{e.style[a]=r}catch(e){T.debug&&console.log("Browser does not support ["+r+"] for ["+a+"]")}else{var c=s(e);c&&c.isSVG&&k.Names.SVGAttribute(n)?e.setAttribute(n,r):e.style[a]=r}T.debug>=2&&console.log("Set "+n+" ("+a+"): "+r)}return[a,r]},flushTransformCache:function(e){var t="",n=s(e);if((m||T.State.isAndroid&&!T.State.isChrome)&&n&&n.isSVG){var r=function(t){return parseFloat(k.getPropertyValue(e,t))},i={translate:[r("translateX"),r("translateY")],skewX:[r("skewX")],skewY:[r("skewY")],scale:1!==r("scale")?[r("scale"),r("scale")]:[r("scaleX"),r("scaleY")],rotate:[r("rotateZ"),0,0]};h.each(s(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),i[e]&&(t+=e+"("+i[e].join(" ")+") ",delete i[e])})}else{var o,a;h.each(s(e).transformCache,function(n){if(o=s(e).transformCache[n],"transformPerspective"===n)return a=o,!0;9===m&&"rotateZ"===n&&(n="rotate"),t+=n+o+" "}),a&&(t="perspective"+a+" "+t)}k.setPropertyValue(e,"transform",t)}};k.Hooks.register(),k.Normalizations.register(),T.hook=function(e,t,n){var i;return e=o(e),h.each(e,function(e,o){if(s(o)===r&&T.init(o),n===r)i===r&&(i=k.getPropertyValue(o,t));else{var a=k.setPropertyValue(o,t,n);"transform"===a[0]&&T.CSS.flushTransformCache(o),i=a}}),i};var P=function(){function e(){return c?E.promise||null:m}function i(e,i){function o(o){var c,d;if(l.begin&&0===I)try{l.begin.call(v,v)}catch(e){setTimeout(function(){throw e},1)}if("scroll"===L){var m,g,S,C=/^x$/i.test(l.axis)?"Left":"Top",P=parseFloat(l.offset)||0;l.container?x.isWrapped(l.container)||x.isNode(l.container)?(l.container=l.container[0]||l.container,m=l.container["scroll"+C],S=m+h(e).position()[C.toLowerCase()]+P):l.container=null:(m=T.State.scrollAnchor[T.State["scrollProperty"+C]],g=T.State.scrollAnchor[T.State["scrollProperty"+("Left"===C?"Top":"Left")]],S=h(e).offset()[C.toLowerCase()]+P),u={scroll:{rootPropertyValue:!1,startValue:m,currentValue:m,endValue:S,unitType:"",easing:l.easing,scrollData:{container:l.container,direction:C,alternateValue:g}},element:e},T.debug&&console.log("tweensContainer (scroll): ",u.scroll,e)}else if("reverse"===L){if(!(c=s(e)))return;if(!c.tweensContainer)return void h.dequeue(e,l.queue);"none"===c.opts.display&&(c.opts.display="auto"),"hidden"===c.opts.visibility&&(c.opts.visibility="visible"),c.opts.loop=!1,c.opts.begin=null,c.opts.complete=null,w.easing||delete l.easing,w.duration||delete l.duration,l=h.extend({},c.opts,l),d=h.extend(!0,{},c?c.tweensContainer:null);for(var N in d)if(d.hasOwnProperty(N)&&"element"!==N){var j=d[N].startValue;d[N].startValue=d[N].currentValue=d[N].endValue,d[N].endValue=j,x.isEmptyObject(w)||(d[N].easing=l.easing),T.debug&&console.log("reverse tweensContainer ("+N+"): "+JSON.stringify(d[N]),e)}u=d}else if("start"===L){c=s(e),c&&c.tweensContainer&&!0===c.isAnimating&&(d=c.tweensContainer);var O=function(i,o){var s,f=k.Hooks.getRoot(i),p=!1,m=o[0],g=o[1],v=o[2];if(!(c&&c.isSVG||"tween"===f||!1!==k.Names.prefixCheck(f)[1]||k.Normalizations.registered[f]!==r))return void(T.debug&&console.log("Skipping ["+f+"] due to a lack of browser support."));(l.display!==r&&null!==l.display&&"none"!==l.display||l.visibility!==r&&"hidden"!==l.visibility)&&/opacity|filter/.test(i)&&!v&&0!==m&&(v=0),l._cacheValues&&d&&d[i]?(v===r&&(v=d[i].endValue+d[i].unitType),p=c.rootPropertyValueCache[f]):k.Hooks.registered[i]?v===r?(p=k.getPropertyValue(e,f),v=k.getPropertyValue(e,i,p)):p=k.Hooks.templates[f][1]:v===r&&(v=k.getPropertyValue(e,i));var y,b,w,S=!1,C=function(e,t){var n,r;return r=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(e){return n=e,""}),n||(n=k.Values.getUnitType(e)),[r,n]};if(v!==m&&x.isString(v)&&x.isString(m)){s="";var E=0,P=0,A=[],I=[],N=0,j=0,L=0;for(v=k.Hooks.fixColors(v),m=k.Hooks.fixColors(m);E<v.length&&P<m.length;){var O=v[E],D=m[P];if(/[\d\.-]/.test(O)&&/[\d\.-]/.test(D)){for(var z=O,R=D,q=".",W=".";++E<v.length;){if((O=v[E])===q)q="..";else if(!/\d/.test(O))break;z+=O}for(;++P<m.length;){if((D=m[P])===W)W="..";else if(!/\d/.test(D))break;R+=D}var _=k.Hooks.getUnit(v,E),H=k.Hooks.getUnit(m,P);if(E+=_.length,P+=H.length,_===H)z===R?s+=z+_:(s+="{"+A.length+(j?"!":"")+"}"+_,A.push(parseFloat(z)),I.push(parseFloat(R)));else{var M=parseFloat(z),$=parseFloat(R);s+=(N<5?"calc":"")+"("+(M?"{"+A.length+(j?"!":"")+"}":"0")+_+" + "+($?"{"+(A.length+(M?1:0))+(j?"!":"")+"}":"0")+H+")",M&&(A.push(M),I.push(0)),$&&(A.push(0),I.push($))}}else{if(O!==D){N=0;break}s+=O,E++,P++,0===N&&"c"===O||1===N&&"a"===O||2===N&&"l"===O||3===N&&"c"===O||N>=4&&"("===O?N++:(N&&N<5||N>=4&&")"===O&&--N<5)&&(N=0),0===j&&"r"===O||1===j&&"g"===O||2===j&&"b"===O||3===j&&"a"===O||j>=3&&"("===O?(3===j&&"a"===O&&(L=1),j++):L&&","===O?++L>3&&(j=L=0):(L&&j<(L?5:4)||j>=(L?4:3)&&")"===O&&--j<(L?5:4))&&(j=L=0)}}E===v.length&&P===m.length||(T.debug&&console.error('Trying to pattern match mis-matched strings ["'+m+'", "'+v+'"]'),s=r),s&&(A.length?(T.debug&&console.log('Pattern found "'+s+'" -> ',A,I,"["+v+","+m+"]"),v=A,m=I,b=w=""):s=r)}s||(y=C(i,v),v=y[0],w=y[1],y=C(i,m),m=y[0].replace(/^([+-\/*])=/,function(e,t){return S=t,""}),b=y[1],v=parseFloat(v)||0,m=parseFloat(m)||0,"%"===b&&(/^(fontSize|lineHeight)$/.test(i)?(m/=100,b="em"):/^scale/.test(i)?(m/=100,b=""):/(Red|Green|Blue)$/i.test(i)&&(m=m/100*255,b="")));if(/[\/*]/.test(S))b=w;else if(w!==b&&0!==v)if(0===m)b=w;else{a=a||function(){var r={myParent:e.parentNode||n.body,position:k.getPropertyValue(e,"position"),fontSize:k.getPropertyValue(e,"fontSize")},i=r.position===V.lastPosition&&r.myParent===V.lastParent,o=r.fontSize===V.lastFontSize;V.lastParent=r.myParent,V.lastPosition=r.position,V.lastFontSize=r.fontSize;var s={};if(o&&i)s.emToPx=V.lastEmToPx,s.percentToPxWidth=V.lastPercentToPxWidth,s.percentToPxHeight=V.lastPercentToPxHeight;else{var a=c&&c.isSVG?n.createElementNS("http://www.w3.org/2000/svg","rect"):n.createElement("div");T.init(a),r.myParent.appendChild(a),h.each(["overflow","overflowX","overflowY"],function(e,t){T.CSS.setPropertyValue(a,t,"hidden")}),T.CSS.setPropertyValue(a,"position",r.position),T.CSS.setPropertyValue(a,"fontSize",r.fontSize),T.CSS.setPropertyValue(a,"boxSizing","content-box"),h.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){T.CSS.setPropertyValue(a,t,"100%")}),T.CSS.setPropertyValue(a,"paddingLeft","100em"),s.percentToPxWidth=V.lastPercentToPxWidth=(parseFloat(k.getPropertyValue(a,"width",null,!0))||1)/100,s.percentToPxHeight=V.lastPercentToPxHeight=(parseFloat(k.getPropertyValue(a,"height",null,!0))||1)/100,s.emToPx=V.lastEmToPx=(parseFloat(k.getPropertyValue(a,"paddingLeft"))||1)/100,r.myParent.removeChild(a)}return null===V.remToPx&&(V.remToPx=parseFloat(k.getPropertyValue(n.body,"fontSize"))||16),null===V.vwToPx&&(V.vwToPx=parseFloat(t.innerWidth)/100,V.vhToPx=parseFloat(t.innerHeight)/100),s.remToPx=V.remToPx,s.vwToPx=V.vwToPx,s.vhToPx=V.vhToPx,T.debug>=1&&console.log("Unit ratios: "+JSON.stringify(s),e),s}();var F=/margin|padding|left|right|width|text|word|letter/i.test(i)||/X$/.test(i)||"x"===i?"x":"y";switch(w){case"%":v*="x"===F?a.percentToPxWidth:a.percentToPxHeight;break;case"px":break;default:v*=a[w+"ToPx"]}switch(b){case"%":v*=1/("x"===F?a.percentToPxWidth:a.percentToPxHeight);break;case"px":break;default:v*=1/a[b+"ToPx"]}}switch(S){case"+":m=v+m;break;case"-":m=v-m;break;case"*":m*=v;break;case"/":m=v/m}u[i]={rootPropertyValue:p,startValue:v,currentValue:v,endValue:m,unitType:b,easing:g},s&&(u[i].pattern=s),T.debug&&console.log("tweensContainer ("+i+"): "+JSON.stringify(u[i]),e)};for(var D in y)if(y.hasOwnProperty(D)){var z=k.Names.camelCase(D),R=function(t,n){var r,o,s;return x.isFunction(t)&&(t=t.call(e,i,A)),x.isArray(t)?(r=t[0],!x.isArray(t[1])&&/^[\d-]/.test(t[1])||x.isFunction(t[1])||k.RegEx.isHex.test(t[1])?s=t[1]:x.isString(t[1])&&!k.RegEx.isHex.test(t[1])&&T.Easings[t[1]]||x.isArray(t[1])?(o=n?t[1]:f(t[1],l.duration),s=t[2]):s=t[1]||t[2]):r=t,n||(o=o||l.easing),x.isFunction(r)&&(r=r.call(e,i,A)),x.isFunction(s)&&(s=s.call(e,i,A)),[r||0,o,s]}(y[D]);if(b(k.Lists.colors,z)){var q=R[0],_=R[1],H=R[2];if(k.RegEx.isHex.test(q)){for(var M=["Red","Green","Blue"],$=k.Values.hexToRgb(q),F=H?k.Values.hexToRgb(H):r,B=0;B<M.length;B++){var U=[$[B]];_&&U.push(_),F!==r&&U.push(F[B]),O(z+M[B],U)}continue}}O(z,R)}u.element=e}u.element&&(k.Values.addClass(e,"velocity-animating"),W.push(u),c=s(e),c&&(""===l.queue&&(c.tweensContainer=u,c.opts=l),c.isAnimating=!0),I===A-1?(T.State.calls.push([W,v,l,null,E.resolver,null,0]),!1===T.State.isTicking&&(T.State.isTicking=!0,p())):I++)}var a,l=h.extend({},T.defaults,w),u={};switch(s(e)===r&&T.init(e),parseFloat(l.delay)&&!1!==l.queue&&h.queue(e,l.queue,function(t){T.velocityQueueEntryFlag=!0;var n=T.State.delayedElements.count++;T.State.delayedElements[n]=e;var r=function(e){return function(){T.State.delayedElements[e]=!1,t()}}(n);s(e).delayBegin=(new Date).getTime(),s(e).delay=parseFloat(l.delay),s(e).delayTimer={setTimeout:setTimeout(t,parseFloat(l.delay)),next:r}}),l.duration.toString().toLowerCase()){case"fast":l.duration=200;break;case"normal":l.duration=S;break;case"slow":l.duration=600;break;default:l.duration=parseFloat(l.duration)||1}if(!1!==T.mock&&(!0===T.mock?l.duration=l.delay=1:(l.duration*=parseFloat(T.mock)||1,l.delay*=parseFloat(T.mock)||1)),l.easing=f(l.easing,l.duration),l.begin&&!x.isFunction(l.begin)&&(l.begin=null),l.progress&&!x.isFunction(l.progress)&&(l.progress=null),l.complete&&!x.isFunction(l.complete)&&(l.complete=null),l.display!==r&&null!==l.display&&(l.display=l.display.toString().toLowerCase(),"auto"===l.display&&(l.display=T.CSS.Values.getDisplayType(e))),l.visibility!==r&&null!==l.visibility&&(l.visibility=l.visibility.toString().toLowerCase()),l.mobileHA=l.mobileHA&&T.State.isMobile&&!T.State.isGingerbread,!1===l.queue)if(l.delay){var c=T.State.delayedElements.count++;T.State.delayedElements[c]=e;var d=function(e){return function(){T.State.delayedElements[e]=!1,o()}}(c);s(e).delayBegin=(new Date).getTime(),s(e).delay=parseFloat(l.delay),s(e).delayTimer={setTimeout:setTimeout(o,parseFloat(l.delay)),next:d}}else o();else h.queue(e,l.queue,function(e,t){if(!0===t)return E.promise&&E.resolver(v),!0;T.velocityQueueEntryFlag=!0,o(e)});""!==l.queue&&"fx"!==l.queue||"inprogress"===h.queue(e)[0]||h.dequeue(e)}var u,c,m,g,v,y,w,C=arguments[0]&&(arguments[0].p||h.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||x.isString(arguments[0].properties));x.isWrapped(this)?(c=!1,g=0,v=this,m=this):(c=!0,g=1,v=C?arguments[0].elements||arguments[0].e:arguments[0]);var E={promise:null,resolver:null,rejecter:null};if(c&&T.Promise&&(E.promise=new T.Promise(function(e,t){E.resolver=e,E.rejecter=t})),C?(y=arguments[0].properties||arguments[0].p,w=arguments[0].options||arguments[0].o):(y=arguments[g],w=arguments[g+1]),!(v=o(v)))return void(E.promise&&(y&&w&&!1===w.promiseRejectEmpty?E.resolver():E.rejecter()));var A=v.length,I=0;if(!/^(stop|finish|finishAll|pause|resume)$/i.test(y)&&!h.isPlainObject(w)){var N=g+1;w={};for(var j=N;j<arguments.length;j++)x.isArray(arguments[j])||!/^(fast|normal|slow)$/i.test(arguments[j])&&!/^\d/.test(arguments[j])?x.isString(arguments[j])||x.isArray(arguments[j])?w.easing=arguments[j]:x.isFunction(arguments[j])&&(w.complete=arguments[j]):w.duration=arguments[j]}var L;switch(y){case"scroll":L="scroll";break;case"reverse":L="reverse";break;case"pause":var O=(new Date).getTime();return h.each(v,function(e,t){a(t,O)}),h.each(T.State.calls,function(e,t){var n=!1;t&&h.each(t[1],function(e,i){var o=w===r?"":w;return!0!==o&&t[2].queue!==o&&(w!==r||!1!==t[2].queue)||(h.each(v,function(e,r){if(r===i)return t[5]={resume:!1},n=!0,!1}),!n&&void 0)})}),e();case"resume":return h.each(v,function(e,t){l(t,O)}),h.each(T.State.calls,function(e,t){var n=!1;t&&h.each(t[1],function(e,i){var o=w===r?"":w;return!0!==o&&t[2].queue!==o&&(w!==r||!1!==t[2].queue)||(!t[5]||(h.each(v,function(e,r){if(r===i)return t[5].resume=!0,n=!0,!1}),!n&&void 0))})}),e();case"finish":case"finishAll":case"stop":h.each(v,function(e,t){s(t)&&s(t).delayTimer&&(clearTimeout(s(t).delayTimer.setTimeout),s(t).delayTimer.next&&s(t).delayTimer.next(),delete s(t).delayTimer),"finishAll"!==y||!0!==w&&!x.isString(w)||(h.each(h.queue(t,x.isString(w)?w:""),function(e,t){x.isFunction(t)&&t()}),h.queue(t,x.isString(w)?w:"",[]))});var D=[];return h.each(T.State.calls,function(e,t){t&&h.each(t[1],function(n,i){var o=w===r?"":w;if(!0!==o&&t[2].queue!==o&&(w!==r||!1!==t[2].queue))return!0;h.each(v,function(n,r){if(r===i)if((!0===w||x.isString(w))&&(h.each(h.queue(r,x.isString(w)?w:""),function(e,t){x.isFunction(t)&&t(null,!0)}),h.queue(r,x.isString(w)?w:"",[])),"stop"===y){var a=s(r);a&&a.tweensContainer&&!1!==o&&h.each(a.tweensContainer,function(e,t){t.endValue=t.currentValue}),D.push(e)}else"finish"!==y&&"finishAll"!==y||(t[2].duration=1)})})}),"stop"===y&&(h.each(D,function(e,t){d(t,!0)}),E.promise&&E.resolver(v)),e();default:if(!h.isPlainObject(y)||x.isEmptyObject(y)){if(x.isString(y)&&T.Redirects[y]){u=h.extend({},w);var z=u.duration,R=u.delay||0;return!0===u.backwards&&(v=h.extend(!0,[],v).reverse()),h.each(v,function(e,t){parseFloat(u.stagger)?u.delay=R+parseFloat(u.stagger)*e:x.isFunction(u.stagger)&&(u.delay=R+u.stagger.call(t,e,A)),u.drag&&(u.duration=parseFloat(z)||(/^(callout|transition)/.test(y)?1e3:S),u.duration=Math.max(u.duration*(u.backwards?1-e/A:(e+1)/A),.75*u.duration,200)),T.Redirects[y].call(t,t,u||{},e,A,v,E.promise?E:r)}),e()}var q="Velocity: First argument ("+y+") was not a property map, a known action, or a registered redirect. Aborting.";return E.promise?E.rejecter(new Error(q)):t.console&&console.log(q),e()}L="start"}var V={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},W=[];h.each(v,function(e,t){x.isNode(t)&&i(t,e)}),u=h.extend({},T.defaults,w),u.loop=parseInt(u.loop,10);var _=2*u.loop-1;if(u.loop)for(var H=0;H<_;H++){var M={delay:u.delay,progress:u.progress};H===_-1&&(M.display=u.display,M.visibility=u.visibility,M.complete=u.complete),P(v,"reverse",M)}return e()};T=h.extend(P,T),T.animate=P;var A=t.requestAnimationFrame||g;if(!T.State.isMobile&&n.hidden!==r){var I=function(){n.hidden?(A=function(e){return setTimeout(function(){e(!0)},16)},p()):A=t.requestAnimationFrame||g};I(),n.addEventListener("visibilitychange",I)}return e.Velocity=T,e!==t&&(e.fn.velocity=P,e.fn.velocity.defaults=T.defaults),h.each(["Down","Up"],function(e,t){T.Redirects["slide"+t]=function(e,n,i,o,s,a){var l=h.extend({},n),u=l.begin,c=l.complete,f={},p={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""};l.display===r&&(l.display="Down"===t?"inline"===T.CSS.Values.getDisplayType(e)?"inline-block":"block":"none"),l.begin=function(){0===i&&u&&u.call(s,s);for(var n in p)if(p.hasOwnProperty(n)){f[n]=e.style[n];var r=k.getPropertyValue(e,n);p[n]="Down"===t?[r,0]:[0,r]}f.overflow=e.style.overflow,e.style.overflow="hidden"},l.complete=function(){for(var t in f)f.hasOwnProperty(t)&&(e.style[t]=f[t]);i===o-1&&(c&&c.call(s,s),a&&a.resolver(s))},T(e,p,l)}}),h.each(["In","Out"],function(e,t){T.Redirects["fade"+t]=function(e,n,i,o,s,a){var l=h.extend({},n),u=l.complete,c={opacity:"In"===t?1:0};0!==i&&(l.begin=null),l.complete=i!==o-1?null:function(){u&&u.call(s,s),a&&a.resolver(s)},l.display===r&&(l.display="In"===t?"auto":"none"),T(this,c,l)}}),T}(window.jQuery||window.Zepto||window,window,window?window.document:void 0)}),function(e){"use strict";e.fn.fitVids=function(t){var n={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("div");i.innerHTML='<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',r.appendChild(i.childNodes[1])}return t&&e.extend(n,t),this.each(function(){var t=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];n.customSelector&&t.push(n.customSelector);var r=".fitvidsignore";n.ignore&&(r=r+", "+n.ignore);var i=e(this).find(t.join(","));i=i.not("object object"),i=i.not(r),i.each(function(){var t=e(this);if(!(t.parents(r).length>0||"embed"===this.tagName.toLowerCase()&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length)){t.css("height")||t.css("width")||!isNaN(t.attr("height"))&&!isNaN(t.attr("width"))||(t.attr("height",9),t.attr("width",16));var n="object"===this.tagName.toLowerCase()||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height(),i=isNaN(parseInt(t.attr("width"),10))?t.width():parseInt(t.attr("width"),10),o=n/i;if(!t.attr("name")){var s="fitvid"+e.fn.fitVids._count;t.attr("name",s),e.fn.fitVids._count++}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*o+"%"),t.removeAttr("height").removeAttr("width")}})})},e.fn.fitVids._count=0}(window.jQuery||window.Zepto),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).cssVars=t()}(this,function(){"use strict";function e(){return(e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function t(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function n(e){function t(){return!("<"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").trim().charAt(0))}function n(e,t){o.onError(e,s[t],t)}function r(e,t){var n=o.onSuccess(e,s[t],t);e=!1===n?"":n||e,a[t]=e,-1===a.indexOf(null)&&o.onComplete(a)}var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o={mimeType:i.mimeType||null,onBeforeSend:i.onBeforeSend||Function.prototype,onSuccess:i.onSuccess||Function.prototype,onError:i.onError||Function.prototype,onComplete:i.onComplete||Function.prototype},s=Array.isArray(e)?e:[e],a=Array.apply(null,Array(s.length)).map(function(e){return null}),l=document.createElement("a");s.forEach(function(e,i){if(l.setAttribute("href",e),l.href=String(l.href),Boolean(document.all&&!window.atob)&&l.host.split(":")[0]!==location.host.split(":")[0])if(l.protocol===location.protocol){var s=new XDomainRequest;s.open("GET",e),s.timeout=0,s.onprogress=Function.prototype,s.ontimeout=Function.prototype,s.onload=function(){t(s.responseText)?r(s.responseText,i):n(s,i)},s.onerror=function(e){n(s,i)},setTimeout(function(){s.send()},0)}else console.warn("Internet Explorer 9 Cross-Origin (CORS) requests must use the same protocol (".concat(e,")")),n(null,i);else{var a=new XMLHttpRequest;a.open("GET",e),o.mimeType&&a.overrideMimeType&&a.overrideMimeType(o.mimeType),o.onBeforeSend(a,e,i),a.onreadystatechange=function(){4===a.readyState&&(200===a.status&&t(a.responseText)?r(a.responseText,i):n(a,i))},a.send()}})}function r(e){function t(){if(-1===u.indexOf(null)){var e=u.join("");a.onComplete(e,u,l)}}function r(e,r,i,s){var l=a.onSuccess(e,i,s);!function e(t,r,i,s){var l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[],c=o(t,i,u);c.rules.length?n(c.absoluteUrls,{onBeforeSend:function(e,t,n){a.onBeforeSend(e,r,t)},onSuccess:function(e,t,n){var i=a.onSuccess(e,r,t),s=o(e=!1===i?"":i||e,t,u);return s.rules.forEach(function(t,n){e=e.replace(t,s.absoluteRules[n])}),e},onError:function(n,o,a){l.push({xhr:n,url:o}),u.push(c.rules[a]),e(t,r,i,s,l,u)},onComplete:function(n){n.forEach(function(e,n){t=t.replace(c.rules[n],e)}),e(t,r,i,s,l,u)}}):s(t,l)}(e=void 0!==l&&!1===Boolean(l)?"":l||e,i,s,function(e,n){null===u[r]&&(n.forEach(function(e){return a.onError(e.xhr,i,e.url)}),!a.filter||a.filter.test(e)?u[r]=e:u[r]="",t())})}function o(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r={};return r.rules=(e.replace(s.cssComments,"").match(s.cssImports)||[]).filter(function(e){return-1===n.indexOf(e)}),r.urls=r.rules.map(function(e){return e.replace(s.cssImports,"$1")}),r.absoluteUrls=r.urls.map(function(e){return i(e,t)}),r.absoluteRules=r.rules.map(function(e,n){var o=r.urls[n],s=i(r.absoluteUrls[n],t);return e.replace(o,s)}),r}var s={cssComments:/\/\*[\s\S]+?\*\//g,cssImports:/(?:@import\s*)(?:url\(\s*)?(?:['"])([^'"]*)(?:['"])(?:\s*\))?(?:[^;]*;)/g},a={rootElement:e.rootElement||document,include:e.include||'style,link[rel="stylesheet"]',exclude:e.exclude||null,filter:e.filter||null,useCSSOM:e.useCSSOM||!1,onBeforeSend:e.onBeforeSend||Function.prototype,onSuccess:e.onSuccess||Function.prototype,onError:e.onError||Function.prototype,onComplete:e.onComplete||Function.prototype},l=Array.apply(null,a.rootElement.querySelectorAll(a.include)).filter(function(e){return t=e,n=a.exclude,!(t.matches||t.matchesSelector||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector).call(t,n);var t,n}),u=Array.apply(null,Array(l.length)).map(function(e){return null});l.length?l.forEach(function(e,o){var s=e.getAttribute("href"),l=e.getAttribute("rel"),c="LINK"===e.nodeName&&s&&l&&"stylesheet"===l.toLowerCase(),f="STYLE"===e.nodeName;if(c)n(s,{mimeType:"text/css",onBeforeSend:function(t,n,r){a.onBeforeSend(t,e,n)},onSuccess:function(t,n,a){var l=i(s,location.href);r(t,o,e,l)},onError:function(n,r,i){u[o]="",a.onError(n,e,r),t()}});else if(f){var p=e.textContent;a.useCSSOM&&(p=Array.apply(null,e.sheet.cssRules).map(function(e){return e.cssText}).join("")),r(p,o,e,location.href)}else u[o]="",t()}):a.onComplete("",[])}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location.href,n=document.implementation.createHTMLDocument(""),r=n.createElement("base"),i=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(i),r.href=t,i.href=e,i.href}function o(e,t,n){e instanceof RegExp&&(e=s(e,n)),t instanceof RegExp&&(t=s(t,n));var r=a(e,t,n);return r&&{start:r[0],end:r[1],pre:n.slice(0,r[0]),body:n.slice(r[0]+e.length,r[1]),post:n.slice(r[1]+t.length)}}function s(e,t){var n=t.match(e);return n?n[0]:null}function a(e,t,n){var r,i,o,s,a,l=n.indexOf(e),u=n.indexOf(t,l+1),c=l;if(l>=0&&u>0){for(r=[],o=n.length;c>=0&&!a;)c==l?(r.push(c),l=n.indexOf(e,c+1)):1==r.length?a=[r.pop(),u]:((i=r.pop())<o&&(o=i,s=u),u=n.indexOf(t,c+1)),c=l<u&&l>=0?l:u;r.length&&(a=[o,s])}return a}function l(t){function n(e){throw new Error("CSS parse error: ".concat(e))}function r(e){var n=e.exec(t);if(n)return t=t.slice(n[0].length),n}function i(){return r(/^{\s*/)}function o(){return r(/^}/)}function s(){r(/^\s*/)}function a(){if(s(),"/"===t[0]&&"*"===t[1]){for(var e=2;t[e]&&("*"!==t[e]||"/"!==t[e+1]);)e++;if(!t[e])return n("end of comment is missing");var r=t.slice(2,e);return t=t.slice(e+2),{type:"comment",comment:r}}}function l(){for(var e,t=[];e=a();)t.push(e);return v.removeComments?[]:t}function u(){for(s();"}"===t[0];)n("extra closing bracket");var e=r(/^(("(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^{])+)/);if(e)return e[0].trim().replace(/\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*\/+/g,"").replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g,function(e){return e.replace(/,/g,"‌")}).split(/\s*(?![^(]*\)),\s*/).map(function(e){return e.replace(/\u200C/g,",")})}function c(){r(/^([;\s]*)+/);var e=/\/\*[^*]*\*+([^\/*][^*]*\*+)*\//g,t=r(/^(\*?[-#\/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);if(t){if(t=t[0].trim(),!r(/^:\s*/))return n("property missing ':'");var i=r(/^((?:\/\*.*?\*\/|'(?:\\'|.)*?'|"(?:\\"|.)*?"|\((\s*'(?:\\'|.)*?'|"(?:\\"|.)*?"|[^)]*?)\s*\)|[^};])+)/),o={type:"declaration",property:t.replace(e,""),value:i?i[0].replace(e,"").trim():""};return r(/^[;\s]*/),o}}function f(){if(!i())return n("missing '{'");for(var e,t=l();e=c();)t.push(e),t=t.concat(l());return o()?t:n("missing '}'")}function p(){s();for(var e,t=[];e=r(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/);)t.push(e[1]),r(/^,\s*/);if(t.length)return{type:"keyframe",values:t,declarations:f()}}function h(){if(s(),"@"===t[0]){var e=function(){var e=r(/^@([-\w]+)?keyframes\s*/);if(e){var t=e[1];if(!(e=r(/^([-\w]+)\s*/)))return n("@keyframes missing name");var s,a=e[1];if(!i())return n("@keyframes missing '{'");for(var u=l();s=p();)u.push(s),u=u.concat(l());return o()?{type:"keyframes",name:a,vendor:t,keyframes:u}:n("@keyframes missing '}'")}}()||function(){var e=r(/^@supports *([^{]+)/);if(e)return{type:"supports",supports:e[1].trim(),rules:g()}}()||function(){if(r(/^@host\s*/))return{type:"host",rules:g()}}()||function(){var e=r(/^@media *([^{]+)/);if(e)return{type:"media",media:e[1].trim(),rules:g()}}()||function(){var e=r(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);if(e)return{type:"custom-media",name:e[1].trim(),media:e[2].trim()}}()||function(){if(r(/^@page */))return{type:"page",selectors:u()||[],declarations:f()}}()||function(){var e=r(/^@([-\w]+)?document *([^{]+)/);if(e)return{type:"document",document:e[2].trim(),vendor:e[1]?e[1].trim():null,rules:g()}}()||function(){if(r(/^@font-face\s*/))return{type:"font-face",declarations:f()}}()||function(){var e=r(/^@(import|charset|namespace)\s*([^;]+);/);if(e)return{type:e[1],name:e[2].trim()}}();if(e&&v.onlyVars){var a=!1;return a=e.declarations?e.declarations.some(function(e){return/var\(/.test(e.value)}):(e.keyframes||e.rules||[]).some(function(e){return(e.declarations||[]).some(function(e){return/var\(/.test(e.value)})}),a?e:{}}return e}}function m(){if(v.onlyVars){var e=d("{","}",t);if(e){var r=-1!==e.pre.indexOf(":root")&&/--\S*\s*:/.test(e.body),i=/var\(/.test(e.body);if(!r&&!i)return t=t.slice(e.end+1),{}}}var o=u()||[],s=v.onlyVars?f().filter(function(e){var t=o.some(function(e){return-1!==e.indexOf(":root")})&&/^--\S/.test(e.property),n=/var\(/.test(e.value);return t||n}):f();return o.length||n("selector missing"),{type:"rule",selectors:o,declarations:s}}function g(e){if(!e&&!i())return n("missing '{'");for(var r,s=l();t.length&&(e||"}"!==t[0])&&(r=h()||m());)r.type&&s.push(r),s=s.concat(l());return e||o()?s:n("missing '}'")}var v=e({},{onlyVars:!1,removeComments:!1},arguments.length>1&&void 0!==arguments[1]?arguments[1]:{});return{type:"stylesheet",stylesheet:{rules:g(!0),errors:[]}}}function u(t){var n,r,i=e({},{fixNestedCalc:!0,onlyVars:!1,persist:!1,preserve:!1,variables:{},onWarning:function(){}},arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}),o=i.persist?g.dom:g.temp=JSON.parse(JSON.stringify(g.dom)),s=l(t,{onlyVars:i.onlyVars});if(s.stylesheet.rules.forEach(function(e){var t=[];if("rule"===e.type&&1===e.selectors.length&&":root"===e.selectors[0]&&(e.declarations.forEach(function(e,n){var r=e.property,i=e.value;r&&0===r.indexOf(h)&&(o[r]=i,t.push(n))}),!i.preserve))for(var n=t.length-1;n>=0;n--)e.declarations.splice(t[n],1)}),Object.keys(g.user).forEach(function(e){o[e]=g.user[e]}),Object.keys(i.variables).length){var a={declarations:[],selectors:[":root"],type:"rule"};Object.keys(i.variables).forEach(function(e){var t="--".concat(e.replace(/^-+/,"")),n=i.variables[e];i.persist&&(g.user[t]=n),o[t]!==n&&(o[t]=n,a.declarations.push({type:"declaration",property:t,value:n}))}),
i.preserve&&a.declarations.length&&s.stylesheet.rules.push(a)}return function e(t,n){t.rules.forEach(function(r){r.rules?e(r,n):r.keyframes?r.keyframes.forEach(function(e){"keyframe"===e.type&&n(e.declarations,r)}):r.declarations&&n(r.declarations,t)})}(s.stylesheet,function(e,t){for(var n,r,s,a=0;a<e.length;a++)s=(n=e[a]).value,"declaration"===n.type&&s&&-1!==s.indexOf(m+"(")&&(r=c(s,o,i))!==n.value&&(i.preserve?(e.splice(a,0,{type:n.type,property:n.property,value:r}),a++):n.value=r)}),i.fixNestedCalc&&(n=s.stylesheet.rules,r=/(-[a-z]+-)?calc\(/,n.forEach(function(e){e.declarations&&e.declarations.forEach(function(e){for(var t=e.value,n="";r.test(t);){var i=d("calc(",")",t||"");for(t=t.slice(i.end);r.test(i.body);){var o=d(r,")",i.body);i.body="".concat(o.pre,"(").concat(o.body,")").concat(o.post)}n+="".concat(i.pre,"calc(").concat(i.body),n+=r.test(t)?"":")".concat(i.post)}e.value=n||e.value})})),function(e){function t(e){for(var t="",o=0;o<e.length;o++){var s=e[o];r&&r(s);var a=i[s.type](s);a&&(t+=a,a.length&&s.selectors&&(t+=n))}return t}var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,i={charset:function(e){return"@charset "+e.name+";"},comment:function(e){return 0===e.comment.indexOf("__CSSVARSPONYFILL")?"/*"+e.comment+"*/":""},"custom-media":function(e){return"@custom-media "+e.name+" "+e.media+";"},declaration:function(e){return e.property+":"+e.value+";"},document:function(e){return"@"+(e.vendor||"")+"document "+e.document+"{"+t(e.rules)+"}"},"font-face":function(e){return"@font-face{"+t(e.declarations)+"}"},host:function(e){return"@host{"+t(e.rules)+"}"},import:function(e){return"@import "+e.name+";"},keyframe:function(e){return e.values.join(",")+"{"+t(e.declarations)+"}"},keyframes:function(e){return"@"+(e.vendor||"")+"keyframes "+e.name+"{"+t(e.keyframes)+"}"},media:function(e){return"@media "+e.media+"{"+t(e.rules)+"}"},namespace:function(e){return"@namespace "+e.name+";"},page:function(e){return"@page "+(e.selectors.length?e.selectors.join(", "):"")+"{"+t(e.declarations)+"}"},rule:function(e){var n=e.declarations;if(n.length)return e.selectors.join(",")+"{"+t(n)+"}"},supports:function(e){return"@supports "+e.supports+"{"+t(e.rules)+"}"}};return t(e.stylesheet.rules)}(s)}function c(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0;if(-1===e.indexOf("var("))return e;var i=d("(",")",e),o="CSS transform warning:";return i?"var"===i.pre.slice(-3)?0===i.body.trim().length?(n.onWarning("".concat(o," var() must contain a non-whitespace string")),e):i.pre.slice(0,-3)+function(e){var i=e.split(",")[0].replace(/[\s\n\t]/g,""),s=(e.match(/(?:\s*,\s*){1}(.*)?/)||[])[1],a=t.hasOwnProperty(i)?String(t[i]):void 0,l=a||(s?String(s):void 0),u=r||e;return a||n.onWarning("".concat(o,' variable "').concat(i,'" is undefined')),l&&"undefined"!==l&&l.length>0?c(l,t,n,u):"var(".concat(u,")")}(i.body)+c(i.post,t,n):i.pre+"(".concat(c(i.body,t,n),")")+c(i.post,t,n):(-1!==e.indexOf("var(")&&n.onWarning("".concat(o,' missing closing ")" in the value "').concat(e,'"')),e)}function f(){function n(e,t,n,r){s.silent||console.error("".concat(e,"\n"),t),s.onError(e,t,n,r)}function i(e){s.silent||console.warn(e),s.onWarning(e)}var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=e({},x,o),a=v;if(s.exclude="#".concat(a)+(s.exclude?",".concat(s.exclude):""),y)if("loading"!==document.readyState){var l=s.shadowDOM||s.rootElement.shadowRoot||s.rootElement.host;if(b&&s.onlyLegacy){if(s.updateDOM){var c=s.rootElement.host||(s.rootElement===document?document.documentElement:s.rootElement);Object.keys(s.variables).forEach(function(e){var t="--".concat(e.replace(/^-+/,"")),n=s.variables[e];c.style.setProperty(t,n)})}}else l&&!C?r({rootElement:x.rootElement,include:x.include,exclude:s.exclude,onSuccess:function(e,t,n){return(e.match(w.cssRootRules)||[]).join("")||!1},onComplete:function(e,t,n){u(e,{persist:!0}),C=!0,f(s)}}):(s.watch?function(e,t){if(window.MutationObserver){var n=function(e){return"LINK"===e.tagName&&-1!==(e.getAttribute("rel")||"").indexOf("stylesheet")},r=function(e){return"STYLE"===e.tagName&&(!t||e.id!==t)},i=null;S&&S.disconnect(),e.watch=x.watch,(S=new MutationObserver(function(t){var o=!1;t.forEach(function(t){if("attributes"===t.type)o=n(t.target)||r(t.target);else if("childList"===t.type){var s=Array.apply(null,t.addedNodes),a=Array.apply(null,t.removedNodes);o=[].concat(s,a).some(function(e){var t=n(e)&&!e.disabled,i=r(e)&&!e.disabled&&w.cssVars.test(e.textContent);return t||i})}o&&(clearTimeout(i),i=setTimeout(function(){f(e)},1))})})).observe(document.documentElement,{attributes:!0,attributeFilter:["disabled","href"],childList:!0,subtree:!0})}}(s,a):!1===s.watch&&S&&S.disconnect(),r({rootElement:s.rootElement,include:s.include,exclude:s.exclude,filter:s.onlyVars?w.cssVars:null,onBeforeSend:s.onBeforeSend,onSuccess:function(e,t,n){var r=s.onSuccess(e,t,n);return e=void 0!==r&&!1===Boolean(r)?"":r||e,s.updateURLs&&(e.replace(w.cssComments,"").match(w.cssUrls)||[]).forEach(function(t){var r=t.replace(w.cssUrls,"$1"),i=p(r,n);e=e.replace(t,t.replace(r,i))}),e},onError:function(e,t,r){var i=e.responseURL||p(r,location.href),o=e.statusText?"(".concat(e.statusText,")"):"Unspecified Error"+(0===e.status?" (possibly CORS related)":"");n("CSS XHR Error: ".concat(i," ").concat(e.status," ").concat(o),t,e,i)},onComplete:function(r,o,l){var c=null;r=o.map(function(e,t){return w.cssVars.test(e)?e:"/*__CSSVARSPONYFILL-".concat(t,"__*/")}).join("");try{r=u(r,{fixNestedCalc:s.fixNestedCalc,onlyVars:s.onlyVars,persist:s.updateDOM,preserve:s.preserve,variables:s.variables,onWarning:i});var p=w.cssKeyframes.test(r);if(r=r.replace(/\/\*__CSSVARSPONYFILL-(\d+)__\*\//g,function(e,t){return o[t]}),s.updateDOM&&l&&l.length){var d=l[l.length-1];(c=s.rootElement.querySelector("#".concat(a))||document.createElement("style")).setAttribute("id",a),c.textContent!==r&&(c.textContent=r),d.nextSibling!==c&&d.parentNode&&d.parentNode.insertBefore(c,d.nextSibling),p&&function(e){var t=["animation-name","-moz-animation-name","-webkit-animation-name"].filter(function(e){return getComputedStyle(document.body)[e]})[0];if(t){for(var n=e.getElementsByTagName("*"),r=[],i=0,o=n.length;i<o;i++){var s=n[i];"none"!==getComputedStyle(s)[t]&&(s.style[t]+="__CSSVARSPONYFILL-KEYFRAMES__",r.push(s))}document.body.offsetHeight;for(var a=0,l=r.length;a<l;a++){var u=r[a].style;u[t]=u[t].replace("__CSSVARSPONYFILL-KEYFRAMES__","")}}}(s.rootElement)}}catch(e){var h=!1;o.forEach(function(e,t){try{e=u(e,s)}catch(e){var r=l[t-0];h=!0,n(e.message,r)}}),h||n(e.message||e)}if(s.shadowDOM)for(var m,v=[s.rootElement].concat(t(s.rootElement.querySelectorAll("*"))),y=0;m=v[y];++y)m.shadowRoot&&m.shadowRoot.querySelector("style")&&f(e({},s,{rootElement:m.shadowRoot,variables:g.dom}));s.onComplete(r,c,JSON.parse(JSON.stringify(s.updateDOM?g.dom:g.temp)))}}))}else document.addEventListener("DOMContentLoaded",function e(t){f(o),document.removeEventListener("DOMContentLoaded",e)})}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location.href,n=document.implementation.createHTMLDocument(""),r=n.createElement("base"),i=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(i),r.href=t,i.href=e,i.href}var d=o;o.range=a;var h="--",m="var",g={dom:{},temp:{},user:{}},v="css-vars-ponyfill",y="undefined"!=typeof window,b=y&&window.CSS&&window.CSS.supports&&window.CSS.supports("(--a: 0)"),x={rootElement:y?document:null,include:"style,link[rel=stylesheet]",exclude:"",fixNestedCalc:!0,onlyLegacy:!0,onlyVars:!1,preserve:!1,shadowDOM:!1,silent:!1,updateDOM:!0,updateURLs:!0,variables:{},watch:null,onBeforeSend:function(){},onSuccess:function(){},onWarning:function(){},onError:function(){},onComplete:function(){}},w={cssComments:/\/\*[\s\S]+?\*\//g,cssKeyframes:/@(?:-\w*-)?keyframes/,cssRootRules:/(?::root\s*{\s*[^}]*})/g,cssUrls:/url\((?!['"]?(?:data|http|\/\/):)['"]?([^'")]*)['"]?\)/g,cssVars:/(?:(?::root\s*{\s*[^;]*;*\s*)|(?:var\(\s*))(--[^:)]+)(?:\s*[:)])/},S=null,C=!1;return f}),/*! jQuery UI - v1.12.1 - 2020-02-11
* http://jqueryui.com
* Includes: focusable.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(e){for(var t=e.css("visibility");"inherit"===t;)e=e.parent(),t=e.css("visibility");return"hidden"!==t}e.ui=e.ui||{};e.ui.version="1.12.1";/*!
 * jQuery UI Focusable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
e.ui.focusable=function(n,r){var i,o,s,a,l,u=n.nodeName.toLowerCase();return"area"===u?(i=n.parentNode,o=i.name,!(!n.href||!o||"map"!==i.nodeName.toLowerCase())&&(s=e("img[usemap='#"+o+"']"),s.length>0&&s.is(":visible"))):(/^(input|select|textarea|button|object)$/.test(u)?(a=!n.disabled)&&(l=e(n).closest("fieldset")[0])&&(a=!l.disabled):a="a"===u?n.href||r:r,a&&e(n).is(":visible")&&t(e(n)))},e.extend(e.expr[":"],{focusable:function(t){return e.ui.focusable(t,null!=e.attr(t,"tabindex"))}});e.ui.focusable}),/*!
 * Masonry PACKAGED v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
function(e,t){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(n){return t(e,n)}):"object"==typeof module&&module.exports?module.exports=t(e,require("jquery")):e.jQueryBridget=t(e,e.jQuery)}(window,function(e,t){"use strict";function n(n,o,a){function l(e,t,r){var i,o="$()."+n+'("'+t+'")';return e.each(function(e,l){var u=a.data(l,n);if(!u)return void s(n+" not initialized. Cannot call methods, i.e. "+o);var c=u[t];if(!c||"_"==t.charAt(0))return void s(o+" is not a valid method");var f=c.apply(u,r);i=void 0===i?f:i}),void 0!==i?i:e}function u(e,t){e.each(function(e,r){var i=a.data(r,n);i?(i.option(t),i._init()):(i=new o(r,t),a.data(r,n,i))})}(a=a||t||e.jQuery)&&(o.prototype.option||(o.prototype.option=function(e){a.isPlainObject(e)&&(this.options=a.extend(!0,this.options,e))}),a.fn[n]=function(e){if("string"==typeof e){return l(this,e,i.call(arguments,1))}return u(this,e),this},r(a))}function r(e){!e||e&&e.bridget||(e.bridget=n)}var i=Array.prototype.slice,o=e.console,s=void 0===o?function(){}:function(e){o.error(e)};return r(t||e.jQuery),n}),function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var n=this._events=this._events||{},r=n[e]=n[e]||[];return-1==r.indexOf(t)&&r.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var n=this._onceEvents=this._onceEvents||{};return(n[e]=n[e]||{})[t]=!0,this}},t.off=function(e,t){var n=this._events&&this._events[e];if(n&&n.length){var r=n.indexOf(t);return-1!=r&&n.splice(r,1),this}},t.emitEvent=function(e,t){var n=this._events&&this._events[e];if(n&&n.length){n=n.slice(0),t=t||[];for(var r=this._onceEvents&&this._onceEvents[e],i=0;i<n.length;i++){var o=n[i];r&&r[o]&&(this.off(e,o),delete r[o]),o.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e}),function(e,t){"function"==typeof define&&define.amd?define("get-size/get-size",t):"object"==typeof module&&module.exports?module.exports=t():e.getSize=t()}(window,function(){"use strict";function e(e){var t=parseFloat(e);return-1==e.indexOf("%")&&!isNaN(t)&&t}function t(){}function n(){for(var e={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},t=0;u>t;t++){e[l[t]]=0}return e}function r(e){var t=getComputedStyle(e);return t||a("Style returned "+t+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),t}function i(){if(!c){c=!0;var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style.boxSizing="border-box";var n=document.body||document.documentElement;n.appendChild(t);var i=r(t);s=200==Math.round(e(i.width)),o.isBoxSizeOuter=s,n.removeChild(t)}}function o(t){if(i(),"string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var o=r(t);if("none"==o.display)return n();var a={};a.width=t.offsetWidth,a.height=t.offsetHeight;for(var c=a.isBorderBox="border-box"==o.boxSizing,f=0;u>f;f++){var p=l[f],d=o[p],h=parseFloat(d);a[p]=isNaN(h)?0:h}var m=a.paddingLeft+a.paddingRight,g=a.paddingTop+a.paddingBottom,v=a.marginLeft+a.marginRight,y=a.marginTop+a.marginBottom,b=a.borderLeftWidth+a.borderRightWidth,x=a.borderTopWidth+a.borderBottomWidth,w=c&&s,S=e(o.width);!1!==S&&(a.width=S+(w?0:m+b));var C=e(o.height);return!1!==C&&(a.height=C+(w?0:g+x)),a.innerWidth=a.width-(m+b),a.innerHeight=a.height-(g+x),a.outerWidth=a.width+v,a.outerHeight=a.height+y,a}}var s,a="undefined"==typeof console?t:function(e){console.error(e)},l=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],u=l.length,c=!1;return o}),function(e,t){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",t):"object"==typeof module&&module.exports?module.exports=t():e.matchesSelector=t()}(window,function(){"use strict";var e=function(){var e=window.Element.prototype;if(e.matches)return"matches";if(e.matchesSelector)return"matchesSelector";for(var t=["webkit","moz","ms","o"],n=0;n<t.length;n++){var r=t[n],i=r+"MatchesSelector";if(e[i])return i}}();return function(t,n){return t[e](n)}}),function(e,t){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(n){return t(e,n)}):"object"==typeof module&&module.exports?module.exports=t(e,require("desandro-matches-selector")):e.fizzyUIUtils=t(e,e.matchesSelector)}(window,function(e,t){var n={};n.extend=function(e,t){for(var n in t)e[n]=t[n];return e},n.modulo=function(e,t){return(e%t+t)%t};var r=Array.prototype.slice;n.makeArray=function(e){return Array.isArray(e)?e:null===e||void 0===e?[]:"object"==typeof e&&"number"==typeof e.length?r.call(e):[e]},n.removeFrom=function(e,t){var n=e.indexOf(t);-1!=n&&e.splice(n,1)},n.getParent=function(e,n){for(;e.parentNode&&e!=document.body;)if(e=e.parentNode,t(e,n))return e},n.getQueryElement=function(e){return"string"==typeof e?document.querySelector(e):e},n.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},n.filterFindElements=function(e,r){e=n.makeArray(e);var i=[];return e.forEach(function(e){if(e instanceof HTMLElement){if(!r)return void i.push(e);t(e,r)&&i.push(e);for(var n=e.querySelectorAll(r),o=0;o<n.length;o++)i.push(n[o])}}),i},n.debounceMethod=function(e,t,n){n=n||100;var r=e.prototype[t],i=t+"Timeout";e.prototype[t]=function(){var e=this[i];clearTimeout(e);var t=arguments,o=this;this[i]=setTimeout(function(){r.apply(o,t),delete o[i]},n)}},n.docReady=function(e){var t=document.readyState;"complete"==t||"interactive"==t?setTimeout(e):document.addEventListener("DOMContentLoaded",e)},n.toDashed=function(e){return e.replace(/(.)([A-Z])/g,function(e,t,n){return t+"-"+n}).toLowerCase()};var i=e.console;return n.htmlInit=function(t,r){n.docReady(function(){var o=n.toDashed(r),s="data-"+o,a=document.querySelectorAll("["+s+"]"),l=document.querySelectorAll(".js-"+o),u=n.makeArray(a).concat(n.makeArray(l)),c=s+"-options",f=e.jQuery;u.forEach(function(e){var n,o=e.getAttribute(s)||e.getAttribute(c);try{n=o&&JSON.parse(o)}catch(t){return void(i&&i.error("Error parsing "+s+" on "+e.className+": "+t))}var a=new t(e,n);f&&f.data(e,r,a)})})},n}),function(e,t){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],t):"object"==typeof module&&module.exports?module.exports=t(require("ev-emitter"),require("get-size")):(e.Outlayer={},e.Outlayer.Item=t(e.EvEmitter,e.getSize))}(window,function(e,t){"use strict";function n(e){for(var t in e)return!1;return null,!0}function r(e,t){e&&(this.element=e,this.layout=t,this.position={x:0,y:0},this._create())}var i=document.documentElement.style,o="string"==typeof i.transition?"transition":"WebkitTransition",s="string"==typeof i.transform?"transform":"WebkitTransform",a={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[o],l={transform:s,transition:o,transitionDuration:o+"Duration",transitionProperty:o+"Property",transitionDelay:o+"Delay"},u=r.prototype=Object.create(e.prototype);u.constructor=r,u._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},u.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},u.getSize=function(){this.size=t(this.element)},u.css=function(e){var t=this.element.style;for(var n in e){t[l[n]||n]=e[n]}},u.getPosition=function(){var e=getComputedStyle(this.element),t=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),r=e[t?"left":"right"],i=e[n?"top":"bottom"],o=parseFloat(r),s=parseFloat(i),a=this.layout.size;-1!=r.indexOf("%")&&(o=o/100*a.width),-1!=i.indexOf("%")&&(s=s/100*a.height),o=isNaN(o)?0:o,s=isNaN(s)?0:s,o-=t?a.paddingLeft:a.paddingRight,s-=n?a.paddingTop:a.paddingBottom,this.position.x=o,this.position.y=s},u.layoutPosition=function(){var e=this.layout.size,t={},n=this.layout._getOption("originLeft"),r=this.layout._getOption("originTop"),i=n?"paddingLeft":"paddingRight",o=n?"left":"right",s=n?"right":"left",a=this.position.x+e[i];t[o]=this.getXValue(a),t[s]="";var l=r?"paddingTop":"paddingBottom",u=r?"top":"bottom",c=r?"bottom":"top",f=this.position.y+e[l];t[u]=this.getYValue(f),t[c]="",this.css(t),this.emitEvent("layout",[this])},u.getXValue=function(e){var t=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!t?e/this.layout.size.width*100+"%":e+"px"},u.getYValue=function(e){var t=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&t?e/this.layout.size.height*100+"%":e+"px"},u._transitionTo=function(e,t){this.getPosition();var n=this.position.x,r=this.position.y,i=e==this.position.x&&t==this.position.y;if(this.setPosition(e,t),i&&!this.isTransitioning)return void this.layoutPosition();var o=e-n,s=t-r,a={};a.transform=this.getTranslate(o,s),this.transition({to:a,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},u.getTranslate=function(e,t){var n=this.layout._getOption("originLeft"),r=this.layout._getOption("originTop");return e=n?e:-e,t=r?t:-t,"translate3d("+e+"px, "+t+"px, 0)"},u.goTo=function(e,t){this.setPosition(e,t),this.layoutPosition()},u.moveTo=u._transitionTo,u.setPosition=function(e,t){this.position.x=parseFloat(e),this.position.y=parseFloat(t)},u._nonTransition=function(e){this.css(e.to),e.isCleaning&&this._removeStyles(e.to);for(var t in e.onTransitionEnd)e.onTransitionEnd[t].call(this)},u.transition=function(e){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(e);var t=this._transn;for(var n in e.onTransitionEnd)t.onEnd[n]=e.onTransitionEnd[n];for(n in e.to)t.ingProperties[n]=!0,e.isCleaning&&(t.clean[n]=!0);if(e.from){this.css(e.from);this.element.offsetHeight;null}this.enableTransition(e.to),this.css(e.to),this.isTransitioning=!0};var c="opacity,"+function(e){return e.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()})}(s);u.enableTransition=function(){if(!this.isTransitioning){var e=this.layout.options.transitionDuration;e="number"==typeof e?e+"ms":e,this.css({transitionProperty:c,transitionDuration:e,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(a,this,!1)}},u.onwebkitTransitionEnd=function(e){this.ontransitionend(e)},u.onotransitionend=function(e){this.ontransitionend(e)};var f={"-webkit-transform":"transform"};u.ontransitionend=function(e){if(e.target===this.element){var t=this._transn,r=f[e.propertyName]||e.propertyName;if(delete t.ingProperties[r],n(t.ingProperties)&&this.disableTransition(),r in t.clean&&(this.element.style[e.propertyName]="",delete t.clean[r]),r in t.onEnd){t.onEnd[r].call(this),delete t.onEnd[r]}this.emitEvent("transitionEnd",[this])}},u.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(a,this,!1),this.isTransitioning=!1},u._removeStyles=function(e){var t={};for(var n in e)t[n]="";this.css(t)};var p={transitionProperty:"",transitionDuration:"",transitionDelay:""};return u.removeTransitionStyles=function(){this.css(p)},u.stagger=function(e){e=isNaN(e)?0:e,this.staggerDelay=e+"ms"},u.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},u.remove=function(){return o&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},u.reveal=function(){delete this.isHidden,this.css({display:""});var e=this.layout.options,t={};t[this.getHideRevealTransitionEndProperty("visibleStyle")]=this.onRevealTransitionEnd,this.transition({from:e.hiddenStyle,to:e.visibleStyle,isCleaning:!0,onTransitionEnd:t})},u.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},u.getHideRevealTransitionEndProperty=function(e){var t=this.layout.options[e];if(t.opacity)return"opacity";for(var n in t)return n},u.hide=function(){this.isHidden=!0,this.css({display:""});var e=this.layout.options,t={};t[this.getHideRevealTransitionEndProperty("hiddenStyle")]=this.onHideTransitionEnd,this.transition({from:e.visibleStyle,to:e.hiddenStyle,isCleaning:!0,onTransitionEnd:t})},u.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},u.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},r}),function(e,t){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(n,r,i,o){return t(e,n,r,i,o)}):"object"==typeof module&&module.exports?module.exports=t(e,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):e.Outlayer=t(e,e.EvEmitter,e.getSize,e.fizzyUIUtils,e.Outlayer.Item)}(window,function(e,t,n,r,i){"use strict";function o(e,t){var n=r.getQueryElement(e);if(!n)return void(l&&l.error("Bad element for "+this.constructor.namespace+": "+(n||e)));this.element=n,u&&(this.$element=u(this.element)),this.options=r.extend({},this.constructor.defaults),this.option(t);var i=++f;this.element.outlayerGUID=i,p[i]=this,this._create(),this._getOption("initLayout")&&this.layout()}function s(e){function t(){e.apply(this,arguments)}return t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t}function a(e){if("number"==typeof e)return e;var t=e.match(/(^\d*\.?\d*)(\w*)/),n=t&&t[1],r=t&&t[2];return n.length?(n=parseFloat(n))*(h[r]||1):0}var l=e.console,u=e.jQuery,c=function(){},f=0,p={};o.namespace="outlayer",o.Item=i,o.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var d=o.prototype;r.extend(d,t.prototype),d.option=function(e){r.extend(this.options,e)},d._getOption=function(e){var t=this.constructor.compatOptions[e];return t&&void 0!==this.options[t]?this.options[t]:this.options[e]},o.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},d._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),r.extend(this.element.style,this.options.containerStyle),this._getOption("resize")&&this.bindResize()},d.reloadItems=function(){this.items=this._itemize(this.element.children)},d._itemize=function(e){for(var t=this._filterFindItemElements(e),n=this.constructor.Item,r=[],i=0;i<t.length;i++){var o=t[i],s=new n(o,this);r.push(s)}return r},d._filterFindItemElements=function(e){return r.filterFindElements(e,this.options.itemSelector)},d.getItemElements=function(){return this.items.map(function(e){return e.element})},d.layout=function(){this._resetLayout(),this._manageStamps();var e=this._getOption("layoutInstant"),t=void 0!==e?e:!this._isLayoutInited;this.layoutItems(this.items,t),this._isLayoutInited=!0},d._init=d.layout,d._resetLayout=function(){this.getSize()},d.getSize=function(){this.size=n(this.element)},d._getMeasurement=function(e,t){var r,i=this.options[e];i?("string"==typeof i?r=this.element.querySelector(i):i instanceof HTMLElement&&(r=i),this[e]=r?n(r)[t]:i):this[e]=0},d.layoutItems=function(e,t){e=this._getItemsForLayout(e),this._layoutItems(e,t),this._postLayout()},d._getItemsForLayout=function(e){return e.filter(function(e){return!e.isIgnored})},d._layoutItems=function(e,t){if(this._emitCompleteOnItems("layout",e),e&&e.length){var n=[];e.forEach(function(e){var r=this._getItemLayoutPosition(e);r.item=e,r.isInstant=t||e.isLayoutInstant,n.push(r)},this),this._processLayoutQueue(n)}},d._getItemLayoutPosition=function(){return{x:0,y:0}},d._processLayoutQueue=function(e){this.updateStagger(),e.forEach(function(e,t){this._positionItem(e.item,e.x,e.y,e.isInstant,t)},this)},d.updateStagger=function(){var e=this.options.stagger;return null===e||void 0===e?void(this.stagger=0):(this.stagger=a(e),this.stagger)},d._positionItem=function(e,t,n,r,i){r?e.goTo(t,n):(e.stagger(i*this.stagger),e.moveTo(t,n))},d._postLayout=function(){this.resizeContainer()},d.resizeContainer=function(){if(this._getOption("resizeContainer")){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},d._getContainerSize=c,d._setContainerMeasure=function(e,t){if(void 0!==e){var n=this.size;n.isBorderBox&&(e+=t?n.paddingLeft+n.paddingRight+n.borderLeftWidth+n.borderRightWidth:n.paddingBottom+n.paddingTop+n.borderTopWidth+n.borderBottomWidth),e=Math.max(e,0),this.element.style[t?"width":"height"]=e+"px"}},d._emitCompleteOnItems=function(e,t){function n(){i.dispatchEvent(e+"Complete",null,[t])}function r(){++s==o&&n()}var i=this,o=t.length;if(!t||!o)return void n();var s=0;t.forEach(function(t){t.once(e,r)})},d.dispatchEvent=function(e,t,n){var r=t?[t].concat(n):n;if(this.emitEvent(e,r),u)if(this.$element=this.$element||u(this.element),t){var i=u.Event(t);i.type=e,this.$element.trigger(i,n)}else this.$element.trigger(e,n)},d.ignore=function(e){var t=this.getItem(e);t&&(t.isIgnored=!0)},d.unignore=function(e){var t=this.getItem(e);t&&delete t.isIgnored},d.stamp=function(e){(e=this._find(e))&&(this.stamps=this.stamps.concat(e),e.forEach(this.ignore,this))},d.unstamp=function(e){(e=this._find(e))&&e.forEach(function(e){r.removeFrom(this.stamps,e),this.unignore(e)},this)},d._find=function(e){return e?("string"==typeof e&&(e=this.element.querySelectorAll(e)),e=r.makeArray(e)):void 0},d._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},d._getBoundingRect=function(){var e=this.element.getBoundingClientRect(),t=this.size;this._boundingRect={left:e.left+t.paddingLeft+t.borderLeftWidth,top:e.top+t.paddingTop+t.borderTopWidth,right:e.right-(t.paddingRight+t.borderRightWidth),bottom:e.bottom-(t.paddingBottom+t.borderBottomWidth)}},d._manageStamp=c,d._getElementOffset=function(e){var t=e.getBoundingClientRect(),r=this._boundingRect,i=n(e);return{left:t.left-r.left-i.marginLeft,top:t.top-r.top-i.marginTop,right:r.right-t.right-i.marginRight,bottom:r.bottom-t.bottom-i.marginBottom}},d.handleEvent=r.handleEvent,d.bindResize=function(){e.addEventListener("resize",this),this.isResizeBound=!0},d.unbindResize=function(){e.removeEventListener("resize",this),this.isResizeBound=!1},d.onresize=function(){this.resize()},r.debounceMethod(o,"onresize",100),d.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},d.needsResizeLayout=function(){var e=n(this.element);return this.size&&e&&e.innerWidth!==this.size.innerWidth},d.addItems=function(e){var t=this._itemize(e);return t.length&&(this.items=this.items.concat(t)),t},d.appended=function(e){var t=this.addItems(e);t.length&&(this.layoutItems(t,!0),this.reveal(t))},d.prepended=function(e){var t=this._itemize(e);if(t.length){var n=this.items.slice(0);this.items=t.concat(n),this._resetLayout(),this._manageStamps(),this.layoutItems(t,!0),this.reveal(t),this.layoutItems(n)}},d.reveal=function(e){if(this._emitCompleteOnItems("reveal",e),e&&e.length){var t=this.updateStagger();e.forEach(function(e,n){e.stagger(n*t),e.reveal()})}},d.hide=function(e){if(this._emitCompleteOnItems("hide",e),e&&e.length){var t=this.updateStagger();e.forEach(function(e,n){e.stagger(n*t),e.hide()})}},d.revealItemElements=function(e){var t=this.getItems(e);this.reveal(t)},d.hideItemElements=function(e){var t=this.getItems(e);this.hide(t)},d.getItem=function(e){for(var t=0;t<this.items.length;t++){var n=this.items[t];if(n.element==e)return n}},d.getItems=function(e){e=r.makeArray(e);var t=[];return e.forEach(function(e){var n=this.getItem(e);n&&t.push(n)},this),t},d.remove=function(e){var t=this.getItems(e);this._emitCompleteOnItems("remove",t),t&&t.length&&t.forEach(function(e){e.remove(),r.removeFrom(this.items,e)},this)},d.destroy=function(){var e=this.element.style;e.height="",e.position="",e.width="",this.items.forEach(function(e){e.destroy()}),this.unbindResize();var t=this.element.outlayerGUID;delete p[t],delete this.element.outlayerGUID,u&&u.removeData(this.element,this.constructor.namespace)},o.data=function(e){e=r.getQueryElement(e);var t=e&&e.outlayerGUID;return t&&p[t]},o.create=function(e,t){var n=s(o);return n.defaults=r.extend({},o.defaults),r.extend(n.defaults,t),n.compatOptions=r.extend({},o.compatOptions),n.namespace=e,n.data=o.data,n.Item=s(i),r.htmlInit(n,e),u&&u.bridget&&u.bridget(e,n),n};var h={ms:1,s:1e3};return o.Item=i,o}),function(e,t){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],t):"object"==typeof module&&module.exports?module.exports=t(require("outlayer"),require("get-size")):e.Masonry=t(e.Outlayer,e.getSize)}(window,function(e,t){var n=e.create("masonry");n.compatOptions.fitWidth="isFitWidth";var r=n.prototype;return r._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var e=0;e<this.cols;e++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},r.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var e=this.items[0],n=e&&e.element;this.columnWidth=n&&t(n).outerWidth||this.containerWidth}var r=this.columnWidth+=this.gutter,i=this.containerWidth+this.gutter,o=i/r,s=r-i%r,a=s&&1>s?"round":"floor";o=Math[a](o),this.cols=Math.max(o,1)},r.getContainerWidth=function(){var e=this._getOption("fitWidth"),n=e?this.element.parentNode:this.element,r=t(n);this.containerWidth=r&&r.innerWidth},r._getItemLayoutPosition=function(e){e.getSize();var t=e.size.outerWidth%this.columnWidth,n=t&&1>t?"round":"ceil",r=Math[n](e.size.outerWidth/this.columnWidth);r=Math.min(r,this.cols);for(var i=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",o=this[i](r,e),s={x:this.columnWidth*o.col,y:o.y},a=o.y+e.size.outerHeight,l=r+o.col,u=o.col;l>u;u++)this.colYs[u]=a;return s},r._getTopColPosition=function(e){var t=this._getTopColGroup(e),n=Math.min.apply(Math,t);return{col:t.indexOf(n),y:n}},r._getTopColGroup=function(e){if(2>e)return this.colYs;for(var t=[],n=this.cols+1-e,r=0;n>r;r++)t[r]=this._getColGroupY(r,e);return t},r._getColGroupY=function(e,t){if(2>t)return this.colYs[e];var n=this.colYs.slice(e,e+t);return Math.max.apply(Math,n)},r._getHorizontalColPosition=function(e,t){var n=this.horizontalColIndex%this.cols;n=e>1&&n+e>this.cols?0:n;var r=t.size.outerWidth&&t.size.outerHeight;return this.horizontalColIndex=r?n+e:this.horizontalColIndex,{col:n,y:this._getColGroupY(n,e)}},r._manageStamp=function(e){var n=t(e),r=this._getElementOffset(e),i=this._getOption("originLeft"),o=i?r.left:r.right,s=o+n.outerWidth,a=Math.floor(o/this.columnWidth);a=Math.max(0,a);var l=Math.floor(s/this.columnWidth);l-=s%this.columnWidth?0:1,l=Math.min(this.cols-1,l);for(var u=this._getOption("originTop"),c=(u?r.top:r.bottom)+n.outerHeight,f=a;l>=f;f++)this.colYs[f]=Math.max(c,this.colYs[f])},r._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var e={height:this.maxY};return this._getOption("fitWidth")&&(e.width=this._getContainerFitWidth()),e},r._getContainerFitWidth=function(){for(var e=0,t=this.cols;--t&&0===this.colYs[t];)e++;return(this.cols-e)*this.columnWidth-this.gutter},r.needsResizeLayout=function(){var e=this.containerWidth;return this.getContainerWidth(),e!=this.containerWidth},n}),function(e,t,n){function r(e,t){return typeof e===t}function i(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function o(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):S?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(){var e=t.body;return e||(e=o(S?"svg":"body"),e.fake=!0),e}function a(e,n,r,i){var a,l,u,c,f="modernizr",p=o("div"),d=s();if(parseInt(r,10))for(;r--;)u=o("div"),u.id=i?i[r]:f+(r+1),p.appendChild(u);return a=o("style"),a.type="text/css",a.id="s"+f,(d.fake?d:p).appendChild(a),d.appendChild(p),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(t.createTextNode(e)),p.id=f,d.fake&&(d.style.background="",d.style.overflow="hidden",c=w.style.overflow,w.style.overflow="hidden",w.appendChild(d)),l=n(p,e),d.fake?(d.parentNode.removeChild(d),w.style.overflow=c,w.offsetHeight):p.parentNode.removeChild(p),!!l}function l(e,t){return!!~(""+e).indexOf(t)}function u(e,t){return function(){return e.apply(t,arguments)}}function c(e,t,n){var i;for(var o in e)if(e[o]in t)return!1===n?e[o]:(i=t[e[o]],r(i,"function")?u(i,n||t):i);return!1}function f(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function p(t,n,r){var i;if("getComputedStyle"in e){i=getComputedStyle.call(e,t,n);var o=e.console;if(null!==i)r&&(i=i.getPropertyValue(r));else if(o){var s=o.error?"error":"log";o[s].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else i=!n&&t.currentStyle&&t.currentStyle[r];return i}function d(t,r){var i=t.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(f(t[i]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];i--;)o.push("("+f(t[i])+":"+r+")");return o=o.join(" or "),a("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==p(e,null,"position")})}return n}function h(e,t,s,a){function u(){f&&(delete N.style,delete N.modElem)}if(a=!r(a,"undefined")&&a,!r(s,"undefined")){var c=d(e,s);if(!r(c,"undefined"))return c}for(var f,p,h,m,g,v=["modernizr","tspan","samp"];!N.style&&v.length;)f=!0,N.modElem=o(v.shift()),N.style=N.modElem.style;for(h=e.length,p=0;h>p;p++)if(m=e[p],g=N.style[m],l(m,"-")&&(m=i(m)),N.style[m]!==n){if(a||r(s,"undefined"))return u(),"pfx"!=t||m;try{N.style[m]=s}catch(e){}if(N.style[m]!=g)return u(),"pfx"!=t||m}return u(),!1}function m(e,t,n,i,o){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+k.join(s+" ")+s).split(" ");return r(t,"string")||r(t,"undefined")?h(a,t,i,o):(a=(e+" "+A.join(s+" ")+s).split(" "),c(a,t,n))}function g(e,t,r){return m(e,n,n,t,r)}var v=[],y=[],b={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){y.push({name:e,fn:t,options:n})},addAsyncTest:function(e){y.push({name:null,fn:e})}},x=function(){};x.prototype=b,x=new x,x.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}});var w=t.documentElement,S="svg"===w.nodeName.toLowerCase(),C=b._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];b._prefixes=C;var T=b.testStyles=a;x.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var r=["@media (",C.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");T(r,function(e){n=9===e.offsetTop})}return n});var E="Moz O ms Webkit",k=b._config.usePrefixes?E.split(" "):[];b._cssomPrefixes=k;var P=function(t){var r,i=C.length,o=e.CSSRule;if(void 0===o)return n;if(!t)return!1;if(t=t.replace(/^@/,""),(r=t.replace(/-/g,"_").toUpperCase()+"_RULE")in o)return"@"+t;for(var s=0;i>s;s++){var a=C[s];if(a.toUpperCase()+"_"+r in o)return"@-"+a.toLowerCase()+"-"+t}return!1};b.atRule=P;var A=b._config.usePrefixes?E.toLowerCase().split(" "):[];b._domPrefixes=A;var I={elem:o("modernizr")};x._q.push(function(){delete I.elem});var N={style:I.elem.style};x._q.unshift(function(){delete N.style}),b.testAllProps=m,b.testAllProps=g,x.addTest("cssgridlegacy",g("grid-columns","10px",!0)),x.addTest("cssgrid",g("grid-template-rows","none",!0));var j=b.prefixed=function(e,t,n){return 0===e.indexOf("@")?P(e):(-1!=e.indexOf("-")&&(e=i(e)),t?m(e,t,n):m(e,"pfx"))};x.addTest("objectfit",!!j("objectFit"),{aliases:["object-fit"]}),function(){var e,t,n,i,o,s,a;for(var l in y)if(y.hasOwnProperty(l)){if(e=[],t=y[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(i=r(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)s=e[o],a=s.split("."),1===a.length?x[a[0]]=i:(!x[a[0]]||x[a[0]]instanceof Boolean||(x[a[0]]=new Boolean(x[a[0]])),x[a[0]][a[1]]=i),v.push((i?"":"no-")+a.join("-"))}}(),function(e){var t=w.className,n=x._config.classPrefix||"";if(S&&(t=t.baseVal),x._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}x._config.enableClasses&&(t+=" "+n+e.join(" "+n),S?w.className.baseVal=t:w.className=t)}(v),delete b.addTest,delete b.addAsyncTest;for(var L=0;L<x._q.length;L++)x._q[L]();e.Modernizr=x}(window,document),/*!
 *	jQuery OwlCarousel v1.31
 *
 *	Copyright (c) 2013 Bartosz Wojciechowski
 *	http://www.owlgraphic.com/owlcarousel/
 *
 *	Licensed under MIT
 *
 */
"function"!=typeof Object.create&&(Object.create=function(e){function t(){}return t.prototype=e,new t}),function(e,t,n,r){var i={init:function(t,n){var r=this;r.$elem=e(n),r.options=e.extend({},e.fn.owlCarousel.options,r.$elem.data(),t),r.userOptions=t,r.loadContent()},loadContent:function(){function t(e){if("function"==typeof n.options.jsonSuccess)n.options.jsonSuccess.apply(this,[e]);else{var t="";for(var r in e.owl)t+=e.owl[r].item;n.$elem.html(t)}n.logIn()}var n=this;if("function"==typeof n.options.beforeInit&&n.options.beforeInit.apply(this,[n.$elem]),"string"==typeof n.options.jsonPath){var r=n.options.jsonPath;e.getJSON(r,t)}else n.logIn()},logIn:function(e){var t=this;t.$elem.data("owl-originalStyles",t.$elem.attr("style")).data("owl-originalClasses",t.$elem.attr("class")),t.$elem.css({opacity:0}),t.orignalItems=t.options.items,t.checkBrowser(),t.wrapperWidth=0,t.checkVisible,t.setVars()},setVars:function(){var e=this;if(0===e.$elem.children().length)return!1;e.baseClass(),e.eventTypes(),e.$userItems=e.$elem.children(),e.itemsAmount=e.$userItems.length,e.wrapItems(),e.$owlItems=e.$elem.find(".owl-item"),e.$owlWrapper=e.$elem.find(".owl-wrapper"),e.playDirection="next",e.prevItem=0,e.prevArr=[0],e.currentItem=0,e.customEvents(),e.onStartup()},onStartup:function(){var e=this;e.updateItems(),e.calculateAll(),e.buildControls(),e.updateControls(),e.response(),e.moveEvents(),e.stopOnHover(),e.owlStatus(),!1!==e.options.transitionStyle&&e.transitionTypes(e.options.transitionStyle),!0===e.options.autoPlay&&(e.options.autoPlay=5e3),e.play(),e.$elem.find(".owl-wrapper").css("display","block"),e.$elem.is(":visible")?e.$elem.css("opacity",1):e.watchVisibility(),e.onstartup=!1,e.eachMoveUpdate(),"function"==typeof e.options.afterInit&&e.options.afterInit.apply(this,[e.$elem])},eachMoveUpdate:function(){var e=this;!0===e.options.lazyLoad&&e.lazyLoad(),!0===e.options.autoHeight&&e.autoHeight(),e.onVisibleItems(),"function"==typeof e.options.afterAction&&e.options.afterAction.apply(this,[e.$elem])},updateVars:function(){var e=this;"function"==typeof e.options.beforeUpdate&&e.options.beforeUpdate.apply(this,[e.$elem]),e.watchVisibility(),e.updateItems(),e.calculateAll(),e.updatePosition(),e.updateControls(),e.eachMoveUpdate(),"function"==typeof e.options.afterUpdate&&e.options.afterUpdate.apply(this,[e.$elem])},reload:function(e){var t=this;setTimeout(function(){t.updateVars()},0)},watchVisibility:function(){var e=this;if(!1!==e.$elem.is(":visible"))return!1;e.$elem.css({opacity:0}),clearInterval(e.autoPlayInterval),clearInterval(e.checkVisible),e.checkVisible=setInterval(function(){e.$elem.is(":visible")&&(e.reload(),e.$elem.animate({opacity:1},200),clearInterval(e.checkVisible))},500)},wrapItems:function(){var e=this;e.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'),e.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'),e.wrapperOuter=e.$elem.find(".owl-wrapper-outer"),e.$elem.css("display","block")},baseClass:function(){var e=this,t=e.$elem.hasClass(e.options.baseClass),n=e.$elem.hasClass(e.options.theme);t||e.$elem.addClass(e.options.baseClass),n||e.$elem.addClass(e.options.theme)},updateItems:function(){var t=this;if(!1===t.options.responsive)return!1;if(!0===t.options.singleItem)return t.options.items=t.orignalItems=1,t.options.itemsCustom=!1,t.options.itemsDesktop=!1,t.options.itemsDesktopSmall=!1,t.options.itemsTablet=!1,t.options.itemsTabletSmall=!1,t.options.itemsMobile=!1,!1;var n=e(t.options.responsiveBaseWidth).width();if(n>(t.options.itemsDesktop[0]||t.orignalItems)&&(t.options.items=t.orignalItems),void 0!==t.options.itemsCustom&&!1!==t.options.itemsCustom){t.options.itemsCustom.sort(function(e,t){return e[0]-t[0]});for(var r in t.options.itemsCustom)void 0!==t.options.itemsCustom[r]&&t.options.itemsCustom[r][0]<=n&&(t.options.items=t.options.itemsCustom[r][1])}else n<=t.options.itemsDesktop[0]&&!1!==t.options.itemsDesktop&&(t.options.items=t.options.itemsDesktop[1]),n<=t.options.itemsDesktopSmall[0]&&!1!==t.options.itemsDesktopSmall&&(t.options.items=t.options.itemsDesktopSmall[1]),n<=t.options.itemsTablet[0]&&!1!==t.options.itemsTablet&&(t.options.items=t.options.itemsTablet[1]),n<=t.options.itemsTabletSmall[0]&&!1!==t.options.itemsTabletSmall&&(t.options.items=t.options.itemsTabletSmall[1]),n<=t.options.itemsMobile[0]&&!1!==t.options.itemsMobile&&(t.options.items=t.options.itemsMobile[1]);t.options.items>t.itemsAmount&&!0===t.options.itemsScaleUp&&(t.options.items=t.itemsAmount)},response:function(){var n,r=this;if(!0!==r.options.responsive)return!1;var i=e(t).width();r.resizer=function(){e(t).width()!==i&&(!1!==r.options.autoPlay&&clearInterval(r.autoPlayInterval),clearTimeout(n),n=setTimeout(function(){i=e(t).width(),r.updateVars()},r.options.responsiveRefreshRate))},e(t).on("resize",r.resizer)},updatePosition:function(){var e=this;e.jumpTo(e.currentItem),!1!==e.options.autoPlay&&e.checkAp()},appendItemsSizes:function(){var t=this,n=0,r=t.itemsAmount-t.options.items;t.$owlItems.each(function(i){var o=e(this);o.css({width:t.itemWidth}).data("owl-item",Number(i)),i%t.options.items!=0&&i!==r||i>r||(n+=1),o.data("owl-roundPages",n)})},appendWrapperSizes:function(){var e=this,t=0,t=e.$owlItems.length*e.itemWidth;e.$owlWrapper.css({width:2*t,left:0}),e.appendItemsSizes()},calculateAll:function(){var e=this;e.calculateWidth(),e.appendWrapperSizes(),e.loops(),e.max()},calculateWidth:function(){var e=this;e.itemWidth=Math.floor(e.$elem.width()/e.options.items)},max:function(){var e=this,t=-1*(e.itemsAmount*e.itemWidth-e.options.items*e.itemWidth);return e.options.items>e.itemsAmount?(e.maximumItem=0,t=0,e.maximumPixels=0):(e.maximumItem=e.itemsAmount-e.options.items,e.maximumPixels=t),t},min:function(){return 0},loops:function(){var t=this;t.positionsInArray=[0],t.pagesInArray=[];for(var n=0,r=0,i=0;i<t.itemsAmount;i++)if(r+=t.itemWidth,t.positionsInArray.push(-r),!0===t.options.scrollPerPage){var o=e(t.$owlItems[i]),s=o.data("owl-roundPages");s!==n&&(t.pagesInArray[n]=t.positionsInArray[i],n=s)}},buildControls:function(){var t=this;!0!==t.options.navigation&&!0!==t.options.pagination||(t.owlControls=e('<div class="owl-controls"/>').toggleClass("clickable",!t.browser.isTouch).appendTo(t.$elem)),!0===t.options.pagination&&t.buildPagination(),!0===t.options.navigation&&t.buildButtons()},buildButtons:function(){var t=this,n=e('<div class="owl-buttons"/>');t.owlControls.append(n),t.buttonPrev=e("<div/>",{class:"owl-prev",html:t.options.navigationText[0]||""}),t.buttonNext=e("<div/>",{class:"owl-next",html:t.options.navigationText[1]||""}),n.append(t.buttonPrev).append(t.buttonNext),n.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',function(e){e.preventDefault()}),n.on("touchend.owlControls mouseup.owlControls",'div[class^="owl"]',function(n){n.preventDefault(),e(this).hasClass("owl-next")?t.next():t.prev()})},buildPagination:function(){var t=this;t.paginationWrapper=e('<div class="owl-pagination"/>'),t.owlControls.append(t.paginationWrapper),t.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(n){n.preventDefault(),Number(e(this).data("owl-page"))!==t.currentItem&&t.goTo(Number(e(this).data("owl-page")),!0)})},updatePagination:function(){var t=this;if(!1===t.options.pagination)return!1;t.paginationWrapper.html("");for(var n=0,r=t.itemsAmount-t.itemsAmount%t.options.items,i=0;i<t.itemsAmount;i++)if(i%t.options.items==0){if(n+=1,r===i)var o=t.itemsAmount-t.options.items;var s=e("<div/>",{class:"owl-page"}),a=e("<span></span>",{text:!0===t.options.paginationNumbers?n:"",class:!0===t.options.paginationNumbers?"owl-numbers":""});s.append(a),s.data("owl-page",r===i?o:i),s.data("owl-roundPages",n),t.paginationWrapper.append(s)}t.checkPagination()},checkPagination:function(){var t=this;if(!1===t.options.pagination)return!1;t.paginationWrapper.find(".owl-page").each(function(n,r){e(this).data("owl-roundPages")===e(t.$owlItems[t.currentItem]).data("owl-roundPages")&&(t.paginationWrapper.find(".owl-page").removeClass("active"),e(this).addClass("active"))})},checkNavigation:function(){var e=this;if(!1===e.options.navigation)return!1;!1===e.options.rewindNav&&(0===e.currentItem&&0===e.maximumItem?(e.buttonPrev.addClass("disabled"),e.buttonNext.addClass("disabled")):0===e.currentItem&&0!==e.maximumItem?(e.buttonPrev.addClass("disabled"),e.buttonNext.removeClass("disabled")):e.currentItem===e.maximumItem?(e.buttonPrev.removeClass("disabled"),e.buttonNext.addClass("disabled")):0!==e.currentItem&&e.currentItem!==e.maximumItem&&(e.buttonPrev.removeClass("disabled"),e.buttonNext.removeClass("disabled")))},updateControls:function(){var e=this;e.updatePagination(),e.checkNavigation(),e.owlControls&&(e.options.items>=e.itemsAmount?e.owlControls.hide():e.owlControls.show())},destroyControls:function(){var e=this;e.owlControls&&e.owlControls.remove()},next:function(e){var t=this;if(t.isTransition)return!1;if(t.currentItem+=!0===t.options.scrollPerPage?t.options.items:1,t.currentItem>t.maximumItem+(1==t.options.scrollPerPage?t.options.items-1:0)){if(!0!==t.options.rewindNav)return t.currentItem=t.maximumItem,!1;t.currentItem=0,e="rewind"}t.goTo(t.currentItem,e)},prev:function(e){var t=this;if(t.isTransition)return!1;if(!0===t.options.scrollPerPage&&t.currentItem>0&&t.currentItem<t.options.items?t.currentItem=0:t.currentItem-=!0===t.options.scrollPerPage?t.options.items:1,t.currentItem<0){if(!0!==t.options.rewindNav)return t.currentItem=0,!1;t.currentItem=t.maximumItem,e="rewind"}t.goTo(t.currentItem,e)},goTo:function(e,t,n){var r=this;if(r.isTransition)return!1;if("function"==typeof r.options.beforeMove&&r.options.beforeMove.apply(this,[r.$elem]),e>=r.maximumItem?e=r.maximumItem:e<=0&&(e=0),r.currentItem=r.owl.currentItem=e,!1!==r.options.transitionStyle&&"drag"!==n&&1===r.options.items&&!0===r.browser.support3d)return r.swapSpeed(0),!0===r.browser.support3d?r.transition3d(r.positionsInArray[e]):r.css2slide(r.positionsInArray[e],1),r.afterGo(),r.singleItemTransition(),!1;var i=r.positionsInArray[e];!0===r.browser.support3d?(r.isCss3Finish=!1,!0===t?(r.swapSpeed("paginationSpeed"),setTimeout(function(){r.isCss3Finish=!0},r.options.paginationSpeed)):"rewind"===t?(r.swapSpeed(r.options.rewindSpeed),setTimeout(function(){r.isCss3Finish=!0},r.options.rewindSpeed)):(r.swapSpeed("slideSpeed"),setTimeout(function(){r.isCss3Finish=!0},r.options.slideSpeed)),r.transition3d(i)):!0===t?r.css2slide(i,r.options.paginationSpeed):"rewind"===t?r.css2slide(i,r.options.rewindSpeed):r.css2slide(i,r.options.slideSpeed),r.afterGo()},jumpTo:function(e){var t=this;"function"==typeof t.options.beforeMove&&t.options.beforeMove.apply(this,[t.$elem]),e>=t.maximumItem||-1===e?e=t.maximumItem:e<=0&&(e=0),t.swapSpeed(0),!0===t.browser.support3d?t.transition3d(t.positionsInArray[e]):t.css2slide(t.positionsInArray[e],1),t.currentItem=t.owl.currentItem=e,t.afterGo()},afterGo:function(){var e=this;e.prevArr.push(e.currentItem),e.prevItem=e.owl.prevItem=e.prevArr[e.prevArr.length-2],e.prevArr.shift(0),e.prevItem!==e.currentItem&&(e.checkPagination(),e.checkNavigation(),e.eachMoveUpdate(),!1!==e.options.autoPlay&&e.checkAp()),"function"==typeof e.options.afterMove&&e.prevItem!==e.currentItem&&e.options.afterMove.apply(this,[e.$elem])},stop:function(){var e=this;e.apStatus="stop",clearInterval(e.autoPlayInterval)},checkAp:function(){var e=this;"stop"!==e.apStatus&&e.play()},play:function(){var e=this;if(e.apStatus="play",!1===e.options.autoPlay)return!1;clearInterval(e.autoPlayInterval),e.autoPlayInterval=setInterval(function(){e.next(!0)},e.options.autoPlay)},swapSpeed:function(e){var t=this;"slideSpeed"===e?t.$owlWrapper.css(t.addCssSpeed(t.options.slideSpeed)):"paginationSpeed"===e?t.$owlWrapper.css(t.addCssSpeed(t.options.paginationSpeed)):"string"!=typeof e&&t.$owlWrapper.css(t.addCssSpeed(e))},addCssSpeed:function(e){return{"-webkit-transition":"all "+e+"ms ease","-moz-transition":"all "+e+"ms ease","-o-transition":"all "+e+"ms ease",transition:"all "+e+"ms ease"}},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}},doTranslate:function(e){return{"-webkit-transform":"translate3d("+e+"px, 0px, 0px)","-moz-transform":"translate3d("+e+"px, 0px, 0px)","-o-transform":"translate3d("+e+"px, 0px, 0px)","-ms-transform":"translate3d("+e+"px, 0px, 0px)",transform:"translate3d("+e+"px, 0px,0px)"}},transition3d:function(e){var t=this;t.$owlWrapper.css(t.doTranslate(e))},css2move:function(e){this.$owlWrapper.css({left:e})},css2slide:function(e,t){var n=this;n.isCssFinish=!1,n.$owlWrapper.stop(!0,!0).animate({left:e},{duration:t||n.options.slideSpeed,complete:function(){n.isCssFinish=!0}})},checkBrowser:function(){var e=this,r="translate3d(0px, 0px, 0px)",i=n.createElement("div");i.style.cssText="  -moz-transform:"+r+"; -ms-transform:"+r+"; -o-transform:"+r+"; -webkit-transform:"+r+"; transform:"+r;var o=/translate3d\(0px, 0px, 0px\)/g,s=i.style.cssText.match(o),a=null!==s&&1===s.length,l="ontouchstart"in t||navigator.msMaxTouchPoints;e.browser={support3d:a,isTouch:l}},moveEvents:function(){var e=this;!1===e.options.mouseDrag&&!1===e.options.touchDrag||(e.gestures(),e.disabledEvents())},eventTypes:function(){var e=this,t=["s","e","x"];e.ev_types={},!0===e.options.mouseDrag&&!0===e.options.touchDrag?t=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]:!1===e.options.mouseDrag&&!0===e.options.touchDrag?t=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]:!0===e.options.mouseDrag&&!1===e.options.touchDrag&&(t=["mousedown.owl","mousemove.owl","mouseup.owl"]),e.ev_types.start=t[0],e.ev_types.move=t[1],e.ev_types.end=t[2]},disabledEvents:function(){var t=this;t.$elem.on("dragstart.owl",function(e){e.preventDefault()}),t.$elem.on("mousedown.disableTextSelect",function(t){return e(t.target).is("input, textarea, select, option")})},gestures:function(){function i(e){return e.touches?{x:e.touches[0].pageX,y:e.touches[0].pageY}:e.pageX!==r?{x:e.pageX,y:e.pageY}:{x:e.clientX,y:e.clientY}}function o(t){"on"===t?(e(n).on(u.ev_types.move,a),e(n).on(u.ev_types.end,l)):"off"===t&&(e(n).off(u.ev_types.move),e(n).off(u.ev_types.end))}function s(n){var n=n.originalEvent||n||t.event;if(3===n.which)return!1;if(!(u.itemsAmount<=u.options.items)){if(!1===u.isCssFinish&&!u.options.dragBeforeAnimFinish)return!1;if(!1===u.isCss3Finish&&!u.options.dragBeforeAnimFinish)return!1;!1!==u.options.autoPlay&&clearInterval(u.autoPlayInterval),!0===u.browser.isTouch||u.$owlWrapper.hasClass("grabbing")||u.$owlWrapper.addClass("grabbing"),u.newPosX=0,u.newRelativeX=0,e(this).css(u.removeTransition());var r=e(this).position();c.relativePos=r.left,c.offsetX=i(n).x-r.left,c.offsetY=i(n).y-r.top,o("on"),c.sliding=!1,c.targetElement=n.target||n.srcElement}}function a(r){var r=r.originalEvent||r||t.event;u.newPosX=i(r).x-c.offsetX,u.newPosY=i(r).y-c.offsetY,u.newRelativeX=u.newPosX-c.relativePos,"function"==typeof u.options.startDragging&&!0!==c.dragging&&0!==u.newRelativeX&&(c.dragging=!0,u.options.startDragging.apply(u,[u.$elem])),(u.newRelativeX>8||u.newRelativeX<-8&&!0===u.browser.isTouch)&&(r.preventDefault?r.preventDefault():r.returnValue=!1,c.sliding=!0),(u.newPosY>10||u.newPosY<-10)&&!1===c.sliding&&e(n).off("touchmove.owl");u.newPosX=Math.max(Math.min(u.newPosX,function(){return u.newRelativeX/5}()),function(){return u.maximumPixels+u.newRelativeX/5}()),!0===u.browser.support3d?u.transition3d(u.newPosX):u.css2move(u.newPosX)}function l(n){var n=n.originalEvent||n||t.event;if(n.target=n.target||n.srcElement,c.dragging=!1,!0!==u.browser.isTouch&&u.$owlWrapper.removeClass("grabbing"),u.newRelativeX<0?u.dragDirection=u.owl.dragDirection="left":u.dragDirection=u.owl.dragDirection="right",0!==u.newRelativeX){var r=u.getNewPosition();if(u.goTo(r,!1,"drag"),c.targetElement===n.target&&!0!==u.browser.isTouch){e(n.target).on("click.disable",function(t){t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault(),e(n.target).off("click.disable")});var i=e._data(n.target,"events").click,s=i.pop();i.splice(0,0,s)}}o("off")}var u=this,c={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};u.isCssFinish=!0,u.$elem.on(u.ev_types.start,".owl-wrapper",s)},getNewPosition:function(){var e,t=this;return e=t.closestItem(),e>t.maximumItem?(t.currentItem=t.maximumItem,e=t.maximumItem):t.newPosX>=0&&(e=0,t.currentItem=0),e},closestItem:function(){var t=this,n=!0===t.options.scrollPerPage?t.pagesInArray:t.positionsInArray,r=t.newPosX,i=null;return e.each(n,function(o,s){r-t.itemWidth/20>n[o+1]&&r-t.itemWidth/20<s&&"left"===t.moveDirection()?(i=s,!0===t.options.scrollPerPage?t.currentItem=e.inArray(i,t.positionsInArray):t.currentItem=o):r+t.itemWidth/20<s&&r+t.itemWidth/20>(n[o+1]||n[o]-t.itemWidth)&&"right"===t.moveDirection()&&(!0===t.options.scrollPerPage?(i=n[o+1]||n[n.length-1],t.currentItem=e.inArray(i,t.positionsInArray)):(i=n[o+1],t.currentItem=o+1))}),t.currentItem},moveDirection:function(){var e,t=this;return t.newRelativeX<0?(e="right",t.playDirection="next"):(e="left",t.playDirection="prev"),e},customEvents:function(){var e=this;e.$elem.on("owl.next",function(){e.next()}),e.$elem.on("owl.prev",function(){e.prev()}),e.$elem.on("owl.play",function(t,n){e.options.autoPlay=n,e.play(),e.hoverStatus="play"}),e.$elem.on("owl.stop",function(){e.stop(),e.hoverStatus="stop"}),e.$elem.on("owl.goTo",function(t,n){e.goTo(n)}),e.$elem.on("owl.jumpTo",function(t,n){e.jumpTo(n)})},stopOnHover:function(){var e=this;!0===e.options.stopOnHover&&!0!==e.browser.isTouch&&!1!==e.options.autoPlay&&(e.$elem.on("mouseover",function(){e.stop()}),e.$elem.on("mouseout",function(){"stop"!==e.hoverStatus&&e.play()}))},lazyLoad:function(){var t=this;if(!1===t.options.lazyLoad)return!1;for(var n=0;n<t.itemsAmount;n++){var i=e(t.$owlItems[n]);if("loaded"!==i.data("owl-loaded")){var o=i.data("owl-item"),s=i.find(".lazyOwl");"string"==typeof s.data("src")?(i.data("owl-loaded")===r&&(s.hide(),i.addClass("loading").data("owl-loaded","checked")),(!0!==t.options.lazyFollow||o>=t.currentItem)&&o<t.currentItem+t.options.items&&s.length&&t.lazyPreload(i,s)):i.data("owl-loaded","loaded")}}},lazyPreload:function(e,t){function n(){o+=1,i.completeImg(t.get(0))||!0===s?r():o<=100?setTimeout(n,100):r()}function r(){e.data("owl-loaded","loaded").removeClass("loading"),t.removeAttr("data-src"),"fade"===i.options.lazyEffect?t.fadeIn(400):t.show(),"function"==typeof i.options.afterLazyLoad&&i.options.afterLazyLoad.apply(this,[i.$elem])}var i=this,o=0;if("DIV"===t.prop("tagName")){t.css("background-image","url("+t.data("src")+")");var s=!0}else t[0].src=t.data("src");n()},autoHeight:function(){function t(){s+=1,i.completeImg(o.get(0))?n():s<=100?setTimeout(t,100):i.wrapperOuter.css("height","")}function n(){var t=e(i.$owlItems[i.currentItem]).height();i.wrapperOuter.css("height",t+"px"),i.wrapperOuter.hasClass("autoHeight")||setTimeout(function(){i.wrapperOuter.addClass("autoHeight")},0)}var i=this,o=e(i.$owlItems[i.currentItem]).find("img");if(o.get(0)!==r){var s=0;t()}else n()},completeImg:function(e){return!!e.complete&&(void 0===e.naturalWidth||0!=e.naturalWidth)},onVisibleItems:function(){var t=this;!0===t.options.addClassActive&&t.$owlItems.removeClass("active"),t.visibleItems=[];for(var n=t.currentItem;n<t.currentItem+t.options.items;n++)t.visibleItems.push(n),!0===t.options.addClassActive&&e(t.$owlItems[n]).addClass("active");t.owl.visibleItems=t.visibleItems},transitionTypes:function(e){var t=this;t.outClass="owl-"+e+"-out",t.inClass="owl-"+e+"-in"},singleItemTransition:function(){var e=this;e.isTransition=!0;var t=e.outClass,n=e.inClass,r=e.$owlItems.eq(e.currentItem),i=e.$owlItems.eq(e.prevItem),o=Math.abs(e.positionsInArray[e.currentItem])+e.positionsInArray[e.prevItem],s=Math.abs(e.positionsInArray[e.currentItem])+e.itemWidth/2;e.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":s+"px","-moz-perspective-origin":s+"px","perspective-origin":s+"px"});var a="webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";i.css(function(e,t){return{position:"relative",left:e+"px"}}(o,10)).addClass(t).on(a,function(){e.endPrev=!0,i.off(a),e.clearTransStyle(i,t)}),r.addClass(n).on(a,function(){e.endCurrent=!0,r.off(a),e.clearTransStyle(r,n)})},clearTransStyle:function(e,t){var n=this;e.css({position:"",left:""}).removeClass(t),n.endPrev&&n.endCurrent&&(n.$owlWrapper.removeClass("owl-origin"),n.endPrev=!1,n.endCurrent=!1,n.isTransition=!1)},owlStatus:function(){var e=this;e.owl={userOptions:e.userOptions,baseElement:e.$elem,userItems:e.$userItems,owlItems:e.$owlItems,currentItem:e.currentItem,prevItem:e.prevItem,visibleItems:e.visibleItems,isTouch:e.browser.isTouch,browser:e.browser,dragDirection:e.dragDirection}},clearEvents:function(){var r=this;r.$elem.off(".owl owl mousedown.disableTextSelect"),e(n).off(".owl owl"),e(t).off("resize",r.resizer)},unWrap:function(){var e=this;0!==e.$elem.children().length&&(e.$owlWrapper.unwrap(),e.$userItems.unwrap().unwrap(),e.owlControls&&e.owlControls.remove()),e.clearEvents(),e.$elem.attr("style",e.$elem.data("owl-originalStyles")||"").attr("class",e.$elem.data("owl-originalClasses"))},destroy:function(){var e=this;e.stop(),clearInterval(e.checkVisible),e.unWrap(),e.$elem.removeData()},reinit:function(t){var n=this,r=e.extend({},n.userOptions,t);n.unWrap(),n.init(r,n.$elem)},addItem:function(e,t){var n,i=this;return!!e&&(0===i.$elem.children().length?(i.$elem.append(e),i.setVars(),!1):(i.unWrap(),n=t===r||-1===t?-1:t,n>=i.$userItems.length||-1===n?i.$userItems.eq(-1).after(e):i.$userItems.eq(n).before(e),void i.setVars()))},removeItem:function(e){var t,n=this;if(0===n.$elem.children().length)return!1;t=e===r||-1===e?-1:e,n.unWrap(),n.$userItems.eq(t).remove(),n.setVars()}};e.fn.owlCarousel=function(t){return this.each(function(){if(!0===e(this).data("owl-init"))return!1;e(this).data("owl-init",!0);var n=Object.create(i);n.init(t,this),e.data(this,"owlCarousel",n)})},e.fn.owlCarousel.options={items:5,itemsCustom:!1,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:!1,itemsMobile:[479,1],singleItem:!1,itemsScaleUp:!1,slideSpeed:200,paginationSpeed:800,rewindSpeed:1e3,autoPlay:!1,stopOnHover:!1,navigation:!1,navigationText:["prev","next"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,responsive:!0,responsiveRefreshRate:200,responsiveBaseWidth:t,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:!1,lazyFollow:!0,lazyEffect:"fade",autoHeight:!1,jsonPath:!1,jsonSuccess:!1,dragBeforeAnimFinish:!0,mouseDrag:!0,touchDrag:!0,addClassActive:!1,transitionStyle:!1,beforeUpdate:!1,afterUpdate:!1,beforeInit:!1,afterInit:!1,beforeMove:!1,afterMove:!1,afterAction:!1,startDragging:!1,afterLazyLoad:!1}}(jQuery,window,document),/*!
 *
 * Spin.js
 * Copyright (c) 2011-2013 Felix Gnass
 * Licensed under the MIT license
 */
function(e,t){"object"==typeof exports?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Spinner=t()}(this,function(){"use strict";function e(e,t){var n,r=document.createElement(e||"div");for(n in t)r[n]=t[n];return r}function t(e){for(var t=1,n=arguments.length;t<n;t++)e.appendChild(arguments[t]);return e}function n(e,t,n,r){var i=["opacity",t,~~(100*e),n,r].join("-"),o=.01+n/r*100,s=Math.max(1-(1-e)/t*(100-o),e),a=u.substring(0,u.indexOf("Animation")).toLowerCase(),l=a&&"-"+a+"-"||"";return f[i]||(p.insertRule("@"+l+"keyframes "+i+"{0%{opacity:"+s+"}"+o+"%{opacity:"+e+"}"+(o+.01)+"%{opacity:1}"+(o+t)%100+"%{opacity:"+e+"}100%{opacity:"+s+"}}",p.cssRules.length),f[i]=1),i}function r(e,t){var n,r,i=e.style;for(t=t.charAt(0).toUpperCase()+t.slice(1),r=0;r<c.length;r++)if(n=c[r]+t,void 0!==i[n])return n;if(void 0!==i[t])return t}function i(e,t){for(var n in t)e.style[r(e,n)||n]=t[n];return e}function o(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)void 0===e[r]&&(e[r]=n[r])}return e}function s(e){for(var t={x:e.offsetLeft,y:e.offsetTop};e=e.offsetParent;)t.x+=e.offsetLeft,t.y+=e.offsetTop;return t}function a(e,t){return"string"==typeof e?e:e[t%e.length]}function l(e){if(void 0===this)return new l(e);this.opts=o(e||{},l.defaults,d)}var u,c=["webkit","Moz","ms","O"],f={},p=function(){var n=e("style",{type:"text/css"});return t(document.getElementsByTagName("head")[0],n),n.sheet||n.styleSheet}(),d={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"};l.defaults={},o(l.prototype,{spin:function(t){this.stop();var n,r,o=this,a=o.opts,l=o.el=i(e(0,{className:a.className}),{position:a.position,width:0,zIndex:a.zIndex}),c=a.radius+a.length+a.width;if(t&&(t.insertBefore(l,t.firstChild||null),r=s(t),n=s(l),i(l,{left:("auto"==a.left?r.x-n.x+(t.offsetWidth>>1):parseInt(a.left,10)+c)+"px",top:("auto"==a.top?r.y-n.y+(t.offsetHeight>>1):parseInt(a.top,10)+c)+"px"})),l.setAttribute("role","progressbar"),o.lines(l,o.opts),!u){var f,p=0,d=(a.lines-1)*(1-a.direction)/2,h=a.fps,m=h/a.speed,g=(1-a.opacity)/(m*a.trail/100),v=m/a.lines;!function e(){p++;for(var t=0;t<a.lines;t++)f=Math.max(1-(p+(a.lines-t)*v)%m*g,a.opacity),o.opacity(l,t*a.direction+d,f,a);o.timeout=o.el&&setTimeout(e,~~(1e3/h))}()}return o},stop:function(){var e=this.el;return e&&(clearTimeout(this.timeout),e.parentNode&&e.parentNode.removeChild(e),this.el=void 0),this},lines:function(r,o){function s(t,n){return i(e(),{position:"absolute",width:o.length+o.width+"px",height:o.width+"px",background:t,boxShadow:n,transformOrigin:"left",transform:"rotate("+~~(360/o.lines*c+o.rotate)+"deg) translate("+o.radius+"px,0)",borderRadius:(o.corners*o.width>>1)+"px"})}for(var l,c=0,f=(o.lines-1)*(1-o.direction)/2;c<o.lines;c++)l=i(e(),{position:"absolute",top:1+~(o.width/2)+"px",transform:o.hwaccel?"translate3d(0,0,0)":"",opacity:o.opacity,animation:u&&n(o.opacity,o.trail,f+c*o.direction,o.lines)+" "+1/o.speed+"s linear infinite"}),o.shadow&&t(l,i(s("#000","0 0 4px #000"),{top:"2px"})),t(r,t(l,s(a(o.color,c),"0 0 1px rgba(0,0,0,.1)")));return r},opacity:function(e,t,n){t<e.childNodes.length&&(e.childNodes[t].style.opacity=n)}});var h=i(e("group"),{behavior:"url(#default#VML)"});return!r(h,"transform")&&h.adj?function(){function n(t,n){return e("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',n)}p.addRule(".spin-vml","behavior:url(#default#VML)"),l.prototype.lines=function(e,r){function o(){return i(n("group",{coordsize:c+" "+c,coordorigin:-u+" "+-u}),{width:c,height:c})}function s(e,s,l){t(p,t(i(o(),{rotation:360/r.lines*e+"deg",left:~~s}),t(i(n("roundrect",{arcsize:r.corners}),{width:u,height:r.width,left:r.radius,top:-r.width>>1,filter:l}),n("fill",{color:a(r.color,e),opacity:r.opacity}),n("stroke",{opacity:0}))))}var l,u=r.length+r.width,c=2*u,f=2*-(r.width+r.length)+"px",p=i(o(),{position:"absolute",top:f,left:f});if(r.shadow)for(l=1;l<=r.lines;l++)s(l,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(l=1;l<=r.lines;l++)s(l);return t(e,p)},l.prototype.opacity=function(e,t,n,r){var i=e.firstChild;r=r.shadow&&r.lines||0,i&&t+r<i.childNodes.length&&(i=i.childNodes[t+r],i=i&&i.firstChild,(i=i&&i.firstChild)&&(i.opacity=n))}}():u=r(h,"animation"),l}),function(e){if("object"==typeof exports)e(require("jquery"),require("spin"));else if("function"==typeof define&&define.amd)define(["jquery","spin"],e);else{if(!window.Spinner)throw new Error("Spin.js not present");e(window.jQuery,window.Spinner)}}(function(e,t){e.fn.spin=function(n,r){return this.each(function(){var i=e(this),o=i.data();o.spinner&&(o.spinner.stop(),delete o.spinner),!1!==n&&(n=e.extend({color:r||i.css("color")},e.fn.spin.presets[n]||n),o.spinner=new t(n).spin(this))})},e.fn.spin.presets={tiny:{lines:8,length:2,width:2,radius:3},small:{lines:8,length:4,width:3,radius:5},large:{lines:10,length:8,width:4,radius:8}}});
(function() {
  var Accordion, FrameworkAlign, FullscreenSlider, HorizontalTabs, Popup, ProductSlider, VerticalTabs, VideoModal,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  FrameworkAlign = (function() {
    function FrameworkAlign(element1, type1) {
      this.element = element1;
      this.type = type1;
      this.resizeListeners = bind(this.resizeListeners, this);
      this.checkOverlap = bind(this.checkOverlap, this);
      this.createOverlapDetectors = bind(this.createOverlapDetectors, this);
      this.position = bind(this.position, this);
      this.parent = this.element.parent();
      this.left_side_border;
      this.right_element_width = null;
      this.position();
      this.createOverlapDetectors();
      this.resizeListeners();
    }

    FrameworkAlign.prototype.position = function() {
      if (this.type === 'center-x') {
        return this.element.css({
          'margin-left': -(this.element.outerWidth() / 2)
        });
      }
    };

    FrameworkAlign.prototype.createOverlapDetectors = function() {
      var _this;
      _this = this;
      if (_this.type === 'right') {
        return this.right_element_width = _this.element.outerWidth();
      }
    };

    FrameworkAlign.prototype.checkOverlap = function() {
      var _this, left_element, left_side_border, right_side_border;
      _this = this;
      if (_this.type === 'right') {
        _this.parent.removeClass('overlap');
        left_element = _this.parent.children().eq(_this.element.index() - 1);
        left_side_border = left_element.position().left + left_element.outerWidth();
        right_side_border = _this.parent.outerWidth() - _this.right_element_width;
        if (left_side_border >= right_side_border) {
          return _this.parent.addClass('overlap');
        }
      }
    };

    FrameworkAlign.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      $(window).on('resize.FrameworkAlign', function() {
        return _this.checkOverlap();
      });
      return setTimeout(function() {
        return _this.checkOverlap();
      }, 1);
    };

    return FrameworkAlign;

  })();

  theme.classes.FrameworkAnimation = (function() {
    function FrameworkAnimation() {}

    return FrameworkAnimation;

  })();

  theme.classes.FrameworkArticle = (function() {
    function FrameworkArticle(root) {
      var _this;
      this.root = root;
      this.initializeDisqus = bind(this.initializeDisqus, this);
      this.hideTagInfo = bind(this.hideTagInfo, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.comments_enabled = _this.root.data('comments-enabled');
      _this.disqus_shortname = _this.root.attr('data-disqus-shortname');
      _this.enable_disqus = _this.root.data('enable-disqus');
      _this.no_tags_displayed = _this.root.find('.article--tag').length === 0 ? true : false;
      _this.load();
    }

    FrameworkArticle.prototype.load = function() {
      var _this;
      _this = this;
      if (_this.no_tags_displayed) {
        _this.hideTagInfo();
      }
      if (_this.enable_disqus && _this.comments_enabled) {
        return _this.initializeDisqus();
      }
    };

    FrameworkArticle.prototype.hideTagInfo = function() {
      var _this;
      _this = this;
      return _this.root.find('.article--tag-info').hide();
    };

    FrameworkArticle.prototype.initializeDisqus = function() {
      var _this;
      _this = this;
      return theme.utils.insertScript("https://" + _this.disqus_shortname + ".disqus.com/embed.js");
    };

    return FrameworkArticle;

  })();

  theme.classes.FrameworkBlog = (function() {
    function FrameworkBlog(root) {
      var _this;
      this.root = root;
      this.initMasonry = bind(this.initMasonry, this);
      this.eventListeners = bind(this.eventListeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.load();
    }

    FrameworkBlog.prototype.load = function() {
      var _this, is_mobile;
      _this = this;
      _this.eventListeners();
      _this.has_multi_columns = _this.root.attr('data-columns') !== '1';
      is_mobile = theme.utils.mqs.current_window === 'small';
      if (!is_mobile && _this.has_multi_columns) {
        _this.initMasonry();
        return $(window).on('load', function() {
          return _this.initMasonry();
        });
      }
    };

    FrameworkBlog.prototype.eventListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.Blog', theme.utils.debounce(100, function() {
        if (_this.has_multi_columns && theme.utils.mqs.current_window !== 'small') {
          return _this.initMasonry();
        } else {
          return $('.blog--list').masonry('destroy');
        }
      }));
    };

    FrameworkBlog.prototype.initMasonry = function() {
      return $('.blog--list').masonry({
        itemSelector: '.blog--list--item',
        percentPosition: true,
        horizontalOrder: true,
        columnWidth: '.blog--list--item'
      });
    };

    return FrameworkBlog;

  })();

  theme.classes.FrameworkCart = (function() {
    function FrameworkCart(root) {
      var _this;
      this.root = root;
      this.renderDynamicCheckoutButtons = bind(this.renderDynamicCheckoutButtons, this);
      this.updateTotals = bind(this.updateTotals, this);
      this.updateAllHasItems = bind(this.updateAllHasItems, this);
      this.addItem = bind(this.addItem, this);
      this.swapInImages = bind(this.swapInImages, this);
      this.getHtml = bind(this.getHtml, this);
      this.updateHtml = bind(this.updateHtml, this);
      this.htmlListener = bind(this.htmlListener, this);
      this.updateAllHtml = bind(this.updateAllHtml, this);
      this.updateNote = bind(this.updateNote, this);
      this.noteTypingListener = bind(this.noteTypingListener, this);
      this.updateQuantity = bind(this.updateQuantity, this);
      this.clearRequests = bind(this.clearRequests, this);
      this.toggleLoadingDisplay = bind(this.toggleLoadingDisplay, this);
      this.initAnimation = bind(this.initAnimation, this);
      this.removeItem = bind(this.removeItem, this);
      this.removeButtonListener = bind(this.removeButtonListener, this);
      this.minusButtonListener = bind(this.minusButtonListener, this);
      this.plusButtonListener = bind(this.plusButtonListener, this);
      this.inputBoxListener = bind(this.inputBoxListener, this);
      this.eventListeners = bind(this.eventListeners, this);
      this.getAjaxUrl = bind(this.getAjaxUrl, this);
      this.getOtherCarts = bind(this.getOtherCarts, this);
      _this = this;
      _this.other_carts = _this.getOtherCarts();
      _this.quantity_request = {};
      _this.quantity_timer = {};
      _this.total_item_count = $('.cart--external--total-items');
      _this.total_price = $('.cart--external--total-price');
      _this.view = _this.root.attr('data-view');
      _this.getAjaxUrl();
      _this.updateTotals();
      _this.htmlListener();
      _this.eventListeners();
      _this.renderDynamicCheckoutButtons();
    }

    FrameworkCart.prototype.getOtherCarts = function() {
      var _this, other_carts;
      _this = this;
      return other_carts = $('[data-js-class="Cart"]').not(_this.root);
    };

    FrameworkCart.prototype.getAjaxUrl = function() {
      var _this;
      _this = this;
      _this.ajax_url = window.location.href;
      _this.ajax_url = _this.ajax_url.replace(window.location.hostname + window.location.pathname, window.location.hostname + theme.urls.cart);
      _this.ajax_url = _this.ajax_url.replace('#', '');
      if (_this.ajax_url.indexOf("?") >= 0) {
        _this.ajax_url = _this.ajax_url + "&";
      } else {
        _this.ajax_url = _this.ajax_url + "?";
      }
      _this.ajax_desktop_url = _this.ajax_url + "view=ajax--desktop";
      return _this.ajax_mobile_url = _this.ajax_url + "view=ajax--mobile";
    };

    FrameworkCart.prototype.eventListeners = function() {
      var _this;
      _this = this;
      _this.inputBoxListener();
      _this.plusButtonListener();
      _this.minusButtonListener();
      _this.removeButtonListener();
      return _this.noteTypingListener();
    };

    FrameworkCart.prototype.inputBoxListener = function() {
      var _this, input_box;
      _this = this;
      input_box = _this.root.find('.cart--quantity--input');
      input_box.on('keydown', function(event) {
        if ((event.which < 48 || event.which > 57) && event.which !== 8 && event.which !== 37 && event.which !== 39 && event.which !== 9) {
          return event.preventDefault();
        }
      });
      return input_box.on('focusout', function(event) {
        var item_key, quantity;
        item_key = $(this).closest('.cart--item').data('item-key');
        _this.toggleLoadingDisplay(item_key);
        _this.clearRequests(item_key);
        quantity = theme.utils.isNaN(parseInt($(this).val())) ? 1 : parseInt($(this).val());
        if (quantity === 0) {
          return _this.removeItem(item_key);
        } else {
          return _this.updateQuantity(item_key, quantity, 0, function(success) {
            if (success) {
              return _this.updateAllHtml(function() {});
            }
          });
        }
      });
    };

    FrameworkCart.prototype.plusButtonListener = function() {
      var _this, plus_button;
      _this = this;
      plus_button = _this.root.find('.cart--item--quantity .plus');
      return plus_button.on('click', function() {
        var input, item_key, quantity;
        input = $(this).prev('input');
        item_key = $(this).closest('.cart--item').data('item-key');
        quantity = theme.utils.isNaN(parseInt(input.val())) ? 1 : parseInt(input.val()) + 1;
        input.val(quantity);
        _this.toggleLoadingDisplay(item_key);
        _this.clearRequests(item_key);
        _this.updateQuantity(item_key, quantity, 700, function(success) {
          if (success) {
            return _this.updateAllHtml(function() {});
          }
        });
        return false;
      });
    };

    FrameworkCart.prototype.minusButtonListener = function() {
      var _this, minus_button;
      _this = this;
      minus_button = _this.root.find('.cart--item--quantity .minus');
      return minus_button.on('click', function() {
        var input, item_key, quantity;
        input = $(this).siblings('input');
        item_key = $(this).closest('.cart--item').data('item-key');
        quantity = theme.utils.isNaN(parseInt(input.val())) ? 1 : parseInt(input.val()) - 1;
        if (quantity < 1) {
          quantity = 1;
        }
        input.val(quantity);
        _this.toggleLoadingDisplay(item_key);
        _this.clearRequests(item_key);
        _this.updateQuantity(item_key, quantity, 700, function(success) {
          if (success) {
            return _this.updateAllHtml(function() {});
          }
        });
        return false;
      });
    };

    FrameworkCart.prototype.removeButtonListener = function() {
      var _this, remove_button;
      _this = this;
      remove_button = _this.root.find('.cart--item--remove');
      return remove_button.on('click', function() {
        var item_key;
        item_key = $(this).closest('.cart--item').data('item-key');
        _this.toggleLoadingDisplay(item_key);
        _this.clearRequests(item_key);
        _this.removeItem(item_key);
        return false;
      });
    };

    FrameworkCart.prototype.removeItem = function(item_key) {
      var _this;
      _this = this;
      return _this.updateQuantity(item_key, 0, 0, function(success) {
        if (success) {
          return _this.updateAllHtml(function() {});
        }
      });
    };

    FrameworkCart.prototype.initAnimation = function() {
      var _this, animation_root;
      _this = this;
      animation_root = _this.root.find('[data-js-class="FrameworkLoadingAnimation"]');
      return new theme.classes.FrameworkLoadingAnimation(animation_root);
    };

    FrameworkCart.prototype.toggleLoadingDisplay = function(item_key) {
      var _this, checkout_button, input;
      _this = this;
      input = _this.root.find(".cart--item[data-item-key='" + item_key + "'] input");
      input.attr('data-loading', 'true');
      checkout_button = _this.root.find('.cart--checkout-button button');
      checkout_button.attr('disabled', true);
      return _this.root.find('.cart--additional-buttons').css('visibility', 'hidden');
    };

    FrameworkCart.prototype.clearRequests = function(item_key) {
      var _this;
      _this = this;
      if (_this.quantity_request.item_key) {
        _this.quantity_request.item_key.abort();
      }
      if (_this.quantity_timer.item_key) {
        return clearTimeout(_this.quantity_timer.item_key);
      }
    };

    FrameworkCart.prototype.updateQuantity = function(item_key, quantity, time_out, callback) {
      var _this, ajaxQuantity;
      _this = this;
      ajaxQuantity = function() {
        return _this.quantity_request.item_key = $.ajax({
          type: "POST",
          url: "/cart/change.js",
          dataType: "json",
          data: "quantity=" + quantity + "&id=" + item_key
        }).done(function(data, textStatus, jqXHR) {
          callback(true);
          return _this.updateTotals();
        }).fail(function(jqXHR, textStatus) {
          if (jqXHR.responseText) {
            console.log('Error - ajax update quantity', JSON.parse(jqXHR.responseText).description);
          }
          return callback(false);
        });
      };
      return _this.quantity_timer.item_key = setTimeout(ajaxQuantity, time_out);
    };

    FrameworkCart.prototype.noteTypingListener = function() {
      var _this, note_textbox;
      _this = this;
      note_textbox = _this.root.find('.cart--notes--textarea');
      return note_textbox.on('input', function() {
        if (_this.note_request) {
          _this.note_request.abort();
        }
        if (_this.note_timer) {
          clearTimeout(_this.note_timer);
        }
        return _this.updateNote($(this).val());
      });
    };

    FrameworkCart.prototype.updateNote = function(note) {
      var _this, ajaxNote;
      _this = this;
      ajaxNote = function() {
        return _this.note_request = $.ajax({
          type: "POST",
          url: "/cart/update.js",
          dataType: "json",
          data: {
            note: note
          }
        }).done(function() {
          return _this.other_carts.trigger('update-html');
        }).fail(function(jqXHR, textStatus) {
          if (jqXHR.responseText) {
            return console.log('Error - ajax update note', JSON.parse(jqXHR.responseText).description);
          }
        });
      };
      return _this.note_timer = setTimeout(ajaxNote, 350);
    };

    FrameworkCart.prototype.updateAllHtml = function(update_all_html_done) {
      var _this;
      _this = this;
      _this.updateHtml(update_all_html_done);
      return _this.other_carts.trigger('update-html');
    };

    FrameworkCart.prototype.htmlListener = function() {
      var _this;
      _this = this;
      return _this.root.on('update-html', function() {
        return _this.updateHtml(function() {});
      });
    };

    FrameworkCart.prototype.updateHtml = function(update_all_html_done) {
      var _this;
      _this = this;
      return _this.getHtml(_this.view, function(new_html) {
        var new_form, old_form;
        old_form = _this.root.find('.cart--form');
        new_form = new_html.find('.cart--form');
        new_form = _this.swapInImages(old_form, new_form);
        old_form.replaceWith(new_form);
        _this.eventListeners();
        _this.initAnimation();
        update_all_html_done();
        return $(window).trigger('theme.cart.update-complete');
      });
    };

    FrameworkCart.prototype.getHtml = function(view, callback) {
      var _this, url;
      _this = this;
      url = _this.ajax_desktop_url;
      if (view === 'mobile') {
        url = _this.ajax_mobile_url;
      }
      return $.ajax({
        url: url,
        type: "GET",
        dataType: "html"
      }).done(function(data) {
        var cart_html;
        cart_html = $($.parseHTML(data));
        callback(cart_html);
      }).fail(function(jqxhr, textStatus, error) {
        console.log("search.json Request Failed: " + textStatus + ", " + error);
        callback(false);
      });
    };

    FrameworkCart.prototype.swapInImages = function(old_html, new_html) {
      var _this, new_items;
      _this = this;
      new_items = new_html.find('.cart--item');
      new_items.each(function() {
        var new_image, new_instance, old_image, old_item, variant_id;
        variant_id = $(this).attr('data-variant-id');
        new_image = $(this).find('.cart--item--image');
        new_instance = new_html.find("[data-variant-id='" + variant_id + "'] .cart--item--image").index(new_image);
        old_item = old_html.find("[data-variant-id='" + variant_id + "']").eq(new_instance);
        if (old_item.length > 0) {
          old_image = old_item.find('.cart--item--image');
          return new_image.replaceWith(old_image);
        }
      });
      return new_html;
    };

    FrameworkCart.prototype.addItem = function(form, callback) {
      var _this;
      _this = this;
      return $.ajax({
        type: "POST",
        url: "/cart/add.js",
        dataType: "json",
        data: form.serialize()
      }).done(function(data, textStatus, jqXHR) {
        callback(true);
        _this.updateAllHasItems(1, true);
        return _this.updateTotals();
      }).fail(function(jqXHR, textStatus) {
        console.log('Error - ajax update quantity', JSON.parse(jqXHR.responseText).description);
        return callback(false, JSON.parse(jqXHR.responseText).description);
      });
    };

    FrameworkCart.prototype.updateAllHasItems = function(item_count, force_true) {
      var _this, has_items;
      if (force_true == null) {
        force_true = false;
      }
      _this = this;
      has_items = false;
      if (item_count > 0 || force_true) {
        has_items = true;
      }
      _this.root.attr('data-has-items', has_items);
      return _this.other_carts.attr('data-has-items', has_items);
    };

    FrameworkCart.prototype.updateTotals = function() {
      var _this;
      _this = this;
      return $.ajax({
        type: "GET",
        url: "/cart.js",
        dataType: "json"
      }).done(function(data, textStatus, jqXHR) {
        var count, total_price;
        total_price = theme.utils.formatMoney(data.total_price);
        count = data.item_count;
        _this.updateAllHasItems(count);
        _this.total_price.html(total_price);
        _this.total_item_count.text(count);
        return _this.updateTotalsComplete(count);
      }).fail(function(jqXHR, textStatus) {
        return console.log('Error - ajax updating totals', JSON.parse(jqXHR.responseText).description);
      });
    };

    FrameworkCart.prototype.renderDynamicCheckoutButtons = function() {
      var _this;
      _this = this;
      if (window.location.pathname === theme.urls.cart) {
        $('.off-canvas--right-sidebar .cart--additional-buttons').remove();
        if (theme.utils.mqs.current_window === 'small') {
          return $('[data-view="desktop"] .cart--additional-buttons').remove();
        }
      }
    };

    return FrameworkCart;

  })();

  theme.classes.FrameworkDisclosure = (function() {
    function FrameworkDisclosure(root) {
      var _this;
      this.root = root;
      this.optionChangeCallback = bind(this.optionChangeCallback, this);
      this.configureFormDisplay = bind(this.configureFormDisplay, this);
      this.toggleFormDisplay = bind(this.toggleFormDisplay, this);
      this.setOptionOnClick = bind(this.setOptionOnClick, this);
      this.hideFormWhenFocusOut = bind(this.hideFormWhenFocusOut, this);
      this.showFormWhenClick = bind(this.showFormWhenClick, this);
      this.resizeListener = bind(this.resizeListener, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.current_option = _this.root.find('.disclosure--current-option');
      _this.form = _this.root.find('.disclosure--form');
      _this.input = _this.root.find('[data-item="disclosure"]');
      _this.links = _this.root.find('.disclosure--option-link');
      _this.toggle = _this.root.find('.disclosure--toggle');
      _this.type = _this.root.attr('data-type');
      _this.toggle_and_form_gap = 8;
      _this.window_and_form_gap = 32;
      _this.form_space_needed = _this.form.height() + _this.toggle_and_form_gap + _this.window_and_form_gap;
      _this.load();
    }

    FrameworkDisclosure.prototype.load = function() {
      var _this;
      _this = this;
      _this.resizeListener();
      _this.showFormWhenClick();
      _this.hideFormWhenFocusOut();
      _this.setOptionOnClick();
      _this.configureFormDisplay();
      if (_this.type === 'url-redirect' || _this.type === 'localization') {
        return _this.optionChangeCallback();
      }
    };

    FrameworkDisclosure.prototype.resizeListener = function() {
      var _this;
      _this = this;
      return $(window).on('resize', theme.utils.debounce(100, function() {
        return _this.configureFormDisplay();
      }));
    };

    FrameworkDisclosure.prototype.showFormWhenClick = function() {
      var _this;
      _this = this;
      return _this.toggle.on('click keydown', function(event) {
        var aria_expanded;
        if (event.type === 'keydown' && event.key !== 'Enter') {
          return;
        }
        aria_expanded = $(this).attr('aria-expanded') === 'true';
        return _this.toggleFormDisplay(!aria_expanded);
      });
    };

    FrameworkDisclosure.prototype.hideFormWhenFocusOut = function() {
      var _this;
      _this = this;
      _this.toggle.on('focusout', function(event) {
        var form_lost_focus;
        form_lost_focus = _this.root.has(event.relatedTarget).length === 0;
        if (form_lost_focus) {
          return _this.toggleFormDisplay(false);
        }
      });
      _this.form.on('focusout', function(event) {
        var child_in_focus, is_visible;
        child_in_focus = $(this).has(event.relatedTarget).length > 0;
        is_visible = _this.toggle.attr('aria-expanded') === 'true';
        if (is_visible && !child_in_focus) {
          return _this.toggleFormDisplay(false);
        }
      });
      return _this.root.on('keydown', function(event) {
        if (event.key !== "Escape") {
          return;
        }
        _this.toggleFormDisplay(false);
        return _this.toggle.focus();
      });
    };

    FrameworkDisclosure.prototype.setOptionOnClick = function() {
      var _this;
      _this = this;
      return _this.links.on('click keydown', function(event) {
        var option_selected_name, option_selected_value;
        if (event.key === 'Enter') {
          _this.toggle.focus();
        } else if (event.type === 'keydown') {
          return;
        }
        option_selected_value = $(this).attr('data-value');
        option_selected_name = $(this).text();
        _this.toggleFormDisplay(false);
        _this.current_option.text(option_selected_name);
        _this.links.attr('aria-current', false);
        $(this).attr('aria-current', true);
        _this.input.val(option_selected_value);
        return _this.input.trigger('change');
      });
    };

    FrameworkDisclosure.prototype.toggleFormDisplay = function(open_form) {
      var _this;
      _this = this;
      return _this.toggle.attr('aria-expanded', open_form);
    };

    FrameworkDisclosure.prototype.configureFormDisplay = function() {
      var _this, clearance_height, close_to_bottom, close_to_top, distance_from_bottom, distance_from_top, height_of_canvas, height_of_toggle, max_form_height;
      _this = this;
      height_of_toggle = _this.toggle.outerHeight();
      clearance_height = height_of_toggle + _this.toggle_and_form_gap;
      height_of_canvas = _this.root.closest('[class^=off-canvas]').height();
      distance_from_top = _this.root.offset().top;
      distance_from_bottom = height_of_canvas - distance_from_top - height_of_toggle;
      close_to_bottom = (_this.form_space_needed > distance_from_bottom) && (distance_from_bottom < distance_from_top);
      close_to_top = (_this.form_space_needed > distance_from_top) && (distance_from_bottom > distance_from_top);
      max_form_height = $(window).height() - clearance_height - _this.window_and_form_gap;
      if (close_to_bottom) {
        max_form_height -= distance_from_bottom;
      } else if (close_to_top) {
        max_form_height -= distance_from_top;
      }
      _this.form.css('max-height', max_form_height + "px");
      if (close_to_bottom) {
        return _this.form.css('top', "-" + (_this.form.height() + _this.toggle_and_form_gap) + "px");
      } else {
        return _this.form.css('top', clearance_height + "px");
      }
    };

    FrameworkDisclosure.prototype.optionChangeCallback = function() {
      var _this;
      _this = this;
      return _this.input.on('change', function() {
        if (_this.type === 'url-redirect') {
          return window.location.href = $(this).val();
        } else if (_this.type === 'localization') {
          return $(this).closest('form').submit();
        }
      });
    };

    return FrameworkDisclosure;

  })();

  theme.classes.FrameworkFeaturedBlog = (function() {
    function FrameworkFeaturedBlog(root) {
      var _this;
      this.root = root;
      this.resizeListeners = bind(this.resizeListeners, this);
      this.matchImageHeights = bind(this.matchImageHeights, this);
      _this = this;
      _this.item_container = _this.root.find('.featured-blog--body');
      _this.items = _this.root.find('.featured-blog--item');
      _this.matchImageHeights();
      _this.resizeListeners();
    }

    FrameworkFeaturedBlog.prototype.matchImageHeights = function() {
      var _this;
      _this = this;
      return theme.utils.matchImageHeights(_this.item_container, _this.items, '.featured-blog--item--image');
    };

    FrameworkFeaturedBlog.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.FeaturedGrid', theme.utils.debounce(100, function() {
        return _this.matchImageHeights();
      }));
    };

    return FrameworkFeaturedBlog;

  })();

  theme.classes.FrameworkFeaturedCollections = (function() {
    function FrameworkFeaturedCollections(root) {
      var _this;
      this.root = root;
      this.resizeListeners = bind(this.resizeListeners, this);
      this.matchImageHeights = bind(this.matchImageHeights, this);
      _this = this;
      _this.item_container = _this.root.find('.featured-collections--body');
      _this.items = _this.root.find('.featured-collections--item');
      _this.matchImageHeights();
      _this.resizeListeners();
    }

    FrameworkFeaturedCollections.prototype.matchImageHeights = function() {
      var _this;
      _this = this;
      return theme.utils.matchImageHeights(_this.item_container, _this.items, '.featured-collections--image');
    };

    FrameworkFeaturedCollections.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.FeaturedCollections', theme.utils.debounce(100, function() {
        return _this.matchImageHeights();
      }));
    };

    return FrameworkFeaturedCollections;

  })();

  theme.classes.FrameworkFeaturedContent = (function() {
    function FrameworkFeaturedContent(root) {
      var _this;
      this.root = root;
      _this = this;
    }

    return FrameworkFeaturedContent;

  })();

  theme.classes.FrameworkFeaturedGrid = (function() {
    function FrameworkFeaturedGrid(root) {
      var _this;
      this.root = root;
      this.resizeListeners = bind(this.resizeListeners, this);
      this.matchImageHeights = bind(this.matchImageHeights, this);
      _this = this;
      _this.item_container = _this.root.find('.featured-grid--body');
      _this.items = _this.root.find('.featured-grid--item');
      _this.text_position = _this.root.data('text-position');
      _this.matchImageHeights();
      _this.resizeListeners();
    }

    FrameworkFeaturedGrid.prototype.matchImageHeights = function() {
      var _this;
      _this = this;
      _this.items.find('.featured-grid--item--image, .placeholder--root').css('height', 'auto');
      if (_this.text_position === 'center' && theme.utils.mqs.current_window !== 'small') {
        return;
      }
      return theme.utils.matchImageHeights(_this.item_container, _this.items, '.featured-grid--item--image');
    };

    FrameworkFeaturedGrid.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.FeaturedGrid', theme.utils.debounce(100, function() {
        return _this.matchImageHeights();
      }));
    };

    return FrameworkFeaturedGrid;

  })();

  theme.classes.FrameworkFeaturedProduct = (function() {
    function FrameworkFeaturedProduct(root) {
      var _this;
      this.root = root;
      this.updateVariantImage = bind(this.updateVariantImage, this);
      this.thumbNavigation = bind(this.thumbNavigation, this);
      this.addProductComplete = bind(this.addProductComplete, this);
      this.addToCartListener = bind(this.addToCartListener, this);
      this.updateVariantImage = bind(this.updateVariantImage, this);
      this.variantSelected = bind(this.variantSelected, this);
      this.updateVariantOnOptionChange = bind(this.updateVariantOnOptionChange, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.add_button = _this.root.find('.featured-product--add-to-cart');
      _this.cart_form = _this.root.find('.featured-product--cart-form > form');
      _this.compare_price = _this.root.find('.featured-product--compare-price');
      _this.main_images = _this.root.find('.featured-product--media');
      _this.onboarding = _this.root.data('onboarding');
      _this.option_inputs = _this.root.find('[data-item="disclosure"], [data-item="radio"]');
      _this.price = _this.root.find('.featured-product--actual-price');
      _this.price_wrapper = _this.root.find('.featured-product--price-wrapper');
      _this.smart_payment_buttons = _this.root.find('.featured-product--smart-payment-buttons');
      _this.thumbs = _this.root.find('.featured-product--thumb');
      _this.unavailable_variant = _this.root.find('.featured-product--unavailable-variant');
      _this.variants = JSON.parse(_this.root.find('.featured-product--json').text()).variants;
      _this.variant_listbox = _this.root.find('.featured-product--variant-select');
      _this.variant_sold_out = _this.root.find('.featured-product--sold-out--variant');
      _this.load();
    }

    FrameworkFeaturedProduct.prototype.load = function() {
      var _this;
      _this = this;
      _this.addToCartListener();
      _this.thumbNavigation();
      if (_this.onboarding === false) {
        if (_this.variants.length > 1) {
          return _this.updateVariantOnOptionChange();
        }
      }
    };

    FrameworkFeaturedProduct.prototype.updateVariantOnOptionChange = function() {
      var _this;
      _this = this;
      return _this.option_inputs.on('change', function() {
        var current_options, i, len, options, ref, variant, variant_title;
        current_options = _this.root.find('[data-item="disclosure"], [data-item="radio"]:checked');
        options = [];
        current_options.each(function() {
          return options.push($(this).val().trim());
        });
        variant_title = options.join(' / ');
        ref = _this.variants;
        for (i = 0, len = ref.length; i < len; i++) {
          variant = ref[i];
          if (variant.title === variant_title) {
            return _this.variantSelected(variant);
          }
        }
        return _this.variantSelected(false);
      });
    };

    FrameworkFeaturedProduct.prototype.variantSelected = function(variant) {
      var _this, product_sold_out, variant_compare_price, variant_price;
      _this = this;
      product_sold_out = false;
      if (_this.root.find('.featured-product--sold-out--product').length) {
        product_sold_out = true;
      }
      _this.variant_sold_out.hide();
      _this.unavailable_variant.hide();
      _this.add_button.hide();
      _this.price_wrapper.hide();
      _this.variant_listbox.find('option[selected]').removeAttr('selected');
      if (!variant) {
        _this.unavailable_variant.show();
        _this.smart_payment_buttons.hide();
        return false;
      } else if (variant && variant.available) {
        _this.price_wrapper.show();
        _this.add_button.show();
        _this.smart_payment_buttons.show();
        _this.variant_listbox.find("option[value='" + variant.id + "']").attr('selected', '');
      } else if (product_sold_out) {
        _this.variant_sold_out.hide();
        _this.add_button.hide();
        _this.smart_payment_buttons.hide();
      } else {
        _this.variant_sold_out.show();
        _this.smart_payment_buttons.hide();
      }
      variant_price = theme.utils.formatMoney(variant.price);
      _this.price.text(variant_price);
      if (variant.compare_at_price > variant.price) {
        variant_compare_price = theme.utils.formatMoney(variant.compare_at_price);
        _this.compare_price.text(variant_compare_price);
        _this.compare_price.show();
      } else {
        _this.compare_price.hide();
      }
      if (variant.featured_media) {
        return _this.updateVariantImage(variant.featured_media.id);
      }
    };

    FrameworkFeaturedProduct.prototype.updateVariantImage = function(variant_id) {
      var _this, variant_image;
      _this = this;
      _this.main_images.attr('data-active', 'false');
      variant_image = _this.main_images.filter("[data-id='" + variant_id + "']");
      return variant_image.attr('data-active', 'true');
    };

    FrameworkFeaturedProduct.prototype.addToCartListener = function() {
      var _this;
      _this = this;
      if (_this.cart_form.length > 0 && theme.settings.cart_type === 'drawer') {
        return _this.cart_form.on('submit', function() {
          _this.cart_form.find('.error').remove();
          _this.add_button.attr('data-loading', 'true');
          theme.partials.Cart.addItem($(this), function(success, error) {
            if (success) {
              return theme.partials.Cart.updateAllHtml(function() {
                return _this.addProductComplete();
              });
            } else {
              _this.cart_form.append("<div class='featured-product--error error'>" + error + "</div>");
              return _this.add_button.attr('data-loading', 'false');
            }
          });
          return false;
        });
      }
    };

    FrameworkFeaturedProduct.prototype.addProductComplete = function() {
      var _this;
      _this = this;
      _this.add_button.attr('data-loading', 'false');
      return $('[data-off-canvas--open="right-sidebar"]').first().trigger('click');
    };

    FrameworkFeaturedProduct.prototype.thumbNavigation = function() {
      var _this;
      _this = this;
      return _this.thumbs.on('keypress click', function(event) {
        var clicked_id, clicked_media, current_media;
        if (theme.utils.a11yClick(event)) {
          current_media = _this.root.find('.featured-product--media[data-active="true"] > *');
          current_media.trigger('pause-media');
          clicked_id = $(this).attr('data-id');
          clicked_media = _this.root.find(".featured-product--media[data-id='" + clicked_id + "'] > *:not(.a11y--focus-trigger)");
          _this.updateVariantImage(clicked_id);
          if (theme.utils.mqs.current_window !== 'small') {
            clicked_media.trigger('play-media');
          }
          if (clicked_media.parent().attr('data-media-type') !== 'image') {
            return clicked_media.focus();
          }
        }
      });
    };

    FrameworkFeaturedProduct.prototype.updateVariantImage = function(variant_id) {
      var _this, variant_image, variant_thumb;
      _this = this;
      _this.main_images.attr('data-active', 'false');
      variant_image = _this.main_images.filter("[data-id='" + variant_id + "']");
      variant_image.attr('data-active', 'true');
      _this.thumbs.attr('data-active', 'false');
      variant_thumb = _this.thumbs.filter("[data-id='" + variant_id + "']");
      return variant_thumb.attr('data-active', 'true');
    };

    return FrameworkFeaturedProduct;

  })();

  theme.classes.FrameworkFeaturedVideo = (function() {
    function FrameworkFeaturedVideo(root) {
      var _this;
      this.root = root;
      this.hideThumbnail = bind(this.hideThumbnail, this);
      this.playButtonListener = bind(this.playButtonListener, this);
      this.disablePlayerFocus = bind(this.disablePlayerFocus, this);
      this.vimeoEvents = bind(this.vimeoEvents, this);
      this.insertVimeoPlayer = bind(this.insertVimeoPlayer, this);
      this.youtubeEvents = bind(this.youtubeEvents, this);
      this.youtubeReady = bind(this.youtubeReady, this);
      this.insertYoutubePlayer = bind(this.insertYoutubePlayer, this);
      this.insertAPIScript = bind(this.insertAPIScript, this);
      this.playerInit = bind(this.playerInit, this);
      this.checkAPIScriptExists = bind(this.checkAPIScriptExists, this);
      _this = this;
      _this.play_buttons = _this.root.find('.feature-video--play svg, .feature-video--play-mobile svg');
      _this.section_id = _this.root.data('sectionId');
      _this.thumbnail = _this.root.data('thumbnail');
      _this.video_type = _this.root.data('videoType');
      _this.video_id = _this.root.data('videoId');
      _this.vimeoVars = {
        id: _this.video_id,
        autopause: 0,
        playsinline: 0,
        title: 0
      };
      _this.youtubeVars = {};
      if (_this.thumbnail) {
        _this.playButtonListener();
      } else {
        _this.checkAPIScriptExists();
      }
    }

    FrameworkFeaturedVideo.prototype.checkAPIScriptExists = function() {
      var _this;
      _this = this;
      if (_this.video_type === 'vimeo') {
        if (theme.utils.vimeoScriptAdded) {
          return _this.playerInit();
        } else {
          return _this.insertAPIScript('https://player.vimeo.com/api/player.js');
        }
      } else {
        if (theme.utils.youtubeScriptAdded) {
          return _this.playerInit();
        } else {
          return _this.insertAPIScript('https://www.youtube.com/iframe_api');
        }
      }
    };

    FrameworkFeaturedVideo.prototype.playerInit = function() {
      var _this;
      _this = this;
      if (_this.video_type === 'vimeo') {
        if (_this.thumbnail) {
          return _this.insertVimeoPlayer();
        } else {
          $(window).on('load', function() {
            return _this.insertVimeoPlayer();
          });
          return _this.root.on('theme:section:load', function() {
            return _this.insertVimeoPlayer();
          });
        }
      } else {
        if (_this.thumbnail) {
          return _this.insertYoutubePlayer();
        } else {
          $(window).on('load', function() {
            return _this.insertYoutubePlayer();
          });
          return _this.root.on('theme:section:load', function() {
            return _this.insertYoutubePlayer();
          });
        }
      }
    };

    FrameworkFeaturedVideo.prototype.insertAPIScript = function(api_url) {
      var _this, script_tag;
      _this = this;
      script_tag = document.createElement('script');
      script_tag.src = api_url;
      if (_this.video_type === 'vimeo') {
        theme.utils.vimeoScriptAdded = true;
        script_tag.onload = function() {
          return _this.insertVimeoPlayer();
        };
      } else {
        theme.utils.youtubeScriptAdded = true;
        $(window).on('theme.utils.youtubeAPIReady', function() {
          return _this.insertYoutubePlayer();
        });
      }
      return document.body.appendChild(script_tag);
    };

    FrameworkFeaturedVideo.prototype.insertYoutubePlayer = function() {
      var _this;
      _this = this;
      if (!_this.thumbnail) {
        _this.youtubeVars.enablejsapi = 1;
        _this.youtubeVars.origin = window.location.href;
        _this.youtubeVars.playsinline = 1;
        _this.youtubeVars.fs = 0;
        _this.youtubeVars.loop = 1;
        _this.youtubeVars.playlist = _this.video_id;
      }
      return _this.player = new YT.Player("player-" + _this.section_id, {
        videoId: _this.video_id,
        playerVars: _this.youtubeVars,
        events: {
          'onReady': _this.youtubeReady,
          'onStateChange': _this.youtubeEvents
        }
      });
    };

    FrameworkFeaturedVideo.prototype.youtubeReady = function() {
      var _this;
      _this = this;
      if (!_this.thumbnail) {
        _this.player.mute();
        _this.disablePlayerFocus();
      }
      return _this.player.playVideo();
    };

    FrameworkFeaturedVideo.prototype.youtubeEvents = function(event) {
      var YTP, _this, remains;
      _this = this;
      YTP = event.target;
      if (_this.thumbnail) {
        if (event.data === 0) {
          YTP.seekTo(0);
          return YTP.pauseVideo();
        }
      } else {
        if (event.data === 1) {
          remains = YTP.getDuration() - YTP.getCurrentTime();
          if (_this.rewindTO) {
            clearTimeout(_this.rewindTO);
          }
          return _this.rewindTO = setTimeout(function() {
            YTP.seekTo(0);
          }, (remains - 0.1) * 1000);
        }
      }
    };

    FrameworkFeaturedVideo.prototype.insertVimeoPlayer = function() {
      var _this;
      _this = this;
      if (!_this.thumbnail) {
        _this.vimeoVars.playsinline = 1;
        _this.vimeoVars.muted = 1;
        _this.vimeoVars.background = 1;
        _this.vimeoVars.loop = 1;
      }
      _this.player = new Vimeo.Player("player-" + _this.section_id, _this.vimeoVars);
      if (_this.thumbnail) {
        _this.vimeoEvents();
      } else {
        _this.disablePlayerFocus();
      }
      return _this.player.play();
    };

    FrameworkFeaturedVideo.prototype.vimeoEvents = function() {
      var _this;
      _this = this;
      _this.player.getDuration().then(function(duration) {
        return _this.player.addCuePoint(duration - 0.3, {});
      });
      return _this.player.on('cuepoint', function() {
        _this.player.setCurrentTime(0);
        return _this.player.pause();
      });
    };

    FrameworkFeaturedVideo.prototype.disablePlayerFocus = function() {
      var _this;
      _this = this;
      return $("#player-" + _this.section_id).attr('tabindex', '-1');
    };

    FrameworkFeaturedVideo.prototype.playButtonListener = function() {
      var _this;
      _this = this;
      _this.play_buttons.attr('tabindex', '0');
      return _this.play_buttons.on('click keydown', function(event) {
        if (event.type === 'keydown' && event.key !== 'Enter') {
          return;
        }
        _this.checkAPIScriptExists();
        return _this.hideThumbnail();
      });
    };

    FrameworkFeaturedVideo.prototype.hideThumbnail = function() {
      var _this;
      _this = this;
      return setTimeout(function() {
        return _this.root.find('.feature-video--header, .feature-video--thumbnail, .feature-video--play-mobile').hide();
      }, 350);
    };

    return FrameworkFeaturedVideo;

  })();

  theme.classes.FrameworkFeedbackBar = (function() {
    function FrameworkFeedbackBar(root) {
      var _this;
      this.root = root;
      this.load = bind(this.load, this);
      _this = this;
      _this.messages = _this.root.find('.feedback-bar--message span');
      _this.load();
    }

    FrameworkFeedbackBar.prototype.load = function() {
      var _this, anchor_tag, message, message_elem;
      _this = this;
      _this.messages.hide();
      anchor_tag = window.location.hash.substr(1);
      message = anchor_tag.replace('feedback-bar--', '');
      message_elem = _this.messages.filter("[data-feedback-bar--message='" + message + "']");
      if (message_elem.length) {
        message_elem.show();
        setTimeout(function() {
          return _this.root.attr('data-feedback-bar--open', 'true');
        }, 200);
        return setTimeout(function() {
          return _this.root.attr('data-feedback-bar--open', 'false');
        }, 3000);
      }
    };

    return FrameworkFeedbackBar;

  })();

  theme.classes.FrameworkFooter = (function() {
    function FrameworkFooter(root) {
      var _this;
      this.root = root;
      this.stickyFooter = bind(this.stickyFooter, this);
      this.addListeners = bind(this.addListeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.load();
    }

    FrameworkFooter.prototype.load = function() {
      var _this;
      _this = this;
      _this.addListeners();
      return _this.stickyFooter();
    };

    FrameworkFooter.prototype.addListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize', function() {
        return _this.stickyFooter();
      });
    };

    FrameworkFooter.prototype.stickyFooter = function() {
      var _this, total_content_height;
      _this = this;
      total_content_height = $('.header--root').outerHeight() + $('.main-content').outerHeight() + _this.root.outerHeight();
      if ($(window).outerHeight() > total_content_height) {
        return $('.main-content').css({
          'min-height': $(window).outerHeight() - $('.header--root').outerHeight() - _this.root.outerHeight()
        });
      }
    };

    return FrameworkFooter;

  })();

  theme.classes.FrameworkLoadingAnimation = (function() {
    function FrameworkLoadingAnimation(root) {
      var _this;
      this.root = root;
      _this = this;
      if (_this.root.hasClass('tiny')) {
        _this.root.spin('tiny');
      } else {
        _this.root.spin('small');
      }
    }

    return FrameworkLoadingAnimation;

  })();

  theme.classes.FrameworkMap = (function() {
    function FrameworkMap(root) {
      var _this;
      this.root = root;
      this.buildStyles = bind(this.buildStyles, this);
      this.buildMap = bind(this.buildMap, this);
      this.geolocate = bind(this.geolocate, this);
      this.loadMapsApi = bind(this.loadMapsApi, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.api_status = null;
      _this.map_instance = null;
      _this.key = _this.root.data('api-key');
      _this.address = _this.root.data('address');
      _this.theme = _this.root.data('theme');
      _this.styles = null;
      _this.container = _this.root.find('.map--google-maps');
      _this.center = null;
      _this.load();
    }

    FrameworkMap.prototype.load = function() {
      var _this;
      _this = this;
      if (_this.container.length > 0) {
        return _this.loadMapsApi();
      }
    };

    FrameworkMap.prototype.loadMapsApi = function() {
      var _this, other_map_loading_checker;
      _this = this;
      if (theme.utils.google_map_api_status === 'loading') {
        return other_map_loading_checker = setInterval(function() {
          if (theme.utils.google_map_api_status === 'loaded') {
            _this.geolocate();
            return clearInterval(other_map_loading_checker);
          }
        }, 100);
      } else if (typeof window.google === 'undefined') {
        theme.utils.google_map_api_status = 'loading';
        return $.getScript("https://maps.googleapis.com/maps/api/js?key=" + _this.key).then(function() {
          _this.geolocate();
          return theme.utils.google_map_api_status = 'loaded';
        });
      } else {
        return _this.geolocate();
      }
    };

    FrameworkMap.prototype.geolocate = function() {
      var _this, geocoder;
      _this = this;
      geocoder = new google.maps.Geocoder;
      return geocoder.geocode({
        address: _this.address
      }, function(results, status) {
        if (status === 'OK') {
          _this.center = results[0].geometry.location;
          _this.buildStyles();
          return _this.buildMap();
        } else {
          return console.log('couldn\'t convert address with geocoder');
        }
      });
    };

    FrameworkMap.prototype.buildMap = function() {
      var _this, center, map, mapOptions, marker;
      _this = this;
      mapOptions = {
        zoom: 15,
        center: _this.center,
        disableDefaultUI: true,
        zoomControl: true,
        scrollwheel: false,
        styles: _this.styles
      };
      map = new google.maps.Map(_this.container[0], mapOptions);
      center = map.getCenter();
      marker = new google.maps.Marker({
        map: map,
        position: map.getCenter()
      });
      return _this.map_instance = google.maps.event.addDomListener(window, 'resize', theme.utils.debounce(500, function() {
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
      }));
    };

    FrameworkMap.prototype.buildStyles = function() {
      var _this;
      _this = this;
      if (_this.theme === 'grayscale') {
        return _this.styles = [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          }, {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }, {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          }, {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          }, {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          }, {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          }, {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
          }, {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dadada"
              }
            ]
          }, {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          }, {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }, {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          }, {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#c9c9c9"
              }
            ]
          }, {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }
        ];
      } else if (_this.theme === 'dark') {
        return _this.styles = [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#212121"
              }
            ]
          }, {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }, {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#212121"
              }
            ]
          }, {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }, {
            "featureType": "administrative.land_parcel",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }, {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          }, {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#181818"
              }
            ]
          }, {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          }, {
            "featureType": "poi.park",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1b1b1b"
              }
            ]
          }, {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#2c2c2c"
              }
            ]
          }, {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#8a8a8a"
              }
            ]
          }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#373737"
              }
            ]
          }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#3c3c3c"
              }
            ]
          }, {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#4e4e4e"
              }
            ]
          }, {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          }, {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#000000"
              }
            ]
          }, {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#3d3d3d"
              }
            ]
          }
        ];
      }
    };

    return FrameworkMap;

  })();

  theme.classes.FrameworkMediaQueries = (function() {
    function FrameworkMediaQueries() {
      this.screenSizeListener = bind(this.screenSizeListener, this);
      this.getScreenSize = bind(this.getScreenSize, this);
      this.medium_screen = 768;
      this.large_screen = 1024;
      this.current_window = null;
      this.getScreenSize();
      this.screenSizeListener();
    }

    FrameworkMediaQueries.prototype.getScreenSize = function() {
      var _this, previous_window;
      _this = this;
      previous_window = _this.current_window;
      if (window.matchMedia("only screen and (min-width: " + _this.large_screen + "px)").matches) {
        if (_this.current_window !== 'large') {
          _this.current_window = 'large';
        }
      } else if (window.matchMedia("only screen and (min-width: " + _this.medium_screen + "px)").matches) {
        if (_this.current_window !== 'medium') {
          _this.current_window = 'medium';
        }
      } else {
        if (_this.current_window !== 'small') {
          _this.current_window = 'small';
        }
      }
      if (_this.current_window !== previous_window) {
        return $(window).trigger('theme.utils.mqs.updated');
      }
    };

    FrameworkMediaQueries.prototype.screenSizeListener = function() {
      var _this;
      _this = this;
      return $(window).on('resize', function() {
        return _this.getScreenSize();
      });
    };

    return FrameworkMediaQueries;

  })();

  theme.classes.FrameworkModal = (function() {
    function FrameworkModal(root) {
      var _this;
      this.root = root;
      _this = this;
      _this.fullscreen = _this.root.data('modal--fullscreen') ? true : false;
      if (_this.root.data('modal--custom-close')) {
        _this.custom_close_button = _this.root.data('modal--custom-close');
      } else {
        _this.custom_close_button = '';
      }
      _this.force_view = _this.root.data('force-view');
      _this.view = _this.root.data('modal--view');
      _this.nested_links = _this.root.find('.modal--root .modal--link');
      _this.nested_content = _this.root.find('.modal--root .modal--content');
      _this.links = _this.root.find('.modal--link').not(_this.nested_links);
      _this.content = _this.root.find('.modal--content').not(_this.nested_content);
      _this.window = $('.modal--window');
      _this.window_container = _this.window.find('.modal--container');
      _this.mask = _this.window.find('.modal--mask');
      _this.close_button = _this.window.find('.modal--close');
      _this.next_button = _this.window.find('.modal--next');
      _this.prev_button = _this.window.find('.modal--prev');
      _this.slider = null;
      _this.slides = null;
      _this.main_content_window = $('.off-canvas--main-content');
      _this.openListeners();
      _this.modal_state = 'closed';
      _this.nav_lock = false;
    }

    FrameworkModal.prototype.openListeners = function() {
      var _this;
      _this = this;
      return _this.links.on('keypress.FrameworkModal, click.FrameworkModal, quick-open', function(event) {
        var clicked_item;
        if (event.type === 'keypress' && theme.utils.a11yClick(event) === false) {
          return false;
        }
        clicked_item = $(this);
        _this.links.each(function(index) {
          if ($(this).is(clicked_item)) {
            if (event.type === 'quick-open') {
              return _this.open(index, true);
            } else {
              return _this.open(index);
            }
          }
        });
        return false;
      });
    };

    FrameworkModal.prototype.open = function(index, quick_open) {
      var _this, scrolled_position;
      if (quick_open == null) {
        quick_open = false;
      }
      _this = this;
      if (_this.modal_state === 'closed') {
        _this.modal_state = 'opened';
        $('html').addClass('modal-open');
        _this.window.attr('data-modal--fullscreen', _this.fullscreen);
        _this.window.attr('data-modal--custom-close', _this.custom_close_button);
        _this.window.attr('data-modal--view', _this.view);
        _this.closeListeners();
        _this.positionListeners();
        scrolled_position = $(window).scrollTop();
        _this.main_content_window.css({
          position: 'fixed',
          top: -scrolled_position
        });
        _this.moveContentToWindow();
        if (_this.slides.length > 1) {
          _this.next_button.show();
          _this.prev_button.show();
          _this.prevListeners();
          _this.nextListeners();
        }
        _this.window.show();
        _this.window_container.show();
        _this.renderVideo(_this.slides.eq(index));
        if (quick_open) {
          _this.slides.eq(index).addClass('active');
          return _this.position();
        } else {
          _this.mask.fadeIn();
          return _this.loadModal(_this.slides.eq(index), function() {
            return setTimeout(function() {
              return _this.window_container.find('input[type="text"]').focus();
            }, 0);
          });
        }
      }
    };

    FrameworkModal.prototype.moveContentToWindow = function(index) {
      var _this, content;
      _this = this;
      content = _this.root.find('.modal--content').not(_this.nested_content);
      _this.window_container.append(content);
      return _this.slides = _this.window_container.find('.modal--content');
    };

    FrameworkModal.prototype.detectImageSlide = function(slide) {
      var _this;
      return _this = this;
    };

    FrameworkModal.prototype.renderVideo = function(slide) {
      var _this, id, iframe, src_url, type, video;
      _this = this;
      video = slide.find('.responsive-video').first();
      src_url = video.data('video');
      type = _this.extractVideoType(src_url);
      id = _this.extractVideoId(src_url, type);
      iframe = _this.createIframe(type, id);
      if (type === 'vimeo') {
        video.addClass('vimeo');
      }
      if (type === 'kickstarter') {
        video.addClass('kickstarter');
      }
      return video.append(iframe);
    };

    FrameworkModal.prototype.extractVideoType = function(src_url) {
      var _this, matches, re;
      _this = this;
      re = /\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9_\-]+)/i;
      matches = re.exec(src_url);
      if (matches) {
        return 'youtube';
      }
      re = /^.*(vimeo)\.com\/(?:watch\?v=)?(.*?)(?:\z|$|&)/;
      matches = re.exec(src_url);
      if (matches) {
        return 'vimeo';
      }
      re = /^.*(kickstarter)\.com/g;
      matches = re.exec(src_url);
      if (matches) {
        return 'kickstarter';
      }
      return false;
    };

    FrameworkModal.prototype.extractVideoId = function(src_url, type) {
      var _this, match, regExp;
      _this = this;
      if (type === 'youtube') {
        regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        match = src_url.match(regExp);
        if (match && match[2].length === 11) {
          return match[2];
        }
      } else if (type === "vimeo") {
        regExp = /^.*(vimeo)\.com\/(?:watch\?v=)?(.*?)(?:\z|$|&)/;
        match = src_url.match(regExp);
        if (match) {
          return match[2];
        }
      } else if (type === "kickstarter") {
        regExp = /(?:kickstarter\.com\/projects\/)(.*)(|\?)/;
        match = src_url.match(regExp);
        if (match) {
          return match[1];
        }
      }
    };

    FrameworkModal.prototype.createIframe = function(type, id) {
      var _this;
      _this = this;
      if (type === "youtube") {
        return "<iframe src='//www.youtube.com/embed/" + id + "?autoplay=1' frameborder='0' allowfullwidth></iframe>";
      } else if (type === "vimeo") {
        return "<iframe src='//player.vimeo.com/video/" + id + "?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff&amp;autoplay=1?' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";
      } else if (type === "kickstarter") {
        return "<iframe src='//www.kickstarter.com/projects/" + id + "/widget/video.html' frameborder='0' webkitallowfullwidth mozallowfullwidth allowfullwidth></iframe>";
      }
    };

    FrameworkModal.prototype.removeVideos = function() {
      var _this;
      _this = this;
      return _this.slides.find('.responsive-video').each(function() {
        if ($(this).data('video')) {
          return $(this).find('iframe').remove();
        }
      });
    };

    FrameworkModal.prototype.loadModal = function(modal, callback) {
      var _this;
      _this = this;
      modal.addClass('active');
      _this.position();
      if (callback) {
        callback();
      }
      return _this.nav_lock = false;
    };

    FrameworkModal.prototype.position = function() {
      var _this, active_modal, entire_modal_height, modal_height, modal_width;
      _this = this;
      if (_this.window_container != null) {
        active_modal = _this.content.filter('.active');
        _this.window_container.attr('style', '');
        _this.positionVideoColumns(active_modal);
        _this.detectImageSlide(active_modal);
        _this.window.removeClass('fixed');
        modal_height = active_modal.outerHeight();
        modal_width = active_modal.outerWidth();
        entire_modal_height = modal_height + parseInt(_this.window.css('padding-top')) + parseInt(_this.window.css('padding-bottom'));
        if (_this.fullscreen) {
          return;
        }
        if (active_modal.hasClass('type--image')) {
          entire_modal_height = modal_height;
        }
        if ($(window).height() >= entire_modal_height && _this.force_view !== 'absolute') {
          return _this.window.addClass('fixed');
        } else {
          $("html, body").animate({
            scrollTop: 0
          }, '0');
          $('body,html').on('DOMMouseScroll.FrameworkModal mousewheel.FrameworkModal touchmove.FrameworkModal', function(event) {
            if (event.which > 0 || event.type === "mousewheel" || event.type === "touchmove") {
              return $("html,body").stop();
            }
          });
          return _this.window.removeClass('fixed');
        }
      }
    };

    FrameworkModal.prototype.positionVideoColumns = function(modal) {
      var _this, column_one, column_two, height_one, height_two;
      _this = this;
      if (modal.find('.responsive-video').length > 0) {
        column_one = modal.find('.fw--blocks > div').eq(0);
        column_two = modal.find('.fw--blocks > div').eq(1);
        column_one.css({
          width: ''
        });
        column_two.css({
          width: ''
        });
        height_one = column_one.outerHeight();
        height_two = column_two.outerHeight();
        if (height_one < height_two) {
          column_one.css({
            width: '100%'
          });
          return column_two.css({
            width: '100%'
          });
        }
      }
    };

    FrameworkModal.prototype.positionListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.FrameworkModal', function() {
        return _this.position();
      });
    };

    FrameworkModal.prototype.nextListeners = function() {
      var _this;
      _this = this;
      $(document).on('keydown.FrameworkModal', function(event) {
        if (event.keyCode === 39) {
          return _this.next();
        }
      });
      return _this.next_button.on('click.FrameworkModal', function() {
        return _this.next();
      });
    };

    FrameworkModal.prototype.next = function() {
      var _this, active_slide, index;
      _this = this;
      if (!_this.nav_lock) {
        _this.nav_lock = true;
        index = _this.slides.filter('.active').index();
        _this.slides.removeClass('active');
        _this.removeVideos();
        if ((index + 1) === _this.slides.length) {
          active_slide = _this.slides.eq(0);
        } else {
          active_slide = _this.slides.eq(index + 1);
        }
        _this.renderVideo(active_slide);
        return _this.loadModal(active_slide);
      }
    };

    FrameworkModal.prototype.prevListeners = function() {
      var _this;
      _this = this;
      $(document).on('keydown.FrameworkModal', function(event) {
        if (event.keyCode === 37) {
          return _this.prev();
        }
      });
      return _this.prev_button.on('click.FrameworkModal', function() {
        return _this.prev();
      });
    };

    FrameworkModal.prototype.prev = function() {
      var _this, active_slide, index;
      _this = this;
      if (!_this.nav_lock) {
        _this.nav_lock = true;
        index = _this.slides.filter('.active').index();
        _this.slides.removeClass('active');
        _this.removeVideos();
        if (index === 0) {
          active_slide = _this.slides.eq(_this.slides.length - 1);
        } else {
          active_slide = _this.slides.eq(index - 1);
        }
        _this.renderVideo(active_slide);
        return _this.loadModal(active_slide);
      }
    };

    FrameworkModal.prototype.closeListeners = function() {
      var _this;
      _this = this;
      _this.root.on('quick-close', function() {
        return _this.close(true);
      });
      $(document).on('keydown.FrameworkModal', function(event) {
        if (event.keyCode === 27) {
          return _this.close();
        }
      });
      _this.mask.on('click.FrameworkModal', function() {
        return _this.close();
      });
      _this.window_container.on('click.FrameworkModal', function() {
        return _this.close();
      });
      _this.content.on('click.FrameworkModal', function(event) {
        return event.stopPropagation();
      });
      return _this.close_button.on('click.FrameworkModal', function() {
        return _this.close();
      });
    };

    FrameworkModal.prototype.close = function(quick_close) {
      var _this, scrolled_position;
      if (quick_close == null) {
        quick_close = false;
      }
      _this = this;
      scrolled_position = parseInt(_this.main_content_window.css('top')) * -1;
      _this.root.trigger('modalClosed');
      _this.main_content_window.css({
        top: '0',
        position: 'relative'
      });
      $(window).scrollTop(scrolled_position);
      _this.putBackContent();
      _this.next_button.hide();
      _this.prev_button.hide();
      _this.window.hide();
      if (quick_close) {
        _this.mask.hide();
        this.window_container.empty();
        _this.modal_state = 'closed';
      } else {
        _this.mask.fadeOut(function() {
          _this.window_container.empty();
          return _this.modal_state = 'closed';
        });
      }
      $('html').removeClass('modal-open');
      _this.removeListeners();
      return $(window).trigger('FrameworkModal.afterClose');
    };

    FrameworkModal.prototype.putBackContent = function() {
      var _this;
      _this = this;
      _this.removeVideos();
      return _this.slides.removeClass('active').appendTo(_this.root);
    };

    FrameworkModal.prototype.removeListeners = function() {
      var _this;
      _this = this;
      $(document).off('keydown.FrameworkModal');
      $(window).off('resize.FrameworkModal');
      $('body,html').off('DOMMouseScroll.FrameworkModal mousewheel.FrameworkModal touchmove.FrameworkModal');
      _this.next_button.off('click.FrameworkModal');
      _this.prev_button.off('click.FrameworkModal');
      _this.close_button.off('click.FrameworkModal');
      _this.mask.off('click.FrameworkModal');
      return _this.window_container.off('click.FrameworkModal');
    };

    return FrameworkModal;

  })();

  theme.classes.FrameworkOffCanvas = (function() {
    function FrameworkOffCanvas(root) {
      var _this;
      this.root = root;
      this.touchListener = bind(this.touchListener, this);
      this.closeRight = bind(this.closeRight, this);
      this.closeLeft = bind(this.closeLeft, this);
      this.fadeInOverlay = bind(this.fadeInOverlay, this);
      this.openRight = bind(this.openRight, this);
      this.openLeft = bind(this.openLeft, this);
      this.toggle = bind(this.toggle, this);
      this.closeWithEscKey = bind(this.closeWithEscKey, this);
      this.closeWhenFocusOut = bind(this.closeWhenFocusOut, this);
      this.disableFocusItems = bind(this.disableFocusItems, this);
      this.toggleListeners = bind(this.toggleListeners, this);
      this.viewPortHeightListener = bind(this.viewPortHeightListener, this);
      this.setViewPortHeight = bind(this.setViewPortHeight, this);
      this.setState = bind(this.setState, this);
      this.unload = bind(this.unload, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.viewport = $('.off-canvas--viewport');
      _this.left_sidebar = $('.off-canvas--left-sidebar');
      _this.right_sidebar = $('.off-canvas--right-sidebar');
      _this.focus_triggers = $('.off-canvas--focus-trigger');
      _this.main_content = $('.off-canvas--main-content');
      _this.overlay = $('.off-canvas--overlay');
      _this.state = 'closed';
      _this.load();
    }

    FrameworkOffCanvas.prototype.load = function() {
      var _this;
      _this = this;
      _this.close = $('.off-canvas--close');
      _this.triggers = $('.off-canvas--open');
      _this.setViewPortHeight();
      _this.viewPortHeightListener();
      _this.toggleListeners();
      _this.touchListener();
      _this.disableFocusItems();
      _this.closeWhenFocusOut();
      return _this.closeWithEscKey();
    };

    FrameworkOffCanvas.prototype.unload = function() {
      var _this;
      _this = this;
      _this.triggers.off('click');
      _this.overlay.add(_this.close).off('click');
      $(document).off('touchstart.OffCanvas');
      return $(document).off('touchend.OffCanvas');
    };

    FrameworkOffCanvas.prototype.setState = function(state) {
      var _this;
      _this = this;
      _this.state = state;
      return _this.root.attr('data-off-canvas--state', state);
    };

    FrameworkOffCanvas.prototype.setViewPortHeight = function() {
      var _this;
      _this = this;
      return _this.viewport.css({
        'min-height': $(window).height()
      });
    };

    FrameworkOffCanvas.prototype.viewPortHeightListener = function() {
      var _this;
      _this = this;
      return $(window).on('resize', function() {
        return _this.setViewPortHeight();
      });
    };

    FrameworkOffCanvas.prototype.toggleListeners = function() {
      var _this;
      _this = this;
      _this.triggers.on('click keydown', function(event) {
        if (event.type === 'keydown' && event.key !== 'Enter') {
          return;
        }
        if ($(this).data('off-canvas--open') === 'left-sidebar') {
          _this.toggle('left-sidebar');
        } else if ($(this).data('off-canvas--open') === 'right-sidebar') {
          _this.toggle('right-sidebar');
        }
        return false;
      });
      return _this.overlay.add(_this.close).on('click', function() {
        if (_this.state === 'left-open') {
          return _this.toggle('left-sidebar');
        } else if (_this.state === 'right-open') {
          return _this.toggle('right-sidebar');
        }
      });
    };

    FrameworkOffCanvas.prototype.disableFocusItems = function() {
      var _this;
      _this = this;
      return $(window).on('load', function() {
        _this.left_sidebar.find(':focusable').attr('tabindex', '-1');
        _this.right_sidebar.find(':focusable').attr('tabindex', '-1');
        return _this.right_sidebar.find('.cart--additional-buttons').css('visibility', 'hidden');
      });
    };

    FrameworkOffCanvas.prototype.closeWhenFocusOut = function() {
      var _this;
      _this = this;
      return _this.focus_triggers.on('focus', function() {
        if (_this.state === 'left-open') {
          return _this.closeLeft();
        } else if (_this.state === 'right-open') {
          return _this.closeRight();
        }
      });
    };

    FrameworkOffCanvas.prototype.closeWithEscKey = function() {
      var _this;
      _this = this;
      return $(window).on('keydown', function(event) {
        if (event.key !== 'Escape') {
          return;
        }
        if (_this.state === 'left-open') {
          return _this.closeLeft();
        } else if (_this.state === 'right-open') {
          return _this.closeRight();
        }
      });
    };

    FrameworkOffCanvas.prototype.toggle = function(element) {
      var _this;
      _this = this;
      if (element === 'left-sidebar' && _this.state === 'closed') {
        return _this.openLeft();
      } else if (element === 'left-sidebar' && _this.state === 'left-open') {
        return _this.closeLeft();
      } else if (element === 'right-sidebar' && _this.state === 'closed') {
        return _this.openRight();
      } else if (element === 'right-sidebar' && _this.state === 'right-open') {
        return _this.closeRight();
      }
    };

    FrameworkOffCanvas.prototype.openLeft = function() {
      var _this;
      _this = this;
      _this.setState('left-open');
      _this.left_sidebar.find('[tabindex="-1"]').not('[data-item="hidden-text"] a').attr('tabindex', '0');
      _this.main_content.css({
        position: 'fixed',
        top: -($(window).scrollTop())
      });
      _this.left_sidebar.velocity({
        translateX: [0, '-100%']
      }, {
        complete: function() {
          _this.left_sidebar.css('position', 'relative');
          return _this.left_sidebar.find(':focusable:eq(1)').focus();
        }
      });
      return _this.fadeInOverlay();
    };

    FrameworkOffCanvas.prototype.openRight = function() {
      var _this;
      _this = this;
      _this.setState('right-open');
      _this.right_sidebar.find('[tabindex="-1"]:not(input)').attr('tabindex', '0');
      _this.right_sidebar.find('.cart--additional-buttons').css('visibility', 'unset');
      _this.main_content.css({
        position: 'fixed',
        top: -($(window).scrollTop())
      });
      _this.right_sidebar.velocity({
        translateX: ['-100%', 0]
      }, {
        complete: function() {
          _this.right_sidebar.css('position', 'relative');
          return _this.right_sidebar.find(':focusable:eq(1)').focus();
        }
      });
      return _this.fadeInOverlay();
    };

    FrameworkOffCanvas.prototype.fadeInOverlay = function() {
      var _this;
      _this = this;
      _this.overlay.show();
      return _this.overlay.velocity({
        opacity: '0.3'
      });
    };

    FrameworkOffCanvas.prototype.closeLeft = function() {
      var _this, scrolled_position;
      _this = this;
      if (_this.state !== 'left-open') {
        return false;
      }
      _this.setState('closed');
      _this.left_sidebar.find('[tabindex="0"]').attr('tabindex', '-1');
      scrolled_position = parseInt(_this.main_content.css('top')) * -1;
      _this.left_sidebar.velocity({
        translateX: ['-100%', 0]
      }, {
        complete: function() {
          _this.left_sidebar.css({
            position: 'absolute'
          });
          _this.main_content.css({
            position: 'relative',
            top: 'initial'
          });
          return $(window).scrollTop(scrolled_position);
        }
      });
      _this.overlay.velocity('fadeOut');
      return $("[data-off-canvas--open='left-sidebar']").focus();
    };

    FrameworkOffCanvas.prototype.closeRight = function() {
      var _this, scrolled_position;
      _this = this;
      if (_this.state !== 'right-open') {
        return false;
      }
      _this.setState('closed');
      _this.right_sidebar.find(':focusable').attr('tabindex', '-1');
      _this.right_sidebar.find('.cart--additional-buttons').css('visibility', 'hidden');
      scrolled_position = parseInt(_this.main_content.css('top')) * -1;
      _this.right_sidebar.velocity({
        translateX: [0, '-100%']
      }, {
        complete: function() {
          _this.right_sidebar.css({
            position: 'absolute'
          });
          _this.main_content.css({
            position: 'relative',
            top: 'initial'
          });
          return $(window).scrollTop(scrolled_position);
        }
      });
      return _this.overlay.velocity('fadeOut');
    };

    FrameworkOffCanvas.prototype.touchListener = function() {
      var _this, position;
      _this = this;
      if (!Modernizr.touchevents) {
        return false;
      }
      position = {
        start: {},
        end: {}
      };
      $(document).on('touchstart.OffCanvas', function(event) {
        position.start.x = event.originalEvent.touches[0].clientX;
        position.start.y = event.originalEvent.touches[0].clientY;
      });
      return $(document).on('touchend.OffCanvas', function(event) {
        position.end.x = event.originalEvent.changedTouches[0].clientX;
        position.end.y = event.originalEvent.changedTouches[0].clientY;
        if (Math.abs(position.start.y - position.end.y) > 30) {
          return false;
        }
        if (position.start.x > position.end.x + 5) {
          return _this.closeLeft();
        } else if (position.start.x < position.end.x - 5) {
          return _this.closeRight();
        }
      });
    };

    return FrameworkOffCanvas;

  })();

  theme.classes.FrameworkPasswordPage = (function() {
    function FrameworkPasswordPage(root) {
      var _this;
      this.root = root;
      this.disableSidebars = bind(this.disableSidebars, this);
      this.cancelLoginListener = bind(this.cancelLoginListener, this);
      this.loginFormListener = bind(this.loginFormListener, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.login_form = _this.root.find('.password--login-form');
      _this.login_cancel = _this.root.find('.password--cancel');
      _this.login_link = _this.root.find('.password--login-link');
      _this.signup_form = _this.root.find('.password--main > *');
      _this.load();
    }

    FrameworkPasswordPage.prototype.load = function() {
      var _this;
      _this = this;
      _this.loginFormListener();
      _this.cancelLoginListener();
      return _this.disableSidebars();
    };

    FrameworkPasswordPage.prototype.loginFormListener = function() {
      var _this;
      _this = this;
      return _this.login_link.on('click keydown', function(event) {
        if (event.type === 'keydown' && event.key !== 'Enter') {
          return;
        }
        $(this).css('visibility', 'hidden');
        _this.signup_form.hide();
        _this.login_form.css('visibility', 'visible');
        return _this.login_form.find('input[type="password"]').focus();
      });
    };

    FrameworkPasswordPage.prototype.cancelLoginListener = function() {
      var _this;
      _this = this;
      return _this.login_cancel.on('click keydown', function(event) {
        if (event.type === 'keydown' && event.key !== 'Enter') {
          return;
        }
        _this.signup_form.fadeIn();
        _this.login_form.css('visibility', 'hidden');
        return _this.login_link.css('visibility', 'visible');
      });
    };

    FrameworkPasswordPage.prototype.disableSidebars = function() {
      var _this;
      _this = this;
      return $('.off-canvas--left-sidebar, .off-canvas--right-sidebar').hide();
    };

    return FrameworkPasswordPage;

  })();

  theme.classes.FrameworkProductModel = (function() {
    function FrameworkProductModel(root) {
      var _this;
      this.root = root;
      this.loadModel = bind(this.loadModel, this);
      this.loadAssets = bind(this.loadAssets, this);
      this.eventListeners = bind(this.eventListeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.view = _this.root.data('view');
      _this.key = _this.root.closest('[data-id]').data('id');
      _this.cdn = 'https://cdn.shopify.com/shopifycloud/model-viewer-ui/assets/v1.0/model-viewer-ui';
      _this.load();
    }

    FrameworkProductModel.prototype.load = function() {
      var _this;
      _this = this;
      _this.eventListeners();
      if (theme.utils.modelScriptAdded) {
        return;
      }
      theme.utils.modelScriptAdded = true;
      return _this.loadAssets();
    };

    FrameworkProductModel.prototype.eventListeners = function() {
      var _this;
      _this = this;
      _this.root.on('model-ready', function() {
        return _this.loadModel();
      });
      _this.root.on('theme:section:load', function() {
        return _this.loadModel();
      });
      _this.root.on('pause-media', function() {
        if (_this.model) {
          return _this.model.pause();
        }
      });
      _this.root.on('play-media', function() {
        if (_this.model) {
          return _this.model.play();
        }
      });
      return $(window).on('resize.ProductModel', theme.utils.debounce(250, function() {
        $('.product-model--root').trigger('pause-media');
        return $('.product-model--root').trigger('model-ready');
      }));
    };

    FrameworkProductModel.prototype.loadAssets = function() {
      var _this;
      _this = this;
      theme.utils.insertStylesheet(_this.cdn + ".css");
      return theme.utils.insertScript(_this.cdn + ".en.js", function() {
        return $('.product-model--root').trigger('model-ready');
      });
    };

    FrameworkProductModel.prototype.loadModel = function() {
      var _this;
      _this = this;
      if (_this.model) {
        return;
      }
      if (theme.utils.mqs.current_window === 'small' && _this.view === 'desktop') {
        return;
      } else if (theme.utils.mqs.current_window !== 'small' && _this.view === 'mobile') {
        return;
      }
      return _this.model = new Shopify.ModelViewerUI(_this.root.find('model-viewer'));
    };

    return FrameworkProductModel;

  })();

  theme.classes.FrameworkProductRecommendations = (function() {
    function FrameworkProductRecommendations(root) {
      var _this;
      this.root = root;
      this.loadHoverImages = bind(this.loadHoverImages, this);
      this.checkIfEmpty = bind(this.checkIfEmpty, this);
      this.loadProducts = bind(this.loadProducts, this);
      this.resizeListeners = bind(this.resizeListeners, this);
      this.matchImageHeights = bind(this.matchImageHeights, this);
      _this = this;
      _this.loadProducts();
      _this.resizeListeners();
    }

    FrameworkProductRecommendations.prototype.matchImageHeights = function() {
      var _this;
      _this = this;
      _this.item_container = _this.root.find('.product-recommendations--body');
      _this.items = _this.root.find('.product--root');
      return theme.utils.matchImageHeights(_this.item_container, _this.items, '.product--image-wrapper');
    };

    FrameworkProductRecommendations.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize', theme.utils.debounce(100, function() {
        return _this.matchImageHeights();
      }));
    };

    FrameworkProductRecommendations.prototype.loadProducts = function() {
      var _this, maxProducts, productId, productRecommendations, request, requestUrl;
      _this = this;
      productRecommendations = document.getElementsByClassName("product-recommendations--root")[0];
      productId = productRecommendations.dataset.productId;
      maxProducts = productRecommendations.dataset.maxProducts;
      requestUrl = theme.urls.product_recommendations + "?section_id=framework--product-recommendations&limit=" + maxProducts + "&product_id=" + productId;
      request = new XMLHttpRequest();
      request.open("GET", requestUrl);
      request.onload = function() {
        var container;
        if (request.status >= 200 && request.status < 300) {
          container = document.createElement("div");
          container.innerHTML = request.response;
          productRecommendations.innerHTML = container.querySelector(".product-recommendations--root").innerHTML;
          _this.matchImageHeights();
          _this.checkIfEmpty();
          return _this.loadHoverImages();
        }
      };
      return request.send();
    };

    FrameworkProductRecommendations.prototype.checkIfEmpty = function() {
      var _this, empty;
      _this = this;
      empty = $('.product--root').length > 0 ? false : true;
      return $('.product-recommendations--root').attr('data-empty', empty);
    };

    FrameworkProductRecommendations.prototype.loadHoverImages = function() {
      var _this;
      _this = this;
      return $('.product--root[data-hover-image="true"]').each(function() {
        var product;
        product = $(this);
        return theme.utils.imagesLoaded(product, function() {
          return product.attr('data-hover-image', 'loaded');
        });
      });
    };

    return FrameworkProductRecommendations;

  })();

  theme.classes.FrameworkProductVideo = (function() {
    function FrameworkProductVideo(root) {
      var _this;
      this.root = root;
      this.skipVideo = bind(this.skipVideo, this);
      this.loadYoutubeVideo = bind(this.loadYoutubeVideo, this);
      this.loadPlyrVideo = bind(this.loadPlyrVideo, this);
      this.loadYoutubeAsset = bind(this.loadYoutubeAsset, this);
      this.loadPlyrAssets = bind(this.loadPlyrAssets, this);
      this.resizeListener = bind(this.resizeListener, this);
      this.youtubeListeners = bind(this.youtubeListeners, this);
      this.plyrListeners = bind(this.plyrListeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.view = _this.root.data('view');
      _this.type = _this.root.data('type');
      _this.loop_enabled = _this.root.data('loop-enabled');
      _this.load();
    }

    FrameworkProductVideo.prototype.load = function() {
      var _this;
      _this = this;
      _this.resizeListener();
      if (_this.type === 'youtube') {
        _this.id = _this.root.find('.product-video').attr('id');
        _this.video_id = _this.root.data('video-id');
        _this.youtubeListeners();
        return _this.loadYoutubeAsset();
      } else {
        _this.plyr_cdn = 'https://cdn.shopify.com/shopifycloud/shopify-plyr/v1.0/shopify-plyr';
        _this.plyrListeners();
        return _this.loadPlyrAssets();
      }
    };

    FrameworkProductVideo.prototype.plyrListeners = function() {
      var _this;
      _this = this;
      _this.root.on('plyr-video-ready', function() {
        return _this.loadPlyrVideo();
      });
      _this.root.on('theme:section:load', function() {
        return _this.loadPlyrVideo();
      });
      _this.root.on('pause-media', function() {
        if (_this.video) {
          return _this.video.pause();
        }
      });
      return _this.root.on('play-media', function() {
        if (_this.video) {
          return _this.video.play();
        }
      });
    };

    FrameworkProductVideo.prototype.youtubeListeners = function() {
      var _this;
      _this = this;
      $(window).on('theme.utils.youtubeAPIReady', function() {
        return _this.loadYoutubeVideo();
      });
      return _this.root.on('theme:section:load', function() {
        return _this.loadYoutubeVideo();
      });
    };

    FrameworkProductVideo.prototype.resizeListener = function() {
      var _this;
      _this = this;
      return $(window).on('resize.ProductVideo', theme.utils.debounce(250, function() {
        $('.product-video--root').trigger('pause-media');
        $('.product-video--root').trigger('plyr-video-ready');
        return $('.product-video--root').trigger('theme.utils.youtubeAPIReady');
      }));
    };

    FrameworkProductVideo.prototype.loadPlyrAssets = function() {
      var _this;
      _this = this;
      if (theme.utils.plyrScriptAdded) {
        return;
      }
      theme.utils.plyrScriptAdded = true;
      theme.utils.insertStylesheet(_this.plyr_cdn + ".css");
      return theme.utils.insertScript(_this.plyr_cdn + ".en.js", function() {
        return $('.product-video--root').trigger('plyr-video-ready');
      });
    };

    FrameworkProductVideo.prototype.loadYoutubeAsset = function() {
      var _this;
      _this = this;
      if (theme.utils.youtubeScriptAdded) {
        return;
      }
      theme.utils.youtubeScriptAdded = true;
      return theme.utils.insertScript('https://www.youtube.com/iframe_api');
    };

    FrameworkProductVideo.prototype.loadPlyrVideo = function() {
      var _this;
      _this = this;
      if (_this.video) {
        return;
      }
      if (_this.skipVideo()) {
        return;
      }
      return _this.video = new Shopify.Plyr(_this.root.find('video'), {
        iconUrl: _this.plyr_cdn + ".svg",
        loop: {
          active: _this.loop_enabled
        }
      });
    };

    FrameworkProductVideo.prototype.loadYoutubeVideo = function() {
      var _this;
      _this = this;
      if (_this.video) {
        return;
      }
      if (_this.skipVideo()) {
        return;
      }
      return _this.video = new YT.Player(_this.id, {
        videoId: _this.video_id,
        events: {
          onReady: function(event) {
            _this.root.on('pause-media', function() {
              return event.target.pauseVideo();
            });
            return _this.root.on('play-media', function() {
              return event.target.playVideo();
            });
          },
          onStateChange: function(event) {
            if (event.data === 0 && _this.loop_enabled) {
              event.target.seekTo(0);
            }
            if (event.data === 1) {
              return $('.product-media--featured > *').not(_this.root).trigger('pause-media');
            }
          }
        }
      });
    };

    FrameworkProductVideo.prototype.skipVideo = function() {
      var _this;
      _this = this;
      if (theme.utils.mqs.current_window === 'small' && _this.view === 'desktop') {
        return true;
      } else if (theme.utils.mqs.current_window !== 'small' && _this.view === 'mobile') {
        return true;
      } else {
        return false;
      }
    };

    return FrameworkProductVideo;

  })();

  theme.classes.FrameworkProduct = (function() {
    function FrameworkProduct(root) {
      var _this;
      this.root = root;
      this.modalCloseListener = bind(this.modalCloseListener, this);
      this.resizeListeners = bind(this.resizeListeners, this);
      this.getActiveImageId = bind(this.getActiveImageId, this);
      this.imageZoom = bind(this.imageZoom, this);
      this.updateVariantMedia = bind(this.updateVariantMedia, this);
      this.thumbNavigation = bind(this.thumbNavigation, this);
      this.addProductComplete = bind(this.addProductComplete, this);
      this.addToCartListener = bind(this.addToCartListener, this);
      this.updatePrices = bind(this.updatePrices, this);
      this.enableStockForm = bind(this.enableStockForm, this);
      this.enableCartButtons = bind(this.enableCartButtons, this);
      this.variantSelected = bind(this.variantSelected, this);
      this.updateHistoryState = bind(this.updateHistoryState, this);
      this.optionChangeListener = bind(this.optionChangeListener, this);
      this.updateLowInStock = bind(this.updateLowInStock, this);
      this.sizeChart = bind(this.sizeChart, this);
      this.getProductJson = bind(this.getProductJson, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.form_root = _this.root.find('.product-form--root');
      _this.handle = _this.form_root.attr('data-handle');
      _this.thumbs_root = _this.root.find('.product-media--root[data-view="thumbs"]');
      _this.featured_root = _this.root.find('.product-media--root[data-view="featured"]').not('[data-media-size="mobile"]');
      _this.magnify = _this.featured_root.data('magnify');
      _this.main_media = _this.featured_root.find('.product-media--featured');
      _this.media_container = _this.featured_root.closest('.product-media--wrapper');
      _this.thumbs = _this.thumbs_root.find('.product-media--thumb');
      _this.zoom_enabled = _this.featured_root.data('zoom-enabled');
      _this.zoom_images = _this.featured_root.find('.product-media--zoom-image');
      _this.enable_callback = _this.form_root.data('enable-callback');
      _this.add_to_cart_button = _this.form_root.find('.product-form--add-to-cart');
      _this.button_container = _this.form_root.find('.product-form--button-container');
      _this.button_text = _this.form_root.find('.product-form--text').text();
      _this.button_text_container = _this.form_root.find('.product-form--text');
      _this.compare_price = _this.form_root.find('.product-form--compare-price');
      _this.form = _this.form_root.find('.product-form--container');
      _this.low_stock_container = _this.form_root.find(".product-form--low-stock");
      _this.low_stock_threshold = _this.form_root.data('low-stock-amount');
      _this.price = _this.form_root.find('.product-form--price');
      _this.show_low_in_stock = _this.low_stock_threshold === void 0 ? false : true;
      _this.reference_unit = _this.form_root.find('.product-form--reference-unit');
      _this.reference_value = _this.form_root.find('.product-form--reference-value');
      _this.size_chart_enabled = _this.form_root.data('size-chart-enabled');
      _this.size_chart_option = _this.form_root.attr('data-size-chart-option');
      _this.smart_payment_buttons = _this.form_root.find('.product-form--smart-payment-buttons');
      _this.sold_out = _this.form_root.data('sold-out');
      _this.unavailable_container = _this.form_root.find('.product-form--unavailable');
      _this.unavailable_button = _this.unavailable_container.find('[type="submit"]');
      _this.unit_price_container = _this.form_root.find('.product-form--unit-price-container');
      _this.unit_price = _this.form_root.find('.product-form--unit-price');
      _this.variant_container = _this.form_root.find('.product-form--variants');
      _this.variant_listbox = _this.form_root.find('.product-form--variant-select');
      _this.first_variant_id = parseInt(_this.variant_listbox.find('[selected]').val());
      _this.option_inputs = _this.variant_container.find('[data-item="disclosure"], [data-item="radio"]');
      _this.load();
    }

    FrameworkProduct.prototype.load = function() {
      var _this;
      _this = this;
      if (_this.zoom_enabled) {
        _this.imageZoom();
        _this.resizeListeners();
        _this.modalCloseListener();
      }
      if (_this.thumbs) {
        _this.thumbNavigation();
      }
      if (_this.sold_out) {
        return _this.variantSelected(false);
      } else {
        if (_this.show_low_in_stock) {
          _this.updateLowInStock(_this.first_variant_id);
        }
        if (_this.handle) {
          _this.getProductJson();
        }
        if (theme.settings.cart_type === 'drawer') {
          return _this.addToCartListener();
        }
      }
    };

    FrameworkProduct.prototype.getProductJson = function() {
      var _this;
      _this = this;
      return $.ajax({
        url: "/products/" + _this.handle + ".js",
        type: "GET",
        dataType: "json"
      }).done(function(product_json) {
        if (product_json.variants.length > 1) {
          _this.optionChangeListener(product_json.variants);
          if (_this.size_chart_enabled) {
            return _this.sizeChart(product_json.options);
          }
        }
      }).fail(function(jqxhr, textStatus, error) {
        return console.log("product.json Request Failed: " + textStatus + ", " + error);
      });
    };

    FrameworkProduct.prototype.sizeChart = function(variant_options) {
      var _this;
      _this = this;
      _this.form_root.find('.disclosure--root, .radios--header').each(function(index) {
        if (variant_options[index].name.toLowerCase() === _this.size_chart_option.toLowerCase()) {
          $(this).append("<div class='product-form--modal-link' data-item='block-link'> <a class='modal--link' href='#'> " + theme.translations.size_chart_label + " </a> </div>");
          return false;
        }
      });
      return new theme.classes.FrameworkModal(_this.form_root.find('[data-js-class="FrameworkModal"]'));
    };

    FrameworkProduct.prototype.updateLowInStock = function(variant_id) {
      var _this, message, quantity;
      _this = this;
      quantity = _this.variant_listbox.find("[value='" + variant_id + "']").data('inventory-quantity');
      if (quantity > _this.low_stock_threshold || quantity === void 0) {
        return;
      } else if (quantity === 1) {
        message = theme.translations.low_in_stock.one;
      } else if (quantity > 1) {
        message = theme.translations.low_in_stock.other;
        message = message.replace(/\d+/, quantity);
      }
      return _this.low_stock_container.text(message).show();
    };

    FrameworkProduct.prototype.optionChangeListener = function(variants) {
      var _this, updateVariant;
      _this = this;
      updateVariant = function(variant) {
        if (_this.enable_callback) {
          _this.updateHistoryState(variant.id);
          return selectCallback(variant);
        } else {
          return _this.variantSelected(variant);
        }
      };
      return _this.option_inputs.on('change', function() {
        var current_options, i, len, options, variant, variant_title;
        current_options = _this.variant_container.find('[data-item="disclosure"], [data-item="radio"]:checked');
        options = [];
        current_options.each(function() {
          return options.push($(this).val().trim());
        });
        variant_title = options.join(' / ');
        for (i = 0, len = variants.length; i < len; i++) {
          variant = variants[i];
          if (variant.title === variant_title) {
            updateVariant(variant);
            return;
          }
        }
        return updateVariant(false);
      });
    };

    FrameworkProduct.prototype.updateHistoryState = function(variant_id) {
      var _this, new_variant_url;
      _this = this;
      new_variant_url = window.location.protocol + "//" + window.location.host + window.location.pathname;
      if (variant_id) {
        new_variant_url += "?variant=" + variant_id;
      }
      return window.history.replaceState({
        path: new_variant_url
      }, '', new_variant_url);
    };

    FrameworkProduct.prototype.variantSelected = function(variant) {
      var _this;
      _this = this;
      _this.form.find('.product-form--error').remove();
      _this.low_stock_container.hide();
      _this.variant_listbox.find('option[selected]').removeAttr('selected');
      if (variant && variant.available) {
        _this.variant_listbox.find("option[value='" + variant.id + "']").attr('selected', '');
        _this.enableCartButtons(true);
        _this.enableStockForm(false);
        _this.updatePrices(variant);
        if (_this.show_low_in_stock) {
          _this.updateLowInStock(variant.id);
        }
      } else {
        _this.enableCartButtons(false);
        _this.enableStockForm(true);
      }
      if (variant.featured_media) {
        return _this.updateVariantMedia(variant.featured_media.id);
      }
    };

    FrameworkProduct.prototype.enableCartButtons = function(enable) {
      var _this;
      _this = this;
      _this.add_to_cart_button.attr('disabled', !enable);
      if (enable) {
        _this.button_text_container.text(_this.button_text);
        return _this.smart_payment_buttons.show();
      } else {
        _this.button_text_container.text(theme.translations.sold_out);
        return _this.smart_payment_buttons.hide();
      }
    };

    FrameworkProduct.prototype.enableStockForm = function(enable) {
      var _this;
      _this = this;
      _this.unavailable_button.prop("disabled", !enable);
      if (enable) {
        return _this.unavailable_container.show();
      } else {
        return _this.unavailable_container.hide();
      }
    };

    FrameworkProduct.prototype.updatePrices = function(variant) {
      var _this, compare_price, unit_price, variant_price;
      _this = this;
      variant_price = theme.utils.formatMoney(variant.price);
      _this.price.html(variant_price);
      if (variant.compare_at_price > variant.price) {
        compare_price = theme.utils.formatMoney(variant.compare_at_price);
        _this.compare_price.html(compare_price);
        _this.compare_price.show();
      } else {
        _this.compare_price.hide();
      }
      if (variant.unit_price_measurement) {
        unit_price = theme.utils.formatMoney(variant.unit_price);
        _this.unit_price.html(unit_price);
        _this.reference_unit.html(variant.unit_price_measurement.reference_unit);
        if (variant.unit_price_measurement.reference_value === 1) {
          _this.reference_value.hide();
        } else {
          _this.reference_value.html(variant.unit_price_measurement.reference_value);
          _this.reference_value.show();
        }
        return _this.unit_price_container.show();
      } else {
        return _this.unit_price_container.hide();
      }
    };

    FrameworkProduct.prototype.addToCartListener = function() {
      var _this;
      _this = this;
      if (_this.form.length > 0 && theme.settings.cart_type === 'drawer') {
        return _this.form.on('submit', function() {
          _this.form.find('.product-form--error').remove();
          _this.button_container.attr('data-loading', 'true');
          theme.partials.Cart.addItem($(this), function(success, error) {
            if (success) {
              return theme.partials.Cart.updateAllHtml(function() {
                return _this.addProductComplete();
              });
            } else {
              _this.form.append("<div class='product-form--error' data-item='paragraph'> " + error + " </div>");
              return _this.button_container.attr('data-loading', 'false');
            }
          });
          return false;
        });
      }
    };

    FrameworkProduct.prototype.addProductComplete = function() {
      var _this;
      _this = this;
      _this.button_container.attr('data-loading', 'false');
      return $('[data-off-canvas--open="right-sidebar"]').first().trigger('click');
    };

    FrameworkProduct.prototype.thumbNavigation = function() {
      var _this;
      _this = this;
      return _this.thumbs.on('keypress click', function(event) {
        var clicked_id, clicked_media, current_media;
        if (theme.utils.a11yClick(event)) {
          current_media = _this.root.find('.product-media--featured[data-active="true"] > *');
          current_media.trigger('pause-media');
          clicked_id = $(this).attr('data-id');
          clicked_media = _this.root.find(".product-media--featured[data-id='" + clicked_id + "'] > *");
          _this.updateVariantMedia(clicked_id);
          if (theme.utils.mqs.current_window !== 'small') {
            clicked_media.trigger('play-media');
          }
          if (clicked_media.parent().attr('data-media-type') !== 'image') {
            return clicked_media.focus();
          }
        }
      });
    };

    FrameworkProduct.prototype.updateVariantMedia = function(variant_id) {
      var _this, variant_image, variant_thumb;
      _this = this;
      _this.main_media.attr('data-active', 'false');
      variant_image = _this.main_media.filter("[data-id='" + variant_id + "']");
      variant_image.attr('data-active', 'true');
      _this.thumbs.attr('data-active', 'false');
      variant_thumb = _this.thumbs.filter("[data-id='" + variant_id + "']");
      variant_thumb.attr('data-active', 'true');
      if (_this.zoom_enabled) {
        return _this.imageZoom();
      }
    };

    FrameworkProduct.prototype.imageZoom = function() {
      var _this, active_zoom_image, left_position, top_position, wrapper_height, wrapper_width, x_ratio, y_ratio;
      _this = this;
      if (_this.main_media.length < 1 || theme.utils.mqs.current_window === 'small') {
        return;
      }
      active_zoom_image = _this.zoom_images.filter("[data-id='" + (_this.getActiveImageId()) + "']");
      active_zoom_image.css('display', 'none');
      _this.media_container.off('mouseenter.Product.imageZoom');
      _this.media_container.off('mouseleave.Product.imageZoom');
      if (active_zoom_image.length > 0) {
        _this.media_container.attr('data-media-type', 'image');
        wrapper_width = _this.media_container.width();
        wrapper_height = _this.media_container.height();
        active_zoom_image.css('width', wrapper_width * _this.magnify);
        active_zoom_image.find('.image--root').css('width', wrapper_width * _this.magnify);
        active_zoom_image.find('img').addClass('lazypreload');
        top_position = _this.media_container.offset().top;
        left_position = _this.media_container.offset().left;
        x_ratio = (wrapper_width * _this.magnify - wrapper_width) / wrapper_width;
        y_ratio = (wrapper_height * _this.magnify - wrapper_height) / wrapper_height;
        _this.media_container.on('mouseenter.Product.imageZoom', function() {
          return active_zoom_image.css('display', 'block');
        });
        _this.media_container.on('mouseleave.Product.imageZoom', function() {
          return active_zoom_image.css('display', 'none');
        });
        return _this.media_container.on('mousemove', function(event) {
          var relative_left, relative_top;
          relative_left = event.pageX - left_position;
          relative_top = event.pageY - top_position;
          return active_zoom_image.css({
            'left': relative_left * -x_ratio,
            'top': relative_top * -y_ratio
          });
        });
      } else {
        return _this.media_container.attr('data-media-type', '');
      }
    };

    FrameworkProduct.prototype.getActiveImageId = function() {
      var _this, active_image, active_image_id;
      _this = this;
      active_image = _this.main_media.filter('[data-active="true"]');
      return active_image_id = active_image.attr('data-id');
    };

    FrameworkProduct.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.Product', theme.utils.debounce(100, function() {
        return _this.imageZoom();
      }));
    };

    FrameworkProduct.prototype.modalCloseListener = function() {
      var _this;
      _this = this;
      return $(window).on('FrameworkModal.afterClose', function() {
        return _this.imageZoom();
      });
    };

    return FrameworkProduct;

  })();

  theme.classes.FrameworkRadios = (function() {
    function FrameworkRadios(root) {
      var _this;
      this.root = root;
      this.setSwatchAppearance = bind(this.setSwatchAppearance, this);
      this.updateLabelOnChange = bind(this.updateLabelOnChange, this);
      this.preventFormSubmitOnEnter = bind(this.preventFormSubmitOnEnter, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.current_value = _this.root.find('.radios--option-current');
      _this.inputs = _this.root.find('[data-item="radio"]');
      _this.is_swatches = _this.root.data('is-swatches');
      _this.load();
    }

    FrameworkRadios.prototype.load = function() {
      var _this;
      _this = this;
      _this.preventFormSubmitOnEnter();
      if (_this.is_swatches) {
        _this.updateLabelOnChange();
        return _this.setSwatchAppearance();
      }
    };

    FrameworkRadios.prototype.preventFormSubmitOnEnter = function() {
      var _this;
      _this = this;
      return _this.inputs.on('keydown', function(event) {
        if (event.key === 'Enter') {
          return event.preventDefault();
        }
      });
    };

    FrameworkRadios.prototype.updateLabelOnChange = function() {
      var _this;
      _this = this;
      return _this.inputs.on('change', function() {
        return _this.current_value.text($(this).val());
      });
    };

    FrameworkRadios.prototype.setSwatchAppearance = function() {
      var _this;
      _this = this;
      return _this.inputs.each(function() {
        var swatch, swatch_color;
        swatch = $(this).siblings('.radios--swatch-button');
        swatch_color = $(this).val().toLowerCase().replace(/\s+/g, '');
        if (theme.swatches[swatch_color] === void 0) {
          return swatch.css('background-color', swatch_color);
        } else if (theme.swatches[swatch_color].indexOf('cdn.shopify.com') > -1) {
          return swatch.css('background-image', "url(" + theme.swatches[swatch_color] + ")");
        } else {
          return swatch.css('background-color', theme.swatches[swatch_color]);
        }
      });
    };

    return FrameworkRadios;

  })();

  theme.classes.FrameworkSearch = (function() {
    function FrameworkSearch(root) {
      var _this;
      this.root = root;
      this.resizeListeners = bind(this.resizeListeners, this);
      this.matchImageHeights = bind(this.matchImageHeights, this);
      this.getResults = bind(this.getResults, this);
      this.listenForKeyEntered = bind(this.listenForKeyEntered, this);
      this.getSearchUrl = bind(this.getSearchUrl, this);
      this.searchLinks = bind(this.searchLinks, this);
      this.loadSpinners = bind(this.loadSpinners, this);
      this.onOpen = bind(this.onOpen, this);
      _this = this;
      _this.articles = _this.root.find('.search--articles');
      _this.form = _this.root.find('form');
      _this.icon = _this.root.find('.search--icon');
      _this.loading = _this.root.find('.search--loading');
      _this.no_results = _this.root.find('.search--no-results');
      _this.products = _this.root.find('.search--products');
      _this.results = _this.root.find('.search--results');
      _this.text_box = _this.root.find('.search--textbox');
      _this.toggle_link = _this.root.find('.search--toggle');
      _this.show_articles = _this.root.data('show-articles');
      _this.show_pages = _this.root.data('show-pages');
      _this.view = _this.root.data('view');
      _this.ajax_request = null;
      _this.search_term = null;
      _this.search_url = null;
      _this.close_results_timer = null;
      _this.typing_timer = null;
      _this.article_page_combination = "";
      _this.offCanvas = theme.partials.OffCanvas;
      if (_this.show_articles && _this.show_pages) {
        _this.article_page_combination = 'article,page';
      } else if (_this.show_articles) {
        _this.article_page_combination = 'article';
      } else if (_this.show_pages) {
        _this.article_page_combination = 'page';
      }
      if (_this.view === 'modal') {
        _this.searchLinks();
        _this.getSearchUrl();
        _this.listenForKeyEntered();
        _this.loadSpinners();
      }
      _this.resizeListeners();
      _this.matchImageHeights();
    }

    FrameworkSearch.prototype.onOpen = function() {
      var _this, temp_val;
      _this = this;
      _this.text_box.focus();
      temp_val = _this.text_box.val();
      _this.text_box.val('');
      _this.text_box.val(temp_val);
      return _this.text_box.trigger('keyup');
    };

    FrameworkSearch.prototype.loadSpinners = function() {
      var _this, spinner;
      _this = this;
      spinner = _this.loading.find('.animation');
      if (spinner.hasClass('tiny')) {
        return spinner.spin('tiny');
      } else {
        return spinner.spin('small');
      }
    };

    FrameworkSearch.prototype.searchLinks = function() {
      var _this;
      _this = this;
      $(".off-canvas--main-content a[href='" + theme.urls.search + "']").on('click', function() {
        $('[data-trigger="search-modal"]').trigger('click');
        _this.onOpen();
        return false;
      });
      $(".off-canvas--right-sidebar a[href='" + theme.urls.search + "']").on('click', function() {
        _this.offCanvas.closeRight();
        setTimeout(function() {
          $('[data-trigger="search-modal"]').trigger('click');
          return _this.onOpen();
        }, 450);
        return false;
      });
      return $(".off-canvas--left-sidebar a[href='" + theme.urls.search + "']").on('click', function() {
        _this.offCanvas.closeLeft();
        setTimeout(function() {
          $('[data-trigger="search-modal"]').trigger('click');
          return _this.onOpen();
        }, 450);
        return false;
      });
    };

    FrameworkSearch.prototype.getSearchUrl = function() {
      var _this;
      _this = this;
      _this.search_url = window.location.href;
      _this.search_url = _this.search_url.replace(window.location.hostname + window.location.pathname, window.location.hostname + theme.urls.search);
      _this.search_url = _this.search_url.replace('#', '');
      if (_this.search_url.indexOf("?") >= 0) {
        return _this.search_url = _this.search_url + "&";
      } else {
        return _this.search_url = _this.search_url + "?";
      }
    };

    FrameworkSearch.prototype.listenForKeyEntered = function() {
      var _this;
      _this = this;
      return _this.text_box.attr("autocomplete", "off").on("keyup paste", function(event) {
        var term;
        clearTimeout(_this.typing_timer);
        term = $(this).val();
        if (term.length < 2 && event.type !== 'paste') {
          _this.products.empty();
          _this.articles.empty();
          _this.loading.hide();
          _this.icon.show();
          return false;
        }
        _this.loading.show();
        _this.icon.hide();
        return _this.typing_timer = setTimeout(function() {
          var url;
          clearTimeout(_this.typing_timer);
          url = _this.search_url + "view=ajax-product&type=product&q=" + term + "*";
          _this.getResults(url, term, 'product');
          if (_this.show_articles || _this.show_pages) {
            url = _this.search_url + "view=ajax-article-page&type=" + _this.article_page_combination + "&q=" + term + "*";
            return _this.getResults(url, term, 'article');
          }
        }, 750);
      });
    };

    FrameworkSearch.prototype.getResults = function(url, term, type) {
      var _this;
      _this = this;
      _this.products.empty();
      _this.articles.empty();
      $.ajax({
        url: url,
        type: "GET",
        dataType: "html",
        success: function(data) {
          _this.loading.hide();
          _this.icon.show();
          if (type === 'product') {
            _this.products.empty();
            _this.products.append(data);
            return _this.matchImageHeights();
          } else if (type === 'article') {
            _this.articles.empty();
            return _this.articles.append(data);
          }
        },
        error: function(jqxhr, textStatus, error) {
          return console.log("search.json Request Failed: " + textStatus + ", " + error);
        }
      });
    };

    FrameworkSearch.prototype.matchImageHeights = function() {
      var _this;
      _this = this;
      return theme.utils.matchImageHeights(_this.products, _this.products.find('.product--root'), '.product--image-wrapper');
    };

    FrameworkSearch.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.Search', theme.utils.debounce(100, function() {
        return _this.matchImageHeights();
      }));
    };

    return FrameworkSearch;

  })();

  theme.classes.FrameworkSections = (function() {
    function FrameworkSections() {
      this.deselectBlock = bind(this.deselectBlock, this);
      this.selectBlock = bind(this.selectBlock, this);
      this.deselectSection = bind(this.deselectSection, this);
      this.selectSection = bind(this.selectSection, this);
      this.unload = bind(this.unload, this);
      this.load = bind(this.load, this);
      this.getActiveBlock = bind(this.getActiveBlock, this);
      this.getActiveSection = bind(this.getActiveSection, this);
      this.listeners = bind(this.listeners, this);
      var _this;
      _this = this;
      _this.listeners();
    }

    FrameworkSections.prototype.listeners = function() {
      var _this;
      _this = this;
      _this.load();
      _this.unload();
      _this.selectSection();
      _this.deselectSection();
      _this.selectBlock();
      return _this.deselectBlock();
    };

    FrameworkSections.prototype.getActiveSection = function(event) {
      var _this, active_section;
      _this = this;
      active_section = $(event.target).find('[data-section-id]');
      return active_section;
    };

    FrameworkSections.prototype.getActiveBlock = function(event) {
      var _this, active_block;
      _this = this;
      active_block = $(event.target);
      return active_block;
    };

    FrameworkSections.prototype.load = function() {
      var _this;
      _this = this;
      return $(document).on('shopify:section:load', function(event) {
        var active_section;
        theme.utils.loadJsClasses();
        active_section = _this.getActiveSection(event);
        active_section.triggerHandler("theme:section:load");
        return active_section.find('[data-js-class]').each(function() {
          return $(this).triggerHandler("theme:section:load");
        });
      });
    };

    FrameworkSections.prototype.unload = function() {
      var _this;
      _this = this;
      return $(document).on('shopify:section:unload', function(event) {
        var active_section;
        active_section = _this.getActiveSection(event);
        active_section.triggerHandler("theme:section:unload");
        return active_section.find('[data-js-loaded="true"]').each(function() {
          return $(this).triggerHandler("theme:section:unload");
        });
      });
    };

    FrameworkSections.prototype.selectSection = function() {
      var _this;
      _this = this;
      return $(document).on('shopify:section:select', function(event) {
        var active_section;
        active_section = _this.getActiveSection(event);
        return active_section.triggerHandler("theme:section:select");
      });
    };

    FrameworkSections.prototype.deselectSection = function() {
      var _this;
      _this = this;
      return $(document).on('shopify:section:deselect', function(event) {
        var active_section;
        active_section = _this.getActiveSection(event);
        return active_section.triggerHandler('theme:section:deselect');
      });
    };

    FrameworkSections.prototype.selectBlock = function() {
      var _this;
      _this = this;
      return $(document).on('shopify:block:select', function(event) {
        var active_block;
        active_block = _this.getActiveBlock(event);
        return active_block.triggerHandler('theme:block:select');
      });
    };

    FrameworkSections.prototype.deselectBlock = function() {
      var _this;
      _this = this;
      return $(document).on('shopify:block:deselect', function(event) {
        var active_block;
        active_block = _this.getActiveBlock(event);
        return active_block.triggerHandler('theme:block:deselect');
      });
    };

    return FrameworkSections;

  })();

  theme.classes.FrameworkServiceList = (function() {
    function FrameworkServiceList(root) {
      var _this;
      this.root = root;
      this.balanceColumns = bind(this.balanceColumns, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.section_id = _this.root.data('section-id');
      _this.block_list = _this.root.find('.service-list--blocks');
      _this.blocks = _this.root.find('li');
      _this.blocks_container = _this.root.find('.service-list--container');
      _this.headers = _this.root.find('.service-list--block-header');
      _this.single_column = _this.root.find('.service-list--single-column');
      _this.left_column = _this.root.find('.service-list--left-column');
      _this.right_column = _this.root.find('.service-list--right-column');
      _this.load();
    }

    FrameworkServiceList.prototype.load = function() {
      var _this;
      _this = this;
      return _this.balanceColumns();
    };

    FrameworkServiceList.prototype.balanceColumns = function() {
      var _this, assignLoopList, isTypeHeader, loop_list, offset, thresholdBreached, with_multiple_headers;
      _this = this;
      offset = _this.root.data('service-list--show-descriptions') === true ? 75 : 0;
      with_multiple_headers = _this.block_list.length > 1 ? true : false;
      isTypeHeader = function(item) {
        return item.hasClass('service-list--block-header');
      };
      thresholdBreached = function() {
        var left_column_height, right_column_height, single_column_height;
        single_column_height = _this.single_column.outerHeight();
        left_column_height = _this.left_column.outerHeight();
        right_column_height = _this.right_column.outerHeight();
        return left_column_height >= parseFloat(right_column_height + single_column_height - offset);
      };
      assignLoopList = function() {
        if (with_multiple_headers) {
          _this.root.attr('data-service-list--has-headers', true);
          return _this.block_list;
        } else {
          _this.left_column.append('<ul class="service-list--blocks"></ul>');
          return _this.blocks;
        }
      };
      loop_list = assignLoopList();
      return loop_list.each(function(index) {
        if (thresholdBreached()) {
          _this.single_column.find('.service-list--blocks').appendTo(_this.right_column);
          return;
        } else {
          if (with_multiple_headers) {
            $(this).appendTo(_this.left_column);
          } else {
            if (isTypeHeader($(this))) {
              $(this).find('.service-list--block-header--text').prependTo(_this.blocks_container);
              $(this).remove();
            } else {
              $(this).appendTo(_this.left_column.find('.service-list--blocks'));
            }
          }
        }
        if (index === loop_list.length - 1 && _this.right_column.is(':empty') && _this.headers.length > 1) {
          return _this.left_column.find('.service-list--blocks').last().appendTo(_this.right_column);
        }
      });
    };

    return FrameworkServiceList;

  })();

  theme.classes.FrameworkSlider = (function() {
    function FrameworkSlider(container1) {
      this.container = container1;
      this.eventListeners = bind(this.eventListeners, this);
      this.pauseMedia = bind(this.pauseMedia, this);
      this.alignPlayButton = bind(this.alignPlayButton, this);
      this.updateContextMenu = bind(this.updateContextMenu, this);
      this.autoplay = bind(this.autoplay, this);
      this.formatPaginationNumbers = bind(this.formatPaginationNumbers, this);
      this.getActiveIndex = bind(this.getActiveIndex, this);
      this.createSlider = bind(this.createSlider, this);
      this.autoplay_enabled = this.container.data('autoplay') ? true : false;
      this.navigation = this.container.data('navigation') ? true : false;
      this.pagination_numbers = this.container.data('pagination-numbers') ? true : false;
      this.autoplay_frequency = 3000;
      this.slide_length = this.container.children().length;
      this.active_index = 0;
      this.news_panel = this.container.data('news-panel') ? true : false;
      this.createSlider();
      this.eventListeners();
      this.owl = this.container.data('owlCarousel');
    }

    FrameworkSlider.prototype.createSlider = function() {
      var _this, slider;
      _this = this;
      slider = this.container.owlCarousel({
        singleItem: true,
        navigation: _this.navigation,
        navigationText: false,
        pagination: _this.container.data('pagination') ? true : false,
        paginationNumbers: _this.pagination_numbers,
        scrollPerPageNav: true,
        slideSpeed: 800,
        autoHeight: false,
        autoPlay: _this.autoplay(),
        afterInit: function() {
          return $(window).trigger('slider.ready');
        },
        afterAction: function() {
          _this.active_index = _this.getActiveIndex();
          _this.alignPlayButton();
          _this.updateContextMenu(_this.active_index);
          _this.formatPaginationNumbers();
          return _this.pauseMedia();
        }
      });
      if (_this.navigation) {
        slider.find('.owl-prev').html('<svg class="icon--root icon--chevron-left" viewBox="0 0 12 20"> <path d="M2.648 10l8.613-8.614L9.99.114.102 10l9.887 9.886 1.272-1.272z" fill-rule="nonzero" /> </svg>');
        slider.find('.owl-next').html('<svg class="icon--root icon--chevron-right" viewBox="0 0 12 20"> <path d="M8.716 10L.102 18.614l1.273 1.272L11.261 10 1.375.114.102 1.386z" fill-rule="nonzero" /> </svg>');
      }
      return slider;
    };

    FrameworkSlider.prototype.getActiveIndex = function() {
      return this.container.find('.owl-pagination .owl-page.active').index();
    };

    FrameworkSlider.prototype.formatPaginationNumbers = function() {
      return this.container.find('.owl-page.active .owl-numbers').text((this.active_index + 1) + "/" + this.slide_length);
    };

    FrameworkSlider.prototype.autoplay = function() {
      if (this.autoplay_enabled) {
        return this.autoplay_frequency;
      }
      return false;
    };

    FrameworkSlider.prototype.updateContextMenu = function(index) {
      var context_navigation, type_class;
      if (this.news_panel) {
        type_class = "." + (this.container.find('.slide').eq(index).data('feed-type'));
        context_navigation = this.container.closest('.template--index--news').find('.context-navigation');
        context_navigation.find('.item').hide();
        return context_navigation.find(type_class).show();
      }
    };

    FrameworkSlider.prototype.alignPlayButton = function() {
      var play_button, play_button_height, slide, slide_height, video_offset;
      slide = this.container.find('.owl-item').eq(this.active_index);
      play_button = slide.find('.play-button');
      if (play_button.length === 0) {
        return;
      }
      play_button.css('visibility', 'hidden');
      if ($('body').hasClass('transparent-menu') && $('.header--root').css('position') === 'absolute') {
        slide_height = slide.outerHeight();
        play_button_height = play_button.outerHeight();
        video_offset = (slide_height - play_button_height) / 2;
        play_button.css({
          'margin-top': 0,
          'top': video_offset
        });
      } else {
        play_button.css({
          'margin-top': '-40px',
          'top': '50%'
        });
      }
      return play_button.css('visibility', 'visible');
    };

    FrameworkSlider.prototype.pauseMedia = function() {
      var _this;
      _this = this;
      return _this.container.find('.product-video--root, .product-model--root').trigger('pause-media');
    };

    FrameworkSlider.prototype.eventListeners = function() {
      var _this;
      _this = this;
      this.container.find(".play-button").on('click', function() {
        var video_modal;
        video_modal = new VideoModal($(this).closest('.video'));
        video_modal.open();
        _this.owl.stop();
        return false;
      });
      return this.container.find('.owl-pagination .owl-page, .skip-to-next').on('click', function() {
        _this.owl.next();
        return false;
      });
    };

    return FrameworkSlider;

  })();

  theme.classes.FrameworkStickyColumn = (function() {
    function FrameworkStickyColumn(container1, column_a, column_b) {
      this.container = container1;
      this.column_a = column_a;
      this.column_b = column_b;
      this.Listeners = bind(this.Listeners, this);
      this.setColumnPosition = bind(this.setColumnPosition, this);
      this.getAlignment = bind(this.getAlignment, this);
      this.getState = bind(this.getState, this);
      this.resetLargerColumn = bind(this.resetLargerColumn, this);
      this.getSmallerColumn = bind(this.getSmallerColumn, this);
      this.heightsHaveChanged = bind(this.heightsHaveChanged, this);
      this.setHeights = bind(this.setHeights, this);
      this.loadColumns = bind(this.loadColumns, this);
      if (Modernizr.touchevents) {
        return false;
      }
      this.current_state = 'auto';
      this.column_a_height = 0;
      this.column_b_height = 0;
      this.loadColumns();
    }

    FrameworkStickyColumn.prototype.loadColumns = function() {
      var _this;
      _this = this;
      return theme.utils.imagesLoaded(_this.container, function() {
        _this.Listeners();
        return _this.setColumnPosition();
      });
    };

    FrameworkStickyColumn.prototype.setHeights = function() {
      this.column_a_height = this.column_a.outerHeight();
      return this.column_b_height = this.column_b.outerHeight();
    };

    FrameworkStickyColumn.prototype.heightsHaveChanged = function() {
      if (this.column_a.outerHeight() !== this.column_a_height) {
        this.setHeights();
        return true;
      }
      if (this.column_b.outerHeight() !== this.column_b_height) {
        this.setHeights();
        return true;
      }
      return false;
    };

    FrameworkStickyColumn.prototype.getSmallerColumn = function() {
      if (this.column_a_height < this.column_b_height) {
        return this.column_a;
      } else {
        return this.column_b;
      }
    };

    FrameworkStickyColumn.prototype.resetLargerColumn = function() {
      if (this.column_a_height > this.column_b_height) {
        return this.column_a.css({
          'position': 'relative',
          'top': 'auto',
          'bottom': 'auto'
        });
      } else {
        return this.column_b.css({
          'position': 'relative',
          'top': 'auto',
          'bottom': 'auto'
        });
      }
    };

    FrameworkStickyColumn.prototype.getState = function(scroll_pos, window_height, column) {
      var column_height, height_for_bottom, overflowing_column, state;
      state = 'auto';
      if (theme.utils.mqs.current_window === 'small') {
        return 'auto';
      }
      column_height = column.outerHeight();
      if (window_height > column_height) {
        overflowing_column = true;
      }
      if (scroll_pos < this.container.offset().top) {
        state = 'auto';
      }
      if (overflowing_column) {
        height_for_bottom = column_height;
      } else {
        height_for_bottom = window_height;
      }
      if ((scroll_pos + height_for_bottom) > (this.container.offset().top + this.container.outerHeight())) {
        state = 'absolute-bottom';
      } else if (scroll_pos > this.container.offset().top && overflowing_column) {
        state = 'fixed-top';
      } else if (window_height < column_height && (scroll_pos + window_height) > (this.container.offset().top + column.outerHeight())) {
        state = 'fixed-bottom';
      }
      return state;
    };

    FrameworkStickyColumn.prototype.getAlignment = function(column) {
      if (column.hasClass('column-a')) {
        return 'left';
      } else if (column.hasClass('column-b')) {
        return 'right';
      }
    };

    FrameworkStickyColumn.prototype.setColumnPosition = function() {
      var _this, align, column, state;
      _this = this;
      _this.setHeights();
      column = _this.getSmallerColumn();
      state = _this.getState($(window).scrollTop(), $(window).height(), column);
      align = _this.getAlignment(column);
      if (state === 'auto' && this.current_state !== 'auto') {
        this.current_state = 'auto';
        column.css({
          'position': 'relative',
          'top': 'auto',
          'bottom': 'auto'
        });
      } else if (state === 'fixed-bottom' && this.current_state !== 'fixed-bottom') {
        this.current_state = 'fixed-bottom';
        column.css({
          'position': 'fixed',
          'top': 'auto',
          'bottom': 0
        });
      } else if (state === 'fixed-top' && this.current_state !== 'fixed-top') {
        this.current_state = 'fixed-top';
        column.css({
          'position': 'fixed',
          'top': 0,
          'bottom': 'auto'
        });
      } else if (state === 'absolute-bottom' && this.current_state !== 'absolute-bottom') {
        this.current_state = 'absolute-bottom';
        column.css({
          'position': 'absolute',
          'top': 'auto',
          'bottom': 0
        });
      }
      if (align === 'right') {
        return column.css({
          'right': 0
        });
      }
    };

    FrameworkStickyColumn.prototype.Listeners = function() {
      var _this;
      _this = this;
      $(window).on('scroll', function() {
        return _this.setColumnPosition();
      });
      setInterval(function() {
        if (_this.heightsHaveChanged()) {
          _this.resetLargerColumn();
          return _this.setColumnPosition();
        }
      }, 250);
      return $(window).on('resize', function() {
        _this.resetLargerColumn();
        return _this.setColumnPosition();
      });
    };

    return FrameworkStickyColumn;

  })();

  theme.classes.FrameworkTabOrder = (function() {
    function FrameworkTabOrder(mobile_order, desktop_order) {
      var _this;
      this.mobile_order = mobile_order;
      this.desktop_order = desktop_order;
      this.resizeListener = bind(this.resizeListener, this);
      this.disableFocus = bind(this.disableFocus, this);
      this.enableCustomFocus = bind(this.enableCustomFocus, this);
      this.updateOrderList = bind(this.updateOrderList, this);
      this.detectTabDirection = bind(this.detectTabDirection, this);
      this.getElementList = bind(this.getElementList, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.tab_forwards = null;
      _this.mobile_order_elements = _this.getElementList(_this.mobile_order);
      _this.desktop_order_elements = _this.getElementList(_this.desktop_order);
      _this.load();
    }

    FrameworkTabOrder.prototype.load = function() {
      var _this;
      _this = this;
      _this.detectTabDirection();
      _this.updateOrderList();
      _this.enableCustomFocus();
      return _this.resizeListener();
    };

    FrameworkTabOrder.prototype.getElementList = function(order_list) {
      var _this, order_list_elements;
      _this = this;
      if (order_list) {
        order_list_elements = [];
        order_list.forEach(function(container_class) {
          if ($(container_class).length > 0) {
            return order_list_elements.push($(container_class).first());
          }
        });
        return order_list_elements;
      } else {
        return false;
      }
    };

    FrameworkTabOrder.prototype.detectTabDirection = function() {
      var _this;
      _this = this;
      return $(document).on("keydown", function(event) {
        _this.tab_forwards = true;
        if (event.which === 9 && event.shiftKey) {
          _this.tab_forwards = false;
        }
        return true;
      });
    };

    FrameworkTabOrder.prototype.updateOrderList = function() {
      var _this;
      _this = this;
      if (theme.utils.mqs.current_window === 'small') {
        _this.current_order_elements = _this.mobile_order_elements;
        return _this.previous_order_elements = _this.desktop_order_elements;
      } else {
        _this.current_order_elements = _this.desktop_order_elements;
        return _this.previous_order_elements = _this.mobile_order_elements;
      }
    };

    FrameworkTabOrder.prototype.enableCustomFocus = function() {
      var _this;
      _this = this;
      if (!_this.current_order_elements) {
        return;
      }
      return _this.current_order_elements.forEach(function(element, index) {
        return element.on('focusout', function(event) {
          var lost_focus, move_to;
          if (!theme.utils.tabbing) {
            return;
          }
          lost_focus = $(this).has(event.relatedTarget).length === 0;
          if (lost_focus && _this.tab_forwards) {
            if ((index + 1) < _this.current_order_elements.length) {
              move_to = _this.current_order_elements[index + 1];
              return move_to.find(':focusable').first().focus();
            }
          } else if (lost_focus) {
            if ((index - 1) >= 0) {
              move_to = _this.current_order_elements[index - 1];
              return move_to.find(':focusable').last().focus();
            }
          }
        });
      });
    };

    FrameworkTabOrder.prototype.disableFocus = function() {
      var _this;
      _this = this;
      if (!_this.previous_order_elements) {
        return;
      }
      return _this.previous_order_elements.forEach(function(element, index) {
        return element.off('focusout');
      });
    };

    FrameworkTabOrder.prototype.resizeListener = function() {
      var _this;
      _this = this;
      return $(window).on('theme.utils.mqs.updated', function() {
        _this.updateOrderList();
        _this.enableCustomFocus();
        return _this.disableFocus();
      });
    };

    return FrameworkTabOrder;

  })();

  theme.classes.FrameworkUtils = (function() {
    function FrameworkUtils() {
      this.loadJsClasses = bind(this.loadJsClasses, this);
      this.detectTabbing = bind(this.detectTabbing, this);
      var _this;
      _this = this;
      _this.google_map_api_status = null;
      _this.mqs = new theme.classes.FrameworkMediaQueries();
      _this.detectTabbing();
      cssVars();
    }

    FrameworkUtils.prototype.a11yClick = function(event) {
      var code;
      if (event.type === 'click') {
        return true;
      } else if (event.type === 'keypress') {
        code = event.charCode || event.keyCode;
        if (code === 32) {
          event.preventDefault();
        }
        if (code === 32 || code === 13) {
          return true;
        }
      }
      return false;
    };

    FrameworkUtils.prototype.detectTabbing = function() {
      var _this;
      _this = this;
      $(window).on('click load', function() {
        _this.tabbing = false;
        return $('body').attr('data-tabbing', _this.tabbing);
      });
      return $(window).on('keydown', function(event) {
        if (event.which === 9 || event.which === 37 || event.which === 38 || event.which === 39 || event.which === 40 || event.which === 27) {
          _this.tabbing = true;
          return $('body').attr('data-tabbing', _this.tabbing);
        }
      });
    };

    FrameworkUtils.prototype.debounce = function(delay, fn) {
      var timeoutId;
      timeoutId = void 0;
      return function() {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(fn.bind(this), delay, arguments);
      };
    };

    FrameworkUtils.prototype.imagesLoaded = function(selector, callback) {
      var count, images_length;
      count = 0;
      images_length = selector.find('img[data-sizes="auto"]').length;
      if (images_length < 1) {
        callback();
        return;
      }
      return selector.on('lazybeforeunveil', function(event) {
        return $(event.target).on('load', function() {
          count++;
          if (count === images_length) {
            return callback();
          }
        });
      });
    };

    FrameworkUtils.prototype.loadJsClasses = function() {
      var _this;
      _this = this;
      return $('[data-js-class]').each(function() {
        var js_class, partial_class;
        js_class = $(this).attr('data-js-class');
        if ($(this).attr('data-js-loaded') !== 'true') {
          partial_class = theme.classes[js_class];
          if (typeof partial_class !== "undefined") {
            theme.partials[js_class] = new partial_class($(this));
            return $(this).attr('data-js-loaded', 'true');
          }
        }
      });
    };

    FrameworkUtils.prototype.matchImageHeights = function(container, items, image_class) {
      var _this, greatest_image_height, items_per_row, row_items;
      _this = this;
      items_per_row = Math.round(container.width() / items.first().outerWidth());
      greatest_image_height = 0;
      row_items = $();
      items.find(image_class).css('height', 'auto');
      items.find('.placeholder--root').css('height', 'auto');
      return items.each(function(index) {
        var this_height;
        if ($(this).find('.image--root').length > 0) {
          this_height = $(this).find(image_class + " .image--root").outerHeight();
        } else {
          this_height = $(this).find('.placeholder--root').outerHeight();
        }
        row_items = row_items.add($(this));
        if (this_height > greatest_image_height) {
          greatest_image_height = this_height;
        }
        if (index % items_per_row === items_per_row - 1 || index + 1 === items.length) {
          row_items.find(image_class + ", .placeholder--root").height(greatest_image_height);
          greatest_image_height = 0;
          return row_items = $();
        }
      });
    };

    FrameworkUtils.prototype.insertStylesheet = function(src) {
      var _this, stylesheet;
      _this = this;
      stylesheet = document.createElement('link');
      stylesheet.rel = 'stylesheet';
      stylesheet.href = src;
      return document.head.appendChild(stylesheet);
    };

    FrameworkUtils.prototype.insertScript = function(src, callback) {
      var _this, script;
      _this = this;
      script = document.createElement('script');
      script.src = src;
      if (callback) {
        script.onload = callback;
      }
      return document.body.appendChild(script);
    };

    FrameworkUtils.prototype.formatMoney = function(raw_amount) {
      var _this, formatWithSeperators, formatted_amount, money_format, regex;
      _this = this;
      regex = /\{\{\s*(\w+)\s*\}\}/;
      money_format = theme.shop.money_format.match(regex)[1];
      formatWithSeperators = function(amount_in_cents, decimal_places, swap_seperators) {
        var amount_components, cents, cents_seperator, dollars, thousand_seperator;
        thousand_seperator = swap_seperators ? '.' : ',';
        cents_seperator = swap_seperators ? ',' : '.';
        amount_components = (amount_in_cents / 100).toFixed(decimal_places).split('.');
        cents = amount_components[1] ? cents_seperator + amount_components[1] : '';
        dollars = amount_components[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousand_seperator);
        return dollars + cents;
      };
      switch (money_format) {
        case 'amount':
          formatted_amount = formatWithSeperators(raw_amount, 2, false);
          break;
        case 'amount_no_decimals':
          formatted_amount = formatWithSeperators(raw_amount, 0, false);
          break;
        case 'amount_with_comma_separator':
          formatted_amount = formatWithSeperators(raw_amount, 2, true);
          break;
        case 'amount_no_decimals_with_comma_separator':
          formatted_amount = formatWithSeperators(raw_amount, 0, true);
      }
      return theme.shop.money_format.replace(regex, formatted_amount);
    };

    FrameworkUtils.prototype.isNaN = function(num) {
      var _this;
      _this = this;
      return num !== num;
    };

    return FrameworkUtils;

  })();

  theme.classes.FrameworkXMenu = (function() {
    function FrameworkXMenu(root) {
      var _this;
      this.root = root;
      this.slideUp = bind(this.slideUp, this);
      this.slideDown = bind(this.slideDown, this);
      this.arrangeMegaNav = bind(this.arrangeMegaNav, this);
      this.resizeListeners = bind(this.resizeListeners, this);
      this.checkOverlap = bind(this.checkOverlap, this);
      this.listeners = bind(this.listeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.debugging = false;
      _this.state = 'closed';
      _this.parent_links = _this.root.find('.x-menu--level-1--link > a');
      _this.sub_menu_links = _this.root.find('.x-menu--level-1--link:not([data-x-menu--depth="1"]) > a');
      _this.sub_menu_items = _this.sub_menu_links.parent().find('ul a');
      _this.parents_with_sub_menu = _this.sub_menu_links.parent();
      _this.overlap_parent = _this.root.data('x-menu--overlap-parent');
      _this.load();
    }

    FrameworkXMenu.prototype.load = function() {
      var _this;
      _this = this;
      _this.arrangeMegaNav();
      _this.listeners();
      _this.checkOverlap();
      return _this.resizeListeners();
    };

    FrameworkXMenu.prototype.listeners = function() {
      var _this;
      _this = this;
      _this.parents_with_sub_menu.on('mouseenter.XMenu', function() {
        return _this.slideDown($(this).find('> a'));
      });
      _this.parents_with_sub_menu.on('mouseleave.XMenu', function() {
        return _this.slideUp();
      });
      _this.parent_links.on('focus', function() {
        return _this.slideUp();
      });
      _this.sub_menu_links.on('focus', function() {
        return _this.slideDown($(this));
      });
      return _this.sub_menu_links.on('touchstart.XMenu', function(event) {
        event.preventDefault();
        if ($(this).parent().attr('data-x-menu--open') === 'true') {
          return _this.slideUp();
        } else {
          return _this.slideDown($(this));
        }
      });
    };

    FrameworkXMenu.prototype.checkOverlap = function() {
      var _this, center_index, center_item, center_item_left_edge, center_item_right_edge, center_item_width, container, container_width, first_center_child, last_center_child, left_break_point, left_item, right_item, right_item_edge;
      _this = this;
      if (Modernizr.touchevents && theme.utils.mqs.current_window !== 'large') {
        _this.root.attr('data-x-menu--overlap', 'true');
        return false;
      }
      _this.root.attr('data-x-menu--overlap', 'false');
      center_item = _this.root;
      if (_this.overlap_parent === 1) {
        center_item = center_item.parent();
      } else if (_this.overlap_parent === 2) {
        center_item = center_item.parent().parent();
      }
      container = center_item.parent();
      center_index = center_item.index();
      left_item = false;
      if (center_index > 1) {
        left_item = container.children().eq(center_index - 1);
      }
      right_item = false;
      if (center_index + 1 < container.children().length) {
        right_item = container.children().eq(center_index + 1);
      }
      container_width = container.width();
      center_item_width = _this.root.outerWidth();
      if (left_item) {
        first_center_child = center_item.find('> :first-child');
        center_item_left_edge = first_center_child.offset().left - 1;
        left_break_point = (container_width - center_item_width) / 2;
        if (left_edge >= center_item_left_edge) {
          _this.root.attr('data-x-menu--overlap', 'true');
        }
      }
      if (right_item) {
        last_center_child = center_item.find('> :last-child');
        center_item_right_edge = last_center_child.outerWidth() + last_center_child.offset().left + 1;
        right_item_edge = right_item.offset().left;
        if (center_item_right_edge >= right_item_edge) {
          return _this.root.attr('data-x-menu--overlap', 'true');
        }
      }
    };

    FrameworkXMenu.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.XMenu', _this.debounce(100, function() {
        return _this.checkOverlap();
      }));
    };

    FrameworkXMenu.prototype.debounce = function(delay, fn) {
      var timeoutId;
      timeoutId = void 0;
      return function() {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(fn.bind(this), delay, arguments);
      };
    };

    FrameworkXMenu.prototype.arrangeMegaNav = function() {
      var _this, mega_navs;
      _this = this;
      if (_this.parents_with_sub_menu.length === 0) {
        return false;
      }
      mega_navs = _this.root.find('[data-x-menu--depth="3"] .x-menu--level-2--container');
      return mega_navs.each(function() {
        var container, single_parents, single_parents_container;
        container = $(this);
        single_parents = container.find('[data-x-menu--single-parent="true"]');
        if (single_parents.length > 0) {
          single_parents_container = $('<div class="x-menu--single-parents"></div>').insertAfter(container.find('.x-menu--bg'));
          return single_parents_container.append('<ul>').find('ul').append(single_parents);
        }
      });
    };

    FrameworkXMenu.prototype.slideDown = function(link, delay) {
      var _this, display_type, link_wrapper, menu_height, sub_menu;
      if (delay == null) {
        delay = false;
      }
      _this = this;
      clearTimeout(_this.timer);
      link_wrapper = link.parent();
      if (link_wrapper.attr('data-x-menu--open') === 'true' || _this.state === 'closing') {
        return false;
      }
      _this.slideUp(false);
      if (delay && delay !== 'complete') {
        _this.timer = setTimeout(function() {
          return _this.slideDown(link, 'complete');
        }, delay);
      } else {
        link.closest('.x-menu--level-1--link').find('.icon--chevron-up').show();
        link.closest('.x-menu--level-1--link').find('.icon--chevron-down').hide();
        link.closest('.x-menu--level-1--link').find('.icon--minus').show();
        link.closest('.x-menu--level-1--link').find('.icon--plus').hide();
        _this.state = 'open';
        link_wrapper.attr('data-x-menu--open', 'true');
        link.attr('aria-expanded', 'true');
        sub_menu = link.closest('.x-menu--level-1--link').find('.x-menu--level-2--container');
        display_type = 'block';
        if (link_wrapper.attr('data-x-menu--depth') === "3") {
          display_type = 'flex';
        }
        sub_menu.velocity('stop');
        sub_menu.css({
          height: 'auto',
          display: display_type
        });
        sub_menu.find('.x-menu--level-2--list').css({
          display: display_type
        });
        menu_height = sub_menu.outerHeight();
        sub_menu.css({
          height: 0,
          opacity: 1
        });
        sub_menu.velocity({
          height: [menu_height, 0]
        }, {
          queue: false,
          duration: 600,
          easing: "easeOutExpo"
        });
      }
    };

    FrameworkXMenu.prototype.slideUp = function(delay) {
      var _this, link, link_wrapper, sub_menu;
      if (delay == null) {
        delay = 300;
      }
      _this = this;
      if (_this.debugging) {
        return false;
      }
      link_wrapper = _this.parents_with_sub_menu.filter('[data-x-menu--open="true"]');
      link = link_wrapper.find('> a');
      if (link_wrapper.attr('data-x-menu--open') === 'false') {
        return false;
      }
      if (delay) {
        return _this.timer = setTimeout(function() {
          return _this.slideUp(false);
        }, delay);
      } else {
        link.closest('.x-menu--level-1--link').find('.icon--chevron-up').hide();
        link.closest('.x-menu--level-1--link').find('.icon--chevron-down').show();
        link.closest('.x-menu--level-1--link').find('.icon--minus').hide();
        link.closest('.x-menu--level-1--link').find('.icon--plus').show();
        sub_menu = link.closest('.x-menu--level-1--link').find('.x-menu--level-2--container');
        link_wrapper.attr('data-x-menu--open', 'false');
        link.attr('aria-expanded', 'false');
        return sub_menu.velocity({
          opacity: 0
        }, {
          begin: function() {
            return _this.state = 'closing';
          },
          complete: function() {
            sub_menu.css({
              'display': 'none'
            });
            return _this.state = 'closed';
          },
          duration: 200
        });
      }
    };

    return FrameworkXMenu;

  })();

  theme.classes.FrameworkYMenu = (function() {
    function FrameworkYMenu(root) {
      var _this;
      this.root = root;
      this.slideRight = bind(this.slideRight, this);
      this.slideLeft = bind(this.slideLeft, this);
      this.adjustHeight = bind(this.adjustHeight, this);
      this.listeners = bind(this.listeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.state = 'closed';
      _this.sub_menu_links = _this.root.find('.icon--chevron-right--small').parent();
      _this.back_links = _this.root.find('.y-menu--back-link a');
      _this.regular_links = _this.root.find('.y-menu--level-1--link > a:not([data-submenu="true"]), .y-menu--level-2--link > a:not([data-submenu="true"]), .y-menu--level-3--link > a:not([data-submenu="true"])');
      _this.timer = null;
      _this.load();
    }

    FrameworkYMenu.prototype.load = function() {
      var _this;
      _this = this;
      return _this.listeners();
    };

    FrameworkYMenu.prototype.listeners = function() {
      var _this;
      _this = this;
      _this.regular_links.on('click', function() {
        var href;
        href = $(this).attr('href');
        if (href.indexOf('#') !== -1) {
          if (theme.partials.OffCanvas.state === 'left-open') {
            theme.partials.OffCanvas.closeLeft();
          } else if (theme.partials.OffCanvas.state === 'right-open') {
            theme.partials.OffCanvas.closeRight();
          }
          setTimeout(function() {
            return window.location.href = href;
          }, 450);
        }
      });
      _this.sub_menu_links.on('click', function() {
        _this.slideLeft($(this));
        return false;
      });
      return _this.back_links.on('click', function() {
        _this.slideRight($(this));
        return false;
      });
    };

    FrameworkYMenu.prototype.adjustHeight = function(open_list) {
      var _this, current_height, open_list_height;
      _this = this;
      _this.root.css({
        height: 'auto'
      });
      current_height = _this.root.outerHeight();
      open_list_height = open_list.outerHeight();
      if (open_list.css('position') === 'absolute') {
        open_list.css('position', 'relative');
        open_list_height = open_list.outerHeight();
        open_list.css('position', 'absolute');
      }
      return _this.root.velocity({
        height: open_list_height
      });
    };

    FrameworkYMenu.prototype.slideLeft = function(link) {
      var _this, sub_menu;
      _this = this;
      sub_menu = link.closest('li').find('ul').first();
      sub_menu.css({
        display: 'block'
      });
      _this.adjustHeight(sub_menu);
      return sub_menu.velocity({
        translateX: ['-100%', 0]
      });
    };

    FrameworkYMenu.prototype.slideRight = function(link) {
      var _this, container, parent_container;
      _this = this;
      container = link.closest('ul');
      parent_container = container.parent().closest('ul');
      _this.adjustHeight(parent_container);
      return container.velocity({
        translateX: [0, '-100%']
      });
    };

    return FrameworkYMenu;

  })();

  Accordion = (function() {
    function Accordion() {
      $('.accordion.headings').each(function() {
        return $(this).add($(this).next('.accordion.content')).wrapAll("<div class='accordion-wrapper'/>");
      });
      $('.accordion.headings li').wrapInner('<div class="trigger"></div>');
      $('.accordion.headings li .trigger').append('<div class="bg"></div>');
      $('.accordion-wrapper').each(function() {
        var accordion_content, accordion_heading;
        accordion_heading = $(this).find('.accordion.headings > li');
        accordion_content = $(this).find('.accordion.content > li');
        accordion_heading.first().addClass('active');
        accordion_content.each(function(index) {
          var content;
          content = $("<div class='content'>" + ($(this).html()) + "</div>");
          return content.appendTo(accordion_heading.eq(index));
        });
        accordion_content.remove();
        $(this).find('.content').first().show();
        return $(this).find('.trigger').on("click", function() {
          var panels, this_panel;
          panels = $(this).closest(".accordion").find('.content');
          this_panel = $(this).closest("li").find(".content");
          panels.not(this_panel).slideUp(200);
          this_panel.slideDown(200);
          $(this).closest(".accordion").find("li").removeClass("active");
          return $(this).closest("li").addClass("active");
        });
      });
    }

    return Accordion;

  })();

  theme.classes.Article = (function(superClass) {
    extend(Article, superClass);

    function Article() {
      return Article.__super__.constructor.apply(this, arguments);
    }

    return Article;

  })(theme.classes.FrameworkArticle);

  theme.classes.Blog = (function(superClass) {
    extend(Blog, superClass);

    function Blog() {
      return Blog.__super__.constructor.apply(this, arguments);
    }

    return Blog;

  })(theme.classes.FrameworkBlog);

  theme.classes.Cart = (function(superClass) {
    extend(Cart, superClass);

    function Cart() {
      this.updateTotalsComplete = bind(this.updateTotalsComplete, this);
      return Cart.__super__.constructor.apply(this, arguments);
    }

    Cart.prototype.updateTotalsComplete = function(count) {
      if (count > 0) {
        $('.cart .number-wrapper').show();
        $('.header--mobile .number-wrapper').show();
      } else {
        $('.cart .number-wrapper').hide();
        $('.header--mobile .number-wrapper').hide();
      }
    };

    return Cart;

  })(theme.classes.FrameworkCart);

  theme.classes.Disclosure = (function(superClass) {
    extend(Disclosure, superClass);

    function Disclosure() {
      return Disclosure.__super__.constructor.apply(this, arguments);
    }

    return Disclosure;

  })(theme.classes.FrameworkDisclosure);

  theme.classes.FeaturedVideo = (function(superClass) {
    extend(FeaturedVideo, superClass);

    function FeaturedVideo() {
      return FeaturedVideo.__super__.constructor.apply(this, arguments);
    }

    return FeaturedVideo;

  })(theme.classes.FrameworkFeaturedVideo);

  theme.classes.Footer = (function(superClass) {
    extend(Footer, superClass);

    function Footer() {
      return Footer.__super__.constructor.apply(this, arguments);
    }

    return Footer;

  })(theme.classes.FrameworkFooter);

  FullscreenSlider = (function() {
    function FullscreenSlider(slider_element) {
      this.eventListeners = bind(this.eventListeners, this);
      this.alignPlayButton = bind(this.alignPlayButton, this);
      this.alignCaption = bind(this.alignCaption, this);
      this.isFirstSlider = bind(this.isFirstSlider, this);
      this.getActiveIndex = bind(this.getActiveIndex, this);
      this.autoplay = bind(this.autoplay, this);
      this.removeDuplicateVideoModals = bind(this.removeDuplicateVideoModals, this);
      this.createSlider = bind(this.createSlider, this);
      var _this, slide_parent;
      _this = this;
      this.el = slider_element;
      slide_parent = this.el.closest('.slider');
      this.autoplay_enabled = slide_parent.data('autoplay');
      if (slide_parent.find('.slide').length < 2) {
        this.autoplay_enabled = false;
      }
      this.autoplay_frequency = slide_parent.data('rotateFrequency');
      this.transition_style = slide_parent.data('transitionStyle');
      _this.removeDuplicateVideoModals();
      this.createSlider();
      this.owl = $(".owl-carousel").data('owlCarousel');
    }

    FullscreenSlider.prototype.createSlider = function() {
      var slider, slider_options;
      slider = this;
      slider_options = {
        singleItem: true,
        navigation: false,
        paginationNumbers: false,
        scrollPerPageNav: true,
        slideSpeed: 800,
        pagination: true,
        autoHeight: true,
        autoPlay: slider.autoplay(),
        afterInit: function() {
          return slider.eventListeners();
        },
        afterAction: function() {
          slider.alignCaption();
          return slider.alignPlayButton();
        }
      };
      if (this.transition_style !== 'default') {
        slider_options['transitionStyle'] = this.transition_style;
      }
      return slider.el.owlCarousel(slider_options);
    };

    FullscreenSlider.prototype.removeDuplicateVideoModals = function() {
      var _this;
      _this = this;
      return $('.modal.video:gt(0)').remove();
    };

    FullscreenSlider.prototype.autoplay = function() {
      if (this.autoplay_enabled) {
        return this.autoplay_frequency;
      }
      return false;
    };

    FullscreenSlider.prototype.getActiveIndex = function() {
      return this.el.find('.owl-pagination .owl-page.active').index();
    };

    FullscreenSlider.prototype.isFirstSlider = function() {
      var current_section_id, first_section, first_section_id;
      first_section = $('.index-sections').children('div:first');
      first_section_id = first_section.find('.slider').data('sectionId');
      current_section_id = this.el.closest('.slider').data('sectionId');
      if (first_section.hasClass('section--slideshow')) {
        return current_section_id === first_section_id;
      }
      return false;
    };

    FullscreenSlider.prototype.alignCaption = function() {
      var caption, caption_height, caption_width, slide, slide_padding, top_offset;
      slide = this.el.find('.owl-item').eq(this.getActiveIndex());
      caption = slide.find('.caption');
      caption.css('visibility', 'hidden');
      caption_height = caption.outerHeight();
      caption_width = caption.outerWidth();
      slide_padding = 30;
      if (theme.utils.transparentMenuIsEnabled() && this.isFirstSlider() === true) {
        top_offset = $('.header--root').outerHeight();
      } else {
        top_offset = 0;
      }
      return theme.utils.imagesLoaded(slide.find('img').first(), function() {
        var left_offset, middle_top, slide_height, slide_width;
        slide_height = slide.outerHeight();
        slide_width = slide.outerWidth();
        if (caption.hasClass('top')) {
          caption.css('top', top_offset + slide_padding);
        } else if (caption.hasClass('middle')) {
          middle_top = top_offset + (slide_height - top_offset - caption_height) / 2;
          caption.css('top', middle_top);
        }
        if (caption.hasClass('center')) {
          left_offset = (slide_width - caption_width) / 2;
          caption.css('left', left_offset);
        }
        return caption.css('visibility', 'visible');
      });
    };

    FullscreenSlider.prototype.alignPlayButton = function() {
      var play_button, slide;
      slide = this.el.find('.owl-item').eq(this.getActiveIndex());
      play_button = slide.find('.play-button');
      play_button.css('visibility', 'hidden');
      if (theme.utils.transparentMenuIsEnabled() && $('.header--root').css('position') === 'absolute') {
        theme.utils.imagesLoaded(slide.find('img').first(), function() {
          var play_button_height, slide_height, video_offset;
          slide_height = slide.outerHeight();
          play_button_height = play_button.outerHeight();
          video_offset = (slide_height - play_button_height) / 2;
          return play_button.css({
            'margin-top': 0,
            'top': video_offset
          });
        });
      } else {
        play_button.css({
          'margin-top': '-40px',
          'top': '50%'
        });
      }
      return play_button.css('visibility', 'visible');
    };

    FullscreenSlider.prototype.eventListeners = function() {
      var slider;
      slider = this;
      this.el.find(".play-button").on('click', function() {
        var video_modal;
        video_modal = new VideoModal($(this).closest('.video'));
        video_modal.open();
        slider.owl.stop();
        return false;
      });
      this.el.find('.owl-pagination .owl-page').on('click', function() {
        return slider.owl.stop();
      });
      return $(document).on('header.transparentMenuIsUpdated', slider.alignCaption);
    };

    return FullscreenSlider;

  })();

  theme.classes.Header = (function() {
    function Header(root) {
      var _this;
      this.root = root;
      this.searchAndAccount = bind(this.searchAndAccount, this);
      this.moveLocalizationForm = bind(this.moveLocalizationForm, this);
      this.moveYMenu = bind(this.moveYMenu, this);
      this.sectionListeners = bind(this.sectionListeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.disclosure_inputs = _this.root.find('[data-item="disclosure"]');
      _this.load();
    }

    Header.prototype.load = function() {
      var _this;
      _this = this;
      _this.searchAndAccount();
      _this.sectionListeners();
      _this.moveYMenu();
      if (_this.disclosure_inputs.length > 0) {
        return _this.moveLocalizationForm();
      }
    };

    Header.prototype.sectionListeners = function() {
      var _this;
      _this = this;
      return _this.root.on('theme:section:load', function() {
        theme.partials.OffCanvas.unload();
        return theme.partials.OffCanvas.load();
      });
    };

    Header.prototype.moveYMenu = function() {
      var _this;
      _this = this;
      $('.mobile-nav--menu').empty();
      return $('.y-menu').appendTo('.mobile-nav--menu');
    };

    Header.prototype.moveLocalizationForm = function() {
      var _this;
      _this = this;
      $('.mobile-nav--localization').empty();
      return $('.header--localization-for-off-canvas form').appendTo('.mobile-nav--localization');
    };

    Header.prototype.searchAndAccount = function() {
      var _this;
      _this = this;
      $('.account-open').on('click', function() {
        $(this).closest('.menu').fadeOut(100, function() {
          return $('.account-container').fadeIn(200);
        });
        return false;
      });
      return $('.account-close').on('click', function() {
        $('.account-container').fadeOut(100, function() {
          return $('.search-account .menu').fadeIn(200);
        });
        return false;
      });
    };

    return Header;

  })();

  HorizontalTabs = (function() {
    function HorizontalTabs() {
      $('.tabs-horizontal.headings').each(function() {
        return $(this).add($(this).next('.tabs.content')).wrapAll("<div class='tabs-wrapper horizontal'/>");
      });
      $('.tabs-horizontal.headings li').wrapInner('<div class="trigger" tabindex="0"></div>');
      $('.tabs-horizontal.headings li .trigger').append('<div class="bg"></div>');
      $('.tabs-wrapper.horizontal').each(function() {
        var tab_content, tab_headings;
        tab_headings = $(this).find('.headings > li');
        tab_content = $(this).find('.tabs.content > li');
        tab_content.first().addClass('active');
        tab_headings.first().addClass('active');
        return tab_headings.on('click keydown', function() {
          if (event.type === 'keydown' && event.key !== 'Enter') {
            return;
          }
          tab_headings.removeClass('active');
          tab_content.removeClass('active');
          $(this).addClass('active');
          return tab_content.eq($(this).index()).addClass('active');
        });
      });
    }

    return HorizontalTabs;

  })();

  theme.classes.OffCanvas = (function(superClass) {
    extend(OffCanvas, superClass);

    function OffCanvas(root) {
      this.root = root;
      this.closeRight = bind(this.closeRight, this);
      OffCanvas.__super__.constructor.apply(this, arguments);
    }

    OffCanvas.prototype.closeRight = function() {
      var _this;
      _this = _this;
      OffCanvas.__super__.closeRight.apply(this, arguments);
      return $("[data-off-canvas--open='right-sidebar'] a").focus();
    };

    return OffCanvas;

  })(theme.classes.FrameworkOffCanvas);

  theme.classes.PasswordPage = (function(superClass) {
    extend(PasswordPage, superClass);

    function PasswordPage() {
      return PasswordPage.__super__.constructor.apply(this, arguments);
    }

    return PasswordPage;

  })(theme.classes.FrameworkPasswordPage);

  Popup = (function() {
    function Popup(clazz) {
      var checkContentOverflow, closeDialog, eventListeners, fillPopupDialog, getCustomClasses, getImage, getNewsletter, getPageContent, getSocialIcons, getWrapper, hideMask, ieCenter, isExpired, mask, maskIsActive, modal, modal_clazz, openDialog, passesExpiration, resetExpiration, showMask, storeExpiration;
      this.clazz = clazz;
      modal = null;
      modal_clazz = this.clazz;
      mask = $('.popup-modal-mask');
      storeExpiration = function() {
        var date, e, expires, object, seconds_from_now;
        date = new Date();
        seconds_from_now = 1000 * 60 * 60 * 24 * popup_config.days_until;
        expires = date.setTime(date.getTime() + seconds_from_now);
        object = {
          expires: expires
        };
        try {
          return localStorage[popup_config.storage_key] = JSON.stringify(object);
        } catch (error1) {
          e = error1;
          return false;
        }
      };
      resetExpiration = function() {
        localStorage.removeItem(popup_config.storage_key);
        return storeExpiration();
      };
      isExpired = function() {
        var expires, now, object;
        object = JSON.parse(localStorage[popup_config.storage_key]);
        expires = object.expires;
        now = new Date().getTime();
        if (parseFloat(expires - now) <= 0) {
          resetExpiration();
          return true;
        }
        return false;
      };
      passesExpiration = function() {
        var passed;
        passed = false;
        if (Storage === "undefined" || popup_config.test_mode) {
          passed = true;
        } else if (typeof localStorage[popup_config.storage_key] === "undefined") {
          passed = true;
          storeExpiration();
        } else {
          passed = isExpired();
        }
        return passed;
      };
      maskIsActive = function() {
        return $('.popup-modal').is(':visible') || $('.modal-mask').length > 0 && $('.modal-mask').is(':visible');
      };
      showMask = function() {
        mask.show();
        return $('body').addClass("modal-on");
      };
      hideMask = function() {
        mask.hide();
        return $('body').removeClass("modal-on");
      };
      getImage = function() {
        if (popup_config.show_image_enabled === false) {
          return "";
        }
        if (popup_config.image_link.length > 0) {
          return $("<div class='popup-image'> <a href='" + popup_config.image_link + "'>" + popup_config.show_image_url + "</a> </div>");
        } else {
          return $('<div class="popup-image">').append(popup_config.show_image_url);
        }
      };
      getNewsletter = function() {
        var subscribe_module;
        if (popup_config.newsletter_enabled === false) {
          return "";
        }
        subscribe_module = $("<div id='subscribe_module'></div>").append($(".popup--root"));
        return subscribe_module;
      };
      getSocialIcons = function() {
        if (popup_config.social_icons_enabled === false) {
          return "";
        }
        return $(".social-follow").clone();
      };
      getCustomClasses = function() {
        var class_list;
        class_list = "";
        class_list += popup_config.show_image_enabled === true ? " has-image" : " has-no-image";
        class_list += popup_config.page_content.length > 0 ? " has-page-content" : " has-no-page-content";
        class_list += popup_config.newsletter_enabled ? " has-newsletter" : " has-no-newsletter";
        class_list += popup_config.social_icons_enabled ? " has-social-icons" : " has-no-social-icons";
        return class_list;
      };
      getWrapper = function() {
        return "<dialog class='" + modal_clazz + " popup-modal " + (getCustomClasses()) + "' />";
      };
      getPageContent = function() {
        var page_content;
        page_content = null;
        if (popup_config.page_content.length < 1) {
          return "";
        }
        $.getJSON("/pages/" + popup_config.page_content + ".json", function(data, textStatus) {
          return page_content = "<div class='page-contents'>" + data.page.body_html + "</div>";
        });
        return page_content;
      };
      fillPopupDialog = function() {
        var dialog, getInnerContent, render;
        dialog = {
          wrapper: getWrapper(),
          newsletter: getNewsletter(),
          social_icons: getSocialIcons(),
          image: getImage()
        };
        getInnerContent = function() {
          if (popup_config.page_content.length < 1 && popup_config.newsletter_enabled === false && popup_config.social_icons_enabled === false) {
            return "";
          }
          return $("<div class='inner' />").append(dialog.body, dialog.newsletter, dialog.social_icons);
        };
        render = function() {
          $('body').append($(dialog.wrapper).append(dialog.image, getInnerContent()));
          return openDialog();
        };
        if (popup_config.page_content.length > 0) {
          return $.getJSON("/pages/" + popup_config.page_content + ".json", function(data, textStatus) {
            dialog['body'] = "<div class='page-contents'>" + data.page.body_html + "</div>";
            return render();
          });
        } else {
          return render();
        }
      };
      checkContentOverflow = function() {
        return setTimeout(function() {
          if (modal.length > 0 && $('.popup-modal-mask').is(':visible')) {
            return theme.utils.imagesLoaded(modal, function() {
              var dialog_height;
              dialog_height = $("dialog[class*='" + modal_clazz + "']:last-of-type").outerHeight();
              if (dialog_height >= $(window).height()) {
                return $('body').addClass('modal-unfix');
              } else {
                return $('body').removeClass('modal-unfix');
              }
            });
          }
        }, 0);
      };
      ieCenter = function() {
        return modal.css({
          marginTop: (-(modal.outerHeight() * 0.5)) + "px",
          marginLeft: (-(modal.outerWidth() * 0.5)) + "px"
        });
      };
      openDialog = function() {
        modal = $("dialog[class*='" + modal_clazz + "']");
        eventListeners();
        modal.addClass("opened").removeClass("closed");
        checkContentOverflow();
        return showMask();
      };
      eventListeners = function() {
        var removeAnimation;
        removeAnimation = function(event) {
          if (event.originalEvent.animationName === 'modal-close') {
            if (modal_clazz === 'popup') {
              return modal.remove();
            } else {
              return modal.removeClass('closed, completed');
            }
          } else {
            return modal.addClass('completed').removeClass('opened');
          }
        };
        $('.popup-modal').on('click', function(event) {
          event.stopPropagation();
          if (event.target === this) {
            return closeDialog();
          }
        });
        $('.popup-modal-close').on('click', closeDialog);
        mask.on('click', closeDialog);
        modal.on('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', removeAnimation);
        $(window).on('resize', checkContentOverflow);
        $(document).on('keydown', function(event) {
          if (modal.hasClass('completed') && event.keyCode === 27) {
            return closeDialog();
          }
        });
        return $('dialog.popup-modal #contact_form').on('submit', function(event) {
          var form;
          form = this;
          modal = $(this).closest('.popup-modal');
          modal.find('.error, .success').remove();
          event.preventDefault();
          if (modal.find('input[type="email"]').val().length === 0) {
            modal.find('.inner').prepend("<p class='error'>" + theme.translations.newsletter_email_blank + "</p>");
            return false;
          } else {
            form.submit();
          }
          return false;
        });
      };
      closeDialog = function() {
        modal.addClass('closed').removeClass('completed').removeClass('opened');
        return hideMask();
      };
      if (popup_config.enabled && passesExpiration() && (popup_config.page_content.length > 0 || popup_config.newsletter_enabled || popup_config.show_image_enabled || popup_config.social_icons_enabled)) {
        setTimeout(function() {
          if (!(maskIsActive() === true || $('.popup-modal-mask').length < 1)) {
            return fillPopupDialog();
          }
        }, popup_config.seconds_until * 1000);
      }
    }

    return Popup;

  })();

  theme.classes.ProductGrid = (function() {
    function ProductGrid(root) {
      var _this;
      this.root = root;
      this.hoverImagesLoaded = bind(this.hoverImagesLoaded, this);
      this.listeners = bind(this.listeners, this);
      this.matchImageHeights = bind(this.matchImageHeights, this);
      this.detectOnboarding = bind(this.detectOnboarding, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.items = _this.root.find('.product--root');
      _this.onboarding = _this.detectOnboarding();
      _this.in_slider = _this.root.data('in-slider');
      _this.load();
    }

    ProductGrid.prototype.load = function() {
      var _this;
      _this = this;
      _this.listeners();
      _this.hoverImagesLoaded();
      if (!_this.in_slider) {
        return _this.matchImageHeights();
      }
    };

    ProductGrid.prototype.detectOnboarding = function() {
      var _this;
      _this = this;
      if (_this.items.first().find('.placeholder').length) {
        return true;
      }
      return false;
    };

    ProductGrid.prototype.matchImageHeights = function() {
      var _this;
      _this = this;
      return theme.utils.matchImageHeights(_this.root, _this.items, '.product--image-wrapper');
    };

    ProductGrid.prototype.listeners = function() {
      var _this;
      _this = this;
      if (!_this.in_slider) {
        return $(window).on('resize.ProductGrid', theme.utils.debounce(100, function() {
          return _this.matchImageHeights();
        }));
      }
    };

    ProductGrid.prototype.hoverImagesLoaded = function() {
      var _this;
      _this = this;
      return _this.items.filter('[data-hover-image="true"]').each(function() {
        var product;
        product = $(this);
        return theme.utils.imagesLoaded(product, function() {
          return product.attr('data-hover-image', 'loaded');
        });
      });
    };

    return ProductGrid;

  })();

  theme.classes.ProductModel = (function(superClass) {
    extend(ProductModel, superClass);

    function ProductModel() {
      return ProductModel.__super__.constructor.apply(this, arguments);
    }

    return ProductModel;

  })(theme.classes.FrameworkProductModel);

  theme.classes.ProductRecommendations = (function(superClass) {
    extend(ProductRecommendations, superClass);

    function ProductRecommendations() {
      return ProductRecommendations.__super__.constructor.apply(this, arguments);
    }

    return ProductRecommendations;

  })(theme.classes.FrameworkProductRecommendations);

  ProductSlider = (function() {
    function ProductSlider(root) {
      var _this;
      this.root = root;
      this.listeners = bind(this.listeners, this);
      this.afterUpdate = bind(this.afterUpdate, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.product_grid = _this.root.find('.product-grid--root');
      _this.product_item = _this.root.find('.product--root');
      _this.load();
      _this.listeners();
    }

    ProductSlider.prototype.load = function() {
      var _this;
      _this = this;
      _this.product_grid.owlCarousel({
        items: 4,
        navigation: true,
        scrollPerPage: true,
        slideSpeed: 800,
        lazyLoad: false,
        pagination: false,
        navigationText: false,
        afterUpdate: _this.afterUpdate()
      });
      return _this.product_item.show();
    };

    ProductSlider.prototype.afterUpdate = function() {
      var _this;
      _this = this;
      return $(window).trigger('ProductSlider.afterUpdate');
    };

    ProductSlider.prototype.listeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.ProductGrid', theme.utils.debounce(100, function() {
        return _this.loadCarousel;
      }));
    };

    return ProductSlider;

  })();

  theme.classes.ProductVideo = (function(superClass) {
    extend(ProductVideo, superClass);

    function ProductVideo() {
      return ProductVideo.__super__.constructor.apply(this, arguments);
    }

    return ProductVideo;

  })(theme.classes.FrameworkProductVideo);

  theme.classes.Product = (function(superClass) {
    extend(Product, superClass);

    function Product(root) {
      var _this;
      this.root = root;
      this.initTabOrder = bind(this.initTabOrder, this);
      this.updateVariantMedia = bind(this.updateVariantMedia, this);
      this.mobileModalHandler = bind(this.mobileModalHandler, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.mobile_tab_order = ['.product-page--title-n-vendor', '.product-page--media', '.product-page--cart-form', '.product-page--description', '.product-share--root', '.product-recommendations--root', '.footer--root'];
      Product.__super__.constructor.apply(this, arguments);
    }

    Product.prototype.load = function() {
      var _this;
      _this = this;
      Product.__super__.load.apply(this, arguments);
      _this.mobileModalHandler();
      _this.initTabOrder();
      return _this.root.on('theme:section:load', function() {
        new Accordion();
        new HorizontalTabs();
        return new VerticalTabs();
      });
    };

    Product.prototype.mobileModalHandler = function() {
      var _this, modal_links;
      _this = this;
      modal_links = _this.media_container.find('.modal--link');
      return modal_links.on('click', function(event) {
        if (theme.utils.mqs.current_window === 'small') {
          return event.stopImmediatePropagation();
        }
      });
    };

    Product.prototype.updateVariantMedia = function(variant_id) {
      var _this, variant_image;
      _this = this;
      Product.__super__.updateVariantMedia.apply(this, arguments);
      variant_image = _this.main_media.filter("[data-id='" + variant_id + "']");
      return _this.media_container.attr('data-media-type', variant_image.attr('data-media-type'));
    };

    Product.prototype.initTabOrder = function() {
      var _this;
      _this = this;
      return new theme.classes.FrameworkTabOrder(_this.mobile_tab_order, null);
    };

    return Product;

  })(theme.classes.FrameworkProduct);

  theme.classes.Radios = (function(superClass) {
    extend(Radios, superClass);

    function Radios() {
      return Radios.__super__.constructor.apply(this, arguments);
    }

    return Radios;

  })(theme.classes.FrameworkRadios);

  theme.classes.Sections = (function(superClass) {
    extend(Sections, superClass);

    function Sections() {
      this.deselectSection = bind(this.deselectSection, this);
      this.selectBlock = bind(this.selectBlock, this);
      this.unload = bind(this.unload, this);
      this.load = bind(this.load, this);
      return Sections.__super__.constructor.apply(this, arguments);
    }

    Sections.prototype.load = function(event) {
      var _this;
      _this = this;
      Sections.__super__.load.apply(this, arguments);
      return $(document).on('shopify:section:load', function(event) {
        var section_wrapper;
        section_wrapper = $(event.target).closest('.shopify-section');
        section_wrapper.css('min-height', '2000px');
        if (section_wrapper.hasClass('section--slideshow')) {
          new FullscreenSlider($(event.target).find('.slides'));
        } else if (section_wrapper.hasClass('section--featured-collection')) {
          new ProductSlider($(event.target).find('.product-slider'));
        } else if (section_wrapper.hasClass('section--header')) {
          setTimeout(function() {
            if ($('.slider').length > 0) {
              return $(document).trigger('header.transparentMenuIsUpdated');
            }
          }, 0);
        } else if (section_wrapper.hasClass('section--products')) {
          $(document).trigger('set-option-selectors');
        }
        return section_wrapper.css('min-height', 'auto');
      });
    };

    Sections.prototype.unload = function(event) {
      var _this;
      _this = this;
      Sections.__super__.unload.apply(this, arguments);
      return $(document).on('shopify:section:unload', function(event) {
        var mask, section_wrapper;
        section_wrapper = $(event.target).closest('.shopify-section');
        if (section_wrapper.hasClass('section--featured-collection')) {
          return setTimeout(function() {
            if ($('.section--featured-collection').length === 0) {
              return $(window).off("resize.ProductSlider");
            }
          }, 0);
        } else if (section_wrapper.hasClass('section--products')) {
          mask = $(".popup-modal-mask");
          $(".size-chart").remove();
          if (mask.is(":visible")) {
            return mask.trigger("click");
          }
        } else if (section_wrapper.hasClass('section--slideshow')) {
          return setTimeout(function() {
            if ($('.slider').length === 0) {
              return $(document).off('header.transparentMenuIsUpdated');
            }
          }, 0);
        }
      });
    };

    Sections.prototype.selectBlock = function() {
      var _this;
      _this = this;
      Sections.__super__.selectBlock.apply(this, arguments);
      return $(document).on('shopify:block:select', function(event) {
        var section_wrapper, slide_selected;
        section_wrapper = $(event.target).closest('.shopify-section');
        if (section_wrapper.hasClass('section--slideshow')) {
          slide_selected = section_wrapper.find('.slide').index(event.target);
          return $(event.target).closest('.owl-carousel').trigger('owl.jumpTo', slide_selected).trigger('owl.stop');
        }
      });
    };

    Sections.prototype.deselectSection = function() {
      var _this;
      _this = this;
      Sections.__super__.deselectSection.apply(this, arguments);
      return $(document).on('shopify:section:deselect', function(event) {
        var section_wrapper, should_autoplay, slider;
        section_wrapper = $(event.target).closest('.shopify-section');
        if (section_wrapper.hasClass('section--slideshow')) {
          should_autoplay = section_wrapper.find('.slider').data('autoplay');
          if (should_autoplay === true) {
            slider = section_wrapper.find('.slides');
            return slider.trigger('owl.play', section_wrapper.find('.slider').data('rotateFrequency'));
          }
        }
      });
    };

    return Sections;

  })(theme.classes.FrameworkSections);

  theme.classes.ServiceList = (function(superClass) {
    extend(ServiceList, superClass);

    function ServiceList() {
      return ServiceList.__super__.constructor.apply(this, arguments);
    }

    return ServiceList;

  })(theme.classes.FrameworkServiceList);

  VerticalTabs = (function() {
    function VerticalTabs() {
      $('.tabs-vertical.headings').each(function() {
        return $(this).add($(this).next('.tabs.content')).wrapAll("<div class='tabs-wrapper vertical'/>");
      });
      $('.tabs-vertical.headings li').wrapInner('<div class="trigger"></div>');
      $('.tabs-vertical.headings li .trigger').append('<div class="bg"></div>');
      $('.tabs-wrapper.vertical').each(function() {
        var tab_content, tab_headings, tab_wrapper;
        tab_wrapper = $(this);
        tab_headings = $(this).find('.headings > li');
        tab_content = $(this).find('.tabs.content > li');
        tab_content.first().addClass('active');
        tab_headings.first().addClass('active');
        return tab_headings.on('click', function() {
          tab_headings.removeClass('active');
          tab_content.removeClass('active');
          $(this).addClass('active');
          tab_content.eq($(this).index()).addClass('active');
          if (general_scroll_to_active_item) {
            if (theme.utils.mqs.current_window === 'small') {
              return $('html, body').animate({
                scrollTop: tab_wrapper.offset().top + tab_wrapper.find('.headings').outerHeight() - 50
              }, 'slow');
            } else {
              return $('html, body').animate({
                scrollTop: tab_wrapper.offset().top - 50
              }, 'slow');
            }
          }
        });
      });
    }

    return VerticalTabs;

  })();

  VideoModal = (function() {
    function VideoModal(video) {
      this.createIframe = bind(this.createIframe, this);
      this.extractVideoId = bind(this.extractVideoId, this);
      this.extractVideoType = bind(this.extractVideoType, this);
      this.eventListeners = bind(this.eventListeners, this);
      this.centerPosition = bind(this.centerPosition, this);
      this.close = bind(this.close, this);
      this.open = bind(this.open, this);
      this.opened = false;
      this.video = video;
      this.modal = $('.video.modal');
      this.player_button = video.find('.player-button');
      this.src_url = video.find('.play-button').attr('href');
      this.type = this.extractVideoType();
      this.id = this.extractVideoId();
      this.iframe = this.createIframe();
      this.caption = video.find('.caption');
    }

    VideoModal.prototype.open = function() {
      this.opened = true;
      this.modal.find(".flex-video").append(this.iframe);
      if (this.caption.length > 0) {
        this.modal.find(".caption").append(this.caption.html());
        this.modal.addClass("wide");
      } else {
        this.modal.find(".player").removeClass('large-8');
        this.modal.find('.caption').hide();
        this.modal.removeClass("wide");
      }
      this.player_button.hide();
      $('.modal-mask').show();
      this.modal.find('.close').show();
      this.modal.fadeIn();
      this.centerPosition();
      $(".modal").fadeIn(0);
      return this.eventListeners();
    };

    VideoModal.prototype.close = function() {
      this.opened = false;
      this.modal.find(".flex-video").empty();
      this.modal.find(".caption").empty();
      this.modal.hide();
      $('.modal-mask').fadeOut();
      if (this.caption.length === 0) {
        this.modal.find(".player").addClass('large-8');
        return this.modal.find('.caption').show();
      }
    };

    VideoModal.prototype.centerPosition = function() {
      if ($(window).height() < this.modal.outerHeight()) {
        return this.modal.css({
          'position': 'absolute',
          'top': '30px',
          'margin-top': 0,
          'margin-left': -(this.modal.outerWidth() / 2)
        });
      } else {
        return this.modal.css({
          'position': 'fixed',
          'top': '50%',
          'margin-top': -(this.modal.outerHeight() / 2),
          'margin-left': -(this.modal.outerWidth() / 2)
        });
      }
    };

    VideoModal.prototype.eventListeners = function() {
      var modal;
      modal = this;
      this.modal.find('.close').on('click', function() {
        return modal.close();
      });
      $(window).on('resize', function() {
        return modal.centerPosition();
      });
      $(document).on('keydown', function(event) {
        if (modal.opened) {
          if (event.keyCode === 27) {
            return modal.close();
          }
        }
      });
      $('.modal-mask').on('click', function() {
        return modal.close();
      });
      return this.player_button.on('click', function() {
        return false;
      });
    };

    VideoModal.prototype.extractVideoType = function() {
      var matches, re;
      re = /\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9_\-]+)/i;
      matches = re.exec(this.src_url);
      if (matches) {
        return 'youtube';
      } else {
        re = /^.*(vimeo)\.com\/(?:watch\?v=)?(.*?)(?:\z|$|&)/;
        matches = re.exec(this.src_url);
        if (matches) {
          return 'vimeo';
        }
      }
      return false;
    };

    VideoModal.prototype.extractVideoId = function() {
      var match, regExp;
      if (this.type === 'youtube') {
        regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        match = this.src_url.match(regExp);
        if (match && match[2].length === 11) {
          return match[2];
        }
      } else if (this.type === "vimeo") {
        regExp = /^.*(vimeo)\.com\/(?:watch\?v=)?(.*?)(?:\z|$|&)/;
        match = this.src_url.match(regExp);
        if (match) {
          return match[2];
        }
      }
    };

    VideoModal.prototype.createIframe = function() {
      if (this.type === "youtube") {
        return "<iframe  src='//www.youtube.com/embed/" + this.id + "?autoplay=1&rel=0' frameborder='0' allowfullscreen></iframe>";
      } else if (this.type === "vimeo") {
        return "<iframe src='//player.vimeo.com/video/" + this.id + "?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff&amp;autoplay=1?' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";
      }
    };

    return VideoModal;

  })();

  theme.classes.XMenu = (function(superClass) {
    extend(XMenu, superClass);

    function XMenu(root) {
      var _this;
      this.root = root;
      this.slideDown = bind(this.slideDown, this);
      this.hideHeader = bind(this.hideHeader, this);
      this.showHeader = bind(this.showHeader, this);
      this.headerListeners = bind(this.headerListeners, this);
      this.isHeaderTransparent = bind(this.isHeaderTransparent, this);
      _this = this;
      _this.header = $('.header--root');
      _this.header_bg = _this.header.find('.header--bg');
      _this.header_timer = null;
      _this.transparent_header = _this.isHeaderTransparent();
      XMenu.__super__.constructor.apply(this, arguments);
      _this.headerListeners();
    }

    XMenu.prototype.isHeaderTransparent = function() {
      var _this;
      _this = this;
      if ($('.header--root').attr('data-header--menu-transparent') === 'true') {
        return true;
      } else {
        return false;
      }
    };

    XMenu.prototype.headerListeners = function() {
      var _this;
      _this = this;
      _this.parents_with_sub_menu.on('mouseenter', function() {
        return clearTimeout(_this.header_timer);
      });
      _this.header.on('mouseenter touchstart', function() {
        clearTimeout(_this.header_timer);
        return _this.showHeader();
      });
      return _this.header.on('mouseleave', function() {
        return _this.header_timer = setTimeout(function() {
          return _this.hideHeader();
        }, 500);
      });
    };

    XMenu.prototype.showHeader = function() {
      var _this;
      _this = this;
      if (parseInt(_this.header_bg.css('opacity')) !== 0) {
        return;
      }
      return _this.header_bg.velocity({
        opacity: [0.95]
      }, {
        duration: 400,
        queue: false
      });
    };

    XMenu.prototype.hideHeader = function() {
      var _this;
      _this = this;
      if (_this.parents_with_sub_menu.filter('[data-main-menu--open="true"]').length > 0) {
        return false;
      }
      _this.header_bg.velocity({
        opacity: 0
      }, {
        duration: 400
      });
      return _this.slideUp();
    };

    XMenu.prototype.slideDown = function(link, delay) {
      var _this, opacity;
      if (delay == null) {
        delay = false;
      }
      _this = this;
      if (delay !== 'complete') {
        opacity = Math.round(parseFloat(_this.header_bg.css('opacity')) * 100);
        if (opacity < 90 && _this.transparent_header) {
          delay = 400;
        }
      }
      return XMenu.__super__.slideDown.call(this, link, delay);
    };

    return XMenu;

  })(theme.classes.FrameworkXMenu);

  theme.classes.Utils = (function(superClass) {
    extend(Utils, superClass);

    function Utils() {
      var _this;
      _this = this;
      Utils.__super__.constructor.apply(this, arguments);
    }

    Utils.prototype.transparentMenuIsEnabled = function() {
      return $('body').find("[data-header--menu-transparent=true]").length > 0;
    };

    return Utils;

  })(theme.classes.FrameworkUtils);

  jQuery(function($) {
    var page_content;
    theme.sections = new theme.classes.Sections();
    theme.utils = new theme.classes.Utils();
    if (general_external_links_enabled) {
      $('a[href^="http"]').not("a[href^='" + theme.urls.shop + "']").attr('target', '_blank');
    }
    new Popup('popup');
    new Accordion();
    new HorizontalTabs();
    new VerticalTabs();
    if ($('body').hasClass('template-page')) {
      page_content = $('.template-page--main .rte-content');
      if (page_content.find('.left-side-column').length || page_content.find('.right-side-column').length) {
        if (page_content.find('.left-side-column').length && page_content.find('.right-side-column').length) {
          page_content.wrapInner("<div class='main-column with-2-sidebars'></div>");
          $('.left-side-column').addClass('with-2-sidebars');
          $('.right-side-column').addClass('with-2-sidebars');
        } else {
          page_content.wrapInner("<div class='main-column'></div>");
        }
        $('.left-side-column').prependTo(page_content);
        $('.right-side-column').appendTo(page_content);
      }
    }
    if ($('body').hasClass('template-index')) {
      $('.slider').each(function() {
        return new FullscreenSlider($(this).find('.slides'));
      });
      $('.product-slider').each(function() {
        return new ProductSlider($(this));
      });
    }
    $('[data-item="hidden-text"]').find(':focusable').attr('tabindex', '-1');
    theme.utils.loadJsClasses();
    return false;
  });

}).call(this);
