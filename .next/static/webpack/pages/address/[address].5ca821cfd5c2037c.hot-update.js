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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Fts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Fts(param) {\n    let { tokens  } = param;\n    _s();\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        showTokens(tokens);\n    }, [\n        tokens\n    ]);\n    const showTokens = (tokens)=>{\n        if (tokens == null) {\n        //base\n        } else {\n            let _display = [];\n            let policies = Object.keys(tokens);\n            _display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                className: \"grid-item-ft\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"Coin\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 21,\n                        columnNumber: 66\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"Ticker\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 21,\n                        columnNumber: 79\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"Quantity\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 21,\n                        columnNumber: 94\n                    }, this)\n                ]\n            }, \"key\", true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                lineNumber: 21,\n                columnNumber: 23\n            }, this));\n            for (const policy of policies){\n                let token = tokens[policy][0];\n                let name = token.metadata.ticker;\n                if (token.metadata.ticker == null) {\n                    if (token.metadata.name != null) {\n                        name = token.metadata.name;\n                    } else {\n                        name = \"unknown\";\n                    }\n                }\n                _display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    className: \"grid-item-ft\",\n                    onClick: ()=>router.push(\"/token/\" + token.policy_id + token.asset_name),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"ft-img\",\n                                src: token.ipfs\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                                lineNumber: 37,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: token.quantity / 1000000\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 38,\n                            columnNumber: 28\n                        }, this)\n                    ]\n                }, token.asset_name + \"ft\", true, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                    lineNumber: 36,\n                    columnNumber: 25\n                }, this));\n            }\n            let table = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: _display\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                    lineNumber: 40,\n                    columnNumber: 28\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                lineNumber: 40,\n                columnNumber: 21\n            }, this);\n            setDisplay(table);\n        }\n    };\n    //returns a grid view of all NFTs grouped by policy\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overview\"\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid-ft\",\n                children: display\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n        lineNumber: 47,\n        columnNumber: 7\n    }, this);\n}\n_s(Fts, \"TdQcjU6l/UJHsbfeJC//FZ+coQc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Fts;\nvar _c;\n$RefreshReg$(_c, \"Fts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZnRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3QztBQUNJO0FBRTdCLFNBQVNHLElBQUssS0FBUSxFQUFDO1FBQVQsRUFBQ0MsT0FBTSxFQUFDLEdBQVI7O0lBRXpCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3pDLE1BQU1LLFNBQVNQLHNEQUFTQTtJQUV4QkMsZ0RBQVNBLENBQUMsSUFBTTtRQUVkTyxXQUFXSjtJQUNiLEdBQUc7UUFBQ0E7S0FBTztJQUVYLE1BQU1JLGFBQWEsQ0FBQ0osU0FBVztRQUM3QixJQUFHQSxVQUFVLElBQUksRUFBQztRQUNoQixNQUFNO1FBQ1IsT0FDSTtZQUNGLElBQUlLLFdBQVcsRUFBRTtZQUNqQixJQUFJQyxXQUFXQyxPQUFPQyxJQUFJLENBQUNSO1lBQzNCSyxTQUFTSSxJQUFJLGVBQUMsOERBQUNDO2dCQUFlQyxXQUFZOztrQ0FBZSw4REFBQ0M7a0NBQUc7Ozs7OztrQ0FBUyw4REFBQ0E7a0NBQUc7Ozs7OztrQ0FBVyw4REFBQ0E7a0NBQUc7Ozs7Ozs7ZUFBakU7Ozs7O1lBQ3hCLEtBQUksTUFBTUMsVUFBVVAsU0FBUztnQkFDM0IsSUFBSVEsUUFBUWQsTUFBTSxDQUFDYSxPQUFPLENBQUMsRUFBRTtnQkFDN0IsSUFBSUUsT0FBT0QsTUFBTUUsUUFBUSxDQUFDQyxNQUFNO2dCQUNoQyxJQUFHSCxNQUFNRSxRQUFRLENBQUNDLE1BQU0sSUFBSSxJQUFJLEVBQUM7b0JBRS9CLElBQUdILE1BQU1FLFFBQVEsQ0FBQ0QsSUFBSSxJQUFJLElBQUksRUFBQzt3QkFDN0JBLE9BQU9ELE1BQU1FLFFBQVEsQ0FBQ0QsSUFBSTtvQkFDNUIsT0FDSTt3QkFDRkEsT0FBTztvQkFDVCxDQUFDO2dCQUdILENBQUM7Z0JBQ0RWLFNBQVNJLElBQUksZUFBQyw4REFBQ0M7b0JBQW1DQyxXQUFZO29CQUFlTyxTQUFTLElBQU1mLE9BQU9NLElBQUksQ0FBQyxZQUFVSyxNQUFNSyxTQUFTLEdBQUNMLE1BQU1NLFVBQVU7O3NDQUNoSiw4REFBQ1I7c0NBQUcsNEVBQUNTO2dDQUFJVixXQUFVO2dDQUFTVyxLQUFLUixNQUFNUyxJQUFJOzs7Ozs7Ozs7OztzQ0FDM0MsOERBQUNYO3NDQUFJRzs7Ozs7O3NDQUFVLDhEQUFDSDtzQ0FBS0UsTUFBTVUsUUFBUSxHQUFFOzs7Ozs7O21CQUZkVixNQUFNTSxVQUFVLEdBQUc7Ozs7O1lBRzlDO1lBQ0EsSUFBSUssc0JBQVEsOERBQUNBOzBCQUFNLDRFQUFDQzs4QkFBT3JCOzs7Ozs7Ozs7OztZQUMzQkgsV0FBV3VCO1FBQ2IsQ0FBQztJQUVIO0lBQ0EsbURBQW1EO0lBQ25ELHFCQUNFLDhEQUFDRTs7MEJBQ0MsOERBQUNBO2dCQUFJaEIsV0FBVTs7Ozs7OzBCQUNmLDhEQUFDZ0I7Z0JBQUloQixXQUFVOzBCQUFXVjs7Ozs7Ozs7Ozs7O0FBSWxDLENBQUM7R0FqRHVCRjs7UUFHTEgsa0RBQVNBOzs7S0FISkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Z0cy5qcz9kYjNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGdHMgKHt0b2tlbnN9KXtcblxuICAgIGNvbnN0IFtkaXNwbGF5LCBzZXREaXNwbGF5XSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICAgIHNob3dUb2tlbnModG9rZW5zKTtcbiAgICB9LCBbdG9rZW5zXSk7XG5cbiAgICBjb25zdCBzaG93VG9rZW5zID0gKHRva2VucykgPT4ge1xuICAgICAgaWYodG9rZW5zID09IG51bGwpe1xuICAgICAgICAvL2Jhc2VcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIGxldCBfZGlzcGxheSA9IFtdO1xuICAgICAgICBsZXQgcG9saWNpZXMgPSBPYmplY3Qua2V5cyh0b2tlbnMpO1xuICAgICAgICBfZGlzcGxheS5wdXNoKDx0ciBrZXkgPSAna2V5JyBjbGFzc05hbWUgPSBcImdyaWQtaXRlbS1mdFwiPjx0ZD5Db2luPC90ZD48dGQ+VGlja2VyPC90ZD48dGQ+UXVhbnRpdHk8L3RkPjwvdHI+KVxuICAgICAgICBmb3IoY29uc3QgcG9saWN5IG9mIHBvbGljaWVzKXtcbiAgICAgICAgICBsZXQgdG9rZW4gPSB0b2tlbnNbcG9saWN5XVswXTtcbiAgICAgICAgICBsZXQgbmFtZSA9IHRva2VuLm1ldGFkYXRhLnRpY2tlcjtcbiAgICAgICAgICBpZih0b2tlbi5tZXRhZGF0YS50aWNrZXIgPT0gbnVsbCl7XG5cbiAgICAgICAgICAgIGlmKHRva2VuLm1ldGFkYXRhLm5hbWUgIT0gbnVsbCl7XG4gICAgICAgICAgICAgIG5hbWUgPSB0b2tlbi5tZXRhZGF0YS5uYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgbmFtZSA9ICd1bmtub3duJztcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgfVxuICAgICAgICAgIF9kaXNwbGF5LnB1c2goPHRyIGtleSA9IHt0b2tlbi5hc3NldF9uYW1lICsgJ2Z0J30gY2xhc3NOYW1lID0gXCJncmlkLWl0ZW0tZnRcIiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL3Rva2VuLycrdG9rZW4ucG9saWN5X2lkK3Rva2VuLmFzc2V0X25hbWUpfT5cbiAgICAgICAgICAgIDx0ZD48aW1nIGNsYXNzTmFtZT0nZnQtaW1nJyBzcmM9e3Rva2VuLmlwZnN9PjwvaW1nPjwvdGQ+XG4gICAgICAgICAgICA8dGQ+e25hbWV9PC90ZD48dGQ+eyh0b2tlbi5xdWFudGl0eS8gMTAwMDAwMCl9PC90ZD48L3RyPik7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRhYmxlID0gPHRhYmxlPjx0Ym9keT57X2Rpc3BsYXl9PC90Ym9keT48L3RhYmxlPlxuICAgICAgICBzZXREaXNwbGF5KHRhYmxlKTtcbiAgICAgIH1cblxuICAgIH1cbiAgICAvL3JldHVybnMgYSBncmlkIHZpZXcgb2YgYWxsIE5GVHMgZ3JvdXBlZCBieSBwb2xpY3lcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVydmlld1wiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtZnRcIj57ZGlzcGxheX08L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZ0cyIsInRva2VucyIsImRpc3BsYXkiLCJzZXREaXNwbGF5Iiwicm91dGVyIiwic2hvd1Rva2VucyIsIl9kaXNwbGF5IiwicG9saWNpZXMiLCJPYmplY3QiLCJrZXlzIiwicHVzaCIsInRyIiwiY2xhc3NOYW1lIiwidGQiLCJwb2xpY3kiLCJ0b2tlbiIsIm5hbWUiLCJtZXRhZGF0YSIsInRpY2tlciIsIm9uQ2xpY2siLCJwb2xpY3lfaWQiLCJhc3NldF9uYW1lIiwiaW1nIiwic3JjIiwiaXBmcyIsInF1YW50aXR5IiwidGFibGUiLCJ0Ym9keSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/fts.js\n"));

/***/ })

});