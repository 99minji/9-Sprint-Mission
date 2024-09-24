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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Boards; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/axios */ \"./lib/axios.js\");\n/* harmony import */ var _components_BestArticleList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/BestArticleList */ \"./components/BestArticleList.js\");\n/* harmony import */ var _components_ArticleList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ArticleList */ \"./components/ArticleList.js\");\n/* harmony import */ var _components_SearchForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/SearchForm */ \"./components/SearchForm.js\");\n/* harmony import */ var _components_DropdownMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/DropdownMenu */ \"./components/DropdownMenu.js\");\n/* harmony import */ var _styles_boards_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/styles/boards.module.scss */ \"./styles/boards.module.scss\");\n/* harmony import */ var _styles_boards_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_boards_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Boards() {\n    _s();\n    const [articles, setArticles] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { sort } = router.query;\n    async function getArticles() {\n        try {\n            const res = await _lib_axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/articles\");\n            const nextArticles = res.data.list || [];\n            setArticles(nextArticles);\n        } catch (error) {\n            console.error(\"Error fetching articles:\", error);\n        }\n    }\n    async function getLikes(query) {\n        try {\n            const res = await _lib_axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/articles/?sort=\".concat(query));\n            const nextArticles = res.data.list || [];\n            if (query === \"likeCount\") {\n                nextArticles.sort((a, b)=>b.likeCount - a.likeCount);\n            }\n            setArticles(nextArticles);\n        } catch (error) {\n            console.error(\"Error fetching articles:\", error);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getArticles();\n        getLikes();\n    }, []);\n    const bestArticles = articles.slice().sort((a, b)=>b.likeCount - a.likeCount).slice(0, 3);\n    console.log(articles);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"best-article\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"page-title\",\n                        children: \"베스트 게시글\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BestArticleList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        articles: articles\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"article\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"page-title\",\n                        children: \"게시글\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"글쓰기\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_boards_module_scss__WEBPACK_IMPORTED_MODULE_8___default()[\"filter-section\"]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DropdownMenu__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ArticleList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        articles: articles\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Boards, \"FDOWKpOAd2tCfM02jliLx/IRf/Q=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Boards;\nvar _c;\n$RefreshReg$(_c, \"Boards\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ib2FyZHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNJO0FBQ1o7QUFDMkI7QUFDUDtBQUNIO0FBQ0k7QUFDSjtBQUVsQyxTQUFTUzs7SUFDdEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTVUsU0FBU1osc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRWEsSUFBSSxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFFN0IsZUFBZUM7UUFDYixJQUFJO1lBQ0YsTUFBTUMsTUFBTSxNQUFNYixzREFBUyxDQUFDO1lBQzVCLE1BQU1lLGVBQWVGLElBQUlHLElBQUksQ0FBQ0MsSUFBSSxJQUFJLEVBQUU7WUFDeENULFlBQVlPO1FBQ2QsRUFBRSxPQUFPRyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyw0QkFBNEJBO1FBQzVDO0lBQ0Y7SUFFQSxlQUFlRSxTQUFTVCxLQUFLO1FBQzNCLElBQUk7WUFDRixNQUFNRSxNQUFNLE1BQU1iLHNEQUFTLENBQUMsbUJBQXlCLE9BQU5XO1lBQy9DLE1BQU1JLGVBQWVGLElBQUlHLElBQUksQ0FBQ0MsSUFBSSxJQUFJLEVBQUU7WUFDeEMsSUFBSU4sVUFBVSxhQUFhO2dCQUN6QkksYUFBYUwsSUFBSSxDQUFDLENBQUNXLEdBQUdDLElBQU1BLEVBQUVDLFNBQVMsR0FBR0YsRUFBRUUsU0FBUztZQUN2RDtZQUVBZixZQUFZTztRQUNkLEVBQUUsT0FBT0csT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsNEJBQTRCQTtRQUM1QztJQUNGO0lBRUFwQixnREFBU0EsQ0FBQztRQUNSYztRQUNBUTtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1JLGVBQWVqQixTQUNsQmtCLEtBQUssR0FDTGYsSUFBSSxDQUFDLENBQUNXLEdBQUdDLElBQU1BLEVBQUVDLFNBQVMsR0FBR0YsRUFBRUUsU0FBUyxFQUN4Q0UsS0FBSyxDQUFDLEdBQUc7SUFDWk4sUUFBUU8sR0FBRyxDQUFDbkI7SUFDWixxQkFDRTs7MEJBQ0UsOERBQUNvQjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUFhOzs7Ozs7a0NBQzNCLDhEQUFDM0IsbUVBQWVBO3dCQUFDTSxVQUFVQTs7Ozs7Ozs7Ozs7OzBCQUU3Qiw4REFBQ29CO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQWE7Ozs7OztrQ0FDM0IsOERBQUNFO2tDQUFPOzs7Ozs7a0NBQ1IsOERBQUNIO3dCQUFJQyxXQUFXdkIscUZBQXdCOzswQ0FDdEMsOERBQUNGLDhEQUFVQTs7Ozs7MENBQ1gsOERBQUNDLGdFQUFZQTs7Ozs7Ozs7Ozs7a0NBRWYsOERBQUNGLCtEQUFXQTt3QkFBQ0ssVUFBVUE7Ozs7Ozs7Ozs7Ozs7O0FBSS9CO0dBeER3QkQ7O1FBRVBULGtEQUFTQTs7O0tBRkZTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2JvYXJkcy5qcz8yNzEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiQC9saWIvYXhpb3NcIjtcclxuaW1wb3J0IEJlc3RBcnRpY2xlTGlzdCBmcm9tIFwiQC9jb21wb25lbnRzL0Jlc3RBcnRpY2xlTGlzdFwiO1xyXG5pbXBvcnQgQXJ0aWNsZUxpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXJ0aWNsZUxpc3RcIjtcclxuaW1wb3J0IFNlYXJjaEZvcm0gZnJvbSBcIkAvY29tcG9uZW50cy9TZWFyY2hGb3JtXCI7XHJcbmltcG9ydCBEcm9wZG93bk1lbnUgZnJvbSBcIkAvY29tcG9uZW50cy9Ecm9wZG93bk1lbnVcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvYm9hcmRzLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb2FyZHMoKSB7XHJcbiAgY29uc3QgW2FydGljbGVzLCBzZXRBcnRpY2xlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBzb3J0IH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGdldEFydGljbGVzKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FydGljbGVzXCIpO1xyXG4gICAgICBjb25zdCBuZXh0QXJ0aWNsZXMgPSByZXMuZGF0YS5saXN0IHx8IFtdO1xyXG4gICAgICBzZXRBcnRpY2xlcyhuZXh0QXJ0aWNsZXMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGFydGljbGVzOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBnZXRMaWtlcyhxdWVyeSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXJ0aWNsZXMvP3NvcnQ9JHtxdWVyeX1gKTtcclxuICAgICAgY29uc3QgbmV4dEFydGljbGVzID0gcmVzLmRhdGEubGlzdCB8fCBbXTtcclxuICAgICAgaWYgKHF1ZXJ5ID09PSBcImxpa2VDb3VudFwiKSB7XHJcbiAgICAgICAgbmV4dEFydGljbGVzLnNvcnQoKGEsIGIpID0+IGIubGlrZUNvdW50IC0gYS5saWtlQ291bnQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRBcnRpY2xlcyhuZXh0QXJ0aWNsZXMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGFydGljbGVzOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0QXJ0aWNsZXMoKTtcclxuICAgIGdldExpa2VzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBiZXN0QXJ0aWNsZXMgPSBhcnRpY2xlc1xyXG4gICAgLnNsaWNlKClcclxuICAgIC5zb3J0KChhLCBiKSA9PiBiLmxpa2VDb3VudCAtIGEubGlrZUNvdW50KVxyXG4gICAgLnNsaWNlKDAsIDMpO1xyXG4gIGNvbnNvbGUubG9nKGFydGljbGVzKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZXN0LWFydGljbGVcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwicGFnZS10aXRsZVwiPuuyoOyKpO2KuCDqsozsi5zquIA8L2gyPlxyXG4gICAgICAgIDxCZXN0QXJ0aWNsZUxpc3QgYXJ0aWNsZXM9e2FydGljbGVzfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlXCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInBhZ2UtdGl0bGVcIj7qsozsi5zquIA8L2gyPlxyXG4gICAgICAgIDxidXR0b24+6riA7JOw6riwPC9idXR0b24+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImZpbHRlci1zZWN0aW9uXCJdfT5cclxuICAgICAgICAgIDxTZWFyY2hGb3JtIC8+XHJcbiAgICAgICAgICA8RHJvcGRvd25NZW51IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEFydGljbGVMaXN0IGFydGljbGVzPXthcnRpY2xlc30gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiQmVzdEFydGljbGVMaXN0IiwiQXJ0aWNsZUxpc3QiLCJTZWFyY2hGb3JtIiwiRHJvcGRvd25NZW51Iiwic3R5bGVzIiwiQm9hcmRzIiwiYXJ0aWNsZXMiLCJzZXRBcnRpY2xlcyIsInJvdXRlciIsInNvcnQiLCJxdWVyeSIsImdldEFydGljbGVzIiwicmVzIiwiZ2V0IiwibmV4dEFydGljbGVzIiwiZGF0YSIsImxpc3QiLCJlcnJvciIsImNvbnNvbGUiLCJnZXRMaWtlcyIsImEiLCJiIiwibGlrZUNvdW50IiwiYmVzdEFydGljbGVzIiwic2xpY2UiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/boards.js\n"));

/***/ })

});