"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/more",{

/***/ "./src/components/Nav2/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Nav2/index.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Nav2; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ButtonNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ButtonNav */ \"./src/components/ButtonNav/index.tsx\");\n/* harmony import */ var _Modais_NavModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Modais/NavModal */ \"./src/components/Modais/NavModal/index.tsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ \"./src/components/Nav2/styles.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst navigationLinks = [\n    {\n        name: \"In\\xedcio\",\n        href: \"/\"\n    },\n    {\n        name: \"S\\xe9ries\",\n        href: \"/series\"\n    },\n    {\n        name: \"Filmes\",\n        href: \"/movies\"\n    },\n    {\n        name: \"Animes\",\n        href: \"/animes\"\n    },\n    {\n        name: \"Saiba +\",\n        href: \"/more\"\n    }\n];\nconst navigationIcons = [\n    {\n        src: \"/assets/lupa.png\"\n    },\n    {\n        src: \"/assets/login2.png\"\n    }\n];\nfunction Nav2() {\n    _s();\n    const dowm = (0,_mui_material__WEBPACK_IMPORTED_MODULE_6__.useMediaQuery)(\"(min-width:1000px)\");\n    const [open, isOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const openModal = ()=>{\n        isOpen(!open);\n        console.log(open);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.ContainerStart, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.Titulo, {\n                        children: \"Pand\\xeamico\"\n                    }, void 0, false, {\n                        fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, this),\n                    navigationLinks.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: item.href,\n                            children: dowm && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ButtonNav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                label: item.name\n                            }, void 0, false, {\n                                fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 34\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.ContainerEnd, {\n                children: [\n                    navigationIcons.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: dowm && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.LoginImg, {\n                                src: item.src\n                            }, void 0, false, {\n                                fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 34\n                            }, this)\n                        }, void 0, false)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.Container2, {\n                        children: open === false && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.Imagem, {\n                                src: \"/assets/menu-hamburger.png\",\n                                alt: \"Imagem menu\",\n                                onClick: openModal\n                            }, void 0, false, {\n                                fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 35\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modais_NavModal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                isOpen: open\n            }, void 0, false, {\n                fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, this);\n}\n_s(Nav2, \"0wU4fsocGBXVh+g0cxVN866vEU0=\", false, function() {\n    return [\n        _mui_material__WEBPACK_IMPORTED_MODULE_6__.useMediaQuery\n    ];\n});\n_c = Nav2;\nvar _c;\n$RefreshReg$(_c, \"Nav2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXYyL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUFvRjtBQUN4RDtBQUNXO0FBRUw7QUFDUTtBQUNiO0FBRzdCLE1BQU1PLGtCQUFrQjtJQUNwQjtRQUFFQyxNQUFNO1FBQVVDLE1BQU07SUFBSTtJQUM1QjtRQUFFRCxNQUFNO1FBQVVDLE1BQU07SUFBVTtJQUNsQztRQUFFRCxNQUFNO1FBQVVDLE1BQU07SUFBVTtJQUNsQztRQUFFRCxNQUFNO1FBQVVDLE1BQU07SUFBVTtJQUNsQztRQUFFRCxNQUFNO1FBQVdDLE1BQU07SUFBUTtDQUNwQztBQUNELE1BQU1DLGtCQUFrQjtJQUNwQjtRQUFFQyxLQUFLO0lBQW1CO0lBQzFCO1FBQUVBLEtBQUs7SUFBcUI7Q0FDL0I7QUFFYyxTQUFTQyxPQUFPOztJQUMzQixNQUFNQyxPQUFPYiw0REFBYUEsQ0FBQztJQUUzQixNQUFNLENBQUNjLE1BQU1DLE9BQU8sR0FBR1osK0NBQVFBLENBQUMsS0FBSztJQUVyQyxNQUFNYSxZQUFZLElBQU07UUFDcEJELE9BQU8sQ0FBQ0Q7UUFDUkcsUUFBUUMsR0FBRyxDQUFDSjtJQUNoQjtJQUNBLHFCQUNJLDhEQUFDUiw4Q0FBVzs7MEJBQ1IsOERBQUNBLG1EQUFnQjs7a0NBQ2IsOERBQUNBLDJDQUFRO2tDQUFDOzs7Ozs7b0JBRVRDLGdCQUFnQmUsR0FBRyxDQUFDLENBQUNDLHFCQUNsQiw4REFBQ3RCLGtEQUFJQTs0QkFBQ1EsTUFBTWMsS0FBS2QsSUFBSTtzQ0FDaEJJLHNCQUFRLDhEQUFDVCxrREFBTUE7Z0NBQUNvQixPQUFPRCxLQUFLZixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFJN0MsOERBQUNGLGlEQUFjOztvQkFDVkksZ0JBQWdCWSxHQUFHLENBQUMsQ0FBQ0MscUJBQ2xCO3NDQUNLVixzQkFBUSw4REFBQ1AsNkNBQVU7Z0NBQUNLLEtBQUtZLEtBQUtaLEdBQUc7Ozs7Ozs7a0NBRzFDLDhEQUFDTCwrQ0FBWTtrQ0FDVlEsU0FBTyxLQUFLLGtCQUFHLDhEQUFDUiwyQ0FBUTtzQ0FDbkIsNEVBQUNBLDJDQUFRO2dDQUFDSyxLQUFJO2dDQUE2QmtCLEtBQUk7Z0NBQWNDLFNBQVNkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlsRiw4REFBQ1gsd0RBQVFBO2dCQUFDVSxRQUFRRDs7Ozs7Ozs7Ozs7O0FBRzlCLENBQUM7R0FuQ3VCRjs7UUFDUFosd0RBQWFBOzs7S0FETlkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2Mi9pbmRleC50c3g/NTQxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXZpZGVyLCBMaXN0LCBMaXN0SXRlbSwgTGlzdEl0ZW1UZXh0LCB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IEJ1dHRvbkhhbWJ1cmdlciBmcm9tIFwiLi4vQnV0dG9uSGFtYnVyZ2VyXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9CdXR0b25OYXZcIjtcbmltcG9ydCBOYXZNb2RhbCBmcm9tIFwiLi4vTW9kYWlzL05hdk1vZGFsXCI7XG5pbXBvcnQgKiBhcyBTIGZyb20gXCIuL3N0eWxlc1wiXG5cblxuY29uc3QgbmF2aWdhdGlvbkxpbmtzID0gW1xuICAgIHsgbmFtZTogXCJJbsOtY2lvXCIsIGhyZWY6IFwiL1wiIH0sXG4gICAgeyBuYW1lOiBcIlPDqXJpZXNcIiwgaHJlZjogXCIvc2VyaWVzXCIgfSxcbiAgICB7IG5hbWU6IFwiRmlsbWVzXCIsIGhyZWY6IFwiL21vdmllc1wiIH0sXG4gICAgeyBuYW1lOiBcIkFuaW1lc1wiLCBocmVmOiBcIi9hbmltZXNcIiB9LFxuICAgIHsgbmFtZTogXCJTYWliYSArXCIsIGhyZWY6IFwiL21vcmVcIiB9LFxuXVxuY29uc3QgbmF2aWdhdGlvbkljb25zID0gW1xuICAgIHsgc3JjOiBcIi9hc3NldHMvbHVwYS5wbmdcIiB9LFxuICAgIHsgc3JjOiBcIi9hc3NldHMvbG9naW4yLnBuZ1wiIH1cbl1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2MigpIHtcbiAgICBjb25zdCBkb3dtID0gdXNlTWVkaWFRdWVyeSgnKG1pbi13aWR0aDoxMDAwcHgpJyk7XG5cbiAgICBjb25zdCBbb3BlbiwgaXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IG9wZW5Nb2RhbCA9ICgpID0+IHtcbiAgICAgICAgaXNPcGVuKCFvcGVuKTtcbiAgICAgICAgY29uc29sZS5sb2cob3BlbilcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFMuQ29udGFpbmVyPlxuICAgICAgICAgICAgPFMuQ29udGFpbmVyU3RhcnQ+XG4gICAgICAgICAgICAgICAgPFMuVGl0dWxvPlBhbmTDqm1pY288L1MuVGl0dWxvPlxuXG4gICAgICAgICAgICAgICAge25hdmlnYXRpb25MaW5rcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aXRlbS5ocmVmfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtkb3dtICYmIDxCdXR0b24gbGFiZWw9e2l0ZW0ubmFtZX0gLz59XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvUy5Db250YWluZXJTdGFydD5cbiAgICAgICAgICAgIDxTLkNvbnRhaW5lckVuZD5cbiAgICAgICAgICAgICAgICB7bmF2aWdhdGlvbkljb25zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAge2Rvd20gJiYgPFMuTG9naW5JbWcgc3JjPXtpdGVtLnNyY30gLz59XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDxTLkNvbnRhaW5lcjI+XG4gICAgICAgICAgICAgICAgICB7b3Blbj09PWZhbHNlICYmPFMuQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFMuSW1hZ2VtIHNyYz1cIi9hc3NldHMvbWVudS1oYW1idXJnZXIucG5nXCIgYWx0PVwiSW1hZ2VtIG1lbnVcIiBvbkNsaWNrPXtvcGVuTW9kYWx9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvUy5CdXR0b24+fVxuICAgICAgICAgICAgICAgIDwvUy5Db250YWluZXIyPlxuICAgICAgICAgICAgPC9TLkNvbnRhaW5lckVuZD5cbiAgICAgICAgICAgIDxOYXZNb2RhbCBpc09wZW49e29wZW59Lz5cbiAgICAgICAgPC9TLkNvbnRhaW5lcj5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZU1lZGlhUXVlcnkiLCJMaW5rIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIk5hdk1vZGFsIiwiUyIsIm5hdmlnYXRpb25MaW5rcyIsIm5hbWUiLCJocmVmIiwibmF2aWdhdGlvbkljb25zIiwic3JjIiwiTmF2MiIsImRvd20iLCJvcGVuIiwiaXNPcGVuIiwib3Blbk1vZGFsIiwiY29uc29sZSIsImxvZyIsIkNvbnRhaW5lciIsIkNvbnRhaW5lclN0YXJ0IiwiVGl0dWxvIiwibWFwIiwiaXRlbSIsImxhYmVsIiwiQ29udGFpbmVyRW5kIiwiTG9naW5JbWciLCJDb250YWluZXIyIiwiSW1hZ2VtIiwiYWx0Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Nav2/index.tsx\n"));

/***/ })

});