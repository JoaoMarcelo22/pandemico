/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ pageComponent),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/nextjs */ \"@sentry/nextjs\");\n/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sentry_nextjs__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/home/jubileu/Documentos/pandemico/src/pages/_app.tsx\",\n        lineNumber: 5,\n        columnNumber: 10\n    }, this);\n}\n\nvar origModule = /*#__PURE__*/Object.freeze({\n    __proto__: null,\n    'default': App\n});\n\n/*\n * This file is a template for the code which will be substituted when our webpack loader handles non-API files in the\n * `pages/` directory.\n *\n * We use `__SENTRY_WRAPPING_TARGET_FILE__.cjs` as a placeholder for the path to the file being wrapped. Because it's not a real package,\n * this causes both TS and ESLint to complain, hence the pragma comments below.\n */\n\nconst userPageModule = origModule ;\n\nconst pageComponent = userPageModule.default;\n\nconst origGetInitialProps = pageComponent.getInitialProps;\nconst origGetStaticProps = userPageModule.getStaticProps;\nconst origGetServerSideProps = userPageModule.getServerSideProps;\n\nconst getInitialPropsWrappers = {\n  '/_app': _sentry_nextjs__WEBPACK_IMPORTED_MODULE_2__.wrapAppGetInitialPropsWithSentry,\n  '/_document': _sentry_nextjs__WEBPACK_IMPORTED_MODULE_2__.wrapDocumentGetInitialPropsWithSentry,\n  '/_error': _sentry_nextjs__WEBPACK_IMPORTED_MODULE_2__.wrapErrorGetInitialPropsWithSentry,\n};\n\nconst getInitialPropsWrapper = getInitialPropsWrappers['/_app'] || _sentry_nextjs__WEBPACK_IMPORTED_MODULE_2__.wrapGetInitialPropsWithSentry;\n\nif (typeof origGetInitialProps === 'function') {\n  pageComponent.getInitialProps = getInitialPropsWrapper(origGetInitialProps) ;\n}\n\nconst getStaticProps =\n  typeof origGetStaticProps === 'function'\n    ? _sentry_nextjs__WEBPACK_IMPORTED_MODULE_2__.wrapGetStaticPropsWithSentry(origGetStaticProps, '/_app')\n    : undefined;\nconst getServerSideProps =\n  typeof origGetServerSideProps === 'function'\n    ? _sentry_nextjs__WEBPACK_IMPORTED_MODULE_2__.wrapGetServerSidePropsWithSentry(origGetServerSideProps, '/_app')\n    : undefined;\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUdlLFNBQVNBLEdBQUksR0FBRUMsWUFBV0MsU0FBQUEsR0FBcUIsRUFBRTtBQUM5RCx5QkFBT0MsNkRBQUNGLENBQUFBLFNBQUFBLEVBQUFBO0FBQVcsV0FBR0MsU0FBUzs7Ozs7O0FBQ2pDOzs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sY0FBYyxHQUFHLFVBQVUsRUFBRTtBQUNuQztBQUNLLE1BQUMsYUFBYSxHQUFHLGNBQWMsQ0FBQyxRQUFRO0FBQzdDO0FBQ0EsTUFBTSxtQkFBbUIsR0FBRyxhQUFhLENBQUMsZUFBZSxDQUFDO0FBQzFELE1BQU0sa0JBQWtCLEdBQUcsY0FBYyxDQUFDLGNBQWMsQ0FBQztBQUN6RCxNQUFNLHNCQUFzQixHQUFHLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQztBQUNqRTtBQUNBLE1BQU0sdUJBQXVCLEdBQUc7QUFDaEMsRUFBRSxPQUFPLEVBQUUsNEVBQXVDO0FBQ2xELEVBQUUsWUFBWSxFQUFFLGlGQUE0QztBQUM1RCxFQUFFLFNBQVMsRUFBRSw4RUFBeUM7QUFDdEQsQ0FBQyxDQUFDO0FBQ0Y7QUFDQSxNQUFNLHNCQUFzQixHQUFHLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxJQUFJLHlFQUFvQyxDQUFDO0FBQ3hHO0FBQ0EsSUFBSSxPQUFPLG1CQUFtQixLQUFLLFVBQVUsRUFBRTtBQUMvQyxFQUFFLGFBQWEsQ0FBQyxlQUFlLEdBQUcsc0JBQXNCLENBQUMsbUJBQW1CLENBQUMsRUFBRTtBQUMvRSxDQUFDO0FBQ0Q7QUFDSyxNQUFDLGNBQWM7QUFDcEIsRUFBRSxPQUFPLGtCQUFrQixLQUFLLFVBQVU7QUFDMUMsTUFBTSx3RUFBbUMsQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLENBQUM7QUFDdEUsTUFBTSxVQUFVO0FBQ1gsTUFBQyxrQkFBa0I7QUFDeEIsRUFBRSxPQUFPLHNCQUFzQixLQUFLLFVBQVU7QUFDOUMsTUFBTSw0RUFBdUMsQ0FBQyxzQkFBc0IsRUFBRSxPQUFPLENBQUM7QUFDOUUsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3BhbmRlbWljby9zcmMvcGFnZXMvX2FwcC50c3g/NzkzYSIsIndlYnBhY2s6Ly9wYW5kZW1pY28vc2VudHJ5LXdyYXBwZXItbW9kdWxlPzZmOTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG59XG4iLCJpbXBvcnQgKiBhcyBvcmlnTW9kdWxlIGZyb20gJ19fU0VOVFJZX1dSQVBQSU5HX1RBUkdFVF9GSUxFX18uY2pzJztcbmV4cG9ydCAqIGZyb20gJ19fU0VOVFJZX1dSQVBQSU5HX1RBUkdFVF9GSUxFX18uY2pzJztcbmltcG9ydCAqIGFzIFNlbnRyeSBmcm9tICdAc2VudHJ5L25leHRqcyc7XG5cbi8qXG4gKiBUaGlzIGZpbGUgaXMgYSB0ZW1wbGF0ZSBmb3IgdGhlIGNvZGUgd2hpY2ggd2lsbCBiZSBzdWJzdGl0dXRlZCB3aGVuIG91ciB3ZWJwYWNrIGxvYWRlciBoYW5kbGVzIG5vbi1BUEkgZmlsZXMgaW4gdGhlXG4gKiBgcGFnZXMvYCBkaXJlY3RvcnkuXG4gKlxuICogV2UgdXNlIGBfX1NFTlRSWV9XUkFQUElOR19UQVJHRVRfRklMRV9fLmNqc2AgYXMgYSBwbGFjZWhvbGRlciBmb3IgdGhlIHBhdGggdG8gdGhlIGZpbGUgYmVpbmcgd3JhcHBlZC4gQmVjYXVzZSBpdCdzIG5vdCBhIHJlYWwgcGFja2FnZSxcbiAqIHRoaXMgY2F1c2VzIGJvdGggVFMgYW5kIEVTTGludCB0byBjb21wbGFpbiwgaGVuY2UgdGhlIHByYWdtYSBjb21tZW50cyBiZWxvdy5cbiAqL1xuXG5jb25zdCB1c2VyUGFnZU1vZHVsZSA9IG9yaWdNb2R1bGUgO1xuXG5jb25zdCBwYWdlQ29tcG9uZW50ID0gdXNlclBhZ2VNb2R1bGUuZGVmYXVsdDtcblxuY29uc3Qgb3JpZ0dldEluaXRpYWxQcm9wcyA9IHBhZ2VDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuY29uc3Qgb3JpZ0dldFN0YXRpY1Byb3BzID0gdXNlclBhZ2VNb2R1bGUuZ2V0U3RhdGljUHJvcHM7XG5jb25zdCBvcmlnR2V0U2VydmVyU2lkZVByb3BzID0gdXNlclBhZ2VNb2R1bGUuZ2V0U2VydmVyU2lkZVByb3BzO1xuXG5jb25zdCBnZXRJbml0aWFsUHJvcHNXcmFwcGVycyA9IHtcbiAgJy9fYXBwJzogU2VudHJ5LndyYXBBcHBHZXRJbml0aWFsUHJvcHNXaXRoU2VudHJ5LFxuICAnL19kb2N1bWVudCc6IFNlbnRyeS53cmFwRG9jdW1lbnRHZXRJbml0aWFsUHJvcHNXaXRoU2VudHJ5LFxuICAnL19lcnJvcic6IFNlbnRyeS53cmFwRXJyb3JHZXRJbml0aWFsUHJvcHNXaXRoU2VudHJ5LFxufTtcblxuY29uc3QgZ2V0SW5pdGlhbFByb3BzV3JhcHBlciA9IGdldEluaXRpYWxQcm9wc1dyYXBwZXJzWycvX2FwcCddIHx8IFNlbnRyeS53cmFwR2V0SW5pdGlhbFByb3BzV2l0aFNlbnRyeTtcblxuaWYgKHR5cGVvZiBvcmlnR2V0SW5pdGlhbFByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gIHBhZ2VDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzID0gZ2V0SW5pdGlhbFByb3BzV3JhcHBlcihvcmlnR2V0SW5pdGlhbFByb3BzKSA7XG59XG5cbmNvbnN0IGdldFN0YXRpY1Byb3BzID1cbiAgdHlwZW9mIG9yaWdHZXRTdGF0aWNQcm9wcyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gU2VudHJ5LndyYXBHZXRTdGF0aWNQcm9wc1dpdGhTZW50cnkob3JpZ0dldFN0YXRpY1Byb3BzLCAnL19hcHAnKVxuICAgIDogdW5kZWZpbmVkO1xuY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID1cbiAgdHlwZW9mIG9yaWdHZXRTZXJ2ZXJTaWRlUHJvcHMgPT09ICdmdW5jdGlvbidcbiAgICA/IFNlbnRyeS53cmFwR2V0U2VydmVyU2lkZVByb3BzV2l0aFNlbnRyeShvcmlnR2V0U2VydmVyU2lkZVByb3BzLCAnL19hcHAnKVxuICAgIDogdW5kZWZpbmVkO1xuXG5leHBvcnQgeyBwYWdlQ29tcG9uZW50IGFzIGRlZmF1bHQsIGdldFNlcnZlclNpZGVQcm9wcywgZ2V0U3RhdGljUHJvcHMgfTtcbiJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJfanN4REVWIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./sentry.server.config.js":
/*!*********************************!*\
  !*** ./sentry.server.config.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/nextjs */ \"@sentry/nextjs\");\n/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__);\nvar _sentryCollisionFreeGlobalObject = \"undefined\" === \"undefined\" ? global : window;\n_sentryCollisionFreeGlobalObject[\"__sentryRewritesTunnelPath__\"] = undefined;\n_sentryCollisionFreeGlobalObject[\"SENTRY_RELEASE\"] = {\n    \"id\": \"development\"\n};\n_sentryCollisionFreeGlobalObject[\"__rewriteFramesDistDir__\"] = \".next\";\n// This file configures the initialization of Sentry on the server.\n// The config you add here will be used whenever the server handles a request.\n// https://docs.sentry.io/platforms/javascript/guides/nextjs/\n\nconst SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;\n_sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__.init({\n    dsn: SENTRY_DSN || \"https://7376f4b5e18348bfb1f10a362751df61@o4504595307757568.ingest.sentry.io/4504595350814720\",\n    // Adjust this value in production, or use tracesSampler for greater control\n    tracesSampleRate: 1.0\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZW50cnkuc2VydmVyLmNvbmZpZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFJQSxtQ0FBbUMsZ0JBQWtCLGNBQWNDLFNBQVNDLE1BQU07QUFDdEZGLGdDQUFnQyxDQUFDLCtCQUErQixHQUFHRztBQUNuRUgsZ0NBQWdDLENBQUMsaUJBQWlCLEdBQUc7SUFBQyxNQUFLO0FBQWE7QUFDeEVBLGdDQUFnQyxDQUFDLDJCQUEyQixHQUFHO0FBRS9ELG1FQUFtRTtBQUNuRSw4RUFBOEU7QUFDOUUsNkRBQTZEO0FBRXBCO0FBRXpDLE1BQU1LLGFBQWFDLFFBQVFDLEdBQUcsQ0FBQ0YsVUFBVSxJQUFJQyxRQUFRQyxHQUFHLENBQUNDLHNCQUFzQjtBQUUvRUosZ0RBQVcsQ0FBQztJQUNWTSxLQUFLTCxjQUFjO0lBQ25CLDRFQUE0RTtJQUM1RU0sa0JBQWtCO0FBS3BCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFuZGVtaWNvLy4vc2VudHJ5LnNlcnZlci5jb25maWcuanM/NzYzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX3NlbnRyeUNvbGxpc2lvbkZyZWVHbG9iYWxPYmplY3QgPSB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogd2luZG93O1xuX3NlbnRyeUNvbGxpc2lvbkZyZWVHbG9iYWxPYmplY3RbXCJfX3NlbnRyeVJld3JpdGVzVHVubmVsUGF0aF9fXCJdID0gdW5kZWZpbmVkO1xuX3NlbnRyeUNvbGxpc2lvbkZyZWVHbG9iYWxPYmplY3RbXCJTRU5UUllfUkVMRUFTRVwiXSA9IHtcImlkXCI6XCJkZXZlbG9wbWVudFwifTtcbl9zZW50cnlDb2xsaXNpb25GcmVlR2xvYmFsT2JqZWN0W1wiX19yZXdyaXRlRnJhbWVzRGlzdERpcl9fXCJdID0gXCIubmV4dFwiO1xuXG4vLyBUaGlzIGZpbGUgY29uZmlndXJlcyB0aGUgaW5pdGlhbGl6YXRpb24gb2YgU2VudHJ5IG9uIHRoZSBzZXJ2ZXIuXG4vLyBUaGUgY29uZmlnIHlvdSBhZGQgaGVyZSB3aWxsIGJlIHVzZWQgd2hlbmV2ZXIgdGhlIHNlcnZlciBoYW5kbGVzIGEgcmVxdWVzdC5cbi8vIGh0dHBzOi8vZG9jcy5zZW50cnkuaW8vcGxhdGZvcm1zL2phdmFzY3JpcHQvZ3VpZGVzL25leHRqcy9cblxuaW1wb3J0ICogYXMgU2VudHJ5IGZyb20gJ0BzZW50cnkvbmV4dGpzJztcblxuY29uc3QgU0VOVFJZX0RTTiA9IHByb2Nlc3MuZW52LlNFTlRSWV9EU04gfHwgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0VOVFJZX0RTTjtcblxuU2VudHJ5LmluaXQoe1xuICBkc246IFNFTlRSWV9EU04gfHwgJ2h0dHBzOi8vNzM3NmY0YjVlMTgzNDhiZmIxZjEwYTM2Mjc1MWRmNjFAbzQ1MDQ1OTUzMDc3NTc1NjguaW5nZXN0LnNlbnRyeS5pby80NTA0NTk1MzUwODE0NzIwJyxcbiAgLy8gQWRqdXN0IHRoaXMgdmFsdWUgaW4gcHJvZHVjdGlvbiwgb3IgdXNlIHRyYWNlc1NhbXBsZXIgZm9yIGdyZWF0ZXIgY29udHJvbFxuICB0cmFjZXNTYW1wbGVSYXRlOiAxLjAsXG4gIC8vIC4uLlxuICAvLyBOb3RlOiBpZiB5b3Ugd2FudCB0byBvdmVycmlkZSB0aGUgYXV0b21hdGljIHJlbGVhc2UgdmFsdWUsIGRvIG5vdCBzZXQgYVxuICAvLyBgcmVsZWFzZWAgdmFsdWUgaGVyZSAtIHVzZSB0aGUgZW52aXJvbm1lbnQgdmFyaWFibGUgYFNFTlRSWV9SRUxFQVNFYCwgc29cbiAgLy8gdGhhdCBpdCB3aWxsIGFsc28gZ2V0IGF0dGFjaGVkIHRvIHlvdXIgc291cmNlIG1hcHNcbn0pO1xuIl0sIm5hbWVzIjpbIl9zZW50cnlDb2xsaXNpb25GcmVlR2xvYmFsT2JqZWN0IiwiZ2xvYmFsIiwid2luZG93IiwidW5kZWZpbmVkIiwiU2VudHJ5IiwiU0VOVFJZX0RTTiIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TRU5UUllfRFNOIiwiaW5pdCIsImRzbiIsInRyYWNlc1NhbXBsZVJhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sentry.server.config.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@sentry/nextjs":
/*!*********************************!*\
  !*** external "@sentry/nextjs" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@sentry/nextjs");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./sentry.server.config.js"), __webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();