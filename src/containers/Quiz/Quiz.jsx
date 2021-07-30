import React, { Component } from 'react'
import ActiveQuiz from '../../component/ActiveQuiz'
import FinishedQuiz from '../../component/FinishedQuiz'
import Loader from '../../component/UI/Loader/Loader'
import Tooltip from '@material-ui/core/Tooltip';
import Bounce from 'react-reveal/Bounce';
import { connect } from 'react-redux'
import { fetchQuizById, quizAnswerClick, retryQuiz } from '../../store/actions/quiz'
import { Link } from 'react-router-dom';

import './Quiz.scss'


class Quiz extends Component {

  componentDidMount() {
    this.props.fetchQuizById(this.props.match.params.id)
  }

  componentWillUnmount() {
    this.props.retryQuiz()
  }
  
  
  render() {
    return (
        <div className="containerr">
          <Tooltip title="Home" placement="right"  className="home">
            <a href="/quiz-react/"><i className="fas fa-home" /></a>
          </Tooltip>
          <Tooltip title="Create Test" placement="right" className="create-test">
            <Link to="/quiz-creator"><i className="fad fa-layer-plus"/></Link>
          </Tooltip>
          
          <div className="quiz">
            <div className="quiz-wrapper">
              {
                this.props.loading || !this.props.quiz
                  ? <Loader/> 
                  : this.props.isFinished
                    ? <Bounce right><FinishedQuiz 
                        results={this.props.results}
                        quiz={this.props.quiz}
                        onRetry={this.props.retryQuiz}
                      /></Bounce>
                    :  <Bounce left><ActiveQuiz 
                        answers={this.props.quiz[this.props.activeQuestion].answers}
                        question={this.props.quiz[this.props.activeQuestion].question}
                        onAnswerClick={this.props.quizAnswerClick}
                        quizLength={this.props.quiz.length}
                        answerNumber={this.props.activeQuestion + 1}
                        state={this.props.answerState}
                      /></Bounce>
              }
            </div>
          </div>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    results: state.quiz.results,
    isFinished: state.quiz.isFinished,
    activeQuestion: state.quiz.activeQuestion,
    answerState: state.quiz.answerState, 
    quiz: state.quiz.quiz,
    loading: state.quiz.loading 
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuizById: id => dispatch(fetchQuizById(id)),
    quizAnswerClick: answerId => dispatch(quizAnswerClick(answerId)),
    retryQuiz: () => dispatch(retryQuiz())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)