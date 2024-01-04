import React, { useEffect, useState } from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";

export const TodoWrapper = () => {
	const [todos, setTodos] = useState(window.localStorage.getItem('user_todos') ? JSON.parse(window.localStorage.getItem('user_todos')):[] );
	
// useeffect for locale storage 
  useEffect(() => {
    window.localStorage.setItem("user_todos", JSON.stringify(todos));
  }, [todos]);

  //   add new todo task
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEdited: false },
    ]);
  };

  //   mark the text
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  //   delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //   edit  todo
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id == id ? { ...todo, isEdited: !todo.isEdited } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id == id ? { ...todo, task: task, isEdited: !todo.isEdited } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEdited ? (
          <EditTodoForm editTodo={editTask} todo={todo} key={index} />
        ) : (
          <Todo
            todo={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};
