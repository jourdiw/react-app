import React from "react";
import { connect } from "react-redux";
import { authDelete } from "auth/actions";
const startLogin = () => {
  window.location.href = `https://github.com/login/oauth/authorize?client_id=cc805ef06019d52139a3&scope=gist,repo`;
};

const AuthButton = ({ authenticated, logout }) =>
  authenticated ? (
    <button onClick={logout}>logout</button>
  ) : (
    <button onClick={startLogin}>login</button>
  );

export default connect(
  state => ({ authenticated: state.auth.authenticated }), // mapState to props
  dispatch => ({ logout: () => dispatch(authDelete()) })
)(AuthButton);
