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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Prices; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Prices() {\n    _s();\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [granularity, setGranularity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"24h\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getPrices = async ()=>{\n            let req = await fetch(\"https://api.coingecko.com/api/v3/coins/cardano?localization=false&tickers=false&developer_data=false\");\n            let res = await req.json();\n            let adaUSD = res.market_data.current_price.usd.toFixed(2);\n            let adaGBP = res.market_data.current_price.gbp.toFixed(2);\n            let adaBTC = res.market_data.current_price.btc.toFixed(5);\n            let adaETH = res.market_data.current_price.eth.toFixed(5);\n            let adaUsdChange = \"\";\n            let adaGbpChange = \"\";\n            let adaBtcChange = \"\";\n            let adaEthChange = \"\";\n            if (granularity == \"24h\") {\n                adaUsdChange = res.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2);\n                adaGbpChange = res.market_data.price_change_percentage_24h_in_currency.gbp.toFixed(2);\n                adaBtcChange = res.market_data.price_change_percentage_24h_in_currency.btc.toFixed(2);\n                adaEthChange = res.market_data.price_change_percentage_24h_in_currency.eth.toFixed(2);\n            } else if (granularity == \"7d\") {\n                adaUsdChange = res.market_data.price_change_percentage_7d_in_currency.usd.toFixed(2);\n                adaGbpChange = res.market_data.price_change_percentage_7d_in_currency.gbp.toFixed(2);\n                adaBtcChange = res.market_data.price_change_percentage_7d_in_currency.btc.toFixed(2);\n                adaEthChange = res.market_data.price_change_percentage_7d_in_currency.eth.toFixed(2);\n            } else if (granularity == \"1m\") {\n                adaUsdChange = res.market_data.price_change_percentage_30d_in_currency.usd.toFixed(2);\n                adaGbpChange = res.market_data.price_change_percentage_30d_in_currency.gbp.toFixed(2);\n                adaBtcChange = res.market_data.price_change_percentage_30d_in_currency.btc.toFixed(2);\n                adaEthChange = res.market_data.price_change_percentage_30d_in_currency.eth.toFixed(2);\n            } else if (granularity == \"2m\") {\n                adaUsdChange = res.market_data.price_change_percentage_60d_in_currency.usd.toFixed(2);\n                adaGbpChange = res.market_data.price_change_percentage_60d_in_currency.gbp.toFixed(2);\n                adaBtcChange = res.market_data.price_change_percentage_60d_in_currency.btc.toFixed(2);\n                adaEthChange = res.market_data.price_change_percentage_60d_in_currency.eth.toFixed(2);\n            } else if (granularity == \"1y\") {\n                adaUsdChange = res.market_data.price_change_percentage_1y_in_currency.usd.toFixed(2);\n                adaGbpChange = res.market_data.price_change_percentage_1y_in_currency.gbp.toFixed(2);\n                adaBtcChange = res.market_data.price_change_percentage_1y_in_currency.btc.toFixed(2);\n                adaEthChange = res.market_data.price_change_percentage_1y_in_currency.eth.toFixed(2);\n            }\n            setPrices(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"sort-button\",\n                        children: [\n                            \"ADA/USD $\",\n                            adaUSD,\n                            \" (\",\n                            adaUsdChange,\n                            \"%)\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                        lineNumber: 60,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"sort-button\",\n                        children: [\n                            \"ADA/GBP \\xa3\",\n                            adaGBP,\n                            \" (\",\n                            adaGbpChange,\n                            \"%)\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                        lineNumber: 61,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"sort-button\",\n                        children: [\n                            \"ADA/ETH Ξ\",\n                            adaETH,\n                            \" (\",\n                            adaEthChange,\n                            \"%)\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                        lineNumber: 62,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"sort-button\",\n                        children: [\n                            \"ADA/BTC ₿\",\n                            adaBTC,\n                            \" (\",\n                            adaBtcChange,\n                            \"%)\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                        lineNumber: 64,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"sort-button\",\n                        onClick: ()=>increaseGranularity(granularity),\n                        children: granularity\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                        lineNumber: 65,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                lineNumber: 59,\n                columnNumber: 17\n            }, this));\n        };\n        getPrices();\n    }, [\n        granularity\n    ]);\n    const increaseGranularity = (granularity)=>{\n        if (granularity == \"24h\") {\n            setGranularity(\"7d\");\n        }\n        if (granularity == \"7d\") {\n            setGranularity(\"1m\");\n        }\n        if (granularity == \"1m\") {\n            setGranularity(\"2m\");\n        }\n        if (granularity == \"2m\") {\n            setGranularity(\"1y\");\n        }\n        if (granularity == \"1y\") {\n            setGranularity(\"24h\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: prices\n    }, void 0, false, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n        lineNumber: 91,\n        columnNumber: 12\n    }, this);\n}\n_s(Prices, \"zY4JOyUQie/wfp3e63UTE/3q5oc=\");\n_c = Prices;\nvar _c;\n$RefreshReg$(_c, \"Prices\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNMO0lBRUEscUJBQU8sOERBQUMrQjtrQkFBS2xDOzs7Ozs7QUFFakIsQ0FBQztHQTFGdUJEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wcmljZXMuanM/YTAxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJpY2VzICgpIHtcblxuICAgIGNvbnN0IFtwcmljZXMsIHNldFByaWNlc10gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFtncmFudWxhcml0eSwgc2V0R3JhbnVsYXJpdHldID0gdXNlU3RhdGUoJzI0aCcpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBnZXRQcmljZXMgPSBhc3luYyAoKSA9PiB7IFxuICAgICAgICAgICAgbGV0IHJlcSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5jb2luZ2Vja28uY29tL2FwaS92My9jb2lucy9jYXJkYW5vP2xvY2FsaXphdGlvbj1mYWxzZSZ0aWNrZXJzPWZhbHNlJmRldmVsb3Blcl9kYXRhPWZhbHNlJyk7XG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgcmVxLmpzb24oKTtcblxuICAgICAgICAgICAgbGV0IGFkYVVTRCA9IChyZXMubWFya2V0X2RhdGEuY3VycmVudF9wcmljZS51c2QpLnRvRml4ZWQoMik7XG4gICAgICAgICAgICBsZXQgYWRhR0JQID0gKHJlcy5tYXJrZXRfZGF0YS5jdXJyZW50X3ByaWNlLmdicCkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgIGxldCBhZGFCVEMgPSAocmVzLm1hcmtldF9kYXRhLmN1cnJlbnRfcHJpY2UuYnRjKS50b0ZpeGVkKDUpO1xuICAgICAgICAgICAgbGV0IGFkYUVUSCA9IChyZXMubWFya2V0X2RhdGEuY3VycmVudF9wcmljZS5ldGgpLnRvRml4ZWQoNSk7XG5cbiAgICAgICAgICAgIGxldCBhZGFVc2RDaGFuZ2UgPSAnJztcbiAgICAgICAgICAgIGxldCBhZGFHYnBDaGFuZ2UgPSAnJztcbiAgICAgICAgICAgIGxldCBhZGFCdGNDaGFuZ2UgPSAnJztcbiAgICAgICAgICAgIGxldCBhZGFFdGhDaGFuZ2UgPSAnJztcblxuICAgICAgICAgICAgaWYoZ3JhbnVsYXJpdHkgPT0gJzI0aCcpe1xuICAgICAgICAgICAgICAgIGFkYVVzZENoYW5nZSA9IChyZXMubWFya2V0X2RhdGEucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMjRoX2luX2N1cnJlbmN5LnVzZCkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICBhZGFHYnBDaGFuZ2UgPSAocmVzLm1hcmtldF9kYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzI0aF9pbl9jdXJyZW5jeS5nYnApLnRvRml4ZWQoMik7XG4gICAgICAgICAgICAgICAgYWRhQnRjQ2hhbmdlID0gKHJlcy5tYXJrZXRfZGF0YS5wcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8yNGhfaW5fY3VycmVuY3kuYnRjKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAgIGFkYUV0aENoYW5nZSA9IChyZXMubWFya2V0X2RhdGEucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMjRoX2luX2N1cnJlbmN5LmV0aCkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGdyYW51bGFyaXR5ID09ICc3ZCcpe1xuICAgICAgICAgICAgICAgIGFkYVVzZENoYW5nZSA9IChyZXMubWFya2V0X2RhdGEucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfN2RfaW5fY3VycmVuY3kudXNkKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAgIGFkYUdicENoYW5nZSA9IChyZXMubWFya2V0X2RhdGEucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfN2RfaW5fY3VycmVuY3kuZ2JwKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAgIGFkYUJ0Y0NoYW5nZSA9IChyZXMubWFya2V0X2RhdGEucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfN2RfaW5fY3VycmVuY3kuYnRjKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAgIGFkYUV0aENoYW5nZSA9IChyZXMubWFya2V0X2RhdGEucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfN2RfaW5fY3VycmVuY3kuZXRoKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZ3JhbnVsYXJpdHkgPT0gJzFtJyl7XG4gICAgICAgICAgICAgICAgYWRhVXNkQ2hhbmdlID0gKHJlcy5tYXJrZXRfZGF0YS5wcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8zMGRfaW5fY3VycmVuY3kudXNkKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAgIGFkYUdicENoYW5nZSA9IChyZXMubWFya2V0X2RhdGEucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMzBkX2luX2N1cnJlbmN5LmdicCkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICBhZGFCdGNDaGFuZ2UgPSAocmVzLm1hcmtldF9kYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzMwZF9pbl9jdXJyZW5jeS5idGMpLnRvRml4ZWQoMik7XG4gICAgICAgICAgICAgICAgYWRhRXRoQ2hhbmdlID0gKHJlcy5tYXJrZXRfZGF0YS5wcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8zMGRfaW5fY3VycmVuY3kuZXRoKS50b0ZpeGVkKDIpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChncmFudWxhcml0eSA9PSAnMm0nKXtcbiAgICAgICAgICAgICAgICBhZGFVc2RDaGFuZ2UgPSAocmVzLm1hcmtldF9kYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzYwZF9pbl9jdXJyZW5jeS51c2QpLnRvRml4ZWQoMik7XG4gICAgICAgICAgICAgICAgYWRhR2JwQ2hhbmdlID0gKHJlcy5tYXJrZXRfZGF0YS5wcmljZV9jaGFuZ2VfcGVyY2VudGFnZV82MGRfaW5fY3VycmVuY3kuZ2JwKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAgIGFkYUJ0Y0NoYW5nZSA9IChyZXMubWFya2V0X2RhdGEucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfNjBkX2luX2N1cnJlbmN5LmJ0YykudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICBhZGFFdGhDaGFuZ2UgPSAocmVzLm1hcmtldF9kYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzYwZF9pbl9jdXJyZW5jeS5ldGgpLnRvRml4ZWQoMik7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoZ3JhbnVsYXJpdHkgPT0gJzF5Jyl7XG4gICAgICAgICAgICAgICAgYWRhVXNkQ2hhbmdlID0gKHJlcy5tYXJrZXRfZGF0YS5wcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8xeV9pbl9jdXJyZW5jeS51c2QpLnRvRml4ZWQoMik7XG4gICAgICAgICAgICAgICAgYWRhR2JwQ2hhbmdlID0gKHJlcy5tYXJrZXRfZGF0YS5wcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8xeV9pbl9jdXJyZW5jeS5nYnApLnRvRml4ZWQoMik7XG4gICAgICAgICAgICAgICAgYWRhQnRjQ2hhbmdlID0gKHJlcy5tYXJrZXRfZGF0YS5wcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8xeV9pbl9jdXJyZW5jeS5idGMpLnRvRml4ZWQoMik7XG4gICAgICAgICAgICAgICAgYWRhRXRoQ2hhbmdlID0gKHJlcy5tYXJrZXRfZGF0YS5wcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8xeV9pbl9jdXJyZW5jeS5ldGgpLnRvRml4ZWQoMik7XG5cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBzZXRQcmljZXMoXG4gICAgICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzb3J0LWJ1dHRvblwiPkFEQS9VU0QgJHthZGFVU0R9ICh7YWRhVXNkQ2hhbmdlfSUpPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic29ydC1idXR0b25cIj5BREEvR0JQIMKje2FkYUdCUH0gKHthZGFHYnBDaGFuZ2V9JSk8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzb3J0LWJ1dHRvblwiPkFEQS9FVEggzp57YWRhRVRIfSAoe2FkYUV0aENoYW5nZX0lKTwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic29ydC1idXR0b25cIj5BREEvQlRDIOKCv3thZGFCVEN9ICh7YWRhQnRjQ2hhbmdlfSUpPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic29ydC1idXR0b25cIiBvbkNsaWNrPXsoKSA9PiBpbmNyZWFzZUdyYW51bGFyaXR5KGdyYW51bGFyaXR5KX0+e2dyYW51bGFyaXR5fTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvbmF2PlxuXG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgZ2V0UHJpY2VzKCk7XG4gICAgfSwgW2dyYW51bGFyaXR5XSlcblxuICAgIGNvbnN0IGluY3JlYXNlR3JhbnVsYXJpdHkgPSAoZ3JhbnVsYXJpdHkpID0+IHtcbiAgICAgICAgaWYoZ3JhbnVsYXJpdHkgPT0gJzI0aCcpe1xuICAgICAgICAgICAgc2V0R3JhbnVsYXJpdHkoJzdkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoZ3JhbnVsYXJpdHkgPT0gJzdkJyl7XG4gICAgICAgICAgICBzZXRHcmFudWxhcml0eSgnMW0nKTtcbiAgICAgICAgfVxuICAgICAgICBpZihncmFudWxhcml0eSA9PSAnMW0nKXtcbiAgICAgICAgICAgIHNldEdyYW51bGFyaXR5KCcybScpO1xuICAgICAgICB9XG4gICAgICAgIGlmKGdyYW51bGFyaXR5ID09ICcybScpe1xuICAgICAgICAgICAgc2V0R3JhbnVsYXJpdHkoJzF5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoZ3JhbnVsYXJpdHkgPT0gJzF5Jyl7XG4gICAgICAgICAgICBzZXRHcmFudWxhcml0eSgnMjRoJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4oPGRpdj57cHJpY2VzfTwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQcmljZXMiLCJwcmljZXMiLCJzZXRQcmljZXMiLCJncmFudWxhcml0eSIsInNldEdyYW51bGFyaXR5IiwiZ2V0UHJpY2VzIiwicmVxIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiYWRhVVNEIiwibWFya2V0X2RhdGEiLCJjdXJyZW50X3ByaWNlIiwidXNkIiwidG9GaXhlZCIsImFkYUdCUCIsImdicCIsImFkYUJUQyIsImJ0YyIsImFkYUVUSCIsImV0aCIsImFkYVVzZENoYW5nZSIsImFkYUdicENoYW5nZSIsImFkYUJ0Y0NoYW5nZSIsImFkYUV0aENoYW5nZSIsInByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzI0aF9pbl9jdXJyZW5jeSIsInByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzdkX2luX2N1cnJlbmN5IiwicHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMzBkX2luX2N1cnJlbmN5IiwicHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfNjBkX2luX2N1cnJlbmN5IiwicHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMXlfaW5fY3VycmVuY3kiLCJuYXYiLCJidXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaW5jcmVhc2VHcmFudWxhcml0eSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/prices.js\n"));

/***/ })

});