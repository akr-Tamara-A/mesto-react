(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.855a8c98.svg"},,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(7),r=a.n(o),s=(a(17),a(11)),l=a(2),i=a(1),u=(a(18),a(8)),m=a.n(u);function d(){return c.a.createElement("header",{className:"header page__header page__section"},c.a.createElement("a",{href:"https://akr-tamara-a.github.io/mesto/index.html",className:"header__logo-link"},c.a.createElement("img",{src:m.a,alt:"logo",className:"logo header__logo"})),c.a.createElement("h1",{className:"header__title"},"\u0421\u0435\u0440\u0432\u0438\u0441 Mesto Russia"))}var p=c.a.createContext();function f(e){var t=Object(n.useContext)(p);var a=e.card.owner._id===t._id,o="\n      element__delete \n      button \n      button_style_secondary \n      button_type_delete\n      ".concat(a?null:"element__delete_hidden"),r=e.card.likes.some((function(e){return e._id===t._id})),s="\n    button \n    button_type_no-like \n    element__like-button \n    button_style_secondary\n    ".concat(r?"button_type_like":"button_type_no-like","\n    ");return c.a.createElement("li",{className:"elements__item element"},c.a.createElement("figure",{className:"element__wrapper"},c.a.createElement("div",{className:"element__head"},c.a.createElement("img",{src:e.card.link,alt:e.card.name,tabIndex:"0",onClick:function(){e.onCardClick(e.card)},className:"element__image"})),c.a.createElement("figcaption",{className:"element__figcaption"},c.a.createElement("h3",{className:"element__title"},e.card.name),c.a.createElement("div",{className:"element__like"},c.a.createElement("button",{type:"button",title:"\u0414\u043e\u0431\u0430\u0432\u044c \u043b\u0430\u0439\u043a",className:s,onClick:function(){e.onCardLike(e.card)}}),c.a.createElement("p",{className:"element__like-counter"},e.card.likes.length)))),c.a.createElement("button",{type:"button",title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0444\u043e\u0442\u043e",className:o,onClick:function(){e.onCardDelete(e.card)}}))}a(19);function b(){return c.a.createElement("div",{className:"spinner"},c.a.createElement("div",{className:"spinner__item"}))}function _(e){var t=Object(n.useContext)(p);return c.a.createElement("main",{className:"content page__content"},c.a.createElement("div",{className:"profile page__section"},c.a.createElement("div",{className:"profile__container"},c.a.createElement("div",{className:"profile__userpic"},c.a.createElement("div",{className:"profile__edit",onClick:e.onEditAvatar,tabIndex:"0"}),c.a.createElement("img",{src:t&&t.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u0430\u0432\u0442\u043e\u0440\u0430",className:"profile__image"})),c.a.createElement("div",{className:"profile__user"},c.a.createElement("h2",{className:"profile__user-name"},t&&t.name),c.a.createElement("p",{className:"profile__user-job"},t&&t.about)),c.a.createElement("button",{type:"button",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044f",onClick:e.onEditProfile,className:"button button_type_edit-profile button_style_primary"})),c.a.createElement("div",{className:"profile__add-post"},c.a.createElement("button",{type:"button",title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0442\u043e",onClick:e.onAddPlace,className:"button button_type_add-photo button_style_primary"}))),c.a.createElement("div",{className:"elements page__section"},c.a.createElement("ul",{className:"elements__container"},e.isCardsLoading?c.a.createElement(b,null):e.cards.map((function(t){return c.a.createElement(f,{card:t,key:t._id,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete})})))))}function h(){return c.a.createElement("footer",{className:"footer page__footer page__section"},c.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))}function v(e){return c.a.createElement("div",{id:"popupViewPhoto",className:"popup popup_style_view ".concat(e.card&&"popup_opened")},c.a.createElement("div",{className:"popup__container"},c.a.createElement("button",{name:"viewPhotoClose",type:"button",title:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e",onClick:e.onClose,className:"popup__close"}),c.a.createElement("div",{className:"popup__view"},c.a.createElement("img",{src:e.card&&e.card.link,alt:e.card&&e.card.name,className:"popup__photo"}),c.a.createElement("p",{className:"popup__photo-title"},e.card&&e.card.name))))}function E(e){return c.a.createElement("div",{id:e.name,className:"popup popup_style_form ".concat(e.isOpen&&"popup_opened")},c.a.createElement("div",{className:"popup__container"},c.a.createElement("button",{name:"editProfileClose",type:"button",title:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e",onClick:e.onClose,className:"popup__close"}),c.a.createElement("form",{action:"#",name:e.name,noValidate:!0,onSubmit:e.onSubmit,className:"popup__form"},c.a.createElement("h2",{className:"popup__title"},e.title),e.children,c.a.createElement("button",{name:"".concat(e.name,"Submit"),type:"submit",className:"popup__submit"},e.submitValue))))}var j=a(3),g=Object(n.forwardRef)((function(e,t){var a=e.name,n=e.isRequired,o=Object(j.a)(e,["name","isRequired"]);return c.a.createElement("label",{className:"popup__form-field"},c.a.createElement("input",Object.assign({ref:t,id:"input-".concat(a),required:n},o,{className:"popup__input"})),c.a.createElement("span",{id:"input-".concat(a,"-error"),className:"popup__input-error"}))}));function O(e){var t=e.onUpdateUser,a=Object(j.a)(e,["onUpdateUser"]),o=Object(n.useContext)(p),r=Object(n.useState)(""),s=Object(i.a)(r,2),l=s[0],u=s[1],m=Object(n.useState)(""),d=Object(i.a)(m,2),f=d[0],b=d[1];Object(n.useEffect)((function(){o&&(u(o.name),b(o.about))}),[o]);var _=Object(n.useCallback)((function(e){u(e.target.value)}),[u]),h=Object(n.useCallback)((function(e){b(e.target.value)}),[b]),v=Object(n.useCallback)((function(e){e.preventDefault(),t({name:l,about:f})}),[l,f,t]);return c.a.createElement(E,Object.assign({name:"editProfile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",submitValue:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"},a,{onSubmit:v}),c.a.createElement(g,{name:"userName",type:"text",minLength:"2",maxLength:"40",pattern:"^[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\\s-]+$",placeholder:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",isRequired:!0,value:l,onChange:_}),c.a.createElement(g,{name:"userJob",type:"text",minLength:"2",maxLength:"200",placeholder:"\u041e \u0441\u0435\u0431\u0435",isRequired:!0,value:f,onChange:h}))}function k(e){var t=e.onUpdateAvatar,a=Object(j.a)(e,["onUpdateAvatar"]),o=Object(n.createRef)(),r=Object(n.useCallback)((function(e){e.preventDefault(),t(o.current.value)}),[o,t]);return c.a.createElement(E,Object.assign({name:"editAvatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440"},a,{onSubmit:r}),c.a.createElement(g,{name:"avatar",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043d\u043e\u0432\u044b\u0439 \u0430\u0432\u0430\u0442\u0430\u0440",isRequired:!0,ref:o}))}function C(e){var t=e.onAddPlace,a=Object(j.a)(e,["onAddPlace"]),o=Object(n.useState)(""),r=Object(i.a)(o,2),s=r[0],l=r[1],u=Object(n.useState)(""),m=Object(i.a)(u,2),d=m[0],p=m[1],f=Object(n.useCallback)((function(e){l(e.target.value)}),[l]),b=Object(n.useCallback)((function(e){p(e.target.value)}),[p]),_=Object(n.useCallback)((function(e){e.preventDefault(),t(s,d),l(""),p("")}),[s,d,t]);return c.a.createElement(E,Object.assign({name:"addPhoto",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",submitValue:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"},a,{onSubmit:_}),c.a.createElement(g,{name:"photoTitle",type:"text",minLength:"2",maxLength:"30",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",isRequired:!0,value:s,onChange:f}),c.a.createElement(g,{name:"photoLink",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",isRequired:!0,value:d,onChange:b}))}var N=a(9),y=a(10),U=new(function(){function e(t){Object(N.a)(this,e),this._baseUrl=t.baseUrl,this.headers=t.headers}return Object(y.a)(e,[{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430. \u0417\u0430\u043f\u0440\u043e\u0441 \u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d: ",e)}))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430. \u0417\u0430\u043f\u0440\u043e\u0441 \u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d: ",e)}))}},{key:"patchUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"patchUserAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"postNewCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"changeLikeCardStatus",value:function(e,t){var a=t?"PUT":"DELETE";return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:a,headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"likeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"unlikeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-14",headers:{authorization:"f7fbd0be-598d-4bc2-8963-24bc80b8013a","Content-Type":"application/json"}});var P=function(){var e=Object(n.useState)({}),t=Object(i.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(!1),u=Object(i.a)(r,2),m=u[0],f=u[1],b=Object(n.useState)(!1),j=Object(i.a)(b,2),g=j[0],N=j[1],y=Object(n.useState)(!1),P=Object(i.a)(y,2),S=P[0],A=P[1],w=Object(n.useState)([]),L=Object(i.a)(w,2),x=L[0],I=L[1],D=Object(n.useState)(null),R=Object(i.a)(D,2),T=R[0],V=R[1],q=Object(n.useState)(!1),J=Object(i.a)(q,2),M=J[0],z=J[1],B=Object(n.useState)({editAvatar:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",editUserInfo:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",addCards:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",confirmDeletion:"\u0414\u0430"}),H=Object(i.a)(B,2),W=H[0],$=H[1];Object(n.useEffect)((function(){U.getUserInfo().then((function(e){o(e),console.log("user info loaded"),z(!0),U.getInitialCards().then((function(e){I(e)}))})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430. \u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435: ",e)})).finally((function(){z(!1),console.log("cards info loaded")}))}),[o,I]);var Z=function(){f(!1),N(!1),A(!1),V(null)};return c.a.createElement(p.Provider,{value:a},c.a.createElement("div",{className:"page__container"},c.a.createElement(d,null),c.a.createElement(_,{cards:x,isCardsLoading:M,onEditProfile:function(){N(!0)},onEditAvatar:function(){f(!0)},onAddPlace:function(){A(!0)},onCardClick:function(e){!function(e){V(e)}(e)},onCardLike:function(e){!function(e){var t=e.likes.some((function(e){return e._id===a._id}));U.changeLikeCardStatus(e._id,!t).then((function(t){var a=x.map((function(a){return a._id===e._id?t:a}));I(a)}))}(e)},onCardDelete:function(e){var t;t=e,U.deleteCard(t._id).then((function(e){console.log(e);var a=x.filter((function(e){return e._id!==t._id}));I(a),console.log("card deleted")}))}}),c.a.createElement(h,null),c.a.createElement(O,{submitValue:W.editUserInfo,isOpen:g,onClose:Z,onUpdateUser:function(e){$(Object(l.a)(Object(l.a)({},W),{},{editUserInfo:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044f..."})),U.patchUserInfo(e).then((function(e){o(e)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430. \u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435: ",e)})).finally((function(){console.log("user info updates"),$(Object(l.a)(Object(l.a)({},W),{},{editUserInfo:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})),N(!1)}))}}),c.a.createElement(k,{submitValue:W.editAvatar,isOpen:m,onClose:Z,onUpdateAvatar:function(e){$(Object(l.a)(Object(l.a)({},W),{},{editAvatar:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044f..."})),U.patchUserAvatar(e).then((function(e){o(e)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430. \u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435: ",e)})).finally((function(){console.log("user avatar updated"),$(Object(l.a)(Object(l.a)({},W),{},{editAvatar:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})),f(!1)}))}}),c.a.createElement(C,{submitValue:W.addCards,isOpen:S,onClose:Z,onAddPlace:function(e,t){$(Object(l.a)(Object(l.a)({},W),{},{addCards:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044f..."})),U.postNewCard(e,t).then((function(e){console.log(e),I([e].concat(Object(s.a)(x)))})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430. \u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435: ",e)})).finally((function(){console.log("new card added"),$(Object(l.a)(Object(l.a)({},W),{},{addCards:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})),A(!1)}))}}),c.a.createElement(v,{card:T,onClose:Z}),c.a.createElement(E,{name:"deleteCard",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",submitValue:W.confirmDeletion,isOpen:!1,onClose:Z})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.9f5ba89a.chunk.js.map