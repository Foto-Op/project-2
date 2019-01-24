import React from "react";
import { Switch, Route } from "react-router-dom";
import Gallery from "./components/gallery/Gallery";
import Landing from "./components/landing/Landing";
import Navbar from "./components/navbar/Navbar";

export default (
  <Switch>
    <Route path="/gallery" component={Gallery} />
    <Route path="/landing" component={Landing} />
    <Route path="/navbar" component={Navbar} />
  </Switch>
);
