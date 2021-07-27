import React from 'react'
import quoteList from './quotelist.js'

let randomNumber = Math.floor(Math.random() * 8)

class Quote extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '', author: '' }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.quoteTextID = this.getText()
    this.quoteAuthorID = this.getAuthor()
  }

  getText() {
    this.setState({ text: quoteList[randomNumber].text })
  }

  getAuthor() {
    this.setState({ author: quoteList[randomNumber].author })
  }

  handleClick() {
    randomNumber = Math.floor(Math.random() * 8)
    console.log(randomNumber)
    this.setState({ text: quoteList[randomNumber].text })
    this.setState({ author: quoteList[randomNumber].author })

    document.querySelector('.quote-button').style.background =
      'rgba(255, 255, 255, 0.397)'
    setTimeout(() => {
      document.querySelector('.quote-button').style.background = ''
    }, 100)
  }

  render() {
    return (
      <div className='quote-container'>
        <h2 className='quote-text'>" {this.state.text} "</h2>
        <h3 className='quote-author'>-{this.state.author}</h3>
        <button className='quote-button' onClick={this.handleClick}>
          Change Quote
        </button>
      </div>
    )
  }
}

export default Quote
