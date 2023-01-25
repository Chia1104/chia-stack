'use strict';

var l = require('react');

var D=Object.create;var I=Object.defineProperty;var j=Object.getOwnPropertyDescriptor;var V=Object.getOwnPropertyNames;var O=Object.getPrototypeOf,k=Object.prototype.hasOwnProperty;var Z=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var $=(t,e,n,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of V(e))!k.call(t,o)&&o!==n&&I(t,o,{get:()=>e[o],enumerable:!(s=j(e,o))||s.enumerable});return t};var w=(t,e,n)=>(n=t!=null?D(O(t)):{},$(e||!t||!t.__esModule?I(n,"default",{value:t,enumerable:!0}):n,t));var f=Z((Q,d)=>{(function(){var t={}.hasOwnProperty;function n(){for(var s=[],o=0;o<arguments.length;o++){var r=arguments[o];if(!!r){var i=typeof r;if(i==="string"||i==="number")s.push(r);else if(Array.isArray(r)){if(r.length){var p=n.apply(null,r);p&&s.push(p);}}else if(i==="object"){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){s.push(r.toString());continue}for(var a in r)t.call(r,a)&&r[a]&&s.push(a);}}}return s.join(" ")}typeof d<"u"&&d.exports?(n.default=n,d.exports=n):typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("classnames",[],function(){return n}):window.classNames=n;})();});var m=w(f());var R=t=>{let{text:e,disabled:n,className:s,...o}=t;return l.createElement("button",{disabled:n,className:(0, m.default)("group relative inline-flex transition ease-in-out rounded self-center bg-ctw_secondary dark:bg-ctw_primary",s),...o},l.createElement("span",{className:(0, m.default)("ctw-component-button-secondary transform text-base",n?"text-gray-400 cursor-not-allowed":"group-hover:-translate-x-1 group-hover:-translate-y-1")},e))},L=R;var y=w(f());var T=l.forwardRef((t,e)=>{let{title:n,error:s,titleClassName:o,schema:r,type:i="text",className:p,onChange:a,onBlur:b,onFocus:v,errorClassName:E,...C}=t,[c,F]=l.useState(!1),[B,g]=l.useState(!1),h=l.useId(),x=l.useRef(null);l.useImperativeHandle(e,()=>({getValidity:()=>r?c:!0,getNativeInput:()=>x.current}));let P=u=>{if(r){let{value:A}=u.target;F(r.safeParse(A).success);}a&&a(u);},S=u=>{g(!1),b&&b(u);},_=u=>{g(!0),v&&v(u);};return l.createElement(l.Fragment,null,l.createElement("label",{className:o,htmlFor:`${h}-input`},n??""),l.createElement("input",{ref:x,id:`${h}-input`,onChange:P,type:i,onFocus:_,onBlur:S,className:(0, y.default)("border-[#CBD2D7] w-full rounded-lg ctw-component-border-primary transition ease-in-out focus:outline-none ctw-component-bg-primary",!c&&"border-ctw_danger hover:cursor-not-allowed dark:border-ctw_danger dark:hover:cursor-not-allowed",B&&c&&"border-ctw_primary dark:border-ctw_primary",p),...C}),!c&&l.createElement("p",{className:(0, y.default)("text-ctw_danger",E)},s??""))});T.displayName="Input";var N=T;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

exports.Button = L;
exports.Input = N;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map