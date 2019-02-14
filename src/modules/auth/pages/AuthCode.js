import React, { Component } from "react";
import { connect } from "react-redux";
import { Header } from "semantic-ui-react";

import { authSuccess } from "../actions";

class AuthCode extends Component {
  state = {
    loading: true,
    success: false,
    error: false
  };
  componentDidMount = async () => {
    const {
      location: { search }
    } = this.props;
    const matches = search.match(/\?code=(.*)/);
    const code = matches[1];

    try {
      const res = await fetch(
        `http://localhost:3001/api/auth_code?code=${code}`
      );
      const json = await res.json();

      console.log(json);
      this.setState({ loading: false });

      if (json.access_token) {
        this.setState({ error: false, success: true });
        this.props.handleAuthSuccess(json.access_token);
      } else {
        this.setState({ error: "Invalid code", success: false });
      }
    } catch (err) {
      console.error(err);
      this.setState({ error: "Server error", loading: false });
    }
  };

  render() {
    const { loading, success, error } = this.state;
    const {
      match: {
        params: { provider }
      }
    } = this.props;
    return (
      <>
        <Header>Authenticating with {provider}</Header>
        {loading && <p>loading...</p>}
        {success && <p>Success!</p>}
        {error && <p>Error "{error}", see console</p>}
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleAuthSuccess: token => dispatch(authSuccess(token))
});

export default connect(
  null,
  mapDispatchToProps
)(AuthCode);
