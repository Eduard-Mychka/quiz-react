import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Loader from '../../component/UI/Loader/Loader'
import Zoom from 'react-reveal/Zoom';
import axios from '../../axios/axios-quiz'

import './QuizList.scss';

export default class QuizList extends Component {
  state = {
    quizes: [],
    loading: true
  }

  renderQuizes() {
    return this.state.quizes.map(quiz => {
      return (
        <li key={quiz.id}>
          <NavLink to={'/quiz/' + quiz.id}>
            {quiz.name}
          </NavLink>
        </li>
      )
    })
  }

  async componentDidMount() {
    try {
      const response = await axios.get('/quizes.json')

      const quizes = []
      Object.keys(response.data).forEach((key, index) => {
        quizes.push({
          id: key,
          name: `Test number: ${index + 1}`
        })
      })
      this.setState({quizes, loading: false})
    } catch (e) {
      console.log(e)
    }
  }
  

  render() {
    return (
      <div className="quiz-list">
        <div>
          <h1>
            <Zoom left cascade>
              Test List
            </Zoom>
          </h1>
          { 
            this.state.loading 
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