(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{280:function(e,t,a){},281:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(2),i=a.n(r),s=a(90),l=a.n(s),c=a(3),o=a(4),u=a(11),d=a.n(u),h=new(function(){function e(){Object(c.a)(this,e)}return Object(o.a)(e,[{key:"validatefirsname",value:function(e){return d.a.isEmpty(e)?"firstname is required":d.a.isAlpha(e)?!d.a.isLength(e,{min:6})&&"Name should be minimum 6 characters":"name must be in letter"}},{key:"validatelastname",value:function(e){return d.a.isEmpty(e)?"lastname required":d.a.isAlpha(e)?!d.a.isLength(e,{min:5})&&"lastname should be minimum 5  characters":"name must be letters"}},{key:"validateEmail",value:function(e){return d.a.isEmpty(e)?"Email is required":!d.a.isEmail(e)&&"Invalid Email"}},{key:"validatePassword",value:function(e){return d.a.isEmpty(e)?"Password is required":!d.a.isLength(e,{min:8})&&"Password should be minimum 8 characters"}},{key:"validaterepeat_password",value:function(e){return d.a.isEmpty(e)?"repeat_password is required":!d.a.isLength(e,{min:8})&&"repeat_password should be minimum 8 characters"}}]),e}()),m=a(27),j=a(9),p=a(6),b=a(8),O=a(22),v=a.n(O),y={firsname:{value:"",validateOnChange:!1,error:""},lastname:{value:"",validateOnChange:!1,error:""},email:{value:"",validateOnChange:!1,error:""},password:{value:"",validateOnChange:!1,error:""},repeat_password:{value:"",validateOnChange:!1,error:""},submitCalled:!1,allFieldsValidated:!1},x=(r.Component,a(12)),f=a(18);i.a.Component,a(279),a(280);var g=[{name:"shyjan",age:"22",rollNo:"1111111"},{name:"ratheesh",age:"23",rollNo:"2222222"}],k=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(c.a)(this,a),n=t.call(this,e),console.log(e),n.state={name:" ",age:" ",rollNo:" "},n}return Object(o.a)(a,[{key:"renderTableData",value:function(){return g.map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.name}),Object(n.jsx)("td",{children:e.age}),Object(n.jsx)("td",{children:e.rollNo})]},t)}))}},{key:"renderHead",value:function(){return Object.keys(g[0]).map((function(e,t){return Object(n.jsx)("th",{children:e},t)}))}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:this.state.name}),Object(n.jsx)("p",{children:this.state.age}),Object(n.jsx)("p",{children:this.state.rollNo}),Object(n.jsx)("input",{type:"text",placeholder:"Enter the Name"}),Object(n.jsx)("input",{type:"text",placeholder:"Enter the Age"}),Object(n.jsx)("input",{type:"text",placeholder:"Enter the RollNo"}),Object(n.jsx)("button",{type:"button",onClick:this.onSubmit,children:"click"}),Object(n.jsxs)("table",{children:[Object(n.jsx)("thead",{children:Object(n.jsx)("tr",{children:this.renderHead()})}),Object(n.jsx)("tbody",{children:this.renderTableData()})]})]})}}]),a}(i.a.Component);l.a.render(Object(n.jsx)(k,{}),document.getElementById("root"))}},[[281,1,2]]]);
//# sourceMappingURL=main.0d8437b7.chunk.js.map