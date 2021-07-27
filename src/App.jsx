import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import AllDorayakiPage from "./pages/AllDorayakiPage";
import StoresPage from "./pages/StoresPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />

      <Switch>
        <Route path="/dorayaki">
          <AllDorayakiPage />
        </Route>
        <Route path="/stores">
          <StoresPage />
        </Route>
        <Route path="/">
          <Hero />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
