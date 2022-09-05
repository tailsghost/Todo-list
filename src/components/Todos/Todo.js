import styles from "./Todo.module.css";
import { RiTodoFill } from "react-icons/ri";

function Todo({ id, todo, deleteTodo, isCompletedValid, todos }) {
  return (
    <div
      className={styles.todo}
      onDoubleClick={() => deleteTodo(id)}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo}</div>
      <button onClick={() => isCompletedValid(id)}>Привет</button>
    </div>
  );
}

export default Todo;
