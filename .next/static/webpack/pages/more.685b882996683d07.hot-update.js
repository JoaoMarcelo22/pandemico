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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Nav2; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ButtonNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ButtonNav */ \"./src/components/ButtonNav/index.tsx\");\n/* harmony import */ var _Modais_ButtonModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Modais/ButtonModal */ \"./src/components/Modais/ButtonModal/index.tsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ \"./src/components/Nav2/styles.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst navigationLinks = [\n    {\n        name: \"In\\xedcio\",\n        href: \"/\"\n    },\n    {\n        name: \"S\\xe9ries\",\n        href: \"/series\"\n    },\n    {\n        name: \"Filmes\",\n        href: \"/movies\"\n    },\n    {\n        name: \"Animes\",\n        href: \"/animes\"\n    }\n];\nconst navigationIcons = [\n    {\n        src: \"/assets/lupa.png\"\n    },\n    {\n        src: \"/assets/login2.png\"\n    }\n];\nfunction Nav2() {\n    _s();\n    const dowm = (0,_mui_material__WEBPACK_IMPORTED_MODULE_6__.useMediaQuery)(\"(min-width:1000px)\");\n    const [open, isOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [open2, isOpen2] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const openModal = ()=>{\n        isOpen(!open);\n    };\n    const openModal2 = ()=>{\n        isOpen(!open);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.ContainerStart, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.Titulo, {\n                        children: \"Pand\\xeamico\"\n                    }, void 0, false, {\n                        fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.ContainerMenu, {\n                        children: [\n                            navigationLinks.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: item.href,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ButtonNav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        label: item.name\n                                    }, void 0, false, {\n                                        fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 21\n                                }, this)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"#\",\n                                children: open === false && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                    onClick: openModal2,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ButtonNav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        label: \"Saiba +\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 21\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 34\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modais_ButtonModal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                isOpen: open2\n                            }, void 0, false, {\n                                fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.ContainerEnd, {\n                children: [\n                    navigationIcons.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: dowm && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.LoginImg, {\n                                src: item.src\n                            }, void 0, false, {\n                                fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 34\n                            }, this)\n                        }, void 0, false)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.Container2, {\n                        children: open === false && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.Imagem, {\n                                src: \"/assets/menu-hamburger.png\",\n                                alt: \"Imagem menu\",\n                                onClick: openModal\n                            }, void 0, false, {\n                                fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 35\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, this);\n}\n_s(Nav2, \"cfZ1h7aycqG2FGCIuKBcnpUSXZo=\", false, function() {\n    return [\n        _mui_material__WEBPACK_IMPORTED_MODULE_6__.useMediaQuery\n    ];\n});\n_c = Nav2;\nvar _c;\n$RefreshReg$(_c, \"Nav2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXYyL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUFvRjtBQUN4RDtBQUNXO0FBQ0w7QUFDYztBQUVuQjtBQUc3QixNQUFNTyxrQkFBa0I7SUFDcEI7UUFBRUMsTUFBTTtRQUFVQyxNQUFNO0lBQUk7SUFDNUI7UUFBRUQsTUFBTTtRQUFVQyxNQUFNO0lBQVU7SUFDbEM7UUFBRUQsTUFBTTtRQUFVQyxNQUFNO0lBQVU7SUFDbEM7UUFBRUQsTUFBTTtRQUFVQyxNQUFNO0lBQVU7Q0FDckM7QUFDRCxNQUFNQyxrQkFBa0I7SUFDcEI7UUFBRUMsS0FBSztJQUFtQjtJQUMxQjtRQUFFQSxLQUFLO0lBQXFCO0NBQy9CO0FBRWMsU0FBU0MsT0FBTzs7SUFDM0IsTUFBTUMsT0FBT2IsNERBQWFBLENBQUM7SUFFM0IsTUFBTSxDQUFDYyxNQUFNQyxPQUFPLEdBQUdaLCtDQUFRQSxDQUFDLEtBQUs7SUFDckMsTUFBTSxDQUFDYSxPQUFPQyxRQUFRLEdBQUdkLCtDQUFRQSxDQUFDLEtBQUs7SUFFdkMsTUFBTWUsWUFBWSxJQUFNO1FBQ3BCSCxPQUFPLENBQUNEO0lBQ1o7SUFDQSxNQUFNSyxhQUFhLElBQU07UUFDckJKLE9BQU8sQ0FBQ0Q7SUFDWjtJQUNBLHFCQUNJLDhEQUFDUiw4Q0FBVzs7MEJBQ1IsOERBQUNBLG1EQUFnQjs7a0NBQ2IsOERBQUNBLDJDQUFRO2tDQUFDOzs7Ozs7a0NBQ1YsOERBQUNBLGtEQUFlOzs0QkFDZkMsZ0JBQWdCaUIsR0FBRyxDQUFDLENBQUNDLHFCQUNsQiw4REFBQ3hCLGtEQUFJQTtvQ0FBQ1EsTUFBTWdCLEtBQUtoQixJQUFJOzhDQUNiLDRFQUFDTCxrREFBTUE7d0NBQUNzQixPQUFPRCxLQUFLakIsSUFBSTs7Ozs7Ozs7Ozs7MENBR3BDLDhEQUFDUCxrREFBSUE7Z0NBQUNRLE1BQU07MENBQ1hLLFNBQU8sS0FBSyxrQkFBSSw4REFBQ1IsMkNBQVE7b0NBQUNxQixTQUFTUjs4Q0FDaEMsNEVBQUNmLGtEQUFNQTt3Q0FBQ3NCLE9BQU07Ozs7Ozs7Ozs7Ozs7Ozs7MENBR2xCLDhEQUFDckIsMkRBQVdBO2dDQUFDVSxRQUFRQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUd6Qiw4REFBQ1YsaURBQWM7O29CQUNWSSxnQkFBZ0JjLEdBQUcsQ0FBQyxDQUFDQyxxQkFDbEI7c0NBQ0taLHNCQUFRLDhEQUFDUCw2Q0FBVTtnQ0FBQ0ssS0FBS2MsS0FBS2QsR0FBRzs7Ozs7OztrQ0FHMUMsOERBQUNMLCtDQUFZO2tDQUNWUSxTQUFPLEtBQUssa0JBQUcsOERBQUNSLDJDQUFRO3NDQUNuQiw0RUFBQ0EsMkNBQVE7Z0NBQUNLLEtBQUk7Z0NBQTZCcUIsS0FBSTtnQ0FBY0wsU0FBU1Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNOUYsQ0FBQztHQTVDdUJOOztRQUNQWix3REFBYUE7OztLQUROWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OYXYyL2luZGV4LnRzeD81NDE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpdmlkZXIsIExpc3QsIExpc3RJdGVtLCBMaXN0SXRlbVRleHQsIHVzZU1lZGlhUXVlcnkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9CdXR0b25OYXZcIjtcbmltcG9ydCBCdXR0b25Nb2RhbCBmcm9tIFwiLi4vTW9kYWlzL0J1dHRvbk1vZGFsXCI7XG5pbXBvcnQgTmF2TW9kYWwgZnJvbSBcIi4uL01vZGFpcy9OYXZNb2RhbFwiO1xuaW1wb3J0ICogYXMgUyBmcm9tIFwiLi9zdHlsZXNcIlxuXG5cbmNvbnN0IG5hdmlnYXRpb25MaW5rcyA9IFtcbiAgICB7IG5hbWU6IFwiSW7DrWNpb1wiLCBocmVmOiBcIi9cIiB9LFxuICAgIHsgbmFtZTogXCJTw6lyaWVzXCIsIGhyZWY6IFwiL3Nlcmllc1wiIH0sXG4gICAgeyBuYW1lOiBcIkZpbG1lc1wiLCBocmVmOiBcIi9tb3ZpZXNcIiB9LFxuICAgIHsgbmFtZTogXCJBbmltZXNcIiwgaHJlZjogXCIvYW5pbWVzXCIgfSxcbl1cbmNvbnN0IG5hdmlnYXRpb25JY29ucyA9IFtcbiAgICB7IHNyYzogXCIvYXNzZXRzL2x1cGEucG5nXCIgfSxcbiAgICB7IHNyYzogXCIvYXNzZXRzL2xvZ2luMi5wbmdcIiB9XG5dXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdjIoKSB7XG4gICAgY29uc3QgZG93bSA9IHVzZU1lZGlhUXVlcnkoJyhtaW4td2lkdGg6MTAwMHB4KScpO1xuXG4gICAgY29uc3QgW29wZW4sIGlzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW29wZW4yLCBpc09wZW4yXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IG9wZW5Nb2RhbCA9ICgpID0+IHtcbiAgICAgICAgaXNPcGVuKCFvcGVuKTtcbiAgICB9XG4gICAgY29uc3Qgb3Blbk1vZGFsMiA9ICgpID0+IHtcbiAgICAgICAgaXNPcGVuKCFvcGVuKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFMuQ29udGFpbmVyPlxuICAgICAgICAgICAgPFMuQ29udGFpbmVyU3RhcnQ+XG4gICAgICAgICAgICAgICAgPFMuVGl0dWxvPlBhbmTDqm1pY288L1MuVGl0dWxvPlxuICAgICAgICAgICAgICAgIDxTLkNvbnRhaW5lck1lbnU+XG4gICAgICAgICAgICAgICAge25hdmlnYXRpb25MaW5rcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aXRlbS5ocmVmfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGxhYmVsPXtpdGVtLm5hbWV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnIyd9PlxuICAgICAgICAgICAgICAgIHtvcGVuPT09ZmFsc2UgJiYgPFMuQnV0dG9uIG9uQ2xpY2s9e29wZW5Nb2RhbDJ9PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGxhYmVsPVwiU2FpYmEgK1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9TLkJ1dHRvbj59XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxCdXR0b25Nb2RhbCBpc09wZW49e29wZW4yfSAvPlxuICAgICAgICAgICAgICAgIDwvUy5Db250YWluZXJNZW51PlxuICAgICAgICAgICAgPC9TLkNvbnRhaW5lclN0YXJ0PlxuICAgICAgICAgICAgPFMuQ29udGFpbmVyRW5kPlxuICAgICAgICAgICAgICAgIHtuYXZpZ2F0aW9uSWNvbnMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZG93bSAmJiA8Uy5Mb2dpbkltZyBzcmM9e2l0ZW0uc3JjfSAvPn1cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPFMuQ29udGFpbmVyMj5cbiAgICAgICAgICAgICAgICAgIHtvcGVuPT09ZmFsc2UgJiY8Uy5CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Uy5JbWFnZW0gc3JjPVwiL2Fzc2V0cy9tZW51LWhhbWJ1cmdlci5wbmdcIiBhbHQ9XCJJbWFnZW0gbWVudVwiIG9uQ2xpY2s9e29wZW5Nb2RhbH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9TLkJ1dHRvbj59XG4gICAgICAgICAgICAgICAgPC9TLkNvbnRhaW5lcjI+XG4gICAgICAgICAgICA8L1MuQ29udGFpbmVyRW5kPlxuICAgICAgICA8L1MuQ29udGFpbmVyPlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlTWVkaWFRdWVyeSIsIkxpbmsiLCJSZWFjdCIsInVzZVN0YXRlIiwiQnV0dG9uIiwiQnV0dG9uTW9kYWwiLCJTIiwibmF2aWdhdGlvbkxpbmtzIiwibmFtZSIsImhyZWYiLCJuYXZpZ2F0aW9uSWNvbnMiLCJzcmMiLCJOYXYyIiwiZG93bSIsIm9wZW4iLCJpc09wZW4iLCJvcGVuMiIsImlzT3BlbjIiLCJvcGVuTW9kYWwiLCJvcGVuTW9kYWwyIiwiQ29udGFpbmVyIiwiQ29udGFpbmVyU3RhcnQiLCJUaXR1bG8iLCJDb250YWluZXJNZW51IiwibWFwIiwiaXRlbSIsImxhYmVsIiwib25DbGljayIsIkNvbnRhaW5lckVuZCIsIkxvZ2luSW1nIiwiQ29udGFpbmVyMiIsIkltYWdlbSIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Nav2/index.tsx\n"));

/***/ })

});