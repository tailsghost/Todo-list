import Todo from "./Todo";
import styles from "./TodoList.module.css";

function TodoList({ todos, deleteTodo }) {
  return todos.length >= 1 ? (
    <div className={styles.todoListContainer}>
      {todos.map((todo, index) => {
        console.log(todo);
        return (
          <Todo
            todo={todo}
            key={index}
            deleteTodo={deleteTodo}
            index={index}
          />
        );
      })}
    </div>
  ) : (
    <h2>Нет активных задач</h2>
  );
}

export default TodoList;
