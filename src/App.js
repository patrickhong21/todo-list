import './App.css';
import { useState, useEffect } from "react";
import List from "./components/List";
import Form from "./components/Form";

function App() {
  const [todos, setTodos] = useState([{title:"",date:""}]);
  const [date, setDate] = useState(new Date());
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log("array updated");
  }, [todos]);

  const onClick = () => {
    setTodos([...todos, {title:input, date:date}]);
  }

  return (
    <div className="App">
      <Form date = {date} setDate = {setDate} input = {input} setInput = {setInput}/>
      <button onClick={onClick}>Submit Task:</button>
      <h1>Hello World</h1>
      <List todos={todos}/>
    </div>
  );
}

export default App;
