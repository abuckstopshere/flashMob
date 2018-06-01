import React , { Component } from 'react'
import { BrowserRouter , Switch , Route , Redirect } from 'react-router-dom'
import './App.css'
import SocialLog from './components/SocialLog/SocialLog'
import Dashboard from './components/Dashboard/Dashboard'

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
      viewSet : false ,
      addSet : false ,
      viewCard : false ,
      addCard : false ,
      dashView : false ,
      logOut : false
    }
    this.responseGoogle = this.responseGoogle.bind(this)
    this.responseFacebook = this.responseFacebook.bind(this)
    this.handleViewCard = this.handleViewCard.bind(this)
    this.handleAddCard = this.handleAddCard.bind(this)
    this.handleViewSet = this.handleViewSet.bind(this)
    this.handleAddSet = this.handleAddSet.bind(this)
    this.handleDashView = this.handleDashView.bind(this)
    this.handleLogOut = this.handleLogOut.bind(this)
    this.resetState = this.resetState.bind(this)
  }

  resetState = () => {
    this.setState({
      user : null ,
      username : "" ,
      welcome : "" ,
      email : null ,
      googleId : null ,
      facebookId : null ,
      userImage : null ,
      redirectToDash : false ,
      viewSet : false ,
      addSet : false ,
      viewCard : false ,
      addCard : false ,
      dashView : false ,
      logOut : true,
      accessToken : false,
    })
  }

  responseGoogle = (response) => {
    if(response.accessToken) {
        this.setState({
          redirectToDash : true ,
          dashView : true ,
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
    if(response.accessToken) {
        this.setState({
          redirectToDash : true ,
          dashView : true ,
          username : response.name ,
          email : response.email ,
          facebookId : response.id ,
          welcome : `Howdy, ${response.name}!`
        })
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
      this.resetState()
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
                  redirectToDash = {this.state.redirectToDash} 
                />} 
            />
            <Route exact path = '/Dashboard'  render = {()=> 
                <Dashboard
                  {...this.state}
                  handleViewCard = {this.handleViewCard}
                  handleAddCard = {this.handleAddCard}
                  handleViewSet = {this.handleViewSet}
                  handleAddSet = {this.handleAddSet}
                  handleDashView = {this.handleDashView}
                  handleLogOut = {this.handleLogOut}
                />}
            /> 
        </Switch> 
      </BrowserRouter>
    )
  }
}

export default App