import React, { useState, useMemo } from "react";
export default function App() {
  const [user] = useState({ name: "Alice", age: 25 });
  const memoUser = useMemo(() => user, [user]); // si user est recréé depuis props, mieux: compute only when changes

  return (
    <>
      <Counter />
      <UserProfile name={memoUser.name} age={memoUser.age} />
    </>
  );
}
