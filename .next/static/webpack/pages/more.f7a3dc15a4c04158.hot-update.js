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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Nav2; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ButtonNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ButtonNav */ \"./src/components/ButtonNav/index.tsx\");\n/* harmony import */ var _Modais_ButtonModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Modais/ButtonModal */ \"./src/components/Modais/ButtonModal/index.tsx\");\n/* harmony import */ var _Modais_NavModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Modais/NavModal */ \"./src/components/Modais/NavModal/index.tsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ \"./src/components/Nav2/styles.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst navigationLinks = [\n    {\n        name: \"In\\xedcio\",\n        href: \"/\"\n    },\n    {\n        name: \"S\\xe9ries\",\n        href: \"/series\"\n    },\n    {\n        name: \"Filmes\",\n        href: \"/movies\"\n    },\n    {\n        name: \"Animes\",\n        href: \"/animes\"\n    }\n];\nconst navigationIcons = [\n    {\n        src: \"/assets/lupa.png\"\n    },\n    {\n        src: \"/assets/login2.png\"\n    }\n];\nfunction Nav2() {\n    _s();\n    const dowm = (0,_mui_material__WEBPACK_IMPORTED_MODULE_7__.useMediaQuery)(\"(min-width:1000px)\");\n    const [open, isOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [open2, isOpen2] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const openModal = ()=>{\n        isOpen(!open);\n    };\n    const openModal2 = ()=>{\n        isOpen(!open);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_6__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_6__.ContainerStart, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_6__.Titulo, {\n                        children: \"Pand\\xeamico\"\n                    }, void 0, false, {\n                        fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_6__.ContainerMenu, {\n                        children: [\n                            navigationLinks.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: item.href,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ButtonNav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        label: item.name\n                                    }, void 0, false, {\n                                        fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 21\n                                }, this)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"#\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                    onClick: openModal2,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ButtonNav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        label: \"Saiba +\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 21\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modais_ButtonModal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                isOpen: open2\n                            }, void 0, false, {\n                                fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_6__.ContainerEnd, {\n                children: [\n                    navigationIcons.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: dowm && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_6__.LoginImg, {\n                                src: item.src\n                            }, void 0, false, {\n                                fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 34\n                            }, this)\n                        }, void 0, false)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_6__.Container2, {\n                        children: open === false && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_6__.Imagem, {\n                                src: \"/assets/menu-hamburger.png\",\n                                alt: \"Imagem menu\",\n                                onClick: openModal\n                            }, void 0, false, {\n                                fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 35\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modais_NavModal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                isOpen: open\n            }, void 0, false, {\n                fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, this);\n}\n_s(Nav2, \"cfZ1h7aycqG2FGCIuKBcnpUSXZo=\", false, function() {\n    return [\n        _mui_material__WEBPACK_IMPORTED_MODULE_7__.useMediaQuery\n    ];\n});\n_c = Nav2;\nvar _c;\n$RefreshReg$(_c, \"Nav2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXYyL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBb0Y7QUFDeEQ7QUFDVztBQUNMO0FBQ2M7QUFDTjtBQUNiO0FBRzdCLE1BQU1RLGtCQUFrQjtJQUNwQjtRQUFFQyxNQUFNO1FBQVVDLE1BQU07SUFBSTtJQUM1QjtRQUFFRCxNQUFNO1FBQVVDLE1BQU07SUFBVTtJQUNsQztRQUFFRCxNQUFNO1FBQVVDLE1BQU07SUFBVTtJQUNsQztRQUFFRCxNQUFNO1FBQVVDLE1BQU07SUFBVTtDQUNyQztBQUNELE1BQU1DLGtCQUFrQjtJQUNwQjtRQUFFQyxLQUFLO0lBQW1CO0lBQzFCO1FBQUVBLEtBQUs7SUFBcUI7Q0FDL0I7QUFFYyxTQUFTQyxPQUFPOztJQUMzQixNQUFNQyxPQUFPZCw0REFBYUEsQ0FBQztJQUUzQixNQUFNLENBQUNlLE1BQU1DLE9BQU8sR0FBR2IsK0NBQVFBLENBQUMsS0FBSztJQUNyQyxNQUFNLENBQUNjLE9BQU9DLFFBQVEsR0FBR2YsK0NBQVFBLENBQUMsS0FBSztJQUV2QyxNQUFNZ0IsWUFBWSxJQUFNO1FBQ3BCSCxPQUFPLENBQUNEO0lBQ1o7SUFDQSxNQUFNSyxhQUFhLElBQU07UUFDckJKLE9BQU8sQ0FBQ0Q7SUFDWjtJQUNBLHFCQUNJLDhEQUFDUiw4Q0FBVzs7MEJBQ1IsOERBQUNBLG1EQUFnQjs7a0NBQ2IsOERBQUNBLDJDQUFRO2tDQUFDOzs7Ozs7a0NBQ1YsOERBQUNBLGtEQUFlOzs0QkFDZkMsZ0JBQWdCaUIsR0FBRyxDQUFDLENBQUNDLHFCQUNsQiw4REFBQ3pCLGtEQUFJQTtvQ0FBQ1MsTUFBTWdCLEtBQUtoQixJQUFJOzhDQUNiLDRFQUFDTixrREFBTUE7d0NBQUN1QixPQUFPRCxLQUFLakIsSUFBSTs7Ozs7Ozs7Ozs7MENBR3BDLDhEQUFDUixrREFBSUE7Z0NBQUNTLE1BQU07MENBQ1IsNEVBQUNILDJDQUFRO29DQUFDcUIsU0FBU1I7OENBQ25CLDRFQUFDaEIsa0RBQU1BO3dDQUFDdUIsT0FBTTs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHbEIsOERBQUN0QiwyREFBV0E7Z0NBQUNXLFFBQVFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR3pCLDhEQUFDVixpREFBYzs7b0JBQ1ZJLGdCQUFnQmMsR0FBRyxDQUFDLENBQUNDLHFCQUNsQjtzQ0FDS1osc0JBQVEsOERBQUNQLDZDQUFVO2dDQUFDSyxLQUFLYyxLQUFLZCxHQUFHOzs7Ozs7O2tDQUcxQyw4REFBQ0wsK0NBQVk7a0NBQ1ZRLFNBQU8sS0FBSyxrQkFBRyw4REFBQ1IsMkNBQVE7c0NBQ25CLDRFQUFDQSwyQ0FBUTtnQ0FBQ0ssS0FBSTtnQ0FBNkJxQixLQUFJO2dDQUFjTCxTQUFTVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJbEYsOERBQUNiLHdEQUFRQTtnQkFBQ1UsUUFBUUQ7Ozs7Ozs7Ozs7OztBQUc5QixDQUFDO0dBN0N1QkY7O1FBQ1BiLHdEQUFhQTs7O0tBRE5hIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05hdjIvaW5kZXgudHN4PzU0MTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGl2aWRlciwgTGlzdCwgTGlzdEl0ZW0sIExpc3RJdGVtVGV4dCwgdXNlTWVkaWFRdWVyeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL0J1dHRvbk5hdlwiO1xuaW1wb3J0IEJ1dHRvbk1vZGFsIGZyb20gXCIuLi9Nb2RhaXMvQnV0dG9uTW9kYWxcIjtcbmltcG9ydCBOYXZNb2RhbCBmcm9tIFwiLi4vTW9kYWlzL05hdk1vZGFsXCI7XG5pbXBvcnQgKiBhcyBTIGZyb20gXCIuL3N0eWxlc1wiXG5cblxuY29uc3QgbmF2aWdhdGlvbkxpbmtzID0gW1xuICAgIHsgbmFtZTogXCJJbsOtY2lvXCIsIGhyZWY6IFwiL1wiIH0sXG4gICAgeyBuYW1lOiBcIlPDqXJpZXNcIiwgaHJlZjogXCIvc2VyaWVzXCIgfSxcbiAgICB7IG5hbWU6IFwiRmlsbWVzXCIsIGhyZWY6IFwiL21vdmllc1wiIH0sXG4gICAgeyBuYW1lOiBcIkFuaW1lc1wiLCBocmVmOiBcIi9hbmltZXNcIiB9LFxuXVxuY29uc3QgbmF2aWdhdGlvbkljb25zID0gW1xuICAgIHsgc3JjOiBcIi9hc3NldHMvbHVwYS5wbmdcIiB9LFxuICAgIHsgc3JjOiBcIi9hc3NldHMvbG9naW4yLnBuZ1wiIH1cbl1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2MigpIHtcbiAgICBjb25zdCBkb3dtID0gdXNlTWVkaWFRdWVyeSgnKG1pbi13aWR0aDoxMDAwcHgpJyk7XG5cbiAgICBjb25zdCBbb3BlbiwgaXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbb3BlbjIsIGlzT3BlbjJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3Qgb3Blbk1vZGFsID0gKCkgPT4ge1xuICAgICAgICBpc09wZW4oIW9wZW4pO1xuICAgIH1cbiAgICBjb25zdCBvcGVuTW9kYWwyID0gKCkgPT4ge1xuICAgICAgICBpc09wZW4oIW9wZW4pO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8Uy5Db250YWluZXI+XG4gICAgICAgICAgICA8Uy5Db250YWluZXJTdGFydD5cbiAgICAgICAgICAgICAgICA8Uy5UaXR1bG8+UGFuZMOqbWljbzwvUy5UaXR1bG8+XG4gICAgICAgICAgICAgICAgPFMuQ29udGFpbmVyTWVudT5cbiAgICAgICAgICAgICAgICB7bmF2aWdhdGlvbkxpbmtzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtpdGVtLmhyZWZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gbGFiZWw9e2l0ZW0ubmFtZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycjJ30+XG4gICAgICAgICAgICAgICAgICAgIDxTLkJ1dHRvbiBvbkNsaWNrPXtvcGVuTW9kYWwyfT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBsYWJlbD1cIlNhaWJhICtcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvUy5CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxCdXR0b25Nb2RhbCBpc09wZW49e29wZW4yfSAvPlxuICAgICAgICAgICAgICAgIDwvUy5Db250YWluZXJNZW51PlxuICAgICAgICAgICAgPC9TLkNvbnRhaW5lclN0YXJ0PlxuICAgICAgICAgICAgPFMuQ29udGFpbmVyRW5kPlxuICAgICAgICAgICAgICAgIHtuYXZpZ2F0aW9uSWNvbnMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZG93bSAmJiA8Uy5Mb2dpbkltZyBzcmM9e2l0ZW0uc3JjfSAvPn1cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPFMuQ29udGFpbmVyMj5cbiAgICAgICAgICAgICAgICAgIHtvcGVuPT09ZmFsc2UgJiY8Uy5CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Uy5JbWFnZW0gc3JjPVwiL2Fzc2V0cy9tZW51LWhhbWJ1cmdlci5wbmdcIiBhbHQ9XCJJbWFnZW0gbWVudVwiIG9uQ2xpY2s9e29wZW5Nb2RhbH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9TLkJ1dHRvbj59XG4gICAgICAgICAgICAgICAgPC9TLkNvbnRhaW5lcjI+XG4gICAgICAgICAgICA8L1MuQ29udGFpbmVyRW5kPlxuICAgICAgICAgICAgPE5hdk1vZGFsIGlzT3Blbj17b3Blbn0gLz5cbiAgICAgICAgPC9TLkNvbnRhaW5lcj5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZU1lZGlhUXVlcnkiLCJMaW5rIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkJ1dHRvbk1vZGFsIiwiTmF2TW9kYWwiLCJTIiwibmF2aWdhdGlvbkxpbmtzIiwibmFtZSIsImhyZWYiLCJuYXZpZ2F0aW9uSWNvbnMiLCJzcmMiLCJOYXYyIiwiZG93bSIsIm9wZW4iLCJpc09wZW4iLCJvcGVuMiIsImlzT3BlbjIiLCJvcGVuTW9kYWwiLCJvcGVuTW9kYWwyIiwiQ29udGFpbmVyIiwiQ29udGFpbmVyU3RhcnQiLCJUaXR1bG8iLCJDb250YWluZXJNZW51IiwibWFwIiwiaXRlbSIsImxhYmVsIiwib25DbGljayIsIkNvbnRhaW5lckVuZCIsIkxvZ2luSW1nIiwiQ29udGFpbmVyMiIsIkltYWdlbSIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Nav2/index.tsx\n"));

/***/ })

});