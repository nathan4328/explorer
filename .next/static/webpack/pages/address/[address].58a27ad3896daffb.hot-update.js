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

eval(__webpack_require__.ts("__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _wallet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wallet */ \"./src/pages/wallet.js\");\n/* harmony import */ var lucid_cardano__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucid-cardano */ \"./node_modules/lucid-cardano/esm/mod.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lucid_cardano__WEBPACK_IMPORTED_MODULE_5__]);\nlucid_cardano__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Header(param) {\n    let { updatedAddress  } = param;\n    _s();\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [addressQuery, setAddressQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [walletLogo, setWalletLogo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Connect Wallet\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        function checkLocalStorageForStake() {\n            if (sessionStorage.getItem(\"explorer\")) {\n                setWalletLogo(\"Connected\");\n            } else {}\n        }\n        checkLocalStorageForStake();\n    }, []);\n    async function getStakeAddressFromWallet(wallet) {\n        const lucid = await lucid_cardano__WEBPACK_IMPORTED_MODULE_5__.Lucid[\"new\"]();\n        var api = \"\";\n        if (wallet == \"Typhon Wallet\") {\n            api = await window.cardano.typhoncip30.enable();\n        }\n        if (wallet == \"eternl\") {\n            api = await window.cardano.eternl.enable();\n        }\n        if (wallet == \"Nami\") {\n            api = await window.cardano.nami.enable();\n        }\n        if (wallet == \"Flint Wallet\") {\n            api = await window.cardano.flint.enable();\n        }\n        lucid.selectWallet(api);\n        let stake = await lucid.wallet.rewardAddress();\n        return stake;\n    }\n    const handleCustomAddress = async (event)=>{\n        event.preventDefault();\n        setShowModal(false);\n        if (addressQuery.startsWith(\"add\")) {\n            let stakeAddress = await getStakeFromAddressKoios(addressQuery);\n            router.push(\"/address/\".concat(stakeAddress));\n        } else if (addressQuery.startsWith(\"stake\") || addressQuery.startsWith(\"$\")) {\n            router.push(\"/address/\".concat(addressQuery));\n        } else {\n            router.push(\"/token/\".concat(searchQuery));\n        }\n    };\n    const handleSearch = async (event)=>{\n        event.preventDefault();\n        // Use the `router.push` method to navigate to the dynamic page with the entered number as the URL parameter.\n        if (searchQuery.startsWith(\"add\")) {\n            let stakeAddress = await getStakeFromAddressKoios(searchQuery);\n            router.push(\"/address/\".concat(stakeAddress));\n        } else if (searchQuery.startsWith(\"stake\") || searchQuery.startsWith(\"$\")) {\n            router.push(\"/address/\".concat(searchQuery));\n        } else {\n            router.push(\"/token/\".concat(searchQuery));\n        }\n    };\n    const handleClick = ()=>{\n        setShowModal(true);\n    };\n    const handleClose = ()=>{\n        setShowModal(false);\n    };\n    const handleSelect = async (wallet)=>{\n        setShowModal(false);\n        let stake = await getStakeAddressFromWallet(wallet);\n        router.push(\"/address/\".concat(stake));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                className: \"main-label\",\n                children: \"Explorer\"\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                lineNumber: 104,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"searchForm\",\n                onSubmit: handleSearch,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"search-input\",\n                        placeholder: \"Search for an address or a specific token...\",\n                        value: searchQuery,\n                        onChange: (event)=>setSearchQuery(event.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                        lineNumber: 106,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"search-button\",\n                        children: \"Search\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                        lineNumber: 107,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                lineNumber: 105,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"connect-wallet\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"connect-wallet-button\",\n                        onClick: ()=>router.push(\"/\"),\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"connect-wallet-button\",\n                        onClick: handleClick,\n                        children: walletLogo\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, this),\n                    showModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"modal\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"modal-content\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"Select Wallet\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                                    lineNumber: 115,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"walletButton\",\n                                            onClick: ()=>handleSelect(\"Typhon Wallet\"),\n                                            style: {\n                                                backgroundImage: \"url(/typhon.svg)\"\n                                            },\n                                            children: \"Typhon\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                                            lineNumber: 117,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"walletButton\",\n                                            onClick: ()=>handleSelect(\"eternl\"),\n                                            style: {\n                                                backgroundImage: \"url(/eternl.png)\"\n                                            },\n                                            children: \"Eternl\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                                            lineNumber: 118,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"walletButton\",\n                                            onClick: ()=>handleSelect(\"Nami\"),\n                                            style: {\n                                                backgroundImage: \"url(/nami.svg)\"\n                                            },\n                                            children: \"Nami\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                                            lineNumber: 119,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"walletButton\",\n                                            onClick: ()=>handleSelect(\"Flint Wallet\"),\n                                            style: {\n                                                backgroundImage: \"url(/flint.png)\"\n                                            },\n                                            children: \"Flint\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                                            lineNumber: 120,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                                            lineNumber: 120,\n                                            columnNumber: 158\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                            className: \"searchForm\",\n                                            onSubmit: handleCustomAddress,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    className: \"search-input\",\n                                                    placeholder: \"Enter wallet address\",\n                                                    value: addressQuery,\n                                                    onChange: (event)=>setAddressQuery(event.target.value)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                                                    lineNumber: 123,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    type: \"submit\",\n                                                    className: \"search-button\",\n                                                    children: \"Search\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                                                    lineNumber: 124,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                                            lineNumber: 122,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                                    lineNumber: 116,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"cancel-button\",\n                                    onClick: handleClose,\n                                    children: \"Cancel\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                                    lineNumber: 127,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                            lineNumber: 114,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                        lineNumber: 113,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n                lineNumber: 109,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/header.js\",\n        lineNumber: 103,\n        columnNumber: 9\n    }, this);\n}\n_s(Header, \"bumg/iLkYpVto8zYlPEXttoa0ZA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7c0RBQ3RILDhEQUFDTDs0Q0FBT1QsV0FBVTs0Q0FBZVcsU0FBUyxJQUFNZCxhQUFhOzRDQUFpQmdCLE9BQU87Z0RBQUNDLGlCQUFpQjs0Q0FBcUI7c0RBQUc7Ozs7OztzREFBYyw4REFBQ0M7Ozs7O3NEQUU5SSw4REFBQ2Q7NENBQUtELFdBQVU7NENBQWFFLFVBQVVmOzs4REFDckMsOERBQUNnQjtvREFBTUgsV0FBVTtvREFBZUssYUFBWTtvREFBdUJDLE9BQU81QztvREFBYzZDLFVBQVUsQ0FBQ25CLFFBQVV6QixnQkFBZ0J5QixNQUFNb0IsTUFBTSxDQUFDRixLQUFLOzs7Ozs7OERBQy9JLDhEQUFDRztvREFBT0wsTUFBSztvREFBU0osV0FBVTs4REFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FHcEQsOERBQUNTO29DQUFPVCxXQUFVO29DQUFnQlcsU0FBU2Y7OENBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3RFLENBQUM7R0E5SHVCdEM7O1FBTUxKLGtEQUFTQTs7O0tBTkpJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9oZWFkZXIuanM/ZTAyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFdhbGxldCBmcm9tIFwiLi93YWxsZXRcIjtcbmltcG9ydCB7IEJsb2NrZnJvc3QsIEx1Y2lkIH0gZnJvbSBcImx1Y2lkLWNhcmRhbm9cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHt1cGRhdGVkQWRkcmVzc30pe1xuXG4gICAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2FkZHJlc3NRdWVyeSwgc2V0QWRkcmVzc1F1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW3dhbGxldExvZ28sIHNldFdhbGxldExvZ29dID0gdXNlU3RhdGUoJ0Nvbm5lY3QgV2FsbGV0Jyk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgZnVuY3Rpb24gY2hlY2tMb2NhbFN0b3JhZ2VGb3JTdGFrZSgpe1xuICAgICAgICBpZihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdleHBsb3JlcicpKXtcbiAgICAgICAgICBzZXRXYWxsZXRMb2dvKCdDb25uZWN0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjaGVja0xvY2FsU3RvcmFnZUZvclN0YWtlKCk7XG4gICAgfSwgW10pXG5cbiAgXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0U3Rha2VBZGRyZXNzRnJvbVdhbGxldCh3YWxsZXQpe1xuICAgICAgY29uc3QgbHVjaWQgPSBhd2FpdCBMdWNpZC5uZXcoKTtcbiAgXG4gICAgICB2YXIgYXBpID0gJyc7XG4gIFxuICAgICAgaWYod2FsbGV0ID09ICdUeXBob24gV2FsbGV0Jyl7XG4gICAgICAgIGFwaSA9IGF3YWl0IHdpbmRvdy5jYXJkYW5vLnR5cGhvbmNpcDMwLmVuYWJsZSgpO1xuICAgICAgfVxuICAgICAgaWYod2FsbGV0ID09ICdldGVybmwnKXtcbiAgICAgICAgYXBpID0gYXdhaXQgd2luZG93LmNhcmRhbm8uZXRlcm5sLmVuYWJsZSgpO1xuICAgICAgfVxuICAgICAgaWYod2FsbGV0ID09ICdOYW1pJyl7XG4gICAgICAgIGFwaSA9IGF3YWl0IHdpbmRvdy5jYXJkYW5vLm5hbWkuZW5hYmxlKCk7XG4gICAgICB9XG4gICAgICBpZih3YWxsZXQgPT0gJ0ZsaW50IFdhbGxldCcpe1xuICAgICAgICBhcGkgPSBhd2FpdCB3aW5kb3cuY2FyZGFuby5mbGludC5lbmFibGUoKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgbHVjaWQuc2VsZWN0V2FsbGV0KGFwaSk7XG4gICAgICBsZXQgc3Rha2UgPSBhd2FpdCBsdWNpZC53YWxsZXQucmV3YXJkQWRkcmVzcygpO1xuICAgICAgcmV0dXJuIHN0YWtlO1xuICBcbiAgICB9XG5cblxuICAgIGNvbnN0IGhhbmRsZUN1c3RvbUFkZHJlc3MgPSBhc3luYyAoZXZlbnQpID0+e1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHNldFNob3dNb2RhbChmYWxzZSk7XG4gICAgICBpZihhZGRyZXNzUXVlcnkuc3RhcnRzV2l0aCgnYWRkJykpe1xuICAgICAgICBsZXQgc3Rha2VBZGRyZXNzID0gYXdhaXQgZ2V0U3Rha2VGcm9tQWRkcmVzc0tvaW9zKGFkZHJlc3NRdWVyeSk7XG4gICAgICAgIHJvdXRlci5wdXNoKGAvYWRkcmVzcy8ke3N0YWtlQWRkcmVzc31gKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGFkZHJlc3NRdWVyeS5zdGFydHNXaXRoKCdzdGFrZScpICB8fCBhZGRyZXNzUXVlcnkuc3RhcnRzV2l0aCgnJCcpKXtcbiAgICAgICAgcm91dGVyLnB1c2goYC9hZGRyZXNzLyR7YWRkcmVzc1F1ZXJ5fWApO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgcm91dGVyLnB1c2goYC90b2tlbi8ke3NlYXJjaFF1ZXJ5fWApO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBoYW5kbGVTZWFyY2ggPSBhc3luYyAgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgLy8gVXNlIHRoZSBgcm91dGVyLnB1c2hgIG1ldGhvZCB0byBuYXZpZ2F0ZSB0byB0aGUgZHluYW1pYyBwYWdlIHdpdGggdGhlIGVudGVyZWQgbnVtYmVyIGFzIHRoZSBVUkwgcGFyYW1ldGVyLlxuICAgICAgaWYoc2VhcmNoUXVlcnkuc3RhcnRzV2l0aCgnYWRkJykpe1xuICAgICAgICBsZXQgc3Rha2VBZGRyZXNzID0gYXdhaXQgZ2V0U3Rha2VGcm9tQWRkcmVzc0tvaW9zKHNlYXJjaFF1ZXJ5KTtcbiAgICAgICAgcm91dGVyLnB1c2goYC9hZGRyZXNzLyR7c3Rha2VBZGRyZXNzfWApO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoc2VhcmNoUXVlcnkuc3RhcnRzV2l0aCgnc3Rha2UnKSB8fCBzZWFyY2hRdWVyeS5zdGFydHNXaXRoKCckJykpe1xuICAgICAgICByb3V0ZXIucHVzaChgL2FkZHJlc3MvJHtzZWFyY2hRdWVyeX1gKTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIHJvdXRlci5wdXNoKGAvdG9rZW4vJHtzZWFyY2hRdWVyeX1gKTtcbiAgICAgIH1cbiAgICB9XG4gIFxuICBcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgIHNldFNob3dNb2RhbCh0cnVlKTtcbiAgICB9XG4gIFxuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgICAgc2V0U2hvd01vZGFsKGZhbHNlKTtcbiAgICB9XG4gIFxuICAgIGNvbnN0IGhhbmRsZVNlbGVjdCA9IGFzeW5jICh3YWxsZXQpID0+IHtcbiAgICAgIHNldFNob3dNb2RhbChmYWxzZSk7XG5cbiAgICAgIGxldCBzdGFrZSA9IGF3YWl0IGdldFN0YWtlQWRkcmVzc0Zyb21XYWxsZXQod2FsbGV0KTtcbiAgICAgIHJvdXRlci5wdXNoKGAvYWRkcmVzcy8ke3N0YWtlfWApO1xuXG4gICAgfVxuXG4gICAgXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWFpbi1sYWJlbFwiPkV4cGxvcmVyPC9sYWJlbD5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwic2VhcmNoRm9ybVwiIG9uU3VibWl0PXtoYW5kbGVTZWFyY2h9PlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZSA9IFwic2VhcmNoLWlucHV0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIGFuIGFkZHJlc3Mgb3IgYSBzcGVjaWZpYyB0b2tlbi4uLlwiIHZhbHVlPXtzZWFyY2hRdWVyeX0gb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0U2VhcmNoUXVlcnkoZXZlbnQudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInNlYXJjaC1idXR0b25cIj5TZWFyY2g8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbm5lY3Qtd2FsbGV0XCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY29ubmVjdC13YWxsZXQtYnV0dG9uXCIgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy8nKX0+SG9tZTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNvbm5lY3Qtd2FsbGV0LWJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT57d2FsbGV0TG9nb308L2J1dHRvbj5cbiAgICAgICAgeyBzaG93TW9kYWwgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICA8aDI+U2VsZWN0IFdhbGxldDwvaDI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3YWxsZXRCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZWxlY3QoJ1R5cGhvbiBXYWxsZXQnKX0gc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6YHVybCgkeycvdHlwaG9uLnN2Zyd9KWB9fT5UeXBob248L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIndhbGxldEJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNlbGVjdCgnZXRlcm5sJyl9IHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOmB1cmwoJHsnL2V0ZXJubC5wbmcnfSlgfX0+RXRlcm5sPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3YWxsZXRCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZWxlY3QoJ05hbWknKX0gc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6YHVybCgkeycvbmFtaS5zdmcnfSlgfX0+TmFtaTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwid2FsbGV0QnV0dG9uXCIgb25DbGljaz17KCkgPT4gaGFuZGxlU2VsZWN0KCdGbGludCBXYWxsZXQnKX0gc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6YHVybCgkeycvZmxpbnQucG5nJ30pYH19PkZsaW50PC9idXR0b24+PGJyLz5cblxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInNlYXJjaEZvcm1cIiBvblN1Ym1pdD17aGFuZGxlQ3VzdG9tQWRkcmVzc30+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwic2VhcmNoLWlucHV0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciB3YWxsZXQgYWRkcmVzc1wiIHZhbHVlPXthZGRyZXNzUXVlcnl9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldEFkZHJlc3NRdWVyeShldmVudC50YXJnZXQudmFsdWUpfT48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwic2VhcmNoLWJ1dHRvblwiPlNlYXJjaDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY2FuY2VsLWJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICApO1xufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlJlYWN0IiwiSGVhZCIsInVzZVJvdXRlciIsIldhbGxldCIsIkJsb2NrZnJvc3QiLCJMdWNpZCIsIkhlYWRlciIsInVwZGF0ZWRBZGRyZXNzIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsImFkZHJlc3NRdWVyeSIsInNldEFkZHJlc3NRdWVyeSIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsIndhbGxldExvZ28iLCJzZXRXYWxsZXRMb2dvIiwicm91dGVyIiwiY2hlY2tMb2NhbFN0b3JhZ2VGb3JTdGFrZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImdldFN0YWtlQWRkcmVzc0Zyb21XYWxsZXQiLCJ3YWxsZXQiLCJsdWNpZCIsIm5ldyIsImFwaSIsIndpbmRvdyIsImNhcmRhbm8iLCJ0eXBob25jaXAzMCIsImVuYWJsZSIsImV0ZXJubCIsIm5hbWkiLCJmbGludCIsInNlbGVjdFdhbGxldCIsInN0YWtlIiwicmV3YXJkQWRkcmVzcyIsImhhbmRsZUN1c3RvbUFkZHJlc3MiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RhcnRzV2l0aCIsInN0YWtlQWRkcmVzcyIsImdldFN0YWtlRnJvbUFkZHJlc3NLb2lvcyIsInB1c2giLCJoYW5kbGVTZWFyY2giLCJoYW5kbGVDbGljayIsImhhbmRsZUNsb3NlIiwiaGFuZGxlU2VsZWN0IiwiaGVhZGVyIiwibGFiZWwiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iLCJkaXYiLCJvbkNsaWNrIiwiaDIiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/header.js\n"));

/***/ })

});