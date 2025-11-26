'use client';

import { useState } from 'react';
import styles from './AccesosCliente.module.css';

interface ClientUser {
  id: string;
  name: string;
  email: string;
  linkedEntities: LinkedEntity[];
}

interface LinkedEntity {
  id: string;
  entityId: string;
  entityName: string;
  permission: 'OWNER' | 'VIEW_ONLY';
  isPrimary: boolean;
}

export default function AccesosCliente() {
  const [clientUsers, setClientUsers] = useState<ClientUser[]>([
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
          isPrimary: true,
        },
        {
          id: 'link2',
          entityId: 'entity2',
          entityName: 'Empresa XYZ Ltda.',
          permission: 'VIEW_ONLY',
          isPrimary: false,
        },
      ],
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
          isPrimary: true,
        },
      ],
    },
  ]);

  const [selectedUser, setSelectedUser] = useState<ClientUser | null>(
    clientUsers[0] || null
  );
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [availableEntities] = useState([
    { id: 'entity4', name: 'Nueva Empresa 1' },
    { id: 'entity5', name: 'Nueva Empresa 2' },
    { id: 'entity6', name: 'Nueva Empresa 3' },
  ]);

  const handleUserSelect = (user: ClientUser) => {
    setSelectedUser(user);
  };

  const handleAddLink = () => {
    setIsLinkModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsLinkModalOpen(false);
    setSearchQuery('');
  };

  const handleSaveLink = async (data: {
    entityId: string;
    permission: 'OWNER' | 'VIEW_ONLY';
    isPrimary: boolean;
  }) => {
    if (!selectedUser) return;

    // TODO: Implement API call to create client_user_access
    console.log(`Linking entity ${data.entityId} to user ${selectedUser.id}`, data);

    const entity = availableEntities.find(e => e.id === data.entityId);
    if (!entity) return;

    const newLink: LinkedEntity = {
      id: `link${Date.now()}`,
      entityId: data.entityId,
      entityName: entity.name,
      permission: data.permission,
      isPrimary: data.isPrimary,
    };

    setClientUsers(prev =>
      prev.map(user =>
        user.id === selectedUser.id
          ? {
              ...user,
              linkedEntities: [...user.linkedEntities, newLink],
            }
          : user
      )
    );

    // If this is set as primary, unset others
    if (data.isPrimary) {
      setClientUsers(prev =>
        prev.map(user =>
          user.id === selectedUser.id
            ? {
                ...user,
                linkedEntities: user.linkedEntities.map(link =>
                  link.id === newLink.id
                    ? link
                    : { ...link, isPrimary: false }
                ),
              }
            : user
        )
      );
    }

    handleCloseModal();
  };

  const handleRemoveLink = async (linkId: string) => {
    if (!selectedUser) return;

    // TODO: Implement API call to remove client_user_access
    console.log(`Removing link ${linkId} from user ${selectedUser.id}`);

    setClientUsers(prev =>
      prev.map(user =>
        user.id === selectedUser.id
          ? {
              ...user,
              linkedEntities: user.linkedEntities.filter(link => link.id !== linkId),
            }
          : user
      )
    );
  };

  const filteredEntities = availableEntities.filter(entity =>
    entity.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    !selectedUser?.linkedEntities.some(link => link.entityId === entity.id)
  );

  return (
    <div className={styles.accesosCliente}>
      <div className={styles.masterPanel}>
        <h3 className={styles.panelTitle}>Usuarios Cliente</h3>
        <div className={styles.userList}>
          {clientUsers.map(user => (
            <div
              key={user.id}
              className={`${styles.userItem} ${
                selectedUser?.id === user.id ? styles.userItemActive : ''
              }`}
              onClick={() => handleUserSelect(user)}
            >
              <div className={styles.userInfo}>
                <p className={styles.userName}>{user.name}</p>
                <p className={styles.userEmail}>{user.email}</p>
              </div>
              <span className={styles.entityCount}>
                {user.linkedEntities.length} entidad{user.linkedEntities.length !== 1 ? 'es' : ''}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.detailPanel}>
        {selectedUser ? (
          <>
            <div className={styles.detailHeader}>
              <div>
                <h3 className={styles.detailTitle}>Entidades Vinculadas</h3>
                <p className={styles.detailSubtitle}>
                  {selectedUser.name} ({selectedUser.email})
                </p>
              </div>
              <button className={styles.addBtn} onClick={handleAddLink}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                Vincular Entidad
              </button>
            </div>

            <div className={styles.entityCards}>
              {selectedUser.linkedEntities.length === 0 ? (
                <div className={styles.emptyState}>
                  <p>No hay entidades vinculadas</p>
                  <button className={styles.emptyAddBtn} onClick={handleAddLink}>
                    Vincular Primera Entidad
                  </button>
                </div>
              ) : (
                selectedUser.linkedEntities.map(link => (
                  <div key={link.id} className={styles.entityCard}>
                    <div className={styles.entityCardHeader}>
                      <h4 className={styles.entityName}>{link.entityName}</h4>
                      {link.isPrimary && (
                        <span className={styles.primaryBadge}>Principal</span>
                      )}
                    </div>
                    <div className={styles.entityCardBody}>
                      <div className={styles.entityInfo}>
                        <span className={styles.permissionBadge}>
                          {link.permission === 'OWNER' ? 'Propietario' : 'Solo Lectura'}
                        </span>
                      </div>
                      <button
                        className={styles.removeBtn}
                        onClick={() => handleRemoveLink(link.id)}
                        title="Eliminar Vínculo"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </>
        ) : (
          <div className={styles.noSelection}>
            <p>Seleccione un usuario para ver sus entidades vinculadas</p>
          </div>
        )}
      </div>

      {isLinkModalOpen && selectedUser && (
        <LinkEntityModal
          availableEntities={filteredEntities}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onClose={handleCloseModal}
          onSave={handleSaveLink}
        />
      )}
    </div>
  );
}

interface LinkEntityModalProps {
  availableEntities: { id: string; name: string }[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onClose: () => void;
  onSave: (data: {
    entityId: string;
    permission: 'OWNER' | 'VIEW_ONLY';
    isPrimary: boolean;
  }) => void;
}

function LinkEntityModal({
  availableEntities,
  searchQuery,
  onSearchChange,
  onClose,
  onSave,
}: LinkEntityModalProps) {
  const [selectedEntityId, setSelectedEntityId] = useState('');
  const [permission, setPermission] = useState<'OWNER' | 'VIEW_ONLY'>('VIEW_ONLY');
  const [isPrimary, setIsPrimary] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedEntityId) return;
    onSave({
      entityId: selectedEntityId,
      permission,
      isPrimary,
    });
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2>Vincular Entidad</h2>
          <button className={styles.modalClose} onClick={onClose}>
            ×
          </button>
        </div>
        <form onSubmit={handleSubmit} className={styles.modalForm}>
          <div className={styles.formGroup}>
            <label htmlFor="entity">Seleccionar Entidad</label>
            <div className={styles.searchContainer}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Buscar entidad..."
                className={styles.searchInput}
              />
            </div>
            <select
              id="entity"
              value={selectedEntityId}
              onChange={(e) => setSelectedEntityId(e.target.value)}
              className={styles.selectInput}
              required
            >
              <option value="">-- Seleccione una entidad --</option>
              {availableEntities.map(entity => (
                <option key={entity.id} value={entity.id}>
                  {entity.name}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>Permisos</label>
            <div className={styles.radioGroup}>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="permission"
                  value="OWNER"
                  checked={permission === 'OWNER'}
                  onChange={(e) => setPermission(e.target.value as 'OWNER' | 'VIEW_ONLY')}
                  className={styles.radioInput}
                />
                <span>Propietario (OWNER)</span>
              </label>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="permission"
                  value="VIEW_ONLY"
                  checked={permission === 'VIEW_ONLY'}
                  onChange={(e) => setPermission(e.target.value as 'OWNER' | 'VIEW_ONLY')}
                  className={styles.radioInput}
                />
                <span>Solo Lectura (VIEW_ONLY)</span>
              </label>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={isPrimary}
                onChange={(e) => setIsPrimary(e.target.checked)}
                className={styles.checkboxInput}
              />
              <span>Marcar como Entidad Principal</span>
            </label>
          </div>

          <div className={styles.modalActions}>
            <button type="button" className={styles.cancelBtn} onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className={styles.saveBtn} disabled={!selectedEntityId}>
              Vincular
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

