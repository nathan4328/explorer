"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/address/[address]",{

/***/ "./src/pages/fts.js":
/*!**************************!*\
  !*** ./src/pages/fts.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Fts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Fts(param) {\n    let { tokens  } = param;\n    _s();\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const showTokens = ()=>{\n            if (tokens == null) {\n            //base\n            } else {\n                let _display = [];\n                let policies = Object.keys(tokens);\n                _display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    className: \"grid-item-ft\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: \"Coin\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 17,\n                            columnNumber: 68\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: \"Ticker\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 17,\n                            columnNumber: 81\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: \"Quantity\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 17,\n                            columnNumber: 96\n                        }, this)\n                    ]\n                }, \"key\", true, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                    lineNumber: 17,\n                    columnNumber: 25\n                }, this));\n                for (const policy of policies){\n                    let token = tokens[policy][0];\n                    let name = token.metadata.ticker;\n                    if (token.metadata.ticker == null) {\n                        if (token.metadata.name != null) {\n                            name = token.metadata.name;\n                        } else {\n                            name = \"unknown\";\n                        }\n                    }\n                    _display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        className: \"grid-item-ft\",\n                        onClick: ()=>router.push(\"/token/\" + token.policy_id + token.asset_name),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"ft-img\",\n                                    src: token.ipfs\n                                }, void 0, false, {\n                                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                                lineNumber: 33,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                children: name\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                                lineNumber: 34,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                children: token.quantity / 1000000\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                                lineNumber: 34,\n                                columnNumber: 30\n                            }, this)\n                        ]\n                    }, token.asset_name + \"ft\", true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 32,\n                        columnNumber: 27\n                    }, this));\n                }\n                let table = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: _display\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 36,\n                        columnNumber: 30\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                    lineNumber: 36,\n                    columnNumber: 23\n                }, this);\n                setDisplay(table);\n            }\n        };\n        showTokens();\n    }, [\n        tokens\n    ]);\n    //returns a grid view of all NFTs grouped by policy\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid-ft\",\n        children: display\n    }, void 0, false, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(Fts, \"TdQcjU6l/UJHsbfeJC//FZ+coQc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Fts;\nvar _c;\n$RefreshReg$(_c, \"Fts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZnRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3QztBQUNJO0FBRTdCLFNBQVNHLElBQUssS0FBUSxFQUFDO1FBQVQsRUFBQ0MsT0FBTSxFQUFDLEdBQVI7O0lBRXpCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3pDLE1BQU1LLFNBQVNQLHNEQUFTQTtJQUV4QkMsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1PLGFBQWEsSUFBTTtZQUN2QixJQUFHSixVQUFVLElBQUksRUFBQztZQUNoQixNQUFNO1lBQ1IsT0FDSTtnQkFDRixJQUFJSyxXQUFXLEVBQUU7Z0JBQ2pCLElBQUlDLFdBQVdDLE9BQU9DLElBQUksQ0FBQ1I7Z0JBQzNCSyxTQUFTSSxJQUFJLGVBQUMsOERBQUNDO29CQUFlQyxXQUFZOztzQ0FBZSw4REFBQ0M7c0NBQUc7Ozs7OztzQ0FBUyw4REFBQ0E7c0NBQUc7Ozs7OztzQ0FBVyw4REFBQ0E7c0NBQUc7Ozs7Ozs7bUJBQWpFOzs7OztnQkFDeEIsS0FBSSxNQUFNQyxVQUFVUCxTQUFTO29CQUMzQixJQUFJUSxRQUFRZCxNQUFNLENBQUNhLE9BQU8sQ0FBQyxFQUFFO29CQUM3QixJQUFJRSxPQUFPRCxNQUFNRSxRQUFRLENBQUNDLE1BQU07b0JBQ2hDLElBQUdILE1BQU1FLFFBQVEsQ0FBQ0MsTUFBTSxJQUFJLElBQUksRUFBQzt3QkFFL0IsSUFBR0gsTUFBTUUsUUFBUSxDQUFDRCxJQUFJLElBQUksSUFBSSxFQUFDOzRCQUM3QkEsT0FBT0QsTUFBTUUsUUFBUSxDQUFDRCxJQUFJO3dCQUM1QixPQUNJOzRCQUNGQSxPQUFPO3dCQUNULENBQUM7b0JBR0gsQ0FBQztvQkFDRFYsU0FBU0ksSUFBSSxlQUFDLDhEQUFDQzt3QkFBbUNDLFdBQVk7d0JBQWVPLFNBQVMsSUFBTWYsT0FBT00sSUFBSSxDQUFDLFlBQVVLLE1BQU1LLFNBQVMsR0FBQ0wsTUFBTU0sVUFBVTs7MENBQ2hKLDhEQUFDUjswQ0FBRyw0RUFBQ1M7b0NBQUlWLFdBQVU7b0NBQVNXLEtBQUtSLE1BQU1TLElBQUk7Ozs7Ozs7Ozs7OzBDQUMzQyw4REFBQ1g7MENBQUlHOzs7Ozs7MENBQVUsOERBQUNIOzBDQUFLRSxNQUFNVSxRQUFRLEdBQUU7Ozs7Ozs7dUJBRmRWLE1BQU1NLFVBQVUsR0FBRzs7Ozs7Z0JBRzlDO2dCQUNBLElBQUlLLHNCQUFRLDhEQUFDQTs4QkFBTSw0RUFBQ0M7a0NBQU9yQjs7Ozs7Ozs7Ozs7Z0JBQzNCSCxXQUFXdUI7WUFDYixDQUFDO1FBRUg7UUFDQXJCO0lBQ0YsR0FBRztRQUFDSjtLQUFPO0lBR1gsbURBQW1EO0lBQ25ELHFCQUNBLDhEQUFDMkI7UUFBSWhCLFdBQVU7a0JBQVdWOzs7Ozs7QUFFOUIsQ0FBQztHQTdDdUJGOztRQUdMSCxrREFBU0E7OztLQUhKRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvZnRzLmpzP2RiM2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZ0cyAoe3Rva2Vuc30pe1xuXG4gICAgY29uc3QgW2Rpc3BsYXksIHNldERpc3BsYXldID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IHNob3dUb2tlbnMgPSAoKSA9PiB7XG4gICAgICAgIGlmKHRva2VucyA9PSBudWxsKXtcbiAgICAgICAgICAvL2Jhc2VcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIGxldCBfZGlzcGxheSA9IFtdO1xuICAgICAgICAgIGxldCBwb2xpY2llcyA9IE9iamVjdC5rZXlzKHRva2Vucyk7XG4gICAgICAgICAgX2Rpc3BsYXkucHVzaCg8dHIga2V5ID0gJ2tleScgY2xhc3NOYW1lID0gXCJncmlkLWl0ZW0tZnRcIj48dGQ+Q29pbjwvdGQ+PHRkPlRpY2tlcjwvdGQ+PHRkPlF1YW50aXR5PC90ZD48L3RyPilcbiAgICAgICAgICBmb3IoY29uc3QgcG9saWN5IG9mIHBvbGljaWVzKXtcbiAgICAgICAgICAgIGxldCB0b2tlbiA9IHRva2Vuc1twb2xpY3ldWzBdO1xuICAgICAgICAgICAgbGV0IG5hbWUgPSB0b2tlbi5tZXRhZGF0YS50aWNrZXI7XG4gICAgICAgICAgICBpZih0b2tlbi5tZXRhZGF0YS50aWNrZXIgPT0gbnVsbCl7XG5cbiAgICAgICAgICAgICAgaWYodG9rZW4ubWV0YWRhdGEubmFtZSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICBuYW1lID0gdG9rZW4ubWV0YWRhdGEubmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIG5hbWUgPSAndW5rbm93bic7XG4gICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfZGlzcGxheS5wdXNoKDx0ciBrZXkgPSB7dG9rZW4uYXNzZXRfbmFtZSArICdmdCd9IGNsYXNzTmFtZSA9IFwiZ3JpZC1pdGVtLWZ0XCIgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy90b2tlbi8nK3Rva2VuLnBvbGljeV9pZCt0b2tlbi5hc3NldF9uYW1lKX0+XG4gICAgICAgICAgICAgIDx0ZD48aW1nIGNsYXNzTmFtZT0nZnQtaW1nJyBzcmM9e3Rva2VuLmlwZnN9PjwvaW1nPjwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57bmFtZX08L3RkPjx0ZD57KHRva2VuLnF1YW50aXR5LyAxMDAwMDAwKX08L3RkPjwvdHI+KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IHRhYmxlID0gPHRhYmxlPjx0Ym9keT57X2Rpc3BsYXl9PC90Ym9keT48L3RhYmxlPlxuICAgICAgICAgIHNldERpc3BsYXkodGFibGUpO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICAgIHNob3dUb2tlbnMoKTtcbiAgICB9LCBbdG9rZW5zXSk7XG5cblxuICAgIC8vcmV0dXJucyBhIGdyaWQgdmlldyBvZiBhbGwgTkZUcyBncm91cGVkIGJ5IHBvbGljeVxuICAgIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWZ0XCI+e2Rpc3BsYXl9PC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZ0cyIsInRva2VucyIsImRpc3BsYXkiLCJzZXREaXNwbGF5Iiwicm91dGVyIiwic2hvd1Rva2VucyIsIl9kaXNwbGF5IiwicG9saWNpZXMiLCJPYmplY3QiLCJrZXlzIiwicHVzaCIsInRyIiwiY2xhc3NOYW1lIiwidGQiLCJwb2xpY3kiLCJ0b2tlbiIsIm5hbWUiLCJtZXRhZGF0YSIsInRpY2tlciIsIm9uQ2xpY2siLCJwb2xpY3lfaWQiLCJhc3NldF9uYW1lIiwiaW1nIiwic3JjIiwiaXBmcyIsInF1YW50aXR5IiwidGFibGUiLCJ0Ym9keSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/fts.js\n"));

/***/ })

});