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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Boards; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/axios */ \"./lib/axios.js\");\n/* harmony import */ var _components_BestArticleList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/BestArticleList */ \"./components/BestArticleList.js\");\n/* harmony import */ var _components_ArticleList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ArticleList */ \"./components/ArticleList.js\");\n/* harmony import */ var _components_SearchForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/SearchForm */ \"./components/SearchForm.js\");\n/* harmony import */ var _components_DropdownMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/DropdownMenu */ \"./components/DropdownMenu.js\");\n/* harmony import */ var _styles_boards_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/styles/boards.module.scss */ \"./styles/boards.module.scss\");\n/* harmony import */ var _styles_boards_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_boards_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Boards() {\n    _s();\n    const [articles, setArticles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [bestArticles, setBestArticles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [sortOrder, setSortOrder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"latest\");\n    async function getArticles() {\n        try {\n            const res = await _lib_axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/articles\");\n            const allArticles = res.data.list || [];\n            setArticles(allArticles);\n        } catch (error) {\n            console.error(\"Error fetching articles:\", error);\n        }\n    }\n    const getBestArticlesCount = ()=>{\n        const width = window.innerWidth;\n        return width <= 768 ? 1 : width <= 1200 ? 2 : 3;\n    };\n    const updateLikesArticles = ()=>{\n        const sortedArticles = [\n            ...articles\n        ].sort((a, b)=>b.likeCount - a.likeCount);\n        setBestArticles(sortedArticles.slice(0, getBestArticlesCount()));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getArticles();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (articles.length > 0) {\n            updateLikesArticles(articles);\n        }\n        const handleResize = ()=>{\n            if (articles.length > 0) {\n                updateLikesArticles();\n            }\n        };\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, [\n        articles\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (sortOrder === \"latest\") {\n            setArticles((prevArticles)=>[\n                    ...prevArticles\n                ].sort((a, b)=>new Date(b.createdAt) - new Date(a.createdAt)));\n        } else if (sortOrder === \"likes\") {\n            setArticles((prevArticles)=>[\n                    ...prevArticles\n                ].sort((a, b)=>b.likeCount - a.likeCount));\n        }\n        updateLikesArticles();\n    }, [\n        sortOrder\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"best-article\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"page-title\",\n                        children: \"베스트 게시글\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BestArticleList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        bestArticles: bestArticles\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_boards_module_scss__WEBPACK_IMPORTED_MODULE_7___default().article),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"page-title\",\n                        children: [\n                            \"게시글\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn-box\",\n                                type: \"button\",\n                                children: \"글쓰기\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_boards_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"filter-section\"]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DropdownMenu__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                setSortOrder: setSortOrder\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ArticleList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        articles: articles\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Boards, \"51gfryMZ3AgkHWpVh2K3xZyKBKE=\");\n_c = Boards;\nvar _c;\n$RefreshReg$(_c, \"Boards\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ib2FyZHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDWjtBQUMyQjtBQUNQO0FBQ0g7QUFDSTtBQUNKO0FBRWxDLFNBQVNROztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNVLGNBQWNDLGdCQUFnQixHQUFHWCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ25ELE1BQU0sQ0FBQ1ksV0FBV0MsYUFBYSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUUzQyxlQUFlYztRQUNiLElBQUk7WUFDRixNQUFNQyxNQUFNLE1BQU1kLHNEQUFTLENBQUM7WUFDNUIsTUFBTWdCLGNBQWNGLElBQUlHLElBQUksQ0FBQ0MsSUFBSSxJQUFJLEVBQUU7WUFDdkNWLFlBQVlRO1FBQ2QsRUFBRSxPQUFPRyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyw0QkFBNEJBO1FBQzVDO0lBQ0Y7SUFFQSxNQUFNRSx1QkFBdUI7UUFDM0IsTUFBTUMsUUFBUUMsT0FBT0MsVUFBVTtRQUMvQixPQUFPRixTQUFTLE1BQU0sSUFBSUEsU0FBUyxPQUFPLElBQUk7SUFDaEQ7SUFFQSxNQUFNRyxzQkFBc0I7UUFDMUIsTUFBTUMsaUJBQWlCO2VBQUluQjtTQUFTLENBQUNvQixJQUFJLENBQ3ZDLENBQUNDLEdBQUdDLElBQU1BLEVBQUVDLFNBQVMsR0FBR0YsRUFBRUUsU0FBUztRQUVyQ3BCLGdCQUFnQmdCLGVBQWVLLEtBQUssQ0FBQyxHQUFHVjtJQUMxQztJQUVBdkIsZ0RBQVNBLENBQUM7UUFDUmU7SUFDRixHQUFHLEVBQUU7SUFFTGYsZ0RBQVNBLENBQUM7UUFDUixJQUFJUyxTQUFTeUIsTUFBTSxHQUFHLEdBQUc7WUFDdkJQLG9CQUFvQmxCO1FBQ3RCO1FBQ0EsTUFBTTBCLGVBQWU7WUFDbkIsSUFBSTFCLFNBQVN5QixNQUFNLEdBQUcsR0FBRztnQkFDdkJQO1lBQ0Y7UUFDRjtRQUNBRixPQUFPVyxnQkFBZ0IsQ0FBQyxVQUFVRDtRQUNsQyxPQUFPO1lBQ0xWLE9BQU9ZLG1CQUFtQixDQUFDLFVBQVVGO1FBQ3ZDO0lBQ0YsR0FBRztRQUFDMUI7S0FBUztJQUViVCxnREFBU0EsQ0FBQztRQUNSLElBQUlhLGNBQWMsVUFBVTtZQUMxQkgsWUFBWSxDQUFDNEIsZUFDWDt1QkFBSUE7aUJBQWEsQ0FBQ1QsSUFBSSxDQUNwQixDQUFDQyxHQUFHQyxJQUFNLElBQUlRLEtBQUtSLEVBQUVTLFNBQVMsSUFBSSxJQUFJRCxLQUFLVCxFQUFFVSxTQUFTO1FBRzVELE9BQU8sSUFBSTNCLGNBQWMsU0FBUztZQUNoQ0gsWUFBWSxDQUFDNEIsZUFDWDt1QkFBSUE7aUJBQWEsQ0FBQ1QsSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU1BLEVBQUVDLFNBQVMsR0FBR0YsRUFBRUUsU0FBUztRQUU5RDtRQUNBTDtJQUNGLEdBQUc7UUFBQ2Q7S0FBVTtJQUVkLHFCQUNFOzswQkFDRSw4REFBQzRCO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQWE7Ozs7OztrQ0FDM0IsOERBQUN2QyxtRUFBZUE7d0JBQUNRLGNBQWNBOzs7Ozs7Ozs7Ozs7MEJBRWpDLDhEQUFDOEI7Z0JBQUlDLFdBQVduQywyRUFBYzs7a0NBQzVCLDhEQUFDb0M7d0JBQUdELFdBQVU7OzRCQUFhOzBDQUV6Qiw4REFBQ0c7Z0NBQU9ILFdBQVU7Z0NBQVVJLE1BQUs7MENBQVM7Ozs7Ozs7Ozs7OztrQ0FJNUMsOERBQUNMO3dCQUFJQyxXQUFXbkMscUZBQXdCOzswQ0FDdEMsOERBQUNGLDhEQUFVQTs7Ozs7MENBQ1gsOERBQUNDLGdFQUFZQTtnQ0FBQ1EsY0FBY0E7Ozs7Ozs7Ozs7OztrQ0FFOUIsOERBQUNWLCtEQUFXQTt3QkFBQ0ssVUFBVUE7Ozs7Ozs7Ozs7Ozs7O0FBSS9CO0dBbEZ3QkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYm9hcmRzLmpzPzI3MTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcIkAvbGliL2F4aW9zXCI7XHJcbmltcG9ydCBCZXN0QXJ0aWNsZUxpc3QgZnJvbSBcIkAvY29tcG9uZW50cy9CZXN0QXJ0aWNsZUxpc3RcIjtcclxuaW1wb3J0IEFydGljbGVMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL0FydGljbGVMaXN0XCI7XHJcbmltcG9ydCBTZWFyY2hGb3JtIGZyb20gXCJAL2NvbXBvbmVudHMvU2VhcmNoRm9ybVwiO1xyXG5pbXBvcnQgRHJvcGRvd25NZW51IGZyb20gXCJAL2NvbXBvbmVudHMvRHJvcGRvd25NZW51XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL2JvYXJkcy5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9hcmRzKCkge1xyXG4gIGNvbnN0IFthcnRpY2xlcywgc2V0QXJ0aWNsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtiZXN0QXJ0aWNsZXMsIHNldEJlc3RBcnRpY2xlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NvcnRPcmRlciwgc2V0U29ydE9yZGVyXSA9IHVzZVN0YXRlKFwibGF0ZXN0XCIpO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBnZXRBcnRpY2xlcygpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcIi9hcnRpY2xlc1wiKTtcclxuICAgICAgY29uc3QgYWxsQXJ0aWNsZXMgPSByZXMuZGF0YS5saXN0IHx8IFtdO1xyXG4gICAgICBzZXRBcnRpY2xlcyhhbGxBcnRpY2xlcyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgYXJ0aWNsZXM6XCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGdldEJlc3RBcnRpY2xlc0NvdW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIHJldHVybiB3aWR0aCA8PSA3NjggPyAxIDogd2lkdGggPD0gMTIwMCA/IDIgOiAzO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZUxpa2VzQXJ0aWNsZXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzb3J0ZWRBcnRpY2xlcyA9IFsuLi5hcnRpY2xlc10uc29ydChcclxuICAgICAgKGEsIGIpID0+IGIubGlrZUNvdW50IC0gYS5saWtlQ291bnRcclxuICAgICk7XHJcbiAgICBzZXRCZXN0QXJ0aWNsZXMoc29ydGVkQXJ0aWNsZXMuc2xpY2UoMCwgZ2V0QmVzdEFydGljbGVzQ291bnQoKSkpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRBcnRpY2xlcygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhcnRpY2xlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHVwZGF0ZUxpa2VzQXJ0aWNsZXMoYXJ0aWNsZXMpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xyXG4gICAgICBpZiAoYXJ0aWNsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHVwZGF0ZUxpa2VzQXJ0aWNsZXMoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgfTtcclxuICB9LCBbYXJ0aWNsZXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzb3J0T3JkZXIgPT09IFwibGF0ZXN0XCIpIHtcclxuICAgICAgc2V0QXJ0aWNsZXMoKHByZXZBcnRpY2xlcykgPT5cclxuICAgICAgICBbLi4ucHJldkFydGljbGVzXS5zb3J0KFxyXG4gICAgICAgICAgKGEsIGIpID0+IG5ldyBEYXRlKGIuY3JlYXRlZEF0KSAtIG5ldyBEYXRlKGEuY3JlYXRlZEF0KVxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAoc29ydE9yZGVyID09PSBcImxpa2VzXCIpIHtcclxuICAgICAgc2V0QXJ0aWNsZXMoKHByZXZBcnRpY2xlcykgPT5cclxuICAgICAgICBbLi4ucHJldkFydGljbGVzXS5zb3J0KChhLCBiKSA9PiBiLmxpa2VDb3VudCAtIGEubGlrZUNvdW50KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlTGlrZXNBcnRpY2xlcygpO1xyXG4gIH0sIFtzb3J0T3JkZXJdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmVzdC1hcnRpY2xlXCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInBhZ2UtdGl0bGVcIj7rsqDsiqTtirgg6rKM7Iuc6riAPC9oMj5cclxuICAgICAgICA8QmVzdEFydGljbGVMaXN0IGJlc3RBcnRpY2xlcz17YmVzdEFydGljbGVzfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwicGFnZS10aXRsZVwiPlxyXG4gICAgICAgICAg6rKM7Iuc6riAXHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1ib3hcIiB0eXBlPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgIOq4gOyTsOq4sFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiZmlsdGVyLXNlY3Rpb25cIl19PlxyXG4gICAgICAgICAgPFNlYXJjaEZvcm0gLz5cclxuICAgICAgICAgIDxEcm9wZG93bk1lbnUgc2V0U29ydE9yZGVyPXtzZXRTb3J0T3JkZXJ9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEFydGljbGVMaXN0IGFydGljbGVzPXthcnRpY2xlc30gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiQmVzdEFydGljbGVMaXN0IiwiQXJ0aWNsZUxpc3QiLCJTZWFyY2hGb3JtIiwiRHJvcGRvd25NZW51Iiwic3R5bGVzIiwiQm9hcmRzIiwiYXJ0aWNsZXMiLCJzZXRBcnRpY2xlcyIsImJlc3RBcnRpY2xlcyIsInNldEJlc3RBcnRpY2xlcyIsInNvcnRPcmRlciIsInNldFNvcnRPcmRlciIsImdldEFydGljbGVzIiwicmVzIiwiZ2V0IiwiYWxsQXJ0aWNsZXMiLCJkYXRhIiwibGlzdCIsImVycm9yIiwiY29uc29sZSIsImdldEJlc3RBcnRpY2xlc0NvdW50Iiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwidXBkYXRlTGlrZXNBcnRpY2xlcyIsInNvcnRlZEFydGljbGVzIiwic29ydCIsImEiLCJiIiwibGlrZUNvdW50Iiwic2xpY2UiLCJsZW5ndGgiLCJoYW5kbGVSZXNpemUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInByZXZBcnRpY2xlcyIsIkRhdGUiLCJjcmVhdGVkQXQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImFydGljbGUiLCJidXR0b24iLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/boards.js\n"));

/***/ })

});