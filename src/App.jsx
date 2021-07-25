import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StoresPage from "./pages/StoresPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <StoresPage />
    </div>
  );
}

export default App;
