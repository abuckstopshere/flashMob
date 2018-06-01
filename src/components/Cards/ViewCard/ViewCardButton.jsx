import React from 'react'

const ViewCardButton = (props) => {
    return (
        <button className = "btn waves-effect waves-light" onClick = {props.handleViewCard}>
            View some Cards ?
        </button>
    )
}

export default ViewCardButton