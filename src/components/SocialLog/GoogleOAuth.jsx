import React , { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login'
import './SocialLog.css'

const GoogleOAuth = () => {
    
        return (
            <GoogleLogin
                clientId="860339788054-m156ijfbdqc7qgp609nfvf9fi5q31dlg.apps.googleusercontent.com"
                className = "googleButton btn waves-effect waves-light"
                buttonText="Login with Google"
                responseGoogle
                // onFailure = {this.responseGoogle}
            />
        )
    }

export default GoogleOAuth