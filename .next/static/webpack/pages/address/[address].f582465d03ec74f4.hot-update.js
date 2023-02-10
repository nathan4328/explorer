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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Fts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Fts(param) {\n    let { tokens  } = param;\n    _s();\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (tokens != null) {\n            let fts = tokens.fts;\n            displayTokenTable(fts);\n            getPriceForToken(fts);\n        }\n    }, [\n        tokens\n    ]);\n    const getPriceForToken = async (fts)=>{\n        let coinsOnGecko = [];\n        if (fts != null) {\n            let request = await fetch(\"/coin-gecko.json\");\n            let geckoData = await request.json();\n            console.log(geckoData);\n            //search gecko list for owned coins of same ticker\n            for (const element of fts){\n                let token = element[0];\n                let ticker = \"\";\n                try {\n                    ticker = token.metadata.ticker;\n                } catch (error) {\n                    ticker = null;\n                }\n                //get ids of matched coins\n                if (ticker != null) {\n                    let foundGeckoCoin = geckoData.find((item)=>item.symbol == ticker.toLowerCase());\n                    if (foundGeckoCoin != null) {\n                        console.log(foundGeckoCoin);\n                        token.id = foundGeckoCoin.id;\n                        coinsOnGecko.push(token);\n                    }\n                }\n            }\n            //get info for each coin\n            //fts is a list of arrays of length 1\n            console.log(coinsOnGecko);\n        }\n    };\n    const displayTokenTable = (tokens)=>{\n        if (tokens == null) {\n        //base\n        } else {\n            let _display = [];\n            let policies = Object.keys(tokens);\n            _display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                className: \"grid-item-ft\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"Coin\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 71,\n                        columnNumber: 66\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"Ticker\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 71,\n                        columnNumber: 79\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"Quantity\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 71,\n                        columnNumber: 94\n                    }, this)\n                ]\n            }, \"key\", true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                lineNumber: 71,\n                columnNumber: 23\n            }, this));\n            for (const policy of policies){\n                let token = tokens[policy][0];\n                let name = token.metadata.ticker;\n                if (token.metadata.ticker == null) {\n                    if (token.metadata.name != null) {\n                        name = token.metadata.name;\n                    } else {\n                        name = \"unknown\";\n                    }\n                }\n                _display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    className: \"grid-item-ft\",\n                    onClick: ()=>router.push(\"/token/\" + token.policy_id + token.asset_name),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"ft-img\",\n                                src: token.ipfs\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                                lineNumber: 87,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 88,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: token.quantity / 1000000\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 88,\n                            columnNumber: 28\n                        }, this)\n                    ]\n                }, token.asset_name + \"ft\", true, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                    lineNumber: 86,\n                    columnNumber: 25\n                }, this));\n            }\n            let table = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: _display\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                    lineNumber: 90,\n                    columnNumber: 28\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                lineNumber: 90,\n                columnNumber: 21\n            }, this);\n            setDisplay(table);\n        }\n    };\n    //returns a grid view of all NFTs grouped by policy\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fts\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid-ft\",\n                children: display\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                lineNumber: 98,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid-ft\",\n                children: display\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                lineNumber: 99,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n        lineNumber: 97,\n        columnNumber: 7\n    }, this);\n}\n_s(Fts, \"TdQcjU6l/UJHsbfeJC//FZ+coQc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Fts;\nvar _c;\n$RefreshReg$(_c, \"Fts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7c0NBQVUsOERBQUNGO3NDQUFLakIsTUFBTTBCLFFBQVEsR0FBRTs7Ozs7OzttQkFGZDFCLE1BQU1zQixVQUFVLEdBQUc7Ozs7O1lBRzlDO1lBQ0EsSUFBSUssc0JBQVEsOERBQUNBOzBCQUFNLDRFQUFDQzs4QkFBT2pCOzs7Ozs7Ozs7OztZQUMzQnhCLFdBQVd3QztRQUNiLENBQUM7SUFFSDtJQUNBLG1EQUFtRDtJQUNuRCxxQkFDRSw4REFBQ0U7UUFBSWIsV0FBVTs7MEJBQ2IsOERBQUNhO2dCQUFJYixXQUFVOzBCQUFXOUI7Ozs7OzswQkFDMUIsOERBQUMyQztnQkFBSWIsV0FBVTswQkFBVzlCOzs7Ozs7Ozs7Ozs7QUFJbEMsQ0FBQztHQW5HdUJGOztRQUdMSCxrREFBU0E7OztLQUhKRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvZnRzLmpzP2RiM2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZ0cyAoe3Rva2Vuc30pe1xuXG4gICAgY29uc3QgW2Rpc3BsYXksIHNldERpc3BsYXldID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmKHRva2VucyAhPSBudWxsKXtcbiAgICAgICAgbGV0IGZ0cyA9IHRva2Vucy5mdHM7XG4gICAgICAgIGRpc3BsYXlUb2tlblRhYmxlKGZ0cyk7XG4gICAgICAgIGdldFByaWNlRm9yVG9rZW4oZnRzKTtcblxuICAgICAgfVxuICAgIH0sIFt0b2tlbnNdKTtcblxuICAgIGNvbnN0IGdldFByaWNlRm9yVG9rZW4gPSBhc3luYyAoZnRzKSA9PiB7XG5cbiAgICAgIGxldCBjb2luc09uR2Vja28gPSBbXTtcblxuICAgICAgaWYoZnRzICE9IG51bGwpe1xuICAgICAgICBsZXQgcmVxdWVzdCA9IGF3YWl0IGZldGNoKCcvY29pbi1nZWNrby5qc29uJyk7XG4gICAgICAgIGxldCBnZWNrb0RhdGEgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coZ2Vja29EYXRhKTtcblxuICAgICAgICAvL3NlYXJjaCBnZWNrbyBsaXN0IGZvciBvd25lZCBjb2lucyBvZiBzYW1lIHRpY2tlclxuICAgICAgICBmb3IoY29uc3QgZWxlbWVudCBvZiBmdHMpe1xuICAgICAgICAgIGxldCB0b2tlbiA9IGVsZW1lbnRbMF07XG4gICAgICAgICAgbGV0IHRpY2tlciA9ICcnO1xuICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgIHRpY2tlciA9IHRva2VuLm1ldGFkYXRhLnRpY2tlcjtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgICAgICB0aWNrZXIgPSBudWxsO1xuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgLy9nZXQgaWRzIG9mIG1hdGNoZWQgY29pbnNcbiAgICAgICAgICBpZih0aWNrZXIgIT0gbnVsbCl7XG4gICAgICAgICAgICBsZXQgZm91bmRHZWNrb0NvaW4gID0gZ2Vja29EYXRhLmZpbmQoaXRlbSA9PiBpdGVtLnN5bWJvbCA9PSB0aWNrZXIudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICBpZihmb3VuZEdlY2tvQ29pbiAhPSBudWxsKXtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZm91bmRHZWNrb0NvaW4pO1xuICAgICAgICAgICAgICB0b2tlbi5pZCA9IGZvdW5kR2Vja29Db2luLmlkO1xuICAgICAgICAgICAgICBjb2luc09uR2Vja28ucHVzaCh0b2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9nZXQgaW5mbyBmb3IgZWFjaCBjb2luXG5cbiAgICAgICAgLy9mdHMgaXMgYSBsaXN0IG9mIGFycmF5cyBvZiBsZW5ndGggMVxuICAgICAgICBjb25zb2xlLmxvZyhjb2luc09uR2Vja28pO1xuXG5cblxuICAgICAgfVxuXG5cblxuXG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheVRva2VuVGFibGUgPSAodG9rZW5zKSA9PiB7XG4gICAgICBpZih0b2tlbnMgPT0gbnVsbCl7XG4gICAgICAgIC8vYmFzZVxuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgbGV0IF9kaXNwbGF5ID0gW107XG4gICAgICAgIGxldCBwb2xpY2llcyA9IE9iamVjdC5rZXlzKHRva2Vucyk7XG4gICAgICAgIF9kaXNwbGF5LnB1c2goPHRyIGtleSA9ICdrZXknIGNsYXNzTmFtZSA9IFwiZ3JpZC1pdGVtLWZ0XCI+PHRkPkNvaW48L3RkPjx0ZD5UaWNrZXI8L3RkPjx0ZD5RdWFudGl0eTwvdGQ+PC90cj4pXG4gICAgICAgIGZvcihjb25zdCBwb2xpY3kgb2YgcG9saWNpZXMpe1xuICAgICAgICAgIGxldCB0b2tlbiA9IHRva2Vuc1twb2xpY3ldWzBdO1xuICAgICAgICAgIGxldCBuYW1lID0gdG9rZW4ubWV0YWRhdGEudGlja2VyO1xuICAgICAgICAgIGlmKHRva2VuLm1ldGFkYXRhLnRpY2tlciA9PSBudWxsKXtcblxuICAgICAgICAgICAgaWYodG9rZW4ubWV0YWRhdGEubmFtZSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgbmFtZSA9IHRva2VuLm1ldGFkYXRhLm5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICBuYW1lID0gJ3Vua25vd24nO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICB9XG4gICAgICAgICAgX2Rpc3BsYXkucHVzaCg8dHIga2V5ID0ge3Rva2VuLmFzc2V0X25hbWUgKyAnZnQnfSBjbGFzc05hbWUgPSBcImdyaWQtaXRlbS1mdFwiIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvdG9rZW4vJyt0b2tlbi5wb2xpY3lfaWQrdG9rZW4uYXNzZXRfbmFtZSl9PlxuICAgICAgICAgICAgPHRkPjxpbWcgY2xhc3NOYW1lPSdmdC1pbWcnIHNyYz17dG9rZW4uaXBmc30+PC9pbWc+PC90ZD5cbiAgICAgICAgICAgIDx0ZD57bmFtZX08L3RkPjx0ZD57KHRva2VuLnF1YW50aXR5LyAxMDAwMDAwKX08L3RkPjwvdHI+KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdGFibGUgPSA8dGFibGU+PHRib2R5PntfZGlzcGxheX08L3Rib2R5PjwvdGFibGU+XG4gICAgICAgIHNldERpc3BsYXkodGFibGUpO1xuICAgICAgfVxuXG4gICAgfVxuICAgIC8vcmV0dXJucyBhIGdyaWQgdmlldyBvZiBhbGwgTkZUcyBncm91cGVkIGJ5IHBvbGljeVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ0c1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtZnRcIj57ZGlzcGxheX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWZ0XCI+e2Rpc3BsYXl9PC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJGdHMiLCJ0b2tlbnMiLCJkaXNwbGF5Iiwic2V0RGlzcGxheSIsInJvdXRlciIsImZ0cyIsImRpc3BsYXlUb2tlblRhYmxlIiwiZ2V0UHJpY2VGb3JUb2tlbiIsImNvaW5zT25HZWNrbyIsInJlcXVlc3QiLCJmZXRjaCIsImdlY2tvRGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZWxlbWVudCIsInRva2VuIiwidGlja2VyIiwibWV0YWRhdGEiLCJlcnJvciIsImZvdW5kR2Vja29Db2luIiwiZmluZCIsIml0ZW0iLCJzeW1ib2wiLCJ0b0xvd2VyQ2FzZSIsImlkIiwicHVzaCIsIl9kaXNwbGF5IiwicG9saWNpZXMiLCJPYmplY3QiLCJrZXlzIiwidHIiLCJjbGFzc05hbWUiLCJ0ZCIsInBvbGljeSIsIm5hbWUiLCJvbkNsaWNrIiwicG9saWN5X2lkIiwiYXNzZXRfbmFtZSIsImltZyIsInNyYyIsImlwZnMiLCJxdWFudGl0eSIsInRhYmxlIiwidGJvZHkiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/fts.js\n"));

/***/ })

});