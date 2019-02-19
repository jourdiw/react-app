import React from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";

const startAuthentication = () => {
  window.location.href = `https://github.com/login/oauth/authorize?client_id=1653bf150593b10a0d63&scope=gist,repo`;
};

const mapStateToProps = (state) => {
  return {
      auth: state.auth.authenticated
  }
}
const AuthButton = ({auth}) => (
  <>
      {auth? 
          <Button onClick={startAuthentication}>Connected</Button>:
          <Button onClick={startAuthentication}>Login</Button>
      }
  </>
)

export default connect(
  mapStateToProps,
  null
)(AuthButton)

// const AuthButton = () => <button onClick={startAuthentication}>login</button>;

// export default connect()(AuthButton);
