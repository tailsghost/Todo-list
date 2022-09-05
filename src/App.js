import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    };
    text && setTodos([...todos, newTodo]);
  };
  const deleteTodoHandler = (index) => {
    setTodos(todos.filter((todo) => todo.id !== index));
  };

  const deleteAllTododHandler = () => {
    const newTodo = [];
    setTodos(newTodo);
  };

  const isCompletedValid = (id) => {
    const newTodoTrue = [...todos];
    newTodoTrue.forEach((item) => {
      if (item.id === id) {
        return (item.isCompleted = !item.isCompleted);
      }
    });
    setTodos(newTodoTrue);
  };

  const deleteMarkTodoHandler = () => {
    setTodos(todos.filter((todo) => todo.isCompleted !== true));
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        deleteAllTodo={deleteAllTododHandler}
        isCompletedValid={isCompletedValid}
        deleteMark={deleteMarkTodoHandler}
      />
    </div>
  );
}

export default App;
