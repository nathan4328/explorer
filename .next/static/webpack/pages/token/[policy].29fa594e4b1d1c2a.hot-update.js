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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next.config */ \"./next.config.js\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _metadataTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metadataTable */ \"./src/pages/metadataTable.js\");\n/* harmony import */ var _policy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./policy */ \"./src/pages/policy.js\");\n/* harmony import */ var _prices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prices */ \"./src/pages/prices.js\");\n/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./token */ \"./src/pages/token.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction TokenData(props) {\n    _s();\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [tokenName, setTokenName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [metadata, setMetadata] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [tokenInfo, setTokenInfo] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        name: \"\",\n        policy: \"\",\n        created: \"\",\n        assetName: \"\",\n        fingerprint: \"\",\n        rarityRank: \"\",\n        rarityScore: \"\",\n        statisticalRank: \"\",\n        statisticalScore: \"\"\n    });\n    const [policy, setPolicy] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const getTokenData = async ()=>{\n            if (props.assetId == null) {\n                console.log(\"asset ID was undefined\");\n            } else {\n                // from url in [token].jsx\n                let assetId = props.assetId;\n                // fetch asset data from blockfrost\n                let assetData = await loadTokenData(assetId);\n                if (assetData == null) {\n                    setDisplay(\"invalid asset id\");\n                } else {\n                    let token = await createToken(assetData);\n                    setTokenInfo(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Asset name:\",\n                            token.asset_name,\n                            \" Policy ID: \",\n                            token.policy_id\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                        lineNumber: 36,\n                        columnNumber: 30\n                    }, this));\n                    setPolicy(token.policy_id);\n                    let _assetData = await getCnftAssetData(props.assetId);\n                    let createdData = _assetData.created_at.substring(0, 10);\n                    let fingerprint = _assetData.fingerprint.substring(0, 10);\n                    let name = _assetData.name;\n                    let rarityRank = _assetData.rarity_rank;\n                    let rarityScore = _assetData.rarity_score;\n                    let statisticalRank = _assetData.statistical_rank;\n                    let statisticalScore = _assetData.statistical_score;\n                    let obj = {\n                        name: name,\n                        policy: token.policy_id,\n                        created: createdData,\n                        assetName: token.asset_name,\n                        fingerprint: fingerprint,\n                        rarityRank: rarityRank,\n                        rarityScore: rarityScore,\n                        statisticalRank: statisticalRank,\n                        statisticalScore\n                    };\n                    setData(obj);\n                    // metadata displayed in table\n                    setMetadata(JSON.stringify(token.metadata));\n                    // nft name\n                    setTokenName(token.metadata.name);\n                    // nft image\n                    setImage(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        className: \"main-img\",\n                        alt: \"no image\",\n                        src: token.ipfs,\n                        width: 500,\n                        height: 500\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                        lineNumber: 61,\n                        columnNumber: 26\n                    }, this));\n                }\n            }\n        };\n        getTokenData();\n    }, [\n        props\n    ]);\n    async function createToken(assetData) {\n        let assetName = assetData.asset_name;\n        let policy = assetData.policy_id;\n        let quantity = assetData.quantity;\n        let token = new _token__WEBPACK_IMPORTED_MODULE_7__[\"default\"](assetName, policy, quantity);\n        let tokenMetadata = await token.getMetadata();\n        token.metadata = tokenMetadata;\n        if (tokenMetadata != null) {\n            let ipfs = token.getIpfsFromMetadata();\n            token.ipfs = ipfs;\n        }\n        return token;\n    }\n    // fetch token metadata from blockfrost\n    async function loadTokenData(assetId) {\n        try {\n            const data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/\" + assetId, {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    async function getCnftAssetData(asset) {\n        try {\n            const data = await fetch(\"https://api.opencnft.io/1/asset/\" + asset, {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    // fetch token metadata from blockfrost\n    async function getPrevTxs(assetId) {\n        try {\n            const data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/\" + assetId + \"/transactions\", {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"token-main\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_policy__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                policy: policy\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                lineNumber: 133,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"outer-token-box\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"token-box\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"token-image\",\n                                children: image\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                lineNumber: 136,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"token-data\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"token-data-item\",\n                                        children: [\n                                            \"Name: \",\n                                            data.name\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                        lineNumber: 138,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"token-data-item\",\n                                        children: [\n                                            \"Created: \",\n                                            data.created\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                        lineNumber: 141,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"token-data-item\",\n                                        children: [\n                                            \"Fingerprint: \",\n                                            data.fingerprint\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                        lineNumber: 144,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"token-data-item\",\n                                        children: [\n                                            \"Rarity Rank: \",\n                                            data.rarityRank\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                        lineNumber: 147,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"token-data-item\",\n                                        children: [\n                                            \"Statistical Rank: \",\n                                            data.statisticalRank\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                        lineNumber: 150,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"token-data-item\",\n                                        children: [\n                                            \"Asset Name: \",\n                                            data.assetName\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                        lineNumber: 153,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                lineNumber: 137,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                        lineNumber: 135,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"metadata\",\n                        children: metadata\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                        lineNumber: 158,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                lineNumber: 134,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n        lineNumber: 132,\n        columnNumber: 7\n    }, this);\n}\n_s(TokenData, \"1lqrCpNBpmvQdQx35xb3MA7Ptqg=\");\n_c = TokenData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TokenData);\nvar _c;\n$RefreshReg$(_c, \"TokenData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7QUFJckM7R0F6SlNSO0tBQUFBO0FBMEpULCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy90b2tlbkRhdGEuanM/NmY1YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhc3NldFByZWZpeCB9IGZyb20gXCJuZXh0LmNvbmZpZ1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VTeW5jRXh0ZXJuYWxTdG9yZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1ldGFkYXRhVGFibGUgZnJvbSBcIi4vbWV0YWRhdGFUYWJsZVwiO1xuaW1wb3J0IFBvbGljeSBmcm9tIFwiLi9wb2xpY3lcIjtcbmltcG9ydCBQcmljZXMgZnJvbSBcIi4vcHJpY2VzXCI7XG5pbXBvcnQgVG9rZW4gZnJvbSBcIi4vdG9rZW5cIjtcblxuZnVuY3Rpb24gVG9rZW5EYXRhIChwcm9wcykge1xuXG4gIGNvbnN0IFtkaXNwbGF5LCBzZXREaXNwbGF5XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFt0b2tlbk5hbWUsIHNldFRva2VuTmFtZV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFttZXRhZGF0YSwgc2V0TWV0YWRhdGFdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3Rva2VuSW5mbywgc2V0VG9rZW5JbmZvXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHtuYW1lOiAnJywgcG9saWN5OicnLGNyZWF0ZWQ6JycsIGFzc2V0TmFtZTonJywgZmluZ2VycHJpbnQ6JycsIHJhcml0eVJhbms6JycscmFyaXR5U2NvcmU6JycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aXN0aWNhbFJhbms6JycsIHN0YXRpc3RpY2FsU2NvcmU6Jyd9KTtcbiAgY29uc3QgW3BvbGljeSwgc2V0UG9saWN5XSA9IHVzZVN0YXRlKCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBnZXRUb2tlbkRhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgaWYocHJvcHMuYXNzZXRJZCA9PSBudWxsKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhc3NldCBJRCB3YXMgdW5kZWZpbmVkJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgLy8gZnJvbSB1cmwgaW4gW3Rva2VuXS5qc3hcbiAgICAgICAgICAgICBsZXQgYXNzZXRJZCA9IHByb3BzLmFzc2V0SWQ7XG5cbiAgICAgICAgICAgICAvLyBmZXRjaCBhc3NldCBkYXRhIGZyb20gYmxvY2tmcm9zdFxuICAgICAgICAgICAgIGxldCBhc3NldERhdGEgPSBhd2FpdCBsb2FkVG9rZW5EYXRhKGFzc2V0SWQpO1xuICAgICAgICAgICAgIGlmKGFzc2V0RGF0YSA9PSBudWxsKXtcbiAgICAgICAgICAgICAgIHNldERpc3BsYXkoJ2ludmFsaWQgYXNzZXQgaWQnKVxuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IGF3YWl0IGNyZWF0ZVRva2VuKGFzc2V0RGF0YSk7IFxuICAgICAgICAgICAgICAgIHNldFRva2VuSW5mbyg8bGFiZWw+QXNzZXQgbmFtZTp7dG9rZW4uYXNzZXRfbmFtZX0gUG9saWN5IElEOiB7dG9rZW4ucG9saWN5X2lkfTwvbGFiZWw+KTtcbiAgICAgICAgICAgICAgICBzZXRQb2xpY3kodG9rZW4ucG9saWN5X2lkKTtcblxuICAgICAgICAgICAgICAgIGxldCBfYXNzZXREYXRhID0gYXdhaXQgZ2V0Q25mdEFzc2V0RGF0YShwcm9wcy5hc3NldElkKTtcbiAgICAgICAgICAgICAgICBsZXQgY3JlYXRlZERhdGEgPSAoX2Fzc2V0RGF0YS5jcmVhdGVkX2F0KS5zdWJzdHJpbmcoMCwxMCk7XG4gICAgICAgICAgICAgICAgbGV0IGZpbmdlcnByaW50ID0gKF9hc3NldERhdGEuZmluZ2VycHJpbnQpLnN1YnN0cmluZygwLDEwKTtcbiAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IF9hc3NldERhdGEubmFtZTtcbiAgICAgICAgICAgICAgICBsZXQgcmFyaXR5UmFuayA9IF9hc3NldERhdGEucmFyaXR5X3Jhbms7XG4gICAgICAgICAgICAgICAgbGV0IHJhcml0eVNjb3JlID0gX2Fzc2V0RGF0YS5yYXJpdHlfc2NvcmU7XG4gICAgICAgICAgICAgICAgbGV0IHN0YXRpc3RpY2FsUmFuayA9IF9hc3NldERhdGEuc3RhdGlzdGljYWxfcmFuaztcbiAgICAgICAgICAgICAgICBsZXQgc3RhdGlzdGljYWxTY29yZSA9IF9hc3NldERhdGEuc3RhdGlzdGljYWxfc2NvcmU7XG5cbiAgICAgICAgICAgICAgICBsZXQgb2JqID0ge25hbWU6IG5hbWUsIHBvbGljeTogdG9rZW4ucG9saWN5X2lkLCBjcmVhdGVkOiBjcmVhdGVkRGF0YSwgYXNzZXROYW1lOiB0b2tlbi5hc3NldF9uYW1lLFxuICAgICAgICAgICAgICAgICAgZmluZ2VycHJpbnQ6IGZpbmdlcnByaW50LCByYXJpdHlSYW5rOiByYXJpdHlSYW5rLCByYXJpdHlTY29yZTogIHJhcml0eVNjb3JlLFxuICAgICAgICAgICAgICAgIHN0YXRpc3RpY2FsUmFuazogc3RhdGlzdGljYWxSYW5rLCBzdGF0aXN0aWNhbFNjb3JlfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHNldERhdGEob2JqKTtcblxuXG4gICAgICAgICAgICAgICAgLy8gbWV0YWRhdGEgZGlzcGxheWVkIGluIHRhYmxlXG4gICAgICAgICAgICAgICAgc2V0TWV0YWRhdGEoSlNPTi5zdHJpbmdpZnkodG9rZW4ubWV0YWRhdGEpKTtcbiAgICAgICAgICAgICAgICAvLyBuZnQgbmFtZVxuICAgICAgICAgICAgICAgIHNldFRva2VuTmFtZSh0b2tlbi5tZXRhZGF0YS5uYW1lKTtcblxuICAgICAgICAgICAgICAgIC8vIG5mdCBpbWFnZVxuICAgICAgICAgICAgICAgIHNldEltYWdlKDxJbWFnZSBjbGFzc05hbWUgPSBcIm1haW4taW1nXCIgYWx0PSAnbm8gaW1hZ2UnIHNyYyA9IHt0b2tlbi5pcGZzfSB3aWR0aCA9IHs1MDB9IGhlaWdodCA9IHs1MDB9Lz4pO1xuICAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBnZXRUb2tlbkRhdGEoKTtcbiAgICAgIH0sIFtwcm9wc10pXG5cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVRva2VuKGFzc2V0RGF0YSl7XG4gICAgICBsZXQgYXNzZXROYW1lID0gYXNzZXREYXRhLmFzc2V0X25hbWU7XG4gICAgICBsZXQgcG9saWN5ID0gYXNzZXREYXRhLnBvbGljeV9pZDtcbiAgICAgIGxldCBxdWFudGl0eSA9IGFzc2V0RGF0YS5xdWFudGl0eTtcblxuICAgICAgbGV0IHRva2VuID0gbmV3IFRva2VuKGFzc2V0TmFtZSwgcG9saWN5LCBxdWFudGl0eSk7XG4gICAgICBsZXQgdG9rZW5NZXRhZGF0YSA9IGF3YWl0IHRva2VuLmdldE1ldGFkYXRhKCk7XG4gICAgICB0b2tlbi5tZXRhZGF0YSA9IHRva2VuTWV0YWRhdGE7XG5cbiAgICAgIGlmKHRva2VuTWV0YWRhdGEgIT0gbnVsbCl7XG4gICAgICAgIGxldCBpcGZzID0gdG9rZW4uZ2V0SXBmc0Zyb21NZXRhZGF0YSgpO1xuICAgICAgICB0b2tlbi5pcGZzID0gaXBmcztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH1cblxuICAgIC8vIGZldGNoIHRva2VuIG1ldGFkYXRhIGZyb20gYmxvY2tmcm9zdFxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRUb2tlbkRhdGEoYXNzZXRJZCl7XG4gICAgICB0cnl7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9jYXJkYW5vLW1haW5uZXQuYmxvY2tmcm9zdC5pby9hcGkvdjAvYXNzZXRzLycrYXNzZXRJZCxcbiAgICAgICAge2hlYWRlcnM6e3Byb2plY3RfaWQ6ICdtYWlubmV0b1c2MVlZU2lPb0xTYU5RNmR6VHJrQUc0YXpYVklydmgnLCAnY2FjaGUtY29udHJvbCc6ICdtYXgtYWdlPTMxNTM2MDAwJ319KTtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZGF0YS5qc29uKCk7XG4gICAgICAgIGlmKGRhdGEuc3RhdHVzICE9IDIwMCl7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldENuZnRBc3NldERhdGEoYXNzZXQpe1xuICAgICAgdHJ5e1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLm9wZW5jbmZ0LmlvLzEvYXNzZXQvJythc3NldCxcbiAgICAgICAge2hlYWRlcnM6e3Byb2plY3RfaWQ6ICdtYWlubmV0b1c2MVlZU2lPb0xTYU5RNmR6VHJrQUc0YXpYVklydmgnLCAnY2FjaGUtY29udHJvbCc6ICdtYXgtYWdlPTMxNTM2MDAwJ319KTtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZGF0YS5qc29uKCk7XG4gICAgICAgIGlmKGRhdGEuc3RhdHVzIT0gMjAwKXtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZmV0Y2ggdG9rZW4gbWV0YWRhdGEgZnJvbSBibG9ja2Zyb3N0XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UHJldlR4cyhhc3NldElkKXtcbiAgICAgIHRyeXtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCdodHRwczovL2NhcmRhbm8tbWFpbm5ldC5ibG9ja2Zyb3N0LmlvL2FwaS92MC9hc3NldHMvJythc3NldElkKycvdHJhbnNhY3Rpb25zJyxcbiAgICAgICAge2hlYWRlcnM6e3Byb2plY3RfaWQ6ICdtYWlubmV0b1c2MVlZU2lPb0xTYU5RNmR6VHJrQUc0YXpYVklydmgnLCAnY2FjaGUtY29udHJvbCc6ICdtYXgtYWdlPTMxNTM2MDAwJ319KTtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZGF0YS5qc29uKCk7XG4gICAgICAgIGlmKGRhdGEuc3RhdHVzICE9IDIwMCl7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9rZW4tbWFpblwiPlxuICAgICAgICA8UG9saWN5IHBvbGljeSA9IHtwb2xpY3l9Lz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRlci10b2tlbi1ib3hcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRva2VuLWJveFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRva2VuLWltYWdlXCI+e2ltYWdlfTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRva2VuLWRhdGFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRva2VuLWRhdGEtaXRlbVwiPlxuICAgICAgICAgICAgICAgIE5hbWU6IHtkYXRhLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2tlbi1kYXRhLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBDcmVhdGVkOiB7ZGF0YS5jcmVhdGVkfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9rZW4tZGF0YS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgRmluZ2VycHJpbnQ6IHtkYXRhLmZpbmdlcnByaW50fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9rZW4tZGF0YS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgUmFyaXR5IFJhbms6IHtkYXRhLnJhcml0eVJhbmt9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2tlbi1kYXRhLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBTdGF0aXN0aWNhbCBSYW5rOiB7ZGF0YS5zdGF0aXN0aWNhbFJhbmt9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2tlbi1kYXRhLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBBc3NldCBOYW1lOiB7ZGF0YS5hc3NldE5hbWV9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0YWRhdGFcIj57bWV0YWRhdGF9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+KVxufVxuZXhwb3J0IGRlZmF1bHQgVG9rZW5EYXRhO1xuIl0sIm5hbWVzIjpbImFzc2V0UHJlZml4IiwiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVN5bmNFeHRlcm5hbFN0b3JlIiwiTWV0YWRhdGFUYWJsZSIsIlBvbGljeSIsIlByaWNlcyIsIlRva2VuIiwiVG9rZW5EYXRhIiwicHJvcHMiLCJkaXNwbGF5Iiwic2V0RGlzcGxheSIsInRva2VuTmFtZSIsInNldFRva2VuTmFtZSIsImltYWdlIiwic2V0SW1hZ2UiLCJtZXRhZGF0YSIsInNldE1ldGFkYXRhIiwidG9rZW5JbmZvIiwic2V0VG9rZW5JbmZvIiwiZGF0YSIsInNldERhdGEiLCJuYW1lIiwicG9saWN5IiwiY3JlYXRlZCIsImFzc2V0TmFtZSIsImZpbmdlcnByaW50IiwicmFyaXR5UmFuayIsInJhcml0eVNjb3JlIiwic3RhdGlzdGljYWxSYW5rIiwic3RhdGlzdGljYWxTY29yZSIsInNldFBvbGljeSIsImdldFRva2VuRGF0YSIsImFzc2V0SWQiLCJjb25zb2xlIiwibG9nIiwiYXNzZXREYXRhIiwibG9hZFRva2VuRGF0YSIsInRva2VuIiwiY3JlYXRlVG9rZW4iLCJsYWJlbCIsImFzc2V0X25hbWUiLCJwb2xpY3lfaWQiLCJfYXNzZXREYXRhIiwiZ2V0Q25mdEFzc2V0RGF0YSIsImNyZWF0ZWREYXRhIiwiY3JlYXRlZF9hdCIsInN1YnN0cmluZyIsInJhcml0eV9yYW5rIiwicmFyaXR5X3Njb3JlIiwic3RhdGlzdGljYWxfcmFuayIsInN0YXRpc3RpY2FsX3Njb3JlIiwib2JqIiwiSlNPTiIsInN0cmluZ2lmeSIsImNsYXNzTmFtZSIsImFsdCIsInNyYyIsImlwZnMiLCJ3aWR0aCIsImhlaWdodCIsInF1YW50aXR5IiwidG9rZW5NZXRhZGF0YSIsImdldE1ldGFkYXRhIiwiZ2V0SXBmc0Zyb21NZXRhZGF0YSIsImZldGNoIiwiaGVhZGVycyIsInByb2plY3RfaWQiLCJyZXMiLCJqc29uIiwic3RhdHVzIiwiZXJyb3IiLCJhc3NldCIsImdldFByZXZUeHMiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/tokenData.js\n"));

/***/ })

});