import './App.css';
import React, { useState, useEffect } from "react";
import List from "./components/List";
import Quote from './components/Quote';

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
    <Quote/>
      <button onClick={onClick}>Click me</button>
      <h1>Hello World</h1>
      <form>
        <label>Task: <input type="text" name="taskName" /></label>
        <input type="submit" value="Submit" />
      </form>
      <List todoNames={todoNames}/>
    </div>
  );
}

export default App;
