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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Boards; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/axios */ \"./lib/axios.js\");\n/* harmony import */ var _components_BestArticleList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/BestArticleList */ \"./components/BestArticleList.js\");\n/* harmony import */ var _components_ArticleList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ArticleList */ \"./components/ArticleList.js\");\n/* harmony import */ var _components_SearchForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/SearchForm */ \"./components/SearchForm.js\");\n/* harmony import */ var _components_DropdownMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/DropdownMenu */ \"./components/DropdownMenu.js\");\n/* harmony import */ var _styles_boards_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/styles/boards.module.scss */ \"./styles/boards.module.scss\");\n/* harmony import */ var _styles_boards_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_boards_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Boards() {\n    _s();\n    const [articles, setArticles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [bestArticles, setBestArticles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    async function getArticles() {\n        try {\n            const res = await _lib_axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/articles\");\n            const allArticles = res.data.list || [];\n            setArticles(allArticles);\n        } catch (error) {\n            console.error(\"Error fetching articles:\", error);\n        }\n    }\n    const getBestArticlesCount = ()=>{\n        const width = window.innerWidth;\n        return width <= 768 ? 1 : width <= 1200 ? 2 : 3;\n    };\n    const updateBestArticles = ()=>{\n        const sortedArticles = [\n            ...articles\n        ].sort((a, b)=>b.likeCount - a.likeCount);\n        setBestArticles(sortedArticles.slice(0, getBestArticlesCount()));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getArticles();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (articles.length > 0) {\n            updateBestArticles(articles);\n        }\n    }, [\n        articles\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleResize = ()=>{\n            if (articles.length > 0) {\n                updateBestArticles();\n            }\n        };\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, [\n        articles\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"best-article\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"page-title\",\n                        children: \"베스트 게시글\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BestArticleList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        bestArticles: bestArticles\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_boards_module_scss__WEBPACK_IMPORTED_MODULE_7___default().article),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"page-title\",\n                        children: \"게시글\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_boards_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"btn-box\"]),\n                        type: \"button\",\n                        children: \"글쓰기\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_boards_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"filter-section\"]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DropdownMenu__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ArticleList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        articles: articles\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Boards, \"P86E9IZZKN5zvwzLf3KAk/k/40c=\");\n_c = Boards;\nvar _c;\n$RefreshReg$(_c, \"Boards\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ib2FyZHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDWjtBQUMyQjtBQUNQO0FBQ0g7QUFDSTtBQUNKO0FBRWxDLFNBQVNROztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNVLGNBQWNDLGdCQUFnQixHQUFHWCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRW5ELGVBQWVZO1FBQ2IsSUFBSTtZQUNGLE1BQU1DLE1BQU0sTUFBTVosc0RBQVMsQ0FBQztZQUM1QixNQUFNYyxjQUFjRixJQUFJRyxJQUFJLENBQUNDLElBQUksSUFBSSxFQUFFO1lBQ3ZDUixZQUFZTTtRQUNkLEVBQUUsT0FBT0csT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsNEJBQTRCQTtRQUM1QztJQUNGO0lBRUEsTUFBTUUsdUJBQXVCO1FBQzNCLE1BQU1DLFFBQVFDLE9BQU9DLFVBQVU7UUFDL0IsT0FBT0YsU0FBUyxNQUFNLElBQUlBLFNBQVMsT0FBTyxJQUFJO0lBQ2hEO0lBRUEsTUFBTUcscUJBQXFCO1FBQ3pCLE1BQU1DLGlCQUFpQjtlQUFJakI7U0FBUyxDQUFDa0IsSUFBSSxDQUN2QyxDQUFDQyxHQUFHQyxJQUFNQSxFQUFFQyxTQUFTLEdBQUdGLEVBQUVFLFNBQVM7UUFFckNsQixnQkFBZ0JjLGVBQWVLLEtBQUssQ0FBQyxHQUFHVjtJQUMxQztJQUVBckIsZ0RBQVNBLENBQUM7UUFDUmE7SUFDRixHQUFHLEVBQUU7SUFFTGIsZ0RBQVNBLENBQUM7UUFDUixJQUFJUyxTQUFTdUIsTUFBTSxHQUFHLEdBQUc7WUFDdkJQLG1CQUFtQmhCO1FBQ3JCO0lBQ0YsR0FBRztRQUFDQTtLQUFTO0lBRWJULGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWlDLGVBQWU7WUFDbkIsSUFBSXhCLFNBQVN1QixNQUFNLEdBQUcsR0FBRztnQkFDdkJQO1lBQ0Y7UUFDRjtRQUVBRixPQUFPVyxnQkFBZ0IsQ0FBQyxVQUFVRDtRQUVsQyxPQUFPO1lBQ0xWLE9BQU9ZLG1CQUFtQixDQUFDLFVBQVVGO1FBQ3ZDO0lBQ0YsR0FBRztRQUFDeEI7S0FBUztJQUViLHFCQUNFOzswQkFDRSw4REFBQzJCO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQWE7Ozs7OztrQ0FDM0IsOERBQUNsQyxtRUFBZUE7d0JBQUNRLGNBQWNBOzs7Ozs7Ozs7Ozs7MEJBRWpDLDhEQUFDeUI7Z0JBQUlDLFdBQVc5QiwyRUFBYzs7a0NBQzVCLDhEQUFDK0I7d0JBQUdELFdBQVU7a0NBQWE7Ozs7OztrQ0FDM0IsOERBQUNHO3dCQUFPSCxXQUFXOUIsOEVBQWlCO3dCQUFFa0MsTUFBSztrQ0FBUzs7Ozs7O2tDQUdwRCw4REFBQ0w7d0JBQUlDLFdBQVc5QixxRkFBd0I7OzBDQUN0Qyw4REFBQ0YsOERBQVVBOzs7OzswQ0FDWCw4REFBQ0MsZ0VBQVlBOzs7Ozs7Ozs7OztrQ0FFZiw4REFBQ0YsK0RBQVdBO3dCQUFDSyxVQUFVQTs7Ozs7Ozs7Ozs7Ozs7QUFJL0I7R0FyRXdCRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ib2FyZHMuanM/MjcxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiQC9saWIvYXhpb3NcIjtcclxuaW1wb3J0IEJlc3RBcnRpY2xlTGlzdCBmcm9tIFwiQC9jb21wb25lbnRzL0Jlc3RBcnRpY2xlTGlzdFwiO1xyXG5pbXBvcnQgQXJ0aWNsZUxpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXJ0aWNsZUxpc3RcIjtcclxuaW1wb3J0IFNlYXJjaEZvcm0gZnJvbSBcIkAvY29tcG9uZW50cy9TZWFyY2hGb3JtXCI7XHJcbmltcG9ydCBEcm9wZG93bk1lbnUgZnJvbSBcIkAvY29tcG9uZW50cy9Ecm9wZG93bk1lbnVcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvYm9hcmRzLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb2FyZHMoKSB7XHJcbiAgY29uc3QgW2FydGljbGVzLCBzZXRBcnRpY2xlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2Jlc3RBcnRpY2xlcywgc2V0QmVzdEFydGljbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0QXJ0aWNsZXMoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXCIvYXJ0aWNsZXNcIik7XHJcbiAgICAgIGNvbnN0IGFsbEFydGljbGVzID0gcmVzLmRhdGEubGlzdCB8fCBbXTtcclxuICAgICAgc2V0QXJ0aWNsZXMoYWxsQXJ0aWNsZXMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGFydGljbGVzOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRCZXN0QXJ0aWNsZXNDb3VudCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICByZXR1cm4gd2lkdGggPD0gNzY4ID8gMSA6IHdpZHRoIDw9IDEyMDAgPyAyIDogMztcclxuICB9O1xyXG5cclxuICBjb25zdCB1cGRhdGVCZXN0QXJ0aWNsZXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzb3J0ZWRBcnRpY2xlcyA9IFsuLi5hcnRpY2xlc10uc29ydChcclxuICAgICAgKGEsIGIpID0+IGIubGlrZUNvdW50IC0gYS5saWtlQ291bnRcclxuICAgICk7XHJcbiAgICBzZXRCZXN0QXJ0aWNsZXMoc29ydGVkQXJ0aWNsZXMuc2xpY2UoMCwgZ2V0QmVzdEFydGljbGVzQ291bnQoKSkpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRBcnRpY2xlcygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhcnRpY2xlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHVwZGF0ZUJlc3RBcnRpY2xlcyhhcnRpY2xlcyk7XHJcbiAgICB9XHJcbiAgfSwgW2FydGljbGVzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChhcnRpY2xlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdXBkYXRlQmVzdEFydGljbGVzKCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgfTtcclxuICB9LCBbYXJ0aWNsZXNdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmVzdC1hcnRpY2xlXCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInBhZ2UtdGl0bGVcIj7rsqDsiqTtirgg6rKM7Iuc6riAPC9oMj5cclxuICAgICAgICA8QmVzdEFydGljbGVMaXN0IGJlc3RBcnRpY2xlcz17YmVzdEFydGljbGVzfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwicGFnZS10aXRsZVwiPuqyjOyLnOq4gDwvaDI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlc1tcImJ0bi1ib3hcIl19IHR5cGU9XCJidXR0b25cIj5cclxuICAgICAgICAgIOq4gOyTsOq4sFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJmaWx0ZXItc2VjdGlvblwiXX0+XHJcbiAgICAgICAgICA8U2VhcmNoRm9ybSAvPlxyXG4gICAgICAgICAgPERyb3Bkb3duTWVudSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxBcnRpY2xlTGlzdCBhcnRpY2xlcz17YXJ0aWNsZXN9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIkJlc3RBcnRpY2xlTGlzdCIsIkFydGljbGVMaXN0IiwiU2VhcmNoRm9ybSIsIkRyb3Bkb3duTWVudSIsInN0eWxlcyIsIkJvYXJkcyIsImFydGljbGVzIiwic2V0QXJ0aWNsZXMiLCJiZXN0QXJ0aWNsZXMiLCJzZXRCZXN0QXJ0aWNsZXMiLCJnZXRBcnRpY2xlcyIsInJlcyIsImdldCIsImFsbEFydGljbGVzIiwiZGF0YSIsImxpc3QiLCJlcnJvciIsImNvbnNvbGUiLCJnZXRCZXN0QXJ0aWNsZXNDb3VudCIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInVwZGF0ZUJlc3RBcnRpY2xlcyIsInNvcnRlZEFydGljbGVzIiwic29ydCIsImEiLCJiIiwibGlrZUNvdW50Iiwic2xpY2UiLCJsZW5ndGgiLCJoYW5kbGVSZXNpemUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiYXJ0aWNsZSIsImJ1dHRvbiIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/boards.js\n"));

/***/ })

});