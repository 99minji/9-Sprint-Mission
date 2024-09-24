"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/BestArticleList.js":
/*!***************************************!*\
  !*** ./components/BestArticleList.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BestArticleList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_dateUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dateUtils */ \"./utils/dateUtils.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _AllArticleList_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AllArticleList.module.scss */ \"./components/AllArticleList.module.scss\");\n/* harmony import */ var _AllArticleList_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_AllArticleList_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction BestArticleList(param) {\n    let { bestArticles } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"\".concat((_AllArticleList_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"article-wrap\"]), \" \").concat((_AllArticleList_module_scss__WEBPACK_IMPORTED_MODULE_3___default().best)),\n            children: bestArticles && bestArticles.map((article)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: (_AllArticleList_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"article-list\"]),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_AllArticleList_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"badge-best\"]),\n                            children: \"Best\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\components\\\\BestArticleList.js\",\n                            lineNumber: 12,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_AllArticleList_module_scss__WEBPACK_IMPORTED_MODULE_3___default().content),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/boards/\".concat(bestArticles.id),\n                                        children: article.content\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\components\\\\BestArticleList.js\",\n                                        lineNumber: 15,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\components\\\\BestArticleList.js\",\n                                    lineNumber: 14,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_AllArticleList_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"profile-img\"]),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: article.image,\n                                        width: 48\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\components\\\\BestArticleList.js\",\n                                        lineNumber: 20,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\components\\\\BestArticleList.js\",\n                                    lineNumber: 19,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\components\\\\BestArticleList.js\",\n                            lineNumber: 13,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_AllArticleList_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"user-info\"]),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: (_AllArticleList_module_scss__WEBPACK_IMPORTED_MODULE_3___default().nickname),\n                                            children: article.writer.nickname\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\components\\\\BestArticleList.js\",\n                                            lineNumber: 25,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: (_AllArticleList_module_scss__WEBPACK_IMPORTED_MODULE_3___default().like),\n                                            children: article.likeCount\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\components\\\\BestArticleList.js\",\n                                            lineNumber: 28,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\components\\\\BestArticleList.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_AllArticleList_module_scss__WEBPACK_IMPORTED_MODULE_3___default().date),\n                                    children: (0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_1__.formatDate)(article.createdAt)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\components\\\\BestArticleList.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\components\\\\BestArticleList.js\",\n                            lineNumber: 23,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, article.id, true, {\n                    fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\components\\\\BestArticleList.js\",\n                    lineNumber: 11,\n                    columnNumber: 13\n                }, this))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\components\\\\BestArticleList.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = BestArticleList;\nvar _c;\n$RefreshReg$(_c, \"BestArticleList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jlc3RBcnRpY2xlTGlzdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDbkI7QUFDcUI7QUFFbkMsU0FBU0csZ0JBQWdCLEtBQWdCO1FBQWhCLEVBQUVDLFlBQVksRUFBRSxHQUFoQjtJQUN0QyxxQkFDRTtrQkFDRSw0RUFBQ0M7WUFBR0MsV0FBVyxHQUE2QkosT0FBMUJBLG9GQUFzQixFQUFDLEtBQWtCLE9BQWZBLHlFQUFjO3NCQUN2REUsZ0JBQ0NBLGFBQWFHLEdBQUcsQ0FBQyxDQUFDQyx3QkFDaEIsOERBQUNDO29CQUFHSCxXQUFXSixvRkFBc0I7O3NDQUNuQyw4REFBQ1E7NEJBQUtKLFdBQVdKLGtGQUFvQjtzQ0FBRTs7Ozs7O3NDQUN2Qyw4REFBQ1M7OzhDQUNDLDhEQUFDQTtvQ0FBSUwsV0FBV0osNEVBQWM7OENBQzVCLDRFQUFDRCxrREFBSUE7d0NBQUNZLE1BQU0sV0FBMkIsT0FBaEJULGFBQWFVLEVBQUU7a0RBQ25DTixRQUFRSSxPQUFPOzs7Ozs7Ozs7Ozs4Q0FHcEIsOERBQUNEO29DQUFJTCxXQUFXSixtRkFBcUI7OENBQ25DLDRFQUFDYTt3Q0FBSUMsS0FBS1IsUUFBUVMsS0FBSzt3Q0FBRUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBR3BDLDhEQUFDUDs7OENBQ0MsOERBQUNBO29DQUFJTCxXQUFXSixpRkFBbUI7O3NEQUNqQyw4REFBQ1E7NENBQUtKLFdBQVdKLDZFQUFlO3NEQUM3Qk0sUUFBUVksTUFBTSxDQUFDRCxRQUFROzs7Ozs7c0RBRTFCLDhEQUFDVDs0Q0FBS0osV0FBV0oseUVBQVc7c0RBQUdNLFFBQVFjLFNBQVM7Ozs7Ozs7Ozs7Ozs4Q0FFbEQsOERBQUNYO29DQUFJTCxXQUFXSix5RUFBVzs4Q0FDeEJGLDREQUFVQSxDQUFDUSxRQUFRZ0IsU0FBUzs7Ozs7Ozs7Ozs7OzttQkFwQlNoQixRQUFRTSxFQUFFOzs7Ozs7Ozs7OztBQTRCbEU7S0FsQ3dCWCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Jlc3RBcnRpY2xlTGlzdC5qcz8xZTM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tIFwiLi4vdXRpbHMvZGF0ZVV0aWxzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9BbGxBcnRpY2xlTGlzdC5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmVzdEFydGljbGVMaXN0KHsgYmVzdEFydGljbGVzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHVsIGNsYXNzTmFtZT17YCR7c3R5bGVzW1wiYXJ0aWNsZS13cmFwXCJdfSAke3N0eWxlc1tcImJlc3RcIl19YH0+XHJcbiAgICAgICAge2Jlc3RBcnRpY2xlcyAmJlxyXG4gICAgICAgICAgYmVzdEFydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT4gKFxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXNbXCJhcnRpY2xlLWxpc3RcIl19IGtleT17YXJ0aWNsZS5pZH0+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXNbXCJiYWRnZS1iZXN0XCJdfT5CZXN0PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2JvYXJkcy8ke2Jlc3RBcnRpY2xlcy5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9maWxlLWltZ1wiXX0+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthcnRpY2xlLmltYWdlfSB3aWR0aD17NDh9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInVzZXItaW5mb1wiXX0+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm5pY2tuYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZS53cml0ZXIubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlrZX0+e2FydGljbGUubGlrZUNvdW50fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlfT5cclxuICAgICAgICAgICAgICAgICAge2Zvcm1hdERhdGUoYXJ0aWNsZS5jcmVhdGVkQXQpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImZvcm1hdERhdGUiLCJMaW5rIiwic3R5bGVzIiwiQmVzdEFydGljbGVMaXN0IiwiYmVzdEFydGljbGVzIiwidWwiLCJjbGFzc05hbWUiLCJtYXAiLCJhcnRpY2xlIiwibGkiLCJzcGFuIiwiZGl2IiwiY29udGVudCIsImhyZWYiLCJpZCIsImltZyIsInNyYyIsImltYWdlIiwid2lkdGgiLCJuaWNrbmFtZSIsIndyaXRlciIsImxpa2UiLCJsaWtlQ291bnQiLCJkYXRlIiwiY3JlYXRlZEF0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/BestArticleList.js\n"));

/***/ })

});