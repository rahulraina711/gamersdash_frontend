(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{215:function(e,t,a){},236:function(e,t,a){},240:function(e,t){},242:function(e,t){},255:function(e,t){},257:function(e,t){},285:function(e,t){},286:function(e,t){},291:function(e,t){},293:function(e,t){},300:function(e,t){},319:function(e,t){},349:function(e,t,a){},350:function(e,t,a){},351:function(e,t,a){},352:function(e,t,a){},357:function(e,t,a){},358:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(13),s=a.n(n),r=a(52),i=a(118),o=Object(r.b)("userAdded"),l=Object(r.b)("userRemoved"),u=(Object(r.b)("postChanged"),Object(r.c)({user:{auth:!1,cart:[]}},{userAdded:function(e,t){e.user=Object(i.a)(Object(i.a)({},e.user),{},{id:t.payload.id,name:t.payload.name,profilePic:t.payload.profilePic,auth:!0,cart:t.payload.cart})},userRemoved:function(e,t){e.user={auth:!1,cart:[],postDeleted:!1}}}));var j=a(25),d=a(19),b=a(27),p=a(9),O=(a(215),a(198)),m=a(403),h=a(404),f=a.p+"static/media/logo.56143542.png",x=a(2);var v=function(){var e=Object(j.c)((function(e){return e.user})),t=Object(c.useState)(!0),a=Object(p.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)(!1),i=Object(p.a)(r,2),o=i[0],l=i[1],u=Object(c.useState)(!1),v=Object(p.a)(u,2),g=v[0],k=v[1],y=Object(c.useState)(),N=Object(p.a)(y,2),w=N[0],S=N[1],C=Object(d.f)(),_=function(){S(null)};return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"nav-bar",children:[Object(x.jsxs)("div",{className:"first",children:[Object(x.jsx)("div",{className:"logo",children:Object(x.jsx)("a",{href:"/",children:Object(x.jsx)("img",{src:f,alt:"logo"})})}),e.auth&&Object(x.jsx)("div",{className:"nav-links",onClick:function(e){S(e.currentTarget)},children:Object(x.jsx)(h.a,{id:"profile",alt:"Profile Pic",src:e.profilePic})}),Object(x.jsxs)(O.a,{id:"simple-menu",anchorEl:w,keepMounted:!0,open:Boolean(w),onClose:_,children:[Object(x.jsxs)("label",{style:{padding:15},children:["Hello ",null===e||void 0===e?void 0:e.name]}),Object(x.jsx)(m.a,{onClick:function(){C.push("/user/"+e.id)},children:"My account"}),Object(x.jsx)(m.a,{onClick:function(){_(),localStorage.removeItem("auth_token"),C.push("/")},children:"Logout"})]})]}),e.auth&&Object(x.jsx)("div",{className:"second",children:Object(x.jsxs)("div",{className:"nav-links",children:[n?Object(x.jsx)(b.b,{className:"active",to:"/games",children:"Game DB"}):Object(x.jsx)(b.b,{to:"/games",onClick:function(){s(!0),k(!1),l(!1)},children:"Game DB"}),o?Object(x.jsx)(b.b,{className:"active",to:"/store",children:"Store"}):Object(x.jsx)(b.b,{to:"/store",onClick:function(){s(!1),k(!1),l(!0)},children:"Store"}),g?Object(x.jsx)(b.b,{className:"active",to:"/social",children:"Social"}):Object(x.jsx)(b.b,{to:"/social",onClick:function(){s(!1),k(!0),l(!1)},children:"Social"})]})})]})})},g=a(10),k=a.n(g),y=a(16),N=a(195),w=a(20),S=a.n(w),C=(a(236),"https://gamers-dash.herokuapp.com"),_="iajbfakncaicubackajbcahcvisrjngf74t509rwijf2398u329h9v398h3298j",I="https://api.rawg.io/api",D="871b8db4c8c14c308a2a68ddd8621fad",P=(new Date).getFullYear(),E=function(){var e=(new Date).getMonth()+1;return e<10?"0".concat(e):e}(),A=function(){var e=(new Date).getDate();return e<10?"0".concat(e):e}(),L="".concat(P,"-").concat(E,"-").concat(A),R="".concat(P-1,"-").concat(E,"-").concat(A),z="".concat(P+1,"-").concat(E,"-").concat(A),F=("/games?key=".concat(D,"&dates=").concat(R,",").concat(L,"&ordering=-rating&page_size=15"),"/games?key=".concat(D,"&dates=").concat(L,",").concat(z,"&ordering=-added&page_size=15")),T=("/games?key=".concat(D,"&dates=").concat(R,",").concat(L,"&ordering=-released&page_size=15"),a(196)),M=a.n(T),U=a(393);function B(){var e=Object(j.c)((function(e){return e.user})),t=Object(c.useState)(!0),a=Object(p.a)(t,2),n=a[0],s=a[1],r=Object(j.b)(),i=Object(d.f)(),u=S.a.create({baseURL:C,headers:{Authorization:localStorage.getItem("auth_token")}});function b(){return O.apply(this,arguments)}function O(){return(O=Object(y.a)(k.a.mark((function e(){var t,a,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=function(){return(c=Object(y.a)(k.a.mark((function e(){var a,c,n,j,d;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=M.a.verify(t,_),e.next=4,S.a.get(C+"/user/"+a.userId);case 4:c=e.sent,n=c.data,j=n.name,d=n.profilePic,u.get("/orders").then((function(e){r(o({id:a.userId,name:j,profilePic:d,cart:e.data.doc}))})).catch((function(e){return console.error(e)})),s(!1),i.push("/games"),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("Error",e.t0),r(l()),s(!1);case 16:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)},a=function(){return c.apply(this,arguments)},t=localStorage.getItem("auth_token"),a();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){b()}),[]);var m=function(){var e=Object(y.a)(k.a.mark((function e(t){var a,c,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),a=t.tokenObj.id_token,c=S.a.create({baseURL:C+"/user",headers:{Authorization:a}}),e.next=5,c.get("/signin");case 5:n=e.sent,localStorage.setItem("auth_token",n.data.authToken),b(),s(!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"main-screen",children:[n&&Object(x.jsx)(U.a,{color:"secondary"}),!1===e.auth&&Object(x.jsx)("div",{className:"signing",children:Object(x.jsx)(N.GoogleLogin,{clientId:"770137991345-qd5ralem02mqmmekkukfqp4nnhrc47v3.apps.googleusercontent.com",buttonText:"Hop In",onSuccess:m,onFailure:function(e){console.log("Google Login Failed",e),s(!1)},cookiePolicy:"single_host_origin"})}),e.id?Object(x.jsx)("h1",{children:"hello"}):Object(x.jsx)("h1",{children:"you are not logged in"})]})}var G=a(40),q=(a(349),a(395)),H=a(402),Y=(a(350),a(394));function J(e){var t=e.id,a=e.name,n=e.image,s=e.rating,r=e.ss,i=(e.platforms,e.released),o=Object(c.useState)(),l=Object(p.a)(o,2),u=l[0],j=l[1],d=Object(c.useState)(!0),b=Object(p.a)(d,2),O=b[0],m=b[1];function h(){return(h=Object(y.a)(k.a.mark((function e(t){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("https://api.rawg.io/api/games/"+t);case 2:a=e.sent,j(a.data.description),m(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(e){h.apply(this,arguments)}(t)}),[]),Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"main-container",children:[Object(x.jsx)("div",{className:"name-r",children:a}),Object(x.jsx)("img",{className:"image-r",src:n,alt:"poster"}),Object(x.jsxs)("div",{className:"rel-r",children:["Release Date: ",i]}),Object(x.jsx)("div",{className:"desc-r",children:O?Object(x.jsx)(Y.a,{color:"secondary"}):Object(x.jsx)("div",{dangerouslySetInnerHTML:{__html:u},id:"description"})}),Object(x.jsx)("div",{className:"ss-r",children:r.map((function(e,t){return Object(x.jsx)("img",{className:"ss-im",src:e.image,alt:"sc_sh"},t)}))}),Object(x.jsxs)("div",{className:"rating-r",children:["Rating: ",s]})]})})}function K(e){var t=e.name,a=e.image,n=e.id,s=e.genres,r=e.ss,i=e.rating,o=e.platforms,l=e.released,u=Object(c.useState)(!1),j=Object(p.a)(u,2),d=j[0],b=j[1],O=function(){b(!1)},m=Object(x.jsxs)("div",{className:"modal-r-r",children:[Object(x.jsx)(q.a,{variant:"contained",color:"secondary",onClick:O,children:"close"}),Object(x.jsx)(J,{name:t,image:a,id:n,genres:s,ss:r,rating:i,platforms:o,released:l})]});return Object(x.jsxs)("div",{className:"game-card",children:[Object(x.jsx)("div",{className:"game-image",children:Object(x.jsx)("img",{src:a,alt:"bacDrop",onClick:function(){b(!0)}})}),Object(x.jsx)("div",{className:"game-title",children:t}),Object(x.jsx)(H.a,{open:d,onClose:O,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:m})]})}a(351);function Q(){var e=Object(j.c)((function(e){return e.user})),t=Object(d.f)(),a=Object(c.useState)([]),n=Object(p.a)(a,2),s=n[0],r=n[1],i=Object(c.useState)(""),o=Object(p.a)(i,2),l=o[0],u=o[1],b=Object(c.useState)(!0),O=Object(p.a)(b,2),m=O[0],h=O[1];Object(c.useEffect)((function(){f("".concat(I).concat(F))}),[]);var f=function(){var e=Object(y.a)(k.a.mark((function e(t){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get(t);case 2:return a=e.sent,e.t0=r,e.t1=[],e.t2=Object(G.a)(s),e.t3=G.a,e.next=9,a.data.results;case 9:e.t4=e.sent,e.t5=(0,e.t3)(e.t4),e.t6=e.t1.concat.call(e.t1,e.t2,e.t5),(0,e.t0)(e.t6),u(a.data.next),console.log(a.data),h(!1);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"games-parent",children:[Object(x.jsx)("div",{className:"games-display-area",children:e.auth?Object(G.a)(s).map((function(e,t){return Object(x.jsx)(K,{name:e.name,image:e.background_image,id:e.id,genres:e.genres,rating:e.rating,platforms:e.platforms,released:e.released,ss:e.short_screenshots},e.id)})):t.push("/")}),m&&Object(x.jsx)(U.a,{color:"secondary"}),!m&&Object(x.jsx)(q.a,{variant:"contained",color:"primary",onClick:function(){h(!0),f(l)},children:"Load More"})]})}a(352);var V=a(396),W=a(397),X=a(398),Z=a(399);function $(e){var t=e.comment,a=Object(c.useState)({}),n=Object(p.a)(a,2),s=n[0],r=n[1];function i(){return(i=Object(y.a)(k.a.mark((function e(){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get(C+"/user/"+t.userId);case 2:a=e.sent,r(a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){i.apply(this,arguments)}()}),[]),Object(x.jsxs)("div",{className:"indi-comment",children:[Object(x.jsxs)("div",{className:"comment-owner",children:[Object(x.jsx)("img",{id:"owner-pic",src:s.profilePic,alt:"owner_pic"}),Object(x.jsx)("div",{className:"owner-name",children:s.name})]}),Object(x.jsx)("div",{className:"comment-data",children:t.comment})]})}function ee(e){var t=e.post,a=Object(j.c)((function(e){return e.user})),n=Object(c.useState)([]),s=Object(p.a)(n,2),r=(s[0],s[1]),i=Object(c.useState)({}),o=Object(p.a)(i,2),l=o[0],u=o[1],d=Object(c.useState)([]),h=Object(p.a)(d,2),f=h[0],v=h[1],g=Object(c.useState)(!1),N=Object(p.a)(g,2),w=N[0],_=N[1],I=Object(c.useState)(""),D=Object(p.a)(I,2),P=D[0],E=D[1],A=Object(c.useState)(t.comments.length),L=Object(p.a)(A,2),R=L[0],z=L[1],F=Object(c.useState)("primary"),T=Object(p.a)(F,2),M=T[0],U=T[1],B=Object(c.useState)(t.likes.length),H=Object(p.a)(B,2),Y=H[0],J=H[1],K=Object(c.useState)(),Q=Object(p.a)(K,2),ee=Q[0],te=Q[1],ae=S.a.create({baseURL:C,headers:{Authorization:localStorage.getItem("auth_token")}});Object(c.useEffect)((function(){!function(e){oe.apply(this,arguments)}(t.userId),function(e){je.apply(this,arguments)}(t.comments)}),[]);var ce=function(){te(null)};function ne(){return se.apply(this,arguments)}function se(){return(se=Object(y.a)(k.a.mark((function e(){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae("/posts/"+t._id);case 2:a=e.sent,console.log("here",a.data.likes),r(a.data.likes),J(a.data.likes.length);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function re(){return ie.apply(this,arguments)}function ie(){return(ie=Object(y.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.likes.includes(a.id)?U("secondary"):U("primary");case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function oe(){return(oe=Object(y.a)(k.a.mark((function e(t){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get(C+"/user/"+t);case 2:a=e.sent,u(a.data),re();case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function le(){return(le=Object(y.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("primary"!==M){e.next=8;break}return e.next=3,ae.put("/likeops/"+t._id);case 3:e.sent,ne(),U("secondary"),e.next=14;break;case 8:if("secondary"!==M){e.next=14;break}return e.next=11,ae.put("/likeops/unlike/"+t._id);case 11:e.sent,ne(),U("primary");case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ue(){return(ue=Object(y.a)(k.a.mark((function e(){var a,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={comment:P},e.next=3,ae.post("/comments/"+t._id,a);case 3:c=e.sent,v([].concat(Object(G.a)(f),[c.data])),z(R+1),E("");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function je(){return(je=Object(y.a)(k.a.mark((function e(t){var a,c,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=[],c=0;case 2:if(!(c<t.length)){e.next=10;break}return e.next=5,S.a.get(C+"/comments/"+t[c]);case 5:n=e.sent,a.push(n.data);case 7:c++,e.next=2;break;case 10:console.log(a),v(a);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function de(){return(de=Object(y.a)(k.a.mark((function e(t){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(C+"/posts/"+t),e.next=3,ae.delete("/posts/"+t);case 3:a=e.sent,console.table(a),window.location.reload();case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var be=new Date(t.createdAt);return Object(x.jsxs)("div",{className:"landing-post",children:[Object(x.jsxs)("div",{className:"more-options",children:[Object(x.jsx)("div",{className:"date",children:be.toString().slice(0,15)}),Object(x.jsxs)("div",{className:"options",children:[Object(x.jsx)(V.a,{onClick:function(e){te(e.currentTarget)}}),Object(x.jsxs)(O.a,{id:"simple-menu",anchorEl:ee,keepMounted:!0,open:Boolean(ee),onClose:ce,children:[Object(x.jsx)(m.a,{on:!0,children:"Flag as fake / inappropriate"}),t.userId===a.id&&Object(x.jsx)(m.a,{onClick:function(){!function(e){de.apply(this,arguments)}(t._id),ce()},children:"Delete"})]})]})]}),Object(x.jsxs)("div",{className:"post-user-info",children:[Object(x.jsx)("img",{id:"post-user-image",alt:"user_image",src:l.profilePic}),Object(x.jsx)(b.b,{to:"/user/"+t.userId,children:l.name})]}),Object(x.jsx)("div",{className:"desc",children:t.desc}),Object(x.jsx)("img",{id:"post-image",src:C+"/"+t.postImage,alt:"post-lander"}),Object(x.jsxs)("div",{className:"like-comment-event",children:[Object(x.jsxs)("div",{className:"like-comment",children:[Object(x.jsxs)("div",{className:"like-count",children:[Object(x.jsx)(W.a,{color:M,onClick:function(){return le.apply(this,arguments)}})," ",Y]}),Object(x.jsxs)("div",{className:"comment-count",children:[Object(x.jsx)(X.a,{color:"primary",onClick:function(){_(!w)}})," ",R]})]}),"true"===t.isEvent&&Object(x.jsxs)(q.a,{className:"isEvent",variant:"contained",color:"primary",children:["Add Reminder",Object(x.jsx)(Z.a,{})]})]}),w&&Object(x.jsx)("div",{className:"comments-section",children:Object(G.a)(f).map((function(e){return Object(x.jsx)($,{comment:e},e._id)}))}),Object(x.jsxs)("div",{className:"add-comment",children:[Object(x.jsxs)("div",{className:"user-info",children:[Object(x.jsx)("img",{id:"user-profile",alt:"u-profile",src:a.profilePic}),a.name]}),Object(x.jsxs)("div",{className:"comment-adding-area",children:[Object(x.jsx)("input",{className:"comment-box",placeholder:"Click here to write a comment",size:65,value:P,onChange:function(e){return E(e.target.value)}}),Object(x.jsx)(q.a,{color:"secondary",variant:"contained",onClick:function(){return ue.apply(this,arguments)},children:"post"})]})]})]},t._id)}var te=a(197),ae=a.n(te),ce=a(400);function ne(){var e=S.a.create({baseURL:C,headers:{Authorization:localStorage.getItem("auth_token")}}),t=Object(c.useState)(!0),a=Object(p.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)([]),i=Object(p.a)(r,2),o=i[0],l=i[1],u=Object(j.c)((function(e){return e.user})),b=Object(d.f)(),O=Object(c.useState)(!1),m=Object(p.a)(O,2),h=m[0],f=m[1],v=Object(c.useState)(""),g=Object(p.a)(v,2),N=g[0],w=g[1],_=Object(c.useState)(void 0),I=Object(p.a)(_,2),D=I[0],P=I[1],E=function(){f(!1)};function A(){return L.apply(this,arguments)}function L(){return(L=Object(y.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get(C+"/posts");case 2:t=e.sent,l(t.data),s(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e){return z.apply(this,arguments)}function z(){return(z=Object(y.a)(k.a.mark((function t(a){var c,n;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),(c=new FormData).append("desc",N),c.append("postImage",D),t.next=6,e.post(C+"/posts/",c);case 6:n=t.sent,E(),A(),console.log(n.data);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}Object(c.useEffect)((function(){!1===u.auth?b.push("/"):A()}),[]);var F=Object(x.jsxs)("div",{className:"poster",children:[Object(x.jsxs)("form",{onSubmit:R,children:[Object(x.jsx)("textarea",{id:"description",type:"text",placeholder:"Enter some description here",value:N,onChange:function(e){return w(e.target.value)}}),Object(x.jsx)("input",{id:"upload",type:"file",onChange:function(e){console.log(e.target.files[0]),P(e.target.files[0])}})]}),Object(x.jsx)("button",{className:"btn-upload",type:"submit",onClick:R,children:"Upload Post"}),Object(x.jsx)("button",{className:"btn-cancel",type:"button",onClick:E,children:"Cancel"})]});return Object(x.jsxs)("div",{children:[n?Object(x.jsx)(Y.a,{color:"secondary"}):Object(x.jsx)("div",{className:"main-posts-area",children:function(){var e=Object(G.a)(o);return(e=e.sort((function(e,t){return new Date(t.createdAt)-new Date(e.createdAt)}))).map((function(e){return Object(x.jsx)(ee,{post:e},e._id)}))}()}),Object(x.jsxs)("div",{className:"add-post-btn",title:"Add a new POST",children:[Object(x.jsx)(ce.a,{color:"primary","aria-label":"add",onClick:function(){f(!0)},children:Object(x.jsx)(ae.a,{})}),Object(x.jsx)(H.a,{open:h,onClose:E,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:F})]})]})}function se(){return Object(x.jsx)(x.Fragment,{children:"Store Items displayed here"})}a(357);var re=a(401);function ie(e){var t=e.id,a=S.a.create({baseURL:C,headers:{Authorization:localStorage.getItem("auth_token")}}),n=Object(j.c)((function(e){return e.user})),s=Object(c.useState)(""),r=Object(p.a)(s,2),i=r[0],o=r[1],l=Object(c.useState)(""),u=Object(p.a)(l,2),d=u[0],b=u[1],O=Object(c.useState)(""),m=Object(p.a)(O,2),h=m[0],f=m[1],v=Object(c.useState)(""),g=Object(p.a)(v,2),N=g[0],w=g[1],_=Object(c.useState)({}),I=Object(p.a)(_,2),D=I[0],P=I[1],E=Object(c.useState)(),A=Object(p.a)(E,2),L=A[0],R=A[1],z=Object(c.useState)(!1),F=Object(p.a)(z,2),T=F[0],M=F[1],U=function(){M(!1)};function B(){return(B=Object(y.a)(k.a.mark((function e(){var t,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={name:d,about:N,occupation:h},e.next=3,a.patch("/user/"+i,t);case 3:c=e.sent,console.table(c),Y(i),U();case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){Y(t)}),[]);var G=Object(x.jsx)("div",{className:"modal-body",children:Object(x.jsxs)("div",{className:"modal-content",children:[Object(x.jsx)("div",{className:"n-r",children:Object(x.jsx)(re.a,{label:"Display Name",variant:"outlined",value:d,onChange:function(e){return b(e.target.value)}})}),Object(x.jsx)("div",{className:"a-r",children:Object(x.jsx)(re.a,{label:"About",variant:"outlined",value:N,onChange:function(e){return w(e.target.value)}})}),Object(x.jsx)("div",{className:"o-r",children:Object(x.jsx)(re.a,{label:"Occupation",variant:"outlined",value:h,onChange:function(e){return f(e.target.value)}})}),Object(x.jsxs)("div",{className:"btn-r",children:[Object(x.jsx)(q.a,{variant:"outlined",color:"primary",onClick:function(){return B.apply(this,arguments)},children:"Save"}),Object(x.jsx)(q.a,{variant:"outlined",color:"secondary",onClick:U,children:"Cancel"})]})]})});function Y(e){return J.apply(this,arguments)}function J(){return(J=Object(y.a)(k.a.mark((function e(t){var a,c,s;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get(C+"/user/"+t);case 2:s=e.sent,P(s.data),o(s.data._id),b(s.data.name),w(null===(a=s.data)||void 0===a?void 0:a.about),f(null===(c=s.data)||void 0===c?void 0:c.occupation),console.table(D,n),setTimeout((function(){n.id===s.data._id?R(!0):R(!1)}),200);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(x.jsx)("div",{className:"main-view",children:Object(x.jsxs)("div",{className:"profile",children:[Object(x.jsx)("img",{src:D.profilePic,alt:"profile_Pic"}),Object(x.jsxs)("div",{className:"profile-info",children:[Object(x.jsxs)("div",{className:"user-name",children:["Display Name: ",Object(x.jsx)("div",{className:"name-r",children:D.name})]}),Object(x.jsxs)("div",{className:"user-about",children:["About You: ",Object(x.jsx)("div",{className:"about-r",children:D.about})]}),Object(x.jsxs)("div",{className:"user-occupation",children:["Your Occupation: ",Object(x.jsx)("div",{className:"occupation-r",children:D.occupation})]})]}),L&&Object(x.jsxs)("div",{className:"editing-r",children:[Object(x.jsx)(q.a,{onClick:function(){M(!0)},children:"Edit Profile"}),Object(x.jsx)(H.a,{open:T,onClose:U,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:G})]})]})})}var oe=function(){function e(){var e=Object(d.g)().id;return Object(x.jsx)(ie,{id:e})}return Object(x.jsxs)(b.a,{children:[Object(x.jsx)(v,{}),Object(x.jsxs)(d.c,{children:[Object(x.jsx)(d.a,{exact:!0,path:"/",children:Object(x.jsx)(B,{})}),Object(x.jsx)(d.a,{path:"/games",children:Object(x.jsx)(Q,{})}),Object(x.jsx)(d.a,{path:"/social",children:Object(x.jsx)(ne,{})}),Object(x.jsx)(d.a,{path:"/store",children:Object(x.jsx)(se,{})}),Object(x.jsx)(d.a,{path:"/user/:id",children:Object(x.jsx)(e,{})})]})]})},le=Object(r.a)({reducer:u});s.a.render(Object(x.jsx)(j.a,{store:le,children:Object(x.jsx)(oe,{})}),document.getElementById("root"))}},[[358,1,2]]]);
//# sourceMappingURL=main.50e05e02.chunk.js.map