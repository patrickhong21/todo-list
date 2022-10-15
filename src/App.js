import './App.css';
import React, { useState, useEffect } from "react";
import List from "./components/List";
import axios from 'axios';




function App() {
  const [todoNames, setTodoNames] = useState([]);

  // start of quote thing
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const quoteAPI = async () => {
    let quoteArray = [];
    try {
      const data = await axios.get("https://api.quotable.io/random");
      quoteArray = data.data;
    } catch (error) {
      console.log(error)
    }

    try {
      setQuote(quoteArray.content)
      setAuthor(quoteArray.author)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    quoteAPI();
  }, [])
  // end of quote thing

  useEffect(() => {
    console.log("array updated");
  }, [todoNames]);

  const onClick = () => {
    setTodoNames([...todoNames, "1"]);
  }

  return (
    <div className="App">
      <div className="quotes">
        {quote} - 
        {author}
      </div>

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
