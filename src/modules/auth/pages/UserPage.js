import React, { Component } from "react";

import { connect } from "react-redux";

// const UserPage = () => ;

class UserPage extends Component {
  state = {
    user: null,
    loading: true
  };
  componentDidMount = async () => {
    const { authenticated, token, history } = this.props;
    if (authenticated) {
      const res = await fetch("https://api.github.com/user", {
        headers: {
          Authorization: `token ${token}`
        }
      });
      const user = await res.json();
      this.setState({
        user,
        loading: false
      });
    } else {
      history.replace("/auth/github");
    }
    // if authenticated, fetch user
    // else trigger login
  };

  componentDidUpdate = () => {
    const { history, authenticated } = this.props;
    if (!authenticated) {
      history.replace("/auth/github");
    }
  };

  render() {
    const { user, loading } = this.state;
    return (
      <>
        <h1>UserPage</h1>
        {loading && <p>loading..</p>}
        {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
      </>
    );
  }
}

export default connect(
  // mapStateToProps:
  state => ({
    ...state.auth
  })
)(UserPage);
