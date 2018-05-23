import React from 'react'
import { BrowserRouter , Switch , Route } from 'react-router-dom'
import './App.css'
import SocialLog from './components/SocialLog/SocialLog'
import Dashboard from './components/Dashboard/Dashboard'
import AddSet from './components/AddSet/AddSet'

const App = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path = '/' component = {SocialLog} />
          <Route exact path = '/Dashboard' component = {Dashboard} /> 
          <Route exact path = '/AddSet' component = {AddSet} />
       </Switch> 
     </BrowserRouter>
  )
}

export default App