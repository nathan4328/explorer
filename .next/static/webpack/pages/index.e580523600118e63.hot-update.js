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

/***/ "./pages/wallet.js":
/*!*************************!*\
  !*** ./pages/wallet.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _dropdownBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropdownBox */ \"./pages/dropdownBox.js\");\n\n\n\n\nfunction Wallet(props) {\n    function displayTokens(tokenList, type) {\n        let keys = Object.keys(tokenList);\n        let display = [];\n        for (const element of keys){\n            let token = tokenList[element][0];\n            let tokenArr = tokenList[element];\n            let tokenDisplay = [];\n            for (const element1 of tokenArr){\n                tokenDisplay.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"dropdown-content\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"token-sub-img\",\n                            src: element1.ipfs\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/pages/wallet.js\",\n                            lineNumber: 20,\n                            columnNumber: 88\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"item-info\",\n                            children: [\n                                \"Name:\\xa0\",\n                                element1.name\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/pages/wallet.js\",\n                            lineNumber: 20,\n                            columnNumber: 148\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"item-info\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/token/\" + element1.unit,\n                                children: \"Open\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/pages/wallet.js\",\n                                lineNumber: 20,\n                                columnNumber: 233\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/pages/wallet.js\",\n                            lineNumber: 20,\n                            columnNumber: 206\n                        }, this)\n                    ]\n                }, element1.name, true, {\n                    fileName: \"/Users/nathan/Desktop/explorer/pages/wallet.js\",\n                    lineNumber: 20,\n                    columnNumber: 31\n                }, this));\n            }\n            if (type == \"ALL\") {\n                display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid-item\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"token-img\",\n                            src: token.ipfs,\n                            alt: \"failed to load image\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/pages/wallet.js\",\n                            lineNumber: 25,\n                            columnNumber: 70\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"item-info\",\n                            children: [\n                                \"Policy ID: \\xa0\",\n                                token.policyId,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/nathan/Desktop/explorer/pages/wallet.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 73\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/pages/wallet.js\",\n                            lineNumber: 26,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"item-info\",\n                            children: [\n                                \"Quantity:\\xa0\",\n                                tokenList[element].length\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/pages/wallet.js\",\n                            lineNumber: 26,\n                            columnNumber: 85\n                        }, this)\n                    ]\n                }, token.unit, true, {\n                    fileName: \"/Users/nathan/Desktop/explorer/pages/wallet.js\",\n                    lineNumber: 25,\n                    columnNumber: 26\n                }, this));\n                display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dropdownBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        content: tokenDisplay\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/pages/wallet.js\",\n                        lineNumber: 27,\n                        columnNumber: 31\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/pages/wallet.js\",\n                    lineNumber: 27,\n                    columnNumber: 26\n                }, this));\n            }\n            if (type == \"nft\") {\n                if (token.quantity == 1) {\n                    display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid-item nft\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"token-img\",\n                                src: token.ipfs,\n                                alt: \"failed to load image\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/pages/wallet.js\",\n                                lineNumber: 31,\n                                columnNumber: 76\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"item-info\",\n                                children: [\n                                    \"Policy ID: \\xa0\",\n                                    token.policyId,\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/nathan/Desktop/explorer/pages/wallet.js\",\n                                        lineNumber: 32,\n                                        columnNumber: 75\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/pages/wallet.js\",\n                                lineNumber: 32,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"item-info\",\n                                children: [\n                                    \"Quantity:\\xa0\",\n                                    tokenList[element].length\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/pages/wallet.js\",\n                                lineNumber: 32,\n                                columnNumber: 87\n                            }, this)\n                        ]\n                    }, token.unit, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/pages/wallet.js\",\n                        lineNumber: 31,\n                        columnNumber: 28\n                    }, this));\n                    display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dropdownBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            content: tokenDisplay\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/pages/wallet.js\",\n                            lineNumber: 33,\n                            columnNumber: 33\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/pages/wallet.js\",\n                        lineNumber: 33,\n                        columnNumber: 28\n                    }, this));\n                }\n            }\n            if (type == \"ft\") {\n                if (token.quantity != 1) {\n                    display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" grid-item coin\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"token-img\",\n                                src: token.ipfs,\n                                alt: \"failed to load image\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/pages/wallet.js\",\n                                lineNumber: 38,\n                                columnNumber: 78\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"item-info\",\n                                children: token.policyId\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/pages/wallet.js\",\n                                lineNumber: 39,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/token/\" + token.unit,\n                                    children: \"Open\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nathan/Desktop/explorer/pages/wallet.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 69\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/pages/wallet.js\",\n                                lineNumber: 39,\n                                columnNumber: 64\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"item-info\",\n                                children: [\n                                    \"Quantity:\\xa0\",\n                                    token.quantity\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/pages/wallet.js\",\n                                lineNumber: 39,\n                                columnNumber: 120\n                            }, this)\n                        ]\n                    }, token.unit, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/pages/wallet.js\",\n                        lineNumber: 38,\n                        columnNumber: 28\n                    }, this));\n                }\n            }\n        }\n        return display;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: displayTokens(props.list, props.type)\n    }, void 0, false, {\n        fileName: \"/Users/nathan/Desktop/explorer/pages/wallet.js\",\n        lineNumber: 48,\n        columnNumber: 9\n    }, this);\n}\n_c = Wallet;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wallet);\nvar _c;\n$RefreshReg$(_c, \"Wallet\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBZ0JMLE1BQU1pQixRQUFROzs7Ozs7Ozt1QkFEM0lqQixNQUFNVyxJQUFJOzs7OztnQkFFbkMsQ0FBQztZQUNILENBQUM7UUFFSDtRQUNBLE9BQU9iO0lBQ1Q7SUFFRixxQkFDSSw4REFBQ007a0JBQUtYLGNBQWNELE1BQU0wQixJQUFJLEVBQUUxQixNQUFNRyxJQUFJOzs7Ozs7QUFLbEQ7S0EvQ1NKO0FBaURULCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3dhbGxldC5qcz84ZGI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgRHJvcGRvd25Cb3ggZnJvbSBcIi4vZHJvcGRvd25Cb3hcIjtcblxuXG5mdW5jdGlvbiBXYWxsZXQgKHByb3BzKSB7XG5cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlUb2tlbnModG9rZW5MaXN0LCB0eXBlKXtcbiAgICBcbiAgICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyh0b2tlbkxpc3QpO1xuICAgICAgICBsZXQgZGlzcGxheSA9IFtdO1xuICAgIFxuICAgIFxuICAgICAgICBmb3IoY29uc3QgZWxlbWVudCBvZiBrZXlzKXtcbiAgICAgICAgICBsZXQgdG9rZW4gPSB0b2tlbkxpc3RbZWxlbWVudF1bMF07XG4gICAgICAgICAgbGV0IHRva2VuQXJyID0gdG9rZW5MaXN0W2VsZW1lbnRdO1xuICAgICAgICAgIGxldCB0b2tlbkRpc3BsYXkgPSBbXTtcbiAgICAgICAgICBmb3IoY29uc3QgZWxlbWVudCBvZiB0b2tlbkFycil7XG4gICAgICAgICAgICB0b2tlbkRpc3BsYXkucHVzaCg8ZGl2IGNsYXNzTmFtZSA9IFwiZHJvcGRvd24tY29udGVudFwiIGtleSA9IHtlbGVtZW50Lm5hbWV9PjxpbWcgY2xhc3NOYW1lID0gXCJ0b2tlbi1zdWItaW1nXCIgc3JjID0ge2VsZW1lbnQuaXBmc30+PC9pbWc+PGRpdiBjbGFzc05hbWU9XCJpdGVtLWluZm9cIj5OYW1lOiZuYnNwO3tlbGVtZW50Lm5hbWV9PC9kaXY+PGRpdiBjbGFzc05hbWU9XCJpdGVtLWluZm9cIj48TGluayBocmVmPXtcIi90b2tlbi9cIitlbGVtZW50LnVuaXR9Pk9wZW48L0xpbms+PC9kaXY+PC9kaXY+KVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICBcbiAgICAgICAgICBpZih0eXBlID09ICdBTEwnKXtcbiAgICAgICAgICAgIGRpc3BsYXkucHVzaCg8ZGl2IGtleT17dG9rZW4udW5pdH0gY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PGltZyBjbGFzc05hbWUgPSBcInRva2VuLWltZ1wiIHNyYz17dG9rZW4uaXBmc30gYWx0ID0gJ2ZhaWxlZCB0byBsb2FkIGltYWdlJz48L2ltZz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1pbmZvXCI+UG9saWN5IElEOiAmbmJzcDt7dG9rZW4ucG9saWN5SWR9PGJyIC8+PC9kaXY+PGRpdiBjbGFzc05hbWU9XCJpdGVtLWluZm9cIj5RdWFudGl0eTombmJzcDt7dG9rZW5MaXN0W2VsZW1lbnRdLmxlbmd0aH08L2Rpdj48L2Rpdj4pO1xuICAgICAgICAgICAgZGlzcGxheS5wdXNoKDxkaXY+PERyb3Bkb3duQm94IGNvbnRlbnQgPSB7dG9rZW5EaXNwbGF5fS8+PC9kaXY+KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYodHlwZSA9PSAnbmZ0Jyl7XG4gICAgICAgICAgICBpZih0b2tlbi5xdWFudGl0eSA9PSAxKXtcbiAgICAgICAgICAgICAgZGlzcGxheS5wdXNoKDxkaXYga2V5PXt0b2tlbi51bml0fSBjbGFzc05hbWU9XCJncmlkLWl0ZW0gbmZ0XCI+PGltZyBjbGFzc05hbWUgPSBcInRva2VuLWltZ1wiIHNyYz17dG9rZW4uaXBmc30gYWx0ID0gJ2ZhaWxlZCB0byBsb2FkIGltYWdlJz48L2ltZz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWluZm9cIj5Qb2xpY3kgSUQ6ICZuYnNwO3t0b2tlbi5wb2xpY3lJZH08YnIgLz48L2Rpdj48ZGl2IGNsYXNzTmFtZT1cIml0ZW0taW5mb1wiPlF1YW50aXR5OiZuYnNwO3t0b2tlbkxpc3RbZWxlbWVudF0ubGVuZ3RofTwvZGl2PjwvZGl2Pik7XG4gICAgICAgICAgICAgIGRpc3BsYXkucHVzaCg8ZGl2PjxEcm9wZG93bkJveCBjb250ZW50ID0ge3Rva2VuRGlzcGxheX0vPjwvZGl2Pik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKHR5cGUgPT0gJ2Z0Jyl7XG4gICAgICAgICAgICBpZih0b2tlbi5xdWFudGl0eSAhPSAxKXtcbiAgICAgICAgICAgICAgZGlzcGxheS5wdXNoKDxkaXYga2V5PXt0b2tlbi51bml0fSBjbGFzc05hbWU9XCIgZ3JpZC1pdGVtIGNvaW5cIj48aW1nIGNsYXNzTmFtZSA9IFwidG9rZW4taW1nXCIgc3JjPXt0b2tlbi5pcGZzfSBhbHQgPSAnZmFpbGVkIHRvIGxvYWQgaW1hZ2UnPjwvaW1nPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0taW5mb1wiPnt0b2tlbi5wb2xpY3lJZH08L2Rpdj48ZGl2PjxMaW5rIGhyZWY9e1wiL3Rva2VuL1wiK3Rva2VuLnVuaXR9Pk9wZW48L0xpbms+PC9kaXY+PGRpdiBjbGFzc05hbWU9XCJpdGVtLWluZm9cIj5RdWFudGl0eTombmJzcDt7dG9rZW4ucXVhbnRpdHl9PC9kaXY+PC9kaXY+KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IFxuICAgIFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkaXNwbGF5O1xuICAgICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PntkaXNwbGF5VG9rZW5zKHByb3BzLmxpc3QsIHByb3BzLnR5cGUpfTwvZGl2PlxuICAgICk7XG5cblxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBXYWxsZXQ7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTGluayIsIkRyb3Bkb3duQm94IiwiV2FsbGV0IiwicHJvcHMiLCJkaXNwbGF5VG9rZW5zIiwidG9rZW5MaXN0IiwidHlwZSIsImtleXMiLCJPYmplY3QiLCJkaXNwbGF5IiwiZWxlbWVudCIsInRva2VuIiwidG9rZW5BcnIiLCJ0b2tlbkRpc3BsYXkiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaXBmcyIsIm5hbWUiLCJocmVmIiwidW5pdCIsImFsdCIsInBvbGljeUlkIiwiYnIiLCJsZW5ndGgiLCJjb250ZW50IiwicXVhbnRpdHkiLCJsaXN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/wallet.js\n"));

/***/ })

});