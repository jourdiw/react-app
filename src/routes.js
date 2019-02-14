import React from "react";
import { Route } from "react-router-dom";

import IndexPage from "./pages/IndexPage";
import HocPage from "./pages/Hoc";

import ShowsRoutes from "shows/routes";
import ConfigRoutes from "config/routes";

export default () => (
  <>
    {/** 
    'exact' ensures that a Route is only resolves for an exact match. 
    Here '/' won't render on '/about' anymore. 
    */}
    <Route path="/" exact component={IndexPage} />
    <Route path="/hoc" component={HocPage} />
    <ShowsRoutes prefix="/shows" />
    <ConfigRoutes prefix="/config" namespace="config" />
  </>
);
