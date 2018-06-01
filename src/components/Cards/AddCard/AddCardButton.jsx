import React from 'react'

const AddCardButton = (props) => {
    return (
        <button className = "btn waves-effect waves-light" onClick = {props.handleAddCard}>
            Add a Card ?
        </button>
    )
}

export default AddCardButton