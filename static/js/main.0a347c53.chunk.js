(this.webpackJsonpuserfrontend=this.webpackJsonpuserfrontend||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(27),c=n.n(s),o=n(2),l=(n(33),n(34),n(7)),u=n(3),i=Object(a.createContext)(null),j=n(0);var A=function(){var e=Object(a.useContext)(i).filter;return Object(j.jsxs)("div",{className:"search-terms-container",children:[Object(j.jsx)("h1",{children:"Search terms"}),Object(j.jsxs)("ul",{children:[e.Search?Object(j.jsx)("li",{children:Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"Search:"})," ",e.Search]})}):null,Object(j.jsx)("li",{children:Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"Results per page:"})," ",e.ResultsPerPage]})})]})]})};var d=function(e){var t=e.onSetFilters,n=e.showFilterBox,r=Object(a.useState)(n),s=Object(o.a)(r,2),c=s[0],l=s[1],u=Object(a.useState)(!n),i=Object(o.a)(u,2),d=i[0],b=i[1],g=Object(a.useState)(""),O=Object(o.a)(g,2),p=O[0],x=O[1],h=Object(a.useState)(7),C=Object(o.a)(h,2),m=C[0],f=C[1],Q=function(){c?(l(!1),b(!0)):(l(!0),b(!1))};return Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{className:"button-style-4",onClick:Q,children:" Toggle filtering."}),c?Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault(),t({Page:1,Username:p,ResultsPerPage:m}),Q()},children:Object(j.jsxs)("div",{className:"content-filter-box filter-background-box",children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"column filter-input-background",children:[Object(j.jsx)("div",{className:"filter-text",children:"Results per page"}),Object(j.jsxs)("select",{className:"content-filter-select",name:"ResultsPerPage",id:"ResultsPerPage",value:m,onChange:function(e){f(e.target.value)},children:[Object(j.jsx)("option",{value:"1",children:"1"}),Object(j.jsx)("option",{value:"2",children:"2"}),Object(j.jsx)("option",{value:"3",children:"3"}),Object(j.jsx)("option",{value:"4",children:"4"}),Object(j.jsx)("option",{value:"5",children:"5"}),Object(j.jsx)("option",{value:"6",children:"6"}),Object(j.jsx)("option",{value:"7",selected:"selected",children:"7"}),Object(j.jsx)("option",{value:"8",children:"8"}),Object(j.jsx)("option",{value:"9",children:"9"}),Object(j.jsx)("option",{value:"10",children:"10"})]})]}),Object(j.jsxs)("div",{className:"column filter-input-background",children:[Object(j.jsx)("div",{className:"filter-text",children:"Search by username"}),Object(j.jsx)("input",{className:"user-input-text",id:"search",type:"text",name:"Search",placeholder:"Search",value:p,onChange:function(e){x(e.target.value)}})]})]}),Object(j.jsx)("button",{className:"button-style-1",type:"submit",name:"filter_button",value:"GO",children:"Filter"})]})}):null,d?Object(j.jsx)(A,{}):null]})};var b=function(e){var t=e.totalPages,n=e.onNextPage,r=e.onPreviousPage,s=e.onGoToPage,c=e.page,l=Object(a.useState)(),u=Object(o.a)(l,2),i=u[0],A=u[1];return Object(j.jsx)("div",{className:"content-pagination",children:t>1?Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"content-pagination-bar",children:[Object(j.jsx)("div",{children:c>1?Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault(),r()},children:Object(j.jsx)("button",{type:"submit",className:"pagination-button",children:"\ud83e\udc78"})}):null}),Object(j.jsx)("div",{children:c<=t-1?Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault(),n()},children:Object(j.jsx)("button",{type:"submit",className:"pagination-button",children:"\ud83e\udc7a"})}):null})]}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s(i>t||i<1?1:i)},children:[Object(j.jsx)("input",{className:"user-input-text",placeholder:"PAGE INDEX",required:!0,value:i,onChange:function(e){A(e.target.value)}}),Object(j.jsx)("input",{className:"button-style-4",type:"submit",value:"Go to page"})]})]}):null})},g=function(e){var t=e.totalPagesCount,n=e.totalResultsCount,r=e.pageFirstResultIndex,s=Object(a.useContext)(i).filter;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("p",{className:"txt-small",children:["Total amount of pages: ",t]}),Object(j.jsxs)("p",{className:"txt-small",children:["Total result count: ",n]}),Object(j.jsxs)("p",{className:"txt-small",children:["Page index: ",s.Page]}),Object(j.jsxs)("p",{className:"txt-small",children:["Range: ",r+1," - ",r+s.ResultsPerPage]})]})},O=function(e){var t=e.msg;return Object(j.jsx)("div",{children:Object(j.jsxs)("h4",{className:"warning",children:["Alert: ",t]})})},p=n(6),x=n.n(p),h=n(10),C=n(11),m=n.n(C);function f(){return JSON.parse(localStorage.getItem("accessToken"))}var Q=m.a.create({baseURL:"http://backendcasemicrolabsenv2-env-1.eba-v48dbjmx.eu-north-1.elasticbeanstalk.com/api",headers:{"Content-Type":"application/json"}});Q.interceptors.request.use((function(e){return console.log("What?"+f()),f()&&(console.log("What?2"),e.headers.Authorization="Bearer "+f()),e}),(function(e){return Promise.reject(e)})),Q.interceptors.response.use((function(e){return e}),function(){var e=Object(h.a)(x.a.mark((function e(t){var n,a,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.config,!t.response){e.next=21;break}if(401!==t.response.status||n._retry){e.next=19;break}return n._retry=!0,e.prev=4,e.next=7,Q.post("/token/refresh",{refreshToken:JSON.parse(localStorage.getItem("refreshToken"))});case 7:return a=e.sent,r=a.data.accessToken,localStorage.setItem("accessToken",JSON.stringify(r)),Q.defaults.headers.common.Authorization="Bearer "+r,e.abrupt("return",Q(n));case 14:if(e.prev=14,e.t0=e.catch(4),!e.t0.response||!e.t0.response.data){e.next=18;break}return e.abrupt("return",Promise.reject(e.t0.response.data));case 18:return e.abrupt("return",Promise.reject(e.t0));case 19:if(403!==t.response.status||!t.response.data){e.next=21;break}return e.abrupt("return",Promise.reject(t.response.data));case 21:return e.abrupt("return",Promise.reject(t));case 22:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(t){return e.apply(this,arguments)}}());var B=Q,v=n(14),E="http://backendcasemicrolabsenv2-env-1.eba-v48dbjmx.eu-north-1.elasticbeanstalk.com/api",I=function(){var e=Object(h.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=B.post("/user/update/password",t),e.abrupt("return",n.catch((function(e){return Promise.reject(e)})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(h.a)(x.a.mark((function e(t,n){var a,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new URL(E+"/user/login?")).searchParams.append("username",t),a.searchParams.append("password",n),r=m.a.get(a.toString()),e.abrupt("return",r.then((function(e){return e.data})).catch((function(e){return Promise.reject(e)})));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),P=function(){var e=Object(h.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=m.a.post(E+"/user/register",t),e.abrupt("return",n.catch((function(e){return Promise.reject(e)})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(h.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=B.post("/user/remove",{username:t}),e.abrupt("return",n.then((function(){var e=localStorage.getItem("accessToken");Object(v.a)(e).sub===t&&(localStorage.clear(),alert("You deleted yourself."),window.location.reload())})).catch((function(e){return Promise.reject(e)})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(h.a)(x.a.mark((function e(t){var n,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new URL(E+"/reset/validate")).searchParams.append("token",t),a=m.a.get(n.toString()),e.abrupt("return",a.then((function(e){return e})).catch((function(e){return Promise.reject(e)})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(h.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=m.a.post(E+"/reset/update",t),e.abrupt("return",n.catch((function(e){return Promise.reject(e)})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(h.a)(x.a.mark((function e(t){var n,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new URL(E+"/reset/password")).searchParams.append("email",t),a=m.a.post(n.toString()),e.abrupt("return",a.then((function(e){return e})).catch((function(e){return Promise.reject(e)})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(h.a)(x.a.mark((function e(t){var n,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new URL(E+"/user/search")).searchParams.append("page",t.Page),n.searchParams.append("resultsPerPage",t.ResultsPerPage),n.searchParams.append("username",t.Username),a=m.a.get(n.toString()),e.abrupt("return",a.then((function(e){return e.data})).catch((function(e){return Promise.reject(e)})));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(h.a)(x.a.mark((function e(t){var n,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.Page),(n=new URL(E+"/user/all")).searchParams.append("page",t.Page),n.searchParams.append("resultsPerPage",t.ResultsPerPage),a=m.a.get(n.toString()),e.abrupt("return",a.then((function(e){return e.data})).catch((function(e){return Promise.reject(e)})));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=n(28),D=function(){var e=Object(a.useState)("#00ccfc");return Object(j.jsx)("div",{className:"loading",children:Object(j.jsx)(k.MoonLoader,{color:e,loading:!0,size:100})})},K=function(e){var t=e.displayBox,n=e.showFilterBox,r=Object(a.useState)(""),s=Object(o.a)(r,2),c=s[0],l=s[1],u=Object(a.useState)(0),A=Object(o.a)(u,2),p=A[0],x=A[1],h=Object(a.useState)(0),C=Object(o.a)(h,2),m=C[0],f=C[1],Q=Object(a.useState)([]),B=Object(o.a)(Q,2),v=B[0],E=B[1],I=Object(a.useState)(0),N=Object(o.a)(I,2),P=N[0],S=N[1],w=Object(a.useState)(!1),R=Object(o.a)(w,2),y=R[0],k=R[1],K=Object(a.useState)(!1),H=Object(o.a)(K,2),J=(H[0],H[1]),T=t,L=Object(a.useContext)(i).filter;Object(a.useEffect)((function(){W()}),[L.Page,L.Username,L.ResultsPerPage]);var W=function(){L.Username?U(L).then((function(e){console.log(e),E(e),f(e.totalResults),x(e.totalPages),S(e.pageFirstResultIndex),k(!0),J(!1)})).catch((function(){l("Could not search for person!")})):F(L).then((function(e){E(e),f(e.totalResults),x(e.totalPages),S(e.pageFirstResultIndex),k(!0),J(!1)})).catch((function(){l("Could not fetch all users!")}))};return Object(j.jsxs)("div",{children:[Object(j.jsx)(d,{onSetFilters:function(e){k(!1),L.Username=e.Username,L.ResultsPerPage=parseInt(e.ResultsPerPage,10),L.Page=1,W()},showFilterBox:n}),y?c?Object(j.jsx)(O,{msg:c}):Object(j.jsxs)("div",{className:"display-result-box",children:[Object(j.jsx)(g,{totalPagesCount:p,totalResultsCount:m,pageFirstResultIndex:P}),Object(j.jsx)(T,{results:v,filter:L})]}):Object(j.jsx)("div",{className:"display-result-box",children:Object(j.jsx)(D,{})}),Object(j.jsx)(b,{totalPages:p,onGoToPage:function(e){L.Page=parseInt(e,10),J(!0),W()},onNextPage:function(){L.Page=L.Page+1,J(!0)},onPreviousPage:function(){L.Page=L.Page-1,J(!0)},page:L.Page})]})},H=function(){return Object(j.jsx)("div",{className:"no-results",children:Object(j.jsx)("h2",{children:"No results"})})},J=function(e,t){t=t.toString();var n=e.toString().split(new RegExp("(".concat(t,")"),"gi"));return Object(j.jsxs)("span",{children:[" ",n.map((function(e,n){return Object(j.jsx)("span",{style:e.toLowerCase()===t.toLowerCase()?{"background-color":"rgba(255,234,0,0.59)"}:{},children:e},n)}))," "]})},T=Object(a.createContext)(null),L=function(e){var t=e.results,n=e.filter,r=Object(a.useContext)(T).user,s=n.Username?n.Username:"",c=t.users;return 0===c.length?Object(j.jsx)(H,{}):c.map((function(e,t){console.log(e);var n=e.id,a=e.name,c=e.username;return Object(j.jsx)("div",{id:n,className:"content-card-body",children:Object(j.jsxs)("div",{className:"card-info",children:[Object(j.jsx)("div",{className:"content-card-image",children:Object(j.jsx)("img",{src:"data:image/png;base64,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",alt:"USER IMAGE"})}),Object(j.jsxs)("div",{className:"content-card-info responsive-text",children:[Object(j.jsx)("h4",{children:Object(j.jsx)("b",{children:"Username"})}),Object(j.jsx)("p",{children:Object(j.jsx)("b",{children:J(c,s)})})]}),Object(j.jsxs)("div",{className:"content-card-info responsive-text",children:[Object(j.jsx)("h4",{children:Object(j.jsx)("b",{children:"Name"})}),Object(j.jsx)("p",{children:Object(j.jsx)("b",{children:a})})]}),Object(j.jsx)("div",{className:"content-card-info-buttons",children:r?Object(j.jsx)("button",{className:"button-style-2",onClick:function(){S(c).then((function(){return window.location.reload()})).catch((function(){return alert("Could not remove, something went wrong.")}))},children:"Remove user"}):null})]})},t)}))};var W=function(){var e=Object(a.useState)({Page:1,Username:void 0,ResultsPerPage:7}),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(a.useContext)(T).user;console.log(s);var c=Object(a.useMemo)((function(){return{filter:n,setFilter:r}}),[n,r]);return Object(j.jsxs)("div",{className:"container",children:[s?Object(j.jsxs)("h3",{children:["Welcome, ",s.sub]}):null,Object(j.jsx)(i.Provider,{value:c,children:Object(j.jsx)(K,{displayBox:L,showFilterBox:!0})})]})};var X=function(){return Object(j.jsxs)("ul",{className:"nav-links",children:[Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{to:"/",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{to:"/profile",children:"Profile"})}),Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{to:"/add",children:"Add new user"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/microlabscasebackend/",onClick:function(){localStorage.clear(),window.location.refresh()},children:"Logout"})})]})};var z=function(){return Object(j.jsxs)("ul",{className:"nav-links",children:[Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{to:"/",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{to:"/login",children:"Login"})}),Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{to:"/register",children:"Register"})})]})};var V=function(){return Object(a.useContext)(T).user?Object(j.jsxs)("div",{className:"top-nav",children:[Object(j.jsx)(X,{}),Object(j.jsx)(l.b,{className:"logo",to:"/",children:Object(j.jsx)("b",{children:"MicroLabsAA back-end case"})})]}):Object(j.jsxs)("div",{className:"top-nav",children:[Object(j.jsx)(z,{}),Object(j.jsx)(l.b,{className:"logo",to:"/",children:Object(j.jsx)("b",{children:"MicroLabsAA back-end case"})})]})},Z=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(""),c=Object(o.a)(s,2),i=c[0],A=c[1],d=Object(a.useState)(""),b=Object(o.a)(d,2),g=b[0],p=b[1],x=Object(a.useState)(!1),h=Object(o.a)(x,2),C=h[0],m=h[1],f=Object(a.useState)(!1),Q=Object(o.a)(f,2),B=Q[0],v=Q[1],E=Object(u.f)();return B&&E("/"),Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"title-bar",children:[Object(j.jsx)("h1",{children:"Login"}),g?Object(j.jsx)(O,{msg:g}):null,Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),N(n,i).then((function(e){localStorage.clear(),localStorage.setItem("accessToken",JSON.stringify(e.accessToken)),localStorage.setItem("refreshToken",JSON.stringify(e.refreshToken)),m(!1),v(!0),window.location.reload()})).catch((function(e){m(!1),p("Could not login.")}))},children:[Object(j.jsxs)("div",{className:"text_field",children:[Object(j.jsx)("label",{children:"Username"}),Object(j.jsx)("input",{type:"username",id:"username",placeholder:"Username",value:n,onChange:function(e){r(e.target.value)}})]}),Object(j.jsxs)("div",{className:"text_field",children:[Object(j.jsx)("label",{children:"Password"}),Object(j.jsx)("input",{type:"password",id:"password",placeholder:"Password",value:i,onChange:function(e){A(e.target.value)}})]}),C?Object(j.jsx)(D,{}):Object(j.jsx)("input",{type:"submit",name:"submit_login",className:"button-style-4",value:"Login"})]}),Object(j.jsxs)("h4",{className:"form-authentication-text",children:["Create new account?",Object(j.jsx)("hr",{}),Object(j.jsx)(l.b,{className:"button-style-1",to:"/register",children:"Go to register page"})]}),Object(j.jsx)(l.b,{className:"button-style-4",to:"/reset/password/mail",children:"I forgot my password"})]})})};var M=function(e){var t=e.redirectLogin,n=Object(a.useState)(),r=Object(o.a)(n,2),s=r[0],c=r[1],i=Object(a.useState)(),A=Object(o.a)(i,2),d=A[0],b=A[1],g=Object(a.useState)(),p=Object(o.a)(g,2),x=p[0],h=p[1],C=Object(a.useState)(),m=Object(o.a)(C,2),f=m[0],Q=m[1],B=Object(a.useState)(),v=Object(o.a)(B,2),E=v[0],I=v[1],N=Object(a.useState)(!1),S=Object(o.a)(N,2),w=S[0],R=S[1],y=Object(a.useState)(),U=Object(o.a)(y,2),F=U[0],k=U[1],K=Object(u.f)();return Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"title-bar",children:[Object(j.jsx)("h1",{children:"Register"}),F?Object(j.jsx)(O,{msg:F}):null,Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),R(!0);var n=new FormData;n.append("name",s),n.append("username",d),n.append("password",x),n.append("email",f),P(n).then((function(){alert("Registered account."),K(t?"/login":"/")})).catch((function(e){k("Could not register user! The username or email is probably taken."),alert(e),R(!1)}))},children:[Object(j.jsxs)("div",{className:"text_field",children:[Object(j.jsx)("label",{children:"Name"}),Object(j.jsx)("input",{id:"name",type:"text",className:"user-input-text",placeholder:"Name",value:s,onChange:function(e){c(e.target.value)}})]}),Object(j.jsxs)("div",{className:"text_field",children:[Object(j.jsx)("label",{children:"Email"}),Object(j.jsx)("input",{id:"email",type:"text",className:"user-input-text",placeholder:"Email",value:f,onChange:function(e){Q(e.target.value)}})]}),Object(j.jsxs)("div",{className:"text_field",children:[Object(j.jsx)("label",{children:"Username"}),Object(j.jsx)("input",{id:"username",type:"text",className:"user-input-text",placeholder:"Username",value:d,onChange:function(e){b(e.target.value)}})]}),Object(j.jsxs)("div",{className:"text_field",children:[Object(j.jsx)("label",{children:"Password"}),Object(j.jsx)("input",{id:"password",type:"password",className:"user-input-text",placeholder:"Password",value:x,onChange:function(e){h(e.target.value)}})]}),Object(j.jsxs)("div",{className:"text_field",children:[Object(j.jsx)("label",{children:"Repeat password"}),Object(j.jsx)("input",{id:"passwordRepeat",type:"password",className:"user-input-text",placeholder:"Repeat password",value:E,onChange:function(e){I(e.target.value)}})]}),w?Object(j.jsx)(D,{}):Object(j.jsx)("input",{type:"submit",name:"submit_register",className:"button-style-4",value:"Register"})]}),Object(j.jsxs)("h4",{class:"form-authentication-text",children:["Already have an account? ",Object(j.jsx)("hr",{}),Object(j.jsx)(l.b,{className:"button-style-1",to:"/login",children:"Go to login page"})," "]})]})})},q=function(){var e=Object(a.useState)(),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(),c=Object(o.a)(s,2),l=c[0],u=c[1],i=Object(a.useState)(!1),A=Object(o.a)(i,2),d=A[0],b=A[1];return Object(j.jsxs)("div",{className:"title-bar",children:[Object(j.jsx)("h1",{children:"Change password"}),d?Object(j.jsx)("div",{className:"information",children:Object(j.jsx)("h4",{className:"success",children:"Updated"})}):null,Object(j.jsx)("hr",{}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=new FormData;t.append("currentPass",n),t.append("newPass",l),I(t).then((function(e){console.log(e),b(!0)})).catch((function(){alert("Could not update password")}))},children:[Object(j.jsxs)("div",{className:"text_field",children:[Object(j.jsx)("label",{children:"Current Password"}),Object(j.jsx)("input",{type:"text",id:"currentPass",placeholder:"Current Password",value:n,onChange:function(e){r(e.target.value)}})]}),Object(j.jsxs)("div",{className:"text_field",children:[Object(j.jsx)("label",{children:"New Password"}),Object(j.jsx)("input",{type:"password",id:"password",placeholder:"New Password",value:l,onChange:function(e){u(e.target.value)}})]}),Object(j.jsx)("button",{className:"button-style-1",type:"submit",children:"Change password"})]})]})},Y=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(""),c=Object(o.a)(s,2),l=c[0],u=c[1];return Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"title-bar",children:[Object(j.jsx)("h1",{children:"Enter email to receive the password reset link."}),l?Object(j.jsx)(O,{msg:l}):null,Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),y(n).then((function(){alert("Sent!")})).catch((function(){u("Could not send email to user.")}))},children:[Object(j.jsxs)("div",{className:"text_field",children:[Object(j.jsx)("label",{children:"Email"}),Object(j.jsx)("input",{type:"email",id:"email",placeholder:"Email",value:n,onChange:function(e){r(e.target.value)}})]}),Object(j.jsx)("button",{className:"button-style-4",type:"submit",children:"Send link to email"})]})]})})};var G=function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(q,{}),Object(j.jsx)(Y,{})]})},_=function(){var e=Object(a.useState)(),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(),c=Object(o.a)(s,2),l=c[0],i=c[1],A=Object(a.useState)(),d=Object(o.a)(A,2),b=d[0],g=d[1],p=Object(u.g)().TOKEN,x=Object(u.f)();Object(a.useEffect)((function(){w(p).catch((function(){x("/login")}))}),[]);var h=function(e){e.preventDefault();var t=new FormData;t.append("token",p),t.append("password",n),R(t).then((function(){x("/login")})).catch((function(){g("Could not update password.")}))};return Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"title-bar",children:[Object(j.jsx)("h1",{children:"Reset password"}),b?Object(j.jsx)(O,{msg:b}):null,Object(j.jsxs)("form",{onSubmit:h,children:[Object(j.jsxs)("div",{className:"text_field",children:[Object(j.jsx)("label",{children:"Password"}),Object(j.jsx)("input",{id:"name",type:"text",className:"user-input-text",placeholder:"Password",value:n,onChange:function(e){r(e.target.value)}})]}),Object(j.jsxs)("div",{className:"text_field",children:[Object(j.jsx)("label",{children:"Password repeat"}),Object(j.jsx)("input",{id:"username",type:"text",className:"user-input-text",placeholder:"Password repeat",value:l,onChange:function(e){i(e.target.value)}})]}),Object(j.jsx)("input",{type:"submit",name:"submit_register",className:"button-style-4",value:"Change password"})]})]})})};var $=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(a.useMemo)((function(){return{user:n,setUser:r}}),[n,r]),c=Object(a.useState)(!1),i=Object(o.a)(c,2),A=i[0],d=i[1];return Object(a.useEffect)((function(){if(localStorage.getItem("accessToken")){var e=localStorage.getItem("accessToken"),t=Object(v.a)(e);r(t),console.log(t),d(!0)}else r(null),d(!0)}),[]),Object(j.jsx)(l.a,{children:A?Object(j.jsxs)(T.Provider,{value:s,children:[Object(j.jsx)(V,{}),Object(j.jsxs)(u.c,{children:[Object(j.jsx)(u.a,{path:"/",element:Object(j.jsx)(W,{})}),Object(j.jsx)(u.a,{path:"/login",element:Object(j.jsx)(Z,{})}),Object(j.jsx)(u.a,{path:"/register",element:Object(j.jsx)(M,{redirectLogin:!0})}),Object(j.jsx)(u.a,{path:"/profile",element:Object(j.jsx)(G,{})}),Object(j.jsx)(u.a,{path:"/add",element:Object(j.jsx)(M,{redirectLogin:!1})}),Object(j.jsx)(u.a,{path:"/reset/password/:TOKEN",element:Object(j.jsx)(_,{})}),Object(j.jsx)(u.a,{path:"/reset/password/mail",element:Object(j.jsx)(Y,{})})]})]}):Object(j.jsx)(D,{})})};c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)($,{})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.0a347c53.chunk.js.map