(this.webpackJsonpimagefilter=this.webpackJsonpimagefilter||[]).push([[0],{10:function(e,a,n){},12:function(e,a,n){"use strict";n.r(a);var t=n(1),r=n.n(t),i=n(5),c=n.n(i),l=n(4),u=n(2),s=(n(10),n(0)),m=function(e){var a=e.min,n=e.max,t=e.value,r=e.unit,i=e.disabled,c=e.handleChange,l=e.handleSave;return Object(s.jsxs)("div",{className:"slider-container",children:[!0!==i&&Object(s.jsxs)("div",{className:"slider-values",children:[Object(s.jsxs)("h3",{children:["Min: ",a]}),Object(s.jsxs)("h3",{children:["Current: ",t,Object(s.jsxs)("span",{children:[" ",r]})]}),Object(s.jsxs)("h3",{children:["Max: ",n]})]}),Object(s.jsx)("input",{type:"range",className:"slider",disabled:i,min:a,max:n,value:t,onChange:c}),Object(s.jsx)("button",{onClick:l,children:"Save image -- coming soon!"})]})},o=function(e){var a=e.name,n=e.active,t=e.handleClick,r=e.disabled;return Object(s.jsx)("button",{className:"sidebar-item ".concat(n?"active":""),onClick:t,disabled:r,children:a})},d=[{name:"Brightness",property:"brightness",value:100,range:{min:0,max:200},unit:"%"},{name:"Contrast",property:"contrast",value:100,range:{min:0,max:200},unit:"%"},{name:"Saturation",property:"saturate",value:100,range:{min:0,max:200},unit:"%"},{name:"Grayscale",property:"grayscale",value:0,range:{min:0,max:100},unit:"%"},{name:"Sepia",property:"sepia",value:0,range:{min:0,max:100},unit:"%"},{name:"Hue Rotate",property:"hue-rotate",value:0,range:{min:0,max:360},unit:"deg"},{name:"Blur",property:"blur",value:0,range:{min:0,max:20},unit:"px"},{name:"Opacity",property:"opacity",value:100,range:{min:0,max:100},unit:"%"}],j=/(https?:\/\/.*\.(?:png|jpg|jpeg|bmp))/i;var b=function(){var e=Object(t.useState)(0),a=Object(u.a)(e,2),n=a[0],r=a[1],i=Object(t.useState)(d),c=Object(u.a)(i,2),b=c[0],p=c[1],h=Object(t.useState)(null),v=Object(u.a)(h,2),g=v[0],x=v[1],O=b[n],f=Object(t.useRef)(null);return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)("div",{className:"container",children:[null===g?Object(s.jsx)("div",{className:"start",children:Object(s.jsxs)("form",{className:"image-form",onSubmit:function(e){e.preventDefault(),j.test(f.current.value)?x(f.current.value):f.current.value="Couldn't find an image. Please try another URL..."},children:[Object(s.jsx)("label",{htmlFor:"imageUrl",children:"Enter an Image path:"}),Object(s.jsx)("input",{type:"url",name:"imageUrl",id:"imageUrl",ref:f,autoComplete:"off",placeholder:"ex: https://www.image.com/image.png",onFocus:function(){return f.current.value=""}}),Object(s.jsx)("input",{type:"submit",className:"submit-button"})]})}):Object(s.jsx)("div",{className:"image",style:function(){var e=b.map((function(e){return"".concat(e.property,"(").concat(e.value).concat(e.unit,")")}));return{backgroundImage:"url(".concat(g,")"),filter:e.join(" ")}}(),children:Object(s.jsx)("button",{className:"back-button",onClick:function(){return window.location.reload()},children:"Go back to Home"})}),Object(s.jsx)("div",{className:"sidebar",children:b.map((function(e,a){return Object(s.jsx)(o,{name:e.name,disabled:null===g,active:a===n,handleClick:function(){return r(a)}},a)}))}),Object(s.jsx)(m,{min:O.range.min,max:O.range.max,value:O.value,unit:O.unit,disabled:null===g,handleChange:function(e){var a=e.target;p((function(e){return e.map((function(e,t){return t!==n?e:Object(l.a)(Object(l.a)({},e),{},{value:a.value})}))}))},handleSave:function(){}})]})})};c.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(b,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.e7a937f5.chunk.js.map