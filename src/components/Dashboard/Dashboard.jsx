import React from 'react'
import { Redirect } from 'react-router-dom'
import Header from '../Header/Header'
import CardOpts from '../Cards/CardOpts'
import SetOpts from '../Sets/SetOpts'
import AddSet from '../Sets/AddSet/AddSet'
import ViewSet from '../Sets/ViewSet/ViewSet'
import AddCard from '../Cards/AddCard/AddCard'
import ViewCard from '../Cards/ViewCard/ViewCard'
import './Dashboard.css'

const Dashboard = (props) => {
    return (
        <div className = "bigContainer">
            <div className = "row">
                <div className = "headerNav">
                    <Header 
                        username = {props.username}
                        welcome = {props.welcome}
                        dashView = {props.dashView}
                        handleDashView = {props.handleDashView}
                        logOut = {props.logOut}
                        handleLogOut =  {props.handleLogOut}
                    />
                </div>
            </div>
            <div className = "row">
                {props.dashView ? 
                    <div>
                        <div className = "col s6 margerino center" >
                            <SetOpts 
                                viewSet = {props.viewSet}
                                addSet = {props.addSet}
                                handleViewSet = {props.handleViewSet}
                                handleAddSet = {props.handleAddSet}
                            />
                        </div>
                        <div className = "col s6 margerino center" >
                            <CardOpts 
                                viewCard = {props.viewCard}
                                addCard = {props.addCard}
                                handleViewCard = {props.handleViewCard}
                                handleAddCard = {props.handleAddCard}
                            />
                        </div>
                    </div>
                : null}
                {props.addSet ? 
                    <AddSet />
                : null}
                {props.viewSet ? 
                    <ViewSet />
                : null}
                {props.addCard ? 
                    <AddCard />
                : null}
                {props.viewCard ? 
                    <ViewCard />
                : null}
                {props.logOut ? 
                    <Redirect to = {'/'} />
                : null}
            </div>
        </div>
    )
}


export default Dashboard