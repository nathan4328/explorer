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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Fts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Fts(param) {\n    let { tokens  } = param;\n    _s();\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (tokens != null) {\n            let fts = tokens.fts;\n            displayTokenTable(fts);\n            getTokensWithGeckoPrices(fts);\n        }\n    }, [\n        tokens\n    ]);\n    const getTokensWithGeckoPrices = async (fts)=>{\n        let coinsOnGecko = [];\n        if (fts != null) {\n            let request = await fetch(\"/coin-gecko.json\");\n            let geckoData = await request.json();\n            //search gecko list for owned coins of same ticker\n            for (const element of fts){\n                let token = element[0];\n                let ticker = \"\";\n                try {\n                    ticker = token.metadata.ticker;\n                } catch (error) {\n                    ticker = null;\n                }\n                //get ids of matched coins\n                if (ticker != null) {\n                    let foundGeckoCoin = geckoData.find((item)=>item.symbol == ticker.toLowerCase());\n                    if (foundGeckoCoin != null) {\n                        token.id = foundGeckoCoin.id;\n                        coinsOnGecko.push(token);\n                    }\n                }\n            }\n            //get info for each coin\n            let pricedTokens = [];\n            for (const element of coinsOnGecko){\n                let req = await fetch(\"https://api.coingecko.com/api/v3/coins/\" + element.id);\n                let res = await req.json();\n                if (res.asset_platform_id == \"cardano\") {\n                    element.price = res.market_data.current_price.usd;\n                    pricedTokens.push(element);\n                }\n            }\n            return pricedTokens;\n        }\n    };\n    const displayTokenTable = (tokens)=>{\n        if (tokens == null) {\n        //base\n        } else {\n            let _display = [];\n            let policies = Object.keys(tokens);\n            _display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                className: \"grid-item-ft\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"Coin\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 79,\n                        columnNumber: 66\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"Ticker\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 79,\n                        columnNumber: 79\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"Quantity\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 79,\n                        columnNumber: 94\n                    }, this)\n                ]\n            }, \"key\", true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                lineNumber: 79,\n                columnNumber: 23\n            }, this));\n            for (const policy of policies){\n                let token = tokens[policy][0];\n                let name = token.metadata.ticker;\n                if (token.metadata.ticker == null) {\n                    if (token.metadata.name != null) {\n                        name = token.metadata.name;\n                    } else {\n                        name = \"unknown\";\n                    }\n                }\n                _display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    className: \"grid-item-ft\",\n                    onClick: ()=>router.push(\"/token/\" + token.policy_id + token.asset_name),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"ft-img\",\n                                src: token.ipfs\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                                lineNumber: 95,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 95,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 96,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: token.quantity / 1000000\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 96,\n                            columnNumber: 28\n                        }, this)\n                    ]\n                }, token.asset_name + \"ft\", true, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                    lineNumber: 94,\n                    columnNumber: 25\n                }, this));\n            }\n            let table = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: _display\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                    lineNumber: 98,\n                    columnNumber: 28\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                lineNumber: 98,\n                columnNumber: 21\n            }, this);\n            setDisplay(table);\n        }\n    };\n    //returns a grid view of all NFTs grouped by policy\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fts\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid-ft\",\n                children: display\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                lineNumber: 106,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid-ft\",\n                children: display\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                lineNumber: 107,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n        lineNumber: 105,\n        columnNumber: 7\n    }, this);\n}\n_s(Fts, \"TdQcjU6l/UJHsbfeJC//FZ+coQc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Fts;\nvar _c;\n$RefreshReg$(_c, \"Fts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksZUFBQyw4REFBQ2E7b0JBQW1DQyxXQUFZO29CQUFlSSxTQUFTLElBQU10QyxPQUFPb0IsSUFBSSxDQUFDLFlBQVVWLE1BQU02QixTQUFTLEdBQUM3QixNQUFNOEIsVUFBVTs7c0NBQ2hKLDhEQUFDTDtzQ0FBRyw0RUFBQ007Z0NBQUlQLFdBQVU7Z0NBQVNRLEtBQUtoQyxNQUFNaUMsSUFBSTs7Ozs7Ozs7Ozs7c0NBQzNDLDhEQUFDUjtzQ0FBSUU7Ozs7OztzQ0FBVSw4REFBQ0Y7c0NBQUt6QixNQUFNa0MsUUFBUSxHQUFFOzs7Ozs7O21CQUZkbEMsTUFBTThCLFVBQVUsR0FBRzs7Ozs7WUFHOUM7WUFDQSxJQUFJSyxzQkFBUSw4REFBQ0E7MEJBQU0sNEVBQUNDOzhCQUFPakI7Ozs7Ozs7Ozs7O1lBQzNCOUIsV0FBVzhDO1FBQ2IsQ0FBQztJQUVIO0lBQ0EsbURBQW1EO0lBQ25ELHFCQUNFLDhEQUFDRTtRQUFJYixXQUFVOzswQkFDYiw4REFBQ2E7Z0JBQUliLFdBQVU7MEJBQVdwQzs7Ozs7OzBCQUMxQiw4REFBQ2lEO2dCQUFJYixXQUFVOzBCQUFXcEM7Ozs7Ozs7Ozs7OztBQUlsQyxDQUFDO0dBM0d1QkY7O1FBR0xILGtEQUFTQTs7O0tBSEpHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9mdHMuanM/ZGIzYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRnRzICh7dG9rZW5zfSl7XG5cbiAgICBjb25zdCBbZGlzcGxheSwgc2V0RGlzcGxheV0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICB1c2VFZmZlY3QoICgpID0+IHtcbiAgICAgIGlmKHRva2VucyAhPSBudWxsKXtcbiAgICAgICAgbGV0IGZ0cyA9IHRva2Vucy5mdHM7XG4gICAgICAgIGRpc3BsYXlUb2tlblRhYmxlKGZ0cyk7XG4gICAgICAgIGdldFRva2Vuc1dpdGhHZWNrb1ByaWNlcyhmdHMpO1xuXG4gICAgICB9XG4gICAgfSwgW3Rva2Vuc10pO1xuXG4gICAgY29uc3QgZ2V0VG9rZW5zV2l0aEdlY2tvUHJpY2VzID0gYXN5bmMgKGZ0cykgPT4ge1xuXG4gICAgICBsZXQgY29pbnNPbkdlY2tvID0gW107XG5cbiAgICAgIGlmKGZ0cyAhPSBudWxsKXtcbiAgICAgICAgbGV0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaCgnL2NvaW4tZ2Vja28uanNvbicpO1xuICAgICAgICBsZXQgZ2Vja29EYXRhID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG5cbiAgICAgICAgLy9zZWFyY2ggZ2Vja28gbGlzdCBmb3Igb3duZWQgY29pbnMgb2Ygc2FtZSB0aWNrZXJcbiAgICAgICAgZm9yKGNvbnN0IGVsZW1lbnQgb2YgZnRzKXtcbiAgICAgICAgICBsZXQgdG9rZW4gPSBlbGVtZW50WzBdO1xuICAgICAgICAgIGxldCB0aWNrZXIgPSAnJztcbiAgICAgICAgICB0cnl7XG4gICAgICAgICAgICB0aWNrZXIgPSB0b2tlbi5tZXRhZGF0YS50aWNrZXI7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgICAgICAgdGlja2VyID0gbnVsbDtcbiAgICAgICAgICB9XG5cblxuICAgICAgICAgIC8vZ2V0IGlkcyBvZiBtYXRjaGVkIGNvaW5zXG4gICAgICAgICAgaWYodGlja2VyICE9IG51bGwpe1xuICAgICAgICAgICAgbGV0IGZvdW5kR2Vja29Db2luICA9IGdlY2tvRGF0YS5maW5kKGl0ZW0gPT4gaXRlbS5zeW1ib2wgPT0gdGlja2VyLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgaWYoZm91bmRHZWNrb0NvaW4gIT0gbnVsbCl7XG4gICAgICAgICAgICAgIHRva2VuLmlkID0gZm91bmRHZWNrb0NvaW4uaWQ7XG4gICAgICAgICAgICAgIGNvaW5zT25HZWNrby5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL2dldCBpbmZvIGZvciBlYWNoIGNvaW5cblxuICAgICAgICBsZXQgcHJpY2VkVG9rZW5zID0gW107XG4gICAgICAgIGZvcihjb25zdCBlbGVtZW50IG9mIGNvaW5zT25HZWNrbyl7XG4gICAgICAgICAgbGV0IHJlcSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5jb2luZ2Vja28uY29tL2FwaS92My9jb2lucy8nK2VsZW1lbnQuaWQpO1xuICAgICAgICAgIGxldCByZXMgPSBhd2FpdCByZXEuanNvbigpO1xuICAgICAgICAgIGlmKHJlcy5hc3NldF9wbGF0Zm9ybV9pZCA9PSAnY2FyZGFubycpe1xuICAgICAgICAgICAgZWxlbWVudC5wcmljZSA9IHJlcy5tYXJrZXRfZGF0YS5jdXJyZW50X3ByaWNlLnVzZDtcbiAgICAgICAgICAgIHByaWNlZFRva2Vucy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmV0dXJuIHByaWNlZFRva2VucztcblxuXG5cbiAgICAgIH1cblxuXG5cblxuICAgIH1cblxuICAgIGNvbnN0IGRpc3BsYXlUb2tlblRhYmxlID0gKHRva2VucykgPT4ge1xuICAgICAgaWYodG9rZW5zID09IG51bGwpe1xuICAgICAgICAvL2Jhc2VcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIGxldCBfZGlzcGxheSA9IFtdO1xuICAgICAgICBsZXQgcG9saWNpZXMgPSBPYmplY3Qua2V5cyh0b2tlbnMpO1xuICAgICAgICBfZGlzcGxheS5wdXNoKDx0ciBrZXkgPSAna2V5JyBjbGFzc05hbWUgPSBcImdyaWQtaXRlbS1mdFwiPjx0ZD5Db2luPC90ZD48dGQ+VGlja2VyPC90ZD48dGQ+UXVhbnRpdHk8L3RkPjwvdHI+KVxuICAgICAgICBmb3IoY29uc3QgcG9saWN5IG9mIHBvbGljaWVzKXtcbiAgICAgICAgICBsZXQgdG9rZW4gPSB0b2tlbnNbcG9saWN5XVswXTtcbiAgICAgICAgICBsZXQgbmFtZSA9IHRva2VuLm1ldGFkYXRhLnRpY2tlcjtcbiAgICAgICAgICBpZih0b2tlbi5tZXRhZGF0YS50aWNrZXIgPT0gbnVsbCl7XG5cbiAgICAgICAgICAgIGlmKHRva2VuLm1ldGFkYXRhLm5hbWUgIT0gbnVsbCl7XG4gICAgICAgICAgICAgIG5hbWUgPSB0b2tlbi5tZXRhZGF0YS5uYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgbmFtZSA9ICd1bmtub3duJztcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgfVxuICAgICAgICAgIF9kaXNwbGF5LnB1c2goPHRyIGtleSA9IHt0b2tlbi5hc3NldF9uYW1lICsgJ2Z0J30gY2xhc3NOYW1lID0gXCJncmlkLWl0ZW0tZnRcIiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL3Rva2VuLycrdG9rZW4ucG9saWN5X2lkK3Rva2VuLmFzc2V0X25hbWUpfT5cbiAgICAgICAgICAgIDx0ZD48aW1nIGNsYXNzTmFtZT0nZnQtaW1nJyBzcmM9e3Rva2VuLmlwZnN9PjwvaW1nPjwvdGQ+XG4gICAgICAgICAgICA8dGQ+e25hbWV9PC90ZD48dGQ+eyh0b2tlbi5xdWFudGl0eS8gMTAwMDAwMCl9PC90ZD48L3RyPik7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRhYmxlID0gPHRhYmxlPjx0Ym9keT57X2Rpc3BsYXl9PC90Ym9keT48L3RhYmxlPlxuICAgICAgICBzZXREaXNwbGF5KHRhYmxlKTtcbiAgICAgIH1cblxuICAgIH1cbiAgICAvL3JldHVybnMgYSBncmlkIHZpZXcgb2YgYWxsIE5GVHMgZ3JvdXBlZCBieSBwb2xpY3lcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdHNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWZ0XCI+e2Rpc3BsYXl9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1mdFwiPntkaXNwbGF5fTwvZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRnRzIiwidG9rZW5zIiwiZGlzcGxheSIsInNldERpc3BsYXkiLCJyb3V0ZXIiLCJmdHMiLCJkaXNwbGF5VG9rZW5UYWJsZSIsImdldFRva2Vuc1dpdGhHZWNrb1ByaWNlcyIsImNvaW5zT25HZWNrbyIsInJlcXVlc3QiLCJmZXRjaCIsImdlY2tvRGF0YSIsImpzb24iLCJlbGVtZW50IiwidG9rZW4iLCJ0aWNrZXIiLCJtZXRhZGF0YSIsImVycm9yIiwiZm91bmRHZWNrb0NvaW4iLCJmaW5kIiwiaXRlbSIsInN5bWJvbCIsInRvTG93ZXJDYXNlIiwiaWQiLCJwdXNoIiwicHJpY2VkVG9rZW5zIiwicmVxIiwicmVzIiwiYXNzZXRfcGxhdGZvcm1faWQiLCJwcmljZSIsIm1hcmtldF9kYXRhIiwiY3VycmVudF9wcmljZSIsInVzZCIsIl9kaXNwbGF5IiwicG9saWNpZXMiLCJPYmplY3QiLCJrZXlzIiwidHIiLCJjbGFzc05hbWUiLCJ0ZCIsInBvbGljeSIsIm5hbWUiLCJvbkNsaWNrIiwicG9saWN5X2lkIiwiYXNzZXRfbmFtZSIsImltZyIsInNyYyIsImlwZnMiLCJxdWFudGl0eSIsInRhYmxlIiwidGJvZHkiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/fts.js\n"));

/***/ })

});