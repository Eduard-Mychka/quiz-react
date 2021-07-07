import React, { Component } from 'react'
import ActiveQuiz from '../../component/ActiveQuiz'

import './Quiz.scss'

export default class Quiz extends Component {

  state = {
    activeQuestion: 0,
    answerState: null, 
    quiz: [
      {
        question: 'Какого цвета небо ?',
        rightAnswerId: 3,
        id: 1,
        answers: [
          {text: 'Белое', id: 1},
          {text: 'Голубое', id: 2},
          {text: 'Синее', id: 3},
          {text: 'Небесное', id: 4},
        ]
      },
      {
        question: 'Cтолица Польшы ?',
        rightAnswerId: 3,
        id: 2,
        answers: [
          {text: 'Краков', id: 1},
          {text: 'Вроцлав', id: 2},
          {text: 'Варшава', id: 3},
          {text: 'Люблин', id: 4},
        ]
      }
    ]
  }

  onAswerClickHandler = (answerId) => {
    const question = this.state.quiz[this.state.activeQuestion]

    if (question.rightAnswerId === answerId) {

      this.setState({answerState: {[answerId]: 'success'}})

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {

        } else {
          this.setState({activeQuestion: this.state.activeQuestion + 1})
        }

        window.clearTimeout(timeout)
      }, 1000)

    } else {
      this.setState({
        answerState: {[answerId]: 'error'}
      })
    }
  }

  isQuizFinished() {
    return (
      this.state.activeQuestion + 1 === this.state.quiz.length
    ) 
  }

  render() {
    return (
      <div className="quiz">
        <div className="quiz-wrapper">
          {/* <h1>Quiz Show</h1> */}
          <h1>Answer all questions</h1>
          <ActiveQuiz 
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[this.state.activeQuestion].question}
            onAnswerClick={this.onAswerClickHandler}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
            state={this.state.answerState}
          />
        </div>
      </div>
    )
  }
}
