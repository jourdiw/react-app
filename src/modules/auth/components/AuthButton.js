import React from "react";
import { connect } from "react-redux";
import { authDelete } from "auth/actions";
const startLogin = () => {
  window.location.href = `https://github.com/login/oauth/authorize?client_id=1653bf150593b10a0d63&scope=gist,repo`;
};

const AuthButton = ({ authenticated, logout }) =>
  authenticated ? (
    <button onClick={logout}>logout</button>
  ) : (
    <button onClick={startLogin}>login</button>
  );

export default connect(
  // mapStateToProps
  state => ({ authenticated: state.auth.authenticated }),
  // mapDispatchToProps
  dispatch => ({ logout: () => dispatch(authDelete()) })
)(AuthButton);