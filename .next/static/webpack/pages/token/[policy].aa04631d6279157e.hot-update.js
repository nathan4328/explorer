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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Policy; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/next/dist/compiled/buffer/index.js\")[\"Buffer\"];\n\nvar _s = $RefreshSig$();\n\n\nfunction Policy(props) {\n    _s();\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        policy: \"\",\n        thumbnail: \"/black.jpeg\",\n        floorPrice: \"\",\n        holders: \"\",\n        supply: \"\",\n        volume: \"\"\n    });\n    const [currency, setCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        value: 1,\n        symbol: \"$\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        async function func() {\n            if (props.policy != null && props.prices != null) {\n                let policyData = await getCnftPolicyData(props.policy);\n                if (policyData != null) {\n                    let currency = props.prices.currency;\n                    setCurrency(currency);\n                    let originalString = Buffer.from(props.policy, \"hex\").toString();\n                    console.log(originalString);\n                    let floorPrice = (policyData.floor_price / 1000000 * currency.value).toFixed(2);\n                    let holders = policyData.asset_holders;\n                    let supply = policyData.asset_minted;\n                    let volume = (policyData.total_volume / 1000000000000 * currency.value).toFixed(2);\n                    let thumbnail = getIpfs(policyData.thumbnail);\n                    let obj = {\n                        policy: props.policy,\n                        thumbnail: thumbnail,\n                        floorPrice: floorPrice,\n                        holders: holders,\n                        supply: supply,\n                        volume: volume\n                    };\n                    setDisplay(obj);\n                }\n            }\n        }\n        func();\n    }, [\n        props\n    ]);\n    // if metadata has been fetched\n    // find the ipfs link under 'image' metadata tag and store it\n    function getIpfs(ipfs) {\n        // convert all ipfs formats to the a searchable format that can be fetched in a <img> tag\n        try {\n            // links are sometimes stored in arrays\n            // this finds ipfs links in the array\n            if (Array.isArray(ipfs)) {\n                let newipfs = \"\";\n                for (const element of ipfs){\n                    newipfs = newipfs + element;\n                }\n                if (newipfs.startsWith(\"ba\")) {\n                    newipfs = \"http://dweb.link/ipfs/\" + ipfs;\n                    newipfs = newipfs.replace(/,/g, \"\");\n                }\n                return newipfs;\n            }\n            // normal ipfs in image tags\n            if (ipfs.startsWith(\"ipfs://\")) {\n                ipfs = ipfs.slice(7);\n                if (ipfs.startsWith(\"ipfs/\")) {\n                    ipfs = ipfs.slice(5);\n                }\n                ipfs = \"http://dweb.link/ipfs/\" + ipfs;\n            } else if (ipfs.startsWith(\"ipfs/\")) {\n                ipfs = ipfs.slice(5);\n                ipfs = \"http://dweb.link/ipfs/\" + ipfs;\n            } else if (ipfs.startsWith(\"Qm\")) {\n                ipfs = \"http://dweb.link/ipfs/\" + ipfs;\n            }\n        } catch (e) {\n            return null;\n        }\n        return ipfs;\n    }\n    async function getCnftPolicyData(policy) {\n        try {\n            const data = await fetch(\"https://api.opencnft.io/1/policy/\" + policy, {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    function copyText(event, text) {\n        navigator.clipboard.writeText(text).then(()=>{\n            // Update the button text to \"Copied!\"\n            const button = event.target;\n            event.target.innerText = \"Copied\";\n            setTimeout(()=>{\n                // Reset the button text after 1 second\n                button.textContent = \"Copy\";\n            }, 1000);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"policy-info\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"policy-section\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"policy-item-info\",\n                    children: [\n                        \"Policy: \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"value\",\n                            children: [\n                                display.policy.substring(0, 14),\n                                \"...   \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                            lineNumber: 111,\n                            columnNumber: 27\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"policy-button\",\n                            onClick: (e)=>copyText(e, display.policy),\n                            children: \"Copy\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                            lineNumber: 112,\n                            columnNumber: 19\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                    lineNumber: 110,\n                    columnNumber: 15\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                lineNumber: 109,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"policy-section-item\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"policy-item-info\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: display.thumbnail,\n                            width: 100,\n                            height: 100,\n                            alt: \"no img\",\n                            className: \"policy-thumbnail\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                            lineNumber: 122,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                        lineNumber: 121,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"policy-item-info\",\n                        children: [\n                            \"Supply:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"value\",\n                                children: display.supply\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                                lineNumber: 126,\n                                columnNumber: 22\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                        lineNumber: 125,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"policy-item-info\",\n                        children: [\n                            \"Volume: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"value\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"currency\",\n                                        children: currency.symbol\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                                        lineNumber: 129,\n                                        columnNumber: 46\n                                    }, this),\n                                    display.volume,\n                                    \"m\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                                lineNumber: 129,\n                                columnNumber: 23\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                        lineNumber: 128,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"policy-item-info\",\n                        children: [\n                            \"Floor Price: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"value\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"currency\",\n                                        children: currency.symbol\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                                        lineNumber: 132,\n                                        columnNumber: 51\n                                    }, this),\n                                    display.floorPrice\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                                lineNumber: 132,\n                                columnNumber: 28\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                        lineNumber: 131,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                lineNumber: 120,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n        lineNumber: 108,\n        columnNumber: 12\n    }, this);\n}\n_s(Policy, \"elI56tQpFMl/h2CKO9MLxaCdKeQ=\");\n_c = Policy;\nvar _c;\n$RefreshReg$(_c, \"Policy\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9saWN5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDWTtBQUU1QixTQUFTRyxPQUFPQyxLQUFLLEVBQUM7O0lBRWpDLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSiwrQ0FBUUEsQ0FBQztRQUFDSyxRQUFRO1FBQUlDLFdBQVc7UUFBZUMsWUFBVztRQUFJQyxTQUFTO1FBQUlDLFFBQVE7UUFBSUMsUUFBTztJQUFFO0lBQy9ILE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHWiwrQ0FBUUEsQ0FBQztRQUFDYSxPQUFPO1FBQUdDLFFBQVE7SUFBRztJQUUvRGYsZ0RBQVNBLENBQUMsSUFBTTtRQUNaLGVBQWVnQixPQUFNO1lBQ25CLElBQUdiLE1BQU1HLE1BQU0sSUFBSSxJQUFJLElBQUlILE1BQU1jLE1BQU0sSUFBSSxJQUFJLEVBQUM7Z0JBQzlDLElBQUlDLGFBQWEsTUFBTUMsa0JBQWtCaEIsTUFBTUcsTUFBTTtnQkFDckQsSUFBR1ksY0FBYyxJQUFJLEVBQUM7b0JBRXBCLElBQUlOLFdBQVdULE1BQU1jLE1BQU0sQ0FBQ0wsUUFBUTtvQkFDcENDLFlBQVlEO29CQUVaLElBQUlRLGlCQUFpQkMsTUFBTUEsQ0FBQ0MsSUFBSSxDQUFDbkIsTUFBTUcsTUFBTSxFQUFFLE9BQU9pQixRQUFRO29CQUM5REMsUUFBUUMsR0FBRyxDQUFDTDtvQkFFVixJQUFJWixhQUFhLENBQUMsV0FBWWtCLFdBQVcsR0FBQyxVQUFTZCxTQUFTRSxLQUFLLEVBQUVhLE9BQU8sQ0FBQztvQkFDM0UsSUFBSWxCLFVBQVVTLFdBQVdVLGFBQWE7b0JBQ3RDLElBQUlsQixTQUFTUSxXQUFXVyxZQUFZO29CQUNwQyxJQUFJbEIsU0FBUyxDQUFDLFdBQVltQixZQUFZLEdBQUMsZ0JBQWVsQixTQUFTRSxLQUFLLEVBQUVhLE9BQU8sQ0FBQztvQkFDOUUsSUFBSXBCLFlBQVl3QixRQUFRYixXQUFXWCxTQUFTO29CQUU1QyxJQUFJeUIsTUFBTTt3QkFBQzFCLFFBQVFILE1BQU1HLE1BQU07d0JBQUVDLFdBQVlBO3dCQUFXQyxZQUFZQTt3QkFBWUMsU0FBU0E7d0JBQVNDLFFBQVFBO3dCQUFRQyxRQUFRQTtvQkFBTTtvQkFFaElOLFdBQVcyQjtnQkFDZixDQUFDO1lBQ0gsQ0FBQztRQUVIO1FBQ0FoQjtJQUNKLEdBQUc7UUFBQ2I7S0FBTTtJQUVILCtCQUErQjtJQUN0Qyw2REFBNkQ7SUFDN0QsU0FBUzRCLFFBQVFFLElBQUksRUFBQztRQUNwQix5RkFBeUY7UUFDekYsSUFBRztZQUVELHVDQUF1QztZQUN2QyxxQ0FBcUM7WUFDckMsSUFBR0MsTUFBTUMsT0FBTyxDQUFDRixPQUFNO2dCQUNyQixJQUFJRyxVQUFVO2dCQUNkLEtBQUksTUFBTUMsV0FBV0osS0FBSztvQkFDeEJHLFVBQVVBLFVBQVVDO2dCQUN0QjtnQkFDQSxJQUFHRCxRQUFRRSxVQUFVLENBQUMsT0FBTTtvQkFDMUJGLFVBQVUsMkJBQXlCSDtvQkFDbkNHLFVBQVVBLFFBQVFHLE9BQU8sQ0FBQyxNQUFNO2dCQUNsQyxDQUFDO2dCQUNELE9BQU9IO1lBQ1QsQ0FBQztZQUVELDRCQUE0QjtZQUM1QixJQUFHSCxLQUFLSyxVQUFVLENBQUMsWUFBVztnQkFDNUJMLE9BQU9BLEtBQUtPLEtBQUssQ0FBQztnQkFDbEIsSUFBR1AsS0FBS0ssVUFBVSxDQUFDLFVBQVM7b0JBQzFCTCxPQUFPQSxLQUFLTyxLQUFLLENBQUM7Z0JBQ3BCLENBQUM7Z0JBQ0RQLE9BQU8sMkJBQXlCQTtZQUNsQyxPQUNLLElBQUdBLEtBQUtLLFVBQVUsQ0FBQyxVQUFTO2dCQUMvQkwsT0FBT0EsS0FBS08sS0FBSyxDQUFDO2dCQUNsQlAsT0FBTywyQkFBeUJBO1lBQ2xDLE9BQ0ssSUFBR0EsS0FBS0ssVUFBVSxDQUFDLE9BQU07Z0JBQzVCTCxPQUFPLDJCQUF5QkE7WUFDbEMsQ0FBQztRQUVILEVBQUMsVUFBSztZQUNKLE9BQU8sSUFBSTtRQUNiO1FBQ0EsT0FBT0E7SUFFVDtJQUVBLGVBQWVkLGtCQUFrQmIsTUFBTSxFQUFDO1FBQ3BDLElBQUc7WUFDRCxNQUFNbUMsT0FBTyxNQUFNQyxNQUFNLHNDQUFvQ3BDLFFBQzdEO2dCQUFDcUMsU0FBUTtvQkFBQ0MsWUFBWTtvQkFBMkMsaUJBQWlCO2dCQUFrQjtZQUFDO1lBQ3JHLE1BQU1DLE1BQU0sTUFBTUosS0FBS0ssSUFBSTtZQUUzQixJQUFHTCxLQUFLTSxNQUFNLElBQUcsS0FBSTtnQkFDbkIsT0FBTyxJQUFJO1lBQ2IsQ0FBQztZQUNELE9BQU9GO1FBQ1QsRUFBQyxPQUFNRyxPQUFNO1lBQ1gsT0FBTyxJQUFJO1FBQ2I7SUFDRjtJQUVBLFNBQVNDLFNBQVNDLEtBQUssRUFBRUMsSUFBSSxFQUFFO1FBQzdCQyxVQUFVQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ0gsTUFBTUksSUFBSSxDQUFDLElBQU07WUFDN0Msc0NBQXNDO1lBQ3RDLE1BQU1DLFNBQVNOLE1BQU1PLE1BQU07WUFDM0JQLE1BQU1PLE1BQU0sQ0FBQ0MsU0FBUyxHQUFHO1lBQ3pCQyxXQUFXLElBQU07Z0JBQ2YsdUNBQXVDO2dCQUN2Q0gsT0FBT0ksV0FBVyxHQUFHO1lBQ3ZCLEdBQUc7UUFDTDtJQUNGO0lBR0YscUJBQU8sOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNkLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3dCQUFtQjtzQ0FDdEIsOERBQUNEOzRCQUFJQyxXQUFVOztnQ0FBVTFELFFBQVFFLE1BQU0sQ0FBRXlELFNBQVMsQ0FBQyxHQUFFO2dDQUFJOzs7Ozs7O3NDQUNqRSw4REFBQ1A7NEJBQ0NNLFdBQVU7NEJBQ1ZFLFNBQVMsQ0FBQ0MsSUFBTWhCLFNBQVNnQixHQUFHN0QsUUFBUUUsTUFBTTtzQ0FDM0M7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtQLDhEQUFDdUQ7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQy9ELG1EQUFLQTs0QkFBQ21FLEtBQU85RCxRQUFRRyxTQUFTOzRCQUFFNEQsT0FBTzs0QkFBS0MsUUFBUTs0QkFBS0MsS0FBSTs0QkFBU1AsV0FBVTs7Ozs7Ozs7Ozs7a0NBR25GLDhEQUFDRDt3QkFBSUMsV0FBVTs7NEJBQW1COzBDQUMzQiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQVMxRCxRQUFRTSxNQUFNOzs7Ozs7Ozs7Ozs7a0NBRTdDLDhEQUFDbUQ7d0JBQUlDLFdBQVU7OzRCQUFtQjswQ0FDMUIsOERBQUNEO2dDQUFJQyxXQUFVOztrREFBUSw4REFBQ0Q7d0NBQUlDLFdBQVU7a0RBQVlsRCxTQUFTRyxNQUFNOzs7Ozs7b0NBQVFYLFFBQVFPLE1BQU07b0NBQUM7Ozs7Ozs7Ozs7Ozs7a0NBRWhHLDhEQUFDa0Q7d0JBQUlDLFdBQVU7OzRCQUFtQjswQ0FDckIsOERBQUNEO2dDQUFJQyxXQUFVOztrREFBUSw4REFBQ0Q7d0NBQUlDLFdBQVU7a0RBQVlsRCxTQUFTRyxNQUFNOzs7Ozs7b0NBQVFYLFFBQVFJLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdEgsQ0FBQztHQXJJdUJOO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wb2xpY3kuanM/MjQ1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb2xpY3kocHJvcHMpe1xuXG4gICAgY29uc3QgW2Rpc3BsYXksIHNldERpc3BsYXldID0gdXNlU3RhdGUoe3BvbGljeTogJycsIHRodW1ibmFpbDogJy9ibGFjay5qcGVnJywgZmxvb3JQcmljZTonJywgaG9sZGVyczogJycsIHN1cHBseSA6JycsIHZvbHVtZTonJ30pO1xuICAgIGNvbnN0IFtjdXJyZW5jeSwgc2V0Q3VycmVuY3ldID0gdXNlU3RhdGUoe3ZhbHVlOiAxLCBzeW1ib2w6ICckJ30pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZnVuYygpe1xuICAgICAgICAgIGlmKHByb3BzLnBvbGljeSAhPSBudWxsICYmIHByb3BzLnByaWNlcyAhPSBudWxsKXtcbiAgICAgICAgICAgIGxldCBwb2xpY3lEYXRhID0gYXdhaXQgZ2V0Q25mdFBvbGljeURhdGEocHJvcHMucG9saWN5KTtcbiAgICAgICAgICAgIGlmKHBvbGljeURhdGEgIT0gbnVsbCl7XG5cbiAgICAgICAgICAgICAgbGV0IGN1cnJlbmN5ID0gcHJvcHMucHJpY2VzLmN1cnJlbmN5O1xuICAgICAgICAgICAgICBzZXRDdXJyZW5jeShjdXJyZW5jeSk7XG5cbiAgICAgICAgICAgICAgbGV0IG9yaWdpbmFsU3RyaW5nID0gQnVmZmVyLmZyb20ocHJvcHMucG9saWN5LCAnaGV4JykudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cob3JpZ2luYWxTdHJpbmcpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGZsb29yUHJpY2UgPSAoKHBvbGljeURhdGEuZmxvb3JfcHJpY2UvMTAwMDAwMCkqY3VycmVuY3kudmFsdWUpLnRvRml4ZWQoMik7XG4gICAgICAgICAgICAgICAgbGV0IGhvbGRlcnMgPSBwb2xpY3lEYXRhLmFzc2V0X2hvbGRlcnM7XG4gICAgICAgICAgICAgICAgbGV0IHN1cHBseSA9IHBvbGljeURhdGEuYXNzZXRfbWludGVkO1xuICAgICAgICAgICAgICAgIGxldCB2b2x1bWUgPSAoKHBvbGljeURhdGEudG90YWxfdm9sdW1lLzEwMDAwMDAwMDAwMDApKmN1cnJlbmN5LnZhbHVlKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAgIGxldCB0aHVtYm5haWwgPSBnZXRJcGZzKHBvbGljeURhdGEudGh1bWJuYWlsKTtcblxuICAgICAgICAgICAgICAgIGxldCBvYmogPSB7cG9saWN5OiBwcm9wcy5wb2xpY3ksIHRodW1ibmFpbCA6IHRodW1ibmFpbCwgZmxvb3JQcmljZTogZmxvb3JQcmljZSwgaG9sZGVyczogaG9sZGVycywgc3VwcGx5OiBzdXBwbHksIHZvbHVtZTogdm9sdW1lfVxuXG4gICAgICAgICAgICAgICAgc2V0RGlzcGxheShvYmopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gXG5cbiAgICAgICAgfVxuICAgICAgICBmdW5jKCk7XG4gICAgfSwgW3Byb3BzXSlcblxuICAgICAgICAgICAvLyBpZiBtZXRhZGF0YSBoYXMgYmVlbiBmZXRjaGVkXG4gICAgLy8gZmluZCB0aGUgaXBmcyBsaW5rIHVuZGVyICdpbWFnZScgbWV0YWRhdGEgdGFnIGFuZCBzdG9yZSBpdFxuICAgIGZ1bmN0aW9uIGdldElwZnMoaXBmcyl7XG4gICAgICAvLyBjb252ZXJ0IGFsbCBpcGZzIGZvcm1hdHMgdG8gdGhlIGEgc2VhcmNoYWJsZSBmb3JtYXQgdGhhdCBjYW4gYmUgZmV0Y2hlZCBpbiBhIDxpbWc+IHRhZ1xuICAgICAgdHJ5e1xuXG4gICAgICAgIC8vIGxpbmtzIGFyZSBzb21ldGltZXMgc3RvcmVkIGluIGFycmF5c1xuICAgICAgICAvLyB0aGlzIGZpbmRzIGlwZnMgbGlua3MgaW4gdGhlIGFycmF5XG4gICAgICAgIGlmKEFycmF5LmlzQXJyYXkoaXBmcykpe1xuICAgICAgICAgIGxldCBuZXdpcGZzID0gXCJcIjtcbiAgICAgICAgICBmb3IoY29uc3QgZWxlbWVudCBvZiBpcGZzKXtcbiAgICAgICAgICAgIG5ld2lwZnMgPSBuZXdpcGZzICsgZWxlbWVudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYobmV3aXBmcy5zdGFydHNXaXRoKCdiYScpKXtcbiAgICAgICAgICAgIG5ld2lwZnMgPSBcImh0dHA6Ly9kd2ViLmxpbmsvaXBmcy9cIitpcGZzO1xuICAgICAgICAgICAgbmV3aXBmcyA9IG5ld2lwZnMucmVwbGFjZSgvLC9nLCAnJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXdpcGZzO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbm9ybWFsIGlwZnMgaW4gaW1hZ2UgdGFnc1xuICAgICAgICBpZihpcGZzLnN0YXJ0c1dpdGgoJ2lwZnM6Ly8nKSl7XG4gICAgICAgICAgaXBmcyA9IGlwZnMuc2xpY2UoNyk7XG4gICAgICAgICAgaWYoaXBmcy5zdGFydHNXaXRoKCdpcGZzLycpKXtcbiAgICAgICAgICAgIGlwZnMgPSBpcGZzLnNsaWNlKDUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpcGZzID0gXCJodHRwOi8vZHdlYi5saW5rL2lwZnMvXCIraXBmcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGlwZnMuc3RhcnRzV2l0aCgnaXBmcy8nKSl7XG4gICAgICAgICAgaXBmcyA9IGlwZnMuc2xpY2UoNSk7XG4gICAgICAgICAgaXBmcyA9IFwiaHR0cDovL2R3ZWIubGluay9pcGZzL1wiK2lwZnM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihpcGZzLnN0YXJ0c1dpdGgoJ1FtJykpe1xuICAgICAgICAgIGlwZnMgPSBcImh0dHA6Ly9kd2ViLmxpbmsvaXBmcy9cIitpcGZzO1xuICAgICAgICB9XG5cbiAgICAgIH1jYXRjaHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gaXBmcztcbiAgICBcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRDbmZ0UG9saWN5RGF0YShwb2xpY3kpe1xuICAgICAgICB0cnl7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5vcGVuY25mdC5pby8xL3BvbGljeS8nK3BvbGljeSxcbiAgICAgICAgICB7aGVhZGVyczp7cHJvamVjdF9pZDogJ21haW5uZXRvVzYxWVlTaU9vTFNhTlE2ZHpUcmtBRzRhelhWSXJ2aCcsICdjYWNoZS1jb250cm9sJzogJ21heC1hZ2U9MzE1MzYwMDAnfX0pO1xuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGRhdGEuanNvbigpO1xuICBcbiAgICAgICAgICBpZihkYXRhLnN0YXR1cyE9IDIwMCl7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBjb3B5VGV4dChldmVudCwgdGV4dCkge1xuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0ZXh0KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAvLyBVcGRhdGUgdGhlIGJ1dHRvbiB0ZXh0IHRvIFwiQ29waWVkIVwiXG4gICAgICAgICAgY29uc3QgYnV0dG9uID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgIGV2ZW50LnRhcmdldC5pbm5lclRleHQgPSBcIkNvcGllZFwiO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gUmVzZXQgdGhlIGJ1dHRvbiB0ZXh0IGFmdGVyIDEgc2Vjb25kXG4gICAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIkNvcHlcIjtcbiAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cblxuICAgIHJldHVybig8ZGl2IGNsYXNzTmFtZT1cInBvbGljeS1pbmZvXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvbGljeS1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9saWN5LWl0ZW0taW5mb1wiPlxuICAgICAgICAgICAgICAgICAgUG9saWN5OiA8ZGl2IGNsYXNzTmFtZT1cInZhbHVlXCI+eyhkaXNwbGF5LnBvbGljeSkuc3Vic3RyaW5nKDAsMTQpfS4uLiAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb2xpY3ktYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGNvcHlUZXh0KGUsIGRpc3BsYXkucG9saWN5KX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgQ29weVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9saWN5LXNlY3Rpb24taXRlbVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvbGljeS1pdGVtLWluZm9cIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjID0ge2Rpc3BsYXkudGh1bWJuYWlsfSB3aWR0aD17MTAwfSBoZWlnaHQ9ezEwMH0gYWx0PSdubyBpbWcnIGNsYXNzTmFtZT1cInBvbGljeS10aHVtYm5haWxcIi8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9saWN5LWl0ZW0taW5mb1wiPlxuICAgICAgICAgICAgICBTdXBwbHk6PGRpdiBjbGFzc05hbWU9J3ZhbHVlJz57ZGlzcGxheS5zdXBwbHl9PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvbGljeS1pdGVtLWluZm9cIj5cbiAgICAgICAgICAgICAgVm9sdW1lOiA8ZGl2IGNsYXNzTmFtZT1cInZhbHVlXCI+PGRpdiBjbGFzc05hbWU9XCJjdXJyZW5jeVwiPntjdXJyZW5jeS5zeW1ib2x9PC9kaXY+e2Rpc3BsYXkudm9sdW1lfW08L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9saWN5LWl0ZW0taW5mb1wiPlxuICAgICAgICAgICAgICBGbG9vciBQcmljZTogPGRpdiBjbGFzc05hbWU9XCJ2YWx1ZVwiPjxkaXYgY2xhc3NOYW1lPVwiY3VycmVuY3lcIj57Y3VycmVuY3kuc3ltYm9sfTwvZGl2PntkaXNwbGF5LmZsb29yUHJpY2V9PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxufSJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUG9saWN5IiwicHJvcHMiLCJkaXNwbGF5Iiwic2V0RGlzcGxheSIsInBvbGljeSIsInRodW1ibmFpbCIsImZsb29yUHJpY2UiLCJob2xkZXJzIiwic3VwcGx5Iiwidm9sdW1lIiwiY3VycmVuY3kiLCJzZXRDdXJyZW5jeSIsInZhbHVlIiwic3ltYm9sIiwiZnVuYyIsInByaWNlcyIsInBvbGljeURhdGEiLCJnZXRDbmZ0UG9saWN5RGF0YSIsIm9yaWdpbmFsU3RyaW5nIiwiQnVmZmVyIiwiZnJvbSIsInRvU3RyaW5nIiwiY29uc29sZSIsImxvZyIsImZsb29yX3ByaWNlIiwidG9GaXhlZCIsImFzc2V0X2hvbGRlcnMiLCJhc3NldF9taW50ZWQiLCJ0b3RhbF92b2x1bWUiLCJnZXRJcGZzIiwib2JqIiwiaXBmcyIsIkFycmF5IiwiaXNBcnJheSIsIm5ld2lwZnMiLCJlbGVtZW50Iiwic3RhcnRzV2l0aCIsInJlcGxhY2UiLCJzbGljZSIsImRhdGEiLCJmZXRjaCIsImhlYWRlcnMiLCJwcm9qZWN0X2lkIiwicmVzIiwianNvbiIsInN0YXR1cyIsImVycm9yIiwiY29weVRleHQiLCJldmVudCIsInRleHQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0aGVuIiwiYnV0dG9uIiwidGFyZ2V0IiwiaW5uZXJUZXh0Iiwic2V0VGltZW91dCIsInRleHRDb250ZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwic3Vic3RyaW5nIiwib25DbGljayIsImUiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/policy.js\n"));

/***/ })

});