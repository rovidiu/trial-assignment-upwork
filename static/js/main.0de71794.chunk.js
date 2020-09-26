(this["webpackJsonptrial-assignment"]=this["webpackJsonptrial-assignment"]||[]).push([[0],{112:function(t){t.exports=JSON.parse('{"routers":{"landing":"welcome"}}')},114:function(t,e,n){var c=n(261);c.keys().forEach((function(e){var n=c(e);Object.keys(n).forEach((function(e){t.exports[e]=n[e]}))}))},118:function(t,e,n){t.exports=n(264)},13:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return i}));var c=n(49);function a(t,e){var n=t.split("/").filter((function(t){return t.length>0})),a=c.a[e].routers,i=Object.keys(a);return(n=n.map((function(t){return i.indexOf(t)>-1?a[t]:t}))).reduce((function(t,e){return"".concat(t,"/").concat(e)}),"/".concat(e))}var i=function(){var t=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)};return"".concat(t()).concat(t(),"-").concat(t())}},21:function(t,e,n){"use strict";n.r(e),n.d(e,"INFO",(function(){return a})),n.d(e,"ERROR",(function(){return i})),n.d(e,"WARNING",(function(){return o})),n.d(e,"SUCCESS",(function(){return r})),n.d(e,"DISMISS",(function(){return u})),n.d(e,"CLEAR",(function(){return s})),n.d(e,"notificationError",(function(){return l})),n.d(e,"notificationSuccess",(function(){return f})),n.d(e,"notificationInfo",(function(){return m})),n.d(e,"notificationWarning",(function(){return d})),n.d(e,"notificationDismiss",(function(){return p}));var c=n(13),a="NOTIFICATIONS/INFO",i="NOTIFICATIONS/ERROR",o="NOTIFICATIONS/WARNING",r="NOTIFICATIONS/SUCCESS",u="NOTIFICATIONS/DISMISS",s="NOTIFICATIONS/CLEAR",l=function(t){return{type:i,payload:{id:"noti-error-".concat(Object(c.a)()),level:"error",message:t}}},f=function(t){return{type:r,payload:{id:"noti-success-".concat(Object(c.a)()),level:"success",message:t}}},m=function(t){return{type:a,payload:{id:"noti-info-".concat(Object(c.a)()),level:"info",message:t}}},d=function(t){return{type:o,payload:{id:"noti-warning-".concat(Object(c.a)()),level:"warning",message:t}}},p=function(t){return{type:u,payload:t}}},250:function(t,e,n){var c={"./notification/reducer.js":251};function a(t){var e=i(t);return n(e)}function i(t){if(!n.o(c,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return c[t]}a.keys=function(){return Object.keys(c)},a.resolve=i,t.exports=a,a.id=250},251:function(t,e,n){"use strict";n.r(e);var c=n(116),a=n(23),i=n(21),o={notifications:[]};e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,e=arguments.length>1?arguments[1]:void 0,n=e.type,r=e.payload;switch(n){case i.ERROR:case i.SUCCESS:case i.WARNING:case i.INFO:return Object(a.a)(Object(a.a)({},t),{},{notifications:[].concat(Object(c.a)(t.notifications),[r])});case i.DISMISS:return Object(a.a)(Object(a.a)({},t),{},{notifications:t.notifications.filter((function(t){return t.id!==r}))});case i.CLEAR:return Object(a.a)({},o)}return Object(a.a)({},t)}},261:function(t,e,n){var c={"./notification/actions.js":21};function a(t){var e=i(t);return n(e)}function i(t){if(!n.o(c,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return c[t]}a.keys=function(){return Object.keys(c)},a.resolve=i,t.exports=a,a.id=261},262:function(t,e,n){},264:function(t,e,n){"use strict";n.r(e);var c=n(15),a=n(16),i=n(19),o=n(18),r=n(0),u=n.n(r),s=n(36),l=n.n(s),f=n(37),m=n(104),d=n(48),p=n(7),O=n(73),b=n(105),v=n.n(b),h=n(106),j=n(107),k=n.n(j),E=n(268),N=n(108),g=n(109),y={form:E.a,intl:f.intlReducer,routing:d.routerReducer,thunk:N.reducer},I=n(250);I.keys().forEach((function(t){var e=k()(t.replace(/\.\/(.+)\/.+$/,"$1"));y[e]=I(t).default}));var S=Object(g.composeResetReducer)(Object(p.c)(y)),w={key:"upwork",storage:v.a,whitelist:[""]},x=Object(O.a)(w,S),C=Object(p.d)(x,Object(p.a)(h.a)),R=Object(O.b)(C),T=n(14),A=n(5),D=n(113),F=n.n(D),M=n(114),U=(n(262),function(t){Object(i.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))).updateNotifications=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=t.props,c=n.notifications,a=n.dismissNotification,i=n.intl.messages,o=e&&e.map((function(t){return t.id})),r=c&&c.map((function(t){return t.id}));e&&e.filter((function(t){return r.indexOf(t.id)<0})).map((function(e){return t.notificationSystem.removeNotification(e.id)})),c&&c.filter((function(t){return o.indexOf(t.id)<0})).map((function(t){return{uid:t.id,title:t.translatedTitle||t.title||i["notification_fallback_title_".concat(t.level)],message:t.translatedMessage||t.message||i["notification_fallback_message_".concat(t.level)],level:t.level,position:"tc",autoDismiss:6,onRemove:function(){return a(t.id)}}})).filter((function(t){return t.message})).map((function(e){return t.notificationSystem.addNotification(e)}))},t}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.props.notifications&&this.updateNotifications()}},{key:"componentDidUpdate",value:function(t){this.props.notifications&&this.props.notifications!==t.notifications&&this.updateNotifications(t.notifications)}},{key:"getNotificationMessage",value:function(t){}},{key:"render",value:function(){var t=this;return this.props.notifications?u.a.createElement(F.a,{ref:function(e){t.notificationSystem=e},style:!1}):null}}]),n}(u.a.Component)),_=Object(A.c)(Object(T.connect)((function(t){return{notifications:t.notification.notifications}}),(function(t){return Object(p.b)({dismissNotification:M.notificationDismiss},t)}))(U)),L=n(269),W=n(50),G=function(t){Object(i.a)(n,t);var e=Object(o.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var t=this.props,e=t.content,n=Object(W.a)(t,["content"]);return u.a.createElement("div",null,u.a.createElement("section",{className:"content"},u.a.createElement("section",{className:"wrapper"},u.a.createElement(e,n))))}}]),n}(u.a.Component),J=Object(A.c)(Object(T.connect)((function(){return{}}))(G)),B=function(t){t.locale;var e=t.component,n=Object(W.a)(t,["locale","component"]);return console.log("PUBLIC ROUT"),console.log("component",e),u.a.createElement(L.a,Object.assign({},n,{render:function(t){return u.a.createElement(J,Object.assign({},t,{content:e}))}}))},H=n(49),P=n(13),$=function(t){Object(i.a)(n,t);var e=Object(o.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var t=this.props.intl;t.messages,t.locale;return u.a.createElement("section",{className:"page homepage full-height single-screen with-bkg"},u.a.createElement("section",{className:"uk-container full-height small-pages left-background uk-height-1-1 uk-flex uk-flex-column uk-flex-center"},u.a.createElement("div",{className:"uk-width-3-5@m uk-width-1-1"},u.a.createElement("h1",{className:"tagline"},"UpWork Trial Assignment"))))}}]),n}(u.a.Component),q=Object(A.c)(Object(T.connect)((function(t){return{}}),(function(t){return Object(p.b)({},t)}))($)),z=Object(A.c)((function(t){var e=t.intl;return u.a.createElement("section",{className:"onboarding forofor uk-flex uk-flex-row"},u.a.createElement("section",{className:"uk-width-1-1 content-area not-found uk-flex uk-flex-column uk-flex-center"},u.a.createElement("div",{className:"uk-flex uk-flex-row uk-flex-center uk-flex-middle uk-flex-wrap"},u.a.createElement("div",{className:"uk-width-1-1"},u.a.createElement("div",{className:"uk-width-1-6@xl uk-width-1-5@l uk-width-1-4@m uk-width-1-3@s uk-width-1-2"}),u.a.createElement("p",{className:"not-found-big"},"Not found"),u.a.createElement("div",{className:"not-found-medium"},u.a.createElement("p",{className:"back-home"},u.a.createElement("a",{href:Object(P.b)("/",e.locale)},"Home")))))))})),K=function(t,e){return u.a.createElement(L.b,{history:t},u.a.createElement(L.c,null,u.a.createElement(B,{exact:!0,path:"/",component:q}),",",function(t){var e=[];return Object.keys(H.a).forEach((function(n){var c={store:t,locale:n};e=e.concat([u.a.createElement(B,Object.assign({key:"".concat(n,"-home-route")},c,{exact:!0,path:"/".concat(n),component:q}))])})),e}(e),u.a.createElement(B,{exact:!0,path:"*",component:z}),","))},Q=n(115),V=Object(Q.a)(),X=(Object(d.syncHistoryWithStore)(V,C),function(t){Object(i.a)(n,t);var e=Object(o.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return u.a.createElement(f.Provider,{store:C},u.a.createElement(m.a,{loading:null,persistor:R},u.a.createElement("div",null,u.a.createElement(_,null),K(V))))}}]),n}(u.a.Component));l.a.render(u.a.createElement(X,null),document.getElementById("root"))},49:function(t,e,n){"use strict";var c=n(112),a={en:c};e.a=a}},[[118,1,2]]]);
//# sourceMappingURL=main.0de71794.chunk.js.map