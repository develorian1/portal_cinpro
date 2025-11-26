module.exports = [
"[project]/components/profiles/administrador/usuarios/EditGroupModal.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "cancelBtn": "EditGroupModal-module__a1qqKG__cancelBtn",
  "closeBtn": "EditGroupModal-module__a1qqKG__closeBtn",
  "fadeIn": "EditGroupModal-module__a1qqKG__fadeIn",
  "formGroup": "EditGroupModal-module__a1qqKG__formGroup",
  "label": "EditGroupModal-module__a1qqKG__label",
  "modal": "EditGroupModal-module__a1qqKG__modal",
  "modalActions": "EditGroupModal-module__a1qqKG__modalActions",
  "modalContent": "EditGroupModal-module__a1qqKG__modalContent",
  "modalHeader": "EditGroupModal-module__a1qqKG__modalHeader",
  "modalTitle": "EditGroupModal-module__a1qqKG__modalTitle",
  "overlay": "EditGroupModal-module__a1qqKG__overlay",
  "select": "EditGroupModal-module__a1qqKG__select",
  "slideUp": "EditGroupModal-module__a1qqKG__slideUp",
  "submitBtn": "EditGroupModal-module__a1qqKG__submitBtn",
});
}),
"[project]/components/profiles/administrador/usuarios/EditGroupModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EditGroupModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EditGroupModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/profiles/administrador/usuarios/EditGroupModal.module.css [app-ssr] (css module)");
'use client';
;
;
;
function EditGroupModal({ group, onClose, onUpdate }) {
    const [selectedChiefId, setSelectedChiefId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(group.chief.id);
    // TODO: Fetch actual staff list from API
    const availableStaff = [
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
            name: 'Luis Fernández'
        },
        {
            id: '4',
            name: 'María García'
        }
    ];
    const handleSubmit = (e)=>{
        e.preventDefault();
        onUpdate(group.id, selectedChiefId);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EditGroupModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].overlay,
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EditGroupModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modal,
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EditGroupModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalHeader,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EditGroupModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalTitle,
                            children: [
                                "Editar Grupo: ",
                                group.group_name
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profiles/administrador/usuarios/EditGroupModal.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EditGroupModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].closeBtn,
                            onClick: onClose,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "20",
                                height: "20",
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
                                        fileName: "[project]/components/profiles/administrador/usuarios/EditGroupModal.tsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "6",
                                        y1: "6",
                                        x2: "18",
                                        y2: "18"
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/administrador/usuarios/EditGroupModal.tsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/profiles/administrador/usuarios/EditGroupModal.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/administrador/usuarios/EditGroupModal.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/profiles/administrador/usuarios/EditGroupModal.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EditGroupModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalContent,
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EditGroupModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "chief",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EditGroupModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                    children: "Jefe del Grupo"
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/administrador/usuarios/EditGroupModal.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    id: "chief",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EditGroupModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].select,
                                    value: selectedChiefId,
                                    onChange: (e)=>setSelectedChiefId(e.target.value),
                                    children: availableStaff.map((staff)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: staff.id,
                                            children: staff.name
                                        }, staff.id, false, {
                                            fileName: "[project]/components/profiles/administrador/usuarios/EditGroupModal.tsx",
                                            lineNumber: 61,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/administrador/usuarios/EditGroupModal.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profiles/administrador/usuarios/EditGroupModal.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EditGroupModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalActions,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EditGroupModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cancelBtn,
                                    onClick: onClose,
                                    children: "Cancelar"
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/administrador/usuarios/EditGroupModal.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EditGroupModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].submitBtn,
                                    children: "Guardar Cambios"
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/administrador/usuarios/EditGroupModal.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profiles/administrador/usuarios/EditGroupModal.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/profiles/administrador/usuarios/EditGroupModal.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/profiles/administrador/usuarios/EditGroupModal.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/profiles/administrador/usuarios/EditGroupModal.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/profiles/administrador/usuarios/EstructuraEquipos.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "accountantAvatar": "EstructuraEquipos-module__bcrmGW__accountantAvatar",
  "accountantCard": "EstructuraEquipos-module__bcrmGW__accountantCard",
  "accountantInfo": "EstructuraEquipos-module__bcrmGW__accountantInfo",
  "accountantName": "EstructuraEquipos-module__bcrmGW__accountantName",
  "accountantsList": "EstructuraEquipos-module__bcrmGW__accountantsList",
  "boardContainer": "EstructuraEquipos-module__bcrmGW__boardContainer",
  "chiefName": "EstructuraEquipos-module__bcrmGW__chiefName",
  "clientBadge": "EstructuraEquipos-module__bcrmGW__clientBadge",
  "dragOver": "EstructuraEquipos-module__bcrmGW__dragOver",
  "editGroupBtn": "EstructuraEquipos-module__bcrmGW__editGroupBtn",
  "estructuraEquipos": "EstructuraEquipos-module__bcrmGW__estructuraEquipos",
  "green": "EstructuraEquipos-module__bcrmGW__green",
  "groupColumn": "EstructuraEquipos-module__bcrmGW__groupColumn",
  "groupHeader": "EstructuraEquipos-module__bcrmGW__groupHeader",
  "groupHeaderInfo": "EstructuraEquipos-module__bcrmGW__groupHeaderInfo",
  "groupName": "EstructuraEquipos-module__bcrmGW__groupName",
  "kanbanBoard": "EstructuraEquipos-module__bcrmGW__kanbanBoard",
  "orange": "EstructuraEquipos-module__bcrmGW__orange",
  "orphanClient": "EstructuraEquipos-module__bcrmGW__orphanClient",
  "orphanList": "EstructuraEquipos-module__bcrmGW__orphanList",
  "orphanSidebar": "EstructuraEquipos-module__bcrmGW__orphanSidebar",
  "orphanTitle": "EstructuraEquipos-module__bcrmGW__orphanTitle",
  "red": "EstructuraEquipos-module__bcrmGW__red",
});
}),
"[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EstructuraEquipos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EditGroupModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/profiles/administrador/usuarios/EditGroupModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/profiles/administrador/usuarios/EstructuraEquipos.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
function EstructuraEquipos() {
    const [groups, setGroups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: '1',
            group_name: 'Grupo A',
            chief: {
                id: '1',
                first_name: 'Carlos',
                last_name: 'Ramírez'
            },
            accountants: [
                {
                    id: '1',
                    staff_id: '2',
                    first_name: 'María',
                    last_name: 'González',
                    client_count: 12
                },
                {
                    id: '2',
                    staff_id: '3',
                    first_name: 'Juan',
                    last_name: 'Pérez',
                    client_count: 18
                }
            ]
        },
        {
            id: '2',
            group_name: 'Grupo B',
            chief: {
                id: '4',
                first_name: 'Ana',
                last_name: 'Martínez'
            },
            accountants: [
                {
                    id: '3',
                    staff_id: '5',
                    first_name: 'Laura',
                    last_name: 'Sánchez',
                    client_count: 25
                },
                {
                    id: '4',
                    staff_id: '6',
                    first_name: 'Pedro',
                    last_name: 'López',
                    client_count: 8
                }
            ]
        }
    ]);
    const [orphanClients, setOrphanClients] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: '1',
            entity_name: 'Cliente Sin Asignar 1'
        },
        {
            id: '2',
            entity_name: 'Cliente Sin Asignar 2'
        },
        {
            id: '3',
            entity_name: 'Cliente Sin Asignar 3'
        }
    ]);
    const [editingGroup, setEditingGroup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [draggedClient, setDraggedClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const getBorderColor = (clientCount)=>{
        if (clientCount < 15) return 'green';
        if (clientCount <= 25) return 'orange';
        return 'red';
    };
    const getInitials = (firstName, lastName)=>{
        return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
    };
    const handleEditGroup = (group)=>{
        setEditingGroup(group);
    };
    const handleCloseEditModal = ()=>{
        setEditingGroup(null);
    };
    const handleUpdateChief = async (groupId, newChiefId)=>{
        // TODO: Implement API call to update chief
        setGroups(groups.map((g)=>g.id === groupId ? {
                ...g,
                chief: {
                    id: newChiefId,
                    first_name: 'Nuevo',
                    last_name: 'Jefe'
                }
            } : g));
        setEditingGroup(null);
    };
    const handleDragStart = (client)=>{
        setDraggedClient(client);
    };
    const handleDragEnd = ()=>{
        setDraggedClient(null);
    };
    const handleDropOnAccountant = async (accountantId, staffId)=>{
        if (!draggedClient) return;
        // TODO: Implement API call PATCH /entities/{id}
        // await fetch(`/api/entities/${draggedClient.id}`, {
        //   method: 'PATCH',
        //   body: JSON.stringify({ assigned_accountant_id: staffId }),
        // });
        // Remove from orphan list and update accountant count
        setOrphanClients(orphanClients.filter((c)=>c.id !== draggedClient.id));
        setGroups(groups.map((group)=>({
                ...group,
                accountants: group.accountants.map((acc)=>acc.id === accountantId ? {
                        ...acc,
                        client_count: acc.client_count + 1
                    } : acc)
            })));
        setDraggedClient(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].estructuraEquipos,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].boardContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].kanbanBoard,
                        children: groups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].groupColumn,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].groupHeader,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].groupHeaderInfo,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].groupName,
                                                        children: group.group_name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chiefName,
                                                        children: [
                                                            "Jefe: ",
                                                            group.chief.first_name,
                                                            " ",
                                                            group.chief.last_name
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                lineNumber: 161,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].editGroupBtn,
                                                onClick: ()=>handleEditGroup(group),
                                                title: "Editar Grupo",
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
                                                            fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                            lineNumber: 173,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                            lineNumber: 174,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                lineNumber: 167,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].accountantsList,
                                        children: group.accountants.map((accountant)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].accountantCard} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"][getBorderColor(accountant.client_count)]}`,
                                                "data-staff-id": accountant.staff_id,
                                                onDragOver: (e)=>{
                                                    e.preventDefault();
                                                    e.currentTarget.classList.add(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dragOver);
                                                },
                                                onDragLeave: (e)=>{
                                                    e.currentTarget.classList.remove(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dragOver);
                                                },
                                                onDrop: (e)=>{
                                                    e.preventDefault();
                                                    e.currentTarget.classList.remove(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dragOver);
                                                    handleDropOnAccountant(accountant.id, accountant.staff_id);
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].accountantAvatar,
                                                        children: accountant.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: accountant.avatar,
                                                            alt: `${accountant.first_name} ${accountant.last_name}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 25
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: getInitials(accountant.first_name, accountant.last_name)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                            lineNumber: 202,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].accountantInfo,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].accountantName,
                                                                children: [
                                                                    accountant.first_name,
                                                                    " ",
                                                                    accountant.last_name
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                                lineNumber: 206,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].clientBadge,
                                                                children: [
                                                                    accountant.client_count,
                                                                    " Clientes"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                                lineNumber: 209,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, accountant.id, true, {
                                                fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                lineNumber: 181,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                        lineNumber: 179,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, group.id, true, {
                                fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].orphanSidebar,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].orphanTitle,
                                children: "Clientes Sin Asignar"
                            }, void 0, false, {
                                fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].orphanList,
                                children: orphanClients.map((client)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].orphanClient,
                                        draggable: true,
                                        onDragStart: ()=>handleDragStart(client),
                                        onDragEnd: handleDragEnd,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "16",
                                                height: "16",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                        lineNumber: 233,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "12",
                                                        cy: "10",
                                                        r: "3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                        lineNumber: 234,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                lineNumber: 232,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: client.entity_name
                                            }, void 0, false, {
                                                fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                lineNumber: 236,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, client.id, true, {
                                        fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                        lineNumber: 225,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this),
            editingGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EditGroupModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                group: editingGroup,
                onClose: handleCloseEditModal,
                onUpdate: handleUpdateChief
            }, void 0, false, {
                fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                lineNumber: 245,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/profiles/administrador/usuarios/GestionStaff.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "commissionInput": "GestionStaff-module__fNa8yW__commissionInput",
  "gestionStaff": "GestionStaff-module__fNa8yW__gestionStaff",
  "numberInput": "GestionStaff-module__fNa8yW__numberInput",
  "percentDisplay": "GestionStaff-module__fNa8yW__percentDisplay",
  "readOnlyCell": "GestionStaff-module__fNa8yW__readOnlyCell",
  "select": "GestionStaff-module__fNa8yW__select",
  "staffTable": "GestionStaff-module__fNa8yW__staffTable",
  "tableContainer": "GestionStaff-module__fNa8yW__tableContainer",
  "telegramInput": "GestionStaff-module__fNa8yW__telegramInput",
  "testBtn": "GestionStaff-module__fNa8yW__testBtn",
  "textInput": "GestionStaff-module__fNa8yW__textInput",
  "toggleSlider": "GestionStaff-module__fNa8yW__toggleSlider",
  "toggleSwitch": "GestionStaff-module__fNa8yW__toggleSwitch",
});
}),
"[project]/components/profiles/administrador/usuarios/GestionStaff.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GestionStaff
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$GestionStaff$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/profiles/administrador/usuarios/GestionStaff.module.css [app-ssr] (css module)");
'use client';
;
;
;
function GestionStaff() {
    const [staff, setStaff] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: '1',
            full_name: 'María González',
            role: 'accountant',
            base_commission: 0.15,
            email: 'maria.gonzalez@cinpro.com',
            telegram_chat_id: '@maria_gonzalez',
            is_active: true
        },
        {
            id: '2',
            full_name: 'Juan Pérez',
            role: 'senior_accountant',
            base_commission: 0.20,
            email: 'juan.perez@cinpro.com',
            telegram_chat_id: '',
            is_active: true
        },
        {
            id: '3',
            full_name: 'Laura Sánchez',
            role: 'accountant',
            base_commission: 0.12,
            email: 'laura.sanchez@cinpro.com',
            telegram_chat_id: '@laura_sanchez',
            is_active: false
        }
    ]);
    // TODO: Fetch from API
    const staffRoles = [
        {
            value: 'accountant',
            label: 'Contador'
        },
        {
            value: 'senior_accountant',
            label: 'Contador Senior'
        },
        {
            value: 'manager',
            label: 'Gerente'
        },
        {
            value: 'director',
            label: 'Director'
        }
    ];
    const handleFieldChange = (id, field, value)=>{
        setStaff(staff.map((member)=>member.id === id ? {
                ...member,
                [field]: value
            } : member));
    };
    const handleTestTelegram = async (id, chatId)=>{
        if (!chatId) {
            alert('Por favor ingrese un Telegram Chat ID');
            return;
        }
        // TODO: Implement API call to test Telegram message
        alert(`Enviando mensaje de prueba a ${chatId}...`);
    };
    const formatCommission = (value)=>{
        return `${(value * 100).toFixed(0)}%`;
    };
    const parseCommission = (value)=>{
        const num = parseFloat(value);
        if (isNaN(num)) return 0;
        return Math.max(0, Math.min(1, num / 100));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$GestionStaff$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].gestionStaff,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$GestionStaff$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tableContainer,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$GestionStaff$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].staffTable,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    children: "Nombre Completo"
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    children: "Rol"
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    children: "Comisión Base"
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                                    lineNumber: 88,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    children: "Email"
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    children: "Telegram Chat ID"
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    children: "Estado"
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: staff.map((member)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$GestionStaff$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].readOnlyCell,
                                        children: member.full_name
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                                        lineNumber: 97,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$GestionStaff$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].select,
                                            value: member.role,
                                            onChange: (e)=>handleFieldChange(member.id, 'role', e.target.value),
                                            children: staffRoles.map((role)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: role.value,
                                                    children: role.label
                                                }, role.value, false, {
                                                    fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                                            lineNumber: 100,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                                        lineNumber: 99,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$GestionStaff$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].commissionInput,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$GestionStaff$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].numberInput,
                                                    min: "0",
                                                    max: "100",
                                                    step: "0.01",
                                                    value: member.base_commission * 100,
                                                    onChange: (e)=>{
                                                        const value = parseCommission(e.target.value);
                                                        handleFieldChange(member.id, 'base_commission', value);
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$GestionStaff$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].percentDisplay,
                                                    children: formatCommission(member.base_commission)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                                            lineNumber: 114,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$GestionStaff$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].readOnlyCell,
                                        children: member.email
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                                        lineNumber: 133,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$GestionStaff$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].telegramInput,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$GestionStaff$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].textInput,
                                                    value: member.telegram_chat_id,
                                                    onChange: (e)=>handleFieldChange(member.id, 'telegram_chat_id', e.target.value),
                                                    placeholder: "@username o ID"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$GestionStaff$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].testBtn,
                                                    onClick: ()=>handleTestTelegram(member.id, member.telegram_chat_id),
                                                    title: "Enviar Mensaje de Prueba",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "16",
                                                        height: "16",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M22 2L11 13"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                                                                lineNumber: 150,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M22 2l-7 20-4-9-9-4 20-7z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                                                                lineNumber: 151,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                                            lineNumber: 136,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                                        lineNumber: 135,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$GestionStaff$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].toggleSwitch,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: member.is_active,
                                                    onChange: (e)=>handleFieldChange(member.id, 'is_active', e.target.checked)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$GestionStaff$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].toggleSlider
                                                }, void 0, false, {
                                                    fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                                            lineNumber: 158,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                                        lineNumber: 157,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, member.id, true, {
                                fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                                lineNumber: 96,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                lineNumber: 83,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
            lineNumber: 82,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/profiles/administrador/usuarios/LinkEntityModal.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "cancelBtn": "LinkEntityModal-module__0_IMeG__cancelBtn",
  "checkboxLabel": "LinkEntityModal-module__0_IMeG__checkboxLabel",
  "closeBtn": "LinkEntityModal-module__0_IMeG__closeBtn",
  "fadeIn": "LinkEntityModal-module__0_IMeG__fadeIn",
  "formGroup": "LinkEntityModal-module__0_IMeG__formGroup",
  "label": "LinkEntityModal-module__0_IMeG__label",
  "modal": "LinkEntityModal-module__0_IMeG__modal",
  "modalActions": "LinkEntityModal-module__0_IMeG__modalActions",
  "modalContent": "LinkEntityModal-module__0_IMeG__modalContent",
  "modalHeader": "LinkEntityModal-module__0_IMeG__modalHeader",
  "modalTitle": "LinkEntityModal-module__0_IMeG__modalTitle",
  "overlay": "LinkEntityModal-module__0_IMeG__overlay",
  "radioGroup": "LinkEntityModal-module__0_IMeG__radioGroup",
  "radioLabel": "LinkEntityModal-module__0_IMeG__radioLabel",
  "searchInput": "LinkEntityModal-module__0_IMeG__searchInput",
  "select": "LinkEntityModal-module__0_IMeG__select",
  "slideUp": "LinkEntityModal-module__0_IMeG__slideUp",
  "submitBtn": "LinkEntityModal-module__0_IMeG__submitBtn",
});
}),
"[project]/components/profiles/administrador/usuarios/LinkEntityModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LinkEntityModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$LinkEntityModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/profiles/administrador/usuarios/LinkEntityModal.module.css [app-ssr] (css module)");
'use client';
;
;
;
function LinkEntityModal({ userId, onClose, onSubmit }) {
    const [selectedEntityId, setSelectedEntityId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [permission, setPermission] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('VIEW_ONLY');
    const [isPrimary, setIsPrimary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // TODO: Fetch from API with search
    const availableEntities = [
        {
            id: '101',
            name: 'Empresa ABC S.A.'
        },
        {
            id: '102',
            name: 'Empresa XYZ Ltda.'
        },
        {
            id: '103',
            name: 'Compañía DEF Inc.'
        },
        {
            id: '104',
            name: 'Corporación GHI S.A.'
        }
    ].filter((entity)=>entity.name.toLowerCase().includes(searchQuery.toLowerCase()));
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!selectedEntityId) {
            alert('Por favor seleccione una entidad');
            return;
        }
        onSubmit({
            entityId: selectedEntityId,
            permission,
            isPrimary
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$LinkEntityModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].overlay,
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$LinkEntityModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modal,
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$LinkEntityModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalHeader,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$LinkEntityModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalTitle,
                            children: "Vincular Entidad"
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/administrador/usuarios/LinkEntityModal.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$LinkEntityModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].closeBtn,
                            onClick: onClose,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "20",
                                height: "20",
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
                                        fileName: "[project]/components/profiles/administrador/usuarios/LinkEntityModal.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "6",
                                        y1: "6",
                                        x2: "18",
                                        y2: "18"
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/administrador/usuarios/LinkEntityModal.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/profiles/administrador/usuarios/LinkEntityModal.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/administrador/usuarios/LinkEntityModal.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/profiles/administrador/usuarios/LinkEntityModal.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$LinkEntityModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalContent,
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$LinkEntityModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "entity",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$LinkEntityModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                    children: "Seleccionar Entidad"
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/administrador/usuarios/LinkEntityModal.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$LinkEntityModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].searchInput,
                                    placeholder: "Buscar entidad...",
                                    value: searchQuery,
                                    onChange: (e)=>setSearchQuery(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/administrador/usuarios/LinkEntityModal.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    id: "entity",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$LinkEntityModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].select,
                                    value: selectedEntityId,
                                    onChange: (e)=>setSelectedEntityId(e.target.value),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "-- Seleccione una entidad --"
                                        }, void 0, false, {
                                            fileName: "[project]/components/profiles/administrador/usuarios/LinkEntityModal.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this),
                                        availableEntities.map((entity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: entity.id,
                                                children: entity.name
                                            }, entity.id, false, {
                                                fileName: "[project]/components/profiles/administrador/usuarios/LinkEntityModal.tsx",
                                                lineNumber: 78,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/profiles/administrador/usuarios/LinkEntityModal.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profiles/administrador/usuarios/LinkEntityModal.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$LinkEntityModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$LinkEntityModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                    children: "Permiso"
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/administrador/usuarios/LinkEntityModal.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$LinkEntityModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].radioGroup,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$LinkEntityModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].radioLabel,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "permission",
                                                    value: "OWNER",
                                                    checked: permission === 'OWNER',
                                                    onChange: (e)=>setPermission(e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/profiles/administrador/usuarios/LinkEntityModal.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Propietario"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/profiles/administrador/usuarios/LinkEntityModal.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/profiles/administrador/usuarios/LinkEntityModal.tsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$LinkEntityModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].radioLabel,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "permission",
                                                    value: "VIEW_ONLY",
                                                    checked: permission === 'VIEW_ONLY',
                                                    onChange: (e)=>setPermission(e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/profiles/administrador/usuarios/LinkEntityModal.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Solo Lectura"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/profiles/administrador/usuarios/LinkEntityModal.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/profiles/administrador/usuarios/LinkEntityModal.tsx",
                                            lineNumber: 98,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/profiles/administrador/usuarios/LinkEntityModal.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profiles/administrador/usuarios/LinkEntityModal.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$LinkEntityModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formGroup,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$LinkEntityModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].checkboxLabel,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: isPrimary,
                                        onChange: (e)=>setIsPrimary(e.target.checked)
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/administrador/usuarios/LinkEntityModal.tsx",
                                        lineNumber: 113,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Marcar como Entidad Principal"
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/administrador/usuarios/LinkEntityModal.tsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/profiles/administrador/usuarios/LinkEntityModal.tsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/administrador/usuarios/LinkEntityModal.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$LinkEntityModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalActions,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$LinkEntityModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cancelBtn,
                                    onClick: onClose,
                                    children: "Cancelar"
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/administrador/usuarios/LinkEntityModal.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$LinkEntityModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].submitBtn,
                                    children: "Vincular"
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/administrador/usuarios/LinkEntityModal.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profiles/administrador/usuarios/LinkEntityModal.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/profiles/administrador/usuarios/LinkEntityModal.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/profiles/administrador/usuarios/LinkEntityModal.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/profiles/administrador/usuarios/LinkEntityModal.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/profiles/administrador/usuarios/AccesosCliente.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "accesosCliente": "AccesosCliente-module__NjiKnW__accesosCliente",
  "active": "AccesosCliente-module__NjiKnW__active",
  "addBtn": "AccesosCliente-module__NjiKnW__addBtn",
  "detailHeader": "AccesosCliente-module__NjiKnW__detailHeader",
  "detailPanel": "AccesosCliente-module__NjiKnW__detailPanel",
  "emptySelection": "AccesosCliente-module__NjiKnW__emptySelection",
  "emptyState": "AccesosCliente-module__NjiKnW__emptyState",
  "emptyStateBtn": "AccesosCliente-module__NjiKnW__emptyStateBtn",
  "entityCard": "AccesosCliente-module__NjiKnW__entityCard",
  "entityInfo": "AccesosCliente-module__NjiKnW__entityInfo",
  "entityMeta": "AccesosCliente-module__NjiKnW__entityMeta",
  "entityName": "AccesosCliente-module__NjiKnW__entityName",
  "linkedEntities": "AccesosCliente-module__NjiKnW__linkedEntities",
  "masterDetail": "AccesosCliente-module__NjiKnW__masterDetail",
  "masterPanel": "AccesosCliente-module__NjiKnW__masterPanel",
  "owner": "AccesosCliente-module__NjiKnW__owner",
  "panelTitle": "AccesosCliente-module__NjiKnW__panelTitle",
  "permissionBadge": "AccesosCliente-module__NjiKnW__permissionBadge",
  "primaryBadge": "AccesosCliente-module__NjiKnW__primaryBadge",
  "removeBtn": "AccesosCliente-module__NjiKnW__removeBtn",
  "userEmail": "AccesosCliente-module__NjiKnW__userEmail",
  "userInfo": "AccesosCliente-module__NjiKnW__userInfo",
  "userItem": "AccesosCliente-module__NjiKnW__userItem",
  "userList": "AccesosCliente-module__NjiKnW__userList",
  "userName": "AccesosCliente-module__NjiKnW__userName",
  "view_only": "AccesosCliente-module__NjiKnW__view_only",
});
}),
"[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AccesosCliente
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$LinkEntityModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/profiles/administrador/usuarios/LinkEntityModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/profiles/administrador/usuarios/AccesosCliente.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
function AccesosCliente() {
    const [selectedUser, setSelectedUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLinkModalOpen, setIsLinkModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // TODO: Fetch from API
    const clientUsers = [
        {
            id: '1',
            email: 'cliente1@example.com',
            full_name: 'Juan Cliente'
        },
        {
            id: '2',
            email: 'cliente2@example.com',
            full_name: 'María Cliente'
        },
        {
            id: '3',
            email: 'cliente3@example.com',
            full_name: 'Pedro Cliente'
        }
    ];
    // TODO: Fetch from API based on selectedUser
    const linkedEntities = {
        '1': [
            {
                id: '1',
                entity_id: '101',
                entity_name: 'Empresa ABC S.A.',
                permission: 'OWNER',
                is_primary: true
            },
            {
                id: '2',
                entity_id: '102',
                entity_name: 'Empresa XYZ Ltda.',
                permission: 'VIEW_ONLY',
                is_primary: false
            }
        ],
        '2': [
            {
                id: '3',
                entity_id: '103',
                entity_name: 'Compañía DEF Inc.',
                permission: 'OWNER',
                is_primary: true
            }
        ],
        '3': []
    };
    const currentLinkedEntities = selectedUser ? linkedEntities[selectedUser] || [] : [];
    const handleLinkEntity = async (data)=>{
        if (!selectedUser) return;
        // TODO: Implement API call to link entity
        // await fetch(`/api/client_user_access`, {
        //   method: 'POST',
        //   body: JSON.stringify({
        //     user_id: selectedUser,
        //     entity_id: data.entityId,
        //     permission: data.permission,
        //     is_primary: data.isPrimary,
        //   }),
        // });
        setIsLinkModalOpen(false);
    // Refresh data
    };
    const handleRemoveLink = async (linkId)=>{
    // TODO: Implement API call to remove link
    // await fetch(`/api/client_user_access/${linkId}`, {
    //   method: 'DELETE',
    // });
    // Refresh data
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].accesosCliente,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].masterDetail,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].masterPanel,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].panelTitle,
                                children: "Usuarios Cliente"
                            }, void 0, false, {
                                fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userList,
                                children: clientUsers.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userItem} ${selectedUser === user.id ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : ''}`,
                                        onClick: ()=>setSelectedUser(user.id),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userInfo,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userName,
                                                    children: user.full_name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userEmail,
                                                    children: user.email
                                                }, void 0, false, {
                                                    fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                            lineNumber: 107,
                                            columnNumber: 17
                                        }, this)
                                    }, user.id, false, {
                                        fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].detailPanel,
                        children: selectedUser ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].detailHeader,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].panelTitle,
                                            children: "Entidades Vinculadas"
                                        }, void 0, false, {
                                            fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                            lineNumber: 121,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].addBtn,
                                            onClick: ()=>setIsLinkModalOpen(true),
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
                                                            fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                                            lineNumber: 129,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "5",
                                                            y1: "12",
                                                            x2: "19",
                                                            y2: "12"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                                            lineNumber: 130,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 19
                                                }, this),
                                                "Vincular Entidad"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                            lineNumber: 124,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                    lineNumber: 120,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].linkedEntities,
                                    children: currentLinkedEntities.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emptyState,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "No hay entidades vinculadas"
                                            }, void 0, false, {
                                                fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                                lineNumber: 139,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emptyStateBtn,
                                                onClick: ()=>setIsLinkModalOpen(true),
                                                children: "Vincular Primera Entidad"
                                            }, void 0, false, {
                                                fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                                lineNumber: 140,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                        lineNumber: 138,
                                        columnNumber: 19
                                    }, this) : currentLinkedEntities.map((entity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].entityCard,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].entityInfo,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].entityName,
                                                            children: entity.entity_name
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                                            lineNumber: 151,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].entityMeta,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].permissionBadge} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"][entity.permission.toLowerCase()]}`,
                                                                    children: entity.permission === 'OWNER' ? 'Propietario' : 'Solo Lectura'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                                                    lineNumber: 153,
                                                                    columnNumber: 27
                                                                }, this),
                                                                entity.is_primary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].primaryBadge,
                                                                    children: "Principal"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                                                    lineNumber: 157,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                                            lineNumber: 152,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].removeBtn,
                                                    onClick: ()=>handleRemoveLink(entity.id),
                                                    title: "Eliminar Vinculación",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "16",
                                                        height: "16",
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
                                                                fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                                                lineNumber: 167,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "6",
                                                                y1: "6",
                                                                x2: "18",
                                                                y2: "18"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                                                lineNumber: 168,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, entity.id, true, {
                                            fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                            lineNumber: 149,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emptySelection,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Seleccione un usuario para ver sus entidades vinculadas"
                            }, void 0, false, {
                                fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                lineNumber: 178,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                            lineNumber: 177,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            isLinkModalOpen && selectedUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$LinkEntityModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                userId: selectedUser,
                onClose: ()=>setIsLinkModalOpen(false),
                onSubmit: handleLinkEntity
            }, void 0, false, {
                fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                lineNumber: 186,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/profiles/administrador/usuarios/Usuarios.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "tabContent": "Usuarios-module___rFl9W__tabContent",
  "usuarios": "Usuarios-module___rFl9W__usuarios",
  "usuariosContent": "Usuarios-module___rFl9W__usuariosContent",
});
}),
"[project]/components/profiles/administrador/usuarios/Usuarios.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Usuarios
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/shared/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$TabContainer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TabContainer$3e$__ = __turbopack_context__.i("[project]/components/shared/TabContainer.tsx [app-ssr] (ecmascript) <export default as TabContainer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$GestionStaff$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/profiles/administrador/usuarios/GestionStaff.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$Usuarios$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/profiles/administrador/usuarios/Usuarios.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
;
;
;
function Usuarios() {
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('equipos');
    const [isRefreshing, setIsRefreshing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleRefresh = async ()=>{
        setIsRefreshing(true);
        // TODO: Implement API refresh
        await new Promise((resolve)=>setTimeout(resolve, 1000));
        setIsRefreshing(false);
    };
    const tabs = [
        {
            id: 'equipos',
            label: 'Estructura de Equipos',
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/profiles/administrador/usuarios/Usuarios.tsx",
                lineNumber: 25,
                columnNumber: 16
            }, this)
        },
        {
            id: 'staff',
            label: 'Gestión de Staff',
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$GestionStaff$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/profiles/administrador/usuarios/Usuarios.tsx",
                lineNumber: 30,
                columnNumber: 16
            }, this)
        },
        {
            id: 'accesos',
            label: 'Accesos de Cliente',
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/profiles/administrador/usuarios/Usuarios.tsx",
                lineNumber: 35,
                columnNumber: 16
            }, this)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$Usuarios$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].usuarios,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$Usuarios$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].usuariosContent,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$Usuarios$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tabContent,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$TabContainer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TabContainer$3e$__["TabContainer"], {
                    tabs: tabs,
                    activeTab: activeTab,
                    onTabChange: setActiveTab,
                    showRefresh: true,
                    onRefresh: handleRefresh,
                    isRefreshing: isRefreshing
                }, void 0, false, {
                    fileName: "[project]/components/profiles/administrador/usuarios/Usuarios.tsx",
                    lineNumber: 43,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/profiles/administrador/usuarios/Usuarios.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/profiles/administrador/usuarios/Usuarios.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/profiles/administrador/usuarios/Usuarios.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/profiles/administrador/usuarios/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$Usuarios$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/profiles/administrador/usuarios/Usuarios.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$GestionStaff$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/profiles/administrador/usuarios/GestionStaff.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx [app-ssr] (ecmascript)");
;
;
;
;
}),
"[project]/components/profiles/administrador/usuarios/Usuarios.tsx [app-ssr] (ecmascript) <export default as Usuarios>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Usuarios",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$Usuarios$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$Usuarios$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/profiles/administrador/usuarios/Usuarios.tsx [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=components_profiles_administrador_usuarios_45c20391._.js.map