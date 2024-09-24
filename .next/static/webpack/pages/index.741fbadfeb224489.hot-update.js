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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Boards; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/axios */ \"./lib/axios.js\");\n/* harmony import */ var _components_BestArticleList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/BestArticleList */ \"./components/BestArticleList.js\");\n/* harmony import */ var _components_ArticleList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ArticleList */ \"./components/ArticleList.js\");\n/* harmony import */ var _components_SearchForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/SearchForm */ \"./components/SearchForm.js\");\n/* harmony import */ var _components_DropdownMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/DropdownMenu */ \"./components/DropdownMenu.js\");\n/* harmony import */ var _styles_boards_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/styles/boards.module.scss */ \"./styles/boards.module.scss\");\n/* harmony import */ var _styles_boards_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_boards_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Boards() {\n    _s();\n    const [articles, setArticles] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { sort } = router.query;\n    async function getArticles() {\n        try {\n            const res = await _lib_axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/articles\");\n            const nextArticles1 = res.data.list || [];\n            setArticles(nextArticles1);\n        } catch (error) {\n            console.error(\"Error fetching articles:\", error);\n        }\n    }\n    async function getLikes(query) {\n        const res = await _lib_axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/articles/?sort=\".concat(query));\n        const nextProducts = res.data.results;\n        if (sort === \"likeCount\") {\n            nextArticles.sort((a, b)=>b.likeCount - a.likeCount);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getArticles();\n    }, []);\n    const bestArticles = articles.slice().sort((a, b)=>b.likeCount - a.likeCount).slice(0, 3);\n    console.log(articles);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"best-article\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"page-title\",\n                        children: \"베스트 게시글\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BestArticleList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        articles: bestArticles\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"article\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"page-title\",\n                        children: \"게시글\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"글쓰기\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_boards_module_scss__WEBPACK_IMPORTED_MODULE_8___default()[\"filter-section\"]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DropdownMenu__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ArticleList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        articles: articles\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Boards, \"FDOWKpOAd2tCfM02jliLx/IRf/Q=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Boards;\nvar _c;\n$RefreshReg$(_c, \"Boards\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ib2FyZHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNJO0FBQ1o7QUFDMkI7QUFDUDtBQUNIO0FBQ0k7QUFDSjtBQUVsQyxTQUFTUzs7SUFDdEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTVUsU0FBU1osc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRWEsSUFBSSxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFFN0IsZUFBZUM7UUFDYixJQUFJO1lBQ0YsTUFBTUMsTUFBTSxNQUFNYixzREFBUyxDQUFDO1lBQzVCLE1BQU1lLGdCQUFlRixJQUFJRyxJQUFJLENBQUNDLElBQUksSUFBSSxFQUFFO1lBQ3hDVCxZQUFZTztRQUNkLEVBQUUsT0FBT0csT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsNEJBQTRCQTtRQUM1QztJQUNGO0lBRUEsZUFBZUUsU0FBU1QsS0FBSztRQUMzQixNQUFNRSxNQUFNLE1BQU1iLHNEQUFTLENBQUMsbUJBQXlCLE9BQU5XO1FBQy9DLE1BQU1VLGVBQWVSLElBQUlHLElBQUksQ0FBQ00sT0FBTztRQUNyQyxJQUFJWixTQUFTLGFBQWE7WUFDeEJLLGFBQWFMLElBQUksQ0FBQyxDQUFDYSxHQUFHQyxJQUFNQSxFQUFFQyxTQUFTLEdBQUdGLEVBQUVFLFNBQVM7UUFDdkQ7SUFDRjtJQUVBM0IsZ0RBQVNBLENBQUM7UUFDUmM7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNYyxlQUFlbkIsU0FDbEJvQixLQUFLLEdBQ0xqQixJQUFJLENBQUMsQ0FBQ2EsR0FBR0MsSUFBTUEsRUFBRUMsU0FBUyxHQUFHRixFQUFFRSxTQUFTLEVBQ3hDRSxLQUFLLENBQUMsR0FBRztJQUNaUixRQUFRUyxHQUFHLENBQUNyQjtJQUNaLHFCQUNFOzswQkFDRSw4REFBQ3NCO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQWE7Ozs7OztrQ0FDM0IsOERBQUM3QixtRUFBZUE7d0JBQUNNLFVBQVVtQjs7Ozs7Ozs7Ozs7OzBCQUU3Qiw4REFBQ0c7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBR0QsV0FBVTtrQ0FBYTs7Ozs7O2tDQUMzQiw4REFBQ0U7a0NBQU87Ozs7OztrQ0FDUiw4REFBQ0g7d0JBQUlDLFdBQVd6QixxRkFBd0I7OzBDQUN0Qyw4REFBQ0YsOERBQVVBOzs7OzswQ0FDWCw4REFBQ0MsZ0VBQVlBOzs7Ozs7Ozs7OztrQ0FFZiw4REFBQ0YsK0RBQVdBO3dCQUFDSyxVQUFVQTs7Ozs7Ozs7Ozs7Ozs7QUFJL0I7R0FqRHdCRDs7UUFFUFQsa0RBQVNBOzs7S0FGRlMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYm9hcmRzLmpzPzI3MTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJAL2xpYi9heGlvc1wiO1xyXG5pbXBvcnQgQmVzdEFydGljbGVMaXN0IGZyb20gXCJAL2NvbXBvbmVudHMvQmVzdEFydGljbGVMaXN0XCI7XHJcbmltcG9ydCBBcnRpY2xlTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9BcnRpY2xlTGlzdFwiO1xyXG5pbXBvcnQgU2VhcmNoRm9ybSBmcm9tIFwiQC9jb21wb25lbnRzL1NlYXJjaEZvcm1cIjtcclxuaW1wb3J0IERyb3Bkb3duTWVudSBmcm9tIFwiQC9jb21wb25lbnRzL0Ryb3Bkb3duTWVudVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9ib2FyZHMubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvYXJkcygpIHtcclxuICBjb25zdCBbYXJ0aWNsZXMsIHNldEFydGljbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IHNvcnQgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0QXJ0aWNsZXMoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXCIvYXJ0aWNsZXNcIik7XHJcbiAgICAgIGNvbnN0IG5leHRBcnRpY2xlcyA9IHJlcy5kYXRhLmxpc3QgfHwgW107XHJcbiAgICAgIHNldEFydGljbGVzKG5leHRBcnRpY2xlcyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgYXJ0aWNsZXM6XCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGdldExpa2VzKHF1ZXJ5KSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYC9hcnRpY2xlcy8/c29ydD0ke3F1ZXJ5fWApO1xyXG4gICAgY29uc3QgbmV4dFByb2R1Y3RzID0gcmVzLmRhdGEucmVzdWx0cztcclxuICAgIGlmIChzb3J0ID09PSBcImxpa2VDb3VudFwiKSB7XHJcbiAgICAgIG5leHRBcnRpY2xlcy5zb3J0KChhLCBiKSA9PiBiLmxpa2VDb3VudCAtIGEubGlrZUNvdW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRBcnRpY2xlcygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgYmVzdEFydGljbGVzID0gYXJ0aWNsZXNcclxuICAgIC5zbGljZSgpXHJcbiAgICAuc29ydCgoYSwgYikgPT4gYi5saWtlQ291bnQgLSBhLmxpa2VDb3VudClcclxuICAgIC5zbGljZSgwLCAzKTtcclxuICBjb25zb2xlLmxvZyhhcnRpY2xlcyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmVzdC1hcnRpY2xlXCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInBhZ2UtdGl0bGVcIj7rsqDsiqTtirgg6rKM7Iuc6riAPC9oMj5cclxuICAgICAgICA8QmVzdEFydGljbGVMaXN0IGFydGljbGVzPXtiZXN0QXJ0aWNsZXN9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGVcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwicGFnZS10aXRsZVwiPuqyjOyLnOq4gDwvaDI+XHJcbiAgICAgICAgPGJ1dHRvbj7quIDsk7DquLA8L2J1dHRvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiZmlsdGVyLXNlY3Rpb25cIl19PlxyXG4gICAgICAgICAgPFNlYXJjaEZvcm0gLz5cclxuICAgICAgICAgIDxEcm9wZG93bk1lbnUgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8QXJ0aWNsZUxpc3QgYXJ0aWNsZXM9e2FydGljbGVzfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJCZXN0QXJ0aWNsZUxpc3QiLCJBcnRpY2xlTGlzdCIsIlNlYXJjaEZvcm0iLCJEcm9wZG93bk1lbnUiLCJzdHlsZXMiLCJCb2FyZHMiLCJhcnRpY2xlcyIsInNldEFydGljbGVzIiwicm91dGVyIiwic29ydCIsInF1ZXJ5IiwiZ2V0QXJ0aWNsZXMiLCJyZXMiLCJnZXQiLCJuZXh0QXJ0aWNsZXMiLCJkYXRhIiwibGlzdCIsImVycm9yIiwiY29uc29sZSIsImdldExpa2VzIiwibmV4dFByb2R1Y3RzIiwicmVzdWx0cyIsImEiLCJiIiwibGlrZUNvdW50IiwiYmVzdEFydGljbGVzIiwic2xpY2UiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/boards.js\n"));

/***/ })

});