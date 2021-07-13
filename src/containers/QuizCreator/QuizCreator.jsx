import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

import './QuizCreator.scss';

export default class QuizCreator extends Component {

  state = {
    quiz: [],
    formControls: {
      question: '',
      option1: '',
      option2: '',
      option3: '',
      option4: ''
    }
  }

  submitHandler = e => {
    e.preventDefault()
  }

  addQuestionHandler = () => {}
  createQuizHandler = () => {}

  render() {
    return (
      <div className="quiz-creator"> 
        <div className="containere">
          <h1>Creation Test</h1>
          <form onSubmit={this.submitHandler}>

            <input type="text" />
            <hr />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />

            <select></select>
            <Button
                className="w-50 h-25 me-3"
                onClick={this.addQuestionHandler}
                color="primary"
                size="small"
                variant="contained"
                // disabled={!this.state.isFormValid}
              >
                Add Question
              </Button>
              <Button
                className="w-50 h-25"
                onClick={this.createQuizHandler}
                color="secondary"
                size="small"
                variant="contained"
                // disabled={!this.state.isFormValid}
              >
                Create Test
              </Button>
          </form>
        </div>
      </div>
    )
  }
}
