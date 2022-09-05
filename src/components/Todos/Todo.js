import styles from "./Todo.module.css";
import { RiDeleteBin2Line, RiTodoFill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";

function Todo({ id, todo, deleteTodo, isCompletedValid, isCompleted }) {
  return (
    <div
      className={isCompleted ? styles.todo__wrap : styles.todo}
      onDoubleClick={() => deleteTodo(id)}
    >
      <RiTodoFill
        className={isCompleted ? styles.todoIcon__wrap : styles.todoIcon}
      />
      <div className={isCompleted ? styles.todoText__wrap : styles.todoText}>
        {todo}
      </div>
      <RiDeleteBin2Line
        onClick={() => deleteTodo(id)}
        className={
          isCompleted ? styles.RiDeleteBin2Line__wrap : styles.RiDeleteBin2Line
        }
      />
      <FaCheck
        onClick={() => isCompletedValid(id)}
        className={isCompleted ? styles.FaCheck__wrap : styles.FaCheck}
      />
    </div>
  );
}

export default Todo;
