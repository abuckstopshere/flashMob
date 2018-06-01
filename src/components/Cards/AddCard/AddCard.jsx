import React , { Component } from 'react'
import './AddCard.css'

class AddCard extends Component {

    render() {
        return(
            <div className = "col s6 offset-s3 center">
                <h5>Add A Card</h5>
                <div className = "row">
                    <div className="input-field col s12">
                        <input placeholder="Set Name" type="text" className="validate center" />
                    </div>
                </div>
                <div className = "row">
                    <div className="input-field col s12">
                        <input placeholder="Question" type="text" className="validate center" />
                    </div>
                </div>
                <div className = "row">
                    <div className="input-field col s12">
                        <input placeholder="Answer" type="text" className="validate center" />
                    </div>
                </div>
                <button className = "btn waves-effect waves-light">Submit</button>
            </div>
        )
    }
}


export default AddCard