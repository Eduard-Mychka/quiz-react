import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './QuizList.scss';

export default class QuizList extends Component {

  renderQuizes() {
    return [1, 2, 3].map((quiz, index) => {
      return (
        <li key={index}>
          <NavLink to={'/quiz/' + quiz}>
            Test {quiz}
          </NavLink>
        </li>
      )
    })
  }

  render() {
    return (
      <div className="quiz-list">
        <div>
          <h1>Test List</h1>
          <ul>
            { this.renderQuizes() }
          </ul>
        </div>
      </div>
    )
  }
}
