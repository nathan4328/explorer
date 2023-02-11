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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Prices; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Prices() {\n    _s();\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getPrices = async ()=>{\n            let req = await fetch(\"https://api.coingecko.com/api/v3/coins/cardano?localization=false&tickers=false&developer_data=false\");\n            let res = await req.json();\n            let adaUSD = res.market_data.curren_price.usd;\n            let adaGBP = res.market_data.curren_price.gbp;\n            let adaBTC = res.market_data.curren_price.btc;\n            let ada24USD = res.market_data.price_change_24h_in_currency.usd;\n            let ada24GBP = res.market_data.price_change_24h_in_currency.gbp;\n            let ada24BTC = res.market_data.price_change_24h_in_currency.btc;\n            setPrices(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"sort-button\",\n                        children: [\n                            adaUSD,\n                            \" \",\n                            ada24USD\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                        lineNumber: 22,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"sort-button\",\n                        children: [\n                            adaUSD,\n                            \" \",\n                            ada24USD\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                        lineNumber: 23,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"sort-button\",\n                        children: [\n                            adaUSD,\n                            \" \",\n                            ada24USD\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                        lineNumber: 24,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"sort-button\",\n                        children: [\n                            adaUSD,\n                            \" \",\n                            ada24USD\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                        lineNumber: 25,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"sort-button\",\n                        children: [\n                            adaUSD,\n                            \" \",\n                            ada24USD\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                        lineNumber: 26,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"sort-button\",\n                        children: [\n                            adaUSD,\n                            \" \",\n                            ada24USD\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                        lineNumber: 27,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                lineNumber: 21,\n                columnNumber: 17\n            }, this));\n        };\n        getPrices();\n    }, []);\n    return {\n        prices\n    };\n}\n_s(Prices, \"qdRVU68YpniNJdQEDeMyfFS7Y+M=\");\n_c = Prices;\nvar _c;\n$RefreshReg$(_c, \"Prices\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJpY2VzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMkM7QUFFNUIsU0FBU0UsU0FBVTs7SUFFOUIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdILCtDQUFRQTtJQUVwQ0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNaLE1BQU1LLFlBQVksVUFBWTtZQUMxQixJQUFJQyxNQUFNLE1BQU1DLE1BQU07WUFDdEIsSUFBSUMsTUFBTSxNQUFNRixJQUFJRyxJQUFJO1lBRXhCLElBQUlDLFNBQVNGLElBQUlHLFdBQVcsQ0FBQ0MsWUFBWSxDQUFDQyxHQUFHO1lBQzdDLElBQUlDLFNBQVNOLElBQUlHLFdBQVcsQ0FBQ0MsWUFBWSxDQUFDRyxHQUFHO1lBQzdDLElBQUlDLFNBQVNSLElBQUlHLFdBQVcsQ0FBQ0MsWUFBWSxDQUFDSyxHQUFHO1lBRTdDLElBQUlDLFdBQVdWLElBQUlHLFdBQVcsQ0FBQ1EsNEJBQTRCLENBQUNOLEdBQUc7WUFDL0QsSUFBSU8sV0FBV1osSUFBSUcsV0FBVyxDQUFDUSw0QkFBNEIsQ0FBQ0osR0FBRztZQUMvRCxJQUFJTSxXQUFXYixJQUFJRyxXQUFXLENBQUNRLDRCQUE0QixDQUFDRixHQUFHO1lBRS9EYix3QkFDSSw4REFBQ2tCOztrQ0FDRyw4REFBQ0M7d0JBQU9DLFdBQVU7OzRCQUFlZDs0QkFBTzs0QkFBRVE7Ozs7Ozs7a0NBQzFDLDhEQUFDSzt3QkFBT0MsV0FBVTs7NEJBQWVkOzRCQUFPOzRCQUFFUTs7Ozs7OztrQ0FDMUMsOERBQUNLO3dCQUFPQyxXQUFVOzs0QkFBZWQ7NEJBQU87NEJBQUVROzs7Ozs7O2tDQUMxQyw4REFBQ0s7d0JBQU9DLFdBQVU7OzRCQUFlZDs0QkFBTzs0QkFBRVE7Ozs7Ozs7a0NBQzFDLDhEQUFDSzt3QkFBT0MsV0FBVTs7NEJBQWVkOzRCQUFPOzRCQUFFUTs7Ozs7OztrQ0FDMUMsOERBQUNLO3dCQUFPQyxXQUFVOzs0QkFBZWQ7NEJBQU87NEJBQUVROzs7Ozs7Ozs7Ozs7O1FBSXREO1FBQ0FiO0lBQ0osR0FBRyxFQUFFO0lBRUwsT0FBTztRQUFDRjtJQUFNO0FBRWxCLENBQUM7R0FsQ3VCRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJpY2VzLmpzP2EwMTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByaWNlcyAoKSB7XG5cbiAgICBjb25zdCBbcHJpY2VzLCBzZXRQcmljZXNdID0gdXNlU3RhdGUoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGdldFByaWNlcyA9IGFzeW5jICgpID0+IHsgXG4gICAgICAgICAgICBsZXQgcmVxID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmNvaW5nZWNrby5jb20vYXBpL3YzL2NvaW5zL2NhcmRhbm8/bG9jYWxpemF0aW9uPWZhbHNlJnRpY2tlcnM9ZmFsc2UmZGV2ZWxvcGVyX2RhdGE9ZmFsc2UnKTtcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCByZXEuanNvbigpO1xuXG4gICAgICAgICAgICBsZXQgYWRhVVNEID0gcmVzLm1hcmtldF9kYXRhLmN1cnJlbl9wcmljZS51c2Q7XG4gICAgICAgICAgICBsZXQgYWRhR0JQID0gcmVzLm1hcmtldF9kYXRhLmN1cnJlbl9wcmljZS5nYnA7XG4gICAgICAgICAgICBsZXQgYWRhQlRDID0gcmVzLm1hcmtldF9kYXRhLmN1cnJlbl9wcmljZS5idGM7XG5cbiAgICAgICAgICAgIGxldCBhZGEyNFVTRCA9IHJlcy5tYXJrZXRfZGF0YS5wcmljZV9jaGFuZ2VfMjRoX2luX2N1cnJlbmN5LnVzZDtcbiAgICAgICAgICAgIGxldCBhZGEyNEdCUCA9IHJlcy5tYXJrZXRfZGF0YS5wcmljZV9jaGFuZ2VfMjRoX2luX2N1cnJlbmN5LmdicDtcbiAgICAgICAgICAgIGxldCBhZGEyNEJUQyA9IHJlcy5tYXJrZXRfZGF0YS5wcmljZV9jaGFuZ2VfMjRoX2luX2N1cnJlbmN5LmJ0YztcblxuICAgICAgICAgICAgc2V0UHJpY2VzKFxuICAgICAgICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic29ydC1idXR0b25cIj57YWRhVVNEfSB7YWRhMjRVU0R9PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic29ydC1idXR0b25cIj57YWRhVVNEfSB7YWRhMjRVU0R9PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic29ydC1idXR0b25cIj57YWRhVVNEfSB7YWRhMjRVU0R9PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic29ydC1idXR0b25cIj57YWRhVVNEfSB7YWRhMjRVU0R9PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic29ydC1idXR0b25cIj57YWRhVVNEfSB7YWRhMjRVU0R9PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic29ydC1idXR0b25cIj57YWRhVVNEfSB7YWRhMjRVU0R9PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICBnZXRQcmljZXMoKTtcbiAgICB9LCBbXSlcblxuICAgIHJldHVybih7cHJpY2VzfVxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQcmljZXMiLCJwcmljZXMiLCJzZXRQcmljZXMiLCJnZXRQcmljZXMiLCJyZXEiLCJmZXRjaCIsInJlcyIsImpzb24iLCJhZGFVU0QiLCJtYXJrZXRfZGF0YSIsImN1cnJlbl9wcmljZSIsInVzZCIsImFkYUdCUCIsImdicCIsImFkYUJUQyIsImJ0YyIsImFkYTI0VVNEIiwicHJpY2VfY2hhbmdlXzI0aF9pbl9jdXJyZW5jeSIsImFkYTI0R0JQIiwiYWRhMjRCVEMiLCJuYXYiLCJidXR0b24iLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/prices.js\n"));

/***/ })

});