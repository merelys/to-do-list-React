import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList({ todos, deleteTodo, togleTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          togleTodo={togleTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
