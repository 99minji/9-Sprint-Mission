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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BestArticleList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_dateUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dateUtils */ \"./utils/dateUtils.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_assets_icon_user_icon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/public/assets/icon/user-icon.png */ \"./public/assets/icon/user-icon.png\");\n\n\n\n\n\nfunction BestArticleList(param) {\n    let { bestArticles } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: styles[\"article-wrap\"],\n            children: bestArticles && bestArticles.map((article)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: styles[\"article-list\"],\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: styles.content,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/items/\".concat(articles.id),\n                                        children: article.content\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\components\\\\BestArticleList.js\",\n                                        lineNumber: 15,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\components\\\\BestArticleList.js\",\n                                    lineNumber: 14,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: styles[\"profile-img\"],\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: article.image\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\components\\\\BestArticleList.js\",\n                                        lineNumber: 18,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\components\\\\BestArticleList.js\",\n                                    lineNumber: 17,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\components\\\\BestArticleList.js\",\n                            lineNumber: 13,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: styles[\"user-info\"],\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: styles[\"user-img\"],\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                src: _public_assets_icon_user_icon_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                                alt: \"사용자 이미지\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\components\\\\BestArticleList.js\",\n                                                lineNumber: 24,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\components\\\\BestArticleList.js\",\n                                            lineNumber: 23,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: styles.nickname,\n                                            children: article.writer.nickname\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\components\\\\BestArticleList.js\",\n                                            lineNumber: 26,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: styles.date,\n                                            children: (0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_1__.formatDate)(article.createdAt)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\components\\\\BestArticleList.js\",\n                                            lineNumber: 29,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\components\\\\BestArticleList.js\",\n                                    lineNumber: 22,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: styles.like,\n                                    children: article.likeCount\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\components\\\\BestArticleList.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\components\\\\BestArticleList.js\",\n                            lineNumber: 21,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, article.id, true, {\n                    fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\components\\\\BestArticleList.js\",\n                    lineNumber: 12,\n                    columnNumber: 13\n                }, this))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\components\\\\BestArticleList.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = BestArticleList;\nvar _c;\n$RefreshReg$(_c, \"BestArticleList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jlc3RBcnRpY2xlTGlzdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ25CO0FBQ0U7QUFDMkI7QUFFM0MsU0FBU0ksZ0JBQWdCLEtBQWdCO1FBQWhCLEVBQUVDLFlBQVksRUFBRSxHQUFoQjtJQUN0QyxxQkFDRTtrQkFDRSw0RUFBQ0M7WUFBR0MsV0FBV0MsTUFBTSxDQUFDLGVBQWU7c0JBQ2xDSCxnQkFDQ0EsYUFBYUksR0FBRyxDQUFDLENBQUNDLHdCQUNoQiw4REFBQ0M7b0JBQUdKLFdBQVdDLE1BQU0sQ0FBQyxlQUFlOztzQ0FDbkMsOERBQUNJOzs4Q0FDQyw4REFBQ0E7b0NBQUlMLFdBQVdDLE9BQU9LLE9BQU87OENBQzVCLDRFQUFDWixrREFBSUE7d0NBQUNhLE1BQU0sVUFBc0IsT0FBWkMsU0FBU0MsRUFBRTtrREFBS04sUUFBUUcsT0FBTzs7Ozs7Ozs7Ozs7OENBRXZELDhEQUFDRDtvQ0FBSUwsV0FBV0MsTUFBTSxDQUFDLGNBQWM7OENBQ25DLDRFQUFDUzt3Q0FBSUMsS0FBS1IsUUFBUVMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBRzNCLDhEQUFDUDs7OENBQ0MsOERBQUNBO29DQUFJTCxXQUFXQyxNQUFNLENBQUMsWUFBWTs7c0RBQ2pDLDhEQUFDWTs0Q0FBS2IsV0FBV0MsTUFBTSxDQUFDLFdBQVc7c0RBQ2pDLDRFQUFDTixtREFBS0E7Z0RBQUNnQixLQUFLZix5RUFBUUE7Z0RBQUVrQixLQUFJOzs7Ozs7Ozs7OztzREFFNUIsOERBQUNEOzRDQUFLYixXQUFXQyxPQUFPYyxRQUFRO3NEQUM3QlosUUFBUWEsTUFBTSxDQUFDRCxRQUFROzs7Ozs7c0RBRTFCLDhEQUFDRjs0Q0FBS2IsV0FBV0MsT0FBT2dCLElBQUk7c0RBQ3pCeEIsNERBQVVBLENBQUNVLFFBQVFlLFNBQVM7Ozs7Ozs7Ozs7Ozs4Q0FHakMsOERBQUNiO29DQUFJTCxXQUFXQyxPQUFPa0IsSUFBSTs4Q0FBR2hCLFFBQVFpQixTQUFTOzs7Ozs7Ozs7Ozs7O21CQXJCUGpCLFFBQVFNLEVBQUU7Ozs7Ozs7Ozs7O0FBNEJsRTtLQWxDd0JaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQmVzdEFydGljbGVMaXN0LmpzPzFlMzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gXCIuLi91dGlscy9kYXRlVXRpbHNcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHVzZXJJY29uIGZyb20gXCJAL3B1YmxpYy9hc3NldHMvaWNvbi91c2VyLWljb24ucG5nXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCZXN0QXJ0aWNsZUxpc3QoeyBiZXN0QXJ0aWNsZXMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXNbXCJhcnRpY2xlLXdyYXBcIl19PlxyXG4gICAgICAgIHtiZXN0QXJ0aWNsZXMgJiZcclxuICAgICAgICAgIGJlc3RBcnRpY2xlcy5tYXAoKGFydGljbGUpID0+IChcclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzW1wiYXJ0aWNsZS1saXN0XCJdfSBrZXk9e2FydGljbGUuaWR9PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2l0ZW1zLyR7YXJ0aWNsZXMuaWR9YH0+e2FydGljbGUuY29udGVudH08L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9maWxlLWltZ1wiXX0+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthcnRpY2xlLmltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJ1c2VyLWluZm9cIl19PlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlc1tcInVzZXItaW1nXCJdfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXt1c2VySWNvbn0gYWx0PVwi7IKs7Jqp7J6QIOydtOuvuOyngFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubmlja25hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHthcnRpY2xlLndyaXRlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlfT5cclxuICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0RGF0ZShhcnRpY2xlLmNyZWF0ZWRBdCl9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saWtlfT57YXJ0aWNsZS5saWtlQ291bnR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImZvcm1hdERhdGUiLCJMaW5rIiwiSW1hZ2UiLCJ1c2VySWNvbiIsIkJlc3RBcnRpY2xlTGlzdCIsImJlc3RBcnRpY2xlcyIsInVsIiwiY2xhc3NOYW1lIiwic3R5bGVzIiwibWFwIiwiYXJ0aWNsZSIsImxpIiwiZGl2IiwiY29udGVudCIsImhyZWYiLCJhcnRpY2xlcyIsImlkIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJzcGFuIiwiYWx0Iiwibmlja25hbWUiLCJ3cml0ZXIiLCJkYXRlIiwiY3JlYXRlZEF0IiwibGlrZSIsImxpa2VDb3VudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/BestArticleList.js\n"));

/***/ })

});