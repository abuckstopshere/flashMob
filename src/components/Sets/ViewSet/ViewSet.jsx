import React , { Component } from 'react'
import './ViewSet.css'

class ViewSet extends Component {
    
    grabAllSets = () => {
        fetch('api/user' , {
            method: 'GET' 
        })
        .then(results => {
            console.log(results)
            })
        }
    
    render() {
        return(
            <div className = "col s6 offset-s3 center">
                <h5>Search for Sets</h5>                
                <div className = "row">
                    <div className="input-field col s12">
                        <input placeholder="Category" type="text" className="validate center" />
                    </div>
                </div>
                <button className = "btn waves-effect waves-light" onClick={this.grabAllSets}>Submit</button>
            </div>
        )
    }
}

export default ViewSet