import React , { Component } from 'react'
import Card from '../Card/Card'
import Header from '../Header/Header'
import Button from '../Button/Button'

class Dashboard extends Component {
    render() {
        return (
            <div className = "bigContainer">
                <div className = "row">
                    <div className = "headerNav">
                        <Header />
                    </div>
                </div>
                <div className = "row">
                    <div className = "cards">
                        <Card />
                    </div>
                </div>
                <div className = "row">
                    <div className = "buttonHolder">
                        <Button />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard