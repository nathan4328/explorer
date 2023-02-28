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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collection */ \"./src/pages/collection.js\");\n/* harmony import */ var _nftGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nftGrid */ \"./src/pages/nftGrid.js\");\n/* harmony import */ var _policy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./policy */ \"./src/pages/policy.js\");\n/* harmony import */ var _prices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prices */ \"./src/pages/prices.js\");\n/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./token */ \"./src/pages/token.js\");\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/next/dist/compiled/buffer/index.js\")[\"Buffer\"];\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction PolicyData(props) {\n    _s();\n    const [policy, setPolicy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [tokens, setTokens] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getPolicyData = async ()=>{\n            if (props.stake == null) {\n                console.log(\"stake was undefined\");\n            } else if (props.policy == null) {\n                console.log(\"policy undefined\");\n            } else {\n                console.log(props.stake + \"- \" + props.policy);\n                let tokens = [];\n                let assets = await getAssetsOfPolicyFromKoios(props.stake, props.policy);\n                for(let i = 0; i < assets.length; i++){\n                    let token = new _token__WEBPACK_IMPORTED_MODULE_6__[\"default\"](assets[i].asset_name, assets[i].policy_id, assets[i].quantity);\n                    token.metadata = await token.getMetadata();\n                    if (token.metadata != null) {\n                        let ipfs = token.getIpfsFromMetadata();\n                        token.ipfs = ipfs;\n                    }\n                    tokens.push(token);\n                }\n                setTokens(tokens);\n            }\n        };\n        getPolicyData();\n    }, [\n        props\n    ]);\n    // used when fetching handle address\n    async function getStakeFromAddressKoios(address) {\n        try {\n            const req = await fetch(\"https://api.koios.rest/api/v0/address_info\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    \"_addresses\": [\n                        address\n                    ]\n                })\n            });\n            const res = await req.json();\n            return res[0].stake_address;\n        } catch (error) {\n            return null;\n        }\n    }\n    // returns base address from handle\n    const getAddressFromHandle = async (handle)=>{\n        console.log(handle);\n        try {\n            let policyID = \"f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a\";\n            // A blank Handle name should always be ignored.\n            if (handle.length === 0) {\n                return null;\n            }\n            // Convert handleName to hex encoding.\n            let assetName = Buffer.from(handle).toString(\"hex\");\n            let data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/\".concat(policyID).concat(assetName, \"/addresses\"), {\n                headers: {\n                    // Your Blockfrost API key\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\"\n                }\n            });\n            let res = data.json();\n            console.log(data);\n            let stake = await getStakeFromAddressKoios(data[0].address);\n            return stake;\n        } catch (error) {\n            console.log(error);\n            return null;\n        }\n    };\n    // no asset limit on how many assets gets returned on one request\n    // koios, blockfrost is limited by 100 results per page\n    async function getAssetsOfPolicyFromKoios(stakeAddress, policy) {\n        console.log(stakeAddress);\n        if (stakeAddress.startsWith(\"$\")) {\n            stakeAddress = await getAddressFromHandle(props.stake);\n        }\n        console.log(stakeAddress);\n        let assets = [];\n        try {\n            const req = await fetch(\"https://api.koios.rest/api/v0/account_assets\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    \"_stake_addresses\": [\n                        stakeAddress\n                    ]\n                })\n            });\n            const res = await req.json();\n            for(let i = 0; i < res[0].asset_list.length; i++){\n                let token = res[0].asset_list[i];\n                if (token.policy_id == policy) {\n                    assets.push(token);\n                }\n            }\n            return assets;\n        } catch (error) {\n            return null;\n        }\n    }\n    function setPriceData(data) {\n        setPrices(data);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_prices__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                data: setPriceData\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 150,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Policy Info\"\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 151,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_policy__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                policy: props.policy,\n                prices: prices\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 152,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Your Wallet\"\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 153,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nftGrid__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                nfts: tokens,\n                stake: props.stake\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 154,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_collection__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                policy: props.policy,\n                stake: props.stake\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 155,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n        lineNumber: 149,\n        columnNumber: 12\n    }, this);\n}\n_s(PolicyData, \"uIGw6mgM49RNAgXiLVr2r4ER/t8=\");\n_c = PolicyData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PolicyData);\nvar _c;\n$RefreshReg$(_c, \"PolicyData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UCw4REFBQ3ZELCtDQUFNQTtnQkFBQ0ssUUFBVUQsTUFBTUMsTUFBTTtnQkFBRUksUUFBUUE7Ozs7OzswQkFDeEMsOERBQUM4QzswQkFBTTs7Ozs7OzBCQUNQLDhEQUFDeEQsZ0RBQU9BO2dCQUFDeUQsTUFBUWpEO2dCQUFRSyxPQUFPUixNQUFNUSxLQUFLOzs7Ozs7MEJBQzNDLDhEQUFDZCxtREFBVUE7Z0JBQUNPLFFBQVVELE1BQU1DLE1BQU07Z0JBQUVPLE9BQU9SLE1BQU1RLEtBQUs7Ozs7Ozs7Ozs7OztBQUU5RDtHQXJKU1Q7S0FBQUE7QUFzSlQsK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BvbGljeURhdGEuanM/ZjM2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29sbGVjdGlvbiBmcm9tIFwiLi9jb2xsZWN0aW9uXCI7XG5pbXBvcnQgTmZ0R3JpZCBmcm9tIFwiLi9uZnRHcmlkXCI7XG5pbXBvcnQgUG9saWN5IGZyb20gXCIuL3BvbGljeVwiO1xuaW1wb3J0IFByaWNlcyBmcm9tIFwiLi9wcmljZXNcIjtcbmltcG9ydCBUb2tlbiBmcm9tIFwiLi90b2tlblwiO1xuXG5mdW5jdGlvbiBQb2xpY3lEYXRhIChwcm9wcykge1xuXG4gICAgY29uc3QgW3BvbGljeSwgc2V0UG9saWN5XSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW3Rva2Vucywgc2V0VG9rZW5zXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW3ByaWNlcywgc2V0UHJpY2VzXSA9IHVzZVN0YXRlKCk7XG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGdldFBvbGljeURhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgaWYocHJvcHMuc3Rha2UgPT0gbnVsbCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3Rha2Ugd2FzIHVuZGVmaW5lZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKHByb3BzLnBvbGljeSA9PSBudWxsKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwb2xpY3kgdW5kZWZpbmVkJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9wcy5zdGFrZSArICctICcgK3Byb3BzLnBvbGljeSk7XG4gICAgICAgICAgICBsZXQgdG9rZW5zID0gW107XG5cbiAgICAgICAgICAgIGxldCBhc3NldHMgPSBhd2FpdCBnZXRBc3NldHNPZlBvbGljeUZyb21Lb2lvcyhwcm9wcy5zdGFrZSwgcHJvcHMucG9saWN5KTtcblxuICAgICAgICAgICAgZm9yKGxldCBpID0wO2k8YXNzZXRzLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgICBsZXQgdG9rZW4gPSBuZXcgVG9rZW4oYXNzZXRzW2ldLmFzc2V0X25hbWUsIGFzc2V0c1tpXS5wb2xpY3lfaWQsIGFzc2V0c1tpXS5xdWFudGl0eSk7XG4gICAgICAgICAgICAgIHRva2VuLm1ldGFkYXRhID0gYXdhaXQgdG9rZW4uZ2V0TWV0YWRhdGEoKTtcblxuICAgICAgICAgICAgICBpZih0b2tlbi5tZXRhZGF0YSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICBsZXQgaXBmcyA9IHRva2VuLmdldElwZnNGcm9tTWV0YWRhdGEoKTtcbiAgICAgICAgICAgICAgICB0b2tlbi5pcGZzID0gaXBmcztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0b2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRUb2tlbnModG9rZW5zKTtcblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBnZXRQb2xpY3lEYXRhKCk7XG4gICAgICB9LCBbcHJvcHNdKVxuXG4gICAgICAgIC8vIHVzZWQgd2hlbiBmZXRjaGluZyBoYW5kbGUgYWRkcmVzc1xuICBhc3luYyBmdW5jdGlvbiBnZXRTdGFrZUZyb21BZGRyZXNzS29pb3MoYWRkcmVzcyl7XG4gICAgdHJ5e1xuICAgICAgY29uc3QgcmVxID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmtvaW9zLnJlc3QvYXBpL3YwL2FkZHJlc3NfaW5mbycsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBcIl9hZGRyZXNzZXNcIjogWyBhZGRyZXNzXG4gICAgICAgICAgXVxuICAgICAgICB9KVxuICAgICAgfSk7XG4gIFxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgICAgIHJldHVybiByZXNbMF0uc3Rha2VfYWRkcmVzcztcbiAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gIH1cblxuICAvLyByZXR1cm5zIGJhc2UgYWRkcmVzcyBmcm9tIGhhbmRsZVxuICBjb25zdCBnZXRBZGRyZXNzRnJvbUhhbmRsZSA9IGFzeW5jIChoYW5kbGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhoYW5kbGUpO1xuICAgIHRyeXtcbiAgICAgIGxldCBwb2xpY3lJRCA9ICdmMGZmNDhiYmI3YmJlOWQ1OWE0MGYxY2U5MGU5ZTlkMGZmNTAwMmVjNDhmMjMyYjQ5Y2EwZmI5YSc7XG4gICAgXG4gICAgICAvLyBBIGJsYW5rIEhhbmRsZSBuYW1lIHNob3VsZCBhbHdheXMgYmUgaWdub3JlZC5cbiAgICAgIGlmIChoYW5kbGUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIFxuICAgICAgLy8gQ29udmVydCBoYW5kbGVOYW1lIHRvIGhleCBlbmNvZGluZy5cbiAgICAgIGxldCBhc3NldE5hbWUgPSBCdWZmZXIuZnJvbShoYW5kbGUpLnRvU3RyaW5nKCdoZXgnKTtcbiAgICBcbiAgICAgIGxldCBkYXRhID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2NhcmRhbm8tbWFpbm5ldC5ibG9ja2Zyb3N0LmlvL2FwaS92MC9hc3NldHMvJHtwb2xpY3lJRH0ke2Fzc2V0TmFtZX0vYWRkcmVzc2VzYCxcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIC8vIFlvdXIgQmxvY2tmcm9zdCBBUEkga2V5XG4gICAgICAgICAgICBwcm9qZWN0X2lkOiAnbWFpbm5ldG9XNjFZWVNpT29MU2FOUTZkelRya0FHNGF6WFZJcnZoJ31cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHJlcyA9IGRhdGEuanNvbigpO1xuXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIFxuICAgICAgbGV0IHN0YWtlID0gYXdhaXQgZ2V0U3Rha2VGcm9tQWRkcmVzc0tvaW9zKGRhdGFbMF0uYWRkcmVzcyk7XG4gICAgICByZXR1cm4gc3Rha2U7XG4gICAgfWNhdGNoKGVycm9yKXtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICB9XG5cbiAgLy8gbm8gYXNzZXQgbGltaXQgb24gaG93IG1hbnkgYXNzZXRzIGdldHMgcmV0dXJuZWQgb24gb25lIHJlcXVlc3RcbiAgLy8ga29pb3MsIGJsb2NrZnJvc3QgaXMgbGltaXRlZCBieSAxMDAgcmVzdWx0cyBwZXIgcGFnZVxuICBhc3luYyBmdW5jdGlvbiBnZXRBc3NldHNPZlBvbGljeUZyb21Lb2lvcyhzdGFrZUFkZHJlc3MsIHBvbGljeSl7XG5cbiAgICBjb25zb2xlLmxvZyhzdGFrZUFkZHJlc3MpO1xuXG4gICAgaWYoc3Rha2VBZGRyZXNzLnN0YXJ0c1dpdGgoJyQnKSl7XG4gICAgICBzdGFrZUFkZHJlc3MgPSBhd2FpdCBnZXRBZGRyZXNzRnJvbUhhbmRsZShwcm9wcy5zdGFrZSk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coc3Rha2VBZGRyZXNzKTtcblxuICAgIGxldCBhc3NldHMgPSBbXTtcbiAgICB0cnl7XG4gICAgICBjb25zdCByZXEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkua29pb3MucmVzdC9hcGkvdjAvYWNjb3VudF9hc3NldHMnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgXCJfc3Rha2VfYWRkcmVzc2VzXCI6IFtcbiAgICAgICAgICAgIHN0YWtlQWRkcmVzc1xuICAgICAgICAgIF1cbiAgICAgICAgfSlcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCByZXEuanNvbigpO1xuXG4gICAgICBmb3IobGV0IGk9MDtpPHJlc1swXS5hc3NldF9saXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgbGV0IHRva2VuID0gcmVzWzBdLmFzc2V0X2xpc3RbaV07XG5cbiAgICAgICAgaWYodG9rZW4ucG9saWN5X2lkID09IHBvbGljeSl7XG4gICAgICAgICAgYXNzZXRzLnB1c2godG9rZW4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYXNzZXRzO1xuICAgIH1jYXRjaChlcnJvcil7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgfVxuXG4gICAgZnVuY3Rpb24gc2V0UHJpY2VEYXRhKGRhdGEpe1xuICAgICAgc2V0UHJpY2VzKGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybig8ZGl2PlxuICAgICAgICA8UHJpY2VzIGRhdGEgPSB7c2V0UHJpY2VEYXRhfS8+XG4gICAgICAgIDxsYWJlbD5Qb2xpY3kgSW5mbzwvbGFiZWw+XG4gICAgICAgIDxQb2xpY3kgcG9saWN5ID0ge3Byb3BzLnBvbGljeX0gcHJpY2VzPXtwcmljZXN9Lz5cbiAgICAgICAgPGxhYmVsPllvdXIgV2FsbGV0PC9sYWJlbD5cbiAgICAgICAgPE5mdEdyaWQgbmZ0cyA9IHt0b2tlbnN9IHN0YWtlPXtwcm9wcy5zdGFrZX0vPlxuICAgICAgICA8Q29sbGVjdGlvbiBwb2xpY3kgPSB7cHJvcHMucG9saWN5fSBzdGFrZT17cHJvcHMuc3Rha2V9Lz5cbiAgICA8L2Rpdj4pXG59XG5leHBvcnQgZGVmYXVsdCBQb2xpY3lEYXRhO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29sbGVjdGlvbiIsIk5mdEdyaWQiLCJQb2xpY3kiLCJQcmljZXMiLCJUb2tlbiIsIlBvbGljeURhdGEiLCJwcm9wcyIsInBvbGljeSIsInNldFBvbGljeSIsInRva2VucyIsInNldFRva2VucyIsInByaWNlcyIsInNldFByaWNlcyIsImdldFBvbGljeURhdGEiLCJzdGFrZSIsImNvbnNvbGUiLCJsb2ciLCJhc3NldHMiLCJnZXRBc3NldHNPZlBvbGljeUZyb21Lb2lvcyIsImkiLCJsZW5ndGgiLCJ0b2tlbiIsImFzc2V0X25hbWUiLCJwb2xpY3lfaWQiLCJxdWFudGl0eSIsIm1ldGFkYXRhIiwiZ2V0TWV0YWRhdGEiLCJpcGZzIiwiZ2V0SXBmc0Zyb21NZXRhZGF0YSIsInB1c2giLCJnZXRTdGFrZUZyb21BZGRyZXNzS29pb3MiLCJhZGRyZXNzIiwicmVxIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXMiLCJqc29uIiwic3Rha2VfYWRkcmVzcyIsImVycm9yIiwiZ2V0QWRkcmVzc0Zyb21IYW5kbGUiLCJoYW5kbGUiLCJwb2xpY3lJRCIsImFzc2V0TmFtZSIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsImRhdGEiLCJwcm9qZWN0X2lkIiwic3Rha2VBZGRyZXNzIiwic3RhcnRzV2l0aCIsImFzc2V0X2xpc3QiLCJzZXRQcmljZURhdGEiLCJkaXYiLCJsYWJlbCIsIm5mdHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/policyData.js\n"));

/***/ })

});