parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"nrko":[function(require,module,exports) {
"use strict";function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function t(t){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?e(Object(i),!0).forEach(function(e){n(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):e(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}var u=0,a=function(){function e(n,i,o){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(r(this,e),"string"!=typeof n)throw new TypeError("Gestures require a string type / name");this.type=n,this.id="gesture-".concat(this.type,"-").concat(u++),this.element=i,this.handler=o,this.options=t({},e.DEFAULTS,{},a)}return o(e,[{key:"isEnabled",value:function(e){var t=e.active.length,n=e.event,r=this.options,i=r.enableKeys,o=r.disableKeys,u=r.minInputs,a=r.maxInputs;return u<=t&&a>=t&&(0===i.length||i.some(function(e){return n[e]}))&&!o.some(function(e){return n[e]})}},{key:"start",value:function(){return null}},{key:"move",value:function(){return null}},{key:"end",value:function(){return null}},{key:"cancel",value:function(){return null}},{key:"evaluateHook",value:function(e,n){var r=this[e](n);r&&this.handler(t({centroid:n.centroid,event:n.event,phase:e,type:this.type,target:this.element},r))}}]),e}();a.DEFAULTS=Object.freeze({enableKeys:[],disableKeys:[],minInputs:1,maxInputs:Number.MAX_VALUE}),module.exports=a;
},{}],"Qs2Z":[function(require,module,exports) {
"use strict";function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function t(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}var r=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;n(this,e),this.x=t,this.y=r}return t(e,[{key:"angleTo",value:function(n){return Math.atan2(n.y-this.y,n.x-this.x)}},{key:"averageDistanceTo",value:function(n){return this.totalDistanceTo(n)/n.length}},{key:"clone",value:function(){return new e(this.x,this.y)}},{key:"distanceTo",value:function(n){return Math.hypot(n.x-this.x,n.y-this.y)}},{key:"minus",value:function(n){return new e(this.x-n.x,this.y-n.y)}},{key:"plus",value:function(n){return new e(this.x+n.x,this.y+n.y)}},{key:"totalDistanceTo",value:function(n){var e=this;return n.reduce(function(n,t){return n+e.distanceTo(t)},0)}}],[{key:"centroid",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(0===n.length)return null;var t=e.sum(n);return t.x/=n.length,t.y/=n.length,t}},{key:"sum",value:function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).reduce(function(n,e){return n.x+=e.x,n.y+=e.y,n},new e(0,0))}}]),e}();module.exports=r;
},{}],"p3SI":[function(require,module,exports) {
"use strict";var e=Object.freeze(["blur","pointercancel","touchcancel"]),t=Object.freeze(["keydown","keyup"]),o=Object.freeze(["mousedown","mousemove","mouseup"]),c=Object.freeze(["pointerdown","pointermove","pointerup"]),r=Object.freeze(["touchend","touchmove","touchstart"]),u=Object.freeze(["altKey","ctrlKey","metaKey","shiftKey"]),n=Object.freeze(["Alt","Control","Meta","Shift"]),E="cancel",m="end",p="move",S="start",T=Object.freeze({blur:E,pointercancel:E,touchcancel:E,mouseup:m,pointerup:m,touchend:m,mousemove:p,pointermove:p,touchmove:p,mousedown:S,pointerdown:S,touchstart:S});module.exports={CANCEL_EVENTS:e,KEYBOARD_EVENTS:t,MOUSE_EVENTS:o,POINTER_EVENTS:c,TOUCH_EVENTS:r,STATE_KEYS:u,STATE_KEY_STRINGS:n,CANCEL:E,END:m,MOVE:p,START:S,PHASE:T};
},{}],"zSto":[function(require,module,exports) {
"use strict";function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}var t=require("./Point2D.js"),e=require("./constants.js"),i=e.PHASE;function r(n,t){return n.changedTouches?Array.from(n.changedTouches).find(function(n){return n.identifier===t}):n}var o=function e(o,s){n(this,e);var c=r(o,s),a=c.clientX,u=c.clientY;this.event=o,this.type=i[o.type],this.time=Date.now(),this.point=new t(a,u)};module.exports=o;
},{"./Point2D.js":"Qs2Z","./constants.js":"p3SI"}],"K0yk":[function(require,module,exports) {
"use strict";var t=2*Math.PI,e=-Math.PI;function n(n,r){var o=n-r;return o<e?o+=t:o>Math.PI&&(o-=t),o}function r(t){if("function"==typeof t.composedPath)return t.composedPath();for(var e=[],n=t.target;n!==document;n=n.parentNode)e.push(n);return e.push(document),e.push(window),e}function o(t,e){var n=new Set;return t.forEach(function(t){e(t)&&n.add(t)}),n}function u(t,e){return o(t,function(t){return!e.has(t)})}module.exports=Object.freeze({angularDifference:n,getPropagationPath:r,setDifference:u,setFilter:o});
},{}],"W3UA":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}var n=require("./PointerData.js"),r=require("./utils.js"),a=r.getPropagationPath,u=function(){function e(i,r){t(this,e);var u=new n(i,r);this.initialElements=new WeakSet(a(i)),this.initial=u,this.current=u,this.previous=u,this.identifier=r}return i(e,[{key:"totalDistance",value:function(){return this.initial.point.distanceTo(this.current.point)}},{key:"update",value:function(t){this.previous=this.current,this.current=new n(t,this.identifier)}},{key:"phase",get:function(){return this.current.type}},{key:"startTime",get:function(){return this.initial.time}}]),e}();module.exports=u;
},{"./PointerData.js":"zSto","./utils.js":"K0yk"}],"x00L":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}var i=require("./constants.js"),s=i.CANCEL,u=i.END,r=i.MOVE,a=i.PHASE,o=i.START,c=require("./Input.js"),h=require("./Point2D.js"),p=Object.freeze({inputs:Symbol.for("inputs")}),l={TouchEvent:function(t){var e=this;Array.from(t.changedTouches).forEach(function(n){e.updateInput(t,n.identifier)})},PointerEvent:function(t){this.updateInput(t,t.pointerId)},MouseEvent:function(t){0===t.button&&this.updateInput(t,t.button)}},f=function(){function e(n){t(this,e),this.element=n,this[p.inputs]=new Map,this.inputs=[],this.active=[],this.activePoints=[],this.centroid={},this.event=null}return n(e,[{key:"clearEndedInputs",value:function(){var t=this;this[p.inputs].forEach(function(e,n){"end"===e.phase&&t[p.inputs].delete(n)})}},{key:"getInputsInPhase",value:function(t){return this.inputs.filter(function(e){return e.phase===t})}},{key:"getInputsNotInPhase",value:function(t){return this.inputs.filter(function(e){return e.phase!==t})}},{key:"hasNoInputs",value:function(){return 0===this[p.inputs].size}},{key:"updateInput",value:function(t,e){switch(a[t.type]){case o:this[p.inputs].set(e,new c(t,e));try{this.element.setPointerCapture(e)}catch(n){}break;case u:try{this.element.releasePointerCapture(e)}catch(n){}case s:case r:this[p.inputs].has(e)&&this[p.inputs].get(e).update(t);break;default:console.warn("Unrecognized event type: ".concat(t.type))}}},{key:"updateAllInputs",value:function(t){l[t.constructor.name].call(this,t),this.updateFields(t)}},{key:"updateFields",value:function(t){this.inputs=Array.from(this[p.inputs].values()),this.active=this.getInputsNotInPhase("end"),this.activePoints=this.active.map(function(t){return t.current.point}),this.centroid=h.centroid(this.activePoints),this.event=t}}]),e}();module.exports=f;
},{"./constants.js":"p3SI","./Input.js":"W3UA","./Point2D.js":"Qs2Z"}],"e28u":[function(require,module,exports) {
"use strict";function e(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,n)}return s}function t(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?e(Object(r),!0).forEach(function(e){s(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function s(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var s=0;s<t.length;s++){var n=t[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,s){return t&&r(e.prototype,t),s&&r(e,s),e}var a=require("./State.js"),u=require("./constants.js"),c=u.CANCEL_EVENTS,o=u.KEYBOARD_EVENTS,v=u.MOUSE_EVENTS,h=u.POINTER_EVENTS,l=u.TOUCH_EVENTS,f=u.STATE_KEY_STRINGS,p=u.PHASE,E=u.CANCEL,d=u.END,y=u.START,G=require("./utils.js"),b=G.setDifference,w=G.setFilter,O=function(){function e(s){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n(this,e);var i=t({},e.DEFAULTS,{},r);this.gestures=new Set,this.activeGestures=new Set,this.potentialGestures=new Set,this.element=s,this.capture=i.capture,this.preventDefault=i.preventDefault,this.state=new a(this.element),this.activate()}return i(e,[{key:"activate",value:function(){var e=this,t=[];t=window.TouchEvent||window.MouseEvent?v.concat(l):h;var s=this.arbitrate.bind(this);t.forEach(function(t){e.element.addEventListener(t,s,{capture:e.capture,once:!1,passive:!1})});var n=this.cancel.bind(this);c.forEach(function(e){window.addEventListener(e,n)});var r=this.handleKeyboardEvent.bind(this);o.forEach(function(e){window.addEventListener(e,r)})}},{key:"cancel",value:function(e){var t=this;e.preventDefault(),this.state.inputs.forEach(function(t){t.update(e)}),this.activeGestures.forEach(function(e){e.evaluateHook(E,t.state)}),this.state=new a(this.element),this.resetActiveGestures()}},{key:"handleKeyboardEvent",value:function(e){var t=this;if(f.indexOf(e.key)>=0){this.state.event=e;var s=this.activeGestures;this.setActiveGestures(),b(s,this.activeGestures).forEach(function(e){e.evaluateHook(d,t.state)}),b(this.activeGestures,s).forEach(function(e){e.evaluateHook(y,t.state)})}}},{key:"resetActiveGestures",value:function(){this.potentialGestures=new Set,this.activeGestures=new Set}},{key:"setActiveGestures",value:function(){var e=this;this.activeGestures=w(this.potentialGestures,function(t){return t.isEnabled(e.state)})}},{key:"setPotentialGestures",value:function(){var e=this.state.inputs[0];this.potentialGestures=w(this.gestures,function(t){return e.initialElements.has(t.element)})}},{key:"updateActiveGestures",value:function(e,t){p[e.type]===y&&(t&&this.setPotentialGestures(),this.setActiveGestures())}},{key:"pruneActiveGestures",value:function(e){p[e.type]===d&&(this.state.hasNoInputs()?this.resetActiveGestures():this.setActiveGestures())}},{key:"arbitrate",value:function(e){var t=this,s=this.state.hasNoInputs();this.state.updateAllInputs(e),this.updateActiveGestures(e,s),this.activeGestures.size>0&&(this.preventDefault&&e.preventDefault(),this.activeGestures.forEach(function(s){s.evaluateHook(p[e.type],t.state)})),this.state.clearEndedInputs(),this.pruneActiveGestures(e)}},{key:"addGesture",value:function(e){this.gestures.add(e)}},{key:"removeGesture",value:function(e){this.gestures.delete(e),this.potentialGestures.delete(e),this.activeGestures.delete(e)}},{key:"getGesturesByElement",value:function(e){return w(this.gestures,function(t){return t.element===e})}},{key:"removeGesturesByElement",value:function(e){var t=this;this.getGesturesByElement(e).forEach(function(e){return t.removeGesture(e)})}}]),e}();O.DEFAULTS=Object.freeze({capture:!1,preventDefault:!0}),module.exports=O;
},{"./State.js":"x00L","./constants.js":"p3SI","./utils.js":"K0yk"}],"Ngkj":[function(require,module,exports) {
"use strict";function t(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function e(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?t(Object(i),!0).forEach(function(t){r(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function r(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,r){return e&&i(t.prototype,e),r&&i(t,r),t}var c=Symbol("cascade"),a=Symbol("smooth");function u(t){if(t)try{return window.matchMedia("(pointer: coarse)").matches}catch(e){return!0}return!1}var s=function(){function t(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n(this,t);var i=e({},t.DEFAULTS,{},r);this.next=null,u(i.applySmoothing)?this.next=this[a].bind(this):this.next=function(t){return t},this.identity=i.identity,this[c]=this.identity}return o(t,[{key:"restart",value:function(){this[c]=this.identity}},{key:a,value:function(t){var e=this.average(this[c],t);return this[c]=e,e}},{key:"average",value:function(t,e){return(t+e)/2}}]),t}();s.DEFAULTS=Object.freeze({applySmoothing:!0,identity:0}),module.exports=s;
},{}],"Focm":[function(require,module,exports) {
"use strict";function e(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function r(r){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?e(Object(o),!0).forEach(function(e){t(r,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function t(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var n=require("./src/Gesture.js"),o=require("./src/Input.js"),s=require("./src/Point2D.js"),c=require("./src/PointerData.js"),i=require("./src/Region.js"),u=require("./src/Smoothable.js"),a=require("./src/State.js"),j=require("./src/constants.js"),b=require("./src/utils.js");module.exports=r({Gesture:n,Input:o,Point2D:s,PointerData:c,Region:i,Smoothable:u,State:a},j,{},b);
},{"./src/Gesture.js":"nrko","./src/Input.js":"W3UA","./src/Point2D.js":"Qs2Z","./src/PointerData.js":"zSto","./src/Region.js":"e28u","./src/Smoothable.js":"Ngkj","./src/State.js":"x00L","./src/constants.js":"p3SI","./src/utils.js":"K0yk"}]},{},["Focm"], null)
//# sourceMappingURL=/index.js.map