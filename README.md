# 📇 Contact Manager App

Aplicación fullstack para la gestión de contactos. Permite crear, editar, listar y eliminar contactos a través de una interfaz amigable en Angular y una API RESTful en Node.js/Express.

## 🧩 Tecnologías utilizadas

### Frontend
- [Angular 16+](https://angular.io/)
- TypeScript
- Bootstrap

### Backend
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) (como base de datos)

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

## 🚀 Instalación y ejecución

### 1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/contact-manager-app.git
cd contact-manager-app
```

### 2. Backend

```bash
cd backend
npm install
npm run dev
```

- Servidor corriendo en `http://localhost:3000`
- Base de datos: MongoDB Atlas o local

### 3. Frontend

```bash
cd frontend
npm install
npm run dev
```

- Aplicación Angular en `http://localhost:4200`

## 📬 API Endpoints

| Método | Ruta               | Descripción                   |
|--------|--------------------|-------------------------------|
| GET    | `/api/contacts`    | Obtener todos los contactos   |
| POST   | `/api/contacts`    | Crear un nuevo contacto       |
| PUT    | `/api/contacts/:id`| Actualizar contacto existente |
| DELETE | `/api/contacts/:id`| Eliminar un contacto          |

## ✅ Funcionalidades

- [x] Crear contactos
- [x] Editar contactos
- [x] Eliminar contactos
- [x] Búsqueda por nombre
- [x] Validación de formularios
- [x] Manejo de errores del servidor