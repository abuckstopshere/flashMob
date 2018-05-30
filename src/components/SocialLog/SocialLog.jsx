import React from 'react'
import GoogleOAuth from './GoogleOAuth'
import FacebookOAuth from './FacebookOAuth'

const SocialLog = (props) => {

    return (
    <div className = "col 6 offset-6 middle">
            <GoogleOAuth
                responseGoogle = {props.responseGoogle}
                redirectToDash = {props.redirectToDash}
            />
            <FacebookOAuth 
                responseFacebook = {props.responseFacebook}
                redirectToDash = {props.redirectToDash}
            />
    </div>
    )
}

export default SocialLog