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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Boards; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/axios */ \"./lib/axios.js\");\n/* harmony import */ var _components_BestArticleList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/BestArticleList */ \"./components/BestArticleList.js\");\n/* harmony import */ var _components_ArticleList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ArticleList */ \"./components/ArticleList.js\");\n/* harmony import */ var _components_SearchForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/SearchForm */ \"./components/SearchForm.js\");\n/* harmony import */ var _components_DropdownMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/DropdownMenu */ \"./components/DropdownMenu.js\");\n/* harmony import */ var _styles_boards_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/styles/boards.module.scss */ \"./styles/boards.module.scss\");\n/* harmony import */ var _styles_boards_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_boards_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Boards() {\n    _s();\n    const [articles, setArticles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [bestArticles, setBestArticles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    async function getArticles() {\n        try {\n            const res = await _lib_axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/articles\");\n            const allArticles = res.data.list || [];\n            const sortedArticles = allArticles.sort((a, b)=>b.likeCount - a.likeCount);\n            setArticles(allArticles);\n        } catch (error) {\n            console.error(\"Error fetching articles:\", error);\n        }\n    }\n    const getBestArticlesCount = ()=>{\n        const width = window.innerWidth;\n        if (width <= 768) return 1;\n        if (width <= 1200) return 2;\n        return 3;\n    };\n    const updateBestArticles = (allArticles)=>{\n        const sortedArticles = allArticles.sort((a, b)=>b.likeCount - a.likeCount);\n        setBestArticles(sortedArticles.slice(0, getBestArticlesCount()));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getArticles();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (articles.length > 0) {\n            updateBestArticles(articles);\n        }\n    }, [\n        articles\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleResize = ()=>{\n            if (articles.length > 0) {\n                updateBestArticles(articles);\n            }\n        };\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, [\n        articles\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"best-article\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"page-title\",\n                        children: \"베스트 게시글\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BestArticleList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        bestArticles: bestArticles\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_boards_module_scss__WEBPACK_IMPORTED_MODULE_7___default().article),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"page-title\",\n                        children: \"게시글\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"글쓰기\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_boards_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"filter-section\"]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DropdownMenu__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ArticleList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        articles: articles\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\rnals\\\\OneDrive\\\\바탕 화면\\\\sprint\\\\sprint-mission-9\\\\pages\\\\boards.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Boards, \"P86E9IZZKN5zvwzLf3KAk/k/40c=\");\n_c = Boards;\nvar _c;\n$RefreshReg$(_c, \"Boards\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ib2FyZHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDWjtBQUMyQjtBQUNQO0FBQ0g7QUFDSTtBQUNKO0FBRWxDLFNBQVNROztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNVLGNBQWNDLGdCQUFnQixHQUFHWCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRW5ELGVBQWVZO1FBQ2IsSUFBSTtZQUNGLE1BQU1DLE1BQU0sTUFBTVosc0RBQVMsQ0FBQztZQUM1QixNQUFNYyxjQUFjRixJQUFJRyxJQUFJLENBQUNDLElBQUksSUFBSSxFQUFFO1lBQ3ZDLE1BQU1DLGlCQUFpQkgsWUFBWUksSUFBSSxDQUNyQyxDQUFDQyxHQUFHQyxJQUFNQSxFQUFFQyxTQUFTLEdBQUdGLEVBQUVFLFNBQVM7WUFFckNiLFlBQVlNO1FBQ2QsRUFBRSxPQUFPUSxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyw0QkFBNEJBO1FBQzVDO0lBQ0Y7SUFFQSxNQUFNRSx1QkFBdUI7UUFDM0IsTUFBTUMsUUFBUUMsT0FBT0MsVUFBVTtRQUMvQixJQUFJRixTQUFTLEtBQUssT0FBTztRQUN6QixJQUFJQSxTQUFTLE1BQU0sT0FBTztRQUMxQixPQUFPO0lBQ1Q7SUFFQSxNQUFNRyxxQkFBcUIsQ0FBQ2Q7UUFDMUIsTUFBTUcsaUJBQWlCSCxZQUFZSSxJQUFJLENBQ3JDLENBQUNDLEdBQUdDLElBQU1BLEVBQUVDLFNBQVMsR0FBR0YsRUFBRUUsU0FBUztRQUVyQ1gsZ0JBQWdCTyxlQUFlWSxLQUFLLENBQUMsR0FBR0w7SUFDMUM7SUFFQTFCLGdEQUFTQSxDQUFDO1FBQ1JhO0lBQ0YsR0FBRyxFQUFFO0lBRUxiLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSVMsU0FBU3VCLE1BQU0sR0FBRyxHQUFHO1lBQ3ZCRixtQkFBbUJyQjtRQUNyQjtJQUNGLEdBQUc7UUFBQ0E7S0FBUztJQUViVCxnREFBU0EsQ0FBQztRQUNSLE1BQU1pQyxlQUFlO1lBQ25CLElBQUl4QixTQUFTdUIsTUFBTSxHQUFHLEdBQUc7Z0JBQ3ZCRixtQkFBbUJyQjtZQUNyQjtRQUNGO1FBRUFtQixPQUFPTSxnQkFBZ0IsQ0FBQyxVQUFVRDtRQUNsQyxPQUFPO1lBQ0xMLE9BQU9PLG1CQUFtQixDQUFDLFVBQVVGO1FBQ3ZDO0lBQ0YsR0FBRztRQUFDeEI7S0FBUztJQUViLHFCQUNFOzswQkFDRSw4REFBQzJCO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQWE7Ozs7OztrQ0FDM0IsOERBQUNsQyxtRUFBZUE7d0JBQUNRLGNBQWNBOzs7Ozs7Ozs7Ozs7MEJBRWpDLDhEQUFDeUI7Z0JBQUlDLFdBQVc5QiwyRUFBYzs7a0NBQzVCLDhEQUFDK0I7d0JBQUdELFdBQVU7a0NBQWE7Ozs7OztrQ0FDM0IsOERBQUNHO2tDQUFPOzs7Ozs7a0NBQ1IsOERBQUNKO3dCQUFJQyxXQUFXOUIscUZBQXdCOzswQ0FDdEMsOERBQUNGLDhEQUFVQTs7Ozs7MENBQ1gsOERBQUNDLGdFQUFZQTs7Ozs7Ozs7Ozs7a0NBRWYsOERBQUNGLCtEQUFXQTt3QkFBQ0ssVUFBVUE7Ozs7Ozs7Ozs7Ozs7O0FBSS9CO0dBdkV3QkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYm9hcmRzLmpzPzI3MTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcIkAvbGliL2F4aW9zXCI7XHJcbmltcG9ydCBCZXN0QXJ0aWNsZUxpc3QgZnJvbSBcIkAvY29tcG9uZW50cy9CZXN0QXJ0aWNsZUxpc3RcIjtcclxuaW1wb3J0IEFydGljbGVMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL0FydGljbGVMaXN0XCI7XHJcbmltcG9ydCBTZWFyY2hGb3JtIGZyb20gXCJAL2NvbXBvbmVudHMvU2VhcmNoRm9ybVwiO1xyXG5pbXBvcnQgRHJvcGRvd25NZW51IGZyb20gXCJAL2NvbXBvbmVudHMvRHJvcGRvd25NZW51XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL2JvYXJkcy5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9hcmRzKCkge1xyXG4gIGNvbnN0IFthcnRpY2xlcywgc2V0QXJ0aWNsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtiZXN0QXJ0aWNsZXMsIHNldEJlc3RBcnRpY2xlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGdldEFydGljbGVzKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FydGljbGVzXCIpO1xyXG4gICAgICBjb25zdCBhbGxBcnRpY2xlcyA9IHJlcy5kYXRhLmxpc3QgfHwgW107XHJcbiAgICAgIGNvbnN0IHNvcnRlZEFydGljbGVzID0gYWxsQXJ0aWNsZXMuc29ydChcclxuICAgICAgICAoYSwgYikgPT4gYi5saWtlQ291bnQgLSBhLmxpa2VDb3VudFxyXG4gICAgICApO1xyXG4gICAgICBzZXRBcnRpY2xlcyhhbGxBcnRpY2xlcyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgYXJ0aWNsZXM6XCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGdldEJlc3RBcnRpY2xlc0NvdW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIGlmICh3aWR0aCA8PSA3NjgpIHJldHVybiAxO1xyXG4gICAgaWYgKHdpZHRoIDw9IDEyMDApIHJldHVybiAyO1xyXG4gICAgcmV0dXJuIDM7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBkYXRlQmVzdEFydGljbGVzID0gKGFsbEFydGljbGVzKSA9PiB7XHJcbiAgICBjb25zdCBzb3J0ZWRBcnRpY2xlcyA9IGFsbEFydGljbGVzLnNvcnQoXHJcbiAgICAgIChhLCBiKSA9PiBiLmxpa2VDb3VudCAtIGEubGlrZUNvdW50XHJcbiAgICApO1xyXG4gICAgc2V0QmVzdEFydGljbGVzKHNvcnRlZEFydGljbGVzLnNsaWNlKDAsIGdldEJlc3RBcnRpY2xlc0NvdW50KCkpKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0QXJ0aWNsZXMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYXJ0aWNsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICB1cGRhdGVCZXN0QXJ0aWNsZXMoYXJ0aWNsZXMpO1xyXG4gICAgfVxyXG4gIH0sIFthcnRpY2xlc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xyXG4gICAgICBpZiAoYXJ0aWNsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHVwZGF0ZUJlc3RBcnRpY2xlcyhhcnRpY2xlcyk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgICB9O1xyXG4gIH0sIFthcnRpY2xlc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZXN0LWFydGljbGVcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwicGFnZS10aXRsZVwiPuuyoOyKpO2KuCDqsozsi5zquIA8L2gyPlxyXG4gICAgICAgIDxCZXN0QXJ0aWNsZUxpc3QgYmVzdEFydGljbGVzPXtiZXN0QXJ0aWNsZXN9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGV9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+6rKM7Iuc6riAPC9oMj5cclxuICAgICAgICA8YnV0dG9uPuq4gOyTsOq4sDwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJmaWx0ZXItc2VjdGlvblwiXX0+XHJcbiAgICAgICAgICA8U2VhcmNoRm9ybSAvPlxyXG4gICAgICAgICAgPERyb3Bkb3duTWVudSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxBcnRpY2xlTGlzdCBhcnRpY2xlcz17YXJ0aWNsZXN9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIkJlc3RBcnRpY2xlTGlzdCIsIkFydGljbGVMaXN0IiwiU2VhcmNoRm9ybSIsIkRyb3Bkb3duTWVudSIsInN0eWxlcyIsIkJvYXJkcyIsImFydGljbGVzIiwic2V0QXJ0aWNsZXMiLCJiZXN0QXJ0aWNsZXMiLCJzZXRCZXN0QXJ0aWNsZXMiLCJnZXRBcnRpY2xlcyIsInJlcyIsImdldCIsImFsbEFydGljbGVzIiwiZGF0YSIsImxpc3QiLCJzb3J0ZWRBcnRpY2xlcyIsInNvcnQiLCJhIiwiYiIsImxpa2VDb3VudCIsImVycm9yIiwiY29uc29sZSIsImdldEJlc3RBcnRpY2xlc0NvdW50Iiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwidXBkYXRlQmVzdEFydGljbGVzIiwic2xpY2UiLCJsZW5ndGgiLCJoYW5kbGVSZXNpemUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiYXJ0aWNsZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/boards.js\n"));

/***/ })

});