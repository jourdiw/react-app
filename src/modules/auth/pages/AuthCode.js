import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
// import { connect } from 'http2';
import { authSuccess } from '../actions'
import { connect } from 'react-redux'

class AuthCode extends Component {
    state = {
        loading: true,
        success: false,
        error: true
    }
    componentDidMount = async () => {
        const {
            location: { search }
        } = this.props
        const matches = search.match(/\?code=(.*)/)
        const code = matches[1]
        try {
            const res = await fetch(`http://localhost:3001/api/auth_code?code=${code}`)
            const json = await res.json()
            console.log(json)
            this.setState({ loading: false })
            if (json.access_token) {
                this.props.handleAuthSuccess(json.access_token)
                this.setState({ success: true, error: false})
            } else {
                this.setState({ error: "Invalid code", success: false})
            }
            // .then(json => console.log(json))
        }
        catch (err) {
            // .catch(err => console.log(err))
            console.log(err)
            this.setState({ loading: false, error: "Did not werk", success: false })
        }
    }

    // handleAuthSuccess = () => {
    //     connect(
    //         (state, ownProps) => ({
    //             authSuccess: state[ownProps.namespace].authSuccess
    //         }),
    //         dispatch => ({

<<<<<<< HEAD
    //         })
    //     )
    // }
    render() {
        const { 
            match: {
                params: { provider }
            },
            location: { search }
        } = this.props
        const { loading, error, success } = this.state
        const matches = search.match(/\?code=(.*)/)
        const code = matches[1]
        return (
            <div>
                { loading && <h1>Loading...</h1>}
                { success && <h1>Auth page: {provider} ({code})</h1>}
                { error && <h1>{error}</h1>}
            </div>
        )    
    }
=======
      if (json.access_token) {
        this.setState({ error: false, success: true });
        this.props.handleAuthSuccess(json.access_token);
        setTimeout(() => history.replace("/user"), 1000);
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
        {success && <p>Success! Redirecting...</p>}
        {error && <p>Error "{error}", see console</p>}
      </>
    );
  }
>>>>>>> 8064c443c8d232ee20ca7b45dd8690bffb32c0fa
}

const mapDispatchToProps = dispatch => ({
    handleAuthSuccess: (token) => dispatch(authSuccess(token))
})

export default connect (
    null,
    mapDispatchToProps
)(AuthCode)
// export default AuthCode