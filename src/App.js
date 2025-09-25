import React, { useState } from "react";
import Counter from "./Counter";
import UserProfile from "./UserProfile";

export default function App() {
  const [user] = useState({ name: "Alice", age: 25 }); // OK but could causer re-renders si récrée

  return (
    <div>
      <h1>Debugging Demo</h1>
      <Counter />
      {/* BUG: on oublie de passer une prop à UserProfile (simulate missing prop) */}
      <UserProfile /> 
    </div>
  );
}
