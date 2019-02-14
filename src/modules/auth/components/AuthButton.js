import React from "react";
import { Button } from "semantic-ui-react";
import { connect } from 'react-redux'

const startAuthentication = () =>
 (window.location.href = `https://github.com/login/oauth/authorize?client_id=1653bf150593b10a0d63`);

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