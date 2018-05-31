import React , { Component } from 'react'
import { Row , Col , Input , Button } from 'react-materialize'
import Header from '../Header/Header'
import Dashboard from '../Dashboard/Dashboard'
// import app from '../../routes/api-routes'

const AddSet = (props) => {
        return(
        <div>
            <div className = "row">
                <Header />
            </div>
            <div className = "row">
                <Col s = {8} >
                    <Input s = {6} label = "Name" />
                    <Input s = {6} label = "Categories" />
                    <Button waves='light'>Submit</Button>
                </Col>
            </div>
        </div>
        )
    }

export default AddSet