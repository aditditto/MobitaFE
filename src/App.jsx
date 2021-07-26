import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import StoreDetail from "./pages/StoreDetail";

function App() {
  const [count, setCount] = useState(0);

  return <StoreDetail />;
}

export default App;
