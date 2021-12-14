(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var t=function(){function t(e,n,o,r,i,a,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=e,this._cardSelector=n,this._handleCardClick=o,this._handleDeleteCardClick=r,this._putLike=i,this._removeLike=a,this._ownerId=u,this._id=e._id,this._likes=e.likes.length}var n,o;return n=t,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardFoto=this._element.querySelector(".card__photo"),this._cardTitle=this._element.querySelector(".card__title"),this._counterLike=this._element.querySelector(".card__count-likes"),this._buttonLike=this._element.querySelector(".card__button-icon-heart"),this._setEventListeners(),this._cardFoto.src=this._data.link,this._cardTitle.alt=this._data.name,this._cardTitle.textContent=this._data.name,this._counterLike.textContent=this._likes,this._checkWhoOner(),this._checkLike(),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._cardFoto.addEventListener("click",(function(){e._handleCardClick(e._data)})),this._element.querySelector(".card__button-icon-heart").addEventListener("click",(function(){e._buttonLike.classList.contains("card__button-icon-heart_active")?e._removeLike(e._data):e._putLike(e._data)})),this._element.querySelector(".card__button-icon-delete").addEventListener("click",this._handleDeleteCardClick)}},{key:"handleDeleteCard",value:function(){this._element.remove(),this._element=null}},{key:"setCounterLike",value:function(e){this._counterLike.textContent=String(e.likes.length)}},{key:"_checkWhoOner",value:function(){this._data.owner._id!==this._ownerId&&this._element.querySelector(".card__button-icon-delete").remove()}},{key:"_checkLike",value:function(){var e=this;this._data.likes.array.forEach((function(t){t._id===e._ownerId&&e._buttonLike.classList.add("card__button-icon-heart_active")}))}},{key:"addLike",value:function(){this._buttonLike.classList.add("card__button-icon-heart_active")}},{key:"delLike",value:function(){this._buttonLike.classList.remove("card__button-icon-heart_active")}}])&&e(n.prototype,o),t}();function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._configValidation=t,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._configValidation.inputSelector)),this.__submitButton=this._formElement.querySelector(this._configValidation.submitButtonSelector)}var t,o;return t=e,(o=[{key:"_showInputError",value:function(e){this._errorElement=this._formElement.querySelector("#".concat(e.id,"-error")),e.classList.add(this._configValidation.inputErrorClass),this._errorElement.textContent=e.validationMessage,this._errorElement.classList.add(this._configValidation.errorClass)}},{key:"_hideInputError",value:function(e){this._errorElement=this._formElement.querySelector("#".concat(e.id,"-error")),e.classList.remove(this._configValidation.inputErrorClass),this._errorElement.classList.remove(this._configValidation.errorClass),this._errorElement.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_hasNotInputValues",value:function(){return this._inputList.every((function(e){return 0===e.value.length}))}},{key:"disableSubmitButton",value:function(){this.__submitButton.classList.add(this._configValidation.inactiveButtonClass),this.__submitButton.disabled=!0}},{key:"_enableSubmitButton",value:function(){this.__submitButton.classList.remove(this._configValidation.inactiveButtonClass),this.__submitButton.disabled=!1}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()||this._hasNotInputValues()?this.disableSubmitButton():this._enableSubmitButton()}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"_setEventListeners",value:function(){var e=this;this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))})),this._toggleButtonState()}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&n(t.prototype,o),e}();function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var i=function(){function e(t,n){var o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.append(e)}},{key:"prependItem",value:function(e){this._container.prepend(e)}},{key:"clear",value:function(){this._container.innetHTML=""}},{key:"renderItems",value:function(e){var t=this;this.clear(),e.forEach((function(e){t._renderer(e)}))}}])&&r(t.prototype,n),e}();function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t,this._popupElement=document.querySelector(this._popupSelector),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("click",(function(t){(t.target.classList.contains("popup")||t.target.classList.contains("popup__close"))&&e.close()}))}}])&&a(t.prototype,n),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t,n){return s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}},s(e,t,n||e)}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function p(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(o);if(r){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImageTitle=t._popupElement.querySelector(".popup__image-title"),t._popupImage=t._popupElement.querySelector(".popup__image"),t}return t=a,(n=[{key:"open",value:function(e){var t=e.link,n=e.name;this._popupImageTitle.textContent=n,this._popupImage.src=t,this._popupImage.alt=n,s(h(a.prototype),"open",this).call(this)}}])&&l(t.prototype,n),a}(u);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function v(e,t,n){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}},v(e,t,n||e)}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function b(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(o);if(r){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._popupFormElement=n._popupElement.querySelector(".popup__form"),n._handleFormSubmit=t,n._buttonSubmit=n._popupFormElement.querySelector(".popup__button"),n._valueButtonSubmit=n._buttonSubmit.textContent,n}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;this._popupFormElement.addEventListener("submit",(function(t){e._handleFormSubmit(e._getInputValues()),e.close()})),v(k(a.prototype),"setEventListeners",this).call(this)}},{key:"_getInputValues",value:function(){var e={};return Array.from(this._popupFormElement.querySelectorAll(".popup__input")).forEach((function(t){e[t.name]=t.value})),e}},{key:"loading",value:function(e){this._buttonSubmit.textContent=e?"Сохранение...":this._valueButtonSubmit}},{key:"close",value:function(){this._popupFormElement.reset(),v(k(a.prototype),"close",this).call(this)}}])&&y(t.prototype,n),a}(u);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function S(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function w(e,t,n){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}},w(e,t,n||e)}function L(e,t){return L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},L(e,t)}function C(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(o);if(r){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleFormSubmit=t,n._popupFormElement=n._popupElement.querySelector(".popup__form"),n._buttonSubmit=n._popupFormElement.querySelector(".popup__button"),n._valueButtonSubmit=n._buttonSubmit.textContent,n}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;this._popupFormElement.addEventListener("submit",(function(t){e._handleFormSubmit(e._data),e.close()})),w(O(a.prototype),"setEventListeners",this).call(this)}},{key:"loading",value:function(e){this._buttonSubmit.textContent=e?"Удаление...":this._valueButtonSubmit}},{key:"open",value:function(e){this._data=e,w(O(a.prototype),"open",this).call(this)}}])&&S(t.prototype,n),a}(u);function I(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var P=function(){function e(t){var n=t.name,o=t.job,r=t.avatar,i=t._id;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._job=document.querySelector(o),this._avatar=document.querySelector(r),this._id=document.querySelector(i)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,job:this._job.textContent}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._job.textContent=e.job,this._avatar.src=e.avatar,this._id=e._id}}])&&I(t.prototype,n),e}();function R(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var q=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"addCardFromForm",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._checkResponse(e)}))}},{key:"changeAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._checkResponse(e)}))}},{key:"getApiInfoUser",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"patchInfoUser",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.job})}).then((function(e){return t._checkResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"addLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e._id),{method:"PUT",headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e._id),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkResponse(e)}))}}])&&R(t.prototype,n),e}(),T=document.querySelector(".popup__form_type_edit-profile"),B=document.querySelector(".popup__form_type_add-card"),U=document.querySelector(".popup__form_type_avatar"),V=document.querySelector(".popup__input_type_name"),x=document.querySelector(".popup__input_type_job"),F=document.querySelector(".profile__info-edit-button"),A=document.querySelector(".profile__add-button"),D=document.querySelector(".profile__avatar-edit"),N={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_visible"};function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var J=new o(N,T);J.enableValidation();var M=new o(N,B);M.enableValidation();var G=new o(N,U);G.enableValidation();var W=null,z=null,$=new q({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-29",headers:{authorization:"90e03115-4cf1-4f8e-a49a-17cfdbebd772","Content-type":"application/json"}});Promise.all([$.getInitialCards(),$.getApiInfoUser()]).then((function(e){var t,n,o=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(i.push(o.value),!t||i.length!==t);a=!0);}catch(e){u=!0,r=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw r}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=o[0],i=o[1];Q.setUserInfo(i),z=i._id,Y.renderItems(r)})).catch((function(e){console.log("".concat(e))}));var K=new _(".popup_type_iamge");K.setEventListeners();var Q=new P({name:".profile__info-title",job:".profile__info-subtitle",avatar:".profile__avatar"}),X=function(e,n){var o=new t(e,"#card-template",(function(e){var t=e.link,n=e.name;K.open({link:t,name:n})}),(function(e){W=o,Z.open(e)}),(function(e){$.addLike(e).then((function(e){o.setCounterLike(e),o.addLike()})).catch((function(e){console.log("Не могу добавить лайк. Ошибка ".concat(e,"."))}))}),(function(e){$.deleteLike(e).then((function(e){o.setCounterLike(e),o.delLike(e)})).catch((function(e){console.log("Не могу убрать лайк. Ошибка ".concat(e,"."))}))}),n);return o.generateCard()},Y=new i({renderer:function(e){Y.addItem(X(e,z))}},".elements"),Z=new j(".popup_type_delete",(function(e){Z.loading(!0),function(e){$.deleteCard(e._id).then((function(){W.handleDeleteCard(),Z.close()})).catch((function(e){console.log("Невозможно удалить карточку. Ошибка ".concat(e,"."))})).finally((function(){Z.loading(!1)}))}(e)}));Z.setEventListeners();var ee=new g(".popup_type_edit-profile",(function(e){ee.loading(!0),$.patchInfoUser(e).then((function(e){Q.setUserInfo(e),ee.close()})).catch((function(e){console.log(e)})).finally((function(){ee.loading(!1)}))}));ee.setEventListeners();var te=new g(".popup_type_avatar",(function(e){te.loading(!0),$.changeAvatar(e).then((function(e){Q.setUserInfo(e),te.close()})).catch((function(e){console.log(e)})).finally((function(){te.loading(!1)}))}));te.setEventListeners();var ne=new g(".popup_type_add-card",(function(e){ne.loading(!0),$.addCardFromForm(e).then((function(e){ne.close(),Y.prependItem(X(e,z))})).catch((function(e){console.log(e)})).finally((function(){ne.loading(!1)}))}));ne.setEventListeners(),F.addEventListener("click",(function(){var e=Q.getUserInfo();V.value=e.name,x.value=e.job,J.resetValidation(),ee.open()})),A.addEventListener("click",(function(){M.resetValidation(),ne.open()})),D.addEventListener("click",(function(){G.resetValidation(),ne.open()}))})();