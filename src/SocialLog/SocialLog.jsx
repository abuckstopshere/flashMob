import React from 'react'
import { GoogleLogin } from 'react-google-login'

const responseGoogle = (response) => {
    console.log(response)
  }

const GoogleOAuth = () => {
    return (
        <GoogleLogin
            clientId="685681342098-3o5h5vplr05mcse4aag6fur375qhuk1v.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
        />
    )
}

export default GoogleOAuth