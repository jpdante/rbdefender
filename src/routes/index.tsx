import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import NavBar from "../components/NavBar";

import Home from "../pages/Home";

function Router() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact component={Home} path="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Router;
