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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token */ \"./src/pages/token.js\");\n/* harmony import */ var _nfts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nfts */ \"./src/pages/nfts.js\");\n/* harmony import */ var _fts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fts */ \"./src/pages/fts.js\");\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/next/dist/compiled/buffer/index.js\")[\"Buffer\"];\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Wallet(param) {\n    let { stakeAddress  } = param;\n    _s();\n    const [isVisibleGrid, setIsVisibleGrid] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [isLoading, setisLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [loadingInfo, setLoadingInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [stakeData, setStakeData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        stake: null,\n        tokenNumber: null,\n        projectNumber: null,\n        nfts: null,\n        fts: null\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getTokens = async ()=>{\n            if (stakeAddress == null) {\n                if (sessionStorage.getItem(stakeAddress)) {\n                    let stakeData = JSON.parse(sessionStorage.getItem(stakeAddress));\n                    setStakeData(stakeData);\n                    setisLoading(\"done\");\n                    setIsVisible(false);\n                    setIsVisibleGrid(true);\n                }\n            //base\n            } else {\n                setisLoading(\"fetching\");\n                setIsVisibleGrid(false);\n                setIsVisible(true);\n                if (stakeAddress.startsWith(\"$\")) {\n                    let stake = await getAddressFromHandle(stakeAddress.slice(1));\n                    stakeAddress = stake;\n                }\n                let stakeData = \"\";\n                //if stake data exist in storage -- get it\n                if (sessionStorage.getItem(stakeAddress)) {\n                    stakeData = JSON.parse(sessionStorage.getItem(stakeAddress));\n                } else {\n                    stakeData = await createStakeDataFromStakeAddress(stakeAddress);\n                    sessionStorage.setItem(stakeAddress, JSON.stringify(stakeData));\n                }\n                setStakeData(stakeData);\n                setisLoading(\"done\");\n                setIsVisible(false);\n                setIsVisibleGrid(true);\n            }\n        };\n        getTokens();\n    }, []);\n    if (isLoading == \"fetching\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"loading-symbol\",\n                    style: {\n                        visibility: isVisible ? \"visible\" : \"hidden\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/wallet.js\",\n                    lineNumber: 69,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"loading-info\",\n                    children: loadingInfo\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/wallet.js\",\n                    lineNumber: 70,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/nathan/Desktop/explorer/src/pages/wallet.js\",\n            lineNumber: 67,\n            columnNumber: 12\n        }, this);\n    }\n    async function createStakeDataFromStakeAddress(stake) {\n        let stakeData = \"\";\n        let assets = await getAssetsFromKoios(stakeAddress);\n        //no assets\n        if (assets.length == 0) {\n            stakeData = {\n                stake: stakeAddress,\n                tokenNumber: 0,\n                projectNumber: 0,\n                nfts: [],\n                fts: []\n            };\n        } else {\n            //assets, create new stake data\n            try {\n                let _tokens = await createTokens(assets[0].asset_list);\n                let _tokenNumber = _tokens.length;\n                let _policies = groupTokensByPolicyId(_tokens);\n                let _policyNumber = Object.keys(_policies).length;\n                let _fungObj = sortTokenFungibilities(_policies);\n                stakeData = {\n                    stake: stakeAddress,\n                    tokenNumber: _tokenNumber,\n                    projectNumber: _policyNumber,\n                    nfts: _fungObj.nfts,\n                    fts: _fungObj.fts\n                };\n            } catch (error) {\n                console.log(error);\n            }\n        }\n        return stakeData;\n    }\n    async function getStakeFromAddressKoios(address) {\n        const req = await fetch(\"https://api.koios.rest/api/v0/address_info\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                \"_addresses\": [\n                    address\n                ]\n            })\n        });\n        const res = await req.json();\n        return res[0].stake_address;\n    }\n    const getAddressFromHandle = async (handle)=>{\n        let policyID = \"f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a\";\n        // A blank Handle name should always be ignored.\n        if (handle.length === 0) {\n        // Handle error.\n        }\n        // Convert handleName to hex encoding.\n        let assetName = Buffer.from(handle).toString(\"hex\");\n        const data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/\".concat(policyID).concat(assetName, \"/addresses\"), {\n            headers: {\n                // Your Blockfrost API key\n                project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                \"Content-Type\": \"application/json\"\n            }\n        }).then((res)=>res.json());\n        let stake = await getStakeFromAddressKoios(data[0].address);\n        return stake;\n    };\n    function sortTokenFungibilities(policies) {\n        let poly = Object.keys(policies);\n        let _nfts = [];\n        let _fts = [];\n        for (const element of poly){\n            let p = policies[element][0];\n            if (p.quantity == 1) {\n                _nfts.push(policies[element]);\n            } else {\n                _fts.push(policies[element]);\n            }\n        }\n        return {\n            nfts: _nfts,\n            fts: _fts\n        };\n    }\n    async function getAssetsFromKoios(stakeAddress) {\n        const req = await fetch(\"https://api.koios.rest/api/v0/account_assets\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                \"_stake_addresses\": [\n                    stakeAddress\n                ]\n            })\n        });\n        const res = await req.json();\n        return res;\n    }\n    function groupTokensByPolicyId(tokenList) {\n        const policyList = {};\n        for(const token in tokenList){\n            const policyId = tokenList[token].policy_id;\n            if (policyId in policyList) {\n                policyList[policyId].push(tokenList[token]);\n            } else {\n                policyList[policyId] = [\n                    tokenList[token]\n                ];\n            }\n        }\n        const keys = Object.keys(policyList);\n        //sort policy list by collection number\n        const values = Object.values(policyList);\n        values.sort((a, b)=>a.length - b.length).reverse();\n        const _sorted = {};\n        for(let i = 0; i < keys.length; i++){\n            _sorted[keys[i]] = values[i];\n        }\n        return _sorted;\n    }\n    async function createTokens(assets) {\n        const _tokens = [];\n        for(let i = 0; i < assets.length; i++){\n            setLoadingInfo(\"Loading tokens: \" + i + \" of \" + assets.length);\n            let token = new _token__WEBPACK_IMPORTED_MODULE_2__[\"default\"](assets[i].asset_name, assets[i].policy_id, assets[i].quantity);\n            token.metadata = await token.getMetadata();\n            if (token.metadata != null) {\n                let ipfs = token.getIpfsFromMetadata();\n                token.ipfs = ipfs;\n                _tokens.push(token);\n            }\n        }\n        return _tokens;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            visibility: isVisibleGrid ? \"visible\" : \"hidden\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"wallet\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fts__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    tokens: stakeData,\n                    className: \"fts\"\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/wallet.js\",\n                    lineNumber: 234,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nfts__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    tokens: stakeData,\n                    className: \"nfts\"\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/wallet.js\",\n                    lineNumber: 235,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/nathan/Desktop/explorer/src/pages/wallet.js\",\n            lineNumber: 233,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/wallet.js\",\n        lineNumber: 232,\n        columnNumber: 5\n    }, this);\n}\n_s(Wallet, \"YikdWWCWZ5591xTXOh1G/YmrZzU=\");\n_c = Wallet;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wallet);\nvar _c;\n$RefreshReg$(_c, \"Wallet\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ziw4REFBQzlCLDRDQUFHQTtvQkFBQytGLFFBQVFwRjtvQkFBV21CLFdBQVk7Ozs7Ozs4QkFDcEMsOERBQUMvQiw2Q0FBSUE7b0JBQUNnRyxRQUFVcEY7b0JBQVdtQixXQUFZOzs7Ozs7Ozs7Ozs7Ozs7OztBQUk3QztHQXhPUzdCO0tBQUFBO0FBME9ULCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy93YWxsZXQuanM/OWExMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVG9rZW4gZnJvbSBcIi4vdG9rZW5cIjtcbmltcG9ydCBOZnRzIGZyb20gXCIuL25mdHNcIjtcbmltcG9ydCBGdHMgZnJvbSBcIi4vZnRzXCI7XG5cblxuZnVuY3Rpb24gV2FsbGV0ICh7c3Rha2VBZGRyZXNzfSkge1xuICBjb25zdCBbaXNWaXNpYmxlR3JpZCwgc2V0SXNWaXNpYmxlR3JpZF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRpc0xvYWRpbmddID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpc1Zpc2libGUsIHNldElzVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtsb2FkaW5nSW5mbywgc2V0TG9hZGluZ0luZm9dID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3N0YWtlRGF0YSwgc2V0U3Rha2VEYXRhXSA9IHVzZVN0YXRlKHtzdGFrZTogbnVsbCwgdG9rZW5OdW1iZXI6IG51bGwsIHByb2plY3ROdW1iZXI6IG51bGwsIG5mdHM6IG51bGwsIGZ0czogbnVsbH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ2V0VG9rZW5zID0gYXN5bmMgKCkgPT57XG5cbiAgICAgIGlmKHN0YWtlQWRkcmVzcyA9PSBudWxsKXtcbiAgICAgICAgaWYoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShzdGFrZUFkZHJlc3MpKXtcbiAgICAgICAgICBsZXQgc3Rha2VEYXRhID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKHN0YWtlQWRkcmVzcykpO1xuICAgICAgICAgIHNldFN0YWtlRGF0YShzdGFrZURhdGEpO1xuICBcbiAgICAgICAgICBzZXRpc0xvYWRpbmcoJ2RvbmUnKTtcbiAgICAgICAgICBzZXRJc1Zpc2libGUoZmFsc2UpO1xuICAgICAgICAgIHNldElzVmlzaWJsZUdyaWQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy9iYXNlXG4gICAgICB9XG4gICAgICBlbHNle1xuXG4gICAgICAgIHNldGlzTG9hZGluZygnZmV0Y2hpbmcnKTtcbiAgICAgICAgc2V0SXNWaXNpYmxlR3JpZChmYWxzZSk7XG4gICAgICAgIHNldElzVmlzaWJsZSh0cnVlKTtcblxuICAgICAgICBpZihzdGFrZUFkZHJlc3Muc3RhcnRzV2l0aCgnJCcpKXtcbiAgICAgICAgICBsZXQgc3Rha2UgPSBhd2FpdCBnZXRBZGRyZXNzRnJvbUhhbmRsZShzdGFrZUFkZHJlc3Muc2xpY2UoMSkpO1xuICAgICAgICAgIHN0YWtlQWRkcmVzcyA9IHN0YWtlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHN0YWtlRGF0YSA9ICcnO1xuXG4gICAgICAgIC8vaWYgc3Rha2UgZGF0YSBleGlzdCBpbiBzdG9yYWdlIC0tIGdldCBpdFxuICAgICAgICBpZihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKHN0YWtlQWRkcmVzcykpe1xuICAgICAgICAgIHN0YWtlRGF0YSA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShzdGFrZUFkZHJlc3MpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vaWYgbm8gc3RvcmVkIGRhdGEsIGNyZWF0ZSBuZXdcbiAgICAgICAgZWxzZXtcbiAgICAgICAgICBzdGFrZURhdGEgPSBhd2FpdCBjcmVhdGVTdGFrZURhdGFGcm9tU3Rha2VBZGRyZXNzKHN0YWtlQWRkcmVzcyk7XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShzdGFrZUFkZHJlc3MsIEpTT04uc3RyaW5naWZ5KHN0YWtlRGF0YSkpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBzZXRTdGFrZURhdGEoc3Rha2VEYXRhKTtcblxuICAgICAgICBzZXRpc0xvYWRpbmcoJ2RvbmUnKTtcbiAgICAgICAgc2V0SXNWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgc2V0SXNWaXNpYmxlR3JpZCh0cnVlKTtcblxuICAgICAgfVxuXG4gICAgfVxuICAgICAgXG4gICAgZ2V0VG9rZW5zKCk7XG4gIH0sIFtdKTtcblxuICBpZihpc0xvYWRpbmcgPT0gJ2ZldGNoaW5nJyl7XG4gICAgcmV0dXJuIDxkaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1zeW1ib2xcIiBzdHlsZT17eyB2aXNpYmlsaXR5OiBpc1Zpc2libGUgPyAndmlzaWJsZScgOiAnaGlkZGVuJyB9fT48L2Rpdj5cbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsb2FkaW5nLWluZm9cIj57bG9hZGluZ0luZm99PC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVN0YWtlRGF0YUZyb21TdGFrZUFkZHJlc3Moc3Rha2Upe1xuXG4gICAgbGV0IHN0YWtlRGF0YSA9ICcnO1xuICAgIGxldCBhc3NldHMgPSBhd2FpdCBnZXRBc3NldHNGcm9tS29pb3Moc3Rha2VBZGRyZXNzKTtcblxuICAgIC8vbm8gYXNzZXRzXG4gICAgaWYoYXNzZXRzLmxlbmd0aCA9PSAwICl7XG4gICAgICBzdGFrZURhdGEgPSB7c3Rha2UgOiBzdGFrZUFkZHJlc3MsIHRva2VuTnVtYmVyOiAwLCBwcm9qZWN0TnVtYmVyOjAsIG5mdHM6IFtdLCBmdHMgOiBbXX07XG5cbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIC8vYXNzZXRzLCBjcmVhdGUgbmV3IHN0YWtlIGRhdGFcbiAgICAgIHRyeXtcbiAgICAgICAgbGV0IF90b2tlbnMgPSBhd2FpdCBjcmVhdGVUb2tlbnMoYXNzZXRzWzBdLmFzc2V0X2xpc3QpO1xuICAgICAgICBsZXQgX3Rva2VuTnVtYmVyID0gX3Rva2Vucy5sZW5ndGg7XG4gICAgICAgIGxldCBfcG9saWNpZXMgPSBncm91cFRva2Vuc0J5UG9saWN5SWQoX3Rva2Vucyk7XG4gICAgICAgIGxldCBfcG9saWN5TnVtYmVyID0gKE9iamVjdC5rZXlzKF9wb2xpY2llcykubGVuZ3RoKTtcbiAgICAgICAgbGV0IF9mdW5nT2JqID0gc29ydFRva2VuRnVuZ2liaWxpdGllcyhfcG9saWNpZXMpO1xuXG4gICAgICAgIHN0YWtlRGF0YSA9IHtzdGFrZTogc3Rha2VBZGRyZXNzLCB0b2tlbk51bWJlcjogX3Rva2VuTnVtYmVyLCBwcm9qZWN0TnVtYmVyOiBfcG9saWN5TnVtYmVyLCBuZnRzOiBfZnVuZ09iai5uZnRzLCBmdHM6IF9mdW5nT2JqLmZ0c307XG4gICAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gc3Rha2VEYXRhO1xuXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBnZXRTdGFrZUZyb21BZGRyZXNzS29pb3MoYWRkcmVzcyl7XG4gICAgY29uc3QgcmVxID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmtvaW9zLnJlc3QvYXBpL3YwL2FkZHJlc3NfaW5mbycsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBcIl9hZGRyZXNzZXNcIjogWyBhZGRyZXNzXG4gICAgICAgIF1cbiAgICAgIH0pXG4gICAgfSk7XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCByZXEuanNvbigpO1xuICAgIHJldHVybiByZXNbMF0uc3Rha2VfYWRkcmVzcztcbiAgfVxuXG4gIGNvbnN0IGdldEFkZHJlc3NGcm9tSGFuZGxlID0gYXN5bmMgKGhhbmRsZSkgPT4ge1xuICAgIGxldCBwb2xpY3lJRCA9ICdmMGZmNDhiYmI3YmJlOWQ1OWE0MGYxY2U5MGU5ZTlkMGZmNTAwMmVjNDhmMjMyYjQ5Y2EwZmI5YSc7XG4gICAgXG4gICAgLy8gQSBibGFuayBIYW5kbGUgbmFtZSBzaG91bGQgYWx3YXlzIGJlIGlnbm9yZWQuXG4gICAgaWYgKGhhbmRsZS5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIEhhbmRsZSBlcnJvci5cbiAgICB9XG4gIFxuICAgIC8vIENvbnZlcnQgaGFuZGxlTmFtZSB0byBoZXggZW5jb2RpbmcuXG4gICAgbGV0IGFzc2V0TmFtZSA9IEJ1ZmZlci5mcm9tKGhhbmRsZSkudG9TdHJpbmcoJ2hleCcpO1xuICBcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9jYXJkYW5vLW1haW5uZXQuYmxvY2tmcm9zdC5pby9hcGkvdjAvYXNzZXRzLyR7cG9saWN5SUR9JHthc3NldE5hbWV9L2FkZHJlc3Nlc2AsXG4gICAgICB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAvLyBZb3VyIEJsb2NrZnJvc3QgQVBJIGtleVxuICAgICAgICAgIHByb2plY3RfaWQ6ICdtYWlubmV0b1c2MVlZU2lPb0xTYU5RNmR6VHJrQUc0YXpYVklydmgnLFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfVxuICAgICAgfVxuICAgICkudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XG4gICAgXG4gICAgbGV0IHN0YWtlID0gYXdhaXQgZ2V0U3Rha2VGcm9tQWRkcmVzc0tvaW9zKGRhdGFbMF0uYWRkcmVzcyk7XG4gICAgcmV0dXJuIHN0YWtlO1xuICB9XG5cbiAgZnVuY3Rpb24gc29ydFRva2VuRnVuZ2liaWxpdGllcyhwb2xpY2llcyl7XG4gICAgbGV0IHBvbHkgPSBPYmplY3Qua2V5cyhwb2xpY2llcyk7XG4gICAgbGV0IF9uZnRzID0gW107XG4gICAgbGV0IF9mdHMgPSBbXTtcbiAgICBmb3IoY29uc3QgZWxlbWVudCBvZiBwb2x5KXtcbiAgICAgIGxldCBwID0gcG9saWNpZXNbZWxlbWVudF1bMF07XG4gICAgICBpZihwLnF1YW50aXR5ID09IDEpe1xuICAgICAgICBfbmZ0cy5wdXNoKHBvbGljaWVzW2VsZW1lbnRdKTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIF9mdHMucHVzaChwb2xpY2llc1tlbGVtZW50XSk7XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICByZXR1cm4ge25mdHMgOiBfbmZ0cywgZnRzIDogX2Z0c307XG4gIH1cblxuXG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0QXNzZXRzRnJvbUtvaW9zKHN0YWtlQWRkcmVzcyl7XG4gICAgY29uc3QgcmVxID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmtvaW9zLnJlc3QvYXBpL3YwL2FjY291bnRfYXNzZXRzJywge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIFwiX3N0YWtlX2FkZHJlc3Nlc1wiOiBbXG4gICAgICAgICAgICAgIHN0YWtlQWRkcmVzc1xuICAgICAgICAgICAgXVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cblxuICBmdW5jdGlvbiBncm91cFRva2Vuc0J5UG9saWN5SWQodG9rZW5MaXN0KXtcblxuICAgIGNvbnN0IHBvbGljeUxpc3QgPSB7fTtcbiAgICBmb3IoY29uc3QgdG9rZW4gaW4gdG9rZW5MaXN0KXtcbiAgICAgIGNvbnN0IHBvbGljeUlkID0gdG9rZW5MaXN0W3Rva2VuXS5wb2xpY3lfaWQ7XG4gICAgICBcbiAgICAgIGlmKHBvbGljeUlkIGluIHBvbGljeUxpc3Qpe1xuICAgICAgICBwb2xpY3lMaXN0W3BvbGljeUlkXS5wdXNoKHRva2VuTGlzdFt0b2tlbl0pO1xuICAgICAgfWVsc2Uge1xuICAgICAgICBwb2xpY3lMaXN0W3BvbGljeUlkXSA9IFt0b2tlbkxpc3RbdG9rZW5dXTtcbiAgICAgIH1cblxuICAgIH1cbiAgICBjb25zdCBrZXlzPSBPYmplY3Qua2V5cyhwb2xpY3lMaXN0KTtcblxuICAgIC8vc29ydCBwb2xpY3kgbGlzdCBieSBjb2xsZWN0aW9uIG51bWJlclxuICAgIGNvbnN0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXMocG9saWN5TGlzdCk7XG4gICAgdmFsdWVzLnNvcnQoKGEsYikgPT4gYS5sZW5ndGggLSBiLmxlbmd0aCkucmV2ZXJzZSgpO1xuICAgIGNvbnN0IF9zb3J0ZWQgPSB7fTtcbiAgICBmb3IgKGxldCBpPTA7aTxrZXlzLmxlbmd0aDtpKyspe1xuICAgICAgX3NvcnRlZFtrZXlzW2ldXSA9IHZhbHVlcyBbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9zb3J0ZWQ7XG5cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVRva2Vucyhhc3NldHMpe1xuXG5cbiAgICBjb25zdCBfdG9rZW5zID0gW107XG4gICAgZm9yKGxldCBpID0wOyBpPGFzc2V0cy5sZW5ndGg7aSsrKXtcbiAgICAgIHNldExvYWRpbmdJbmZvKCdMb2FkaW5nIHRva2VuczogJytpICsgJyBvZiAnICthc3NldHMubGVuZ3RoKVxuICAgICAgbGV0IHRva2VuID0gbmV3IFRva2VuKGFzc2V0c1tpXS5hc3NldF9uYW1lLCBhc3NldHNbaV0ucG9saWN5X2lkLCBhc3NldHNbaV0ucXVhbnRpdHkpO1xuICAgICAgdG9rZW4ubWV0YWRhdGEgPSBhd2FpdCB0b2tlbi5nZXRNZXRhZGF0YSgpO1xuICAgICAgaWYodG9rZW4ubWV0YWRhdGEgIT0gbnVsbCl7XG4gICAgICAgIGxldCBpcGZzID0gdG9rZW4uZ2V0SXBmc0Zyb21NZXRhZGF0YSgpO1xuICAgICAgICB0b2tlbi5pcGZzID0gaXBmcztcbiAgICAgICBfdG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgfVxuXG4gICAgfVxuICAgIHJldHVybiBfdG9rZW5zO1xuXG4gIH1cblxuXG4gIHJldHVybihcbiAgICA8ZGl2IHN0eWxlPXt7IHZpc2liaWxpdHk6IGlzVmlzaWJsZUdyaWQgPyAndmlzaWJsZScgOiAnaGlkZGVuJyB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2FsbGV0XCI+XG4gICAgICA8RnRzIHRva2Vucz17c3Rha2VEYXRhfSBjbGFzc05hbWUgPSAnZnRzJy8+XG4gICAgICA8TmZ0cyB0b2tlbnMgPSB7c3Rha2VEYXRhfSBjbGFzc05hbWUgPSAnbmZ0cycvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdhbGxldDtcblxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVG9rZW4iLCJOZnRzIiwiRnRzIiwiV2FsbGV0Iiwic3Rha2VBZGRyZXNzIiwiaXNWaXNpYmxlR3JpZCIsInNldElzVmlzaWJsZUdyaWQiLCJpc0xvYWRpbmciLCJzZXRpc0xvYWRpbmciLCJpc1Zpc2libGUiLCJzZXRJc1Zpc2libGUiLCJsb2FkaW5nSW5mbyIsInNldExvYWRpbmdJbmZvIiwic3Rha2VEYXRhIiwic2V0U3Rha2VEYXRhIiwic3Rha2UiLCJ0b2tlbk51bWJlciIsInByb2plY3ROdW1iZXIiLCJuZnRzIiwiZnRzIiwiZ2V0VG9rZW5zIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwic3RhcnRzV2l0aCIsImdldEFkZHJlc3NGcm9tSGFuZGxlIiwic2xpY2UiLCJjcmVhdGVTdGFrZURhdGFGcm9tU3Rha2VBZGRyZXNzIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwidmlzaWJpbGl0eSIsImxhYmVsIiwiYXNzZXRzIiwiZ2V0QXNzZXRzRnJvbUtvaW9zIiwibGVuZ3RoIiwiX3Rva2VucyIsImNyZWF0ZVRva2VucyIsImFzc2V0X2xpc3QiLCJfdG9rZW5OdW1iZXIiLCJfcG9saWNpZXMiLCJncm91cFRva2Vuc0J5UG9saWN5SWQiLCJfcG9saWN5TnVtYmVyIiwiT2JqZWN0Iiwia2V5cyIsIl9mdW5nT2JqIiwic29ydFRva2VuRnVuZ2liaWxpdGllcyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImdldFN0YWtlRnJvbUFkZHJlc3NLb2lvcyIsImFkZHJlc3MiLCJyZXEiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwicmVzIiwianNvbiIsInN0YWtlX2FkZHJlc3MiLCJoYW5kbGUiLCJwb2xpY3lJRCIsImFzc2V0TmFtZSIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsImRhdGEiLCJwcm9qZWN0X2lkIiwidGhlbiIsInBvbGljaWVzIiwicG9seSIsIl9uZnRzIiwiX2Z0cyIsImVsZW1lbnQiLCJwIiwicXVhbnRpdHkiLCJwdXNoIiwidG9rZW5MaXN0IiwicG9saWN5TGlzdCIsInRva2VuIiwicG9saWN5SWQiLCJwb2xpY3lfaWQiLCJ2YWx1ZXMiLCJzb3J0IiwiYSIsImIiLCJyZXZlcnNlIiwiX3NvcnRlZCIsImkiLCJhc3NldF9uYW1lIiwibWV0YWRhdGEiLCJnZXRNZXRhZGF0YSIsImlwZnMiLCJnZXRJcGZzRnJvbU1ldGFkYXRhIiwidG9rZW5zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/wallet.js\n"));

/***/ })

});