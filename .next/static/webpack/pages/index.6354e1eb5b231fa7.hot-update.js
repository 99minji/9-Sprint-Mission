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

/***/ "./public/assets/icon/ic_badge_best.png":
/*!**********************************************!*\
  !*** ./public/assets/icon/ic_badge_best.png ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\"src\":\"/_next/static/media/ic_badge_best.421b3ce7.png\",\"height\":60,\"width\":204,\"blurDataURL\":\"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_badge_best.421b3ce7.png&w=8&q=70\",\"blurWidth\":8,\"blurHeight\":2});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvYXNzZXRzL2ljb24vaWNfYmFkZ2VfYmVzdC5wbmciLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLENBQUMsNk1BQTZNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9hc3NldHMvaWNvbi9pY19iYWRnZV9iZXN0LnBuZz9mMzkzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9tZWRpYS9pY19iYWRnZV9iZXN0LjQyMWIzY2U3LnBuZ1wiLFwiaGVpZ2h0XCI6NjAsXCJ3aWR0aFwiOjIwNCxcImJsdXJEYXRhVVJMXCI6XCIvX25leHQvaW1hZ2U/dXJsPSUyRl9uZXh0JTJGc3RhdGljJTJGbWVkaWElMkZpY19iYWRnZV9iZXN0LjQyMWIzY2U3LnBuZyZ3PTgmcT03MFwiLFwiYmx1cldpZHRoXCI6OCxcImJsdXJIZWlnaHRcIjoyfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/assets/icon/ic_badge_best.png\n"));

/***/ }),

/***/ "./components/BestArticleList.js":
/*!***************************************!*\
  !*** ./components/BestArticleList.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BestArticleList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_dateUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dateUtils */ \"./utils/dateUtils.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _AllArticleList_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AllArticleList.module.scss */ \"./components/AllArticleList.module.scss\");\n/* harmony import */ var _AllArticleList_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_AllArticleList_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_assets_icon_ic_badge_best_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/public/assets/icon/ic_badge_best.png */ \"./public/assets/icon/ic_badge_best.png\");\n\n\n\n\n\n\nfunction BestArticleList(param) {\n    let { bestArticles } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"\".concat((_AllArticleList_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"article-wrap\"]), \" \").concat((_AllArticleList_module_scss__WEBPACK_IMPORTED_MODULE_3___default().best)),\n            children: bestArticles && bestArticles.map((article)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: (_AllArticleList_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"article-list\"]),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_AllArticleList_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"badge-best\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\components\\\\BestArticleList.js\",\n                                lineNumber: 15,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\components\\\\BestArticleList.js\",\n                            lineNumber: 14,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_AllArticleList_module_scss__WEBPACK_IMPORTED_MODULE_3___default().content),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/boards/\".concat(bestArticles.id),\n                                        children: article.content\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\components\\\\BestArticleList.js\",\n                                        lineNumber: 19,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\components\\\\BestArticleList.js\",\n                                    lineNumber: 18,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_AllArticleList_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"profile-img\"]),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: article.image,\n                                        width: 48\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\components\\\\BestArticleList.js\",\n                                        lineNumber: 24,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\components\\\\BestArticleList.js\",\n                                    lineNumber: 23,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\components\\\\BestArticleList.js\",\n                            lineNumber: 17,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_AllArticleList_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"user-info\"]),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: (_AllArticleList_module_scss__WEBPACK_IMPORTED_MODULE_3___default().nickname),\n                                            children: article.writer.nickname\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\components\\\\BestArticleList.js\",\n                                            lineNumber: 29,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: (_AllArticleList_module_scss__WEBPACK_IMPORTED_MODULE_3___default().like),\n                                            children: article.likeCount\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\components\\\\BestArticleList.js\",\n                                            lineNumber: 32,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\components\\\\BestArticleList.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_AllArticleList_module_scss__WEBPACK_IMPORTED_MODULE_3___default().date),\n                                    children: (0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_1__.formatDate)(article.createdAt)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\components\\\\BestArticleList.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\components\\\\BestArticleList.js\",\n                            lineNumber: 27,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, article.id, true, {\n                    fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\components\\\\BestArticleList.js\",\n                    lineNumber: 13,\n                    columnNumber: 13\n                }, this))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\components\\\\BestArticleList.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = BestArticleList;\nvar _c;\n$RefreshReg$(_c, \"BestArticleList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jlc3RBcnRpY2xlTGlzdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDbkI7QUFDcUI7QUFDbkI7QUFDNEI7QUFFNUMsU0FBU0ssZ0JBQWdCLEtBQWdCO1FBQWhCLEVBQUVDLFlBQVksRUFBRSxHQUFoQjtJQUN0QyxxQkFDRTtrQkFDRSw0RUFBQ0M7WUFBR0MsV0FBVyxHQUE2Qk4sT0FBMUJBLG9GQUFzQixFQUFDLEtBQWtCLE9BQWZBLHlFQUFjO3NCQUN2REksZ0JBQ0NBLGFBQWFHLEdBQUcsQ0FBQyxDQUFDQyx3QkFDaEIsOERBQUNDO29CQUFHSCxXQUFXTixvRkFBc0I7O3NDQUNuQyw4REFBQ1U7NEJBQUtKLFdBQVdOLGtGQUFvQjtzQ0FDbkMsNEVBQUNDLG1EQUFLQTs7Ozs7Ozs7OztzQ0FFUiw4REFBQ1U7OzhDQUNDLDhEQUFDQTtvQ0FBSUwsV0FBV04sNEVBQWM7OENBQzVCLDRFQUFDRCxrREFBSUE7d0NBQUNjLE1BQU0sV0FBMkIsT0FBaEJULGFBQWFVLEVBQUU7a0RBQ25DTixRQUFRSSxPQUFPOzs7Ozs7Ozs7Ozs4Q0FHcEIsOERBQUNEO29DQUFJTCxXQUFXTixtRkFBcUI7OENBQ25DLDRFQUFDZTt3Q0FBSUMsS0FBS1IsUUFBUVMsS0FBSzt3Q0FBRUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBR3BDLDhEQUFDUDs7OENBQ0MsOERBQUNBO29DQUFJTCxXQUFXTixpRkFBbUI7O3NEQUNqQyw4REFBQ1U7NENBQUtKLFdBQVdOLDZFQUFlO3NEQUM3QlEsUUFBUVksTUFBTSxDQUFDRCxRQUFROzs7Ozs7c0RBRTFCLDhEQUFDVDs0Q0FBS0osV0FBV04seUVBQVc7c0RBQUdRLFFBQVFjLFNBQVM7Ozs7Ozs7Ozs7Ozs4Q0FFbEQsOERBQUNYO29DQUFJTCxXQUFXTix5RUFBVzs4Q0FDeEJGLDREQUFVQSxDQUFDVSxRQUFRZ0IsU0FBUzs7Ozs7Ozs7Ozs7OzttQkF0QlNoQixRQUFRTSxFQUFFOzs7Ozs7Ozs7OztBQThCbEU7S0FwQ3dCWCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Jlc3RBcnRpY2xlTGlzdC5qcz8xZTM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tIFwiLi4vdXRpbHMvZGF0ZVV0aWxzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9BbGxBcnRpY2xlTGlzdC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IEJhZGdlIGZyb20gXCJAL3B1YmxpYy9hc3NldHMvaWNvbi9pY19iYWRnZV9iZXN0LnBuZ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmVzdEFydGljbGVMaXN0KHsgYmVzdEFydGljbGVzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHVsIGNsYXNzTmFtZT17YCR7c3R5bGVzW1wiYXJ0aWNsZS13cmFwXCJdfSAke3N0eWxlc1tcImJlc3RcIl19YH0+XHJcbiAgICAgICAge2Jlc3RBcnRpY2xlcyAmJlxyXG4gICAgICAgICAgYmVzdEFydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT4gKFxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXNbXCJhcnRpY2xlLWxpc3RcIl19IGtleT17YXJ0aWNsZS5pZH0+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXNbXCJiYWRnZS1iZXN0XCJdfT5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSAvPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9ib2FyZHMvJHtiZXN0QXJ0aWNsZXMuaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2FydGljbGUuY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicHJvZmlsZS1pbWdcIl19PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YXJ0aWNsZS5pbWFnZX0gd2lkdGg9ezQ4fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJ1c2VyLWluZm9cIl19PlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5uaWNrbmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2FydGljbGUud3JpdGVyLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpa2V9PnthcnRpY2xlLmxpa2VDb3VudH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX0+XHJcbiAgICAgICAgICAgICAgICAgIHtmb3JtYXREYXRlKGFydGljbGUuY3JlYXRlZEF0KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJmb3JtYXREYXRlIiwiTGluayIsInN0eWxlcyIsIkltYWdlIiwiQmFkZ2UiLCJCZXN0QXJ0aWNsZUxpc3QiLCJiZXN0QXJ0aWNsZXMiLCJ1bCIsImNsYXNzTmFtZSIsIm1hcCIsImFydGljbGUiLCJsaSIsInNwYW4iLCJkaXYiLCJjb250ZW50IiwiaHJlZiIsImlkIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJ3aWR0aCIsIm5pY2tuYW1lIiwid3JpdGVyIiwibGlrZSIsImxpa2VDb3VudCIsImRhdGUiLCJjcmVhdGVkQXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/BestArticleList.js\n"));

/***/ })

});