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

/***/ "./src/pages/policy.js":
/*!*****************************!*\
  !*** ./src/pages/policy.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Policy; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Policy(props) {\n    _s();\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        policy: \"\",\n        thumbnail: \"/black.jpeg\",\n        floorPrice: \"\",\n        holders: \"\",\n        supply: \"\",\n        volume: \"\"\n    });\n    const [currency, setCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        value: 1,\n        symbol: \"$\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        async function func() {\n            if (props.policy != null && props.prices != null) {\n                let policyData = await getCnftPolicyData(props.policy);\n                if (policyData != null) {\n                    let currency = props.prices.currency;\n                    setCurrency(currency);\n                    let floorPrice = (policyData.floor_price / 1000000 * currency.value).toFixed(2);\n                    let holders = policyData.asset_holders;\n                    let supply = policyData.asset_minted;\n                    let volume = (policyData.total_volume / 1000000000000 * currency.value).toFixed(2);\n                    let thumbnail = getIpfs(policyData.thumbnail);\n                    let obj = {\n                        policy: props.policy,\n                        thumbnail: thumbnail,\n                        floorPrice: floorPrice,\n                        holders: holders,\n                        supply: supply,\n                        volume: volume\n                    };\n                    setDisplay(obj);\n                }\n            }\n        }\n        func();\n    }, [\n        props\n    ]);\n    // if metadata has been fetched\n    // find the ipfs link under 'image' metadata tag and store it\n    function getIpfs(ipfs) {\n        // convert all ipfs formats to the a searchable format that can be fetched in a <img> tag\n        try {\n            // links are sometimes stored in arrays\n            // this finds ipfs links in the array\n            if (Array.isArray(ipfs)) {\n                let newipfs = \"\";\n                for (const element of ipfs){\n                    newipfs = newipfs + element;\n                }\n                if (newipfs.startsWith(\"ba\")) {\n                    newipfs = \"http://dweb.link/ipfs/\" + ipfs;\n                    newipfs = newipfs.replace(/,/g, \"\");\n                }\n                return newipfs;\n            }\n            // normal ipfs in image tags\n            if (ipfs.startsWith(\"ipfs://\")) {\n                ipfs = ipfs.slice(7);\n                if (ipfs.startsWith(\"ipfs/\")) {\n                    ipfs = ipfs.slice(5);\n                }\n                ipfs = \"http://dweb.link/ipfs/\" + ipfs;\n            } else if (ipfs.startsWith(\"ipfs/\")) {\n                ipfs = ipfs.slice(5);\n                ipfs = \"http://dweb.link/ipfs/\" + ipfs;\n            } else if (ipfs.startsWith(\"Qm\")) {\n                ipfs = \"http://dweb.link/ipfs/\" + ipfs;\n            }\n        } catch (e) {\n            return null;\n        }\n        return ipfs;\n    }\n    async function getCnftPolicyData(policy) {\n        try {\n            const data = await fetch(\"https://api.opencnft.io/1/policy/\" + policy, {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    function copyText(event, text) {\n        navigator.clipboard.writeText(text).then(()=>{\n            // Update the button text to \"Copied!\"\n            const button = event.target;\n            event.target.innerText = \"Copied\";\n            setTimeout(()=>{\n                // Reset the button text after 1 second\n                button.textContent = \"Copy\";\n            }, 1000);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"policy-info\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"policy-section\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"policy-item-info\",\n                    children: [\n                        \"Policy:\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: \"policy-button\",\n                            href: \"/token/\" + display.policy + \"?stake=\" + props.stake,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"policy-value\",\n                                children: display.policy\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                                lineNumber: 110,\n                                columnNumber: 107\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                            lineNumber: 110,\n                            columnNumber: 19\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"policy-button\",\n                            onClick: (e)=>copyText(e, display.policy),\n                            children: \"Copy\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                            lineNumber: 111,\n                            columnNumber: 19\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                    lineNumber: 109,\n                    columnNumber: 15\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                lineNumber: 108,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"policy-section-item\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"policy-item-info\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: display.thumbnail,\n                            width: 100,\n                            height: 100,\n                            alt: \"no img\",\n                            className: \"policy-thumbnail\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                            lineNumber: 121,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                        lineNumber: 120,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"policy-item-info\",\n                        children: [\n                            \"Supply:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"value\",\n                                children: display.supply\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                                lineNumber: 124,\n                                columnNumber: 22\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                        lineNumber: 123,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"policy-item-info\",\n                        children: [\n                            \"Volume: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"value\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"currency\",\n                                        children: currency.symbol\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                                        lineNumber: 127,\n                                        columnNumber: 46\n                                    }, this),\n                                    display.volume,\n                                    \"m\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                                lineNumber: 127,\n                                columnNumber: 23\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                        lineNumber: 126,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"policy-item-info\",\n                        children: [\n                            \"Floor Price: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"value\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"currency\",\n                                        children: currency.symbol\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                                        lineNumber: 130,\n                                        columnNumber: 51\n                                    }, this),\n                                    display.floorPrice\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                                lineNumber: 130,\n                                columnNumber: 28\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                        lineNumber: 129,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                lineNumber: 119,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n        lineNumber: 107,\n        columnNumber: 12\n    }, this);\n}\n_s(Policy, \"elI56tQpFMl/h2CKO9MLxaCdKeQ=\");\n_c = Policy;\nvar _c;\n$RefreshReg$(_c, \"Policy\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FFbkYsOERBQUNEO3dCQUFJQyxXQUFVOzs0QkFBbUI7MENBQzNCLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FBU3BELFFBQVFNLE1BQU07Ozs7Ozs7Ozs7OztrQ0FFN0MsOERBQUM2Qzt3QkFBSUMsV0FBVTs7NEJBQW1COzBDQUMxQiw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUFRLDhEQUFDRDt3Q0FBSUMsV0FBVTtrREFBWTVDLFNBQVNHLE1BQU07Ozs7OztvQ0FBUVgsUUFBUU8sTUFBTTtvQ0FBQzs7Ozs7Ozs7Ozs7OztrQ0FFaEcsOERBQUM0Qzt3QkFBSUMsV0FBVTs7NEJBQW1COzBDQUNyQiw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUFRLDhEQUFDRDt3Q0FBSUMsV0FBVTtrREFBWTVDLFNBQVNHLE1BQU07Ozs7OztvQ0FBUVgsUUFBUUksVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt0SCxDQUFDO0dBbEl1Qk47S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BvbGljeS5qcz8yNDVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvbGljeShwcm9wcyl7XG5cbiAgICBjb25zdCBbZGlzcGxheSwgc2V0RGlzcGxheV0gPSB1c2VTdGF0ZSh7cG9saWN5OiAnJywgdGh1bWJuYWlsOiAnL2JsYWNrLmpwZWcnLCBmbG9vclByaWNlOicnLCBob2xkZXJzOiAnJywgc3VwcGx5IDonJywgdm9sdW1lOicnfSk7XG4gICAgY29uc3QgW2N1cnJlbmN5LCBzZXRDdXJyZW5jeV0gPSB1c2VTdGF0ZSh7dmFsdWU6IDEsIHN5bWJvbDogJyQnfSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBmdW5jKCl7XG4gICAgICAgICAgaWYocHJvcHMucG9saWN5ICE9IG51bGwgJiYgcHJvcHMucHJpY2VzICE9IG51bGwpe1xuICAgICAgICAgICAgbGV0IHBvbGljeURhdGEgPSBhd2FpdCBnZXRDbmZ0UG9saWN5RGF0YShwcm9wcy5wb2xpY3kpO1xuICAgICAgICAgICAgaWYocG9saWN5RGF0YSAhPSBudWxsKXtcblxuICAgICAgICAgICAgICBsZXQgY3VycmVuY3kgPSBwcm9wcy5wcmljZXMuY3VycmVuY3k7XG4gICAgICAgICAgICAgIHNldEN1cnJlbmN5KGN1cnJlbmN5KTtcblxuXG4gICAgICAgICAgICAgICAgbGV0IGZsb29yUHJpY2UgPSAoKHBvbGljeURhdGEuZmxvb3JfcHJpY2UvMTAwMDAwMCkqY3VycmVuY3kudmFsdWUpLnRvRml4ZWQoMik7XG4gICAgICAgICAgICAgICAgbGV0IGhvbGRlcnMgPSBwb2xpY3lEYXRhLmFzc2V0X2hvbGRlcnM7XG4gICAgICAgICAgICAgICAgbGV0IHN1cHBseSA9IHBvbGljeURhdGEuYXNzZXRfbWludGVkO1xuICAgICAgICAgICAgICAgIGxldCB2b2x1bWUgPSAoKHBvbGljeURhdGEudG90YWxfdm9sdW1lLzEwMDAwMDAwMDAwMDApKmN1cnJlbmN5LnZhbHVlKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAgIGxldCB0aHVtYm5haWwgPSBnZXRJcGZzKHBvbGljeURhdGEudGh1bWJuYWlsKTtcblxuICAgICAgICAgICAgICAgIGxldCBvYmogPSB7cG9saWN5OiBwcm9wcy5wb2xpY3ksIHRodW1ibmFpbCA6IHRodW1ibmFpbCwgZmxvb3JQcmljZTogZmxvb3JQcmljZSwgaG9sZGVyczogaG9sZGVycywgc3VwcGx5OiBzdXBwbHksIHZvbHVtZTogdm9sdW1lfVxuXG4gICAgICAgICAgICAgICAgc2V0RGlzcGxheShvYmopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gXG5cbiAgICAgICAgfVxuICAgICAgICBmdW5jKCk7XG4gICAgfSwgW3Byb3BzXSlcblxuICAgIC8vIGlmIG1ldGFkYXRhIGhhcyBiZWVuIGZldGNoZWRcbiAgICAvLyBmaW5kIHRoZSBpcGZzIGxpbmsgdW5kZXIgJ2ltYWdlJyBtZXRhZGF0YSB0YWcgYW5kIHN0b3JlIGl0XG4gICAgZnVuY3Rpb24gZ2V0SXBmcyhpcGZzKXtcbiAgICAgIC8vIGNvbnZlcnQgYWxsIGlwZnMgZm9ybWF0cyB0byB0aGUgYSBzZWFyY2hhYmxlIGZvcm1hdCB0aGF0IGNhbiBiZSBmZXRjaGVkIGluIGEgPGltZz4gdGFnXG4gICAgICB0cnl7XG5cbiAgICAgICAgLy8gbGlua3MgYXJlIHNvbWV0aW1lcyBzdG9yZWQgaW4gYXJyYXlzXG4gICAgICAgIC8vIHRoaXMgZmluZHMgaXBmcyBsaW5rcyBpbiB0aGUgYXJyYXlcbiAgICAgICAgaWYoQXJyYXkuaXNBcnJheShpcGZzKSl7XG4gICAgICAgICAgbGV0IG5ld2lwZnMgPSBcIlwiO1xuICAgICAgICAgIGZvcihjb25zdCBlbGVtZW50IG9mIGlwZnMpe1xuICAgICAgICAgICAgbmV3aXBmcyA9IG5ld2lwZnMgKyBlbGVtZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihuZXdpcGZzLnN0YXJ0c1dpdGgoJ2JhJykpe1xuICAgICAgICAgICAgbmV3aXBmcyA9IFwiaHR0cDovL2R3ZWIubGluay9pcGZzL1wiK2lwZnM7XG4gICAgICAgICAgICBuZXdpcGZzID0gbmV3aXBmcy5yZXBsYWNlKC8sL2csICcnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ld2lwZnM7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBub3JtYWwgaXBmcyBpbiBpbWFnZSB0YWdzXG4gICAgICAgIGlmKGlwZnMuc3RhcnRzV2l0aCgnaXBmczovLycpKXtcbiAgICAgICAgICBpcGZzID0gaXBmcy5zbGljZSg3KTtcbiAgICAgICAgICBpZihpcGZzLnN0YXJ0c1dpdGgoJ2lwZnMvJykpe1xuICAgICAgICAgICAgaXBmcyA9IGlwZnMuc2xpY2UoNSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlwZnMgPSBcImh0dHA6Ly9kd2ViLmxpbmsvaXBmcy9cIitpcGZzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoaXBmcy5zdGFydHNXaXRoKCdpcGZzLycpKXtcbiAgICAgICAgICBpcGZzID0gaXBmcy5zbGljZSg1KTtcbiAgICAgICAgICBpcGZzID0gXCJodHRwOi8vZHdlYi5saW5rL2lwZnMvXCIraXBmcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGlwZnMuc3RhcnRzV2l0aCgnUW0nKSl7XG4gICAgICAgICAgaXBmcyA9IFwiaHR0cDovL2R3ZWIubGluay9pcGZzL1wiK2lwZnM7XG4gICAgICAgIH1cblxuICAgICAgfWNhdGNoe1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpcGZzO1xuICAgIFxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldENuZnRQb2xpY3lEYXRhKHBvbGljeSl7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLm9wZW5jbmZ0LmlvLzEvcG9saWN5LycrcG9saWN5LFxuICAgICAgICAgIHtoZWFkZXJzOntwcm9qZWN0X2lkOiAnbWFpbm5ldG9XNjFZWVNpT29MU2FOUTZkelRya0FHNGF6WFZJcnZoJywgJ2NhY2hlLWNvbnRyb2wnOiAnbWF4LWFnZT0zMTUzNjAwMCd9fSk7XG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZGF0YS5qc29uKCk7XG4gIFxuICAgICAgICAgIGlmKGRhdGEuc3RhdHVzIT0gMjAwKXtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGNvcHlUZXh0KGV2ZW50LCB0ZXh0KSB7XG4gICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRleHQpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgYnV0dG9uIHRleHQgdG8gXCJDb3BpZWQhXCJcbiAgICAgICAgICBjb25zdCBidXR0b24gPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgZXZlbnQudGFyZ2V0LmlubmVyVGV4dCA9IFwiQ29waWVkXCI7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAvLyBSZXNldCB0aGUgYnV0dG9uIHRleHQgYWZ0ZXIgMSBzZWNvbmRcbiAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ29weVwiO1xuICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuXG4gICAgcmV0dXJuKDxkaXYgY2xhc3NOYW1lPVwicG9saWN5LWluZm9cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9saWN5LXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xpY3ktaXRlbS1pbmZvXCI+UG9saWN5OiBcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZSA9ICdwb2xpY3ktYnV0dG9uJyBocmVmPXsnL3Rva2VuLycrZGlzcGxheS5wb2xpY3krJz9zdGFrZT0nK3Byb3BzLnN0YWtlfT48ZGl2IGNsYXNzTmFtZT1cInBvbGljeS12YWx1ZVwiPnsoZGlzcGxheS5wb2xpY3kpfTwvZGl2PjwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9saWN5LWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBjb3B5VGV4dChlLCBkaXNwbGF5LnBvbGljeSl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIENvcHlcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvbGljeS1zZWN0aW9uLWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xpY3ktaXRlbS1pbmZvXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYyA9IHtkaXNwbGF5LnRodW1ibmFpbH0gd2lkdGg9ezEwMH0gaGVpZ2h0PXsxMDB9IGFsdD0nbm8gaW1nJyBjbGFzc05hbWU9XCJwb2xpY3ktdGh1bWJuYWlsXCIvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xpY3ktaXRlbS1pbmZvXCI+XG4gICAgICAgICAgICAgIFN1cHBseTo8ZGl2IGNsYXNzTmFtZT0ndmFsdWUnPntkaXNwbGF5LnN1cHBseX08L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9saWN5LWl0ZW0taW5mb1wiPlxuICAgICAgICAgICAgICBWb2x1bWU6IDxkaXYgY2xhc3NOYW1lPVwidmFsdWVcIj48ZGl2IGNsYXNzTmFtZT1cImN1cnJlbmN5XCI+e2N1cnJlbmN5LnN5bWJvbH08L2Rpdj57ZGlzcGxheS52b2x1bWV9bTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xpY3ktaXRlbS1pbmZvXCI+XG4gICAgICAgICAgICAgIEZsb29yIFByaWNlOiA8ZGl2IGNsYXNzTmFtZT1cInZhbHVlXCI+PGRpdiBjbGFzc05hbWU9XCJjdXJyZW5jeVwiPntjdXJyZW5jeS5zeW1ib2x9PC9kaXY+e2Rpc3BsYXkuZmxvb3JQcmljZX08L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApXG59Il0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUG9saWN5IiwicHJvcHMiLCJkaXNwbGF5Iiwic2V0RGlzcGxheSIsInBvbGljeSIsInRodW1ibmFpbCIsImZsb29yUHJpY2UiLCJob2xkZXJzIiwic3VwcGx5Iiwidm9sdW1lIiwiY3VycmVuY3kiLCJzZXRDdXJyZW5jeSIsInZhbHVlIiwic3ltYm9sIiwiZnVuYyIsInByaWNlcyIsInBvbGljeURhdGEiLCJnZXRDbmZ0UG9saWN5RGF0YSIsImZsb29yX3ByaWNlIiwidG9GaXhlZCIsImFzc2V0X2hvbGRlcnMiLCJhc3NldF9taW50ZWQiLCJ0b3RhbF92b2x1bWUiLCJnZXRJcGZzIiwib2JqIiwiaXBmcyIsIkFycmF5IiwiaXNBcnJheSIsIm5ld2lwZnMiLCJlbGVtZW50Iiwic3RhcnRzV2l0aCIsInJlcGxhY2UiLCJzbGljZSIsImRhdGEiLCJmZXRjaCIsImhlYWRlcnMiLCJwcm9qZWN0X2lkIiwicmVzIiwianNvbiIsInN0YXR1cyIsImVycm9yIiwiY29weVRleHQiLCJldmVudCIsInRleHQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0aGVuIiwiYnV0dG9uIiwidGFyZ2V0IiwiaW5uZXJUZXh0Iiwic2V0VGltZW91dCIsInRleHRDb250ZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiaHJlZiIsInN0YWtlIiwib25DbGljayIsImUiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/policy.js\n"));

/***/ })

});