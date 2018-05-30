import React from 'react'
import { Redirect } from 'react-router-dom'
import Card from '../Card/Card'
import Header from '../Header/Header'
import Button from '../Button/Button'

const Dashboard = (props) => {

    // if(props.redirectToDash !== true){
    //     return <Redirect to = {'./'} />
    // }
        return (
            <div className = "bigContainer">
                <div className = "row">
                    <div className = "headerNav">
                        <Header 
                            username = {props.username}
                            welcome = {props.welcome}
                        />
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

export default Dashboard