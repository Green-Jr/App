Notes App
Una aplicación para la gestión de notas, donde los usuarios pueden registrarse, iniciar sesión, y crear, ver, editar y eliminar sus notas.

Contenido
Instalación
Uso
API Endpoints
Estructura del Proyecto
Contribuciones
Licencia
Instalación
Sigue estos pasos para instalar y configurar el proyecto en tu máquina local.

Clonar el repositorio
git clone https://github.com/Green-Jr/App.git

Navegar al directorio del proyecto
cd Notes-app

Instalar dependencias
npm install

Iniciar la aplicación
npm run dev

Configuración de la base de datos MongoDB
MONGODB_URI=mongodb+srv://junikoescobar11:Parzival11@notes.ic6cl61.mongodb.net/?retryWrites=true&w=majority&appName=Notes

CRUD
Uso
Registro de Usuario
Para registrarse, envía una solicitud POST a /api/users/register con el siguiente cuerpo:

json
{
  "username": "tuNombreDeUsuario",
  "password": "tuContraseña"
}


Inicio de Sesión
Para iniciar sesión, envía una solicitud POST a /api/users/login con el siguiente cuerpo:

json
{
  "username": "tuNombreDeUsuario",
  "password": "tuContraseña"
}


Crear una Nota
Para crear una nota, envía una solicitud POST a /api/notes con el siguiente cuerpo:

json
{
  "content": "Contenido de la nota",
  "status": "pending"
}


Ver Notas de un Usuario
Para ver las notas de un usuario, envía una solicitud GET a /api/users/:userId/notes.


Editar una Nota
Para editar una nota, envía una solicitud PUT a /api/notes/:noteId con el siguiente cuerpo:

json
{
  "content": "Nuevo contenido de la nota",
  "status": "completed"
}



Eliminar una Nota
Para eliminar una nota, envía una solicitud DELETE a /api/notes/:noteId.
API Endpoints
Usuarios POST /api/users/register: Registra un nuevo usuario. POST /api/users/login: Inicia sesión de un usuario.

Notas POST /api/notes: Crea una nueva nota. GET /api/users/:userId/notes: Obtiene todas las notas de un usuario. PUT /api/notes/:noteId: Edita una nota existente. DELETE /api/notes/:noteId: Elimina una nota.
```
## Estructura del Proyecto
notes-app/
├── config/
│   └── db.config.js
├── controllers/
│   └── note.controller.js
│   └── user.controller.js
├── models/
│   └── note.model.js
│   └── user.model.js
├── routes/
│   └── note.routes.js
│   └── user.routes.js
├── middleware/
│   └── auth.middleware.js
├── app.js
└── package.json
````

Contribuciones Las contribuciones son bienvenidas. Por favor, sigue estos pasos para contribuir:

Haz un fork del repositorio. Crea una nueva rama (git checkout -b feature/nueva-caracteristica). Realiza los cambios y haz commit (git commit -am 'Añadir nueva característica'). Haz push a la rama (git push origin feature/nueva-caracteristica). Abre un Pull Request.
