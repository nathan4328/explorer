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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Collection; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./token */ \"./src/pages/token.js\");\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/next/dist/compiled/buffer/index.js\")[\"Buffer\"];\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n// takes a policy and uses blockfrost to return asset datafrom the collection\nfunction Collection(props) {\n    _s();\n    const [tokens, setTokens] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    // react hook used to store user inputed strings\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [assets, setAssets] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const [displayedAssets, setDisplayedAssets] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const [total, setTotal] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const [minIndex, setMinIndex] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const [maxIndex, setMaxIndex] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(20);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        function func() {\n            if (searchQuery.length > 0) {\n                let matches = [];\n                let decodedAsset = \"\";\n                // find matches\n                for (const element of assets){\n                    let assetName = element.asset.substring(56);\n                    decodedAsset = Buffer.from(assetName, \"hex\").toString();\n                    let assetId = element.asset.toLowerCase();\n                    let assetNameL = assetName.toLowerCase();\n                    let decodedAssetL = decodedAsset.toLowerCase();\n                    if (assetId.startsWith(searchQuery) || decodedAssetL.startsWith(searchQuery) || assetNameL.startsWith(searchQuery)) {\n                        matches.push(element);\n                    }\n                }\n                // display matches\n                if (matches.length != 0) {\n                    let display = [];\n                    for (const element of matches){\n                        let assetName = element.asset.substring(56);\n                        decodedAsset = Buffer.from(assetName, \"hex\").toString();\n                        display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid-item-ft\",\n                            children: [\n                                decodedAsset,\n                                \" - \",\n                                assetName,\n                                \" - \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/token/\" + element.asset + \"?stake=\" + props.stake,\n                                    children: \"View\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 120\n                                }, this)\n                            ]\n                        }, decodedAsset, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n                            lineNumber: 51,\n                            columnNumber: 38\n                        }, this));\n                    }\n                    setDisplayedAssets(display);\n                } else {\n                    setDisplayedAssets(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"value\",\n                        children: \"No matches\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n                        lineNumber: 57,\n                        columnNumber: 40\n                    }, this));\n                }\n            } else {}\n        }\n        func();\n    }, [\n        searchQuery\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        async function getAssetPageFromBlockfrost() {\n            if (props == null || props.policy == null) {\n            // do nothing\n            } else {\n                let policy = props.policy;\n                //setTokens(assets);\n                let allAssets = await loadAllTokenData(policy);\n                setAssets(allAssets);\n                setTotal(allAssets.length);\n            }\n        }\n        getAssetPageFromBlockfrost();\n    }, [\n        props\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        function setDisplay() {\n            if (assets != null) {\n                let display = [];\n                for(let i = minIndex; i < maxIndex; i++){\n                    let assetName = assets[i].asset.substring(56);\n                    let policy = assets[i].asset.substring(0, 56);\n                    let token = new _token__WEBPACK_IMPORTED_MODULE_5__[\"default\"](assetName, policy, assets[i].quantity);\n                    token.metadata = token.getMetadata();\n                    token.ipfs = token.getIpfsFromMetadata();\n                    display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid-item\",\n                        children: token.asset_name\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n                        lineNumber: 103,\n                        columnNumber: 34\n                    }, this));\n                }\n                setDisplayedAssets(display);\n            }\n        }\n        setDisplay();\n    }, [\n        assets\n    ]);\n    async function loadAllTokenData(policy) {\n        let page = 1;\n        let allData = [];\n        while(true){\n            const data = await loadTokenData(policy, page);\n            if (!data) {\n                break;\n            }\n            allData = allData.concat(data);\n            if (data.length === 0) {\n                break;\n            }\n            // increment page\n            page++;\n        }\n        return allData;\n    }\n    // fetch token metadata from blockfrost\n    async function loadTokenData(policy, page) {\n        try {\n            const data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/policy/\" + policy + \"?page=\" + page, {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Collection\"\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n                lineNumber: 155,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: [\n                    \"Showing results: \",\n                    displayedAssets.length,\n                    \" of \",\n                    total\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n                lineNumber: 155,\n                columnNumber: 36\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"policy-search\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"setting-button\",\n                        children: \"Next\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n                        lineNumber: 157,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"searchForm\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"search-input\",\n                            placeholder: \"Search in collection by Asset ID, Asset Name or Asset Name decoded...\",\n                            value: searchQuery,\n                            onChange: (event)=>setSearchQuery(event.target.value.toLowerCase())\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n                            lineNumber: 161,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n                        lineNumber: 160,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n                lineNumber: 156,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid-ft\",\n                children: displayedAssets\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n                lineNumber: 171,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n        lineNumber: 154,\n        columnNumber: 9\n    }, this);\n}\n_s(Collection, \"cvNVRCOpSy2B4bwq20rglYt0gwY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Collection;\nvar _c;\n$RefreshReg$(_c, \"Collection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFFQSxPQUFPQztJQUNUO0lBSUYsdUNBQXVDO0lBQ3ZDLGVBQWVFLGNBQWNmLE1BQU0sRUFBRVksSUFBSSxFQUFDO1FBQ3RDLElBQUc7WUFDQyxNQUFNRSxPQUFPLE1BQU1HLE1BQU0sZ0VBQThEakIsU0FBTyxXQUFTWSxNQUN2RztnQkFBQ00sU0FBUTtvQkFBQ0MsWUFBWTtvQkFBMkMsaUJBQWlCO2dCQUFrQjtZQUFDO1lBQ3JHLE1BQU1DLE1BQU0sTUFBTU4sS0FBS08sSUFBSTtZQUMzQixJQUFHUCxLQUFLUSxNQUFNLElBQUksS0FBSTtnQkFDbEIsT0FBTyxJQUFJO1lBQ2YsQ0FBQztZQUNELE9BQU9GO1FBQ1gsRUFBQyxPQUFNRyxPQUFNO1lBQ1QsT0FBTyxJQUFJO1FBQ2Y7SUFDSjtJQUdFLHFCQUNFLDhEQUFDNUI7OzBCQUNDLDhEQUFDNkI7MEJBQU07Ozs7OzswQkFBa0IsOERBQUNBOztvQkFBTTtvQkFBa0IxRCxnQkFBZ0JZLE1BQU07b0JBQUM7b0JBQUtSOzs7Ozs7OzBCQUM5RSw4REFBQ3lCO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQzZCO3dCQUFPN0IsV0FBVTtrQ0FBaUI7Ozs7OztrQ0FHbkMsOERBQUM4Qjt3QkFBSzlCLFdBQVU7a0NBQ2QsNEVBQUMrQjs0QkFDQ0MsTUFBSzs0QkFDTGhDLFdBQVU7NEJBQ1ZpQyxhQUFZOzRCQUNaQyxPQUFPcEU7NEJBQ1BxRSxVQUFVLENBQUNDLFFBQVVyRSxlQUFlLE1BQU9zRSxNQUFNLENBQUNILEtBQUssQ0FBRXpDLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUsxRSw4REFBQ007Z0JBQUlDLFdBQVU7MEJBQVc5Qjs7Ozs7Ozs7Ozs7O0FBSXBDLENBQUM7R0F2S3VCUjs7UUFZTEosa0RBQVNBOzs7S0FaSkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NvbGxlY3Rpb24uanM/OWI0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgVG9rZW4gZnJvbSBcIi4vdG9rZW5cIjtcblxuLy8gdGFrZXMgYSBwb2xpY3kgYW5kIHVzZXMgYmxvY2tmcm9zdCB0byByZXR1cm4gYXNzZXQgZGF0YWZyb20gdGhlIGNvbGxlY3Rpb25cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbGxlY3Rpb24ocHJvcHMpe1xuXG4gICAgY29uc3QgW3Rva2Vucywgc2V0VG9rZW5zXSA9IHVzZVN0YXRlKCk7XG4gICAgLy8gcmVhY3QgaG9vayB1c2VkIHRvIHN0b3JlIHVzZXIgaW5wdXRlZCBzdHJpbmdzXG4gICAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2Fzc2V0cywgc2V0QXNzZXRzXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtkaXNwbGF5ZWRBc3NldHMsIHNldERpc3BsYXllZEFzc2V0c10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbdG90YWwsIHNldFRvdGFsXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFttaW5JbmRleCwgc2V0TWluSW5kZXhdID0gdXNlU3RhdGUoMClcbiAgICBjb25zdCBbbWF4SW5kZXgsIHNldE1heEluZGV4XSA9IHVzZVN0YXRlKDIwKTtcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmdW5jdGlvbiBmdW5jKCl7XG4gICAgICAgICAgICBpZihzZWFyY2hRdWVyeS5sZW5ndGggPjApe1xuICAgICAgICAgICAgICAgIGxldCBtYXRjaGVzID0gW107XG4gICAgICAgICAgICAgICAgbGV0IGRlY29kZWRBc3NldCA9ICcnO1xuICAgIFxuICAgICAgICAgICAgICAgIC8vIGZpbmQgbWF0Y2hlc1xuICAgICAgICAgICAgICAgIGZvcihjb25zdCBlbGVtZW50IG9mIGFzc2V0cyl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhc3NldE5hbWUgPSAoZWxlbWVudC5hc3NldCkuc3Vic3RyaW5nKDU2KTtcbiAgICAgICAgICAgICAgICAgICAgZGVjb2RlZEFzc2V0ID0gQnVmZmVyLmZyb20oYXNzZXROYW1lLCAnaGV4JykudG9TdHJpbmcoKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgYXNzZXRJZCA9IChlbGVtZW50LmFzc2V0KS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXNzZXROYW1lTCA9IGFzc2V0TmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGVjb2RlZEFzc2V0TCA9IGRlY29kZWRBc3NldC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKChhc3NldElkKS5zdGFydHNXaXRoKHNlYXJjaFF1ZXJ5KSB8fCBkZWNvZGVkQXNzZXRMLnN0YXJ0c1dpdGgoc2VhcmNoUXVlcnkpIHx8IGFzc2V0TmFtZUwuc3RhcnRzV2l0aChzZWFyY2hRdWVyeSkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKChlbGVtZW50KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZGlzcGxheSBtYXRjaGVzXG4gICAgICAgICAgICAgICAgaWYobWF0Y2hlcy5sZW5ndGggIT0gMCl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXNwbGF5ID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yKGNvbnN0IGVsZW1lbnQgb2YgbWF0Y2hlcyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXNzZXROYW1lID0gKGVsZW1lbnQuYXNzZXQpLnN1YnN0cmluZyg1Nik7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGVkQXNzZXQgPSBCdWZmZXIuZnJvbShhc3NldE5hbWUsICdoZXgnKS50b1N0cmluZygpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5LnB1c2goPGRpdiBrZXkgPSB7ZGVjb2RlZEFzc2V0fSBjbGFzc05hbWU9XCJncmlkLWl0ZW0tZnRcIj57ZGVjb2RlZEFzc2V0fSAtIHthc3NldE5hbWV9IC0gPExpbmsgaHJlZj17Jy90b2tlbi8nK2VsZW1lbnQuYXNzZXQrJz9zdGFrZT0nK3Byb3BzLnN0YWtlfT5WaWV3PC9MaW5rPjwvZGl2PilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZXREaXNwbGF5ZWRBc3NldHMoZGlzcGxheSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIG5vIG1hdGNoZXNcbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICBzZXREaXNwbGF5ZWRBc3NldHMoPGRpdiBjbGFzc05hbWU9XCJ2YWx1ZVwiPk5vIG1hdGNoZXM8L2Rpdj4pXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBubyBzZWFyY2ggcXVlcnlcbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuYygpO1xuICAgIH0sIFtzZWFyY2hRdWVyeV0pXG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGdldEFzc2V0UGFnZUZyb21CbG9ja2Zyb3N0KCl7XG4gICAgICAgICAgICBpZihwcm9wcyA9PSBudWxsIHx8IHByb3BzLnBvbGljeSA9PSBudWxsKXtcbiAgICAgICAgICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGxldCBwb2xpY3kgPSBwcm9wcy5wb2xpY3k7XG5cbiAgICAgICAgICAgICAgICAvL3NldFRva2Vucyhhc3NldHMpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGFsbEFzc2V0cyA9IGF3YWl0IGxvYWRBbGxUb2tlbkRhdGEocG9saWN5KTtcblxuICAgICAgICAgICAgICAgIHNldEFzc2V0cyhhbGxBc3NldHMpO1xuICAgICAgICAgICAgICAgIHNldFRvdGFsKGFsbEFzc2V0cy5sZW5ndGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGdldEFzc2V0UGFnZUZyb21CbG9ja2Zyb3N0KClcbiAgICB9LCBbcHJvcHNdKVxuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmdW5jdGlvbiBzZXREaXNwbGF5KCl7XG4gICAgICAgICAgICBpZihhc3NldHMgIT0gbnVsbCl7XG5cbiAgICAgICAgICAgICAgICBsZXQgZGlzcGxheSA9IFtdO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IG1pbkluZGV4OyBpIDxtYXhJbmRleDsgaSsrKXtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgYXNzZXROYW1lID0gKGFzc2V0c1tpXS5hc3NldCkuc3Vic3RyaW5nKDU2KTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvbGljeSA9IChhc3NldHNbaV0uYXNzZXQpLnN1YnN0cmluZygwLDU2KTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9rZW4gPSBuZXcgVG9rZW4oYXNzZXROYW1lLCBwb2xpY3ksIGFzc2V0c1tpXS5xdWFudGl0eSk7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuLm1ldGFkYXRhID0gdG9rZW4uZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW4uaXBmcyA9IHRva2VuLmdldElwZnNGcm9tTWV0YWRhdGEoKTtcblxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5LnB1c2goPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj57dG9rZW4uYXNzZXRfbmFtZX08L2Rpdj4pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldERpc3BsYXllZEFzc2V0cyhkaXNwbGF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZXREaXNwbGF5KCk7XG4gICAgfSwgW2Fzc2V0c10pXG5cbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkQWxsVG9rZW5EYXRhKHBvbGljeSkge1xuICAgICAgICBsZXQgcGFnZSA9IDE7XG4gICAgICAgIGxldCBhbGxEYXRhID0gW107XG4gICAgICBcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgbG9hZFRva2VuRGF0YShwb2xpY3ksIHBhZ2UpO1xuICAgICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgLy8gaGFuZGxlIGVycm9yXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgYWxsRGF0YSA9IGFsbERhdGEuY29uY2F0KGRhdGEpO1xuICAgICAgXG4gICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyB3ZSd2ZSByZWFjaGVkIHRoZSBsYXN0IHBhZ2VcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAvLyBpbmNyZW1lbnQgcGFnZVxuICAgICAgICAgIHBhZ2UrKztcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIHJldHVybiBhbGxEYXRhO1xuICAgICAgfVxuICAgICAgXG5cbiAgICAgIFxuICAgIC8vIGZldGNoIHRva2VuIG1ldGFkYXRhIGZyb20gYmxvY2tmcm9zdFxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRUb2tlbkRhdGEocG9saWN5LCBwYWdlKXtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCdodHRwczovL2NhcmRhbm8tbWFpbm5ldC5ibG9ja2Zyb3N0LmlvL2FwaS92MC9hc3NldHMvcG9saWN5LycrcG9saWN5Kyc/cGFnZT0nK3BhZ2UsXG4gICAgICAgICAgICB7aGVhZGVyczp7cHJvamVjdF9pZDogJ21haW5uZXRvVzYxWVlTaU9vTFNhTlE2ZHpUcmtBRzRhelhWSXJ2aCcsICdjYWNoZS1jb250cm9sJzogJ21heC1hZ2U9MzE1MzYwMDAnfX0pO1xuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZGF0YS5qc29uKCk7XG4gICAgICAgICAgICBpZihkYXRhLnN0YXR1cyAhPSAyMDApe1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgICAgXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsPkNvbGxlY3Rpb248L2xhYmVsPjxsYWJlbD5TaG93aW5nIHJlc3VsdHM6IHtkaXNwbGF5ZWRBc3NldHMubGVuZ3RofSBvZiB7dG90YWx9PC9sYWJlbD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvbGljeS1zZWFyY2hcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2V0dGluZy1idXR0b25cIj5cbiAgICAgICAgICAgICAgTmV4dFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJzZWFyY2hGb3JtXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2gtaW5wdXRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGluIGNvbGxlY3Rpb24gYnkgQXNzZXQgSUQsIEFzc2V0IE5hbWUgb3IgQXNzZXQgTmFtZSBkZWNvZGVkLi4uXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoUXVlcnl9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0U2VhcmNoUXVlcnkoKGV2ZW50LnRhcmdldC52YWx1ZSkudG9Mb3dlckNhc2UoKSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtZnRcIj57ZGlzcGxheWVkQXNzZXRzfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgICBcbn0iXSwibmFtZXMiOlsiSW1hZ2UiLCJMaW5rIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJUb2tlbiIsIkNvbGxlY3Rpb24iLCJwcm9wcyIsInRva2VucyIsInNldFRva2VucyIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJhc3NldHMiLCJzZXRBc3NldHMiLCJkaXNwbGF5ZWRBc3NldHMiLCJzZXREaXNwbGF5ZWRBc3NldHMiLCJyZXN1bHRzIiwic2V0UmVzdWx0cyIsInRvdGFsIiwic2V0VG90YWwiLCJtaW5JbmRleCIsInNldE1pbkluZGV4IiwibWF4SW5kZXgiLCJzZXRNYXhJbmRleCIsInJvdXRlciIsImZ1bmMiLCJsZW5ndGgiLCJtYXRjaGVzIiwiZGVjb2RlZEFzc2V0IiwiZWxlbWVudCIsImFzc2V0TmFtZSIsImFzc2V0Iiwic3Vic3RyaW5nIiwiQnVmZmVyIiwiZnJvbSIsInRvU3RyaW5nIiwiYXNzZXRJZCIsInRvTG93ZXJDYXNlIiwiYXNzZXROYW1lTCIsImRlY29kZWRBc3NldEwiLCJzdGFydHNXaXRoIiwicHVzaCIsImRpc3BsYXkiLCJkaXYiLCJjbGFzc05hbWUiLCJocmVmIiwic3Rha2UiLCJnZXRBc3NldFBhZ2VGcm9tQmxvY2tmcm9zdCIsInBvbGljeSIsImFsbEFzc2V0cyIsImxvYWRBbGxUb2tlbkRhdGEiLCJzZXREaXNwbGF5IiwiaSIsInRva2VuIiwicXVhbnRpdHkiLCJtZXRhZGF0YSIsImdldE1ldGFkYXRhIiwiaXBmcyIsImdldElwZnNGcm9tTWV0YWRhdGEiLCJhc3NldF9uYW1lIiwicGFnZSIsImFsbERhdGEiLCJkYXRhIiwibG9hZFRva2VuRGF0YSIsImNvbmNhdCIsImZldGNoIiwiaGVhZGVycyIsInByb2plY3RfaWQiLCJyZXMiLCJqc29uIiwic3RhdHVzIiwiZXJyb3IiLCJsYWJlbCIsImJ1dHRvbiIsImZvcm0iLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/collection.js\n"));

/***/ })

});