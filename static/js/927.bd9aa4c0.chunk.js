"use strict";(self.webpackChunkcrwn_clothing=self.webpackChunkcrwn_clothing||[]).push([[927],{1176:function(n,e,o){o.d(e,{O:function(){return d}});var r=o(1413),t=o(4925),a=o(4942),i=o(8478),s=o(184),l=["children","buttonType","isLoading"],d={base:"base",google:"google-sign-in",inverted:"inverted",details:"details"};e.Z=function(n){var e=n.children,o=n.buttonType,c=n.isLoading,u=(0,t.Z)(n,l),p=function(){var n,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.base;return(n={},(0,a.Z)(n,d.base,i.Yd),(0,a.Z)(n,d.google,i.NY),(0,a.Z)(n,d.inverted,i.OZ),(0,a.Z)(n,d.details,i.Dh),n)[e]}(o);return(0,s.jsx)(p,(0,r.Z)((0,r.Z)({disabled:c},u),{},{children:c?(0,s.jsx)(i.X4,{}):e}))}},8478:function(n,e,o){o.d(e,{Dh:function(){return f},NY:function(){return p},OZ:function(){return x},X4:function(){return g},Yd:function(){return u}});var r,t,a,i,s,l=o(168),d=o(6444),c=o(7415),u=d.ZP.button(r||(r=(0,l.Z)(['\n  min-width: 165px;\n  width: auto;\n  height: 50px;\n  letter-spacing: 0.5px;\n  line-height: 50px;\n  padding: 0 35px 0 35px;\n  font-size: 15px;\n  background-color: black;\n  color: white;\n  text-transform: uppercase;\n  font-family: "Open Sans Condensed";\n  font-weight: bolder;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n\n  @media screen and (max-width: 800px) {\n    min-width: unset;\n    padding: 0 15px;\n    font-size: 14px;\n  }\n']))),p=(0,d.ZP)(u)(t||(t=(0,l.Z)(["\n  background-color: #4285f4;\n  color: white;\n\n  &:hover {\n    background-color: #357ae8;\n    border: none;\n  }\n"]))),x=(0,d.ZP)(u)(a||(a=(0,l.Z)(["\n  background-color: white;\n  color: black;\n  border: 1px solid black;\n\n  &:hover {\n    background-color: black;\n    color: white;\n    border: none;\n  }\n"]))),f=(0,d.ZP)(u)(i||(i=(0,l.Z)(["\n  background-color: white;\n  color: white;\n  border: none;\n  padding: 0px;\n  border-radius: 4px;\n  text-align: center;\n  font-size: 16px;\n  transition: background-color 0.3s ease, color 0.3s ease;\n\n  &:hover {\n    background-color: #0056b3;\n  }\n  @media screen and (max-width: 800px) {\n    padding: 0px;\n  }\n"]))),g=(0,d.ZP)(c.e)(s||(s=(0,l.Z)(["\n  width: 30px;\n  height: 30px;\n"])))},927:function(n,e,o){o.r(e),o.d(e,{default:function(){return Y}});var r,t,a,i,s,l,d,c,u=o(4942),p=o(1413),x=o(4165),f=o(5861),g=o(885),h=o(2791),b=o(4925),m=o(168),w=o(6444),v="grey",Z=(0,w.iv)(r||(r=(0,m.Z)(["\n  top: -14px;\n  font-size: 12px;\n  color: ",";\n"])),"black"),y=w.ZP.label(t||(t=(0,m.Z)(["\n  color: ",";\n  font-size: 16px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 300ms ease all;\n  ",";\n"])),v,(function(n){return n.shrink&&Z})),k=w.ZP.input(a||(a=(0,m.Z)(["\n  background: none;\n  background-color: white;\n  color: ",";\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 100%;\n  border: none;\n  border-radius: 0;\n  border-bottom: 1px solid ",";\n  margin: 25px 0;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:focus ~ "," {\n    ",";\n  }\n"])),v,v,y,Z),C=w.ZP.div(i||(i=(0,m.Z)(['\n  position: relative;\n  margin: 45px 0;\n\n  input[type="password"] {\n    letter-spacing: 0.3em;\n  }\n']))),j=o(184),S=["label"],O=function(n){var e=n.label,o=(0,b.Z)(n,S);return(0,j.jsxs)(C,{children:[(0,j.jsx)(k,(0,p.Z)({},o)),e&&(0,j.jsx)(y,{shrink:o.value.length,children:e})]})},A=o(1176),P=o(6614),z=o(9085),F=w.ZP.div(s||(s=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 380px;\n\n  h2 {\n    margin: 10px 0;\n  }\n\n  @media screen and (max-width: 800px) {\n    width: 80vw;\n  }\n"]))),H={displayName:"",email:"",password:"",confirmPassword:""},N=function(){var n=(0,h.useState)(H),e=(0,g.Z)(n,2),o=e[0],r=e[1],t=o.displayName,a=o.email,i=o.password,s=o.confirmPassword,l=function(){var n=(0,f.Z)((0,x.Z)().mark((function n(e){var o,l;return(0,x.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),i===s){n.next=4;break}return z.Am.error("passwords do not match",{position:"bottom-left",autoClose:3900,closeOnClick:!0,pauseOnHover:!0,draggable:!0,style:{fontFamily:"Arial",fontSize:"15px",fontWeight:"bold",color:"red",borderRadius:"5px",padding:"10px"}}),n.abrupt("return");case 4:return n.prev=4,n.next=7,(0,P.$C)(a,i);case 7:return o=n.sent,l=o.user,n.next=11,(0,P.o6)(l,{displayName:t});case 11:r(H),z.Am.success("Signed Up Successfully !",{position:"bottom-left",autoClose:3900,closeOnClick:!0,pauseOnHover:!0,draggable:!0,style:{fontFamily:"Arial",fontSize:"16px",fontWeight:"bold",color:"#4CAF50",borderRadius:"5px",paddingLeft:"10px"}}),n.next=18;break;case 15:n.prev=15,n.t0=n.catch(4),"auth/email-already-in-use"===n.t0.code?z.Am.error("Cannot create user, email already in use",{position:"bottom-left",autoClose:3900,closeOnClick:!0,pauseOnHover:!0,draggable:!0,style:{fontFamily:"Arial",fontSize:"15px",fontWeight:"bold",color:"red",borderRadius:"5px",padding:"10px"}}):z.Am.error("user creation encountered an error",{position:"bottom-left",autoClose:3900,closeOnClick:!0,pauseOnHover:!0,draggable:!0,style:{fontFamily:"Arial",fontSize:"15px",fontWeight:"bold",color:"red",borderRadius:"5px",padding:"10px"}});case 18:case"end":return n.stop()}}),n,null,[[4,15]])})));return function(e){return n.apply(this,arguments)}}(),d=function(n){var e=n.target,t=e.name,a=e.value;r((0,p.Z)((0,p.Z)({},o),{},(0,u.Z)({},t,a)))};return(0,j.jsxs)(F,{children:[(0,j.jsx)("h2",{children:"Don't have an account?"}),(0,j.jsx)("span",{children:"Sign up with your email and password"}),(0,j.jsxs)("form",{onSubmit:l,children:[(0,j.jsx)(O,{label:"Display Name",type:"text",required:!0,onChange:d,name:"displayName",value:t}),(0,j.jsx)(O,{label:"Email",type:"email",required:!0,onChange:d,name:"email",value:a}),(0,j.jsx)(O,{label:"Password",type:"password",required:!0,onChange:d,name:"password",value:i}),(0,j.jsx)(O,{label:"Confirm Password",type:"password",required:!0,onChange:d,name:"confirmPassword",value:s}),(0,j.jsx)(A.Z,{type:"submit",children:"Sign Up"})]})]})},R=o(7689),W=w.ZP.div(l||(l=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 380px;\n\n  h2 {\n    margin: 10px 0;\n  }\n\n  @media screen and (max-width: 800px) {\n    width: 80vw;\n    padding-bottom: 20px;\n    border-bottom: 5px solid darkgrey;\n  }\n"]))),q=w.ZP.div(d||(d=(0,m.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),D={email:"",password:""},L=function(){var n=(0,h.useState)(D),e=(0,g.Z)(n,2),o=e[0],r=e[1],t=o.email,a=o.password,i=(0,R.s0)(),s=function(){var n=(0,f.Z)((0,x.Z)().mark((function n(){return(0,x.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,P.TX)();case 2:z.Am.success("logged in successfully !",{position:"bottom-left",autoClose:3900,closeOnClick:!0,pauseOnHover:!0,draggable:!0,style:{fontFamily:"Arial",fontSize:"17px",fontWeight:"bold",color:"#4CAF50",borderRadius:"5px",paddingLeft:"10px"}}),i("/");case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,f.Z)((0,x.Z)().mark((function n(e){return(0,x.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),n.prev=1,n.next=4,(0,P.cB)(t,a);case 4:r(D),z.Am.success("Signed in Successfully !",{position:"bottom-left",autoClose:3900,closeOnClick:!0,pauseOnHover:!0,draggable:!0,style:{fontFamily:"Arial",fontSize:"16px",fontWeight:"bold",color:"#4CAF50",borderRadius:"5px",paddingLeft:"10px"}}),i("/"),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(1),z.Am.error("".concat(n.t0.code),{position:"bottom-left",autoClose:3900,closeOnClick:!0,pauseOnHover:!0,draggable:!0,style:{fontFamily:"Arial",fontSize:"15px",fontWeight:"bold",color:"red",borderRadius:"5px",padding:"10px"}}),console.log("user sign in failed",n.t0);case 13:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}(),d=function(n){var e=n.target,t=e.name,a=e.value;r((0,p.Z)((0,p.Z)({},o),{},(0,u.Z)({},t,a)))};return(0,j.jsxs)(W,{children:[(0,j.jsx)("h2",{children:"Already have an account?"}),(0,j.jsx)("span",{children:"Sign in with your email and password"}),(0,j.jsxs)("form",{onSubmit:l,children:[(0,j.jsx)(O,{label:"Email",type:"email",required:!0,onChange:d,name:"email",value:t}),(0,j.jsx)(O,{label:"Password",type:"password",required:!0,onChange:d,name:"password",value:a}),(0,j.jsxs)(q,{children:[(0,j.jsx)(A.Z,{type:"submit",children:"Sign In"}),(0,j.jsx)(A.Z,{buttonType:A.O.google,type:"button",onClick:s,children:"Google Sign In"})]})]})]})},T=w.ZP.div(c||(c=(0,m.Z)(["\n  display: flex;\n  width: 900px;\n  justify-content: space-between;\n  margin: 30px auto;\n\n  @media screen and (max-width: 800px) {\n    flex-direction: column; /* Change to vertical layout */\n    width: 100%;\n    margin: unset;\n  }\n"]))),Y=function(){return(0,j.jsxs)(T,{children:[(0,j.jsx)(L,{}),(0,j.jsx)(N,{})]})}}}]);
//# sourceMappingURL=927.bd9aa4c0.chunk.js.map