import React from "react";
import { Route } from "react-router-dom";
import AuthCodePage from "./pages/AuthCode";
import UserPage from "./pages/UserPage";

export default ({ prefix, namespace }) => (
  <>
    <Route
      path={`${prefix}/:provider`}
      render={props =>
        props.match.params.provider === "user" ? (
          <UserPage namespace={namespace} {...props} />
        ) : (
          <AuthCodePage namespace={namespace} {...props} />
        )
      }
    />
  </>
);
