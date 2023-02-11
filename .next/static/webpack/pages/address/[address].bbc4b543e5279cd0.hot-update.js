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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Prices; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Prices() {\n    _s();\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getPrices = async ()=>{\n            let req = await fetch(\"https://api.coingecko.com/api/v3/coins/cardano?localization=false&tickers=false&developer_data=false\");\n            let res = await req.json();\n            let adaUSD = res.market_data.current_price.usd;\n            let adaGBP = res.market_data.current_price.gbp;\n            let adaBTC = res.market_data.current_price.btc;\n            let roundedUsd = adaUSD.toFixed(2);\n            let ada24USD = res.market_data.price_change_percentage_24h_in_currency.usd;\n            let ada24GBP = res.market_data.price_change_percentage_24h_in_currency.gbp;\n            let ada24BTC = res.market_data.price_change_percentage_24h_in_currency.btc;\n            setPrices(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"sort-button\",\n                        children: [\n                            \"ADA/USD \",\n                            adaUSD,\n                            \" \",\n                            ada24USD\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                        lineNumber: 24,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"sort-button\",\n                        children: [\n                            \"ADA/GBP \",\n                            adaGBP,\n                            \" \",\n                            ada24GBP\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                        lineNumber: 25,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"sort-button\",\n                        children: [\n                            \"ADA/BTC \",\n                            adaBTC,\n                            \" \",\n                            ada24BTC\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                        lineNumber: 26,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                lineNumber: 23,\n                columnNumber: 17\n            }, this));\n        };\n        getPrices();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: prices\n    }, void 0, false, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n        lineNumber: 35,\n        columnNumber: 12\n    }, this);\n}\n_s(Prices, \"qdRVU68YpniNJdQEDeMyfFS7Y+M=\");\n_c = Prices;\nvar _c;\n$RefreshReg$(_c, \"Prices\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJpY2VzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMkM7QUFFNUIsU0FBU0UsU0FBVTs7SUFFOUIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdILCtDQUFRQTtJQUVwQ0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNaLE1BQU1LLFlBQVksVUFBWTtZQUMxQixJQUFJQyxNQUFNLE1BQU1DLE1BQU07WUFDdEIsSUFBSUMsTUFBTSxNQUFNRixJQUFJRyxJQUFJO1lBRXhCLElBQUlDLFNBQVNGLElBQUlHLFdBQVcsQ0FBQ0MsYUFBYSxDQUFDQyxHQUFHO1lBQzlDLElBQUlDLFNBQVNOLElBQUlHLFdBQVcsQ0FBQ0MsYUFBYSxDQUFDRyxHQUFHO1lBQzlDLElBQUlDLFNBQVNSLElBQUlHLFdBQVcsQ0FBQ0MsYUFBYSxDQUFDSyxHQUFHO1lBRTlDLElBQUlDLGFBQWFSLE9BQU9TLE9BQU8sQ0FBQztZQUVoQyxJQUFJQyxXQUFXWixJQUFJRyxXQUFXLENBQUNVLHVDQUF1QyxDQUFDUixHQUFHO1lBQzFFLElBQUlTLFdBQVdkLElBQUlHLFdBQVcsQ0FBQ1UsdUNBQXVDLENBQUNOLEdBQUc7WUFDMUUsSUFBSVEsV0FBV2YsSUFBSUcsV0FBVyxDQUFDVSx1Q0FBdUMsQ0FBQ0osR0FBRztZQUUxRWIsd0JBQ0ksOERBQUNvQjs7a0NBQ0csOERBQUNDO3dCQUFPQyxXQUFVOzs0QkFBYzs0QkFBU2hCOzRCQUFPOzRCQUFFVTs7Ozs7OztrQ0FDbEQsOERBQUNLO3dCQUFPQyxXQUFVOzs0QkFBYzs0QkFBU1o7NEJBQU87NEJBQUVROzs7Ozs7O2tDQUNsRCw4REFBQ0c7d0JBQU9DLFdBQVU7OzRCQUFjOzRCQUFTVjs0QkFBTzs0QkFBRU87Ozs7Ozs7Ozs7Ozs7UUFLOUQ7UUFDQWxCO0lBQ0osR0FBRyxFQUFFO0lBRUwscUJBQU8sOERBQUNzQjtrQkFBS3hCOzs7Ozs7QUFFakIsQ0FBQztHQWxDdUJEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wcmljZXMuanM/YTAxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJpY2VzICgpIHtcblxuICAgIGNvbnN0IFtwcmljZXMsIHNldFByaWNlc10gPSB1c2VTdGF0ZSgpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZ2V0UHJpY2VzID0gYXN5bmMgKCkgPT4geyBcbiAgICAgICAgICAgIGxldCByZXEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuY29pbmdlY2tvLmNvbS9hcGkvdjMvY29pbnMvY2FyZGFubz9sb2NhbGl6YXRpb249ZmFsc2UmdGlja2Vycz1mYWxzZSZkZXZlbG9wZXJfZGF0YT1mYWxzZScpO1xuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IHJlcS5qc29uKCk7XG5cbiAgICAgICAgICAgIGxldCBhZGFVU0QgPSByZXMubWFya2V0X2RhdGEuY3VycmVudF9wcmljZS51c2Q7XG4gICAgICAgICAgICBsZXQgYWRhR0JQID0gcmVzLm1hcmtldF9kYXRhLmN1cnJlbnRfcHJpY2UuZ2JwO1xuICAgICAgICAgICAgbGV0IGFkYUJUQyA9IHJlcy5tYXJrZXRfZGF0YS5jdXJyZW50X3ByaWNlLmJ0YztcblxuICAgICAgICAgICAgbGV0IHJvdW5kZWRVc2QgPSBhZGFVU0QudG9GaXhlZCgyKTtcblxuICAgICAgICAgICAgbGV0IGFkYTI0VVNEID0gcmVzLm1hcmtldF9kYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzI0aF9pbl9jdXJyZW5jeS51c2Q7XG4gICAgICAgICAgICBsZXQgYWRhMjRHQlAgPSByZXMubWFya2V0X2RhdGEucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMjRoX2luX2N1cnJlbmN5LmdicDtcbiAgICAgICAgICAgIGxldCBhZGEyNEJUQyA9IHJlcy5tYXJrZXRfZGF0YS5wcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8yNGhfaW5fY3VycmVuY3kuYnRjO1xuXG4gICAgICAgICAgICBzZXRQcmljZXMoXG4gICAgICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzb3J0LWJ1dHRvblwiPkFEQS9VU0Qge2FkYVVTRH0ge2FkYTI0VVNEfTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNvcnQtYnV0dG9uXCI+QURBL0dCUCB7YWRhR0JQfSB7YWRhMjRHQlB9PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic29ydC1idXR0b25cIj5BREEvQlRDIHthZGFCVEN9IHthZGEyNEJUQ308L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDwvbmF2PlxuXG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgZ2V0UHJpY2VzKCk7XG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4oPGRpdj57cHJpY2VzfTwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQcmljZXMiLCJwcmljZXMiLCJzZXRQcmljZXMiLCJnZXRQcmljZXMiLCJyZXEiLCJmZXRjaCIsInJlcyIsImpzb24iLCJhZGFVU0QiLCJtYXJrZXRfZGF0YSIsImN1cnJlbnRfcHJpY2UiLCJ1c2QiLCJhZGFHQlAiLCJnYnAiLCJhZGFCVEMiLCJidGMiLCJyb3VuZGVkVXNkIiwidG9GaXhlZCIsImFkYTI0VVNEIiwicHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMjRoX2luX2N1cnJlbmN5IiwiYWRhMjRHQlAiLCJhZGEyNEJUQyIsIm5hdiIsImJ1dHRvbiIsImNsYXNzTmFtZSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/prices.js\n"));

/***/ })

});