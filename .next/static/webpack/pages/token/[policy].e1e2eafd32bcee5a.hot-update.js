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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Policy; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Policy(props) {\n    _s();\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        policy: \"\",\n        thumbnail: \"/black.jpeg\",\n        floorPrice: \"\",\n        holders: \"\",\n        supply: \"\",\n        volume: \"\"\n    });\n    const [currency, setCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        value: 1,\n        symbol: \"$\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        async function func() {\n            if (props.policy != null && props.prices != null) {\n                let policyData = await getCnftPolicyData(props.policy);\n                if (policyData != null) {\n                    let currency = props.prices.currency;\n                    setCurrency(currency);\n                    let floorPrice = (policyData.floor_price / 1000000 * currency.value).toFixed(2);\n                    let holders = policyData.asset_holders;\n                    let supply = policyData.asset_minted;\n                    let volume = (policyData.total_volume / 1000000000000 * currency.value).toFixed(2);\n                    let thumbnail = getIpfs(policyData.thumbnail);\n                    let obj = {\n                        policy: props.policy,\n                        thumbnail: thumbnail,\n                        floorPrice: floorPrice,\n                        holders: holders,\n                        supply: supply,\n                        volume: volume\n                    };\n                    setDisplay(obj);\n                }\n            }\n        }\n        func();\n    }, [\n        props\n    ]);\n    // if metadata has been fetched\n    // find the ipfs link under 'image' metadata tag and store it\n    function getIpfs(ipfs) {\n        // convert all ipfs formats to the a searchable format that can be fetched in a <img> tag\n        try {\n            // links are sometimes stored in arrays\n            // this finds ipfs links in the array\n            if (Array.isArray(ipfs)) {\n                let newipfs = \"\";\n                for (const element of ipfs){\n                    newipfs = newipfs + element;\n                }\n                if (newipfs.startsWith(\"ba\")) {\n                    newipfs = \"http://dweb.link/ipfs/\" + ipfs;\n                    newipfs = newipfs.replace(/,/g, \"\");\n                }\n                return newipfs;\n            }\n            // normal ipfs in image tags\n            if (ipfs.startsWith(\"ipfs://\")) {\n                ipfs = ipfs.slice(7);\n                if (ipfs.startsWith(\"ipfs/\")) {\n                    ipfs = ipfs.slice(5);\n                }\n                ipfs = \"http://dweb.link/ipfs/\" + ipfs;\n            } else if (ipfs.startsWith(\"ipfs/\")) {\n                ipfs = ipfs.slice(5);\n                ipfs = \"http://dweb.link/ipfs/\" + ipfs;\n            } else if (ipfs.startsWith(\"Qm\")) {\n                ipfs = \"http://dweb.link/ipfs/\" + ipfs;\n            }\n        } catch (e) {\n            return null;\n        }\n        return ipfs;\n    }\n    async function getCnftPolicyData(policy) {\n        try {\n            const data1 = await fetch(\"https://api.opencnft.io/1/policy/\" + policy, {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data1.json();\n            if (data1.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    function copyText(event, text) {\n        navigator.clipboard.writeText(text).then(()=>{\n            // Update the button text to \"Copied!\"\n            const button = event.target;\n            event.target.innerText = \"Copied\";\n            setTimeout(()=>{\n                // Reset the button text after 1 second\n                button.textContent = \"Copy\";\n            }, 1000);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"policy-info\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"policy-item-info\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: display.thumbnail,\n                    width: 100,\n                    height: 100,\n                    alt: \"no img\",\n                    className: \"policy-thumbnail\"\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                    lineNumber: 107,\n                    columnNumber: 15\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                lineNumber: 106,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"policy-item-info\",\n                children: [\n                    \"Policy: \",\n                    display.policy.substring(0, 9),\n                    \"...\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                lineNumber: 109,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"policy-item-info\",\n                children: [\n                    \"Asset Name: \",\n                    data.assetName,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"policy-button\",\n                        onClick: (e)=>copyText(e, data.assetName),\n                        children: \"Copy\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                        lineNumber: 114,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                lineNumber: 112,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"policy-item-info\",\n                children: [\n                    \"Supply:\",\n                    display.supply\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                lineNumber: 121,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"policy-item-info\",\n                children: [\n                    \"Volume: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"currency\",\n                        children: currency.symbol\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                        lineNumber: 125,\n                        columnNumber: 21\n                    }, this),\n                    display.volume,\n                    \"m\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                lineNumber: 124,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"policy-item-info\",\n                children: [\n                    \"Floor Price: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"currency\",\n                        children: currency.symbol\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                        lineNumber: 128,\n                        columnNumber: 26\n                    }, this),\n                    display.floorPrice\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                lineNumber: 127,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n        lineNumber: 105,\n        columnNumber: 12\n    }, this);\n}\n_s(Policy, \"elI56tQpFMl/h2CKO9MLxaCdKeQ=\");\n_c = Policy;\nvar _c;\n$RefreshReg$(_c, \"Policy\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQVk1QyxTQUFTRyxNQUFNOzs7Ozs7b0JBQVFYLFFBQVFPLE1BQU07b0JBQUM7Ozs7Ozs7MEJBRXpFLDhEQUFDNEM7Z0JBQUlDLFdBQVU7O29CQUFtQjtrQ0FDckIsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUFZNUMsU0FBU0csTUFBTTs7Ozs7O29CQUFRWCxRQUFRSSxVQUFVOzs7Ozs7Ozs7Ozs7O0FBRzdGLENBQUM7R0EvSHVCTjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcG9saWN5LmpzPzI0NWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9saWN5KHByb3BzKXtcblxuICAgIGNvbnN0IFtkaXNwbGF5LCBzZXREaXNwbGF5XSA9IHVzZVN0YXRlKHtwb2xpY3k6ICcnLCB0aHVtYm5haWw6ICcvYmxhY2suanBlZycsIGZsb29yUHJpY2U6JycsIGhvbGRlcnM6ICcnLCBzdXBwbHkgOicnLCB2b2x1bWU6Jyd9KTtcbiAgICBjb25zdCBbY3VycmVuY3ksIHNldEN1cnJlbmN5XSA9IHVzZVN0YXRlKHt2YWx1ZTogMSwgc3ltYm9sOiAnJCd9KTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGZ1bmMoKXtcbiAgICAgICAgICBpZihwcm9wcy5wb2xpY3kgIT0gbnVsbCAmJiBwcm9wcy5wcmljZXMgIT0gbnVsbCl7XG4gICAgICAgICAgICBsZXQgcG9saWN5RGF0YSA9IGF3YWl0IGdldENuZnRQb2xpY3lEYXRhKHByb3BzLnBvbGljeSk7XG4gICAgICAgICAgICBpZihwb2xpY3lEYXRhICE9IG51bGwpe1xuXG4gICAgICAgICAgICAgIGxldCBjdXJyZW5jeSA9IHByb3BzLnByaWNlcy5jdXJyZW5jeTtcbiAgICAgICAgICAgICAgc2V0Q3VycmVuY3koY3VycmVuY3kpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGZsb29yUHJpY2UgPSAoKHBvbGljeURhdGEuZmxvb3JfcHJpY2UvMTAwMDAwMCkqY3VycmVuY3kudmFsdWUpLnRvRml4ZWQoMik7XG4gICAgICAgICAgICAgICAgbGV0IGhvbGRlcnMgPSBwb2xpY3lEYXRhLmFzc2V0X2hvbGRlcnM7XG4gICAgICAgICAgICAgICAgbGV0IHN1cHBseSA9IHBvbGljeURhdGEuYXNzZXRfbWludGVkO1xuICAgICAgICAgICAgICAgIGxldCB2b2x1bWUgPSAoKHBvbGljeURhdGEudG90YWxfdm9sdW1lLzEwMDAwMDAwMDAwMDApKmN1cnJlbmN5LnZhbHVlKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAgIGxldCB0aHVtYm5haWwgPSBnZXRJcGZzKHBvbGljeURhdGEudGh1bWJuYWlsKTtcblxuICAgICAgICAgICAgICAgIGxldCBvYmogPSB7cG9saWN5OiBwcm9wcy5wb2xpY3ksIHRodW1ibmFpbCA6IHRodW1ibmFpbCwgZmxvb3JQcmljZTogZmxvb3JQcmljZSwgaG9sZGVyczogaG9sZGVycywgc3VwcGx5OiBzdXBwbHksIHZvbHVtZTogdm9sdW1lfVxuXG4gICAgICAgICAgICAgICAgc2V0RGlzcGxheShvYmopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gXG5cbiAgICAgICAgfVxuICAgICAgICBmdW5jKCk7XG4gICAgfSwgW3Byb3BzXSlcblxuICAgICAgICAgICAvLyBpZiBtZXRhZGF0YSBoYXMgYmVlbiBmZXRjaGVkXG4gICAgLy8gZmluZCB0aGUgaXBmcyBsaW5rIHVuZGVyICdpbWFnZScgbWV0YWRhdGEgdGFnIGFuZCBzdG9yZSBpdFxuICAgIGZ1bmN0aW9uIGdldElwZnMoaXBmcyl7XG4gICAgICAvLyBjb252ZXJ0IGFsbCBpcGZzIGZvcm1hdHMgdG8gdGhlIGEgc2VhcmNoYWJsZSBmb3JtYXQgdGhhdCBjYW4gYmUgZmV0Y2hlZCBpbiBhIDxpbWc+IHRhZ1xuICAgICAgdHJ5e1xuXG4gICAgICAgIC8vIGxpbmtzIGFyZSBzb21ldGltZXMgc3RvcmVkIGluIGFycmF5c1xuICAgICAgICAvLyB0aGlzIGZpbmRzIGlwZnMgbGlua3MgaW4gdGhlIGFycmF5XG4gICAgICAgIGlmKEFycmF5LmlzQXJyYXkoaXBmcykpe1xuICAgICAgICAgIGxldCBuZXdpcGZzID0gXCJcIjtcbiAgICAgICAgICBmb3IoY29uc3QgZWxlbWVudCBvZiBpcGZzKXtcbiAgICAgICAgICAgIG5ld2lwZnMgPSBuZXdpcGZzICsgZWxlbWVudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYobmV3aXBmcy5zdGFydHNXaXRoKCdiYScpKXtcbiAgICAgICAgICAgIG5ld2lwZnMgPSBcImh0dHA6Ly9kd2ViLmxpbmsvaXBmcy9cIitpcGZzO1xuICAgICAgICAgICAgbmV3aXBmcyA9IG5ld2lwZnMucmVwbGFjZSgvLC9nLCAnJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXdpcGZzO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbm9ybWFsIGlwZnMgaW4gaW1hZ2UgdGFnc1xuICAgICAgICBpZihpcGZzLnN0YXJ0c1dpdGgoJ2lwZnM6Ly8nKSl7XG4gICAgICAgICAgaXBmcyA9IGlwZnMuc2xpY2UoNyk7XG4gICAgICAgICAgaWYoaXBmcy5zdGFydHNXaXRoKCdpcGZzLycpKXtcbiAgICAgICAgICAgIGlwZnMgPSBpcGZzLnNsaWNlKDUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpcGZzID0gXCJodHRwOi8vZHdlYi5saW5rL2lwZnMvXCIraXBmcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGlwZnMuc3RhcnRzV2l0aCgnaXBmcy8nKSl7XG4gICAgICAgICAgaXBmcyA9IGlwZnMuc2xpY2UoNSk7XG4gICAgICAgICAgaXBmcyA9IFwiaHR0cDovL2R3ZWIubGluay9pcGZzL1wiK2lwZnM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihpcGZzLnN0YXJ0c1dpdGgoJ1FtJykpe1xuICAgICAgICAgIGlwZnMgPSBcImh0dHA6Ly9kd2ViLmxpbmsvaXBmcy9cIitpcGZzO1xuICAgICAgICB9XG5cbiAgICAgIH1jYXRjaHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gaXBmcztcbiAgICBcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRDbmZ0UG9saWN5RGF0YShwb2xpY3kpe1xuICAgICAgICB0cnl7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5vcGVuY25mdC5pby8xL3BvbGljeS8nK3BvbGljeSxcbiAgICAgICAgICB7aGVhZGVyczp7cHJvamVjdF9pZDogJ21haW5uZXRvVzYxWVlTaU9vTFNhTlE2ZHpUcmtBRzRhelhWSXJ2aCcsICdjYWNoZS1jb250cm9sJzogJ21heC1hZ2U9MzE1MzYwMDAnfX0pO1xuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGRhdGEuanNvbigpO1xuICBcbiAgICAgICAgICBpZihkYXRhLnN0YXR1cyE9IDIwMCl7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBjb3B5VGV4dChldmVudCwgdGV4dCkge1xuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0ZXh0KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAvLyBVcGRhdGUgdGhlIGJ1dHRvbiB0ZXh0IHRvIFwiQ29waWVkIVwiXG4gICAgICAgICAgY29uc3QgYnV0dG9uID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgIGV2ZW50LnRhcmdldC5pbm5lclRleHQgPSBcIkNvcGllZFwiO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gUmVzZXQgdGhlIGJ1dHRvbiB0ZXh0IGFmdGVyIDEgc2Vjb25kXG4gICAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIkNvcHlcIjtcbiAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cblxuICAgIHJldHVybig8ZGl2IGNsYXNzTmFtZT1cInBvbGljeS1pbmZvXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvbGljeS1pdGVtLWluZm9cIj5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYyA9IHtkaXNwbGF5LnRodW1ibmFpbH0gd2lkdGg9ezEwMH0gaGVpZ2h0PXsxMDB9IGFsdD0nbm8gaW1nJyBjbGFzc05hbWU9XCJwb2xpY3ktdGh1bWJuYWlsXCIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvbGljeS1pdGVtLWluZm9cIj5cbiAgICAgICAgICAgIFBvbGljeTogeyhkaXNwbGF5LnBvbGljeSkuc3Vic3RyaW5nKDAsOSl9Li4uXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9saWN5LWl0ZW0taW5mb1wiPlxuICAgICAgICAgICAgICAgIEFzc2V0IE5hbWU6IHsoZGF0YS5hc3NldE5hbWUpfSAgIFxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvbGljeS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGNvcHlUZXh0KGUsIGRhdGEuYXNzZXROYW1lKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBDb3B5XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xpY3ktaXRlbS1pbmZvXCI+XG4gICAgICAgICAgICBTdXBwbHk6e2Rpc3BsYXkuc3VwcGx5fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvbGljeS1pdGVtLWluZm9cIj5cbiAgICAgICAgICAgIFZvbHVtZTogPGRpdiBjbGFzc05hbWU9XCJjdXJyZW5jeVwiPntjdXJyZW5jeS5zeW1ib2x9PC9kaXY+e2Rpc3BsYXkudm9sdW1lfW1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xpY3ktaXRlbS1pbmZvXCI+XG4gICAgICAgICAgICBGbG9vciBQcmljZTogPGRpdiBjbGFzc05hbWU9XCJjdXJyZW5jeVwiPntjdXJyZW5jeS5zeW1ib2x9PC9kaXY+e2Rpc3BsYXkuZmxvb3JQcmljZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2Pilcbn0iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlBvbGljeSIsInByb3BzIiwiZGlzcGxheSIsInNldERpc3BsYXkiLCJwb2xpY3kiLCJ0aHVtYm5haWwiLCJmbG9vclByaWNlIiwiaG9sZGVycyIsInN1cHBseSIsInZvbHVtZSIsImN1cnJlbmN5Iiwic2V0Q3VycmVuY3kiLCJ2YWx1ZSIsInN5bWJvbCIsImZ1bmMiLCJwcmljZXMiLCJwb2xpY3lEYXRhIiwiZ2V0Q25mdFBvbGljeURhdGEiLCJmbG9vcl9wcmljZSIsInRvRml4ZWQiLCJhc3NldF9ob2xkZXJzIiwiYXNzZXRfbWludGVkIiwidG90YWxfdm9sdW1lIiwiZ2V0SXBmcyIsIm9iaiIsImlwZnMiLCJBcnJheSIsImlzQXJyYXkiLCJuZXdpcGZzIiwiZWxlbWVudCIsInN0YXJ0c1dpdGgiLCJyZXBsYWNlIiwic2xpY2UiLCJkYXRhIiwiZmV0Y2giLCJoZWFkZXJzIiwicHJvamVjdF9pZCIsInJlcyIsImpzb24iLCJzdGF0dXMiLCJlcnJvciIsImNvcHlUZXh0IiwiZXZlbnQiLCJ0ZXh0IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidGhlbiIsImJ1dHRvbiIsInRhcmdldCIsImlubmVyVGV4dCIsInNldFRpbWVvdXQiLCJ0ZXh0Q29udGVudCIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0Iiwic3Vic3RyaW5nIiwiYXNzZXROYW1lIiwib25DbGljayIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/policy.js\n"));

/***/ })

});