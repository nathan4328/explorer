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

/***/ "./src/pages/fts.js":
/*!**************************!*\
  !*** ./src/pages/fts.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Fts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token */ \"./src/pages/token.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Fts(param) {\n    let { tokens  } = param;\n    _s();\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [priced, setPriced] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const getData = async ()=>{\n            if (tokens != null) {\n                let fts = tokens.fts;\n                displayTokenTable(fts);\n                let pricedTokens = await getTokensWithGeckoPrices(fts);\n                displayPriced(pricedTokens, tokens.stake);\n            }\n        };\n        getData();\n    }, [\n        tokens\n    ]);\n    async function getAccountInfoFromKoios(stakeAddress) {\n        const req = await fetch(\"https://api.koios.rest/api/v0/account_info\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                \"_stake_addresses\": [\n                    stakeAddress\n                ]\n            })\n        });\n        const res = await req.json();\n        return res;\n    }\n    const getAdaBalancePriced = async (stake)=>{\n        if (stake != null) {\n            let accountInfo = await getAccountInfoFromKoios(stake);\n            let _balance = accountInfo[0].total_balance / 1000000;\n            let req = await fetch(\"https://api.coingecko.com/api/v3/coins/cardano?localization=false&tickers=false&developer_data=false\");\n            let res = await req.json();\n            let usd = res.market_data.current_price.usd;\n            let ada = {\n                ticker: \"ADA\",\n                quantity: {\n                    _balance\n                },\n                ipfs: \"/cardano.png\",\n                price: usd\n            };\n            return ada;\n        }\n    };\n    const displayPriced = async (tokens, stake)=>{\n        let _display = [];\n        let ada = await getAdaBalancePriced(stake);\n        _display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n            className: \"grid-item-ft\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: \"Coin\"\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                    lineNumber: 62,\n                    columnNumber: 64\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: \"Ticker\"\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                    lineNumber: 62,\n                    columnNumber: 77\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: \"Quantity\"\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                    lineNumber: 62,\n                    columnNumber: 92\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: \"Price\"\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                    lineNumber: 62,\n                    columnNumber: 109\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: \"Value\"\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                    lineNumber: 62,\n                    columnNumber: 123\n                }, this)\n            ]\n        }, \"key\", true, {\n            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n            lineNumber: 62,\n            columnNumber: 21\n        }, this));\n        _display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n            className: \"grid-item-ft\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"ft-img\",\n                        src: ada.ipfs\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 65,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                    lineNumber: 65,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: ada.ticker\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                    lineNumber: 66,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: ada.quantity / 1000000\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                    lineNumber: 66,\n                    columnNumber: 32\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: [\n                        \"$\",\n                        ada.price\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                    lineNumber: 67,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: [\n                        \"$\",\n                        (ada.price * ada.quantity / 1000000).toFixed(2)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                    lineNumber: 67,\n                    columnNumber: 32\n                }, this)\n            ]\n        }, \"ada\", true, {\n            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n            lineNumber: 64,\n            columnNumber: 21\n        }, this));\n        if (tokens != null) {\n            for (const element of tokens){\n                let token = element;\n                _display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    className: \"grid-item-ft\",\n                    onClick: ()=>router.push(\"/token/\" + token.policy_id + token.asset_name),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"ft-img\",\n                                src: token.ipfs\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                                lineNumber: 75,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: token.metadata.ticker\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: token.quantity / 1000000\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 76,\n                            columnNumber: 43\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: [\n                                \"$\",\n                                token.price\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: [\n                                \"$\",\n                                (token.price * token.quantity / 1000000).toFixed(2)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 77,\n                            columnNumber: 34\n                        }, this)\n                    ]\n                }, token.asset_name + \"ft\", true, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                    lineNumber: 74,\n                    columnNumber: 25\n                }, this));\n            }\n            let table = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: _display\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                    lineNumber: 80,\n                    columnNumber: 28\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                lineNumber: 80,\n                columnNumber: 21\n            }, this);\n            setPriced(table);\n        }\n    };\n    const getTokensWithGeckoPrices = async (fts)=>{\n        let coinsOnGecko = [];\n        if (fts != null) {\n            let request = await fetch(\"/coin-gecko.json\");\n            let geckoData = await request.json();\n            //search gecko list for owned coins of same ticker\n            for (const element of fts){\n                let token = element[0];\n                let ticker = \"\";\n                try {\n                    ticker = token.metadata.ticker;\n                } catch (error) {\n                    ticker = null;\n                }\n                //get ids of matched coins\n                if (ticker != null) {\n                    let foundGeckoCoin = geckoData.find((item)=>item.symbol == ticker.toLowerCase());\n                    if (foundGeckoCoin != null) {\n                        token.id = foundGeckoCoin.id;\n                        coinsOnGecko.push(token);\n                    }\n                }\n            }\n            //get info for each coin\n            let pricedTokens = [];\n            for (const element of coinsOnGecko){\n                let req = await fetch(\"https://api.coingecko.com/api/v3/coins/\" + element.id);\n                let res = await req.json();\n                if (res.asset_platform_id == \"cardano\") {\n                    element.price = res.market_data.current_price.usd;\n                    pricedTokens.push(element);\n                }\n            }\n            return pricedTokens;\n        }\n    };\n    const displayTokenTable = (tokens)=>{\n        if (tokens == null) {\n        //base\n        } else {\n            let _display = [];\n            let policies = Object.keys(tokens);\n            _display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                className: \"grid-item-ft\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"Coin\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 140,\n                        columnNumber: 66\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"Ticker\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 140,\n                        columnNumber: 79\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"Quantity\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 140,\n                        columnNumber: 94\n                    }, this)\n                ]\n            }, \"key\", true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                lineNumber: 140,\n                columnNumber: 23\n            }, this));\n            for (const policy of policies){\n                let token = tokens[policy][0];\n                let name = token.metadata.ticker;\n                if (token.metadata.ticker == null) {\n                    if (token.metadata.name != null) {\n                        name = token.metadata.name;\n                    } else {\n                        name = \"unknown\";\n                    }\n                }\n                _display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    className: \"grid-item-ft\",\n                    onClick: ()=>router.push(\"/token/\" + token.policy_id + token.asset_name),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"ft-img\",\n                                src: token.ipfs\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                                lineNumber: 156,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 156,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 157,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: token.quantity / 1000000\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 157,\n                            columnNumber: 28\n                        }, this)\n                    ]\n                }, token.asset_name + \"ft\", true, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                    lineNumber: 155,\n                    columnNumber: 25\n                }, this));\n            }\n            let table = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: _display\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                    lineNumber: 159,\n                    columnNumber: 28\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                lineNumber: 159,\n                columnNumber: 21\n            }, this);\n            setDisplay(table);\n        }\n    };\n    //returns a grid view of all NFTs grouped by policy\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fts\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid-ft\",\n                children: priced\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                lineNumber: 167,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid-ft\",\n                children: display\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                lineNumber: 168,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n        lineNumber: 166,\n        columnNumber: 7\n    }, this);\n}\n_s(Fts, \"NJlh6U6dwMjLoOp1b8asfUJUniE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Fts;\nvar _c;\n$RefreshReg$(_c, \"Fts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksSUFBSSxFQUFDO29CQUUvQixJQUFHYSxNQUFNSSxRQUFRLENBQUNrQixJQUFJLElBQUksSUFBSSxFQUFDO3dCQUM3QkEsT0FBT3RCLE1BQU1JLFFBQVEsQ0FBQ2tCLElBQUk7b0JBQzVCLE9BQ0k7d0JBQ0ZBLE9BQU87b0JBQ1QsQ0FBQztnQkFHSCxDQUFDO2dCQUNEL0IsU0FBU0MsSUFBSSxlQUFDLDhEQUFDQztvQkFBbUNDLFdBQVk7b0JBQWVPLFNBQVMsSUFBTXpDLE9BQU9nQyxJQUFJLENBQUMsWUFBVVEsTUFBTUUsU0FBUyxHQUFDRixNQUFNRyxVQUFVOztzQ0FDaEosOERBQUNSO3NDQUFHLDRFQUFDQztnQ0FBSUYsV0FBVTtnQ0FBU0csS0FBS0csTUFBTVgsSUFBSTs7Ozs7Ozs7Ozs7c0NBQzNDLDhEQUFDTTtzQ0FBSTJCOzs7Ozs7c0NBQVUsOERBQUMzQjtzQ0FBS0ssTUFBTVosUUFBUSxHQUFFOzs7Ozs7O21CQUZkWSxNQUFNRyxVQUFVLEdBQUc7Ozs7O1lBRzlDO1lBQ0EsSUFBSUUsc0JBQVEsOERBQUNBOzBCQUFNLDRFQUFDQzs4QkFBT2Y7Ozs7Ozs7Ozs7O1lBQzNCbEMsV0FBV2dEO1FBQ2IsQ0FBQztJQUVIO0lBQ0EsbURBQW1EO0lBQ25ELHFCQUNFLDhEQUFDa0I7UUFBSTdCLFdBQVU7OzBCQUNiLDhEQUFDNkI7Z0JBQUk3QixXQUFVOzBCQUFXcEM7Ozs7OzswQkFDMUIsOERBQUNpRTtnQkFBSTdCLFdBQVU7MEJBQVd0Qzs7Ozs7Ozs7Ozs7O0FBSWxDLENBQUM7R0F2S3VCRjs7UUFLTEosa0RBQVNBOzs7S0FMSkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Z0cy5qcz9kYjNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRva2VuIGZyb20gXCIuL3Rva2VuXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZ0cyAoe3Rva2Vuc30pe1xuXG4gICAgY29uc3QgW2Rpc3BsYXksIHNldERpc3BsYXldID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtwcmljZWQsIHNldFByaWNlZF0gPSB1c2VTdGF0ZSgpO1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICB1c2VFZmZlY3QoICgpID0+IHtcbiAgICBjb25zdCBnZXREYXRhID0gYXN5bmMgKCkgPT57XG4gICAgICBpZih0b2tlbnMgIT0gbnVsbCl7XG4gICAgICAgIGxldCBmdHMgPSB0b2tlbnMuZnRzO1xuICAgICAgICBkaXNwbGF5VG9rZW5UYWJsZShmdHMpO1xuICAgICAgICBsZXQgcHJpY2VkVG9rZW5zID0gYXdhaXQgZ2V0VG9rZW5zV2l0aEdlY2tvUHJpY2VzKGZ0cyk7XG4gICAgICAgIGRpc3BsYXlQcmljZWQocHJpY2VkVG9rZW5zLCB0b2tlbnMuc3Rha2UpO1xuXG4gICAgICB9XG4gICAgfVxuICAgIGdldERhdGEoKTtcbiAgICB9LCBbdG9rZW5zXSk7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRBY2NvdW50SW5mb0Zyb21Lb2lvcyhzdGFrZUFkZHJlc3Mpe1xuICAgICAgY29uc3QgcmVxID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmtvaW9zLnJlc3QvYXBpL3YwL2FjY291bnRfaW5mbycsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICBcIl9zdGFrZV9hZGRyZXNzZXNcIjogW1xuICAgICAgICAgICAgICAgIHN0YWtlQWRkcmVzc1xuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pO1xuICAgICAgXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCByZXEuanNvbigpO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICBjb25zdCBnZXRBZGFCYWxhbmNlUHJpY2VkID0gYXN5bmMgKHN0YWtlKSA9PiB7XG4gICAgICBpZihzdGFrZSAhPSBudWxsKXtcbiAgICAgICAgbGV0IGFjY291bnRJbmZvID0gYXdhaXQgZ2V0QWNjb3VudEluZm9Gcm9tS29pb3Moc3Rha2UpO1xuICAgICAgICBsZXQgX2JhbGFuY2UgPSAoYWNjb3VudEluZm9bMF0udG90YWxfYmFsYW5jZSAvIDEwMDAwMDApO1xuICBcbiAgICAgICAgbGV0IHJlcSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5jb2luZ2Vja28uY29tL2FwaS92My9jb2lucy9jYXJkYW5vP2xvY2FsaXphdGlvbj1mYWxzZSZ0aWNrZXJzPWZhbHNlJmRldmVsb3Blcl9kYXRhPWZhbHNlJyk7XG4gICAgICAgIGxldCByZXMgPSBhd2FpdCByZXEuanNvbigpO1xuICAgICAgICBsZXQgdXNkID0gcmVzLm1hcmtldF9kYXRhLmN1cnJlbnRfcHJpY2UudXNkO1xuICBcbiAgICAgICAgbGV0IGFkYSA9IHt0aWNrZXIgOiAnQURBJywgcXVhbnRpdHkgOiB7X2JhbGFuY2V9LCBpcGZzOiAnL2NhcmRhbm8ucG5nJywgcHJpY2U6IHVzZH07XG4gICAgICAgIHJldHVybiBhZGE7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICBjb25zdCBkaXNwbGF5UHJpY2VkID0gYXN5bmMgKHRva2Vucywgc3Rha2UpID0+IHtcbiAgICAgIGxldCBfZGlzcGxheSA9IFtdO1xuXG4gICAgICBsZXQgYWRhID0gYXdhaXQgZ2V0QWRhQmFsYW5jZVByaWNlZChzdGFrZSk7XG5cbiAgICAgIF9kaXNwbGF5LnB1c2goPHRyIGtleSA9ICdrZXknIGNsYXNzTmFtZSA9IFwiZ3JpZC1pdGVtLWZ0XCI+PHRkPkNvaW48L3RkPjx0ZD5UaWNrZXI8L3RkPjx0ZD5RdWFudGl0eTwvdGQ+PHRkPlByaWNlPC90ZD48dGQ+VmFsdWU8L3RkPjwvdHI+KTtcblxuICAgICAgX2Rpc3BsYXkucHVzaCg8dHIga2V5ID0geydhZGEnfSBjbGFzc05hbWUgPSBcImdyaWQtaXRlbS1mdFwiPlxuICAgICAgICAgIDx0ZD48aW1nIGNsYXNzTmFtZT0nZnQtaW1nJyBzcmM9e2FkYS5pcGZzfT48L2ltZz48L3RkPlxuICAgICAgICAgIDx0ZD57YWRhLnRpY2tlcn08L3RkPjx0ZD57KGFkYS5xdWFudGl0eS8gMTAwMDAwMCl9PC90ZD5cbiAgICAgICAgICA8dGQ+JHthZGEucHJpY2V9PC90ZD48dGQ+JHsoYWRhLnByaWNlKmFkYS5xdWFudGl0eS8xMDAwMDAwKS50b0ZpeGVkKDIpfTwvdGQ+PC90cj4pO1xuXG4gICAgICBpZih0b2tlbnMgIT0gbnVsbCl7XG4gIFxuICAgICAgICBmb3IoY29uc3QgZWxlbWVudCBvZiB0b2tlbnMpe1xuICAgICAgICAgIGxldCB0b2tlbiA9IGVsZW1lbnQ7XG5cbiAgICAgICAgICBfZGlzcGxheS5wdXNoKDx0ciBrZXkgPSB7dG9rZW4uYXNzZXRfbmFtZSArICdmdCd9IGNsYXNzTmFtZSA9IFwiZ3JpZC1pdGVtLWZ0XCIgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy90b2tlbi8nK3Rva2VuLnBvbGljeV9pZCt0b2tlbi5hc3NldF9uYW1lKX0+XG4gICAgICAgICAgPHRkPjxpbWcgY2xhc3NOYW1lPSdmdC1pbWcnIHNyYz17dG9rZW4uaXBmc30+PC9pbWc+PC90ZD5cbiAgICAgICAgICA8dGQ+e3Rva2VuLm1ldGFkYXRhLnRpY2tlcn08L3RkPjx0ZD57KHRva2VuLnF1YW50aXR5LyAxMDAwMDAwKX08L3RkPlxuICAgICAgICAgIDx0ZD4ke3Rva2VuLnByaWNlfTwvdGQ+PHRkPiR7KHRva2VuLnByaWNlKnRva2VuLnF1YW50aXR5LzEwMDAwMDApLnRvRml4ZWQoMil9PC90ZD48L3RyPik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCB0YWJsZSA9IDx0YWJsZT48dGJvZHk+e19kaXNwbGF5fTwvdGJvZHk+PC90YWJsZT5cbiAgICAgICAgc2V0UHJpY2VkKHRhYmxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRUb2tlbnNXaXRoR2Vja29QcmljZXMgPSBhc3luYyAoZnRzKSA9PiB7XG5cbiAgICAgIFxuICAgICAgbGV0IGNvaW5zT25HZWNrbyA9IFtdO1xuXG4gICAgICBpZihmdHMgIT0gbnVsbCl7XG4gICAgICAgIGxldCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goJy9jb2luLWdlY2tvLmpzb24nKTtcbiAgICAgICAgbGV0IGdlY2tvRGF0YSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuXG4gICAgICAgIC8vc2VhcmNoIGdlY2tvIGxpc3QgZm9yIG93bmVkIGNvaW5zIG9mIHNhbWUgdGlja2VyXG4gICAgICAgIGZvcihjb25zdCBlbGVtZW50IG9mIGZ0cyl7XG4gICAgICAgICAgbGV0IHRva2VuID0gZWxlbWVudFswXTtcbiAgICAgICAgICBsZXQgdGlja2VyID0gJyc7XG4gICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgdGlja2VyID0gdG9rZW4ubWV0YWRhdGEudGlja2VyO1xuICAgICAgICAgICAgXG4gICAgICAgICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgICAgIHRpY2tlciA9IG51bGw7XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICAvL2dldCBpZHMgb2YgbWF0Y2hlZCBjb2luc1xuICAgICAgICAgIGlmKHRpY2tlciAhPSBudWxsKXtcbiAgICAgICAgICAgIGxldCBmb3VuZEdlY2tvQ29pbiAgPSBnZWNrb0RhdGEuZmluZChpdGVtID0+IGl0ZW0uc3ltYm9sID09IHRpY2tlci50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgIGlmKGZvdW5kR2Vja29Db2luICE9IG51bGwpe1xuICAgICAgICAgICAgICB0b2tlbi5pZCA9IGZvdW5kR2Vja29Db2luLmlkO1xuICAgICAgICAgICAgICBjb2luc09uR2Vja28ucHVzaCh0b2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9nZXQgaW5mbyBmb3IgZWFjaCBjb2luXG5cbiAgICAgICAgbGV0IHByaWNlZFRva2VucyA9IFtdO1xuICAgICAgICBmb3IoY29uc3QgZWxlbWVudCBvZiBjb2luc09uR2Vja28pe1xuICAgICAgICAgIGxldCByZXEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuY29pbmdlY2tvLmNvbS9hcGkvdjMvY29pbnMvJytlbGVtZW50LmlkKTtcbiAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgICAgICAgICBpZihyZXMuYXNzZXRfcGxhdGZvcm1faWQgPT0gJ2NhcmRhbm8nKXtcbiAgICAgICAgICAgIGVsZW1lbnQucHJpY2UgPSByZXMubWFya2V0X2RhdGEuY3VycmVudF9wcmljZS51c2Q7XG4gICAgICAgICAgICBwcmljZWRUb2tlbnMucHVzaChlbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByaWNlZFRva2VucztcblxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheVRva2VuVGFibGUgPSAodG9rZW5zKSA9PiB7XG4gICAgICBpZih0b2tlbnMgPT0gbnVsbCl7XG4gICAgICAgIC8vYmFzZVxuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgbGV0IF9kaXNwbGF5ID0gW107XG4gICAgICAgIGxldCBwb2xpY2llcyA9IE9iamVjdC5rZXlzKHRva2Vucyk7XG4gICAgICAgIF9kaXNwbGF5LnB1c2goPHRyIGtleSA9ICdrZXknIGNsYXNzTmFtZSA9IFwiZ3JpZC1pdGVtLWZ0XCI+PHRkPkNvaW48L3RkPjx0ZD5UaWNrZXI8L3RkPjx0ZD5RdWFudGl0eTwvdGQ+PC90cj4pXG4gICAgICAgIGZvcihjb25zdCBwb2xpY3kgb2YgcG9saWNpZXMpe1xuICAgICAgICAgIGxldCB0b2tlbiA9IHRva2Vuc1twb2xpY3ldWzBdO1xuICAgICAgICAgIGxldCBuYW1lID0gdG9rZW4ubWV0YWRhdGEudGlja2VyO1xuICAgICAgICAgIGlmKHRva2VuLm1ldGFkYXRhLnRpY2tlciA9PSBudWxsKXtcblxuICAgICAgICAgICAgaWYodG9rZW4ubWV0YWRhdGEubmFtZSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgbmFtZSA9IHRva2VuLm1ldGFkYXRhLm5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICBuYW1lID0gJ3Vua25vd24nO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICB9XG4gICAgICAgICAgX2Rpc3BsYXkucHVzaCg8dHIga2V5ID0ge3Rva2VuLmFzc2V0X25hbWUgKyAnZnQnfSBjbGFzc05hbWUgPSBcImdyaWQtaXRlbS1mdFwiIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvdG9rZW4vJyt0b2tlbi5wb2xpY3lfaWQrdG9rZW4uYXNzZXRfbmFtZSl9PlxuICAgICAgICAgICAgPHRkPjxpbWcgY2xhc3NOYW1lPSdmdC1pbWcnIHNyYz17dG9rZW4uaXBmc30+PC9pbWc+PC90ZD5cbiAgICAgICAgICAgIDx0ZD57bmFtZX08L3RkPjx0ZD57KHRva2VuLnF1YW50aXR5LyAxMDAwMDAwKX08L3RkPjwvdHI+KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdGFibGUgPSA8dGFibGU+PHRib2R5PntfZGlzcGxheX08L3Rib2R5PjwvdGFibGU+XG4gICAgICAgIHNldERpc3BsYXkodGFibGUpO1xuICAgICAgfVxuXG4gICAgfVxuICAgIC8vcmV0dXJucyBhIGdyaWQgdmlldyBvZiBhbGwgTkZUcyBncm91cGVkIGJ5IHBvbGljeVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ0c1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtZnRcIj57cHJpY2VkfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtZnRcIj57ZGlzcGxheX08L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRva2VuIiwiRnRzIiwidG9rZW5zIiwiZGlzcGxheSIsInNldERpc3BsYXkiLCJwcmljZWQiLCJzZXRQcmljZWQiLCJyb3V0ZXIiLCJnZXREYXRhIiwiZnRzIiwiZGlzcGxheVRva2VuVGFibGUiLCJwcmljZWRUb2tlbnMiLCJnZXRUb2tlbnNXaXRoR2Vja29QcmljZXMiLCJkaXNwbGF5UHJpY2VkIiwic3Rha2UiLCJnZXRBY2NvdW50SW5mb0Zyb21Lb2lvcyIsInN0YWtlQWRkcmVzcyIsInJlcSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzIiwianNvbiIsImdldEFkYUJhbGFuY2VQcmljZWQiLCJhY2NvdW50SW5mbyIsIl9iYWxhbmNlIiwidG90YWxfYmFsYW5jZSIsInVzZCIsIm1hcmtldF9kYXRhIiwiY3VycmVudF9wcmljZSIsImFkYSIsInRpY2tlciIsInF1YW50aXR5IiwiaXBmcyIsInByaWNlIiwiX2Rpc3BsYXkiLCJwdXNoIiwidHIiLCJjbGFzc05hbWUiLCJ0ZCIsImltZyIsInNyYyIsInRvRml4ZWQiLCJlbGVtZW50IiwidG9rZW4iLCJvbkNsaWNrIiwicG9saWN5X2lkIiwiYXNzZXRfbmFtZSIsIm1ldGFkYXRhIiwidGFibGUiLCJ0Ym9keSIsImNvaW5zT25HZWNrbyIsInJlcXVlc3QiLCJnZWNrb0RhdGEiLCJlcnJvciIsImZvdW5kR2Vja29Db2luIiwiZmluZCIsIml0ZW0iLCJzeW1ib2wiLCJ0b0xvd2VyQ2FzZSIsImlkIiwiYXNzZXRfcGxhdGZvcm1faWQiLCJwb2xpY2llcyIsIk9iamVjdCIsImtleXMiLCJwb2xpY3kiLCJuYW1lIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/fts.js\n"));

/***/ })

});