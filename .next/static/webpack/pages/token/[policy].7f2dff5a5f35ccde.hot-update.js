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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Policy; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Policy(props) {\n    _s();\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function func() {\n            let policyData = await getCnftPolicyData(props.policy);\n            if (policyData != null) {\n                console.log(policyData);\n                let floorPrice = policyData.floor_price / 1000000;\n                let holders = policyData.asset_holders;\n                let supply = policyData.asset_minted;\n                let volume = (policyData.total_volume / 1000000000000).toFixed(2);\n                let thumbnail = getIpfs(policyData.thumbnail);\n                let out = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"policy-bar\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"policy-info-item\",\n                            children: [\n                                \"Floor Price  \",\n                                floorPrice\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                            lineNumber: 19,\n                            columnNumber: 19\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"policy-info-item\",\n                            children: [\n                                \"Holder \",\n                                holders\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                            lineNumber: 20,\n                            columnNumber: 19\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"policy-info-item\",\n                            children: [\n                                \"Assets Minted \",\n                                supply\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                            lineNumber: 21,\n                            columnNumber: 19\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"policy-info-item\",\n                            children: [\n                                \"Total Volume \",\n                                volume,\n                                \"M\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                            lineNumber: 22,\n                            columnNumber: 19\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"policy-info-item\",\n                            children: [\n                                \"thumbnail \",\n                                thumbnail\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                            lineNumber: 23,\n                            columnNumber: 19\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                    lineNumber: 18,\n                    columnNumber: 27\n                }, this);\n                setDisplay(out);\n            }\n        }\n        func();\n    }, [\n        props\n    ]);\n    // if metadata has been fetched\n    // find the ipfs link under 'image' metadata tag and store it\n    function getIpfs(json) {\n        const keys = Object.keys(json);\n        const values = Object.values(json);\n        let ipfs = \"\";\n        for(let i = 0; i < keys.length; i++){\n            if (keys[i] == \"thumbnail\") {\n                ipfs = values[i];\n            }\n            // fungible tokens will have a 'logo' instead of 'image' tag\n            if (keys[i] == \"logo\") {\n                ipfs = \"data:image/png;base64,\" + values[i];\n            }\n        }\n        // convert all ipfs formats to the a searchable format that can be fetched in a <img> tag\n        try {\n            // links are sometimes stored in arrays\n            // this finds ipfs links in the array\n            if (Array.isArray(ipfs)) {\n                let newipfs = \"\";\n                for (const element of ipfs){\n                    newipfs = newipfs + element;\n                }\n                if (newipfs.startsWith(\"ba\")) {\n                    newipfs = \"http://dweb.link/ipfs/\" + ipfs;\n                    newipfs = newipfs.replace(/,/g, \"\");\n                }\n                return newipfs;\n            }\n            // normal ipfs in image tags\n            if (ipfs.startsWith(\"ipfs://\")) {\n                ipfs = ipfs.slice(7);\n                if (ipfs.startsWith(\"ipfs/\")) {\n                    ipfs = ipfs.slice(5);\n                }\n                ipfs = \"http://dweb.link/ipfs/\" + ipfs;\n            } else if (ipfs.startsWith(\"ipfs/\")) {\n                ipfs = ipfs.slice(5);\n                ipfs = \"http://dweb.link/ipfs/\" + ipfs;\n            } else if (ipfs.startsWith(\"Qm\")) {\n                ipfs = \"http://dweb.link/ipfs/\" + ipfs;\n            }\n        } catch (e) {\n            return null;\n        }\n        return ipfs;\n    }\n    async function getCnftPolicyData(policy) {\n        try {\n            const data = await fetch(\"https://api.opencnft.io/1/policy/\" + policy, {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"policy-info\",\n        children: display\n    }, void 0, false, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n        lineNumber: 107,\n        columnNumber: 12\n    }, this);\n}\n_s(Policy, \"V4g0lk46myXpHjwjMKzQe3gdcis=\");\n_c = Policy;\nvar _c;\n$RefreshReg$(_c, \"Policy\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1FBRUgsRUFBQyxVQUFLO1lBQ0osT0FBTyxJQUFJO1FBQ2I7UUFDQSxPQUFPQTtJQUVUO0lBRUEsZUFBZXRCLGtCQUFrQkMsTUFBTSxFQUFDO1FBQ3BDLElBQUc7WUFDRCxNQUFNK0IsT0FBTyxNQUFNQyxNQUFNLHNDQUFvQ2hDLFFBQzdEO2dCQUFDaUMsU0FBUTtvQkFBQ0MsWUFBWTtvQkFBMkMsaUJBQWlCO2dCQUFrQjtZQUFDO1lBQ3JHLE1BQU1DLE1BQU0sTUFBTUosS0FBS2QsSUFBSTtZQUUzQixJQUFHYyxLQUFLSyxNQUFNLElBQUcsS0FBSTtnQkFDbkIsT0FBTyxJQUFJO1lBQ2IsQ0FBQztZQUNELE9BQU9EO1FBQ1QsRUFBQyxPQUFNRSxPQUFNO1lBQ1gsT0FBTyxJQUFJO1FBQ2I7SUFDRjtJQUdGLHFCQUFPLDhEQUFDdEI7UUFBSUMsV0FBVTtrQkFBZXJCOzs7Ozs7QUFDekMsQ0FBQztHQXpHdUJGO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wb2xpY3kuanM/MjQ1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9saWN5KHByb3BzKXtcblxuICAgIGNvbnN0IFtkaXNwbGF5LCBzZXREaXNwbGF5XSA9IHVzZVN0YXRlKCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBmdW5jKCl7XG4gICAgICAgICAgICBsZXQgcG9saWN5RGF0YSA9IGF3YWl0IGdldENuZnRQb2xpY3lEYXRhKHByb3BzLnBvbGljeSk7XG4gICAgICAgICAgICBpZihwb2xpY3lEYXRhICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBvbGljeURhdGEpO1xuICAgICAgICAgICAgICAgIGxldCBmbG9vclByaWNlID0gcG9saWN5RGF0YS5mbG9vcl9wcmljZS8xMDAwMDAwO1xuICAgICAgICAgICAgICAgIGxldCBob2xkZXJzID0gcG9saWN5RGF0YS5hc3NldF9ob2xkZXJzO1xuICAgICAgICAgICAgICAgIGxldCBzdXBwbHkgPSBwb2xpY3lEYXRhLmFzc2V0X21pbnRlZDtcbiAgICAgICAgICAgICAgICBsZXQgdm9sdW1lID0gKHBvbGljeURhdGEudG90YWxfdm9sdW1lLzEwMDAwMDAwMDAwMDApLnRvRml4ZWQoMik7XG4gICAgICAgICAgICAgICAgbGV0IHRodW1ibmFpbCA9IGdldElwZnMocG9saWN5RGF0YS50aHVtYm5haWwpO1xuXG4gICAgICAgICAgICAgICAgbGV0IG91dCA9IDxkaXYgY2xhc3NOYW1lPVwicG9saWN5LWJhclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xpY3ktaW5mby1pdGVtXCI+Rmxvb3IgUHJpY2UgIHtmbG9vclByaWNlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xpY3ktaW5mby1pdGVtXCI+SG9sZGVyIHtob2xkZXJzfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xpY3ktaW5mby1pdGVtXCI+QXNzZXRzIE1pbnRlZCB7c3VwcGx5fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xpY3ktaW5mby1pdGVtXCI+VG90YWwgVm9sdW1lIHt2b2x1bWV9TTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xpY3ktaW5mby1pdGVtXCI+dGh1bWJuYWlsIHt0aHVtYm5haWx9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+O1xuXG4gICAgICAgICAgICAgICAgc2V0RGlzcGxheShvdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmMoKTtcbiAgICB9LCBbcHJvcHNdKVxuXG4gICAgICAgICAgIC8vIGlmIG1ldGFkYXRhIGhhcyBiZWVuIGZldGNoZWRcbiAgICAvLyBmaW5kIHRoZSBpcGZzIGxpbmsgdW5kZXIgJ2ltYWdlJyBtZXRhZGF0YSB0YWcgYW5kIHN0b3JlIGl0XG4gICAgZnVuY3Rpb24gZ2V0SXBmcyhqc29uKXtcbiAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhqc29uKTtcbiAgICAgIGNvbnN0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXMoanNvbik7XG4gICAgICBsZXQgaXBmcyA9IFwiXCI7XG4gICAgICBmb3IobGV0IGk9MDtpPGtleXMubGVuZ3RoO2krKyl7XG5cblxuICAgICAgICBpZihrZXlzW2ldID09IFwidGh1bWJuYWlsXCIpe1xuICAgICAgICAgIGlwZnMgPSB2YWx1ZXNbaV07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIGZ1bmdpYmxlIHRva2VucyB3aWxsIGhhdmUgYSAnbG9nbycgaW5zdGVhZCBvZiAnaW1hZ2UnIHRhZ1xuICAgICAgICBpZihrZXlzW2ldID09IFwibG9nb1wiKXtcbiAgICAgICAgICBpcGZzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsXCIrdmFsdWVzW2ldXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gY29udmVydCBhbGwgaXBmcyBmb3JtYXRzIHRvIHRoZSBhIHNlYXJjaGFibGUgZm9ybWF0IHRoYXQgY2FuIGJlIGZldGNoZWQgaW4gYSA8aW1nPiB0YWdcbiAgICAgIHRyeXtcblxuICAgICAgICAvLyBsaW5rcyBhcmUgc29tZXRpbWVzIHN0b3JlZCBpbiBhcnJheXNcbiAgICAgICAgLy8gdGhpcyBmaW5kcyBpcGZzIGxpbmtzIGluIHRoZSBhcnJheVxuICAgICAgICBpZihBcnJheS5pc0FycmF5KGlwZnMpKXtcbiAgICAgICAgICBsZXQgbmV3aXBmcyA9IFwiXCI7XG4gICAgICAgICAgZm9yKGNvbnN0IGVsZW1lbnQgb2YgaXBmcyl7XG4gICAgICAgICAgICBuZXdpcGZzID0gbmV3aXBmcyArIGVsZW1lbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKG5ld2lwZnMuc3RhcnRzV2l0aCgnYmEnKSl7XG4gICAgICAgICAgICBuZXdpcGZzID0gXCJodHRwOi8vZHdlYi5saW5rL2lwZnMvXCIraXBmcztcbiAgICAgICAgICAgIG5ld2lwZnMgPSBuZXdpcGZzLnJlcGxhY2UoLywvZywgJycpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3aXBmcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG5vcm1hbCBpcGZzIGluIGltYWdlIHRhZ3NcbiAgICAgICAgaWYoaXBmcy5zdGFydHNXaXRoKCdpcGZzOi8vJykpe1xuICAgICAgICAgIGlwZnMgPSBpcGZzLnNsaWNlKDcpO1xuICAgICAgICAgIGlmKGlwZnMuc3RhcnRzV2l0aCgnaXBmcy8nKSl7XG4gICAgICAgICAgICBpcGZzID0gaXBmcy5zbGljZSg1KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaXBmcyA9IFwiaHR0cDovL2R3ZWIubGluay9pcGZzL1wiK2lwZnM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihpcGZzLnN0YXJ0c1dpdGgoJ2lwZnMvJykpe1xuICAgICAgICAgIGlwZnMgPSBpcGZzLnNsaWNlKDUpO1xuICAgICAgICAgIGlwZnMgPSBcImh0dHA6Ly9kd2ViLmxpbmsvaXBmcy9cIitpcGZzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoaXBmcy5zdGFydHNXaXRoKCdRbScpKXtcbiAgICAgICAgICBpcGZzID0gXCJodHRwOi8vZHdlYi5saW5rL2lwZnMvXCIraXBmcztcbiAgICAgICAgfVxuXG4gICAgICB9Y2F0Y2h7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlwZnM7XG4gICAgXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0Q25mdFBvbGljeURhdGEocG9saWN5KXtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkub3BlbmNuZnQuaW8vMS9wb2xpY3kvJytwb2xpY3ksXG4gICAgICAgICAge2hlYWRlcnM6e3Byb2plY3RfaWQ6ICdtYWlubmV0b1c2MVlZU2lPb0xTYU5RNmR6VHJrQUc0YXpYVklydmgnLCAnY2FjaGUtY29udHJvbCc6ICdtYXgtYWdlPTMxNTM2MDAwJ319KTtcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBkYXRhLmpzb24oKTtcbiAgXG4gICAgICAgICAgaWYoZGF0YS5zdGF0dXMhPSAyMDApe1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuXG4gICAgcmV0dXJuKDxkaXYgY2xhc3NOYW1lPVwicG9saWN5LWluZm9cIj57ZGlzcGxheX08L2Rpdj4pXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUG9saWN5IiwicHJvcHMiLCJkaXNwbGF5Iiwic2V0RGlzcGxheSIsImZ1bmMiLCJwb2xpY3lEYXRhIiwiZ2V0Q25mdFBvbGljeURhdGEiLCJwb2xpY3kiLCJjb25zb2xlIiwibG9nIiwiZmxvb3JQcmljZSIsImZsb29yX3ByaWNlIiwiaG9sZGVycyIsImFzc2V0X2hvbGRlcnMiLCJzdXBwbHkiLCJhc3NldF9taW50ZWQiLCJ2b2x1bWUiLCJ0b3RhbF92b2x1bWUiLCJ0b0ZpeGVkIiwidGh1bWJuYWlsIiwiZ2V0SXBmcyIsIm91dCIsImRpdiIsImNsYXNzTmFtZSIsImpzb24iLCJrZXlzIiwiT2JqZWN0IiwidmFsdWVzIiwiaXBmcyIsImkiLCJsZW5ndGgiLCJBcnJheSIsImlzQXJyYXkiLCJuZXdpcGZzIiwiZWxlbWVudCIsInN0YXJ0c1dpdGgiLCJyZXBsYWNlIiwic2xpY2UiLCJkYXRhIiwiZmV0Y2giLCJoZWFkZXJzIiwicHJvamVjdF9pZCIsInJlcyIsInN0YXR1cyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/policy.js\n"));

/***/ })

});