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

/***/ "./pages/boards.js":
/*!*************************!*\
  !*** ./pages/boards.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Boards; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/axios */ \"./lib/axios.js\");\n/* harmony import */ var _components_BestArticleList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/BestArticleList */ \"./components/BestArticleList.js\");\n/* harmony import */ var _components_ArticleList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ArticleList */ \"./components/ArticleList.js\");\n/* harmony import */ var _components_SearchForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/SearchForm */ \"./components/SearchForm.js\");\n/* harmony import */ var _components_DropdownMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/DropdownMenu */ \"./components/DropdownMenu.js\");\n/* harmony import */ var _styles_boards_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/styles/boards.module.scss */ \"./styles/boards.module.scss\");\n/* harmony import */ var _styles_boards_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_boards_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Boards() {\n    _s();\n    const [articles, setArticles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [bestArticles, setBestArticles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    async function getArticles() {\n        try {\n            const res = await _lib_axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/articles\");\n            const allArticles = res.data.list || [];\n            const sortedArticles = allArticles.sort((a, b)=>b.likeCount - a.likeCount);\n            setArticles(allArticles);\n            setBestArticles(sortedArticles.slice(0, 3));\n        } catch (error) {\n            console.error(\"Error fetching articles:\", error);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getArticles();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"best-article\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"page-title\",\n                        children: \"베스트 게시글\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BestArticleList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        bestArticles: bestArticles\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_boards_module_scss__WEBPACK_IMPORTED_MODULE_7___default().article),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"page-title\",\n                        children: \"게시글\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"글쓰기\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_boards_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"filter-section\"]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DropdownMenu__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ArticleList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        articles: articles\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Boards, \"hc2jamxugEOEYTt5I01aYCbC/98=\");\n_c = Boards;\nvar _c;\n$RefreshReg$(_c, \"Boards\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ib2FyZHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDWjtBQUMyQjtBQUNQO0FBQ0g7QUFDSTtBQUNKO0FBRWxDLFNBQVNROztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNVLGNBQWNDLGdCQUFnQixHQUFHWCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRW5ELGVBQWVZO1FBQ2IsSUFBSTtZQUNGLE1BQU1DLE1BQU0sTUFBTVosc0RBQVMsQ0FBQztZQUM1QixNQUFNYyxjQUFjRixJQUFJRyxJQUFJLENBQUNDLElBQUksSUFBSSxFQUFFO1lBQ3ZDLE1BQU1DLGlCQUFpQkgsWUFBWUksSUFBSSxDQUNyQyxDQUFDQyxHQUFHQyxJQUFNQSxFQUFFQyxTQUFTLEdBQUdGLEVBQUVFLFNBQVM7WUFFckNiLFlBQVlNO1lBQ1pKLGdCQUFnQk8sZUFBZUssS0FBSyxDQUFDLEdBQUc7UUFDMUMsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyw0QkFBNEJBO1FBQzVDO0lBQ0Y7SUFFQXpCLGdEQUFTQSxDQUFDO1FBQ1JhO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0U7OzBCQUNFLDhEQUFDYztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUFhOzs7Ozs7a0NBQzNCLDhEQUFDekIsbUVBQWVBO3dCQUFDUSxjQUFjQTs7Ozs7Ozs7Ozs7OzBCQUVqQyw4REFBQ2dCO2dCQUFJQyxXQUFXckIsMkVBQWM7O2tDQUM1Qiw4REFBQ3NCO3dCQUFHRCxXQUFVO2tDQUFhOzs7Ozs7a0NBQzNCLDhEQUFDRztrQ0FBTzs7Ozs7O2tDQUNSLDhEQUFDSjt3QkFBSUMsV0FBV3JCLHFGQUF3Qjs7MENBQ3RDLDhEQUFDRiw4REFBVUE7Ozs7OzBDQUNYLDhEQUFDQyxnRUFBWUE7Ozs7Ozs7Ozs7O2tDQUVmLDhEQUFDRiwrREFBV0E7d0JBQUNLLFVBQVVBOzs7Ozs7Ozs7Ozs7OztBQUkvQjtHQXZDd0JEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2JvYXJkcy5qcz8yNzEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJAL2xpYi9heGlvc1wiO1xyXG5pbXBvcnQgQmVzdEFydGljbGVMaXN0IGZyb20gXCJAL2NvbXBvbmVudHMvQmVzdEFydGljbGVMaXN0XCI7XHJcbmltcG9ydCBBcnRpY2xlTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9BcnRpY2xlTGlzdFwiO1xyXG5pbXBvcnQgU2VhcmNoRm9ybSBmcm9tIFwiQC9jb21wb25lbnRzL1NlYXJjaEZvcm1cIjtcclxuaW1wb3J0IERyb3Bkb3duTWVudSBmcm9tIFwiQC9jb21wb25lbnRzL0Ryb3Bkb3duTWVudVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9ib2FyZHMubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvYXJkcygpIHtcclxuICBjb25zdCBbYXJ0aWNsZXMsIHNldEFydGljbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbYmVzdEFydGljbGVzLCBzZXRCZXN0QXJ0aWNsZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBnZXRBcnRpY2xlcygpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcIi9hcnRpY2xlc1wiKTtcclxuICAgICAgY29uc3QgYWxsQXJ0aWNsZXMgPSByZXMuZGF0YS5saXN0IHx8IFtdO1xyXG4gICAgICBjb25zdCBzb3J0ZWRBcnRpY2xlcyA9IGFsbEFydGljbGVzLnNvcnQoXHJcbiAgICAgICAgKGEsIGIpID0+IGIubGlrZUNvdW50IC0gYS5saWtlQ291bnRcclxuICAgICAgKTtcclxuICAgICAgc2V0QXJ0aWNsZXMoYWxsQXJ0aWNsZXMpO1xyXG4gICAgICBzZXRCZXN0QXJ0aWNsZXMoc29ydGVkQXJ0aWNsZXMuc2xpY2UoMCwgMykpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGFydGljbGVzOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0QXJ0aWNsZXMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJlc3QtYXJ0aWNsZVwiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+67Kg7Iqk7Yq4IOqyjOyLnOq4gDwvaDI+XHJcbiAgICAgICAgPEJlc3RBcnRpY2xlTGlzdCBiZXN0QXJ0aWNsZXM9e2Jlc3RBcnRpY2xlc30gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZX0+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInBhZ2UtdGl0bGVcIj7qsozsi5zquIA8L2gyPlxyXG4gICAgICAgIDxidXR0b24+6riA7JOw6riwPC9idXR0b24+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImZpbHRlci1zZWN0aW9uXCJdfT5cclxuICAgICAgICAgIDxTZWFyY2hGb3JtIC8+XHJcbiAgICAgICAgICA8RHJvcGRvd25NZW51IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEFydGljbGVMaXN0IGFydGljbGVzPXthcnRpY2xlc30gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiQmVzdEFydGljbGVMaXN0IiwiQXJ0aWNsZUxpc3QiLCJTZWFyY2hGb3JtIiwiRHJvcGRvd25NZW51Iiwic3R5bGVzIiwiQm9hcmRzIiwiYXJ0aWNsZXMiLCJzZXRBcnRpY2xlcyIsImJlc3RBcnRpY2xlcyIsInNldEJlc3RBcnRpY2xlcyIsImdldEFydGljbGVzIiwicmVzIiwiZ2V0IiwiYWxsQXJ0aWNsZXMiLCJkYXRhIiwibGlzdCIsInNvcnRlZEFydGljbGVzIiwic29ydCIsImEiLCJiIiwibGlrZUNvdW50Iiwic2xpY2UiLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImFydGljbGUiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/boards.js\n"));

/***/ })

});