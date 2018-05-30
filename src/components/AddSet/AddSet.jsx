import React , { Component } from 'react'
import { Row , Col , Input , Button, Icon, NavItem, Badge, Dropdown } from 'react-materialize'
import Header from '../Header/Header'
import Dashboard from '../Dashboard/Dashboard';



// import 'AddSet.css'

class AddSet extends Component {

    render() {
        return(
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
        )
    }
}

export default AddSet