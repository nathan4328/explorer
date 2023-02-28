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

/***/ "./src/pages/policyData.js":
/*!*********************************!*\
  !*** ./src/pages/policyData.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collection */ \"./src/pages/collection.js\");\n/* harmony import */ var _nftGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nftGrid */ \"./src/pages/nftGrid.js\");\n/* harmony import */ var _policy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./policy */ \"./src/pages/policy.js\");\n/* harmony import */ var _prices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prices */ \"./src/pages/prices.js\");\n/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./token */ \"./src/pages/token.js\");\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/next/dist/compiled/buffer/index.js\")[\"Buffer\"];\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction PolicyData(props) {\n    _s();\n    const [policy, setPolicy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [tokens, setTokens] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getPolicyData = async ()=>{\n            if (props = null) {\n                console.log(\"policy was undefined\");\n            } else {\n                let tokens = [];\n                let assets = await getAssetsOfPolicyFromKoios(props.stake, props.policy);\n                for(let i = 0; i < assets.length; i++){\n                    let token = new _token__WEBPACK_IMPORTED_MODULE_6__[\"default\"](assets[i].asset_name, assets[i].policy_id, assets[i].quantity);\n                    token.metadata = await token.getMetadata();\n                    if (token.metadata != null) {\n                        let ipfs = token.getIpfsFromMetadata();\n                        token.ipfs = ipfs;\n                    }\n                    tokens.push(token);\n                }\n                setTokens(tokens);\n            }\n        };\n        getPolicyData();\n    }, [\n        props\n    ]);\n    // used when fetching handle address\n    async function getStakeFromAddressKoios(address) {\n        try {\n            const req = await fetch(\"https://api.koios.rest/api/v0/address_info\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    \"_addresses\": [\n                        address\n                    ]\n                })\n            });\n            const res = await req.json();\n            return res[0].stake_address;\n        } catch (error) {\n            return null;\n        }\n    }\n    // returns base address from handle\n    const getAddressFromHandle = async (handle)=>{\n        try {\n            let policyID = \"f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a\";\n            // A blank Handle name should always be ignored.\n            if (handle.length === 0) {\n            // Handle error.\n            }\n            // Convert handleName to hex encoding.\n            let assetName = Buffer.from(handle).toString(\"hex\");\n            const data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/\".concat(policyID).concat(assetName, \"/addresses\"), {\n                headers: {\n                    // Your Blockfrost API key\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"Content-Type\": \"application/json\"\n                }\n            }).then((res)=>res.json());\n            let stake = await getStakeFromAddressKoios(data[0].address);\n            return stake;\n        } catch (error) {\n            return null;\n        }\n    };\n    // no asset limit on how many assets gets returned on one request\n    // koios, blockfrost is limited by 100 results per page\n    async function getAssetsOfPolicyFromKoios(stakeAddress, policy) {\n        let assets = [];\n        console.log(stakeAddress, policy);\n        try {\n            const req = await fetch(\"https://api.koios.rest/api/v0/account_assets\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    \"_stake_addresses\": [\n                        stakeAddress\n                    ]\n                })\n            });\n            const res = await req.json();\n            for(let i = 0; i < res[0].asset_list.length; i++){\n                let token = res[0].asset_list[i];\n                if (token.policy_id == policy) {\n                    assets.push(token);\n                }\n            }\n            return assets;\n        } catch (error) {\n            return null;\n        }\n    }\n    function setPriceData(data) {\n        setPrices(data);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_prices__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                data: setPriceData\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 135,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Policy Info\"\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 136,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_policy__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                policy: props.policy,\n                prices: prices\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 137,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Your Wallet\"\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 138,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nftGrid__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                nfts: tokens,\n                stake: props.stake\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 139,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_collection__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                policy: props.policy,\n                stake: props.stake\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 140,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n        lineNumber: 134,\n        columnNumber: 12\n    }, this);\n}\n_s(PolicyData, \"uIGw6mgM49RNAgXiLVr2r4ER/t8=\");\n_c = PolicyData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PolicyData);\nvar _c;\n$RefreshReg$(_c, \"PolicyData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wb2xpY3lEYXRhLmpzP2YzNmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbGxlY3Rpb24gZnJvbSBcIi4vY29sbGVjdGlvblwiO1xuaW1wb3J0IE5mdEdyaWQgZnJvbSBcIi4vbmZ0R3JpZFwiO1xuaW1wb3J0IFBvbGljeSBmcm9tIFwiLi9wb2xpY3lcIjtcbmltcG9ydCBQcmljZXMgZnJvbSBcIi4vcHJpY2VzXCI7XG5pbXBvcnQgVG9rZW4gZnJvbSBcIi4vdG9rZW5cIjtcblxuZnVuY3Rpb24gUG9saWN5RGF0YSAocHJvcHMpIHtcblxuICAgIGNvbnN0IFtwb2xpY3ksIHNldFBvbGljeV0gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFt0b2tlbnMsIHNldFRva2Vuc10gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFtwcmljZXMsIHNldFByaWNlc10gPSB1c2VTdGF0ZSgpO1xuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBnZXRQb2xpY3lEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGlmKHByb3BzPSBudWxsKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwb2xpY3kgd2FzIHVuZGVmaW5lZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgbGV0IHRva2VucyA9IFtdO1xuXG4gICAgICAgICAgICBsZXQgYXNzZXRzID0gYXdhaXQgZ2V0QXNzZXRzT2ZQb2xpY3lGcm9tS29pb3MocHJvcHMuc3Rha2UsIHByb3BzLnBvbGljeSk7XG5cbiAgICAgICAgICAgIGZvcihsZXQgaSA9MDtpPGFzc2V0cy5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgbGV0IHRva2VuID0gbmV3IFRva2VuKGFzc2V0c1tpXS5hc3NldF9uYW1lLCBhc3NldHNbaV0ucG9saWN5X2lkLCBhc3NldHNbaV0ucXVhbnRpdHkpO1xuICAgICAgICAgICAgICB0b2tlbi5tZXRhZGF0YSA9IGF3YWl0IHRva2VuLmdldE1ldGFkYXRhKCk7XG5cbiAgICAgICAgICAgICAgaWYodG9rZW4ubWV0YWRhdGEgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgbGV0IGlwZnMgPSB0b2tlbi5nZXRJcGZzRnJvbU1ldGFkYXRhKCk7XG4gICAgICAgICAgICAgICAgdG9rZW4uaXBmcyA9IGlwZnM7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0VG9rZW5zKHRva2Vucyk7XG5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ2V0UG9saWN5RGF0YSgpO1xuICAgICAgfSwgW3Byb3BzXSlcblxuICAgICAgICAvLyB1c2VkIHdoZW4gZmV0Y2hpbmcgaGFuZGxlIGFkZHJlc3NcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0U3Rha2VGcm9tQWRkcmVzc0tvaW9zKGFkZHJlc3Mpe1xuICAgIHRyeXtcbiAgICAgIGNvbnN0IHJlcSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5rb2lvcy5yZXN0L2FwaS92MC9hZGRyZXNzX2luZm8nLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgXCJfYWRkcmVzc2VzXCI6IFsgYWRkcmVzc1xuICAgICAgICAgIF1cbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICBcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlcS5qc29uKCk7XG4gICAgICByZXR1cm4gcmVzWzBdLnN0YWtlX2FkZHJlc3M7XG4gICAgfWNhdGNoKGVycm9yKXtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICB9XG5cbiAgLy8gcmV0dXJucyBiYXNlIGFkZHJlc3MgZnJvbSBoYW5kbGVcbiAgY29uc3QgZ2V0QWRkcmVzc0Zyb21IYW5kbGUgPSBhc3luYyAoaGFuZGxlKSA9PiB7XG4gICAgdHJ5e1xuICAgICAgbGV0IHBvbGljeUlEID0gJ2YwZmY0OGJiYjdiYmU5ZDU5YTQwZjFjZTkwZTllOWQwZmY1MDAyZWM0OGYyMzJiNDljYTBmYjlhJztcbiAgICBcbiAgICAgIC8vIEEgYmxhbmsgSGFuZGxlIG5hbWUgc2hvdWxkIGFsd2F5cyBiZSBpZ25vcmVkLlxuICAgICAgaWYgKGhhbmRsZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gSGFuZGxlIGVycm9yLlxuICAgICAgfVxuICAgIFxuICAgICAgLy8gQ29udmVydCBoYW5kbGVOYW1lIHRvIGhleCBlbmNvZGluZy5cbiAgICAgIGxldCBhc3NldE5hbWUgPSBCdWZmZXIuZnJvbShoYW5kbGUpLnRvU3RyaW5nKCdoZXgnKTtcbiAgICBcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vY2FyZGFuby1tYWlubmV0LmJsb2NrZnJvc3QuaW8vYXBpL3YwL2Fzc2V0cy8ke3BvbGljeUlEfSR7YXNzZXROYW1lfS9hZGRyZXNzZXNgLFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgLy8gWW91ciBCbG9ja2Zyb3N0IEFQSSBrZXlcbiAgICAgICAgICAgIHByb2plY3RfaWQ6ICdtYWlubmV0b1c2MVlZU2lPb0xTYU5RNmR6VHJrQUc0YXpYVklydmgnLFxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcbiAgICAgIFxuICAgICAgbGV0IHN0YWtlID0gYXdhaXQgZ2V0U3Rha2VGcm9tQWRkcmVzc0tvaW9zKGRhdGFbMF0uYWRkcmVzcyk7XG4gICAgICByZXR1cm4gc3Rha2U7XG4gICAgfWNhdGNoKGVycm9yKXtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICB9XG5cbiAgLy8gbm8gYXNzZXQgbGltaXQgb24gaG93IG1hbnkgYXNzZXRzIGdldHMgcmV0dXJuZWQgb24gb25lIHJlcXVlc3RcbiAgLy8ga29pb3MsIGJsb2NrZnJvc3QgaXMgbGltaXRlZCBieSAxMDAgcmVzdWx0cyBwZXIgcGFnZVxuICBhc3luYyBmdW5jdGlvbiBnZXRBc3NldHNPZlBvbGljeUZyb21Lb2lvcyhzdGFrZUFkZHJlc3MsIHBvbGljeSl7XG4gICAgbGV0IGFzc2V0cyA9IFtdO1xuICAgIGNvbnNvbGUubG9nKHN0YWtlQWRkcmVzcywgcG9saWN5KTtcbiAgICB0cnl7XG4gICAgICBjb25zdCByZXEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkua29pb3MucmVzdC9hcGkvdjAvYWNjb3VudF9hc3NldHMnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgXCJfc3Rha2VfYWRkcmVzc2VzXCI6IFtcbiAgICAgICAgICAgIHN0YWtlQWRkcmVzc1xuICAgICAgICAgIF1cbiAgICAgICAgfSlcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCByZXEuanNvbigpO1xuXG4gICAgICBmb3IobGV0IGk9MDtpPHJlc1swXS5hc3NldF9saXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgbGV0IHRva2VuID0gcmVzWzBdLmFzc2V0X2xpc3RbaV07XG5cbiAgICAgICAgaWYodG9rZW4ucG9saWN5X2lkID09IHBvbGljeSl7XG4gICAgICAgICAgYXNzZXRzLnB1c2godG9rZW4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYXNzZXRzO1xuICAgIH1jYXRjaChlcnJvcil7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgfVxuXG4gICAgZnVuY3Rpb24gc2V0UHJpY2VEYXRhKGRhdGEpe1xuICAgICAgc2V0UHJpY2VzKGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybig8ZGl2PlxuICAgICAgICA8UHJpY2VzIGRhdGEgPSB7c2V0UHJpY2VEYXRhfS8+XG4gICAgICAgIDxsYWJlbD5Qb2xpY3kgSW5mbzwvbGFiZWw+XG4gICAgICAgIDxQb2xpY3kgcG9saWN5ID0ge3Byb3BzLnBvbGljeX0gcHJpY2VzPXtwcmljZXN9Lz5cbiAgICAgICAgPGxhYmVsPllvdXIgV2FsbGV0PC9sYWJlbD5cbiAgICAgICAgPE5mdEdyaWQgbmZ0cyA9IHt0b2tlbnN9IHN0YWtlPXtwcm9wcy5zdGFrZX0vPlxuICAgICAgICA8Q29sbGVjdGlvbiBwb2xpY3kgPSB7cHJvcHMucG9saWN5fSBzdGFrZT17cHJvcHMuc3Rha2V9Lz5cbiAgICA8L2Rpdj4pXG59XG5leHBvcnQgZGVmYXVsdCBQb2xpY3lEYXRhO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29sbGVjdGlvbiIsIk5mdEdyaWQiLCJQb2xpY3kiLCJQcmljZXMiLCJUb2tlbiIsIlBvbGljeURhdGEiLCJwcm9wcyIsInBvbGljeSIsInNldFBvbGljeSIsInRva2VucyIsInNldFRva2VucyIsInByaWNlcyIsInNldFByaWNlcyIsImdldFBvbGljeURhdGEiLCJjb25zb2xlIiwibG9nIiwiYXNzZXRzIiwiZ2V0QXNzZXRzT2ZQb2xpY3lGcm9tS29pb3MiLCJzdGFrZSIsImkiLCJsZW5ndGgiLCJ0b2tlbiIsImFzc2V0X25hbWUiLCJwb2xpY3lfaWQiLCJxdWFudGl0eSIsIm1ldGFkYXRhIiwiZ2V0TWV0YWRhdGEiLCJpcGZzIiwiZ2V0SXBmc0Zyb21NZXRhZGF0YSIsInB1c2giLCJnZXRTdGFrZUZyb21BZGRyZXNzS29pb3MiLCJhZGRyZXNzIiwicmVxIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXMiLCJqc29uIiwic3Rha2VfYWRkcmVzcyIsImVycm9yIiwiZ2V0QWRkcmVzc0Zyb21IYW5kbGUiLCJoYW5kbGUiLCJwb2xpY3lJRCIsImFzc2V0TmFtZSIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsImRhdGEiLCJwcm9qZWN0X2lkIiwidGhlbiIsInN0YWtlQWRkcmVzcyIsImFzc2V0X2xpc3QiLCJzZXRQcmljZURhdGEiLCJkaXYiLCJsYWJlbCIsIm5mdHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/policyData.js\n"));

/***/ })

});