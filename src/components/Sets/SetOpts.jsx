import React from 'react'
import AddSetButton from './AddSet/AddSetButton.jsx'
import ViewSetButton from './ViewSet/ViewSetButton.jsx'

const SetOpts = (props) => {
    return(
        <div className = "col s12">
            <div className = "row">
                Would you like to
            </div>
            <div className = "row">
                <AddSetButton 
                    addSet = {props.addSet}
                    handleAddSet = {props.handleAddSet}
                />
            </div>
            <div className = "row">
                or
            </div>
            <div className = "row">
                <ViewSetButton 
                    viewSet = {props.viewSet}
                    handleViewSet = {props.handleViewSet}
                />
            </div>
        </div>
    )
}

export default SetOpts