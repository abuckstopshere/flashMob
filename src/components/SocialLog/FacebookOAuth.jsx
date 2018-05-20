import React from 'react'
import { FacebookLogin } from 'react-facebook-login-component';
 
 
const responseFacebook = (response) => {
    console.log(response)
  }

const FacebookOAuth = () => {
    return (
        <FacebookLogin 
            socialId="2101055966836494"
            language="en_US"
            scope="public_profile,email"
            responseHandler={this.responseFacebook}
            xfbml={true}
            fields="id,email,name"
            version="v2.5"
            className="facebook-login"
            buttonText="Login With Facebook"
        />
    )
}


export default FacebookOAuth