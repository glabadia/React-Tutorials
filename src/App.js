import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [users, getUsers] = useState();

  useEffect(() => {
    fetch("");
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
