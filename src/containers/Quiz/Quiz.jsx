import React, { Component } from 'react'
import ActiveQuiz from '../../component/ActiveQuiz'

import './Quiz.scss'

export default class Quiz extends Component {

  state = {
    quiz: []
  }

  render() {
    return (
      <div className="quiz">
        <div className="quiz-wrapper">
          <h1>Quiz</h1>
          <ActiveQuiz/>
        </div>
      </div>
    )
  }
}
