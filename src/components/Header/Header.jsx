import React from 'react'
import './Header.css'
// import Logo from './Logo'
import Home from './Home.jsx'
import LogOut from '../Header/LogOut.jsx'

const Header = (props) => {
        return (
            <nav className = "transparent">
                <div className = "nav-wrapper">
                    <div className = "left">
                        <ul>
                            <li>
                                <Home 
                                    dashView = {props.dashView}
                                    handleDashView = {props.handleDashView}
                                />
                            </li>
                        </ul>
                    </div>
                    <div className = "right">
                        <ul>
                            <li className="smallText">{props.welcome}</li>
                            <li>
                                <LogOut 
                                    logOut = {props.logOut}
                                    handleLogOut = {props.handleLogOut}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

export default Header