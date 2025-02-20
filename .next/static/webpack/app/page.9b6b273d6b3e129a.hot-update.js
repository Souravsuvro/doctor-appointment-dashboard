"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/RecentConversations.tsx":
/*!************************************************!*\
  !*** ./src/components/RecentConversations.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RecentConversations; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n\n\n\n\nconst conversations = [\n    {\n        id: \"1\",\n        patientName: \"Sarah Johnson\",\n        avatar: \"/images/Patients/Sarah Johnson.jpg\",\n        message: \"Hi Dr., I have been experiencing severe headaches...\",\n        time: \"2 min ago\",\n        unread: true\n    },\n    {\n        id: \"2\",\n        patientName: \"Michael Brown\",\n        avatar: \"/images/Patients/Michael Brown.jpg\",\n        message: \"Thank you for the prescription. When should I...\",\n        time: \"15 min ago\"\n    },\n    {\n        id: \"3\",\n        patientName: \"Emma Wilson\",\n        avatar: \"/images/Patients/Emma Wilson.jpg\",\n        message: \"Is it normal to feel dizzy after taking the...\",\n        time: \"1 hour ago\"\n    },\n    {\n        id: \"4\",\n        patientName: \"James Miller\",\n        avatar: \"/images/Patients/James Miller.jpg\",\n        message: \"My blood pressure readings for today are...\",\n        time: \"2 hours ago\"\n    },\n    {\n        id: \"5\",\n        patientName: \"Linda Davis\",\n        avatar: \"/images/Patients/Linda Davis.jpg\",\n        message: \"When is my next appointment scheduled?\",\n        time: \"3 hours ago\"\n    },\n    {\n        id: \"6\",\n        patientName: \"Robert Taylor\",\n        avatar: \"/images/Patients/Robert Taylor.jpg\",\n        message: \"The new medication seems to be working well...\",\n        time: \"4 hours ago\"\n    }\n];\nfunction RecentConversations() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white/60 dark:bg-[#1a1f37] rounded-xl shadow-sm border border-gray-200/60 dark:border-gray-700/30 h-[calc(100vh-25rem)] sm:h-[calc(100vh-25rem)] md:h-[calc(100vh-20rem)] flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4 border-b border-gray-200/60 dark:border-gray-700/30\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-lg font-semibold text-gray-900 dark:text-white\",\n                                    children: \"Recent Conversations\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\components\\\\RecentConversations.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm text-gray-500 dark:text-gray-400\",\n                                    children: \"You have 3 unread messages\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\components\\\\RecentConversations.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\components\\\\RecentConversations.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"hover:bg-gray-100/60 dark:hover:bg-gray-700/40 rounded-lg transition-colors\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faEllipsisVertical,\n                                className: \"w-5 h-5 text-gray-600 dark:text-gray-400\"\n                            }, void 0, false, {\n                                fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\components\\\\RecentConversations.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\components\\\\RecentConversations.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\components\\\\RecentConversations.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\components\\\\RecentConversations.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1 overflow-y-auto dark:bg-purple-500/10 scrollbar-thin scrollbar-thumb-blue-400/60 dark:scrollbar-thumb-blue-500/50 scrollbar-track-transparent hover:scrollbar-thumb-blue-500/80 dark:hover:scrollbar-thumb-blue-400/70\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"divide-y divide-gray-200/60 dark:divide-gray-700/30\",\n                    children: conversations.map((conversation)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"p-2 hover:bg-gray-50/60 dark:hover:bg-blue-500/10 transition-colors\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-start gap-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"relative flex-shrink-0\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-gray-100 dark:ring-gray-700/30\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                    src: conversation.avatar,\n                                                    alt: conversation.patientName,\n                                                    fill: true,\n                                                    className: \"object-cover\"\n                                                }, void 0, false, {\n                                                    fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\components\\\\RecentConversations.tsx\",\n                                                    lineNumber: 85,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\components\\\\RecentConversations.tsx\",\n                                                lineNumber: 84,\n                                                columnNumber: 19\n                                            }, this),\n                                            conversation.unread && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"absolute -top-1 -right-1 h-3 w-3 bg-blue-500 dark:bg-blue-400 rounded-full\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 dark:bg-blue-300 opacity-75\"\n                                                }, void 0, false, {\n                                                    fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\components\\\\RecentConversations.tsx\",\n                                                    lineNumber: 94,\n                                                    columnNumber: 23\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\components\\\\RecentConversations.tsx\",\n                                                lineNumber: 93,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\components\\\\RecentConversations.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex-1 min-w-0\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-start justify-between gap-2\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                        className: \"text-sm font-medium text-gray-900 dark:text-white\",\n                                                        children: conversation.patientName\n                                                    }, void 0, false, {\n                                                        fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\components\\\\RecentConversations.tsx\",\n                                                        lineNumber: 103,\n                                                        columnNumber: 23\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"text-sm text-gray-600 dark:text-gray-300 line-clamp-2\",\n                                                        children: conversation.message\n                                                    }, void 0, false, {\n                                                        fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\components\\\\RecentConversations.tsx\",\n                                                        lineNumber: 106,\n                                                        columnNumber: 23\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"mt-1 text-xs text-gray-500 dark:text-gray-400\",\n                                                        children: conversation.time\n                                                    }, void 0, false, {\n                                                        fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\components\\\\RecentConversations.tsx\",\n                                                        lineNumber: 109,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\components\\\\RecentConversations.tsx\",\n                                                lineNumber: 102,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\components\\\\RecentConversations.tsx\",\n                                            lineNumber: 101,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\components\\\\RecentConversations.tsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"flex-shrink-0 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100/60 dark:hover:bg-gray-700/40 rounded-lg transition-colors\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faReply,\n                                            className: \"w-4 h-4\"\n                                        }, void 0, false, {\n                                            fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\components\\\\RecentConversations.tsx\",\n                                            lineNumber: 118,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\components\\\\RecentConversations.tsx\",\n                                        lineNumber: 117,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\components\\\\RecentConversations.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 15\n                            }, this)\n                        }, conversation.id, false, {\n                            fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\components\\\\RecentConversations.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\components\\\\RecentConversations.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\components\\\\RecentConversations.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4 border-t border-gray-200/60 dark:border-gray-700/30\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"w-full py-2.5 px-4 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50/60 dark:bg-blue-900/30 hover:bg-blue-100/60 dark:hover:bg-blue-800/30 rounded-lg transition-colors\",\n                    children: \"View All Messages\"\n                }, void 0, false, {\n                    fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\components\\\\RecentConversations.tsx\",\n                    lineNumber: 128,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\components\\\\RecentConversations.tsx\",\n                lineNumber: 127,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\components\\\\RecentConversations.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n}\n_c = RecentConversations;\nvar _c;\n$RefreshReg$(_c, \"RecentConversations\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1JlY2VudENvbnZlcnNhdGlvbnMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFnRjtBQUNmO0FBQ2xDO0FBVy9CLE1BQU1JLGdCQUFnQztJQUNwQztRQUNFQyxJQUFJO1FBQ0pDLGFBQWE7UUFDYkMsUUFBUTtRQUNSQyxTQUFTO1FBQ1RDLE1BQU07UUFDTkMsUUFBUTtJQUNWO0lBQ0E7UUFDRUwsSUFBSTtRQUNKQyxhQUFhO1FBQ2JDLFFBQVE7UUFDUkMsU0FBUztRQUNUQyxNQUFNO0lBQ1I7SUFDQTtRQUNFSixJQUFJO1FBQ0pDLGFBQWE7UUFDYkMsUUFBUTtRQUNSQyxTQUFTO1FBQ1RDLE1BQU07SUFDUjtJQUNBO1FBQ0VKLElBQUk7UUFDSkMsYUFBYTtRQUNiQyxRQUFRO1FBQ1JDLFNBQVM7UUFDVEMsTUFBTTtJQUNSO0lBQ0E7UUFDRUosSUFBSTtRQUNKQyxhQUFhO1FBQ2JDLFFBQVE7UUFDUkMsU0FBUztRQUNUQyxNQUFNO0lBQ1I7SUFDQTtRQUNFSixJQUFJO1FBQ0pDLGFBQWE7UUFDYkMsUUFBUTtRQUNSQyxTQUFTO1FBQ1RDLE1BQU07SUFDUjtDQUNEO0FBRWMsU0FBU0U7SUFDdEIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUViLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs7OENBQ0MsOERBQUNFO29DQUFHRCxXQUFVOzhDQUFzRDs7Ozs7OzhDQUNwRSw4REFBQ0U7b0NBQUVGLFdBQVU7OENBQTJDOzs7Ozs7Ozs7Ozs7c0NBRTFELDhEQUFDRzs0QkFBT0gsV0FBVTtzQ0FDaEIsNEVBQUNYLDJFQUFlQTtnQ0FBQ2UsTUFBTWpCLGlGQUFrQkE7Z0NBQUVhLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTTNELDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ1pULGNBQWNjLEdBQUcsQ0FBQyxDQUFDQyw2QkFDbEIsOERBQUNQOzRCQUEwQkMsV0FBVTtzQ0FDbkMsNEVBQUNEO2dDQUFJQyxXQUFVOztrREFFYiw4REFBQ0Q7d0NBQUlDLFdBQVU7OzBEQUNiLDhEQUFDRDtnREFBSUMsV0FBVTswREFDYiw0RUFBQ1Ysa0RBQUtBO29EQUNKaUIsS0FBS0QsYUFBYVosTUFBTTtvREFDeEJjLEtBQUtGLGFBQWFiLFdBQVc7b0RBQzdCZ0IsSUFBSTtvREFDSlQsV0FBVTs7Ozs7Ozs7Ozs7NENBR2JNLGFBQWFULE1BQU0sa0JBQ2xCLDhEQUFDYTtnREFBS1YsV0FBVTswREFDZCw0RUFBQ1U7b0RBQUtWLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQU10Qiw4REFBQ0Q7d0NBQUlDLFdBQVU7a0RBQ2IsNEVBQUNEOzRDQUFJQyxXQUFVO3NEQUNiLDRFQUFDRDs7a0VBQ0MsOERBQUNZO3dEQUFHWCxXQUFVO2tFQUNYTSxhQUFhYixXQUFXOzs7Ozs7a0VBRTNCLDhEQUFDUzt3REFBRUYsV0FBVTtrRUFDVk0sYUFBYVgsT0FBTzs7Ozs7O2tFQUV2Qiw4REFBQ087d0RBQUVGLFdBQVU7a0VBQ1ZNLGFBQWFWLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBTzFCLDhEQUFDTzt3Q0FBT0gsV0FBVTtrREFDaEIsNEVBQUNYLDJFQUFlQTs0Q0FBQ2UsTUFBTWhCLHNFQUFPQTs0Q0FBRVksV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBdEN0Q00sYUFBYWQsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OzBCQStDL0IsOERBQUNPO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRztvQkFBT0gsV0FBVTs4QkFBd0w7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWxOO0tBMUV3QkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUmVjZW50Q29udmVyc2F0aW9ucy50c3g/ZTcyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmYUVsbGlwc2lzVmVydGljYWwsIGZhUmVwbHkgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuaW50ZXJmYWNlIENvbnZlcnNhdGlvbiB7XG4gIGlkOiBzdHJpbmc7XG4gIHBhdGllbnROYW1lOiBzdHJpbmc7XG4gIGF2YXRhcjogc3RyaW5nO1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIHRpbWU6IHN0cmluZztcbiAgdW5yZWFkPzogYm9vbGVhbjtcbn1cblxuY29uc3QgY29udmVyc2F0aW9uczogQ29udmVyc2F0aW9uW10gPSBbXG4gIHtcbiAgICBpZDogJzEnLFxuICAgIHBhdGllbnROYW1lOiAnU2FyYWggSm9obnNvbicsXG4gICAgYXZhdGFyOiAnL2ltYWdlcy9QYXRpZW50cy9TYXJhaCBKb2huc29uLmpwZycsXG4gICAgbWVzc2FnZTogJ0hpIERyLiwgSSBoYXZlIGJlZW4gZXhwZXJpZW5jaW5nIHNldmVyZSBoZWFkYWNoZXMuLi4nLFxuICAgIHRpbWU6ICcyIG1pbiBhZ28nLFxuICAgIHVucmVhZDogdHJ1ZVxuICB9LFxuICB7XG4gICAgaWQ6ICcyJyxcbiAgICBwYXRpZW50TmFtZTogJ01pY2hhZWwgQnJvd24nLFxuICAgIGF2YXRhcjogJy9pbWFnZXMvUGF0aWVudHMvTWljaGFlbCBCcm93bi5qcGcnLFxuICAgIG1lc3NhZ2U6ICdUaGFuayB5b3UgZm9yIHRoZSBwcmVzY3JpcHRpb24uIFdoZW4gc2hvdWxkIEkuLi4nLFxuICAgIHRpbWU6ICcxNSBtaW4gYWdvJ1xuICB9LFxuICB7XG4gICAgaWQ6ICczJyxcbiAgICBwYXRpZW50TmFtZTogJ0VtbWEgV2lsc29uJyxcbiAgICBhdmF0YXI6ICcvaW1hZ2VzL1BhdGllbnRzL0VtbWEgV2lsc29uLmpwZycsXG4gICAgbWVzc2FnZTogJ0lzIGl0IG5vcm1hbCB0byBmZWVsIGRpenp5IGFmdGVyIHRha2luZyB0aGUuLi4nLFxuICAgIHRpbWU6ICcxIGhvdXIgYWdvJ1xuICB9LFxuICB7XG4gICAgaWQ6ICc0JyxcbiAgICBwYXRpZW50TmFtZTogJ0phbWVzIE1pbGxlcicsXG4gICAgYXZhdGFyOiAnL2ltYWdlcy9QYXRpZW50cy9KYW1lcyBNaWxsZXIuanBnJyxcbiAgICBtZXNzYWdlOiAnTXkgYmxvb2QgcHJlc3N1cmUgcmVhZGluZ3MgZm9yIHRvZGF5IGFyZS4uLicsXG4gICAgdGltZTogJzIgaG91cnMgYWdvJ1xuICB9LFxuICB7XG4gICAgaWQ6ICc1JyxcbiAgICBwYXRpZW50TmFtZTogJ0xpbmRhIERhdmlzJyxcbiAgICBhdmF0YXI6ICcvaW1hZ2VzL1BhdGllbnRzL0xpbmRhIERhdmlzLmpwZycsXG4gICAgbWVzc2FnZTogJ1doZW4gaXMgbXkgbmV4dCBhcHBvaW50bWVudCBzY2hlZHVsZWQ/JyxcbiAgICB0aW1lOiAnMyBob3VycyBhZ28nXG4gIH0sXG4gIHtcbiAgICBpZDogJzYnLFxuICAgIHBhdGllbnROYW1lOiAnUm9iZXJ0IFRheWxvcicsXG4gICAgYXZhdGFyOiAnL2ltYWdlcy9QYXRpZW50cy9Sb2JlcnQgVGF5bG9yLmpwZycsXG4gICAgbWVzc2FnZTogJ1RoZSBuZXcgbWVkaWNhdGlvbiBzZWVtcyB0byBiZSB3b3JraW5nIHdlbGwuLi4nLFxuICAgIHRpbWU6ICc0IGhvdXJzIGFnbydcbiAgfVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjZW50Q29udmVyc2F0aW9ucygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlLzYwIGRhcms6YmctWyMxYTFmMzddIHJvdW5kZWQteGwgc2hhZG93LXNtIGJvcmRlciBib3JkZXItZ3JheS0yMDAvNjAgZGFyazpib3JkZXItZ3JheS03MDAvMzAgaC1bY2FsYygxMDB2aC0yNXJlbSldIHNtOmgtW2NhbGMoMTAwdmgtMjVyZW0pXSBtZDpoLVtjYWxjKDEwMHZoLTIwcmVtKV0gZmxleCBmbGV4LWNvbFwiPlxuICAgICAgey8qIEhlYWRlciAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMC82MCBkYXJrOmJvcmRlci1ncmF5LTcwMC8zMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCI+UmVjZW50IENvbnZlcnNhdGlvbnM8L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPllvdSBoYXZlIDMgdW5yZWFkIG1lc3NhZ2VzPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaG92ZXI6YmctZ3JheS0xMDAvNjAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMC80MCByb3VuZGVkLWxnIHRyYW5zaXRpb24tY29sb3JzXCI+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRWxsaXBzaXNWZXJ0aWNhbH0gY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTQwMFwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBDb252ZXJzYXRpb25zIExpc3QgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBvdmVyZmxvdy15LWF1dG8gZGFyazpiZy1wdXJwbGUtNTAwLzEwIHNjcm9sbGJhci10aGluIHNjcm9sbGJhci10aHVtYi1ibHVlLTQwMC82MCBkYXJrOnNjcm9sbGJhci10aHVtYi1ibHVlLTUwMC81MCBzY3JvbGxiYXItdHJhY2stdHJhbnNwYXJlbnQgaG92ZXI6c2Nyb2xsYmFyLXRodW1iLWJsdWUtNTAwLzgwIGRhcms6aG92ZXI6c2Nyb2xsYmFyLXRodW1iLWJsdWUtNDAwLzcwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlLXkgZGl2aWRlLWdyYXktMjAwLzYwIGRhcms6ZGl2aWRlLWdyYXktNzAwLzMwXCI+XG4gICAgICAgICAge2NvbnZlcnNhdGlvbnMubWFwKChjb252ZXJzYXRpb24pID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtjb252ZXJzYXRpb24uaWR9IGNsYXNzTmFtZT1cInAtMiBob3ZlcjpiZy1ncmF5LTUwLzYwIGRhcms6aG92ZXI6YmctYmx1ZS01MDAvMTAgdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGdhcC00XCI+XG4gICAgICAgICAgICAgICAgey8qIEF2YXRhciAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXgtc2hyaW5rLTBcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy0xMiBoLTEyIHJvdW5kZWQtZnVsbCBvdmVyZmxvdy1oaWRkZW4gcmluZy0yIHJpbmctZ3JheS0xMDAgZGFyazpyaW5nLWdyYXktNzAwLzMwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17Y29udmVyc2F0aW9uLmF2YXRhcn1cbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2NvbnZlcnNhdGlvbi5wYXRpZW50TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICBmaWxsXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAge2NvbnZlcnNhdGlvbi51bnJlYWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtdG9wLTEgLXJpZ2h0LTEgaC0zIHctMyBiZy1ibHVlLTUwMCBkYXJrOmJnLWJsdWUtNDAwIHJvdW5kZWQtZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIGlubGluZS1mbGV4IGgtZnVsbCB3LWZ1bGwgYW5pbWF0ZS1waW5nIHJvdW5kZWQtZnVsbCBiZy1ibHVlLTQwMCBkYXJrOmJnLWJsdWUtMzAwIG9wYWNpdHktNzVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogQ29udGVudCAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBtaW4tdy0wXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb252ZXJzYXRpb24ucGF0aWVudE5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS02MDAgZGFyazp0ZXh0LWdyYXktMzAwIGxpbmUtY2xhbXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbnZlcnNhdGlvbi5tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0xIHRleHQteHMgdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb252ZXJzYXRpb24udGltZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogUmVwbHkgQnV0dG9uICovfVxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCBwLTIgdGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTQwMCBkYXJrOmhvdmVyOnRleHQtZ3JheS0yMDAgaG92ZXI6YmctZ3JheS0xMDAvNjAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMC80MCByb3VuZGVkLWxnIHRyYW5zaXRpb24tY29sb3JzXCI+XG4gICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUmVwbHl9IGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogUXVpY2sgUmVwbHkgQnV0dG9uICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYm9yZGVyLXQgYm9yZGVyLWdyYXktMjAwLzYwIGRhcms6Ym9yZGVyLWdyYXktNzAwLzMwXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy1mdWxsIHB5LTIuNSBweC00IHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ibHVlLTYwMCBkYXJrOnRleHQtYmx1ZS00MDAgYmctYmx1ZS01MC82MCBkYXJrOmJnLWJsdWUtOTAwLzMwIGhvdmVyOmJnLWJsdWUtMTAwLzYwIGRhcms6aG92ZXI6YmctYmx1ZS04MDAvMzAgcm91bmRlZC1sZyB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgIFZpZXcgQWxsIE1lc3NhZ2VzXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiZmFFbGxpcHNpc1ZlcnRpY2FsIiwiZmFSZXBseSIsIkZvbnRBd2Vzb21lSWNvbiIsIkltYWdlIiwiY29udmVyc2F0aW9ucyIsImlkIiwicGF0aWVudE5hbWUiLCJhdmF0YXIiLCJtZXNzYWdlIiwidGltZSIsInVucmVhZCIsIlJlY2VudENvbnZlcnNhdGlvbnMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInAiLCJidXR0b24iLCJpY29uIiwibWFwIiwiY29udmVyc2F0aW9uIiwic3JjIiwiYWx0IiwiZmlsbCIsInNwYW4iLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/RecentConversations.tsx\n"));

/***/ })

});