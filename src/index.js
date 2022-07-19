import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages for this kit
import LandingPage from "views/examples/LandingPage.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route
          path="/"
          render={(props) => <LandingPage {...props} />}
        />
        <Redirect to="/" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
