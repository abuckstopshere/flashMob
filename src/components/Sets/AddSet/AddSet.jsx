import React from 'react'
import './AddSet.css'

const AddSet = (props) => {
        return(
            <div className = "col s6 offset-s3 center">
                <h5>Add A Set</h5>                
                <div className = "row">
                    <div className="input-field col s12">
                        <input placeholder="Category" type="text" className="validate center" />
                    </div>
                </div>
                <div className = "row">
                    <div className="input-field col s12">
                        <input placeholder="Set Name" type="text" className="validate center" />
                    </div>
                </div>
                <button className = "btn waves-effect waves-light">Submit</button>
            </div>
        )
    }

export default AddSet