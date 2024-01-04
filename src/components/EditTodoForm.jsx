import React,{useState} from "react";

export const EditTodoForm = ({editTodo,todo}) => {
	const [inputValue, setValue] = useState(todo.task)
	
	const handleSubmit =(e) => {
		e.preventDefault();
		
		editTodo(inputValue,todo.id);

		setValue('')
	}
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
		value={inputValue}
		onChange={(e) => {setValue(e.target.value)}}
        className="todo-input"
        placeholder="Update Task"
      />
	  <button type="submit" className="todo-btn">Update Task</button>
    </form>
  );
};
