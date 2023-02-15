import React, { useState } from "react";
import "./style.css";

export default function Comp() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  let color;
  if (count <= 4) {
    color = "green";
  } else if (count <= 9) {
    color = "blue";
  } else {
    color = "red";
  }

  return (
    <div className="App">
      <h1 style={{ color: color }}>{count}</h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
}
