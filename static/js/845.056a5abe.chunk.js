"use strict";(self.webpackChunktechgen_front=self.webpackChunktechgen_front||[]).push([[845],{845:function(e,n,r){r.r(n);var a=r(1413),t=r(6168),i=r(989),s=r(9982),o=r(1231),d=r(2356),p=r(6423),c=r(9430),l=r(8296),x=r(7426),u=(r(2791),r(2962)),m=r(184);n.default=function(){var e=(0,u.y)("signUp").classes,n=function(e){return/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(e)?null:"Invalid password"},r=(0,x.c)({initialValues:{emailOrPhone:"",password:"",repeatedPassword:""},validate:{emailOrPhone:function(e){if(e.includes("@")){return/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e)?null:"Invalid email"}return/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(e)?null:"Invalid phone number"},password:n,repeatedPassword:n}}),h=r.values,f=h.password,g=h.repeatedPassword;g.length>0&&g!==f&&(r.errors.repeatedPassword="Passwords aren't same");var w=r.onSubmit((function(e){console.log(e)}));return(0,m.jsx)(t.x,{children:(0,m.jsxs)(i.Z,{px:"2%",radius:"md",className:e.card,children:[(0,m.jsx)(s.x,{className:e.card_welcome_text,children:"You\u2019re welcome! \ud83d\udc4b"}),(0,m.jsx)(s.x,{className:e.card_signup_text,children:"Sign up your new account"}),(0,m.jsxs)("form",{onSubmit:w,children:[(0,m.jsxs)(o.K,{spacing:"md",children:[(0,m.jsx)(d.o,(0,a.Z)((0,a.Z)({},r.getInputProps("emailOrPhone")),{},{size:"md",radius:"md",label:"Your email or Phone"})),(0,m.jsx)(p.W,(0,a.Z)((0,a.Z)({},r.getInputProps("password")),{},{size:"md",radius:"md",label:"Password"})),(0,m.jsx)(p.W,(0,a.Z)((0,a.Z)({},r.getInputProps("repeatedPassword")),{},{size:"md",radius:"md",label:"Repeat password"})),(0,m.jsx)(c.M,{children:(0,m.jsx)(s.x,{className:e.privacy_policy_text,children:"I agreed with Privacy Policy"})})]}),(0,m.jsx)(l.z,{type:"submit",className:e.card_btn,children:"sign up"})]}),(0,m.jsx)(c.M,{children:(0,m.jsxs)(s.x,{className:e.account_text,children:["Already have an account?"," ",(0,m.jsx)(s.x,{sx:{color:"#625BF7"},component:"a",href:"/signIn",children:"Sign in"})]})})]})})}},2962:function(e,n,r){r.d(n,{y:function(){return a}});var a=(0,r(7581).k)((function(e,n){return{card:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",height:"signUp"===n?"550px":"470px",filter:"drop-shadow(0px 4px 100px rgba(121, 126, 249, 0.19))","@media (min-width: 320px)":{width:"95%"},"@media (min-width: 481px)":{width:"60%"},"@media (min-width: 769px)":{width:"30%"}},card_welcome_text:{fontWeight:400,fontSize:"14px",lineHeight:"18px",color:"rgba(241, 241, 241, 0.85)","@media (min-width: 320px)":{marginTop:"33px"},"@media (min-width: 481px)":{marginTop:"43px"}},card_signup_text:{fontWeight:500,fontSize:"24px",color:"#E6E6E6",marginTop:"5px",marginBottom:"30px"},card_btn:{color:"#ffffff",background:"#625BF7",borderRadius:"6px",height:"45px",padding:"9px 14px",textTransform:"uppercase",fontWeight:600,fontSize:"16px",marginTop:"25px",width:"100%",transition:"0.4s ease-in-out","&:hover":{background:"#5852cc"}},privacy_policy_text:{color:"#6A6A6A",fontSize:"12px"},account_text:{color:"#6A6A6A",fontSize:"12px",marginTop:"15px"},forget_password_text:{color:"#625BF7",fontWeight:700,fontSize:"12px",marginTop:"20px"}}}))}}]);
//# sourceMappingURL=845.056a5abe.chunk.js.map