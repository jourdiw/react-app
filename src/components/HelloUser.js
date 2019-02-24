import React from 'react'
import { connect } from 'net';

const HelloUser = ({ username }) => 
    username ? (
        <p>Hello, {username}</p>
    ) : (
        <p>No user detected</p>
    );

// export default HelloUser
export default connect(
    (state) => ({ username: state.auth.username }),
    null
)(HelloUser);
