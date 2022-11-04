import React from "react"
import {Route, Switch} from "react-router-dom"
import Feed from "./Feed";
import Events from "./Events";
import Home from "./Home";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/feed" component={Feed}></Route>
        <Route path="/events" component={Events}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </>
  );
}

export default Routes