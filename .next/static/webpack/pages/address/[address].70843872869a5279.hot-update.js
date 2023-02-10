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

/***/ "./src/pages/nfts.js":
/*!***************************!*\
  !*** ./src/pages/nfts.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Nfts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Nfts(param) {\n    let { tokens  } = param;\n    _s();\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        showTokens(tokens.nfts);\n    }, [\n        tokens\n    ]);\n    const showTokens = (nfts)=>{\n        if (nfts == null) {\n        //base\n        } else {\n            let _display = [];\n            let policies = Object.keys(nfts);\n            for (const policy of policies){\n                let token = tokens[policy][0];\n                if (tokens[policy].length > 1) {\n                    _display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid-item-collection\",\n                        onClick: ()=>showTokensFromPolicy(tokens[policy]),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: token.ipfs,\n                            alt: \"failed to load image\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                            lineNumber: 23,\n                            columnNumber: 155\n                        }, this)\n                    }, token.asset_name + \"nft\", false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                        lineNumber: 23,\n                        columnNumber: 27\n                    }, this));\n                } else {\n                    _display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid-item\",\n                        onClick: ()=>router.push(\"/token/\" + token.policy_id + token.asset_name),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: token.ipfs,\n                            alt: \"failed to load image\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                            lineNumber: 26,\n                            columnNumber: 163\n                        }, this)\n                    }, token.asset_name + \"nft\", false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                        lineNumber: 26,\n                        columnNumber: 27\n                    }, this));\n                }\n            }\n            setDisplay(_display);\n        }\n    };\n    function showTokensFromPolicy(policy) {\n        let _display = [];\n        for (const token of policy){\n            _display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid-item\",\n                onClick: ()=>router.push(\"/token/\" + token.policy_id + token.asset_name),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: token.ipfs,\n                    alt: \"failed to load image\"\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                    lineNumber: 41,\n                    columnNumber: 160\n                }, this)\n            }, token.asset_name + \"poly\", false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                lineNumber: 41,\n                columnNumber: 25\n            }, this));\n        }\n        setDisplay(_display);\n    }\n    //returns a grid view of all NFTs grouped by policy\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"sort-button\",\n                    onClick: ()=>showTokens(),\n                    children: \"Show All\"\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                    lineNumber: 50,\n                    columnNumber: 14\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid-nft\",\n                children: display\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n        lineNumber: 49,\n        columnNumber: 7\n    }, this);\n}\n_s(Nfts, \"TdQcjU6l/UJHsbfeJC//FZ+coQc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Nfts;\nvar _c;\n$RefreshReg$(_c, \"Nfts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbmZ0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0M7QUFDSTtBQUU3QixTQUFTRyxLQUFNLEtBQVEsRUFBQztRQUFULEVBQUNDLE9BQU0sRUFBQyxHQUFSOztJQUUxQixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0osK0NBQVFBLENBQUMsRUFBRTtJQUN6QyxNQUFNSyxTQUFTUCxzREFBU0E7SUFFeEJDLGdEQUFTQSxDQUFDLElBQU07UUFDZE8sV0FBV0osT0FBT0ssSUFBSTtJQUN4QixHQUFHO1FBQUNMO0tBQU87SUFFWCxNQUFNSSxhQUFhLENBQUNDLE9BQVM7UUFDM0IsSUFBR0EsUUFBUSxJQUFJLEVBQUM7UUFDZCxNQUFNO1FBQ1IsT0FDSTtZQUNGLElBQUlDLFdBQVcsRUFBRTtZQUNqQixJQUFJQyxXQUFXQyxPQUFPQyxJQUFJLENBQUNKO1lBQzNCLEtBQUksTUFBTUssVUFBVUgsU0FBUztnQkFDM0IsSUFBSUksUUFBUVgsTUFBTSxDQUFDVSxPQUFPLENBQUMsRUFBRTtnQkFDN0IsSUFBR1YsTUFBTSxDQUFDVSxPQUFPLENBQUNFLE1BQU0sR0FBRyxHQUFFO29CQUMzQk4sU0FBU08sSUFBSSxlQUFDLDhEQUFDQzt3QkFBcUNDLFdBQVk7d0JBQXVCQyxTQUFXLElBQU1DLHFCQUFxQmpCLE1BQU0sQ0FBQ1UsT0FBTztrQ0FBRyw0RUFBQ1E7NEJBQUlDLEtBQUtSLE1BQU1TLElBQUk7NEJBQUVDLEtBQU07Ozs7Ozt1QkFBaEpWLE1BQU1XLFVBQVUsR0FBRzs7Ozs7Z0JBQy9DLE9BQ0k7b0JBQ0ZoQixTQUFTTyxJQUFJLGVBQUMsOERBQUNDO3dCQUFxQ0MsV0FBWTt3QkFBWUMsU0FBVyxJQUFNYixPQUFPVSxJQUFJLENBQUMsWUFBVUYsTUFBTVksU0FBUyxHQUFDWixNQUFNVyxVQUFVO2tDQUFHLDRFQUFDSjs0QkFBSUMsS0FBS1IsTUFBTVMsSUFBSTs0QkFBRUMsS0FBTTs7Ozs7O3VCQUF4SlYsTUFBTVcsVUFBVSxHQUFHOzs7OztnQkFFL0MsQ0FBQztZQUVIO1lBRUFwQixXQUFXSTtRQUNiLENBQUM7SUFFSDtJQUVBLFNBQVNXLHFCQUFxQlAsTUFBTSxFQUFDO1FBQ2pDLElBQUlKLFdBQVcsRUFBRTtRQUVqQixLQUFJLE1BQU1LLFNBQVNELE9BQU87WUFDeEJKLFNBQVNPLElBQUksZUFBQyw4REFBQ0M7Z0JBQXNDQyxXQUFZO2dCQUFZQyxTQUFTLElBQU1iLE9BQU9VLElBQUksQ0FBQyxZQUFVRixNQUFNWSxTQUFTLEdBQUNaLE1BQU1XLFVBQVU7MEJBQUcsNEVBQUNKO29CQUFJQyxLQUFNUixNQUFNUyxJQUFJO29CQUMxS0MsS0FBTTs7Ozs7O2VBRG9CVixNQUFNVyxVQUFVLEdBQUc7Ozs7O1FBRS9DO1FBQ0FwQixXQUFXSTtJQUNmO0lBRUEsbURBQW1EO0lBQ25ELHFCQUNFLDhEQUFDUTs7MEJBQ0MsOERBQUNVOzBCQUFJLDRFQUFDQztvQkFBT1YsV0FBVTtvQkFBY0MsU0FBUyxJQUFNWjs4QkFBYzs7Ozs7Ozs7Ozs7MEJBQ2xFLDhEQUFDVTtnQkFBSUMsV0FBVTswQkFBWWQ7Ozs7Ozs7Ozs7OztBQUluQyxDQUFDO0dBbkR1QkY7O1FBR0xILGtEQUFTQTs7O0tBSEpHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9uZnRzLmpzPzRmY2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5mdHMgKHt0b2tlbnN9KXtcblxuICAgIGNvbnN0IFtkaXNwbGF5LCBzZXREaXNwbGF5XSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBzaG93VG9rZW5zKHRva2Vucy5uZnRzKTtcbiAgICB9LCBbdG9rZW5zXSk7XG5cbiAgICBjb25zdCBzaG93VG9rZW5zID0gKG5mdHMpID0+IHtcbiAgICAgIGlmKG5mdHMgPT0gbnVsbCl7XG4gICAgICAgIC8vYmFzZVxuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgbGV0IF9kaXNwbGF5ID0gW107XG4gICAgICAgIGxldCBwb2xpY2llcyA9IE9iamVjdC5rZXlzKG5mdHMpO1xuICAgICAgICBmb3IoY29uc3QgcG9saWN5IG9mIHBvbGljaWVzKXtcbiAgICAgICAgICBsZXQgdG9rZW4gPSB0b2tlbnNbcG9saWN5XVswXTtcbiAgICAgICAgICBpZih0b2tlbnNbcG9saWN5XS5sZW5ndGggPiAxKXtcbiAgICAgICAgICAgIF9kaXNwbGF5LnB1c2goPGRpdiBrZXkgPSB7dG9rZW4uYXNzZXRfbmFtZSArICduZnQnfSBjbGFzc05hbWUgPSBcImdyaWQtaXRlbS1jb2xsZWN0aW9uXCIgb25DbGljayA9IHsoKSA9PiBzaG93VG9rZW5zRnJvbVBvbGljeSh0b2tlbnNbcG9saWN5XSl9PjxpbWcgc3JjPXt0b2tlbi5pcGZzfSBhbHQgPSAnZmFpbGVkIHRvIGxvYWQgaW1hZ2UnPjwvaW1nPjwvZGl2Pik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICBfZGlzcGxheS5wdXNoKDxkaXYga2V5ID0ge3Rva2VuLmFzc2V0X25hbWUgKyAnbmZ0J30gY2xhc3NOYW1lID0gXCJncmlkLWl0ZW1cIiBvbkNsaWNrID0geygpID0+IHJvdXRlci5wdXNoKCcvdG9rZW4vJyt0b2tlbi5wb2xpY3lfaWQrdG9rZW4uYXNzZXRfbmFtZSl9PjxpbWcgc3JjPXt0b2tlbi5pcGZzfSBhbHQgPSAnZmFpbGVkIHRvIGxvYWQgaW1hZ2UnPjwvaW1nPjwvZGl2Pik7XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHNldERpc3BsYXkoX2Rpc3BsYXkpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd1Rva2Vuc0Zyb21Qb2xpY3kocG9saWN5KXtcbiAgICAgICAgbGV0IF9kaXNwbGF5ID0gW107XG4gICAgICAgIFxuICAgICAgICBmb3IoY29uc3QgdG9rZW4gb2YgcG9saWN5KXtcbiAgICAgICAgICBfZGlzcGxheS5wdXNoKDxkaXYga2V5ID0ge3Rva2VuLmFzc2V0X25hbWUgKyAncG9seSd9IGNsYXNzTmFtZSA9IFwiZ3JpZC1pdGVtXCIgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy90b2tlbi8nK3Rva2VuLnBvbGljeV9pZCt0b2tlbi5hc3NldF9uYW1lKX0+PGltZyBzcmM9IHt0b2tlbi5pcGZzfVxuICAgICAgICAgIGFsdCA9ICdmYWlsZWQgdG8gbG9hZCBpbWFnZScvPjwvZGl2Pik7XG4gICAgICAgIH1cbiAgICAgICAgc2V0RGlzcGxheShfZGlzcGxheSk7XG4gICAgfVxuXG4gICAgLy9yZXR1cm5zIGEgZ3JpZCB2aWV3IG9mIGFsbCBORlRzIGdyb3VwZWQgYnkgcG9saWN5XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxuYXY+PGJ1dHRvbiBjbGFzc05hbWU9XCJzb3J0LWJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNob3dUb2tlbnMoKX0+U2hvdyBBbGw8L2J1dHRvbj48L25hdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLW5mdFwiPntkaXNwbGF5fTwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTmZ0cyIsInRva2VucyIsImRpc3BsYXkiLCJzZXREaXNwbGF5Iiwicm91dGVyIiwic2hvd1Rva2VucyIsIm5mdHMiLCJfZGlzcGxheSIsInBvbGljaWVzIiwiT2JqZWN0Iiwia2V5cyIsInBvbGljeSIsInRva2VuIiwibGVuZ3RoIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJzaG93VG9rZW5zRnJvbVBvbGljeSIsImltZyIsInNyYyIsImlwZnMiLCJhbHQiLCJhc3NldF9uYW1lIiwicG9saWN5X2lkIiwibmF2IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/nfts.js\n"));

/***/ })

});