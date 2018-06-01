import React from 'react'

const ViewSetButton = (props) => {

    return (
        <button className = "btn waves-effect waves-light" onClick = {props.handleViewSet}>
            View a Set ?
        </button>
    )
}

export default ViewSetButton