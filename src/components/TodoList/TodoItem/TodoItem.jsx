// Componente ITEM: es el "hijo". Igual que ChristmasItem en clase:
// recibe por props los datos de UNA tarea y solo se encarga de pintarla.
import './TodoItem.css';

const TodoItem = ({ data, deleteItem }) => {
  // Destructuring: saco el title del objeto data
  const { title } = data;

  return (
    <li className="todo_item">
      <span>{title}</span>
      {/* deleteItem viene del padre: al hacer clic, el padre borra esta tarea */}
      <button onClick={deleteItem}>BORRAR</button>
    </li>
  );
};

export default TodoItem;
