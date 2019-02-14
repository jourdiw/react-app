import React from 'react'
import { Route } from 'react-router-dom'
import AuthCode from './pages/AuthCode'

export default ({prefix, namespace}) => (
    <>
        <Route path={`${prefix}/:provider`} render ={(props) => <AuthCode namespace={namespace} {...props} />} />
    </>
)