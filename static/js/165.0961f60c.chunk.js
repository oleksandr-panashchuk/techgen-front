"use strict";(self.webpackChunktechgen_front=self.webpackChunktechgen_front||[]).push([[165],{9125:function(e,t,n){n.d(t,{je:function(){return o},tI:function(){return i},uo:function(){return r}});var r=function(e){return/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(e)?null:"Password must include minimum 8 characters: digit, symbol, uppercase, lowercase"},i=function(e){return 0===e.length?"Required":null},o=function(e){return i(e)||function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)?null:"Invalid email"}(e)}},8165:function(e,t,n){n.r(t),n.d(t,{default:function(){return D}});var r=n(9439),i=n(1156),o=n(989),a=n(9982),s=n(2791);function c(e,t,n){(0,s.useEffect)((function(){return window.addEventListener(e,t,n),function(){return window.removeEventListener(e,t,n)}}),[e,t])}function u(e){try{return JSON.parse(e)}catch(t){return e}}function l(e,t){var n="localStorage"===e?"mantine-local-storage":"mantine-session-storage";return function(i){var o=i.key,a=i.defaultValue,l=void 0===a?void 0:a,d=i.getInitialValueInEffect,f=void 0===d||d,p=i.deserialize,m=void 0===p?u:p,x=i.serialize,g=void 0===x?function(e){return function(e,t){try{return JSON.stringify(e)}catch(n){throw new Error("@mantine/hooks ".concat(t,": Failed to serialize the value"))}}(e,t)}:x,h=(0,s.useCallback)((function(t){if("undefined"===typeof window||!(e in window)||null===window[e]||t)return l;var n=window[e].getItem(o);return null!==n?m(n):l}),[o,l]),v=(0,s.useState)(h(f)),w=(0,r.Z)(v,2),y=w[0],b=w[1],S=(0,s.useCallback)((function(t){t instanceof Function?b((function(r){var i=t(r);return window[e].setItem(o,g(i)),window.dispatchEvent(new CustomEvent(n,{detail:{key:o,value:t(r)}})),i})):(window[e].setItem(o,g(t)),window.dispatchEvent(new CustomEvent(n,{detail:{key:o,value:t}})),b(t))}),[o]),z=(0,s.useCallback)((function(){window[e].removeItem(o)}),[]);return c("storage",(function(t){var n;t.storageArea===window[e]&&t.key===o&&b(m(null!=(n=t.newValue)?n:void 0))})),c(n,(function(e){e.detail.key===o&&b(e.detail.value)})),(0,s.useEffect)((function(){void 0!==l&&void 0===y&&S(l)}),[l,y,S]),(0,s.useEffect)((function(){f&&b(h())}),[]),[void 0===y?l:y,S,z]}}var d=n(4293),f=n(1413),p=n(1231),m=n(2356),x=n(8296),g=n(7426),h=n(8956),v=n(2631),w=n(2962),y=n(9125),b=n(7762),S=n(5222);var z=n(7581),j={left:"flex-start",center:"center",right:"flex-end",apart:"space-between"},_=(0,z.k)((function(e,t){var n=t.spacing,r=t.position,i=t.noWrap,o=t.grow,a=t.align,s=t.count;return{root:{boxSizing:"border-box",display:"flex",flexDirection:"row",alignItems:a||"center",flexWrap:i?"nowrap":"wrap",justifyContent:j[r],gap:e.fn.size({size:n,sizes:e.spacing}),"& > *":{boxSizing:"border-box",maxWidth:o?"calc(".concat(100/s,"% - ").concat(e.fn.size({size:n,sizes:e.spacing})-e.fn.size({size:n,sizes:e.spacing})/s,"px)"):void 0,flexGrow:o?1:0}}}})),k=n(6168),E=Object.defineProperty,I=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,Z=function(e,t,n){return t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},A={position:"left",spacing:"md"},O=(0,s.forwardRef)((function(e,t){var n=(0,S.N4)("Group",A,e),r=n.className,i=n.position,o=n.align,a=n.children,c=n.noWrap,u=n.grow,l=n.spacing,d=n.unstyled,f=function(e,t){var n={};for(var r in e)N.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&I){var i,o=(0,b.Z)(I(e));try{for(o.s();!(i=o.n()).done;)r=i.value,t.indexOf(r)<0&&C.call(e,r)&&(n[r]=e[r])}catch(a){o.e(a)}finally{o.f()}}return n}(n,["className","position","align","children","noWrap","grow","spacing","unstyled"]),p=function(e){return s.Children.toArray(e).filter(Boolean)}(a),m=_({align:o,grow:u,noWrap:c,spacing:l,position:i,count:p.length},{unstyled:d,name:"Group"}),x=m.classes,g=m.cx;return s.createElement(k.x,function(e,t){for(var n in t||(t={}))N.call(t,n)&&Z(e,n,t[n]);if(I){var r,i=(0,b.Z)(I(t));try{for(i.s();!(r=i.n()).done;)n=r.value,C.call(t,n)&&Z(e,n,t[n])}catch(o){i.e(o)}finally{i.f()}}return e}({className:g(x.root,r),ref:t},f),p)}));O.displayName="@mantine/core/Group";var W=n(184),F=function(e){var t={background:e.current?"#6A6A6A":"#474646",width:"10px",height:"10px",borderRadius:"50%"};return(0,W.jsx)(k.x,{sx:t})},P=(0,z.k)({steps_indicator:{gap:"5px",margin:"23px 0 23px 0"},forget_text:{fontSize:"14px",fontWeight:400,color:"#ffffff","@media (min-width: 320px)":{width:"90%"},"@media (min-width: 481px)":{width:"70%"}}}),T=function(e){var t=e.current,n=P().classes,r=function(e){for(var t=[],n=1;n<=e;n++)t.push({step:n,current:!1});return t}(3);return r[t-1].current=!0,(0,W.jsx)(O,{className:n.steps_indicator,position:"center",children:r.map((function(e){return(0,W.jsx)(F,{current:e.current},e.step)}))})},V=function(e){var t=e.nextStep,n=(0,w.y)().classes,r=(0,g.c)({initialValues:{email:"",recoveryCode:""},validate:{email:y.je,recoveryCode:y.tI}});(0,v.N)(r,"restoreFirstStep");var i=r.onSubmit((function(e){console.log(e),t()}));return(0,W.jsxs)("form",{onSubmit:i,children:[(0,W.jsxs)(p.K,{spacing:"md",children:[(0,W.jsx)(m.o,(0,f.Z)((0,f.Z)({},r.getInputProps("email")),{},{size:"md",radius:"md",label:"Email",icon:(0,W.jsx)(h.ZiH,{size:18})})),(0,W.jsx)(m.o,(0,f.Z)((0,f.Z)({},r.getInputProps("recoveryCode")),{},{size:"md",radius:"md",label:"Recovery Code"}))]}),(0,W.jsx)(T,{current:1}),(0,W.jsx)(x.z,{type:"submit",className:n.card_btn,mt:"0",children:"continue"})]})},R=function(e){var t=e.nextStep;(0,s.useEffect)((function(){sessionStorage.removeItem("restoreFirstStep")}),[]);var n=(0,w.y)().classes,r=(0,g.c)({initialValues:{receivedCode:""},validate:{receivedCode:y.tI}});(0,v.N)(r,"restoreSecondStep");var i=r.onSubmit((function(e){console.log(e),t()}));return(0,W.jsxs)("form",{onSubmit:i,children:[(0,W.jsx)(m.o,(0,f.Z)((0,f.Z)({},r.getInputProps("receivedCode")),{},{size:"md",radius:"md",label:"Enter received code"})),(0,W.jsx)(T,{current:2}),(0,W.jsx)(x.z,{type:"submit",className:n.card_btn,mt:"0",children:"continue"})]})},B=n(7689),G=function(e){var t=e.nextStep;(0,s.useEffect)((function(){sessionStorage.removeItem("restoreSecondStep")}),[]);var n=(0,w.y)().classes,r=P().classes,i=(0,B.s0)();return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(a.x,{className:n.card_title_text,"data-aos":"zoom-in","data-aos-duration":"900",sx:{"@media (min-width: 320px)":{width:"100%"},"@media (min-width: 481px)":{width:"80%"}},children:"Password successfully restored! \u2705"}),(0,W.jsx)(a.x,{className:r.forget_text,children:"Don't forget it next time, because it's always a shame to lose something important."}),(0,W.jsx)(T,{current:3}),(0,W.jsx)(x.z,{className:n.card_btn,mt:"0",onClick:function(){t(),i("/techgen-front/signIn")},children:"sign in"})]})},J=n(396),D=function(){var e,t=(e={key:"restoreStep",defaultValue:1},l("sessionStorage","use-session-storage")(e)),n=(0,r.Z)(t,2),s=n[0],c=n[1],u=function(){c(s<3?s+1:1)},f=(0,w.y)().classes,p=(0,d.a)("(min-width: 481px)");return(0,W.jsx)(i.X,{className:f.container,src:J,children:(0,W.jsx)(o.Z,{className:f.card,px:p?"3%":"4%",radius:"md",children:s<3?(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(a.x,{className:f.card_helper_text,"data-aos":"zoom-in","data-aos-duration":"900",children:"Looks like you forgot something \ud83d\ude23"}),(0,W.jsx)(a.x,{className:f.card_title_text,"data-aos":"zoom-in","data-aos-duration":"1800",children:"Restore your Data"}),1===s?(0,W.jsx)(V,{nextStep:u}):(0,W.jsx)(R,{nextStep:u})]}):(0,W.jsx)(G,{nextStep:u})})})}},2631:function(e,t,n){n.d(t,{N:function(){return o}});var r=n(9439),i=n(2791),o=function(e,t){var n=(0,i.useState)(!1),o=(0,r.Z)(n,2),a=o[0],s=o[1];(0,i.useEffect)((function(){if(sessionStorage.getItem(t))try{e.setValues(JSON.parse(sessionStorage.getItem(t)))}catch(n){console.log("Failed to parse stored value")}}),[]),(0,i.useEffect)((function(){sessionStorage.setItem(t,JSON.stringify(e.values))}),[e.values]);return(0,i.useEffect)((function(){a&&(sessionStorage.removeItem(t),s(!1))}),[a]),function(){return s(!0)}}},2962:function(e,t,n){n.d(t,{y:function(){return r}});var r=(0,n(7581).k)({container:{width:"100%",height:"100vh"},card:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",height:"auto",filter:"drop-shadow(0px 4px 100px rgba(121, 126, 249, 0.19))","@media (min-width: 320px)":{width:"92%"},"@media (min-width: 481px)":{width:"60%"},"@media (min-width: 769px)":{width:"30%"}},card_helper_text:{fontWeight:400,fontSize:"14px",lineHeight:"18px",color:"rgba(241, 241, 241, 0.85)","@media (min-width: 320px)":{marginTop:"33px"},"@media (min-width: 481px)":{marginTop:"43px"}},card_title_text:{fontWeight:500,fontSize:"24px",color:"#E6E6E6",marginTop:"5px",marginBottom:"30px"},card_btn:{color:"#ffffff",background:"#625BF7",borderRadius:"6px",height:"45px",padding:"9px 14px",textTransform:"uppercase",fontWeight:700,fontSize:"16px",marginTop:"25px",width:"100%",transition:"0.4s ease-in-out","&:hover":{background:"#5852cc"}},privacy_policy_text:{color:"#6A6A6A",fontSize:"12px"},account_text:{color:"#6A6A6A",fontSize:"12px",marginTop:"15px"},forgot_password_text:{color:"#625BF7",fontWeight:700,fontSize:"12px",marginTop:"20px"}})},396:function(e,t,n){e.exports=n.p+"static/media/authBg.c5ca59c146af6e118ccb.png"}}]);
//# sourceMappingURL=165.0961f60c.chunk.js.map