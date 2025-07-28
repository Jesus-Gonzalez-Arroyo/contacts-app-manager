# 📇 Contact Manager App

Aplicación fullstack para la gestión de contactos. Permite crear, editar, listar y eliminar contactos a través de una interfaz amigable en Angular y una API RESTful en Node.js/Express.

## Clonar el repositorio

```bash
git clone https://github.com/Jesus-Gonzalez-Arroyo/contacts-app-manager
cd contact-manager-app
code .
```

## 🚀 Ejecutar con docker

### 1. Requisitos

- Docker
- Docker Compose

### 2. Levantar el backend

```bash
cd backend
docker-compose up --build
```

Esto levantará:

- Backend [http://localhost:3000/api/contacts](http://localhost:3000/api/contacts)

### 3. Levantar el frontend

```bash
cd frontend
docker-compose up --build
```

Esto levantará:

- Frontend [http://localhost:4200/](http://localhost:4200/)

## 📬 API Endpoints

| Método | Ruta               | Descripción                   |
|--------|--------------------|-------------------------------|
| GET    | `/api/contacts`    | Obtener todos los contactos   |
| POST   | `/api/contacts`    | Crear un nuevo contacto       |
| PUT    | `/api/contacts/:id`| Actualizar contacto existente |
| DELETE | `/api/contacts/:id`| Eliminar un contacto          |

## 🧩 Tecnologías utilizadas

### Frontend
- Angular
- TypeScript
- Bootstrap

### Backend
- Node.js
- Express.js
- MongoDB (como base de datos)

## 📁 Estructura del proyecto

```
root/
│
├── backend/
│   ├── src/
│   │   ├── config/         # Hace la conexion con la base de datos
│   │   ├── controllers/    # Logica principal HTTP
│   │   ├── models/         # Esquemas de Mongoose (Contact)
│   │   ├── routes/         # Rutas RESTful (/api/contacts)
│   │   ├── validations/    # Validacion de los datos del request
│   │   └── app.js          # App principal de Express
│   └── package.json
│
└── frontend/
    ├── src/app/
    │   ├── components/
    │   │   ├── contact-form/   # Formulario reactivo
    │   │   └── contact-list/   # Listado y acciones
    │   ├── services/           # ContactService (HTTP)
    │   └── interfaces/         # Tipado de Contact y Error
    └── angular.json
```

## ✅ Funcionalidades

- [x] Crear contactos
- [x] Editar contactos
- [x] Eliminar contactos
- [x] Búsqueda por nombre
- [x] Validación de formularios
- [x] Manejo de errores del servidor

## 🚀 Deploy

- Frontend [https://contacts-app-manager-swart.vercel.app/](https://contacts-app-manager-swart.vercel.app/)
- Backend [https://contacts-app-manager-1.onrender.com/api/contacts](https://contacts-app-manager-1.onrender.com/api/contacts)