import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import LookUp from "../pages/LookUp/LookUp";
const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/look-up" component={LookUp} />
      </Switch>
    </>
  );
};

export default Routes;
