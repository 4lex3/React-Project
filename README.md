# React - Project
Aplicacion de TODO con gestion de multiusuarios.

**Funcionalidad Extra:** Deteccion del tema de navegador.
![Portada](https://raw.githubusercontent.com/4lex3/React-Project/refs/heads/main/docs/portada.png)

## Arquitectura:

```sh
├── src/
│   ├── App.jsx
│   ├── assets/
│   │   └── react.svg
│   ├── core/
│   │   └── context/
│   │       └── CurrentUserContext.jsx
│   ├── features/
│   │   ├── tasks/
│   │   │   ├── Tasks.jsx
│   │   │   ├── components/
│   │   │   │   ├── TaskForm.jsx
│   │   │   │   └── TaskList.jsx
│   │   │   └── context/
│   │   │       └── TasksContext.jsx
│   │   ├── theme/
│   │   │   └── ThemeSwitcher.jsx
│   │   ├── users/
│   │   │   ├── Users.jsx
│   │   │   ├── components/
│   │   │   │   ├── UserForm.jsx
│   │   │   │   ├── UserInfo.jsx
│   │   │   │   └── UserList.jsx
│   │   │   └── context/
│   │   │       └── UserContext.jsx
│   ├── index.css
│   ├── main.jsx
```
- **src/**: Carpeta principal del código fuente.
  - **App.jsx**: Componente raíz de la aplicación.
  - **main.jsx**: Punto de entrada donde se monta la app.
  - **index.css**: Estilos globales.
  - **assets/**: Recursos estáticos (imágenes, logos, etc).
  - **core/context/**: Contextos globales, como el usuario actual.
  - **features/**: Cada subcarpeta representa una funcionalidad principal:
    - **tasks/**: Todo lo relacionado con tareas (componentes, contexto, vistas).
    - **users/**: Todo lo relacionado con usuarios (componentes, contexto, vistas).
    - **theme/**: Funcionalidad de cambio de tema.

## Hooks:

- **UseState**: Variables reactivas singleton que son persistentes a lo largo de la ejecucion.
- **UseEffect**: Permite reaccionar a cambios de estado, tambien se ejecuta cuando se renderiza por primera vez un componente.
- **UseContext:**: Logica compartida entre los distintos componentes de la APP:


![UseContext](https://raw.githubusercontent.com/4lex3/React-Project/refs/heads/main/docs/Drawing%202025-04-27%2011.57.05.excalidraw.png)


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
