import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import "./App.css";
import LoginForm from "./containers/login-form/index";
import { history } from "./history";
import LayoutCustom from "./containers/the-layout/index";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/login" component={LoginForm} />
        <Route path="/" component={LayoutCustom} />
      </Switch>
    </Router>
  );
}

export default App;
