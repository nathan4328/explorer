"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[stake]/[tokenId]",{

/***/ "./src/pages/tokenData.js":
/*!********************************!*\
  !*** ./src/pages/tokenData.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _metadataTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./metadataTable */ \"./src/pages/metadataTable.js\");\n/* harmony import */ var _prices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prices */ \"./src/pages/prices.js\");\n/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./token */ \"./src/pages/token.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction TokenData(props) {\n    _s();\n    const [tokenData, setTokendata] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [metadata, setMetadata] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [floorPrice, setFloorPrice] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [volume, setVolume] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [holderCount, setHolderCount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [currency, setCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        name: \"ada\",\n        value: 1,\n        symbol: \"₳\"\n    });\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const getTokenData = async ()=>{\n            if (props == null) {\n                console.log(\"tokenID was undefined\");\n            } else {\n                if (prices != null) {\n                    let tokenId = props.tokenId;\n                    console.log(prices);\n                    let currency = prices.currency;\n                    setCurrency(currency);\n                    let _tokenData = await loadTokenData(tokenId);\n                    const token = new _token__WEBPACK_IMPORTED_MODULE_5__[\"default\"](_tokenData.asset_name, _tokenData.policy_id, _tokenData.quantity);\n                    token.metadata = await token.getMetadata();\n                    let _policyData = await loadPolicyData(token.policy_id);\n                    setFloorPrice((_policyData.floor_price / 1000000 * currency.value).toFixed(2));\n                    setVolume((_policyData.total_volume / 1000000 * currency.value).toFixed(2));\n                    setHolderCount(_policyData.asset_holders);\n                    const meta = token.metadata;\n                    const keys = Object.keys(meta);\n                    const _ipfs = await token.getIpfsFromMetadata();\n                    setImage(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        className: \"main-img\",\n                        alt: \"no image\",\n                        src: _ipfs,\n                        width: 700,\n                        height: 700\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                        lineNumber: 43,\n                        columnNumber: 24\n                    }, this));\n                    setTokendata(meta.name);\n                    setMetadata(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_metadataTable__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        json: meta\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                        lineNumber: 45,\n                        columnNumber: 27\n                    }, this));\n                }\n            }\n        };\n        getTokenData();\n    }, [\n        props\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const getTokenData = async ()=>{\n            if (props == null) {\n                console.log(\"tokenID was undefined\");\n            } else {\n                if (prices != null) {\n                    let tokenId = props.tokenId;\n                    console.log(prices);\n                    let currency = prices.currency;\n                    setCurrency(currency);\n                    let _tokenData = await loadTokenData(tokenId);\n                    const token = new _token__WEBPACK_IMPORTED_MODULE_5__[\"default\"](_tokenData.asset_name, _tokenData.policy_id, _tokenData.quantity);\n                    token.metadata = await token.getMetadata();\n                    let _policyData = await loadPolicyData(token.policy_id);\n                    setFloorPrice((_policyData.floor_price / 1000000 * currency.value).toFixed(2));\n                    setVolume((_policyData.total_volume / 1000000 * currency.value).toFixed(2));\n                    setHolderCount(_policyData.asset_holders);\n                    const meta = token.metadata;\n                    const keys = Object.keys(meta);\n                    const _ipfs = await token.getIpfsFromMetadata();\n                    setImage(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        className: \"main-img\",\n                        alt: \"no image\",\n                        src: _ipfs,\n                        width: 700,\n                        height: 700\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                        lineNumber: 76,\n                        columnNumber: 24\n                    }, this));\n                    setTokendata(meta.name);\n                    setMetadata(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_metadataTable__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        json: meta\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                        lineNumber: 78,\n                        columnNumber: 27\n                    }, this));\n                }\n                getTokenData();\n            }\n        };\n    }, [\n        prices\n    ]);\n    async function loadTokenData(tokenId) {\n        const data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/\" + tokenId, {\n            headers: {\n                project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                \"cache-control\": \"max-age=31536000\"\n            }\n        });\n        const res = await data.json();\n        return res;\n    }\n    async function loadPolicyData(policy) {\n        const data = await fetch(\"https://api.opencnft.io/1/policy/\" + policy, {\n            headers: {\n                project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                \"cache-control\": \"max-age=31536000\"\n            }\n        });\n        const res = await data.json();\n        return res;\n    }\n    function setPriceData(data) {\n        setPrices(data);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"token-main\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_prices__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                data: setPriceData,\n                tokens: {\n                    stake: props.stake\n                }\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"token-name\",\n                children: tokenData\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                lineNumber: 107,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"policyData\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"policy-item\",\n                        children: [\n                            \"Floor Price: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"value\",\n                                children: [\n                                    floorPrice,\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"currency\",\n                                        children: currency.symbol\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                        lineNumber: 111,\n                                        columnNumber: 90\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                lineNumber: 111,\n                                columnNumber: 55\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                        lineNumber: 111,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"policy-item\",\n                        children: [\n                            \"Collection Volume : \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"value\",\n                                children: [\n                                    volume,\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"currency\",\n                                        children: currency.symbol\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                        lineNumber: 112,\n                                        columnNumber: 93\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                lineNumber: 112,\n                                columnNumber: 62\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                        lineNumber: 112,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"policy-item\",\n                        children: [\n                            \"Number of Holders: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"value\",\n                                children: holderCount\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                lineNumber: 113,\n                                columnNumber: 61\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                        lineNumber: 113,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                lineNumber: 110,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"token-box\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"token-image\",\n                        children: image\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                        lineNumber: 116,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"metadata\",\n                        children: [\n                            metadata,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                        lineNumber: 117,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                lineNumber: 115,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n        lineNumber: 105,\n        columnNumber: 5\n    }, this);\n}\n_s(TokenData, \"cwSjy/pFj0feZXJgIxVxV55eJm4=\");\n_c = TokenData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TokenData);\nvar _c;\n$RefreshReg$(_c, \"TokenData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxJQUFJO1FBQzNCLE9BQU9LO0lBQ1Q7SUFFQSxTQUFTRSxhQUFhTixJQUFJLEVBQUM7UUFDekI3QixVQUFVNkI7SUFDWjtJQUdBLHFCQUNBLDhEQUFDTztRQUFJYixXQUFVOzswQkFDYiw4REFBQzdDLCtDQUFNQTtnQkFBQ21ELE1BQVFNO2dCQUFjRSxRQUFRO29CQUFDQyxPQUFPekQsTUFBTXlELEtBQUs7Z0JBQUE7Ozs7OzswQkFDdkQsOERBQUNGO2dCQUFJYixXQUFVOzBCQUNWekM7Ozs7OzswQkFFTCw4REFBQ3NEO2dCQUFJYixXQUFVOztrQ0FDWCw4REFBQ2E7d0JBQUliLFdBQVU7OzRCQUFjOzBDQUFhLDhEQUFDYTtnQ0FBSWIsV0FBVTs7b0NBQVNyQztrREFBVyw4REFBQ2tEO3dDQUFJYixXQUFVO2tEQUFZN0IsU0FBU0ksTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUN2SCw4REFBQ3NDO3dCQUFJYixXQUFVOzs0QkFBYzswQ0FBb0IsOERBQUNhO2dDQUFJYixXQUFVOztvQ0FBU25DO2tEQUFPLDhEQUFDZ0Q7d0NBQUliLFdBQVU7a0RBQVk3QixTQUFTSSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBQzFILDhEQUFDc0M7d0JBQUliLFdBQVU7OzRCQUFjOzBDQUFtQiw4REFBQ2E7Z0NBQUliLFdBQVU7MENBQVNqQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUU1RSw4REFBQzhDO2dCQUFJYixXQUFVOztrQ0FDWCw4REFBQ2E7d0JBQUliLFdBQVU7a0NBQWUvQjs7Ozs7O2tDQUM5Qiw4REFBQzRDO3dCQUFJYixXQUFVOzs0QkFDVnZDOzRCQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzFCO0dBbEhTSjtLQUFBQTtBQW1IVCwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvdG9rZW5EYXRhLmpzPzZmNWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTWV0YWRhdGFUYWJsZSBmcm9tIFwiLi9tZXRhZGF0YVRhYmxlXCI7XG5pbXBvcnQgUHJpY2VzIGZyb20gXCIuL3ByaWNlc1wiO1xuaW1wb3J0IFRva2VuIGZyb20gXCIuL3Rva2VuXCI7XG5cbmZ1bmN0aW9uIFRva2VuRGF0YSAocHJvcHMpIHtcblxuICAgIGNvbnN0IFt0b2tlbkRhdGEsIHNldFRva2VuZGF0YV0gPSB1c2VTdGF0ZSgpO1xuXG4gICAgY29uc3QgW21ldGFkYXRhLCBzZXRNZXRhZGF0YV0gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFtmbG9vclByaWNlLCBzZXRGbG9vclByaWNlXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW3ZvbHVtZSwgc2V0Vm9sdW1lXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW2hvbGRlckNvdW50LCBzZXRIb2xkZXJDb3VudF0gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbY3VycmVuY3ksIHNldEN1cnJlbmN5XSA9IHVzZVN0YXRlKHtuYW1lOiAnYWRhJyx2YWx1ZTogMSwgc3ltYm9sOiAn4oKzJ30pO1xuXG4gICAgY29uc3QgW3ByaWNlcywgc2V0UHJpY2VzXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZ2V0VG9rZW5EYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGlmKHByb3BzID09IG51bGwpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Rva2VuSUQgd2FzIHVuZGVmaW5lZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNle1xuXG4gICAgICAgICAgICBpZihwcmljZXMgIT0gbnVsbCl7XG4gICAgICAgICAgICAgIGxldCB0b2tlbklkID0gcHJvcHMudG9rZW5JZDtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJpY2VzKTtcbiAgXG4gICAgICAgICAgICAgIGxldCBjdXJyZW5jeSA9IHByaWNlcy5jdXJyZW5jeTtcbiAgICAgICAgICAgICAgc2V0Q3VycmVuY3koY3VycmVuY3kpO1xuICAgICAgICAgICAgICBsZXQgX3Rva2VuRGF0YSA9IGF3YWl0IGxvYWRUb2tlbkRhdGEodG9rZW5JZCk7XG4gICAgICAgICAgICAgIGNvbnN0IHRva2VuID0gbmV3IFRva2VuKF90b2tlbkRhdGEuYXNzZXRfbmFtZSwgX3Rva2VuRGF0YS5wb2xpY3lfaWQgLCBfdG9rZW5EYXRhLnF1YW50aXR5KTtcbiAgICAgICAgICAgICAgdG9rZW4ubWV0YWRhdGEgPSBhd2FpdCB0b2tlbi5nZXRNZXRhZGF0YSgpO1xuICAgICAgICAgICAgICBsZXQgX3BvbGljeURhdGEgPSBhd2FpdCBsb2FkUG9saWN5RGF0YSh0b2tlbi5wb2xpY3lfaWQpO1xuICAgICAgICAgICAgICBzZXRGbG9vclByaWNlKCgoX3BvbGljeURhdGEuZmxvb3JfcHJpY2UvMTAwMDAwMCkgKiBjdXJyZW5jeS52YWx1ZSkudG9GaXhlZCgyKSk7XG4gICAgICAgICAgICAgIHNldFZvbHVtZSgoKF9wb2xpY3lEYXRhLnRvdGFsX3ZvbHVtZS8xMDAwMDAwKSAqIGN1cnJlbmN5LnZhbHVlKS50b0ZpeGVkKDIpKTtcbiAgICAgICAgICAgICAgc2V0SG9sZGVyQ291bnQoX3BvbGljeURhdGEuYXNzZXRfaG9sZGVycyk7XG4gICAgICAgICAgICAgIGNvbnN0IG1ldGEgPSB0b2tlbi5tZXRhZGF0YTtcbiAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG1ldGEpO1xuICAgICAgICAgICAgICBjb25zdCBfaXBmcyA9IGF3YWl0IHRva2VuLmdldElwZnNGcm9tTWV0YWRhdGEoKTtcbiAgICAgICAgICAgICAgc2V0SW1hZ2UoPEltYWdlIGNsYXNzTmFtZSA9IFwibWFpbi1pbWdcIiBhbHQ9ICdubyBpbWFnZScgc3JjID0ge19pcGZzfSB3aWR0aCA9IHs3MDB9IGhlaWdodCA9IHs3MDB9Lz4pO1xuICAgICAgICAgICAgICBzZXRUb2tlbmRhdGEobWV0YS5uYW1lKTtcbiAgICAgICAgICAgICAgc2V0TWV0YWRhdGEoPE1ldGFkYXRhVGFibGUganNvbiA9IHttZXRhfS8+KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBnZXRUb2tlbkRhdGEoKTtcbiAgICAgIH0sIFtwcm9wc10pXG5cbiAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGdldFRva2VuRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICBpZihwcm9wcyA9PSBudWxsKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0b2tlbklEIHdhcyB1bmRlZmluZWQnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXtcblxuICAgICAgICAgICAgaWYocHJpY2VzICE9IG51bGwpe1xuICAgICAgICAgICAgICBsZXQgdG9rZW5JZCA9IHByb3BzLnRva2VuSWQ7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByaWNlcyk7XG4gIFxuICAgICAgICAgICAgICBsZXQgY3VycmVuY3kgPSBwcmljZXMuY3VycmVuY3k7XG4gICAgICAgICAgICAgIHNldEN1cnJlbmN5KGN1cnJlbmN5KTtcbiAgICAgICAgICAgICAgbGV0IF90b2tlbkRhdGEgPSBhd2FpdCBsb2FkVG9rZW5EYXRhKHRva2VuSWQpO1xuICAgICAgICAgICAgICBjb25zdCB0b2tlbiA9IG5ldyBUb2tlbihfdG9rZW5EYXRhLmFzc2V0X25hbWUsIF90b2tlbkRhdGEucG9saWN5X2lkICwgX3Rva2VuRGF0YS5xdWFudGl0eSk7XG4gICAgICAgICAgICAgIHRva2VuLm1ldGFkYXRhID0gYXdhaXQgdG9rZW4uZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgICAgICAgbGV0IF9wb2xpY3lEYXRhID0gYXdhaXQgbG9hZFBvbGljeURhdGEodG9rZW4ucG9saWN5X2lkKTtcbiAgICAgICAgICAgICAgc2V0Rmxvb3JQcmljZSgoKF9wb2xpY3lEYXRhLmZsb29yX3ByaWNlLzEwMDAwMDApICogY3VycmVuY3kudmFsdWUpLnRvRml4ZWQoMikpO1xuICAgICAgICAgICAgICBzZXRWb2x1bWUoKChfcG9saWN5RGF0YS50b3RhbF92b2x1bWUvMTAwMDAwMCkgKiBjdXJyZW5jeS52YWx1ZSkudG9GaXhlZCgyKSk7XG4gICAgICAgICAgICAgIHNldEhvbGRlckNvdW50KF9wb2xpY3lEYXRhLmFzc2V0X2hvbGRlcnMpO1xuICAgICAgICAgICAgICBjb25zdCBtZXRhID0gdG9rZW4ubWV0YWRhdGE7XG4gICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhtZXRhKTtcbiAgICAgICAgICAgICAgY29uc3QgX2lwZnMgPSBhd2FpdCB0b2tlbi5nZXRJcGZzRnJvbU1ldGFkYXRhKCk7XG4gICAgICAgICAgICAgIHNldEltYWdlKDxJbWFnZSBjbGFzc05hbWUgPSBcIm1haW4taW1nXCIgYWx0PSAnbm8gaW1hZ2UnIHNyYyA9IHtfaXBmc30gd2lkdGggPSB7NzAwfSBoZWlnaHQgPSB7NzAwfS8+KTtcbiAgICAgICAgICAgICAgc2V0VG9rZW5kYXRhKG1ldGEubmFtZSk7XG4gICAgICAgICAgICAgIHNldE1ldGFkYXRhKDxNZXRhZGF0YVRhYmxlIGpzb24gPSB7bWV0YX0vPik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnZXRUb2tlbkRhdGEoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIFtwcmljZXNdKVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gbG9hZFRva2VuRGF0YSh0b2tlbklkKXtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCdodHRwczovL2NhcmRhbm8tbWFpbm5ldC5ibG9ja2Zyb3N0LmlvL2FwaS92MC9hc3NldHMvJyt0b2tlbklkLFxuICAgICAgICB7aGVhZGVyczp7cHJvamVjdF9pZDogJ21haW5uZXRvVzYxWVlTaU9vTFNhTlE2ZHpUcmtBRzRhelhWSXJ2aCcsICdjYWNoZS1jb250cm9sJzogJ21heC1hZ2U9MzE1MzYwMDAnfX0pO1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBkYXRhLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1cbiAgICAgIFxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRQb2xpY3lEYXRhKHBvbGljeSl7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLm9wZW5jbmZ0LmlvLzEvcG9saWN5LycrcG9saWN5LFxuICAgICAge2hlYWRlcnM6e3Byb2plY3RfaWQ6ICdtYWlubmV0b1c2MVlZU2lPb0xTYU5RNmR6VHJrQUc0YXpYVklydmgnLCAnY2FjaGUtY29udHJvbCc6ICdtYXgtYWdlPTMxNTM2MDAwJ319KTtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGRhdGEuanNvbigpO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRQcmljZURhdGEoZGF0YSl7XG4gICAgICBzZXRQcmljZXMoZGF0YSk7XG4gICAgfVxuXG5cbiAgICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0b2tlbi1tYWluXCI+XG4gICAgICA8UHJpY2VzIGRhdGEgPSB7c2V0UHJpY2VEYXRhfSB0b2tlbnM9e3tzdGFrZTogcHJvcHMuc3Rha2V9fS8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9rZW4tbmFtZVwiPlxuICAgICAgICAgICAge3Rva2VuRGF0YX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9saWN5RGF0YVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xpY3ktaXRlbVwiPkZsb29yIFByaWNlOiA8ZGl2IGNsYXNzTmFtZT1cInZhbHVlXCI+e2Zsb29yUHJpY2V9PGRpdiBjbGFzc05hbWU9XCJjdXJyZW5jeVwiPntjdXJyZW5jeS5zeW1ib2x9PC9kaXY+PC9kaXY+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvbGljeS1pdGVtXCI+Q29sbGVjdGlvbiBWb2x1bWUgOiA8ZGl2IGNsYXNzTmFtZT1cInZhbHVlXCI+e3ZvbHVtZX08ZGl2IGNsYXNzTmFtZT1cImN1cnJlbmN5XCI+e2N1cnJlbmN5LnN5bWJvbH08L2Rpdj48L2Rpdj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9saWN5LWl0ZW1cIj5OdW1iZXIgb2YgSG9sZGVyczogPGRpdiBjbGFzc05hbWU9XCJ2YWx1ZVwiPntob2xkZXJDb3VudH08L2Rpdj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9rZW4tYm94XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRva2VuLWltYWdlXCI+e2ltYWdlfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRhZGF0YVwiPlxuICAgICAgICAgICAgICAgIHttZXRhZGF0YX0gPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2Pilcbn1cbmV4cG9ydCBkZWZhdWx0IFRva2VuRGF0YTtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTWV0YWRhdGFUYWJsZSIsIlByaWNlcyIsIlRva2VuIiwiVG9rZW5EYXRhIiwicHJvcHMiLCJ0b2tlbkRhdGEiLCJzZXRUb2tlbmRhdGEiLCJtZXRhZGF0YSIsInNldE1ldGFkYXRhIiwiZmxvb3JQcmljZSIsInNldEZsb29yUHJpY2UiLCJ2b2x1bWUiLCJzZXRWb2x1bWUiLCJob2xkZXJDb3VudCIsInNldEhvbGRlckNvdW50IiwiaW1hZ2UiLCJzZXRJbWFnZSIsImN1cnJlbmN5Iiwic2V0Q3VycmVuY3kiLCJuYW1lIiwidmFsdWUiLCJzeW1ib2wiLCJwcmljZXMiLCJzZXRQcmljZXMiLCJnZXRUb2tlbkRhdGEiLCJjb25zb2xlIiwibG9nIiwidG9rZW5JZCIsIl90b2tlbkRhdGEiLCJsb2FkVG9rZW5EYXRhIiwidG9rZW4iLCJhc3NldF9uYW1lIiwicG9saWN5X2lkIiwicXVhbnRpdHkiLCJnZXRNZXRhZGF0YSIsIl9wb2xpY3lEYXRhIiwibG9hZFBvbGljeURhdGEiLCJmbG9vcl9wcmljZSIsInRvRml4ZWQiLCJ0b3RhbF92b2x1bWUiLCJhc3NldF9ob2xkZXJzIiwibWV0YSIsImtleXMiLCJPYmplY3QiLCJfaXBmcyIsImdldElwZnNGcm9tTWV0YWRhdGEiLCJjbGFzc05hbWUiLCJhbHQiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImpzb24iLCJkYXRhIiwiZmV0Y2giLCJoZWFkZXJzIiwicHJvamVjdF9pZCIsInJlcyIsInBvbGljeSIsInNldFByaWNlRGF0YSIsImRpdiIsInRva2VucyIsInN0YWtlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/tokenData.js\n"));

/***/ })

});