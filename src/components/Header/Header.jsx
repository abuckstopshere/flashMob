import React , { Component } from 'react'
import './Header.css'
import Logo from './Logo'
import Home from './Home'
import Search from './Search'
import AddASet from '../Header/AddASet'

class Header extends Component {
    render() {
        return (
            <nav>
                <div className = "nav-wrapper">
                    <div className = "left">
                        <ul>
                            <li><Home /></li>
                            <li><Search /></li>
                            <li><AddASet /></li>
                            {/* <li><AddCard /></li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header