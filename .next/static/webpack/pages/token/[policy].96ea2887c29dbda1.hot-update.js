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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next.config */ \"./next.config.js\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _metadataTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metadataTable */ \"./src/pages/metadataTable.js\");\n/* harmony import */ var _policy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./policy */ \"./src/pages/policy.js\");\n/* harmony import */ var _prices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prices */ \"./src/pages/prices.js\");\n/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./token */ \"./src/pages/token.js\");\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/next/dist/compiled/buffer/index.js\")[\"Buffer\"];\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction TokenData(props) {\n    _s();\n    const [ipfs, setIpfs] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"/black.jpeg\");\n    const [metadata, setMetadata] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        name: \"\",\n        policy: \"\",\n        created: \"\",\n        assetName: \"\",\n        fingerprint: \"\",\n        rarityRank: \"\",\n        rarityScore: \"\",\n        statisticalRank: \"\",\n        statisticalScore: \"\"\n    });\n    const [policy, setPolicy] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [tokenInfo, setTokenInfo] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const getTokenData = async ()=>{\n            if (props.assetId == null) {\n                console.log(\"asset ID was undefined\");\n            } else {\n                // from url in [token].jsx\n                let assetId = props.assetId;\n                // fetch asset data from blockfrost\n                let assetData = await loadTokenData(assetId);\n                if (assetData == null) {\n                    setDisplay(\"invalid asset id\");\n                } else {\n                    let token = await createToken(assetData);\n                    setTokenInfo(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Asset name:\",\n                            token.asset_name,\n                            \" Policy ID: \",\n                            token.policy_id\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                        lineNumber: 35,\n                        columnNumber: 30\n                    }, this));\n                    setPolicy(token.policy_id);\n                    let _assetData = await getCnftAssetData(props.assetId);\n                    let createdData = _assetData.created_at.substring(0, 10);\n                    let fingerprint = _assetData.fingerprint.substring(0, 10);\n                    let assetName = _assetData.name;\n                    let rarityRank = _assetData.rarity_rank;\n                    let rarityScore = _assetData.rarity_score;\n                    let statisticalRank = _assetData.statistical_rank;\n                    let statisticalScore = _assetData.statistical_score;\n                    let decryptName = Buffer.from(token.asset_name, \"hex\").toString();\n                    console.log(decryptName);\n                    let obj = {\n                        name: decryptName,\n                        policy: token.policy_id,\n                        created: createdData,\n                        assetName: token.asset_name,\n                        fingerprint: fingerprint,\n                        rarityRank: rarityRank,\n                        rarityScore: rarityScore,\n                        statisticalRank: statisticalRank,\n                        statisticalScore\n                    };\n                    setData(obj);\n                    let price = prices;\n                    let ipfs = \"\";\n                    if (token.metadata != null) {\n                        ipfs = token.getIpfsFromMetadata();\n                        token.ipfs = ipfs;\n                    }\n                    let txs = await getPrevTxs(assetId);\n                    // metadata displayed in table\n                    setMetadata(JSON.stringify(token.metadata));\n                    if (token.ipfs != null) {\n                        // nft image\n                        setIpfs(token.ipfs);\n                    }\n                }\n            }\n        };\n        getTokenData();\n    }, [\n        props\n    ]);\n    function copyText(event, text) {\n        navigator.clipboard.writeText(text).then(()=>{\n            // Update the button text to \"Copied!\"\n            const button = event.target;\n            event.target.innerText = \"Copied\";\n            setTimeout(()=>{\n                // Reset the button text after 1 second\n                button.textContent = \"Copy\";\n            }, 1000);\n        });\n    }\n    async function createToken(assetData) {\n        let assetName = assetData.asset_name;\n        let policy = assetData.policy_id;\n        let quantity = assetData.quantity;\n        let token = new _token__WEBPACK_IMPORTED_MODULE_7__[\"default\"](assetName, policy, quantity);\n        let tokenMetadata = await token.getMetadata();\n        token.metadata = tokenMetadata;\n        return token;\n    }\n    // fetch token metadata from blockfrost\n    async function loadTokenData(assetId) {\n        try {\n            const data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/\" + assetId, {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    async function getCnftAssetData(asset) {\n        try {\n            const data = await fetch(\"https://api.opencnft.io/1/asset/\" + asset, {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    // fetch token metadata from blockfrost\n    async function getPrevTxs(assetId) {\n        try {\n            const data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/\" + assetId + \"/transactions\", {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    function setPriceData(data) {\n        setPrices(data);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"token-main\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_prices__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                data: setPriceData\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                lineNumber: 160,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_policy__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                policy: policy,\n                prices: prices\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                lineNumber: 161,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"token-box\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"token-image\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: \"main-img\",\n                            alt: \"no image\",\n                            src: ipfs,\n                            width: 500,\n                            height: 500\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                            lineNumber: 163,\n                            columnNumber: 44\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                        lineNumber: 163,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"token-data\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"token-data-item\",\n                                children: [\n                                    \"Name: \",\n                                    data.name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                lineNumber: 165,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"token-data-item\",\n                                children: [\n                                    \"Created: \",\n                                    data.created\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                lineNumber: 168,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"token-data-item\",\n                                children: [\n                                    \"Fingerprint: \",\n                                    data.fingerprint\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                lineNumber: 171,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"token-data-item\",\n                                children: [\n                                    \"Rarity Rank: \",\n                                    data.rarityRank\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                lineNumber: 174,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"token-data-item\",\n                                children: [\n                                    \"Statistical Rank: \",\n                                    data.statisticalRank\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                lineNumber: 177,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"token-data-item\",\n                                children: [\n                                    \"Asset Name: \",\n                                    data.assetName,\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"policy-button\",\n                                        onClick: (e)=>copyText(e, data.assetName),\n                                        children: \"Copy\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                        lineNumber: 182,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                lineNumber: 180,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                        lineNumber: 164,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                lineNumber: 162,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"metadata\",\n                children: [\n                    \"Metadata: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                        lineNumber: 191,\n                        columnNumber: 45\n                    }, this),\n                    metadata\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                lineNumber: 191,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n        lineNumber: 159,\n        columnNumber: 7\n    }, this);\n}\n_s(TokenData, \"pVwwC8+MGNqva+VBwQExi/L/e9E=\");\n_c = TokenData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TokenData);\nvar _c;\n$RefreshReg$(_c, \"TokenData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztrQ0FDaEgsOERBQUNMO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7O29DQUFrQjtvQ0FDMUJ6RSxLQUFLRSxJQUFJOzs7Ozs7OzBDQUVoQiw4REFBQ3NFO2dDQUFJQyxXQUFVOztvQ0FBa0I7b0NBQ3ZCekUsS0FBS0ksT0FBTzs7Ozs7OzswQ0FFdEIsOERBQUNvRTtnQ0FBSUMsV0FBVTs7b0NBQWtCO29DQUNuQnpFLEtBQUtNLFdBQVc7Ozs7Ozs7MENBRTlCLDhEQUFDa0U7Z0NBQUlDLFdBQVU7O29DQUFrQjtvQ0FDbkJ6RSxLQUFLTyxVQUFVOzs7Ozs7OzBDQUU3Qiw4REFBQ2lFO2dDQUFJQyxXQUFVOztvQ0FBa0I7b0NBQ2R6RSxLQUFLUyxlQUFlOzs7Ozs7OzBDQUV2Qyw4REFBQytEO2dDQUFJQyxXQUFVOztvQ0FBa0I7b0NBQ25CekUsS0FBS0ssU0FBUztrREFDNUIsOERBQUNrRDt3Q0FDQ2tCLFdBQVU7d0NBQ1ZLLFNBQVMsQ0FBQ0MsSUFBTS9CLFNBQVMrQixHQUFHL0UsS0FBS0ssU0FBUztrREFDM0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNVCw4REFBQ21FO2dCQUFJQyxXQUFVOztvQkFBVztrQ0FBVSw4REFBQ087Ozs7O29CQUFLbEY7Ozs7Ozs7Ozs7Ozs7QUFJbEQ7R0ExTFNKO0tBQUFBO0FBMkxULCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy90b2tlbkRhdGEuanM/NmY1YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhc3NldFByZWZpeCB9IGZyb20gXCJuZXh0LmNvbmZpZ1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNZXRhZGF0YVRhYmxlIGZyb20gXCIuL21ldGFkYXRhVGFibGVcIjtcbmltcG9ydCBQb2xpY3kgZnJvbSBcIi4vcG9saWN5XCI7XG5pbXBvcnQgUHJpY2VzIGZyb20gXCIuL3ByaWNlc1wiO1xuaW1wb3J0IFRva2VuIGZyb20gXCIuL3Rva2VuXCI7XG5cbmZ1bmN0aW9uIFRva2VuRGF0YSAocHJvcHMpIHtcblxuICBjb25zdCBbaXBmcywgc2V0SXBmc10gPSB1c2VTdGF0ZSgnL2JsYWNrLmpwZWcnKTtcbiAgY29uc3QgW21ldGFkYXRhLCBzZXRNZXRhZGF0YV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7bmFtZTogJycsIHBvbGljeTonJyxjcmVhdGVkOicnLCBhc3NldE5hbWU6JycsIGZpbmdlcnByaW50OicnLCByYXJpdHlSYW5rOicnLHJhcml0eVNjb3JlOicnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGlzdGljYWxSYW5rOicnLCBzdGF0aXN0aWNhbFNjb3JlOicnfSk7XG4gIGNvbnN0IFtwb2xpY3ksIHNldFBvbGljeV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbcHJpY2VzLCBzZXRQcmljZXNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3Rva2VuSW5mbywgc2V0VG9rZW5JbmZvXSA9IHVzZVN0YXRlKCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBnZXRUb2tlbkRhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgaWYocHJvcHMuYXNzZXRJZCA9PSBudWxsKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhc3NldCBJRCB3YXMgdW5kZWZpbmVkJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgLy8gZnJvbSB1cmwgaW4gW3Rva2VuXS5qc3hcbiAgICAgICAgICAgICBsZXQgYXNzZXRJZCA9IHByb3BzLmFzc2V0SWQ7XG5cbiAgICAgICAgICAgICAvLyBmZXRjaCBhc3NldCBkYXRhIGZyb20gYmxvY2tmcm9zdFxuICAgICAgICAgICAgIGxldCBhc3NldERhdGEgPSBhd2FpdCBsb2FkVG9rZW5EYXRhKGFzc2V0SWQpO1xuICAgICAgICAgICAgIGlmKGFzc2V0RGF0YSA9PSBudWxsKXtcbiAgICAgICAgICAgICAgIHNldERpc3BsYXkoJ2ludmFsaWQgYXNzZXQgaWQnKVxuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IGF3YWl0IGNyZWF0ZVRva2VuKGFzc2V0RGF0YSk7IFxuICAgICAgICAgICAgICAgIHNldFRva2VuSW5mbyg8bGFiZWw+QXNzZXQgbmFtZTp7dG9rZW4uYXNzZXRfbmFtZX0gUG9saWN5IElEOiB7dG9rZW4ucG9saWN5X2lkfTwvbGFiZWw+KTtcbiAgICAgICAgICAgICAgICBzZXRQb2xpY3kodG9rZW4ucG9saWN5X2lkKTtcblxuICAgICAgICAgICAgICAgIGxldCBfYXNzZXREYXRhID0gYXdhaXQgZ2V0Q25mdEFzc2V0RGF0YShwcm9wcy5hc3NldElkKTtcbiAgICAgICAgICAgICAgICBsZXQgY3JlYXRlZERhdGEgPSAoX2Fzc2V0RGF0YS5jcmVhdGVkX2F0KS5zdWJzdHJpbmcoMCwxMCk7XG4gICAgICAgICAgICAgICAgbGV0IGZpbmdlcnByaW50ID0gKF9hc3NldERhdGEuZmluZ2VycHJpbnQpLnN1YnN0cmluZygwLDEwKTtcbiAgICAgICAgICAgICAgICBsZXQgYXNzZXROYW1lID0gX2Fzc2V0RGF0YS5uYW1lO1xuICAgICAgICAgICAgICAgIGxldCByYXJpdHlSYW5rID0gX2Fzc2V0RGF0YS5yYXJpdHlfcmFuaztcbiAgICAgICAgICAgICAgICBsZXQgcmFyaXR5U2NvcmUgPSBfYXNzZXREYXRhLnJhcml0eV9zY29yZTtcbiAgICAgICAgICAgICAgICBsZXQgc3RhdGlzdGljYWxSYW5rID0gX2Fzc2V0RGF0YS5zdGF0aXN0aWNhbF9yYW5rO1xuICAgICAgICAgICAgICAgIGxldCBzdGF0aXN0aWNhbFNjb3JlID0gX2Fzc2V0RGF0YS5zdGF0aXN0aWNhbF9zY29yZTtcblxuICAgICAgICAgICAgICAgIGxldCBkZWNyeXB0TmFtZSA9IEJ1ZmZlci5mcm9tKHRva2VuLmFzc2V0X25hbWUsICdoZXgnKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRlY3J5cHROYW1lKTtcblxuXG4gICAgICAgICAgICAgICAgbGV0IG9iaiA9IHtuYW1lOiBkZWNyeXB0TmFtZSwgcG9saWN5OiB0b2tlbi5wb2xpY3lfaWQsIGNyZWF0ZWQ6IGNyZWF0ZWREYXRhLCBhc3NldE5hbWU6IHRva2VuLmFzc2V0X25hbWUsXG4gICAgICAgICAgICAgICAgICBmaW5nZXJwcmludDogZmluZ2VycHJpbnQsIHJhcml0eVJhbms6IHJhcml0eVJhbmssIHJhcml0eVNjb3JlOiAgcmFyaXR5U2NvcmUsXG4gICAgICAgICAgICAgICAgc3RhdGlzdGljYWxSYW5rOiBzdGF0aXN0aWNhbFJhbmssIHN0YXRpc3RpY2FsU2NvcmV9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc2V0RGF0YShvYmopO1xuXG4gICAgICAgICAgICAgICAgbGV0IHByaWNlID0gcHJpY2VzO1xuICAgICAgICAgICAgICAgIGxldCBpcGZzID0gJyc7XG4gICAgICAgICAgICAgICAgaWYodG9rZW4ubWV0YWRhdGEgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICBpcGZzID0gdG9rZW4uZ2V0SXBmc0Zyb21NZXRhZGF0YSgpO1xuICAgICAgICAgICAgICAgICAgdG9rZW4uaXBmcyA9IGlwZnM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IHR4cyA9IGF3YWl0IGdldFByZXZUeHMoYXNzZXRJZCk7XG5cbiAgICAgICAgICAgICAgICAvLyBtZXRhZGF0YSBkaXNwbGF5ZWQgaW4gdGFibGVcbiAgICAgICAgICAgICAgICBzZXRNZXRhZGF0YShKU09OLnN0cmluZ2lmeSh0b2tlbi5tZXRhZGF0YSkpO1xuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgaWYodG9rZW4uaXBmcyAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgIC8vIG5mdCBpbWFnZVxuICAgICAgICAgICAgICAgICAgc2V0SXBmcyh0b2tlbi5pcGZzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ2V0VG9rZW5EYXRhKCk7XG4gICAgICB9LCBbcHJvcHNdKVxuXG4gICAgICBmdW5jdGlvbiBjb3B5VGV4dChldmVudCwgdGV4dCkge1xuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0ZXh0KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAvLyBVcGRhdGUgdGhlIGJ1dHRvbiB0ZXh0IHRvIFwiQ29waWVkIVwiXG4gICAgICAgICAgY29uc3QgYnV0dG9uID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgIGV2ZW50LnRhcmdldC5pbm5lclRleHQgPSBcIkNvcGllZFwiO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gUmVzZXQgdGhlIGJ1dHRvbiB0ZXh0IGFmdGVyIDEgc2Vjb25kXG4gICAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIkNvcHlcIjtcbiAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBcblxuXG4gICAgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVG9rZW4oYXNzZXREYXRhKXtcbiAgICAgIGxldCBhc3NldE5hbWUgPSBhc3NldERhdGEuYXNzZXRfbmFtZTtcbiAgICAgIGxldCBwb2xpY3kgPSBhc3NldERhdGEucG9saWN5X2lkO1xuICAgICAgbGV0IHF1YW50aXR5ID0gYXNzZXREYXRhLnF1YW50aXR5O1xuXG4gICAgICBsZXQgdG9rZW4gPSBuZXcgVG9rZW4oYXNzZXROYW1lLCBwb2xpY3ksIHF1YW50aXR5KTtcbiAgICAgIGxldCB0b2tlbk1ldGFkYXRhID0gYXdhaXQgdG9rZW4uZ2V0TWV0YWRhdGEoKTtcbiAgICAgIHRva2VuLm1ldGFkYXRhID0gdG9rZW5NZXRhZGF0YTtcblxuXG5cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9XG5cbiAgICAvLyBmZXRjaCB0b2tlbiBtZXRhZGF0YSBmcm9tIGJsb2NrZnJvc3RcbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkVG9rZW5EYXRhKGFzc2V0SWQpe1xuICAgICAgdHJ5e1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vY2FyZGFuby1tYWlubmV0LmJsb2NrZnJvc3QuaW8vYXBpL3YwL2Fzc2V0cy8nK2Fzc2V0SWQsXG4gICAgICAgIHtoZWFkZXJzOntwcm9qZWN0X2lkOiAnbWFpbm5ldG9XNjFZWVNpT29MU2FOUTZkelRya0FHNGF6WFZJcnZoJywgJ2NhY2hlLWNvbnRyb2wnOiAnbWF4LWFnZT0zMTUzNjAwMCd9fSk7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGRhdGEuanNvbigpO1xuICAgICAgICBpZihkYXRhLnN0YXR1cyAhPSAyMDApe1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRDbmZ0QXNzZXREYXRhKGFzc2V0KXtcbiAgICAgIHRyeXtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5vcGVuY25mdC5pby8xL2Fzc2V0LycrYXNzZXQsXG4gICAgICAgIHtoZWFkZXJzOntwcm9qZWN0X2lkOiAnbWFpbm5ldG9XNjFZWVNpT29MU2FOUTZkelRya0FHNGF6WFZJcnZoJywgJ2NhY2hlLWNvbnRyb2wnOiAnbWF4LWFnZT0zMTUzNjAwMCd9fSk7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGRhdGEuanNvbigpO1xuICAgICAgICBpZihkYXRhLnN0YXR1cyE9IDIwMCl7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGZldGNoIHRva2VuIG1ldGFkYXRhIGZyb20gYmxvY2tmcm9zdFxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFByZXZUeHMoYXNzZXRJZCl7XG4gICAgICB0cnl7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9jYXJkYW5vLW1haW5uZXQuYmxvY2tmcm9zdC5pby9hcGkvdjAvYXNzZXRzLycrYXNzZXRJZCsnL3RyYW5zYWN0aW9ucycsXG4gICAgICAgIHtoZWFkZXJzOntwcm9qZWN0X2lkOiAnbWFpbm5ldG9XNjFZWVNpT29MU2FOUTZkelRya0FHNGF6WFZJcnZoJywgJ2NhY2hlLWNvbnRyb2wnOiAnbWF4LWFnZT0zMTUzNjAwMCd9fSk7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGRhdGEuanNvbigpO1xuICAgICAgICBpZihkYXRhLnN0YXR1cyAhPSAyMDApe1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRQcmljZURhdGEoZGF0YSl7XG4gICAgICBzZXRQcmljZXMoZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2tlbi1tYWluXCI+XG4gICAgICAgIDxQcmljZXMgZGF0YSA9IHtzZXRQcmljZURhdGF9Lz5cbiAgICAgICAgPFBvbGljeSBwb2xpY3kgPSB7cG9saWN5fSBwcmljZXMgPSB7cHJpY2VzfS8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2tlbi1ib3hcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2tlbi1pbWFnZVwiPjxJbWFnZSBjbGFzc05hbWUgPSBcIm1haW4taW1nXCIgYWx0PSAnbm8gaW1hZ2UnIHNyYyA9IHtpcGZzfSB3aWR0aCA9IHs1MDB9IGhlaWdodCA9IHs1MDB9Lz48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2tlbi1kYXRhXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2tlbi1kYXRhLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBOYW1lOiB7ZGF0YS5uYW1lfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9rZW4tZGF0YS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgQ3JlYXRlZDoge2RhdGEuY3JlYXRlZH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRva2VuLWRhdGEtaXRlbVwiPlxuICAgICAgICAgICAgICAgIEZpbmdlcnByaW50OiB7ZGF0YS5maW5nZXJwcmludH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRva2VuLWRhdGEtaXRlbVwiPlxuICAgICAgICAgICAgICAgIFJhcml0eSBSYW5rOiB7ZGF0YS5yYXJpdHlSYW5rfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9rZW4tZGF0YS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgU3RhdGlzdGljYWwgUmFuazoge2RhdGEuc3RhdGlzdGljYWxSYW5rfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9rZW4tZGF0YS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgQXNzZXQgTmFtZTogeyhkYXRhLmFzc2V0TmFtZSl9ICAgXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9saWN5LWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gY29weVRleHQoZSwgZGF0YS5hc3NldE5hbWUpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIENvcHlcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRhZGF0YVwiPk1ldGFkYXRhOiA8YnIvPnttZXRhZGF0YX08L2Rpdj5cblxuXG4gICAgPC9kaXY+KVxufVxuZXhwb3J0IGRlZmF1bHQgVG9rZW5EYXRhO1xuIl0sIm5hbWVzIjpbImFzc2V0UHJlZml4IiwiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk1ldGFkYXRhVGFibGUiLCJQb2xpY3kiLCJQcmljZXMiLCJUb2tlbiIsIlRva2VuRGF0YSIsInByb3BzIiwiaXBmcyIsInNldElwZnMiLCJtZXRhZGF0YSIsInNldE1ldGFkYXRhIiwiZGF0YSIsInNldERhdGEiLCJuYW1lIiwicG9saWN5IiwiY3JlYXRlZCIsImFzc2V0TmFtZSIsImZpbmdlcnByaW50IiwicmFyaXR5UmFuayIsInJhcml0eVNjb3JlIiwic3RhdGlzdGljYWxSYW5rIiwic3RhdGlzdGljYWxTY29yZSIsInNldFBvbGljeSIsInByaWNlcyIsInNldFByaWNlcyIsInRva2VuSW5mbyIsInNldFRva2VuSW5mbyIsImdldFRva2VuRGF0YSIsImFzc2V0SWQiLCJjb25zb2xlIiwibG9nIiwiYXNzZXREYXRhIiwibG9hZFRva2VuRGF0YSIsInNldERpc3BsYXkiLCJ0b2tlbiIsImNyZWF0ZVRva2VuIiwibGFiZWwiLCJhc3NldF9uYW1lIiwicG9saWN5X2lkIiwiX2Fzc2V0RGF0YSIsImdldENuZnRBc3NldERhdGEiLCJjcmVhdGVkRGF0YSIsImNyZWF0ZWRfYXQiLCJzdWJzdHJpbmciLCJyYXJpdHlfcmFuayIsInJhcml0eV9zY29yZSIsInN0YXRpc3RpY2FsX3JhbmsiLCJzdGF0aXN0aWNhbF9zY29yZSIsImRlY3J5cHROYW1lIiwiQnVmZmVyIiwiZnJvbSIsInRvU3RyaW5nIiwib2JqIiwicHJpY2UiLCJnZXRJcGZzRnJvbU1ldGFkYXRhIiwidHhzIiwiZ2V0UHJldlR4cyIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb3B5VGV4dCIsImV2ZW50IiwidGV4dCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRoZW4iLCJidXR0b24iLCJ0YXJnZXQiLCJpbm5lclRleHQiLCJzZXRUaW1lb3V0IiwidGV4dENvbnRlbnQiLCJxdWFudGl0eSIsInRva2VuTWV0YWRhdGEiLCJnZXRNZXRhZGF0YSIsImZldGNoIiwiaGVhZGVycyIsInByb2plY3RfaWQiLCJyZXMiLCJqc29uIiwic3RhdHVzIiwiZXJyb3IiLCJhc3NldCIsInNldFByaWNlRGF0YSIsImRpdiIsImNsYXNzTmFtZSIsImFsdCIsInNyYyIsIndpZHRoIiwiaGVpZ2h0Iiwib25DbGljayIsImUiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/tokenData.js\n"));

/***/ })

});