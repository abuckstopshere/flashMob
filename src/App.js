import React from 'react'
import { BrowserRouter , Switch , Route } from 'react-router-dom'
import './App.css'
import SocialLog from './components/SocialLog/SocialLog'
import Dashboard from './components/Dashboard/Dashboard'

const App = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path = '/' component = {SocialLog} />
          <Route exact path = '/Dashboard' component = {Dashboard} /> 
       </Switch> 
     </BrowserRouter>
  )
}

export default App