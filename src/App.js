import React, { useState, useReducer } from "react";
import "./App.css";
import "./styles.css";

const initialState = {
  count: 0
};

const reducerFunction = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1
      };
    case "INITCOUNT":
      return {
        ...state,
        count: action.payload
      };
    default:
      return state;
  }
};

export default function App() {
  const [input, setInput] = useState(0);

  const [state, dispatch] = useReducer(reducerFunction, initialState);

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
        <button onClick={() => dispatch({ type: "INITCOUNT", payload: input })}>
          Initialize Counter{" "}
        </button>
      </div>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Incrment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
}
