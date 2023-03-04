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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next.config */ \"./next.config.js\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _policy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./policy */ \"./src/pages/policy.js\");\n/* harmony import */ var _prices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prices */ \"./src/pages/prices.js\");\n/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./token */ \"./src/pages/token.js\");\n/* harmony import */ var _tokenDisplay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tokenDisplay */ \"./src/pages/tokenDisplay.js\");\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/next/dist/compiled/buffer/index.js\")[\"Buffer\"];\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n// this function fetches token data from blockfrost and market data from opencnft\n// data is then passed to TokenDisplay to be displayed\nfunction TokenData(props) {\n    _s();\n    // this object holds all the data that will be passed to TokenDisplay\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        token: \"\",\n        name: \"\",\n        created: \"\",\n        fingerprint: \"\",\n        rarityRank: \"\",\n        rarityScore: \"\",\n        statisticalRank: \"\",\n        statisticalScore: \"\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const getTokenData = async ()=>{\n            if (props.assetId == null) {\n                console.log(\"asset ID was undefined\");\n            } else {\n                // from url in [token].jsx\n                let assetId = props.assetId;\n                // fetch asset data from blockfrost\n                let assetData = await loadTokenData(assetId);\n                if (assetData == null) {\n                    setDisplay(\"invalid asset id\");\n                } else {\n                    let token = await createToken(assetData);\n                    let _assetData = await getCnftAssetData(props.assetId);\n                    let createdData = _assetData.created_at.substring(0, 10);\n                    let fingerprint = _assetData.fingerprint;\n                    let rarityRank = _assetData.rarity_rank;\n                    let rarityScore = _assetData.rarity_score;\n                    let statisticalRank = _assetData.statistical_rank;\n                    let statisticalScore = _assetData.statistical_score;\n                    let decryptName = Buffer.from(token.asset_name, \"hex\").toString();\n                    console.log(decryptName);\n                    let data = {\n                        token: token,\n                        name: decryptName,\n                        created: createdData,\n                        fingerprint: fingerprint,\n                        rarityRank: rarityRank,\n                        rarityScore: rarityScore,\n                        statisticalRank: statisticalRank,\n                        statisticalScore\n                    };\n                    setData(data);\n                }\n            }\n        };\n        getTokenData();\n    }, [\n        props\n    ]);\n    async function createToken(assetData) {\n        let assetName = assetData.asset_name;\n        let policy = assetData.policy_id;\n        let quantity = assetData.quantity;\n        let token = new _token__WEBPACK_IMPORTED_MODULE_7__[\"default\"](assetName, policy, quantity);\n        let tokenMetadata = await token.getMetadata();\n        token.metadata = tokenMetadata;\n        let ipfs = \"\";\n        if (token.metadata != null) {\n            ipfs = token.getIpfsFromMetadata();\n            if (ipfs != null) {\n                token.ipfs = ipfs;\n            }\n        }\n        return token;\n    }\n    // fetch token metadata from blockfrost\n    async function loadTokenData(assetId) {\n        try {\n            const data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/\" + assetId, {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    async function getCnftAssetData(asset) {\n        try {\n            const data = await fetch(\"https://api.opencnft.io/1/asset/\" + asset, {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    // fetch token metadata from blockfrost\n    async function getPrevTxs(assetId) {\n        try {\n            const data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/\" + assetId + \"/transactions\", {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tokenDisplay__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        data: data,\n        stake: props.stake\n    }, void 0, false, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n        lineNumber: 127,\n        columnNumber: 9\n    }, this);\n}\n_s(TokenData, \"T6DmwXe3s52kG+v0KgMYh+U/j3w=\");\n_c = TokenData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TokenData);\nvar _c;\n$RefreshReg$(_c, \"TokenData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdG9rZW5EYXRhLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUNYO0FBQ0Y7QUFDYztBQUNiO0FBQ0E7QUFDRjtBQUNjO0FBRTFDLGlGQUFpRjtBQUNqRixzREFBc0Q7QUFDdEQsU0FBU1MsVUFBV0MsS0FBSyxFQUFFOztJQUV6QixxRUFBcUU7SUFDckUsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFDO1FBQUNTLE9BQU87UUFBSUMsTUFBTTtRQUFJQyxTQUFRO1FBQUlDLGFBQVk7UUFBSUMsWUFBVztRQUFHQyxhQUFZO1FBQ2pGQyxpQkFBZ0I7UUFBSUMsa0JBQWlCO0lBQUU7SUFFakVqQixnREFBU0EsQ0FBQyxJQUFNO1FBQ1osTUFBTWtCLGVBQWUsVUFBWTtZQUMvQixJQUFHWCxNQUFNWSxPQUFPLElBQUksSUFBSSxFQUFDO2dCQUN2QkMsUUFBUUMsR0FBRyxDQUFDO1lBQ2QsT0FDSTtnQkFDRCwwQkFBMEI7Z0JBQzFCLElBQUlGLFVBQVVaLE1BQU1ZLE9BQU87Z0JBRTNCLG1DQUFtQztnQkFDbkMsSUFBSUcsWUFBWSxNQUFNQyxjQUFjSjtnQkFDcEMsSUFBR0csYUFBYSxJQUFJLEVBQUM7b0JBQ25CRSxXQUFXO2dCQUNiLE9BQ0k7b0JBQ0QsSUFBSWQsUUFBUSxNQUFNZSxZQUFZSDtvQkFFOUIsSUFBSUksYUFBYSxNQUFNQyxpQkFBaUJwQixNQUFNWSxPQUFPO29CQUNyRCxJQUFJUyxjQUFjLFdBQVlDLFVBQVUsQ0FBRUMsU0FBUyxDQUFDLEdBQUU7b0JBQ3RELElBQUlqQixjQUFlYSxXQUFXYixXQUFXO29CQUN6QyxJQUFJQyxhQUFhWSxXQUFXSyxXQUFXO29CQUN2QyxJQUFJaEIsY0FBY1csV0FBV00sWUFBWTtvQkFDekMsSUFBSWhCLGtCQUFrQlUsV0FBV08sZ0JBQWdCO29CQUNqRCxJQUFJaEIsbUJBQW1CUyxXQUFXUSxpQkFBaUI7b0JBR25ELElBQUlDLGNBQWNDLE1BQU1BLENBQUNDLElBQUksQ0FBQzNCLE1BQU00QixVQUFVLEVBQUUsT0FBT0MsUUFBUTtvQkFDL0RuQixRQUFRQyxHQUFHLENBQUNjO29CQUdaLElBQUkzQixPQUFPO3dCQUFDRSxPQUFPQTt3QkFBT0MsTUFBTXdCO3dCQUFhdkIsU0FBU2dCO3dCQUNwRGYsYUFBYUE7d0JBQWFDLFlBQVlBO3dCQUFZQyxhQUFjQTt3QkFDbEVDLGlCQUFpQkE7d0JBQWlCQztvQkFBZ0I7b0JBRWxEUixRQUFRRDtnQkFFWCxDQUFDO1lBRUosQ0FBQztRQUNIO1FBQ0FVO0lBQ0YsR0FBRztRQUFDWDtLQUFNO0lBR1osZUFBZWtCLFlBQVlILFNBQVMsRUFBQztRQUNuQyxJQUFJa0IsWUFBWWxCLFVBQVVnQixVQUFVO1FBQ3BDLElBQUlHLFNBQVNuQixVQUFVb0IsU0FBUztRQUNoQyxJQUFJQyxXQUFXckIsVUFBVXFCLFFBQVE7UUFFakMsSUFBSWpDLFFBQVEsSUFBSU4sOENBQUtBLENBQUNvQyxXQUFXQyxRQUFRRTtRQUN6QyxJQUFJQyxnQkFBZ0IsTUFBTWxDLE1BQU1tQyxXQUFXO1FBQzNDbkMsTUFBTW9DLFFBQVEsR0FBR0Y7UUFDakIsSUFBSUcsT0FBTztRQUVYLElBQUdyQyxNQUFNb0MsUUFBUSxJQUFJLElBQUksRUFBQztZQUN4QkMsT0FBT3JDLE1BQU1zQyxtQkFBbUI7WUFDaEMsSUFBR0QsUUFBUSxJQUFJLEVBQUM7Z0JBQ2RyQyxNQUFNcUMsSUFBSSxHQUFHQTtZQUNmLENBQUM7UUFDSCxDQUFDO1FBQ0QsT0FBT3JDO0lBQ1Q7SUFFQSx1Q0FBdUM7SUFDdkMsZUFBZWEsY0FBY0osT0FBTyxFQUFDO1FBQ25DLElBQUc7WUFDRCxNQUFNWCxPQUFPLE1BQU15QyxNQUFNLHlEQUF1RDlCLFNBQ2hGO2dCQUFDK0IsU0FBUTtvQkFBQ0MsWUFBWTtvQkFBMkMsaUJBQWlCO2dCQUFrQjtZQUFDO1lBQ3JHLE1BQU1DLE1BQU0sTUFBTTVDLEtBQUs2QyxJQUFJO1lBQzNCLElBQUc3QyxLQUFLOEMsTUFBTSxJQUFJLEtBQUk7Z0JBQ3BCLE9BQU8sSUFBSTtZQUNiLENBQUM7WUFDRCxPQUFPRjtRQUNULEVBQUMsT0FBTUcsT0FBTTtZQUNYLE9BQU8sSUFBSTtRQUNiO0lBQ0Y7SUFFQSxlQUFlNUIsaUJBQWlCNkIsS0FBSyxFQUFDO1FBQ3BDLElBQUc7WUFDRCxNQUFNaEQsT0FBTyxNQUFNeUMsTUFBTSxxQ0FBbUNPLE9BQzVEO2dCQUFDTixTQUFRO29CQUFDQyxZQUFZO29CQUEyQyxpQkFBaUI7Z0JBQWtCO1lBQUM7WUFDckcsTUFBTUMsTUFBTSxNQUFNNUMsS0FBSzZDLElBQUk7WUFDM0IsSUFBRzdDLEtBQUs4QyxNQUFNLElBQUcsS0FBSTtnQkFDbkIsT0FBTyxJQUFJO1lBQ2IsQ0FBQztZQUNELE9BQU9GO1FBQ1QsRUFBQyxPQUFNRyxPQUFNO1lBQ1gsT0FBTyxJQUFJO1FBQ2I7SUFDRjtJQUdBLHVDQUF1QztJQUN2QyxlQUFlRSxXQUFXdEMsT0FBTyxFQUFDO1FBQ2hDLElBQUc7WUFDRCxNQUFNWCxPQUFPLE1BQU15QyxNQUFNLHlEQUF1RDlCLFVBQVEsaUJBQ3hGO2dCQUFDK0IsU0FBUTtvQkFBQ0MsWUFBWTtvQkFBMkMsaUJBQWlCO2dCQUFrQjtZQUFDO1lBQ3JHLE1BQU1DLE1BQU0sTUFBTTVDLEtBQUs2QyxJQUFJO1lBQzNCLElBQUc3QyxLQUFLOEMsTUFBTSxJQUFJLEtBQUk7Z0JBQ3BCLE9BQU8sSUFBSTtZQUNiLENBQUM7WUFDRCxPQUFPRjtRQUNULEVBQUMsT0FBTUcsT0FBTTtZQUNYLE9BQU8sSUFBSTtRQUNiO0lBQ0Y7SUFFQSxxQkFDSSw4REFBQ2xELHFEQUFZQTtRQUFDRyxNQUFRQTtRQUFNa0QsT0FBT25ELE1BQU1tRCxLQUFLOzs7Ozs7QUFDdEQ7R0FwSFNwRDtLQUFBQTtBQXFIVCwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvdG9rZW5EYXRhLmpzPzZmNWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXNzZXRQcmVmaXggfSBmcm9tIFwibmV4dC5jb25maWdcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUG9saWN5IGZyb20gXCIuL3BvbGljeVwiO1xuaW1wb3J0IFByaWNlcyBmcm9tIFwiLi9wcmljZXNcIjtcbmltcG9ydCBUb2tlbiBmcm9tIFwiLi90b2tlblwiO1xuaW1wb3J0IFRva2VuRGlzcGxheSBmcm9tIFwiLi90b2tlbkRpc3BsYXlcIjtcblxuLy8gdGhpcyBmdW5jdGlvbiBmZXRjaGVzIHRva2VuIGRhdGEgZnJvbSBibG9ja2Zyb3N0IGFuZCBtYXJrZXQgZGF0YSBmcm9tIG9wZW5jbmZ0XG4vLyBkYXRhIGlzIHRoZW4gcGFzc2VkIHRvIFRva2VuRGlzcGxheSB0byBiZSBkaXNwbGF5ZWRcbmZ1bmN0aW9uIFRva2VuRGF0YSAocHJvcHMpIHtcblxuICAvLyB0aGlzIG9iamVjdCBob2xkcyBhbGwgdGhlIGRhdGEgdGhhdCB3aWxsIGJlIHBhc3NlZCB0byBUb2tlbkRpc3BsYXlcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe3Rva2VuOiAnJywgbmFtZTogJycsIGNyZWF0ZWQ6JycsIGZpbmdlcnByaW50OicnLCByYXJpdHlSYW5rOicnLHJhcml0eVNjb3JlOicnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGlzdGljYWxSYW5rOicnLCBzdGF0aXN0aWNhbFNjb3JlOicnfSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBnZXRUb2tlbkRhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgaWYocHJvcHMuYXNzZXRJZCA9PSBudWxsKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhc3NldCBJRCB3YXMgdW5kZWZpbmVkJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgLy8gZnJvbSB1cmwgaW4gW3Rva2VuXS5qc3hcbiAgICAgICAgICAgICBsZXQgYXNzZXRJZCA9IHByb3BzLmFzc2V0SWQ7XG5cbiAgICAgICAgICAgICAvLyBmZXRjaCBhc3NldCBkYXRhIGZyb20gYmxvY2tmcm9zdFxuICAgICAgICAgICAgIGxldCBhc3NldERhdGEgPSBhd2FpdCBsb2FkVG9rZW5EYXRhKGFzc2V0SWQpO1xuICAgICAgICAgICAgIGlmKGFzc2V0RGF0YSA9PSBudWxsKXtcbiAgICAgICAgICAgICAgIHNldERpc3BsYXkoJ2ludmFsaWQgYXNzZXQgaWQnKVxuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IGF3YWl0IGNyZWF0ZVRva2VuKGFzc2V0RGF0YSk7IFxuXG4gICAgICAgICAgICAgICAgbGV0IF9hc3NldERhdGEgPSBhd2FpdCBnZXRDbmZ0QXNzZXREYXRhKHByb3BzLmFzc2V0SWQpO1xuICAgICAgICAgICAgICAgIGxldCBjcmVhdGVkRGF0YSA9IChfYXNzZXREYXRhLmNyZWF0ZWRfYXQpLnN1YnN0cmluZygwLDEwKTtcbiAgICAgICAgICAgICAgICBsZXQgZmluZ2VycHJpbnQgPSAoX2Fzc2V0RGF0YS5maW5nZXJwcmludCk7XG4gICAgICAgICAgICAgICAgbGV0IHJhcml0eVJhbmsgPSBfYXNzZXREYXRhLnJhcml0eV9yYW5rO1xuICAgICAgICAgICAgICAgIGxldCByYXJpdHlTY29yZSA9IF9hc3NldERhdGEucmFyaXR5X3Njb3JlO1xuICAgICAgICAgICAgICAgIGxldCBzdGF0aXN0aWNhbFJhbmsgPSBfYXNzZXREYXRhLnN0YXRpc3RpY2FsX3Jhbms7XG4gICAgICAgICAgICAgICAgbGV0IHN0YXRpc3RpY2FsU2NvcmUgPSBfYXNzZXREYXRhLnN0YXRpc3RpY2FsX3Njb3JlO1xuXG5cbiAgICAgICAgICAgICAgICBsZXQgZGVjcnlwdE5hbWUgPSBCdWZmZXIuZnJvbSh0b2tlbi5hc3NldF9uYW1lLCAnaGV4JykudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkZWNyeXB0TmFtZSk7XG5cblxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge3Rva2VuOiB0b2tlbiwgbmFtZTogZGVjcnlwdE5hbWUsIGNyZWF0ZWQ6IGNyZWF0ZWREYXRhLFxuICAgICAgICAgICAgICAgICAgZmluZ2VycHJpbnQ6IGZpbmdlcnByaW50LCByYXJpdHlSYW5rOiByYXJpdHlSYW5rLCByYXJpdHlTY29yZTogIHJhcml0eVNjb3JlLFxuICAgICAgICAgICAgICAgIHN0YXRpc3RpY2FsUmFuazogc3RhdGlzdGljYWxSYW5rLCBzdGF0aXN0aWNhbFNjb3JlfTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBzZXREYXRhKGRhdGEpO1xuXG4gICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGdldFRva2VuRGF0YSgpO1xuICAgICAgfSwgW3Byb3BzXSlcbiAgICAgIFxuXG4gICAgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVG9rZW4oYXNzZXREYXRhKXtcbiAgICAgIGxldCBhc3NldE5hbWUgPSBhc3NldERhdGEuYXNzZXRfbmFtZTtcbiAgICAgIGxldCBwb2xpY3kgPSBhc3NldERhdGEucG9saWN5X2lkO1xuICAgICAgbGV0IHF1YW50aXR5ID0gYXNzZXREYXRhLnF1YW50aXR5O1xuXG4gICAgICBsZXQgdG9rZW4gPSBuZXcgVG9rZW4oYXNzZXROYW1lLCBwb2xpY3ksIHF1YW50aXR5KTtcbiAgICAgIGxldCB0b2tlbk1ldGFkYXRhID0gYXdhaXQgdG9rZW4uZ2V0TWV0YWRhdGEoKTtcbiAgICAgIHRva2VuLm1ldGFkYXRhID0gdG9rZW5NZXRhZGF0YTtcbiAgICAgIGxldCBpcGZzID0gJyc7XG5cbiAgICAgIGlmKHRva2VuLm1ldGFkYXRhICE9IG51bGwpe1xuICAgICAgICBpcGZzID0gdG9rZW4uZ2V0SXBmc0Zyb21NZXRhZGF0YSgpO1xuICAgICAgICBpZihpcGZzICE9IG51bGwpe1xuICAgICAgICAgIHRva2VuLmlwZnMgPSBpcGZzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfVxuXG4gICAgLy8gZmV0Y2ggdG9rZW4gbWV0YWRhdGEgZnJvbSBibG9ja2Zyb3N0XG4gICAgYXN5bmMgZnVuY3Rpb24gbG9hZFRva2VuRGF0YShhc3NldElkKXtcbiAgICAgIHRyeXtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCdodHRwczovL2NhcmRhbm8tbWFpbm5ldC5ibG9ja2Zyb3N0LmlvL2FwaS92MC9hc3NldHMvJythc3NldElkLFxuICAgICAgICB7aGVhZGVyczp7cHJvamVjdF9pZDogJ21haW5uZXRvVzYxWVlTaU9vTFNhTlE2ZHpUcmtBRzRhelhWSXJ2aCcsICdjYWNoZS1jb250cm9sJzogJ21heC1hZ2U9MzE1MzYwMDAnfX0pO1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBkYXRhLmpzb24oKTtcbiAgICAgICAgaWYoZGF0YS5zdGF0dXMgIT0gMjAwKXtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldENuZnRBc3NldERhdGEoYXNzZXQpe1xuICAgICAgdHJ5e1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLm9wZW5jbmZ0LmlvLzEvYXNzZXQvJythc3NldCxcbiAgICAgICAge2hlYWRlcnM6e3Byb2plY3RfaWQ6ICdtYWlubmV0b1c2MVlZU2lPb0xTYU5RNmR6VHJrQUc0YXpYVklydmgnLCAnY2FjaGUtY29udHJvbCc6ICdtYXgtYWdlPTMxNTM2MDAwJ319KTtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZGF0YS5qc29uKCk7XG4gICAgICAgIGlmKGRhdGEuc3RhdHVzIT0gMjAwKXtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gXG4gICAgLy8gZmV0Y2ggdG9rZW4gbWV0YWRhdGEgZnJvbSBibG9ja2Zyb3N0XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UHJldlR4cyhhc3NldElkKXtcbiAgICAgIHRyeXtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCdodHRwczovL2NhcmRhbm8tbWFpbm5ldC5ibG9ja2Zyb3N0LmlvL2FwaS92MC9hc3NldHMvJythc3NldElkKycvdHJhbnNhY3Rpb25zJyxcbiAgICAgICAge2hlYWRlcnM6e3Byb2plY3RfaWQ6ICdtYWlubmV0b1c2MVlZU2lPb0xTYU5RNmR6VHJrQUc0YXpYVklydmgnLCAnY2FjaGUtY29udHJvbCc6ICdtYXgtYWdlPTMxNTM2MDAwJ319KTtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZGF0YS5qc29uKCk7XG4gICAgICAgIGlmKGRhdGEuc3RhdHVzICE9IDIwMCl7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPFRva2VuRGlzcGxheSBkYXRhID0ge2RhdGF9IHN0YWtlPXtwcm9wcy5zdGFrZX0vPilcbn1cbmV4cG9ydCBkZWZhdWx0IFRva2VuRGF0YTtcbiJdLCJuYW1lcyI6WyJhc3NldFByZWZpeCIsIkltYWdlIiwiTGluayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUG9saWN5IiwiUHJpY2VzIiwiVG9rZW4iLCJUb2tlbkRpc3BsYXkiLCJUb2tlbkRhdGEiLCJwcm9wcyIsImRhdGEiLCJzZXREYXRhIiwidG9rZW4iLCJuYW1lIiwiY3JlYXRlZCIsImZpbmdlcnByaW50IiwicmFyaXR5UmFuayIsInJhcml0eVNjb3JlIiwic3RhdGlzdGljYWxSYW5rIiwic3RhdGlzdGljYWxTY29yZSIsImdldFRva2VuRGF0YSIsImFzc2V0SWQiLCJjb25zb2xlIiwibG9nIiwiYXNzZXREYXRhIiwibG9hZFRva2VuRGF0YSIsInNldERpc3BsYXkiLCJjcmVhdGVUb2tlbiIsIl9hc3NldERhdGEiLCJnZXRDbmZ0QXNzZXREYXRhIiwiY3JlYXRlZERhdGEiLCJjcmVhdGVkX2F0Iiwic3Vic3RyaW5nIiwicmFyaXR5X3JhbmsiLCJyYXJpdHlfc2NvcmUiLCJzdGF0aXN0aWNhbF9yYW5rIiwic3RhdGlzdGljYWxfc2NvcmUiLCJkZWNyeXB0TmFtZSIsIkJ1ZmZlciIsImZyb20iLCJhc3NldF9uYW1lIiwidG9TdHJpbmciLCJhc3NldE5hbWUiLCJwb2xpY3kiLCJwb2xpY3lfaWQiLCJxdWFudGl0eSIsInRva2VuTWV0YWRhdGEiLCJnZXRNZXRhZGF0YSIsIm1ldGFkYXRhIiwiaXBmcyIsImdldElwZnNGcm9tTWV0YWRhdGEiLCJmZXRjaCIsImhlYWRlcnMiLCJwcm9qZWN0X2lkIiwicmVzIiwianNvbiIsInN0YXR1cyIsImVycm9yIiwiYXNzZXQiLCJnZXRQcmV2VHhzIiwic3Rha2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/tokenData.js\n"));

/***/ })

});