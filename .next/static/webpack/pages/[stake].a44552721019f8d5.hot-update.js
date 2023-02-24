"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[stake]",{

/***/ "./src/pages/summary.js":
/*!******************************!*\
  !*** ./src/pages/summary.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Summary; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Summary(props) {\n    _s();\n    const [walletData, setWalletData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        balance: null,\n        total_rewards: null,\n        available_rewards: null,\n        projects: null,\n        tokens: null,\n        nfts: null,\n        fts: null\n    });\n    const [currency, setCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"ada\",\n        value: 1,\n        symbol: \"₳\"\n    });\n    const [adaBalance, setAdaBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [totalValue, setTotalValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getBalance = async ()=>{\n            if (props.tokens.stake != null) {\n                let stakeAddress = props.tokens.stake;\n                let stakeData = await getAccountInfoFromKoios(stakeAddress);\n                setWalletData({\n                    balance: stakeData[0].total_balance,\n                    projects: props.tokens.projectNumber,\n                    tokens: props.tokens.tokenNumber,\n                    nfts: props.tokens.nfts.length,\n                    fts: props.tokens.fts.length\n                });\n                if (props.prices != null) {\n                    setCurrency(props.prices.currency);\n                    let prices = props.prices;\n                    let currency = props.prices.currency.value;\n                    let _balance = stakeData[0].total_balance / 1000000;\n                    let value = currency * _balance;\n                    let tokenBalance = getTokenBalance(props.tokens.fts);\n                    let totalValue = currency * (tokenBalance + value);\n                    setAdaBalance(value.toFixed(2));\n                    setTotalValue(totalValue.toFixed(2));\n                }\n            }\n        };\n        getBalance();\n    }, [\n        props\n    ]);\n    function getTokenBalance(fts) {\n        let total = 0;\n        for (const element of fts){\n            let token = element[0];\n            if (token.current != -1) {\n                let price = token.current * (1 / props.prices.adaUSD);\n                let value = 0;\n                if (price != -1) {\n                    value = price * (token.quantity / 1000000);\n                }\n                total = total + value;\n            }\n        }\n        return total;\n    }\n    async function getAccountInfoFromKoios(stakeAddress) {\n        const req = await fetch(\"https://api.koios.rest/api/v0/account_info\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                \"_stake_addresses\": [\n                    stakeAddress\n                ]\n            })\n        });\n        const res = await req.json();\n        return res;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"summary\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"summary-item\",\n                children: [\n                    \"Ada Value: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"value\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"currency\",\n                                children: currency.symbol\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                                lineNumber: 73,\n                                columnNumber: 51\n                            }, this),\n                            \" \",\n                            adaBalance\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                        lineNumber: 73,\n                        columnNumber: 28\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                lineNumber: 72,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"summary-item\",\n                children: [\n                    \"Wallet Value: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"value\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"currency\",\n                                children: currency.symbol\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                                lineNumber: 76,\n                                columnNumber: 54\n                            }, this),\n                            \" \",\n                            totalValue\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                        lineNumber: 76,\n                        columnNumber: 31\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                lineNumber: 75,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"summary-item\",\n                children: [\n                    \"Tokens:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"value\",\n                        children: walletData.tokens\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                        lineNumber: 79,\n                        columnNumber: 24\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                lineNumber: 78,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"summary-item\",\n                children: [\n                    \"Projects:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"value\",\n                        children: [\n                            \" \",\n                            walletData.projects\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                        lineNumber: 82,\n                        columnNumber: 26\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                lineNumber: 81,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"summary-item\",\n                children: [\n                    \"NFTs:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"value\",\n                        children: [\n                            \" \",\n                            walletData.nfts\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                        lineNumber: 85,\n                        columnNumber: 22\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                lineNumber: 84,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"summary-item\",\n                children: [\n                    \"FTs:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"value\",\n                        children: [\n                            \" \",\n                            walletData.fts\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                        lineNumber: 88,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                lineNumber: 87,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n        lineNumber: 71,\n        columnNumber: 9\n    }, this);\n}\n_s(Summary, \"B7Qkif8x+AP+wFX8LnyZF5Ee1B4=\");\n_c = Summary;\nvar _c;\n$RefreshReg$(_c, \"Summary\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc3VtbWFyeS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTJDO0FBRTVCLFNBQVNFLFFBQVFDLEtBQUssRUFBQzs7SUFFbEMsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdKLCtDQUFRQSxDQUFDO1FBQUNLLFNBQVMsSUFBSTtRQUFFQyxlQUFlLElBQUk7UUFBR0MsbUJBQW1CLElBQUk7UUFBRUMsVUFBVSxJQUFJO1FBQUVDLFFBQVEsSUFBSTtRQUFFQyxNQUFNLElBQUk7UUFBRUMsS0FBSSxJQUFJO0lBQUE7SUFDOUosTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdiLCtDQUFRQSxDQUFDO1FBQUNjLE1BQU07UUFBT0MsT0FBTztRQUFHQyxRQUFRO0lBQUc7SUFDNUUsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdsQiwrQ0FBUUE7SUFDNUMsTUFBTSxDQUFDbUIsWUFBWUMsY0FBYyxHQUFHcEIsK0NBQVFBO0lBRTVDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ1osTUFBTXNCLGFBQWEsVUFBWTtZQUMzQixJQUFHbkIsTUFBTU8sTUFBTSxDQUFDYSxLQUFLLElBQUksSUFBSSxFQUFDO2dCQUMxQixJQUFJQyxlQUFlckIsTUFBTU8sTUFBTSxDQUFDYSxLQUFLO2dCQUNyQyxJQUFJRSxZQUFZLE1BQU1DLHdCQUF3QkY7Z0JBQzlDbkIsY0FBYztvQkFBQ0MsU0FBU21CLFNBQVMsQ0FBQyxFQUFFLENBQUNFLGFBQWE7b0JBQUVsQixVQUFVTixNQUFNTyxNQUFNLENBQUNrQixhQUFhO29CQUNuRmxCLFFBQVFQLE1BQU1PLE1BQU0sQ0FBQ21CLFdBQVc7b0JBQUVsQixNQUFNUixNQUFNTyxNQUFNLENBQUNDLElBQUksQ0FBQ21CLE1BQU07b0JBQUVsQixLQUFLVCxNQUFNTyxNQUFNLENBQUNFLEdBQUcsQ0FBQ2tCLE1BQU07Z0JBQUE7Z0JBQ25HLElBQUczQixNQUFNNEIsTUFBTSxJQUFJLElBQUksRUFBQztvQkFDcEJqQixZQUFZWCxNQUFNNEIsTUFBTSxDQUFDbEIsUUFBUTtvQkFDakMsSUFBSWtCLFNBQVM1QixNQUFNNEIsTUFBTTtvQkFDekIsSUFBSWxCLFdBQVdWLE1BQU00QixNQUFNLENBQUNsQixRQUFRLENBQUNHLEtBQUs7b0JBQzFDLElBQUlnQixXQUFXUCxTQUFTLENBQUMsRUFBRSxDQUFDRSxhQUFhLEdBQUM7b0JBQzFDLElBQUlYLFFBQVNILFdBQVNtQjtvQkFFdEIsSUFBSUMsZUFBZUMsZ0JBQWdCL0IsTUFBTU8sTUFBTSxDQUFDRSxHQUFHO29CQUNuRCxJQUFJUSxhQUFjUCxXQUFZb0IsQ0FBQUEsZUFBY2pCLEtBQUk7b0JBQ2hERyxjQUFjSCxNQUFNbUIsT0FBTyxDQUFDO29CQUM1QmQsY0FBY0QsV0FBV2UsT0FBTyxDQUFDO2dCQUNyQyxDQUFDO1lBQ0wsQ0FBQztRQUNMO1FBQ0FiO0lBQ0osR0FBRTtRQUFDbkI7S0FBTTtJQUVULFNBQVMrQixnQkFBZ0J0QixHQUFHLEVBQUM7UUFDekIsSUFBSXdCLFFBQVE7UUFDWixLQUFJLE1BQU1DLFdBQVd6QixJQUFJO1lBRXJCLElBQUkwQixRQUFRRCxPQUFPLENBQUMsRUFBRTtZQUN0QixJQUFHQyxNQUFNQyxPQUFPLElBQUksQ0FBQyxHQUFFO2dCQUNuQixJQUFJQyxRQUFRRixNQUFNQyxPQUFPLEdBQUksS0FBRXBDLE1BQU00QixNQUFNLENBQUNVLE1BQU07Z0JBQ2xELElBQUl6QixRQUFRO2dCQUNaLElBQUd3QixTQUFTLENBQUMsR0FBRTtvQkFDWHhCLFFBQVEsUUFBVXNCLENBQUFBLE1BQU1JLFFBQVEsR0FBQyxPQUFNO2dCQUMzQyxDQUFDO2dCQUNETixRQUFRQSxRQUFRcEI7WUFDcEIsQ0FBQztRQUVMO1FBRUEsT0FBT29CO0lBQ1g7SUFFQSxlQUFlVix3QkFBd0JGLFlBQVksRUFBQztRQUNoRCxNQUFNbUIsTUFBTSxNQUFNQyxNQUFNLDhDQUE4QztZQUNoRUMsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQ25CLG9CQUFvQjtvQkFDbEJ6QjtpQkFDRDtZQUNIO1FBQ0Y7UUFFSixNQUFNMEIsTUFBTSxNQUFNUCxJQUFJUSxJQUFJO1FBQzFCLE9BQU9EO0lBQ1g7SUFFQSxxQkFDSSw4REFBQ0U7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOztvQkFBZTtrQ0FDZiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUFRLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FBWXhDLFNBQVNJLE1BQU07Ozs7Ozs0QkFBTzs0QkFBRUM7Ozs7Ozs7Ozs7Ozs7MEJBRXpGLDhEQUFDa0M7Z0JBQUlDLFdBQVU7O29CQUFlO2tDQUNaLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQVEsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUFZeEMsU0FBU0ksTUFBTTs7Ozs7OzRCQUFPOzRCQUFFRzs7Ozs7Ozs7Ozs7OzswQkFFNUYsOERBQUNnQztnQkFBSUMsV0FBVTs7b0JBQWU7a0NBQ25CLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FBU2pELFdBQVdNLE1BQU07Ozs7Ozs7Ozs7OzswQkFFcEQsOERBQUMwQztnQkFBSUMsV0FBVTs7b0JBQWU7a0NBQ2pCLDhEQUFDRDt3QkFBSUMsV0FBVTs7NEJBQVE7NEJBQUVqRCxXQUFXSyxRQUFROzs7Ozs7Ozs7Ozs7OzBCQUV6RCw4REFBQzJDO2dCQUFJQyxXQUFVOztvQkFBZTtrQ0FDckIsOERBQUNEO3dCQUFJQyxXQUFVOzs0QkFBUTs0QkFBRWpELFdBQVdPLElBQUk7Ozs7Ozs7Ozs7Ozs7MEJBRWpELDhEQUFDeUM7Z0JBQUlDLFdBQVU7O29CQUFlO2tDQUN0Qiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzRCQUFROzRCQUFFakQsV0FBV1EsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUkzRCxDQUFDO0dBekZ1QlY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3N1bW1hcnkuanM/ZmZiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3VtbWFyeShwcm9wcyl7XG5cbiAgICBjb25zdCBbd2FsbGV0RGF0YSwgc2V0V2FsbGV0RGF0YV0gPSB1c2VTdGF0ZSh7YmFsYW5jZTogbnVsbCwgdG90YWxfcmV3YXJkczogbnVsbCwgIGF2YWlsYWJsZV9yZXdhcmRzOiBudWxsLCBwcm9qZWN0czogbnVsbCwgdG9rZW5zOiBudWxsLCBuZnRzOiBudWxsLCBmdHM6bnVsbH0pO1xuICAgIGNvbnN0IFtjdXJyZW5jeSwgc2V0Q3VycmVuY3ldID0gdXNlU3RhdGUoe25hbWU6ICdhZGEnLCB2YWx1ZTogMSwgc3ltYm9sOiAn4oKzJ30pXG4gICAgY29uc3QgW2FkYUJhbGFuY2UsIHNldEFkYUJhbGFuY2VdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbdG90YWxWYWx1ZSwgc2V0VG90YWxWYWx1ZV0gPSB1c2VTdGF0ZSgpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZ2V0QmFsYW5jZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGlmKHByb3BzLnRva2Vucy5zdGFrZSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICBsZXQgc3Rha2VBZGRyZXNzID0gcHJvcHMudG9rZW5zLnN0YWtlO1xuICAgICAgICAgICAgICAgIGxldCBzdGFrZURhdGEgPSBhd2FpdCBnZXRBY2NvdW50SW5mb0Zyb21Lb2lvcyhzdGFrZUFkZHJlc3MpO1xuICAgICAgICAgICAgICAgIHNldFdhbGxldERhdGEoe2JhbGFuY2U6IHN0YWtlRGF0YVswXS50b3RhbF9iYWxhbmNlLCBwcm9qZWN0czogcHJvcHMudG9rZW5zLnByb2plY3ROdW1iZXIsIFxuICAgICAgICAgICAgICAgICAgICAgdG9rZW5zOiBwcm9wcy50b2tlbnMudG9rZW5OdW1iZXIsIG5mdHM6IHByb3BzLnRva2Vucy5uZnRzLmxlbmd0aCwgZnRzOiBwcm9wcy50b2tlbnMuZnRzLmxlbmd0aH0pXG4gICAgICAgICAgICAgICAgaWYocHJvcHMucHJpY2VzICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW5jeShwcm9wcy5wcmljZXMuY3VycmVuY3kpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcHJpY2VzID0gcHJvcHMucHJpY2VzO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVuY3kgPSBwcm9wcy5wcmljZXMuY3VycmVuY3kudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGxldCBfYmFsYW5jZSA9IHN0YWtlRGF0YVswXS50b3RhbF9iYWxhbmNlLzEwMDAwMDA7XG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IChjdXJyZW5jeSpfYmFsYW5jZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHRva2VuQmFsYW5jZSA9IGdldFRva2VuQmFsYW5jZShwcm9wcy50b2tlbnMuZnRzKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvdGFsVmFsdWUgPSAoY3VycmVuY3kgKiAodG9rZW5CYWxhbmNlICt2YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgICBzZXRBZGFCYWxhbmNlKHZhbHVlLnRvRml4ZWQoMikpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUb3RhbFZhbHVlKHRvdGFsVmFsdWUudG9GaXhlZCgyKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGdldEJhbGFuY2UoKTtcbiAgICB9LFtwcm9wc10pXG5cbiAgICBmdW5jdGlvbiBnZXRUb2tlbkJhbGFuY2UoZnRzKXtcbiAgICAgICAgbGV0IHRvdGFsID0gMDtcbiAgICAgICAgZm9yKGNvbnN0IGVsZW1lbnQgb2YgZnRzKXtcblxuICAgICAgICAgICAgbGV0IHRva2VuID0gZWxlbWVudFswXTtcbiAgICAgICAgICAgIGlmKHRva2VuLmN1cnJlbnQgIT0gLTEpe1xuICAgICAgICAgICAgICAgIGxldCBwcmljZSA9IHRva2VuLmN1cnJlbnQgKiAoMS9wcm9wcy5wcmljZXMuYWRhVVNEKTtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSAwO1xuICAgICAgICAgICAgICAgIGlmKHByaWNlICE9IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSAocHJpY2UpKiAodG9rZW4ucXVhbnRpdHkvMTAwMDAwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRvdGFsID0gdG90YWwgKyB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRvdGFsO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldEFjY291bnRJbmZvRnJvbUtvaW9zKHN0YWtlQWRkcmVzcyl7XG4gICAgICAgIGNvbnN0IHJlcSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5rb2lvcy5yZXN0L2FwaS92MC9hY2NvdW50X2luZm8nLCB7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgXCJfc3Rha2VfYWRkcmVzc2VzXCI6IFtcbiAgICAgICAgICAgICAgICAgIHN0YWtlQWRkcmVzc1xuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgQWRhIFZhbHVlOiA8ZGl2IGNsYXNzTmFtZT1cInZhbHVlXCI+PGRpdiBjbGFzc05hbWU9XCJjdXJyZW5jeVwiPntjdXJyZW5jeS5zeW1ib2x9PC9kaXY+IHthZGFCYWxhbmNlfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnktaXRlbVwiPlxuICAgICAgICAgICAgICAgIFdhbGxldCBWYWx1ZTogPGRpdiBjbGFzc05hbWU9XCJ2YWx1ZVwiPjxkaXYgY2xhc3NOYW1lPVwiY3VycmVuY3lcIj57Y3VycmVuY3kuc3ltYm9sfTwvZGl2PiB7dG90YWxWYWx1ZX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBUb2tlbnM6PGRpdiBjbGFzc05hbWU9XCJ2YWx1ZVwiPnt3YWxsZXREYXRhLnRva2Vuc308L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBQcm9qZWN0czo8ZGl2IGNsYXNzTmFtZT1cInZhbHVlXCI+IHt3YWxsZXREYXRhLnByb2plY3RzfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnktaXRlbVwiPlxuICAgICAgICAgICAgICAgIE5GVHM6PGRpdiBjbGFzc05hbWU9XCJ2YWx1ZVwiPiB7d2FsbGV0RGF0YS5uZnRzfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnktaXRlbVwiPlxuICAgICAgICAgICAgICAgIEZUczo8ZGl2IGNsYXNzTmFtZT1cInZhbHVlXCI+IHt3YWxsZXREYXRhLmZ0c308L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU3VtbWFyeSIsInByb3BzIiwid2FsbGV0RGF0YSIsInNldFdhbGxldERhdGEiLCJiYWxhbmNlIiwidG90YWxfcmV3YXJkcyIsImF2YWlsYWJsZV9yZXdhcmRzIiwicHJvamVjdHMiLCJ0b2tlbnMiLCJuZnRzIiwiZnRzIiwiY3VycmVuY3kiLCJzZXRDdXJyZW5jeSIsIm5hbWUiLCJ2YWx1ZSIsInN5bWJvbCIsImFkYUJhbGFuY2UiLCJzZXRBZGFCYWxhbmNlIiwidG90YWxWYWx1ZSIsInNldFRvdGFsVmFsdWUiLCJnZXRCYWxhbmNlIiwic3Rha2UiLCJzdGFrZUFkZHJlc3MiLCJzdGFrZURhdGEiLCJnZXRBY2NvdW50SW5mb0Zyb21Lb2lvcyIsInRvdGFsX2JhbGFuY2UiLCJwcm9qZWN0TnVtYmVyIiwidG9rZW5OdW1iZXIiLCJsZW5ndGgiLCJwcmljZXMiLCJfYmFsYW5jZSIsInRva2VuQmFsYW5jZSIsImdldFRva2VuQmFsYW5jZSIsInRvRml4ZWQiLCJ0b3RhbCIsImVsZW1lbnQiLCJ0b2tlbiIsImN1cnJlbnQiLCJwcmljZSIsImFkYVVTRCIsInF1YW50aXR5IiwicmVxIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXMiLCJqc29uIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/summary.js\n"));

/***/ })

});