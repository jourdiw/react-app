import React from "react";
import { Route } from "react-router-dom";

import ConfigPage from "./pages/ConfigPage";

const ConfigRoutes = ({ prefix, namespace }) => (
  <>
    <Route
      path={prefix}
      render={props => <ConfigPage namespace={namespace} {...props} />}
    />
  </>
);

ConfigRoutes.defautProps = {
  prefix: "/config"
};

export default ConfigRoutes;
