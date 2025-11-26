'use client';

import { useState, useRef } from 'react';
import styles from './EstructuraEquipos.module.css';

interface Group {
  id: string;
  groupName: string;
  chiefId: string;
  chiefName: string;
  accountants: Accountant[];
}

interface Accountant {
  id: string;
  name: string;
  clientCount: number;
  avatar?: string;
}

interface AccountantClient {
  id: string;
  name: string;
  entityId: string;
  antiguedad: string; // e.g., "2 años", "6 meses"
  email: string;
  phone: string;
}

interface OrphanClient {
  id: string;
  name: string;
  entityId: string;
}

export default function EstructuraEquipos() {
  const [groups, setGroups] = useState<Group[]>([
    {
      id: '1',
      groupName: 'Equipo Alpha',
      chiefId: 'chief1',
      chiefName: 'Carlos Ramírez',
      accountants: [
        { id: 'acc1', name: 'María González', clientCount: 12 },
        { id: 'acc2', name: 'Juan Pérez', clientCount: 18 },
        { id: 'acc3', name: 'Laura Sánchez', clientCount: 25 },
      ],
    },
    {
      id: '2',
      groupName: 'Equipo Beta',
      chiefId: 'chief2',
      chiefName: 'Ana Martínez',
      accountants: [
        { id: 'acc4', name: 'Pedro López', clientCount: 8 },
        { id: 'acc5', name: 'Sofía Torres', clientCount: 22 },
      ],
    },
    {
      id: '3',
      groupName: 'Equipo Gamma',
      chiefId: 'chief3',
      chiefName: 'Luis Fernández',
      accountants: [
        { id: 'acc6', name: 'Carmen Ruiz', clientCount: 15 },
        { id: 'acc7', name: 'Diego Morales', clientCount: 20 },
        { id: 'acc8', name: 'Patricia Vega', clientCount: 10 },
      ],
    },
    {
      id: '4',
      groupName: 'Equipo Delta',
      chiefId: 'chief4',
      chiefName: 'Roberto Silva',
      accountants: [
        { id: 'acc9', name: 'Elena Castro', clientCount: 14 },
        { id: 'acc10', name: 'Miguel Herrera', clientCount: 19 },
        { id: 'acc11', name: 'Isabel Mendoza', clientCount: 16 },
        { id: 'acc12', name: 'Fernando Rojas', clientCount: 11 },
      ],
    },
  ]);

  const [orphanClients] = useState<OrphanClient[]>([
    { id: 'orphan1', name: 'Cliente Sin Asignar 1', entityId: 'entity1' },
    { id: 'orphan2', name: 'Cliente Sin Asignar 2', entityId: 'entity2' },
    { id: 'orphan3', name: 'Cliente Sin Asignar 3', entityId: 'entity3' },
    { id: 'orphan4', name: 'Cliente Sin Asignar 4', entityId: 'entity4' },
    { id: 'orphan5', name: 'Cliente Sin Asignar 5', entityId: 'entity5' },
    { id: 'orphan6', name: 'Cliente Sin Asignar 6', entityId: 'entity6' },
    { id: 'orphan7', name: 'Cliente Sin Asignar 7', entityId: 'entity7' },
    { id: 'orphan8', name: 'Cliente Sin Asignar 8', entityId: 'entity8' },
    { id: 'orphan9', name: 'Cliente Sin Asignar 9', entityId: 'entity9' },
    { id: 'orphan10', name: 'Cliente Sin Asignar 10', entityId: 'entity10' },
    { id: 'orphan11', name: 'Cliente Sin Asignar 11', entityId: 'entity11' },
    { id: 'orphan12', name: 'Cliente Sin Asignar 12', entityId: 'entity12' },
    { id: 'orphan13', name: 'Cliente Sin Asignar 13', entityId: 'entity13' },
  ]);

  const [draggedClient, setDraggedClient] = useState<OrphanClient | null>(null);
  const [isEditGroupModalOpen, setIsEditGroupModalOpen] = useState(false);
  const [editingGroup, setEditingGroup] = useState<Group | null>(null);
  const [isAccountantModalOpen, setIsAccountantModalOpen] = useState(false);
  const [selectedAccountant, setSelectedAccountant] = useState<{ accountant: Accountant; groupId: string } | null>(null);
  const [deletedClients, setDeletedClients] = useState<Set<string>>(new Set());

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  const getBorderColor = (clientCount: number) => {
    if (clientCount < 15) return styles.borderGreen;
    if (clientCount <= 25) return styles.borderOrange;
    return styles.borderRed;
  };

  const handleDragStart = (client: OrphanClient) => {
    setDraggedClient(client);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLElement;
    target.classList.add(styles.dragOver);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    const target = e.currentTarget as HTMLElement;
    target.classList.remove(styles.dragOver);
  };

  const handleDrop = async (e: React.DragEvent, accountantId: string) => {
    e.preventDefault();
    e.currentTarget.classList.remove(styles.dragOver);

    if (!draggedClient) return;

    try {
      // TODO: Implement API call PATCH /entities/{id}
      // await api.patch(`/entities/${draggedClient.entityId}`, {
      //   assigned_accountant_id: accountantId,
      // });

      console.log(`Assigning client ${draggedClient.id} to accountant ${accountantId}`);

      // Update local state
      setGroups(prevGroups =>
        prevGroups.map(group => ({
          ...group,
          accountants: group.accountants.map(acc =>
            acc.id === accountantId
              ? { ...acc, clientCount: acc.clientCount + 1 }
              : acc
          ),
        }))
      );

      setDraggedClient(null);
    } catch (error) {
      console.error('Error assigning client:', error);
    }
  };

  const handleEditGroup = (group: Group) => {
    setEditingGroup(group);
    setIsEditGroupModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditGroupModalOpen(false);
    setEditingGroup(null);
  };

  const handleSaveGroup = async (chiefId: string) => {
    if (!editingGroup) return;

    // TODO: Implement API call to update group chief
    console.log(`Updating group ${editingGroup.id} with chief ${chiefId}`);

    setGroups(prevGroups =>
      prevGroups.map(group =>
        group.id === editingGroup.id
          ? { ...group, chiefId, chiefName: 'New Chief' } // TODO: Get actual chief name
          : group
      )
    );

    handleCloseEditModal();
  };

  const handleAccountantClick = (accountant: Accountant, groupId: string) => {
    setSelectedAccountant({ accountant, groupId });
    setIsAccountantModalOpen(true);
  };

  const handleCloseAccountantModal = () => {
    setIsAccountantModalOpen(false);
    setSelectedAccountant(null);
  };

  const handleDeleteClient = async (clientId: string, entityId: string) => {
    if (!selectedAccountant) return;

    try {
      // TODO: Implement API call to remove client assignment
      // await api.patch(`/entities/${entityId}`, {
      //   assigned_accountant_id: null,
      // });

      console.log(`Removing client ${clientId} from accountant ${selectedAccountant.accountant.id}`);

      // Mark client as deleted
      setDeletedClients(prev => new Set(prev).add(clientId));

      // Update local state
      setGroups(prevGroups =>
        prevGroups.map(group =>
          group.id === selectedAccountant.groupId
            ? {
                ...group,
                accountants: group.accountants.map(acc =>
                  acc.id === selectedAccountant.accountant.id
                    ? { ...acc, clientCount: Math.max(0, acc.clientCount - 1) }
                    : acc
                ),
              }
            : group
        )
      );
    } catch (error) {
      console.error('Error removing client:', error);
    }
  };

  // Mock data for accountant clients
  const getAccountantClients = (accountantId: string): AccountantClient[] => {
    const clientsMap: Record<string, AccountantClient[]> = {
      acc1: [
        { id: 'c1', name: 'Hospital Norte', entityId: 'e1', antiguedad: '3 años', email: 'contacto@hospitalnorte.com', phone: '+52 55 1234 5678' },
        { id: 'c2', name: 'Clínica Sur', entityId: 'e2', antiguedad: '2 años', email: 'info@clinicasure.com', phone: '+52 55 2345 6789' },
        { id: 'c3', name: 'Laboratorio Central', entityId: 'e3', antiguedad: '1 año', email: 'ventas@labcentral.com', phone: '+52 55 3456 7890' },
      ],
      acc2: [
        { id: 'c4', name: 'Farmacia del Sol', entityId: 'e4', antiguedad: '4 años', email: 'admin@farmaciasol.com', phone: '+52 55 4567 8901' },
        { id: 'c5', name: 'Consultorio Médico', entityId: 'e5', antiguedad: '6 meses', email: 'contacto@consultoriomed.com', phone: '+52 55 5678 9012' },
      ],
      acc3: [
        { id: 'c6', name: 'Centro Médico ABC', entityId: 'e6', antiguedad: '5 años', email: 'info@centroabc.com', phone: '+52 55 6789 0123' },
        { id: 'c7', name: 'Hospital San José', entityId: 'e7', antiguedad: '2 años', email: 'contacto@hospitalsanjose.com', phone: '+52 55 7890 1234' },
      ],
      acc4: [
        { id: 'c8', name: 'Clínica Privada', entityId: 'e8', antiguedad: '1 año', email: 'admin@clinicaprivada.com', phone: '+52 55 8901 2345' },
      ],
      acc5: [
        { id: 'c9', name: 'Laboratorio Diagnóstico', entityId: 'e9', antiguedad: '3 años', email: 'ventas@labdiagnostico.com', phone: '+52 55 9012 3456' },
        { id: 'c10', name: 'Farmacia 24/7', entityId: 'e10', antiguedad: '1 año', email: 'info@farmacia247.com', phone: '+52 55 0123 4567' },
      ],
      acc6: [
        { id: 'c11', name: 'Hospital Regional', entityId: 'e11', antiguedad: '4 años', email: 'contacto@hospitalregional.com', phone: '+52 55 1234 5678' },
      ],
      acc7: [
        { id: 'c12', name: 'Clínica Especializada', entityId: 'e12', antiguedad: '2 años', email: 'admin@clinicaespecializada.com', phone: '+52 55 2345 6789' },
        { id: 'c13', name: 'Centro de Salud', entityId: 'e13', antiguedad: '6 meses', email: 'info@centrosalud.com', phone: '+52 55 3456 7890' },
      ],
      acc8: [
        { id: 'c14', name: 'Hospital General', entityId: 'e14', antiguedad: '3 años', email: 'contacto@hospitalgeneral.com', phone: '+52 55 4567 8901' },
      ],
      acc9: [
        { id: 'c15', name: 'Laboratorio Clínico', entityId: 'e15', antiguedad: '2 años', email: 'ventas@labclinico.com', phone: '+52 55 5678 9012' },
      ],
      acc10: [
        { id: 'c16', name: 'Farmacia Express', entityId: 'e16', antiguedad: '1 año', email: 'admin@farmaciaexpress.com', phone: '+52 55 6789 0123' },
        { id: 'c17', name: 'Clínica Familiar', entityId: 'e17', antiguedad: '5 años', email: 'info@clinicafamiliar.com', phone: '+52 55 7890 1234' },
      ],
      acc11: [
        { id: 'c18', name: 'Hospital Universitario', entityId: 'e18', antiguedad: '4 años', email: 'contacto@hospitaluniversitario.com', phone: '+52 55 8901 2345' },
      ],
      acc12: [
        { id: 'c19', name: 'Centro Médico Integral', entityId: 'e19', antiguedad: '2 años', email: 'admin@centromedicointegral.com', phone: '+52 55 9012 3456' },
      ],
    };
    const allClients = clientsMap[accountantId] || [];
    // Filter out deleted clients
    return allClients.filter(client => !deletedClients.has(client.id));
  };

  return (
    <div className={styles.estructuraEquipos}>
      <div className={styles.kanbanBoard}>
        {groups.map(group => (
          <div key={group.id} className={styles.groupColumn}>
            <div className={styles.groupHeader}>
              <div className={styles.groupInfo}>
                <h3 className={styles.groupName}>{group.groupName}</h3>
                <p className={styles.chiefName}>Jefe: {group.chiefName}</p>
              </div>
              <button
                className={styles.editGroupBtn}
                onClick={() => handleEditGroup(group)}
                title="Editar Grupo"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
              </button>
            </div>

            <ul className={styles.accountantsList}>
              {group.accountants.map((accountant, index) => (
                <li
                  key={accountant.id}
                  className={`${styles.accountantItem} ${getBorderColor(accountant.clientCount)}`}
                  data-staff-id={accountant.id}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={(e) => handleDrop(e, accountant.id)}
                  onClick={() => handleAccountantClick(accountant, group.id)}
                >
                  <span className={styles.itemIndex}>{index + 1}</span>
                  <div className={styles.itemContent}>
                    <span className={styles.accountantName}>{accountant.name}</span>
                    <span className={styles.clientCount}>
                      {accountant.clientCount} {accountant.clientCount === 1 ? 'Cliente' : 'Clientes'}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.orphanSidebar}>
        <h3 className={styles.orphanTitle}>Clientes Sin Asignar</h3>
        <div className={styles.orphanList}>
          {orphanClients.map(client => (
            <div
              key={client.id}
              className={styles.orphanItem}
              draggable
              onDragStart={() => handleDragStart(client)}
            >
              <span>{client.name}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="16" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
            </div>
          ))}
        </div>
      </div>

      {isEditGroupModalOpen && editingGroup && (
        <EditGroupModal
          group={editingGroup}
          onClose={handleCloseEditModal}
          onSave={handleSaveGroup}
        />
      )}

      {isAccountantModalOpen && selectedAccountant && (
        <AccountantClientsModal
          accountant={selectedAccountant.accountant}
          clients={getAccountantClients(selectedAccountant.accountant.id)}
          onClose={handleCloseAccountantModal}
          onDeleteClient={handleDeleteClient}
        />
      )}
    </div>
  );
}

interface EditGroupModalProps {
  group: Group;
  onClose: () => void;
  onSave: (chiefId: string) => void;
}

function EditGroupModal({ group, onClose, onSave }: EditGroupModalProps) {
  const [selectedChiefId, setSelectedChiefId] = useState(group.chiefId);
  const [availableChiefs] = useState([
    { id: 'chief1', name: 'Carlos Ramírez' },
    { id: 'chief2', name: 'Ana Martínez' },
    { id: 'chief3', name: 'Luis Fernández' },
    { id: 'chief4', name: 'Roberto Silva' },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(selectedChiefId);
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2>Editar Grupo: {group.groupName}</h2>
          <button className={styles.modalClose} onClick={onClose}>
            ×
          </button>
        </div>
        <form onSubmit={handleSubmit} className={styles.modalForm}>
          <div className={styles.formGroup}>
            <label htmlFor="chief">Jefe del Grupo</label>
            <select
              id="chief"
              value={selectedChiefId}
              onChange={(e) => setSelectedChiefId(e.target.value)}
              className={styles.selectInput}
            >
              {availableChiefs.map(chief => (
                <option key={chief.id} value={chief.id}>
                  {chief.name}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.modalActions}>
            <button type="button" className={styles.cancelBtn} onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className={styles.saveBtn}>
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

interface AccountantClientsModalProps {
  accountant: Accountant;
  clients: AccountantClient[];
  onClose: () => void;
  onDeleteClient: (clientId: string, entityId: string) => void;
}

function AccountantClientsModal({ accountant, clients, onClose, onDeleteClient }: AccountantClientsModalProps) {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2>Clientes de {accountant.name}</h2>
          <button className={styles.modalClose} onClick={onClose}>
            ×
          </button>
        </div>
        <div className={styles.clientsList}>
          {clients.length === 0 ? (
            <p className={styles.emptyMessage}>No hay clientes asignados</p>
          ) : (
            clients.map(client => (
              <div key={client.id} className={styles.clientItem}>
                <div className={styles.clientInfo}>
                  <h4 className={styles.clientName}>{client.name}</h4>
                  <div className={styles.clientDetails}>
                    <span className={styles.clientDetail}>
                      <strong>Antigüedad:</strong> {client.antiguedad}
                    </span>
                    <span className={styles.clientDetail}>
                      <strong>Email:</strong> {client.email}
                    </span>
                    <span className={styles.clientDetail}>
                      <strong>Teléfono:</strong> {client.phone}
                    </span>
                  </div>
                </div>
                <button
                  className={styles.deleteClientBtn}
                  onClick={() => onDeleteClient(client.id, client.entityId)}
                  title="Eliminar cliente"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 6h18" />
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>
        <div className={styles.modalActions}>
          <button type="button" className={styles.cancelBtn} onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

