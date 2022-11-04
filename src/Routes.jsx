import React, {useEffect} from "react"
import {Route, Switch, useLocation} from "react-router-dom"
import Feed from "./Feed";
import Events from "./Events";
import Home from "./Home";

const Routes = () => {
  const location = useLocation()

  useEffect(() => {
    const pathName = location.pathname
    // this.registration.showNotification("Navigation", {
    //   body: `Navigated to ${pathName}`,
    // })
  },[location])

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