import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </>
  );
};

export default Routes;
