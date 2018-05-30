import React from 'react'
import GoogleOAuth from './GoogleOAuth'
import FacebookOAuth from './FacebookOAuth'

const SocialLog = () => {


    return (
    <div className = "col 6 offset-6 middle">
            <GoogleOAuth
                responseGoogle = {this.responseGoogle}
            />
            <FacebookOAuth />
    </div>
    )
}

export default SocialLog