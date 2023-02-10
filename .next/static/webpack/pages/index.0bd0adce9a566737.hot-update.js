"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/wallet.js":
/*!*****************************!*\
  !*** ./src/pages/wallet.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token */ \"./src/pages/token.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _nfts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nfts */ \"./src/pages/nfts.js\");\n/* harmony import */ var _fts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fts */ \"./src/pages/fts.js\");\n/* harmony import */ var _overview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./overview */ \"./src/pages/overview.js\");\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/next/dist/compiled/buffer/index.js\")[\"Buffer\"];\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Wallet(param) {\n    let { stakeAddress  } = param;\n    _s();\n    const [isVisibleGrid, setIsVisibleGrid] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [isLoading, setisLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [loadingInfo, setLoadingInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [nfts, setNfts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [fts, setFts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [overviewData, setOverviewData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [stakeData, setStakeData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        stake: null,\n        tokenNumber: null,\n        projectNumber: null,\n        nfts: null,\n        fts: null\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getTokens = async ()=>{\n            if (stakeAddress == null) {\n                console.log(\"address was null\");\n            //base\n            } else {\n                setisLoading(\"fetching\");\n                setIsVisibleGrid(false);\n                setIsVisible(true);\n                if (stakeAddress.startsWith(\"$\")) {\n                    let stake = await getAddressFromHandle(stakeAddress.slice(1));\n                    stakeAddress = stake;\n                }\n                let stakeData = \"\";\n                //if stake data exist in storage -- get it\n                if (sessionStorage.getItem(\"explorer\")) {\n                    stakeData = JSON.parse(sessionStorage.getItem(\"explorer\"));\n                } else {\n                    stakeData = await createStakeDataFromStakeAddress(stakeAddress);\n                    sessionStorage.setItem(\"explorer\", JSON.stringify(stakeData));\n                }\n                setStakeData(stakeData);\n                setisLoading(\"done\");\n                setIsVisible(false);\n                setIsVisibleGrid(true);\n            }\n        };\n        getTokens();\n    }, []);\n    if (isLoading == \"fetching\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"loading-symbol\",\n                    style: {\n                        visibility: isVisible ? \"visible\" : \"hidden\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/wallet.js\",\n                    lineNumber: 67,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"loading-info\",\n                    children: loadingInfo\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/wallet.js\",\n                    lineNumber: 68,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/nathan/Desktop/explorer/src/pages/wallet.js\",\n            lineNumber: 65,\n            columnNumber: 12\n        }, this);\n    }\n    async function createStakeDataFromStakeAddress(stake) {\n        let stakeData = \"\";\n        let assets = await getAssetsFromKoios(stakeAddress);\n        //no assets\n        if (assets.length == 0) {\n            stakeData = {\n                stake: stakeAddress,\n                tokenNumber: 0,\n                projectNumber: 0,\n                nfts: [],\n                fts: []\n            };\n        } else {\n            //assets, create new stake data\n            try {\n                let _tokens = await createTokens(assets[0].asset_list);\n                let _tokenNumber = _tokens.length;\n                let _policies = groupTokensByPolicyId(_tokens);\n                let _policyNumber = Object.keys(_policies).length;\n                let _fungObj = sortTokenFungibilities(_policies);\n                stakeData = {\n                    stake: stakeAddress,\n                    tokenNumber: _tokenNumber,\n                    projectNumber: _policyNumber,\n                    nfts: _fungObj.nfts,\n                    fts: _fungObj.fts\n                };\n            } catch (error) {\n                console.log(error);\n            }\n        }\n        return stakeData;\n    }\n    async function getStakeFromAddressKoios(address) {\n        const req = await fetch(\"https://api.koios.rest/api/v0/address_info\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                \"_addresses\": [\n                    address\n                ]\n            })\n        });\n        const res = await req.json();\n        return res[0].stake_address;\n    }\n    const getAddressFromHandle = async (handle)=>{\n        let policyID = \"f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a\";\n        // A blank Handle name should always be ignored.\n        if (handle.length === 0) {\n        // Handle error.\n        }\n        // Convert handleName to hex encoding.\n        let assetName = Buffer.from(handle).toString(\"hex\");\n        const data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/\".concat(policyID).concat(assetName, \"/addresses\"), {\n            headers: {\n                // Your Blockfrost API key\n                project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                \"Content-Type\": \"application/json\"\n            }\n        }).then((res)=>res.json());\n        let stake = await getStakeFromAddressKoios(data[0].address);\n        return stake;\n    };\n    function sortTokenFungibilities(policies) {\n        let poly = Object.keys(policies);\n        let _nfts = [];\n        let _fts = [];\n        for (const element of poly){\n            let p = policies[element][0];\n            if (p.quantity == 1) {\n                _nfts.push(policies[element]);\n            } else {\n                _fts.push(policies[element]);\n            }\n        }\n        return {\n            nfts: _nfts,\n            fts: _fts\n        };\n    }\n    async function getAssetsFromKoios(stakeAddress) {\n        const req = await fetch(\"https://api.koios.rest/api/v0/account_assets\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                \"_stake_addresses\": [\n                    stakeAddress\n                ]\n            })\n        });\n        const res = await req.json();\n        return res;\n    }\n    function groupTokensByPolicyId(tokenList) {\n        const policyList = {};\n        for(const token in tokenList){\n            const policyId = tokenList[token].policy_id;\n            if (policyId in policyList) {\n                policyList[policyId].push(tokenList[token]);\n            } else {\n                policyList[policyId] = [\n                    tokenList[token]\n                ];\n            }\n        }\n        const keys = Object.keys(policyList);\n        //sort policy list by collection number\n        const values = Object.values(policyList);\n        values.sort((a, b)=>a.length - b.length).reverse();\n        const _sorted = {};\n        for(let i = 0; i < keys.length; i++){\n            _sorted[keys[i]] = values[i];\n        }\n        return _sorted;\n    }\n    async function createTokens(assets) {\n        const _tokens = [];\n        for(let i = 0; i < assets.length; i++){\n            setLoadingInfo(\"Loading tokens: \" + i + \" of \" + assets.length);\n            let token = new _token__WEBPACK_IMPORTED_MODULE_2__[\"default\"](assets[i].asset_name, assets[i].policy_id, assets[i].quantity);\n            token.metadata = await token.getMetadata();\n            if (token.metadata != null) {\n                let ipfs = token.getIpfsFromMetadata();\n                token.ipfs = ipfs;\n                _tokens.push(token);\n            }\n        }\n        return _tokens;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            visibility: isVisibleGrid ? \"visible\" : \"hidden\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"wallet\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fts__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    tokens: fts,\n                    className: \"fts\"\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/wallet.js\",\n                    lineNumber: 232,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nfts__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    tokens: nfts,\n                    className: \"nfts\"\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/wallet.js\",\n                    lineNumber: 233,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/nathan/Desktop/explorer/src/pages/wallet.js\",\n            lineNumber: 231,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/wallet.js\",\n        lineNumber: 230,\n        columnNumber: 5\n    }, this);\n}\n_s(Wallet, \"YcmIItj+yYG3mLBDvvQic4VfM3U=\");\n_c = Wallet;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wallet);\nvar _c;\n$RefreshReg$(_c, \"Wallet\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VTs7OEJBQ2YsOERBQUNyQyw0Q0FBR0E7b0JBQUNvRyxRQUFRdEY7b0JBQUt1QixXQUFZOzs7Ozs7OEJBQzlCLDhEQUFDdEMsNkNBQUlBO29CQUFDcUcsUUFBVXhGO29CQUFNeUIsV0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNeEM7R0F0T1NuQztLQUFBQTtBQXdPVCwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvd2FsbGV0LmpzPzlhMTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRva2VuIGZyb20gXCIuL3Rva2VuXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBOZnRzIGZyb20gXCIuL25mdHNcIjtcbmltcG9ydCBGdHMgZnJvbSBcIi4vZnRzXCI7XG5pbXBvcnQgT3ZlcnZpZXcgZnJvbSBcIi4vb3ZlcnZpZXdcIjtcblxuXG5mdW5jdGlvbiBXYWxsZXQgKHtzdGFrZUFkZHJlc3N9KSB7XG4gIGNvbnN0IFtpc1Zpc2libGVHcmlkLCBzZXRJc1Zpc2libGVHcmlkXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldGlzTG9hZGluZ10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2lzVmlzaWJsZSwgc2V0SXNWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xvYWRpbmdJbmZvLCBzZXRMb2FkaW5nSW5mb10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbbmZ0cywgc2V0TmZ0c10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbZnRzLCBzZXRGdHNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW292ZXJ2aWV3RGF0YSwgc2V0T3ZlcnZpZXdEYXRhXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtzdGFrZURhdGEsIHNldFN0YWtlRGF0YV0gPSB1c2VTdGF0ZSh7c3Rha2U6IG51bGwsIHRva2VuTnVtYmVyOiBudWxsLCBwcm9qZWN0TnVtYmVyOiBudWxsLCBuZnRzOiBudWxsLCBmdHM6IG51bGx9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdldFRva2VucyA9IGFzeW5jICgpID0+e1xuXG4gICAgICBpZihzdGFrZUFkZHJlc3MgPT0gbnVsbCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhZGRyZXNzIHdhcyBudWxsJyk7XG4gICAgICAgIC8vYmFzZVxuICAgICAgfVxuICAgICAgZWxzZXtcblxuICAgICAgICBzZXRpc0xvYWRpbmcoJ2ZldGNoaW5nJyk7XG4gICAgICAgIHNldElzVmlzaWJsZUdyaWQoZmFsc2UpO1xuICAgICAgICBzZXRJc1Zpc2libGUodHJ1ZSk7XG5cbiAgICAgICAgaWYoc3Rha2VBZGRyZXNzLnN0YXJ0c1dpdGgoJyQnKSl7XG4gICAgICAgICAgbGV0IHN0YWtlID0gYXdhaXQgZ2V0QWRkcmVzc0Zyb21IYW5kbGUoc3Rha2VBZGRyZXNzLnNsaWNlKDEpKTtcbiAgICAgICAgICBzdGFrZUFkZHJlc3MgPSBzdGFrZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzdGFrZURhdGEgPSAnJztcblxuICAgICAgICAvL2lmIHN0YWtlIGRhdGEgZXhpc3QgaW4gc3RvcmFnZSAtLSBnZXQgaXRcbiAgICAgICAgaWYoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZXhwbG9yZXInKSl7XG4gICAgICAgICAgc3Rha2VEYXRhID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdleHBsb3JlcicpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vaWYgbm8gc3RvcmVkIGRhdGEsIGNyZWF0ZSBuZXdcbiAgICAgICAgZWxzZXtcbiAgICAgICAgICBzdGFrZURhdGEgPSBhd2FpdCBjcmVhdGVTdGFrZURhdGFGcm9tU3Rha2VBZGRyZXNzKHN0YWtlQWRkcmVzcyk7XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnZXhwbG9yZXInLCBKU09OLnN0cmluZ2lmeShzdGFrZURhdGEpKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgc2V0U3Rha2VEYXRhKHN0YWtlRGF0YSk7XG5cbiAgICAgICAgc2V0aXNMb2FkaW5nKCdkb25lJyk7XG4gICAgICAgIHNldElzVmlzaWJsZShmYWxzZSk7XG4gICAgICAgIHNldElzVmlzaWJsZUdyaWQodHJ1ZSk7XG5cbiAgICAgIH1cblxuICAgIH1cbiAgICAgIFxuICAgIGdldFRva2VucygpO1xuICB9LCBbXSk7XG5cbiAgaWYoaXNMb2FkaW5nID09ICdmZXRjaGluZycpe1xuICAgIHJldHVybiA8ZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctc3ltYm9sXCIgc3R5bGU9e3sgdmlzaWJpbGl0eTogaXNWaXNpYmxlID8gJ3Zpc2libGUnIDogJ2hpZGRlbicgfX0+PC9kaXY+XG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibG9hZGluZy1pbmZvXCI+e2xvYWRpbmdJbmZvfTwvbGFiZWw+XG4gICAgPC9kaXY+XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBjcmVhdGVTdGFrZURhdGFGcm9tU3Rha2VBZGRyZXNzKHN0YWtlKXtcblxuICAgIGxldCBzdGFrZURhdGEgPSAnJztcbiAgICBsZXQgYXNzZXRzID0gYXdhaXQgZ2V0QXNzZXRzRnJvbUtvaW9zKHN0YWtlQWRkcmVzcyk7XG5cbiAgICAvL25vIGFzc2V0c1xuICAgIGlmKGFzc2V0cy5sZW5ndGggPT0gMCApe1xuICAgICAgc3Rha2VEYXRhID0ge3N0YWtlIDogc3Rha2VBZGRyZXNzLCB0b2tlbk51bWJlcjogMCwgcHJvamVjdE51bWJlcjowLCBuZnRzOiBbXSwgZnRzIDogW119O1xuXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAvL2Fzc2V0cywgY3JlYXRlIG5ldyBzdGFrZSBkYXRhXG4gICAgICB0cnl7XG4gICAgICAgIGxldCBfdG9rZW5zID0gYXdhaXQgY3JlYXRlVG9rZW5zKGFzc2V0c1swXS5hc3NldF9saXN0KTtcbiAgICAgICAgbGV0IF90b2tlbk51bWJlciA9IF90b2tlbnMubGVuZ3RoO1xuICAgICAgICBsZXQgX3BvbGljaWVzID0gZ3JvdXBUb2tlbnNCeVBvbGljeUlkKF90b2tlbnMpO1xuICAgICAgICBsZXQgX3BvbGljeU51bWJlciA9IChPYmplY3Qua2V5cyhfcG9saWNpZXMpLmxlbmd0aCk7XG4gICAgICAgIGxldCBfZnVuZ09iaiA9IHNvcnRUb2tlbkZ1bmdpYmlsaXRpZXMoX3BvbGljaWVzKTtcblxuICAgICAgICBzdGFrZURhdGEgPSB7c3Rha2U6IHN0YWtlQWRkcmVzcywgdG9rZW5OdW1iZXI6IF90b2tlbk51bWJlciwgcHJvamVjdE51bWJlcjogX3BvbGljeU51bWJlciwgbmZ0czogX2Z1bmdPYmoubmZ0cywgZnRzOiBfZnVuZ09iai5mdHN9O1xuICAgICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YWtlRGF0YTtcblxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0U3Rha2VGcm9tQWRkcmVzc0tvaW9zKGFkZHJlc3Mpe1xuICAgIGNvbnN0IHJlcSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5rb2lvcy5yZXN0L2FwaS92MC9hZGRyZXNzX2luZm8nLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgXCJfYWRkcmVzc2VzXCI6IFsgYWRkcmVzc1xuICAgICAgICBdXG4gICAgICB9KVxuICAgIH0pO1xuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgICByZXR1cm4gcmVzWzBdLnN0YWtlX2FkZHJlc3M7XG4gIH1cblxuICBjb25zdCBnZXRBZGRyZXNzRnJvbUhhbmRsZSA9IGFzeW5jIChoYW5kbGUpID0+IHtcbiAgICBsZXQgcG9saWN5SUQgPSAnZjBmZjQ4YmJiN2JiZTlkNTlhNDBmMWNlOTBlOWU5ZDBmZjUwMDJlYzQ4ZjIzMmI0OWNhMGZiOWEnO1xuICAgIFxuICAgIC8vIEEgYmxhbmsgSGFuZGxlIG5hbWUgc2hvdWxkIGFsd2F5cyBiZSBpZ25vcmVkLlxuICAgIGlmIChoYW5kbGUubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyBIYW5kbGUgZXJyb3IuXG4gICAgfVxuICBcbiAgICAvLyBDb252ZXJ0IGhhbmRsZU5hbWUgdG8gaGV4IGVuY29kaW5nLlxuICAgIGxldCBhc3NldE5hbWUgPSBCdWZmZXIuZnJvbShoYW5kbGUpLnRvU3RyaW5nKCdoZXgnKTtcbiAgXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vY2FyZGFuby1tYWlubmV0LmJsb2NrZnJvc3QuaW8vYXBpL3YwL2Fzc2V0cy8ke3BvbGljeUlEfSR7YXNzZXROYW1lfS9hZGRyZXNzZXNgLFxuICAgICAge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgLy8gWW91ciBCbG9ja2Zyb3N0IEFQSSBrZXlcbiAgICAgICAgICBwcm9qZWN0X2lkOiAnbWFpbm5ldG9XNjFZWVNpT29MU2FOUTZkelRya0FHNGF6WFZJcnZoJyxcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xuICAgIFxuICAgIGxldCBzdGFrZSA9IGF3YWl0IGdldFN0YWtlRnJvbUFkZHJlc3NLb2lvcyhkYXRhWzBdLmFkZHJlc3MpO1xuICAgIHJldHVybiBzdGFrZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNvcnRUb2tlbkZ1bmdpYmlsaXRpZXMocG9saWNpZXMpe1xuICAgIGxldCBwb2x5ID0gT2JqZWN0LmtleXMocG9saWNpZXMpO1xuICAgIGxldCBfbmZ0cyA9IFtdO1xuICAgIGxldCBfZnRzID0gW107XG4gICAgZm9yKGNvbnN0IGVsZW1lbnQgb2YgcG9seSl7XG4gICAgICBsZXQgcCA9IHBvbGljaWVzW2VsZW1lbnRdWzBdO1xuICAgICAgaWYocC5xdWFudGl0eSA9PSAxKXtcbiAgICAgICAgX25mdHMucHVzaChwb2xpY2llc1tlbGVtZW50XSk7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICBfZnRzLnB1c2gocG9saWNpZXNbZWxlbWVudF0pO1xuICAgICAgfVxuICAgIH1cblxuXG4gICAgcmV0dXJuIHtuZnRzIDogX25mdHMsIGZ0cyA6IF9mdHN9O1xuICB9XG5cblxuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldEFzc2V0c0Zyb21Lb2lvcyhzdGFrZUFkZHJlc3Mpe1xuICAgIGNvbnN0IHJlcSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5rb2lvcy5yZXN0L2FwaS92MC9hY2NvdW50X2Fzc2V0cycsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBcIl9zdGFrZV9hZGRyZXNzZXNcIjogW1xuICAgICAgICAgICAgICBzdGFrZUFkZHJlc3NcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9KVxuICAgICAgICB9KTtcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlcS5qc29uKCk7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG5cbiAgZnVuY3Rpb24gZ3JvdXBUb2tlbnNCeVBvbGljeUlkKHRva2VuTGlzdCl7XG5cbiAgICBjb25zdCBwb2xpY3lMaXN0ID0ge307XG4gICAgZm9yKGNvbnN0IHRva2VuIGluIHRva2VuTGlzdCl7XG4gICAgICBjb25zdCBwb2xpY3lJZCA9IHRva2VuTGlzdFt0b2tlbl0ucG9saWN5X2lkO1xuICAgICAgXG4gICAgICBpZihwb2xpY3lJZCBpbiBwb2xpY3lMaXN0KXtcbiAgICAgICAgcG9saWN5TGlzdFtwb2xpY3lJZF0ucHVzaCh0b2tlbkxpc3RbdG9rZW5dKTtcbiAgICAgIH1lbHNlIHtcbiAgICAgICAgcG9saWN5TGlzdFtwb2xpY3lJZF0gPSBbdG9rZW5MaXN0W3Rva2VuXV07XG4gICAgICB9XG5cbiAgICB9XG4gICAgY29uc3Qga2V5cz0gT2JqZWN0LmtleXMocG9saWN5TGlzdCk7XG5cbiAgICAvL3NvcnQgcG9saWN5IGxpc3QgYnkgY29sbGVjdGlvbiBudW1iZXJcbiAgICBjb25zdCB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKHBvbGljeUxpc3QpO1xuICAgIHZhbHVlcy5zb3J0KChhLGIpID0+IGEubGVuZ3RoIC0gYi5sZW5ndGgpLnJldmVyc2UoKTtcbiAgICBjb25zdCBfc29ydGVkID0ge307XG4gICAgZm9yIChsZXQgaT0wO2k8a2V5cy5sZW5ndGg7aSsrKXtcbiAgICAgIF9zb3J0ZWRba2V5c1tpXV0gPSB2YWx1ZXMgW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBfc29ydGVkO1xuXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBjcmVhdGVUb2tlbnMoYXNzZXRzKXtcblxuXG4gICAgY29uc3QgX3Rva2VucyA9IFtdO1xuICAgIGZvcihsZXQgaSA9MDsgaTxhc3NldHMubGVuZ3RoO2krKyl7XG4gICAgICBzZXRMb2FkaW5nSW5mbygnTG9hZGluZyB0b2tlbnM6ICcraSArICcgb2YgJyArYXNzZXRzLmxlbmd0aClcbiAgICAgIGxldCB0b2tlbiA9IG5ldyBUb2tlbihhc3NldHNbaV0uYXNzZXRfbmFtZSwgYXNzZXRzW2ldLnBvbGljeV9pZCwgYXNzZXRzW2ldLnF1YW50aXR5KTtcbiAgICAgIHRva2VuLm1ldGFkYXRhID0gYXdhaXQgdG9rZW4uZ2V0TWV0YWRhdGEoKTtcbiAgICAgIGlmKHRva2VuLm1ldGFkYXRhICE9IG51bGwpe1xuICAgICAgICBsZXQgaXBmcyA9IHRva2VuLmdldElwZnNGcm9tTWV0YWRhdGEoKTtcbiAgICAgICAgdG9rZW4uaXBmcyA9IGlwZnM7XG4gICAgICAgX3Rva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgIH1cblxuICAgIH1cbiAgICByZXR1cm4gX3Rva2VucztcblxuICB9XG5cblxuICByZXR1cm4oXG4gICAgPGRpdiBzdHlsZT17eyB2aXNpYmlsaXR5OiBpc1Zpc2libGVHcmlkID8gJ3Zpc2libGUnIDogJ2hpZGRlbicgfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhbGxldFwiPlxuICAgICAgPEZ0cyB0b2tlbnM9e2Z0c30gY2xhc3NOYW1lID0gJ2Z0cycvPlxuICAgICAgPE5mdHMgdG9rZW5zID0ge25mdHN9IGNsYXNzTmFtZSA9ICduZnRzJy8+XG4gICAgICA8L2Rpdj5cblxuXG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdhbGxldDtcblxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVG9rZW4iLCJ1c2VSb3V0ZXIiLCJOZnRzIiwiRnRzIiwiT3ZlcnZpZXciLCJXYWxsZXQiLCJzdGFrZUFkZHJlc3MiLCJpc1Zpc2libGVHcmlkIiwic2V0SXNWaXNpYmxlR3JpZCIsImlzTG9hZGluZyIsInNldGlzTG9hZGluZyIsImlzVmlzaWJsZSIsInNldElzVmlzaWJsZSIsImxvYWRpbmdJbmZvIiwic2V0TG9hZGluZ0luZm8iLCJuZnRzIiwic2V0TmZ0cyIsImZ0cyIsInNldEZ0cyIsIm92ZXJ2aWV3RGF0YSIsInNldE92ZXJ2aWV3RGF0YSIsInN0YWtlRGF0YSIsInNldFN0YWtlRGF0YSIsInN0YWtlIiwidG9rZW5OdW1iZXIiLCJwcm9qZWN0TnVtYmVyIiwiZ2V0VG9rZW5zIiwiY29uc29sZSIsImxvZyIsInN0YXJ0c1dpdGgiLCJnZXRBZGRyZXNzRnJvbUhhbmRsZSIsInNsaWNlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiY3JlYXRlU3Rha2VEYXRhRnJvbVN0YWtlQWRkcmVzcyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsInZpc2liaWxpdHkiLCJsYWJlbCIsImFzc2V0cyIsImdldEFzc2V0c0Zyb21Lb2lvcyIsImxlbmd0aCIsIl90b2tlbnMiLCJjcmVhdGVUb2tlbnMiLCJhc3NldF9saXN0IiwiX3Rva2VuTnVtYmVyIiwiX3BvbGljaWVzIiwiZ3JvdXBUb2tlbnNCeVBvbGljeUlkIiwiX3BvbGljeU51bWJlciIsIk9iamVjdCIsImtleXMiLCJfZnVuZ09iaiIsInNvcnRUb2tlbkZ1bmdpYmlsaXRpZXMiLCJlcnJvciIsImdldFN0YWtlRnJvbUFkZHJlc3NLb2lvcyIsImFkZHJlc3MiLCJyZXEiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwicmVzIiwianNvbiIsInN0YWtlX2FkZHJlc3MiLCJoYW5kbGUiLCJwb2xpY3lJRCIsImFzc2V0TmFtZSIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsImRhdGEiLCJwcm9qZWN0X2lkIiwidGhlbiIsInBvbGljaWVzIiwicG9seSIsIl9uZnRzIiwiX2Z0cyIsImVsZW1lbnQiLCJwIiwicXVhbnRpdHkiLCJwdXNoIiwidG9rZW5MaXN0IiwicG9saWN5TGlzdCIsInRva2VuIiwicG9saWN5SWQiLCJwb2xpY3lfaWQiLCJ2YWx1ZXMiLCJzb3J0IiwiYSIsImIiLCJyZXZlcnNlIiwiX3NvcnRlZCIsImkiLCJhc3NldF9uYW1lIiwibWV0YWRhdGEiLCJnZXRNZXRhZGF0YSIsImlwZnMiLCJnZXRJcGZzRnJvbU1ldGFkYXRhIiwidG9rZW5zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/wallet.js\n"));

/***/ })

});