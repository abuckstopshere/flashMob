import React , { Component } from 'react'
import { GoogleLogin } from 'react-google-login'
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
      welcome : "" ,
      redirectToDash : false ,
    }
    this.responseGoogle = this.responseGoogle.bind(this)
    this.responseFacebook = this.responseFacebook.bind(this)
  }

  responseGoogle = (response) => {
    console.log(response)
    if(response.accessToken) {
        let name = response.profileObj.name
        this.setState({
          redirectToDash : true ,
          user : true ,
          username : name
        
        })
    }
  }

  // onSuccess = () => {
  //   this.responseFacebook()
  // } 

  responseFacebook = (response) => {
    console.log(response)
    if(response.accessToken) {
        this.setState({
          redirectToDash : true
        })
    }
  }

  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path = '/' component = {SocialLog}
              user = {this.state.user}
              username = {this.state.username}
              responseGoogle = {this.state.responseGoogle}
              responseFacebook = {this.state.responseFacebook}
            />
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