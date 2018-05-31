import React , { Component } from 'react'
import { BrowserRouter , Switch , Route } from 'react-router-dom'
import './App.css'
import SocialLog from './components/SocialLog/SocialLog'
import Dashboard from './components/Dashboard/Dashboard'
import Search from './components/Search/Search'
import AddSet from './components/AddSet/AddSet'
import AddCard from './components/AddCard/AddCard'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user : null ,
      username : "" ,
      welcome : ""
    }
  }

  isUserLogged = () => {
      return!!this.state.user
    }
  

  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path = '/' component = {SocialLog} />
            <Route exact path = '/Dashboard' component = {Dashboard} /> 
            <Route exact path = '/AddSet' component = {AddSet} />
            <Route exact path = '/AddCard' component = {AddCard} />
            <Route exact path = '/Search' component = {Search} />
        </Switch> 
      </BrowserRouter>
    )
  }
}

export default App