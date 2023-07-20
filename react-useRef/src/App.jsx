import { useState, useRef } from "react";

import './App.css'

function App() {

 const [newTodoValue, setNewTodoValue] = useState("");
  const [todosList, setTodosList] = useState([]);
  const inputRef = useRef(null)
    function handleChange(event) {
      setNewTodoValue(event.target.value);

    }
    
  
  const addTodo = (event) => {
    event.preventDefault();
    setTodosList(prevTodoList => [...prevTodoList, newTodoValue]) 
    setNewTodoValue("");
    inputRef.current.focus()
            console.log(inputRef);
  }

  const allTodos = todosList.map((todo) => <p key={todo}>{todo}</p>);
  return (
    <div className="App">
      <form action="">
        <input
          ref={inputRef}
          type="text"
          name="todo"
          value={newTodoValue}
          onChange={handleChange}
        />
        <button onClick={addTodo}>Add todo item</button>
      </form>
      {allTodos}
    </div>
  );
}

export default App
