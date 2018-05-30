import React from 'react'
import GoogleOAuth from './GoogleOAuth'
import FacebookOAuth from './FacebookOAuth'

const SocialLog = () => {
    return (
    <div className = "col 6 offset-6 middle">
            <GoogleOAuth 
                user = {this.props.user}
                username = {this.props.username}
                />
            <FacebookOAuth 
                user = {this.props.user}
                username = {this.props.username}
                />
    </div>
    )
}

export default SocialLog