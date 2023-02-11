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

eval(__webpack_require__.ts("__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _wallet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wallet */ \"./src/pages/wallet.js\");\n/* harmony import */ var lucid_cardano__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucid-cardano */ \"./node_modules/lucid-cardano/esm/mod.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lucid_cardano__WEBPACK_IMPORTED_MODULE_5__]);\nlucid_cardano__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Header(param) {\n    let { updatedAddress  } = param;\n    _s();\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [addressQuery, setAddressQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [walletLogo, setWalletLogo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Connect Wallet\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        function checkLocalStorageForStake() {\n            if (sessionStorage.getItem(updatedAddress)) {\n                setWalletLogo(\"Connected\");\n            }\n        }\n        checkLocalStorageForStake();\n    }, [\n        updatedAddress\n    ]);\n    async function getStakeAddressFromWallet(wallet) {\n        const lucid = await lucid_cardano__WEBPACK_IMPORTED_MODULE_5__.Lucid[\"new\"]();\n        var api = \"\";\n        if (wallet == \"Typhon Wallet\") {\n            api = await window.cardano.typhoncip30.enable();\n        }\n        if (wallet == \"eternl\") {\n            api = await window.cardano.eternl.enable();\n        }\n        if (wallet == \"Nami\") {\n            api = await window.cardano.nami.enable();\n        }\n        if (wallet == \"Flint Wallet\") {\n            api = await window.cardano.flint.enable();\n        }\n        lucid.selectWallet(api);\n        let stake = await lucid.wallet.rewardAddress();\n        return stake;\n    }\n    const handleSearch = async (event)=>{\n        event.preventDefault();\n        sessionStorage.removeItem(\"explorer\");\n        // Use the `router.push` method to navigate to the dynamic page with the entered number as the URL parameter.\n        if (searchQuery.startsWith(\"add\")) {\n            let stakeAddress = await getStakeFromAddressKoios(searchQuery);\n            router.push(\"/address/\".concat(stakeAddress));\n        } else if (searchQuery.startsWith(\"stake\") || searchQuery.startsWith(\"$\")) {\n            router.push(\"/address/\".concat(searchQuery));\n        } else {\n            router.push(\"/token/\".concat(searchQuery));\n        }\n    };\n    const handleClick = ()=>{\n        setShowModal(true);\n    };\n    const handleClose = ()=>{\n        setShowModal(false);\n    };\n    const handleSelect = async (wallet)=>{\n        setShowModal(false);\n        sessionStorage.removeItem(\"explorer\");\n        let stake = await getStakeAddressFromWallet(wallet);\n        router.push(\"/address/\".concat(stake));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                className: \"main-label\",\n                children: \"Explorer\"\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                lineNumber: 87,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"searchForm\",\n                onSubmit: handleSearch,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"search-input\",\n                        placeholder: \"Search for an address or a specific token...\",\n                        value: searchQuery,\n                        onChange: (event)=>setSearchQuery(event.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                        lineNumber: 89,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"search-button\",\n                        children: \"Search\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                        lineNumber: 90,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                lineNumber: 88,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"connect-wallet\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"connect-wallet-button\",\n                        onClick: ()=>router.push(\"/\"),\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"connect-wallet-button\",\n                        onClick: handleClick,\n                        children: walletLogo\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, this),\n                    showModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"modal\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"modal-content\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"Select Wallet\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                                    lineNumber: 98,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"walletButton\",\n                                            onClick: ()=>handleSelect(\"Typhon Wallet\"),\n                                            style: {\n                                                backgroundImage: \"url(/typhon.svg)\"\n                                            },\n                                            children: \"Typhon\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                                            lineNumber: 100,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"walletButton\",\n                                            onClick: ()=>handleSelect(\"eternl\"),\n                                            style: {\n                                                backgroundImage: \"url(/eternl.png)\"\n                                            },\n                                            children: \"Eternl\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                                            lineNumber: 101,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"walletButton\",\n                                            onClick: ()=>handleSelect(\"Nami\"),\n                                            style: {\n                                                backgroundImage: \"url(/nami.svg)\"\n                                            },\n                                            children: \"Nami\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                                            lineNumber: 102,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"walletButton\",\n                                            onClick: ()=>handleSelect(\"Flint Wallet\"),\n                                            style: {\n                                                backgroundImage: \"url(/flint.png)\"\n                                            },\n                                            children: \"Flint\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                                            lineNumber: 103,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                                            lineNumber: 103,\n                                            columnNumber: 158\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                            className: \"searchForm\",\n                                            onSubmit: handleSearch,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    className: \"search-input\",\n                                                    placeholder: \"Enter wallet address\",\n                                                    value: searchQuery,\n                                                    onChange: (event)=>setSearchQuery(event.target.value)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                                                    lineNumber: 105,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    type: \"submit\",\n                                                    className: \"search-button\",\n                                                    children: \"Search\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                                                    lineNumber: 106,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                                            lineNumber: 104,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                                    lineNumber: 99,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"cancel-button\",\n                                    onClick: handleClose,\n                                    children: \"Cancel\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                                    lineNumber: 109,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                            lineNumber: 97,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                        lineNumber: 96,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                lineNumber: 92,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n        lineNumber: 86,\n        columnNumber: 9\n    }, this);\n}\n_s(Header, \"bumg/iLkYpVto8zYlPEXttoa0ZA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0RBQU9MLE1BQUs7b0RBQVNKLFdBQVU7OERBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBR3BELDhEQUFDUztvQ0FBT1QsV0FBVTtvQ0FBZ0JXLFNBQVNmOzhDQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU90RSxDQUFDO0dBNUd1QnRDOztRQU1MSixrREFBU0E7OztLQU5KSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaGVhZGVyLmpzP2UwMjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBXYWxsZXQgZnJvbSBcIi4vd2FsbGV0XCI7XG5pbXBvcnQgeyBCbG9ja2Zyb3N0LCBMdWNpZCB9IGZyb20gXCJsdWNpZC1jYXJkYW5vXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcih7dXBkYXRlZEFkZHJlc3N9KXtcblxuICAgIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFthZGRyZXNzUXVlcnksIHNldEFkZHJlc3NRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFt3YWxsZXRMb2dvLCBzZXRXYWxsZXRMb2dvXSA9IHVzZVN0YXRlKCdDb25uZWN0IFdhbGxldCcpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGZ1bmN0aW9uIGNoZWNrTG9jYWxTdG9yYWdlRm9yU3Rha2UoKXtcbiAgICAgICAgaWYoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSh1cGRhdGVkQWRkcmVzcykpe1xuICAgICAgICAgIHNldFdhbGxldExvZ28oJ0Nvbm5lY3RlZCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjaGVja0xvY2FsU3RvcmFnZUZvclN0YWtlKCk7XG4gICAgfSwgW3VwZGF0ZWRBZGRyZXNzXSlcblxuICBcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRTdGFrZUFkZHJlc3NGcm9tV2FsbGV0KHdhbGxldCl7XG4gICAgICBjb25zdCBsdWNpZCA9IGF3YWl0IEx1Y2lkLm5ldygpO1xuICAgICAgdmFyIGFwaSA9ICcnO1xuICBcbiAgICAgIGlmKHdhbGxldCA9PSAnVHlwaG9uIFdhbGxldCcpe1xuICAgICAgICBhcGkgPSBhd2FpdCB3aW5kb3cuY2FyZGFuby50eXBob25jaXAzMC5lbmFibGUoKTtcbiAgICAgIH1cbiAgICAgIGlmKHdhbGxldCA9PSAnZXRlcm5sJyl7XG4gICAgICAgIGFwaSA9IGF3YWl0IHdpbmRvdy5jYXJkYW5vLmV0ZXJubC5lbmFibGUoKTtcbiAgICAgIH1cbiAgICAgIGlmKHdhbGxldCA9PSAnTmFtaScpe1xuICAgICAgICBhcGkgPSBhd2FpdCB3aW5kb3cuY2FyZGFuby5uYW1pLmVuYWJsZSgpO1xuICAgICAgfVxuICAgICAgaWYod2FsbGV0ID09ICdGbGludCBXYWxsZXQnKXtcbiAgICAgICAgYXBpID0gYXdhaXQgd2luZG93LmNhcmRhbm8uZmxpbnQuZW5hYmxlKCk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGx1Y2lkLnNlbGVjdFdhbGxldChhcGkpO1xuICAgICAgbGV0IHN0YWtlID0gYXdhaXQgbHVjaWQud2FsbGV0LnJld2FyZEFkZHJlc3MoKTtcbiAgICAgIHJldHVybiBzdGFrZTtcbiAgXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGhhbmRsZVNlYXJjaCA9IGFzeW5jICAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdleHBsb3JlcicpO1xuICAgICAgLy8gVXNlIHRoZSBgcm91dGVyLnB1c2hgIG1ldGhvZCB0byBuYXZpZ2F0ZSB0byB0aGUgZHluYW1pYyBwYWdlIHdpdGggdGhlIGVudGVyZWQgbnVtYmVyIGFzIHRoZSBVUkwgcGFyYW1ldGVyLlxuICAgICAgaWYoc2VhcmNoUXVlcnkuc3RhcnRzV2l0aCgnYWRkJykpe1xuICAgICAgICBsZXQgc3Rha2VBZGRyZXNzID0gYXdhaXQgZ2V0U3Rha2VGcm9tQWRkcmVzc0tvaW9zKHNlYXJjaFF1ZXJ5KTtcbiAgICAgICAgcm91dGVyLnB1c2goYC9hZGRyZXNzLyR7c3Rha2VBZGRyZXNzfWApO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoc2VhcmNoUXVlcnkuc3RhcnRzV2l0aCgnc3Rha2UnKSB8fCBzZWFyY2hRdWVyeS5zdGFydHNXaXRoKCckJykpe1xuICAgICAgICByb3V0ZXIucHVzaChgL2FkZHJlc3MvJHtzZWFyY2hRdWVyeX1gKTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIHJvdXRlci5wdXNoKGAvdG9rZW4vJHtzZWFyY2hRdWVyeX1gKTtcbiAgICAgIH1cbiAgICB9XG4gIFxuICBcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgIHNldFNob3dNb2RhbCh0cnVlKTtcbiAgICB9XG4gIFxuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgICAgc2V0U2hvd01vZGFsKGZhbHNlKTtcbiAgICB9XG4gIFxuICAgIGNvbnN0IGhhbmRsZVNlbGVjdCA9IGFzeW5jICh3YWxsZXQpID0+IHtcbiAgICAgIHNldFNob3dNb2RhbChmYWxzZSk7XG5cbiAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ2V4cGxvcmVyJyk7XG4gICAgICBsZXQgc3Rha2UgPSBhd2FpdCBnZXRTdGFrZUFkZHJlc3NGcm9tV2FsbGV0KHdhbGxldCk7XG4gICAgICByb3V0ZXIucHVzaChgL2FkZHJlc3MvJHtzdGFrZX1gKTtcblxuICAgIH1cblxuICAgIFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1haW4tbGFiZWxcIj5FeHBsb3JlcjwvbGFiZWw+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInNlYXJjaEZvcm1cIiBvblN1Ym1pdD17aGFuZGxlU2VhcmNofT5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWUgPSBcInNlYXJjaC1pbnB1dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBhbiBhZGRyZXNzIG9yIGEgc3BlY2lmaWMgdG9rZW4uLi5cIiB2YWx1ZT17c2VhcmNoUXVlcnl9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFNlYXJjaFF1ZXJ5KGV2ZW50LnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJzZWFyY2gtYnV0dG9uXCI+U2VhcmNoPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25uZWN0LXdhbGxldFwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNvbm5lY3Qtd2FsbGV0LWJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvJyl9PkhvbWU8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjb25uZWN0LXdhbGxldC1idXR0b25cIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+e3dhbGxldExvZ299PC9idXR0b24+XG4gICAgICAgIHsgc2hvd01vZGFsICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPGgyPlNlbGVjdCBXYWxsZXQ8L2gyPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwid2FsbGV0QnV0dG9uXCIgb25DbGljaz17KCkgPT4gaGFuZGxlU2VsZWN0KCdUeXBob24gV2FsbGV0Jyl9IHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOmB1cmwoJHsnL3R5cGhvbi5zdmcnfSlgfX0+VHlwaG9uPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3YWxsZXRCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZWxlY3QoJ2V0ZXJubCcpfSBzdHlsZT17e2JhY2tncm91bmRJbWFnZTpgdXJsKCR7Jy9ldGVybmwucG5nJ30pYH19PkV0ZXJubDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwid2FsbGV0QnV0dG9uXCIgb25DbGljaz17KCkgPT4gaGFuZGxlU2VsZWN0KCdOYW1pJyl9IHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOmB1cmwoJHsnL25hbWkuc3ZnJ30pYH19Pk5hbWk8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIndhbGxldEJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNlbGVjdCgnRmxpbnQgV2FsbGV0Jyl9IHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOmB1cmwoJHsnL2ZsaW50LnBuZyd9KWB9fT5GbGludDwvYnV0dG9uPjxici8+XG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwic2VhcmNoRm9ybVwiIG9uU3VibWl0PXtoYW5kbGVTZWFyY2h9PlxuICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInNlYXJjaC1pbnB1dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgd2FsbGV0IGFkZHJlc3NcIiB2YWx1ZT17c2VhcmNoUXVlcnl9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFNlYXJjaFF1ZXJ5KGV2ZW50LnRhcmdldC52YWx1ZSl9PjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJzZWFyY2gtYnV0dG9uXCI+U2VhcmNoPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjYW5jZWwtYnV0dG9uXCIgb25DbGljaz17aGFuZGxlQ2xvc2V9PkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICk7XG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUmVhY3QiLCJIZWFkIiwidXNlUm91dGVyIiwiV2FsbGV0IiwiQmxvY2tmcm9zdCIsIkx1Y2lkIiwiSGVhZGVyIiwidXBkYXRlZEFkZHJlc3MiLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5IiwiYWRkcmVzc1F1ZXJ5Iiwic2V0QWRkcmVzc1F1ZXJ5Iiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwid2FsbGV0TG9nbyIsInNldFdhbGxldExvZ28iLCJyb3V0ZXIiLCJjaGVja0xvY2FsU3RvcmFnZUZvclN0YWtlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiZ2V0U3Rha2VBZGRyZXNzRnJvbVdhbGxldCIsIndhbGxldCIsImx1Y2lkIiwibmV3IiwiYXBpIiwid2luZG93IiwiY2FyZGFubyIsInR5cGhvbmNpcDMwIiwiZW5hYmxlIiwiZXRlcm5sIiwibmFtaSIsImZsaW50Iiwic2VsZWN0V2FsbGV0Iiwic3Rha2UiLCJyZXdhcmRBZGRyZXNzIiwiaGFuZGxlU2VhcmNoIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJlbW92ZUl0ZW0iLCJzdGFydHNXaXRoIiwic3Rha2VBZGRyZXNzIiwiZ2V0U3Rha2VGcm9tQWRkcmVzc0tvaW9zIiwicHVzaCIsImhhbmRsZUNsaWNrIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVTZWxlY3QiLCJoZWFkZXIiLCJsYWJlbCIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImJ1dHRvbiIsImRpdiIsIm9uQ2xpY2siLCJoMiIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/header.js\n"));

/***/ })

});