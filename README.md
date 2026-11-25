# TODO List - useState

Ejercicio de React del Bootcamp Full Stack de The Bridge: una lista de tareas hecha con useState.

## Funcionalidades

- Formulario con un input y un botón ADD para añadir tareas
- El botón ADD solo aparece cuando hay texto escrito
- Validación: la tarea debe tener al menos 6 caracteres
- El input se vacía al añadir una tarea
- Precarga de tareas desde un archivo JSON
- Botón BORRAR en cada tarea para eliminarla
- Botón CLEAR para borrar todas las tareas
- Botón RESET para volver a las tareas iniciales del JSON

## Tecnologías

- React
- Vite
- uuid (para las keys de la lista)
- CSS

## Estructura

src/
  data/tasks.json            -> tareas iniciales
  components/
    TodoList/                -> componente padre (estado, formulario y botones)
      TodoItem/              -> componente hijo (cada tarea)
  App.jsx

## Cómo arrancarlo

npm install
npm run dev
