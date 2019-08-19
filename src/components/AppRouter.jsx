import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "../utils/history";
import * as pathnames from "../constants/pathnames";

import Layout from "./Layout";
import HomePage from "./HomePage";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsConditions from "./TermsConditions";
import LegalDisclaimer from "./LegalDisclaimer";
import EConsent from "./EConsent";
import RatesAndFees from "./RatesAndFees";

const AppRouter = () => {
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route exact path={pathnames.home} component={HomePage} />
          <Route exact path={pathnames.privacyPolicy} component={PrivacyPolicy} />
          <Route exact path={pathnames.termsConditions} component={TermsConditions} />
          <Route exact path={pathnames.legalDisclaimer} component={LegalDisclaimer} />
          <Route exact path={pathnames.eConsent} component={EConsent} />
          <Route exact path={pathnames.unsubscribe} component={EConsent} />
          <Route exact path={pathnames.ratesAndFees} component={RatesAndFees} />
          <Route exact path={pathnames.contactUs} component={EConsent} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default AppRouter;
