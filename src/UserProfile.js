import React from "react";

export default function UserProfile({ name, age }) {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {name}</p>   {/* affichera "undefined" */}
      <p>Age: {age}</p>
    </div>
  );
}
