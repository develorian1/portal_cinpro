module.exports = [
"[project]/components/profiles/administrador/usuarios/EstructuraEquipos.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "accountantItem": "EstructuraEquipos-module__bcrmGW__accountantItem",
  "accountantName": "EstructuraEquipos-module__bcrmGW__accountantName",
  "accountantsList": "EstructuraEquipos-module__bcrmGW__accountantsList",
  "borderGreen": "EstructuraEquipos-module__bcrmGW__borderGreen",
  "borderOrange": "EstructuraEquipos-module__bcrmGW__borderOrange",
  "borderRed": "EstructuraEquipos-module__bcrmGW__borderRed",
  "cancelBtn": "EstructuraEquipos-module__bcrmGW__cancelBtn",
  "chiefName": "EstructuraEquipos-module__bcrmGW__chiefName",
  "clientCount": "EstructuraEquipos-module__bcrmGW__clientCount",
  "clientDetail": "EstructuraEquipos-module__bcrmGW__clientDetail",
  "clientDetails": "EstructuraEquipos-module__bcrmGW__clientDetails",
  "clientInfo": "EstructuraEquipos-module__bcrmGW__clientInfo",
  "clientItem": "EstructuraEquipos-module__bcrmGW__clientItem",
  "clientName": "EstructuraEquipos-module__bcrmGW__clientName",
  "clientsList": "EstructuraEquipos-module__bcrmGW__clientsList",
  "deleteClientBtn": "EstructuraEquipos-module__bcrmGW__deleteClientBtn",
  "dragOver": "EstructuraEquipos-module__bcrmGW__dragOver",
  "editGroupBtn": "EstructuraEquipos-module__bcrmGW__editGroupBtn",
  "emptyMessage": "EstructuraEquipos-module__bcrmGW__emptyMessage",
  "estructuraEquipos": "EstructuraEquipos-module__bcrmGW__estructuraEquipos",
  "formGroup": "EstructuraEquipos-module__bcrmGW__formGroup",
  "groupColumn": "EstructuraEquipos-module__bcrmGW__groupColumn",
  "groupHeader": "EstructuraEquipos-module__bcrmGW__groupHeader",
  "groupInfo": "EstructuraEquipos-module__bcrmGW__groupInfo",
  "groupName": "EstructuraEquipos-module__bcrmGW__groupName",
  "itemContent": "EstructuraEquipos-module__bcrmGW__itemContent",
  "itemIndex": "EstructuraEquipos-module__bcrmGW__itemIndex",
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
        },
        {
            id: '3',
            groupName: 'Equipo Gamma',
            chiefId: 'chief3',
            chiefName: 'Luis Fernández',
            accountants: [
                {
                    id: 'acc6',
                    name: 'Carmen Ruiz',
                    clientCount: 15
                },
                {
                    id: 'acc7',
                    name: 'Diego Morales',
                    clientCount: 20
                },
                {
                    id: 'acc8',
                    name: 'Patricia Vega',
                    clientCount: 10
                }
            ]
        },
        {
            id: '4',
            groupName: 'Equipo Delta',
            chiefId: 'chief4',
            chiefName: 'Roberto Silva',
            accountants: [
                {
                    id: 'acc9',
                    name: 'Elena Castro',
                    clientCount: 14
                },
                {
                    id: 'acc10',
                    name: 'Miguel Herrera',
                    clientCount: 19
                },
                {
                    id: 'acc11',
                    name: 'Isabel Mendoza',
                    clientCount: 16
                },
                {
                    id: 'acc12',
                    name: 'Fernando Rojas',
                    clientCount: 11
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
        },
        {
            id: 'orphan4',
            name: 'Cliente Sin Asignar 4',
            entityId: 'entity4'
        },
        {
            id: 'orphan5',
            name: 'Cliente Sin Asignar 5',
            entityId: 'entity5'
        },
        {
            id: 'orphan6',
            name: 'Cliente Sin Asignar 6',
            entityId: 'entity6'
        },
        {
            id: 'orphan7',
            name: 'Cliente Sin Asignar 7',
            entityId: 'entity7'
        },
        {
            id: 'orphan8',
            name: 'Cliente Sin Asignar 8',
            entityId: 'entity8'
        },
        {
            id: 'orphan9',
            name: 'Cliente Sin Asignar 9',
            entityId: 'entity9'
        },
        {
            id: 'orphan10',
            name: 'Cliente Sin Asignar 10',
            entityId: 'entity10'
        },
        {
            id: 'orphan11',
            name: 'Cliente Sin Asignar 11',
            entityId: 'entity11'
        },
        {
            id: 'orphan12',
            name: 'Cliente Sin Asignar 12',
            entityId: 'entity12'
        },
        {
            id: 'orphan13',
            name: 'Cliente Sin Asignar 13',
            entityId: 'entity13'
        }
    ]);
    const [draggedClient, setDraggedClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isEditGroupModalOpen, setIsEditGroupModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingGroup, setEditingGroup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAccountantModalOpen, setIsAccountantModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedAccountant, setSelectedAccountant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [deletedClients, setDeletedClients] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
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
    const handleAccountantClick = (accountant, groupId)=>{
        setSelectedAccountant({
            accountant,
            groupId
        });
        setIsAccountantModalOpen(true);
    };
    const handleCloseAccountantModal = ()=>{
        setIsAccountantModalOpen(false);
        setSelectedAccountant(null);
    };
    const handleDeleteClient = async (clientId, entityId)=>{
        if (!selectedAccountant) return;
        try {
            // TODO: Implement API call to remove client assignment
            // await api.patch(`/entities/${entityId}`, {
            //   assigned_accountant_id: null,
            // });
            console.log(`Removing client ${clientId} from accountant ${selectedAccountant.accountant.id}`);
            // Mark client as deleted
            setDeletedClients((prev)=>new Set(prev).add(clientId));
            // Update local state
            setGroups((prevGroups)=>prevGroups.map((group)=>group.id === selectedAccountant.groupId ? {
                        ...group,
                        accountants: group.accountants.map((acc)=>acc.id === selectedAccountant.accountant.id ? {
                                ...acc,
                                clientCount: Math.max(0, acc.clientCount - 1)
                            } : acc)
                    } : group));
        } catch (error) {
            console.error('Error removing client:', error);
        }
    };
    // Mock data for accountant clients
    const getAccountantClients = (accountantId)=>{
        const clientsMap = {
            acc1: [
                {
                    id: 'c1',
                    name: 'Hospital Norte',
                    entityId: 'e1',
                    antiguedad: '3 años',
                    email: 'contacto@hospitalnorte.com',
                    phone: '+52 55 1234 5678'
                },
                {
                    id: 'c2',
                    name: 'Clínica Sur',
                    entityId: 'e2',
                    antiguedad: '2 años',
                    email: 'info@clinicasure.com',
                    phone: '+52 55 2345 6789'
                },
                {
                    id: 'c3',
                    name: 'Laboratorio Central',
                    entityId: 'e3',
                    antiguedad: '1 año',
                    email: 'ventas@labcentral.com',
                    phone: '+52 55 3456 7890'
                }
            ],
            acc2: [
                {
                    id: 'c4',
                    name: 'Farmacia del Sol',
                    entityId: 'e4',
                    antiguedad: '4 años',
                    email: 'admin@farmaciasol.com',
                    phone: '+52 55 4567 8901'
                },
                {
                    id: 'c5',
                    name: 'Consultorio Médico',
                    entityId: 'e5',
                    antiguedad: '6 meses',
                    email: 'contacto@consultoriomed.com',
                    phone: '+52 55 5678 9012'
                }
            ],
            acc3: [
                {
                    id: 'c6',
                    name: 'Centro Médico ABC',
                    entityId: 'e6',
                    antiguedad: '5 años',
                    email: 'info@centroabc.com',
                    phone: '+52 55 6789 0123'
                },
                {
                    id: 'c7',
                    name: 'Hospital San José',
                    entityId: 'e7',
                    antiguedad: '2 años',
                    email: 'contacto@hospitalsanjose.com',
                    phone: '+52 55 7890 1234'
                }
            ],
            acc4: [
                {
                    id: 'c8',
                    name: 'Clínica Privada',
                    entityId: 'e8',
                    antiguedad: '1 año',
                    email: 'admin@clinicaprivada.com',
                    phone: '+52 55 8901 2345'
                }
            ],
            acc5: [
                {
                    id: 'c9',
                    name: 'Laboratorio Diagnóstico',
                    entityId: 'e9',
                    antiguedad: '3 años',
                    email: 'ventas@labdiagnostico.com',
                    phone: '+52 55 9012 3456'
                },
                {
                    id: 'c10',
                    name: 'Farmacia 24/7',
                    entityId: 'e10',
                    antiguedad: '1 año',
                    email: 'info@farmacia247.com',
                    phone: '+52 55 0123 4567'
                }
            ],
            acc6: [
                {
                    id: 'c11',
                    name: 'Hospital Regional',
                    entityId: 'e11',
                    antiguedad: '4 años',
                    email: 'contacto@hospitalregional.com',
                    phone: '+52 55 1234 5678'
                }
            ],
            acc7: [
                {
                    id: 'c12',
                    name: 'Clínica Especializada',
                    entityId: 'e12',
                    antiguedad: '2 años',
                    email: 'admin@clinicaespecializada.com',
                    phone: '+52 55 2345 6789'
                },
                {
                    id: 'c13',
                    name: 'Centro de Salud',
                    entityId: 'e13',
                    antiguedad: '6 meses',
                    email: 'info@centrosalud.com',
                    phone: '+52 55 3456 7890'
                }
            ],
            acc8: [
                {
                    id: 'c14',
                    name: 'Hospital General',
                    entityId: 'e14',
                    antiguedad: '3 años',
                    email: 'contacto@hospitalgeneral.com',
                    phone: '+52 55 4567 8901'
                }
            ],
            acc9: [
                {
                    id: 'c15',
                    name: 'Laboratorio Clínico',
                    entityId: 'e15',
                    antiguedad: '2 años',
                    email: 'ventas@labclinico.com',
                    phone: '+52 55 5678 9012'
                }
            ],
            acc10: [
                {
                    id: 'c16',
                    name: 'Farmacia Express',
                    entityId: 'e16',
                    antiguedad: '1 año',
                    email: 'admin@farmaciaexpress.com',
                    phone: '+52 55 6789 0123'
                },
                {
                    id: 'c17',
                    name: 'Clínica Familiar',
                    entityId: 'e17',
                    antiguedad: '5 años',
                    email: 'info@clinicafamiliar.com',
                    phone: '+52 55 7890 1234'
                }
            ],
            acc11: [
                {
                    id: 'c18',
                    name: 'Hospital Universitario',
                    entityId: 'e18',
                    antiguedad: '4 años',
                    email: 'contacto@hospitaluniversitario.com',
                    phone: '+52 55 8901 2345'
                }
            ],
            acc12: [
                {
                    id: 'c19',
                    name: 'Centro Médico Integral',
                    entityId: 'e19',
                    antiguedad: '2 años',
                    email: 'admin@centromedicointegral.com',
                    phone: '+52 55 9012 3456'
                }
            ]
        };
        const allClients = clientsMap[accountantId] || [];
        // Filter out deleted clients
        return allClients.filter((client)=>!deletedClients.has(client.id));
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
                                                lineNumber: 299,
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
                                                lineNumber: 300,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                        lineNumber: 298,
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
                                                    lineNumber: 308,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                    lineNumber: 309,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                            lineNumber: 307,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                        lineNumber: 302,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                lineNumber: 297,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].accountantsList,
                                children: group.accountants.map((accountant, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].accountantItem} ${getBorderColor(accountant.clientCount)}`,
                                        "data-staff-id": accountant.id,
                                        onDragOver: handleDragOver,
                                        onDragLeave: handleDragLeave,
                                        onDrop: (e)=>handleDrop(e, accountant.id),
                                        onClick: ()=>handleAccountantClick(accountant, group.id),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].itemIndex,
                                                children: index + 1
                                            }, void 0, false, {
                                                fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                lineNumber: 325,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].itemContent,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].accountantName,
                                                        children: accountant.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                        lineNumber: 327,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].clientCount,
                                                        children: [
                                                            accountant.clientCount,
                                                            " ",
                                                            accountant.clientCount === 1 ? 'Cliente' : 'Clientes'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                        lineNumber: 328,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                lineNumber: 326,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, accountant.id, true, {
                                        fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                        lineNumber: 316,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                lineNumber: 314,
                                columnNumber: 13
                            }, this)
                        ]
                    }, group.id, true, {
                        fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                        lineNumber: 296,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                lineNumber: 294,
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
                        lineNumber: 340,
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
                                        lineNumber: 349,
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
                                                lineNumber: 351,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "12",
                                                y1: "8",
                                                x2: "12",
                                                y2: "16"
                                            }, void 0, false, {
                                                fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                lineNumber: 352,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "8",
                                                y1: "12",
                                                x2: "16",
                                                y2: "12"
                                            }, void 0, false, {
                                                fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                lineNumber: 353,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                        lineNumber: 350,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, client.id, true, {
                                fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                lineNumber: 343,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                        lineNumber: 341,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                lineNumber: 339,
                columnNumber: 7
            }, this),
            isEditGroupModalOpen && editingGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EditGroupModal, {
                group: editingGroup,
                onClose: handleCloseEditModal,
                onSave: handleSaveGroup
            }, void 0, false, {
                fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                lineNumber: 361,
                columnNumber: 9
            }, this),
            isAccountantModalOpen && selectedAccountant && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AccountantClientsModal, {
                accountant: selectedAccountant.accountant,
                clients: getAccountantClients(selectedAccountant.accountant.id),
                onClose: handleCloseAccountantModal,
                onDeleteClient: handleDeleteClient
            }, void 0, false, {
                fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                lineNumber: 369,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
        lineNumber: 293,
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
        },
        {
            id: 'chief4',
            name: 'Roberto Silva'
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
                            lineNumber: 404,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalClose,
                            onClick: onClose,
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                            lineNumber: 405,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                    lineNumber: 403,
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
                                    lineNumber: 411,
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
                                            lineNumber: 419,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                    lineNumber: 412,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                            lineNumber: 410,
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
                                    lineNumber: 426,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].saveBtn,
                                    children: "Guardar"
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                    lineNumber: 429,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                            lineNumber: 425,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                    lineNumber: 409,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
            lineNumber: 402,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
        lineNumber: 401,
        columnNumber: 5
    }, this);
}
function AccountantClientsModal({ accountant, clients, onClose, onDeleteClient }) {
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
                                "Clientes de ",
                                accountant.name
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                            lineNumber: 451,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalClose,
                            onClick: onClose,
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                            lineNumber: 452,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                    lineNumber: 450,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].clientsList,
                    children: clients.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emptyMessage,
                        children: "No hay clientes asignados"
                    }, void 0, false, {
                        fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                        lineNumber: 458,
                        columnNumber: 13
                    }, this) : clients.map((client)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].clientItem,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].clientInfo,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].clientName,
                                            children: client.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                            lineNumber: 463,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].clientDetails,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].clientDetail,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Antigüedad:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                            lineNumber: 466,
                                                            columnNumber: 23
                                                        }, this),
                                                        " ",
                                                        client.antiguedad
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                    lineNumber: 465,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].clientDetail,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Email:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                            lineNumber: 469,
                                                            columnNumber: 23
                                                        }, this),
                                                        " ",
                                                        client.email
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                    lineNumber: 468,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].clientDetail,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Teléfono:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                            lineNumber: 472,
                                                            columnNumber: 23
                                                        }, this),
                                                        " ",
                                                        client.phone
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                    lineNumber: 471,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                            lineNumber: 464,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                    lineNumber: 462,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].deleteClientBtn,
                                    onClick: ()=>onDeleteClient(client.id, client.entityId),
                                    title: "Eliminar cliente",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "18",
                                        height: "18",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M3 6h18"
                                            }, void 0, false, {
                                                fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                lineNumber: 482,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
                                            }, void 0, false, {
                                                fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                lineNumber: 483,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"
                                            }, void 0, false, {
                                                fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                                lineNumber: 484,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                        lineNumber: 481,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                                    lineNumber: 476,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, client.id, true, {
                            fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                            lineNumber: 461,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                    lineNumber: 456,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalActions,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cancelBtn,
                        onClick: onClose,
                        children: "Cerrar"
                    }, void 0, false, {
                        fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                        lineNumber: 492,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
                    lineNumber: 491,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
            lineNumber: 449,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/profiles/administrador/usuarios/EstructuraEquipos.tsx",
        lineNumber: 448,
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
                    lineNumber: 96,
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
                            lineNumber: 109,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                    lineNumber: 103,
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
                            lineNumber: 121,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$GestionStaff$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].commissionDisplay,
                            children: formatCommission(member.baseCommission)
                        }, void 0, false, {
                            fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this)
        },
        {
            key: 'contact',
            header: 'Contacto',
            render: (member)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$GestionStaff$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contactCell,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$GestionStaff$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].email,
                        children: member.email
                    }, void 0, false, {
                        fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                        lineNumber: 143,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                    lineNumber: 142,
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
                                lineNumber: 153,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$GestionStaff$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].toggleSlider
                            }, void 0, false, {
                                fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$GestionStaff$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].toggleText,
                                children: member.isActive ? 'Activo' : 'Inactivo'
                            }, void 0, false, {
                                fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                                lineNumber: 160,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                        lineNumber: 152,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
                    lineNumber: 151,
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
            lineNumber: 171,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/profiles/administrador/usuarios/GestionStaff.tsx",
        lineNumber: 170,
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
  "tabContent": "Usuarios-module___rFl9W__tabContent",
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
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$NavigationContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/NavigationContext.tsx [app-ssr] (ecmascript)");
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
    const { activeItem, setActiveItem } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$NavigationContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNavigation"])();
    // Set default tab when usuarios is clicked directly
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (activeItem === 'usuarios') {
            setActiveItem('usuarios-estructura');
        }
    }, [
        activeItem,
        setActiveItem
    ]);
    // Determine which tab to show based on activeItem
    const getActiveTab = ()=>{
        if (activeItem === 'usuarios-estructura') return 'estructura';
        if (activeItem === 'usuarios-gestion') return 'gestion';
        if (activeItem === 'usuarios-accesos') return 'accesos';
        // Default to estructura if usuarios is clicked directly
        return 'estructura';
    };
    const activeTab = getActiveTab();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$Usuarios$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].usuarios,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$Usuarios$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tabContent,
            children: [
                activeTab === 'estructura' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$EstructuraEquipos$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/components/profiles/administrador/usuarios/Usuarios.tsx",
                    lineNumber: 34,
                    columnNumber: 40
                }, this),
                activeTab === 'gestion' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$GestionStaff$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/components/profiles/administrador/usuarios/Usuarios.tsx",
                    lineNumber: 35,
                    columnNumber: 37
                }, this),
                activeTab === 'accesos' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$AccesosCliente$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/components/profiles/administrador/usuarios/Usuarios.tsx",
                    lineNumber: 36,
                    columnNumber: 37
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/profiles/administrador/usuarios/Usuarios.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/profiles/administrador/usuarios/Usuarios.tsx",
        lineNumber: 32,
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
    if (activeItem === 'usuarios' || activeItem === 'usuarios-estructura' || activeItem === 'usuarios-gestion' || activeItem === 'usuarios-accesos') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionErrorBoundary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SectionErrorBoundary$3e$__["SectionErrorBoundary"], {
            sectionName: "Administrar Usuarios",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profiles$2f$administrador$2f$usuarios$2f$Usuarios$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Usuarios$3e$__["Usuarios"], {}, void 0, false, {
                fileName: "[project]/app/admin/page.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/admin/page.tsx",
            lineNumber: 16,
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
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "This page is under construction."
                }, void 0, false, {
                    fileName: "[project]/app/admin/page.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/page.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/admin/page.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_cea867a8._.js.map