import React,{useState} from "react";

export const TodoForm = ({addTodo}) => {
	const [inputValue, setValue] = useState('')
	
	const handleSubmit =(e) => {
		e.preventDefault();
		addTodo(inputValue);

		setValue('')
	}
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
		value={inputValue}
		onChange={(e) => {setValue(e.target.value)}}
        className="todo-input"
        placeholder="What is the task today?"
      />
	  <button type="submit" className="todo-btn">Add task</button>
    </form>
  );
};
