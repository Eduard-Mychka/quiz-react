import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Loader from '../../component/UI/Loader/Loader'
import Zoom from 'react-reveal/Zoom';
import { connect } from 'react-redux';
import { fetchQuizes } from '../../store/actions/quiz';

import './QuizList.scss';
class QuizList extends Component {
  renderQuizes() {
    return this.props.quizes.map(quiz => {
      return (
        <li key={quiz.id}>
          <NavLink to={'/quiz/' + quiz.id}>
            {quiz.name}
          </NavLink>
        </li>
      )
    })
  }

  componentDidMount() {
    this.props.fetchQuizes()
  }
  

  render() {
    return (
      <div className="quiz-list">
        <div>
          <h1>
            <Zoom left cascade>Test List</Zoom>
          </h1>
          { 
            this.props.loading && this.props.quizes.length !== 0
              ? <Loader/> 
              : <ul>
                  { this.renderQuizes() }
                </ul>
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    quizes: state.quiz.quizes,
    loading: state.quiz.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuizes: () => dispatch(fetchQuizes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizList);
