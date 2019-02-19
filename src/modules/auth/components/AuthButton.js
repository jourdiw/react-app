import React from "react";
import { connect } from "react-redux";

const startAuthentication = () => {
  window.location.href = `https://github.com/login/oauth/authorize?client_id=cc805ef06019d52139a3&scope=gist,repo`;
};

const AuthButton = () => <button onClick={startAuthentication}>login</button>;

export default connect()(AuthButton);
