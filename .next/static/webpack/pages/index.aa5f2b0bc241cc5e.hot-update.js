"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/header.js":
/*!*****************************!*\
  !*** ./src/pages/header.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _wallet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wallet */ \"./src/pages/wallet.js\");\n/* harmony import */ var lucid_cardano__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucid-cardano */ \"./node_modules/lucid-cardano/esm/mod.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_wallet__WEBPACK_IMPORTED_MODULE_4__, lucid_cardano__WEBPACK_IMPORTED_MODULE_5__]);\n([_wallet__WEBPACK_IMPORTED_MODULE_4__, lucid_cardano__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Header(param) {\n    let { onAddressUpdate  } = param;\n    _s();\n    const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [addressQuery, setAddressQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [walletLogo, setWalletLogo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Connect Wallet\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleCustomAddress = async (event)=>{\n        event.preventDefault();\n        setShowModal(false);\n        setWalletLogo(addressQuery.substring(0, 10) + \"...\");\n        setAddress(addressQuery);\n        onAddressUpdate(addressQuery);\n    };\n    const handleSearch = (event)=>{\n        event.preventDefault();\n        // Use the `router.push` method to navigate to the dynamic page with the entered number as the URL parameter.\n        if (searchQuery.startsWith(\"add\")) {\n            router.push(\"/address/\".concat(searchQuery));\n        } else {\n            router.push(\"/token/\".concat(searchQuery));\n        }\n    };\n    const handleClick = ()=>{\n        setShowModal(true);\n    };\n    const handleClose = ()=>{\n        setShowModal(false);\n    };\n    const handleSelect = async (wallet)=>{\n        setShowModal(false);\n        let logo = \"\";\n        if (wallet == \"Typhon Wallet\") {\n            logo = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"logo-img\",\n                src: \"/typhon.svg\"\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                lineNumber: 51,\n                columnNumber: 16\n            }, this);\n        }\n        if (wallet == \"eternl\") {\n            logo = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"logo-img\",\n                src: \"/eternl.png\"\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                lineNumber: 54,\n                columnNumber: 16\n            }, this);\n        }\n        if (wallet == \"Nami\") {\n            logo = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"logo-img\",\n                src: \"/nami.svg\"\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                lineNumber: 57,\n                columnNumber: 16\n            }, this);\n        }\n        if (wallet == \"Flint Wallet\") {\n            logo = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"logo-img\",\n                src: \"/flint.png\"\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                lineNumber: 60,\n                columnNumber: 16\n            }, this);\n        }\n        setWalletLogo(logo);\n        onAddressUpdate(wallet);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                className: \"main-label\",\n                children: \"tokenExplr.io\"\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                lineNumber: 72,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"searchForm\",\n                onSubmit: handleSearch,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"search-input\",\n                        placeholder: \"Search for an address or a specific token...\",\n                        value: searchQuery,\n                        onChange: (event)=>setSearchQuery(event.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"search-button\",\n                        children: \"Search\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                lineNumber: 73,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"connect-wallet\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"connect-wallet-button\",\n                        onClick: handleClick,\n                        children: walletLogo\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    showModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"modal\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"modal-content\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"Select Wallet\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"walletButton\",\n                                            onClick: ()=>handleSelect(\"Typhon Wallet\"),\n                                            style: {\n                                                backgroundImage: \"url(/typhon.svg)\"\n                                            },\n                                            children: \"Typhon\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                                            lineNumber: 84,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"walletButton\",\n                                            onClick: ()=>handleSelect(\"eternl\"),\n                                            style: {\n                                                backgroundImage: \"url(/eternl.png)\"\n                                            },\n                                            children: \"Eternl\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                                            lineNumber: 85,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"walletButton\",\n                                            onClick: ()=>handleSelect(\"Nami\"),\n                                            style: {\n                                                backgroundImage: \"url(/nami.svg)\"\n                                            },\n                                            children: \"Nami\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                                            lineNumber: 86,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"walletButton\",\n                                            onClick: ()=>handleSelect(\"Flint Wallet\"),\n                                            style: {\n                                                backgroundImage: \"url(/flint.png)\"\n                                            },\n                                            children: \"Flint\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                                            lineNumber: 87,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                                            lineNumber: 87,\n                                            columnNumber: 158\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                            className: \"searchForm\",\n                                            onSubmit: handleCustomAddress,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    className: \"search-input\",\n                                                    placeholder: \"Enter wallet address\",\n                                                    value: addressQuery,\n                                                    onChange: (event)=>setAddressQuery(event.target.value)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                                                    lineNumber: 89,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    type: \"submit\",\n                                                    className: \"search-button\",\n                                                    children: \"Search\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                                                    lineNumber: 90,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                                            lineNumber: 88,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"cancel-button\",\n                                    onClick: handleClose,\n                                    children: \"Cancel\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                lineNumber: 77,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n        lineNumber: 71,\n        columnNumber: 9\n    }, this);\n}\n_s(Header, \"zVA3AxDXoc7fSz1aNL8plmuE7ME=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUJBQWlCOzRDQUFzQjtzREFBRzs7Ozs7O3NEQUNqSSw4REFBQ0w7NENBQU9aLFdBQVU7NENBQWVjLFNBQVMsSUFBTWxCLGFBQWE7NENBQVdvQixPQUFPO2dEQUFDQyxpQkFBaUI7NENBQXNCO3NEQUFHOzs7Ozs7c0RBQzFILDhEQUFDTDs0Q0FBT1osV0FBVTs0Q0FBZWMsU0FBUyxJQUFNbEIsYUFBYTs0Q0FBU29CLE9BQU87Z0RBQUNDLGlCQUFpQjs0Q0FBb0I7c0RBQUc7Ozs7OztzREFDdEgsOERBQUNMOzRDQUFPWixXQUFVOzRDQUFlYyxTQUFTLElBQU1sQixhQUFhOzRDQUFpQm9CLE9BQU87Z0RBQUNDLGlCQUFpQjs0Q0FBcUI7c0RBQUc7Ozs7OztzREFBYyw4REFBQ0M7Ozs7O3NEQUM5SSw4REFBQ2Q7NENBQUtKLFdBQVU7NENBQWFLLFVBQVVsQjs7OERBQ3JDLDhEQUFDbUI7b0RBQU1OLFdBQVU7b0RBQWVRLGFBQVk7b0RBQXVCQyxPQUFPN0I7b0RBQWM4QixVQUFVLENBQUN0QixRQUFVUCxnQkFBZ0JPLE1BQU11QixNQUFNLENBQUNGLEtBQUs7Ozs7Ozs4REFDL0ksOERBQUNHO29EQUFPTCxNQUFLO29EQUFTUCxXQUFVOzhEQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQUdwRCw4REFBQ1k7b0NBQU9aLFdBQVU7b0NBQWdCYyxTQUFTbkI7OENBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3RFLENBQUM7R0E1RnVCckI7O1FBT0xKLGtEQUFTQTs7O0tBUEpJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9oZWFkZXIuanM/ZTAyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBXYWxsZXQgZnJvbSBcIi4vd2FsbGV0XCI7XG5pbXBvcnQgeyBCbG9ja2Zyb3N0LCBMdWNpZCB9IGZyb20gXCJsdWNpZC1jYXJkYW5vXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcih7b25BZGRyZXNzVXBkYXRlfSl7XG5cbiAgICBjb25zdCBbYWRkcmVzcywgc2V0QWRkcmVzc10gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbYWRkcmVzc1F1ZXJ5LCBzZXRBZGRyZXNzUXVlcnldID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbd2FsbGV0TG9nbywgc2V0V2FsbGV0TG9nb10gPSB1c2VTdGF0ZSgnQ29ubmVjdCBXYWxsZXQnKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgXG4gIFxuICAgIGNvbnN0IGhhbmRsZUN1c3RvbUFkZHJlc3MgPSBhc3luYyAoZXZlbnQpID0+e1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHNldFNob3dNb2RhbChmYWxzZSk7XG4gICAgICBzZXRXYWxsZXRMb2dvKGFkZHJlc3NRdWVyeS5zdWJzdHJpbmcoMCwxMCkrJy4uLicpO1xuICAgICAgc2V0QWRkcmVzcyhhZGRyZXNzUXVlcnkpO1xuICAgICAgb25BZGRyZXNzVXBkYXRlKGFkZHJlc3NRdWVyeSk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGhhbmRsZVNlYXJjaCA9IChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIC8vIFVzZSB0aGUgYHJvdXRlci5wdXNoYCBtZXRob2QgdG8gbmF2aWdhdGUgdG8gdGhlIGR5bmFtaWMgcGFnZSB3aXRoIHRoZSBlbnRlcmVkIG51bWJlciBhcyB0aGUgVVJMIHBhcmFtZXRlci5cbiAgICAgIGlmKHNlYXJjaFF1ZXJ5LnN0YXJ0c1dpdGgoJ2FkZCcpKXtcbiAgICAgICAgcm91dGVyLnB1c2goYC9hZGRyZXNzLyR7c2VhcmNoUXVlcnl9YCk7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICByb3V0ZXIucHVzaChgL3Rva2VuLyR7c2VhcmNoUXVlcnl9YCk7XG4gICAgICB9XG4gICAgfVxuICBcbiAgXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICBzZXRTaG93TW9kYWwodHJ1ZSk7XG4gICAgfVxuICBcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICAgIHNldFNob3dNb2RhbChmYWxzZSk7XG4gICAgfVxuICBcbiAgICBjb25zdCBoYW5kbGVTZWxlY3QgPSBhc3luYyAod2FsbGV0KSA9PiB7XG4gICAgICBzZXRTaG93TW9kYWwoZmFsc2UpO1xuICBcbiAgICAgIGxldCBsb2dvID0gJyc7XG4gICAgICBpZih3YWxsZXQgPT0gJ1R5cGhvbiBXYWxsZXQnKXtcbiAgICAgICAgbG9nbyA9IDxpbWcgY2xhc3NOYW1lPVwibG9nby1pbWdcIiBzcmM9XCIvdHlwaG9uLnN2Z1wiPjwvaW1nPlxuICAgICAgfVxuICAgICAgaWYod2FsbGV0ID09ICdldGVybmwnKXtcbiAgICAgICAgbG9nbyA9IDxpbWcgY2xhc3NOYW1lPVwibG9nby1pbWdcIiBzcmM9XCIvZXRlcm5sLnBuZ1wiPjwvaW1nPlxuICAgICAgfVxuICAgICAgaWYod2FsbGV0ID09ICdOYW1pJyl7XG4gICAgICAgIGxvZ28gPSA8aW1nIGNsYXNzTmFtZT1cImxvZ28taW1nXCIgc3JjPVwiL25hbWkuc3ZnXCI+PC9pbWc+XG4gICAgICB9XG4gICAgICBpZih3YWxsZXQgPT0gJ0ZsaW50IFdhbGxldCcpe1xuICAgICAgICBsb2dvID0gPGltZyBjbGFzc05hbWU9XCJsb2dvLWltZ1wiIHNyYz1cIi9mbGludC5wbmdcIj48L2ltZz5cbiAgICAgIH1cbiAgXG4gICAgICBzZXRXYWxsZXRMb2dvKGxvZ28pO1xuXG4gICAgICBvbkFkZHJlc3NVcGRhdGUod2FsbGV0KTtcbiAgICB9XG5cbiAgICBcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtYWluLWxhYmVsXCI+dG9rZW5FeHBsci5pbzwvbGFiZWw+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInNlYXJjaEZvcm1cIiBvblN1Ym1pdD17aGFuZGxlU2VhcmNofT5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWUgPSBcInNlYXJjaC1pbnB1dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBhbiBhZGRyZXNzIG9yIGEgc3BlY2lmaWMgdG9rZW4uLi5cIiB2YWx1ZT17c2VhcmNoUXVlcnl9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFNlYXJjaFF1ZXJ5KGV2ZW50LnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJzZWFyY2gtYnV0dG9uXCI+U2VhcmNoPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25uZWN0LXdhbGxldFwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNvbm5lY3Qtd2FsbGV0LWJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT57d2FsbGV0TG9nb308L2J1dHRvbj5cbiAgICAgICAgeyBzaG93TW9kYWwgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICA8aDI+U2VsZWN0IFdhbGxldDwvaDI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3YWxsZXRCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZWxlY3QoJ1R5cGhvbiBXYWxsZXQnKX0gc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6YHVybCgkeycvdHlwaG9uLnN2Zyd9KWB9fT5UeXBob248L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIndhbGxldEJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNlbGVjdCgnZXRlcm5sJyl9IHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOmB1cmwoJHsnL2V0ZXJubC5wbmcnfSlgfX0+RXRlcm5sPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3YWxsZXRCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZWxlY3QoJ05hbWknKX0gc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6YHVybCgkeycvbmFtaS5zdmcnfSlgfX0+TmFtaTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwid2FsbGV0QnV0dG9uXCIgb25DbGljaz17KCkgPT4gaGFuZGxlU2VsZWN0KCdGbGludCBXYWxsZXQnKX0gc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6YHVybCgkeycvZmxpbnQucG5nJ30pYH19PkZsaW50PC9idXR0b24+PGJyLz5cbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJzZWFyY2hGb3JtXCIgb25TdWJtaXQ9e2hhbmRsZUN1c3RvbUFkZHJlc3N9PlxuICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInNlYXJjaC1pbnB1dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgd2FsbGV0IGFkZHJlc3NcIiB2YWx1ZT17YWRkcmVzc1F1ZXJ5fSBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRBZGRyZXNzUXVlcnkoZXZlbnQudGFyZ2V0LnZhbHVlKX0+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInNlYXJjaC1idXR0b25cIj5TZWFyY2g8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNhbmNlbC1idXR0b25cIiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgKTtcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJSZWFjdCIsIkhlYWQiLCJ1c2VSb3V0ZXIiLCJXYWxsZXQiLCJCbG9ja2Zyb3N0IiwiTHVjaWQiLCJIZWFkZXIiLCJvbkFkZHJlc3NVcGRhdGUiLCJhZGRyZXNzIiwic2V0QWRkcmVzcyIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJhZGRyZXNzUXVlcnkiLCJzZXRBZGRyZXNzUXVlcnkiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJ3YWxsZXRMb2dvIiwic2V0V2FsbGV0TG9nbyIsInJvdXRlciIsImhhbmRsZUN1c3RvbUFkZHJlc3MiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3Vic3RyaW5nIiwiaGFuZGxlU2VhcmNoIiwic3RhcnRzV2l0aCIsInB1c2giLCJoYW5kbGVDbGljayIsImhhbmRsZUNsb3NlIiwiaGFuZGxlU2VsZWN0Iiwid2FsbGV0IiwibG9nbyIsImltZyIsImNsYXNzTmFtZSIsInNyYyIsImhlYWRlciIsImxhYmVsIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYnV0dG9uIiwiZGl2Iiwib25DbGljayIsImgyIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/header.js\n"));

/***/ })

});