import React, { useState, useEffect } from "react";
import axios from 'axios';

function Quote() {
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
  return (
    <div>
        {quote} - {author}
    </div>
  )
}

export default Quote