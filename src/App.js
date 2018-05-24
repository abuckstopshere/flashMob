import React from 'react'
import { BrowserRouter , Switch , Route } from 'react-router-dom'
import './App.css'
import SocialLog from './components/SocialLog/SocialLog'
import Dashboard from './components/Dashboard/Dashboard'
import Search from './components/Search/Search'
import AddSet from './components/AddSet/AddSet'
import AddCard from './components/AddCard/AddCard'

const App = () => {
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

export default App