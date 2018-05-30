import React from 'react'
import './Header.css'
import Logo from './Logo'
import Home from './Home'
import Search from './SearchCards'
import AddASet from '../Header/AddASet'
import AddACard from '../Header/AddACard'
import Logout from '../Header/Logout'

const Header = (props) => {
        return (
            <nav className = "transparent">
                <div className = "nav-wrapper">
                    <div className = "left">
                        <ul>
                            <li><Home /></li>
                            <li><Search /></li>
                            <li><AddASet /></li>
                            <li><AddACard /></li>
                        </ul>
                    </div>
                    <div className = "right">
                        <ul>
                            <li>{props.welcome}</li>
                            <li><Logout /></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

export default Header