import React , { Component } from 'react'
import { Div , Row , Col , Input , Button } from 'react-materialize'
import Header from '../Header/Header'
// import 'AddCard.css'

class AddCard extends Component {

    render() {
        return(
            <div>
                <Row>
                    <Header />
                </Row>
                <Row>
                    <Col s = {8} >
                        <Input s = {6} label = "Question" />
                        <Input s = {6} label = "Answer" />
                        <Button waves='light'>Submit</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default AddCard