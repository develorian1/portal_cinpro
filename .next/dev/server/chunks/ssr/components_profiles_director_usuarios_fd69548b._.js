module.exports = [
"[project]/components/profiles/director/usuarios/AdministrarAuxiliares.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actionBtn": "AdministrarAuxiliares-module__3pW-uq__actionBtn",
  "actionButtons": "AdministrarAuxiliares-module__3pW-uq__actionButtons",
  "auxiliares": "AdministrarAuxiliares-module__3pW-uq__auxiliares",
  "avatar": "AdministrarAuxiliares-module__3pW-uq__avatar",
  "chief": "AdministrarAuxiliares-module__3pW-uq__chief",
  "header": "AdministrarAuxiliares-module__3pW-uq__header",
  "name": "AdministrarAuxiliares-module__3pW-uq__name",
  "nameCell": "AdministrarAuxiliares-module__3pW-uq__nameCell",
  "pending": "AdministrarAuxiliares-module__3pW-uq__pending",
  "pendingHigh": "AdministrarAuxiliares-module__3pW-uq__pendingHigh",
  "tableContainer": "AdministrarAuxiliares-module__3pW-uq__tableContainer",
  "title": "AdministrarAuxiliares-module__3pW-uq__title",
  "workload": "AdministrarAuxiliares-module__3pW-uq__workload",
});
}),
"[project]/components/profiles/director/usuarios/AdministrarAuxiliares.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdministrarAuxiliares
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/shared/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$Table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__ = __turbopack_context__.i("[project]/components/shared/Table.tsx [app-ssr] (ecmascript) <export default as Table>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarAuxiliares$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/profiles/director/usuarios/AdministrarAuxiliares.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
function AdministrarAuxiliares() {
    // Mock data - replace with real data from API
    const [auxiliares] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: '1',
            name: 'María González',
            workload: 15,
            pendingItems: 8,
            chiefAssigned: 'Carlos Ramírez'
        },
        {
            id: '2',
            name: 'Juan Pérez',
            workload: 12,
            pendingItems: 3,
            chiefAssigned: 'Ana Martínez'
        },
        {
            id: '3',
            name: 'Laura Sánchez',
            workload: 18,
            pendingItems: 15,
            chiefAssigned: 'Carlos Ramírez'
        },
        {
            id: '4',
            name: 'Pedro López',
            workload: 10,
            pendingItems: 2,
            chiefAssigned: 'Ana Martínez'
        }
    ]);
    const getInitials = (name)=>{
        return name.split(' ').map((n)=>n[0]).join('').toUpperCase().substring(0, 2);
    };
    const handleEditProfile = (id)=>{
        // TODO: Implement edit profile logic
        console.log('Edit profile:', id);
    };
    const handleResetPassword = (id)=>{
        // TODO: Implement reset password logic
        console.log('Reset password:', id);
    };
    const handleViewLogs = (id)=>{
        // TODO: Implement view logs logic
        console.log('View logs:', id);
    };
    const columns = [
        {
            key: 'name',
            header: 'Nombre',
            render: (auxiliar)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarAuxiliares$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].nameCell,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarAuxiliares$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].avatar,
                            children: auxiliar.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: auxiliar.avatar,
                                alt: auxiliar.name
                            }, void 0, false, {
                                fileName: "[project]/components/profiles/director/usuarios/AdministrarAuxiliares.tsx",
                                lineNumber: 81,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: getInitials(auxiliar.name)
                            }, void 0, false, {
                                fileName: "[project]/components/profiles/director/usuarios/AdministrarAuxiliares.tsx",
                                lineNumber: 83,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/director/usuarios/AdministrarAuxiliares.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarAuxiliares$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].name,
                            children: auxiliar.name
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/director/usuarios/AdministrarAuxiliares.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/profiles/director/usuarios/AdministrarAuxiliares.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
        },
        {
            key: 'workload',
            header: 'Carga de Trabajo',
            render: (auxiliar)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarAuxiliares$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].workload,
                    children: [
                        auxiliar.workload,
                        " Clientes Activos"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/profiles/director/usuarios/AdministrarAuxiliares.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this)
        },
        {
            key: 'pendingItems',
            header: 'Elementos Pendientes',
            render: (auxiliar)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: auxiliar.pendingItems > 10 ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarAuxiliares$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pendingHigh : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarAuxiliares$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pending,
                    children: auxiliar.pendingItems
                }, void 0, false, {
                    fileName: "[project]/components/profiles/director/usuarios/AdministrarAuxiliares.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this)
        },
        {
            key: 'chief',
            header: 'Jefe Asignado',
            render: (auxiliar)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarAuxiliares$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chief,
                    children: auxiliar.chiefAssigned
                }, void 0, false, {
                    fileName: "[project]/components/profiles/director/usuarios/AdministrarAuxiliares.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this)
        },
        {
            key: 'action',
            header: 'Acción',
            render: (auxiliar)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarAuxiliares$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].actionButtons,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarAuxiliares$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].actionBtn,
                            onClick: (e)=>{
                                e.stopPropagation();
                                handleEditProfile(auxiliar.id);
                            },
                            title: "Editar Perfil",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/director/usuarios/AdministrarAuxiliares.tsx",
                                        lineNumber: 129,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/director/usuarios/AdministrarAuxiliares.tsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/profiles/director/usuarios/AdministrarAuxiliares.tsx",
                                lineNumber: 128,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/director/usuarios/AdministrarAuxiliares.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarAuxiliares$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].actionBtn,
                            onClick: (e)=>{
                                e.stopPropagation();
                                handleResetPassword(auxiliar.id);
                            },
                            title: "Restablecer Contraseña",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "3",
                                        y: "11",
                                        width: "18",
                                        height: "11",
                                        rx: "2",
                                        ry: "2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/director/usuarios/AdministrarAuxiliares.tsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M7 11V7a5 5 0 0 1 10 0v4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/director/usuarios/AdministrarAuxiliares.tsx",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/profiles/director/usuarios/AdministrarAuxiliares.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/director/usuarios/AdministrarAuxiliares.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarAuxiliares$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].actionBtn,
                            onClick: (e)=>{
                                e.stopPropagation();
                                handleViewLogs(auxiliar.id);
                            },
                            title: "Ver Registros",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                    points: "22 12 18 12 15 21 9 3 6 12 2 12"
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/usuarios/AdministrarAuxiliares.tsx",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/profiles/director/usuarios/AdministrarAuxiliares.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/director/usuarios/AdministrarAuxiliares.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/profiles/director/usuarios/AdministrarAuxiliares.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarAuxiliares$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].auxiliares,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$Table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__["Table"], {
            data: auxiliares,
            columns: columns,
            keyExtractor: (auxiliar)=>auxiliar.id,
            containerClassName: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarAuxiliares$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tableContainer
        }, void 0, false, {
            fileName: "[project]/components/profiles/director/usuarios/AdministrarAuxiliares.tsx",
            lineNumber: 165,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/profiles/director/usuarios/AdministrarAuxiliares.tsx",
        lineNumber: 164,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/profiles/director/usuarios/AdministrarAdmins.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actionBtn": "AdministrarAdmins-module__kObK5G__actionBtn",
  "actionButtons": "AdministrarAdmins-module__kObK5G__actionButtons",
  "activity": "AdministrarAdmins-module__kObK5G__activity",
  "admins": "AdministrarAdmins-module__kObK5G__admins",
  "avatar": "AdministrarAdmins-module__kObK5G__avatar",
  "header": "AdministrarAdmins-module__kObK5G__header",
  "lastActive": "AdministrarAdmins-module__kObK5G__lastActive",
  "name": "AdministrarAdmins-module__kObK5G__name",
  "nameCell": "AdministrarAdmins-module__kObK5G__nameCell",
  "revokeBtn": "AdministrarAdmins-module__kObK5G__revokeBtn",
  "role": "AdministrarAdmins-module__kObK5G__role",
  "tableContainer": "AdministrarAdmins-module__kObK5G__tableContainer",
  "title": "AdministrarAdmins-module__kObK5G__title",
});
}),
"[project]/components/profiles/director/usuarios/AdministrarAdmins.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdministrarAdmins
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/shared/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$Table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__ = __turbopack_context__.i("[project]/components/shared/Table.tsx [app-ssr] (ecmascript) <export default as Table>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarAdmins$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/profiles/director/usuarios/AdministrarAdmins.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
function AdministrarAdmins() {
    // Mock data - replace with real data from API
    const [admins] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: '1',
            name: 'Roberto Fernández',
            role: 'General Admin',
            lastActive: '2024-01-15 14:30',
            keyActivity: 'Verified 45 payments this month'
        },
        {
            id: '2',
            name: 'Sofía Martínez',
            role: 'General Admin',
            lastActive: '2024-01-15 10:15',
            keyActivity: 'Processed 120 invoices this month'
        },
        {
            id: '3',
            name: 'Diego Hernández',
            role: 'General Admin',
            lastActive: '2024-01-14 18:45',
            keyActivity: 'Updated 30 client records this month'
        },
        {
            id: '4',
            name: 'Carmen Ruiz',
            role: 'General Admin',
            lastActive: '2024-01-15 09:20',
            keyActivity: 'Approved 25 expense reports this month'
        }
    ]);
    const getInitials = (name)=>{
        return name.split(' ').map((n)=>n[0]).join('').toUpperCase().substring(0, 2);
    };
    const formatTimestamp = (timestamp)=>{
        const date = new Date(timestamp);
        return date.toLocaleString('es-MX', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };
    const handleEditProfile = (id)=>{
        // TODO: Implement edit profile logic
        console.log('Edit profile:', id);
    };
    const handleRevokeAccess = (id)=>{
        // TODO: Implement revoke access logic
        if (confirm('¿Estás seguro de que deseas revocar el acceso de este administrador?')) {
            console.log('Revoke access:', id);
        }
    };
    const columns = [
        {
            key: 'name',
            header: 'Nombre',
            render: (admin)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarAdmins$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].nameCell,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarAdmins$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].avatar,
                            children: admin.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: admin.avatar,
                                alt: admin.name
                            }, void 0, false, {
                                fileName: "[project]/components/profiles/director/usuarios/AdministrarAdmins.tsx",
                                lineNumber: 88,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: getInitials(admin.name)
                            }, void 0, false, {
                                fileName: "[project]/components/profiles/director/usuarios/AdministrarAdmins.tsx",
                                lineNumber: 90,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/director/usuarios/AdministrarAdmins.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarAdmins$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].name,
                            children: admin.name
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/director/usuarios/AdministrarAdmins.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/profiles/director/usuarios/AdministrarAdmins.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this)
        },
        {
            key: 'role',
            header: 'Rol',
            render: (admin)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarAdmins$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].role,
                    children: admin.role
                }, void 0, false, {
                    fileName: "[project]/components/profiles/director/usuarios/AdministrarAdmins.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this)
        },
        {
            key: 'lastActive',
            header: 'Última Actividad',
            render: (admin)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarAdmins$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].lastActive,
                    children: formatTimestamp(admin.lastActive)
                }, void 0, false, {
                    fileName: "[project]/components/profiles/director/usuarios/AdministrarAdmins.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this)
        },
        {
            key: 'activity',
            header: 'Actividad Clave',
            render: (admin)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarAdmins$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].activity,
                    children: admin.keyActivity
                }, void 0, false, {
                    fileName: "[project]/components/profiles/director/usuarios/AdministrarAdmins.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, this)
        },
        {
            key: 'action',
            header: 'Acción',
            render: (admin)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarAdmins$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].actionButtons,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarAdmins$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].actionBtn,
                            onClick: (e)=>{
                                e.stopPropagation();
                                handleEditProfile(admin.id);
                            },
                            title: "Editar Perfil",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/director/usuarios/AdministrarAdmins.tsx",
                                        lineNumber: 134,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/director/usuarios/AdministrarAdmins.tsx",
                                        lineNumber: 135,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/profiles/director/usuarios/AdministrarAdmins.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/director/usuarios/AdministrarAdmins.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarAdmins$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].actionBtn} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarAdmins$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].revokeBtn}`,
                            onClick: (e)=>{
                                e.stopPropagation();
                                handleRevokeAccess(admin.id);
                            },
                            title: "Revocar Acceso",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "12",
                                        cy: "12",
                                        r: "10"
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/director/usuarios/AdministrarAdmins.tsx",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "15",
                                        y1: "9",
                                        x2: "9",
                                        y2: "15"
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/director/usuarios/AdministrarAdmins.tsx",
                                        lineNumber: 148,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "9",
                                        y1: "9",
                                        x2: "15",
                                        y2: "15"
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/director/usuarios/AdministrarAdmins.tsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/profiles/director/usuarios/AdministrarAdmins.tsx",
                                lineNumber: 146,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/director/usuarios/AdministrarAdmins.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/profiles/director/usuarios/AdministrarAdmins.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarAdmins$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].admins,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$Table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__["Table"], {
            data: admins,
            columns: columns,
            keyExtractor: (admin)=>admin.id,
            containerClassName: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarAdmins$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tableContainer
        }, void 0, false, {
            fileName: "[project]/components/profiles/director/usuarios/AdministrarAdmins.tsx",
            lineNumber: 159,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/profiles/director/usuarios/AdministrarAdmins.tsx",
        lineNumber: 158,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/profiles/director/usuarios/AdministrarJefes.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actionBtn": "AdministrarJefes-module__S0pCDG__actionBtn",
  "avatar": "AdministrarJefes-module__S0pCDG__avatar",
  "card": "AdministrarJefes-module__S0pCDG__card",
  "cardActions": "AdministrarJefes-module__S0pCDG__cardActions",
  "cardBody": "AdministrarJefes-module__S0pCDG__cardBody",
  "cardHeader": "AdministrarJefes-module__S0pCDG__cardHeader",
  "cardsGrid": "AdministrarJefes-module__S0pCDG__cardsGrid",
  "chiefDetails": "AdministrarJefes-module__S0pCDG__chiefDetails",
  "chiefInfo": "AdministrarJefes-module__S0pCDG__chiefInfo",
  "chiefName": "AdministrarJefes-module__S0pCDG__chiefName",
  "education": "AdministrarJefes-module__S0pCDG__education",
  "groupBadge": "AdministrarJefes-module__S0pCDG__groupBadge",
  "header": "AdministrarJefes-module__S0pCDG__header",
  "industrial": "AdministrarJefes-module__S0pCDG__industrial",
  "jefes": "AdministrarJefes-module__S0pCDG__jefes",
  "medical": "AdministrarJefes-module__S0pCDG__medical",
  "retail": "AdministrarJefes-module__S0pCDG__retail",
  "stat": "AdministrarJefes-module__S0pCDG__stat",
  "statLabel": "AdministrarJefes-module__S0pCDG__statLabel",
  "statValue": "AdministrarJefes-module__S0pCDG__statValue",
  "title": "AdministrarJefes-module__S0pCDG__title",
});
}),
"[project]/components/profiles/director/usuarios/AdministrarJefes.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdministrarJefes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarJefes$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/profiles/director/usuarios/AdministrarJefes.module.css [app-ssr] (css module)");
'use client';
;
;
;
function AdministrarJefes() {
    // Mock data - replace with real data from API
    const [jefes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: '1',
            name: 'Carlos Ramírez',
            groupManaged: 'Medical Group',
            teamSize: 5,
            performance: 'Group Revenue: $500k/mo'
        },
        {
            id: '2',
            name: 'Ana Martínez',
            groupManaged: 'Industrial Group',
            teamSize: 4,
            performance: 'Group Revenue: $420k/mo'
        },
        {
            id: '3',
            name: 'Luis García',
            groupManaged: 'Education Group',
            teamSize: 3,
            performance: 'Group Revenue: $380k/mo'
        },
        {
            id: '4',
            name: 'Patricia López',
            groupManaged: 'Retail Group',
            teamSize: 6,
            performance: 'Group Revenue: $650k/mo'
        }
    ]);
    const getInitials = (name)=>{
        return name.split(' ').map((n)=>n[0]).join('').toUpperCase().substring(0, 2);
    };
    const getGroupBadgeClass = (groupName)=>{
        const groupLower = groupName.toLowerCase();
        if (groupLower.includes('medical')) return 'medical';
        if (groupLower.includes('industrial')) return 'industrial';
        if (groupLower.includes('education')) return 'education';
        if (groupLower.includes('retail')) return 'retail';
        return ''; // Default to base style if no match
    };
    const handleReassignGroup = (id)=>{
        // TODO: Implement reassign group logic
        console.log('Reassign group:', id);
    };
    const handleEditCommissionRate = (id)=>{
        // TODO: Implement edit commission rate logic
        console.log('Edit commission rate:', id);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarJefes$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].jefes,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarJefes$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardsGrid,
            children: jefes.map((jefe)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarJefes$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarJefes$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardHeader,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarJefes$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chiefInfo,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarJefes$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].avatar,
                                        children: jefe.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: jefe.avatar,
                                            alt: jefe.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/profiles/director/usuarios/AdministrarJefes.tsx",
                                            lineNumber: 85,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: getInitials(jefe.name)
                                        }, void 0, false, {
                                            fileName: "[project]/components/profiles/director/usuarios/AdministrarJefes.tsx",
                                            lineNumber: 87,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/director/usuarios/AdministrarJefes.tsx",
                                        lineNumber: 83,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarJefes$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chiefDetails,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarJefes$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chiefName,
                                                children: jefe.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/profiles/director/usuarios/AdministrarJefes.tsx",
                                                lineNumber: 91,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarJefes$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].groupBadge} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarJefes$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"][getGroupBadgeClass(jefe.groupManaged)]}`,
                                                children: jefe.groupManaged
                                            }, void 0, false, {
                                                fileName: "[project]/components/profiles/director/usuarios/AdministrarJefes.tsx",
                                                lineNumber: 92,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/profiles/director/usuarios/AdministrarJefes.tsx",
                                        lineNumber: 90,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/profiles/director/usuarios/AdministrarJefes.tsx",
                                lineNumber: 82,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/director/usuarios/AdministrarJefes.tsx",
                            lineNumber: 81,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarJefes$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardBody,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarJefes$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stat,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarJefes$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statLabel,
                                            children: "Tamaño del Equipo"
                                        }, void 0, false, {
                                            fileName: "[project]/components/profiles/director/usuarios/AdministrarJefes.tsx",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarJefes$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statValue,
                                            children: [
                                                "Gestionando ",
                                                jefe.teamSize,
                                                " Auxiliares"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/profiles/director/usuarios/AdministrarJefes.tsx",
                                            lineNumber: 102,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/profiles/director/usuarios/AdministrarJefes.tsx",
                                    lineNumber: 100,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarJefes$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stat,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarJefes$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statLabel,
                                            children: "Rendimiento"
                                        }, void 0, false, {
                                            fileName: "[project]/components/profiles/director/usuarios/AdministrarJefes.tsx",
                                            lineNumber: 107,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarJefes$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statValue,
                                            children: jefe.performance
                                        }, void 0, false, {
                                            fileName: "[project]/components/profiles/director/usuarios/AdministrarJefes.tsx",
                                            lineNumber: 108,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/profiles/director/usuarios/AdministrarJefes.tsx",
                                    lineNumber: 106,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profiles/director/usuarios/AdministrarJefes.tsx",
                            lineNumber: 99,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarJefes$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardActions,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarJefes$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].actionBtn,
                                    onClick: ()=>handleReassignGroup(jefe.id),
                                    children: "Reasignar Grupo"
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/usuarios/AdministrarJefes.tsx",
                                    lineNumber: 113,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarJefes$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].actionBtn,
                                    onClick: ()=>handleEditCommissionRate(jefe.id),
                                    children: "Editar Tasa de Comisión"
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/usuarios/AdministrarJefes.tsx",
                                    lineNumber: 119,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profiles/director/usuarios/AdministrarJefes.tsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this)
                    ]
                }, jefe.id, true, {
                    fileName: "[project]/components/profiles/director/usuarios/AdministrarJefes.tsx",
                    lineNumber: 80,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/profiles/director/usuarios/AdministrarJefes.tsx",
            lineNumber: 78,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/profiles/director/usuarios/AdministrarJefes.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/profiles/director/usuarios/CreateAuxiliarModal.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "cancelBtn": "CreateAuxiliarModal-module__-2UoHW__cancelBtn",
  "closeBtn": "CreateAuxiliarModal-module__-2UoHW__closeBtn",
  "errorMessage": "CreateAuxiliarModal-module__-2UoHW__errorMessage",
  "fadeIn": "CreateAuxiliarModal-module__-2UoHW__fadeIn",
  "formGroup": "CreateAuxiliarModal-module__-2UoHW__formGroup",
  "input": "CreateAuxiliarModal-module__-2UoHW__input",
  "inputError": "CreateAuxiliarModal-module__-2UoHW__inputError",
  "label": "CreateAuxiliarModal-module__-2UoHW__label",
  "modal": "CreateAuxiliarModal-module__-2UoHW__modal",
  "modalActions": "CreateAuxiliarModal-module__-2UoHW__modalActions",
  "modalContent": "CreateAuxiliarModal-module__-2UoHW__modalContent",
  "modalHeader": "CreateAuxiliarModal-module__-2UoHW__modalHeader",
  "modalSubtitle": "CreateAuxiliarModal-module__-2UoHW__modalSubtitle",
  "modalTitle": "CreateAuxiliarModal-module__-2UoHW__modalTitle",
  "overlay": "CreateAuxiliarModal-module__-2UoHW__overlay",
  "required": "CreateAuxiliarModal-module__-2UoHW__required",
  "select": "CreateAuxiliarModal-module__-2UoHW__select",
  "slideUp": "CreateAuxiliarModal-module__-2UoHW__slideUp",
  "submitBtn": "CreateAuxiliarModal-module__-2UoHW__submitBtn",
});
}),
"[project]/components/profiles/director/usuarios/CreateAuxiliarModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateAuxiliarModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAuxiliarModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/profiles/director/usuarios/CreateAuxiliarModal.module.css [app-ssr] (css module)");
'use client';
;
;
;
// Mock list of available chiefs - replace with real data from context/API
const availableChiefs = [
    {
        id: '1',
        name: 'Carlos Ramírez'
    },
    {
        id: '2',
        name: 'Ana Martínez'
    },
    {
        id: '3',
        name: 'Luis García'
    },
    {
        id: '4',
        name: 'Patricia López'
    }
];
function CreateAuxiliarModal({ isOpen, onClose, onSubmit }) {
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        password: '',
        chiefId: ''
    });
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!isOpen) return null;
    const validate = ()=>{
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = 'El nombre es requerido';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'El correo electrónico es requerido';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'El correo electrónico no es válido';
        }
        if (!formData.password.trim()) {
            newErrors.password = 'La contraseña es requerida';
        } else if (formData.password.length < 8) {
            newErrors.password = 'La contraseña debe tener al menos 8 caracteres';
        }
        if (!formData.chiefId) {
            newErrors.chiefId = 'Debe asignar un jefe';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!validate()) {
            return;
        }
        setIsSubmitting(true);
        try {
            await onSubmit(formData);
            // Reset form on success
            setFormData({
                name: '',
                email: '',
                password: '',
                chiefId: ''
            });
            setErrors({});
            onClose();
        } catch (error) {
            console.error('Error creating auxiliar:', error);
        } finally{
            setIsSubmitting(false);
        }
    };
    const handleChange = (field, value)=>{
        setFormData((prev)=>({
                ...prev,
                [field]: value
            }));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors((prev)=>({
                    ...prev,
                    [field]: ''
                }));
        }
    };
    const handleOverlayClick = (e)=>{
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAuxiliarModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].overlay,
        onClick: handleOverlayClick,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAuxiliarModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modal,
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAuxiliarModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalHeader,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAuxiliarModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalTitle,
                                    children: "Crear Nuevo Auxiliar"
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateAuxiliarModal.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAuxiliarModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalSubtitle,
                                    children: "Completa el formulario para crear un nuevo auxiliar"
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateAuxiliarModal.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profiles/director/usuarios/CreateAuxiliarModal.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAuxiliarModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].closeBtn,
                            onClick: onClose,
                            type: "button",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "18",
                                        y1: "6",
                                        x2: "6",
                                        y2: "18"
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/director/usuarios/CreateAuxiliarModal.tsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "6",
                                        y1: "6",
                                        x2: "18",
                                        y2: "18"
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/director/usuarios/CreateAuxiliarModal.tsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/profiles/director/usuarios/CreateAuxiliarModal.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/director/usuarios/CreateAuxiliarModal.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/profiles/director/usuarios/CreateAuxiliarModal.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAuxiliarModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalContent,
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAuxiliarModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "name",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAuxiliarModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                    children: [
                                        "Nombre Completo ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAuxiliarModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].required,
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/components/profiles/director/usuarios/CreateAuxiliarModal.tsx",
                                            lineNumber: 127,
                                            columnNumber: 31
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateAuxiliarModal.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "name",
                                    type: "text",
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAuxiliarModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input} ${errors.name ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAuxiliarModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputError : ''}`,
                                    value: formData.name,
                                    onChange: (e)=>handleChange('name', e.target.value),
                                    placeholder: "Ej: María González"
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateAuxiliarModal.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this),
                                errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAuxiliarModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].errorMessage,
                                    children: errors.name
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateAuxiliarModal.tsx",
                                    lineNumber: 137,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profiles/director/usuarios/CreateAuxiliarModal.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAuxiliarModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "email",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAuxiliarModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                    children: [
                                        "Correo Electrónico ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAuxiliarModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].required,
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/components/profiles/director/usuarios/CreateAuxiliarModal.tsx",
                                            lineNumber: 142,
                                            columnNumber: 34
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateAuxiliarModal.tsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "email",
                                    type: "email",
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAuxiliarModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input} ${errors.email ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAuxiliarModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputError : ''}`,
                                    value: formData.email,
                                    onChange: (e)=>handleChange('email', e.target.value),
                                    placeholder: "ejemplo@correo.com"
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateAuxiliarModal.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this),
                                errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAuxiliarModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].errorMessage,
                                    children: errors.email
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateAuxiliarModal.tsx",
                                    lineNumber: 152,
                                    columnNumber: 30
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profiles/director/usuarios/CreateAuxiliarModal.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAuxiliarModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "password",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAuxiliarModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                    children: [
                                        "Contraseña ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAuxiliarModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].required,
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/components/profiles/director/usuarios/CreateAuxiliarModal.tsx",
                                            lineNumber: 157,
                                            columnNumber: 26
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateAuxiliarModal.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "password",
                                    type: "password",
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAuxiliarModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input} ${errors.password ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAuxiliarModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputError : ''}`,
                                    value: formData.password,
                                    onChange: (e)=>handleChange('password', e.target.value),
                                    placeholder: "Mínimo 8 caracteres"
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateAuxiliarModal.tsx",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this),
                                errors.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAuxiliarModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].errorMessage,
                                    children: errors.password
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateAuxiliarModal.tsx",
                                    lineNumber: 167,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profiles/director/usuarios/CreateAuxiliarModal.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAuxiliarModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "chiefId",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAuxiliarModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                    children: [
                                        "Jefe Asignado ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAuxiliarModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].required,
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/components/profiles/director/usuarios/CreateAuxiliarModal.tsx",
                                            lineNumber: 172,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateAuxiliarModal.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    id: "chiefId",
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAuxiliarModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].select} ${errors.chiefId ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAuxiliarModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputError : ''}`,
                                    value: formData.chiefId,
                                    onChange: (e)=>handleChange('chiefId', e.target.value),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "Selecciona un jefe"
                                        }, void 0, false, {
                                            fileName: "[project]/components/profiles/director/usuarios/CreateAuxiliarModal.tsx",
                                            lineNumber: 180,
                                            columnNumber: 15
                                        }, this),
                                        availableChiefs.map((chief)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: chief.id,
                                                children: chief.name
                                            }, chief.id, false, {
                                                fileName: "[project]/components/profiles/director/usuarios/CreateAuxiliarModal.tsx",
                                                lineNumber: 182,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateAuxiliarModal.tsx",
                                    lineNumber: 174,
                                    columnNumber: 13
                                }, this),
                                errors.chiefId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAuxiliarModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].errorMessage,
                                    children: errors.chiefId
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateAuxiliarModal.tsx",
                                    lineNumber: 187,
                                    columnNumber: 32
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profiles/director/usuarios/CreateAuxiliarModal.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAuxiliarModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalActions,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAuxiliarModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cancelBtn,
                                    onClick: onClose,
                                    disabled: isSubmitting,
                                    children: "Cancelar"
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateAuxiliarModal.tsx",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAuxiliarModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].submitBtn,
                                    disabled: isSubmitting,
                                    children: isSubmitting ? 'Creando...' : 'Crear Auxiliar'
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateAuxiliarModal.tsx",
                                    lineNumber: 199,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profiles/director/usuarios/CreateAuxiliarModal.tsx",
                            lineNumber: 190,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/profiles/director/usuarios/CreateAuxiliarModal.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/profiles/director/usuarios/CreateAuxiliarModal.tsx",
            lineNumber: 110,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/profiles/director/usuarios/CreateAuxiliarModal.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/profiles/director/usuarios/CreateAdminModal.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "cancelBtn": "CreateAdminModal-module__moG_RG__cancelBtn",
  "closeBtn": "CreateAdminModal-module__moG_RG__closeBtn",
  "errorMessage": "CreateAdminModal-module__moG_RG__errorMessage",
  "fadeIn": "CreateAdminModal-module__moG_RG__fadeIn",
  "formGroup": "CreateAdminModal-module__moG_RG__formGroup",
  "input": "CreateAdminModal-module__moG_RG__input",
  "inputError": "CreateAdminModal-module__moG_RG__inputError",
  "label": "CreateAdminModal-module__moG_RG__label",
  "modal": "CreateAdminModal-module__moG_RG__modal",
  "modalActions": "CreateAdminModal-module__moG_RG__modalActions",
  "modalContent": "CreateAdminModal-module__moG_RG__modalContent",
  "modalHeader": "CreateAdminModal-module__moG_RG__modalHeader",
  "modalSubtitle": "CreateAdminModal-module__moG_RG__modalSubtitle",
  "modalTitle": "CreateAdminModal-module__moG_RG__modalTitle",
  "overlay": "CreateAdminModal-module__moG_RG__overlay",
  "required": "CreateAdminModal-module__moG_RG__required",
  "select": "CreateAdminModal-module__moG_RG__select",
  "slideUp": "CreateAdminModal-module__moG_RG__slideUp",
  "submitBtn": "CreateAdminModal-module__moG_RG__submitBtn",
});
}),
"[project]/components/profiles/director/usuarios/CreateAdminModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateAdminModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAdminModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/profiles/director/usuarios/CreateAdminModal.module.css [app-ssr] (css module)");
'use client';
;
;
;
const adminRoles = [
    {
        value: 'General Admin',
        label: 'Administrador General'
    },
    {
        value: 'Finance Admin',
        label: 'Administrador de Finanzas'
    },
    {
        value: 'User Admin',
        label: 'Administrador de Usuarios'
    }
];
function CreateAdminModal({ isOpen, onClose, onSubmit }) {
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        password: '',
        role: ''
    });
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!isOpen) return null;
    const validate = ()=>{
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = 'El nombre es requerido';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'El correo electrónico es requerido';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'El correo electrónico no es válido';
        }
        if (!formData.password.trim()) {
            newErrors.password = 'La contraseña es requerida';
        } else if (formData.password.length < 8) {
            newErrors.password = 'La contraseña debe tener al menos 8 caracteres';
        }
        if (!formData.role) {
            newErrors.role = 'Debe seleccionar un rol';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!validate()) {
            return;
        }
        setIsSubmitting(true);
        try {
            await onSubmit(formData);
            // Reset form on success
            setFormData({
                name: '',
                email: '',
                password: '',
                role: ''
            });
            setErrors({});
            onClose();
        } catch (error) {
            console.error('Error creating admin:', error);
        } finally{
            setIsSubmitting(false);
        }
    };
    const handleChange = (field, value)=>{
        setFormData((prev)=>({
                ...prev,
                [field]: value
            }));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors((prev)=>({
                    ...prev,
                    [field]: ''
                }));
        }
    };
    const handleOverlayClick = (e)=>{
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAdminModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].overlay,
        onClick: handleOverlayClick,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAdminModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modal,
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAdminModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalHeader,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAdminModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalTitle,
                                    children: "Crear Nuevo Administrador"
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateAdminModal.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAdminModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalSubtitle,
                                    children: "Completa el formulario para crear un nuevo administrador"
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateAdminModal.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profiles/director/usuarios/CreateAdminModal.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAdminModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].closeBtn,
                            onClick: onClose,
                            type: "button",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "18",
                                        y1: "6",
                                        x2: "6",
                                        y2: "18"
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/director/usuarios/CreateAdminModal.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "6",
                                        y1: "6",
                                        x2: "18",
                                        y2: "18"
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/director/usuarios/CreateAdminModal.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/profiles/director/usuarios/CreateAdminModal.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/director/usuarios/CreateAdminModal.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/profiles/director/usuarios/CreateAdminModal.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAdminModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalContent,
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAdminModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "name",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAdminModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                    children: [
                                        "Nombre Completo ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAdminModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].required,
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/components/profiles/director/usuarios/CreateAdminModal.tsx",
                                            lineNumber: 125,
                                            columnNumber: 31
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateAdminModal.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "name",
                                    type: "text",
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAdminModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input} ${errors.name ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAdminModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputError : ''}`,
                                    value: formData.name,
                                    onChange: (e)=>handleChange('name', e.target.value),
                                    placeholder: "Ej: Roberto Fernández"
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateAdminModal.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this),
                                errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAdminModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].errorMessage,
                                    children: errors.name
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateAdminModal.tsx",
                                    lineNumber: 135,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profiles/director/usuarios/CreateAdminModal.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAdminModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "email",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAdminModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                    children: [
                                        "Correo Electrónico ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAdminModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].required,
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/components/profiles/director/usuarios/CreateAdminModal.tsx",
                                            lineNumber: 140,
                                            columnNumber: 34
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateAdminModal.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "email",
                                    type: "email",
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAdminModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input} ${errors.email ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAdminModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputError : ''}`,
                                    value: formData.email,
                                    onChange: (e)=>handleChange('email', e.target.value),
                                    placeholder: "ejemplo@correo.com"
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateAdminModal.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this),
                                errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAdminModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].errorMessage,
                                    children: errors.email
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateAdminModal.tsx",
                                    lineNumber: 150,
                                    columnNumber: 30
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profiles/director/usuarios/CreateAdminModal.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAdminModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "password",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAdminModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                    children: [
                                        "Contraseña ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAdminModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].required,
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/components/profiles/director/usuarios/CreateAdminModal.tsx",
                                            lineNumber: 155,
                                            columnNumber: 26
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateAdminModal.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "password",
                                    type: "password",
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAdminModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input} ${errors.password ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAdminModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputError : ''}`,
                                    value: formData.password,
                                    onChange: (e)=>handleChange('password', e.target.value),
                                    placeholder: "Mínimo 8 caracteres"
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateAdminModal.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this),
                                errors.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAdminModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].errorMessage,
                                    children: errors.password
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateAdminModal.tsx",
                                    lineNumber: 165,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profiles/director/usuarios/CreateAdminModal.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAdminModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "role",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAdminModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                    children: [
                                        "Rol ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAdminModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].required,
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/components/profiles/director/usuarios/CreateAdminModal.tsx",
                                            lineNumber: 170,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateAdminModal.tsx",
                                    lineNumber: 169,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    id: "role",
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAdminModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].select} ${errors.role ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAdminModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputError : ''}`,
                                    value: formData.role,
                                    onChange: (e)=>handleChange('role', e.target.value),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "Selecciona un rol"
                                        }, void 0, false, {
                                            fileName: "[project]/components/profiles/director/usuarios/CreateAdminModal.tsx",
                                            lineNumber: 178,
                                            columnNumber: 15
                                        }, this),
                                        adminRoles.map((role)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: role.value,
                                                children: role.label
                                            }, role.value, false, {
                                                fileName: "[project]/components/profiles/director/usuarios/CreateAdminModal.tsx",
                                                lineNumber: 180,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateAdminModal.tsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, this),
                                errors.role && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAdminModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].errorMessage,
                                    children: errors.role
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateAdminModal.tsx",
                                    lineNumber: 185,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profiles/director/usuarios/CreateAdminModal.tsx",
                            lineNumber: 168,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAdminModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalActions,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAdminModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cancelBtn,
                                    onClick: onClose,
                                    disabled: isSubmitting,
                                    children: "Cancelar"
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateAdminModal.tsx",
                                    lineNumber: 189,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAdminModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].submitBtn,
                                    disabled: isSubmitting,
                                    children: isSubmitting ? 'Creando...' : 'Crear Administrador'
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateAdminModal.tsx",
                                    lineNumber: 197,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profiles/director/usuarios/CreateAdminModal.tsx",
                            lineNumber: 188,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/profiles/director/usuarios/CreateAdminModal.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/profiles/director/usuarios/CreateAdminModal.tsx",
            lineNumber: 108,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/profiles/director/usuarios/CreateAdminModal.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/profiles/director/usuarios/CreateJefeModal.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "cancelBtn": "CreateJefeModal-module__iKRlnG__cancelBtn",
  "closeBtn": "CreateJefeModal-module__iKRlnG__closeBtn",
  "errorMessage": "CreateJefeModal-module__iKRlnG__errorMessage",
  "fadeIn": "CreateJefeModal-module__iKRlnG__fadeIn",
  "formGroup": "CreateJefeModal-module__iKRlnG__formGroup",
  "input": "CreateJefeModal-module__iKRlnG__input",
  "inputError": "CreateJefeModal-module__iKRlnG__inputError",
  "label": "CreateJefeModal-module__iKRlnG__label",
  "modal": "CreateJefeModal-module__iKRlnG__modal",
  "modalActions": "CreateJefeModal-module__iKRlnG__modalActions",
  "modalContent": "CreateJefeModal-module__iKRlnG__modalContent",
  "modalHeader": "CreateJefeModal-module__iKRlnG__modalHeader",
  "modalSubtitle": "CreateJefeModal-module__iKRlnG__modalSubtitle",
  "modalTitle": "CreateJefeModal-module__iKRlnG__modalTitle",
  "overlay": "CreateJefeModal-module__iKRlnG__overlay",
  "required": "CreateJefeModal-module__iKRlnG__required",
  "select": "CreateJefeModal-module__iKRlnG__select",
  "slideUp": "CreateJefeModal-module__iKRlnG__slideUp",
  "submitBtn": "CreateJefeModal-module__iKRlnG__submitBtn",
});
}),
"[project]/components/profiles/director/usuarios/CreateJefeModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateJefeModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateJefeModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/profiles/director/usuarios/CreateJefeModal.module.css [app-ssr] (css module)");
'use client';
;
;
;
const availableGroups = [
    {
        value: 'Medical Group',
        label: 'Medical Group'
    },
    {
        value: 'Industrial Group',
        label: 'Industrial Group'
    },
    {
        value: 'Education Group',
        label: 'Education Group'
    },
    {
        value: 'Retail Group',
        label: 'Retail Group'
    }
];
function CreateJefeModal({ isOpen, onClose, onSubmit }) {
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        password: '',
        groupManaged: ''
    });
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!isOpen) return null;
    const validate = ()=>{
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = 'El nombre es requerido';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'El correo electrónico es requerido';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'El correo electrónico no es válido';
        }
        if (!formData.password.trim()) {
            newErrors.password = 'La contraseña es requerida';
        } else if (formData.password.length < 8) {
            newErrors.password = 'La contraseña debe tener al menos 8 caracteres';
        }
        if (!formData.groupManaged) {
            newErrors.groupManaged = 'Debe asignar un grupo';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!validate()) {
            return;
        }
        setIsSubmitting(true);
        try {
            await onSubmit(formData);
            // Reset form on success
            setFormData({
                name: '',
                email: '',
                password: '',
                groupManaged: ''
            });
            setErrors({});
            onClose();
        } catch (error) {
            console.error('Error creating jefe:', error);
        } finally{
            setIsSubmitting(false);
        }
    };
    const handleChange = (field, value)=>{
        setFormData((prev)=>({
                ...prev,
                [field]: value
            }));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors((prev)=>({
                    ...prev,
                    [field]: ''
                }));
        }
    };
    const handleOverlayClick = (e)=>{
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateJefeModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].overlay,
        onClick: handleOverlayClick,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateJefeModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modal,
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateJefeModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalHeader,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateJefeModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalTitle,
                                    children: "Crear Nuevo Jefe"
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateJefeModal.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateJefeModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalSubtitle,
                                    children: "Completa el formulario para crear un nuevo jefe de grupo"
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateJefeModal.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profiles/director/usuarios/CreateJefeModal.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateJefeModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].closeBtn,
                            onClick: onClose,
                            type: "button",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "18",
                                        y1: "6",
                                        x2: "6",
                                        y2: "18"
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/director/usuarios/CreateJefeModal.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "6",
                                        y1: "6",
                                        x2: "18",
                                        y2: "18"
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/director/usuarios/CreateJefeModal.tsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/profiles/director/usuarios/CreateJefeModal.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/director/usuarios/CreateJefeModal.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/profiles/director/usuarios/CreateJefeModal.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateJefeModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalContent,
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateJefeModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "name",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateJefeModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                    children: [
                                        "Nombre Completo ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateJefeModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].required,
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/components/profiles/director/usuarios/CreateJefeModal.tsx",
                                            lineNumber: 126,
                                            columnNumber: 31
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateJefeModal.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "name",
                                    type: "text",
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateJefeModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input} ${errors.name ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateJefeModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputError : ''}`,
                                    value: formData.name,
                                    onChange: (e)=>handleChange('name', e.target.value),
                                    placeholder: "Ej: Carlos Ramírez"
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateJefeModal.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this),
                                errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateJefeModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].errorMessage,
                                    children: errors.name
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateJefeModal.tsx",
                                    lineNumber: 136,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profiles/director/usuarios/CreateJefeModal.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateJefeModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "email",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateJefeModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                    children: [
                                        "Correo Electrónico ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateJefeModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].required,
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/components/profiles/director/usuarios/CreateJefeModal.tsx",
                                            lineNumber: 141,
                                            columnNumber: 34
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateJefeModal.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "email",
                                    type: "email",
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateJefeModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input} ${errors.email ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateJefeModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputError : ''}`,
                                    value: formData.email,
                                    onChange: (e)=>handleChange('email', e.target.value),
                                    placeholder: "ejemplo@correo.com"
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateJefeModal.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this),
                                errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateJefeModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].errorMessage,
                                    children: errors.email
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateJefeModal.tsx",
                                    lineNumber: 151,
                                    columnNumber: 30
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profiles/director/usuarios/CreateJefeModal.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateJefeModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "password",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateJefeModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                    children: [
                                        "Contraseña ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateJefeModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].required,
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/components/profiles/director/usuarios/CreateJefeModal.tsx",
                                            lineNumber: 156,
                                            columnNumber: 26
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateJefeModal.tsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "password",
                                    type: "password",
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateJefeModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input} ${errors.password ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateJefeModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputError : ''}`,
                                    value: formData.password,
                                    onChange: (e)=>handleChange('password', e.target.value),
                                    placeholder: "Mínimo 8 caracteres"
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateJefeModal.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this),
                                errors.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateJefeModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].errorMessage,
                                    children: errors.password
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateJefeModal.tsx",
                                    lineNumber: 166,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profiles/director/usuarios/CreateJefeModal.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateJefeModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "groupManaged",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateJefeModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                    children: [
                                        "Grupo a Gestionar ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateJefeModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].required,
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/components/profiles/director/usuarios/CreateJefeModal.tsx",
                                            lineNumber: 171,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateJefeModal.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    id: "groupManaged",
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateJefeModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].select} ${errors.groupManaged ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateJefeModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputError : ''}`,
                                    value: formData.groupManaged,
                                    onChange: (e)=>handleChange('groupManaged', e.target.value),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "Selecciona un grupo"
                                        }, void 0, false, {
                                            fileName: "[project]/components/profiles/director/usuarios/CreateJefeModal.tsx",
                                            lineNumber: 179,
                                            columnNumber: 15
                                        }, this),
                                        availableGroups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: group.value,
                                                children: group.label
                                            }, group.value, false, {
                                                fileName: "[project]/components/profiles/director/usuarios/CreateJefeModal.tsx",
                                                lineNumber: 181,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateJefeModal.tsx",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, this),
                                errors.groupManaged && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateJefeModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].errorMessage,
                                    children: errors.groupManaged
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateJefeModal.tsx",
                                    lineNumber: 186,
                                    columnNumber: 37
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profiles/director/usuarios/CreateJefeModal.tsx",
                            lineNumber: 169,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateJefeModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalActions,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateJefeModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cancelBtn,
                                    onClick: onClose,
                                    disabled: isSubmitting,
                                    children: "Cancelar"
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateJefeModal.tsx",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateJefeModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].submitBtn,
                                    disabled: isSubmitting,
                                    children: isSubmitting ? 'Creando...' : 'Crear Jefe'
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/usuarios/CreateJefeModal.tsx",
                                    lineNumber: 198,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profiles/director/usuarios/CreateJefeModal.tsx",
                            lineNumber: 189,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/profiles/director/usuarios/CreateJefeModal.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/profiles/director/usuarios/CreateJefeModal.tsx",
            lineNumber: 109,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/profiles/director/usuarios/CreateJefeModal.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/profiles/director/usuarios/Usuarios.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "createBtn": "Usuarios-module__fdxikW__createBtn",
  "refreshBtn": "Usuarios-module__fdxikW__refreshBtn",
  "spin": "Usuarios-module__fdxikW__spin",
  "spinning": "Usuarios-module__fdxikW__spinning",
  "tabContent": "Usuarios-module__fdxikW__tabContent",
  "topBar": "Usuarios-module__fdxikW__topBar",
  "topBarActions": "Usuarios-module__fdxikW__topBarActions",
  "usuarios": "Usuarios-module__fdxikW__usuarios",
  "usuariosContent": "Usuarios-module__fdxikW__usuariosContent",
});
}),
"[project]/components/profiles/director/usuarios/Usuarios.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Usuarios
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$NavigationContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/NavigationContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$UsuariosContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/UsuariosContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/shared/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$RefreshButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshButton$3e$__ = __turbopack_context__.i("[project]/components/shared/RefreshButton.tsx [app-ssr] (ecmascript) <export default as RefreshButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarAuxiliares$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/profiles/director/usuarios/AdministrarAuxiliares.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarAdmins$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/profiles/director/usuarios/AdministrarAdmins.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarJefes$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/profiles/director/usuarios/AdministrarJefes.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAuxiliarModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/profiles/director/usuarios/CreateAuxiliarModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAdminModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/profiles/director/usuarios/CreateAdminModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateJefeModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/profiles/director/usuarios/CreateJefeModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$Usuarios$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/profiles/director/usuarios/Usuarios.module.css [app-ssr] (css module)");
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
;
function Usuarios() {
    const { activeItem } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$NavigationContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNavigation"])();
    const { isRefreshing, refresh } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$UsuariosContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUsuarios"])();
    const [isCreateModalOpen, setIsCreateModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Determine which tab to show based on activeItem
    const getActiveTab = ()=>{
        if (activeItem === 'usuarios-auxiliares') return 'auxiliares';
        if (activeItem === 'usuarios-admins') return 'admins';
        if (activeItem === 'usuarios-jefes') return 'jefes';
        // Default to auxiliares if usuarios is clicked directly
        return 'auxiliares';
    };
    const activeTab = getActiveTab();
    const handleCreateNewUser = ()=>{
        setIsCreateModalOpen(true);
    };
    const handleCloseModal = ()=>{
        setIsCreateModalOpen(false);
    };
    const handleCreateAuxiliar = async (data)=>{
        // TODO: Implement API call to create auxiliar
        console.log('Creating auxiliar:', data);
        await new Promise((resolve)=>setTimeout(resolve, 500)); // Simulate API call
        // Refresh the list after creation
        await refresh();
    };
    const handleCreateAdmin = async (data)=>{
        // TODO: Implement API call to create admin
        console.log('Creating admin:', data);
        await new Promise((resolve)=>setTimeout(resolve, 500)); // Simulate API call
        // Refresh the list after creation
        await refresh();
    };
    const handleCreateJefe = async (data)=>{
        // TODO: Implement API call to create jefe
        console.log('Creating jefe:', data);
        await new Promise((resolve)=>setTimeout(resolve, 500)); // Simulate API call
        // Refresh the list after creation
        await refresh();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$Usuarios$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].usuarios,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$Usuarios$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].usuariosContent,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$Usuarios$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].topBar,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$Usuarios$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].topBarActions,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$RefreshButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshButton$3e$__["RefreshButton"], {
                                    onClick: refresh,
                                    isRefreshing: isRefreshing
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/director/usuarios/Usuarios.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$Usuarios$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].createBtn,
                                    onClick: handleCreateNewUser,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "12",
                                                    y1: "5",
                                                    x2: "12",
                                                    y2: "19"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/profiles/director/usuarios/Usuarios.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "5",
                                                    y1: "12",
                                                    x2: "19",
                                                    y2: "12"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/profiles/director/usuarios/Usuarios.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/profiles/director/usuarios/Usuarios.tsx",
                                            lineNumber: 92,
                                            columnNumber: 15
                                        }, this),
                                        "Crear Nuevo Usuario"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/profiles/director/usuarios/Usuarios.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profiles/director/usuarios/Usuarios.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/profiles/director/usuarios/Usuarios.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$Usuarios$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tabContent,
                        children: [
                            activeTab === 'auxiliares' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarAuxiliares$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/profiles/director/usuarios/Usuarios.tsx",
                                lineNumber: 110,
                                columnNumber: 42
                            }, this),
                            activeTab === 'admins' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarAdmins$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/profiles/director/usuarios/Usuarios.tsx",
                                lineNumber: 111,
                                columnNumber: 38
                            }, this),
                            activeTab === 'jefes' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarJefes$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/profiles/director/usuarios/Usuarios.tsx",
                                lineNumber: 112,
                                columnNumber: 37
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/profiles/director/usuarios/Usuarios.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/profiles/director/usuarios/Usuarios.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            activeTab === 'auxiliares' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAuxiliarModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isCreateModalOpen,
                onClose: handleCloseModal,
                onSubmit: handleCreateAuxiliar
            }, void 0, false, {
                fileName: "[project]/components/profiles/director/usuarios/Usuarios.tsx",
                lineNumber: 118,
                columnNumber: 9
            }, this),
            activeTab === 'admins' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAdminModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isCreateModalOpen,
                onClose: handleCloseModal,
                onSubmit: handleCreateAdmin
            }, void 0, false, {
                fileName: "[project]/components/profiles/director/usuarios/Usuarios.tsx",
                lineNumber: 125,
                columnNumber: 9
            }, this),
            activeTab === 'jefes' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateJefeModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isCreateModalOpen,
                onClose: handleCloseModal,
                onSubmit: handleCreateJefe
            }, void 0, false, {
                fileName: "[project]/components/profiles/director/usuarios/Usuarios.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/profiles/director/usuarios/Usuarios.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/profiles/director/usuarios/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$Usuarios$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/profiles/director/usuarios/Usuarios.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarAuxiliares$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/profiles/director/usuarios/AdministrarAuxiliares.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarAdmins$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/profiles/director/usuarios/AdministrarAdmins.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$AdministrarJefes$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/profiles/director/usuarios/AdministrarJefes.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAuxiliarModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/profiles/director/usuarios/CreateAuxiliarModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateAdminModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/profiles/director/usuarios/CreateAdminModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$CreateJefeModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/profiles/director/usuarios/CreateJefeModal.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
}),
"[project]/components/profiles/director/usuarios/Usuarios.tsx [app-ssr] (ecmascript) <export default as Usuarios>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Usuarios",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$Usuarios$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$director$2f$usuarios$2f$Usuarios$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/profiles/director/usuarios/Usuarios.tsx [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=components_profiles_director_usuarios_fd69548b._.js.map