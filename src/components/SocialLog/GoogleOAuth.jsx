import React from 'react'
import { Redirect } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login'
import './SocialLog.css'

const GoogleOAuth = (props) => {

        if(props.redirectToDash){
            return <Redirect to = {'./Dashboard'} />
        }

        return (

            <GoogleLogin
                clientId = "860339788054-m156ijfbdqc7qgp609nfvf9fi5q31dlg.apps.googleusercontent.com"
                className = "googleButton btn waves-effect waves-light"
                buttonText="Login with Google"
                onSuccess = {props.responseGoogle}
                onFailure = {props.responseGoogle}
            />
        )
    }

export default GoogleOAuth