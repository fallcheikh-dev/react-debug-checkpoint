import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  // BUG: mauvaise mise à jour d'état
 const increment = () => setCount(prev => prev + 1);

  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
    </div>
  );
}
