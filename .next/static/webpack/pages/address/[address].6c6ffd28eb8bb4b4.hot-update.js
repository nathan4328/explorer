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

/***/ "./src/pages/prices.js":
/*!*****************************!*\
  !*** ./src/pages/prices.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Prices; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Prices() {\n    _s();\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [granularity, setGranularity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"24 hours\");\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"red\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getPrices = async ()=>{\n            let req = await fetch(\"https://api.coingecko.com/api/v3/coins/cardano?localization=false&tickers=false&developer_data=false\");\n            let res = await req.json();\n            let adaUSD = res.market_data.current_price.usd.toFixed(2);\n            let adaGBP = res.market_data.current_price.gbp.toFixed(2);\n            let adaBTC = res.market_data.current_price.btc.toFixed(5);\n            let adaETH = res.market_data.current_price.eth.toFixed(5);\n            let adaUsdChange = \"\";\n            let adaGbpChange = \"\";\n            let adaBtcChange = \"\";\n            let adaEthChange = \"\";\n            if (granularity == \"24 hours\") {\n                adaUsdChange = res.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2);\n                adaGbpChange = res.market_data.price_change_percentage_24h_in_currency.gbp.toFixed(2);\n                adaBtcChange = res.market_data.price_change_percentage_24h_in_currency.btc.toFixed(2);\n                adaEthChange = res.market_data.price_change_percentage_24h_in_currency.eth.toFixed(2);\n            } else if (granularity == \"7 days\") {\n                adaUsdChange = res.market_data.price_change_percentage_7d_in_currency.usd.toFixed(2);\n                adaGbpChange = res.market_data.price_change_percentage_7d_in_currency.gbp.toFixed(2);\n                adaBtcChange = res.market_data.price_change_percentage_7d_in_currency.btc.toFixed(2);\n                adaEthChange = res.market_data.price_change_percentage_7d_in_currency.eth.toFixed(2);\n            } else if (granularity == \"30 days\") {\n                adaUsdChange = res.market_data.price_change_percentage_30d_in_currency.usd.toFixed(2);\n                adaGbpChange = res.market_data.price_change_percentage_30d_in_currency.gbp.toFixed(2);\n                adaBtcChange = res.market_data.price_change_percentage_30d_in_currency.btc.toFixed(2);\n                adaEthChange = res.market_data.price_change_percentage_30d_in_currency.eth.toFixed(2);\n            } else if (granularity == \"60 days\") {\n                adaUsdChange = res.market_data.price_change_percentage_60d_in_currency.usd.toFixed(2);\n                adaGbpChange = res.market_data.price_change_percentage_60d_in_currency.gbp.toFixed(2);\n                adaBtcChange = res.market_data.price_change_percentage_60d_in_currency.btc.toFixed(2);\n                adaEthChange = res.market_data.price_change_percentage_60d_in_currency.eth.toFixed(2);\n            } else if (granularity == \"1 year\") {\n                adaUsdChange = res.market_data.price_change_percentage_1y_in_currency.usd.toFixed(2);\n                adaGbpChange = res.market_data.price_change_percentage_1y_in_currency.gbp.toFixed(2);\n                adaBtcChange = res.market_data.price_change_percentage_1y_in_currency.btc.toFixed(2);\n                adaEthChange = res.market_data.price_change_percentage_1y_in_currency.eth.toFixed(2);\n            }\n            let color = \"black\";\n            if (adaUsdChange <= 0) {\n                color = \"red\";\n            } else if (adaUsdChange == 0) {\n                color = \"grey\";\n            } else {\n                color = \"#7FFF00\";\n            }\n            setPrices(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"out-price\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"price-label\",\n                                children: [\n                                    \"ADA/USD $\",\n                                    adaUSD\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                                lineNumber: 73,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"price-label\",\n                                style: {\n                                    color: color\n                                },\n                                children: [\n                                    \"(\",\n                                    adaUsdChange,\n                                    \"%)\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                                lineNumber: 74,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                        lineNumber: 72,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"out-price\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"price-label\",\n                                children: [\n                                    \"ADA/GBP \\xa3\",\n                                    adaGBP\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                                lineNumber: 78,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"price-label\",\n                                style: {\n                                    color: color\n                                },\n                                children: [\n                                    \"(\",\n                                    adaGbpChange,\n                                    \"%)\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                                lineNumber: 79,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                        lineNumber: 77,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"out-price\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"price-label\",\n                                children: [\n                                    \"ADA/ETH Ξ\",\n                                    adaETH\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                                lineNumber: 83,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"price-label\",\n                                style: {\n                                    color: color\n                                },\n                                children: [\n                                    \"(\",\n                                    adaEthChange,\n                                    \"%)\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                                lineNumber: 84,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                        lineNumber: 82,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"out-price\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"price-label\",\n                                children: [\n                                    \"ADA/BTC ₿\",\n                                    adaBTC\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                                lineNumber: 88,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"price-label\",\n                                style: {\n                                    color: color\n                                },\n                                children: [\n                                    \"(\",\n                                    adaBtcChange,\n                                    \"%)\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                                lineNumber: 89,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                        lineNumber: 87,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"setting-label\",\n                                children: \"Price Granularity\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                                lineNumber: 92,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"setting-label\",\n                                onClick: ()=>increaseGranularity(granularity),\n                                children: granularity\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                                lineNumber: 93,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                        lineNumber: 91,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                lineNumber: 71,\n                columnNumber: 17\n            }, this));\n        };\n        getPrices();\n    }, [\n        granularity\n    ]);\n    const increaseGranularity = (granularity)=>{\n        if (granularity == \"24 hours\") {\n            setGranularity(\"7 days\");\n        }\n        if (granularity == \"7 days\") {\n            setGranularity(\"30 days\");\n        }\n        if (granularity == \"30 days\") {\n            setGranularity(\"60 days\");\n        }\n        if (granularity == \"60 days\") {\n            setGranularity(\"1 year\");\n        }\n        if (granularity == \"1 year\") {\n            setGranularity(\"25 hours\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: prices\n    }, void 0, false, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n        lineNumber: 120,\n        columnNumber: 12\n    }, this);\n}\n_s(Prices, \"PkeqbBV6E7eGj5uv4b0qSIllRPE=\");\n_c = Prices;\nvar _c;\n$RefreshReg$(_c, \"Prices\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU9BO2dDQUFLOztvQ0FBRztvQ0FBRXFCO29DQUFhOzs7Ozs7Ozs7Ozs7O2tDQUduRSw4REFBQ087d0JBQUlDLFdBQVU7OzBDQUNmLDhEQUFDRDtnQ0FBSUMsV0FBVTs7b0NBQWM7b0NBQVVmOzs7Ozs7OzBDQUN2Qyw4REFBQ2M7Z0NBQUlDLFdBQVU7Z0NBQWNDLE9BQU87b0NBQUM5QixPQUFPQTtnQ0FBSzs7b0NBQUc7b0NBQUVvQjtvQ0FBYTs7Ozs7Ozs7Ozs7OztrQ0FFbkUsOERBQUNROzswQ0FDRCw4REFBQ0c7Z0NBQU1GLFdBQVU7MENBQWdCOzs7Ozs7MENBQ2pDLDhEQUFDRztnQ0FBT0gsV0FBVTtnQ0FBZ0JJLFNBQVMsSUFBTUMsb0JBQW9CcEM7MENBQWVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFLaEc7UUFDQUk7SUFDSixHQUFHO1FBQUNKO0tBQVk7SUFFaEIsTUFBTW9DLHNCQUFzQixDQUFDcEMsY0FBZ0I7UUFDekMsSUFBR0EsZUFBZSxZQUFXO1lBQ3pCQyxlQUFlO1FBQ25CLENBQUM7UUFDRCxJQUFHRCxlQUFlLFVBQVM7WUFDdkJDLGVBQWU7UUFDbkIsQ0FBQztRQUNELElBQUdELGVBQWUsV0FBVTtZQUN4QkMsZUFBZTtRQUNuQixDQUFDO1FBQ0QsSUFBR0QsZUFBZSxXQUFVO1lBQ3hCQyxlQUFlO1FBQ25CLENBQUM7UUFDRCxJQUFHRCxlQUFlLFVBQVM7WUFDdkJDLGVBQWU7UUFDbkIsQ0FBQztJQUNMO0lBRUEscUJBQU8sOERBQUM2QjtrQkFBS2hDOzs7Ozs7QUFFakIsQ0FBQztHQXZIdUJEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wcmljZXMuanM/YTAxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJpY2VzICgpIHtcblxuICAgIGNvbnN0IFtwcmljZXMsIHNldFByaWNlc10gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFtncmFudWxhcml0eSwgc2V0R3JhbnVsYXJpdHldID0gdXNlU3RhdGUoJzI0IGhvdXJzJyk7XG4gICAgY29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZSgncmVkJyk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBnZXRQcmljZXMgPSBhc3luYyAoKSA9PiB7IFxuICAgICAgICAgICAgbGV0IHJlcSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5jb2luZ2Vja28uY29tL2FwaS92My9jb2lucy9jYXJkYW5vP2xvY2FsaXphdGlvbj1mYWxzZSZ0aWNrZXJzPWZhbHNlJmRldmVsb3Blcl9kYXRhPWZhbHNlJyk7XG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgcmVxLmpzb24oKTtcblxuICAgICAgICAgICAgbGV0IGFkYVVTRCA9IChyZXMubWFya2V0X2RhdGEuY3VycmVudF9wcmljZS51c2QpLnRvRml4ZWQoMik7XG4gICAgICAgICAgICBsZXQgYWRhR0JQID0gKHJlcy5tYXJrZXRfZGF0YS5jdXJyZW50X3ByaWNlLmdicCkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgIGxldCBhZGFCVEMgPSAocmVzLm1hcmtldF9kYXRhLmN1cnJlbnRfcHJpY2UuYnRjKS50b0ZpeGVkKDUpO1xuICAgICAgICAgICAgbGV0IGFkYUVUSCA9IChyZXMubWFya2V0X2RhdGEuY3VycmVudF9wcmljZS5ldGgpLnRvRml4ZWQoNSk7XG5cbiAgICAgICAgICAgIGxldCBhZGFVc2RDaGFuZ2UgPSAnJztcbiAgICAgICAgICAgIGxldCBhZGFHYnBDaGFuZ2UgPSAnJztcbiAgICAgICAgICAgIGxldCBhZGFCdGNDaGFuZ2UgPSAnJztcbiAgICAgICAgICAgIGxldCBhZGFFdGhDaGFuZ2UgPSAnJztcblxuICAgICAgICAgICAgaWYoZ3JhbnVsYXJpdHkgPT0gJzI0IGhvdXJzJyl7XG4gICAgICAgICAgICAgICAgYWRhVXNkQ2hhbmdlID0gKHJlcy5tYXJrZXRfZGF0YS5wcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8yNGhfaW5fY3VycmVuY3kudXNkKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAgIGFkYUdicENoYW5nZSA9IChyZXMubWFya2V0X2RhdGEucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMjRoX2luX2N1cnJlbmN5LmdicCkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICBhZGFCdGNDaGFuZ2UgPSAocmVzLm1hcmtldF9kYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzI0aF9pbl9jdXJyZW5jeS5idGMpLnRvRml4ZWQoMik7XG4gICAgICAgICAgICAgICAgYWRhRXRoQ2hhbmdlID0gKHJlcy5tYXJrZXRfZGF0YS5wcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8yNGhfaW5fY3VycmVuY3kuZXRoKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZ3JhbnVsYXJpdHkgPT0gJzcgZGF5cycpe1xuICAgICAgICAgICAgICAgIGFkYVVzZENoYW5nZSA9IChyZXMubWFya2V0X2RhdGEucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfN2RfaW5fY3VycmVuY3kudXNkKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAgIGFkYUdicENoYW5nZSA9IChyZXMubWFya2V0X2RhdGEucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfN2RfaW5fY3VycmVuY3kuZ2JwKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAgIGFkYUJ0Y0NoYW5nZSA9IChyZXMubWFya2V0X2RhdGEucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfN2RfaW5fY3VycmVuY3kuYnRjKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAgIGFkYUV0aENoYW5nZSA9IChyZXMubWFya2V0X2RhdGEucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfN2RfaW5fY3VycmVuY3kuZXRoKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZ3JhbnVsYXJpdHkgPT0gJzMwIGRheXMnKXtcbiAgICAgICAgICAgICAgICBhZGFVc2RDaGFuZ2UgPSAocmVzLm1hcmtldF9kYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzMwZF9pbl9jdXJyZW5jeS51c2QpLnRvRml4ZWQoMik7XG4gICAgICAgICAgICAgICAgYWRhR2JwQ2hhbmdlID0gKHJlcy5tYXJrZXRfZGF0YS5wcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8zMGRfaW5fY3VycmVuY3kuZ2JwKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAgIGFkYUJ0Y0NoYW5nZSA9IChyZXMubWFya2V0X2RhdGEucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMzBkX2luX2N1cnJlbmN5LmJ0YykudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICBhZGFFdGhDaGFuZ2UgPSAocmVzLm1hcmtldF9kYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzMwZF9pbl9jdXJyZW5jeS5ldGgpLnRvRml4ZWQoMik7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGdyYW51bGFyaXR5ID09ICc2MCBkYXlzJyl7XG4gICAgICAgICAgICAgICAgYWRhVXNkQ2hhbmdlID0gKHJlcy5tYXJrZXRfZGF0YS5wcmljZV9jaGFuZ2VfcGVyY2VudGFnZV82MGRfaW5fY3VycmVuY3kudXNkKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAgIGFkYUdicENoYW5nZSA9IChyZXMubWFya2V0X2RhdGEucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfNjBkX2luX2N1cnJlbmN5LmdicCkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICBhZGFCdGNDaGFuZ2UgPSAocmVzLm1hcmtldF9kYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzYwZF9pbl9jdXJyZW5jeS5idGMpLnRvRml4ZWQoMik7XG4gICAgICAgICAgICAgICAgYWRhRXRoQ2hhbmdlID0gKHJlcy5tYXJrZXRfZGF0YS5wcmljZV9jaGFuZ2VfcGVyY2VudGFnZV82MGRfaW5fY3VycmVuY3kuZXRoKS50b0ZpeGVkKDIpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGdyYW51bGFyaXR5ID09ICcxIHllYXInKXtcbiAgICAgICAgICAgICAgICBhZGFVc2RDaGFuZ2UgPSAocmVzLm1hcmtldF9kYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzF5X2luX2N1cnJlbmN5LnVzZCkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICBhZGFHYnBDaGFuZ2UgPSAocmVzLm1hcmtldF9kYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzF5X2luX2N1cnJlbmN5LmdicCkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICBhZGFCdGNDaGFuZ2UgPSAocmVzLm1hcmtldF9kYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzF5X2luX2N1cnJlbmN5LmJ0YykudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICBhZGFFdGhDaGFuZ2UgPSAocmVzLm1hcmtldF9kYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzF5X2luX2N1cnJlbmN5LmV0aCkudG9GaXhlZCgyKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgY29sb3IgPSAnYmxhY2snO1xuXG4gICAgICAgICAgICBpZihhZGFVc2RDaGFuZ2UgPD0wICl7XG4gICAgICAgICAgICAgICAgY29sb3IgPSAncmVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGFkYVVzZENoYW5nZSA9PSAwKXtcbiAgICAgICAgICAgICAgICBjb2xvciA9ICdncmV5JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgY29sb3IgPSAnIzdGRkYwMCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldFByaWNlcyhcbiAgICAgICAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dC1wcmljZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZS1sYWJlbFwiPkFEQS9VU0QgJHthZGFVU0R9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlLWxhYmVsXCIgc3R5bGU9e3tjb2xvcjogY29sb3J9fT4oe2FkYVVzZENoYW5nZX0lKTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dC1wcmljZVwiPiAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlLWxhYmVsXCI+QURBL0dCUCDCo3thZGFHQlB9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2UtbGFiZWxcIiBzdHlsZT17e2NvbG9yOiBjb2xvcn19Pih7YWRhR2JwQ2hhbmdlfSUpPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0LXByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2UtbGFiZWxcIj5BREEvRVRIIM6ee2FkYUVUSH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZS1sYWJlbFwiIHN0eWxlPXt7Y29sb3I6IGNvbG9yfX0+KHthZGFFdGhDaGFuZ2V9JSk8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXQtcHJpY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZS1sYWJlbFwiPkFEQS9CVEMg4oK/e2FkYUJUQ308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZS1sYWJlbFwiIHN0eWxlPXt7Y29sb3I6IGNvbG9yfX0+KHthZGFCdGNDaGFuZ2V9JSk8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzZXR0aW5nLWxhYmVsXCI+UHJpY2UgR3JhbnVsYXJpdHk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNldHRpbmctbGFiZWxcIiBvbkNsaWNrPXsoKSA9PiBpbmNyZWFzZUdyYW51bGFyaXR5KGdyYW51bGFyaXR5KX0+e2dyYW51bGFyaXR5fTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L25hdj5cblxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIGdldFByaWNlcygpO1xuICAgIH0sIFtncmFudWxhcml0eV0pXG5cbiAgICBjb25zdCBpbmNyZWFzZUdyYW51bGFyaXR5ID0gKGdyYW51bGFyaXR5KSA9PiB7XG4gICAgICAgIGlmKGdyYW51bGFyaXR5ID09ICcyNCBob3Vycycpe1xuICAgICAgICAgICAgc2V0R3JhbnVsYXJpdHkoJzcgZGF5cycpO1xuICAgICAgICB9XG4gICAgICAgIGlmKGdyYW51bGFyaXR5ID09ICc3IGRheXMnKXtcbiAgICAgICAgICAgIHNldEdyYW51bGFyaXR5KCczMCBkYXlzJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoZ3JhbnVsYXJpdHkgPT0gJzMwIGRheXMnKXtcbiAgICAgICAgICAgIHNldEdyYW51bGFyaXR5KCc2MCBkYXlzJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoZ3JhbnVsYXJpdHkgPT0gJzYwIGRheXMnKXtcbiAgICAgICAgICAgIHNldEdyYW51bGFyaXR5KCcxIHllYXInKTtcbiAgICAgICAgfVxuICAgICAgICBpZihncmFudWxhcml0eSA9PSAnMSB5ZWFyJyl7XG4gICAgICAgICAgICBzZXRHcmFudWxhcml0eSgnMjUgaG91cnMnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybig8ZGl2PntwcmljZXN9PC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlByaWNlcyIsInByaWNlcyIsInNldFByaWNlcyIsImdyYW51bGFyaXR5Iiwic2V0R3JhbnVsYXJpdHkiLCJjb2xvciIsInNldENvbG9yIiwiZ2V0UHJpY2VzIiwicmVxIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiYWRhVVNEIiwibWFya2V0X2RhdGEiLCJjdXJyZW50X3ByaWNlIiwidXNkIiwidG9GaXhlZCIsImFkYUdCUCIsImdicCIsImFkYUJUQyIsImJ0YyIsImFkYUVUSCIsImV0aCIsImFkYVVzZENoYW5nZSIsImFkYUdicENoYW5nZSIsImFkYUJ0Y0NoYW5nZSIsImFkYUV0aENoYW5nZSIsInByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzI0aF9pbl9jdXJyZW5jeSIsInByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzdkX2luX2N1cnJlbmN5IiwicHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMzBkX2luX2N1cnJlbmN5IiwicHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfNjBkX2luX2N1cnJlbmN5IiwicHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMXlfaW5fY3VycmVuY3kiLCJuYXYiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImxhYmVsIiwiYnV0dG9uIiwib25DbGljayIsImluY3JlYXNlR3JhbnVsYXJpdHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/prices.js\n"));

/***/ })

});