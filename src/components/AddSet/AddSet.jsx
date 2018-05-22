import React , { Component } from 'react'
import { Row , Col , Input , Button } from 'react-materialize'
// import 'AddSet.css'

class AddSet extends Component {

    render() {
        return(
         <Row>
             <Col s = {8} >
                <Input s = {6} label = "Name" />
                <Input s = {6} label = "Cateogies" />
                <Button waves='light'>Submit</Button>
             </Col>
        </Row>
        )
    }
}

export default AddSet