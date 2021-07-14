import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { createControl, validate, validateForm } from '../../form/formFramework'
import Input from '../../component/UI/Input/Input'
import Select from '../../component/UI/Select/Select'
import Zoom from 'react-reveal/Zoom';

import './QuizCreator.scss';

function createOptionControl(number) {
  return createControl({
      label: `Option ${number}`,
      errorMessage: 'Value cannot be empty',
      id: number
  }, { required: true })
}

function createFormControls() {
  return {
    question: createControl({
      label: 'Enter a question',
      errorMessage: 'The question cannot be empty'
    }, { required: true }),
    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4)
  }
}

export default class QuizCreator extends Component {
  state = {
    quiz: [],
    isFormValid: false,
    rightAnswerId: 1,
    formControls: createFormControls()
  }

  submitHandler = e => {
    e.preventDefault()
  }

  addQuestionHandler = () => {}
  createQuizHandler = () => {}

  changeHandler = (value, controlName) => {
    const formControls = { ...this.state.formControls }
    const control = { ...formControls[controlName] }

    control.touched = true
    control.value = value
    control.valid = validate(control.value, control.validation)

    formControls[controlName] = control

    this.setState({ 
      formControls, 
      isFormValid: validateForm(formControls)
    })
  }

  renderControls() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName]

      return (
        <React.Fragment key={controlName + index}>
          <Input 
            label={control.label}
            value={control.value}
            valid={control.valid}
            shouldValidate={!!control.validation}
            touched={control.touched}
            errorMessage={control.errorMessage}
            onChange={event => this.changeHandler(event.target.value, controlName)}
          />
        </React.Fragment>
      )
    })
  }

  selectChangeHandler = e => {
    this.setState({rightAnswerId: +e.target.value})
  }

  render() {
    const select = <Select 
      label="Choose the correct answer"
      value={this.state.rightAnswerId}
      onChange={this.selectChangeHandler}
      options={[
        {text: 1, value: 1},
        {text: 2, value: 2},
        {text: 3, value: 3},
        {text: 4, value: 4}
      ]}
    />

    return (
      <div className="quiz-creator"> 
        <div className="containere">
          <Zoom top>
            <form onSubmit={this.submitHandler}>
              <h1>Creation Test</h1>
              <div className="row">
              { this.renderControls() }
              </div>
             
              { select }
              <div className="btn">
                <Button
                    className="w-50 h-25 me-3 text-white"
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
              </div>
            </form>
          </Zoom>
        </div>
      </div>
    )
  }
}
