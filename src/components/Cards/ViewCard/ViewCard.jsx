import React, { Component } from 'react'
import './ViewCard.css'

class ViewCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cards : [
        {
          id : 1 ,
          question : "whats a test question?" ,
          answer : "fuckin bullshit thats what"
        } , {
          id : 2 ,
          question : "where are you safe from bear attacks?" ,
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
  
  grabAllCards = () => {
    fetch('/api/Sets')
    .then(results => {
        console.log(results)
    })
  }

  getRandomCard(currentCards) {
    let card = currentCards[Math.floor(Math.random() * currentCards.length)]
    return(card)
  }

  render() {
      return(
        <div className = "cardBox">
            <div className = "card valign-wrapper">
              <div className = "text-center">
                {this.state.currentCard.question}
                <br/>
                <br/>
                {this.state.currentCard.answer}
              </div>
            </div>
        </div>
      )
  }
}

export default ViewCard