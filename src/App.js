import React, { Component } from 'react'
import './App.css'
import Card from './Card/Card'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cards : [
        {
          id : 1 ,
          question : "what is currently the bane of my existence with react?" ,
          answer : "capitalization of the first letter in a word"
        } , {
          id : 2 ,
          question : "where are you safe from bear attacks" ,
          answer : "nowhere"
        }
      ] ,
      currentCard : {}
    }
  }

  componentWillMount() {
    const currentCards = this.state.cards

    this.setState({
      cards : currentCards ,
      currentCard : this.getRandomCard(currentCards)
    })
  }

  getRandomCard(currentCards) {
    let card = currentCards[Math.floor(Math.random() * currentCards.length)]
    return(card)
  }

  render() {
    return (
      <div className = "App">
        <div className = "prevCardColumn"></div>
        <div className = "mainCardColumn">
          <Card question = {this.state.currentCard.question} 
                answer = {this.state.currentCard.answer}/>
        </div>
        <div className = "nextCardColumn"></div>
      </div>
    )
  }
}

export default App;
