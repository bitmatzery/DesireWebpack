(()=>{var __webpack_modules__={567:()=>{eval('let page = document.location.pathname;\n\nfunction breadcrumbsLink() {\n  switch (page) {\n    case "/about.html":\n      document.querySelector(".breadcrumbs__link--js").textContent = "About";\n      break;\n\n    case "/gallery.html":\n      document.querySelector(".breadcrumbs__link--js").textContent = "Gallery";\n      break;\n\n    case "/blog.html":\n      document.querySelector(".breadcrumbs__link--js").textContent = "Blog";\n      break;\n\n    case "/blog-one.html":\n      document.querySelector(".breadcrumbs__link--js").textContent = "Article";\n      break;\n\n    case "/contacts.html":\n      document.querySelector(".breadcrumbs__link--js").textContent = "Contacts";\n      break;\n  }\n}\n\nbreadcrumbsLink();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTY3LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnJlYWRjcnVtYnMvaW5kZXguanM/OWFlMiJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgcGFnZSA9IGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lO1xuXG5mdW5jdGlvbiBicmVhZGNydW1ic0xpbmsoKSB7XG4gIHN3aXRjaCAocGFnZSkge1xuICAgIGNhc2UgXCIvYWJvdXQuaHRtbFwiOlxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5icmVhZGNydW1ic19fbGluay0tanNcIikudGV4dENvbnRlbnQgPSBcIkFib3V0XCI7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgXCIvZ2FsbGVyeS5odG1sXCI6XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJyZWFkY3J1bWJzX19saW5rLS1qc1wiKS50ZXh0Q29udGVudCA9IFwiR2FsbGVyeVwiO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFwiL2Jsb2cuaHRtbFwiOlxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5icmVhZGNydW1ic19fbGluay0tanNcIikudGV4dENvbnRlbnQgPSBcIkJsb2dcIjtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBcIi9ibG9nLW9uZS5odG1sXCI6XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJyZWFkY3J1bWJzX19saW5rLS1qc1wiKS50ZXh0Q29udGVudCA9IFwiQXJ0aWNsZVwiO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFwiL2NvbnRhY3RzLmh0bWxcIjpcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnJlYWRjcnVtYnNfX2xpbmstLWpzXCIpLnRleHRDb250ZW50ID0gXCJDb250YWN0c1wiO1xuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuYnJlYWRjcnVtYnNMaW5rKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///567\n')},785:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";eval("\n// EXTERNAL MODULE: ../node_modules/jquery-ui/ui/widget.js\nvar widget = __webpack_require__(803);\n// EXTERNAL MODULE: ../node_modules/jquery/dist/jquery.js\nvar jquery = __webpack_require__(638);\nvar jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);\n;// CONCATENATED MODULE: ./components/rightside-menu/index.js\n\njquery_default()(function () {\n  jquery_default()('.header__btn').on('click', function () {\n    jquery_default()('.rightside-menu').removeClass('rightside-menu--close');\n    console.log('Click removeClass rightside-menu');\n  });\n  jquery_default()('.rightside-menu__close').on('click', function () {\n    jquery_default()('.rightside-menu').addClass('rightside-menu--close');\n    console.log('Click addClass rightside-menu');\n  });\n});\nconsole.log('Init rightside-menu');\n;// CONCATENATED MODULE: ./components/header/index.js\n//import '@/components/menu';\n\n\njquery_default()(function () {\n  jquery_default()('.header__btn-menu').on('click', function () {\n    jquery_default()('.menu').toggleClass('menu--open');\n  });\n});\nconsole.log('On burgermenu');\n// EXTERNAL MODULE: ../node_modules/jquery-mask-plugin/dist/jquery.mask.js\nvar jquery_mask = __webpack_require__(587);\n;// CONCATENATED MODULE: ./components/field/Field.js\n/* provided dependency */ var $ = __webpack_require__(638);\n\n\nclass Field {\n  static init() {\n    $('.js-field__input[name*=email]').mask('A', {\n      translation: {\n        A: {\n          pattern: /[\\w@\\-.+]/,\n          recursive: true\n        }\n      }\n    });\n    $('.js-field__input[name*=name]').mask('A', {\n      translation: {\n        A: {\n          pattern: /[\\w+]/,\n          recursive: true\n        }\n      }\n    });\n  }\n\n}\n\n/* harmony default export */ const field_Field = (Field);\n;// CONCATENATED MODULE: ./components/field/index.js\n/* provided dependency */ var field_$ = __webpack_require__(638);\n\nfield_$(() => {\n  field_Field.init();\n});\n;// CONCATENATED MODULE: ./components/footer/index.js\n\n// EXTERNAL MODULE: ./components/breadcrumbs/index.js\nvar breadcrumbs = __webpack_require__(567);\n// EXTERNAL MODULE: ../node_modules/mixitup/dist/mixitup.js\nvar mixitup = __webpack_require__(273);\nvar mixitup_default = /*#__PURE__*/__webpack_require__.n(mixitup);\n;// CONCATENATED MODULE: ./components/gallery-block/index.js\n\n\njquery_default()(function () {\n  // mixitup gallery\n  var mixer = mixitup_default()('.gallery__inner', {\n    load: {\n      filter: '.living'\n    }\n  });\n});\nconsole.log('On gallery');\n;// CONCATENATED MODULE: ./pages/gallery/index.js\n // Подключение скриптов components\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzg1LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBRUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yaWdodHNpZGUtbWVudS9pbmRleC5qcz9jMjNhIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LmpzPzAzOWIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9maWVsZC9GaWVsZC5qcz8zYjkzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZmllbGQvaW5kZXguanM/MzhmZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvb3Rlci9pbmRleC5qcz82OTJiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZ2FsbGVyeS1ibG9jay9pbmRleC5qcz9iMDgzIiwid2VicGFjazovLy8uL3BhZ2VzL2dhbGxlcnkvaW5kZXguanM/OTgyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG4kKGZ1bmN0aW9uICgpIHtcbiAgJCgnLmhlYWRlcl9fYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICQoJy5yaWdodHNpZGUtbWVudScpLnJlbW92ZUNsYXNzKCdyaWdodHNpZGUtbWVudS0tY2xvc2UnKTtcbiAgICBjb25zb2xlLmxvZygnQ2xpY2sgcmVtb3ZlQ2xhc3MgcmlnaHRzaWRlLW1lbnUnKTtcbiAgfSk7XG4gICQoJy5yaWdodHNpZGUtbWVudV9fY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgJCgnLnJpZ2h0c2lkZS1tZW51JykuYWRkQ2xhc3MoJ3JpZ2h0c2lkZS1tZW51LS1jbG9zZScpO1xuICAgIGNvbnNvbGUubG9nKCdDbGljayBhZGRDbGFzcyByaWdodHNpZGUtbWVudScpO1xuICB9KTtcbn0pO1xuY29uc29sZS5sb2coJ0luaXQgcmlnaHRzaWRlLW1lbnUnKTsiLCIvL2ltcG9ydCAnQC9jb21wb25lbnRzL21lbnUnO1xuaW1wb3J0ICdAL2NvbXBvbmVudHMvcmlnaHRzaWRlLW1lbnUnO1xuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuJChmdW5jdGlvbiAoKSB7XG4gICQoJy5oZWFkZXJfX2J0bi1tZW51Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICQoJy5tZW51JykudG9nZ2xlQ2xhc3MoJ21lbnUtLW9wZW4nKTtcbiAgfSk7XG59KTtcbmNvbnNvbGUubG9nKCdPbiBidXJnZXJtZW51Jyk7IiwiaW1wb3J0ICdqcXVlcnktbWFzay1wbHVnaW4nO1xuXG5jbGFzcyBGaWVsZCB7XG4gIHN0YXRpYyBpbml0KCkge1xuICAgICQoJy5qcy1maWVsZF9faW5wdXRbbmFtZSo9ZW1haWxdJykubWFzaygnQScsIHtcbiAgICAgIHRyYW5zbGF0aW9uOiB7XG4gICAgICAgIEE6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvW1xcd0BcXC0uK10vLFxuICAgICAgICAgIHJlY3Vyc2l2ZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgJCgnLmpzLWZpZWxkX19pbnB1dFtuYW1lKj1uYW1lXScpLm1hc2soJ0EnLCB7XG4gICAgICB0cmFuc2xhdGlvbjoge1xuICAgICAgICBBOiB7XG4gICAgICAgICAgcGF0dGVybjogL1tcXHcrXS8sXG4gICAgICAgICAgcmVjdXJzaXZlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpZWxkOyIsImltcG9ydCBGaWVsZCBmcm9tICdAL2NvbXBvbmVudHMvZmllbGQvRmllbGQnO1xuJCgoKSA9PiB7XG4gIEZpZWxkLmluaXQoKTtcbn0pOyIsImltcG9ydCAnQC9jb21wb25lbnRzL2ZpZWxkJzsiLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5pbXBvcnQgbWl4aXR1cCBmcm9tICdtaXhpdHVwJztcbiQoZnVuY3Rpb24gKCkge1xuICAvLyBtaXhpdHVwIGdhbGxlcnlcbiAgdmFyIG1peGVyID0gbWl4aXR1cCgnLmdhbGxlcnlfX2lubmVyJywge1xuICAgIGxvYWQ6IHtcbiAgICAgIGZpbHRlcjogJy5saXZpbmcnXG4gICAgfVxuICB9KTtcbn0pO1xuY29uc29sZS5sb2coJ09uIGdhbGxlcnknKTsiLCJpbXBvcnQgJ2pxdWVyeS11aSc7IC8vINCf0L7QtNC60LvRjtGH0LXQvdC40LUg0YHQutGA0LjQv9GC0L7QsiBjb21wb25lbnRzXG5cbmltcG9ydCAnQC9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgJ0AvY29tcG9uZW50cy9mb290ZXInO1xuaW1wb3J0ICdAL2NvbXBvbmVudHMvYnJlYWRjcnVtYnMnO1xuaW1wb3J0ICdAL2NvbXBvbmVudHMvZ2FsbGVyeS1ibG9jayc7XG5pbXBvcnQgJy4vZ2FsbGVyeS5zY3NzJzsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///785\n")}},__webpack_module_cache__={},deferred;function __webpack_require__(e){var n=__webpack_module_cache__[e];if(void 0!==n)return n.exports;var c=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(c.exports,c,c.exports,__webpack_require__),c.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=(e,n,c,i)=>{if(!n){var u=1/0;for(r=0;r<deferred.length;r++){for(var[n,c,i]=deferred[r],_=!0,b=0;b<n.length;b++)(!1&i||u>=i)&&Object.keys(__webpack_require__.O).every((e=>__webpack_require__.O[e](n[b])))?n.splice(b--,1):(_=!1,i<u&&(u=i));if(_){deferred.splice(r--,1);var t=c();void 0!==t&&(e=t)}}return e}i=i||0;for(var r=deferred.length;r>0&&deferred[r-1][2]>i;r--)deferred[r]=deferred[r-1];deferred[r]=[n,c,i]},__webpack_require__.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(n,{a:n}),n},__webpack_require__.d=(e,n)=>{for(var c in n)__webpack_require__.o(n,c)&&!__webpack_require__.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:n[c]})},__webpack_require__.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={121:0};__webpack_require__.O.j=n=>0===e[n];var n=(n,c)=>{var i,u,[_,b,t]=c,r=0;if(_.some((n=>0!==e[n]))){for(i in b)__webpack_require__.o(b,i)&&(__webpack_require__.m[i]=b[i]);if(t)var a=t(__webpack_require__)}for(n&&n(c);r<_.length;r++)u=_[r],__webpack_require__.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return __webpack_require__.O(a)},c=self.webpackChunk=self.webpackChunk||[];c.forEach(n.bind(null,0)),c.push=n.bind(null,c.push.bind(c))})();var __webpack_exports__=__webpack_require__.O(void 0,[922,273],(()=>__webpack_require__(785)));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();