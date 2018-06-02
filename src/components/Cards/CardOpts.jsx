import React from 'react'
import AddCardButton from './AddCard/AddCardButton.jsx'
import ViewCardButton from './ViewCard/ViewCardButton.jsx'

const CardOpts = (props) => {
    return(
        <div className = "col s12">
            <div className = "row">
                Would you like to
            </div>
            <div className = "row">
                <AddCardButton 
                    addCard = {props.addCard}
                    handleAddCard = {props.handleAddCard}
                />
            </div>
            <div className = "row">
                or
            </div>
            <div className = "row">
                <ViewCardButton 
                    viewCard = {props.viewCard}
                    handleViewCard = {props.handleViewCard}
                />
            </div>
        </div>
    )
}

export default CardOpts