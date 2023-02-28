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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _nftGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nftGrid */ \"./src/pages/nftGrid.js\");\n/* harmony import */ var _policy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./policy */ \"./src/pages/policy.js\");\n/* harmony import */ var _prices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prices */ \"./src/pages/prices.js\");\n/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./token */ \"./src/pages/token.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction PolicyData(props) {\n    _s();\n    const [policy, setPolicy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [tokens, setTokens] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getPolicyData = async ()=>{\n            if (props.policy == null && props.stake != null) {\n                console.log(\"policy was undefined\");\n            } else {\n                let tokens = [];\n                let assets = await getAssetsOfPolicyFromKoios(props.stake, props.policy);\n                console.log(assets);\n                // fetch asset data from blockfrost\n                let policyData = await loadTokenData(props.policy);\n                if (policyData != null) {\n                    for (const element of policyData){\n                        let data = element;\n                        let assetID = data.asset;\n                        let policy = assetID.substring(0, 56);\n                        let assetName = assetID.substring(56);\n                        let quantity = data.quantity;\n                        setPolicy(policy);\n                        if (policy != null && assetName != null) {\n                            let token = new _token__WEBPACK_IMPORTED_MODULE_5__[\"default\"](assetName, policy, quantity);\n                            let metadata = await token.getMetadata();\n                            token.metadata = metadata;\n                            if (metadata != null) {\n                                let ipfs = token.getIpfsFromMetadata();\n                                token.ipfs = ipfs;\n                            }\n                            tokens.push(token);\n                        }\n                    }\n                } else {\n                    setPolicy(\"couldnt fetch data\");\n                }\n                setTokens(tokens);\n            }\n        };\n        getPolicyData();\n    }, [\n        props\n    ]);\n    // no asset limit on how many assets gets returned on one request\n    // koios, blockfrost is limited by 100 results per page\n    async function getAssetsOfPolicyFromKoios(stakeAddress, policy) {\n        let assets = [];\n        try {\n            const req = await fetch(\"https://api.koios.rest/api/v0/account_assets\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    \"_stake_addresses\": [\n                        stakeAddress\n                    ]\n                })\n            });\n            const res = await req.json();\n            for(let i = 0; i < res[0].asset_list.length; i++){\n                let token = res[0].asset_list[i];\n                if (token.policy_id == policy) {\n                    assets.push(token);\n                }\n            }\n            return assets;\n        } catch (error) {\n            return null;\n        }\n    }\n    // fetch token metadata from blockfrost\n    async function loadTokenData(policy) {\n        try {\n            const data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/policy/\" + policy + \"?count=100\", {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    function setPriceData(data) {\n        setPrices(data);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_prices__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                data: setPriceData\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 116,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_policy__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                policy: policy,\n                prices: prices\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 117,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nftGrid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                nfts: tokens\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 118,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n        lineNumber: 115,\n        columnNumber: 12\n    }, this);\n}\n_s(PolicyData, \"uIGw6mgM49RNAgXiLVr2r4ER/t8=\");\n_c = PolicyData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PolicyData);\nvar _c;\n$RefreshReg$(_c, \"PolicyData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TWMsTUFBTSxnRUFBOEQ3QixTQUFPLGNBQzlGO2dCQUFDK0IsU0FBUTtvQkFBQ1csWUFBWTtvQkFBMkMsaUJBQWlCO2dCQUFrQjtZQUFDO1lBQ3JHLE1BQU1QLE1BQU0sTUFBTXBCLEtBQUtxQixJQUFJO1lBQzNCLElBQUdyQixLQUFLNEIsTUFBTSxJQUFJLEtBQUk7Z0JBQ2xCLE9BQU8sSUFBSTtZQUNmLENBQUM7WUFDRCxPQUFPUjtRQUNULEVBQUMsT0FBTU0sT0FBTTtZQUNYLE9BQU8sSUFBSTtRQUNiO0lBQ0Y7SUFFQSxTQUFTRyxhQUFhN0IsSUFBSSxFQUFDO1FBQ3pCVixVQUFVVTtJQUNaO0lBRUEscUJBQU8sOERBQUM4Qjs7MEJBQ0osOERBQUNqRCwrQ0FBTUE7Z0JBQUNtQixNQUFRNkI7Ozs7OzswQkFDaEIsOERBQUNqRCwrQ0FBTUE7Z0JBQUNLLFFBQVVBO2dCQUFRSSxRQUFRQTs7Ozs7OzBCQUNsQyw4REFBQ1YsZ0RBQU9BO2dCQUFDb0QsTUFBUTVDOzs7Ozs7Ozs7Ozs7QUFFekI7R0FqSFNKO0tBQUFBO0FBa0hULCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wb2xpY3lEYXRhLmpzP2YzNmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5mdEdyaWQgZnJvbSBcIi4vbmZ0R3JpZFwiO1xuaW1wb3J0IFBvbGljeSBmcm9tIFwiLi9wb2xpY3lcIjtcbmltcG9ydCBQcmljZXMgZnJvbSBcIi4vcHJpY2VzXCI7XG5pbXBvcnQgVG9rZW4gZnJvbSBcIi4vdG9rZW5cIjtcblxuZnVuY3Rpb24gUG9saWN5RGF0YSAocHJvcHMpIHtcblxuICAgIGNvbnN0IFtwb2xpY3ksIHNldFBvbGljeV0gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFt0b2tlbnMsIHNldFRva2Vuc10gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFtwcmljZXMsIHNldFByaWNlc10gPSB1c2VTdGF0ZSgpO1xuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBnZXRQb2xpY3lEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGlmKHByb3BzLnBvbGljeSA9PSBudWxsICYmIHByb3BzLnN0YWtlICE9IG51bGwpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3BvbGljeSB3YXMgdW5kZWZpbmVkJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICBsZXQgdG9rZW5zID0gW107XG4gICAgICAgICAgICBsZXQgYXNzZXRzID0gYXdhaXQgZ2V0QXNzZXRzT2ZQb2xpY3lGcm9tS29pb3MocHJvcHMuc3Rha2UsIHByb3BzLnBvbGljeSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhc3NldHMpO1xuXG4gICAgICAgICAgICAvLyBmZXRjaCBhc3NldCBkYXRhIGZyb20gYmxvY2tmcm9zdFxuICAgICAgICAgICAgbGV0IHBvbGljeURhdGEgPSBhd2FpdCBsb2FkVG9rZW5EYXRhKHByb3BzLnBvbGljeSk7XG5cbiAgICAgICAgICAgIGlmKHBvbGljeURhdGEgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgZm9yKGNvbnN0IGVsZW1lbnQgb2YgcG9saWN5RGF0YSl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gZWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFzc2V0SUQgPSBkYXRhLmFzc2V0O1xuICAgICAgICAgICAgICAgICAgICBsZXQgcG9saWN5ID0gKGFzc2V0SUQpLnN1YnN0cmluZygwLDU2KTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFzc2V0TmFtZSA9IChhc3NldElEKS5zdWJzdHJpbmcoNTYpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcXVhbnRpdHkgPSBkYXRhLnF1YW50aXR5O1xuXG4gICAgICAgICAgICAgICAgICAgIHNldFBvbGljeShwb2xpY3kpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKHBvbGljeSAhPSBudWxsICYmIGFzc2V0TmFtZSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IG5ldyBUb2tlbihhc3NldE5hbWUsIHBvbGljeSwgcXVhbnRpdHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1ldGFkYXRhID0gYXdhaXQgdG9rZW4uZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuLm1ldGFkYXRhID0gbWV0YWRhdGE7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1ldGFkYXRhICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpcGZzID0gdG9rZW4uZ2V0SXBmc0Zyb21NZXRhZGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuLmlwZnMgPSBpcGZzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBzZXRQb2xpY3koJ2NvdWxkbnQgZmV0Y2ggZGF0YScpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZXRUb2tlbnModG9rZW5zKTtcblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBnZXRQb2xpY3lEYXRhKCk7XG4gICAgICB9LCBbcHJvcHNdKVxuXG4gIC8vIG5vIGFzc2V0IGxpbWl0IG9uIGhvdyBtYW55IGFzc2V0cyBnZXRzIHJldHVybmVkIG9uIG9uZSByZXF1ZXN0XG4gIC8vIGtvaW9zLCBibG9ja2Zyb3N0IGlzIGxpbWl0ZWQgYnkgMTAwIHJlc3VsdHMgcGVyIHBhZ2VcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0QXNzZXRzT2ZQb2xpY3lGcm9tS29pb3Moc3Rha2VBZGRyZXNzLCBwb2xpY3kpe1xuICAgIGxldCBhc3NldHMgPSBbXTtcbiAgICB0cnl7XG4gICAgICBjb25zdCByZXEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkua29pb3MucmVzdC9hcGkvdjAvYWNjb3VudF9hc3NldHMnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgXCJfc3Rha2VfYWRkcmVzc2VzXCI6IFtcbiAgICAgICAgICAgIHN0YWtlQWRkcmVzc1xuICAgICAgICAgIF1cbiAgICAgICAgfSlcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCByZXEuanNvbigpO1xuXG4gICAgICBmb3IobGV0IGk9MDtpPHJlc1swXS5hc3NldF9saXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgbGV0IHRva2VuID0gcmVzWzBdLmFzc2V0X2xpc3RbaV07XG5cbiAgICAgICAgaWYodG9rZW4ucG9saWN5X2lkID09IHBvbGljeSl7XG4gICAgICAgICAgYXNzZXRzLnB1c2godG9rZW4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYXNzZXRzO1xuICAgIH1jYXRjaChlcnJvcil7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgfVxuXG5cbiAgICAvLyBmZXRjaCB0b2tlbiBtZXRhZGF0YSBmcm9tIGJsb2NrZnJvc3RcbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkVG9rZW5EYXRhKHBvbGljeSl7XG4gICAgICB0cnl7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9jYXJkYW5vLW1haW5uZXQuYmxvY2tmcm9zdC5pby9hcGkvdjAvYXNzZXRzL3BvbGljeS8nK3BvbGljeSsnP2NvdW50PTEwMCcsXG4gICAgICAgIHtoZWFkZXJzOntwcm9qZWN0X2lkOiAnbWFpbm5ldG9XNjFZWVNpT29MU2FOUTZkelRya0FHNGF6WFZJcnZoJywgJ2NhY2hlLWNvbnRyb2wnOiAnbWF4LWFnZT0zMTUzNjAwMCd9fSk7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGRhdGEuanNvbigpO1xuICAgICAgICBpZihkYXRhLnN0YXR1cyAhPSAyMDApe1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFByaWNlRGF0YShkYXRhKXtcbiAgICAgIHNldFByaWNlcyhkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4oPGRpdj5cbiAgICAgICAgPFByaWNlcyBkYXRhID0ge3NldFByaWNlRGF0YX0vPlxuICAgICAgICA8UG9saWN5IHBvbGljeSA9IHtwb2xpY3l9IHByaWNlcz17cHJpY2VzfS8+XG4gICAgICAgIDxOZnRHcmlkIG5mdHMgPSB7dG9rZW5zfS8+XG4gICAgPC9kaXY+KVxufVxuZXhwb3J0IGRlZmF1bHQgUG9saWN5RGF0YTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk5mdEdyaWQiLCJQb2xpY3kiLCJQcmljZXMiLCJUb2tlbiIsIlBvbGljeURhdGEiLCJwcm9wcyIsInBvbGljeSIsInNldFBvbGljeSIsInRva2VucyIsInNldFRva2VucyIsInByaWNlcyIsInNldFByaWNlcyIsImdldFBvbGljeURhdGEiLCJzdGFrZSIsImNvbnNvbGUiLCJsb2ciLCJhc3NldHMiLCJnZXRBc3NldHNPZlBvbGljeUZyb21Lb2lvcyIsInBvbGljeURhdGEiLCJsb2FkVG9rZW5EYXRhIiwiZWxlbWVudCIsImRhdGEiLCJhc3NldElEIiwiYXNzZXQiLCJzdWJzdHJpbmciLCJhc3NldE5hbWUiLCJxdWFudGl0eSIsInRva2VuIiwibWV0YWRhdGEiLCJnZXRNZXRhZGF0YSIsImlwZnMiLCJnZXRJcGZzRnJvbU1ldGFkYXRhIiwicHVzaCIsInN0YWtlQWRkcmVzcyIsInJlcSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzIiwianNvbiIsImkiLCJhc3NldF9saXN0IiwibGVuZ3RoIiwicG9saWN5X2lkIiwiZXJyb3IiLCJwcm9qZWN0X2lkIiwic3RhdHVzIiwic2V0UHJpY2VEYXRhIiwiZGl2IiwibmZ0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/policyData.js\n"));

/***/ })

});