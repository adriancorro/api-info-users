(this["webpackJsonpapi-info-users"]=this["webpackJsonpapi-info-users"]||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('[{"id":1,"firstName":"Walle","surname":"Mac","email":"walle@walle.com"},{"id":2,"firstName":"Sadia","surname":"Begum","email":"begum_sadia@sadia.org"},{"id":3,"firstName":"Henry","surname":"Wales","email":"harry@harry.com"}]')},,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(4),a=c.n(r),i=(c(10),c(2)),o=c(0),l=function(e){var t=e.result2,c=Object(n.useState)("white"),s=Object(i.a)(c,2),r=s[0],a=s[1];return console.log(t),Object(o.jsx)("tr",{className:r,onClick:function(){a("white"===r?"green":"white")},children:0!=t?Object.values(t).map((function(e,t){return Object(o.jsx)("td",{children:e},t)})):Object(o.jsx)("span",{children:"Loading.. Componente child"})})},u=function(e){var t=Object(n.useState)("white"),c=Object(i.a)(t,2),s=c[0],r=c[1],a=Object(n.useState)([]),u=Object(i.a)(a,2),j=u[0],b=u[1],d=function(e){var t=e.date,c=e.ind;return Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"order2",onClick:function(){b(c),t.sort((function(e,t){return t[c]>e[c]?1:t[c]<e[c]?-1:0})),j==c&&(b(!1),t.sort((function(e,t){return e[c]>t[c]?1:e[c]<t[c]?-1:0})))},children:"A-Z"})})};return Object(n.useEffect)((function(){e.results.map((function(e){return Object.keys(e)}))[0]&&e.results.map((function(e){return Object.keys(e)}))[0].includes("vip")&&(r("orange"),console.log("-------------This line of code runs only once------------------"))}),[]),Object(o.jsx)("div",{children:0!=e.results?Object(o.jsxs)("table",{className:"table",children:[Object(o.jsx)("thead",{children:Object(o.jsx)("tr",{className:s,children:e.results.map((function(e){return Object.keys(e)}))[0].includes("vip")?e.results.map((function(e){return Object.keys(e)}))[0].map((function(e,t){return Object(o.jsx)("th",{scope:"col",children:e},t)})):e.results.map((function(e){return Object.keys(e)}))[0].map((function(t,c){return Object(o.jsxs)("th",{scope:"col",children:[Object(o.jsx)(d,{date:e.results,ind:t}),t]},c)}))})}),Object(o.jsx)("tbody",{children:e.results.map((function(e,t){return Object(o.jsx)(l,{result2:e},t)}))})]}):Object(o.jsx)("span",{children:"Loading..."})})},j=function(){return Object(o.jsx)("button",{className:"btn btn-primary",children:"Search"})},b=function(e){var t=Object(n.useState)(""),c=Object(i.a)(t,2),s=c[0],r=c[1];return Object(o.jsxs)("div",{className:"search",children:[Object(o.jsx)("div",{className:"page-header",children:Object(o.jsx)("h4",{className:"text-left",children:"Search User"})}),Object(o.jsx)("div",{className:"row search-wrapper",children:Object(o.jsx)("div",{className:"col",children:Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault(),console.log(t.target.vale),console.log("Sending data to server"),e.searchKey(s)},className:"form-group search-box",children:[Object(o.jsx)("label",{htmlFor:"customerName",children:"Customer name"}),Object(o.jsxs)("div",{className:"search-row",children:[Object(o.jsx)("input",{type:"text",id:"customerName",className:"form-control",placeholder:"Customer name",value:s,onChange:function(e){r(e.target.value),console.log(e.target.value)}}),Object(o.jsx)(j,{})]})]})})})]})},d=c(5),m=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)([]),a=Object(i.a)(r,2),l=a[0],j=a[1];return Object(n.useEffect)((function(){fetch("https://cyf-react.glitch.me").then((function(e){if(e)return e.json();throw new Error("HTTP error ! status : ".concat(e.ok))})).then((function(e){j(d)})).catch((function(e){return console.log(e)}))}),[]),Object(o.jsx)("div",{className:"App-content",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(b,{searchKey:function(e){s(e.trim())}}),!c&&Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(u,{results:l})}),c&&Object(o.jsx)(u,{results:l.filter((function(e){return e.id==c||e.firstName.slice(1).toLowerCase()===c||e.surname.slice(1).toLowerCase()===c||e.firstName.toLowerCase()===c||e.surname.toLowerCase()===c||e.email.toLowerCase()===c||e.surname.charAt(0).toUpperCase()+e.email.charAt(0).toUpperCase()+e.email.slice(1).toLowerCase()===c}))})]})})},h=(c(12),function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(m,{})})}),f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),r(e),a(e)}))};a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),f()}],[[13,1,2]]]);
//# sourceMappingURL=main.47bd2903.chunk.js.map