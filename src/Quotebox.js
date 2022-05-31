import "./styles.css";
import { useEffect, useState } from "react";

export default function Quotebox() {
  const [quotes, setQuote] = useState("");

  const getQuoteApi = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    console.log(data.slip.advice);
    let result = data.slip.advice + " " + data.slip.id;
    return setQuote(result);
  };
  useEffect(() => {
    getQuoteApi();
  });
  return (
    <div className="quotebox">
      <div>
        <h6>{quotes}</h6>
        <button onClick={(e) => setQuote(e.preventDefault())}>Get quote</button>
      </div>
    </div>
  );
}
