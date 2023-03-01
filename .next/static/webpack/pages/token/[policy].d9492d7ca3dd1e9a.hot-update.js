"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/token/[policy]",{

/***/ "./src/pages/tokenData.js":
/*!********************************!*\
  !*** ./src/pages/tokenData.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next.config */ \"./next.config.js\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _metadataTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metadataTable */ \"./src/pages/metadataTable.js\");\n/* harmony import */ var _policy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./policy */ \"./src/pages/policy.js\");\n/* harmony import */ var _prices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prices */ \"./src/pages/prices.js\");\n/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./token */ \"./src/pages/token.js\");\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/next/dist/compiled/buffer/index.js\")[\"Buffer\"];\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction TokenData(props) {\n    _s();\n    const [ipfs, setIpfs] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"/black.jpeg\");\n    const [metadata, setMetadata] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        name: \"\",\n        policy: \"\",\n        created: \"\",\n        assetName: \"\",\n        fingerprint: \"\",\n        rarityRank: \"\",\n        rarityScore: \"\",\n        statisticalRank: \"\",\n        statisticalScore: \"\"\n    });\n    const [policy, setPolicy] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [tokenInfo, setTokenInfo] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const getTokenData = async ()=>{\n            if (props.assetId == null) {\n                console.log(\"asset ID was undefined\");\n            } else {\n                // from url in [token].jsx\n                let assetId = props.assetId;\n                // fetch asset data from blockfrost\n                let assetData = await loadTokenData(assetId);\n                if (assetData == null) {\n                    setDisplay(\"invalid asset id\");\n                } else {\n                    let token = await createToken(assetData);\n                    setTokenInfo(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Asset name:\",\n                            token.asset_name,\n                            \" Policy ID: \",\n                            token.policy_id\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                        lineNumber: 35,\n                        columnNumber: 30\n                    }, this));\n                    setPolicy(token.policy_id);\n                    let _assetData = await getCnftAssetData(props.assetId);\n                    let createdData = _assetData.created_at.substring(0, 10);\n                    let fingerprint = _assetData.fingerprint.substring(0, 10);\n                    let assetName = _assetData.name;\n                    let rarityRank = _assetData.rarity_rank;\n                    let rarityScore = _assetData.rarity_score;\n                    let statisticalRank = _assetData.statistical_rank;\n                    let statisticalScore = _assetData.statistical_score;\n                    let decryptName = Buffer.from(token.asset_name, \"hex\").toString();\n                    console.log(decryptName);\n                    let obj = {\n                        name: decryptName,\n                        policy: token.policy_id,\n                        created: createdData,\n                        assetName: token.asset_name,\n                        fingerprint: fingerprint,\n                        rarityRank: rarityRank,\n                        rarityScore: rarityScore,\n                        statisticalRank: statisticalRank,\n                        statisticalScore\n                    };\n                    setData(obj);\n                    let price = prices;\n                    let ipfs = \"\";\n                    if (token.metadata != null) {\n                        ipfs = token.getIpfsFromMetadata();\n                        token.ipfs = ipfs;\n                    }\n                    let txs = await getPrevTxs(assetId);\n                    // metadata displayed in table\n                    setMetadata(JSON.stringify(token.metadata));\n                    if (token.ipfs != null) {\n                        // nft image\n                        setIpfs(token.ipfs);\n                    }\n                }\n            }\n        };\n        getTokenData();\n    }, [\n        props\n    ]);\n    function copyText(event, text) {\n        navigator.clipboard.writeText(text).then(()=>{\n            // Update the button text to \"Copied!\"\n            const button = event.target;\n            event.target.innerText = \"Copied\";\n            setTimeout(()=>{\n                // Reset the button text after 1 second\n                button.textContent = \"Copy\";\n            }, 1000);\n        });\n    }\n    async function createToken(assetData) {\n        let assetName = assetData.asset_name;\n        let policy = assetData.policy_id;\n        let quantity = assetData.quantity;\n        let token = new _token__WEBPACK_IMPORTED_MODULE_7__[\"default\"](assetName, policy, quantity);\n        let tokenMetadata = await token.getMetadata();\n        token.metadata = tokenMetadata;\n        return token;\n    }\n    // fetch token metadata from blockfrost\n    async function loadTokenData(assetId) {\n        try {\n            const data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/\" + assetId, {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    async function getCnftAssetData(asset) {\n        try {\n            const data = await fetch(\"https://api.opencnft.io/1/asset/\" + asset, {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    // fetch token metadata from blockfrost\n    async function getPrevTxs(assetId) {\n        try {\n            const data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/\" + assetId + \"/transactions\", {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    function setPriceData(data) {\n        setPrices(data);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"token-main\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_prices__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                data: setPriceData\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                lineNumber: 160,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_policy__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                policy: policy,\n                prices: prices\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                lineNumber: 161,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"token-box\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"token-image\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: \"main-img\",\n                            alt: \"no image\",\n                            src: ipfs,\n                            width: 500,\n                            height: 500\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                            lineNumber: 163,\n                            columnNumber: 44\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                        lineNumber: 163,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"token-data\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"token-data-item\",\n                                children: [\n                                    \"Name: \",\n                                    data.name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                lineNumber: 165,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"token-data-item\",\n                                children: [\n                                    \"Created: \",\n                                    data.created\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                lineNumber: 168,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"token-data-item\",\n                                children: [\n                                    \"Fingerprint: \",\n                                    data.fingerprint\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                lineNumber: 171,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"token-data-item\",\n                                children: [\n                                    \"Rarity Rank: \",\n                                    data.rarityRank\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                lineNumber: 174,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"token-data-item\",\n                                children: [\n                                    \"Statistical Rank: \",\n                                    data.statisticalRank\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                lineNumber: 177,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"token-data-item\",\n                                children: [\n                                    \"Asset Name: \",\n                                    data.assetName\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                lineNumber: 180,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"token-data-item\",\n                                children: [\n                                    \"Asset Name: \",\n                                    data.assetName.substring(0, 7),\n                                    \"...\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"policy-button\",\n                                        onClick: (e)=>copyText(e, data.assetName),\n                                        children: \"Copy\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                        lineNumber: 185,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                lineNumber: 183,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                        lineNumber: 164,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                lineNumber: 162,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"metadata\",\n                children: [\n                    \"Metadata: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                        lineNumber: 194,\n                        columnNumber: 45\n                    }, this),\n                    metadata\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                lineNumber: 194,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n        lineNumber: 159,\n        columnNumber: 7\n    }, this);\n}\n_s(TokenData, \"pVwwC8+MGNqva+VBwQExi/L/e9E=\");\n_c = TokenData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TokenData);\nvar _c;\n$RefreshReg$(_c, \"TokenData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztrQ0FDaEgsOERBQUNMO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7O29DQUFrQjtvQ0FDMUJ6RSxLQUFLRSxJQUFJOzs7Ozs7OzBDQUVoQiw4REFBQ3NFO2dDQUFJQyxXQUFVOztvQ0FBa0I7b0NBQ3ZCekUsS0FBS0ksT0FBTzs7Ozs7OzswQ0FFdEIsOERBQUNvRTtnQ0FBSUMsV0FBVTs7b0NBQWtCO29DQUNuQnpFLEtBQUtNLFdBQVc7Ozs7Ozs7MENBRTlCLDhEQUFDa0U7Z0NBQUlDLFdBQVU7O29DQUFrQjtvQ0FDbkJ6RSxLQUFLTyxVQUFVOzs7Ozs7OzBDQUU3Qiw4REFBQ2lFO2dDQUFJQyxXQUFVOztvQ0FBa0I7b0NBQ2R6RSxLQUFLUyxlQUFlOzs7Ozs7OzBDQUV2Qyw4REFBQytEO2dDQUFJQyxXQUFVOztvQ0FBa0I7b0NBQ3BCekUsS0FBS0ssU0FBUzs7Ozs7OzswQ0FFM0IsOERBQUNtRTtnQ0FBSUMsV0FBVTs7b0NBQWtCO29DQUNuQnpFLEtBQUtLLFNBQVMsQ0FBRTJCLFNBQVMsQ0FBQyxHQUFHO29DQUFHO2tEQUM5Qyw4REFBQ3VCO3dDQUNDa0IsV0FBVTt3Q0FDVkssU0FBUyxDQUFDQyxJQUFNL0IsU0FBUytCLEdBQUcvRSxLQUFLSyxTQUFTO2tEQUMzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU1ULDhEQUFDbUU7Z0JBQUlDLFdBQVU7O29CQUFXO2tDQUFVLDhEQUFDTzs7Ozs7b0JBQUtsRjs7Ozs7Ozs7Ozs7OztBQUlsRDtHQTdMU0o7S0FBQUE7QUE4TFQsK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Rva2VuRGF0YS5qcz82ZjVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFzc2V0UHJlZml4IH0gZnJvbSBcIm5leHQuY29uZmlnXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1ldGFkYXRhVGFibGUgZnJvbSBcIi4vbWV0YWRhdGFUYWJsZVwiO1xuaW1wb3J0IFBvbGljeSBmcm9tIFwiLi9wb2xpY3lcIjtcbmltcG9ydCBQcmljZXMgZnJvbSBcIi4vcHJpY2VzXCI7XG5pbXBvcnQgVG9rZW4gZnJvbSBcIi4vdG9rZW5cIjtcblxuZnVuY3Rpb24gVG9rZW5EYXRhIChwcm9wcykge1xuXG4gIGNvbnN0IFtpcGZzLCBzZXRJcGZzXSA9IHVzZVN0YXRlKCcvYmxhY2suanBlZycpO1xuICBjb25zdCBbbWV0YWRhdGEsIHNldE1ldGFkYXRhXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHtuYW1lOiAnJywgcG9saWN5OicnLGNyZWF0ZWQ6JycsIGFzc2V0TmFtZTonJywgZmluZ2VycHJpbnQ6JycsIHJhcml0eVJhbms6JycscmFyaXR5U2NvcmU6JycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aXN0aWNhbFJhbms6JycsIHN0YXRpc3RpY2FsU2NvcmU6Jyd9KTtcbiAgY29uc3QgW3BvbGljeSwgc2V0UG9saWN5XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtwcmljZXMsIHNldFByaWNlc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdG9rZW5JbmZvLCBzZXRUb2tlbkluZm9dID0gdXNlU3RhdGUoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGdldFRva2VuRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICBpZihwcm9wcy5hc3NldElkID09IG51bGwpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Fzc2V0IElEIHdhcyB1bmRlZmluZWQnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAvLyBmcm9tIHVybCBpbiBbdG9rZW5dLmpzeFxuICAgICAgICAgICAgIGxldCBhc3NldElkID0gcHJvcHMuYXNzZXRJZDtcblxuICAgICAgICAgICAgIC8vIGZldGNoIGFzc2V0IGRhdGEgZnJvbSBibG9ja2Zyb3N0XG4gICAgICAgICAgICAgbGV0IGFzc2V0RGF0YSA9IGF3YWl0IGxvYWRUb2tlbkRhdGEoYXNzZXRJZCk7XG4gICAgICAgICAgICAgaWYoYXNzZXREYXRhID09IG51bGwpe1xuICAgICAgICAgICAgICAgc2V0RGlzcGxheSgnaW52YWxpZCBhc3NldCBpZCcpXG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgbGV0IHRva2VuID0gYXdhaXQgY3JlYXRlVG9rZW4oYXNzZXREYXRhKTsgXG4gICAgICAgICAgICAgICAgc2V0VG9rZW5JbmZvKDxsYWJlbD5Bc3NldCBuYW1lOnt0b2tlbi5hc3NldF9uYW1lfSBQb2xpY3kgSUQ6IHt0b2tlbi5wb2xpY3lfaWR9PC9sYWJlbD4pO1xuICAgICAgICAgICAgICAgIHNldFBvbGljeSh0b2tlbi5wb2xpY3lfaWQpO1xuXG4gICAgICAgICAgICAgICAgbGV0IF9hc3NldERhdGEgPSBhd2FpdCBnZXRDbmZ0QXNzZXREYXRhKHByb3BzLmFzc2V0SWQpO1xuICAgICAgICAgICAgICAgIGxldCBjcmVhdGVkRGF0YSA9IChfYXNzZXREYXRhLmNyZWF0ZWRfYXQpLnN1YnN0cmluZygwLDEwKTtcbiAgICAgICAgICAgICAgICBsZXQgZmluZ2VycHJpbnQgPSAoX2Fzc2V0RGF0YS5maW5nZXJwcmludCkuc3Vic3RyaW5nKDAsMTApO1xuICAgICAgICAgICAgICAgIGxldCBhc3NldE5hbWUgPSBfYXNzZXREYXRhLm5hbWU7XG4gICAgICAgICAgICAgICAgbGV0IHJhcml0eVJhbmsgPSBfYXNzZXREYXRhLnJhcml0eV9yYW5rO1xuICAgICAgICAgICAgICAgIGxldCByYXJpdHlTY29yZSA9IF9hc3NldERhdGEucmFyaXR5X3Njb3JlO1xuICAgICAgICAgICAgICAgIGxldCBzdGF0aXN0aWNhbFJhbmsgPSBfYXNzZXREYXRhLnN0YXRpc3RpY2FsX3Jhbms7XG4gICAgICAgICAgICAgICAgbGV0IHN0YXRpc3RpY2FsU2NvcmUgPSBfYXNzZXREYXRhLnN0YXRpc3RpY2FsX3Njb3JlO1xuXG4gICAgICAgICAgICAgICAgbGV0IGRlY3J5cHROYW1lID0gQnVmZmVyLmZyb20odG9rZW4uYXNzZXRfbmFtZSwgJ2hleCcpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGVjcnlwdE5hbWUpO1xuXG5cbiAgICAgICAgICAgICAgICBsZXQgb2JqID0ge25hbWU6IGRlY3J5cHROYW1lLCBwb2xpY3k6IHRva2VuLnBvbGljeV9pZCwgY3JlYXRlZDogY3JlYXRlZERhdGEsIGFzc2V0TmFtZTogdG9rZW4uYXNzZXRfbmFtZSxcbiAgICAgICAgICAgICAgICAgIGZpbmdlcnByaW50OiBmaW5nZXJwcmludCwgcmFyaXR5UmFuazogcmFyaXR5UmFuaywgcmFyaXR5U2NvcmU6ICByYXJpdHlTY29yZSxcbiAgICAgICAgICAgICAgICBzdGF0aXN0aWNhbFJhbms6IHN0YXRpc3RpY2FsUmFuaywgc3RhdGlzdGljYWxTY29yZX1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBzZXREYXRhKG9iaik7XG5cbiAgICAgICAgICAgICAgICBsZXQgcHJpY2UgPSBwcmljZXM7XG4gICAgICAgICAgICAgICAgbGV0IGlwZnMgPSAnJztcbiAgICAgICAgICAgICAgICBpZih0b2tlbi5tZXRhZGF0YSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgIGlwZnMgPSB0b2tlbi5nZXRJcGZzRnJvbU1ldGFkYXRhKCk7XG4gICAgICAgICAgICAgICAgICB0b2tlbi5pcGZzID0gaXBmcztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgdHhzID0gYXdhaXQgZ2V0UHJldlR4cyhhc3NldElkKTtcblxuICAgICAgICAgICAgICAgIC8vIG1ldGFkYXRhIGRpc3BsYXllZCBpbiB0YWJsZVxuICAgICAgICAgICAgICAgIHNldE1ldGFkYXRhKEpTT04uc3RyaW5naWZ5KHRva2VuLm1ldGFkYXRhKSk7XG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBpZih0b2tlbi5pcGZzICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgLy8gbmZ0IGltYWdlXG4gICAgICAgICAgICAgICAgICBzZXRJcGZzKHRva2VuLmlwZnMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBnZXRUb2tlbkRhdGEoKTtcbiAgICAgIH0sIFtwcm9wc10pXG5cbiAgICAgIGZ1bmN0aW9uIGNvcHlUZXh0KGV2ZW50LCB0ZXh0KSB7XG4gICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRleHQpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgYnV0dG9uIHRleHQgdG8gXCJDb3BpZWQhXCJcbiAgICAgICAgICBjb25zdCBidXR0b24gPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgZXZlbnQudGFyZ2V0LmlubmVyVGV4dCA9IFwiQ29waWVkXCI7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAvLyBSZXNldCB0aGUgYnV0dG9uIHRleHQgYWZ0ZXIgMSBzZWNvbmRcbiAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ29weVwiO1xuICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIFxuXG5cbiAgICBhc3luYyBmdW5jdGlvbiBjcmVhdGVUb2tlbihhc3NldERhdGEpe1xuICAgICAgbGV0IGFzc2V0TmFtZSA9IGFzc2V0RGF0YS5hc3NldF9uYW1lO1xuICAgICAgbGV0IHBvbGljeSA9IGFzc2V0RGF0YS5wb2xpY3lfaWQ7XG4gICAgICBsZXQgcXVhbnRpdHkgPSBhc3NldERhdGEucXVhbnRpdHk7XG5cbiAgICAgIGxldCB0b2tlbiA9IG5ldyBUb2tlbihhc3NldE5hbWUsIHBvbGljeSwgcXVhbnRpdHkpO1xuICAgICAgbGV0IHRva2VuTWV0YWRhdGEgPSBhd2FpdCB0b2tlbi5nZXRNZXRhZGF0YSgpO1xuICAgICAgdG9rZW4ubWV0YWRhdGEgPSB0b2tlbk1ldGFkYXRhO1xuXG5cblxuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH1cblxuICAgIC8vIGZldGNoIHRva2VuIG1ldGFkYXRhIGZyb20gYmxvY2tmcm9zdFxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRUb2tlbkRhdGEoYXNzZXRJZCl7XG4gICAgICB0cnl7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9jYXJkYW5vLW1haW5uZXQuYmxvY2tmcm9zdC5pby9hcGkvdjAvYXNzZXRzLycrYXNzZXRJZCxcbiAgICAgICAge2hlYWRlcnM6e3Byb2plY3RfaWQ6ICdtYWlubmV0b1c2MVlZU2lPb0xTYU5RNmR6VHJrQUc0YXpYVklydmgnLCAnY2FjaGUtY29udHJvbCc6ICdtYXgtYWdlPTMxNTM2MDAwJ319KTtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZGF0YS5qc29uKCk7XG4gICAgICAgIGlmKGRhdGEuc3RhdHVzICE9IDIwMCl7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldENuZnRBc3NldERhdGEoYXNzZXQpe1xuICAgICAgdHJ5e1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLm9wZW5jbmZ0LmlvLzEvYXNzZXQvJythc3NldCxcbiAgICAgICAge2hlYWRlcnM6e3Byb2plY3RfaWQ6ICdtYWlubmV0b1c2MVlZU2lPb0xTYU5RNmR6VHJrQUc0YXpYVklydmgnLCAnY2FjaGUtY29udHJvbCc6ICdtYXgtYWdlPTMxNTM2MDAwJ319KTtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZGF0YS5qc29uKCk7XG4gICAgICAgIGlmKGRhdGEuc3RhdHVzIT0gMjAwKXtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZmV0Y2ggdG9rZW4gbWV0YWRhdGEgZnJvbSBibG9ja2Zyb3N0XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UHJldlR4cyhhc3NldElkKXtcbiAgICAgIHRyeXtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCdodHRwczovL2NhcmRhbm8tbWFpbm5ldC5ibG9ja2Zyb3N0LmlvL2FwaS92MC9hc3NldHMvJythc3NldElkKycvdHJhbnNhY3Rpb25zJyxcbiAgICAgICAge2hlYWRlcnM6e3Byb2plY3RfaWQ6ICdtYWlubmV0b1c2MVlZU2lPb0xTYU5RNmR6VHJrQUc0YXpYVklydmgnLCAnY2FjaGUtY29udHJvbCc6ICdtYXgtYWdlPTMxNTM2MDAwJ319KTtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZGF0YS5qc29uKCk7XG4gICAgICAgIGlmKGRhdGEuc3RhdHVzICE9IDIwMCl7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFByaWNlRGF0YShkYXRhKXtcbiAgICAgIHNldFByaWNlcyhkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRva2VuLW1haW5cIj5cbiAgICAgICAgPFByaWNlcyBkYXRhID0ge3NldFByaWNlRGF0YX0vPlxuICAgICAgICA8UG9saWN5IHBvbGljeSA9IHtwb2xpY3l9IHByaWNlcyA9IHtwcmljZXN9Lz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRva2VuLWJveFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRva2VuLWltYWdlXCI+PEltYWdlIGNsYXNzTmFtZSA9IFwibWFpbi1pbWdcIiBhbHQ9ICdubyBpbWFnZScgc3JjID0ge2lwZnN9IHdpZHRoID0gezUwMH0gaGVpZ2h0ID0gezUwMH0vPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRva2VuLWRhdGFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRva2VuLWRhdGEtaXRlbVwiPlxuICAgICAgICAgICAgICAgIE5hbWU6IHtkYXRhLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2tlbi1kYXRhLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBDcmVhdGVkOiB7ZGF0YS5jcmVhdGVkfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9rZW4tZGF0YS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgRmluZ2VycHJpbnQ6IHtkYXRhLmZpbmdlcnByaW50fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9rZW4tZGF0YS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgUmFyaXR5IFJhbms6IHtkYXRhLnJhcml0eVJhbmt9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2tlbi1kYXRhLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBTdGF0aXN0aWNhbCBSYW5rOiB7ZGF0YS5zdGF0aXN0aWNhbFJhbmt9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2tlbi1kYXRhLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBBc3NldCBOYW1lOiB7ZGF0YS5hc3NldE5hbWV9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2tlbi1kYXRhLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBBc3NldCBOYW1lOiB7KGRhdGEuYXNzZXROYW1lKS5zdWJzdHJpbmcoMCwgNyl9Li4uXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9saWN5LWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gY29weVRleHQoZSwgZGF0YS5hc3NldE5hbWUpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIENvcHlcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRhZGF0YVwiPk1ldGFkYXRhOiA8YnIvPnttZXRhZGF0YX08L2Rpdj5cblxuXG4gICAgPC9kaXY+KVxufVxuZXhwb3J0IGRlZmF1bHQgVG9rZW5EYXRhO1xuIl0sIm5hbWVzIjpbImFzc2V0UHJlZml4IiwiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk1ldGFkYXRhVGFibGUiLCJQb2xpY3kiLCJQcmljZXMiLCJUb2tlbiIsIlRva2VuRGF0YSIsInByb3BzIiwiaXBmcyIsInNldElwZnMiLCJtZXRhZGF0YSIsInNldE1ldGFkYXRhIiwiZGF0YSIsInNldERhdGEiLCJuYW1lIiwicG9saWN5IiwiY3JlYXRlZCIsImFzc2V0TmFtZSIsImZpbmdlcnByaW50IiwicmFyaXR5UmFuayIsInJhcml0eVNjb3JlIiwic3RhdGlzdGljYWxSYW5rIiwic3RhdGlzdGljYWxTY29yZSIsInNldFBvbGljeSIsInByaWNlcyIsInNldFByaWNlcyIsInRva2VuSW5mbyIsInNldFRva2VuSW5mbyIsImdldFRva2VuRGF0YSIsImFzc2V0SWQiLCJjb25zb2xlIiwibG9nIiwiYXNzZXREYXRhIiwibG9hZFRva2VuRGF0YSIsInNldERpc3BsYXkiLCJ0b2tlbiIsImNyZWF0ZVRva2VuIiwibGFiZWwiLCJhc3NldF9uYW1lIiwicG9saWN5X2lkIiwiX2Fzc2V0RGF0YSIsImdldENuZnRBc3NldERhdGEiLCJjcmVhdGVkRGF0YSIsImNyZWF0ZWRfYXQiLCJzdWJzdHJpbmciLCJyYXJpdHlfcmFuayIsInJhcml0eV9zY29yZSIsInN0YXRpc3RpY2FsX3JhbmsiLCJzdGF0aXN0aWNhbF9zY29yZSIsImRlY3J5cHROYW1lIiwiQnVmZmVyIiwiZnJvbSIsInRvU3RyaW5nIiwib2JqIiwicHJpY2UiLCJnZXRJcGZzRnJvbU1ldGFkYXRhIiwidHhzIiwiZ2V0UHJldlR4cyIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb3B5VGV4dCIsImV2ZW50IiwidGV4dCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRoZW4iLCJidXR0b24iLCJ0YXJnZXQiLCJpbm5lclRleHQiLCJzZXRUaW1lb3V0IiwidGV4dENvbnRlbnQiLCJxdWFudGl0eSIsInRva2VuTWV0YWRhdGEiLCJnZXRNZXRhZGF0YSIsImZldGNoIiwiaGVhZGVycyIsInByb2plY3RfaWQiLCJyZXMiLCJqc29uIiwic3RhdHVzIiwiZXJyb3IiLCJhc3NldCIsInNldFByaWNlRGF0YSIsImRpdiIsImNsYXNzTmFtZSIsImFsdCIsInNyYyIsIndpZHRoIiwiaGVpZ2h0Iiwib25DbGljayIsImUiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/tokenData.js\n"));

/***/ })

});