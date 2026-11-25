// Componente LISTA: es el "padre". Igual que ChristmasList en clase:
// guarda las tareas en el estado, tiene el formulario y los botones,
// y pinta un TodoItem (el "hijo") por cada tarea.
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // genera ids únicos para las keys
import TodoItem from './TodoItem/TodoItem';
import tasks from '../../data/tasks.json'; // precarga de tareas desde el JSON
import './TodoList.css';

const TodoList = () => {
  // Tareas guardadas en el estado. Empieza con las del JSON.
  const [items, setItems] = useState(tasks);

  // Lo que hay escrito en el input. Es un string porque solo hay un campo.
  const [title, setTitle] = useState('');

  // Cada vez que escribes una letra se guarda el texto en el estado
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // que el formulario no recargue la página

    // Validación: mínimo 6 caracteres (si no, no se añade nada)
    if (title.trim().length < 6) return;

    // La nueva tarea es un objeto con la misma forma que las del JSON
    const newTask = {
      _id: uuidv4(),
      title: title.trim(),
      isDone: false,
    };

    // Añadir objeto al array items: lo viejo (...items) + la nueva tarea
    setItems([...items, newTask]);

    // Vaciar el input después de añadir
    setTitle('');
  };

  // BORRAR una tarea: filter devuelve un array nuevo SIN la tarea con ese id
  const deleteItem = (id) => {
    setItems(items.filter((item) => item._id !== id));
  };

  // Renderizar los datos: un TodoItem por cada tarea.
  // La key evita el aviso de "Each child in a list should have a unique key".
  // A cada hijo le pasamos sus datos (data) y la función para borrarse (deleteItem).
  const paintData = () =>
    items.map((item) => (
      <TodoItem
        key={item._id}
        data={item}
        deleteItem={() => deleteItem(item._id)}
      />
    ));

  // CLEAR: vaciar el array de tareas
  const removeData = () => setItems([]);

  // RESET: volver a cargar solo las tareas del JSON
  const loadData = () => setItems(tasks);

  return (
    <section className="todo_list">
      <form onSubmit={handleSubmit}>
        {/* value={title} hace que el input muestre lo que hay en el estado,
            así al hacer setTitle('') el input se queda vacío */}
        <input
          type="text"
          name="title"
          placeholder="Nueva tarea"
          value={title}
          onChange={handleChange}
        />

        {/* El botón ADD solo aparece si hay algo escrito */}
        {title && <button type="submit">ADD</button>}
      </form>

      {/* Mensaje de error si hay texto pero tiene menos de 6 caracteres */}
      {title && title.trim().length < 6 && (
        <p className="error">La tarea debe tener al menos 6 caracteres</p>
      )}

      {/* Botones fuera del form para que no hagan submit */}
      <div className="buttons">
        <button onClick={removeData}>CLEAR</button>
        <button onClick={loadData}>RESET</button>
      </div>

      {/* Si hay tareas las pinto; si no, un mensaje */}
      {items.length > 0 ? (
        <ul>{paintData()}</ul>
      ) : (
        <p>No hay tareas</p>
      )}
    </section>
  );
};

export default TodoList;
