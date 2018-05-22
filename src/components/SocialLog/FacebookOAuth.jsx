import React , { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { FacebookLogin } from 'react-facebook-login-component'
import './SocialLog.css'

class FacebookOAuth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirectToDash : false
        }
        this.responseFacebook = this.responseFacebook.bind(this)
    }

    responseFacebook = (response) => {
        console.log(response)
        if(response.accessToken) {
            this.setState({redirectToDash : true})
        }
    }

    render() {

        if(this.state.redirectToDash){
            return <Redirect to = {'./Dashboard'} />
        }
        
        return (
            <FacebookLogin 
                socialId="2101055966836494"
                language="en_US"
                scope="public_profile,email"
                responseHandler={this.responseFacebook}
                xfbml={true}
                fields="id,email,name"
                version="v2.5"
                className="facebookButton btn waves-effect waves-light"
                buttonText="Login With Facebook"
                />
            )
        }
}
export default FacebookOAuth