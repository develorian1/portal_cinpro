module.exports = [
"[project]/components/profiles/director/finanzas/AgingSummary.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "agingSummary": "AgingSummary-module__A9WT8G__agingSummary",
  "amountLabel": "AgingSummary-module__A9WT8G__amountLabel",
  "bar": "AgingSummary-module__A9WT8G__bar",
  "barContainer": "AgingSummary-module__A9WT8G__barContainer",
  "barGroup": "AgingSummary-module__A9WT8G__barGroup",
  "barLabel": "AgingSummary-module__A9WT8G__barLabel",
  "chart": "AgingSummary-module__A9WT8G__chart",
  "header": "AgingSummary-module__A9WT8G__header",
  "metric": "AgingSummary-module__A9WT8G__metric",
  "metricLabel": "AgingSummary-module__A9WT8G__metricLabel",
  "metricValue": "AgingSummary-module__A9WT8G__metricValue",
  "metrics": "AgingSummary-module__A9WT8G__metrics",
  "overdue": "AgingSummary-module__A9WT8G__overdue",
  "overdueBar": "AgingSummary-module__A9WT8G__overdueBar",
  "rangeLabel": "AgingSummary-module__A9WT8G__rangeLabel",
  "title": "AgingSummary-module__A9WT8G__title",
});
}),
"[project]/components/profiles/director/finanzas/AgingSummary.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AgingSummary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$AgingSummary$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/profiles/director/finanzas/AgingSummary.module.css [app-ssr] (css module)");
'use client';
;
;
function AgingSummary() {
    // Mock data - replace with real data from API
    const agingData = {
        '0-30': {
            total: 250000,
            overdue: 0
        },
        '31-60': {
            total: 120000,
            overdue: 45000
        },
        '60+': {
            total: 53000,
            overdue: 53000
        }
    };
    const totalPending = Object.values(agingData).reduce((sum, item)=>sum + item.total, 0);
    const totalOverdue = Object.values(agingData).reduce((sum, item)=>sum + item.overdue, 0);
    const maxValue = Math.max(...Object.values(agingData).map((item)=>item.total));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$AgingSummary$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].agingSummary,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$AgingSummary$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$AgingSummary$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                        children: "Resumen de Antigüedad"
                    }, void 0, false, {
                        fileName: "[project]/components/profiles/director/finanzas/AgingSummary.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$AgingSummary$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metrics,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$AgingSummary$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metric,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$AgingSummary$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metricLabel,
                                        children: "Total Pendiente"
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/director/finanzas/AgingSummary.tsx",
                                        lineNumber: 24,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$AgingSummary$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metricValue,
                                        children: [
                                            "$",
                                            totalPending.toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/profiles/director/finanzas/AgingSummary.tsx",
                                        lineNumber: 25,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/profiles/director/finanzas/AgingSummary.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$AgingSummary$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metric,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$AgingSummary$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metricLabel,
                                        children: "Vencido"
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/director/finanzas/AgingSummary.tsx",
                                        lineNumber: 28,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$AgingSummary$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metricValue} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$AgingSummary$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].overdue}`,
                                        children: [
                                            "$",
                                            totalOverdue.toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/profiles/director/finanzas/AgingSummary.tsx",
                                        lineNumber: 29,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/profiles/director/finanzas/AgingSummary.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/profiles/director/finanzas/AgingSummary.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/profiles/director/finanzas/AgingSummary.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$AgingSummary$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chart,
                children: Object.entries(agingData).map(([range, data])=>{
                    const height = data.total / maxValue * 100;
                    const overdueHeight = data.overdue > 0 ? data.overdue / maxValue * 100 : 0;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$AgingSummary$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$AgingSummary$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barContainer,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$AgingSummary$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bar,
                                    style: {
                                        height: `${height}%`
                                    },
                                    title: `Total: $${data.total.toLocaleString()}`,
                                    children: data.overdue > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$AgingSummary$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].overdueBar,
                                        style: {
                                            height: `${overdueHeight}%`
                                        },
                                        title: `Vencido: $${data.overdue.toLocaleString()}`
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/director/finanzas/AgingSummary.tsx",
                                        lineNumber: 50,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/finanzas/AgingSummary.tsx",
                                    lineNumber: 44,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/profiles/director/finanzas/AgingSummary.tsx",
                                lineNumber: 43,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$AgingSummary$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barLabel,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$AgingSummary$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rangeLabel,
                                        children: [
                                            range,
                                            " días"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/profiles/director/finanzas/AgingSummary.tsx",
                                        lineNumber: 59,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$AgingSummary$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].amountLabel,
                                        children: [
                                            "$",
                                            data.total.toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/profiles/director/finanzas/AgingSummary.tsx",
                                        lineNumber: 60,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/profiles/director/finanzas/AgingSummary.tsx",
                                lineNumber: 58,
                                columnNumber: 15
                            }, this)
                        ]
                    }, range, true, {
                        fileName: "[project]/components/profiles/director/finanzas/AgingSummary.tsx",
                        lineNumber: 42,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/profiles/director/finanzas/AgingSummary.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/profiles/director/finanzas/AgingSummary.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/profiles/director/finanzas/DebtorsList.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "amount": "DebtorsList-module__h954_a__amount",
  "amountOverdue": "DebtorsList-module__h954_a__amountOverdue",
  "clientLink": "DebtorsList-module__h954_a__clientLink",
  "daysLate": "DebtorsList-module__h954_a__daysLate",
  "daysOnTime": "DebtorsList-module__h954_a__daysOnTime",
  "debtorsList": "DebtorsList-module__h954_a__debtorsList",
  "groupBadge": "DebtorsList-module__h954_a__groupBadge",
  "header": "DebtorsList-module__h954_a__header",
  "notifyBtn": "DebtorsList-module__h954_a__notifyBtn",
  "tableContainer": "DebtorsList-module__h954_a__tableContainer",
  "title": "DebtorsList-module__h954_a__title",
});
}),
"[project]/components/profiles/director/finanzas/DebtorsList.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DebtorsList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/shared/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$Table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__ = __turbopack_context__.i("[project]/components/shared/Table.tsx [app-ssr] (ecmascript) <export default as Table>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$DebtorsList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/profiles/director/finanzas/DebtorsList.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
function DebtorsList() {
    // Mock data - replace with real data from API
    const [debtors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: '1',
            clientName: 'Hospital General del Norte',
            clientId: 'client-001',
            group: 'Medical',
            amountDue: 125000,
            daysLate: 45,
            isOverdue: true
        },
        {
            id: '2',
            clientName: 'Clínica San José',
            clientId: 'client-002',
            group: 'Medical',
            amountDue: 85000,
            daysLate: 0,
            isOverdue: false
        },
        {
            id: '3',
            clientName: 'Corporación Industrial SA',
            clientId: 'client-003',
            group: 'Industrial',
            amountDue: 200000,
            daysLate: 72,
            isOverdue: true
        },
        {
            id: '4',
            clientName: 'Grupo Educativo ABC',
            clientId: 'client-004',
            group: 'Education',
            amountDue: 95000,
            daysLate: 15,
            isOverdue: false
        }
    ]);
    const handleNotify = (debtorId)=>{
        // TODO: Implement notification logic
        console.log('Notify debtor:', debtorId);
        alert(`Notificación enviada al cliente ${debtorId}`);
    };
    const columns = [
        {
            key: 'client',
            header: 'Cliente',
            render: (debtor)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: `/clientes/${debtor.clientId}`,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$DebtorsList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].clientLink,
                    children: debtor.clientName
                }, void 0, false, {
                    fileName: "[project]/components/profiles/director/finanzas/DebtorsList.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
        },
        {
            key: 'group',
            header: 'Grupo',
            render: (debtor)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$DebtorsList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].groupBadge,
                    children: debtor.group
                }, void 0, false, {
                    fileName: "[project]/components/profiles/director/finanzas/DebtorsList.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
        },
        {
            key: 'amount',
            header: 'Monto Pendiente',
            render: (debtor)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: debtor.isOverdue ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$DebtorsList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].amountOverdue : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$DebtorsList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].amount,
                    children: [
                        "$",
                        debtor.amountDue.toLocaleString()
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/profiles/director/finanzas/DebtorsList.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this)
        },
        {
            key: 'daysLate',
            header: 'Días de Retraso',
            render: (debtor)=>debtor.daysLate > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$DebtorsList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].daysLate,
                    children: [
                        debtor.daysLate,
                        " días"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/profiles/director/finanzas/DebtorsList.tsx",
                    lineNumber: 95,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$DebtorsList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].daysOnTime,
                    children: "Al día"
                }, void 0, false, {
                    fileName: "[project]/components/profiles/director/finanzas/DebtorsList.tsx",
                    lineNumber: 97,
                    columnNumber: 11
                }, this)
        },
        {
            key: 'action',
            header: 'Acción',
            render: (debtor)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$DebtorsList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].notifyBtn,
                    onClick: (e)=>{
                        e.stopPropagation();
                        handleNotify(debtor.id);
                    },
                    children: "Notificar"
                }, void 0, false, {
                    fileName: "[project]/components/profiles/director/finanzas/DebtorsList.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$DebtorsList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].debtorsList,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$Table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__["Table"], {
            data: debtors,
            columns: columns,
            keyExtractor: (debtor)=>debtor.id,
            containerClassName: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$DebtorsList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tableContainer
        }, void 0, false, {
            fileName: "[project]/components/profiles/director/finanzas/DebtorsList.tsx",
            lineNumber: 119,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/profiles/director/finanzas/DebtorsList.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/profiles/director/finanzas/CommissionQueue.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "approveBtn": "CommissionQueue-module__hmKMYa__approveBtn",
  "checkbox": "CommissionQueue-module__hmKMYa__checkbox",
  "commissionQueue": "CommissionQueue-module__hmKMYa__commissionQueue",
  "footer": "CommissionQueue-module__hmKMYa__footer",
  "footerInfo": "CommissionQueue-module__hmKMYa__footerInfo",
  "header": "CommissionQueue-module__hmKMYa__header",
  "priorityBadge": "CommissionQueue-module__hmKMYa__priorityBadge",
  "selectedCount": "CommissionQueue-module__hmKMYa__selectedCount",
  "staffInfo": "CommissionQueue-module__hmKMYa__staffInfo",
  "staffName": "CommissionQueue-module__hmKMYa__staffName",
  "staffRole": "CommissionQueue-module__hmKMYa__staffRole",
  "statusBadge": "CommissionQueue-module__hmKMYa__statusBadge",
  "tableContainer": "CommissionQueue-module__hmKMYa__tableContainer",
  "title": "CommissionQueue-module__hmKMYa__title",
  "totalOwed": "CommissionQueue-module__hmKMYa__totalOwed",
  "totalSelected": "CommissionQueue-module__hmKMYa__totalSelected",
});
}),
"[project]/components/profiles/director/finanzas/CommissionQueue.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CommissionQueue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/shared/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$Table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__ = __turbopack_context__.i("[project]/components/shared/Table.tsx [app-ssr] (ecmascript) <export default as Table>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$CommissionQueue$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/profiles/director/finanzas/CommissionQueue.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
function CommissionQueue() {
    // Mock data - replace with real data from API
    const [commissions, setCommissions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: '1',
            staffName: 'María González',
            staffRole: 'Gerente de Proyecto',
            client: 'Hospital General del Norte',
            baseAmount: 250000,
            commissionRate: 0.15,
            totalOwed: 37500,
            status: 'pending'
        },
        {
            id: '2',
            staffName: 'Carlos Ramírez',
            staffRole: 'Consultor Senior',
            client: 'Clínica San José',
            baseAmount: 180000,
            commissionRate: 0.12,
            totalOwed: 21600,
            status: 'pending'
        },
        {
            id: '3',
            staffName: 'Ana Martínez',
            staffRole: 'Especialista',
            client: 'Corporación Industrial SA',
            baseAmount: 320000,
            commissionRate: 0.18,
            totalOwed: 57600,
            status: 'pending'
        }
    ]);
    const [selectedCommissions, setSelectedCommissions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const toggleSelection = (id)=>{
        const newSelection = new Set(selectedCommissions);
        if (newSelection.has(id)) {
            newSelection.delete(id);
        } else {
            newSelection.add(id);
        }
        setSelectedCommissions(newSelection);
    };
    const toggleSelectAll = ()=>{
        if (selectedCommissions.size === commissions.length) {
            setSelectedCommissions(new Set());
        } else {
            setSelectedCommissions(new Set(commissions.map((c)=>c.id)));
        }
    };
    const handleApproveAndPay = ()=>{
        if (selectedCommissions.size === 0) {
            alert('Por favor selecciona al menos una comisión');
            return;
        }
        // TODO: Implement approval and payment logic
        console.log('Approve and pay:', Array.from(selectedCommissions));
        alert(`Aprobadas y marcadas como pagadas: ${selectedCommissions.size} comisiones`);
        // Remove approved commissions
        setCommissions(commissions.filter((c)=>!selectedCommissions.has(c.id)));
        setSelectedCommissions(new Set());
    };
    const totalSelected = Array.from(selectedCommissions).reduce((sum, id)=>{
        const commission = commissions.find((c)=>c.id === id);
        return sum + (commission?.totalOwed || 0);
    }, 0);
    const columns = [
        {
            key: 'checkbox',
            header: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "checkbox",
                    checked: selectedCommissions.size === commissions.length && commissions.length > 0,
                    onChange: toggleSelectAll,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$CommissionQueue$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].checkbox
                }, void 0, false, {
                    fileName: "[project]/components/profiles/director/finanzas/CommissionQueue.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this),
            render: (commission)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "checkbox",
                    checked: selectedCommissions.has(commission.id),
                    onChange: ()=>toggleSelection(commission.id),
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$CommissionQueue$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].checkbox
                }, void 0, false, {
                    fileName: "[project]/components/profiles/director/finanzas/CommissionQueue.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this)
        },
        {
            key: 'staff',
            header: 'Personal',
            render: (commission)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$CommissionQueue$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].staffInfo,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$CommissionQueue$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].staffName,
                            children: commission.staffName
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/director/finanzas/CommissionQueue.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$CommissionQueue$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].staffRole,
                            children: commission.staffRole
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/director/finanzas/CommissionQueue.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/profiles/director/finanzas/CommissionQueue.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this)
        },
        {
            key: 'client',
            header: 'Cliente',
            render: (commission)=>commission.client
        },
        {
            key: 'baseAmount',
            header: 'Monto Base',
            render: (commission)=>`$${commission.baseAmount.toLocaleString()}`
        },
        {
            key: 'commissionRate',
            header: '% Comisión',
            render: (commission)=>`${(commission.commissionRate * 100).toFixed(0)}%`
        },
        {
            key: 'totalOwed',
            header: 'Total a Pagar',
            render: (commission)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$CommissionQueue$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].totalOwed,
                    children: [
                        "$",
                        commission.totalOwed.toLocaleString()
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/profiles/director/finanzas/CommissionQueue.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, this)
        },
        {
            key: 'status',
            header: 'Estado',
            render: (commission)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$CommissionQueue$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusBadge,
                    children: commission.status
                }, void 0, false, {
                    fileName: "[project]/components/profiles/director/finanzas/CommissionQueue.tsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, this)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$CommissionQueue$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].commissionQueue,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$Table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__["Table"], {
                data: commissions,
                columns: columns,
                keyExtractor: (commission)=>commission.id,
                containerClassName: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$CommissionQueue$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tableContainer
            }, void 0, false, {
                fileName: "[project]/components/profiles/director/finanzas/CommissionQueue.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this),
            commissions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$CommissionQueue$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$CommissionQueue$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footerInfo,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$CommissionQueue$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].selectedCount,
                                children: [
                                    selectedCommissions.size,
                                    " de ",
                                    commissions.length,
                                    " seleccionadas"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/profiles/director/finanzas/CommissionQueue.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this),
                            selectedCommissions.size > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$CommissionQueue$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].totalSelected,
                                children: [
                                    "Total: $",
                                    totalSelected.toLocaleString()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/profiles/director/finanzas/CommissionQueue.tsx",
                                lineNumber: 170,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/profiles/director/finanzas/CommissionQueue.tsx",
                        lineNumber: 165,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$CommissionQueue$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].approveBtn,
                        onClick: handleApproveAndPay,
                        disabled: selectedCommissions.size === 0,
                        children: "Aprobar y Marcar como Pagado"
                    }, void 0, false, {
                        fileName: "[project]/components/profiles/director/finanzas/CommissionQueue.tsx",
                        lineNumber: 175,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/profiles/director/finanzas/CommissionQueue.tsx",
                lineNumber: 164,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/profiles/director/finanzas/CommissionQueue.tsx",
        lineNumber: 155,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/profiles/director/finanzas/FirmExpenses.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "emptyState": "FirmExpenses-module__Q4f64q__emptyState",
  "expenseAmount": "FirmExpenses-module__Q4f64q__expenseAmount",
  "expenseDate": "FirmExpenses-module__Q4f64q__expenseDate",
  "expenseDescription": "FirmExpenses-module__Q4f64q__expenseDescription",
  "expenseInfo": "FirmExpenses-module__Q4f64q__expenseInfo",
  "expenseItem": "FirmExpenses-module__Q4f64q__expenseItem",
  "expenseMeta": "FirmExpenses-module__Q4f64q__expenseMeta",
  "expenseType": "FirmExpenses-module__Q4f64q__expenseType",
  "expensesList": "FirmExpenses-module__Q4f64q__expensesList",
  "firmExpenses": "FirmExpenses-module__Q4f64q__firmExpenses",
  "header": "FirmExpenses-module__Q4f64q__header",
  "periodField": "FirmExpenses-module__Q4f64q__periodField",
  "periodSelect": "FirmExpenses-module__Q4f64q__periodSelect",
  "periodSelector": "FirmExpenses-module__Q4f64q__periodSelector",
  "title": "FirmExpenses-module__Q4f64q__title",
  "total": "FirmExpenses-module__Q4f64q__total",
  "totalAmount": "FirmExpenses-module__Q4f64q__totalAmount",
  "totalLabel": "FirmExpenses-module__Q4f64q__totalLabel",
});
}),
"[project]/components/profiles/director/finanzas/FirmExpenses.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FirmExpenses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$FirmExpenses$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/profiles/director/finanzas/FirmExpenses.module.css [app-ssr] (css module)");
'use client';
;
;
;
function FirmExpenses() {
    // Mock data - replace with real data from API
    const allExpenses = [
        // Enero 2024
        {
            id: '1',
            description: 'Renta Oficina - Enero',
            type: 'Renta',
            amount: 45000,
            date: '2024-01-15',
            cfdiType: 'E'
        },
        {
            id: '2',
            description: 'Suscripción Software - Q1',
            type: 'Software',
            amount: 12000,
            date: '2024-01-20',
            cfdiType: 'E'
        },
        {
            id: '3',
            description: 'Servicios de Internet y Teléfono',
            type: 'Servicios',
            amount: 3500,
            date: '2024-01-25',
            cfdiType: 'E'
        },
        {
            id: '4',
            description: 'Material de Oficina',
            type: 'Suministros',
            amount: 8500,
            date: '2024-01-28',
            cfdiType: 'E'
        },
        // Febrero 2024
        {
            id: '5',
            description: 'Renta Oficina - Febrero',
            type: 'Renta',
            amount: 45000,
            date: '2024-02-15',
            cfdiType: 'E'
        },
        {
            id: '6',
            description: 'Servicios de Internet y Teléfono',
            type: 'Servicios',
            amount: 3500,
            date: '2024-02-25',
            cfdiType: 'E'
        },
        {
            id: '7',
            description: 'Mantenimiento Equipos',
            type: 'Mantenimiento',
            amount: 12500,
            date: '2024-02-10',
            cfdiType: 'E'
        },
        {
            id: '8',
            description: 'Seguro de Oficina',
            type: 'Seguros',
            amount: 8500,
            date: '2024-02-20',
            cfdiType: 'E'
        },
        // Marzo 2024
        {
            id: '9',
            description: 'Renta Oficina - Marzo',
            type: 'Renta',
            amount: 45000,
            date: '2024-03-15',
            cfdiType: 'E'
        },
        {
            id: '10',
            description: 'Servicios de Internet y Teléfono',
            type: 'Servicios',
            amount: 3500,
            date: '2024-03-25',
            cfdiType: 'E'
        },
        {
            id: '11',
            description: 'Capacitación Personal',
            type: 'Capacitación',
            amount: 18000,
            date: '2024-03-05',
            cfdiType: 'E'
        },
        {
            id: '12',
            description: 'Publicidad y Marketing',
            type: 'Marketing',
            amount: 22000,
            date: '2024-03-18',
            cfdiType: 'E'
        },
        // Abril 2024
        {
            id: '13',
            description: 'Renta Oficina - Abril',
            type: 'Renta',
            amount: 45000,
            date: '2024-04-15',
            cfdiType: 'E'
        },
        {
            id: '14',
            description: 'Servicios de Internet y Teléfono',
            type: 'Servicios',
            amount: 3500,
            date: '2024-04-25',
            cfdiType: 'E'
        },
        {
            id: '15',
            description: 'Limpieza y Aseo',
            type: 'Servicios',
            amount: 6000,
            date: '2024-04-10',
            cfdiType: 'E'
        },
        // Mayo 2024
        {
            id: '16',
            description: 'Renta Oficina - Mayo',
            type: 'Renta',
            amount: 45000,
            date: '2024-05-15',
            cfdiType: 'E'
        },
        {
            id: '17',
            description: 'Servicios de Internet y Teléfono',
            type: 'Servicios',
            amount: 3500,
            date: '2024-05-25',
            cfdiType: 'E'
        },
        {
            id: '18',
            description: 'Actualización Software',
            type: 'Software',
            amount: 15000,
            date: '2024-05-08',
            cfdiType: 'E'
        },
        {
            id: '19',
            description: 'Consultoría Legal',
            type: 'Servicios Profesionales',
            amount: 28000,
            date: '2024-05-22',
            cfdiType: 'E'
        },
        // Junio 2024
        {
            id: '20',
            description: 'Renta Oficina - Junio',
            type: 'Renta',
            amount: 45000,
            date: '2024-06-15',
            cfdiType: 'E'
        },
        {
            id: '21',
            description: 'Servicios de Internet y Teléfono',
            type: 'Servicios',
            amount: 3500,
            date: '2024-06-25',
            cfdiType: 'E'
        },
        {
            id: '22',
            description: 'Equipamiento Nuevo',
            type: 'Equipamiento',
            amount: 45000,
            date: '2024-06-12',
            cfdiType: 'E'
        },
        // Julio 2024
        {
            id: '23',
            description: 'Renta Oficina - Julio',
            type: 'Renta',
            amount: 45000,
            date: '2024-07-15',
            cfdiType: 'E'
        },
        {
            id: '24',
            description: 'Servicios de Internet y Teléfono',
            type: 'Servicios',
            amount: 3500,
            date: '2024-07-25',
            cfdiType: 'E'
        },
        {
            id: '25',
            description: 'Evento Corporativo',
            type: 'Eventos',
            amount: 35000,
            date: '2024-07-05',
            cfdiType: 'E'
        },
        // Agosto 2024
        {
            id: '26',
            description: 'Renta Oficina - Agosto',
            type: 'Renta',
            amount: 45000,
            date: '2024-08-15',
            cfdiType: 'E'
        },
        {
            id: '27',
            description: 'Servicios de Internet y Teléfono',
            type: 'Servicios',
            amount: 3500,
            date: '2024-08-25',
            cfdiType: 'E'
        },
        // Septiembre 2024
        {
            id: '28',
            description: 'Renta Oficina - Septiembre',
            type: 'Renta',
            amount: 45000,
            date: '2024-09-15',
            cfdiType: 'E'
        },
        {
            id: '29',
            description: 'Servicios de Internet y Teléfono',
            type: 'Servicios',
            amount: 3500,
            date: '2024-09-25',
            cfdiType: 'E'
        },
        {
            id: '30',
            description: 'Auditoría Externa',
            type: 'Servicios Profesionales',
            amount: 32000,
            date: '2024-09-10',
            cfdiType: 'E'
        },
        // Octubre 2024
        {
            id: '31',
            description: 'Renta Oficina - Octubre',
            type: 'Renta',
            amount: 45000,
            date: '2024-10-15',
            cfdiType: 'E'
        },
        {
            id: '32',
            description: 'Servicios de Internet y Teléfono',
            type: 'Servicios',
            amount: 3500,
            date: '2024-10-25',
            cfdiType: 'E'
        },
        // Noviembre 2024
        {
            id: '33',
            description: 'Renta Oficina - Noviembre',
            type: 'Renta',
            amount: 45000,
            date: '2024-11-15',
            cfdiType: 'E'
        },
        {
            id: '34',
            description: 'Servicios de Internet y Teléfono',
            type: 'Servicios',
            amount: 3500,
            date: '2024-11-25',
            cfdiType: 'E'
        },
        {
            id: '35',
            description: 'Bonos de Fin de Año',
            type: 'Personal',
            amount: 55000,
            date: '2024-11-28',
            cfdiType: 'E'
        },
        // Diciembre 2024
        {
            id: '36',
            description: 'Renta Oficina - Diciembre',
            type: 'Renta',
            amount: 45000,
            date: '2024-12-15',
            cfdiType: 'E'
        },
        {
            id: '37',
            description: 'Servicios de Internet y Teléfono',
            type: 'Servicios',
            amount: 3500,
            date: '2024-12-25',
            cfdiType: 'E'
        },
        {
            id: '38',
            description: 'Fiesta de Fin de Año',
            type: 'Eventos',
            amount: 25000,
            date: '2024-12-20',
            cfdiType: 'E'
        },
        // Diciembre 2023
        {
            id: '39',
            description: 'Renta Oficina - Diciembre 2023',
            type: 'Renta',
            amount: 45000,
            date: '2023-12-15',
            cfdiType: 'E'
        },
        {
            id: '40',
            description: 'Servicios de Internet y Teléfono',
            type: 'Servicios',
            amount: 3500,
            date: '2023-12-25',
            cfdiType: 'E'
        },
        // Noviembre 2023
        {
            id: '41',
            description: 'Renta Oficina - Noviembre 2023',
            type: 'Renta',
            amount: 45000,
            date: '2023-11-15',
            cfdiType: 'E'
        },
        {
            id: '42',
            description: 'Servicios de Internet y Teléfono',
            type: 'Servicios',
            amount: 3500,
            date: '2023-11-25',
            cfdiType: 'E'
        }
    ];
    // Initialize period to current month
    const now = new Date();
    const [selectedMonth, setSelectedMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(String(now.getMonth() + 1).padStart(2, '0'));
    const [selectedYear, setSelectedYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(String(now.getFullYear()));
    // Filter expenses by selected period
    const expenses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return allExpenses.filter((expense)=>{
            const expenseDate = new Date(expense.date);
            const expenseMonth = String(expenseDate.getMonth() + 1).padStart(2, '0');
            const expenseYear = String(expenseDate.getFullYear());
            return expenseMonth === selectedMonth && expenseYear === selectedYear;
        });
    }, [
        selectedMonth,
        selectedYear,
        allExpenses
    ]);
    const totalExpenses = expenses.reduce((sum, expense)=>sum + expense.amount, 0);
    // Generate month options
    const months = [
        {
            value: '01',
            label: 'Enero'
        },
        {
            value: '02',
            label: 'Febrero'
        },
        {
            value: '03',
            label: 'Marzo'
        },
        {
            value: '04',
            label: 'Abril'
        },
        {
            value: '05',
            label: 'Mayo'
        },
        {
            value: '06',
            label: 'Junio'
        },
        {
            value: '07',
            label: 'Julio'
        },
        {
            value: '08',
            label: 'Agosto'
        },
        {
            value: '09',
            label: 'Septiembre'
        },
        {
            value: '10',
            label: 'Octubre'
        },
        {
            value: '11',
            label: 'Noviembre'
        },
        {
            value: '12',
            label: 'Diciembre'
        }
    ];
    // Generate year options (current year and 2 years back)
    const currentYear = now.getFullYear();
    const years = Array.from({
        length: 3
    }, (_, i)=>currentYear - i);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$FirmExpenses$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].firmExpenses,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$FirmExpenses$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$FirmExpenses$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].periodSelector,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$FirmExpenses$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].periodField,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "periodMonth",
                                        children: "Mes"
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/director/finanzas/FirmExpenses.tsx",
                                        lineNumber: 414,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        id: "periodMonth",
                                        value: selectedMonth,
                                        onChange: (e)=>setSelectedMonth(e.target.value),
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$FirmExpenses$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].periodSelect,
                                        children: months.map((month)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: month.value,
                                                children: month.label
                                            }, month.value, false, {
                                                fileName: "[project]/components/profiles/director/finanzas/FirmExpenses.tsx",
                                                lineNumber: 422,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/director/finanzas/FirmExpenses.tsx",
                                        lineNumber: 415,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/profiles/director/finanzas/FirmExpenses.tsx",
                                lineNumber: 413,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$FirmExpenses$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].periodField,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "periodYear",
                                        children: "Año"
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/director/finanzas/FirmExpenses.tsx",
                                        lineNumber: 429,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        id: "periodYear",
                                        value: selectedYear,
                                        onChange: (e)=>setSelectedYear(e.target.value),
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$FirmExpenses$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].periodSelect,
                                        children: years.map((year)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: year,
                                                children: year
                                            }, year, false, {
                                                fileName: "[project]/components/profiles/director/finanzas/FirmExpenses.tsx",
                                                lineNumber: 437,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/director/finanzas/FirmExpenses.tsx",
                                        lineNumber: 430,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/profiles/director/finanzas/FirmExpenses.tsx",
                                lineNumber: 428,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/profiles/director/finanzas/FirmExpenses.tsx",
                        lineNumber: 412,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$FirmExpenses$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].total,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$FirmExpenses$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].totalLabel,
                                children: "Total del Período"
                            }, void 0, false, {
                                fileName: "[project]/components/profiles/director/finanzas/FirmExpenses.tsx",
                                lineNumber: 445,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$FirmExpenses$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].totalAmount,
                                children: [
                                    "$",
                                    totalExpenses.toLocaleString()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/profiles/director/finanzas/FirmExpenses.tsx",
                                lineNumber: 446,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/profiles/director/finanzas/FirmExpenses.tsx",
                        lineNumber: 444,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/profiles/director/finanzas/FirmExpenses.tsx",
                lineNumber: 411,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$FirmExpenses$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].expensesList,
                children: expenses.map((expense)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$FirmExpenses$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].expenseItem,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$FirmExpenses$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].expenseInfo,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$FirmExpenses$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].expenseDescription,
                                        children: expense.description
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/director/finanzas/FirmExpenses.tsx",
                                        lineNumber: 454,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$FirmExpenses$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].expenseMeta,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$FirmExpenses$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].expenseType,
                                                children: expense.type
                                            }, void 0, false, {
                                                fileName: "[project]/components/profiles/director/finanzas/FirmExpenses.tsx",
                                                lineNumber: 456,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$FirmExpenses$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].expenseDate,
                                                children: new Date(expense.date).toLocaleDateString('es-MX', {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: 'numeric'
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/components/profiles/director/finanzas/FirmExpenses.tsx",
                                                lineNumber: 457,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/profiles/director/finanzas/FirmExpenses.tsx",
                                        lineNumber: 455,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/profiles/director/finanzas/FirmExpenses.tsx",
                                lineNumber: 453,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$FirmExpenses$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].expenseAmount,
                                children: [
                                    "$",
                                    expense.amount.toLocaleString()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/profiles/director/finanzas/FirmExpenses.tsx",
                                lineNumber: 466,
                                columnNumber: 13
                            }, this)
                        ]
                    }, expense.id, true, {
                        fileName: "[project]/components/profiles/director/finanzas/FirmExpenses.tsx",
                        lineNumber: 452,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/profiles/director/finanzas/FirmExpenses.tsx",
                lineNumber: 450,
                columnNumber: 7
            }, this),
            expenses.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$FirmExpenses$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emptyState,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "No hay gastos registrados para el período seleccionado."
                }, void 0, false, {
                    fileName: "[project]/components/profiles/director/finanzas/FirmExpenses.tsx",
                    lineNumber: 475,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/profiles/director/finanzas/FirmExpenses.tsx",
                lineNumber: 474,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/profiles/director/finanzas/FirmExpenses.tsx",
        lineNumber: 410,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/profiles/director/finanzas/ReportGenerator.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "cancelBtn": "ReportGenerator-module__w09qMG__cancelBtn",
  "configHeader": "ReportGenerator-module__w09qMG__configHeader",
  "configTitle": "ReportGenerator-module__w09qMG__configTitle",
  "dateField": "ReportGenerator-module__w09qMG__dateField",
  "dateInput": "ReportGenerator-module__w09qMG__dateInput",
  "dateRangeSelector": "ReportGenerator-module__w09qMG__dateRangeSelector",
  "downloadBtn": "ReportGenerator-module__w09qMG__downloadBtn",
  "downloadOptions": "ReportGenerator-module__w09qMG__downloadOptions",
  "excelBtn": "ReportGenerator-module__w09qMG__excelBtn",
  "header": "ReportGenerator-module__w09qMG__header",
  "reportArrow": "ReportGenerator-module__w09qMG__reportArrow",
  "reportCard": "ReportGenerator-module__w09qMG__reportCard",
  "reportConfig": "ReportGenerator-module__w09qMG__reportConfig",
  "reportDescription": "ReportGenerator-module__w09qMG__reportDescription",
  "reportGenerator": "ReportGenerator-module__w09qMG__reportGenerator",
  "reportGrid": "ReportGenerator-module__w09qMG__reportGrid",
  "reportIcon": "ReportGenerator-module__w09qMG__reportIcon",
  "reportInfo": "ReportGenerator-module__w09qMG__reportInfo",
  "reportName": "ReportGenerator-module__w09qMG__reportName",
  "subtitle": "ReportGenerator-module__w09qMG__subtitle",
  "title": "ReportGenerator-module__w09qMG__title",
});
}),
"[project]/components/profiles/director/finanzas/ReportGenerator.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReportGenerator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$ReportGenerator$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/profiles/director/finanzas/ReportGenerator.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
function ReportGenerator() {
    const [selectedReport, setSelectedReport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dateRange, setDateRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        start: '',
        end: ''
    });
    const reportTypes = [
        {
            id: 'profit-loss',
            name: 'Estado de Resultados',
            description: 'Estado de Resultados',
            iconClass: 'bx-bar-chart-alt-2'
        },
        {
            id: 'balance-sheet',
            name: 'Balance General',
            description: 'Balance General',
            iconClass: 'bx-trending-up'
        },
        {
            id: 'commissions',
            name: 'Nómina de Comisiones',
            description: 'Historial de Comisiones',
            iconClass: 'bx-dollar'
        },
        {
            id: 'tax-report',
            name: 'Impuestos Firm',
            description: 'Reporte Fiscal',
            iconClass: 'bx-file-blank'
        }
    ];
    const handleReportClick = (reportId)=>{
        setSelectedReport(reportId);
        // Set default date range to current month
        const now = new Date();
        const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
        const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        setDateRange({
            start: firstDay.toISOString().split('T')[0],
            end: lastDay.toISOString().split('T')[0]
        });
    };
    const handleDownload = ()=>{
        if (!selectedReport) return;
        if (!dateRange.start || !dateRange.end) {
            alert('Por favor selecciona un rango de fechas');
            return;
        }
        // TODO: Implement actual download logic
        console.log('Download report:', selectedReport, dateRange);
        alert(`Descargando reporte: ${reportTypes.find((r)=>r.id === selectedReport)?.name}`);
    };
    const handleCancel = ()=>{
        setSelectedReport(null);
        setDateRange({
            start: '',
            end: ''
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$ReportGenerator$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reportGenerator,
        children: !selectedReport ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$ReportGenerator$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reportGrid,
            children: reportTypes.map((report)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$ReportGenerator$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reportCard,
                    onClick: ()=>handleReportClick(report.id),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$ReportGenerator$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reportIcon,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: `bx ${report.iconClass}`
                            }, void 0, false, {
                                fileName: "[project]/components/profiles/director/finanzas/ReportGenerator.tsx",
                                lineNumber: 85,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/director/finanzas/ReportGenerator.tsx",
                            lineNumber: 84,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$ReportGenerator$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reportInfo,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$ReportGenerator$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reportName,
                                    children: report.name
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/finanzas/ReportGenerator.tsx",
                                    lineNumber: 88,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$ReportGenerator$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reportDescription,
                                    children: report.description
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/finanzas/ReportGenerator.tsx",
                                    lineNumber: 89,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profiles/director/finanzas/ReportGenerator.tsx",
                            lineNumber: 87,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$ReportGenerator$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reportArrow,
                            children: "→"
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/director/finanzas/ReportGenerator.tsx",
                            lineNumber: 91,
                            columnNumber: 15
                        }, this)
                    ]
                }, report.id, true, {
                    fileName: "[project]/components/profiles/director/finanzas/ReportGenerator.tsx",
                    lineNumber: 79,
                    columnNumber: 13
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/profiles/director/finanzas/ReportGenerator.tsx",
            lineNumber: 77,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$ReportGenerator$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reportConfig,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$ReportGenerator$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].configHeader,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$ReportGenerator$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].configTitle,
                            children: reportTypes.find((r)=>r.id === selectedReport)?.name
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/director/finanzas/ReportGenerator.tsx",
                            lineNumber: 98,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$ReportGenerator$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cancelBtn,
                            onClick: handleCancel,
                            children: "← Volver"
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/director/finanzas/ReportGenerator.tsx",
                            lineNumber: 101,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/profiles/director/finanzas/ReportGenerator.tsx",
                    lineNumber: 97,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$ReportGenerator$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dateRangeSelector,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$ReportGenerator$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dateField,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "startDate",
                                    children: "Fecha Inicio"
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/finanzas/ReportGenerator.tsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "startDate",
                                    type: "date",
                                    value: dateRange.start,
                                    onChange: (e)=>setDateRange({
                                            ...dateRange,
                                            start: e.target.value
                                        }),
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$ReportGenerator$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dateInput
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/finanzas/ReportGenerator.tsx",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profiles/director/finanzas/ReportGenerator.tsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$ReportGenerator$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dateField,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "endDate",
                                    children: "Fecha Fin"
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/finanzas/ReportGenerator.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "endDate",
                                    type: "date",
                                    value: dateRange.end,
                                    onChange: (e)=>setDateRange({
                                            ...dateRange,
                                            end: e.target.value
                                        }),
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$ReportGenerator$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dateInput
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/finanzas/ReportGenerator.tsx",
                                    lineNumber: 119,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profiles/director/finanzas/ReportGenerator.tsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/profiles/director/finanzas/ReportGenerator.tsx",
                    lineNumber: 106,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$ReportGenerator$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].downloadOptions,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$ReportGenerator$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].downloadBtn,
                            onClick: handleDownload,
                            disabled: !dateRange.start || !dateRange.end,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/profiles/director/finanzas/ReportGenerator.tsx",
                                            lineNumber: 136,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                            points: "7 10 12 15 17 10"
                                        }, void 0, false, {
                                            fileName: "[project]/components/profiles/director/finanzas/ReportGenerator.tsx",
                                            lineNumber: 137,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "12",
                                            y1: "15",
                                            x2: "12",
                                            y2: "3"
                                        }, void 0, false, {
                                            fileName: "[project]/components/profiles/director/finanzas/ReportGenerator.tsx",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/profiles/director/finanzas/ReportGenerator.tsx",
                                    lineNumber: 135,
                                    columnNumber: 15
                                }, this),
                                "Descargar PDF"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profiles/director/finanzas/ReportGenerator.tsx",
                            lineNumber: 130,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$ReportGenerator$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].downloadBtn} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$ReportGenerator$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].excelBtn}`,
                            onClick: handleDownload,
                            disabled: !dateRange.start || !dateRange.end,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                                        }, void 0, false, {
                                            fileName: "[project]/components/profiles/director/finanzas/ReportGenerator.tsx",
                                            lineNumber: 148,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                            points: "14 2 14 8 20 8"
                                        }, void 0, false, {
                                            fileName: "[project]/components/profiles/director/finanzas/ReportGenerator.tsx",
                                            lineNumber: 149,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "16",
                                            y1: "13",
                                            x2: "8",
                                            y2: "13"
                                        }, void 0, false, {
                                            fileName: "[project]/components/profiles/director/finanzas/ReportGenerator.tsx",
                                            lineNumber: 150,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "16",
                                            y1: "17",
                                            x2: "8",
                                            y2: "17"
                                        }, void 0, false, {
                                            fileName: "[project]/components/profiles/director/finanzas/ReportGenerator.tsx",
                                            lineNumber: 151,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                            points: "10 9 9 9 8 9"
                                        }, void 0, false, {
                                            fileName: "[project]/components/profiles/director/finanzas/ReportGenerator.tsx",
                                            lineNumber: 152,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/profiles/director/finanzas/ReportGenerator.tsx",
                                    lineNumber: 147,
                                    columnNumber: 15
                                }, this),
                                "Descargar Excel"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profiles/director/finanzas/ReportGenerator.tsx",
                            lineNumber: 142,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/profiles/director/finanzas/ReportGenerator.tsx",
                    lineNumber: 129,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/profiles/director/finanzas/ReportGenerator.tsx",
            lineNumber: 96,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/profiles/director/finanzas/ReportGenerator.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/profiles/director/finanzas/Finanzas.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "finanzas": "Finanzas-module__qT_Kdq__finanzas",
  "finanzasContent": "Finanzas-module__qT_Kdq__finanzasContent",
  "tabContent": "Finanzas-module__qT_Kdq__tabContent",
});
}),
"[project]/components/profiles/director/finanzas/Finanzas.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Finanzas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$NavigationContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/NavigationContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$FinanzasContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/FinanzasContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/shared/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$TabContainer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TabContainer$3e$__ = __turbopack_context__.i("[project]/components/shared/TabContainer.tsx [app-ssr] (ecmascript) <export default as TabContainer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$AgingSummary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/profiles/director/finanzas/AgingSummary.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$DebtorsList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/profiles/director/finanzas/DebtorsList.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$CommissionQueue$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/profiles/director/finanzas/CommissionQueue.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$FirmExpenses$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/profiles/director/finanzas/FirmExpenses.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$ReportGenerator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/profiles/director/finanzas/ReportGenerator.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$Finanzas$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/profiles/director/finanzas/Finanzas.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
function Finanzas() {
    const { activeItem } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$NavigationContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNavigation"])();
    const { isRefreshing, refresh } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$FinanzasContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFinanzas"])();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('receivables');
    const [activeComponentTab, setActiveComponentTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // Update active category based on navigation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (activeItem === 'finanzas-receivables') {
            setActiveCategory('receivables');
            setActiveComponentTab('aging');
        } else if (activeItem === 'finanzas-payables') {
            setActiveCategory('payables');
            setActiveComponentTab('commissions');
        } else if (activeItem === 'finanzas-reports') {
            setActiveCategory('reports');
            setActiveComponentTab('');
        } else if (activeItem === 'finanzas') {
            // Default to receivables when clicking finanzas directly
            setActiveCategory('receivables');
            setActiveComponentTab('aging');
        }
    }, [
        activeItem
    ]);
    // Set default tab when category changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (activeCategory === 'receivables' && !activeComponentTab) {
            setActiveComponentTab('aging');
        } else if (activeCategory === 'payables' && !activeComponentTab) {
            setActiveComponentTab('commissions');
        }
    }, [
        activeCategory,
        activeComponentTab
    ]);
    // Define tabs configuration based on active category
    const tabsConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (activeCategory === 'receivables') {
            return [
                {
                    id: 'aging',
                    label: 'Resumen de Antigüedad',
                    content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$AgingSummary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/profiles/director/finanzas/Finanzas.tsx",
                        lineNumber: 54,
                        columnNumber: 20
                    }, this)
                },
                {
                    id: 'debtors',
                    label: 'Lista de Deudores',
                    content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$DebtorsList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/profiles/director/finanzas/Finanzas.tsx",
                        lineNumber: 59,
                        columnNumber: 20
                    }, this)
                }
            ];
        } else if (activeCategory === 'payables') {
            return [
                {
                    id: 'commissions',
                    label: 'Cola de Aprobación',
                    content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$CommissionQueue$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/profiles/director/finanzas/Finanzas.tsx",
                        lineNumber: 67,
                        columnNumber: 20
                    }, this)
                },
                {
                    id: 'expenses',
                    label: 'Gastos',
                    content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$FirmExpenses$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/profiles/director/finanzas/Finanzas.tsx",
                        lineNumber: 72,
                        columnNumber: 20
                    }, this)
                }
            ];
        }
        return [];
    }, [
        activeCategory
    ]);
    // Render content for reports (no tabs)
    if (activeCategory === 'reports') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$Finanzas$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].finanzas,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$Finanzas$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].finanzasContent,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$Finanzas$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tabContent,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$ReportGenerator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/profiles/director/finanzas/Finanzas.tsx",
                        lineNumber: 85,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/profiles/director/finanzas/Finanzas.tsx",
                    lineNumber: 84,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/profiles/director/finanzas/Finanzas.tsx",
                lineNumber: 83,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/profiles/director/finanzas/Finanzas.tsx",
            lineNumber: 82,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$Finanzas$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].finanzas,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$Finanzas$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].finanzasContent,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$Finanzas$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tabContent,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$TabContainer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TabContainer$3e$__["TabContainer"], {
                    tabs: tabsConfig,
                    activeTab: activeComponentTab,
                    onTabChange: setActiveComponentTab,
                    showRefresh: true,
                    onRefresh: refresh,
                    isRefreshing: isRefreshing
                }, void 0, false, {
                    fileName: "[project]/components/profiles/director/finanzas/Finanzas.tsx",
                    lineNumber: 96,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/profiles/director/finanzas/Finanzas.tsx",
                lineNumber: 95,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/profiles/director/finanzas/Finanzas.tsx",
            lineNumber: 94,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/profiles/director/finanzas/Finanzas.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/profiles/director/finanzas/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$Finanzas$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/profiles/director/finanzas/Finanzas.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$AgingSummary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/profiles/director/finanzas/AgingSummary.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$DebtorsList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/profiles/director/finanzas/DebtorsList.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$CommissionQueue$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/profiles/director/finanzas/CommissionQueue.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$FirmExpenses$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/profiles/director/finanzas/FirmExpenses.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$ReportGenerator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/profiles/director/finanzas/ReportGenerator.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/components/profiles/director/finanzas/Finanzas.tsx [app-ssr] (ecmascript) <export default as Finanzas>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Finanzas",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$Finanzas$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$finanzas$2f$Finanzas$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/profiles/director/finanzas/Finanzas.tsx [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=components_profiles_director_finanzas_80be5aad._.js.map