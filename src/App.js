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
      welcome : "" ,
      email : null ,
      googleId : null ,
      facebookId : null ,
      userImage : null ,
      redirectToDash : false ,
    }
    this.responseGoogle = this.responseGoogle.bind(this)
    this.responseFacebook = this.responseFacebook.bind(this)
  }

  responseGoogle = (response) => {
    console.log(response)
    if(response.accessToken) {
        this.setState({
          redirectToDash : true ,
          user : true ,
          username : response.profileObj.name ,
          email : response.profileObj.email ,
          googleId : response.googleId ,
          userImage : response.profileObj.imageUrl ,
          welcome : `Howdy, ${response.profileObj.name}!`
        })
    }
  }

  responseFacebook = (response) => {
    console.log(response)
    if(response.accessToken) {
        this.setState({
          redirectToDash : true ,
          username : response.name ,
          email : response.email ,
          facebookId : response.id ,
          welcome : `Howdy, ${response.name}!`
        })
    }
  }

  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path = '/' render = {()=> 
                <SocialLog 
                  user = {this.state.user}
                  username = {this.state.username}
                  responseGoogle = {this.responseGoogle}
                  responseFacebook = {this.responseFacebook}
                  redirectToDash = {this.state.redirectToDash} />} 
            />
            <Route exact path = '/Dashboard'  render = {()=> 
                <Dashboard
                  username = {this.state.username}
                  welcome = {this.state.welcome} 
                  redirectToDash = {this.state.redirectToDash}
                  />}
            /> 
            <Route exact path = '/AddSet' render = {()=> <AddSet />} />
            <Route exact path = '/AddCard' render = {()=> <AddCard />} />
            <Route exact path = '/Search' render = {()=> <Search />} />
        </Switch> 
      </BrowserRouter>
    )
  }
}

export default App