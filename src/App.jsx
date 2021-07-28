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
import DorayakiDetail from "./pages/DorayakiDetail";
import StoreDetail from "./pages/StoreDetail";
import NewDorayaki from "./pages/NewDorayaki";
import NewStore from "./pages/NewStore";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />

      <Switch>
        <Route path="/dorayaki/show/:ID">
          <DorayakiDetail />
        </Route>
        <Route path="/dorayaki/new">
          <NewDorayaki />
        </Route>
        <Route path="/dorayaki">
          <AllDorayakiPage />
        </Route>
        <Route path="/stores/show/:ID">
          <StoreDetail />
        </Route>
        <Route path="/stores/new">
          <NewStore />
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
