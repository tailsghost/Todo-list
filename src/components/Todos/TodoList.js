import Todo from "./Todo";
import styles from "./TodoList.module.css";
import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";

function TodoList({
  todos,
  deleteTodo,
  deleteAllTodo,
  isCompletedValid,
  deleteMark,
}) {
  function activeTasks() {
    let num = todos.filter((item) => item.isCompleted === false);
    return num.length;
  }
  function compliteTask() {
    let num = todos.filter((item) => item.isCompleted !== false);
    return num.length;
  }
  const [todo] = todos;
  return !todos.length ? (
    <h2>Нет активных задач</h2>
  ) : (
    <>
      <div className={styles.todoListContainer}>
        <div className={styles.buttonMark}>
          <button
            className={styles.mark}
            onClick={() => deleteAllTodo()}
            title={"Удалить все кнопки"}
          >
            <RiRefreshLine className={styles.markIcon} />
          </button>
          <button
            className={styles.deleted}
            onClick={() => deleteMark()}
            disabled={!todo.isCompleted}
            title="Удалить завершенные задачи"
          >
            <RiDeleteBin2Line className={styles.deletedIcon} />
          </button>
        </div>
        {todos.map(({ id, text, isCompleted }) => {
          return (
            <Todo
              todo={text}
              key={id}
              deleteTodo={deleteTodo}
              id={id}
              isCompleted={isCompleted}
              isCompletedValid={isCompletedValid}
              todos={todos}
            />
          );
        })}
      </div>
      <h2 className={styles.activeTask}>
        Всего активных задач: {activeTasks()}
      </h2>
      <h2 className={styles.activeTask}>
        Всего завершенных задач: {compliteTask()}
      </h2>
    </>
  );
}

export default TodoList;
