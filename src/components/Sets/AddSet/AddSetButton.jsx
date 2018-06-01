import React from 'react'

const AddSetButton = (props) => {
    return (
        <button className = "btn waves-effect waves-light" onClick = {props.handleAddSet}>
            Add a Set ?
        </button>
    )
}

export default AddSetButton