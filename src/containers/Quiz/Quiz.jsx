import React, { Component } from 'react'
import ActiveQuiz from '../../component/ActiveQuiz'
import FinishedQuiz from '../../component/FinishedQuiz'

import './Quiz.scss'

export default class Quiz extends Component {

  state = {
    results: {},
    isFinished: false,
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
      },
      {
        question: 'Cтолица Deda ?',
        rightAnswerId: 2,
        id: 3,
        answers: [
          {text: 'Киев', id: 1},
          {text: 'Трусиля', id: 2},
          {text: 'Прилуки', id: 3},
          {text: 'Генезис', id: 4},
        ]
      }
    ]
  }

  onAswerClickHandler = (answerId) => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];

      if (this.state.answerState[key] === 'success') {
        return
      }
    }

    const question = this.state.quiz[this.state.activeQuestion];
    const results = this.state.results

    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = 'success'
      }
      this.setState({answerState: {[answerId]: 'success'}, results})

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({isFinished: true})
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1, 
            answerState: null
          })
        }
        window.clearTimeout(timeout)
      }, 800)

    } else {
      results[question.id] = 'error'
      this.setState({
        answerState: {[answerId]: 'error'}, results
      })
    }
  }

  isQuizFinished() {
    return (
      this.state.activeQuestion + 1 === this.state.quiz.length
    ) 
  }

  retryHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {}
    })
  }

  componentDidMount() {
    console.log('Quiz ID = ', this.props.match.params.id)
  }
  

  render() {
    return (
      <div className="quiz">
        <div className="quiz-wrapper">
          {this.state.isFinished
            ? <FinishedQuiz 
                results={this.state.results}
                quiz={this.state.quiz}
                onRetry={this.retryHandler}
              />
            : <ActiveQuiz 
                answers={this.state.quiz[this.state.activeQuestion].answers}
                question={this.state.quiz[this.state.activeQuestion].question}
                onAnswerClick={this.onAswerClickHandler}
                quizLength={this.state.quiz.length}
                answerNumber={this.state.activeQuestion + 1}
                state={this.state.answerState}
              />
          }
        </div>
      </div>
    )
  }
}
