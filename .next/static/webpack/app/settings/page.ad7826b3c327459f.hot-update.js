"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/settings/page",{

/***/ "(app-pages-browser)/./src/app/settings/page.tsx":
/*!***********************************!*\
  !*** ./src/app/settings/page.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SettingsPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _components_settings_ProfileSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/settings/ProfileSettings */ \"(app-pages-browser)/./src/components/settings/ProfileSettings.tsx\");\n/* harmony import */ var _components_settings_SecuritySettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/settings/SecuritySettings */ \"(app-pages-browser)/./src/components/settings/SecuritySettings.tsx\");\n/* harmony import */ var _components_settings_NotificationSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/settings/NotificationSettings */ \"(app-pages-browser)/./src/components/settings/NotificationSettings.tsx\");\n/* harmony import */ var _components_settings_AppearanceSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/settings/AppearanceSettings */ \"(app-pages-browser)/./src/components/settings/AppearanceSettings.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst settingsSections = [\n    {\n        id: \"profile\",\n        label: \"Profile\",\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faUser\n    },\n    {\n        id: \"security\",\n        label: \"Security\",\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faLock\n    },\n    {\n        id: \"notifications\",\n        label: \"Notifications\",\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faBell\n    },\n    {\n        id: \"appearance\",\n        label: \"Appearance\",\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faPalette\n    }\n];\nfunction SettingsPage() {\n    _s();\n    const [activeSection, setActiveSection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"profile\");\n    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const renderSettingsContent = ()=>{\n        switch(activeSection){\n            case \"profile\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_settings_ProfileSettings__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\app\\\\settings\\\\page.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 16\n                }, this);\n            case \"security\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_settings_SecuritySettings__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\app\\\\settings\\\\page.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 16\n                }, this);\n            case \"notifications\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_settings_NotificationSettings__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\app\\\\settings\\\\page.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 16\n                }, this);\n            case \"appearance\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_settings_AppearanceSettings__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\app\\\\settings\\\\page.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 16\n                }, this);\n            default:\n                return null;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-7xl mx-auto space-y-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-2xl font-bold text-gray-900 dark:text-white\",\n                            children: \"Account Settings\"\n                        }, void 0, false, {\n                            fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\app\\\\settings\\\\page.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),\n                            className: \"md:hidden p-2 -mr-2 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300\",\n                            \"aria-label\": \"Toggle settings menu\",\n                            children: isMobileMenuOpen ? \"Close\" : \"Menu\"\n                        }, void 0, false, {\n                            fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\app\\\\settings\\\\page.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\app\\\\settings\\\\page.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\\n            \".concat(isMobileMenuOpen ? \"block\" : \"hidden\", \" md:block \\n            w-full md:w-64 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700\\n          \"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                                className: \"p-4 space-y-1\",\n                                children: settingsSections.map((section)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>{\n                                            setActiveSection(section.id);\n                                            setIsMobileMenuOpen(false);\n                                        },\n                                        className: \"\\n                    w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg transition-colors\\n                    \".concat(activeSection === section.id ? \"text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/20\" : \"text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700\", \"\\n                  \"),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                                icon: section.icon,\n                                                className: \"w-5 h-5 \".concat(activeSection === section.id ? \"text-blue-600 dark:text-blue-400\" : \"text-gray-400 dark:text-gray-500\")\n                                            }, void 0, false, {\n                                                fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\app\\\\settings\\\\page.tsx\",\n                                                lineNumber: 85,\n                                                columnNumber: 19\n                                            }, this),\n                                            section.label\n                                        ]\n                                    }, section.id, true, {\n                                        fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\app\\\\settings\\\\page.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 17\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\app\\\\settings\\\\page.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\app\\\\settings\\\\page.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-grow p-6 md:p-8\",\n                            children: renderSettingsContent()\n                        }, void 0, false, {\n                            fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\app\\\\settings\\\\page.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\app\\\\settings\\\\page.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\app\\\\settings\\\\page.tsx\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\app\\\\settings\\\\page.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(SettingsPage, \"SpYXk9QE5iHZQ6GwElDOAiEX+0s=\");\n_c = SettingsPage;\nvar _c;\n$RefreshReg$(_c, \"SettingsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2V0dGluZ3MvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRWlDO0FBQ2dDO0FBTXRCO0FBQ3lCO0FBQ0U7QUFDUTtBQUNKO0FBRTFFLE1BQU1XLG1CQUFtQjtJQUN2QjtRQUFFQyxJQUFJO1FBQVdDLE9BQU87UUFBV0MsTUFBTVoscUVBQU1BO0lBQUM7SUFDaEQ7UUFBRVUsSUFBSTtRQUFZQyxPQUFPO1FBQVlDLE1BQU1YLHFFQUFNQTtJQUFDO0lBQ2xEO1FBQUVTLElBQUk7UUFBaUJDLE9BQU87UUFBaUJDLE1BQU1SLHFFQUFhQTtJQUFDO0lBQ25FO1FBQUVNLElBQUk7UUFBY0MsT0FBTztRQUFjQyxNQUFNVix3RUFBU0E7SUFBQztDQUMxRDtBQUVjLFNBQVNXOztJQUN0QixNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHakIsK0NBQVFBLENBQUM7SUFDbkQsTUFBTSxDQUFDa0Isa0JBQWtCQyxvQkFBb0IsR0FBR25CLCtDQUFRQSxDQUFDO0lBRXpELE1BQU1vQix3QkFBd0I7UUFDNUIsT0FBUUo7WUFDTixLQUFLO2dCQUNILHFCQUFPLDhEQUFDVCw0RUFBZUE7Ozs7O1lBQ3pCLEtBQUs7Z0JBQ0gscUJBQU8sOERBQUNDLDZFQUFnQkE7Ozs7O1lBQzFCLEtBQUs7Z0JBQ0gscUJBQU8sOERBQUNDLGlGQUFvQkE7Ozs7O1lBQzlCLEtBQUs7Z0JBQ0gscUJBQU8sOERBQUNDLCtFQUFrQkE7Ozs7O1lBQzVCO2dCQUNFLE9BQU87UUFDWDtJQUNGO0lBRUEscUJBQ0UsOERBQUNXO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUViLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUFHRCxXQUFVO3NDQUFtRDs7Ozs7O3NDQUtqRSw4REFBQ0U7NEJBQ0NDLFNBQVMsSUFBTU4sb0JBQW9CLENBQUNEOzRCQUNwQ0ksV0FBVTs0QkFDVkksY0FBVztzQ0FFVlIsbUJBQW1CLFVBQVU7Ozs7Ozs7Ozs7Ozs4QkFLbEMsOERBQUNHO29CQUFJQyxXQUFVOztzQ0FFYiw4REFBQ0Q7NEJBQUlDLFdBQVcsaUJBQzBCLE9BQXRDSixtQkFBbUIsVUFBVSxVQUFTO3NDQUd4Qyw0RUFBQ1M7Z0NBQUlMLFdBQVU7MENBQ1pYLGlCQUFpQmlCLEdBQUcsQ0FBQyxDQUFDQyx3QkFDckIsOERBQUNMO3dDQUVDQyxTQUFTOzRDQUNQUixpQkFBaUJZLFFBQVFqQixFQUFFOzRDQUMzQk8sb0JBQW9CO3dDQUN0Qjt3Q0FDQUcsV0FBVywwSUFNUixPQUhDTixrQkFBa0JhLFFBQVFqQixFQUFFLEdBQ3hCLG9FQUNBLDZFQUNMOzswREFHSCw4REFBQ1gsMkVBQWVBO2dEQUNkYSxNQUFNZSxRQUFRZixJQUFJO2dEQUNsQlEsV0FBVyxXQUlWLE9BSENOLGtCQUFrQmEsUUFBUWpCLEVBQUUsR0FDeEIscUNBQ0E7Ozs7Ozs0Q0FHUGlCLFFBQVFoQixLQUFLOzt1Q0F0QlRnQixRQUFRakIsRUFBRTs7Ozs7Ozs7Ozs7Ozs7O3NDQTZCdkIsOERBQUNTOzRCQUFJQyxXQUFVO3NDQUNaRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNYjtHQXBGd0JMO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvc2V0dGluZ3MvcGFnZS50c3g/NDdlOSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IFxuICBmYVVzZXIsXG4gIGZhTG9jayxcbiAgZmFQYWxldHRlLFxuICBmYUJlbGwgYXMgZmFCZWxsUmVndWxhcixcbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCBQcm9maWxlU2V0dGluZ3MgZnJvbSAnQC9jb21wb25lbnRzL3NldHRpbmdzL1Byb2ZpbGVTZXR0aW5ncyc7XG5pbXBvcnQgU2VjdXJpdHlTZXR0aW5ncyBmcm9tICdAL2NvbXBvbmVudHMvc2V0dGluZ3MvU2VjdXJpdHlTZXR0aW5ncyc7XG5pbXBvcnQgTm90aWZpY2F0aW9uU2V0dGluZ3MgZnJvbSAnQC9jb21wb25lbnRzL3NldHRpbmdzL05vdGlmaWNhdGlvblNldHRpbmdzJztcbmltcG9ydCBBcHBlYXJhbmNlU2V0dGluZ3MgZnJvbSAnQC9jb21wb25lbnRzL3NldHRpbmdzL0FwcGVhcmFuY2VTZXR0aW5ncyc7XG5cbmNvbnN0IHNldHRpbmdzU2VjdGlvbnMgPSBbXG4gIHsgaWQ6ICdwcm9maWxlJywgbGFiZWw6ICdQcm9maWxlJywgaWNvbjogZmFVc2VyIH0sXG4gIHsgaWQ6ICdzZWN1cml0eScsIGxhYmVsOiAnU2VjdXJpdHknLCBpY29uOiBmYUxvY2sgfSxcbiAgeyBpZDogJ25vdGlmaWNhdGlvbnMnLCBsYWJlbDogJ05vdGlmaWNhdGlvbnMnLCBpY29uOiBmYUJlbGxSZWd1bGFyIH0sXG4gIHsgaWQ6ICdhcHBlYXJhbmNlJywgbGFiZWw6ICdBcHBlYXJhbmNlJywgaWNvbjogZmFQYWxldHRlIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXR0aW5nc1BhZ2UoKSB7XG4gIGNvbnN0IFthY3RpdmVTZWN0aW9uLCBzZXRBY3RpdmVTZWN0aW9uXSA9IHVzZVN0YXRlKCdwcm9maWxlJyk7XG4gIGNvbnN0IFtpc01vYmlsZU1lbnVPcGVuLCBzZXRJc01vYmlsZU1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCByZW5kZXJTZXR0aW5nc0NvbnRlbnQgPSAoKSA9PiB7XG4gICAgc3dpdGNoIChhY3RpdmVTZWN0aW9uKSB7XG4gICAgICBjYXNlICdwcm9maWxlJzpcbiAgICAgICAgcmV0dXJuIDxQcm9maWxlU2V0dGluZ3MgLz47XG4gICAgICBjYXNlICdzZWN1cml0eSc6XG4gICAgICAgIHJldHVybiA8U2VjdXJpdHlTZXR0aW5ncyAvPjtcbiAgICAgIGNhc2UgJ25vdGlmaWNhdGlvbnMnOlxuICAgICAgICByZXR1cm4gPE5vdGlmaWNhdGlvblNldHRpbmdzIC8+O1xuICAgICAgY2FzZSAnYXBwZWFyYW5jZSc6XG4gICAgICAgIHJldHVybiA8QXBwZWFyYW5jZVNldHRpbmdzIC8+O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctZ3JheS01MCBkYXJrOmJnLWdyYXktOTAwIHB5LTggcHgtNCBzbTpweC02IGxnOnB4LThcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gc3BhY2UteS04XCI+XG4gICAgICAgIHsvKiBQYWdlIEhlYWRlciAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICBBY2NvdW50IFNldHRpbmdzXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICBcbiAgICAgICAgICB7LyogTW9iaWxlIE1lbnUgVG9nZ2xlICovfVxuICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc01vYmlsZU1lbnVPcGVuKCFpc01vYmlsZU1lbnVPcGVuKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1kOmhpZGRlbiBwLTIgLW1yLTIgdGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTQwMCBkYXJrOmhvdmVyOnRleHQtZ3JheS0zMDBcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBzZXR0aW5ncyBtZW51XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aXNNb2JpbGVNZW51T3BlbiA/ICdDbG9zZScgOiAnTWVudSd9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBTZXR0aW5ncyBMYXlvdXQgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBiZy13aGl0ZSBkYXJrOmJnLWdyYXktODAwIHJvdW5kZWQteGwgc2hhZG93LWxnIGJvcmRlciBib3JkZXItZ3JheS0yMDAgZGFyazpib3JkZXItZ3JheS03MDBcIj5cbiAgICAgICAgICB7LyogTmF2aWdhdGlvbiBTaWRlYmFyICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgXG4gICAgICAgICAgICAke2lzTW9iaWxlTWVudU9wZW4gPyAnYmxvY2snIDogJ2hpZGRlbid9IG1kOmJsb2NrIFxuICAgICAgICAgICAgdy1mdWxsIG1kOnctNjQgYm9yZGVyLWIgbWQ6Ym9yZGVyLWItMCBtZDpib3JkZXItciBib3JkZXItZ3JheS0yMDAgZGFyazpib3JkZXItZ3JheS03MDBcbiAgICAgICAgICBgfT5cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwicC00IHNwYWNlLXktMVwiPlxuICAgICAgICAgICAgICB7c2V0dGluZ3NTZWN0aW9ucy5tYXAoKHNlY3Rpb24pID0+IChcbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBrZXk9e3NlY3Rpb24uaWR9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZVNlY3Rpb24oc2VjdGlvbi5pZCk7XG4gICAgICAgICAgICAgICAgICAgIHNldElzTW9iaWxlTWVudU9wZW4oZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YFxuICAgICAgICAgICAgICAgICAgICB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgcHgtNCBweS0yLjUgdGV4dC1zbSBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRyYW5zaXRpb24tY29sb3JzXG4gICAgICAgICAgICAgICAgICAgICR7XG4gICAgICAgICAgICAgICAgICAgICAgYWN0aXZlU2VjdGlvbiA9PT0gc2VjdGlvbi5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyAndGV4dC1ibHVlLTYwMCBiZy1ibHVlLTUwIGRhcms6dGV4dC1ibHVlLTQwMCBkYXJrOmJnLWJsdWUtOTAwLzIwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiAndGV4dC1ncmF5LTcwMCBkYXJrOnRleHQtZ3JheS0yMDAgaG92ZXI6YmctZ3JheS0xMDAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIFxuICAgICAgICAgICAgICAgICAgICBpY29uPXtzZWN0aW9uLmljb259IFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LTUgaC01ICR7XG4gICAgICAgICAgICAgICAgICAgICAgYWN0aXZlU2VjdGlvbiA9PT0gc2VjdGlvbi5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyAndGV4dC1ibHVlLTYwMCBkYXJrOnRleHQtYmx1ZS00MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICd0ZXh0LWdyYXktNDAwIGRhcms6dGV4dC1ncmF5LTUwMCdcbiAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge3NlY3Rpb24ubGFiZWx9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogQ29udGVudCBBcmVhICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93IHAtNiBtZDpwLThcIj5cbiAgICAgICAgICAgIHtyZW5kZXJTZXR0aW5nc0NvbnRlbnQoKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkZvbnRBd2Vzb21lSWNvbiIsImZhVXNlciIsImZhTG9jayIsImZhUGFsZXR0ZSIsImZhQmVsbCIsImZhQmVsbFJlZ3VsYXIiLCJQcm9maWxlU2V0dGluZ3MiLCJTZWN1cml0eVNldHRpbmdzIiwiTm90aWZpY2F0aW9uU2V0dGluZ3MiLCJBcHBlYXJhbmNlU2V0dGluZ3MiLCJzZXR0aW5nc1NlY3Rpb25zIiwiaWQiLCJsYWJlbCIsImljb24iLCJTZXR0aW5nc1BhZ2UiLCJhY3RpdmVTZWN0aW9uIiwic2V0QWN0aXZlU2VjdGlvbiIsImlzTW9iaWxlTWVudU9wZW4iLCJzZXRJc01vYmlsZU1lbnVPcGVuIiwicmVuZGVyU2V0dGluZ3NDb250ZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwiYXJpYS1sYWJlbCIsIm5hdiIsIm1hcCIsInNlY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/settings/page.tsx\n"));

/***/ })

});