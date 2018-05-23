import React , { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login'
import './SocialLog.css'

class GoogleOAuth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirectToReferrer : false
        }
        this.responseGoogle = this.responseGoogle.bind(this)
    }

    responseGoogle = (response) => {
        console.log(response)
        if(response.accessToken) {
            this.setState({redirectToReferrer : true})
        }
    }

    render() {

        if(this.state.redirectToReferrer){
            return <Redirect to = {'./Dashboard'} />
        }
        
        return (
            <GoogleLogin
                clientId="860339788054-m156ijfbdqc7qgp609nfvf9fi5q31dlg.apps.googleusercontent.com"
                className = "googleButton btn waves-effect waves-light"
                buttonText="Login with Google"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
            />
        )
    }
}
export default GoogleOAuth