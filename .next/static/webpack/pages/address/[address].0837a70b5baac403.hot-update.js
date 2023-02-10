"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/address/[address]",{

/***/ "./src/pages/wallet.js":
/*!*****************************!*\
  !*** ./src/pages/wallet.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token */ \"./src/pages/token.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _nfts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nfts */ \"./src/pages/nfts.js\");\n/* harmony import */ var _fts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fts */ \"./src/pages/fts.js\");\n/* harmony import */ var _overview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./overview */ \"./src/pages/overview.js\");\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/next/dist/compiled/buffer/index.js\")[\"Buffer\"];\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Wallet(param) {\n    let { stakeAddress  } = param;\n    _s();\n    const [isVisibleGrid, setIsVisibleGrid] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [isLoading, setisLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [loadingInfo, setLoadingInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [nfts, setNfts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [fts, setFts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [overviewData, setOverviewData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getTokens = async ()=>{\n            if (stakeAddress == null) {\n                console.log(\"address was null\");\n            //base\n            } else {\n                setisLoading(\"fetching\");\n                setIsVisibleGrid(false);\n                setIsVisible(true);\n                if (stakeAddress.startsWith(\"$\")) {\n                    let stake = await getAddressFromHandle(stakeAddress.slice(1));\n                    stakeAddress = stake;\n                }\n                let stakeData = \"\";\n                //if stake data exist in storage -- get it\n                if (sessionStorage.getItem(stakeAddress)) {\n                    console.log(\"cache found\" + stakeAddress);\n                    stakeData = JSON.parse(sessionStorage.getItem(stakeAddress));\n                    console.log(\"cached retrieved : \" + stakeData);\n                } else {\n                    stakeData = await createStakeDataFromStakeAddress(stakeAddress);\n                    sessionStorage.setItem(stakeAddress, JSON.stringify(stakeData));\n                    console.log(\"cached set : \" + stakeData);\n                }\n                setOverviewData(stakeData);\n                setFts(stakeData.fts);\n                setNfts(stakeData.nfts);\n                setisLoading(\"done\");\n                setIsVisible(false);\n                setIsVisibleGrid(true);\n            }\n        };\n        getTokens();\n    }, [\n        stakeAddress\n    ]);\n    if (isLoading == \"fetching\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"loading-symbol\",\n                    style: {\n                        visibility: isVisible ? \"visible\" : \"hidden\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/wallet.js\",\n                    lineNumber: 74,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"loading-info\",\n                    children: loadingInfo\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/wallet.js\",\n                    lineNumber: 75,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/nathan/Desktop/explorer/src/pages/wallet.js\",\n            lineNumber: 72,\n            columnNumber: 12\n        }, this);\n    }\n    async function createStakeDataFromStakeAddress(stake) {\n        let stakeData = \"\";\n        let assets = await getAssetsFromKoios(stakeAddress);\n        //no assets\n        if (assets.length == 0) {\n            console.log(\"no assets\");\n            stakeData = {\n                stake: stakeAddress,\n                tokenNumber: 0,\n                projectNumber: 0,\n                nfts: [],\n                fts: []\n            };\n            setOverviewData(stakeData);\n            setFts(stakeData.fts);\n            setNfts(stakeData.nfts);\n            return stakeData;\n        } else {\n            console.log(\"some assets\");\n            //assets, create new stake data\n            try {\n                let _tokens = await createTokens(assets[0].asset_list);\n                let _tokenNumber = _tokens.length;\n                let _policies = groupTokensByPolicyId(_tokens);\n                let _policyNumber = Object.keys(_policies).length;\n                let _fungObj = sortTokenFungibilities(_policies);\n                stakeData = {\n                    stake: stakeAddress,\n                    tokenNumber: _tokenNumber,\n                    projectNumber: _policyNumber,\n                    nfts: _fungObj.nfts,\n                    fts: _fungObj.fts\n                };\n                console.log(stakeData);\n            } catch (error) {\n                console.log(error);\n            }\n        }\n        return stakeData;\n    }\n    async function getStakeFromAddressKoios(address) {\n        const req = await fetch(\"https://api.koios.rest/api/v0/address_info\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                \"_addresses\": [\n                    address\n                ]\n            })\n        });\n        const res = await req.json();\n        return res[0].stake_address;\n    }\n    const getAddressFromHandle = async (handle)=>{\n        let policyID = \"f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a\";\n        // A blank Handle name should always be ignored.\n        if (handle.length === 0) {\n        // Handle error.\n        }\n        // Convert handleName to hex encoding.\n        let assetName = Buffer.from(handle).toString(\"hex\");\n        const data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/\".concat(policyID).concat(assetName, \"/addresses\"), {\n            headers: {\n                // Your Blockfrost API key\n                project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                \"Content-Type\": \"application/json\"\n            }\n        }).then((res)=>res.json());\n        let stake = await getStakeFromAddressKoios(data[0].address);\n        return stake;\n    };\n    function sortTokenFungibilities(policies) {\n        let poly = Object.keys(policies);\n        let _nfts = [];\n        let _fts = [];\n        for (const element of poly){\n            let p = policies[element][0];\n            if (p.quantity == 1) {\n                _nfts.push(policies[element]);\n            } else {\n                //getPriceForToken(p);\n                _fts.push(policies[element]);\n            }\n        }\n        return {\n            nfts: _nfts,\n            fts: _fts\n        };\n    }\n    async function getAssetsFromKoios(stakeAddress) {\n        const req = await fetch(\"https://api.koios.rest/api/v0/account_assets\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                \"_stake_addresses\": [\n                    stakeAddress\n                ]\n            })\n        });\n        const res = await req.json();\n        return res;\n    }\n    function groupTokensByPolicyId(tokenList) {\n        const policyList = {};\n        for(const token in tokenList){\n            const policyId = tokenList[token].policy_id;\n            if (policyId in policyList) {\n                policyList[policyId].push(tokenList[token]);\n            } else {\n                policyList[policyId] = [\n                    tokenList[token]\n                ];\n            }\n        }\n        const keys = Object.keys(policyList);\n        //sort policy list by collection number\n        const values = Object.values(policyList);\n        values.sort((a, b)=>a.length - b.length).reverse();\n        const _sorted = {};\n        for(let i = 0; i < keys.length; i++){\n            _sorted[keys[i]] = values[i];\n        }\n        return _sorted;\n    }\n    async function createTokens(assets) {\n        const _tokens = [];\n        for(let i = 0; i < assets.length; i++){\n            setLoadingInfo(\"Loading tokens: \" + i + \" of \" + assets.length);\n            let token = new _token__WEBPACK_IMPORTED_MODULE_2__[\"default\"](assets[i].asset_name, assets[i].policy_id, assets[i].quantity);\n            token.metadata = await token.getMetadata();\n            if (token.metadata != null) {\n                let ipfs = token.getIpfsFromMetadata();\n                token.ipfs = ipfs;\n                _tokens.push(token);\n            }\n        }\n        return _tokens;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            visibility: isVisibleGrid ? \"visible\" : \"hidden\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"wallet\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"top-row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_overview__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            data: overviewData,\n                            className: \"overview\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/wallet.js\",\n                            lineNumber: 250,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fts__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            tokens: fts,\n                            className: \"fts\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/wallet.js\",\n                            lineNumber: 251,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/wallet.js\",\n                    lineNumber: 249,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nfts__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    tokens: nfts,\n                    className: \"nfts\"\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/wallet.js\",\n                    lineNumber: 253,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/nathan/Desktop/explorer/src/pages/wallet.js\",\n            lineNumber: 248,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/wallet.js\",\n        lineNumber: 247,\n        columnNumber: 5\n    }, this);\n}\n_s(Wallet, \"4HTQm/I74UuH8O8UYFhoDZgfLoM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Wallet;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wallet);\nvar _c;\n$RefreshReg$(_c, \"Wallet\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBQztnQkFDeEIsSUFBSUUsT0FBT2IsTUFBTWMsbUJBQW1CO2dCQUNwQ2QsTUFBTWEsSUFBSSxHQUFHQTtnQkFDZHRELFFBQVFzQyxJQUFJLENBQUNHO1lBQ2QsQ0FBQztRQUVIO1FBQ0EsT0FBT3pDO0lBRVQ7SUFHQSxxQkFDRSw4REFBQ1Y7UUFBSUUsT0FBTztZQUFFQyxZQUFZakMsZ0JBQWdCLFlBQVksUUFBUTtRQUFDO2tCQUM3RCw0RUFBQzhCO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNsQyxpREFBUUE7NEJBQUN1RSxNQUFReEQ7NEJBQWNtQixXQUFVOzs7Ozs7c0NBQzFDLDhEQUFDbkMsNENBQUdBOzRCQUFDb0csUUFBUXRGOzRCQUFLcUIsV0FBWTs7Ozs7Ozs7Ozs7OzhCQUVsQyw4REFBQ3BDLDZDQUFJQTtvQkFBQ3FHLFFBQVV4RjtvQkFBTXVCLFdBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXhDO0dBMVBTakM7O1FBUVFKLGtEQUFTQTs7O0tBUmpCSTtBQTRQVCwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvd2FsbGV0LmpzPzlhMTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRva2VuIGZyb20gXCIuL3Rva2VuXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBOZnRzIGZyb20gXCIuL25mdHNcIjtcbmltcG9ydCBGdHMgZnJvbSBcIi4vZnRzXCI7XG5pbXBvcnQgT3ZlcnZpZXcgZnJvbSBcIi4vb3ZlcnZpZXdcIjtcblxuXG5mdW5jdGlvbiBXYWxsZXQgKHtzdGFrZUFkZHJlc3N9KSB7XG4gIGNvbnN0IFtpc1Zpc2libGVHcmlkLCBzZXRJc1Zpc2libGVHcmlkXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldGlzTG9hZGluZ10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2lzVmlzaWJsZSwgc2V0SXNWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xvYWRpbmdJbmZvLCBzZXRMb2FkaW5nSW5mb10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbbmZ0cywgc2V0TmZ0c10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbZnRzLCBzZXRGdHNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW292ZXJ2aWV3RGF0YSwgc2V0T3ZlcnZpZXdEYXRhXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZXRUb2tlbnMgPSBhc3luYyAoKSA9PntcblxuICAgICAgaWYoc3Rha2VBZGRyZXNzID09IG51bGwpe1xuICAgICAgICBjb25zb2xlLmxvZygnYWRkcmVzcyB3YXMgbnVsbCcpO1xuICAgICAgICAvL2Jhc2VcbiAgICAgIH1cbiAgICAgIGVsc2V7XG5cbiAgICAgICAgc2V0aXNMb2FkaW5nKCdmZXRjaGluZycpO1xuICAgICAgICBzZXRJc1Zpc2libGVHcmlkKGZhbHNlKTtcbiAgICAgICAgc2V0SXNWaXNpYmxlKHRydWUpO1xuXG4gICAgICAgIGlmKHN0YWtlQWRkcmVzcy5zdGFydHNXaXRoKCckJykpe1xuICAgICAgICAgIGxldCBzdGFrZSA9IGF3YWl0IGdldEFkZHJlc3NGcm9tSGFuZGxlKHN0YWtlQWRkcmVzcy5zbGljZSgxKSk7XG4gICAgICAgICAgc3Rha2VBZGRyZXNzID0gc3Rha2U7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc3Rha2VEYXRhID0gJyc7XG5cbiAgICAgICAgLy9pZiBzdGFrZSBkYXRhIGV4aXN0IGluIHN0b3JhZ2UgLS0gZ2V0IGl0XG4gICAgICAgIGlmKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oc3Rha2VBZGRyZXNzKSl7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2NhY2hlIGZvdW5kJytzdGFrZUFkZHJlc3MpO1xuICAgICAgICAgIHN0YWtlRGF0YSA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShzdGFrZUFkZHJlc3MpKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnY2FjaGVkIHJldHJpZXZlZCA6ICcrc3Rha2VEYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vaWYgbm8gc3RvcmVkIGRhdGEsIGNyZWF0ZSBuZXdcbiAgICAgICAgZWxzZXtcbiAgICAgICAgICBzdGFrZURhdGEgPSBhd2FpdCBjcmVhdGVTdGFrZURhdGFGcm9tU3Rha2VBZGRyZXNzKHN0YWtlQWRkcmVzcyk7XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShzdGFrZUFkZHJlc3MsIEpTT04uc3RyaW5naWZ5KHN0YWtlRGF0YSkpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdjYWNoZWQgc2V0IDogJytzdGFrZURhdGEpO1xuXG5cbiAgICAgICAgfVxuXG4gICAgICAgIHNldE92ZXJ2aWV3RGF0YShzdGFrZURhdGEpO1xuICAgICAgICBzZXRGdHMoc3Rha2VEYXRhLmZ0cyk7XG4gICAgICAgIHNldE5mdHMoc3Rha2VEYXRhLm5mdHMpO1xuXG4gICAgICAgIHNldGlzTG9hZGluZygnZG9uZScpO1xuICAgICAgICBzZXRJc1Zpc2libGUoZmFsc2UpO1xuICAgICAgICBzZXRJc1Zpc2libGVHcmlkKHRydWUpO1xuXG4gICAgICB9XG5cbiAgICB9XG4gICAgICBcbiAgICBnZXRUb2tlbnMoKTtcbiAgfSwgW3N0YWtlQWRkcmVzc10pO1xuXG4gIGlmKGlzTG9hZGluZyA9PSAnZmV0Y2hpbmcnKXtcbiAgICByZXR1cm4gPGRpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLXN5bWJvbFwiIHN0eWxlPXt7IHZpc2liaWxpdHk6IGlzVmlzaWJsZSA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nIH19PjwvZGl2PlxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxvYWRpbmctaW5mb1wiPntsb2FkaW5nSW5mb308L2xhYmVsPlxuICAgIDwvZGl2PlxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gY3JlYXRlU3Rha2VEYXRhRnJvbVN0YWtlQWRkcmVzcyhzdGFrZSl7XG5cbiAgICBsZXQgc3Rha2VEYXRhID0gJyc7XG4gICAgbGV0IGFzc2V0cyA9IGF3YWl0IGdldEFzc2V0c0Zyb21Lb2lvcyhzdGFrZUFkZHJlc3MpO1xuXG4gICAgLy9ubyBhc3NldHNcbiAgICBpZihhc3NldHMubGVuZ3RoID09IDAgKXtcbiAgICAgIGNvbnNvbGUubG9nKCdubyBhc3NldHMnKTtcbiAgICAgIHN0YWtlRGF0YSA9IHtzdGFrZSA6IHN0YWtlQWRkcmVzcywgdG9rZW5OdW1iZXI6IDAsIHByb2plY3ROdW1iZXI6MCwgbmZ0czogW10sIGZ0cyA6IFtdfTtcbiAgICAgIHNldE92ZXJ2aWV3RGF0YShzdGFrZURhdGEpO1xuICAgICAgc2V0RnRzKHN0YWtlRGF0YS5mdHMpO1xuICAgICAgc2V0TmZ0cyhzdGFrZURhdGEubmZ0cyk7XG4gICAgICByZXR1cm4gc3Rha2VEYXRhO1xuXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBjb25zb2xlLmxvZygnc29tZSBhc3NldHMnKTtcbiAgICAgIC8vYXNzZXRzLCBjcmVhdGUgbmV3IHN0YWtlIGRhdGFcbiAgICAgIHRyeXtcbiAgICAgICAgbGV0IF90b2tlbnMgPSBhd2FpdCBjcmVhdGVUb2tlbnMoYXNzZXRzWzBdLmFzc2V0X2xpc3QpO1xuICAgICAgICBsZXQgX3Rva2VuTnVtYmVyID0gX3Rva2Vucy5sZW5ndGg7XG4gICAgICAgIGxldCBfcG9saWNpZXMgPSBncm91cFRva2Vuc0J5UG9saWN5SWQoX3Rva2Vucyk7XG5cbiAgICAgICAgbGV0IF9wb2xpY3lOdW1iZXIgPSAoT2JqZWN0LmtleXMoX3BvbGljaWVzKS5sZW5ndGgpO1xuXG4gICAgICAgIGxldCBfZnVuZ09iaiA9IHNvcnRUb2tlbkZ1bmdpYmlsaXRpZXMoX3BvbGljaWVzKTtcblxuICAgICAgICBzdGFrZURhdGEgPSB7c3Rha2U6IHN0YWtlQWRkcmVzcywgdG9rZW5OdW1iZXI6IF90b2tlbk51bWJlciwgcHJvamVjdE51bWJlcjogX3BvbGljeU51bWJlciwgbmZ0czogX2Z1bmdPYmoubmZ0cywgZnRzOiBfZnVuZ09iai5mdHN9O1xuICAgICAgICBjb25zb2xlLmxvZyhzdGFrZURhdGEpO1xuICAgICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YWtlRGF0YTtcblxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0U3Rha2VGcm9tQWRkcmVzc0tvaW9zKGFkZHJlc3Mpe1xuICAgIGNvbnN0IHJlcSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5rb2lvcy5yZXN0L2FwaS92MC9hZGRyZXNzX2luZm8nLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgXCJfYWRkcmVzc2VzXCI6IFsgYWRkcmVzc1xuICAgICAgICBdXG4gICAgICB9KVxuICAgIH0pO1xuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgICByZXR1cm4gcmVzWzBdLnN0YWtlX2FkZHJlc3M7XG4gIH1cblxuICBjb25zdCBnZXRBZGRyZXNzRnJvbUhhbmRsZSA9IGFzeW5jIChoYW5kbGUpID0+IHtcbiAgICBsZXQgcG9saWN5SUQgPSAnZjBmZjQ4YmJiN2JiZTlkNTlhNDBmMWNlOTBlOWU5ZDBmZjUwMDJlYzQ4ZjIzMmI0OWNhMGZiOWEnO1xuICAgIFxuICAgIC8vIEEgYmxhbmsgSGFuZGxlIG5hbWUgc2hvdWxkIGFsd2F5cyBiZSBpZ25vcmVkLlxuICAgIGlmIChoYW5kbGUubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyBIYW5kbGUgZXJyb3IuXG4gICAgfVxuICBcbiAgICAvLyBDb252ZXJ0IGhhbmRsZU5hbWUgdG8gaGV4IGVuY29kaW5nLlxuICAgIGxldCBhc3NldE5hbWUgPSBCdWZmZXIuZnJvbShoYW5kbGUpLnRvU3RyaW5nKCdoZXgnKTtcbiAgXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vY2FyZGFuby1tYWlubmV0LmJsb2NrZnJvc3QuaW8vYXBpL3YwL2Fzc2V0cy8ke3BvbGljeUlEfSR7YXNzZXROYW1lfS9hZGRyZXNzZXNgLFxuICAgICAge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgLy8gWW91ciBCbG9ja2Zyb3N0IEFQSSBrZXlcbiAgICAgICAgICBwcm9qZWN0X2lkOiAnbWFpbm5ldG9XNjFZWVNpT29MU2FOUTZkelRya0FHNGF6WFZJcnZoJyxcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xuICAgIFxuICAgIGxldCBzdGFrZSA9IGF3YWl0IGdldFN0YWtlRnJvbUFkZHJlc3NLb2lvcyhkYXRhWzBdLmFkZHJlc3MpO1xuICAgIHJldHVybiBzdGFrZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNvcnRUb2tlbkZ1bmdpYmlsaXRpZXMocG9saWNpZXMpe1xuICAgIGxldCBwb2x5ID0gT2JqZWN0LmtleXMocG9saWNpZXMpO1xuICAgIGxldCBfbmZ0cyA9IFtdO1xuICAgIGxldCBfZnRzID0gW107XG4gICAgZm9yKGNvbnN0IGVsZW1lbnQgb2YgcG9seSl7XG4gICAgICBsZXQgcCA9IHBvbGljaWVzW2VsZW1lbnRdWzBdO1xuICAgICAgaWYocC5xdWFudGl0eSA9PSAxKXtcbiAgICAgICAgX25mdHMucHVzaChwb2xpY2llc1tlbGVtZW50XSk7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICAvL2dldFByaWNlRm9yVG9rZW4ocCk7XG4gICAgICAgIF9mdHMucHVzaChwb2xpY2llc1tlbGVtZW50XSk7XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICByZXR1cm4ge25mdHMgOiBfbmZ0cywgZnRzIDogX2Z0c307XG4gIH1cblxuXG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0QXNzZXRzRnJvbUtvaW9zKHN0YWtlQWRkcmVzcyl7XG4gICAgY29uc3QgcmVxID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmtvaW9zLnJlc3QvYXBpL3YwL2FjY291bnRfYXNzZXRzJywge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIFwiX3N0YWtlX2FkZHJlc3Nlc1wiOiBbXG4gICAgICAgICAgICAgIHN0YWtlQWRkcmVzc1xuICAgICAgICAgICAgXVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cblxuICBmdW5jdGlvbiBncm91cFRva2Vuc0J5UG9saWN5SWQodG9rZW5MaXN0KXtcblxuICAgIGNvbnN0IHBvbGljeUxpc3QgPSB7fTtcbiAgICBmb3IoY29uc3QgdG9rZW4gaW4gdG9rZW5MaXN0KXtcbiAgICAgIGNvbnN0IHBvbGljeUlkID0gdG9rZW5MaXN0W3Rva2VuXS5wb2xpY3lfaWQ7XG4gICAgICBcbiAgICAgIGlmKHBvbGljeUlkIGluIHBvbGljeUxpc3Qpe1xuICAgICAgICBwb2xpY3lMaXN0W3BvbGljeUlkXS5wdXNoKHRva2VuTGlzdFt0b2tlbl0pO1xuICAgICAgfWVsc2Uge1xuICAgICAgICBwb2xpY3lMaXN0W3BvbGljeUlkXSA9IFt0b2tlbkxpc3RbdG9rZW5dXTtcbiAgICAgIH1cblxuICAgIH1cbiAgICBjb25zdCBrZXlzPSBPYmplY3Qua2V5cyhwb2xpY3lMaXN0KTtcblxuICAgIC8vc29ydCBwb2xpY3kgbGlzdCBieSBjb2xsZWN0aW9uIG51bWJlclxuICAgIGNvbnN0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXMocG9saWN5TGlzdCk7XG4gICAgdmFsdWVzLnNvcnQoKGEsYikgPT4gYS5sZW5ndGggLSBiLmxlbmd0aCkucmV2ZXJzZSgpO1xuICAgIGNvbnN0IF9zb3J0ZWQgPSB7fTtcbiAgICBmb3IgKGxldCBpPTA7aTxrZXlzLmxlbmd0aDtpKyspe1xuICAgICAgX3NvcnRlZFtrZXlzW2ldXSA9IHZhbHVlcyBbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9zb3J0ZWQ7XG5cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVRva2Vucyhhc3NldHMpe1xuXG5cbiAgICBjb25zdCBfdG9rZW5zID0gW107XG4gICAgZm9yKGxldCBpID0wOyBpPGFzc2V0cy5sZW5ndGg7aSsrKXtcbiAgICAgIHNldExvYWRpbmdJbmZvKCdMb2FkaW5nIHRva2VuczogJytpICsgJyBvZiAnICthc3NldHMubGVuZ3RoKVxuICAgICAgbGV0IHRva2VuID0gbmV3IFRva2VuKGFzc2V0c1tpXS5hc3NldF9uYW1lLCBhc3NldHNbaV0ucG9saWN5X2lkLCBhc3NldHNbaV0ucXVhbnRpdHkpO1xuICAgICAgdG9rZW4ubWV0YWRhdGEgPSBhd2FpdCB0b2tlbi5nZXRNZXRhZGF0YSgpO1xuICAgICAgaWYodG9rZW4ubWV0YWRhdGEgIT0gbnVsbCl7XG4gICAgICAgIGxldCBpcGZzID0gdG9rZW4uZ2V0SXBmc0Zyb21NZXRhZGF0YSgpO1xuICAgICAgICB0b2tlbi5pcGZzID0gaXBmcztcbiAgICAgICBfdG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgfVxuXG4gICAgfVxuICAgIHJldHVybiBfdG9rZW5zO1xuXG4gIH1cblxuXG4gIHJldHVybihcbiAgICA8ZGl2IHN0eWxlPXt7IHZpc2liaWxpdHk6IGlzVmlzaWJsZUdyaWQgPyAndmlzaWJsZScgOiAnaGlkZGVuJyB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2FsbGV0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLXJvd1wiPlxuICAgICAgICAgIDxPdmVydmlldyBkYXRhID0ge292ZXJ2aWV3RGF0YX0gY2xhc3NOYW1lPSdvdmVydmlldycvPlxuICAgICAgICAgIDxGdHMgdG9rZW5zPXtmdHN9IGNsYXNzTmFtZSA9ICdmdHMnLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8TmZ0cyB0b2tlbnMgPSB7bmZ0c30gY2xhc3NOYW1lID0gJ25mdHMnLz5cbiAgICAgIDwvZGl2PlxuXG5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2FsbGV0O1xuXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJUb2tlbiIsInVzZVJvdXRlciIsIk5mdHMiLCJGdHMiLCJPdmVydmlldyIsIldhbGxldCIsInN0YWtlQWRkcmVzcyIsImlzVmlzaWJsZUdyaWQiLCJzZXRJc1Zpc2libGVHcmlkIiwiaXNMb2FkaW5nIiwic2V0aXNMb2FkaW5nIiwiaXNWaXNpYmxlIiwic2V0SXNWaXNpYmxlIiwibG9hZGluZ0luZm8iLCJzZXRMb2FkaW5nSW5mbyIsIm5mdHMiLCJzZXROZnRzIiwiZnRzIiwic2V0RnRzIiwib3ZlcnZpZXdEYXRhIiwic2V0T3ZlcnZpZXdEYXRhIiwicm91dGVyIiwiZ2V0VG9rZW5zIiwiY29uc29sZSIsImxvZyIsInN0YXJ0c1dpdGgiLCJzdGFrZSIsImdldEFkZHJlc3NGcm9tSGFuZGxlIiwic2xpY2UiLCJzdGFrZURhdGEiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJjcmVhdGVTdGFrZURhdGFGcm9tU3Rha2VBZGRyZXNzIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwidmlzaWJpbGl0eSIsImxhYmVsIiwiYXNzZXRzIiwiZ2V0QXNzZXRzRnJvbUtvaW9zIiwibGVuZ3RoIiwidG9rZW5OdW1iZXIiLCJwcm9qZWN0TnVtYmVyIiwiX3Rva2VucyIsImNyZWF0ZVRva2VucyIsImFzc2V0X2xpc3QiLCJfdG9rZW5OdW1iZXIiLCJfcG9saWNpZXMiLCJncm91cFRva2Vuc0J5UG9saWN5SWQiLCJfcG9saWN5TnVtYmVyIiwiT2JqZWN0Iiwia2V5cyIsIl9mdW5nT2JqIiwic29ydFRva2VuRnVuZ2liaWxpdGllcyIsImVycm9yIiwiZ2V0U3Rha2VGcm9tQWRkcmVzc0tvaW9zIiwiYWRkcmVzcyIsInJlcSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJyZXMiLCJqc29uIiwic3Rha2VfYWRkcmVzcyIsImhhbmRsZSIsInBvbGljeUlEIiwiYXNzZXROYW1lIiwiQnVmZmVyIiwiZnJvbSIsInRvU3RyaW5nIiwiZGF0YSIsInByb2plY3RfaWQiLCJ0aGVuIiwicG9saWNpZXMiLCJwb2x5IiwiX25mdHMiLCJfZnRzIiwiZWxlbWVudCIsInAiLCJxdWFudGl0eSIsInB1c2giLCJ0b2tlbkxpc3QiLCJwb2xpY3lMaXN0IiwidG9rZW4iLCJwb2xpY3lJZCIsInBvbGljeV9pZCIsInZhbHVlcyIsInNvcnQiLCJhIiwiYiIsInJldmVyc2UiLCJfc29ydGVkIiwiaSIsImFzc2V0X25hbWUiLCJtZXRhZGF0YSIsImdldE1ldGFkYXRhIiwiaXBmcyIsImdldElwZnNGcm9tTWV0YWRhdGEiLCJ0b2tlbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/wallet.js\n"));

/***/ })

});