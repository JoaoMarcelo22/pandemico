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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Nav2; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ButtonNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ButtonNav */ \"./src/components/ButtonNav/index.tsx\");\n/* harmony import */ var _Modais_ButtonModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Modais/ButtonModal */ \"./src/components/Modais/ButtonModal/index.tsx\");\n/* harmony import */ var _Modais_NavModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Modais/NavModal */ \"./src/components/Modais/NavModal/index.tsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ \"./src/components/Nav2/styles.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst navigationLinks = [\n    {\n        name: \"In\\xedcio\",\n        href: \"/\"\n    },\n    {\n        name: \"S\\xe9ries\",\n        href: \"/series\"\n    },\n    {\n        name: \"Filmes\",\n        href: \"/movies\"\n    },\n    {\n        name: \"Animes\",\n        href: \"/animes\"\n    }\n];\nconst navigationIcons = [\n    {\n        src: \"/assets/lupa.png\"\n    },\n    {\n        src: \"/assets/login2.png\"\n    }\n];\nfunction Nav2() {\n    _s();\n    const dowm = (0,_mui_material__WEBPACK_IMPORTED_MODULE_7__.useMediaQuery)(\"(min-width:1000px)\");\n    const [open, isOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [open2, isOpen2] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const openModal = ()=>{\n        isOpen(!open);\n        console.log(open);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_6__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_6__.ContainerStart, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_6__.Titulo, {\n                        children: \"Pand\\xeamico\"\n                    }, void 0, false, {\n                        fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, this),\n                    navigationLinks.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: item.href,\n                            children: dowm && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ButtonNav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                label: item.name\n                            }, void 0, false, {\n                                fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 34\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, this)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"#\",\n                        children: open === false && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ButtonNav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            label: \"Saiba +\"\n                        }, void 0, false, {\n                            fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 33\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modais_ButtonModal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        isOpen: open2\n                    }, void 0, false, {\n                        fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_6__.ContainerEnd, {\n                children: [\n                    navigationIcons.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: dowm && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_6__.LoginImg, {\n                                src: item.src\n                            }, void 0, false, {\n                                fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 34\n                            }, this)\n                        }, void 0, false)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_6__.Container2, {\n                        children: open === false && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_6__.Imagem, {\n                                src: \"/assets/menu-hamburger.png\",\n                                alt: \"Imagem menu\",\n                                onClick: openModal\n                            }, void 0, false, {\n                                fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 35\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modais_NavModal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                isOpen: open\n            }, void 0, false, {\n                fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jubileu/Documentos/pandemico/src/components/Nav2/index.tsx\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, this);\n}\n_s(Nav2, \"cfZ1h7aycqG2FGCIuKBcnpUSXZo=\", false, function() {\n    return [\n        _mui_material__WEBPACK_IMPORTED_MODULE_7__.useMediaQuery\n    ];\n});\n_c = Nav2;\nvar _c;\n$RefreshReg$(_c, \"Nav2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXYyL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBb0Y7QUFDeEQ7QUFDVztBQUNMO0FBQ2M7QUFDTjtBQUNiO0FBRzdCLE1BQU1RLGtCQUFrQjtJQUNwQjtRQUFFQyxNQUFNO1FBQVVDLE1BQU07SUFBSTtJQUM1QjtRQUFFRCxNQUFNO1FBQVVDLE1BQU07SUFBVTtJQUNsQztRQUFFRCxNQUFNO1FBQVVDLE1BQU07SUFBVTtJQUNsQztRQUFFRCxNQUFNO1FBQVVDLE1BQU07SUFBVTtDQUNyQztBQUNELE1BQU1DLGtCQUFrQjtJQUNwQjtRQUFFQyxLQUFLO0lBQW1CO0lBQzFCO1FBQUVBLEtBQUs7SUFBcUI7Q0FDL0I7QUFFYyxTQUFTQyxPQUFPOztJQUMzQixNQUFNQyxPQUFPZCw0REFBYUEsQ0FBQztJQUUzQixNQUFNLENBQUNlLE1BQU1DLE9BQU8sR0FBR2IsK0NBQVFBLENBQUMsS0FBSztJQUNyQyxNQUFNLENBQUNjLE9BQU9DLFFBQVEsR0FBR2YsK0NBQVFBLENBQUMsS0FBSztJQUV2QyxNQUFNZ0IsWUFBWSxJQUFNO1FBQ3BCSCxPQUFPLENBQUNEO1FBQ1JLLFFBQVFDLEdBQUcsQ0FBQ047SUFDaEI7SUFDQSxxQkFDSSw4REFBQ1IsOENBQVc7OzBCQUNSLDhEQUFDQSxtREFBZ0I7O2tDQUNiLDhEQUFDQSwyQ0FBUTtrQ0FBQzs7Ozs7O29CQUVUQyxnQkFBZ0JpQixHQUFHLENBQUMsQ0FBQ0MscUJBQ2xCLDhEQUFDekIsa0RBQUlBOzRCQUFDUyxNQUFNZ0IsS0FBS2hCLElBQUk7c0NBQ2hCSSxzQkFBUSw4REFBQ1Ysa0RBQU1BO2dDQUFDdUIsT0FBT0QsS0FBS2pCLElBQUk7Ozs7Ozs7Ozs7O2tDQUd6Qyw4REFBQ1Isa0RBQUlBO3dCQUFDUyxNQUFNO2tDQUNYSyxTQUFPLEtBQUssa0JBQUcsOERBQUNYLGtEQUFNQTs0QkFBQ3VCLE9BQU07Ozs7Ozs7Ozs7O2tDQUU5Qiw4REFBQ3RCLDJEQUFXQTt3QkFBQ1csUUFBUUM7Ozs7Ozs7Ozs7OzswQkFFekIsOERBQUNWLGlEQUFjOztvQkFDVkksZ0JBQWdCYyxHQUFHLENBQUMsQ0FBQ0MscUJBQ2xCO3NDQUNLWixzQkFBUSw4REFBQ1AsNkNBQVU7Z0NBQUNLLEtBQUtjLEtBQUtkLEdBQUc7Ozs7Ozs7a0NBRzFDLDhEQUFDTCwrQ0FBWTtrQ0FDVlEsU0FBTyxLQUFLLGtCQUFHLDhEQUFDUiwyQ0FBUTtzQ0FDbkIsNEVBQUNBLDJDQUFRO2dDQUFDSyxLQUFJO2dDQUE2Qm9CLEtBQUk7Z0NBQWNDLFNBQVNkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlsRiw4REFBQ2Isd0RBQVFBO2dCQUFDVSxRQUFRRDs7Ozs7Ozs7Ozs7O0FBRzlCLENBQUM7R0F4Q3VCRjs7UUFDUGIsd0RBQWFBOzs7S0FETmEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2Mi9pbmRleC50c3g/NTQxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXZpZGVyLCBMaXN0LCBMaXN0SXRlbSwgTGlzdEl0ZW1UZXh0LCB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vQnV0dG9uTmF2XCI7XG5pbXBvcnQgQnV0dG9uTW9kYWwgZnJvbSBcIi4uL01vZGFpcy9CdXR0b25Nb2RhbFwiO1xuaW1wb3J0IE5hdk1vZGFsIGZyb20gXCIuLi9Nb2RhaXMvTmF2TW9kYWxcIjtcbmltcG9ydCAqIGFzIFMgZnJvbSBcIi4vc3R5bGVzXCJcblxuXG5jb25zdCBuYXZpZ2F0aW9uTGlua3MgPSBbXG4gICAgeyBuYW1lOiBcIkluw61jaW9cIiwgaHJlZjogXCIvXCIgfSxcbiAgICB7IG5hbWU6IFwiU8Opcmllc1wiLCBocmVmOiBcIi9zZXJpZXNcIiB9LFxuICAgIHsgbmFtZTogXCJGaWxtZXNcIiwgaHJlZjogXCIvbW92aWVzXCIgfSxcbiAgICB7IG5hbWU6IFwiQW5pbWVzXCIsIGhyZWY6IFwiL2FuaW1lc1wiIH0sXG5dXG5jb25zdCBuYXZpZ2F0aW9uSWNvbnMgPSBbXG4gICAgeyBzcmM6IFwiL2Fzc2V0cy9sdXBhLnBuZ1wiIH0sXG4gICAgeyBzcmM6IFwiL2Fzc2V0cy9sb2dpbjIucG5nXCIgfVxuXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXYyKCkge1xuICAgIGNvbnN0IGRvd20gPSB1c2VNZWRpYVF1ZXJ5KCcobWluLXdpZHRoOjEwMDBweCknKTtcblxuICAgIGNvbnN0IFtvcGVuLCBpc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtvcGVuMiwgaXNPcGVuMl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBvcGVuTW9kYWwgPSAoKSA9PiB7XG4gICAgICAgIGlzT3Blbighb3Blbik7XG4gICAgICAgIGNvbnNvbGUubG9nKG9wZW4pXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxTLkNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxTLkNvbnRhaW5lclN0YXJ0PlxuICAgICAgICAgICAgICAgIDxTLlRpdHVsbz5QYW5kw6ptaWNvPC9TLlRpdHVsbz5cblxuICAgICAgICAgICAgICAgIHtuYXZpZ2F0aW9uTGlua3MubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZG93bSAmJiA8QnV0dG9uIGxhYmVsPXtpdGVtLm5hbWV9IC8+fVxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17JyMnfT5cbiAgICAgICAgICAgICAgICB7b3Blbj09PWZhbHNlICYmPEJ1dHRvbiBsYWJlbD1cIlNhaWJhICtcIiAvPn1cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbk1vZGFsIGlzT3Blbj17b3BlbjJ9IC8+XG4gICAgICAgICAgICA8L1MuQ29udGFpbmVyU3RhcnQ+XG4gICAgICAgICAgICA8Uy5Db250YWluZXJFbmQ+XG4gICAgICAgICAgICAgICAge25hdmlnYXRpb25JY29ucy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtkb3dtICYmIDxTLkxvZ2luSW1nIHNyYz17aXRlbS5zcmN9IC8+fVxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8Uy5Db250YWluZXIyPlxuICAgICAgICAgICAgICAgICAge29wZW49PT1mYWxzZSAmJjxTLkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTLkltYWdlbSBzcmM9XCIvYXNzZXRzL21lbnUtaGFtYnVyZ2VyLnBuZ1wiIGFsdD1cIkltYWdlbSBtZW51XCIgb25DbGljaz17b3Blbk1vZGFsfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1MuQnV0dG9uPn1cbiAgICAgICAgICAgICAgICA8L1MuQ29udGFpbmVyMj5cbiAgICAgICAgICAgIDwvUy5Db250YWluZXJFbmQ+XG4gICAgICAgICAgICA8TmF2TW9kYWwgaXNPcGVuPXtvcGVufSAvPlxuICAgICAgICA8L1MuQ29udGFpbmVyPlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlTWVkaWFRdWVyeSIsIkxpbmsiLCJSZWFjdCIsInVzZVN0YXRlIiwiQnV0dG9uIiwiQnV0dG9uTW9kYWwiLCJOYXZNb2RhbCIsIlMiLCJuYXZpZ2F0aW9uTGlua3MiLCJuYW1lIiwiaHJlZiIsIm5hdmlnYXRpb25JY29ucyIsInNyYyIsIk5hdjIiLCJkb3dtIiwib3BlbiIsImlzT3BlbiIsIm9wZW4yIiwiaXNPcGVuMiIsIm9wZW5Nb2RhbCIsImNvbnNvbGUiLCJsb2ciLCJDb250YWluZXIiLCJDb250YWluZXJTdGFydCIsIlRpdHVsbyIsIm1hcCIsIml0ZW0iLCJsYWJlbCIsIkNvbnRhaW5lckVuZCIsIkxvZ2luSW1nIiwiQ29udGFpbmVyMiIsIkltYWdlbSIsImFsdCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Nav2/index.tsx\n"));

/***/ })

});