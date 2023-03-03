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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Collection; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./token */ \"./src/pages/token.js\");\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/next/dist/compiled/buffer/index.js\")[\"Buffer\"];\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n// takes a policy and uses blockfrost to return asset datafrom the collection\nfunction Collection(props) {\n    _s();\n    const [tokens, setTokens] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    // react hook used to store user inputed strings\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [assets, setAssets] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const [displayedAssets, setDisplayedAssets] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const [total, setTotal] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const [minIndex, setMinIndex] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const [maxIndex, setMaxIndex] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(20);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        function func() {\n            if (searchQuery.length > 0) {\n                let matches = [];\n                let decodedAsset = \"\";\n                // find matches\n                for (const element of assets){\n                    let assetName = element.asset.substring(56);\n                    decodedAsset = Buffer.from(assetName, \"hex\").toString();\n                    let assetId = element.asset.toLowerCase();\n                    let assetNameL = assetName.toLowerCase();\n                    let decodedAssetL = decodedAsset.toLowerCase();\n                    if (assetId.startsWith(searchQuery) || decodedAssetL.startsWith(searchQuery) || assetNameL.startsWith(searchQuery)) {\n                        matches.push(element);\n                    }\n                }\n                // display matches\n                if (matches.length != 0) {\n                    let display = [];\n                    for (const element of matches){\n                        let assetName = element.asset.substring(56);\n                        decodedAsset = Buffer.from(assetName, \"hex\").toString();\n                        display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid-item-ft\",\n                            children: [\n                                decodedAsset,\n                                \" - \",\n                                assetName,\n                                \" - \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/token/\" + element.asset + \"?stake=\" + props.stake,\n                                    children: \"View\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 120\n                                }, this)\n                            ]\n                        }, decodedAsset, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n                            lineNumber: 51,\n                            columnNumber: 38\n                        }, this));\n                    }\n                    setDisplayedAssets(display);\n                } else {\n                    setDisplayedAssets(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"value\",\n                        children: \"No matches\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n                        lineNumber: 57,\n                        columnNumber: 40\n                    }, this));\n                }\n            } else {\n                if (assets != null) {\n                    let display = [];\n                    for(let i = 0; i < 100; i++){\n                        let assetName = assets[i].asset.substring(56);\n                        let decodedAsset = Buffer.from(assetName, \"hex\").toString();\n                        display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid-item-ft\",\n                            children: [\n                                decodedAsset,\n                                \" - \",\n                                assetName,\n                                \" - \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/token/\" + assets[i].asset + \"?stake=\" + props.stake,\n                                    children: \"View\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 121\n                                }, this)\n                            ]\n                        }, decodedAsset, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n                            lineNumber: 69,\n                            columnNumber: 38\n                        }, this));\n                    }\n                    setDisplayedAssets(display);\n                }\n            }\n        }\n        func();\n    }, [\n        searchQuery\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        async function getAssetPageFromBlockfrost() {\n            if (props == null || props.policy == null) {\n            // do nothing\n            } else {\n                let policy = props.policy;\n                //setTokens(assets);\n                let allAssets = await loadAllTokenData(policy);\n                setAssets(allAssets);\n                setTotal(allAssets.length);\n            }\n        }\n        getAssetPageFromBlockfrost();\n    }, [\n        props\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        function setDisplay() {\n            if (assets != null) {\n                let display = [];\n                for(let i = minIndex; i < maxIndex; i++){\n                    let assetName = assets[i].asset.substring(56);\n                    let token = new _token__WEBPACK_IMPORTED_MODULE_5__[\"default\"](assetName, asset[i].substring(0, 56), asset[i].quantity);\n                    token.metadata = token.getMetadata();\n                    token.ipfs = token.getIpfsFromMetadata();\n                }\n            }\n        }\n        setDisplay();\n    }, [\n        assets\n    ]);\n    async function loadAllTokenData(policy) {\n        let page = 1;\n        let allData = [];\n        while(true){\n            const data = await loadTokenData(policy, page);\n            if (!data) {\n                break;\n            }\n            allData = allData.concat(data);\n            if (data.length === 0) {\n                break;\n            }\n            // increment page\n            page++;\n        }\n        return allData;\n    }\n    // fetch token metadata from blockfrost\n    async function loadTokenData(policy, page) {\n        try {\n            const data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/policy/\" + policy + \"?page=\" + page, {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Collection\"\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n                lineNumber: 166,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: [\n                    \"Showing results: \",\n                    displayedAssets.length,\n                    \" of \",\n                    total\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n                lineNumber: 166,\n                columnNumber: 36\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"policy-search\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"setting-button\",\n                        children: \"Next\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n                        lineNumber: 168,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"searchForm\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"search-input\",\n                            placeholder: \"Search in collection by Asset ID, Asset Name or Asset Name decoded...\",\n                            value: searchQuery,\n                            onChange: (event)=>setSearchQuery(event.target.value.toLowerCase())\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n                            lineNumber: 172,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n                        lineNumber: 171,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n                lineNumber: 167,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid-ft\",\n                children: displayedAssets\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n                lineNumber: 182,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n        lineNumber: 165,\n        columnNumber: 9\n    }, this);\n}\n_s(Collection, \"cvNVRCOpSy2B4bwq20rglYt0gwY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Collection;\nvar _c;\n$RefreshReg$(_c, \"Collection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NEJBQ1ZnQyxhQUFZOzRCQUNaQyxPQUFPbkU7NEJBQ1BvRSxVQUFVLENBQUNDLFFBQVVwRSxlQUFlLE1BQU9xRSxNQUFNLENBQUNILEtBQUssQ0FBRXhDLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUsxRSw4REFBQ007Z0JBQUlDLFdBQVU7MEJBQVc5Qjs7Ozs7Ozs7Ozs7O0FBSXBDLENBQUM7R0FsTHVCUjs7UUFZTEosa0RBQVNBOzs7S0FaSkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NvbGxlY3Rpb24uanM/OWI0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgVG9rZW4gZnJvbSBcIi4vdG9rZW5cIjtcblxuLy8gdGFrZXMgYSBwb2xpY3kgYW5kIHVzZXMgYmxvY2tmcm9zdCB0byByZXR1cm4gYXNzZXQgZGF0YWZyb20gdGhlIGNvbGxlY3Rpb25cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbGxlY3Rpb24ocHJvcHMpe1xuXG4gICAgY29uc3QgW3Rva2Vucywgc2V0VG9rZW5zXSA9IHVzZVN0YXRlKCk7XG4gICAgLy8gcmVhY3QgaG9vayB1c2VkIHRvIHN0b3JlIHVzZXIgaW5wdXRlZCBzdHJpbmdzXG4gICAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2Fzc2V0cywgc2V0QXNzZXRzXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtkaXNwbGF5ZWRBc3NldHMsIHNldERpc3BsYXllZEFzc2V0c10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbdG90YWwsIHNldFRvdGFsXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFttaW5JbmRleCwgc2V0TWluSW5kZXhdID0gdXNlU3RhdGUoMClcbiAgICBjb25zdCBbbWF4SW5kZXgsIHNldE1heEluZGV4XSA9IHVzZVN0YXRlKDIwKTtcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmdW5jdGlvbiBmdW5jKCl7XG4gICAgICAgICAgICBpZihzZWFyY2hRdWVyeS5sZW5ndGggPjApe1xuICAgICAgICAgICAgICAgIGxldCBtYXRjaGVzID0gW107XG4gICAgICAgICAgICAgICAgbGV0IGRlY29kZWRBc3NldCA9ICcnO1xuICAgIFxuICAgICAgICAgICAgICAgIC8vIGZpbmQgbWF0Y2hlc1xuICAgICAgICAgICAgICAgIGZvcihjb25zdCBlbGVtZW50IG9mIGFzc2V0cyl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhc3NldE5hbWUgPSAoZWxlbWVudC5hc3NldCkuc3Vic3RyaW5nKDU2KTtcbiAgICAgICAgICAgICAgICAgICAgZGVjb2RlZEFzc2V0ID0gQnVmZmVyLmZyb20oYXNzZXROYW1lLCAnaGV4JykudG9TdHJpbmcoKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgYXNzZXRJZCA9IChlbGVtZW50LmFzc2V0KS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXNzZXROYW1lTCA9IGFzc2V0TmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGVjb2RlZEFzc2V0TCA9IGRlY29kZWRBc3NldC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKChhc3NldElkKS5zdGFydHNXaXRoKHNlYXJjaFF1ZXJ5KSB8fCBkZWNvZGVkQXNzZXRMLnN0YXJ0c1dpdGgoc2VhcmNoUXVlcnkpIHx8IGFzc2V0TmFtZUwuc3RhcnRzV2l0aChzZWFyY2hRdWVyeSkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKChlbGVtZW50KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZGlzcGxheSBtYXRjaGVzXG4gICAgICAgICAgICAgICAgaWYobWF0Y2hlcy5sZW5ndGggIT0gMCl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXNwbGF5ID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yKGNvbnN0IGVsZW1lbnQgb2YgbWF0Y2hlcyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXNzZXROYW1lID0gKGVsZW1lbnQuYXNzZXQpLnN1YnN0cmluZyg1Nik7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGVkQXNzZXQgPSBCdWZmZXIuZnJvbShhc3NldE5hbWUsICdoZXgnKS50b1N0cmluZygpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5LnB1c2goPGRpdiBrZXkgPSB7ZGVjb2RlZEFzc2V0fSBjbGFzc05hbWU9XCJncmlkLWl0ZW0tZnRcIj57ZGVjb2RlZEFzc2V0fSAtIHthc3NldE5hbWV9IC0gPExpbmsgaHJlZj17Jy90b2tlbi8nK2VsZW1lbnQuYXNzZXQrJz9zdGFrZT0nK3Byb3BzLnN0YWtlfT5WaWV3PC9MaW5rPjwvZGl2PilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZXREaXNwbGF5ZWRBc3NldHMoZGlzcGxheSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIG5vIG1hdGNoZXNcbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICBzZXREaXNwbGF5ZWRBc3NldHMoPGRpdiBjbGFzc05hbWU9XCJ2YWx1ZVwiPk5vIG1hdGNoZXM8L2Rpdj4pXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBubyBzZWFyY2ggcXVlcnlcbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgaWYoYXNzZXRzICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGlzcGxheSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpPDEwMDsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhc3NldE5hbWUgPSAoYXNzZXRzW2ldLmFzc2V0KS5zdWJzdHJpbmcoNTYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRlY29kZWRBc3NldCA9IEJ1ZmZlci5mcm9tKGFzc2V0TmFtZSwgJ2hleCcpLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXkucHVzaCg8ZGl2IGtleSA9IHtkZWNvZGVkQXNzZXR9ICBjbGFzc05hbWU9XCJncmlkLWl0ZW0tZnRcIj57ZGVjb2RlZEFzc2V0fSAtIHthc3NldE5hbWV9IC0gPExpbmsgaHJlZj17Jy90b2tlbi8nK2Fzc2V0c1tpXS5hc3NldCsnP3N0YWtlPScrcHJvcHMuc3Rha2V9PlZpZXc8L0xpbms+PC9kaXY+KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNldERpc3BsYXllZEFzc2V0cyhkaXNwbGF5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuYygpO1xuICAgIH0sIFtzZWFyY2hRdWVyeV0pXG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGdldEFzc2V0UGFnZUZyb21CbG9ja2Zyb3N0KCl7XG4gICAgICAgICAgICBpZihwcm9wcyA9PSBudWxsIHx8IHByb3BzLnBvbGljeSA9PSBudWxsKXtcbiAgICAgICAgICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGxldCBwb2xpY3kgPSBwcm9wcy5wb2xpY3k7XG5cbiAgICAgICAgICAgICAgICAvL3NldFRva2Vucyhhc3NldHMpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGFsbEFzc2V0cyA9IGF3YWl0IGxvYWRBbGxUb2tlbkRhdGEocG9saWN5KTtcblxuICAgICAgICAgICAgICAgIHNldEFzc2V0cyhhbGxBc3NldHMpO1xuICAgICAgICAgICAgICAgIHNldFRvdGFsKGFsbEFzc2V0cy5sZW5ndGgpO1xuXG5cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGdldEFzc2V0UGFnZUZyb21CbG9ja2Zyb3N0KClcbiAgICB9LCBbcHJvcHNdKVxuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmdW5jdGlvbiBzZXREaXNwbGF5KCl7XG4gICAgICAgICAgICBpZihhc3NldHMgIT0gbnVsbCl7XG5cbiAgICAgICAgICAgICAgICBsZXQgZGlzcGxheSA9IFtdO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IG1pbkluZGV4OyBpIDxtYXhJbmRleDsgaSsrKXtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgYXNzZXROYW1lID0gKGFzc2V0c1tpXS5hc3NldCkuc3Vic3RyaW5nKDU2KTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9rZW4gPSBuZXcgVG9rZW4oYXNzZXROYW1lLCBhc3NldFtpXS5zdWJzdHJpbmcoMCw1NiksIGFzc2V0W2ldLnF1YW50aXR5KTtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW4ubWV0YWRhdGEgPSB0b2tlbi5nZXRNZXRhZGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICB0b2tlbi5pcGZzID0gdG9rZW4uZ2V0SXBmc0Zyb21NZXRhZGF0YSgpO1xuXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2V0RGlzcGxheSgpO1xuICAgIH0sIFthc3NldHNdKVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gbG9hZEFsbFRva2VuRGF0YShwb2xpY3kpIHtcbiAgICAgICAgbGV0IHBhZ2UgPSAxO1xuICAgICAgICBsZXQgYWxsRGF0YSA9IFtdO1xuICAgICAgXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGxvYWRUb2tlbkRhdGEocG9saWN5LCBwYWdlKTtcbiAgICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIC8vIGhhbmRsZSBlcnJvclxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFsbERhdGEgPSBhbGxEYXRhLmNvbmNhdChkYXRhKTtcbiAgICAgIFxuICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gd2UndmUgcmVhY2hlZCB0aGUgbGFzdCBwYWdlXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLy8gaW5jcmVtZW50IHBhZ2VcbiAgICAgICAgICBwYWdlKys7XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICByZXR1cm4gYWxsRGF0YTtcbiAgICAgIH1cbiAgICAgIFxuXG4gICAgICBcbiAgICAvLyBmZXRjaCB0b2tlbiBtZXRhZGF0YSBmcm9tIGJsb2NrZnJvc3RcbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkVG9rZW5EYXRhKHBvbGljeSwgcGFnZSl7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9jYXJkYW5vLW1haW5uZXQuYmxvY2tmcm9zdC5pby9hcGkvdjAvYXNzZXRzL3BvbGljeS8nK3BvbGljeSsnP3BhZ2U9JytwYWdlLFxuICAgICAgICAgICAge2hlYWRlcnM6e3Byb2plY3RfaWQ6ICdtYWlubmV0b1c2MVlZU2lPb0xTYU5RNmR6VHJrQUc0YXpYVklydmgnLCAnY2FjaGUtY29udHJvbCc6ICdtYXgtYWdlPTMxNTM2MDAwJ319KTtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGRhdGEuanNvbigpO1xuICAgICAgICAgICAgaWYoZGF0YS5zdGF0dXMgIT0gMjAwKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAgIFxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbD5Db2xsZWN0aW9uPC9sYWJlbD48bGFiZWw+U2hvd2luZyByZXN1bHRzOiB7ZGlzcGxheWVkQXNzZXRzLmxlbmd0aH0gb2Yge3RvdGFsfTwvbGFiZWw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xpY3ktc2VhcmNoXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNldHRpbmctYnV0dG9uXCI+XG4gICAgICAgICAgICAgIE5leHRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwic2VhcmNoRm9ybVwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWlucHV0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBpbiBjb2xsZWN0aW9uIGJ5IEFzc2V0IElELCBBc3NldCBOYW1lIG9yIEFzc2V0IE5hbWUgZGVjb2RlZC4uLlwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFF1ZXJ5fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFNlYXJjaFF1ZXJ5KChldmVudC50YXJnZXQudmFsdWUpLnRvTG93ZXJDYXNlKCkpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWZ0XCI+e2Rpc3BsYXllZEFzc2V0c308L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgICAgXG59Il0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVG9rZW4iLCJDb2xsZWN0aW9uIiwicHJvcHMiLCJ0b2tlbnMiLCJzZXRUb2tlbnMiLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5IiwiYXNzZXRzIiwic2V0QXNzZXRzIiwiZGlzcGxheWVkQXNzZXRzIiwic2V0RGlzcGxheWVkQXNzZXRzIiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJ0b3RhbCIsInNldFRvdGFsIiwibWluSW5kZXgiLCJzZXRNaW5JbmRleCIsIm1heEluZGV4Iiwic2V0TWF4SW5kZXgiLCJyb3V0ZXIiLCJmdW5jIiwibGVuZ3RoIiwibWF0Y2hlcyIsImRlY29kZWRBc3NldCIsImVsZW1lbnQiLCJhc3NldE5hbWUiLCJhc3NldCIsInN1YnN0cmluZyIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsImFzc2V0SWQiLCJ0b0xvd2VyQ2FzZSIsImFzc2V0TmFtZUwiLCJkZWNvZGVkQXNzZXRMIiwic3RhcnRzV2l0aCIsInB1c2giLCJkaXNwbGF5IiwiZGl2IiwiY2xhc3NOYW1lIiwiaHJlZiIsInN0YWtlIiwiaSIsImdldEFzc2V0UGFnZUZyb21CbG9ja2Zyb3N0IiwicG9saWN5IiwiYWxsQXNzZXRzIiwibG9hZEFsbFRva2VuRGF0YSIsInNldERpc3BsYXkiLCJ0b2tlbiIsInF1YW50aXR5IiwibWV0YWRhdGEiLCJnZXRNZXRhZGF0YSIsImlwZnMiLCJnZXRJcGZzRnJvbU1ldGFkYXRhIiwicGFnZSIsImFsbERhdGEiLCJkYXRhIiwibG9hZFRva2VuRGF0YSIsImNvbmNhdCIsImZldGNoIiwiaGVhZGVycyIsInByb2plY3RfaWQiLCJyZXMiLCJqc29uIiwic3RhdHVzIiwiZXJyb3IiLCJsYWJlbCIsImJ1dHRvbiIsImZvcm0iLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/collection.js\n"));

/***/ })

});