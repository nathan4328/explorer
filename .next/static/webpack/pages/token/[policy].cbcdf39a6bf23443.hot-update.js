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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _policy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./policy */ \"./src/pages/policy.js\");\n/* harmony import */ var _policyOwned__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./policyOwned */ \"./src/pages/policyOwned.js\");\n/* harmony import */ var _prices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prices */ \"./src/pages/prices.js\");\n/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./token */ \"./src/pages/token.js\");\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/next/dist/compiled/buffer/index.js\")[\"Buffer\"];\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n// this component is used to display data for a policy id\n// it returns policy information, owned token from policy, and all nfts in collection which can be searched through\nfunction PolicyData(props) {\n    _s();\n    const [policy, setPolicy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [tokens, setTokens] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getPolicyData = async ()=>{\n            if (props.stake == null) {\n                console.log(\"stake was undefined\");\n            } else if (props.policy == null) {\n                console.log(\"policy undefined\");\n            } else {\n                let stakeAddress = props.stake;\n                if (stakeAddress.startsWith(\"$\")) {\n                    stakeAddress = await getAddressFromHandle(stakeAddress.slice(1));\n                }\n                if (stakeAddress != null) {\n                    let tokens = [];\n                    let assets = await getAssetsOfPolicyFromKoios(stakeAddress, props.policy);\n                    for (const element of assets){\n                        let token = new _token__WEBPACK_IMPORTED_MODULE_5__[\"default\"](element.asset_name, element.policy_id, element.quantity);\n                        token.metadata = await token.getMetadata();\n                        if (token.metadata != null) {\n                            let ipfs = token.getIpfsFromMetadata();\n                            token.ipfs = ipfs;\n                        }\n                        tokens.push(token);\n                    }\n                    setTokens(tokens);\n                } else {\n                    console.log(\"wallet error\");\n                }\n            }\n        };\n        getPolicyData();\n    }, [\n        props\n    ]);\n    // used when fetching handle address\n    async function getStakeFromAddressKoios(address) {\n        try {\n            const req = await fetch(\"https://api.koios.rest/api/v0/address_info\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    \"_addresses\": [\n                        address\n                    ]\n                })\n            });\n            const res = await req.json();\n            return res[0].stake_address;\n        } catch (error) {\n            return null;\n        }\n    }\n    // returns base address from handle\n    const getAddressFromHandle = async (handle)=>{\n        console.log(handle);\n        try {\n            let policyID = \"f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a\";\n            // A blank Handle name should always be ignored.\n            if (handle.length === 0) {\n                return null;\n            }\n            // Convert handleName to hex encoding.\n            let assetName = Buffer.from(handle).toString(\"hex\");\n            let data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/\" + policyID + assetName + \"/addresses\", {\n                headers: {\n                    // Your Blockfrost API key\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\"\n                }\n            });\n            let res = await data.json();\n            let stake = await getStakeFromAddressKoios(res[0].address);\n            return stake;\n        } catch (error) {\n            console.log(error);\n            return null;\n        }\n    };\n    // no asset limit on how many assets gets returned on one request\n    // koios, blockfrost is limited by 100 results per page\n    async function getAssetsOfPolicyFromKoios(stakeAddress, policy) {\n        let assets = [];\n        try {\n            const req = await fetch(\"https://api.koios.rest/api/v0/account_assets\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    \"_stake_addresses\": [\n                        stakeAddress\n                    ]\n                })\n            });\n            const res = await req.json();\n            for(let i = 0; i < res[0].asset_list.length; i++){\n                let token = res[0].asset_list[i];\n                if (token.policy_id == policy) {\n                    assets.push(token);\n                }\n            }\n            return assets;\n        } catch (error) {\n            return null;\n        }\n    }\n    function setPriceData(data) {\n        setPrices(data);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_prices__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                data: setPriceData\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 153,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Policy Info\"\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 154,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_policy__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                policy: props.policy,\n                prices: prices,\n                stake: props.stake\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 155,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Your Wallet\"\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 156,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_policyOwned__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                nfts: tokens,\n                policy: props.policy,\n                stake: props.stake\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 157,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PolicyCollection, {\n                policy: props.policy,\n                stake: props.stake\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 158,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n        lineNumber: 152,\n        columnNumber: 12\n    }, this);\n}\n_s(PolicyData, \"uIGw6mgM49RNAgXiLVr2r4ER/t8=\");\n_c = PolicyData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PolicyData);\nvar _c;\n$RefreshReg$(_c, \"PolicyData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9saWN5RGF0YS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNEM7QUFDZDtBQUNVO0FBQ1Y7QUFDRjtBQUU1Qix5REFBeUQ7QUFDekQsbUhBQW1IO0FBQ25ILFNBQVNNLFdBQVlDLEtBQUssRUFBRTs7SUFFeEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdSLCtDQUFRQTtJQUNwQyxNQUFNLENBQUNTLFFBQVFDLFVBQVUsR0FBR1YsK0NBQVFBO0lBQ3BDLE1BQU0sQ0FBQ1csUUFBUUMsVUFBVSxHQUFHWiwrQ0FBUUE7SUFHcENELGdEQUFTQSxDQUFDLElBQU07UUFDWixNQUFNYyxnQkFBZ0IsVUFBWTtZQUNoQyxJQUFHUCxNQUFNUSxLQUFLLElBQUksSUFBSSxFQUFDO2dCQUNyQkMsUUFBUUMsR0FBRyxDQUFDO1lBQ2QsT0FDSyxJQUFHVixNQUFNQyxNQUFNLElBQUksSUFBSSxFQUFDO2dCQUMzQlEsUUFBUUMsR0FBRyxDQUFDO1lBQ2QsT0FDSTtnQkFDRixJQUFJQyxlQUFlWCxNQUFNUSxLQUFLO2dCQUM5QixJQUFHRyxhQUFhQyxVQUFVLENBQUMsTUFBSztvQkFDOUJELGVBQWUsTUFBTUUscUJBQXFCRixhQUFhRyxLQUFLLENBQUM7Z0JBRS9ELENBQUM7Z0JBQ0QsSUFBR0gsZ0JBQWdCLElBQUksRUFBQztvQkFFdEIsSUFBSVIsU0FBUyxFQUFFO29CQUVmLElBQUlZLFNBQVMsTUFBTUMsMkJBQTJCTCxjQUFjWCxNQUFNQyxNQUFNO29CQUUxRSxLQUFJLE1BQU1nQixXQUFXRixPQUFPO3dCQUMxQixJQUFJRyxRQUFRLElBQUlwQiw4Q0FBS0EsQ0FBQ21CLFFBQVFFLFVBQVUsRUFBRUYsUUFBUUcsU0FBUyxFQUFFSCxRQUFRSSxRQUFRO3dCQUM3RUgsTUFBTUksUUFBUSxHQUFHLE1BQU1KLE1BQU1LLFdBQVc7d0JBRXhDLElBQUdMLE1BQU1JLFFBQVEsSUFBSSxJQUFJLEVBQUM7NEJBQ3hCLElBQUlFLE9BQU9OLE1BQU1PLG1CQUFtQjs0QkFDcENQLE1BQU1NLElBQUksR0FBR0E7d0JBQ2YsQ0FBQzt3QkFDRHJCLE9BQU91QixJQUFJLENBQUNSO29CQUNaO29CQUNBZCxVQUFVRDtnQkFDWixPQUNJO29CQUNGTSxRQUFRQyxHQUFHLENBQUM7Z0JBQ2QsQ0FBQztZQUlILENBQUM7UUFDSDtRQUNBSDtJQUNGLEdBQUc7UUFBQ1A7S0FBTTtJQUVSLG9DQUFvQztJQUMxQyxlQUFlMkIseUJBQXlCQyxPQUFPLEVBQUM7UUFDOUMsSUFBRztZQUNELE1BQU1DLE1BQU0sTUFBTUMsTUFBTSw4Q0FBOEM7Z0JBQ3BFQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFDbkIsY0FBYzt3QkFBRVA7cUJBQ2Y7Z0JBQ0g7WUFDRjtZQUVBLE1BQU1RLE1BQU0sTUFBTVAsSUFBSVEsSUFBSTtZQUMxQixPQUFPRCxHQUFHLENBQUMsRUFBRSxDQUFDRSxhQUFhO1FBQzdCLEVBQUMsT0FBTUMsT0FBTTtZQUNYLE9BQU8sSUFBSTtRQUNiO0lBRUY7SUFFQSxtQ0FBbUM7SUFDbkMsTUFBTTFCLHVCQUF1QixPQUFPMkIsU0FBVztRQUM3Qy9CLFFBQVFDLEdBQUcsQ0FBQzhCO1FBQ1osSUFBRztZQUNELElBQUlDLFdBQVc7WUFFZixnREFBZ0Q7WUFDaEQsSUFBSUQsT0FBT0UsTUFBTSxLQUFLLEdBQUc7Z0JBQ3ZCLE9BQU8sSUFBSTtZQUNiLENBQUM7WUFFRCxzQ0FBc0M7WUFDdEMsSUFBSUMsWUFBWUMsTUFBTUEsQ0FBQ0MsSUFBSSxDQUFDTCxRQUFRTSxRQUFRLENBQUM7WUFFN0MsSUFBSUMsT0FBTyxNQUFNakIsTUFDZix5REFBdURXLFdBQVNFLFlBQVUsY0FDMUU7Z0JBQ0VYLFNBQVM7b0JBQ1AsMEJBQTBCO29CQUMxQmdCLFlBQVk7Z0JBQXlDO1lBQ3pEO1lBRUYsSUFBSVosTUFBTSxNQUFNVyxLQUFLVixJQUFJO1lBRXpCLElBQUk3QixRQUFRLE1BQU1tQix5QkFBeUJTLEdBQUcsQ0FBQyxFQUFFLENBQUNSLE9BQU87WUFDekQsT0FBT3BCO1FBQ1QsRUFBQyxPQUFNK0IsT0FBTTtZQUNYOUIsUUFBUUMsR0FBRyxDQUFDNkI7WUFDWixPQUFPLElBQUk7UUFDYjtJQUVGO0lBRUEsaUVBQWlFO0lBQ2pFLHVEQUF1RDtJQUN2RCxlQUFldkIsMkJBQTJCTCxZQUFZLEVBQUVWLE1BQU0sRUFBQztRQUU3RCxJQUFJYyxTQUFTLEVBQUU7UUFDZixJQUFHO1lBQ0QsTUFBTWMsTUFBTSxNQUFNQyxNQUFNLGdEQUFnRDtnQkFDdEVDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUNuQixvQkFBb0I7d0JBQ2xCeEI7cUJBQ0Q7Z0JBQ0g7WUFDRjtZQUVBLE1BQU15QixNQUFNLE1BQU1QLElBQUlRLElBQUk7WUFFMUIsSUFBSSxJQUFJWSxJQUFFLEdBQUVBLElBQUViLEdBQUcsQ0FBQyxFQUFFLENBQUNjLFVBQVUsQ0FBQ1IsTUFBTSxFQUFFTyxJQUFJO2dCQUMxQyxJQUFJL0IsUUFBUWtCLEdBQUcsQ0FBQyxFQUFFLENBQUNjLFVBQVUsQ0FBQ0QsRUFBRTtnQkFFaEMsSUFBRy9CLE1BQU1FLFNBQVMsSUFBSW5CLFFBQU87b0JBQzNCYyxPQUFPVyxJQUFJLENBQUNSO2dCQUNkLENBQUM7WUFDSDtZQUNBLE9BQU9IO1FBQ1QsRUFBQyxPQUFNd0IsT0FBTTtZQUNYLE9BQU8sSUFBSTtRQUNiO0lBRUY7SUFFRSxTQUFTWSxhQUFhSixJQUFJLEVBQUM7UUFDekJ6QyxVQUFVeUM7SUFDWjtJQUVBLHFCQUFPLDhEQUFDSzs7MEJBQ0osOERBQUN2RCwrQ0FBTUE7Z0JBQUNrRCxNQUFRSTs7Ozs7OzBCQUNoQiw4REFBQ0U7MEJBQU07Ozs7OzswQkFDUCw4REFBQzFELCtDQUFNQTtnQkFBQ00sUUFBVUQsTUFBTUMsTUFBTTtnQkFBRUksUUFBUUE7Z0JBQVFHLE9BQVFSLE1BQU1RLEtBQUs7Ozs7OzswQkFDbkUsOERBQUM2QzswQkFBTTs7Ozs7OzBCQUNQLDhEQUFDekQsb0RBQVdBO2dCQUFDMEQsTUFBUW5EO2dCQUFRRixRQUFVRCxNQUFNQyxNQUFNO2dCQUFDTyxPQUFPUixNQUFNUSxLQUFLOzs7Ozs7MEJBQ3RFLDhEQUFDK0M7Z0JBQWlCdEQsUUFBVUQsTUFBTUMsTUFBTTtnQkFBRU8sT0FBT1IsTUFBTVEsS0FBSzs7Ozs7Ozs7Ozs7O0FBRXBFO0dBdkpTVDtLQUFBQTtBQXdKVCwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcG9saWN5RGF0YS5qcz9mMzZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQb2xpY3kgZnJvbSBcIi4vcG9saWN5XCI7XG5pbXBvcnQgUG9saWN5T3duZWQgZnJvbSBcIi4vcG9saWN5T3duZWRcIjtcbmltcG9ydCBQcmljZXMgZnJvbSBcIi4vcHJpY2VzXCI7XG5pbXBvcnQgVG9rZW4gZnJvbSBcIi4vdG9rZW5cIjtcblxuLy8gdGhpcyBjb21wb25lbnQgaXMgdXNlZCB0byBkaXNwbGF5IGRhdGEgZm9yIGEgcG9saWN5IGlkXG4vLyBpdCByZXR1cm5zIHBvbGljeSBpbmZvcm1hdGlvbiwgb3duZWQgdG9rZW4gZnJvbSBwb2xpY3ksIGFuZCBhbGwgbmZ0cyBpbiBjb2xsZWN0aW9uIHdoaWNoIGNhbiBiZSBzZWFyY2hlZCB0aHJvdWdoXG5mdW5jdGlvbiBQb2xpY3lEYXRhIChwcm9wcykge1xuXG4gICAgY29uc3QgW3BvbGljeSwgc2V0UG9saWN5XSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW3Rva2Vucywgc2V0VG9rZW5zXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW3ByaWNlcywgc2V0UHJpY2VzXSA9IHVzZVN0YXRlKCk7XG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGdldFBvbGljeURhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgaWYocHJvcHMuc3Rha2UgPT0gbnVsbCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3Rha2Ugd2FzIHVuZGVmaW5lZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKHByb3BzLnBvbGljeSA9PSBudWxsKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwb2xpY3kgdW5kZWZpbmVkJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICBsZXQgc3Rha2VBZGRyZXNzID0gcHJvcHMuc3Rha2U7XG4gICAgICAgICAgICBpZihzdGFrZUFkZHJlc3Muc3RhcnRzV2l0aCgnJCcpKXtcbiAgICAgICAgICAgICAgc3Rha2VBZGRyZXNzID0gYXdhaXQgZ2V0QWRkcmVzc0Zyb21IYW5kbGUoc3Rha2VBZGRyZXNzLnNsaWNlKDEpKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoc3Rha2VBZGRyZXNzICE9IG51bGwpe1xuXG4gICAgICAgICAgICAgIGxldCB0b2tlbnMgPSBbXTtcblxuICAgICAgICAgICAgICBsZXQgYXNzZXRzID0gYXdhaXQgZ2V0QXNzZXRzT2ZQb2xpY3lGcm9tS29pb3Moc3Rha2VBZGRyZXNzLCBwcm9wcy5wb2xpY3kpO1xuXG4gICAgICAgICAgICBmb3IoY29uc3QgZWxlbWVudCBvZiBhc3NldHMpe1xuICAgICAgICAgICAgICBsZXQgdG9rZW4gPSBuZXcgVG9rZW4oZWxlbWVudC5hc3NldF9uYW1lLCBlbGVtZW50LnBvbGljeV9pZCwgZWxlbWVudC5xdWFudGl0eSk7XG4gICAgICAgICAgICAgIHRva2VuLm1ldGFkYXRhID0gYXdhaXQgdG9rZW4uZ2V0TWV0YWRhdGEoKTtcblxuICAgICAgICAgICAgICBpZih0b2tlbi5tZXRhZGF0YSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICBsZXQgaXBmcyA9IHRva2VuLmdldElwZnNGcm9tTWV0YWRhdGEoKTtcbiAgICAgICAgICAgICAgICB0b2tlbi5pcGZzID0gaXBmcztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0b2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc2V0VG9rZW5zKHRva2Vucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnd2FsbGV0IGVycm9yJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcblxuXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGdldFBvbGljeURhdGEoKTtcbiAgICAgIH0sIFtwcm9wc10pXG5cbiAgICAgICAgLy8gdXNlZCB3aGVuIGZldGNoaW5nIGhhbmRsZSBhZGRyZXNzXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFN0YWtlRnJvbUFkZHJlc3NLb2lvcyhhZGRyZXNzKXtcbiAgICB0cnl7XG4gICAgICBjb25zdCByZXEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkua29pb3MucmVzdC9hcGkvdjAvYWRkcmVzc19pbmZvJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIFwiX2FkZHJlc3Nlc1wiOiBbIGFkZHJlc3NcbiAgICAgICAgICBdXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCByZXEuanNvbigpO1xuICAgICAgcmV0dXJuIHJlc1swXS5zdGFrZV9hZGRyZXNzO1xuICAgIH1jYXRjaChlcnJvcil7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgfVxuXG4gIC8vIHJldHVybnMgYmFzZSBhZGRyZXNzIGZyb20gaGFuZGxlXG4gIGNvbnN0IGdldEFkZHJlc3NGcm9tSGFuZGxlID0gYXN5bmMgKGhhbmRsZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGhhbmRsZSk7XG4gICAgdHJ5e1xuICAgICAgbGV0IHBvbGljeUlEID0gJ2YwZmY0OGJiYjdiYmU5ZDU5YTQwZjFjZTkwZTllOWQwZmY1MDAyZWM0OGYyMzJiNDljYTBmYjlhJztcbiAgICBcbiAgICAgIC8vIEEgYmxhbmsgSGFuZGxlIG5hbWUgc2hvdWxkIGFsd2F5cyBiZSBpZ25vcmVkLlxuICAgICAgaWYgKGhhbmRsZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgXG4gICAgICAvLyBDb252ZXJ0IGhhbmRsZU5hbWUgdG8gaGV4IGVuY29kaW5nLlxuICAgICAgbGV0IGFzc2V0TmFtZSA9IEJ1ZmZlci5mcm9tKGhhbmRsZSkudG9TdHJpbmcoJ2hleCcpO1xuICAgIFxuICAgICAgbGV0IGRhdGEgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vY2FyZGFuby1tYWlubmV0LmJsb2NrZnJvc3QuaW8vYXBpL3YwL2Fzc2V0cy9gK3BvbGljeUlEK2Fzc2V0TmFtZSsnL2FkZHJlc3NlcycsXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAvLyBZb3VyIEJsb2NrZnJvc3QgQVBJIGtleVxuICAgICAgICAgICAgcHJvamVjdF9pZDogJ21haW5uZXRvVzYxWVlTaU9vTFNhTlE2ZHpUcmtBRzRhelhWSXJ2aCd9XG4gICAgICAgIH0pO1xuXG4gICAgICBsZXQgcmVzID0gYXdhaXQgZGF0YS5qc29uKCk7XG4gICAgICBcbiAgICAgIGxldCBzdGFrZSA9IGF3YWl0IGdldFN0YWtlRnJvbUFkZHJlc3NLb2lvcyhyZXNbMF0uYWRkcmVzcyk7XG4gICAgICByZXR1cm4gc3Rha2U7XG4gICAgfWNhdGNoKGVycm9yKXtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICB9XG5cbiAgLy8gbm8gYXNzZXQgbGltaXQgb24gaG93IG1hbnkgYXNzZXRzIGdldHMgcmV0dXJuZWQgb24gb25lIHJlcXVlc3RcbiAgLy8ga29pb3MsIGJsb2NrZnJvc3QgaXMgbGltaXRlZCBieSAxMDAgcmVzdWx0cyBwZXIgcGFnZVxuICBhc3luYyBmdW5jdGlvbiBnZXRBc3NldHNPZlBvbGljeUZyb21Lb2lvcyhzdGFrZUFkZHJlc3MsIHBvbGljeSl7XG5cbiAgICBsZXQgYXNzZXRzID0gW107XG4gICAgdHJ5e1xuICAgICAgY29uc3QgcmVxID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmtvaW9zLnJlc3QvYXBpL3YwL2FjY291bnRfYXNzZXRzJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIFwiX3N0YWtlX2FkZHJlc3Nlc1wiOiBbXG4gICAgICAgICAgICBzdGFrZUFkZHJlc3NcbiAgICAgICAgICBdXG4gICAgICAgIH0pXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVxLmpzb24oKTtcblxuICAgICAgZm9yKGxldCBpPTA7aTxyZXNbMF0uYXNzZXRfbGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGxldCB0b2tlbiA9IHJlc1swXS5hc3NldF9saXN0W2ldO1xuXG4gICAgICAgIGlmKHRva2VuLnBvbGljeV9pZCA9PSBwb2xpY3kpe1xuICAgICAgICAgIGFzc2V0cy5wdXNoKHRva2VuKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGFzc2V0cztcbiAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gIH1cblxuICAgIGZ1bmN0aW9uIHNldFByaWNlRGF0YShkYXRhKXtcbiAgICAgIHNldFByaWNlcyhkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4oPGRpdj5cbiAgICAgICAgPFByaWNlcyBkYXRhID0ge3NldFByaWNlRGF0YX0vPlxuICAgICAgICA8bGFiZWw+UG9saWN5IEluZm88L2xhYmVsPlxuICAgICAgICA8UG9saWN5IHBvbGljeSA9IHtwcm9wcy5wb2xpY3l9IHByaWNlcz17cHJpY2VzfSBzdGFrZSA9e3Byb3BzLnN0YWtlfS8+XG4gICAgICAgIDxsYWJlbD5Zb3VyIFdhbGxldDwvbGFiZWw+XG4gICAgICAgIDxQb2xpY3lPd25lZCBuZnRzID0ge3Rva2Vuc30gcG9saWN5ID0ge3Byb3BzLnBvbGljeX1zdGFrZT17cHJvcHMuc3Rha2V9Lz5cbiAgICAgICAgPFBvbGljeUNvbGxlY3Rpb24gcG9saWN5ID0ge3Byb3BzLnBvbGljeX0gc3Rha2U9e3Byb3BzLnN0YWtlfS8+XG4gICAgPC9kaXY+KVxufVxuZXhwb3J0IGRlZmF1bHQgUG9saWN5RGF0YTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlBvbGljeSIsIlBvbGljeU93bmVkIiwiUHJpY2VzIiwiVG9rZW4iLCJQb2xpY3lEYXRhIiwicHJvcHMiLCJwb2xpY3kiLCJzZXRQb2xpY3kiLCJ0b2tlbnMiLCJzZXRUb2tlbnMiLCJwcmljZXMiLCJzZXRQcmljZXMiLCJnZXRQb2xpY3lEYXRhIiwic3Rha2UiLCJjb25zb2xlIiwibG9nIiwic3Rha2VBZGRyZXNzIiwic3RhcnRzV2l0aCIsImdldEFkZHJlc3NGcm9tSGFuZGxlIiwic2xpY2UiLCJhc3NldHMiLCJnZXRBc3NldHNPZlBvbGljeUZyb21Lb2lvcyIsImVsZW1lbnQiLCJ0b2tlbiIsImFzc2V0X25hbWUiLCJwb2xpY3lfaWQiLCJxdWFudGl0eSIsIm1ldGFkYXRhIiwiZ2V0TWV0YWRhdGEiLCJpcGZzIiwiZ2V0SXBmc0Zyb21NZXRhZGF0YSIsInB1c2giLCJnZXRTdGFrZUZyb21BZGRyZXNzS29pb3MiLCJhZGRyZXNzIiwicmVxIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXMiLCJqc29uIiwic3Rha2VfYWRkcmVzcyIsImVycm9yIiwiaGFuZGxlIiwicG9saWN5SUQiLCJsZW5ndGgiLCJhc3NldE5hbWUiLCJCdWZmZXIiLCJmcm9tIiwidG9TdHJpbmciLCJkYXRhIiwicHJvamVjdF9pZCIsImkiLCJhc3NldF9saXN0Iiwic2V0UHJpY2VEYXRhIiwiZGl2IiwibGFiZWwiLCJuZnRzIiwiUG9saWN5Q29sbGVjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/policyData.js\n"));

/***/ })

});