parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"6KIz":[function(require,module,exports) {
"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,a(r.key),r)}}function r(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function a(e){var n=o(e,"string");return"symbol"==t(n)?n:String(n)}function o(e,n){if("object"!=t(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,n||"default");if("object"!=t(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}var i=document.querySelector("body"),c=document.querySelector("thead"),l=document.querySelector("tbody"),u=document.querySelector("tbody").children,s={Salary:4,Age:3,Office:2,Position:1,Name:0},f=function(){return r(function t(n){e(this,t),this.form=document.createElement("form"),this.className=n,this.btn=document.createElement("button")},[{key:"createForm",value:function(){var t=this;this.form.className=this.className;for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];n.forEach(function(e){var n=document.createElement("label");n.textContent="".concat(e.dataQa.slice(0,1).toUpperCase()+e.dataQa.slice(1),":"),n.appendChild(e.randerIt()),t.form.appendChild(n)}),this.btn.textContent="Save to table",this.form.appendChild(this.btn),i.appendChild(this.form)}}])}(),m=function(){return r(function t(n,r,a){e(this,t),this.elem=document.createElement("input"),this.inName=n,this.dataQa=a,this.type=r},[{key:"randerIt",value:function(){return this.elem.type=this.type,this.elem.dataset.qa=this.dataQa,this.elem}}])}(),d=function(){return r(function t(n){e(this,t),this.element=document.createElement("select"),this.cities=["Tokyo","Singapore","London","New York","Edinburgh","San Francisco"],this.dataQa=n},[{key:"randerIt",value:function(){var t=this;return this.element.dataset.qa=this.dataQa,this.cities.forEach(function(e){var n=document.createElement("option");n.textContent=e,t.element.appendChild(n)}),this.element}}])}(),h=new f("new-employee-form"),y=new m("name","text","name"),p=new m("position","text","position"),v=new d("office"),b=new m("age","number","age"),C=new m("salary","number","salary");h.createForm(y,p,v,b,C);var g={name:"",position:"",office:v.cities[0],age:0,salary:0};function E(t,e){var n=S(u,s[t]),r=x(u,s[t]);e?(l.innerHTML="",n.forEach(function(t){l.appendChild(t)})):(l.innerHTML="",r.forEach(function(t){l.appendChild(t)}))}function S(t,e){return Array.from(t).sort(function(t,n){return isNaN(w(t.children[e].textContent))?t.children[e].textContent.localeCompare(n.children[e].textContent):w(t.children[e].textContent)-w(n.children[e].textContent)})}function x(t,e){return Array.from(t).sort(function(t,n){return isNaN(w(t.children[e].textContent))?n.children[e].textContent.localeCompare(t.children[e].textContent):w(n.children[e].textContent)-w(t.children[e].textContent)})}function w(t){return+t.replace(/[$,]/g,"")}function N(t){return isNaN(t)?t:new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}).format(t)}document.querySelectorAll("label").forEach(function(t){t.children[0].addEventListener("focus",function(t){t.target.addEventListener("input",function(e){g[t.target.dataset.qa]=e.target.value})})}),document.querySelector("button").addEventListener("click",function(t){t.preventDefault();var e=+g.age>=18&&+g.age<=90,n=g.name.length>3;if(g.salary=N(g.salary),e&&n){var r=document.createElement("tr");Object.values(g).forEach(function(t){var e=document.createElement("td");e.textContent=t,r.appendChild(e)}),l.appendChild(r)}}),c.addEventListener("click",function(t){var e=t.target.textContent,n=t.target,r=c.children[0].children;Array.from(r).forEach(function(t){e===t.textContent?t.classList.toggle("asc"):t.classList=""}),E(e,n.classList[0])}),l.addEventListener("click",function(t){Array.from(l.children).forEach(function(e){e.className="",e===t.target.parentElement&&(e.className="active")})});
},{}]},{},["6KIz"], null)
//# sourceMappingURL=main.f7fe767c.js.map