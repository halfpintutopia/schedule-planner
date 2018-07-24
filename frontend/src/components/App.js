import React, { Component } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import importedComponent from "react-imported-component";
import { Provider } from "react-redux";
import Home from "./Home/index";
import Loading from "./Loading";
import EmployeeOverview from "../containers/EmployeeOverview/index";
import store from "../store";
// import DynamicPage from "./DynamicPage/index";
// import NoMatch from "./NoMatch/index";
import LoginView from "../containers/Login/index";
// import FixedMenu from "../containers/FixedMenu/index";
import OverviewLayout from "../containers/OverviewLayout/index";
import GridLayout from "../containers/GridLayout/index";
import AdminOverview from "../containers/AdminOverview/index";
import CreateProfile from "../containers/CreateProfile/index";
// import Request from "../containers/Request/index";

const AsyncDynamicPAge = importedComponent(
  () => import(/* webpackChunkName:'DynamicPage' */ "./DynamicPage/index"),
  {
    LoadingComponent: Loading
  }
);
const AsyncNoMatch = importedComponent(
  () => import(/* webpackChunkName:'NoMatch' */ "./NoMatch/index"),
  {
    LoadingComponent: Loading
  }
);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={OverviewLayout} />
          <Route exact path="/login" component={LoginView} />
          <Route exact path="/overview" component={EmployeeOverview} />
          <Route exact path="/grid" component={GridLayout} />
          <Route exact path="/admin" component={AdminOverview} />
          <Route exact path="/create" component={CreateProfile} />

          {/* <Route exact path="/dynamic" component={AsyncDynamicPAge} /> */}
          <Route component={AsyncNoMatch} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
