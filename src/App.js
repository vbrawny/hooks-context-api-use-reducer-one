import React, { useState } from "react";
import "./App.css";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState(0);

  return (
    <div className="App">
      <h1>Reducer Example</h1>
      <div>
        <label>Start Count:</label>
        <input
          type="number"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <br />
        <button>Initialize Counter </button>
      </div>
      <p>0</p>
      <button>Incrment</button>
      <button>Decrement</button>
    </div>
  );
}
