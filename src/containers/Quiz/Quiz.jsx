import React, { Component } from 'react'
import './Quiz.scss'

export default class Quiz extends Component {

  state = {
    quiz: []
  }

  render() {
    return (
      <div className="quiz">
        <h1>Quiz</h1>
      </div>
    )
  }
}
