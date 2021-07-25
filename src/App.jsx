import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StoresPage from "./pages/StoresPage";
import StoreDorayaki from "./components/StoreDorayaki";
import StoreDetail from "./pages/StoreDetail";

function App() {
  const [count, setCount] = useState(0);

  return <StoreDetail />;
}

export default App;
