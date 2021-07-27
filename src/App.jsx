import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import AllDorayakiPage from "./pages/AllDorayakiPage";

function App() {
  const [count, setCount] = useState(0);

  return <AllDorayakiPage />;
}

export default App;
