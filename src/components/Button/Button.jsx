import React, { Component } from 'react'
import Next from './Next'
import Previous from './Previous'

class Button extends Component {
   render() {
       return(
        <div className = "valign-wrapper">
            <Previous />
            <Next />
        </div>
       )
   }
}

export default Button