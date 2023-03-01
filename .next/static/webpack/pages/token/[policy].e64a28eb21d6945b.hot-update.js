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

/***/ "./src/pages/nftGrid.js":
/*!******************************!*\
  !*** ./src/pages/nftGrid.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NftGrid; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_shared_lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/shared/lib/utils */ \"./node_modules/next/dist/shared/lib/utils.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/next/dist/compiled/buffer/index.js\")[\"Buffer\"];\n\nvar _s = $RefreshSig$();\n\n\n\n\n// takes list of tokens with ipfs and metadata and oupts a grid diplsaying said nfts\nfunction NftGrid(props) {\n    _s();\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        function func() {\n            if (props.nfts != null) {\n                let nftGrid = addNftsToGrid(props.nfts);\n                setDisplay(nftGrid);\n            }\n        }\n        func();\n    }, [\n        props\n    ]);\n    function addNftsToGrid(nfts) {\n        let grid = [];\n        for (const element of nfts){\n            let token = element;\n            let assetName = token.asset_name;\n            let ipfs = \"/black.jpeg\";\n            let decryptName = Buffer.from(name, \"hex\").toString();\n            console.log(originalString);\n            ipfs = token.ipfs;\n            grid.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid-item\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        className: \"grid-img\",\n                        src: ipfs,\n                        alt: \"failed to load image\",\n                        width: 270,\n                        height: 270,\n                        onClick: ()=>router.push(\"/token/\" + token.policy_id + token.asset_name + \"?stake=\" + props.stake)\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/nftGrid.js\",\n                        lineNumber: 42,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid-item-text\",\n                        children: decryptName\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/nftGrid.js\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, token.asset_name + \"nft\", true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/nftGrid.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this));\n        }\n        return grid;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid-nft\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Your NFTs\"\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/nftGrid.js\",\n                lineNumber: 60,\n                columnNumber: 38\n            }, this),\n            display\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/nftGrid.js\",\n        lineNumber: 60,\n        columnNumber: 12\n    }, this);\n}\n_s(NftGrid, \"O6pXH/dFd/GL64WZIBwAW52JcdY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = NftGrid;\nvar _c;\n$RefreshReg$(_c, \"NftGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbmZ0R3JpZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTREO0FBQzdCO0FBQ1M7QUFDZTtBQUd2RCxvRkFBb0Y7QUFDckUsU0FBU00sUUFBUUMsS0FBSyxFQUFDOztJQUVsQyxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0osK0NBQVFBO0lBQ3RDLE1BQU1LLFNBQVNSLHNEQUFTQTtJQUd4QkMsZ0RBQVNBLENBQUMsSUFBTTtRQUNaLFNBQVNRLE9BQU87WUFDWixJQUFHSixNQUFNSyxJQUFJLElBQUksSUFBSSxFQUFDO2dCQUNsQixJQUFJQyxVQUFVQyxjQUFjUCxNQUFNSyxJQUFJO2dCQUN0Q0gsV0FBV0k7WUFDZixDQUFDO1FBRUw7UUFDQUY7SUFDSixHQUFHO1FBQUNKO0tBQU07SUFFVixTQUFTTyxjQUFjRixJQUFJLEVBQUU7UUFDekIsSUFBSUcsT0FBTyxFQUFFO1FBR2IsS0FBSyxNQUFNQyxXQUFXSixLQUFNO1lBQzNCLElBQUlLLFFBQVFEO1lBQ1osSUFBSUUsWUFBWUQsTUFBTUUsVUFBVTtZQUNoQyxJQUFJQyxPQUFPO1lBRVgsSUFBSUMsY0FBY0MsTUFBTUEsQ0FBQ0MsSUFBSSxDQUFDQyxNQUFNLE9BQU9DLFFBQVE7WUFDbkRDLFFBQVFDLEdBQUcsQ0FBQ0M7WUFHWlIsT0FBT0gsTUFBTUcsSUFBSTtZQUVoQkwsS0FBS2MsSUFBSSxlQUNQLDhEQUFDQztnQkFBbUNDLFdBQVU7O2tDQUM1Qyw4REFBQzlCLG1EQUFLQTt3QkFDSjhCLFdBQVU7d0JBQ1ZDLEtBQUtaO3dCQUNMYSxLQUFJO3dCQUNKQyxPQUFPO3dCQUNQQyxRQUFRO3dCQUNSQyxTQUFTLElBQU0xQixPQUFPbUIsSUFBSSxDQUFDLFlBQVlaLE1BQU1vQixTQUFTLEdBQUdwQixNQUFNRSxVQUFVLEdBQUMsWUFBVVosTUFBTStCLEtBQUs7Ozs7OztrQ0FFL0YsOERBQUNSO3dCQUFJQyxXQUFVO2tDQUNkVjs7Ozs7OztlQVZLSixNQUFNRSxVQUFVLEdBQUc7Ozs7O1FBY2pDO1FBRUEsT0FBT0o7SUFDVDtJQUVGLHFCQUFPLDhEQUFDZTtRQUFJQyxXQUFVOzswQkFBVyw4REFBQ1E7MEJBQU07Ozs7OztZQUFrQi9COzs7Ozs7O0FBQzlELENBQUM7R0FyRHVCRjs7UUFHTEosa0RBQVNBOzs7S0FISkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL25mdEdyaWQuanM/OGE1NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXREaXNwbGF5TmFtZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlsc1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVkdWNlciwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG5cbi8vIHRha2VzIGxpc3Qgb2YgdG9rZW5zIHdpdGggaXBmcyBhbmQgbWV0YWRhdGEgYW5kIG91cHRzIGEgZ3JpZCBkaXBsc2F5aW5nIHNhaWQgbmZ0c1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmZ0R3JpZChwcm9wcyl7XG5cbiAgICBjb25zdCBbZGlzcGxheSwgc2V0RGlzcGxheV0gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmdW5jdGlvbiBmdW5jICgpe1xuICAgICAgICAgICAgaWYocHJvcHMubmZ0cyAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICBsZXQgbmZ0R3JpZCA9IGFkZE5mdHNUb0dyaWQocHJvcHMubmZ0cyk7XG4gICAgICAgICAgICAgICAgc2V0RGlzcGxheShuZnRHcmlkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIGZ1bmMoKTtcbiAgICB9LCBbcHJvcHNdKVxuXG4gICAgZnVuY3Rpb24gYWRkTmZ0c1RvR3JpZChuZnRzKSB7XG4gICAgICAgIGxldCBncmlkID0gW107XG5cbiAgICAgIFxuICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgbmZ0cykge1xuICAgICAgICAgbGV0IHRva2VuID0gZWxlbWVudDtcbiAgICAgICAgIGxldCBhc3NldE5hbWUgPSB0b2tlbi5hc3NldF9uYW1lO1xuICAgICAgICAgbGV0IGlwZnMgPSAnL2JsYWNrLmpwZWcnXG5cbiAgICAgICAgIGxldCBkZWNyeXB0TmFtZSA9IEJ1ZmZlci5mcm9tKG5hbWUsICdoZXgnKS50b1N0cmluZygpO1xuICAgICAgICAgY29uc29sZS5sb2cob3JpZ2luYWxTdHJpbmcpO1xuXG5cbiAgICAgICAgIGlwZnMgPSB0b2tlbi5pcGZzO1xuXG4gICAgICAgICAgZ3JpZC5wdXNoKFxuICAgICAgICAgICAgPGRpdiBrZXk9e3Rva2VuLmFzc2V0X25hbWUgKyAnbmZ0J30gY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+XG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtaW1nXCJcbiAgICAgICAgICAgICAgICBzcmM9e2lwZnN9XG4gICAgICAgICAgICAgICAgYWx0PVwiZmFpbGVkIHRvIGxvYWQgaW1hZ2VcIlxuICAgICAgICAgICAgICAgIHdpZHRoPXsyNzB9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsyNzB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy90b2tlbi8nICsgdG9rZW4ucG9saWN5X2lkICsgdG9rZW4uYXNzZXRfbmFtZSsnP3N0YWtlPScrcHJvcHMuc3Rha2UpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtLXRleHRcIj5cbiAgICAgICAgICAgICAgICB7ZGVjcnlwdE5hbWV9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIHJldHVybiBncmlkO1xuICAgICAgfVxuXG4gICAgcmV0dXJuKDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1uZnRcIj48bGFiZWw+WW91ciBORlRzPC9sYWJlbD57ZGlzcGxheX08L2Rpdj4pXG59Il0sIm5hbWVzIjpbImdldERpc3BsYXlOYW1lIiwiSW1hZ2UiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VSZWR1Y2VyIiwidXNlU3RhdGUiLCJOZnRHcmlkIiwicHJvcHMiLCJkaXNwbGF5Iiwic2V0RGlzcGxheSIsInJvdXRlciIsImZ1bmMiLCJuZnRzIiwibmZ0R3JpZCIsImFkZE5mdHNUb0dyaWQiLCJncmlkIiwiZWxlbWVudCIsInRva2VuIiwiYXNzZXROYW1lIiwiYXNzZXRfbmFtZSIsImlwZnMiLCJkZWNyeXB0TmFtZSIsIkJ1ZmZlciIsImZyb20iLCJuYW1lIiwidG9TdHJpbmciLCJjb25zb2xlIiwibG9nIiwib3JpZ2luYWxTdHJpbmciLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJvbkNsaWNrIiwicG9saWN5X2lkIiwic3Rha2UiLCJsYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/nftGrid.js\n"));

/***/ })

});