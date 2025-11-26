module.exports = [
"[project]/components/profiles/director/estadisticas/RendimientoEmpleados.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "accuracy": "RendimientoEmpleados-module__TrcyyG__accuracy",
  "avatar": "RendimientoEmpleados-module__TrcyyG__avatar",
  "cardSubtitle": "RendimientoEmpleados-module__TrcyyG__cardSubtitle",
  "cardTitle": "RendimientoEmpleados-module__TrcyyG__cardTitle",
  "efficiencyScore": "RendimientoEmpleados-module__TrcyyG__efficiencyScore",
  "heatmap": "RendimientoEmpleados-module__TrcyyG__heatmap",
  "heatmapBar": "RendimientoEmpleados-module__TrcyyG__heatmapBar",
  "heatmapBarFill": "RendimientoEmpleados-module__TrcyyG__heatmapBarFill",
  "heatmapCard": "RendimientoEmpleados-module__TrcyyG__heatmapCard",
  "heatmapItem": "RendimientoEmpleados-module__TrcyyG__heatmapItem",
  "heatmapLabel": "RendimientoEmpleados-module__TrcyyG__heatmapLabel",
  "heatmapStats": "RendimientoEmpleados-module__TrcyyG__heatmapStats",
  "leaderboardCard": "RendimientoEmpleados-module__TrcyyG__leaderboardCard",
  "rendimientoEmpleados": "RendimientoEmpleados-module__TrcyyG__rendimientoEmpleados",
  "revenue": "RendimientoEmpleados-module__TrcyyG__revenue",
  "roleBadge": "RendimientoEmpleados-module__TrcyyG__roleBadge",
  "staffNameCell": "RendimientoEmpleados-module__TrcyyG__staffNameCell",
  "tableContainer": "RendimientoEmpleados-module__TrcyyG__tableContainer",
});
}),
"[project]/components/profiles/director/estadisticas/RendimientoEmpleados.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RendimientoEmpleados
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/shared/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$Table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__ = __turbopack_context__.i("[project]/components/shared/Table.tsx [app-ssr] (ecmascript) <export default as Table>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEmpleados$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/profiles/director/estadisticas/RendimientoEmpleados.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
function RendimientoEmpleados({ timeframe }) {
    // Mock data - replace with real data from API
    const [staffMembers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: '1',
            name: 'María González',
            role: 'Chief',
            efficiencyScore: 12.5,
            revenueGenerated: 450000,
            accuracy: 98.5
        },
        {
            id: '2',
            name: 'Carlos Rodríguez',
            role: 'Accountant',
            efficiencyScore: 15.2,
            revenueGenerated: 320000,
            accuracy: 95.2
        },
        {
            id: '3',
            name: 'Ana Martínez',
            role: 'Chief',
            efficiencyScore: 10.8,
            revenueGenerated: 580000,
            accuracy: 99.1
        },
        {
            id: '4',
            name: 'Luis Fernández',
            role: 'Accountant',
            efficiencyScore: 18.3,
            revenueGenerated: 280000,
            accuracy: 92.8
        },
        {
            id: '5',
            name: 'Sofia López',
            role: 'Chief',
            efficiencyScore: 11.2,
            revenueGenerated: 520000,
            accuracy: 97.5
        }
    ]);
    const [efficiencyData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            employee: 'María González',
            itemsProcessed: 450,
            timeSpent: 94
        },
        {
            employee: 'Carlos Rodríguez',
            itemsProcessed: 380,
            timeSpent: 96
        },
        {
            employee: 'Ana Martínez',
            itemsProcessed: 520,
            timeSpent: 97
        },
        {
            employee: 'Luis Fernández',
            itemsProcessed: 320,
            timeSpent: 98
        },
        {
            employee: 'Sofia López',
            itemsProcessed: 480,
            timeSpent: 90
        }
    ]);
    const getInitials = (name)=>{
        return name.split(' ').map((n)=>n[0]).join('').toUpperCase().slice(0, 2);
    };
    const maxItems = Math.max(...efficiencyData.map((d)=>d.itemsProcessed));
    const maxTime = Math.max(...efficiencyData.map((d)=>d.timeSpent));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEmpleados$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rendimientoEmpleados,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEmpleados$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].leaderboardCard,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$Table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__["Table"], {
                    data: staffMembers,
                    columns: [
                        {
                            key: 'name',
                            header: 'Nombre del Personal',
                            render: (staff)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEmpleados$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].staffNameCell,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEmpleados$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].avatar,
                                            children: staff.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: staff.avatar,
                                                alt: staff.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/profiles/director/estadisticas/RendimientoEmpleados.tsx",
                                                lineNumber: 108,
                                                columnNumber: 23
                                            }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: getInitials(staff.name)
                                            }, void 0, false, {
                                                fileName: "[project]/components/profiles/director/estadisticas/RendimientoEmpleados.tsx",
                                                lineNumber: 110,
                                                columnNumber: 23
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/components/profiles/director/estadisticas/RendimientoEmpleados.tsx",
                                            lineNumber: 106,
                                            columnNumber: 19
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: staff.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/profiles/director/estadisticas/RendimientoEmpleados.tsx",
                                            lineNumber: 113,
                                            columnNumber: 19
                                        }, void 0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/profiles/director/estadisticas/RendimientoEmpleados.tsx",
                                    lineNumber: 105,
                                    columnNumber: 17
                                }, void 0)
                        },
                        {
                            key: 'role',
                            header: 'Rol',
                            render: (staff)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEmpleados$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].roleBadge,
                                    children: staff.role === 'Chief' ? 'Jefe' : 'Contador'
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/estadisticas/RendimientoEmpleados.tsx",
                                    lineNumber: 121,
                                    columnNumber: 17
                                }, void 0)
                        },
                        {
                            key: 'efficiency',
                            header: 'Puntuación de Eficiencia',
                            render: (staff)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEmpleados$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].efficiencyScore,
                                    children: [
                                        staff.efficiencyScore.toFixed(1),
                                        " min"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/profiles/director/estadisticas/RendimientoEmpleados.tsx",
                                    lineNumber: 128,
                                    columnNumber: 17
                                }, void 0)
                        },
                        {
                            key: 'revenue',
                            header: 'Ingresos Generados',
                            render: (staff)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEmpleados$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].revenue,
                                    children: [
                                        "$",
                                        staff.revenueGenerated.toLocaleString()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/profiles/director/estadisticas/RendimientoEmpleados.tsx",
                                    lineNumber: 137,
                                    columnNumber: 17
                                }, void 0)
                        },
                        {
                            key: 'accuracy',
                            header: 'Precisión',
                            render: (staff)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEmpleados$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].accuracy,
                                    children: [
                                        staff.accuracy.toFixed(1),
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/profiles/director/estadisticas/RendimientoEmpleados.tsx",
                                    lineNumber: 146,
                                    columnNumber: 17
                                }, void 0)
                        }
                    ],
                    keyExtractor: (staff)=>staff.id,
                    containerClassName: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEmpleados$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tableContainer
                }, void 0, false, {
                    fileName: "[project]/components/profiles/director/estadisticas/RendimientoEmpleados.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/profiles/director/estadisticas/RendimientoEmpleados.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEmpleados$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heatmapCard,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEmpleados$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardTitle,
                        children: "Mapa de Calor de Eficiencia"
                    }, void 0, false, {
                        fileName: "[project]/components/profiles/director/estadisticas/RendimientoEmpleados.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEmpleados$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardSubtitle,
                        children: "Elementos Procesados vs. Tiempo por Empleado"
                    }, void 0, false, {
                        fileName: "[project]/components/profiles/director/estadisticas/RendimientoEmpleados.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEmpleados$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heatmap,
                        children: efficiencyData.map((data, index)=>{
                            const itemsWidth = data.itemsProcessed / maxItems * 100;
                            const timeHeight = data.timeSpent / maxTime * 100;
                            const efficiency = data.itemsProcessed / data.timeSpent; // items per hour
                            const intensity = Math.min(efficiency / 10, 1); // Normalize to 0-1
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEmpleados$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heatmapItem,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEmpleados$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heatmapLabel,
                                        children: data.employee
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/director/estadisticas/RendimientoEmpleados.tsx",
                                        lineNumber: 170,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEmpleados$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heatmapBar,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEmpleados$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heatmapBarFill,
                                            style: {
                                                width: `${itemsWidth}%`,
                                                height: `${timeHeight}%`,
                                                opacity: 0.5 + intensity * 0.5,
                                                background: `linear-gradient(135deg, var(--azure-light), var(--azure))`
                                            },
                                            title: `${data.itemsProcessed} items in ${data.timeSpent} hours`
                                        }, void 0, false, {
                                            fileName: "[project]/components/profiles/director/estadisticas/RendimientoEmpleados.tsx",
                                            lineNumber: 172,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/director/estadisticas/RendimientoEmpleados.tsx",
                                        lineNumber: 171,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEmpleados$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heatmapStats,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    data.itemsProcessed,
                                                    " items"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/profiles/director/estadisticas/RendimientoEmpleados.tsx",
                                                lineNumber: 184,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    data.timeSpent,
                                                    "h"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/profiles/director/estadisticas/RendimientoEmpleados.tsx",
                                                lineNumber: 185,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/profiles/director/estadisticas/RendimientoEmpleados.tsx",
                                        lineNumber: 183,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/components/profiles/director/estadisticas/RendimientoEmpleados.tsx",
                                lineNumber: 169,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/profiles/director/estadisticas/RendimientoEmpleados.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/profiles/director/estadisticas/RendimientoEmpleados.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/profiles/director/estadisticas/RendimientoEmpleados.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/profiles/director/estadisticas/RendimientoClientes.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bar": "RendimientoClientes-module__xAfIJq__bar",
  "barChart": "RendimientoClientes-module__xAfIJq__barChart",
  "barContainer": "RendimientoClientes-module__xAfIJq__barContainer",
  "barGroup": "RendimientoClientes-module__xAfIJq__barGroup",
  "barLabel": "RendimientoClientes-module__xAfIJq__barLabel",
  "cardSubtitle": "RendimientoClientes-module__xAfIJq__cardSubtitle",
  "cardTitle": "RendimientoClientes-module__xAfIJq__cardTitle",
  "churnRiskCard": "RendimientoClientes-module__xAfIJq__churnRiskCard",
  "clientName": "RendimientoClientes-module__xAfIJq__clientName",
  "clientValue": "RendimientoClientes-module__xAfIJq__clientValue",
  "daysToPay": "RendimientoClientes-module__xAfIJq__daysToPay",
  "highRisk": "RendimientoClientes-module__xAfIJq__highRisk",
  "lifetimeValue": "RendimientoClientes-module__xAfIJq__lifetimeValue",
  "mediumRisk": "RendimientoClientes-module__xAfIJq__mediumRisk",
  "rendimientoClientes": "RendimientoClientes-module__xAfIJq__rendimientoClientes",
  "tableContainer": "RendimientoClientes-module__xAfIJq__tableContainer",
  "topClientsCard": "RendimientoClientes-module__xAfIJq__topClientsCard",
});
}),
"[project]/components/profiles/director/estadisticas/RendimientoClientes.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RendimientoClientes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/shared/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$Table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__ = __turbopack_context__.i("[project]/components/shared/Table.tsx [app-ssr] (ecmascript) <export default as Table>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoClientes$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/profiles/director/estadisticas/RendimientoClientes.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
function RendimientoClientes({ timeframe }) {
    // Mock data - replace with real data from API
    const [topClients] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: '1',
            name: 'Hospital San José',
            annualContractValue: 1200000
        },
        {
            id: '2',
            name: 'Constructora ABC',
            annualContractValue: 980000
        },
        {
            id: '3',
            name: 'Retail Corp',
            annualContractValue: 850000
        },
        {
            id: '4',
            name: 'Clínica Central',
            annualContractValue: 720000
        },
        {
            id: '5',
            name: 'Obras Públicas SA',
            annualContractValue: 650000
        },
        {
            id: '6',
            name: 'Supermercado XYZ',
            annualContractValue: 580000
        },
        {
            id: '7',
            name: 'Hospital Regional',
            annualContractValue: 520000
        },
        {
            id: '8',
            name: 'Constructora Delta',
            annualContractValue: 480000
        },
        {
            id: '9',
            name: 'Tienda Nacional',
            annualContractValue: 420000
        },
        {
            id: '10',
            name: 'Centro Médico',
            annualContractValue: 380000
        }
    ]);
    const [churnRiskClients] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: '1',
            name: 'Cliente A',
            avgDaysToPay: 75,
            totalLifetimeValue: 250000
        },
        {
            id: '2',
            name: 'Cliente B',
            avgDaysToPay: 68,
            totalLifetimeValue: 180000
        },
        {
            id: '3',
            name: 'Cliente C',
            avgDaysToPay: 82,
            totalLifetimeValue: 320000
        },
        {
            id: '4',
            name: 'Cliente D',
            avgDaysToPay: 71,
            totalLifetimeValue: 150000
        },
        {
            id: '5',
            name: 'Cliente E',
            avgDaysToPay: 90,
            totalLifetimeValue: 280000
        }
    ]);
    const maxValue = Math.max(...topClients.map((c)=>c.annualContractValue));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoClientes$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rendimientoClientes,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoClientes$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].topClientsCard,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoClientes$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardTitle,
                        children: "Top 10 Clientes por Valor de Contrato Anual"
                    }, void 0, false, {
                        fileName: "[project]/components/profiles/director/estadisticas/RendimientoClientes.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoClientes$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barChart,
                        children: topClients.map((client)=>{
                            const height = client.annualContractValue / maxValue * 100;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoClientes$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barGroup,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoClientes$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barContainer,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoClientes$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bar,
                                            style: {
                                                height: `${height}%`
                                            },
                                            title: `${client.name}: $${client.annualContractValue.toLocaleString()}`
                                        }, void 0, false, {
                                            fileName: "[project]/components/profiles/director/estadisticas/RendimientoClientes.tsx",
                                            lineNumber: 62,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/director/estadisticas/RendimientoClientes.tsx",
                                        lineNumber: 61,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoClientes$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barLabel,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoClientes$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].clientName,
                                                children: client.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/profiles/director/estadisticas/RendimientoClientes.tsx",
                                                lineNumber: 69,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoClientes$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].clientValue,
                                                children: [
                                                    "$",
                                                    (client.annualContractValue / 1000).toFixed(0),
                                                    "k"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/profiles/director/estadisticas/RendimientoClientes.tsx",
                                                lineNumber: 70,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/profiles/director/estadisticas/RendimientoClientes.tsx",
                                        lineNumber: 68,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, client.id, true, {
                                fileName: "[project]/components/profiles/director/estadisticas/RendimientoClientes.tsx",
                                lineNumber: 60,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/profiles/director/estadisticas/RendimientoClientes.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/profiles/director/estadisticas/RendimientoClientes.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoClientes$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].churnRiskCard,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$Table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__["Table"], {
                    data: churnRiskClients,
                    columns: [
                        {
                            key: 'name',
                            header: 'Nombre del Cliente',
                            render: (client)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoClientes$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].clientName,
                                    children: client.name
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/estadisticas/RendimientoClientes.tsx",
                                    lineNumber: 89,
                                    columnNumber: 17
                                }, void 0)
                        },
                        {
                            key: 'daysToPay',
                            header: 'Días Promedio para Pagar',
                            render: (client)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoClientes$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].daysToPay} ${client.avgDaysToPay > 75 ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoClientes$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].highRisk : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoClientes$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mediumRisk}`,
                                    children: [
                                        client.avgDaysToPay,
                                        " días"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/profiles/director/estadisticas/RendimientoClientes.tsx",
                                    lineNumber: 96,
                                    columnNumber: 17
                                }, void 0)
                        },
                        {
                            key: 'lifetimeValue',
                            header: 'Valor Total de Vida',
                            render: (client)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoClientes$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].lifetimeValue,
                                    children: [
                                        "$",
                                        client.totalLifetimeValue.toLocaleString()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/profiles/director/estadisticas/RendimientoClientes.tsx",
                                    lineNumber: 109,
                                    columnNumber: 17
                                }, void 0)
                        }
                    ],
                    keyExtractor: (client)=>client.id,
                    containerClassName: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoClientes$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tableContainer
                }, void 0, false, {
                    fileName: "[project]/components/profiles/director/estadisticas/RendimientoClientes.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/profiles/director/estadisticas/RendimientoClientes.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/profiles/director/estadisticas/RendimientoClientes.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/profiles/director/estadisticas/RendimientoEquipos.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "cardSubtitle": "RendimientoEquipos-module__ATRuPW__cardSubtitle",
  "cardTitle": "RendimientoEquipos-module__ATRuPW__cardTitle",
  "cardsGrid": "RendimientoEquipos-module__ATRuPW__cardsGrid",
  "chiefInfo": "RendimientoEquipos-module__ATRuPW__chiefInfo",
  "chiefLabel": "RendimientoEquipos-module__ATRuPW__chiefLabel",
  "chiefName": "RendimientoEquipos-module__ATRuPW__chiefName",
  "legendColor": "RendimientoEquipos-module__ATRuPW__legendColor",
  "legendItem": "RendimientoEquipos-module__ATRuPW__legendItem",
  "legendLabel": "RendimientoEquipos-module__ATRuPW__legendLabel",
  "legendText": "RendimientoEquipos-module__ATRuPW__legendText",
  "legendValue": "RendimientoEquipos-module__ATRuPW__legendValue",
  "metric": "RendimientoEquipos-module__ATRuPW__metric",
  "metricLabel": "RendimientoEquipos-module__ATRuPW__metricLabel",
  "metricValue": "RendimientoEquipos-module__ATRuPW__metricValue",
  "pieChart": "RendimientoEquipos-module__ATRuPW__pieChart",
  "pieChartContainer": "RendimientoEquipos-module__ATRuPW__pieChartContainer",
  "pieLegend": "RendimientoEquipos-module__ATRuPW__pieLegend",
  "rendimientoEquipos": "RendimientoEquipos-module__ATRuPW__rendimientoEquipos",
  "sectionTitle": "RendimientoEquipos-module__ATRuPW__sectionTitle",
  "sectorCard": "RendimientoEquipos-module__ATRuPW__sectorCard",
  "sectorHeader": "RendimientoEquipos-module__ATRuPW__sectorHeader",
  "sectorMetrics": "RendimientoEquipos-module__ATRuPW__sectorMetrics",
  "sectorName": "RendimientoEquipos-module__ATRuPW__sectorName",
  "workloadCard": "RendimientoEquipos-module__ATRuPW__workloadCard",
});
}),
"[project]/components/profiles/director/estadisticas/RendimientoEquipos.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RendimientoEquipos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/profiles/director/estadisticas/RendimientoEquipos.module.css [app-ssr] (css module)");
'use client';
;
;
;
function RendimientoEquipos({ timeframe }) {
    // Mock data - replace with real data from API
    const [sectorData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: '1',
            groupName: 'Medical',
            chief: 'Dr. Ana Martínez',
            netMargin: 1250000,
            operationalLoad: 15420
        },
        {
            id: '2',
            groupName: 'Construction',
            chief: 'Ing. Carlos Rodríguez',
            netMargin: 980000,
            operationalLoad: 12850
        },
        {
            id: '3',
            groupName: 'Retail',
            chief: 'Lic. María González',
            netMargin: 750000,
            operationalLoad: 11200
        }
    ]);
    const [workloadData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            group: 'Medical',
            volume: 15420
        },
        {
            group: 'Construction',
            volume: 12850
        },
        {
            group: 'Retail',
            volume: 11200
        }
    ]);
    const totalVolume = workloadData.reduce((sum, item)=>sum + item.volume, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rendimientoEquipos,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectorGrid,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionTitle,
                        children: "Rentabilidad por Sector"
                    }, void 0, false, {
                        fileName: "[project]/components/profiles/director/estadisticas/RendimientoEquipos.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardsGrid,
                        children: sectorData.map((sector, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectorCard,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectorHeader,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectorName,
                                                children: sector.groupName
                                            }, void 0, false, {
                                                fileName: "[project]/components/profiles/director/estadisticas/RendimientoEquipos.tsx",
                                                lineNumber: 68,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chiefInfo,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chiefLabel,
                                                        children: "Chief:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/profiles/director/estadisticas/RendimientoEquipos.tsx",
                                                        lineNumber: 70,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chiefName,
                                                        children: sector.chief
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/profiles/director/estadisticas/RendimientoEquipos.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/profiles/director/estadisticas/RendimientoEquipos.tsx",
                                                lineNumber: 69,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/profiles/director/estadisticas/RendimientoEquipos.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectorMetrics,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metric,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metricLabel,
                                                        children: "Margen Neto"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/profiles/director/estadisticas/RendimientoEquipos.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metricValue,
                                                        children: [
                                                            "$",
                                                            sector.netMargin.toLocaleString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/profiles/director/estadisticas/RendimientoEquipos.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/profiles/director/estadisticas/RendimientoEquipos.tsx",
                                                lineNumber: 75,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metric,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metricLabel,
                                                        children: "Carga Operativa"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/profiles/director/estadisticas/RendimientoEquipos.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metricValue,
                                                        children: [
                                                            sector.operationalLoad.toLocaleString(),
                                                            " trans."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/profiles/director/estadisticas/RendimientoEquipos.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/profiles/director/estadisticas/RendimientoEquipos.tsx",
                                                lineNumber: 81,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/profiles/director/estadisticas/RendimientoEquipos.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, sector.id, true, {
                                fileName: "[project]/components/profiles/director/estadisticas/RendimientoEquipos.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/profiles/director/estadisticas/RendimientoEquipos.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/profiles/director/estadisticas/RendimientoEquipos.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].workloadCard,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardTitle,
                        children: "Distribución de Carga de Trabajo"
                    }, void 0, false, {
                        fileName: "[project]/components/profiles/director/estadisticas/RendimientoEquipos.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardSubtitle,
                        children: "Volumen de facturas procesadas por grupo"
                    }, void 0, false, {
                        fileName: "[project]/components/profiles/director/estadisticas/RendimientoEquipos.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pieChartContainer,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pieChart,
                                style: {
                                    background: `conic-gradient(
                var(--azure) 0deg ${workloadData[0].volume / totalVolume * 360}deg,
                var(--success) ${workloadData[0].volume / totalVolume * 360}deg ${(workloadData[0].volume + workloadData[1].volume) / totalVolume * 360}deg,
                var(--warning) ${(workloadData[0].volume + workloadData[1].volume) / totalVolume * 360}deg 360deg
              )`
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/profiles/director/estadisticas/RendimientoEquipos.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pieLegend,
                                children: workloadData.map((item, index)=>{
                                    const percentage = item.volume / totalVolume * 100;
                                    const color = index === 0 ? 'var(--azure)' : index === 1 ? 'var(--success)' : 'var(--warning)';
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].legendItem,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].legendColor,
                                                style: {
                                                    background: color
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/profiles/director/estadisticas/RendimientoEquipos.tsx",
                                                lineNumber: 117,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].legendText,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].legendLabel,
                                                        children: item.group
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/profiles/director/estadisticas/RendimientoEquipos.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].legendValue,
                                                        children: [
                                                            item.volume.toLocaleString(),
                                                            " (",
                                                            percentage.toFixed(1),
                                                            "%)"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/profiles/director/estadisticas/RendimientoEquipos.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/profiles/director/estadisticas/RendimientoEquipos.tsx",
                                                lineNumber: 121,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, item.group, true, {
                                        fileName: "[project]/components/profiles/director/estadisticas/RendimientoEquipos.tsx",
                                        lineNumber: 116,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/profiles/director/estadisticas/RendimientoEquipos.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/profiles/director/estadisticas/RendimientoEquipos.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/profiles/director/estadisticas/RendimientoEquipos.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/profiles/director/estadisticas/RendimientoEquipos.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/profiles/director/estadisticas/FinanzasGenerales.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "barContainer": "FinanzasGenerales-module__jgfQkG__barContainer",
  "cardSubtitle": "FinanzasGenerales-module__jgfQkG__cardSubtitle",
  "cardTitle": "FinanzasGenerales-module__jgfQkG__cardTitle",
  "chartArea": "FinanzasGenerales-module__jgfQkG__chartArea",
  "chartBarGroup": "FinanzasGenerales-module__jgfQkG__chartBarGroup",
  "chartContainer": "FinanzasGenerales-module__jgfQkG__chartContainer",
  "chartGrid": "FinanzasGenerales-module__jgfQkG__chartGrid",
  "chartLegend": "FinanzasGenerales-module__jgfQkG__chartLegend",
  "chartYAxis": "FinanzasGenerales-module__jgfQkG__chartYAxis",
  "clientsBar": "FinanzasGenerales-module__jgfQkG__clientsBar",
  "costAmount": "FinanzasGenerales-module__jgfQkG__costAmount",
  "costBreakdown": "FinanzasGenerales-module__jgfQkG__costBreakdown",
  "costCard": "FinanzasGenerales-module__jgfQkG__costCard",
  "costCategory": "FinanzasGenerales-module__jgfQkG__costCategory",
  "costChart": "FinanzasGenerales-module__jgfQkG__costChart",
  "costColor": "FinanzasGenerales-module__jgfQkG__costColor",
  "costItem": "FinanzasGenerales-module__jgfQkG__costItem",
  "costItemHeader": "FinanzasGenerales-module__jgfQkG__costItemHeader",
  "costItemValues": "FinanzasGenerales-module__jgfQkG__costItemValues",
  "costPercentage": "FinanzasGenerales-module__jgfQkG__costPercentage",
  "finanzasGenerales": "FinanzasGenerales-module__jgfQkG__finanzasGenerales",
  "growthBar": "FinanzasGenerales-module__jgfQkG__growthBar",
  "growthCard": "FinanzasGenerales-module__jgfQkG__growthCard",
  "growthChart": "FinanzasGenerales-module__jgfQkG__growthChart",
  "legendColor": "FinanzasGenerales-module__jgfQkG__legendColor",
  "legendItem": "FinanzasGenerales-module__jgfQkG__legendItem",
  "monthLabel": "FinanzasGenerales-module__jgfQkG__monthLabel",
  "stackedBar": "FinanzasGenerales-module__jgfQkG__stackedBar",
  "stackedBars": "FinanzasGenerales-module__jgfQkG__stackedBars",
});
}),
"[project]/components/profiles/director/estadisticas/FinanzasGenerales.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FinanzasGenerales
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$FinanzasGenerales$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/profiles/director/estadisticas/FinanzasGenerales.module.css [app-ssr] (css module)");
'use client';
;
;
;
function FinanzasGenerales({ timeframe }) {
    // Mock data - replace with real data from API
    const [growthData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            month: 'Jan',
            revenueGrowth: 5.2,
            newClients: 8
        },
        {
            month: 'Feb',
            revenueGrowth: 7.8,
            newClients: 12
        },
        {
            month: 'Mar',
            revenueGrowth: 4.5,
            newClients: 10
        },
        {
            month: 'Apr',
            revenueGrowth: 9.2,
            newClients: 15
        },
        {
            month: 'May',
            revenueGrowth: 6.8,
            newClients: 11
        },
        {
            month: 'Jun',
            revenueGrowth: 8.5,
            newClients: 14
        },
        {
            month: 'Jul',
            revenueGrowth: 7.2,
            newClients: 13
        },
        {
            month: 'Aug',
            revenueGrowth: 10.1,
            newClients: 16
        },
        {
            month: 'Sep',
            revenueGrowth: 8.9,
            newClients: 18
        },
        {
            month: 'Oct',
            revenueGrowth: 9.5,
            newClients: 17
        },
        {
            month: 'Nov',
            revenueGrowth: 11.2,
            newClients: 20
        },
        {
            month: 'Dec',
            revenueGrowth: 12.5,
            newClients: 22
        }
    ]);
    const [costData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            category: 'Nómina',
            amount: 450000,
            color: 'var(--azure)'
        },
        {
            category: 'Comisiones',
            amount: 320000,
            color: 'var(--success)'
        },
        {
            category: 'Software/Servidor',
            amount: 85000,
            color: 'var(--warning)'
        },
        {
            category: 'Oficina/Renta',
            amount: 120000,
            color: 'var(--danger)'
        }
    ]);
    const maxGrowth = Math.max(...growthData.map((d)=>d.revenueGrowth));
    const maxClients = Math.max(...growthData.map((d)=>d.newClients));
    const totalCosts = costData.reduce((sum, item)=>sum + item.amount, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$FinanzasGenerales$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].finanzasGenerales,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$FinanzasGenerales$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].growthCard,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$FinanzasGenerales$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardTitle,
                        children: "Trayectoria de Crecimiento"
                    }, void 0, false, {
                        fileName: "[project]/components/profiles/director/estadisticas/FinanzasGenerales.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$FinanzasGenerales$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].growthChart,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$FinanzasGenerales$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chartContainer,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$FinanzasGenerales$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chartYAxis,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Crecimiento de Ingresos %"
                                        }, void 0, false, {
                                            fileName: "[project]/components/profiles/director/estadisticas/FinanzasGenerales.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/director/estadisticas/FinanzasGenerales.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$FinanzasGenerales$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chartArea,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$FinanzasGenerales$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chartGrid,
                                            children: growthData.map((data, index)=>{
                                                const growthHeight = data.revenueGrowth / maxGrowth * 100;
                                                const clientsHeight = data.newClients / maxClients * 100;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$FinanzasGenerales$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chartBarGroup,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$FinanzasGenerales$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barContainer,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$FinanzasGenerales$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].growthBar,
                                                                    style: {
                                                                        height: `${growthHeight}%`
                                                                    },
                                                                    title: `${data.month}: ${data.revenueGrowth}% crecimiento`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/profiles/director/estadisticas/FinanzasGenerales.tsx",
                                                                    lineNumber: 71,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$FinanzasGenerales$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].clientsBar,
                                                                    style: {
                                                                        height: `${clientsHeight}%`
                                                                    },
                                                                    title: `${data.month}: ${data.newClients} clientes nuevos`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/profiles/director/estadisticas/FinanzasGenerales.tsx",
                                                                    lineNumber: 76,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/profiles/director/estadisticas/FinanzasGenerales.tsx",
                                                            lineNumber: 70,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$FinanzasGenerales$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].monthLabel,
                                                            children: data.month
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/profiles/director/estadisticas/FinanzasGenerales.tsx",
                                                            lineNumber: 82,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/components/profiles/director/estadisticas/FinanzasGenerales.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 21
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/components/profiles/director/estadisticas/FinanzasGenerales.tsx",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/director/estadisticas/FinanzasGenerales.tsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/profiles/director/estadisticas/FinanzasGenerales.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$FinanzasGenerales$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chartLegend,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$FinanzasGenerales$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].legendItem,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$FinanzasGenerales$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].legendColor,
                                                style: {
                                                    background: 'var(--azure)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/profiles/director/estadisticas/FinanzasGenerales.tsx",
                                                lineNumber: 91,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Crecimiento de Ingresos (%)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/profiles/director/estadisticas/FinanzasGenerales.tsx",
                                                lineNumber: 92,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/profiles/director/estadisticas/FinanzasGenerales.tsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$FinanzasGenerales$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].legendItem,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$FinanzasGenerales$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].legendColor,
                                                style: {
                                                    background: 'var(--success)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/profiles/director/estadisticas/FinanzasGenerales.tsx",
                                                lineNumber: 95,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Adquisición de Nuevos Clientes"
                                            }, void 0, false, {
                                                fileName: "[project]/components/profiles/director/estadisticas/FinanzasGenerales.tsx",
                                                lineNumber: 96,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/profiles/director/estadisticas/FinanzasGenerales.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/profiles/director/estadisticas/FinanzasGenerales.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/profiles/director/estadisticas/FinanzasGenerales.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/profiles/director/estadisticas/FinanzasGenerales.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$FinanzasGenerales$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].costCard,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$FinanzasGenerales$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardTitle,
                        children: "Análisis de Costos"
                    }, void 0, false, {
                        fileName: "[project]/components/profiles/director/estadisticas/FinanzasGenerales.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$FinanzasGenerales$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardSubtitle,
                        children: "Distribución de costos relativos a los ingresos"
                    }, void 0, false, {
                        fileName: "[project]/components/profiles/director/estadisticas/FinanzasGenerales.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$FinanzasGenerales$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].costChart,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$FinanzasGenerales$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stackedBars,
                                children: costData.map((cost, index)=>{
                                    const width = cost.amount / totalCosts * 100;
                                    const offset = costData.slice(0, index).reduce((sum, item)=>sum + item.amount / totalCosts * 100, 0);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$FinanzasGenerales$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stackedBar,
                                        style: {
                                            width: `${width}%`,
                                            background: cost.color,
                                            left: `${offset}%`
                                        },
                                        title: `${cost.category}: $${cost.amount.toLocaleString()}`
                                    }, cost.category, false, {
                                        fileName: "[project]/components/profiles/director/estadisticas/FinanzasGenerales.tsx",
                                        lineNumber: 117,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/profiles/director/estadisticas/FinanzasGenerales.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$FinanzasGenerales$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].costBreakdown,
                                children: costData.map((cost)=>{
                                    const percentage = cost.amount / totalCosts * 100;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$FinanzasGenerales$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].costItem,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$FinanzasGenerales$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].costItemHeader,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$FinanzasGenerales$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].costColor,
                                                        style: {
                                                            background: cost.color
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/profiles/director/estadisticas/FinanzasGenerales.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$FinanzasGenerales$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].costCategory,
                                                        children: cost.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/profiles/director/estadisticas/FinanzasGenerales.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/profiles/director/estadisticas/FinanzasGenerales.tsx",
                                                lineNumber: 135,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$FinanzasGenerales$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].costItemValues,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$FinanzasGenerales$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].costAmount,
                                                        children: [
                                                            "$",
                                                            cost.amount.toLocaleString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/profiles/director/estadisticas/FinanzasGenerales.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$FinanzasGenerales$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].costPercentage,
                                                        children: [
                                                            percentage.toFixed(1),
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/profiles/director/estadisticas/FinanzasGenerales.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/profiles/director/estadisticas/FinanzasGenerales.tsx",
                                                lineNumber: 142,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, cost.category, true, {
                                        fileName: "[project]/components/profiles/director/estadisticas/FinanzasGenerales.tsx",
                                        lineNumber: 134,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/profiles/director/estadisticas/FinanzasGenerales.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/profiles/director/estadisticas/FinanzasGenerales.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/profiles/director/estadisticas/FinanzasGenerales.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/profiles/director/estadisticas/FinanzasGenerales.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/profiles/director/estadisticas/Estadisticas.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "Estadisticas-module__HAPPeG__active",
  "estadisticas": "Estadisticas-module__HAPPeG__estadisticas",
  "estadisticasContent": "Estadisticas-module__HAPPeG__estadisticasContent",
  "refreshBtn": "Estadisticas-module__HAPPeG__refreshBtn",
  "spin": "Estadisticas-module__HAPPeG__spin",
  "spinning": "Estadisticas-module__HAPPeG__spinning",
  "tabContent": "Estadisticas-module__HAPPeG__tabContent",
  "timeframeBtn": "Estadisticas-module__HAPPeG__timeframeBtn",
  "timeframeSelect": "Estadisticas-module__HAPPeG__timeframeSelect",
  "topBar": "Estadisticas-module__HAPPeG__topBar",
});
}),
"[project]/components/profiles/director/estadisticas/Estadisticas.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Estadisticas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$NavigationContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/NavigationContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEmpleados$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/profiles/director/estadisticas/RendimientoEmpleados.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoClientes$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/profiles/director/estadisticas/RendimientoClientes.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEquipos$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/profiles/director/estadisticas/RendimientoEquipos.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$FinanzasGenerales$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/profiles/director/estadisticas/FinanzasGenerales.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/shared/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$RefreshButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshButton$3e$__ = __turbopack_context__.i("[project]/components/shared/RefreshButton.tsx [app-ssr] (ecmascript) <export default as RefreshButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$Estadisticas$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/profiles/director/estadisticas/Estadisticas.module.css [app-ssr] (css module)");
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
function Estadisticas() {
    const { activeItem } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$NavigationContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNavigation"])();
    const [activeTimeframe, setActiveTimeframe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('last30Days');
    const [isRefreshing, setIsRefreshing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Determine active tab from navigation context
    const activeTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (activeItem === 'estadisticas-empleados') return 'empleados';
        if (activeItem === 'estadisticas-clientes') return 'clientes';
        if (activeItem === 'estadisticas-equipos') return 'equipos';
        if (activeItem === 'estadisticas-finanzas') return 'finanzas';
        // Default to empleados if estadisticas is clicked directly
        if (activeItem === 'estadisticas') return 'empleados';
        return 'empleados';
    }, [
        activeItem
    ]);
    const timeframes = [
        {
            id: 'last30Days',
            label: 'Últimos 30 Días'
        },
        {
            id: 'lastQuarter',
            label: 'Trimestre Anterior'
        },
        {
            id: 'yearToDate',
            label: 'Año a la Fecha'
        }
    ];
    const refresh = async ()=>{
        setIsRefreshing(true);
        // TODO: Implement SQL query refresh logic
        // This would trigger live SQL queries to update all data
        await new Promise((resolve)=>setTimeout(resolve, 1000)); // Simulate API call
        setIsRefreshing(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$Estadisticas$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].estadisticas,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$Estadisticas$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].estadisticasContent,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$Estadisticas$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].topBar,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$Estadisticas$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].timeframeSelect,
                            children: timeframes.map((timeframe)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$Estadisticas$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].timeframeBtn} ${activeTimeframe === timeframe.id ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$Estadisticas$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : ''}`,
                                    onClick: ()=>setActiveTimeframe(timeframe.id),
                                    children: timeframe.label
                                }, timeframe.id, false, {
                                    fileName: "[project]/components/profiles/director/estadisticas/Estadisticas.tsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/director/estadisticas/Estadisticas.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$RefreshButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshButton$3e$__["RefreshButton"], {
                            onClick: refresh,
                            isRefreshing: isRefreshing
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/director/estadisticas/Estadisticas.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/profiles/director/estadisticas/Estadisticas.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$Estadisticas$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tabContent,
                    children: [
                        activeTab === 'empleados' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEmpleados$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            timeframe: activeTimeframe
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/director/estadisticas/Estadisticas.tsx",
                            lineNumber: 70,
                            columnNumber: 13
                        }, this),
                        activeTab === 'clientes' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoClientes$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            timeframe: activeTimeframe
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/director/estadisticas/Estadisticas.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this),
                        activeTab === 'equipos' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$RendimientoEquipos$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            timeframe: activeTimeframe
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/director/estadisticas/Estadisticas.tsx",
                            lineNumber: 76,
                            columnNumber: 13
                        }, this),
                        activeTab === 'finanzas' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$FinanzasGenerales$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            timeframe: activeTimeframe
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/director/estadisticas/Estadisticas.tsx",
                            lineNumber: 79,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/profiles/director/estadisticas/Estadisticas.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/profiles/director/estadisticas/Estadisticas.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/profiles/director/estadisticas/Estadisticas.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/profiles/director/estadisticas/EstadisticasOverview.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "EstadisticasOverview-module__5GpfGG__active",
  "overview": "EstadisticasOverview-module__5GpfGG__overview",
  "overviewContent": "EstadisticasOverview-module__5GpfGG__overviewContent",
  "refreshBtn": "EstadisticasOverview-module__5GpfGG__refreshBtn",
  "spin": "EstadisticasOverview-module__5GpfGG__spin",
  "spinning": "EstadisticasOverview-module__5GpfGG__spinning",
  "timeframeBtn": "EstadisticasOverview-module__5GpfGG__timeframeBtn",
  "timeframeSelect": "EstadisticasOverview-module__5GpfGG__timeframeSelect",
  "topBar": "EstadisticasOverview-module__5GpfGG__topBar",
});
}),
"[project]/components/profiles/director/estadisticas/EstadisticasOverview.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EstadisticasOverview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$dashboard$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/profiles/director/dashboard/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$dashboard$2f$KpiStrip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__KpiStrip$3e$__ = __turbopack_context__.i("[project]/components/profiles/director/dashboard/KpiStrip.tsx [app-ssr] (ecmascript) <export default as KpiStrip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$dashboard$2f$KpiCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__KpiCard$3e$__ = __turbopack_context__.i("[project]/components/profiles/director/dashboard/KpiCard.tsx [app-ssr] (ecmascript) <export default as KpiCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/shared/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$RefreshButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshButton$3e$__ = __turbopack_context__.i("[project]/components/shared/RefreshButton.tsx [app-ssr] (ecmascript) <export default as RefreshButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$EstadisticasOverview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/profiles/director/estadisticas/EstadisticasOverview.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
;
function EstadisticasOverview() {
    const [activeTimeframe, setActiveTimeframe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('last30Days');
    const [isRefreshing, setIsRefreshing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const timeframes = [
        {
            id: 'last30Days',
            label: 'Últimos 30 Días'
        },
        {
            id: 'lastQuarter',
            label: 'Trimestre Anterior'
        },
        {
            id: 'yearToDate',
            label: 'Año a la Fecha'
        }
    ];
    // Mock data - replace with real SQL queries
    const [kpiData, setKpiData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        totalRevenue: 2145800,
        activeProjects: 24,
        teamPerformance: 87,
        clientSatisfaction: 92
    });
    const refresh = async ()=>{
        setIsRefreshing(true);
        // TODO: Implement SQL query refresh logic
        // This would trigger live SQL queries to update all data
        await new Promise((resolve)=>setTimeout(resolve, 1000)); // Simulate API call
        setIsRefreshing(false);
    };
    const formatCurrency = (value)=>{
        return new Intl.NumberFormat('es-MX', {
            style: 'currency',
            currency: 'MXN',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(value);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$EstadisticasOverview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].overview,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$EstadisticasOverview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].overviewContent,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$EstadisticasOverview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].topBar,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$EstadisticasOverview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].timeframeSelect,
                            children: timeframes.map((timeframe)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$EstadisticasOverview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].timeframeBtn} ${activeTimeframe === timeframe.id ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$EstadisticasOverview$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : ''}`,
                                    onClick: ()=>setActiveTimeframe(timeframe.id),
                                    children: timeframe.label
                                }, timeframe.id, false, {
                                    fileName: "[project]/components/profiles/director/estadisticas/EstadisticasOverview.tsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/director/estadisticas/EstadisticasOverview.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$RefreshButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshButton$3e$__["RefreshButton"], {
                            onClick: refresh,
                            isRefreshing: isRefreshing
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/director/estadisticas/EstadisticasOverview.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/profiles/director/estadisticas/EstadisticasOverview.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$dashboard$2f$KpiStrip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__KpiStrip$3e$__["KpiStrip"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$dashboard$2f$KpiCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__KpiCard$3e$__["KpiCard"], {
                            label: "Ingresos Totales",
                            value: formatCurrency(kpiData.totalRevenue),
                            change: {
                                direction: 'up',
                                text: '+12% vs período anterior'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/director/estadisticas/EstadisticasOverview.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$dashboard$2f$KpiCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__KpiCard$3e$__["KpiCard"], {
                            label: "Proyectos Activos",
                            value: kpiData.activeProjects.toString(),
                            change: {
                                direction: 'up',
                                text: '+3 proyectos nuevos'
                            },
                            variant: "success"
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/director/estadisticas/EstadisticasOverview.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$dashboard$2f$KpiCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__KpiCard$3e$__["KpiCard"], {
                            label: "Rendimiento del Equipo",
                            value: `${kpiData.teamPerformance}%`,
                            change: {
                                direction: 'up',
                                text: '+5% mejora'
                            },
                            variant: "success"
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/director/estadisticas/EstadisticasOverview.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$dashboard$2f$KpiCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__KpiCard$3e$__["KpiCard"], {
                            label: "Satisfacción del Cliente",
                            value: `${kpiData.clientSatisfaction}%`,
                            change: {
                                direction: 'up',
                                text: '+2% increase'
                            },
                            variant: "success"
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/director/estadisticas/EstadisticasOverview.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/profiles/director/estadisticas/EstadisticasOverview.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/profiles/director/estadisticas/EstadisticasOverview.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/profiles/director/estadisticas/EstadisticasOverview.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/profiles/director/estadisticas/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$Estadisticas$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/profiles/director/estadisticas/Estadisticas.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$EstadisticasOverview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/profiles/director/estadisticas/EstadisticasOverview.tsx [app-ssr] (ecmascript)");
;
;
}),
"[project]/components/profiles/director/estadisticas/Estadisticas.tsx [app-ssr] (ecmascript) <export default as Estadisticas>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Estadisticas",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$Estadisticas$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$estadisticas$2f$Estadisticas$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/profiles/director/estadisticas/Estadisticas.tsx [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=components_profiles_director_estadisticas_f5e64c93._.js.map