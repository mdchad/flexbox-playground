(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,n,t){e.exports=t(25)},18:function(e,n,t){},24:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(4),c=t.n(l),u=(t(18),t(3)),o=t(1),i=t(2);function d(){var e=Object(o.a)(["\n  display: block;\n  background-color: white;\n  min-height: 100vh;\n  flex-grow: 1;\n  padding: 0 2em;\n"]);return d=function(){return e},e}var m=i.a.div(d());t(24);function p(){var e=Object(o.a)(["\n  text-align: center;\n  margin-top: 2.2em;\n  font-size: 14px;\n"]);return p=function(){return e},e}function f(){var e=Object(o.a)(["\n  display: flex;\n  /* width: 380px; */\n  flex-wrap: wrap;\n  justify-content: center;\n"]);return f=function(){return e},e}function s(){var e=Object(o.a)(["\n  text-align:center;\n  font-size: 11px;\n  padding:8px 0px;\n  display:block;\n\n  ",":checked + & {\n    background-color:#8d70c8;\n    color:#F7F7F7;\n  }\n"]);return s=function(){return e},e}function E(){var e=Object(o.a)(["\n  padding: 0.5em;\n  margin: 0.5em;\n  color: palevioletred;\n  background: papayawhip;\n  border: none;\n  border-radius: 3px;\n  position:absolute;\n  top:-20px;\n"]);return E=function(){return e},e}function h(){var e=Object(o.a)(["\n  float:left;\n  width:100px;\n  margin:4px 0;\n  background-color: white;\n  overflow:auto;\n  cursor: pointer;\n"]);return h=function(){return e},e}function x(){var e=Object(o.a)(["\n    background-color: #f5f5f5;\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    padding-top: 25px\n    /* padding-left: 20px; */\n"]);return x=function(){return e},e}var v=i.a.div(x()),g=i.a.label(h()),b=i.a.input(E()),w=i.a.span(s(),b),y=i.a.div(f()),k=i.a.p(p());function j(){var e=Object(o.a)(["\n  border-radius: 10px;\n  background-color: #fff;\n  box-shadow: 10px 10px 25px 0px rgba(148,148,148,1);\n  margin: 50px 0;\n  display: flex;\n  min-height: 500px;\n  /* width: 900px; */\n  flex-direction: ",";\n  flex-wrap: ",";\n  justify-content: ",";\n  align-items: ",";\n  align-content: ",";\n\n  @media (min-width: 375px) {\n\n  }\n"]);return j=function(){return e},e}var C=i.a.div(j(),function(e){return e.direction},function(e){return e.wrap},function(e){return e.justify},function(e){return e.alignItems},function(e){return e.alignContent});function O(){var e=Object(o.a)(["\n  font-size: 12px;\n  background-color: #7646d8;\n  box-shadow: 0 0 25px 0px rgba(148,148,148,1);\n  border-radius: 10px;\n  color: white;\n  display:flex;\n  justify-content: center;\n  align-items: center;\n  /* text-align: center; */\n  margin: 2em;\n  height: 100px;\n  width: 100px;\n"]);return O=function(){return e},e}var S=i.a.div(O());function F(){var e=Object(o.a)(["\n  padding: 0.5em;\n  margin: 0.5em;\n  color: #525252;\n  background: white;\n  border: none;\n  border-radius: 3px;\n"]);return F=function(){return e},e}var I=i.a.input(F());function W(){var e=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return W=function(){return e},e}function z(){var e=Object(o.a)(["\n  /* margin-top: 20px;\n  margin-left: 35px; */\n"]);return z=function(){return e},e}function A(){var e=Object(o.a)(["\n  padding: 4px 8px;\n  border-radius: 4px;\n  cursor: pointer;\n  border: 1px solid white;\n  &:hover {\n    background-color: #8d70c8;\n    border: 1px solid #8d70c8;\n    color: white\n  }\n"]);return A=function(){return e},e}function B(){var e=Object(o.a)(["\n  display: flex;\n  flex-direction: row;\n  min-height: 100vh;\n\n  @media (max-width: 375px) {\n    flex-direction: column;\n  }\n"]);return B=function(){return e},e}var J=i.a.div(B()),D=i.a.button(A()),R=i.a.form(z()),N=i.a.div(W());var P=function(){var e=Object(a.useState)([1,2,3,4,5,6,7,8]),n=Object(u.a)(e,2),t=n[0],l=n[1],c=Object(a.useState)(t.length),o=Object(u.a)(c,2),i=o[0],d=o[1],p=Object(a.useState)("row"),f=Object(u.a)(p,2),s=f[0],E=f[1],h=Object(a.useState)("wrap"),x=Object(u.a)(h,2),j=x[0],O=x[1],F=Object(a.useState)("flex-start"),W=Object(u.a)(F,2),z=W[0],A=W[1],B=Object(a.useState)("stretch"),P=Object(u.a)(B,2),$=P[0],q=P[1],G=Object(a.useState)("stretch"),H=Object(u.a)(G,2),K=H[0],L=H[1];return r.a.createElement(J,null,r.a.createElement(m,null,r.a.createElement("p",null,"Flexbox Playground"),r.a.createElement("small",null,"Created by Irsyad"),r.a.createElement(C,{direction:s,wrap:j,justify:z,alignItems:$,alignContent:K},t.map(function(e,n){return r.a.createElement(S,{key:n},r.a.createElement("span",null,"item ",e))}))),r.a.createElement(v,null,r.a.createElement(N,null,r.a.createElement(R,{onSubmit:function(e){return function(e){e.preventDefault();var n=Array.from({length:i},function(e,n){return n+1});l(n)}(e)}},r.a.createElement("label",null,"Items "),r.a.createElement(I,{type:"number",value:i,onChange:function(e){return d(e.target.value)}}),r.a.createElement(D,{type:"submit"},"submit"))),r.a.createElement(N,null,r.a.createElement(k,null,"Direction "),r.a.createElement(y,null,r.a.createElement(g,null,r.a.createElement(b,{type:"radio",value:"row",onChange:function(){return E("row")},checked:"row"===s}),r.a.createElement(w,null,"Row")),r.a.createElement(g,null,r.a.createElement(b,{type:"radio",value:"row-reverse",onChange:function(){return E("row-reverse")},checked:"row-reverse"===s}),r.a.createElement(w,null,"Row-reverse")),r.a.createElement(g,null,r.a.createElement(b,{type:"radio",value:"column",onChange:function(){return E("column")},checked:"column"===s}),r.a.createElement(w,null,"Column")),r.a.createElement(g,null,r.a.createElement(b,{type:"radio",value:"column-reverse",onChange:function(){return E("column-reverse")},checked:"column-reverse"===s}),r.a.createElement(w,null,"Column-reverse")))),r.a.createElement(N,null,r.a.createElement(k,null,"Flex-wrap "),r.a.createElement(y,null,r.a.createElement(g,null,r.a.createElement(b,{type:"radio",value:"wrap",onChange:function(){return O("wrap")},checked:"wrap"===j}),r.a.createElement(w,null,"Wrap")),r.a.createElement(g,null,r.a.createElement(b,{type:"radio",value:"no-wrap",onChange:function(){return O("no-wrap")},checked:"no-wrap"===j}),r.a.createElement(w,null,"No-wrap")),r.a.createElement(g,null,r.a.createElement(b,{type:"radio",value:"wrap-reverse",onChange:function(){return O("wrap-reverse")},checked:"wrap-reverse"===j}),r.a.createElement(w,null,"Wrap-reverse")))),r.a.createElement(N,null,r.a.createElement(k,null,"Justify-content "),r.a.createElement(y,null,r.a.createElement(g,null,r.a.createElement(b,{type:"radio",value:"flex-start",onChange:function(){return A("flex-start")},checked:"flex-start"===z}),r.a.createElement(w,null,"Flex-start")),r.a.createElement(g,null,r.a.createElement(b,{type:"radio",value:"flex-end",onChange:function(){return A("flex-end")},checked:"flex-end"===z}),r.a.createElement(w,null,"Flex-end")),r.a.createElement(g,null,r.a.createElement(b,{type:"radio",value:"center",onChange:function(){return A("center")},checked:"center"===z}),r.a.createElement(w,null,"Center")),r.a.createElement(g,null,r.a.createElement(b,{type:"radio",value:"space-between",onChange:function(){return A("space-between")},checked:"space-between"===z}),r.a.createElement(w,null,"Space-between")),r.a.createElement(g,null,r.a.createElement(b,{type:"radio",value:"space-around",onChange:function(){return A("space-around")},checked:"space-around"===z}),r.a.createElement(w,null,"Space-around")),r.a.createElement(g,null,r.a.createElement(b,{type:"radio",value:"space-evenly",onChange:function(){return A("space-evenly")},checked:"space-evenly"===z}),r.a.createElement(w,null,"Space-evenly")))),r.a.createElement(N,null,r.a.createElement(k,null,"Align-items "),r.a.createElement(y,null,r.a.createElement(g,null,r.a.createElement(b,{type:"radio",value:"stretch",onChange:function(){return q("stretch")},checked:"stretch"===$}),r.a.createElement(w,null,"Stretch")),r.a.createElement(g,null,r.a.createElement(b,{type:"radio",value:"flex-start",onChange:function(){return q("flex-start")},checked:"flex-start"===$}),r.a.createElement(w,null,"Flex-start")),r.a.createElement(g,null,r.a.createElement(b,{type:"radio",value:"flex-end",onChange:function(){return q("flex-end")},checked:"flex-end"===$}),r.a.createElement(w,null,"Flex-end")),r.a.createElement(g,null,r.a.createElement(b,{type:"radio",value:"center",onChange:function(){return q("center")},checked:"center"===$}),r.a.createElement(w,null,"Center")),r.a.createElement(g,null,r.a.createElement(b,{type:"radio",value:"baseline",onChange:function(){return q("baseline")},checked:"baseline"===$}),r.a.createElement(w,null,"Baseline")))),r.a.createElement(N,null,r.a.createElement(k,null,"Align-content "),r.a.createElement(y,null,r.a.createElement(g,null,r.a.createElement(b,{type:"radio",value:"stretch",onChange:function(){return L("stretch")},checked:"stretch"===K}),r.a.createElement(w,null,"Stretch")),r.a.createElement(g,null,r.a.createElement(b,{type:"radio",value:"flex-start",onChange:function(){return L("flex-start")},checked:"flex-start"===K}),r.a.createElement(w,null,"Flex-start")),r.a.createElement(g,null,r.a.createElement(b,{type:"radio",value:"flex-end",onChange:function(){return L("flex-end")},checked:"flex-end"===K}),r.a.createElement(w,null,"Flex-end")),r.a.createElement(g,null,r.a.createElement(b,{type:"radio",value:"center",onChange:function(){return L("center")},checked:"center"===K}),r.a.createElement(w,null,"Center")),r.a.createElement(g,null,r.a.createElement(b,{type:"radio",value:"space-around",onChange:function(){return L("space-around")},checked:"space-around"===K}),r.a.createElement(w,null,"Space-around")),r.a.createElement(g,null,r.a.createElement(b,{type:"radio",value:"space-between",onChange:function(){return L("space-between")},checked:"space-between"===K}),r.a.createElement(w,null,"Space-between"))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.6d7d3064.chunk.js.map