(()=>{var __webpack_modules__={567:()=>{eval('let page = document.location.pathname;\n\nfunction breadcrumbsLink() {\n  switch (page) {\n    case "/about.html":\n      document.querySelector(".breadcrumbs__link--js").textContent = "About";\n      break;\n\n    case "/gallery.html":\n      document.querySelector(".breadcrumbs__link--js").textContent = "Gallery";\n      break;\n\n    case "/blog.html":\n      document.querySelector(".breadcrumbs__link--js").textContent = "Blog";\n      break;\n\n    case "/blog-one.html":\n      document.querySelector(".breadcrumbs__link--js").textContent = "Article";\n      break;\n\n    case "/contacts.html":\n      document.querySelector(".breadcrumbs__link--js").textContent = "Contacts";\n      break;\n  }\n}\n\nbreadcrumbsLink();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTY3LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnJlYWRjcnVtYnMvaW5kZXguanM/OWFlMiJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgcGFnZSA9IGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lO1xuXG5mdW5jdGlvbiBicmVhZGNydW1ic0xpbmsoKSB7XG4gIHN3aXRjaCAocGFnZSkge1xuICAgIGNhc2UgXCIvYWJvdXQuaHRtbFwiOlxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5icmVhZGNydW1ic19fbGluay0tanNcIikudGV4dENvbnRlbnQgPSBcIkFib3V0XCI7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgXCIvZ2FsbGVyeS5odG1sXCI6XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJyZWFkY3J1bWJzX19saW5rLS1qc1wiKS50ZXh0Q29udGVudCA9IFwiR2FsbGVyeVwiO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFwiL2Jsb2cuaHRtbFwiOlxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5icmVhZGNydW1ic19fbGluay0tanNcIikudGV4dENvbnRlbnQgPSBcIkJsb2dcIjtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBcIi9ibG9nLW9uZS5odG1sXCI6XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJyZWFkY3J1bWJzX19saW5rLS1qc1wiKS50ZXh0Q29udGVudCA9IFwiQXJ0aWNsZVwiO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFwiL2NvbnRhY3RzLmh0bWxcIjpcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnJlYWRjcnVtYnNfX2xpbmstLWpzXCIpLnRleHRDb250ZW50ID0gXCJDb250YWN0c1wiO1xuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuYnJlYWRjcnVtYnNMaW5rKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///567\n')},93:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";eval("\n// EXTERNAL MODULE: ../node_modules/jquery-ui/ui/widget.js\nvar widget = __webpack_require__(803);\n// EXTERNAL MODULE: ../node_modules/jquery/dist/jquery.js\nvar jquery = __webpack_require__(638);\nvar jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);\n;// CONCATENATED MODULE: ./components/rightside-menu/index.js\n\njquery_default()(function () {\n  jquery_default()('.header__btn').on('click', function () {\n    jquery_default()('.rightside-menu').removeClass('rightside-menu--close');\n    console.log('Click removeClass rightside-menu');\n  });\n  jquery_default()('.rightside-menu__close').on('click', function () {\n    jquery_default()('.rightside-menu').addClass('rightside-menu--close');\n    console.log('Click addClass rightside-menu');\n  });\n});\nconsole.log('Init rightside-menu');\n;// CONCATENATED MODULE: ./components/header/index.js\n//import '@/components/menu';\n\n\njquery_default()(function () {\n  jquery_default()('.header__btn-menu').on('click', function () {\n    jquery_default()('.menu').toggleClass('menu--open');\n  });\n});\nconsole.log('On burgermenu');\n// EXTERNAL MODULE: ../node_modules/jquery-mask-plugin/dist/jquery.mask.js\nvar jquery_mask = __webpack_require__(587);\n;// CONCATENATED MODULE: ./components/field/Field.js\n/* provided dependency */ var $ = __webpack_require__(638);\n\n\nclass Field {\n  static init() {\n    $('.js-field__input[name*=email]').mask('A', {\n      translation: {\n        A: {\n          pattern: /[\\w@\\-.+]/,\n          recursive: true\n        }\n      }\n    });\n    $('.js-field__input[name*=name]').mask('A', {\n      translation: {\n        A: {\n          pattern: /[\\w+]/,\n          recursive: true\n        }\n      }\n    });\n  }\n\n}\n\n/* harmony default export */ const field_Field = (Field);\n;// CONCATENATED MODULE: ./components/field/index.js\n/* provided dependency */ var field_$ = __webpack_require__(638);\n\nfield_$(() => {\n  field_Field.init();\n});\n;// CONCATENATED MODULE: ./components/footer/index.js\n\n// EXTERNAL MODULE: ./components/breadcrumbs/index.js\nvar breadcrumbs = __webpack_require__(567);\n;// CONCATENATED MODULE: ./pages/blog-one/index.js\n // Подключение скриптов components\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FFSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvcmlnaHRzaWRlLW1lbnUvaW5kZXguanM/YzIzYSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci9pbmRleC5qcz8wMzliIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZmllbGQvRmllbGQuanM/M2I5MyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ZpZWxkL2luZGV4LmpzPzM4ZmQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb290ZXIvaW5kZXguanM/NjkyYiIsIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nLW9uZS9pbmRleC5qcz9hMjY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcbiQoZnVuY3Rpb24gKCkge1xuICAkKCcuaGVhZGVyX19idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgJCgnLnJpZ2h0c2lkZS1tZW51JykucmVtb3ZlQ2xhc3MoJ3JpZ2h0c2lkZS1tZW51LS1jbG9zZScpO1xuICAgIGNvbnNvbGUubG9nKCdDbGljayByZW1vdmVDbGFzcyByaWdodHNpZGUtbWVudScpO1xuICB9KTtcbiAgJCgnLnJpZ2h0c2lkZS1tZW51X19jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAkKCcucmlnaHRzaWRlLW1lbnUnKS5hZGRDbGFzcygncmlnaHRzaWRlLW1lbnUtLWNsb3NlJyk7XG4gICAgY29uc29sZS5sb2coJ0NsaWNrIGFkZENsYXNzIHJpZ2h0c2lkZS1tZW51Jyk7XG4gIH0pO1xufSk7XG5jb25zb2xlLmxvZygnSW5pdCByaWdodHNpZGUtbWVudScpOyIsIi8vaW1wb3J0ICdAL2NvbXBvbmVudHMvbWVudSc7XG5pbXBvcnQgJ0AvY29tcG9uZW50cy9yaWdodHNpZGUtbWVudSc7XG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG4kKGZ1bmN0aW9uICgpIHtcbiAgJCgnLmhlYWRlcl9fYnRuLW1lbnUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgJCgnLm1lbnUnKS50b2dnbGVDbGFzcygnbWVudS0tb3BlbicpO1xuICB9KTtcbn0pO1xuY29uc29sZS5sb2coJ09uIGJ1cmdlcm1lbnUnKTsiLCJpbXBvcnQgJ2pxdWVyeS1tYXNrLXBsdWdpbic7XG5cbmNsYXNzIEZpZWxkIHtcbiAgc3RhdGljIGluaXQoKSB7XG4gICAgJCgnLmpzLWZpZWxkX19pbnB1dFtuYW1lKj1lbWFpbF0nKS5tYXNrKCdBJywge1xuICAgICAgdHJhbnNsYXRpb246IHtcbiAgICAgICAgQToge1xuICAgICAgICAgIHBhdHRlcm46IC9bXFx3QFxcLS4rXS8sXG4gICAgICAgICAgcmVjdXJzaXZlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICAkKCcuanMtZmllbGRfX2lucHV0W25hbWUqPW5hbWVdJykubWFzaygnQScsIHtcbiAgICAgIHRyYW5zbGF0aW9uOiB7XG4gICAgICAgIEE6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvW1xcdytdLyxcbiAgICAgICAgICByZWN1cnNpdmU6IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmllbGQ7IiwiaW1wb3J0IEZpZWxkIGZyb20gJ0AvY29tcG9uZW50cy9maWVsZC9GaWVsZCc7XG4kKCgpID0+IHtcbiAgRmllbGQuaW5pdCgpO1xufSk7IiwiaW1wb3J0ICdAL2NvbXBvbmVudHMvZmllbGQnOyIsImltcG9ydCAnanF1ZXJ5LXVpJzsgLy8g0J/QvtC00LrQu9GO0YfQtdC90LjQtSDRgdC60YDQuNC/0YLQvtCyIGNvbXBvbmVudHNcblxuaW1wb3J0ICdAL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCAnQC9jb21wb25lbnRzL2Zvb3Rlcic7XG5pbXBvcnQgJ0AvY29tcG9uZW50cy9icmVhZGNydW1icyc7XG5pbXBvcnQgJy4vYmxvZy1vbmUuc2Nzcyc7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///93\n")}},__webpack_module_cache__={},deferred;function __webpack_require__(e){var n=__webpack_module_cache__[e];if(void 0!==n)return n.exports;var c=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(c.exports,c,c.exports,__webpack_require__),c.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=(e,n,c,b)=>{if(!n){var _=1/0;for(t=0;t<deferred.length;t++){for(var[n,c,b]=deferred[t],u=!0,r=0;r<n.length;r++)(!1&b||_>=b)&&Object.keys(__webpack_require__.O).every((e=>__webpack_require__.O[e](n[r])))?n.splice(r--,1):(u=!1,b<_&&(_=b));if(u){deferred.splice(t--,1);var i=c();void 0!==i&&(e=i)}}return e}b=b||0;for(var t=deferred.length;t>0&&deferred[t-1][2]>b;t--)deferred[t]=deferred[t-1];deferred[t]=[n,c,b]},__webpack_require__.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(n,{a:n}),n},__webpack_require__.d=(e,n)=>{for(var c in n)__webpack_require__.o(n,c)&&!__webpack_require__.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:n[c]})},__webpack_require__.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={923:0};__webpack_require__.O.j=n=>0===e[n];var n=(n,c)=>{var b,_,[u,r,i]=c,t=0;if(u.some((n=>0!==e[n]))){for(b in r)__webpack_require__.o(r,b)&&(__webpack_require__.m[b]=r[b]);if(i)var l=i(__webpack_require__)}for(n&&n(c);t<u.length;t++)_=u[t],__webpack_require__.o(e,_)&&e[_]&&e[_][0](),e[_]=0;return __webpack_require__.O(l)},c=self.webpackChunk=self.webpackChunk||[];c.forEach(n.bind(null,0)),c.push=n.bind(null,c.push.bind(c))})();var __webpack_exports__=__webpack_require__.O(void 0,[922],(()=>__webpack_require__(93)));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();