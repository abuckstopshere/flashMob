import React , { Component } from 'react'
import { Row , Col , Input , Button } from 'react-materialize'
import Header from '../Header/Header'
// import 'SearchCards.css'

class Search extends Component {

    render() {
        return(
        <div>
            <Row>
                <Header />
            </Row>
            <Row>
                <Col s = {8} >
                    <Input s = {6} label = "Search By Name" />
                    <Input s = {6} label = "Search By Categories" />
                    <Button waves='light'>Submit</Button>
                </Col>
            </Row>
        </div>
        )
    }
}

export default Search