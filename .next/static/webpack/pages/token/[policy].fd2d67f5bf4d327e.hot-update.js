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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Policy; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/next/dist/compiled/buffer/index.js\")[\"Buffer\"];\n\nvar _s = $RefreshSig$();\n\n\nfunction Policy(props) {\n    _s();\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        policy: \"\",\n        thumbnail: \"/black.jpeg\",\n        floorPrice: \"\",\n        holders: \"\",\n        supply: \"\",\n        volume: \"\"\n    });\n    const [currency, setCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        value: 1,\n        symbol: \"$\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        async function func() {\n            if (props.policy != null && props.prices != null) {\n                let policyData = await getCnftPolicyData(props.policy);\n                if (policyData != null) {\n                    let currency = props.prices.currency;\n                    setCurrency(currency);\n                    let originalString = Buffer.from(props.policy, \"hex\").toString();\n                    console.log(originalString);\n                    let floorPrice = (policyData.floor_price / 1000000 * currency.value).toFixed(2);\n                    let holders = policyData.asset_holders;\n                    let supply = policyData.asset_minted;\n                    let volume = (policyData.total_volume / 1000000000000 * currency.value).toFixed(2);\n                    let thumbnail = getIpfs(policyData.thumbnail);\n                    let obj = {\n                        policy: props.policy,\n                        thumbnail: thumbnail,\n                        floorPrice: floorPrice,\n                        holders: holders,\n                        supply: supply,\n                        volume: volume\n                    };\n                    setDisplay(obj);\n                }\n            }\n        }\n        func();\n    }, [\n        props\n    ]);\n    // if metadata has been fetched\n    // find the ipfs link under 'image' metadata tag and store it\n    function getIpfs(ipfs) {\n        // convert all ipfs formats to the a searchable format that can be fetched in a <img> tag\n        try {\n            // links are sometimes stored in arrays\n            // this finds ipfs links in the array\n            if (Array.isArray(ipfs)) {\n                let newipfs = \"\";\n                for (const element of ipfs){\n                    newipfs = newipfs + element;\n                }\n                if (newipfs.startsWith(\"ba\")) {\n                    newipfs = \"http://dweb.link/ipfs/\" + ipfs;\n                    newipfs = newipfs.replace(/,/g, \"\");\n                }\n                return newipfs;\n            }\n            // normal ipfs in image tags\n            if (ipfs.startsWith(\"ipfs://\")) {\n                ipfs = ipfs.slice(7);\n                if (ipfs.startsWith(\"ipfs/\")) {\n                    ipfs = ipfs.slice(5);\n                }\n                ipfs = \"http://dweb.link/ipfs/\" + ipfs;\n            } else if (ipfs.startsWith(\"ipfs/\")) {\n                ipfs = ipfs.slice(5);\n                ipfs = \"http://dweb.link/ipfs/\" + ipfs;\n            } else if (ipfs.startsWith(\"Qm\")) {\n                ipfs = \"http://dweb.link/ipfs/\" + ipfs;\n            }\n        } catch (e) {\n            return null;\n        }\n        return ipfs;\n    }\n    async function getCnftPolicyData(policy) {\n        try {\n            const data = await fetch(\"https://api.opencnft.io/1/policy/\" + policy, {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    function copyText(event, text) {\n        navigator.clipboard.writeText(text).then(()=>{\n            // Update the button text to \"Copied!\"\n            const button = event.target;\n            event.target.innerText = \"Copied\";\n            setTimeout(()=>{\n                // Reset the button text after 1 second\n                button.textContent = \"Copy\";\n            }, 1000);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"policy-info\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"policy-item-info\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: display.thumbnail,\n                    width: 100,\n                    height: 100,\n                    alt: \"no img\",\n                    className: \"policy-thumbnail\"\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                    lineNumber: 110,\n                    columnNumber: 15\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                lineNumber: 109,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"policy-item-info\",\n                children: [\n                    \"Policy: \",\n                    display.policy.substring(0, 9),\n                    \"...\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"policy-button\",\n                        onClick: (e)=>copyText(e, display.policy),\n                        children: \"Copy\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                        lineNumber: 114,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                lineNumber: 112,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"policy-item-info\",\n                children: [\n                    \"Supply:\",\n                    display.supply\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                lineNumber: 121,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"policy-item-info\",\n                children: [\n                    \"Volume: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"currency\",\n                        children: currency.symbol\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                        lineNumber: 125,\n                        columnNumber: 21\n                    }, this),\n                    display.volume,\n                    \"m\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                lineNumber: 124,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"policy-item-info\",\n                children: [\n                    \"Floor Price: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"currency\",\n                        children: currency.symbol\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                        lineNumber: 128,\n                        columnNumber: 26\n                    }, this),\n                    display.floorPrice\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                lineNumber: 127,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n        lineNumber: 108,\n        columnNumber: 12\n    }, this);\n}\n_s(Policy, \"elI56tQpFMl/h2CKO9MLxaCdKeQ=\");\n_c = Policy;\nvar _c;\n$RefreshReg$(_c, \"Policy\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9saWN5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDWTtBQUU1QixTQUFTRyxPQUFPQyxLQUFLLEVBQUM7O0lBRWpDLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSiwrQ0FBUUEsQ0FBQztRQUFDSyxRQUFRO1FBQUlDLFdBQVc7UUFBZUMsWUFBVztRQUFJQyxTQUFTO1FBQUlDLFFBQVE7UUFBSUMsUUFBTztJQUFFO0lBQy9ILE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHWiwrQ0FBUUEsQ0FBQztRQUFDYSxPQUFPO1FBQUdDLFFBQVE7SUFBRztJQUUvRGYsZ0RBQVNBLENBQUMsSUFBTTtRQUNaLGVBQWVnQixPQUFNO1lBQ25CLElBQUdiLE1BQU1HLE1BQU0sSUFBSSxJQUFJLElBQUlILE1BQU1jLE1BQU0sSUFBSSxJQUFJLEVBQUM7Z0JBQzlDLElBQUlDLGFBQWEsTUFBTUMsa0JBQWtCaEIsTUFBTUcsTUFBTTtnQkFDckQsSUFBR1ksY0FBYyxJQUFJLEVBQUM7b0JBRXBCLElBQUlOLFdBQVdULE1BQU1jLE1BQU0sQ0FBQ0wsUUFBUTtvQkFDcENDLFlBQVlEO29CQUVaLElBQUlRLGlCQUFpQkMsTUFBTUEsQ0FBQ0MsSUFBSSxDQUFDbkIsTUFBTUcsTUFBTSxFQUFFLE9BQU9pQixRQUFRO29CQUM5REMsUUFBUUMsR0FBRyxDQUFDTDtvQkFFVixJQUFJWixhQUFhLENBQUMsV0FBWWtCLFdBQVcsR0FBQyxVQUFTZCxTQUFTRSxLQUFLLEVBQUVhLE9BQU8sQ0FBQztvQkFDM0UsSUFBSWxCLFVBQVVTLFdBQVdVLGFBQWE7b0JBQ3RDLElBQUlsQixTQUFTUSxXQUFXVyxZQUFZO29CQUNwQyxJQUFJbEIsU0FBUyxDQUFDLFdBQVltQixZQUFZLEdBQUMsZ0JBQWVsQixTQUFTRSxLQUFLLEVBQUVhLE9BQU8sQ0FBQztvQkFDOUUsSUFBSXBCLFlBQVl3QixRQUFRYixXQUFXWCxTQUFTO29CQUU1QyxJQUFJeUIsTUFBTTt3QkFBQzFCLFFBQVFILE1BQU1HLE1BQU07d0JBQUVDLFdBQVlBO3dCQUFXQyxZQUFZQTt3QkFBWUMsU0FBU0E7d0JBQVNDLFFBQVFBO3dCQUFRQyxRQUFRQTtvQkFBTTtvQkFFaElOLFdBQVcyQjtnQkFDZixDQUFDO1lBQ0gsQ0FBQztRQUVIO1FBQ0FoQjtJQUNKLEdBQUc7UUFBQ2I7S0FBTTtJQUVILCtCQUErQjtJQUN0Qyw2REFBNkQ7SUFDN0QsU0FBUzRCLFFBQVFFLElBQUksRUFBQztRQUNwQix5RkFBeUY7UUFDekYsSUFBRztZQUVELHVDQUF1QztZQUN2QyxxQ0FBcUM7WUFDckMsSUFBR0MsTUFBTUMsT0FBTyxDQUFDRixPQUFNO2dCQUNyQixJQUFJRyxVQUFVO2dCQUNkLEtBQUksTUFBTUMsV0FBV0osS0FBSztvQkFDeEJHLFVBQVVBLFVBQVVDO2dCQUN0QjtnQkFDQSxJQUFHRCxRQUFRRSxVQUFVLENBQUMsT0FBTTtvQkFDMUJGLFVBQVUsMkJBQXlCSDtvQkFDbkNHLFVBQVVBLFFBQVFHLE9BQU8sQ0FBQyxNQUFNO2dCQUNsQyxDQUFDO2dCQUNELE9BQU9IO1lBQ1QsQ0FBQztZQUVELDRCQUE0QjtZQUM1QixJQUFHSCxLQUFLSyxVQUFVLENBQUMsWUFBVztnQkFDNUJMLE9BQU9BLEtBQUtPLEtBQUssQ0FBQztnQkFDbEIsSUFBR1AsS0FBS0ssVUFBVSxDQUFDLFVBQVM7b0JBQzFCTCxPQUFPQSxLQUFLTyxLQUFLLENBQUM7Z0JBQ3BCLENBQUM7Z0JBQ0RQLE9BQU8sMkJBQXlCQTtZQUNsQyxPQUNLLElBQUdBLEtBQUtLLFVBQVUsQ0FBQyxVQUFTO2dCQUMvQkwsT0FBT0EsS0FBS08sS0FBSyxDQUFDO2dCQUNsQlAsT0FBTywyQkFBeUJBO1lBQ2xDLE9BQ0ssSUFBR0EsS0FBS0ssVUFBVSxDQUFDLE9BQU07Z0JBQzVCTCxPQUFPLDJCQUF5QkE7WUFDbEMsQ0FBQztRQUVILEVBQUMsVUFBSztZQUNKLE9BQU8sSUFBSTtRQUNiO1FBQ0EsT0FBT0E7SUFFVDtJQUVBLGVBQWVkLGtCQUFrQmIsTUFBTSxFQUFDO1FBQ3BDLElBQUc7WUFDRCxNQUFNbUMsT0FBTyxNQUFNQyxNQUFNLHNDQUFvQ3BDLFFBQzdEO2dCQUFDcUMsU0FBUTtvQkFBQ0MsWUFBWTtvQkFBMkMsaUJBQWlCO2dCQUFrQjtZQUFDO1lBQ3JHLE1BQU1DLE1BQU0sTUFBTUosS0FBS0ssSUFBSTtZQUUzQixJQUFHTCxLQUFLTSxNQUFNLElBQUcsS0FBSTtnQkFDbkIsT0FBTyxJQUFJO1lBQ2IsQ0FBQztZQUNELE9BQU9GO1FBQ1QsRUFBQyxPQUFNRyxPQUFNO1lBQ1gsT0FBTyxJQUFJO1FBQ2I7SUFDRjtJQUVBLFNBQVNDLFNBQVNDLEtBQUssRUFBRUMsSUFBSSxFQUFFO1FBQzdCQyxVQUFVQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ0gsTUFBTUksSUFBSSxDQUFDLElBQU07WUFDN0Msc0NBQXNDO1lBQ3RDLE1BQU1DLFNBQVNOLE1BQU1PLE1BQU07WUFDM0JQLE1BQU1PLE1BQU0sQ0FBQ0MsU0FBUyxHQUFHO1lBQ3pCQyxXQUFXLElBQU07Z0JBQ2YsdUNBQXVDO2dCQUN2Q0gsT0FBT0ksV0FBVyxHQUFHO1lBQ3ZCLEdBQUc7UUFDTDtJQUNGO0lBR0YscUJBQU8sOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNkLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQy9ELG1EQUFLQTtvQkFBQ2dFLEtBQU8zRCxRQUFRRyxTQUFTO29CQUFFeUQsT0FBTztvQkFBS0MsUUFBUTtvQkFBS0MsS0FBSTtvQkFBU0osV0FBVTs7Ozs7Ozs7Ozs7MEJBRW5GLDhEQUFDRDtnQkFBSUMsV0FBVTs7b0JBQW1CO29CQUNwQjFELFFBQVFFLE1BQU0sQ0FBRTZELFNBQVMsQ0FBQyxHQUFFO29CQUFHO2tDQUN6Qyw4REFBQ1g7d0JBQ0NNLFdBQVU7d0JBQ1ZNLFNBQVMsQ0FBQ0MsSUFBTXBCLFNBQVNvQixHQUFHakUsUUFBUUUsTUFBTTtrQ0FDM0M7Ozs7Ozs7Ozs7OzswQkFJTCw4REFBQ3VEO2dCQUFJQyxXQUFVOztvQkFBbUI7b0JBQzFCMUQsUUFBUU0sTUFBTTs7Ozs7OzswQkFFdEIsOERBQUNtRDtnQkFBSUMsV0FBVTs7b0JBQW1CO2tDQUMxQiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQVlsRCxTQUFTRyxNQUFNOzs7Ozs7b0JBQVFYLFFBQVFPLE1BQU07b0JBQUM7Ozs7Ozs7MEJBRXpFLDhEQUFDa0Q7Z0JBQUlDLFdBQVU7O29CQUFtQjtrQ0FDckIsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUFZbEQsU0FBU0csTUFBTTs7Ozs7O29CQUFRWCxRQUFRSSxVQUFVOzs7Ozs7Ozs7Ozs7O0FBRzdGLENBQUM7R0EvSHVCTjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcG9saWN5LmpzPzI0NWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9saWN5KHByb3BzKXtcblxuICAgIGNvbnN0IFtkaXNwbGF5LCBzZXREaXNwbGF5XSA9IHVzZVN0YXRlKHtwb2xpY3k6ICcnLCB0aHVtYm5haWw6ICcvYmxhY2suanBlZycsIGZsb29yUHJpY2U6JycsIGhvbGRlcnM6ICcnLCBzdXBwbHkgOicnLCB2b2x1bWU6Jyd9KTtcbiAgICBjb25zdCBbY3VycmVuY3ksIHNldEN1cnJlbmN5XSA9IHVzZVN0YXRlKHt2YWx1ZTogMSwgc3ltYm9sOiAnJCd9KTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGZ1bmMoKXtcbiAgICAgICAgICBpZihwcm9wcy5wb2xpY3kgIT0gbnVsbCAmJiBwcm9wcy5wcmljZXMgIT0gbnVsbCl7XG4gICAgICAgICAgICBsZXQgcG9saWN5RGF0YSA9IGF3YWl0IGdldENuZnRQb2xpY3lEYXRhKHByb3BzLnBvbGljeSk7XG4gICAgICAgICAgICBpZihwb2xpY3lEYXRhICE9IG51bGwpe1xuXG4gICAgICAgICAgICAgIGxldCBjdXJyZW5jeSA9IHByb3BzLnByaWNlcy5jdXJyZW5jeTtcbiAgICAgICAgICAgICAgc2V0Q3VycmVuY3koY3VycmVuY3kpO1xuXG4gICAgICAgICAgICAgIGxldCBvcmlnaW5hbFN0cmluZyA9IEJ1ZmZlci5mcm9tKHByb3BzLnBvbGljeSwgJ2hleCcpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKG9yaWdpbmFsU3RyaW5nKTtcblxuICAgICAgICAgICAgICAgIGxldCBmbG9vclByaWNlID0gKChwb2xpY3lEYXRhLmZsb29yX3ByaWNlLzEwMDAwMDApKmN1cnJlbmN5LnZhbHVlKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAgIGxldCBob2xkZXJzID0gcG9saWN5RGF0YS5hc3NldF9ob2xkZXJzO1xuICAgICAgICAgICAgICAgIGxldCBzdXBwbHkgPSBwb2xpY3lEYXRhLmFzc2V0X21pbnRlZDtcbiAgICAgICAgICAgICAgICBsZXQgdm9sdW1lID0gKChwb2xpY3lEYXRhLnRvdGFsX3ZvbHVtZS8xMDAwMDAwMDAwMDAwKSpjdXJyZW5jeS52YWx1ZSkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICBsZXQgdGh1bWJuYWlsID0gZ2V0SXBmcyhwb2xpY3lEYXRhLnRodW1ibmFpbCk7XG5cbiAgICAgICAgICAgICAgICBsZXQgb2JqID0ge3BvbGljeTogcHJvcHMucG9saWN5LCB0aHVtYm5haWwgOiB0aHVtYm5haWwsIGZsb29yUHJpY2U6IGZsb29yUHJpY2UsIGhvbGRlcnM6IGhvbGRlcnMsIHN1cHBseTogc3VwcGx5LCB2b2x1bWU6IHZvbHVtZX1cblxuICAgICAgICAgICAgICAgIHNldERpc3BsYXkob2JqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IFxuXG4gICAgICAgIH1cbiAgICAgICAgZnVuYygpO1xuICAgIH0sIFtwcm9wc10pXG5cbiAgICAgICAgICAgLy8gaWYgbWV0YWRhdGEgaGFzIGJlZW4gZmV0Y2hlZFxuICAgIC8vIGZpbmQgdGhlIGlwZnMgbGluayB1bmRlciAnaW1hZ2UnIG1ldGFkYXRhIHRhZyBhbmQgc3RvcmUgaXRcbiAgICBmdW5jdGlvbiBnZXRJcGZzKGlwZnMpe1xuICAgICAgLy8gY29udmVydCBhbGwgaXBmcyBmb3JtYXRzIHRvIHRoZSBhIHNlYXJjaGFibGUgZm9ybWF0IHRoYXQgY2FuIGJlIGZldGNoZWQgaW4gYSA8aW1nPiB0YWdcbiAgICAgIHRyeXtcblxuICAgICAgICAvLyBsaW5rcyBhcmUgc29tZXRpbWVzIHN0b3JlZCBpbiBhcnJheXNcbiAgICAgICAgLy8gdGhpcyBmaW5kcyBpcGZzIGxpbmtzIGluIHRoZSBhcnJheVxuICAgICAgICBpZihBcnJheS5pc0FycmF5KGlwZnMpKXtcbiAgICAgICAgICBsZXQgbmV3aXBmcyA9IFwiXCI7XG4gICAgICAgICAgZm9yKGNvbnN0IGVsZW1lbnQgb2YgaXBmcyl7XG4gICAgICAgICAgICBuZXdpcGZzID0gbmV3aXBmcyArIGVsZW1lbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKG5ld2lwZnMuc3RhcnRzV2l0aCgnYmEnKSl7XG4gICAgICAgICAgICBuZXdpcGZzID0gXCJodHRwOi8vZHdlYi5saW5rL2lwZnMvXCIraXBmcztcbiAgICAgICAgICAgIG5ld2lwZnMgPSBuZXdpcGZzLnJlcGxhY2UoLywvZywgJycpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3aXBmcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG5vcm1hbCBpcGZzIGluIGltYWdlIHRhZ3NcbiAgICAgICAgaWYoaXBmcy5zdGFydHNXaXRoKCdpcGZzOi8vJykpe1xuICAgICAgICAgIGlwZnMgPSBpcGZzLnNsaWNlKDcpO1xuICAgICAgICAgIGlmKGlwZnMuc3RhcnRzV2l0aCgnaXBmcy8nKSl7XG4gICAgICAgICAgICBpcGZzID0gaXBmcy5zbGljZSg1KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaXBmcyA9IFwiaHR0cDovL2R3ZWIubGluay9pcGZzL1wiK2lwZnM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihpcGZzLnN0YXJ0c1dpdGgoJ2lwZnMvJykpe1xuICAgICAgICAgIGlwZnMgPSBpcGZzLnNsaWNlKDUpO1xuICAgICAgICAgIGlwZnMgPSBcImh0dHA6Ly9kd2ViLmxpbmsvaXBmcy9cIitpcGZzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoaXBmcy5zdGFydHNXaXRoKCdRbScpKXtcbiAgICAgICAgICBpcGZzID0gXCJodHRwOi8vZHdlYi5saW5rL2lwZnMvXCIraXBmcztcbiAgICAgICAgfVxuXG4gICAgICB9Y2F0Y2h7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlwZnM7XG4gICAgXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0Q25mdFBvbGljeURhdGEocG9saWN5KXtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkub3BlbmNuZnQuaW8vMS9wb2xpY3kvJytwb2xpY3ksXG4gICAgICAgICAge2hlYWRlcnM6e3Byb2plY3RfaWQ6ICdtYWlubmV0b1c2MVlZU2lPb0xTYU5RNmR6VHJrQUc0YXpYVklydmgnLCAnY2FjaGUtY29udHJvbCc6ICdtYXgtYWdlPTMxNTM2MDAwJ319KTtcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBkYXRhLmpzb24oKTtcbiAgXG4gICAgICAgICAgaWYoZGF0YS5zdGF0dXMhPSAyMDApe1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gY29weVRleHQoZXZlbnQsIHRleHQpIHtcbiAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgLy8gVXBkYXRlIHRoZSBidXR0b24gdGV4dCB0byBcIkNvcGllZCFcIlxuICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICBldmVudC50YXJnZXQuaW5uZXJUZXh0ID0gXCJDb3BpZWRcIjtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIC8vIFJlc2V0IHRoZSBidXR0b24gdGV4dCBhZnRlciAxIHNlY29uZFxuICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJDb3B5XCI7XG4gICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG5cbiAgICByZXR1cm4oPGRpdiBjbGFzc05hbWU9XCJwb2xpY3ktaW5mb1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xpY3ktaXRlbS1pbmZvXCI+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmMgPSB7ZGlzcGxheS50aHVtYm5haWx9IHdpZHRoPXsxMDB9IGhlaWdodD17MTAwfSBhbHQ9J25vIGltZycgY2xhc3NOYW1lPVwicG9saWN5LXRodW1ibmFpbFwiLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xpY3ktaXRlbS1pbmZvXCI+XG4gICAgICAgICAgICAgICAgUG9saWN5OiB7KGRpc3BsYXkucG9saWN5KS5zdWJzdHJpbmcoMCw5KX0uLi4gICBcbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb2xpY3ktYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBjb3B5VGV4dChlLCBkaXNwbGF5LnBvbGljeSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQ29weVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9saWN5LWl0ZW0taW5mb1wiPlxuICAgICAgICAgICAgU3VwcGx5OntkaXNwbGF5LnN1cHBseX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xpY3ktaXRlbS1pbmZvXCI+XG4gICAgICAgICAgICBWb2x1bWU6IDxkaXYgY2xhc3NOYW1lPVwiY3VycmVuY3lcIj57Y3VycmVuY3kuc3ltYm9sfTwvZGl2PntkaXNwbGF5LnZvbHVtZX1tXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9saWN5LWl0ZW0taW5mb1wiPlxuICAgICAgICAgICAgRmxvb3IgUHJpY2U6IDxkaXYgY2xhc3NOYW1lPVwiY3VycmVuY3lcIj57Y3VycmVuY3kuc3ltYm9sfTwvZGl2PntkaXNwbGF5LmZsb29yUHJpY2V9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj4pXG59Il0sIm5hbWVzIjpbIkltYWdlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQb2xpY3kiLCJwcm9wcyIsImRpc3BsYXkiLCJzZXREaXNwbGF5IiwicG9saWN5IiwidGh1bWJuYWlsIiwiZmxvb3JQcmljZSIsImhvbGRlcnMiLCJzdXBwbHkiLCJ2b2x1bWUiLCJjdXJyZW5jeSIsInNldEN1cnJlbmN5IiwidmFsdWUiLCJzeW1ib2wiLCJmdW5jIiwicHJpY2VzIiwicG9saWN5RGF0YSIsImdldENuZnRQb2xpY3lEYXRhIiwib3JpZ2luYWxTdHJpbmciLCJCdWZmZXIiLCJmcm9tIiwidG9TdHJpbmciLCJjb25zb2xlIiwibG9nIiwiZmxvb3JfcHJpY2UiLCJ0b0ZpeGVkIiwiYXNzZXRfaG9sZGVycyIsImFzc2V0X21pbnRlZCIsInRvdGFsX3ZvbHVtZSIsImdldElwZnMiLCJvYmoiLCJpcGZzIiwiQXJyYXkiLCJpc0FycmF5IiwibmV3aXBmcyIsImVsZW1lbnQiLCJzdGFydHNXaXRoIiwicmVwbGFjZSIsInNsaWNlIiwiZGF0YSIsImZldGNoIiwiaGVhZGVycyIsInByb2plY3RfaWQiLCJyZXMiLCJqc29uIiwic3RhdHVzIiwiZXJyb3IiLCJjb3B5VGV4dCIsImV2ZW50IiwidGV4dCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRoZW4iLCJidXR0b24iLCJ0YXJnZXQiLCJpbm5lclRleHQiLCJzZXRUaW1lb3V0IiwidGV4dENvbnRlbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInN1YnN0cmluZyIsIm9uQ2xpY2siLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/policy.js\n"));

/***/ })

});