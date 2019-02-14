import React, { Component } from 'react'

class AuthCode extends Component {
    render() {
        const { 
            match: {
                params: { provider }
            },
            location: { search }
        } = this.props
        const matches = search.match(/\?code=(.*)/)
        const code = matches[1]
        return (
            <h1>Auth page: {provider} ({code})</h1>
        )    
    }
}

export default AuthCode