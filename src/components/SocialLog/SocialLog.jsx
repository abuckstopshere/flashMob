import React from 'react'
import PropTypes from 'prop-types'
import GoogleOAuth from './GoogleOAuth'
import FacebookOAuth from './FacebookOAuth'

const SocialLog = (props) => {
    console.log(props)

    return (
    <div className = "col 6 offset-6 middle">
            <GoogleOAuth
                responseGoogle={props.responseGoogle}
            />
            <FacebookOAuth />
    </div>
    )

    SocialLog.PropTypes = {
        responseGoogle : PropTypes.func.isRequired
    }
}

export default SocialLog