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

/***/ "./src/pages/header.js":
/*!*****************************!*\
  !*** ./src/pages/header.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _wallet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wallet */ \"./src/pages/wallet.js\");\n/* harmony import */ var lucid_cardano__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucid-cardano */ \"./node_modules/lucid-cardano/esm/mod.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lucid_cardano__WEBPACK_IMPORTED_MODULE_5__]);\nlucid_cardano__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Header(param) {\n    let { updatedAddress  } = param;\n    _s();\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [addressQuery, setAddressQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [walletLogo, setWalletLogo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Connect Wallet\");\n    const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        function checkLocalStorageForStake() {\n            if (sessionStorage.getItem(\"explorer\")) {\n                console.log(\"xeo founf\");\n            }\n        }\n        checkLocalStorageForStake();\n    }, []);\n    async function getStakeAddressFromWallet(wallet) {\n        const lucid = await lucid_cardano__WEBPACK_IMPORTED_MODULE_5__.Lucid[\"new\"]();\n        var api = \"\";\n        if (wallet == \"Typhon Wallet\") {\n            api = await window.cardano.typhoncip30.enable();\n        }\n        if (wallet == \"eternl\") {\n            api = await window.cardano.eternl.enable();\n        }\n        if (wallet == \"Nami\") {\n            api = await window.cardano.nami.enable();\n        }\n        if (wallet == \"Flint Wallet\") {\n            api = await window.cardano.flint.enable();\n        }\n        lucid.selectWallet(api);\n        let stake = await lucid.wallet.rewardAddress();\n        return stake;\n    }\n    const handleCustomAddress = async (event)=>{\n        event.preventDefault();\n        setShowModal(false);\n        if (addressQuery.startsWith(\"add\")) {\n            let stakeAddress = await getStakeFromAddressKoios(addressQuery);\n            router.push(\"/address/\".concat(stakeAddress));\n        } else if (addressQuery.startsWith(\"stake\") || addressQuery.startsWith(\"$\")) {\n            router.push(\"/address/\".concat(addressQuery));\n        } else {\n            router.push(\"/token/\".concat(searchQuery));\n        }\n    };\n    const handleSearch = async (event)=>{\n        event.preventDefault();\n        // Use the `router.push` method to navigate to the dynamic page with the entered number as the URL parameter.\n        if (searchQuery.startsWith(\"add\")) {\n            let stakeAddress = await getStakeFromAddressKoios(searchQuery);\n            router.push(\"/address/\".concat(stakeAddress));\n        } else if (searchQuery.startsWith(\"stake\") || searchQuery.startsWith(\"$\")) {\n            router.push(\"/address/\".concat(searchQuery));\n        } else {\n            router.push(\"/token/\".concat(searchQuery));\n        }\n    };\n    const handleClick = ()=>{\n        setShowModal(true);\n    };\n    const handleClose = ()=>{\n        setShowModal(false);\n    };\n    const handleSelect = async (wallet)=>{\n        setShowModal(false);\n        let stake = await getStakeAddressFromWallet(wallet);\n        router.push(\"/address/\".concat(stake));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                className: \"main-label\",\n                children: \"Explorer\"\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                lineNumber: 103,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"searchForm\",\n                onSubmit: handleSearch,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"search-input\",\n                        placeholder: \"Search for an address or a specific token...\",\n                        value: searchQuery,\n                        onChange: (event)=>setSearchQuery(event.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                        lineNumber: 105,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"search-button\",\n                        children: \"Search\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                        lineNumber: 106,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                lineNumber: 104,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"connect-wallet\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"connect-wallet-button\",\n                        onClick: ()=>router.push(\"/\"),\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"connect-wallet-button\",\n                        onClick: handleClick,\n                        children: walletLogo\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, this),\n                    showModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"modal\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"modal-content\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"Select Wallet\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                                    lineNumber: 114,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"walletButton\",\n                                            onClick: ()=>handleSelect(\"Typhon Wallet\"),\n                                            style: {\n                                                backgroundImage: \"url(/typhon.svg)\"\n                                            },\n                                            children: \"Typhon\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                                            lineNumber: 116,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"walletButton\",\n                                            onClick: ()=>handleSelect(\"eternl\"),\n                                            style: {\n                                                backgroundImage: \"url(/eternl.png)\"\n                                            },\n                                            children: \"Eternl\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                                            lineNumber: 117,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"walletButton\",\n                                            onClick: ()=>handleSelect(\"Nami\"),\n                                            style: {\n                                                backgroundImage: \"url(/nami.svg)\"\n                                            },\n                                            children: \"Nami\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                                            lineNumber: 118,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"walletButton\",\n                                            onClick: ()=>handleSelect(\"Flint Wallet\"),\n                                            style: {\n                                                backgroundImage: \"url(/flint.png)\"\n                                            },\n                                            children: \"Flint\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                                            lineNumber: 119,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                                            lineNumber: 119,\n                                            columnNumber: 158\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                            className: \"searchForm\",\n                                            onSubmit: handleCustomAddress,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    className: \"search-input\",\n                                                    placeholder: \"Enter wallet address\",\n                                                    value: addressQuery,\n                                                    onChange: (event)=>setAddressQuery(event.target.value)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                                                    lineNumber: 122,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    type: \"submit\",\n                                                    className: \"search-button\",\n                                                    children: \"Search\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                                                    lineNumber: 123,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                                            lineNumber: 121,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                                    lineNumber: 115,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"cancel-button\",\n                                    onClick: handleClose,\n                                    children: \"Cancel\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                                    lineNumber: 126,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                            lineNumber: 113,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                        lineNumber: 112,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                lineNumber: 108,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n        lineNumber: 102,\n        columnNumber: 9\n    }, this);\n}\n_s(Header, \"/9m1rUP6XUfXGYvXNEm13WL3HVE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZCxhQUFhOzRDQUFTZ0IsT0FBTztnREFBQ0MsaUJBQWlCOzRDQUFvQjtzREFBRzs7Ozs7O3NEQUN0SCw4REFBQ0w7NENBQU9ULFdBQVU7NENBQWVXLFNBQVMsSUFBTWQsYUFBYTs0Q0FBaUJnQixPQUFPO2dEQUFDQyxpQkFBaUI7NENBQXFCO3NEQUFHOzs7Ozs7c0RBQWMsOERBQUNDOzs7OztzREFFOUksOERBQUNkOzRDQUFLRCxXQUFVOzRDQUFhRSxVQUFVZjs7OERBQ3JDLDhEQUFDZ0I7b0RBQU1ILFdBQVU7b0RBQWVLLGFBQVk7b0RBQXVCQyxPQUFPaEQ7b0RBQWNpRCxVQUFVLENBQUNuQixRQUFVN0IsZ0JBQWdCNkIsTUFBTW9CLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7OzhEQUMvSSw4REFBQ0c7b0RBQU9MLE1BQUs7b0RBQVNKLFdBQVU7OERBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBR3BELDhEQUFDUztvQ0FBT1QsV0FBVTtvQ0FBZ0JXLFNBQVNmOzhDQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU90RSxDQUFDO0dBN0h1QjFDOztRQU9MSixrREFBU0E7OztLQVBKSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaGVhZGVyLmpzP2UwMjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBXYWxsZXQgZnJvbSBcIi4vd2FsbGV0XCI7XG5pbXBvcnQgeyBCbG9ja2Zyb3N0LCBMdWNpZCB9IGZyb20gXCJsdWNpZC1jYXJkYW5vXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcih7dXBkYXRlZEFkZHJlc3N9KXtcblxuICAgIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFthZGRyZXNzUXVlcnksIHNldEFkZHJlc3NRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFt3YWxsZXRMb2dvLCBzZXRXYWxsZXRMb2dvXSA9IHVzZVN0YXRlKCdDb25uZWN0IFdhbGxldCcpO1xuICAgIGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBmdW5jdGlvbiBjaGVja0xvY2FsU3RvcmFnZUZvclN0YWtlKCl7XG4gICAgICAgIGlmKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2V4cGxvcmVyJykpe1xuICAgICAgICAgIGNvbnNvbGUubG9nKCd4ZW8gZm91bmYnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2hlY2tMb2NhbFN0b3JhZ2VGb3JTdGFrZSgpO1xuICAgIH0sIFtdKVxuXG4gIFxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFN0YWtlQWRkcmVzc0Zyb21XYWxsZXQod2FsbGV0KXtcbiAgICAgIGNvbnN0IGx1Y2lkID0gYXdhaXQgTHVjaWQubmV3KCk7XG4gIFxuICAgICAgdmFyIGFwaSA9ICcnO1xuICBcbiAgICAgIGlmKHdhbGxldCA9PSAnVHlwaG9uIFdhbGxldCcpe1xuICAgICAgICBhcGkgPSBhd2FpdCB3aW5kb3cuY2FyZGFuby50eXBob25jaXAzMC5lbmFibGUoKTtcbiAgICAgIH1cbiAgICAgIGlmKHdhbGxldCA9PSAnZXRlcm5sJyl7XG4gICAgICAgIGFwaSA9IGF3YWl0IHdpbmRvdy5jYXJkYW5vLmV0ZXJubC5lbmFibGUoKTtcbiAgICAgIH1cbiAgICAgIGlmKHdhbGxldCA9PSAnTmFtaScpe1xuICAgICAgICBhcGkgPSBhd2FpdCB3aW5kb3cuY2FyZGFuby5uYW1pLmVuYWJsZSgpO1xuICAgICAgfVxuICAgICAgaWYod2FsbGV0ID09ICdGbGludCBXYWxsZXQnKXtcbiAgICAgICAgYXBpID0gYXdhaXQgd2luZG93LmNhcmRhbm8uZmxpbnQuZW5hYmxlKCk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGx1Y2lkLnNlbGVjdFdhbGxldChhcGkpO1xuICAgICAgbGV0IHN0YWtlID0gYXdhaXQgbHVjaWQud2FsbGV0LnJld2FyZEFkZHJlc3MoKTtcbiAgICAgIHJldHVybiBzdGFrZTtcbiAgXG4gICAgfVxuXG5cbiAgICBjb25zdCBoYW5kbGVDdXN0b21BZGRyZXNzID0gYXN5bmMgKGV2ZW50KSA9PntcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBzZXRTaG93TW9kYWwoZmFsc2UpO1xuICAgICAgaWYoYWRkcmVzc1F1ZXJ5LnN0YXJ0c1dpdGgoJ2FkZCcpKXtcbiAgICAgICAgbGV0IHN0YWtlQWRkcmVzcyA9IGF3YWl0IGdldFN0YWtlRnJvbUFkZHJlc3NLb2lvcyhhZGRyZXNzUXVlcnkpO1xuICAgICAgICByb3V0ZXIucHVzaChgL2FkZHJlc3MvJHtzdGFrZUFkZHJlc3N9YCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChhZGRyZXNzUXVlcnkuc3RhcnRzV2l0aCgnc3Rha2UnKSAgfHwgYWRkcmVzc1F1ZXJ5LnN0YXJ0c1dpdGgoJyQnKSl7XG4gICAgICAgIHJvdXRlci5wdXNoKGAvYWRkcmVzcy8ke2FkZHJlc3NRdWVyeX1gKTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIHJvdXRlci5wdXNoKGAvdG9rZW4vJHtzZWFyY2hRdWVyeX1gKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgY29uc3QgaGFuZGxlU2VhcmNoID0gYXN5bmMgIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIC8vIFVzZSB0aGUgYHJvdXRlci5wdXNoYCBtZXRob2QgdG8gbmF2aWdhdGUgdG8gdGhlIGR5bmFtaWMgcGFnZSB3aXRoIHRoZSBlbnRlcmVkIG51bWJlciBhcyB0aGUgVVJMIHBhcmFtZXRlci5cbiAgICAgIGlmKHNlYXJjaFF1ZXJ5LnN0YXJ0c1dpdGgoJ2FkZCcpKXtcbiAgICAgICAgbGV0IHN0YWtlQWRkcmVzcyA9IGF3YWl0IGdldFN0YWtlRnJvbUFkZHJlc3NLb2lvcyhzZWFyY2hRdWVyeSk7XG4gICAgICAgIHJvdXRlci5wdXNoKGAvYWRkcmVzcy8ke3N0YWtlQWRkcmVzc31gKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHNlYXJjaFF1ZXJ5LnN0YXJ0c1dpdGgoJ3N0YWtlJykgfHwgc2VhcmNoUXVlcnkuc3RhcnRzV2l0aCgnJCcpKXtcbiAgICAgICAgcm91dGVyLnB1c2goYC9hZGRyZXNzLyR7c2VhcmNoUXVlcnl9YCk7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICByb3V0ZXIucHVzaChgL3Rva2VuLyR7c2VhcmNoUXVlcnl9YCk7XG4gICAgICB9XG4gICAgfVxuICBcbiAgXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICBzZXRTaG93TW9kYWwodHJ1ZSk7XG4gICAgfVxuICBcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICAgIHNldFNob3dNb2RhbChmYWxzZSk7XG4gICAgfVxuICBcbiAgICBjb25zdCBoYW5kbGVTZWxlY3QgPSBhc3luYyAod2FsbGV0KSA9PiB7XG4gICAgICBzZXRTaG93TW9kYWwoZmFsc2UpO1xuXG4gICAgICBsZXQgc3Rha2UgPSBhd2FpdCBnZXRTdGFrZUFkZHJlc3NGcm9tV2FsbGV0KHdhbGxldCk7XG4gICAgICByb3V0ZXIucHVzaChgL2FkZHJlc3MvJHtzdGFrZX1gKTtcblxuICAgIH1cblxuICAgIFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1haW4tbGFiZWxcIj5FeHBsb3JlcjwvbGFiZWw+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInNlYXJjaEZvcm1cIiBvblN1Ym1pdD17aGFuZGxlU2VhcmNofT5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWUgPSBcInNlYXJjaC1pbnB1dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBhbiBhZGRyZXNzIG9yIGEgc3BlY2lmaWMgdG9rZW4uLi5cIiB2YWx1ZT17c2VhcmNoUXVlcnl9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFNlYXJjaFF1ZXJ5KGV2ZW50LnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJzZWFyY2gtYnV0dG9uXCI+U2VhcmNoPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25uZWN0LXdhbGxldFwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNvbm5lY3Qtd2FsbGV0LWJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvJyl9PkhvbWU8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjb25uZWN0LXdhbGxldC1idXR0b25cIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+e3dhbGxldExvZ299PC9idXR0b24+XG4gICAgICAgIHsgc2hvd01vZGFsICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPGgyPlNlbGVjdCBXYWxsZXQ8L2gyPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwid2FsbGV0QnV0dG9uXCIgb25DbGljaz17KCkgPT4gaGFuZGxlU2VsZWN0KCdUeXBob24gV2FsbGV0Jyl9IHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOmB1cmwoJHsnL3R5cGhvbi5zdmcnfSlgfX0+VHlwaG9uPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3YWxsZXRCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZWxlY3QoJ2V0ZXJubCcpfSBzdHlsZT17e2JhY2tncm91bmRJbWFnZTpgdXJsKCR7Jy9ldGVybmwucG5nJ30pYH19PkV0ZXJubDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwid2FsbGV0QnV0dG9uXCIgb25DbGljaz17KCkgPT4gaGFuZGxlU2VsZWN0KCdOYW1pJyl9IHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOmB1cmwoJHsnL25hbWkuc3ZnJ30pYH19Pk5hbWk8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIndhbGxldEJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNlbGVjdCgnRmxpbnQgV2FsbGV0Jyl9IHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOmB1cmwoJHsnL2ZsaW50LnBuZyd9KWB9fT5GbGludDwvYnV0dG9uPjxici8+XG5cbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJzZWFyY2hGb3JtXCIgb25TdWJtaXQ9e2hhbmRsZUN1c3RvbUFkZHJlc3N9PlxuICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInNlYXJjaC1pbnB1dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgd2FsbGV0IGFkZHJlc3NcIiB2YWx1ZT17YWRkcmVzc1F1ZXJ5fSBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRBZGRyZXNzUXVlcnkoZXZlbnQudGFyZ2V0LnZhbHVlKX0+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInNlYXJjaC1idXR0b25cIj5TZWFyY2g8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNhbmNlbC1idXR0b25cIiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgKTtcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJSZWFjdCIsIkhlYWQiLCJ1c2VSb3V0ZXIiLCJXYWxsZXQiLCJCbG9ja2Zyb3N0IiwiTHVjaWQiLCJIZWFkZXIiLCJ1cGRhdGVkQWRkcmVzcyIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJhZGRyZXNzUXVlcnkiLCJzZXRBZGRyZXNzUXVlcnkiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJ3YWxsZXRMb2dvIiwic2V0V2FsbGV0TG9nbyIsImFkZHJlc3MiLCJzZXRBZGRyZXNzIiwicm91dGVyIiwiY2hlY2tMb2NhbFN0b3JhZ2VGb3JTdGFrZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJnZXRTdGFrZUFkZHJlc3NGcm9tV2FsbGV0Iiwid2FsbGV0IiwibHVjaWQiLCJuZXciLCJhcGkiLCJ3aW5kb3ciLCJjYXJkYW5vIiwidHlwaG9uY2lwMzAiLCJlbmFibGUiLCJldGVybmwiLCJuYW1pIiwiZmxpbnQiLCJzZWxlY3RXYWxsZXQiLCJzdGFrZSIsInJld2FyZEFkZHJlc3MiLCJoYW5kbGVDdXN0b21BZGRyZXNzIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0YXJ0c1dpdGgiLCJzdGFrZUFkZHJlc3MiLCJnZXRTdGFrZUZyb21BZGRyZXNzS29pb3MiLCJwdXNoIiwiaGFuZGxlU2VhcmNoIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVDbG9zZSIsImhhbmRsZVNlbGVjdCIsImhlYWRlciIsImxhYmVsIiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYnV0dG9uIiwiZGl2Iiwib25DbGljayIsImgyIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/header.js\n"));

/***/ })

});