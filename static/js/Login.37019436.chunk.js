(this.webpackJsonpWallet=this.webpackJsonpWallet||[]).push([[2],{151:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return y}));var n=t(160),r=t(0),c=t.n(r),l=t(21),o=t(8),s=t(47),i=t(224),m=t.n(i),u=t(225),p=t.n(u),_=t(197),f=t(330),E=t.n(f);function g(e){var a=e.children;return c.a.createElement("div",{className:E.a.FormWrapper},a)}var h=t(331),v=t.n(h),d=t(35),b=t(17);function F(){return c.a.createElement(d.b,{to:b.a.REGISTER.path}," ",c.a.createElement("button",{className:v.a.BtnReg},"\u0420\u0415\u0413\u0418\u0421\u0422\u0420\u0410\u0426\u0418\u042f"))}var W=t(332),w=t.n(W);function x(e){var a=e.children;return c.a.createElement("div",{className:w.a.wrap},a)}var N=t(28),k=t(170),j=t(333),A=t.n(j),C=t(334),O=t.n(C),B=t(335),I=t.n(B),L=t(336),R=t.n(L);function y(){var e=Object(l.c)(),a=Object(o.g)(),t=Object(r.useState)(""),i=Object(n.a)(t,2),u=i[0],f=i[1],E=Object(r.useState)(""),h=Object(n.a)(E,2),v=h[0],d=h[1],b=function(e){switch(e.target.name){case"email":return f(e.target.value);case"password":return d(e.target.value)}};return c.a.createElement(_.a,{className:A.a.backGround},c.a.createElement("div",{className:A.a.leftWrapper},c.a.createElement("div",{className:A.a.violetCircle}),c.a.createElement(x,null),c.a.createElement("span",{className:A.a.textApp},"Finance App")),c.a.createElement("div",{className:A.a.rightWrapper},c.a.createElement(g,null,c.a.createElement("p",{className:A.a.textWallet},"Wallet"),c.a.createElement("form",{onSubmit:function(t){if(t.preventDefault(),Object(k.a)(u)&&v.length>=4)e(Object(s.b)({email:u,password:v},a));else{if(!Object(k.a)(u))return Object(N.a)({type:"warning",message:"Email is not valid!"});if(v.length<4)return Object(N.a)({type:"warning",message:"Password is to short!"})}}},c.a.createElement("label",null,c.a.createElement(m.a,{className:O.a.EmailIcon}),c.a.createElement("input",{type:"email",value:u,onChange:b,name:"email",placeholder:"E-mail",className:O.a.EmailForm,autocomplete:"off"})),c.a.createElement("label",null,c.a.createElement(p.a,{className:I.a.LockIcon}),c.a.createElement("input",{type:"password",value:v,onChange:b,name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",className:I.a.PassForm,autocomplete:"off"})),c.a.createElement("button",{type:"submit",className:R.a.BtnEnter},"\u0412\u0425\u041e\u0414")),c.a.createElement(F,null)),c.a.createElement("div",{className:A.a.pinkCircle})))}},170:function(e,a,t){"use strict";t.d(a,"a",(function(){return n})),t.d(a,"b",(function(){return r})),t.d(a,"c",(function(){return c}));var n=function(e){return!!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},r=function(e){var a=new Date(e),t="".concat(a.getMonth()+1),n="".concat(a.getDate()),r=a.getFullYear();return t.length<2&&(t="0".concat(t)),n.length<2&&(n="0".concat(n)),[r,t,n].join("-")};function c(e){var a=new Array;a.push("[A-Z]"),a.push("[a-z]"),a.push("[0-9]"),a.push("[$@$!%*#?&]");for(var t=0,n=0;n<a.length;n++)new RegExp(a[n]).test(e)&&t++;var r="";switch(t){case 0:case 1:case 2:r="Weak";break;case 3:r="Medium";break;case 4:r="Strong"}return r}},178:function(e,a,t){e.exports={container:"Container_container__1hzhx"}},197:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t(0),r=t.n(n),c=t(178),l=t.n(c);function o(e){var a=e.children;return r.a.createElement("div",{className:l.a.container},a)}},330:function(e,a,t){e.exports={FormWrapper:"FormWrapper_FormWrapper__3yhIF"}},331:function(e,a,t){e.exports={BtnReg:"ButtonRegistration_BtnReg__2FxBJ"}},332:function(e,a,t){e.exports={wrap:"ImageMain_wrap__1IlZz"}},333:function(e,a,t){e.exports={textWallet:"Login_textWallet__vTDHR",textApp:"Login_textApp__3GPTG",leftWrapper:"Login_leftWrapper__33mfq",rightWrapper:"Login_rightWrapper__2Cusa",violetCircle:"Login_violetCircle__2S9Bk",pinkCircle:"Login_pinkCircle__40kF_"}},334:function(e,a,t){e.exports={EmailForm:"EmailForm_EmailForm__GXJuC",EmailIcon:"EmailForm_EmailIcon__y7hAA"}},335:function(e,a,t){e.exports={PassForm:"PassForm_PassForm__3fG-E",LockIcon:"PassForm_LockIcon__2Al5G"}},336:function(e,a,t){e.exports={BtnEnter:"ButtonEnter_BtnEnter__1RWrA"}}}]);
//# sourceMappingURL=Login.37019436.chunk.js.map