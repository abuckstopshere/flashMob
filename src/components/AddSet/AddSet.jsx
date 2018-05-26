import React , { Component } from 'react'
import { Row , Col , Input , Button } from 'react-materialize'
import Header from '../Header/Header'
// import 'AddSet.css'

class AddSet extends Component {

    render() {
        return(
<<<<<<< HEAD
         <Row>
             <Col s = {8} >
                <Input s = {6} label = "Name" />
                <Input s = {6} label = "Categories" />
                <Button waves='light'>Submit</Button>
             </Col>
        </Row>
=======
        <div>
            <Row>
                <Header />
            </Row>
            <Row>
                <Col s = {8} >
                    <Input s = {6} label = "Name" />
                    <Input s = {6} label = "Categories" />
                    <Button waves='light'>Submit</Button>
                </Col>
            </Row>
        </div>
>>>>>>> master
        )
    }
}

export default AddSet