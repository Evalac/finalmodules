!function(){function t(t){return t&&t.__esModule?t.default:t}var e={};Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};var n={};function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t,e,n){e&&r(t.prototype,e);n&&r(t,n);return t};var o={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};console.log(o.startBtn);var a=new(function(){"use strict";function r(){t(e)(this,r),this.IsActive=!1,this.inervalID=null}return t(n)(r,[{key:"start",value:function(){this.IsActive||(this.inervalId=setInterval((function(){i();var t=i();document.body.style.backgroundColor=t}),1e3),this.IsActive=!0)}},{key:"stop",value:function(){clearInterval(this.inervalId),this.IsActive=!1}}]),r}())({});function i(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}console.log(a),o.startBtn.addEventListener("click",a.start.bind(a)),o.stopBtn.addEventListener("click",a.stop.bind(a))}();
//# sourceMappingURL=01-color-switcher.ec95e5af.js.map
