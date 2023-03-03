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

/***/ "./src/pages/collection.js":
/*!*********************************!*\
  !*** ./src/pages/collection.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Collection; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./token */ \"./src/pages/token.js\");\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/next/dist/compiled/buffer/index.js\")[\"Buffer\"];\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n// takes a policy and uses blockfrost to return asset datafrom the collection\nfunction Collection(props) {\n    _s();\n    const [tokens, setTokens] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    // react hook used to store user inputed strings\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [assets, setAssets] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const [displayedAssets, setDisplayedAssets] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const [total, setTotal] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const [minIndex, setMinIndex] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const [maxIndex, setMaxIndex] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(20);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        function func() {\n            if (searchQuery.length > 0) {\n                let matches = [];\n                let decodedAsset = \"\";\n                // find matches\n                for (const element of assets){\n                    let assetName = element.asset.substring(56);\n                    decodedAsset = Buffer.from(assetName, \"hex\").toString();\n                    let assetId = element.asset.toLowerCase();\n                    let assetNameL = assetName.toLowerCase();\n                    let decodedAssetL = decodedAsset.toLowerCase();\n                    if (assetId.startsWith(searchQuery) || decodedAssetL.startsWith(searchQuery) || assetNameL.startsWith(searchQuery)) {\n                        matches.push(element);\n                    }\n                }\n                // display matches\n                if (matches.length != 0) {\n                    let display = [];\n                    for (const element of matches){\n                        let assetName = element.asset.substring(56);\n                        decodedAsset = Buffer.from(assetName, \"hex\").toString();\n                        display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid-item-ft\",\n                            children: [\n                                decodedAsset,\n                                \" - \",\n                                assetName,\n                                \" - \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/token/\" + element.asset + \"?stake=\" + props.stake,\n                                    children: \"View\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 120\n                                }, this)\n                            ]\n                        }, decodedAsset, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n                            lineNumber: 51,\n                            columnNumber: 38\n                        }, this));\n                    }\n                    setDisplayedAssets(display);\n                } else {\n                    setDisplayedAssets(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"value\",\n                        children: \"No matches\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n                        lineNumber: 57,\n                        columnNumber: 40\n                    }, this));\n                }\n            } else {\n                if (assets != null) {\n                    let display = [];\n                    for(let i = 0; i < 100; i++){\n                        let assetName = assets[i].asset.substring(56);\n                        let decodedAsset = Buffer.from(assetName, \"hex\").toString();\n                        display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid-item-ft\",\n                            children: [\n                                decodedAsset,\n                                \" - \",\n                                assetName,\n                                \" - \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/token/\" + assets[i].asset + \"?stake=\" + props.stake,\n                                    children: \"View\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 121\n                                }, this)\n                            ]\n                        }, decodedAsset, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n                            lineNumber: 69,\n                            columnNumber: 38\n                        }, this));\n                    }\n                    setDisplayedAssets(display);\n                }\n            }\n        }\n        func();\n    }, [\n        searchQuery\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        async function getAssetPageFromBlockfrost() {\n            if (props == null || props.policy == null) {\n            // do nothing\n            } else {\n                let policy = props.policy;\n                //setTokens(assets);\n                let allAssets = await loadAllTokenData(policy);\n                setAssets(allAssets);\n                setTotal(allAssets.length);\n                let display = [];\n                for(let i = 0; i < 100; i++){\n                    let assetName = allAssets[i].asset.substring(56);\n                    let decodedAsset = Buffer.from(assetName, \"hex\").toString();\n                    if (decodedAsset != \"\" && assetName != \"\") {\n                        display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid-item-ft\",\n                            children: [\n                                decodedAsset,\n                                \" - \",\n                                assetName,\n                                \" - \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/token/\" + allAssets[i].asset + \"?stake=\" + props.stake,\n                                    children: \"View\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n                                    lineNumber: 102,\n                                    columnNumber: 115\n                                }, this)\n                            ]\n                        }, assetName, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n                            lineNumber: 102,\n                            columnNumber: 38\n                        }, this));\n                    }\n                }\n                setDisplayedAssets(display);\n            }\n        }\n        getAssetPageFromBlockfrost();\n    }, [\n        props\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        function setDisplay() {\n            if (assets != null) {\n                let display = [];\n                for(let i = minIndex; i < maxIndex; i++){\n                    let assetName = assets[i].asset.substring(56);\n                    let token = new _token__WEBPACK_IMPORTED_MODULE_5__[\"default\"](assetName, asset[i].substring(0, 56), asset[i].quantity);\n                    token.metadata = token.getMetadata();\n                    token.ipfs = token.getIpfsFromMetadata();\n                }\n            }\n        }\n        setDisplay();\n    }, [\n        assets\n    ]);\n    async function loadAllTokenData(policy) {\n        let page = 1;\n        let allData = [];\n        while(true){\n            const data = await loadTokenData(policy, page);\n            if (!data) {\n                break;\n            }\n            allData = allData.concat(data);\n            if (data.length === 0) {\n                break;\n            }\n            // increment page\n            page++;\n        }\n        return allData;\n    }\n    // fetch token metadata from blockfrost\n    async function loadTokenData(policy, page) {\n        try {\n            const data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/policy/\" + policy + \"?page=\" + page, {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Collection\"\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n                lineNumber: 179,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: [\n                    \"Showing results: \",\n                    displayedAssets.length,\n                    \" of \",\n                    total\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n                lineNumber: 179,\n                columnNumber: 36\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"policy-search\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"setting-button\",\n                        children: \"Next\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n                        lineNumber: 181,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"searchForm\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"search-input\",\n                            placeholder: \"Search in collection by Asset ID, Asset Name or Asset Name decoded...\",\n                            value: searchQuery,\n                            onChange: (event)=>setSearchQuery(event.target.value.toLowerCase())\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n                            lineNumber: 185,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n                        lineNumber: 184,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n                lineNumber: 180,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid-ft\",\n                children: displayedAssets\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n                lineNumber: 195,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n        lineNumber: 178,\n        columnNumber: 9\n    }, this);\n}\n_s(Collection, \"cvNVRCOpSy2B4bwq20rglYt0gwY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Collection;\nvar _c;\n$RefreshReg$(_c, \"Collection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29sbGVjdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDRjtBQUNXO0FBQ0c7QUFDZjtBQUU1Qiw2RUFBNkU7QUFDOUQsU0FBU00sV0FBV0MsS0FBSyxFQUFDOztJQUVyQyxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0wsK0NBQVFBO0lBQ3BDLGdEQUFnRDtJQUNoRCxNQUFNLENBQUNNLGFBQWFDLGVBQWUsR0FBR1AsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDUSxRQUFRQyxVQUFVLEdBQUdULCtDQUFRQSxDQUFDLElBQUk7SUFDekMsTUFBTSxDQUFDVSxpQkFBaUJDLG1CQUFtQixHQUFHWCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3pELE1BQU0sQ0FBQ1ksU0FBU0MsV0FBVyxHQUFHYiwrQ0FBUUE7SUFDdEMsTUFBTSxDQUFDYyxPQUFPQyxTQUFTLEdBQUdmLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ2dCLFVBQVVDLFlBQVksR0FBR2pCLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ2tCLFVBQVVDLFlBQVksR0FBR25CLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU1vQixTQUFTdEIsc0RBQVNBO0lBR3hCQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ1osU0FBU3NCLE9BQU07WUFDWCxJQUFHZixZQUFZZ0IsTUFBTSxHQUFFLEdBQUU7Z0JBQ3JCLElBQUlDLFVBQVUsRUFBRTtnQkFDaEIsSUFBSUMsZUFBZTtnQkFFbkIsZUFBZTtnQkFDZixLQUFJLE1BQU1DLFdBQVdqQixPQUFPO29CQUN4QixJQUFJa0IsWUFBWSxRQUFTQyxLQUFLLENBQUVDLFNBQVMsQ0FBQztvQkFDMUNKLGVBQWVLLE1BQU1BLENBQUNDLElBQUksQ0FBQ0osV0FBVyxPQUFPSyxRQUFRO29CQUVyRCxJQUFJQyxVQUFVLFFBQVNMLEtBQUssQ0FBRU0sV0FBVztvQkFDekMsSUFBSUMsYUFBYVIsVUFBVU8sV0FBVztvQkFDdEMsSUFBSUUsZ0JBQWdCWCxhQUFhUyxXQUFXO29CQUU1QyxJQUFHLFFBQVVHLFVBQVUsQ0FBQzlCLGdCQUFnQjZCLGNBQWNDLFVBQVUsQ0FBQzlCLGdCQUFnQjRCLFdBQVdFLFVBQVUsQ0FBQzlCLGNBQWE7d0JBQ2hIaUIsUUFBUWMsSUFBSSxDQUFFWjtvQkFDbEIsQ0FBQztnQkFFTDtnQkFDQSxrQkFBa0I7Z0JBQ2xCLElBQUdGLFFBQVFELE1BQU0sSUFBSSxHQUFFO29CQUNuQixJQUFJZ0IsVUFBVSxFQUFFO29CQUVoQixLQUFJLE1BQU1iLFdBQVdGLFFBQVE7d0JBQ3pCLElBQUlHLFlBQVksUUFBU0MsS0FBSyxDQUFFQyxTQUFTLENBQUM7d0JBQzFDSixlQUFlSyxNQUFNQSxDQUFDQyxJQUFJLENBQUNKLFdBQVcsT0FBT0ssUUFBUTt3QkFFckRPLFFBQVFELElBQUksZUFBQyw4REFBQ0U7NEJBQXlCQyxXQUFVOztnQ0FBZ0JoQjtnQ0FBYTtnQ0FBSUU7Z0NBQVU7OENBQUcsOERBQUM3QixrREFBSUE7b0NBQUM0QyxNQUFNLFlBQVVoQixRQUFRRSxLQUFLLEdBQUMsWUFBVXhCLE1BQU11QyxLQUFLOzhDQUFFOzs7Ozs7OzJCQUFqSWxCOzs7OztvQkFDN0I7b0JBQ0FiLG1CQUFtQjJCO2dCQUN2QixPQUVJO29CQUNBM0IsaUNBQW1CLDhEQUFDNEI7d0JBQUlDLFdBQVU7a0NBQVE7Ozs7OztnQkFDOUMsQ0FBQztZQUVMLE9BRUk7Z0JBQ0EsSUFBR2hDLFVBQVUsSUFBSSxFQUFDO29CQUNkLElBQUk4QixVQUFVLEVBQUU7b0JBQ2hCLElBQUksSUFBSUssSUFBSSxHQUFHQSxJQUFFLEtBQUtBLElBQUk7d0JBQ3RCLElBQUlqQixZQUFZLE1BQU8sQ0FBQ2lCLEVBQUUsQ0FBQ2hCLEtBQUssQ0FBRUMsU0FBUyxDQUFDO3dCQUM1QyxJQUFJSixlQUFlSyxNQUFNQSxDQUFDQyxJQUFJLENBQUNKLFdBQVcsT0FBT0ssUUFBUTt3QkFFekRPLFFBQVFELElBQUksZUFBQyw4REFBQ0U7NEJBQTBCQyxXQUFVOztnQ0FBZ0JoQjtnQ0FBYTtnQ0FBSUU7Z0NBQVU7OENBQUcsOERBQUM3QixrREFBSUE7b0NBQUM0QyxNQUFNLFlBQVVqQyxNQUFNLENBQUNtQyxFQUFFLENBQUNoQixLQUFLLEdBQUMsWUFBVXhCLE1BQU11QyxLQUFLOzhDQUFFOzs7Ozs7OzJCQUFwSWxCOzs7OztvQkFDN0I7b0JBQ0FiLG1CQUFtQjJCO2dCQUN2QixDQUFDO1lBQ0wsQ0FBQztRQUNMO1FBQ0FqQjtJQUNKLEdBQUc7UUFBQ2Y7S0FBWTtJQUdoQlAsZ0RBQVNBLENBQUMsSUFBTTtRQUNaLGVBQWU2Qyw2QkFBNEI7WUFDdkMsSUFBR3pDLFNBQVMsSUFBSSxJQUFJQSxNQUFNMEMsTUFBTSxJQUFJLElBQUksRUFBQztZQUNyQyxhQUFhO1lBQ2pCLE9BQ0k7Z0JBQ0EsSUFBSUEsU0FBUzFDLE1BQU0wQyxNQUFNO2dCQUV6QixvQkFBb0I7Z0JBRXBCLElBQUlDLFlBQVksTUFBTUMsaUJBQWlCRjtnQkFFdkNwQyxVQUFVcUM7Z0JBQ1YvQixTQUFTK0IsVUFBVXhCLE1BQU07Z0JBRXpCLElBQUlnQixVQUFVLEVBQUU7Z0JBR2hCLElBQUksSUFBSUssSUFBSSxHQUFHQSxJQUFFLEtBQUtBLElBQUk7b0JBQ3RCLElBQUlqQixZQUFZLFNBQVUsQ0FBQ2lCLEVBQUUsQ0FBQ2hCLEtBQUssQ0FBRUMsU0FBUyxDQUFDO29CQUMvQyxJQUFJSixlQUFlSyxNQUFNQSxDQUFDQyxJQUFJLENBQUNKLFdBQVcsT0FBT0ssUUFBUTtvQkFFekQsSUFBR1AsZ0JBQWdCLE1BQU1FLGFBQWEsSUFBRzt3QkFDckNZLFFBQVFELElBQUksZUFBQyw4REFBQ0U7NEJBQUlDLFdBQVU7O2dDQUFnQ2hCO2dDQUFhO2dDQUFJRTtnQ0FBVTs4Q0FBRyw4REFBQzdCLGtEQUFJQTtvQ0FBQzRDLE1BQU0sWUFBVUssU0FBUyxDQUFDSCxFQUFFLENBQUNoQixLQUFLLEdBQUMsWUFBVXhCLE1BQU11QyxLQUFLOzhDQUFFOzs7Ozs7OzJCQUExR2hCOzs7OztvQkFFcEQsQ0FBQztnQkFDTDtnQkFFQWYsbUJBQW1CMkI7WUFFdkIsQ0FBQztRQUNMO1FBQ0FNO0lBQ0osR0FBRztRQUFDekM7S0FBTTtJQUdWSixnREFBU0EsQ0FBQyxJQUFNO1FBQ1osU0FBU2lELGFBQVk7WUFDakIsSUFBR3hDLFVBQVUsSUFBSSxFQUFDO2dCQUVkLElBQUk4QixVQUFVLEVBQUU7Z0JBQ2hCLElBQUksSUFBSUssSUFBSTNCLFVBQVUyQixJQUFHekIsVUFBVXlCLElBQUk7b0JBRW5DLElBQUlqQixZQUFZLE1BQU8sQ0FBQ2lCLEVBQUUsQ0FBQ2hCLEtBQUssQ0FBRUMsU0FBUyxDQUFDO29CQUU1QyxJQUFJcUIsUUFBUSxJQUFJaEQsOENBQUtBLENBQUN5QixXQUFXQyxLQUFLLENBQUNnQixFQUFFLENBQUNmLFNBQVMsQ0FBQyxHQUFFLEtBQUtELEtBQUssQ0FBQ2dCLEVBQUUsQ0FBQ08sUUFBUTtvQkFDNUVELE1BQU1FLFFBQVEsR0FBR0YsTUFBTUcsV0FBVztvQkFDbENILE1BQU1JLElBQUksR0FBR0osTUFBTUssbUJBQW1CO2dCQUcxQztZQUNKLENBQUM7UUFDTDtRQUNBTjtJQUNKLEdBQUc7UUFBQ3hDO0tBQU87SUFFWCxlQUFldUMsaUJBQWlCRixNQUFNLEVBQUU7UUFDcEMsSUFBSVUsT0FBTztRQUNYLElBQUlDLFVBQVUsRUFBRTtRQUVoQixNQUFPLElBQUksQ0FBRTtZQUNYLE1BQU1DLE9BQU8sTUFBTUMsY0FBY2IsUUFBUVU7WUFDekMsSUFBSSxDQUFDRSxNQUFNO2dCQUVULEtBQU07WUFDUixDQUFDO1lBQ0RELFVBQVVBLFFBQVFHLE1BQU0sQ0FBQ0Y7WUFFekIsSUFBSUEsS0FBS25DLE1BQU0sS0FBSyxHQUFHO2dCQUVyQixLQUFNO1lBQ1IsQ0FBQztZQUVELGlCQUFpQjtZQUNqQmlDO1FBQ0Y7UUFFQSxPQUFPQztJQUNUO0lBSUYsdUNBQXVDO0lBQ3ZDLGVBQWVFLGNBQWNiLE1BQU0sRUFBRVUsSUFBSSxFQUFDO1FBQ3RDLElBQUc7WUFDQyxNQUFNRSxPQUFPLE1BQU1HLE1BQU0sZ0VBQThEZixTQUFPLFdBQVNVLE1BQ3ZHO2dCQUFDTSxTQUFRO29CQUFDQyxZQUFZO29CQUEyQyxpQkFBaUI7Z0JBQWtCO1lBQUM7WUFDckcsTUFBTUMsTUFBTSxNQUFNTixLQUFLTyxJQUFJO1lBQzNCLElBQUdQLEtBQUtRLE1BQU0sSUFBSSxLQUFJO2dCQUNsQixPQUFPLElBQUk7WUFDZixDQUFDO1lBQ0QsT0FBT0Y7UUFDWCxFQUFDLE9BQU1HLE9BQU07WUFDVCxPQUFPLElBQUk7UUFDZjtJQUNKO0lBR0UscUJBQ0UsOERBQUMzQjs7MEJBQ0MsOERBQUM0QjswQkFBTTs7Ozs7OzBCQUFrQiw4REFBQ0E7O29CQUFNO29CQUFrQnpELGdCQUFnQlksTUFBTTtvQkFBQztvQkFBS1I7Ozs7Ozs7MEJBQzlFLDhEQUFDeUI7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDNEI7d0JBQU81QixXQUFVO2tDQUFpQjs7Ozs7O2tDQUduQyw4REFBQzZCO3dCQUFLN0IsV0FBVTtrQ0FDZCw0RUFBQzhCOzRCQUNDQyxNQUFLOzRCQUNML0IsV0FBVTs0QkFDVmdDLGFBQVk7NEJBQ1pDLE9BQU9uRTs0QkFDUG9FLFVBQVUsQ0FBQ0MsUUFBVXBFLGVBQWUsTUFBT3FFLE1BQU0sQ0FBQ0gsS0FBSyxDQUFFeEMsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSzFFLDhEQUFDTTtnQkFBSUMsV0FBVTswQkFBVzlCOzs7Ozs7Ozs7Ozs7QUFJcEMsQ0FBQztHQS9MdUJSOztRQVlMSixrREFBU0E7OztLQVpKSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY29sbGVjdGlvbi5qcz85YjQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBUb2tlbiBmcm9tIFwiLi90b2tlblwiO1xuXG4vLyB0YWtlcyBhIHBvbGljeSBhbmQgdXNlcyBibG9ja2Zyb3N0IHRvIHJldHVybiBhc3NldCBkYXRhZnJvbSB0aGUgY29sbGVjdGlvblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29sbGVjdGlvbihwcm9wcyl7XG5cbiAgICBjb25zdCBbdG9rZW5zLCBzZXRUb2tlbnNdID0gdXNlU3RhdGUoKTtcbiAgICAvLyByZWFjdCBob29rIHVzZWQgdG8gc3RvcmUgdXNlciBpbnB1dGVkIHN0cmluZ3NcbiAgICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbYXNzZXRzLCBzZXRBc3NldHNdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2Rpc3BsYXllZEFzc2V0cywgc2V0RGlzcGxheWVkQXNzZXRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFt0b3RhbCwgc2V0VG90YWxdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW21pbkluZGV4LCBzZXRNaW5JbmRleF0gPSB1c2VTdGF0ZSgwKVxuICAgIGNvbnN0IFttYXhJbmRleCwgc2V0TWF4SW5kZXhdID0gdXNlU3RhdGUoMjApO1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bmMoKXtcbiAgICAgICAgICAgIGlmKHNlYXJjaFF1ZXJ5Lmxlbmd0aCA+MCl7XG4gICAgICAgICAgICAgICAgbGV0IG1hdGNoZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBsZXQgZGVjb2RlZEFzc2V0ID0gJyc7XG4gICAgXG4gICAgICAgICAgICAgICAgLy8gZmluZCBtYXRjaGVzXG4gICAgICAgICAgICAgICAgZm9yKGNvbnN0IGVsZW1lbnQgb2YgYXNzZXRzKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFzc2V0TmFtZSA9IChlbGVtZW50LmFzc2V0KS5zdWJzdHJpbmcoNTYpO1xuICAgICAgICAgICAgICAgICAgICBkZWNvZGVkQXNzZXQgPSBCdWZmZXIuZnJvbShhc3NldE5hbWUsICdoZXgnKS50b1N0cmluZygpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBhc3NldElkID0gKGVsZW1lbnQuYXNzZXQpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhc3NldE5hbWVMID0gYXNzZXROYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkZWNvZGVkQXNzZXRMID0gZGVjb2RlZEFzc2V0LnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoKGFzc2V0SWQpLnN0YXJ0c1dpdGgoc2VhcmNoUXVlcnkpIHx8IGRlY29kZWRBc3NldEwuc3RhcnRzV2l0aChzZWFyY2hRdWVyeSkgfHwgYXNzZXROYW1lTC5zdGFydHNXaXRoKHNlYXJjaFF1ZXJ5KSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVzLnB1c2goKGVsZW1lbnQpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBkaXNwbGF5IG1hdGNoZXNcbiAgICAgICAgICAgICAgICBpZihtYXRjaGVzLmxlbmd0aCAhPSAwKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpc3BsYXkgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IoY29uc3QgZWxlbWVudCBvZiBtYXRjaGVzKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhc3NldE5hbWUgPSAoZWxlbWVudC5hc3NldCkuc3Vic3RyaW5nKDU2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kZWRBc3NldCA9IEJ1ZmZlci5mcm9tKGFzc2V0TmFtZSwgJ2hleCcpLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXkucHVzaCg8ZGl2IGtleSA9IHtkZWNvZGVkQXNzZXR9IGNsYXNzTmFtZT1cImdyaWQtaXRlbS1mdFwiPntkZWNvZGVkQXNzZXR9IC0ge2Fzc2V0TmFtZX0gLSA8TGluayBocmVmPXsnL3Rva2VuLycrZWxlbWVudC5hc3NldCsnP3N0YWtlPScrcHJvcHMuc3Rha2V9PlZpZXc8L0xpbms+PC9kaXY+KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNldERpc3BsYXllZEFzc2V0cyhkaXNwbGF5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gbm8gbWF0Y2hlc1xuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHNldERpc3BsYXllZEFzc2V0cyg8ZGl2IGNsYXNzTmFtZT1cInZhbHVlXCI+Tm8gbWF0Y2hlczwvZGl2PilcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG5vIHNlYXJjaCBxdWVyeVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBpZihhc3NldHMgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXNwbGF5ID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGk8MTAwOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFzc2V0TmFtZSA9IChhc3NldHNbaV0uYXNzZXQpLnN1YnN0cmluZyg1Nik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGVjb2RlZEFzc2V0ID0gQnVmZmVyLmZyb20oYXNzZXROYW1lLCAnaGV4JykudG9TdHJpbmcoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheS5wdXNoKDxkaXYga2V5ID0ge2RlY29kZWRBc3NldH0gIGNsYXNzTmFtZT1cImdyaWQtaXRlbS1mdFwiPntkZWNvZGVkQXNzZXR9IC0ge2Fzc2V0TmFtZX0gLSA8TGluayBocmVmPXsnL3Rva2VuLycrYXNzZXRzW2ldLmFzc2V0Kyc/c3Rha2U9Jytwcm9wcy5zdGFrZX0+VmlldzwvTGluaz48L2Rpdj4pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2V0RGlzcGxheWVkQXNzZXRzKGRpc3BsYXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jKCk7XG4gICAgfSwgW3NlYXJjaFF1ZXJ5XSlcblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZ2V0QXNzZXRQYWdlRnJvbUJsb2NrZnJvc3QoKXtcbiAgICAgICAgICAgIGlmKHByb3BzID09IG51bGwgfHwgcHJvcHMucG9saWN5ID09IG51bGwpe1xuICAgICAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgbGV0IHBvbGljeSA9IHByb3BzLnBvbGljeTtcblxuICAgICAgICAgICAgICAgIC8vc2V0VG9rZW5zKGFzc2V0cyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgYWxsQXNzZXRzID0gYXdhaXQgbG9hZEFsbFRva2VuRGF0YShwb2xpY3kpO1xuXG4gICAgICAgICAgICAgICAgc2V0QXNzZXRzKGFsbEFzc2V0cyk7XG4gICAgICAgICAgICAgICAgc2V0VG90YWwoYWxsQXNzZXRzLmxlbmd0aCk7XG5cbiAgICAgICAgICAgICAgICBsZXQgZGlzcGxheSA9IFtdO1xuXG5cbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpPDEwMDsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFzc2V0TmFtZSA9IChhbGxBc3NldHNbaV0uYXNzZXQpLnN1YnN0cmluZyg1Nik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkZWNvZGVkQXNzZXQgPSBCdWZmZXIuZnJvbShhc3NldE5hbWUsICdoZXgnKS50b1N0cmluZygpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKGRlY29kZWRBc3NldCAhPSAnJyAmJiBhc3NldE5hbWUgIT0gJycpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheS5wdXNoKDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtLWZ0XCIga2V5PXthc3NldE5hbWV9PntkZWNvZGVkQXNzZXR9IC0ge2Fzc2V0TmFtZX0gLSA8TGluayBocmVmPXsnL3Rva2VuLycrYWxsQXNzZXRzW2ldLmFzc2V0Kyc/c3Rha2U9Jytwcm9wcy5zdGFrZX0+VmlldzwvTGluaz48L2Rpdj4pXG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNldERpc3BsYXllZEFzc2V0cyhkaXNwbGF5KTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGdldEFzc2V0UGFnZUZyb21CbG9ja2Zyb3N0KClcbiAgICB9LCBbcHJvcHNdKVxuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmdW5jdGlvbiBzZXREaXNwbGF5KCl7XG4gICAgICAgICAgICBpZihhc3NldHMgIT0gbnVsbCl7XG5cbiAgICAgICAgICAgICAgICBsZXQgZGlzcGxheSA9IFtdO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IG1pbkluZGV4OyBpIDxtYXhJbmRleDsgaSsrKXtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgYXNzZXROYW1lID0gKGFzc2V0c1tpXS5hc3NldCkuc3Vic3RyaW5nKDU2KTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9rZW4gPSBuZXcgVG9rZW4oYXNzZXROYW1lLCBhc3NldFtpXS5zdWJzdHJpbmcoMCw1NiksIGFzc2V0W2ldLnF1YW50aXR5KTtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW4ubWV0YWRhdGEgPSB0b2tlbi5nZXRNZXRhZGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICB0b2tlbi5pcGZzID0gdG9rZW4uZ2V0SXBmc0Zyb21NZXRhZGF0YSgpO1xuXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2V0RGlzcGxheSgpO1xuICAgIH0sIFthc3NldHNdKVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gbG9hZEFsbFRva2VuRGF0YShwb2xpY3kpIHtcbiAgICAgICAgbGV0IHBhZ2UgPSAxO1xuICAgICAgICBsZXQgYWxsRGF0YSA9IFtdO1xuICAgICAgXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGxvYWRUb2tlbkRhdGEocG9saWN5LCBwYWdlKTtcbiAgICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIC8vIGhhbmRsZSBlcnJvclxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFsbERhdGEgPSBhbGxEYXRhLmNvbmNhdChkYXRhKTtcbiAgICAgIFxuICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gd2UndmUgcmVhY2hlZCB0aGUgbGFzdCBwYWdlXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLy8gaW5jcmVtZW50IHBhZ2VcbiAgICAgICAgICBwYWdlKys7XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICByZXR1cm4gYWxsRGF0YTtcbiAgICAgIH1cbiAgICAgIFxuXG4gICAgICBcbiAgICAvLyBmZXRjaCB0b2tlbiBtZXRhZGF0YSBmcm9tIGJsb2NrZnJvc3RcbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkVG9rZW5EYXRhKHBvbGljeSwgcGFnZSl7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9jYXJkYW5vLW1haW5uZXQuYmxvY2tmcm9zdC5pby9hcGkvdjAvYXNzZXRzL3BvbGljeS8nK3BvbGljeSsnP3BhZ2U9JytwYWdlLFxuICAgICAgICAgICAge2hlYWRlcnM6e3Byb2plY3RfaWQ6ICdtYWlubmV0b1c2MVlZU2lPb0xTYU5RNmR6VHJrQUc0YXpYVklydmgnLCAnY2FjaGUtY29udHJvbCc6ICdtYXgtYWdlPTMxNTM2MDAwJ319KTtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGRhdGEuanNvbigpO1xuICAgICAgICAgICAgaWYoZGF0YS5zdGF0dXMgIT0gMjAwKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAgIFxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbD5Db2xsZWN0aW9uPC9sYWJlbD48bGFiZWw+U2hvd2luZyByZXN1bHRzOiB7ZGlzcGxheWVkQXNzZXRzLmxlbmd0aH0gb2Yge3RvdGFsfTwvbGFiZWw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xpY3ktc2VhcmNoXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNldHRpbmctYnV0dG9uXCI+XG4gICAgICAgICAgICAgIE5leHRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwic2VhcmNoRm9ybVwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWlucHV0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBpbiBjb2xsZWN0aW9uIGJ5IEFzc2V0IElELCBBc3NldCBOYW1lIG9yIEFzc2V0IE5hbWUgZGVjb2RlZC4uLlwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFF1ZXJ5fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFNlYXJjaFF1ZXJ5KChldmVudC50YXJnZXQudmFsdWUpLnRvTG93ZXJDYXNlKCkpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWZ0XCI+e2Rpc3BsYXllZEFzc2V0c308L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgICAgXG59Il0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVG9rZW4iLCJDb2xsZWN0aW9uIiwicHJvcHMiLCJ0b2tlbnMiLCJzZXRUb2tlbnMiLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5IiwiYXNzZXRzIiwic2V0QXNzZXRzIiwiZGlzcGxheWVkQXNzZXRzIiwic2V0RGlzcGxheWVkQXNzZXRzIiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJ0b3RhbCIsInNldFRvdGFsIiwibWluSW5kZXgiLCJzZXRNaW5JbmRleCIsIm1heEluZGV4Iiwic2V0TWF4SW5kZXgiLCJyb3V0ZXIiLCJmdW5jIiwibGVuZ3RoIiwibWF0Y2hlcyIsImRlY29kZWRBc3NldCIsImVsZW1lbnQiLCJhc3NldE5hbWUiLCJhc3NldCIsInN1YnN0cmluZyIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsImFzc2V0SWQiLCJ0b0xvd2VyQ2FzZSIsImFzc2V0TmFtZUwiLCJkZWNvZGVkQXNzZXRMIiwic3RhcnRzV2l0aCIsInB1c2giLCJkaXNwbGF5IiwiZGl2IiwiY2xhc3NOYW1lIiwiaHJlZiIsInN0YWtlIiwiaSIsImdldEFzc2V0UGFnZUZyb21CbG9ja2Zyb3N0IiwicG9saWN5IiwiYWxsQXNzZXRzIiwibG9hZEFsbFRva2VuRGF0YSIsInNldERpc3BsYXkiLCJ0b2tlbiIsInF1YW50aXR5IiwibWV0YWRhdGEiLCJnZXRNZXRhZGF0YSIsImlwZnMiLCJnZXRJcGZzRnJvbU1ldGFkYXRhIiwicGFnZSIsImFsbERhdGEiLCJkYXRhIiwibG9hZFRva2VuRGF0YSIsImNvbmNhdCIsImZldGNoIiwiaGVhZGVycyIsInByb2plY3RfaWQiLCJyZXMiLCJqc29uIiwic3RhdHVzIiwiZXJyb3IiLCJsYWJlbCIsImJ1dHRvbiIsImZvcm0iLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/collection.js\n"));

/***/ })

});