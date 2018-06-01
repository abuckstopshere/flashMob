import React , { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Header from '../Header/Header'
import CardOpts from '../Cards/CardOpts'
import SetOpts from '../Sets/SetOpts'
import AddSet from '../Sets/AddSet/AddSet'
import ViewSet from '../Sets/ViewSet/ViewSet'
import AddCard from '../Cards/AddCard/AddCard'
import ViewCard from '../Cards/ViewCard/ViewCard'
import './Dashboard.css'

class Dashboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            viewSet : false ,
            addSet : false ,
            viewCard : false ,
            addCard : false ,
            dashView : true ,
            logOut : false
        }
    }

    handleViewCard = () => {
        this.setState({
            viewSet : false ,
            addSet : false ,
            viewCard : true ,
            addCard : false ,
            dashView : false ,
            logOut : false
        })
    }

    handleAddCard = () => {
        this.setState({
            viewSet : false ,
            addSet : false ,
            viewCard : false ,
            addCard : true ,
            dashView : false ,
            logOut : false
        })
    }

    handleViewSet = () => {
        this.setState({
            viewSet : true ,
            addSet : false ,
            viewCard : false ,
            addCard : false ,
            dashView : false ,
            logOut : false
        })
    }

    handleAddSet = () => {
        this.setState({
            viewSet : false ,
            addSet : true ,
            viewCard : false ,
            addCard : false ,
            dashView : false ,
            logOut : false
        })
    }

    handleDashView = () => {
        this.setState({
            viewSet : false ,
            addSet : false ,
            viewCard : false ,
            addCard : false ,
            dashView : true ,
            logOut : false
        })
    }

    handleLogOut = () => {
        this.setState({
            viewSet : false ,
            addSet : false ,
            viewCard : false ,
            addCard : false ,
            dashView : false ,
            logOut : true
        })
    }

    render() {
        return (
            <div className = "bigContainer">
                <div className = "row">
                    <div className = "headerNav">
                        <Header 
                            username = {this.props.username}
                            welcome = {this.props.welcome}
                            dashView = {this.state.dashView}
                            handleDashView = {this.handleDashView}
                            logOut = {this.state.logOut}
                            handleLogOut =  {this.handleLogOut}
                        />
                    </div>
                </div>
                <div className = "row">
                    {this.state.dashView ? 
                        <div>
                            <div className = "col s6 margerino center" >
                                <SetOpts 
                                    viewSet = {this.state.viewSet}
                                    addSet = {this.state.addSet}
                                    handleViewSet = {this.handleViewSet}
                                    handleAddSet = {this.handleAddSet}
                                />
                            </div>
                            <div className = "col s6 margerino center" >
                                <CardOpts 
                                    viewCard = {this.state.viewCard}
                                    addCard = {this.state.addCard}
                                    handleViewCard = {this.handleViewCard}
                                    handleAddCard = {this.handleAddCard}
                                />
                            </div>
                        </div>
                    : null}
                    {this.state.addSet ? 
                        <AddSet />
                    : null}
                    {this.state.viewSet ? 
                       <ViewSet />
                    : null}
                    {this.state.addCard ? 
                        <AddCard />
                    : null}
                    {this.state.viewCard ? 
                        <ViewCard />
                    : null}
                    {this.state.logOut ? 
                        <Redirect to = {'/'} />
                    : null}
                </div>
            </div>
        )
    }
}

export default Dashboard