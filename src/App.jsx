import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef("");

  const addnote = () => {
    const text = inputRef.current.value;
    const newitem = { text, done: false };
    setTodos([...todos, newitem]);
    inputRef.current.value = "";
  };
  const handelDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };
  const handelDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <div className="container">
        <h1>To do list</h1>
        <ul>
          {todos.map(({ text, done }, index) => {
            return (
              <div className="item" key={index}>
                <li
                  className={done ? "done" : ""}
                  onClick={() => handelDone(index)}
                >
                  {text}
                </li>
                <span onClick={() => handelDelete(index)}>❌</span>
              </div>
            );
          })}
        </ul>
        <input type="text" ref={inputRef} placeholder="Enter note..." />
        <button onClick={addnote}>Add note</button>
      </div>
    </>
  );
}

export default App;
