(this.webpackJsonpimagefilter=this.webpackJsonpimagefilter||[]).push([[0],{10:function(e,a,n){},12:function(e,a,n){"use strict";n.r(a);var t=n(1),r=n.n(t),i=n(5),c=n.n(i),s=n(4),u=n(3),l=(n(10),n(0)),m=function(e){var a=e.min,n=e.max,t=e.value,r=e.unit,i=e.handleChange;return Object(l.jsxs)("div",{className:"slider-container",children:[Object(l.jsxs)("div",{className:"slider-values",children:[Object(l.jsxs)("h3",{children:["Min: ",a]}),Object(l.jsxs)("h3",{children:["Current: ",t,Object(l.jsxs)("span",{children:[" ",r]})]}),Object(l.jsxs)("h3",{children:["Max: ",n]})]}),Object(l.jsx)("input",{type:"range",className:"slider",min:a,max:n,value:t,onChange:i})]})},o=function(e){var a=e.name,n=e.active,t=e.handleClick;return Object(l.jsx)("button",{className:"sidebar-item ".concat(n?"active":""),onClick:t,children:a})},j=[{name:"Brightness",property:"brightness",value:100,range:{min:0,max:200},unit:"%"},{name:"Contrast",property:"contrast",value:100,range:{min:0,max:200},unit:"%"},{name:"Saturation",property:"saturate",value:100,range:{min:0,max:200},unit:"%"},{name:"Grayscale",property:"grayscale",value:0,range:{min:0,max:100},unit:"%"},{name:"Sepia",property:"sepia",value:0,range:{min:0,max:100},unit:"%"},{name:"Hue Rotate",property:"hue-rotate",value:0,range:{min:0,max:360},unit:"deg"},{name:"Blur",property:"blur",value:0,range:{min:0,max:20},unit:"px"},{name:"Opacity",property:"opacity",value:100,range:{min:0,max:100},unit:"%"}];var p=function(){var e=Object(t.useState)(0),a=Object(u.a)(e,2),n=a[0],r=a[1],i=Object(t.useState)(j),c=Object(u.a)(i,2),p=c[0],d=c[1],v=p[n];return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("div",{className:"image",style:{filter:p.map((function(e){return"".concat(e.property,"(").concat(e.value).concat(e.unit,")")})).join(" ")}}),Object(l.jsx)("div",{className:"sidebar",children:p.map((function(e,a){return Object(l.jsx)(o,{name:e.name,active:a===n,handleClick:function(){return r(a)}},a)}))}),Object(l.jsx)(m,{min:v.range.min,max:v.range.max,value:v.value,unit:v.unit,handleChange:function(e){var a=e.target;d((function(e){return e.map((function(e,t){return t!==n?e:Object(s.a)(Object(s.a)({},e),{},{value:a.value})}))}))}})]})})};c.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.f20fcefa.chunk.js.map