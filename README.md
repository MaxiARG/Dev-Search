# GitHub Users Explorer

Una aplicación móvil construida con **React Native** que permite explorar usuarios de GitHub, buscarlos, marcar favoritos y visualizar sus detalles.

## 🚀 Funcionalidades

### 🏠 Pantalla de Inicio

- **Listado de Usuarios Inicial**  
  Se consume la API pública de GitHub:  
  `https://api.github.com/users`  
  para mostrar una lista de usuarios.

- **Buscador de Usuarios**  
  Permite buscar usuarios por nombre con la API:  
  `https://api.github.com/search/users?q={term}`  
  Puede ser en tiempo real o mediante un botón.

- **Marcado de Favoritos**  
  Se puede marcar/desmarcar usuarios como favoritos.  
  El estado se guarda en memoria o en AsyncStorage (sin persistencia remota).

### 👤 Pantalla de Detalle del Usuario

- Al tocar un usuario, se navega a una pantalla de detalle.
- Se consume la API:  
  `https://api.github.com/users/{username}`  
  y se muestran datos como:
  - Avatar
  - Nombre
  - Bio
  - Repositorios públicos
  - Estado de favorito (con opción de alternarlo)

---

## 🛠️ Tecnologías

- **React Native** (Expo)
- **React Navigation** (stack navigation)
- **Axios** para consumo de APIs
- **Jotai** Contenedor de estado global, como Context o Redux
- **Tamagui** Usado para la creacion del design system, tokenizacion de atributos y creacion de componentes con estilos.


---

## 📦 Instalación

1. Cloná el repositorio:
   ```bash
   git clone https://github.com/MaxiARG/Dev-Search.git
   cd Dev-Search
   yarn install
   yarn run start
    ```
