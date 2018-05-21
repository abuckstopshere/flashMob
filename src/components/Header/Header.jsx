import React , { Component } from 'react'
import './Header.css'
import Logo from './Logo'
import Home from './Home'
import Search from './Search'

class Header extends Component {
    render() {
        return (
            <nav>
                <div className = "nav-wrapper">
                    <div className = "left">
                        <ul>
                            <li><Home /></li>
                            <li><Search /></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header