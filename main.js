(()=>{"use strict";var e={980:(e,t,n)=>{n.d(t,{Z:()=>p});var o=n(81),r=n.n(o),a=n(645),i=n.n(a),c=n(667),s=n.n(c),l=new URL(n(465),n.b),u=i()(r()),d=s()(l);u.push([e.id,"*{box-sizing:border-box}body{text-align:center;background-image:linear-gradient(to bottom, rgba(139,139,139,0.52), rgba(36,36,36,0.932)),url("+d+");background-size:cover;background-repeat:no-repeat;color:white;height:100vh;overflow-y:hidden}li,ul{padding:0;list-style:none}#wrap-title{display:none;justify-content:center;margin-left:29px}#wrap-title:hover #reset-btn{opacity:1}#reset-btn{opacity:0;background-color:transparent;border:none;transition:all 300ms}input{padding:1rem;background-color:transparent;border:none;color:white;font-size:2rem;text-align:center;outline:none;border-bottom:2px solid white}input::placeholder{color:#c4c4c4}#msg{display:inline-block;margin-top:4rem}#title{font-size:3.5rem}.todos{min-width:520px;width:30%;height:200px;position:absolute;left:50%;transform:translateX(-50%);bottom:100px;overflow-y:scroll}.todos::-webkit-scrollbar{display:none}.todo{display:flex;justify-content:space-between;padding:5px 50px;font-weight:600}.todo span{font-size:1.5rem}.todo button{font-size:1.5rem;background:transparent;border:none;color:white;transition:all 300ms;cursor:pointer}.todo button:hover{transform:scale(1.1)}.add-form{position:absolute;left:50%;transform:translateX(-50%);bottom:50px}.weather{position:absolute;top:30px;right:30px;font-size:1.5rem;font-weight:600}.weather #location{margin-bottom:5px}\n",""]);const p=u},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);o&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=o.base?s[0]+o.base:s[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var p=n(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=r(f,o);o.byIndex=c,t.splice(c,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=o(e,r),l=0;l<a.length;l++){var u=n(a[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},655:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},465:(e,t,n)=>{e.exports=n.p+"b0b154877e5e7dd90a8e.jpg"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),a=n(569),i=n.n(a),c=n(565),s=n.n(c),l=n(216),u=n.n(l),d=n(655),p=n.n(d),f=n(980),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=u(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const g=document.querySelector("#login-form"),h=document.querySelector("#username"),v=document.querySelector("#title"),b=document.querySelector("#wrap-title"),y=document.querySelector("#reset-btn"),w=document.querySelector(".todos"),x=document.querySelector(".add-form"),S=document.getElementById("new-input");let I=[];function E(){g.style.display="block"}function T(){g.style.display="none"}function M(){b.style.display="none"}function L(e){b.style.display="flex",v.innerHTML=`Welcome ${e}`}function k(e){localStorage.setItem("todos",JSON.stringify(e))}function j(){const e=localStorage.getItem("todos");I=[...JSON.parse(e)]}function C(){w.innerHTML="",I.forEach((e=>{let t=document.createElement("li"),n=`\n    <li class="todo" id="${e.id}">\n        <span>${e.text}</span>\n        <button ><i class="fas fa-trash" id="remove-btn"></i></button>\n    </li>\n    `;t.innerHTML=n,w.appendChild(t),t.scrollIntoView()}))}localStorage.getItem("name")?(T(),L(localStorage.getItem("name"))):(E(),M()),j(),C(),navigator.geolocation.getCurrentPosition((e=>{const t=e.coords.latitude,n=e.coords.longitude;fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${t}&lon=${n}&appid=979787d17ff36d6639902212e1d6ffe4&units=metric`).then((e=>e.json())).then((e=>{const t=document.getElementById("location"),n=document.getElementById("temp");t.innerHTML=e.main.temp,n.innerHTML=e.name}))})),g.addEventListener("submit",(e=>{e.preventDefault(),localStorage.setItem("name",h.value),h.value="",L(localStorage.getItem("name")),T()})),y.addEventListener("click",(()=>{localStorage.removeItem("name"),M(),E()})),x.addEventListener("submit",(e=>{e.preventDefault(),function(e){const t={id:Date.now(),text:e};I.push(t)}(S.value),S.value="",k(I),j(),C()})),w.addEventListener("click",(e=>{const t=e.target.parentNode.parentNode.id;"remove-btn"==e.target.id&&(I=I.filter((e=>e.id!=t)),k(I),j(),C())}))})()})();