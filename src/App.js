import './App.css';
import React, { useState, useEffect } from "react";
import List from "./components/List";

function App() {
  const [todoNames, setTodoNames] = useState([]);

  useEffect(() => {
    console.log("array updated");
  }, [todoNames]);

  const onClick = () => {
    setTodoNames([...todoNames, "1"]);
  }

  return (
    <div className="App">
      <button onClick={onClick}>Click me</button>
      <h1>Hello World</h1>
      <List todoNames={todoNames}/>
    </div>
  );
}

export default App;
