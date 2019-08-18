import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "../utils/history";
import * as pathnames from "../constants/pathnames";

import Layout from "./Layout";
import HomePage from "./HomePage";

const AppRouter = () => {
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route exact path={pathnames.home} component={HomePage} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default AppRouter;
