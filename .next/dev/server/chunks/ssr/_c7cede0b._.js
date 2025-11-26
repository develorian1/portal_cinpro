module.exports = [
"[project]/components/shared/TabContainer.tsx [app-ssr] (ecmascript) <export default as TabContainer>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TabContainer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$TabContainer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$TabContainer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/TabContainer.tsx [app-ssr] (ecmascript)");
}),
"[project]/components/profiles/administrador/usuarios/EstructuraEquipos.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "accountantAvatar": "EstructuraEquipos-module__bcrmGW__accountantAvatar",
  "accountantCard": "EstructuraEquipos-module__bcrmGW__accountantCard",
  "accountantInfo": "EstructuraEquipos-module__bcrmGW__accountantInfo",
  "accountantName": "EstructuraEquipos-module__bcrmGW__accountantName",
  "accountantsContainer": "EstructuraEquipos-module__bcrmGW__accountantsContainer",
  "borderGreen": "EstructuraEquipos-module__bcrmGW__borderGreen",
  "borderOrange": "EstructuraEquipos-module__bcrmGW__borderOrange",
  "borderRed": "EstructuraEquipos-module__bcrmGW__borderRed",
  "cancelBtn": "EstructuraEquipos-module__bcrmGW__cancelBtn",
  "chiefName": "EstructuraEquipos-module__bcrmGW__chiefName",
  "clientBadge": "EstructuraEquipos-module__bcrmGW__clientBadge",
  "dragOver": "EstructuraEquipos-module__bcrmGW__dragOver",
  "editGroupBtn": "EstructuraEquipos-module__bcrmGW__editGroupBtn",
  "estructuraEquipos": "EstructuraEquipos-module__bcrmGW__estructuraEquipos",
  "formGroup": "EstructuraEquipos-module__bcrmGW__formGroup",
  "groupColumn": "EstructuraEquipos-module__bcrmGW__groupColumn",
  "groupHeader": "EstructuraEquipos-module__bcrmGW__groupHeader",
  "groupInfo": "EstructuraEquipos-module__bcrmGW__groupInfo",
  "groupName": "EstructuraEquipos-module__bcrmGW__groupName",
  "kanbanBoard": "EstructuraEquipos-module__bcrmGW__kanbanBoard",
  "modalActions": "EstructuraEquipos-module__bcrmGW__modalActions",
  "modalClose": "EstructuraEquipos-module__bcrmGW__modalClose",
  "modalContent": "EstructuraEquipos-module__bcrmGW__modalContent",
  "modalForm": "EstructuraEquipos-module__bcrmGW__modalForm",
  "modalHeader": "EstructuraEquipos-module__bcrmGW__modalHeader",
  "modalOverlay": "EstructuraEquipos-module__bcrmGW__modalOverlay",
  "orphanItem": "EstructuraEquipos-module__bcrmGW__orphanItem",
  "orphanList": "EstructuraEquipos-module__bcrmGW__orphanList",
  "orphanSidebar": "EstructuraEquipos-module__bcrmGW__orphanSidebar",
  "orphanTitle": "EstructuraEquipos-module__bcrmGW__orphanTitle",
  "saveBtn": "EstructuraEquipos-module__bcrmGW__saveBtn",
  "selectInput": "EstructuraEquipos-module__bcrmGW__selectInput",
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
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/profiles/administrador/usuarios/EstructuraEquipos.module.css [app-ssr] (css module)");
'use client';
;
;
;
function EstructuraEquipos() {
    const [groups, setGroups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: '1',
            groupName: 'Equipo Alpha',
            chiefId: 'chief1',
            chiefName: 'Carlos Ramírez',
            accountants: [
                {
                    id: 'acc1',
                    name: 'María González',
                    clientCount: 12
                },
                {
                    id: 'acc2',
                    name: 'Juan Pérez',
                    clientCount: 18
                },
                {
                    id: 'acc3',
                    name: 'Laura Sánchez',
                    clientCount: 25
                }
            ]
        },
        {
            id: '2',
            groupName: 'Equipo Beta',
            chiefId: 'chief2',
            chiefName: 'Ana Martínez',
            accountants: [
                {
                    id: 'acc4',
                    name: 'Pedro López',
                    clientCount: 8
                },
                {
                    id: 'acc5',
                    name: 'Sofía Torres',
                    clientCount: 22
                }
            ]
        }
    ]);
    const [orphanClients] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 'orphan1',
            name: 'Cliente Sin Asignar 1',
            entityId: 'entity1'
        },
        {
            id: 'orphan2',
            name: 'Cliente Sin Asignar 2',
            entityId: 'entity2'
        },
        {
            id: 'orphan3',
            name: 'Cliente Sin Asignar 3',
            entityId: 'entity3'
        }
    ]);
    const [draggedClient, setDraggedClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isEditGroupModalOpen, setIsEditGroupModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingGroup, setEditingGroup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const getInitials = (name)=>{
        return name.split(' ').map((n)=>n[0]).join('').toUpperCase().substring(0, 2);
    };
    const getBorderColor = (clientCount)=>{
        if (clientCount < 15) return __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].borderGreen;
        if (clientCount <= 25) return __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].borderOrange;
        return __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].borderRed;
    };
    const handleDragStart = (client)=>{
        setDraggedClient(client);
    };
    const handleDragOver = (e)=>{
        e.preventDefault();
        const target = e.currentTarget;
        target.classList.add(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dragOver);
    };
    const handleDragLeave = (e)=>{
        const target = e.currentTarget;
        target.classList.remove(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dragOver);
    };
    const handleDrop = async (e, accountantId)=>{
        e.preventDefault();
        e.currentTarget.classList.remove(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dragOver);
        if (!draggedClient) return;
        try {
            // TODO: Implement API call PATCH /entities/{id}
            // await api.patch(`/entities/${draggedClient.entityId}`, {
            //   assigned_accountant_id: accountantId,
            // });
            console.log(`Assigning client ${draggedClient.id} to accountant ${accountantId}`);
            // Update local state
            setGroups((prevGroups)=>prevGroups.map((group)=>({
                        ...group,
                        accountants: group.accountants.map((acc)=>acc.id === accountantId ? {
                                ...acc,
                                clientCount: acc.clientCount + 1
                            } : acc)
                    })));
            setDraggedClient(null);
        } catch (error) {
            console.error('Error assigning client:', error);
        }
    };
    const handleEditGroup = (group)=>{
        setEditingGroup(group);
        setIsEditGroupModalOpen(true);
    };
    const handleCloseEditModal = ()=>{
        setIsEditGroupModalOpen(false);
        setEditingGroup(null);
    };
    const handleSaveGroup = async (chiefId)=>{
        if (!editingGroup) return;
        // TODO: Implement API call to update group chief
        console.log(`Updating group ${editingGroup.id} with chief ${chiefId}`);
        setGroups((prevGroups)=>prevGroups.map((group)=>group.id === editingGroup.id ? {
                    ...group,
                    chiefId,
                    chiefName: 'New Chief'
                } // TODO: Get actual chief name
                 : group));
        handleCloseEditModal();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].estructuraEquipos,
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
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].groupInfo,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].groupName,
                                                children: group.groupName
                                            }, void 0, false, {
                                                fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                lineNumber: 158,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chiefName,
                                                children: [
                                                    "Jefe: ",
                                                    group.chiefName
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                lineNumber: 159,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
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
                                                    lineNumber: 167,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                            lineNumber: 166,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                lineNumber: 156,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].accountantsContainer,
                                children: group.accountants.map((accountant)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].accountantCard} ${getBorderColor(accountant.clientCount)}`,
                                        "data-staff-id": accountant.id,
                                        onDragOver: handleDragOver,
                                        onDragLeave: handleDragLeave,
                                        onDrop: (e)=>handleDrop(e, accountant.id),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].accountantAvatar,
                                                children: accountant.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: accountant.avatar,
                                                    alt: accountant.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: getInitials(accountant.name)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                lineNumber: 183,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].accountantInfo,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].accountantName,
                                                        children: accountant.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].clientBadge,
                                                        children: [
                                                            accountant.clientCount,
                                                            " Clientes"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                        lineNumber: 192,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                lineNumber: 190,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, accountant.id, true, {
                                        fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                        lineNumber: 175,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                lineNumber: 173,
                                columnNumber: 13
                            }, this)
                        ]
                    }, group.id, true, {
                        fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                        lineNumber: 155,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].orphanSidebar,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].orphanTitle,
                        children: "Clientes Sin Asignar"
                    }, void 0, false, {
                        fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].orphanList,
                        children: orphanClients.map((client)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].orphanItem,
                                draggable: true,
                                onDragStart: ()=>handleDragStart(client),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: client.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                        lineNumber: 213,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                                fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                lineNumber: 215,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "12",
                                                y1: "8",
                                                x2: "12",
                                                y2: "16"
                                            }, void 0, false, {
                                                fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                lineNumber: 216,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "8",
                                                y1: "12",
                                                x2: "16",
                                                y2: "12"
                                            }, void 0, false, {
                                                fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                lineNumber: 217,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                        lineNumber: 214,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, client.id, true, {
                                fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                lineNumber: 207,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                lineNumber: 203,
                columnNumber: 7
            }, this),
            isEditGroupModalOpen && editingGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EditGroupModal, {
                group: editingGroup,
                onClose: handleCloseEditModal,
                onSave: handleSaveGroup
            }, void 0, false, {
                fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                lineNumber: 225,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
        lineNumber: 152,
        columnNumber: 5
    }, this);
}
function EditGroupModal({ group, onClose, onSave }) {
    const [selectedChiefId, setSelectedChiefId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(group.chiefId);
    const [availableChiefs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 'chief1',
            name: 'Carlos Ramírez'
        },
        {
            id: 'chief2',
            name: 'Ana Martínez'
        },
        {
            id: 'chief3',
            name: 'Luis Fernández'
        }
    ]);
    const handleSubmit = (e)=>{
        e.preventDefault();
        onSave(selectedChiefId);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalOverlay,
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalContent,
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalHeader,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: [
                                "Editar Grupo: ",
                                group.groupName
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                            lineNumber: 258,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalClose,
                            onClick: onClose,
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                            lineNumber: 259,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                    lineNumber: 257,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalForm,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "chief",
                                    children: "Jefe del Grupo"
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                    lineNumber: 265,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    id: "chief",
                                    value: selectedChiefId,
                                    onChange: (e)=>setSelectedChiefId(e.target.value),
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].selectInput,
                                    children: availableChiefs.map((chief)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: chief.id,
                                            children: chief.name
                                        }, chief.id, false, {
                                            fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                            lineNumber: 273,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                    lineNumber: 266,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                            lineNumber: 264,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalActions,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cancelBtn,
                                    onClick: onClose,
                                    children: "Cancelar"
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                    lineNumber: 280,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].saveBtn,
                                    children: "Guardar"
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                    lineNumber: 283,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                            lineNumber: 279,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                    lineNumber: 263,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
            lineNumber: 256,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
        lineNumber: 255,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/shared/Table.tsx [app-ssr] (ecmascript) <export default as Table>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Table",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$Table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$Table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/Table.tsx [app-ssr] (ecmascript)");
}),
"[project]/components/profiles/administrador/usuarios/GestionStaff.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "commissionDisplay": "GestionStaff-module__fNa8yW__commissionDisplay",
  "commissionInput": "GestionStaff-module__fNa8yW__commissionInput",
  "contactCell": "GestionStaff-module__fNa8yW__contactCell",
  "email": "GestionStaff-module__fNa8yW__email",
  "fullName": "GestionStaff-module__fNa8yW__fullName",
  "gestionStaff": "GestionStaff-module__fNa8yW__gestionStaff",
  "numberInput": "GestionStaff-module__fNa8yW__numberInput",
  "roleSelect": "GestionStaff-module__fNa8yW__roleSelect",
  "tableContainer": "GestionStaff-module__fNa8yW__tableContainer",
  "telegramInput": "GestionStaff-module__fNa8yW__telegramInput",
  "telegramRow": "GestionStaff-module__fNa8yW__telegramRow",
  "testBtn": "GestionStaff-module__fNa8yW__testBtn",
  "toggleContainer": "GestionStaff-module__fNa8yW__toggleContainer",
  "toggleInput": "GestionStaff-module__fNa8yW__toggleInput",
  "toggleLabel": "GestionStaff-module__fNa8yW__toggleLabel",
  "toggleSlider": "GestionStaff-module__fNa8yW__toggleSlider",
  "toggleText": "GestionStaff-module__fNa8yW__toggleText",
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
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/shared/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$Table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__ = __turbopack_context__.i("[project]/components/shared/Table.tsx [app-ssr] (ecmascript) <export default as Table>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$GestionStaff$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/profiles/administrador/usuarios/GestionStaff.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
const STAFF_ROLES = [
    {
        value: 'auxiliar',
        label: 'Auxiliar'
    },
    {
        value: 'jefe',
        label: 'Jefe'
    },
    {
        value: 'gerente',
        label: 'Gerente'
    }
];
function GestionStaff() {
    const [staff, setStaff] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: '1',
            fullName: 'María González',
            role: 'auxiliar',
            baseCommission: 0.10,
            email: 'maria.gonzalez@example.com',
            telegramChatId: '123456789',
            isActive: true
        },
        {
            id: '2',
            fullName: 'Juan Pérez',
            role: 'auxiliar',
            baseCommission: 0.12,
            email: 'juan.perez@example.com',
            telegramChatId: '987654321',
            isActive: true
        },
        {
            id: '3',
            fullName: 'Carlos Ramírez',
            role: 'jefe',
            baseCommission: 0.15,
            email: 'carlos.ramirez@example.com',
            telegramChatId: '555555555',
            isActive: true
        }
    ]);
    const handleRoleChange = (id, newRole)=>{
        setStaff((prev)=>prev.map((member)=>member.id === id ? {
                    ...member,
                    role: newRole
                } : member));
        // TODO: Implement API call to update role
        console.log(`Updating staff ${id} role to ${newRole}`);
    };
    const handleCommissionChange = (id, newCommission)=>{
        // Clamp value between 0 and 1
        const clampedValue = Math.max(0, Math.min(1, newCommission));
        setStaff((prev)=>prev.map((member)=>member.id === id ? {
                    ...member,
                    baseCommission: clampedValue
                } : member));
        // TODO: Implement API call to update commission
        console.log(`Updating staff ${id} commission to ${clampedValue}`);
    };
    const handleTelegramChange = (id, newTelegramId)=>{
        setStaff((prev)=>prev.map((member)=>member.id === id ? {
                    ...member,
                    telegramChatId: newTelegramId
                } : member));
    };
    const handleTelegramSave = async (id, telegramId)=>{
        // TODO: Implement API call to save telegram ID
        console.log(`Saving telegram ID ${telegramId} for staff ${id}`);
    };
    const handleTestMessage = async (id, telegramId)=>{
        // TODO: Implement API call to send test message
        console.log(`Sending test message to telegram ID ${telegramId} for staff ${id}`);
        alert(`Mensaje de prueba enviado a ${telegramId}`);
    };
    const handleToggleActive = (id)=>{
        setStaff((prev)=>prev.map((member)=>member.id === id ? {
                    ...member,
                    isActive: !member.isActive
                } : member));
        // TODO: Implement API call to update is_active
        console.log(`Toggling active status for staff ${id}`);
    };
    const formatCommission = (value)=>{
        return `${(value * 100).toFixed(0)}%`;
    };
    const columns = [
        {
            key: 'fullName',
            header: 'Nombre Completo',
            render: (member)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$GestionStaff$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fullName,
                    children: member.fullName
                }, void 0, false, {
                    fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, this)
        },
        {
            key: 'role',
            header: 'Rol',
            render: (member)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    value: member.role,
                    onChange: (e)=>handleRoleChange(member.id, e.target.value),
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$GestionStaff$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].roleSelect,
                    children: STAFF_ROLES.map((role)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: role.value,
                            children: role.label
                        }, role.value, false, {
                            fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                            lineNumber: 127,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, this)
        },
        {
            key: 'baseCommission',
            header: 'Comisión Base',
            render: (member)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$GestionStaff$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].commissionInput,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "number",
                            min: "0",
                            max: "1",
                            step: "0.01",
                            value: member.baseCommission,
                            onChange: (e)=>handleCommissionChange(member.id, parseFloat(e.target.value) || 0),
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$GestionStaff$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].numberInput
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$GestionStaff$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].commissionDisplay,
                            children: formatCommission(member.baseCommission)
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this)
        },
        {
            key: 'contact',
            header: 'Contacto',
            render: (member)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$GestionStaff$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contactCell,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$GestionStaff$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].email,
                            children: member.email
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$GestionStaff$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].telegramRow,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: member.telegramChatId,
                                    onChange: (e)=>handleTelegramChange(member.id, e.target.value),
                                    onBlur: ()=>handleTelegramSave(member.id, member.telegramChatId),
                                    placeholder: "Telegram Chat ID",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$GestionStaff$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].telegramInput
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$GestionStaff$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].testBtn,
                                    onClick: ()=>handleTestMessage(member.id, member.telegramChatId),
                                    title: "Enviar Mensaje de Prueba",
                                    children: "Test"
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                    lineNumber: 160,
                    columnNumber: 9
                }, this)
        },
        {
            key: 'actions',
            header: 'Acciones',
            render: (member)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$GestionStaff$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].toggleContainer,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$GestionStaff$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].toggleLabel,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                checked: member.isActive,
                                onChange: ()=>handleToggleActive(member.id),
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$GestionStaff$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].toggleInput
                            }, void 0, false, {
                                fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                                lineNumber: 188,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$GestionStaff$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].toggleSlider
                            }, void 0, false, {
                                fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                                lineNumber: 194,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$GestionStaff$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].toggleText,
                                children: member.isActive ? 'Activo' : 'Inactivo'
                            }, void 0, false, {
                                fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                                lineNumber: 195,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                        lineNumber: 187,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                    lineNumber: 186,
                    columnNumber: 9
                }, this)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$GestionStaff$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].gestionStaff,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$Table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__["Table"], {
            data: staff,
            columns: columns,
            keyExtractor: (member)=>member.id,
            containerClassName: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$GestionStaff$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tableContainer
        }, void 0, false, {
            fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
            lineNumber: 206,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
        lineNumber: 205,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/profiles/administrador/usuarios/AccesosCliente.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "accesosCliente": "AccesosCliente-module__NjiKnW__accesosCliente",
  "addBtn": "AccesosCliente-module__NjiKnW__addBtn",
  "cancelBtn": "AccesosCliente-module__NjiKnW__cancelBtn",
  "checkboxInput": "AccesosCliente-module__NjiKnW__checkboxInput",
  "checkboxLabel": "AccesosCliente-module__NjiKnW__checkboxLabel",
  "detailHeader": "AccesosCliente-module__NjiKnW__detailHeader",
  "detailPanel": "AccesosCliente-module__NjiKnW__detailPanel",
  "detailSubtitle": "AccesosCliente-module__NjiKnW__detailSubtitle",
  "detailTitle": "AccesosCliente-module__NjiKnW__detailTitle",
  "emptyAddBtn": "AccesosCliente-module__NjiKnW__emptyAddBtn",
  "emptyState": "AccesosCliente-module__NjiKnW__emptyState",
  "entityCard": "AccesosCliente-module__NjiKnW__entityCard",
  "entityCardBody": "AccesosCliente-module__NjiKnW__entityCardBody",
  "entityCardHeader": "AccesosCliente-module__NjiKnW__entityCardHeader",
  "entityCards": "AccesosCliente-module__NjiKnW__entityCards",
  "entityCount": "AccesosCliente-module__NjiKnW__entityCount",
  "entityInfo": "AccesosCliente-module__NjiKnW__entityInfo",
  "entityName": "AccesosCliente-module__NjiKnW__entityName",
  "formGroup": "AccesosCliente-module__NjiKnW__formGroup",
  "masterPanel": "AccesosCliente-module__NjiKnW__masterPanel",
  "modalActions": "AccesosCliente-module__NjiKnW__modalActions",
  "modalClose": "AccesosCliente-module__NjiKnW__modalClose",
  "modalContent": "AccesosCliente-module__NjiKnW__modalContent",
  "modalForm": "AccesosCliente-module__NjiKnW__modalForm",
  "modalHeader": "AccesosCliente-module__NjiKnW__modalHeader",
  "modalOverlay": "AccesosCliente-module__NjiKnW__modalOverlay",
  "noSelection": "AccesosCliente-module__NjiKnW__noSelection",
  "panelTitle": "AccesosCliente-module__NjiKnW__panelTitle",
  "permissionBadge": "AccesosCliente-module__NjiKnW__permissionBadge",
  "primaryBadge": "AccesosCliente-module__NjiKnW__primaryBadge",
  "radioGroup": "AccesosCliente-module__NjiKnW__radioGroup",
  "radioInput": "AccesosCliente-module__NjiKnW__radioInput",
  "radioLabel": "AccesosCliente-module__NjiKnW__radioLabel",
  "removeBtn": "AccesosCliente-module__NjiKnW__removeBtn",
  "saveBtn": "AccesosCliente-module__NjiKnW__saveBtn",
  "searchContainer": "AccesosCliente-module__NjiKnW__searchContainer",
  "searchInput": "AccesosCliente-module__NjiKnW__searchInput",
  "selectInput": "AccesosCliente-module__NjiKnW__selectInput",
  "userEmail": "AccesosCliente-module__NjiKnW__userEmail",
  "userInfo": "AccesosCliente-module__NjiKnW__userInfo",
  "userItem": "AccesosCliente-module__NjiKnW__userItem",
  "userItemActive": "AccesosCliente-module__NjiKnW__userItemActive",
  "userList": "AccesosCliente-module__NjiKnW__userList",
  "userName": "AccesosCliente-module__NjiKnW__userName",
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
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/profiles/administrador/usuarios/AccesosCliente.module.css [app-ssr] (css module)");
'use client';
;
;
;
function AccesosCliente() {
    const [clientUsers, setClientUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 'user1',
            name: 'Juan Pérez',
            email: 'juan.perez@example.com',
            linkedEntities: [
                {
                    id: 'link1',
                    entityId: 'entity1',
                    entityName: 'Empresa ABC S.A.',
                    permission: 'OWNER',
                    isPrimary: true
                },
                {
                    id: 'link2',
                    entityId: 'entity2',
                    entityName: 'Empresa XYZ Ltda.',
                    permission: 'VIEW_ONLY',
                    isPrimary: false
                }
            ]
        },
        {
            id: 'user2',
            name: 'María González',
            email: 'maria.gonzalez@example.com',
            linkedEntities: [
                {
                    id: 'link3',
                    entityId: 'entity3',
                    entityName: 'Compañía DEF Inc.',
                    permission: 'OWNER',
                    isPrimary: true
                }
            ]
        }
    ]);
    const [selectedUser, setSelectedUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(clientUsers[0] || null);
    const [isLinkModalOpen, setIsLinkModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [availableEntities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 'entity4',
            name: 'Nueva Empresa 1'
        },
        {
            id: 'entity5',
            name: 'Nueva Empresa 2'
        },
        {
            id: 'entity6',
            name: 'Nueva Empresa 3'
        }
    ]);
    const handleUserSelect = (user)=>{
        setSelectedUser(user);
    };
    const handleAddLink = ()=>{
        setIsLinkModalOpen(true);
    };
    const handleCloseModal = ()=>{
        setIsLinkModalOpen(false);
        setSearchQuery('');
    };
    const handleSaveLink = async (data)=>{
        if (!selectedUser) return;
        // TODO: Implement API call to create client_user_access
        console.log(`Linking entity ${data.entityId} to user ${selectedUser.id}`, data);
        const entity = availableEntities.find((e)=>e.id === data.entityId);
        if (!entity) return;
        const newLink = {
            id: `link${Date.now()}`,
            entityId: data.entityId,
            entityName: entity.name,
            permission: data.permission,
            isPrimary: data.isPrimary
        };
        setClientUsers((prev)=>prev.map((user)=>user.id === selectedUser.id ? {
                    ...user,
                    linkedEntities: [
                        ...user.linkedEntities,
                        newLink
                    ]
                } : user));
        // If this is set as primary, unset others
        if (data.isPrimary) {
            setClientUsers((prev)=>prev.map((user)=>user.id === selectedUser.id ? {
                        ...user,
                        linkedEntities: user.linkedEntities.map((link)=>link.id === newLink.id ? link : {
                                ...link,
                                isPrimary: false
                            })
                    } : user));
        }
        handleCloseModal();
    };
    const handleRemoveLink = async (linkId)=>{
        if (!selectedUser) return;
        // TODO: Implement API call to remove client_user_access
        console.log(`Removing link ${linkId} from user ${selectedUser.id}`);
        setClientUsers((prev)=>prev.map((user)=>user.id === selectedUser.id ? {
                    ...user,
                    linkedEntities: user.linkedEntities.filter((link)=>link.id !== linkId)
                } : user));
    };
    const filteredEntities = availableEntities.filter((entity)=>entity.name.toLowerCase().includes(searchQuery.toLowerCase()) && !selectedUser?.linkedEntities.some((link)=>link.entityId === entity.id));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].accesosCliente,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].masterPanel,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].panelTitle,
                        children: "Usuarios Cliente"
                    }, void 0, false, {
                        fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userList,
                        children: clientUsers.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userItem} ${selectedUser?.id === user.id ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userItemActive : ''}`,
                                onClick: ()=>handleUserSelect(user),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userInfo,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userName,
                                                children: user.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                                lineNumber: 174,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userEmail,
                                                children: user.email
                                            }, void 0, false, {
                                                fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                                lineNumber: 175,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                        lineNumber: 173,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].entityCount,
                                        children: [
                                            user.linkedEntities.length,
                                            " entidad",
                                            user.linkedEntities.length !== 1 ? 'es' : ''
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                        lineNumber: 177,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, user.id, true, {
                                fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].detailPanel,
                children: selectedUser ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].detailHeader,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].detailTitle,
                                            children: "Entidades Vinculadas"
                                        }, void 0, false, {
                                            fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                            lineNumber: 190,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].detailSubtitle,
                                            children: [
                                                selectedUser.name,
                                                " (",
                                                selectedUser.email,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                            lineNumber: 191,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                    lineNumber: 189,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].addBtn,
                                    onClick: handleAddLink,
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
                                                    lineNumber: 197,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "5",
                                                    y1: "12",
                                                    x2: "19",
                                                    y2: "12"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                            lineNumber: 196,
                                            columnNumber: 17
                                        }, this),
                                        "Vincular Entidad"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                    lineNumber: 195,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                            lineNumber: 188,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].entityCards,
                            children: selectedUser.linkedEntities.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emptyState,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "No hay entidades vinculadas"
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                        lineNumber: 207,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emptyAddBtn,
                                        onClick: handleAddLink,
                                        children: "Vincular Primera Entidad"
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                        lineNumber: 208,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                lineNumber: 206,
                                columnNumber: 17
                            }, this) : selectedUser.linkedEntities.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].entityCard,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].entityCardHeader,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].entityName,
                                                    children: link.entityName
                                                }, void 0, false, {
                                                    fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 23
                                                }, this),
                                                link.isPrimary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].primaryBadge,
                                                    children: "Principal"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                            lineNumber: 215,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].entityCardBody,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].entityInfo,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].permissionBadge,
                                                        children: link.permission === 'OWNER' ? 'Propietario' : 'Solo Lectura'
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                                        lineNumber: 223,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].removeBtn,
                                                    onClick: ()=>handleRemoveLink(link.id),
                                                    title: "Eliminar Vínculo",
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
                                                                lineNumber: 233,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "6",
                                                                y1: "6",
                                                                x2: "18",
                                                                y2: "18"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                                                lineNumber: 234,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                            lineNumber: 221,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, link.id, true, {
                                    fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                    lineNumber: 214,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                            lineNumber: 204,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].noSelection,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Seleccione un usuario para ver sus entidades vinculadas"
                    }, void 0, false, {
                        fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                        lineNumber: 245,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                    lineNumber: 244,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            isLinkModalOpen && selectedUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LinkEntityModal, {
                availableEntities: filteredEntities,
                searchQuery: searchQuery,
                onSearchChange: setSearchQuery,
                onClose: handleCloseModal,
                onSave: handleSaveLink
            }, void 0, false, {
                fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                lineNumber: 251,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
function LinkEntityModal({ availableEntities, searchQuery, onSearchChange, onClose, onSave }) {
    const [selectedEntityId, setSelectedEntityId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [permission, setPermission] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('VIEW_ONLY');
    const [isPrimary, setIsPrimary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!selectedEntityId) return;
        onSave({
            entityId: selectedEntityId,
            permission,
            isPrimary
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalOverlay,
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalContent,
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalHeader,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Vincular Entidad"
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                            lineNumber: 300,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalClose,
                            onClick: onClose,
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                            lineNumber: 301,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                    lineNumber: 299,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalForm,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "entity",
                                    children: "Seleccionar Entidad"
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                    lineNumber: 307,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].searchContainer,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: searchQuery,
                                        onChange: (e)=>onSearchChange(e.target.value),
                                        placeholder: "Buscar entidad...",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].searchInput
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                        lineNumber: 309,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                    lineNumber: 308,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    id: "entity",
                                    value: selectedEntityId,
                                    onChange: (e)=>setSelectedEntityId(e.target.value),
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].selectInput,
                                    required: true,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "-- Seleccione una entidad --"
                                        }, void 0, false, {
                                            fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                            lineNumber: 324,
                                            columnNumber: 15
                                        }, this),
                                        availableEntities.map((entity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: entity.id,
                                                children: entity.name
                                            }, entity.id, false, {
                                                fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                                lineNumber: 326,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                    lineNumber: 317,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                            lineNumber: 306,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: "Permisos"
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                    lineNumber: 334,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].radioGroup,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].radioLabel,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "permission",
                                                    value: "OWNER",
                                                    checked: permission === 'OWNER',
                                                    onChange: (e)=>setPermission(e.target.value),
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].radioInput
                                                }, void 0, false, {
                                                    fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                                    lineNumber: 337,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Propietario (OWNER)"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                                    lineNumber: 345,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                            lineNumber: 336,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].radioLabel,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "permission",
                                                    value: "VIEW_ONLY",
                                                    checked: permission === 'VIEW_ONLY',
                                                    onChange: (e)=>setPermission(e.target.value),
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].radioInput
                                                }, void 0, false, {
                                                    fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                                    lineNumber: 348,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Solo Lectura (VIEW_ONLY)"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                                    lineNumber: 356,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                            lineNumber: 347,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                    lineNumber: 335,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                            lineNumber: 333,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formGroup,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].checkboxLabel,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: isPrimary,
                                        onChange: (e)=>setIsPrimary(e.target.checked),
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].checkboxInput
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                        lineNumber: 363,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Marcar como Entidad Principal"
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                        lineNumber: 369,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                lineNumber: 362,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                            lineNumber: 361,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalActions,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cancelBtn,
                                    onClick: onClose,
                                    children: "Cancelar"
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                    lineNumber: 374,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].saveBtn,
                                    disabled: !selectedEntityId,
                                    children: "Vincular"
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                                    lineNumber: 377,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                            lineNumber: 373,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
                    lineNumber: 305,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
            lineNumber: 298,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/profiles/administrador/usuarios/AccesosCliente.tsx",
        lineNumber: 297,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/profiles/administrador/usuarios/Usuarios.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "usuarios": "Usuarios-module___rFl9W__usuarios",
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
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('estructura');
    const [isRefreshing, setIsRefreshing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleRefresh = async ()=>{
        setIsRefreshing(true);
        // TODO: Implement refresh logic
        await new Promise((resolve)=>setTimeout(resolve, 500));
        setIsRefreshing(false);
    };
    const tabs = [
        {
            id: 'estructura',
            label: 'Estructura de Equipos',
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/profiles/administrador/usuarios/Usuarios.tsx",
                lineNumber: 25,
                columnNumber: 16
            }, this)
        },
        {
            id: 'gestion',
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
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$TabContainer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TabContainer$3e$__["TabContainer"], {
            tabs: tabs,
            activeTab: activeTab,
            onTabChange: setActiveTab,
            showRefresh: true,
            onRefresh: handleRefresh,
            isRefreshing: isRefreshing,
            refreshLabel: "Actualizar"
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
"[project]/components/shared/SectionErrorBoundary.tsx [app-ssr] (ecmascript) <export default as SectionErrorBoundary>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionErrorBoundary",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionErrorBoundary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionErrorBoundary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/SectionErrorBoundary.tsx [app-ssr] (ecmascript)");
}),
"[project]/app/admin/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/profiles/administrador/usuarios/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$Usuarios$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Usuarios$3e$__ = __turbopack_context__.i("[project]/components/profiles/administrador/usuarios/Usuarios.tsx [app-ssr] (ecmascript) <export default as Usuarios>");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$NavigationContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/NavigationContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/shared/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionErrorBoundary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SectionErrorBoundary$3e$__ = __turbopack_context__.i("[project]/components/shared/SectionErrorBoundary.tsx [app-ssr] (ecmascript) <export default as SectionErrorBoundary>");
'use client';
;
;
;
;
function AdminPage() {
    const { activeItem } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$NavigationContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNavigation"])();
    // Render Usuarios section
    if (activeItem === 'usuarios' || activeItem.startsWith('usuarios-')) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionErrorBoundary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SectionErrorBoundary$3e$__["SectionErrorBoundary"], {
            sectionName: "Administrar Usuarios",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$Usuarios$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Usuarios$3e$__["Usuarios"], {}, void 0, false, {
                fileName: "[project]/app/admin/page.tsx",
                lineNumber: 14,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/admin/page.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this);
    }
    // TODO: Add other sections as they are implemented
    // - Home
    // - Clientes
    // - Finanzas
    // - Estadísticas
    // - Comunicación
    // - Mensajes
    // Default home dashboard
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionErrorBoundary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SectionErrorBoundary$3e$__["SectionErrorBoundary"], {
        sectionName: "Home",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    children: "Administrador Dashboard"
                }, void 0, false, {
                    fileName: "[project]/app/admin/page.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "This page is under construction."
                }, void 0, false, {
                    fileName: "[project]/app/admin/page.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/page.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/admin/page.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_c7cede0b._.js.map