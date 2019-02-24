import React from 'react'
import { connect } from 'react-redux';

const HelloUser = ({ username }) => 
    username ? (
        <p>Hello, {username}</p>
    ) : (
        <p>No user detected</p>
    );

export default connect (
    (state) => ({ username: state.auth.username }),
    null
)(HelloUser);
