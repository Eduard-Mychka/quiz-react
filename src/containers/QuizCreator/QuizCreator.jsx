import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { createControl, validate, validateForm } from '../../form/formFramework'
import Input from '../../component/UI/Input/Input'
import Select from '../../component/UI/Select/Select'
import Slide from 'react-reveal/Slide';
import Tooltip from '@material-ui/core/Tooltip';
import { connect } from 'react-redux';
import { createQuizQuestion, finishCreateQuiz } from '../../store/actions/create';
import './QuizCreator.scss';


function createOptionControl(number) {
  return createControl({
      name: 'option',
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

class QuizCreator extends Component {
  state = {
    isFormValid: false,
    rightAnswerId: 1,
    formControls: createFormControls()
  }

  submitHandler = e => e.preventDefault()
  addQuestionHandler = e => {
    e.preventDefault()

    const {question, option1, option2, option3, option4} = this.state.formControls

    const questionItem = {
      question: question.value,
      id: this.props.quiz.length + 1,
      rightAnswerId: this.state.rightAnswerId,
      answers: [
        {text: option1.value, id: option1.id},
        {text: option2.value, id: option2.id},
        {text: option3.value, id: option3.id},
        {text: option4.value, id: option4.id}
      ]
    }

    this.props.createQuizQuestion(questionItem)

      this.setState({
        isFormValid: false,
        rightAnswerId: 1,
        formControls: createFormControls()
      })
  }

  createQuizHandler = e => {
    e.preventDefault()

    this.setState({
      isFormValid: false,
      rightAnswerId: 1,
      formControls: createFormControls()
    })
    this.props.finishCreateQuiz()
  }

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
            name={control.name}
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
      className='select'
      label="Choose the correct answer"
      value={this.state.rightAnswerId}
      onChange={this.selectChangeHandler}
      options={[
        {text: 'Option 1', value: 1},
        {text: 'Option 2', value: 2},
        {text: 'Option 3', value: 3},
        {text: 'Option 4', value: 4}
      ]}
    />

    return (
      <div className="quiz-creator"> 
        <Tooltip title="Home" placement="right"  className="home">
          <a href="/quiz-react/"><i className="fas fa-home" /></a>
        </Tooltip>        
        <div className="containere">
          <Slide top>
            <form onSubmit={this.submitHandler}>
              <h1>Creation Test</h1>
              <div className="row">
              { this.renderControls() }
              </div>
              { select }
              <div className="d-flex">
                <Button
                    className="w-50 h-25 me-3 "
                    onClick={this.addQuestionHandler}
                    color="primary"
                    size="small"
                    variant="contained"
                    disabled={!this.state.isFormValid}
                  >
                    Add Question
                  </Button>
                  <Button
                    className="w-50 h-25"
                    onClick={this.createQuizHandler}
                    color="secondary"
                    size="small"
                    variant="contained"
                    disabled={this.props.quiz.length === 0}
                  >
                    Create Test
                  </Button>
              </div>
            </form>
          </Slide>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    quiz: state.create.quiz
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createQuizQuestion: item => dispatch(createQuizQuestion(item)),
    finishCreateQuiz: () => dispatch(finishCreateQuiz())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizCreator)