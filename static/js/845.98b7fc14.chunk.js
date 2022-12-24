"use strict";(self.webpackChunktechgen_front=self.webpackChunktechgen_front||[]).push([[845],{845:function(e,a,t){t.r(a);var s=t(1413),r=t(6168),i=t(989),n=t(9982),o=t(1231),d=t(2356),c=t(6423),p=t(9430),l=t(8296),u=t(7426),x=t(4293),m=t(2631),f=(t(2791),t(2962)),g=t(8956),h=t(184);a.default=function(){var e=(0,f.y)().classes,a=(0,x.a)("(min-width: 481px)"),t=function(e){return/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(e)?null:"Password must include minimum 8 characters: digit, symbol, uppercase, lowercase"},w=(0,u.c)({initialValues:{email:"",password:"",repeatedPassword:""},validate:{email:function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)?null:"Invalid email"},password:t,repeatedPassword:t}});(0,m.N)(w,"signUp");var _=w.values,b=_.password,v=_.repeatedPassword;v.length>0&&v!==b&&(w.errors.repeatedPassword="Passwords aren't same"),b===v&&w.errors.password&&(w.errors.repeatedPassword=null);var z=w.onSubmit((function(e){console.log(e),w.reset()}));return(0,h.jsx)(r.x,{children:(0,h.jsxs)(i.Z,{className:e.card,px:a?0:"4%",radius:"md",children:[(0,h.jsx)(n.x,{className:e.card_welcome_text,"data-aos":"zoom-in","data-aos-duration":"900",children:"You\u2019re welcome! \ud83d\udc4b"}),(0,h.jsx)(n.x,{className:e.card_signup_text,"data-aos":"zoom-in","data-aos-duration":"1800",children:"Sign up your new account"}),(0,h.jsxs)("form",{onSubmit:z,children:[(0,h.jsxs)(o.K,{spacing:"md",children:[(0,h.jsx)(d.o,(0,s.Z)((0,s.Z)({},w.getInputProps("email")),{},{size:"md",radius:"md",label:"Email",icon:(0,h.jsx)(g.ZiH,{size:18})})),(0,h.jsx)(c.W,(0,s.Z)((0,s.Z)({},w.getInputProps("password")),{},{size:"md",radius:"md",label:"Password"})),(0,h.jsx)(c.W,(0,s.Z)((0,s.Z)({},w.getInputProps("repeatedPassword")),{},{size:"md",radius:"md",label:"Repeat password"})),(0,h.jsx)(p.M,{children:(0,h.jsx)(n.x,{className:e.privacy_policy_text,children:"I agreed with Privacy Policy"})})]}),(0,h.jsx)(l.z,{type:"submit",className:e.card_btn,children:"sign up"})]}),(0,h.jsx)(p.M,{children:(0,h.jsxs)(n.x,{className:e.account_text,children:["Already have an account?"," ",(0,h.jsx)(n.x,{c:"#625BF7",component:"a",href:"/techgen-front/signIn",children:"Sign in"})]})})]})})}},2631:function(e,a,t){t.d(a,{N:function(){return r}});var s=t(2791),r=function(e,a){(0,s.useEffect)((function(){if(window.sessionStorage.getItem(a))try{e.setValues(JSON.parse(window.sessionStorage.getItem(a)))}catch(t){console.log("Failed to parse stored value")}}),[]),(0,s.useEffect)((function(){window.sessionStorage.setItem(a,JSON.stringify(e.values))}),[e.values])}},2962:function(e,a,t){t.d(a,{y:function(){return s}});var s=(0,t(7581).k)({card:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",height:"auto",filter:"drop-shadow(0px 4px 100px rgba(121, 126, 249, 0.19))","@media (min-width: 320px)":{width:"92%"},"@media (min-width: 481px)":{width:"60%"},"@media (min-width: 769px)":{width:"30%"}},card_welcome_text:{fontWeight:400,fontSize:"14px",lineHeight:"18px",color:"rgba(241, 241, 241, 0.85)","@media (min-width: 320px)":{marginTop:"33px"},"@media (min-width: 481px)":{marginTop:"43px"}},card_signup_text:{fontWeight:500,fontSize:"24px",color:"#E6E6E6",marginTop:"5px",marginBottom:"30px"},card_btn:{color:"#ffffff",background:"#625BF7",borderRadius:"6px",height:"45px",padding:"9px 14px",textTransform:"uppercase",fontWeight:600,fontSize:"16px",marginTop:"25px",width:"100%",transition:"0.4s ease-in-out","&:hover":{background:"#5852cc"}},privacy_policy_text:{color:"#6A6A6A",fontSize:"12px"},account_text:{color:"#6A6A6A",fontSize:"12px",marginTop:"15px"},forget_password_text:{color:"#625BF7",fontWeight:700,fontSize:"12px",marginTop:"20px"}})}}]);
//# sourceMappingURL=845.98b7fc14.chunk.js.map