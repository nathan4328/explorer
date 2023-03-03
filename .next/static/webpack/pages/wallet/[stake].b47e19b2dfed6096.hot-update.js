"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/wallet/[stake]",{

/***/ "./src/pages/wallet.js":
/*!*****************************!*\
  !*** ./src/pages/wallet.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Wallet; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fts */ \"./src/pages/fts.js\");\n/* harmony import */ var _nfts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nfts */ \"./src/pages/nfts.js\");\n/* harmony import */ var _prices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prices */ \"./src/pages/prices.js\");\n/* harmony import */ var _summary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./summary */ \"./src/pages/summary.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Wallet(props) {\n    _s();\n    // market data from coingecko from prices component\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    // used to switch between showing nfts and fts\n    const [showNfts, setShowNfts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [nftActive, setNftActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [ftActive, setFtActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    // callback from prices component\n    // returns ada price info to be used by 'Fts' component\n    function setPriceData(data) {\n        setPrices(data);\n    }\n    // used to alternate between showing nfts and fts on button click\n    function displayNfts() {\n        setFtActive(false);\n        setNftActive(true);\n        setShowNfts(true);\n    }\n    // used to alternate between showing nfts and fts on button click\n    function displayFts() {\n        setNftActive(false);\n        setFtActive(true);\n        setShowNfts(false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"wallet\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_prices__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                tokens: props.tokens,\n                data: setPriceData\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/wallet.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_summary__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                tokens: props.tokens,\n                prices: prices\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/wallet.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"setting-nav\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: nftActive ? \"active\" : \"inactive\",\n                                onClick: displayNfts,\n                                children: \"NFTs\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/wallet.js\",\n                                lineNumber: 43,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: ftActive ? \"active\" : \"inactive\",\n                                onClick: displayFts,\n                                children: \"Coins\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/wallet.js\",\n                                lineNumber: 44,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/wallet.js\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"setting-button\",\n                            children: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/wallet.js\",\n                            lineNumber: 47,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/wallet.js\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/wallet.js\",\n                lineNumber: 41,\n                columnNumber: 14\n            }, this),\n            showNfts ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nfts__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                tokens: props.tokens\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/wallet.js\",\n                lineNumber: 50,\n                columnNumber: 26\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                tokens: props.tokens,\n                prices: prices\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/wallet.js\",\n                lineNumber: 50,\n                columnNumber: 61\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/wallet.js\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, this);\n}\n_s(Wallet, \"ZJckaYkhLCOppS0wpBDclKnmfZw=\");\n_c = Wallet;\nvar _c;\n$RefreshReg$(_c, \"Wallet\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvd2FsbGV0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ1Q7QUFDRTtBQUNJO0FBQ0U7QUFFakIsU0FBU0ssT0FBUUMsS0FBSyxFQUFFOztJQUVuQyxtREFBbUQ7SUFDbkQsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdSLCtDQUFRQTtJQUVwQyw4Q0FBOEM7SUFDOUMsTUFBTSxDQUFDUyxVQUFVQyxZQUFZLEdBQUdWLCtDQUFRQSxDQUFDLEtBQUs7SUFDOUMsTUFBTSxDQUFDVyxXQUFXQyxhQUFhLEdBQUdaLCtDQUFRQSxDQUFDLEtBQUs7SUFDaEQsTUFBTSxDQUFDYSxVQUFVQyxZQUFZLEdBQUdkLCtDQUFRQSxDQUFDLElBQUk7SUFFN0MsaUNBQWlDO0lBQ2pDLHVEQUF1RDtJQUN2RCxTQUFTZSxhQUFhQyxJQUFJLEVBQUM7UUFDdkJSLFVBQVVRO0lBQ2Q7SUFFQSxpRUFBaUU7SUFDakUsU0FBU0MsY0FBYTtRQUNsQkgsWUFBWSxLQUFLO1FBQ2pCRixhQUFhLElBQUk7UUFDakJGLFlBQVksSUFBSTtJQUNwQjtJQUVBLGlFQUFpRTtJQUNqRSxTQUFTUSxhQUFZO1FBQ2pCTixhQUFhLEtBQUs7UUFDbEJFLFlBQVksSUFBSTtRQUNoQkosWUFBWSxLQUFLO0lBQ3JCO0lBRUEscUJBQ0ksOERBQUNTO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDakIsK0NBQU1BO2dCQUFDa0IsUUFBVWYsTUFBTWUsTUFBTTtnQkFBRUwsTUFBT0Q7Ozs7OzswQkFDdkMsOERBQUNYLGdEQUFPQTtnQkFBQ2lCLFFBQVVmLE1BQU1lLE1BQU07Z0JBQUVkLFFBQVVBOzs7Ozs7MEJBQzFDLDhEQUFDZTtnQkFBSUYsV0FBVTs7a0NBQ1osOERBQUNEOzswQ0FDRyw4REFBQ0k7Z0NBQU9ILFdBQVlULFlBQVksV0FBVyxVQUFVO2dDQUFHYSxTQUFTUDswQ0FBYTs7Ozs7OzBDQUM5RSw4REFBQ007Z0NBQU9ILFdBQVlQLFdBQVcsV0FBVyxVQUFVO2dDQUFFVyxTQUFTTjswQ0FBWTs7Ozs7Ozs7Ozs7O2tDQUUvRSw4REFBQ0M7a0NBQ0csNEVBQUNJOzRCQUFPSCxXQUFVO3NDQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHMUNYLHlCQUFXLDhEQUFDUCw2Q0FBSUE7Z0JBQUNtQixRQUFVZixNQUFNZSxNQUFNOzs7OztxQ0FBTyw4REFBQ3BCLDRDQUFHQTtnQkFBQ29CLFFBQVVmLE1BQU1lLE1BQU07Z0JBQUVkLFFBQVVBOzs7OztvQkFBUzs7Ozs7OztBQUc1RyxDQUFDO0dBOUN1QkY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3dhbGxldC5qcz85YTExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRnRzIGZyb20gXCIuL2Z0c1wiO1xuaW1wb3J0IE5mdHMgZnJvbSBcIi4vbmZ0c1wiO1xuaW1wb3J0IFByaWNlcyBmcm9tIFwiLi9wcmljZXNcIjtcbmltcG9ydCBTdW1tYXJ5IGZyb20gXCIuL3N1bW1hcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2FsbGV0IChwcm9wcykge1xuXG4gICAgLy8gbWFya2V0IGRhdGEgZnJvbSBjb2luZ2Vja28gZnJvbSBwcmljZXMgY29tcG9uZW50XG4gICAgY29uc3QgW3ByaWNlcywgc2V0UHJpY2VzXSA9IHVzZVN0YXRlKCk7XG5cbiAgICAvLyB1c2VkIHRvIHN3aXRjaCBiZXR3ZWVuIHNob3dpbmcgbmZ0cyBhbmQgZnRzXG4gICAgY29uc3QgW3Nob3dOZnRzLCBzZXRTaG93TmZ0c10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW25mdEFjdGl2ZSwgc2V0TmZ0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbZnRBY3RpdmUsIHNldEZ0QWN0aXZlXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gICAgLy8gY2FsbGJhY2sgZnJvbSBwcmljZXMgY29tcG9uZW50XG4gICAgLy8gcmV0dXJucyBhZGEgcHJpY2UgaW5mbyB0byBiZSB1c2VkIGJ5ICdGdHMnIGNvbXBvbmVudFxuICAgIGZ1bmN0aW9uIHNldFByaWNlRGF0YShkYXRhKXtcbiAgICAgICAgc2V0UHJpY2VzKGRhdGEpO1xuICAgIH1cblxuICAgIC8vIHVzZWQgdG8gYWx0ZXJuYXRlIGJldHdlZW4gc2hvd2luZyBuZnRzIGFuZCBmdHMgb24gYnV0dG9uIGNsaWNrXG4gICAgZnVuY3Rpb24gZGlzcGxheU5mdHMoKXtcbiAgICAgICAgc2V0RnRBY3RpdmUoZmFsc2UpO1xuICAgICAgICBzZXROZnRBY3RpdmUodHJ1ZSk7XG4gICAgICAgIHNldFNob3dOZnRzKHRydWUpO1xuICAgIH1cblxuICAgIC8vIHVzZWQgdG8gYWx0ZXJuYXRlIGJldHdlZW4gc2hvd2luZyBuZnRzIGFuZCBmdHMgb24gYnV0dG9uIGNsaWNrXG4gICAgZnVuY3Rpb24gZGlzcGxheUZ0cygpe1xuICAgICAgICBzZXROZnRBY3RpdmUoZmFsc2UpO1xuICAgICAgICBzZXRGdEFjdGl2ZSh0cnVlKTtcbiAgICAgICAgc2V0U2hvd05mdHMoZmFsc2UpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhbGxldFwiPlxuICAgICAgICAgICAgPFByaWNlcyB0b2tlbnMgPSB7cHJvcHMudG9rZW5zfSBkYXRhID17c2V0UHJpY2VEYXRhfS8+XG4gICAgICAgICAgICA8U3VtbWFyeSB0b2tlbnMgPSB7cHJvcHMudG9rZW5zfSBwcmljZXMgPSB7cHJpY2VzfS8+XG4gICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJzZXR0aW5nLW5hdlwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSB7bmZ0QWN0aXZlID8gJ2FjdGl2ZScgOiAnaW5hY3RpdmUnfSAgb25DbGljaz17ZGlzcGxheU5mdHN9Pk5GVHM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9IHtmdEFjdGl2ZSA/ICdhY3RpdmUnIDogJ2luYWN0aXZlJ30gb25DbGljaz17ZGlzcGxheUZ0c30+Q29pbnM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNldHRpbmctYnV0dG9uXCIgPlNlYXJjaDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgIHtzaG93TmZ0cyA/IDxOZnRzIHRva2VucyA9IHtwcm9wcy50b2tlbnN9IC8+IDogPEZ0cyB0b2tlbnMgPSB7cHJvcHMudG9rZW5zfSBwcmljZXMgPSB7cHJpY2VzfS8+fVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiRnRzIiwiTmZ0cyIsIlByaWNlcyIsIlN1bW1hcnkiLCJXYWxsZXQiLCJwcm9wcyIsInByaWNlcyIsInNldFByaWNlcyIsInNob3dOZnRzIiwic2V0U2hvd05mdHMiLCJuZnRBY3RpdmUiLCJzZXROZnRBY3RpdmUiLCJmdEFjdGl2ZSIsInNldEZ0QWN0aXZlIiwic2V0UHJpY2VEYXRhIiwiZGF0YSIsImRpc3BsYXlOZnRzIiwiZGlzcGxheUZ0cyIsImRpdiIsImNsYXNzTmFtZSIsInRva2VucyIsIm5hdiIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/wallet.js\n"));

/***/ })

});