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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _metadataTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./metadataTable */ \"./src/pages/metadataTable.js\");\n/* harmony import */ var _prices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prices */ \"./src/pages/prices.js\");\n/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./token */ \"./src/pages/token.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction TokenData(props) {\n    _s();\n    const [tokenData, setTokendata] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [metadata, setMetadata] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [floorPrice, setFloorPrice] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [volume, setVolume] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [holderCount, setHolderCount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [currency, setCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        name: \"ada\",\n        value: 1,\n        symbol: \"₳\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const getTokenData = async ()=>{\n            if (props == null || props.prices == null || props.tokenId == null) {\n                console.log(\"tokenID was undefined\");\n            } else {\n                let tokenId = props.tokenId;\n                let currency = props.prices.currency;\n                setCurrency(currency);\n                let _tokenData = await loadTokenData(tokenId);\n                const token = new _token__WEBPACK_IMPORTED_MODULE_5__[\"default\"](_tokenData.asset_name, _tokenData.policy_id, _tokenData.quantity);\n                token.metadata = await token.getMetadata();\n                let _policyData = await loadPolicyData(token.policy_id);\n                setFloorPrice((_policyData.floor_price / 1000000 * currency.value).toFixed(2));\n                setVolume((_policyData.total_volume / 1000000 * currency.value).toFixed(2));\n                setHolderCount(_policyData.asset_holders);\n                const meta = token.metadata;\n                const keys = Object.keys(meta);\n                const _ipfs = await token.getIpfsFromMetadata();\n                setImage(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    className: \"main-img\",\n                    alt: \"no image\",\n                    src: _ipfs,\n                    width: 700,\n                    height: 700\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                    lineNumber: 36,\n                    columnNumber: 22\n                }, this));\n                setTokendata(meta.name);\n                setMetadata(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_metadataTable__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    json: meta\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                    lineNumber: 38,\n                    columnNumber: 25\n                }, this));\n            }\n        };\n        getTokenData();\n    }, [\n        props\n    ]);\n    async function loadTokenData(tokenId) {\n        const data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/\" + tokenId, {\n            headers: {\n                project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                \"cache-control\": \"max-age=31536000\"\n            }\n        });\n        const res = await data.json();\n        return res;\n    }\n    async function loadPolicyData(policy) {\n        const data = await fetch(\"https://api.opencnft.io/1/policy/\" + policy, {\n            headers: {\n                project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                \"cache-control\": \"max-age=31536000\"\n            }\n        });\n        const res = await data.json();\n        return res;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"token-main\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"token-name\",\n                children: tokenData\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"policyData\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"policy-item\",\n                        children: [\n                            \"Floor Price: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"value\",\n                                children: [\n                                    floorPrice,\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"currency\",\n                                        children: currency.symbol\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 88\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                lineNumber: 66,\n                                columnNumber: 53\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                        lineNumber: 66,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"policy-item\",\n                        children: [\n                            \"Collection Volume : \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"value\",\n                                children: [\n                                    volume,\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"currency\",\n                                        children: currency.symbol\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 91\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                lineNumber: 67,\n                                columnNumber: 60\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                        lineNumber: 67,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"policy-item\",\n                        children: [\n                            \"Number of Holders: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"value\",\n                                children: holderCount\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                lineNumber: 68,\n                                columnNumber: 59\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                        lineNumber: 68,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                lineNumber: 65,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"token-box\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"token-image\",\n                        children: image\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                        lineNumber: 71,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"metadata\",\n                        children: [\n                            metadata,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                        lineNumber: 72,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                lineNumber: 70,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n}\n_s(TokenData, \"iFBbtmgJhO5smseIylJ4PRWnixA=\");\n_c = TokenData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TokenData);\nvar _c;\n$RefreshReg$(_c, \"TokenData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VTswQkFDVnhDOzs7Ozs7MEJBRUwsOERBQUNvRDtnQkFBSVosV0FBVTs7a0NBQ1gsOERBQUNhO3dCQUFFYixXQUFVOzs0QkFBYzswQ0FBYSw4REFBQ1k7Z0NBQUlaLFdBQVU7O29DQUFTcEM7a0RBQVcsOERBQUNnRDt3Q0FBSVosV0FBVTtrREFBWTVCLFNBQVNJLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FDckgsOERBQUNxQzt3QkFBRWIsV0FBVTs7NEJBQWM7MENBQW9CLDhEQUFDWTtnQ0FBSVosV0FBVTs7b0NBQVNsQztrREFBTyw4REFBQzhDO3dDQUFJWixXQUFVO2tEQUFZNUIsU0FBU0ksTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUN4SCw4REFBQ3FDO3dCQUFFYixXQUFVOzs0QkFBYzswQ0FBbUIsOERBQUNZO2dDQUFJWixXQUFVOzBDQUFTaEM7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFFMUUsOERBQUM0QztnQkFBSVosV0FBVTs7a0NBQ1gsOERBQUNZO3dCQUFJWixXQUFVO2tDQUFlOUI7Ozs7OztrQ0FDOUIsOERBQUMwQzt3QkFBSVosV0FBVTs7NEJBQ1Z0Qzs0QkFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsxQjtHQXZFU0o7S0FBQUE7QUF3RVQsK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Rva2VuRGF0YS5qcz82ZjVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1ldGFkYXRhVGFibGUgZnJvbSBcIi4vbWV0YWRhdGFUYWJsZVwiO1xuaW1wb3J0IFByaWNlcyBmcm9tIFwiLi9wcmljZXNcIjtcbmltcG9ydCBUb2tlbiBmcm9tIFwiLi90b2tlblwiO1xuXG5mdW5jdGlvbiBUb2tlbkRhdGEgKHByb3BzKSB7XG5cbiAgICBjb25zdCBbdG9rZW5EYXRhLCBzZXRUb2tlbmRhdGFdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbbWV0YWRhdGEsIHNldE1ldGFkYXRhXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW2Zsb29yUHJpY2UsIHNldEZsb29yUHJpY2VdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbdm9sdW1lLCBzZXRWb2x1bWVdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbaG9sZGVyQ291bnQsIHNldEhvbGRlckNvdW50XSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFtjdXJyZW5jeSwgc2V0Q3VycmVuY3ldID0gdXNlU3RhdGUoe25hbWU6ICdhZGEnLHZhbHVlOiAxLCBzeW1ib2w6ICfigrMnfSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBnZXRUb2tlbkRhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgaWYocHJvcHMgPT0gbnVsbCB8fCBwcm9wcy5wcmljZXMgPT0gbnVsbCB8fCBwcm9wcy50b2tlbklkID09IG51bGwpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Rva2VuSUQgd2FzIHVuZGVmaW5lZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgbGV0IHRva2VuSWQgPSBwcm9wcy50b2tlbklkO1xuICAgICAgICAgICAgbGV0IGN1cnJlbmN5ID0gcHJvcHMucHJpY2VzLmN1cnJlbmN5O1xuICAgICAgICAgICAgc2V0Q3VycmVuY3koY3VycmVuY3kpO1xuICAgICAgICAgICAgbGV0IF90b2tlbkRhdGEgPSBhd2FpdCBsb2FkVG9rZW5EYXRhKHRva2VuSWQpO1xuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBuZXcgVG9rZW4oX3Rva2VuRGF0YS5hc3NldF9uYW1lLCBfdG9rZW5EYXRhLnBvbGljeV9pZCAsIF90b2tlbkRhdGEucXVhbnRpdHkpO1xuICAgICAgICAgICAgdG9rZW4ubWV0YWRhdGEgPSBhd2FpdCB0b2tlbi5nZXRNZXRhZGF0YSgpO1xuICAgICAgICAgICAgbGV0IF9wb2xpY3lEYXRhID0gYXdhaXQgbG9hZFBvbGljeURhdGEodG9rZW4ucG9saWN5X2lkKTtcbiAgICAgICAgICAgIHNldEZsb29yUHJpY2UoKChfcG9saWN5RGF0YS5mbG9vcl9wcmljZS8xMDAwMDAwKSAqIGN1cnJlbmN5LnZhbHVlKS50b0ZpeGVkKDIpKTtcbiAgICAgICAgICAgIHNldFZvbHVtZSgoKF9wb2xpY3lEYXRhLnRvdGFsX3ZvbHVtZS8xMDAwMDAwKSAqIGN1cnJlbmN5LnZhbHVlKS50b0ZpeGVkKDIpKTtcbiAgICAgICAgICAgIHNldEhvbGRlckNvdW50KF9wb2xpY3lEYXRhLmFzc2V0X2hvbGRlcnMpO1xuICAgICAgICAgICAgY29uc3QgbWV0YSA9IHRva2VuLm1ldGFkYXRhO1xuICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG1ldGEpO1xuICAgICAgICAgICAgY29uc3QgX2lwZnMgPSBhd2FpdCB0b2tlbi5nZXRJcGZzRnJvbU1ldGFkYXRhKCk7XG4gICAgICAgICAgICBzZXRJbWFnZSg8SW1hZ2UgY2xhc3NOYW1lID0gXCJtYWluLWltZ1wiIGFsdD0gJ25vIGltYWdlJyBzcmMgPSB7X2lwZnN9IHdpZHRoID0gezcwMH0gaGVpZ2h0ID0gezcwMH0vPik7XG4gICAgICAgICAgICBzZXRUb2tlbmRhdGEobWV0YS5uYW1lKTtcbiAgICAgICAgICAgIHNldE1ldGFkYXRhKDxNZXRhZGF0YVRhYmxlIGpzb24gPSB7bWV0YX0vPik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGdldFRva2VuRGF0YSgpO1xuICAgICAgfSwgW3Byb3BzXSlcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRUb2tlbkRhdGEodG9rZW5JZCl7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9jYXJkYW5vLW1haW5uZXQuYmxvY2tmcm9zdC5pby9hcGkvdjAvYXNzZXRzLycrdG9rZW5JZCxcbiAgICAgICAge2hlYWRlcnM6e3Byb2plY3RfaWQ6ICdtYWlubmV0b1c2MVlZU2lPb0xTYU5RNmR6VHJrQUc0YXpYVklydmgnLCAnY2FjaGUtY29udHJvbCc6ICdtYXgtYWdlPTMxNTM2MDAwJ319KTtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZGF0YS5qc29uKCk7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9XG4gICAgICBcbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkUG9saWN5RGF0YShwb2xpY3kpe1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5vcGVuY25mdC5pby8xL3BvbGljeS8nK3BvbGljeSxcbiAgICAgIHtoZWFkZXJzOntwcm9qZWN0X2lkOiAnbWFpbm5ldG9XNjFZWVNpT29MU2FOUTZkelRya0FHNGF6WFZJcnZoJywgJ2NhY2hlLWNvbnRyb2wnOiAnbWF4LWFnZT0zMTUzNjAwMCd9fSk7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBkYXRhLmpzb24oKTtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG5cblxuICAgIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRva2VuLW1haW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2tlbi1uYW1lXCI+XG4gICAgICAgICAgICB7dG9rZW5EYXRhfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xpY3lEYXRhXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwb2xpY3ktaXRlbVwiPkZsb29yIFByaWNlOiA8ZGl2IGNsYXNzTmFtZT1cInZhbHVlXCI+e2Zsb29yUHJpY2V9PGRpdiBjbGFzc05hbWU9XCJjdXJyZW5jeVwiPntjdXJyZW5jeS5zeW1ib2x9PC9kaXY+PC9kaXY+PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9saWN5LWl0ZW1cIj5Db2xsZWN0aW9uIFZvbHVtZSA6IDxkaXYgY2xhc3NOYW1lPVwidmFsdWVcIj57dm9sdW1lfTxkaXYgY2xhc3NOYW1lPVwiY3VycmVuY3lcIj57Y3VycmVuY3kuc3ltYm9sfTwvZGl2PjwvZGl2PjwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBvbGljeS1pdGVtXCI+TnVtYmVyIG9mIEhvbGRlcnM6IDxkaXYgY2xhc3NOYW1lPVwidmFsdWVcIj57aG9sZGVyQ291bnR9PC9kaXY+PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2tlbi1ib3hcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9rZW4taW1hZ2VcIj57aW1hZ2V9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGFkYXRhXCI+XG4gICAgICAgICAgICAgICAge21ldGFkYXRhfSA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgIDwvZGl2Pilcbn1cbmV4cG9ydCBkZWZhdWx0IFRva2VuRGF0YTtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTWV0YWRhdGFUYWJsZSIsIlByaWNlcyIsIlRva2VuIiwiVG9rZW5EYXRhIiwicHJvcHMiLCJ0b2tlbkRhdGEiLCJzZXRUb2tlbmRhdGEiLCJtZXRhZGF0YSIsInNldE1ldGFkYXRhIiwiZmxvb3JQcmljZSIsInNldEZsb29yUHJpY2UiLCJ2b2x1bWUiLCJzZXRWb2x1bWUiLCJob2xkZXJDb3VudCIsInNldEhvbGRlckNvdW50IiwiaW1hZ2UiLCJzZXRJbWFnZSIsImN1cnJlbmN5Iiwic2V0Q3VycmVuY3kiLCJuYW1lIiwidmFsdWUiLCJzeW1ib2wiLCJnZXRUb2tlbkRhdGEiLCJwcmljZXMiLCJ0b2tlbklkIiwiY29uc29sZSIsImxvZyIsIl90b2tlbkRhdGEiLCJsb2FkVG9rZW5EYXRhIiwidG9rZW4iLCJhc3NldF9uYW1lIiwicG9saWN5X2lkIiwicXVhbnRpdHkiLCJnZXRNZXRhZGF0YSIsIl9wb2xpY3lEYXRhIiwibG9hZFBvbGljeURhdGEiLCJmbG9vcl9wcmljZSIsInRvRml4ZWQiLCJ0b3RhbF92b2x1bWUiLCJhc3NldF9ob2xkZXJzIiwibWV0YSIsImtleXMiLCJPYmplY3QiLCJfaXBmcyIsImdldElwZnNGcm9tTWV0YWRhdGEiLCJjbGFzc05hbWUiLCJhbHQiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImpzb24iLCJkYXRhIiwiZmV0Y2giLCJoZWFkZXJzIiwicHJvamVjdF9pZCIsInJlcyIsInBvbGljeSIsImRpdiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/tokenData.js\n"));

/***/ })

});