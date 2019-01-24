import React from "react";
import { Switch, Route } from "react-router-dom";

// Pages
import Gallery from "./components/gallery/Gallery";
import Landing from "./components/landing/Landing";
import Navbar from "./components/navbar/Navbar";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/gallery" component={Gallery} />
    <Route path="/navbar" component={Navbar} />
    <Route path="*" render={() => <img src="https://cdn-images-1.medium.com/max/1600/1*qdFdhbR00beEaIKDI_WDCw.gif" alt ='whooopies' />} />


  </Switch>
);
