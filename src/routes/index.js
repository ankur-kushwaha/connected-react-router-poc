import React from "react";
import { Route, Switch } from "react-router";
// import Home from '../components/Home'
import Hello from "../components/Hello";
import Counter from "../components/Counter";
import NoMatch from "../components/NoMatch";
import NavBar from "../components/NavBar";
import Bundle from "./Bundle";
import loadHome from "bundle-loader?lazy!../components/Home";

// components load their module for initial visit
const Home = props =>
  <Bundle load={loadHome}>
    {Home => <Home {...props} />}
  </Bundle>;

const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/hello" component={Hello} />
      <Route path="/counter" component={Counter} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default routes;
