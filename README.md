# CINPRO - Portal de Gestión

Panel de control y sistema de gestión empresarial para CINPRO.

## 🚀 Tecnologías

- **Next.js 16** - Framework React con App Router
- **React 19** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS 4** - Framework de estilos
- **React Icons & Boxicons** - Iconografía

## 📋 Requisitos Previos

- Node.js 18+ 
- npm, yarn, pnpm o bun

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/develorian1/portal_cinpro.git
cd portal_cinpro
```

2. Instala las dependencias:
```bash
npm install
# o
yarn install
# o
pnpm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
cinpro/
├── app/                    # App Router de Next.js
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página principal
├── components/            # Componentes React
│   ├── layout/           # Componentes de layout (Sidebar, Topbar)
│   ├── profiles/         # Componentes por perfil de usuario
│   │   ├── director/     # Perfil Director
│   │   ├── administrador/
│   │   ├── auxiliar/
│   │   ├── cliente/
│   │   └── gerente/
│   └── shared/           # Componentes compartidos
├── contexts/             # React Contexts
│   ├── ProfileContext.tsx
│   ├── NavigationContext.tsx
│   ├── FinanzasContext.tsx
│   ├── HomeContext.tsx
│   ├── ThemeContext.tsx
│   ├── ToastContext.tsx
│   └── UsuariosContext.tsx
├── api/                  # Cliente API y hooks
│   ├── client.ts
│   ├── endpoints.ts
│   ├── hooks/
│   └── types/
├── config/               # Configuraciones
│   └── navigation.tsx
├── constants/            # Constantes
│   └── navigation.ts
├── types/                # Tipos TypeScript
│   └── profile.ts
├── styles/               # Estilos globales
│   └── globals.css
└── public/               # Archivos estáticos
    └── assets/
```

## 🎯 Funcionalidades

### Perfil Director
- **Dashboard**: Vista general con KPIs y métricas
- **Finanzas**: Gestión financiera, cola de comisiones, deudores
- **Estadísticas**: Análisis de rendimiento (clientes, empleados, equipos)
- **Usuarios**: Administración de usuarios (jefes, administradores, auxiliares)
- **Clientes**: Gestión de clientes y perfiles
- **Comunicación**: Centro de difusión y actividad de agente AI
- **Calendario**: Gestión de eventos, plazos fiscales y ciclos de facturación
- **Mensajes**: Sistema de mensajería

### Otros Perfiles
- Administrador
- Auxiliar
- Cliente
- Gerente

## 🏗️ Scripts Disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Construye la aplicación para producción
npm run start    # Inicia el servidor de producción
npm run lint     # Ejecuta el linter
```

## 🔧 Configuración

### Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# Agrega tus variables de entorno aquí
# Ejemplo:
# NEXT_PUBLIC_API_URL=http://localhost:3001
```

## 📝 Desarrollo

El proyecto utiliza:
- **App Router** de Next.js para el enrutamiento
- **CSS Modules** para estilos con scope
- **Context API** para el manejo de estado global
- **TypeScript** para type safety

## 🚢 Despliegue

La forma más fácil de desplegar tu aplicación Next.js es usando [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Consulta la [documentación de despliegue de Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para más detalles.

## 📚 Recursos

- [Documentación de Next.js](https://nextjs.org/docs)
- [Aprende Next.js](https://nextjs.org/learn)
- [Repositorio de Next.js en GitHub](https://github.com/vercel/next.js)

## 📄 Licencia

Este proyecto es privado.

