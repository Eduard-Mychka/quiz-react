import React, { Component } from 'react'
import ActiveQuiz from '../../component/ActiveQuiz'
import FinishedQuiz from '../../component/FinishedQuiz'
import axios from '../../axios/axios-quiz'
import Loader from '../../component/UI/Loader/Loader'
import Tooltip from '@material-ui/core/Tooltip';
import Bounce from 'react-reveal/Bounce';

import './Quiz.scss'

export default class Quiz extends Component {
  state = {
    results: {},
    isFinished: false,
    activeQuestion: 0,
    answerState: null, 
    quiz: [],
    loader: true
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

  async componentDidMount() {
    try {
      const response = await axios.get(`/quizes/${this.props.match.params.id}.json`)
      const quiz = response.data

      this.setState({quiz, loader: false})
    } catch (e) {
      console.log(e)
    }
  }
  
  render() {
    return (
        <div className="containerr">
          <Tooltip title="Home" placement="right"  className="home">
            <a href="/quiz-react/"><i className="fas fa-home" /></a>
          </Tooltip>
          <Tooltip title="Create Test" placement="right" className="create-test">
            <a href="/quiz-creator"><i className="fad fa-layer-plus"/></a>
          </Tooltip>
          
          <div className="quiz">
            <div className="quiz-wrapper">
              {
                this.state.loader 
                  ? <Loader/> 
                  : this.state.isFinished
                    ? <Bounce right><FinishedQuiz 
                        results={this.state.results}
                        quiz={this.state.quiz}
                        onRetry={this.retryHandler}
                      /></Bounce>
                    :  <Bounce left><ActiveQuiz 
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick={this.onAswerClickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                        state={this.state.answerState}
                      /> </Bounce>
              }
            </div>
          </div>
        </div>
    )
  }
}
