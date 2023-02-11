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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Prices; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Prices() {\n    _s();\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getPrices = async ()=>{\n            let req = await fetch(\"https://api.coingecko.com/api/v3/coins/cardano?localization=false&tickers=false&developer_data=false\");\n            let res = await req.json();\n            let adaUSD = res.market_data.curren_price.usd;\n            let adaGBP = res.market_data.curren_price.gbp;\n            let adaBTC = res.market_data.curren_price.btc;\n        };\n        getPrices();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"sort-button\",\n            children: \"Sort\"\n        }, void 0, false, {\n            fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n            lineNumber: 21,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n}\n_s(Prices, \"qdRVU68YpniNJdQEDeMyfFS7Y+M=\");\n_c = Prices;\nvar _c;\n$RefreshReg$(_c, \"Prices\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJpY2VzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMkM7QUFFNUIsU0FBU0UsU0FBVTs7SUFFOUIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdILCtDQUFRQTtJQUVwQ0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNaLE1BQU1LLFlBQVksVUFBWTtZQUMxQixJQUFJQyxNQUFNLE1BQU1DLE1BQU07WUFDdEIsSUFBSUMsTUFBTSxNQUFNRixJQUFJRyxJQUFJO1lBRXhCLElBQUlDLFNBQVNGLElBQUlHLFdBQVcsQ0FBQ0MsWUFBWSxDQUFDQyxHQUFHO1lBQzdDLElBQUlDLFNBQVNOLElBQUlHLFdBQVcsQ0FBQ0MsWUFBWSxDQUFDRyxHQUFHO1lBQzdDLElBQUlDLFNBQVNSLElBQUlHLFdBQVcsQ0FBQ0MsWUFBWSxDQUFDSyxHQUFHO1FBQ2pEO1FBQ0FaO0lBQ0osR0FBRyxFQUFFO0lBRUwscUJBQ0ksOERBQUNhO2tCQUNHLDRFQUFDQztZQUFPQyxXQUFVO3NCQUFjOzs7Ozs7Ozs7OztBQUc1QyxDQUFDO0dBckJ1QmxCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wcmljZXMuanM/YTAxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJpY2VzICgpIHtcblxuICAgIGNvbnN0IFtwcmljZXMsIHNldFByaWNlc10gPSB1c2VTdGF0ZSgpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZ2V0UHJpY2VzID0gYXN5bmMgKCkgPT4geyBcbiAgICAgICAgICAgIGxldCByZXEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuY29pbmdlY2tvLmNvbS9hcGkvdjMvY29pbnMvY2FyZGFubz9sb2NhbGl6YXRpb249ZmFsc2UmdGlja2Vycz1mYWxzZSZkZXZlbG9wZXJfZGF0YT1mYWxzZScpO1xuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IHJlcS5qc29uKCk7XG5cbiAgICAgICAgICAgIGxldCBhZGFVU0QgPSByZXMubWFya2V0X2RhdGEuY3VycmVuX3ByaWNlLnVzZDtcbiAgICAgICAgICAgIGxldCBhZGFHQlAgPSByZXMubWFya2V0X2RhdGEuY3VycmVuX3ByaWNlLmdicDtcbiAgICAgICAgICAgIGxldCBhZGFCVEMgPSByZXMubWFya2V0X2RhdGEuY3VycmVuX3ByaWNlLmJ0YztcbiAgICAgICAgfVxuICAgICAgICBnZXRQcmljZXMoKTtcbiAgICB9LCBbXSlcblxuICAgIHJldHVybihcbiAgICAgICAgPG5hdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic29ydC1idXR0b25cIj5Tb3J0PC9idXR0b24+XG4gICAgICAgIDwvbmF2PlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQcmljZXMiLCJwcmljZXMiLCJzZXRQcmljZXMiLCJnZXRQcmljZXMiLCJyZXEiLCJmZXRjaCIsInJlcyIsImpzb24iLCJhZGFVU0QiLCJtYXJrZXRfZGF0YSIsImN1cnJlbl9wcmljZSIsInVzZCIsImFkYUdCUCIsImdicCIsImFkYUJUQyIsImJ0YyIsIm5hdiIsImJ1dHRvbiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/prices.js\n"));

/***/ })

});