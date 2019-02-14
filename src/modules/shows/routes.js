import React from "react";
import { Route } from "react-router-dom";

import ShowsPage from "./pages/ShowsPage";
import ShowPage from "./pages/ShowPage";

const ShowsRoutes = ({ prefix, namespace }) => (
  <>
    <Route path={prefix} component={ShowsPage} />
    <Route path={`${prefix}/:id`} component={ShowPage} />
  </>
);

ShowsRoutes.defautProps = {
  prefix: "/shows",
  namespace: "shows"
};

export default ShowsRoutes;
