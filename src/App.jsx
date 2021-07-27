import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import DorayakiDetail from "./pages/DorayakiDetail";

function App() {
  const [count, setCount] = useState(0);

  return <DorayakiDetail />;
}

export default App;
