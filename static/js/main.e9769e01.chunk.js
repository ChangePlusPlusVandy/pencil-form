(this["webpackJsonppencil-form"]=this["webpackJsonppencil-form"]||[]).push([[0],{27:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(19),a=n.n(r),o=(n.p,n.p,n(9)),i=n(2),s=n(5),u=(n(27),n(1)),l=Object(c.createContext)();function j(){return Object(c.useContext)(l)}var b=function(e){var t=e.children,n=Object(c.useState)(),r=Object(s.a)(n,2),a=r[0],o=r[1],i=Object(c.useState)(),j=Object(s.a)(i,2),b=j[0],d=j[1],m=Object(c.useState)(),p=Object(s.a)(m,2),h=p[0],f=p[1];function O(e){f(e.name.split(" ")[0]),o(e)}function x(){f(null),o(null)}function v(e){d(e)}function N(){d(null)}var g=Object(c.useMemo)((function(){return{teacher:a,populateTeacher:O,clearTeacher:x,teacherFirstName:h,location:b,populateLocation:v,clearLocation:N}}),[a,O,x,h,b,v,N]);return Object(u.jsx)(l.Provider,{value:g,children:t})},d=n(8),m=n.n(d),p=n(13),h=function(){var e=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://ec2-3-130-177-151.us-east-2.compute.amazonaws.com:8080/api/teacher/".concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",{error:"Teacher Not Found"});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://ec2-3-130-177-151.us-east-2.compute.amazonaws.com:8080/api/location/locations");case 3:return t=e.sent,e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(p.a)(m.a.mark((function e(t){var n,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://ec2-3-130-177-151.us-east-2.compute.amazonaws.com:8080/api/".concat(t,"/form/getShopForm"));case 3:return n=e.sent,e.next=6,n.json();case 6:return(c=e.sent).forEach((function(e){e.itemCount=0})),e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(p.a)(m.a.mark((function e(t,n){var c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n.items=n.items.filter((function(e){return e.itemCount>0})),e.next=4,fetch("api/".concat(t,"/transaction/submit"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:return c=e.sent,e.next=7,c.json();case 7:return e.abrupt("return",e.sent);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}(),v=n.p+"static/media/pencil-icon-2.f7c1ee4b.svg",N=function(){var e=j(),t=e.populateTeacher,n=e.populateLocation,r=e.location,a=Object(i.g)(),o=Object(c.useState)(""),l=Object(s.a)(o,2),b=l[0],d=l[1],m=Object(c.useState)(r),p=Object(s.a)(m,2),O=p[0],x=p[1],N=Object(c.useState)(""),g=Object(s.a)(N,2),C=g[0],w=g[1],k=Object(c.useState)([]),L=Object(s.a)(k,2),y=L[0],I=L[1];Object(c.useEffect)((function(){console.log(r)}),[]);return Object(c.useEffect)((function(){f().then((function(e){!e||e.error?console.log(e?e.error:"error"):(console.log(e),I(e))}))}),[]),Object(u.jsxs)("div",{className:"centered",children:[Object(u.jsx)("div",{id:"background1"}),Object(u.jsx)("div",{id:"background2"}),Object(u.jsx)("div",{id:"line1"}),Object(u.jsx)("div",{id:"line2"}),Object(u.jsxs)("div",{id:"welcomeMessage",children:[Object(u.jsx)("img",{src:v,id:"pencil-icon",alt:"A cartoon pencil"}),Object(u.jsx)("h2",{id:"welcome",children:"Welcome to"}),Object(u.jsx)("h1",{id:"pencil",children:"PENCIL"})]}),Object(u.jsx)("br",{}),Object(u.jsx)("div",{className:"idFormBox",children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(O),""===b?w("Pencil ID is required."):O?h(b).then((function(e){console.log(e),e.error?w(e.error):(w(""),t(e),n(O),a.push("/form"))})):w("Location is required.")},id:"idForm",children:[Object(u.jsx)("p",{id:"label",children:"Please enter your PENCIL ID and location to get started."}),Object(u.jsx)("br",{id:"desktopBr"}),Object(u.jsx)("input",{variant:"outlined",name:"teacherid",placeholder:"PENCIL ID",value:b,autoComplete:"off",onChange:function(e){return d(e.target.value)}}),Object(u.jsxs)("select",{variant:"outlined",name:"location",placeholder:"LOCATION",value:O,autoComplete:"off",className:"selectLocation",onChange:function(e){return x(e.target.value)},children:[Object(u.jsx)("option",{value:"",disabled:"disabled",selected:"selected",children:"Select a Location"}),y.map((function(e){return Object(u.jsx)("option",{value:e.name,children:e.name})}))]}),Object(u.jsx)("br",{}),C&&Object(u.jsx)("p",{className:"errorMessage",children:C}),Object(u.jsx)("button",{id:"submitButton",type:"submit",children:"Submit"})]})})]})},g=n(11),C=(n(35),n(17)),w=function(e){var t=e.uuid,n=e.itemName,r=e.itemLimit,a=e.handleChange,o=Object(c.useState)(0),i=Object(s.a)(o,2),l=i[0],j=i[1];return Object(c.useEffect)((function(){a(l,t)}),[l]),Object(u.jsxs)("div",{className:"cardContainer",children:[Object(u.jsx)("button",{type:"button",className:"minMaxButton",id:"minButton",onClick:function(){return j(0)},children:"Min"}),Object(u.jsx)("div",{className:"itemName",children:n}),Object(u.jsx)("button",{type:"button",className:"minMaxButton",onClick:function(){return j(r)},children:"Max"}),Object(u.jsxs)("text",{className:"itemLimit ".concat(l>r?"redFont":""),children:["Limit: ",r]}),Object(u.jsx)("button",{type:"button",className:"roundButton decrement",onClick:function(){return j(l-1)},disabled:0===l,children:Object(u.jsx)(C.a,{size:100})}),Object(u.jsx)("input",{className:"itemCountInputBox ".concat(l>r?"inputBoxRed":""),pattern:"[0-9]*",type:"number",value:l,onChange:function(e){var t=parseInt(e.target.value,10);j(t)},min:"0"}),Object(u.jsx)("button",{type:"button",className:"roundButton increment",onClick:function(){return j(l+1)},children:Object(u.jsx)(C.b,{size:100})})]})},k=w;w.defaultProps={uuid:"",itemName:"None",itemLimit:0,handleChange:function(){}};var L=function(){var e=j(),t=e.teacher,n=e.location,r=e.teacherFirstName,a=Object(c.useState)([]),i=Object(s.a)(a,2),l=i[0],b=i[1];function d(e){var t=e||window.event;t.cancelBubble=!0,t.returnValue="You sure you want to leave?",t.stopPropagation&&(t.stopPropagation(),t.preventDefault())}Object(c.useEffect)((function(){return window.onbeforeunload=d,function(){window.onbeforeunload=null}}),[]),Object(c.useEffect)((function(){O(n).then((function(e){!e||e.error?console.log(e?e.error:"error"):b(e)}))}),[]);var m=function(e,t){b((function(n){return n.map((function(n){return n.uuid===t?Object(g.a)(Object(g.a)({},n),{},{itemCount:e}):n}))}))};return Object(u.jsxs)("div",{className:"pageContainer",children:[Object(u.jsxs)("div",{className:"header",children:[t&&Object(u.jsxs)("h1",{id:"form-greeting",children:["Welcome, ",r,"!"]}),n&&Object(u.jsxs)("h2",{id:"location-label",children:["PENCIL - ",n]})]}),Object(u.jsxs)("div",{className:"formContainer",children:[l.map((function(e){return Object(u.jsx)(k,{uuid:e.uuid,itemName:e["Item.itemName"],itemLimit:e.maxLimit,handleChange:m})})),Object(u.jsx)(o.b,{className:"submitLink",to:"/submitted",children:Object(u.jsx)("button",{type:"submit",id:"submit",onClick:function(){var e={teacherId:t.pencilId,locationId:n,schoolId:t.School.uuid||2,items:l};x(n,e)},children:"Submit"})})]})]})},y=(n(36),function(){var e=j(),t=e.clearTeacher,n=e.teacher,c=e.teacherFirstName;return Object(u.jsxs)("div",{className:"submitted",children:[n&&Object(u.jsxs)("p",{id:"thanks",children:["Thank you for shopping with PENCIL, ",c,"!"]}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"fullPencil",children:[Object(u.jsx)("div",{className:"secondLine"}),Object(u.jsx)("div",{className:"pencilIcon"}),Object(u.jsx)("div",{className:"firstLine"})]}),Object(u.jsx)("button",{type:"button",className:"backHome",variant:"contained",onClick:function(){t()},children:Object(u.jsx)("a",{className:"link",to:"/",children:"Back to home"})})]})}),I=n(22),S=["component"],B=function(e){var t=e.component,n=Object(I.a)(e,S),c=j().teacher;return Object(u.jsx)(i.b,Object(g.a)(Object(g.a)({},n),{},{render:function(e){return c?Object(u.jsx)(t,Object(g.a)({},e)):Object(u.jsx)(i.a,{to:"/"})}}))},P=function(){return Object(u.jsx)(b,{children:Object(u.jsxs)(i.d,{children:[Object(u.jsx)(i.b,{exact:!0,path:"/",component:N}),Object(u.jsx)(B,{exact:!0,path:"/form",component:L}),Object(u.jsx)(B,{exact:!0,path:"/submitted",component:y})]})})},E=function(){return Object(u.jsx)(o.a,{children:Object(u.jsx)(P,{})})};n(37);a.a.render(Object(u.jsx)(E,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.e9769e01.chunk.js.map