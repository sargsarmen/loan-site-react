import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "../utils/history";
import * as pathnames from "../constants/pathnames";

import HomePage from "./HomePage";

const AppRouter = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={pathnames.home} component={HomePage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
