'use client';

import { useState } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';
import { useUsuarios } from '@/contexts/UsuariosContext';
import AdministrarAuxiliares from './AdministrarAuxiliares';
import AdministrarAdmins from './AdministrarAdmins';
import AdministrarJefes from './AdministrarJefes';
import CreateAuxiliarModal from './CreateAuxiliarModal';
import CreateAdminModal from './CreateAdminModal';
import CreateJefeModal from './CreateJefeModal';
import styles from './Usuarios.module.css';

export default function Usuarios() {
  const { activeItem } = useNavigation();
  const { refresh } = useUsuarios();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  // Determine which tab to show based on activeItem
  const getActiveTab = () => {
    if (activeItem === 'usuarios-auxiliares') return 'auxiliares';
    if (activeItem === 'usuarios-admins') return 'admins';
    if (activeItem === 'usuarios-jefes') return 'jefes';
    // Default to auxiliares if usuarios is clicked directly
    return 'auxiliares';
  };

  const activeTab = getActiveTab();

  const handleCreateNewUser = () => {
    setIsCreateModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsCreateModalOpen(false);
  };

  const handleCreateAuxiliar = async (data: {
    name: string;
    email: string;
    password: string;
    chiefId: string;
  }) => {
    // TODO: Implement API call to create auxiliar
    console.log('Creating auxiliar:', data);
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API call
    // Refresh the list after creation
    await refresh();
  };

  const handleCreateAdmin = async (data: {
    name: string;
    email: string;
    password: string;
    role: string;
  }) => {
    // TODO: Implement API call to create admin
    console.log('Creating admin:', data);
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API call
    // Refresh the list after creation
    await refresh();
  };

  const handleCreateJefe = async (data: {
    name: string;
    email: string;
    password: string;
    groupManaged: string;
  }) => {
    // TODO: Implement API call to create jefe
    console.log('Creating jefe:', data);
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API call
    // Refresh the list after creation
    await refresh();
  };

  return (
    <div className={styles.usuarios}>
      <div className={styles.usuariosContent}>
        {/* Top Bar Context (Zone 2) */}
        <div className={styles.topBar}>
          <div className={styles.topBarActions}>
            <button 
              className={styles.createBtn}
              onClick={handleCreateNewUser}
            >
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              Crear Nuevo Usuario
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className={styles.tabContent}>
          {activeTab === 'auxiliares' && <AdministrarAuxiliares />}
          {activeTab === 'admins' && <AdministrarAdmins />}
          {activeTab === 'jefes' && <AdministrarJefes />}
        </div>
      </div>

      {/* Modals */}
      {activeTab === 'auxiliares' && (
        <CreateAuxiliarModal
          isOpen={isCreateModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleCreateAuxiliar}
        />
      )}
      {activeTab === 'admins' && (
        <CreateAdminModal
          isOpen={isCreateModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleCreateAdmin}
        />
      )}
      {activeTab === 'jefes' && (
        <CreateJefeModal
          isOpen={isCreateModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleCreateJefe}
        />
      )}
    </div>
  );
}

