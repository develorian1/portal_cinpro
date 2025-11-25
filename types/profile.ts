export type ProfileType = 'director' | 'administrador' | 'gerente' | 'auxiliar' | 'cliente';

export interface Profile {
  type: ProfileType;
  name: string;
  displayName: string;
}

export const PROFILE_TYPES: Record<ProfileType, Profile> = {
  director: {
    type: 'director',
    name: 'director',
    displayName: 'Director',
  },
  administrador: {
    type: 'administrador',
    name: 'administrador',
    displayName: 'Administrador',
  },
  gerente: {
    type: 'gerente',
    name: 'gerente',
    displayName: 'Gerente',
  },
  auxiliar: {
    type: 'auxiliar',
    name: 'auxiliar',
    displayName: 'Auxiliar',
  },
  cliente: {
    type: 'cliente',
    name: 'cliente',
    displayName: 'Cliente',
  },
};

