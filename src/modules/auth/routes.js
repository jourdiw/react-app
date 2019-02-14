import React from "react";
import { Route } from "react-router-dom";
import AuthCodePage from "./pages/AuthCode";

export default ({ prefix, namespace }) => (
  <>
    <Route
      path={`${prefix}/:provider`}
      render={props => <AuthCodePage namespace={namespace} {...props} />}
    />
  </>
);
