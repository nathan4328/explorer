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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Policy; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Policy(props) {\n    _s();\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        policy: \"\",\n        thumbnail: \"http://dweb.link/ipfs/QmfYu5HDmUrcMfDUxymPRbeP5nTE3u3XHN6gvNEGXmoMKG\",\n        floorPrice: \"\",\n        holders: \"\",\n        supply: \"\",\n        volume: \"\"\n    });\n    const [currency, setCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        value: 1,\n        symbol: \"$\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        async function func() {\n            if (props.policy != null && props.prices != null) {\n                let policyData = await getCnftPolicyData(props.policy);\n                if (policyData != null) {\n                    let currency = props.prices.currency;\n                    setCurrency(currency);\n                    let floorPrice = policyData.floor_price / 1000000 * currency.value;\n                    let holders = policyData.asset_holders;\n                    let supply = policyData.asset_minted;\n                    let volume = policyData.total_volume / 1000000000000 * currency.value;\n                    let thumbnail = getIpfs(policyData.thumbnail);\n                    console.log(thumbnail);\n                    let obj = {\n                        policy: props.policy,\n                        thumbnail: thumbnail,\n                        floorPrice: floorPrice,\n                        holders: holders,\n                        supply: supply,\n                        volume: volume\n                    };\n                    setDisplay(obj);\n                }\n            }\n        }\n        func();\n    }, [\n        props\n    ]);\n    // if metadata has been fetched\n    // find the ipfs link under 'image' metadata tag and store it\n    function getIpfs(ipfs) {\n        // convert all ipfs formats to the a searchable format that can be fetched in a <img> tag\n        try {\n            // links are sometimes stored in arrays\n            // this finds ipfs links in the array\n            if (Array.isArray(ipfs)) {\n                let newipfs = \"\";\n                for (const element of ipfs){\n                    newipfs = newipfs + element;\n                }\n                if (newipfs.startsWith(\"ba\")) {\n                    newipfs = \"http://dweb.link/ipfs/\" + ipfs;\n                    newipfs = newipfs.replace(/,/g, \"\");\n                }\n                return newipfs;\n            }\n            // normal ipfs in image tags\n            if (ipfs.startsWith(\"ipfs://\")) {\n                ipfs = ipfs.slice(7);\n                if (ipfs.startsWith(\"ipfs/\")) {\n                    ipfs = ipfs.slice(5);\n                }\n                ipfs = \"http://dweb.link/ipfs/\" + ipfs;\n            } else if (ipfs.startsWith(\"ipfs/\")) {\n                ipfs = ipfs.slice(5);\n                ipfs = \"http://dweb.link/ipfs/\" + ipfs;\n            } else if (ipfs.startsWith(\"Qm\")) {\n                ipfs = \"http://dweb.link/ipfs/\" + ipfs;\n            }\n        } catch (e) {\n            return null;\n        }\n        return ipfs;\n    }\n    async function getCnftPolicyData(policy) {\n        try {\n            const data = await fetch(\"https://api.opencnft.io/1/policy/\" + policy, {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"policy-info\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"policy-item-info\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: display.thumbnail,\n                    width: 100,\n                    height: 100,\n                    alt: \"no img\",\n                    className: \"policy-thumbnail\"\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                    lineNumber: 99,\n                    columnNumber: 15\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                lineNumber: 98,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"policy-item-info\",\n                children: [\n                    \"Policy: \",\n                    display.policy.substring(0, 9),\n                    \"...\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                lineNumber: 101,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"policy-item-info\",\n                children: [\n                    \"Supply:\",\n                    display.supply\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                lineNumber: 104,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"policy-item-info\",\n                children: [\n                    \"Volume: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"currency\",\n                        children: currency.symbol\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                        lineNumber: 108,\n                        columnNumber: 21\n                    }, this),\n                    display.volume,\n                    \"m\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                lineNumber: 107,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"policy-item-info\",\n                children: [\n                    \"Floor Price: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"currency\",\n                        children: currency.symbol\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                        lineNumber: 111,\n                        columnNumber: 26\n                    }, this),\n                    display.floorPrice\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                lineNumber: 110,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n        lineNumber: 97,\n        columnNumber: 12\n    }, this);\n}\n_s(Policy, \"OEXqQ1cz4Sw78J/qFeFLqpStDjg=\");\n_c = Policy;\nvar _c;\n$RefreshReg$(_c, \"Policy\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUMsTUFBTSxNQUFNSixLQUFLSyxJQUFJO1lBRTNCLElBQUdMLEtBQUtNLE1BQU0sSUFBRyxLQUFJO2dCQUNuQixPQUFPLElBQUk7WUFDYixDQUFDO1lBQ0QsT0FBT0Y7UUFDVCxFQUFDLE9BQU1HLE9BQU07WUFDWCxPQUFPLElBQUk7UUFDYjtJQUNGO0lBR0YscUJBQU8sOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNkLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQzlDLG1EQUFLQTtvQkFBQytDLEtBQU8xQyxRQUFRRyxTQUFTO29CQUFFd0MsT0FBTztvQkFBS0MsUUFBUTtvQkFBS0MsS0FBSTtvQkFBU0osV0FBVTs7Ozs7Ozs7Ozs7MEJBRW5GLDhEQUFDRDtnQkFBSUMsV0FBVTs7b0JBQW1CO29CQUN4QnpDLFFBQVFFLE1BQU0sQ0FBRTRDLFNBQVMsQ0FBQyxHQUFFO29CQUFHOzs7Ozs7OzBCQUV6Qyw4REFBQ047Z0JBQUlDLFdBQVU7O29CQUFtQjtvQkFDMUJ6QyxRQUFRTSxNQUFNOzs7Ozs7OzBCQUV0Qiw4REFBQ2tDO2dCQUFJQyxXQUFVOztvQkFBbUI7a0NBQzFCLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FBWWpDLFNBQVNHLE1BQU07Ozs7OztvQkFBUVgsUUFBUU8sTUFBTTtvQkFBQzs7Ozs7OzswQkFFekUsOERBQUNpQztnQkFBSUMsV0FBVTs7b0JBQW1CO2tDQUNyQiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQVlqQyxTQUFTRyxNQUFNOzs7Ozs7b0JBQVFYLFFBQVFJLFVBQVU7Ozs7Ozs7Ozs7Ozs7QUFHN0YsQ0FBQztHQTlHdUJOO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wb2xpY3kuanM/MjQ1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb2xpY3kocHJvcHMpe1xuXG4gICAgY29uc3QgW2Rpc3BsYXksIHNldERpc3BsYXldID0gdXNlU3RhdGUoe3BvbGljeTogJycsIHRodW1ibmFpbDogJ2h0dHA6Ly9kd2ViLmxpbmsvaXBmcy9RbWZZdTVIRG1VcmNNZkRVeHltUFJiZVA1blRFM3UzWEhONmd2TkVHWG1vTUtHJywgZmxvb3JQcmljZTonJywgaG9sZGVyczogJycsIHN1cHBseSA6JycsIHZvbHVtZTonJ30pO1xuICAgIGNvbnN0IFtjdXJyZW5jeSwgc2V0Q3VycmVuY3ldID0gdXNlU3RhdGUoe3ZhbHVlOiAxLCBzeW1ib2w6ICckJ30pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZnVuYygpe1xuICAgICAgICAgIGlmKHByb3BzLnBvbGljeSAhPSBudWxsICYmIHByb3BzLnByaWNlcyAhPSBudWxsKXtcbiAgICAgICAgICAgIGxldCBwb2xpY3lEYXRhID0gYXdhaXQgZ2V0Q25mdFBvbGljeURhdGEocHJvcHMucG9saWN5KTtcbiAgICAgICAgICAgIGlmKHBvbGljeURhdGEgIT0gbnVsbCl7XG5cbiAgICAgICAgICAgICAgbGV0IGN1cnJlbmN5ID0gcHJvcHMucHJpY2VzLmN1cnJlbmN5O1xuICAgICAgICAgICAgICBzZXRDdXJyZW5jeShjdXJyZW5jeSk7XG5cbiAgICAgICAgICAgICAgICBsZXQgZmxvb3JQcmljZSA9IChwb2xpY3lEYXRhLmZsb29yX3ByaWNlLzEwMDAwMDApKmN1cnJlbmN5LnZhbHVlO1xuICAgICAgICAgICAgICAgIGxldCBob2xkZXJzID0gcG9saWN5RGF0YS5hc3NldF9ob2xkZXJzO1xuICAgICAgICAgICAgICAgIGxldCBzdXBwbHkgPSBwb2xpY3lEYXRhLmFzc2V0X21pbnRlZDtcbiAgICAgICAgICAgICAgICBsZXQgdm9sdW1lID0gKHBvbGljeURhdGEudG90YWxfdm9sdW1lLzEwMDAwMDAwMDAwMDApKmN1cnJlbmN5LnZhbHVlO1xuICAgICAgICAgICAgICAgIGxldCB0aHVtYm5haWwgPSBnZXRJcGZzKHBvbGljeURhdGEudGh1bWJuYWlsKTtcblxuXG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aHVtYm5haWwpO1xuXG4gICAgICAgICAgICAgICAgbGV0IG9iaiA9IHtwb2xpY3k6IHByb3BzLnBvbGljeSwgdGh1bWJuYWlsIDogdGh1bWJuYWlsLCBmbG9vclByaWNlOiBmbG9vclByaWNlLCBob2xkZXJzOiBob2xkZXJzLCBzdXBwbHk6IHN1cHBseSwgdm9sdW1lOiB2b2x1bWV9XG5cbiAgICAgICAgICAgICAgICBzZXREaXNwbGF5KG9iaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBcblxuICAgICAgICB9XG4gICAgICAgIGZ1bmMoKTtcbiAgICB9LCBbcHJvcHNdKVxuXG4gICAgICAgICAgIC8vIGlmIG1ldGFkYXRhIGhhcyBiZWVuIGZldGNoZWRcbiAgICAvLyBmaW5kIHRoZSBpcGZzIGxpbmsgdW5kZXIgJ2ltYWdlJyBtZXRhZGF0YSB0YWcgYW5kIHN0b3JlIGl0XG4gICAgZnVuY3Rpb24gZ2V0SXBmcyhpcGZzKXtcbiAgICAgIC8vIGNvbnZlcnQgYWxsIGlwZnMgZm9ybWF0cyB0byB0aGUgYSBzZWFyY2hhYmxlIGZvcm1hdCB0aGF0IGNhbiBiZSBmZXRjaGVkIGluIGEgPGltZz4gdGFnXG4gICAgICB0cnl7XG5cbiAgICAgICAgLy8gbGlua3MgYXJlIHNvbWV0aW1lcyBzdG9yZWQgaW4gYXJyYXlzXG4gICAgICAgIC8vIHRoaXMgZmluZHMgaXBmcyBsaW5rcyBpbiB0aGUgYXJyYXlcbiAgICAgICAgaWYoQXJyYXkuaXNBcnJheShpcGZzKSl7XG4gICAgICAgICAgbGV0IG5ld2lwZnMgPSBcIlwiO1xuICAgICAgICAgIGZvcihjb25zdCBlbGVtZW50IG9mIGlwZnMpe1xuICAgICAgICAgICAgbmV3aXBmcyA9IG5ld2lwZnMgKyBlbGVtZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihuZXdpcGZzLnN0YXJ0c1dpdGgoJ2JhJykpe1xuICAgICAgICAgICAgbmV3aXBmcyA9IFwiaHR0cDovL2R3ZWIubGluay9pcGZzL1wiK2lwZnM7XG4gICAgICAgICAgICBuZXdpcGZzID0gbmV3aXBmcy5yZXBsYWNlKC8sL2csICcnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ld2lwZnM7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBub3JtYWwgaXBmcyBpbiBpbWFnZSB0YWdzXG4gICAgICAgIGlmKGlwZnMuc3RhcnRzV2l0aCgnaXBmczovLycpKXtcbiAgICAgICAgICBpcGZzID0gaXBmcy5zbGljZSg3KTtcbiAgICAgICAgICBpZihpcGZzLnN0YXJ0c1dpdGgoJ2lwZnMvJykpe1xuICAgICAgICAgICAgaXBmcyA9IGlwZnMuc2xpY2UoNSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlwZnMgPSBcImh0dHA6Ly9kd2ViLmxpbmsvaXBmcy9cIitpcGZzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoaXBmcy5zdGFydHNXaXRoKCdpcGZzLycpKXtcbiAgICAgICAgICBpcGZzID0gaXBmcy5zbGljZSg1KTtcbiAgICAgICAgICBpcGZzID0gXCJodHRwOi8vZHdlYi5saW5rL2lwZnMvXCIraXBmcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGlwZnMuc3RhcnRzV2l0aCgnUW0nKSl7XG4gICAgICAgICAgaXBmcyA9IFwiaHR0cDovL2R3ZWIubGluay9pcGZzL1wiK2lwZnM7XG4gICAgICAgIH1cblxuICAgICAgfWNhdGNoe1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpcGZzO1xuICAgIFxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldENuZnRQb2xpY3lEYXRhKHBvbGljeSl7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLm9wZW5jbmZ0LmlvLzEvcG9saWN5LycrcG9saWN5LFxuICAgICAgICAgIHtoZWFkZXJzOntwcm9qZWN0X2lkOiAnbWFpbm5ldG9XNjFZWVNpT29MU2FOUTZkelRya0FHNGF6WFZJcnZoJywgJ2NhY2hlLWNvbnRyb2wnOiAnbWF4LWFnZT0zMTUzNjAwMCd9fSk7XG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZGF0YS5qc29uKCk7XG4gIFxuICAgICAgICAgIGlmKGRhdGEuc3RhdHVzIT0gMjAwKXtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cblxuICAgIHJldHVybig8ZGl2IGNsYXNzTmFtZT1cInBvbGljeS1pbmZvXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvbGljeS1pdGVtLWluZm9cIj5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYyA9IHtkaXNwbGF5LnRodW1ibmFpbH0gd2lkdGg9ezEwMH0gaGVpZ2h0PXsxMDB9IGFsdD0nbm8gaW1nJyBjbGFzc05hbWU9XCJwb2xpY3ktdGh1bWJuYWlsXCIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvbGljeS1pdGVtLWluZm9cIj5cbiAgICAgICAgICAgIFBvbGljeTogeyhkaXNwbGF5LnBvbGljeSkuc3Vic3RyaW5nKDAsOSl9Li4uXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9saWN5LWl0ZW0taW5mb1wiPlxuICAgICAgICAgICAgU3VwcGx5OntkaXNwbGF5LnN1cHBseX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xpY3ktaXRlbS1pbmZvXCI+XG4gICAgICAgICAgICBWb2x1bWU6IDxkaXYgY2xhc3NOYW1lPVwiY3VycmVuY3lcIj57Y3VycmVuY3kuc3ltYm9sfTwvZGl2PntkaXNwbGF5LnZvbHVtZX1tXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9saWN5LWl0ZW0taW5mb1wiPlxuICAgICAgICAgICAgRmxvb3IgUHJpY2U6IDxkaXYgY2xhc3NOYW1lPVwiY3VycmVuY3lcIj57Y3VycmVuY3kuc3ltYm9sfTwvZGl2PntkaXNwbGF5LmZsb29yUHJpY2V9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj4pXG59Il0sIm5hbWVzIjpbIkltYWdlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQb2xpY3kiLCJwcm9wcyIsImRpc3BsYXkiLCJzZXREaXNwbGF5IiwicG9saWN5IiwidGh1bWJuYWlsIiwiZmxvb3JQcmljZSIsImhvbGRlcnMiLCJzdXBwbHkiLCJ2b2x1bWUiLCJjdXJyZW5jeSIsInNldEN1cnJlbmN5IiwidmFsdWUiLCJzeW1ib2wiLCJmdW5jIiwicHJpY2VzIiwicG9saWN5RGF0YSIsImdldENuZnRQb2xpY3lEYXRhIiwiZmxvb3JfcHJpY2UiLCJhc3NldF9ob2xkZXJzIiwiYXNzZXRfbWludGVkIiwidG90YWxfdm9sdW1lIiwiZ2V0SXBmcyIsImNvbnNvbGUiLCJsb2ciLCJvYmoiLCJpcGZzIiwiQXJyYXkiLCJpc0FycmF5IiwibmV3aXBmcyIsImVsZW1lbnQiLCJzdGFydHNXaXRoIiwicmVwbGFjZSIsInNsaWNlIiwiZGF0YSIsImZldGNoIiwiaGVhZGVycyIsInByb2plY3RfaWQiLCJyZXMiLCJqc29uIiwic3RhdHVzIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInN1YnN0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/policy.js\n"));

/***/ })

});