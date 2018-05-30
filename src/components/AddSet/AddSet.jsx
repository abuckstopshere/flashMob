import React , { Component } from 'react'
import { Row , Col , Input , Button, Icon, NavItem, Badge, Dropdown } from 'react-materialize'
import Header from '../Header/Header'
<<<<<<< HEAD
import Dashboard from '../Dashboard/Dashboard';



// import 'AddSet.css'
=======
>>>>>>> 4eb0971d3e2d144d8f67382fd708cc2fbbd6ec5d

const AddSet = (props) => {
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

export default AddSet