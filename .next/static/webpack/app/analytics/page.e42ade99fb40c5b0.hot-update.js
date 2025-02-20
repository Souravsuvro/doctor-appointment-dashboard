"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/analytics/page",{

/***/ "(app-pages-browser)/./src/app/analytics/page.tsx":
/*!************************************!*\
  !*** ./src/app/analytics/page.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AnalyticsPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _components_analytics_PerformanceMetrics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/analytics/PerformanceMetrics */ \"(app-pages-browser)/./src/components/analytics/PerformanceMetrics.tsx\");\n/* harmony import */ var _components_analytics_AppointmentStats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/analytics/AppointmentStats */ \"(app-pages-browser)/./src/components/analytics/AppointmentStats.tsx\");\n/* harmony import */ var _components_analytics_RevenueChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/analytics/RevenueChart */ \"(app-pages-browser)/./src/components/analytics/RevenueChart.tsx\");\n/* harmony import */ var _components_analytics_PatientDemographics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/analytics/PatientDemographics */ \"(app-pages-browser)/./src/components/analytics/PatientDemographics.tsx\");\n/* harmony import */ var _components_analytics_TreatmentInsights__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/analytics/TreatmentInsights */ \"(app-pages-browser)/./src/components/analytics/TreatmentInsights.tsx\");\n/* harmony import */ var _components_PerformanceOverview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/PerformanceOverview */ \"(app-pages-browser)/./src/components/PerformanceOverview.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n// Date range options\nconst dateRanges = [\n    {\n        label: \"Last 7 Days\",\n        value: \"7d\"\n    },\n    {\n        label: \"Last 30 Days\",\n        value: \"30d\"\n    },\n    {\n        label: \"Last 3 Months\",\n        value: \"3m\"\n    },\n    {\n        label: \"Last 12 Months\",\n        value: \"12m\"\n    },\n    {\n        label: \"Year to Date\",\n        value: \"ytd\"\n    }\n];\nfunction AnalyticsPage() {\n    _s();\n    const [selectedDateRange, setSelectedDateRange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"30d\");\n    const [isFilterOpen, setIsFilterOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4 lg:p-6\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-7xl mx-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-2xl font-semibold text-gray-900 dark:text-white\",\n                            children: \"Analytics Dashboard\"\n                        }, void 0, false, {\n                            fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\app\\\\analytics\\\\page.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center gap-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                    value: selectedDateRange,\n                                    onChange: (e)=>setSelectedDateRange(e.target.value),\n                                    className: \"px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500\",\n                                    children: dateRanges.map((range)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: range.value,\n                                            children: range.label\n                                        }, range.value, false, {\n                                            fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\app\\\\analytics\\\\page.tsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 17\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\app\\\\analytics\\\\page.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>setIsFilterOpen(!isFilterOpen),\n                                    className: \"p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors\",\n                                    \"aria-label\": \"Filter analytics\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faFilter,\n                                        className: \"w-5 h-5 text-gray-600 dark:text-gray-400\"\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\app\\\\analytics\\\\page.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\app\\\\analytics\\\\page.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors\",\n                                    \"aria-label\": \"Download report\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faDownload,\n                                        className: \"w-5 h-5 text-gray-600 dark:text-gray-400\"\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\app\\\\analytics\\\\page.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\app\\\\analytics\\\\page.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\app\\\\analytics\\\\page.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\app\\\\analytics\\\\page.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"space-y-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white dark:bg-[#1a1f37] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PerformanceOverview__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\app\\\\analytics\\\\page.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\app\\\\analytics\\\\page.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"lg:col-span-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_analytics_PerformanceMetrics__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                dateRange: selectedDateRange\n                            }, void 0, false, {\n                                fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\app\\\\analytics\\\\page.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\app\\\\analytics\\\\page.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white dark:bg-[#1a1f37] rounded-lg shadow-sm\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_analytics_AppointmentStats__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                dateRange: selectedDateRange\n                            }, void 0, false, {\n                                fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\app\\\\analytics\\\\page.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\app\\\\analytics\\\\page.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_analytics_RevenueChart__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                dateRange: selectedDateRange\n                            }, void 0, false, {\n                                fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\app\\\\analytics\\\\page.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\app\\\\analytics\\\\page.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_analytics_PatientDemographics__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                dateRange: selectedDateRange\n                            }, void 0, false, {\n                                fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\app\\\\analytics\\\\page.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\app\\\\analytics\\\\page.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_analytics_TreatmentInsights__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                dateRange: selectedDateRange\n                            }, void 0, false, {\n                                fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\app\\\\analytics\\\\page.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\app\\\\analytics\\\\page.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\app\\\\analytics\\\\page.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\app\\\\analytics\\\\page.tsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"G:\\\\CascadeProjects\\\\doctor-appointment-dashboard\\\\src\\\\app\\\\analytics\\\\page.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(AnalyticsPage, \"AQYEfEOIZgiBpNcMKG9/JOa+y0o=\");\n_c = AnalyticsPage;\nvar _c;\n$RefreshReg$(_c, \"AnalyticsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYW5hbHl0aWNzL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWlDO0FBQ2dDO0FBSXRCO0FBQ2dDO0FBQ0o7QUFDUjtBQUNjO0FBQ0o7QUFDTjtBQUVuRSxxQkFBcUI7QUFDckIsTUFBTVUsYUFBYTtJQUNqQjtRQUFFQyxPQUFPO1FBQWVDLE9BQU87SUFBSztJQUNwQztRQUFFRCxPQUFPO1FBQWdCQyxPQUFPO0lBQU07SUFDdEM7UUFBRUQsT0FBTztRQUFpQkMsT0FBTztJQUFLO0lBQ3RDO1FBQUVELE9BQU87UUFBa0JDLE9BQU87SUFBTTtJQUN4QztRQUFFRCxPQUFPO1FBQWdCQyxPQUFPO0lBQU07Q0FDdkM7QUFFYyxTQUFTQzs7SUFDdEIsTUFBTSxDQUFDQyxtQkFBbUJDLHFCQUFxQixHQUFHZiwrQ0FBUUEsQ0FBQztJQUMzRCxNQUFNLENBQUNnQixjQUFjQyxnQkFBZ0IsR0FBR2pCLCtDQUFRQSxDQUFDO0lBRWpELHFCQUNFLDhEQUFDa0I7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBRWIsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0M7NEJBQUdELFdBQVU7c0NBQXVEOzs7Ozs7c0NBR3JFLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNFO29DQUNDVCxPQUFPRTtvQ0FDUFEsVUFBVSxDQUFDQyxJQUFNUixxQkFBcUJRLEVBQUVDLE1BQU0sQ0FBQ1osS0FBSztvQ0FDcERPLFdBQVU7OENBRVRULFdBQVdlLEdBQUcsQ0FBQyxDQUFDQyxzQkFDZiw4REFBQ0M7NENBQXlCZixPQUFPYyxNQUFNZCxLQUFLO3NEQUN6Q2MsTUFBTWYsS0FBSzsyQ0FERGUsTUFBTWQsS0FBSzs7Ozs7Ozs7Ozs4Q0FLNUIsOERBQUNnQjtvQ0FDQ0MsU0FBUyxJQUFNWixnQkFBZ0IsQ0FBQ0Q7b0NBQ2hDRyxXQUFVO29DQUNWVyxjQUFXOzhDQUVYLDRFQUFDN0IsMkVBQWVBO3dDQUNkOEIsTUFBTTdCLHVFQUFRQTt3Q0FDZGlCLFdBQVU7Ozs7Ozs7Ozs7OzhDQUdkLDhEQUFDUztvQ0FDQ1QsV0FBVTtvQ0FDVlcsY0FBVzs4Q0FFWCw0RUFBQzdCLDJFQUFlQTt3Q0FDZDhCLE1BQU01Qix5RUFBVUE7d0NBQ2hCZ0IsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBT2xCLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBRWIsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDVix1RUFBbUJBOzs7Ozs7Ozs7O3NDQUl0Qiw4REFBQ1M7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNmLGdGQUFrQkE7Z0NBQUM0QixXQUFXbEI7Ozs7Ozs7Ozs7O3NDQUlqQyw4REFBQ0k7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNkLDhFQUFnQkE7Z0NBQUMyQixXQUFXbEI7Ozs7Ozs7Ozs7O3NDQUkvQiw4REFBQ0k7c0NBQ0MsNEVBQUNaLDBFQUFZQTtnQ0FBQzBCLFdBQVdsQjs7Ozs7Ozs7Ozs7c0NBSTNCLDhEQUFDSTtzQ0FDQyw0RUFBQ1gsaUZBQW1CQTtnQ0FBQ3lCLFdBQVdsQjs7Ozs7Ozs7Ozs7c0NBSWxDLDhEQUFDSTtzQ0FDQyw0RUFBQ1YsK0VBQWlCQTtnQ0FBQ3dCLFdBQVdsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU0xQztHQWpGd0JEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYW5hbHl0aWNzL3BhZ2UudHN4PzdhYTQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBcbiAgZmFGaWx0ZXIsXG4gIGZhRG93bmxvYWRcbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCBQZXJmb3JtYW5jZU1ldHJpY3MgZnJvbSAnQC9jb21wb25lbnRzL2FuYWx5dGljcy9QZXJmb3JtYW5jZU1ldHJpY3MnO1xuaW1wb3J0IEFwcG9pbnRtZW50U3RhdHMgZnJvbSAnQC9jb21wb25lbnRzL2FuYWx5dGljcy9BcHBvaW50bWVudFN0YXRzJztcbmltcG9ydCBSZXZlbnVlQ2hhcnQgZnJvbSAnQC9jb21wb25lbnRzL2FuYWx5dGljcy9SZXZlbnVlQ2hhcnQnO1xuaW1wb3J0IFBhdGllbnREZW1vZ3JhcGhpY3MgZnJvbSAnQC9jb21wb25lbnRzL2FuYWx5dGljcy9QYXRpZW50RGVtb2dyYXBoaWNzJztcbmltcG9ydCBUcmVhdG1lbnRJbnNpZ2h0cyBmcm9tICdAL2NvbXBvbmVudHMvYW5hbHl0aWNzL1RyZWF0bWVudEluc2lnaHRzJztcbmltcG9ydCBQZXJmb3JtYW5jZU92ZXJ2aWV3IGZyb20gJ0AvY29tcG9uZW50cy9QZXJmb3JtYW5jZU92ZXJ2aWV3JztcblxuLy8gRGF0ZSByYW5nZSBvcHRpb25zXG5jb25zdCBkYXRlUmFuZ2VzID0gW1xuICB7IGxhYmVsOiAnTGFzdCA3IERheXMnLCB2YWx1ZTogJzdkJyB9LFxuICB7IGxhYmVsOiAnTGFzdCAzMCBEYXlzJywgdmFsdWU6ICczMGQnIH0sXG4gIHsgbGFiZWw6ICdMYXN0IDMgTW9udGhzJywgdmFsdWU6ICczbScgfSxcbiAgeyBsYWJlbDogJ0xhc3QgMTIgTW9udGhzJywgdmFsdWU6ICcxMm0nIH0sXG4gIHsgbGFiZWw6ICdZZWFyIHRvIERhdGUnLCB2YWx1ZTogJ3l0ZCcgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFuYWx5dGljc1BhZ2UoKSB7XG4gIGNvbnN0IFtzZWxlY3RlZERhdGVSYW5nZSwgc2V0U2VsZWN0ZWREYXRlUmFuZ2VdID0gdXNlU3RhdGUoJzMwZCcpO1xuICBjb25zdCBbaXNGaWx0ZXJPcGVuLCBzZXRJc0ZpbHRlck9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgbGc6cC02XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvXCI+XG4gICAgICAgIHsvKiBQYWdlIEhlYWRlciAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02IGZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgc206aXRlbXMtY2VudGVyIHNtOmp1c3RpZnktYmV0d2VlbiBnYXAtNFwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICBBbmFseXRpY3MgRGFzaGJvYXJkXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZERhdGVSYW5nZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWxlY3RlZERhdGVSYW5nZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTMgcHktMiByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItZ3JheS0yMDAgZGFyazpib3JkZXItZ3JheS03MDAgYmctd2hpdGUgZGFyazpiZy1ncmF5LTgwMCB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZSB0ZXh0LXNtIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWJsdWUtNTAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2RhdGVSYW5nZXMubWFwKChyYW5nZSkgPT4gKFxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtyYW5nZS52YWx1ZX0gdmFsdWU9e3JhbmdlLnZhbHVlfT5cbiAgICAgICAgICAgICAgICAgIHtyYW5nZS5sYWJlbH1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNGaWx0ZXJPcGVuKCFpc0ZpbHRlck9wZW4pfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIuNSByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItZ3JheS0yMDAgZGFyazpib3JkZXItZ3JheS03MDAgaG92ZXI6YmctZ3JheS0xMDAgZGFyazpob3ZlcjpiZy1ncmF5LTgwMCB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJGaWx0ZXIgYW5hbHl0aWNzXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICAgIGljb249e2ZhRmlsdGVyfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS00MDBcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMi41IHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBkYXJrOmJvcmRlci1ncmF5LTcwMCBob3ZlcjpiZy1ncmF5LTEwMCBkYXJrOmhvdmVyOmJnLWdyYXktODAwIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkRvd25sb2FkIHJlcG9ydFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgICAgICBpY29uPXtmYURvd25sb2FkfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS00MDBcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBBbmFseXRpY3MgR3JpZCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cbiAgICAgICAgICB7LyogUGVyZm9ybWFuY2UgT3ZlcnZpZXcgU2VjdGlvbiAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIGRhcms6YmctWyMxYTFmMzddIHJvdW5kZWQtbGcgc2hhZG93LXNtIGJvcmRlciBib3JkZXItZ3JheS0yMDAgZGFyazpib3JkZXItZ3JheS03MDAgcC02XCI+XG4gICAgICAgICAgICA8UGVyZm9ybWFuY2VPdmVydmlldyAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIFBlcmZvcm1hbmNlIE1ldHJpY3MgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpjb2wtc3Bhbi0yXCI+XG4gICAgICAgICAgICA8UGVyZm9ybWFuY2VNZXRyaWNzIGRhdGVSYW5nZT17c2VsZWN0ZWREYXRlUmFuZ2V9IC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogQXBwb2ludG1lbnQgU3RhdHMgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLXdoaXRlIGRhcms6YmctWyMxYTFmMzddIHJvdW5kZWQtbGcgc2hhZG93LXNtJz5cbiAgICAgICAgICAgIDxBcHBvaW50bWVudFN0YXRzIGRhdGVSYW5nZT17c2VsZWN0ZWREYXRlUmFuZ2V9IC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogUmV2ZW51ZSBDaGFydCAqL31cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFJldmVudWVDaGFydCBkYXRlUmFuZ2U9e3NlbGVjdGVkRGF0ZVJhbmdlfSAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIFBhdGllbnQgRGVtb2dyYXBoaWNzICovfVxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8UGF0aWVudERlbW9ncmFwaGljcyBkYXRlUmFuZ2U9e3NlbGVjdGVkRGF0ZVJhbmdlfSAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIFRyZWF0bWVudCBJbnNpZ2h0cyAqL31cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFRyZWF0bWVudEluc2lnaHRzIGRhdGVSYW5nZT17c2VsZWN0ZWREYXRlUmFuZ2V9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJGb250QXdlc29tZUljb24iLCJmYUZpbHRlciIsImZhRG93bmxvYWQiLCJQZXJmb3JtYW5jZU1ldHJpY3MiLCJBcHBvaW50bWVudFN0YXRzIiwiUmV2ZW51ZUNoYXJ0IiwiUGF0aWVudERlbW9ncmFwaGljcyIsIlRyZWF0bWVudEluc2lnaHRzIiwiUGVyZm9ybWFuY2VPdmVydmlldyIsImRhdGVSYW5nZXMiLCJsYWJlbCIsInZhbHVlIiwiQW5hbHl0aWNzUGFnZSIsInNlbGVjdGVkRGF0ZVJhbmdlIiwic2V0U2VsZWN0ZWREYXRlUmFuZ2UiLCJpc0ZpbHRlck9wZW4iLCJzZXRJc0ZpbHRlck9wZW4iLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInNlbGVjdCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm1hcCIsInJhbmdlIiwib3B0aW9uIiwiYnV0dG9uIiwib25DbGljayIsImFyaWEtbGFiZWwiLCJpY29uIiwiZGF0ZVJhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/analytics/page.tsx\n"));

/***/ })

});