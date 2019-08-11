import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AppNavBar from "./component/layout/AppNavBar";
import Homepage from "./component/layout/Homepage";

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <AppNavBar />
        <Switch>
          <Route exact path="/home" component={Homepage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
