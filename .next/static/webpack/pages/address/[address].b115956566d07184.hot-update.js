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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Prices; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Prices() {\n    _s();\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [granularity, setGranularity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"24h\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getPrices = async ()=>{\n            let req = await fetch(\"https://api.coingecko.com/api/v3/coins/cardano?localization=false&tickers=false&developer_data=false\");\n            let res = await req.json();\n            let adaUSD = res.market_data.current_price.usd.toFixed(2);\n            let adaGBP = res.market_data.current_price.gbp.toFixed(2);\n            let adaBTC = res.market_data.current_price.btc.toFixed(5);\n            let adaUsdChange = \"\";\n            let adaGbpChange = \"\";\n            let adaBtcChange = \"\";\n            if (granularity == \"24h\") {\n                adaUsdChange = res.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2);\n                adaGbpChange = res.market_data.price_change_percentage_24h_in_currency.gbp.toFixed(2);\n                adaBtcChange = res.market_data.price_change_percentage_24h_in_currency.btc.toFixed(2);\n            } else if (granularity == \"7d\") {\n                adaUsdChange = res.market_data.price_change_percentage_7d_in_currency.usd.toFixed(2);\n                adaGbpChange = res.market_data.price_change_percentage_7d_in_currency.gbp.toFixed(2);\n                adaBtcChange = res.market_data.price_change_percentage_7d_in_currency.btc.toFixed(2);\n            } else if (granularity == \"1m\") {\n                adaUsdChange = res.market_data.price_change_percentage_30d_in_currency.usd.toFixed(2);\n                adaGbpChange = res.market_data.price_change_percentage_30d_in_currency.gbp.toFixed(2);\n                adaBtcChange = res.market_data.price_change_percentage_30d_in_currency.btc.toFixed(2);\n            } else if (granularity == \"2m\") {\n                adaUsdChange = res.market_data.price_change_percentage_60d_in_currency.usd.toFixed(2);\n                adaGbpChange = res.market_data.price_change_percentage_60d_in_currency.gbp.toFixed(2);\n                adaBtcChange = res.market_data.price_change_percentage_60d_in_currency.btc.toFixed(2);\n            } else if (granularity == \"1y\") {\n                adaUsdChange = res.market_data.price_change_percentage_1y_in_currency.usd.toFixed(2);\n                adaGbpChange = res.market_data.price_change_percentage_1y_in_currency.gbp.toFixed(2);\n                adaBtcChange = res.market_data.price_change_percentage_1y_in_currency.btc.toFixed(2);\n            }\n            setPrices(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"sort-button\",\n                        children: [\n                            \"ADA/USD $\",\n                            adaUSD,\n                            \" (\",\n                            adaUsdChange,\n                            \"%)\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                        lineNumber: 50,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"sort-button\",\n                        children: [\n                            \"ADA/GBP \\xa3\",\n                            adaGBP,\n                            \" (\",\n                            adaGbpChange,\n                            \"%)\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                        lineNumber: 51,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"sort-button\",\n                        children: [\n                            \"ADA/BTC ₿\",\n                            adaBTC,\n                            \" (\",\n                            adaBtcChange,\n                            \"%)\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                        lineNumber: 52,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"sort-button\",\n                        onClick: ()=>increaseGranularity(granularity),\n                        children: granularity\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                        lineNumber: 53,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                lineNumber: 49,\n                columnNumber: 17\n            }, this));\n        };\n        getPrices();\n    }, [\n        granularity\n    ]);\n    const increaseGranularity = (granularity)=>{\n        if (granularity == \"24h\") {\n            setGranularity(\"7d\");\n        }\n        if (granularity == \"7d\") {\n            setGranularity(\"1m\");\n        }\n        if (granularity == \"1m\") {\n            setGranularity(\"2m\");\n        }\n        if (granularity == \"2m\") {\n            setGranularity(\"1y\");\n        }\n        if (granularity == \"1y\") {\n            setGranularity(\"24h\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: prices\n    }, void 0, false, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n        lineNumber: 79,\n        columnNumber: 12\n    }, this);\n}\n_s(Prices, \"zY4JOyUQie/wfp3e63UTE/3q5oc=\");\n_c = Prices;\nvar _c;\n$RefreshReg$(_c, \"Prices\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDhEQUFDUTt3QkFBT0MsV0FBVTs7NEJBQWM7NEJBQVVaOzRCQUFPOzRCQUFHSTs0QkFBYTs7Ozs7OztrQ0FDakUsOERBQUNPO3dCQUFPQyxXQUFVO3dCQUFjQyxTQUFTLElBQU1DLG9CQUFvQjVCO2tDQUFlQTs7Ozs7Ozs7Ozs7O1FBSTlGO1FBQ0FFO0lBQ0osR0FBRztRQUFDRjtLQUFZO0lBRWhCLE1BQU00QixzQkFBc0IsQ0FBQzVCLGNBQWdCO1FBQ3pDLElBQUdBLGVBQWUsT0FBTTtZQUNwQkMsZUFBZTtRQUNuQixDQUFDO1FBQ0QsSUFBR0QsZUFBZSxNQUFLO1lBQ25CQyxlQUFlO1FBQ25CLENBQUM7UUFDRCxJQUFHRCxlQUFlLE1BQUs7WUFDbkJDLGVBQWU7UUFDbkIsQ0FBQztRQUNELElBQUdELGVBQWUsTUFBSztZQUNuQkMsZUFBZTtRQUNuQixDQUFDO1FBQ0QsSUFBR0QsZUFBZSxNQUFLO1lBQ25CQyxlQUFlO1FBQ25CLENBQUM7SUFDTDtJQUVBLHFCQUFPLDhEQUFDNEI7a0JBQUsvQjs7Ozs7O0FBRWpCLENBQUM7R0E5RXVCRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJpY2VzLmpzP2EwMTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByaWNlcyAoKSB7XG5cbiAgICBjb25zdCBbcHJpY2VzLCBzZXRQcmljZXNdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbZ3JhbnVsYXJpdHksIHNldEdyYW51bGFyaXR5XSA9IHVzZVN0YXRlKCcyNGgnKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZ2V0UHJpY2VzID0gYXN5bmMgKCkgPT4geyBcbiAgICAgICAgICAgIGxldCByZXEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuY29pbmdlY2tvLmNvbS9hcGkvdjMvY29pbnMvY2FyZGFubz9sb2NhbGl6YXRpb249ZmFsc2UmdGlja2Vycz1mYWxzZSZkZXZlbG9wZXJfZGF0YT1mYWxzZScpO1xuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IHJlcS5qc29uKCk7XG5cbiAgICAgICAgICAgIGxldCBhZGFVU0QgPSAocmVzLm1hcmtldF9kYXRhLmN1cnJlbnRfcHJpY2UudXNkKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgbGV0IGFkYUdCUCA9IChyZXMubWFya2V0X2RhdGEuY3VycmVudF9wcmljZS5nYnApLnRvRml4ZWQoMik7XG4gICAgICAgICAgICBsZXQgYWRhQlRDID0gKHJlcy5tYXJrZXRfZGF0YS5jdXJyZW50X3ByaWNlLmJ0YykudG9GaXhlZCg1KTtcblxuICAgICAgICAgICAgbGV0IGFkYVVzZENoYW5nZSA9ICcnO1xuICAgICAgICAgICAgbGV0IGFkYUdicENoYW5nZSA9ICcnO1xuICAgICAgICAgICAgbGV0IGFkYUJ0Y0NoYW5nZSA9ICcnO1xuXG4gICAgICAgICAgICBpZihncmFudWxhcml0eSA9PSAnMjRoJyl7XG4gICAgICAgICAgICAgICAgYWRhVXNkQ2hhbmdlID0gKHJlcy5tYXJrZXRfZGF0YS5wcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8yNGhfaW5fY3VycmVuY3kudXNkKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAgIGFkYUdicENoYW5nZSA9IChyZXMubWFya2V0X2RhdGEucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMjRoX2luX2N1cnJlbmN5LmdicCkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICBhZGFCdGNDaGFuZ2UgPSAocmVzLm1hcmtldF9kYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzI0aF9pbl9jdXJyZW5jeS5idGMpLnRvRml4ZWQoMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChncmFudWxhcml0eSA9PSAnN2QnKXtcbiAgICAgICAgICAgICAgICBhZGFVc2RDaGFuZ2UgPSAocmVzLm1hcmtldF9kYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzdkX2luX2N1cnJlbmN5LnVzZCkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICBhZGFHYnBDaGFuZ2UgPSAocmVzLm1hcmtldF9kYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzdkX2luX2N1cnJlbmN5LmdicCkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICBhZGFCdGNDaGFuZ2UgPSAocmVzLm1hcmtldF9kYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzdkX2luX2N1cnJlbmN5LmJ0YykudG9GaXhlZCgyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGdyYW51bGFyaXR5ID09ICcxbScpe1xuICAgICAgICAgICAgICAgIGFkYVVzZENoYW5nZSA9IChyZXMubWFya2V0X2RhdGEucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMzBkX2luX2N1cnJlbmN5LnVzZCkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICBhZGFHYnBDaGFuZ2UgPSAocmVzLm1hcmtldF9kYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzMwZF9pbl9jdXJyZW5jeS5nYnApLnRvRml4ZWQoMik7XG4gICAgICAgICAgICAgICAgYWRhQnRjQ2hhbmdlID0gKHJlcy5tYXJrZXRfZGF0YS5wcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8zMGRfaW5fY3VycmVuY3kuYnRjKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZ3JhbnVsYXJpdHkgPT0gJzJtJyl7XG4gICAgICAgICAgICAgICAgYWRhVXNkQ2hhbmdlID0gKHJlcy5tYXJrZXRfZGF0YS5wcmljZV9jaGFuZ2VfcGVyY2VudGFnZV82MGRfaW5fY3VycmVuY3kudXNkKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAgIGFkYUdicENoYW5nZSA9IChyZXMubWFya2V0X2RhdGEucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfNjBkX2luX2N1cnJlbmN5LmdicCkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICBhZGFCdGNDaGFuZ2UgPSAocmVzLm1hcmtldF9kYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzYwZF9pbl9jdXJyZW5jeS5idGMpLnRvRml4ZWQoMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGdyYW51bGFyaXR5ID09ICcxeScpe1xuICAgICAgICAgICAgICAgIGFkYVVzZENoYW5nZSA9IChyZXMubWFya2V0X2RhdGEucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMXlfaW5fY3VycmVuY3kudXNkKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAgIGFkYUdicENoYW5nZSA9IChyZXMubWFya2V0X2RhdGEucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMXlfaW5fY3VycmVuY3kuZ2JwKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAgIGFkYUJ0Y0NoYW5nZSA9IChyZXMubWFya2V0X2RhdGEucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMXlfaW5fY3VycmVuY3kuYnRjKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIHNldFByaWNlcyhcbiAgICAgICAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNvcnQtYnV0dG9uXCI+QURBL1VTRCAke2FkYVVTRH0gKHthZGFVc2RDaGFuZ2V9JSk8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzb3J0LWJ1dHRvblwiPkFEQS9HQlAgwqN7YWRhR0JQfSAoe2FkYUdicENoYW5nZX0lKTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNvcnQtYnV0dG9uXCI+QURBL0JUQyDigr97YWRhQlRDfSAoe2FkYUJ0Y0NoYW5nZX0lKTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNvcnQtYnV0dG9uXCIgb25DbGljaz17KCkgPT4gaW5jcmVhc2VHcmFudWxhcml0eShncmFudWxhcml0eSl9PntncmFudWxhcml0eX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L25hdj5cblxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIGdldFByaWNlcygpO1xuICAgIH0sIFtncmFudWxhcml0eV0pXG5cbiAgICBjb25zdCBpbmNyZWFzZUdyYW51bGFyaXR5ID0gKGdyYW51bGFyaXR5KSA9PiB7XG4gICAgICAgIGlmKGdyYW51bGFyaXR5ID09ICcyNGgnKXtcbiAgICAgICAgICAgIHNldEdyYW51bGFyaXR5KCc3ZCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmKGdyYW51bGFyaXR5ID09ICc3ZCcpe1xuICAgICAgICAgICAgc2V0R3JhbnVsYXJpdHkoJzFtJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoZ3JhbnVsYXJpdHkgPT0gJzFtJyl7XG4gICAgICAgICAgICBzZXRHcmFudWxhcml0eSgnMm0nKTtcbiAgICAgICAgfVxuICAgICAgICBpZihncmFudWxhcml0eSA9PSAnMm0nKXtcbiAgICAgICAgICAgIHNldEdyYW51bGFyaXR5KCcxeScpO1xuICAgICAgICB9XG4gICAgICAgIGlmKGdyYW51bGFyaXR5ID09ICcxeScpe1xuICAgICAgICAgICAgc2V0R3JhbnVsYXJpdHkoJzI0aCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuKDxkaXY+e3ByaWNlc308L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUHJpY2VzIiwicHJpY2VzIiwic2V0UHJpY2VzIiwiZ3JhbnVsYXJpdHkiLCJzZXRHcmFudWxhcml0eSIsImdldFByaWNlcyIsInJlcSIsImZldGNoIiwicmVzIiwianNvbiIsImFkYVVTRCIsIm1hcmtldF9kYXRhIiwiY3VycmVudF9wcmljZSIsInVzZCIsInRvRml4ZWQiLCJhZGFHQlAiLCJnYnAiLCJhZGFCVEMiLCJidGMiLCJhZGFVc2RDaGFuZ2UiLCJhZGFHYnBDaGFuZ2UiLCJhZGFCdGNDaGFuZ2UiLCJwcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8yNGhfaW5fY3VycmVuY3kiLCJwcmljZV9jaGFuZ2VfcGVyY2VudGFnZV83ZF9pbl9jdXJyZW5jeSIsInByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzMwZF9pbl9jdXJyZW5jeSIsInByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzYwZF9pbl9jdXJyZW5jeSIsInByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzF5X2luX2N1cnJlbmN5IiwibmF2IiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayIsImluY3JlYXNlR3JhbnVsYXJpdHkiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/prices.js\n"));

/***/ })

});