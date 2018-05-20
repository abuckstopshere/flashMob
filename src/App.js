import React, { Component } from 'react'
import { BrowserRouter , Switch , Route } from 'react-router-dom'
import './App.css'
import Card from './components/Card/Card'
import SocialLog from './components/SocialLog/SocialLog'

const App = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path = '/' component = {SocialLog} />
          <Route exact path = '/Card' component = {Card} /> 
       </Switch> 
     </BrowserRouter>
  )
}


export default App;
