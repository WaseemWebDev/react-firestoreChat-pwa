(this["webpackJsonpreact-firestore-chat"]=this["webpackJsonpreact-firestore-chat"]||[]).push([[0],{116:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),l=a.n(c),o=(a(98),a(67),a(11)),i=a(39),m=a.n(i),s=a(52),u=a(14),p=a(156),d=a(157),f=a(163),E=a(36),h=a.n(E);h.a.initializeApp({apiKey:"AIzaSyBNXcTCkxN30Ea8eHDQNiwv_LTFCrWoluQ",authDomain:"react-firestore-chat-4fae5.firebaseapp.com",databaseURL:"https://react-firestore-chat-4fae5.firebaseio.com",projectId:"react-firestore-chat-4fae5",storageBucket:"react-firestore-chat-4fae5.appspot.com",messagingSenderId:"866610989341",appId:"1:866610989341:web:43f0990cfb9dd631d6f9f4"});var b=h.a.firestore(),g=a(148),v=a(152),x=a(166),y=a(153),j=a(151),O=a(155),w=a(48),k=a(154),S=a(37);function C(e){var t=e.user,a=e.userId,n=e.userName,c=e.name,l=n===t.room;return r.a.createElement(g.a,null,l?null:r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{alignItems:"flex-start",className:"users-list"},r.a.createElement(v.a,null,r.a.createElement(x.a,{alt:"Remy Sharp",src:"/static/images/avatar/1.jpg"})),r.a.createElement(y.a,{primary:"Chatroom",secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{component:"span",variant:"body2",color:"textPrimary"},t.room))}),r.a.createElement(k.a,{component:S.b,to:"/conversation/".concat(a,"/").concat(n,"/").concat(c),size:"small",variant:"contained",color:"primary"},"Chat")),r.a.createElement(O.a,{variant:"inset",component:"li"})))}var _=a(162),N=a(165),I=a(161),R=a(160),A=a(159),F=Object(p.a)((function(e){return{root:{flexGrow:1,height:560,margin:"auto"},box:{padding:e.spacing(2),textAlign:"center",backgroundColor:"white"},inline:{display:"inline"}}}));function B(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!0),o=Object(u.a)(l,2),i=o[0],p=o[1],E=Object(n.useState)(""),g=Object(u.a)(E,2),v=g[0],x=g[1],y=Object(n.useState)(""),j=Object(u.a)(y,2),S=j[0],B=j[1];Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.collection("chatroom").orderBy("timestamp","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){var a=e.data().room;t.push({id:e.id,room:a})})),c(t),p(!1)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){var e=prompt("enter user name");""!==e&&x(e)}(),function(){e.apply(this,arguments)}()}),[]);var T=r.a.useState(!1),W=Object(u.a)(T,2),z=W[0],L=W[1],P=function(){L(!1)},D=F();return!0===i?r.a.createElement("center",null,r.a.createElement("img",{src:"https://cdn.dribbble.com/users/1186261/screenshots/3718681/_______.gif",alt:"loader",width:"240",height:"180"})):""===v?r.a.createElement("center",null,r.a.createElement("h2",null,"please give user name to proceed further")):r.a.createElement("div",{className:D.root},r.a.createElement("br",null),r.a.createElement(d.a,{container:!0,justify:"center"},r.a.createElement(d.a,{item:!0,xl:3,xs:11,sm:8},r.a.createElement(f.a,{className:D.box,boxShadow:2},r.a.createElement("center",null,r.a.createElement(w.a,{component:"h4",variant:"h5",color:"textPrimary"},"ChatRoom"),r.a.createElement(O.a,{variant:"inset"}),r.a.createElement("br",null),r.a.createElement(w.a,{component:"h4",variant:"h5",color:"textPrimary"},"You are Loged In as ",r.a.createElement("b",{style:{color:"blue"}}," ",v)),r.a.createElement(O.a,{variant:"inset"}),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(k.a,{variant:"outlined",color:"primary",onClick:function(){L(!0)}},"Add Room"),r.a.createElement(N.a,{open:z,onClose:P,"aria-labelledby":"form-dialog-title"},r.a.createElement(A.a,{id:"form-dialog-title"},"Add Room"),r.a.createElement(R.a,null,r.a.createElement(_.a,{autoFocus:!0,margin:"dense",id:"name",label:"Enter User name",type:"email",fullWidth:!0,value:S,onChange:function(e){return B(e.target.value)}})),r.a.createElement(I.a,null,r.a.createElement(k.a,{onClick:P,color:"primary"},"Cancel"),r.a.createElement(k.a,{onClick:function(){b.collection("chatroom").add({room:S,timestamp:h.a.firestore.FieldValue.serverTimestamp()}),P()},color:"primary"},"Add"))))),a.map((function(e,t){return r.a.createElement(C,{key:e.id,userName:v,userId:e.id,name:e.room,user:e})}))))))}function T(){return r.a.createElement("h2",null,"url not found ")}var W=a(74),z=a.n(W),L=Object(p.a)((function(e){return{root:{flexGrow:1,height:300,margin:"auto"},box:{padding:e.spacing(2),textAlign:"center",backgroundColor:"white"},inline:{display:"inline"}}}));function P(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),i=Object(u.a)(l,2),p=i[0],E=i[1],g=Object(n.useState)(!0),v=Object(u.a)(g,2),x=v[0],y=v[1],j=Object(o.f)(),k=j.id,S=j.name,C=j.rname;Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.collection("chatroom").doc(k).collection("chat").orderBy("timestamp","asc").onSnapshot((function(e){var t=[];e.forEach((function(e){console.log(e.data());var a=e.data(),n=a.text,r=a.user;t.push({id:e.id,text:n,user:r})})),c(t),y(!1)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[k,S,C]);var N=L();return!0===x?r.a.createElement("center",null,r.a.createElement("img",{src:"https://cdn.dribbble.com/users/1186261/screenshots/3718681/_______.gif",alt:"loader",width:"240",height:"180"})):r.a.createElement("div",{className:N.root},r.a.createElement("br",null),r.a.createElement(d.a,{container:!0,justify:"center"},r.a.createElement(d.a,{item:!0,xl:3,xs:11,sm:8},r.a.createElement(f.a,{className:N.box,boxShadow:2},r.a.createElement("center",null,r.a.createElement(w.a,{component:"h4",variant:"h5",color:"textPrimary"},"ChatRoom : ",C),r.a.createElement(O.a,{variant:"inset"})),r.a.createElement("br",null),r.a.createElement("div",{style:{height:"400px",overflowY:"auto"}},a.map((function(e,t){return r.a.createElement("div",{key:e.id},r.a.createElement("h3",{style:{fontWeight:"50px",display:"inline",marginRight:"10px"}},e.user),r.a.createElement("span",{style:{background:e.user===S?"#2979FF":"green",display:"inline-block",borderRadius:"8px",color:"white",width:"180px",height:"20px",padding:"10px",marginRight:e.user===S?"60px":"null"}},e.text),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))}))),r.a.createElement("br",null),r.a.createElement(O.a,{variant:"inset"}),r.a.createElement(_.a,{required:!0,onChange:function(e){return E(e.target.value)},value:p,label:"Enter Message"}),r.a.createElement(z.a,{onClick:function(){b.collection("chatroom").doc(k).collection("chat").add({text:p,user:S,timestamp:h.a.firestore.FieldValue.serverTimestamp()}),E("")},style:{color:"blue",fontSize:"34px",marginTop:"17px",marginLeft:"17px"}})))))}var D=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(B,null)),r.a.createElement(o.a,{exact:!0,path:"/conversation/:id/:name/:rname"},r.a.createElement(P,null)),r.a.createElement(o.a,{exact:!0,path:"*",component:T})))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S.a,null,r.a.createElement(D,null))),document.getElementById("root")),function(){var e="".concat("","/sw.js");navigator.serviceWorker.register(e).then((function(e){console.log("ServiceWorker registration successful with scope: ",e)}))}()},67:function(e,t,a){},93:function(e,t,a){e.exports=a(116)},98:function(e,t,a){}},[[93,1,2]]]);
//# sourceMappingURL=main.d6cafc3d.chunk.js.map