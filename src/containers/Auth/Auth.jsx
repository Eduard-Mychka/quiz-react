import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from '../../component/UI/Input/Input'
import './Auth.scss';
import is from 'is_js'
import Slide from 'react-reveal/Fade';
import axios from '../../axios/axios-quiz'

export default class Auth extends Component {

  state = {
    isFormValid: false,
    formControls: {
      email: {
        value: '',
        type: 'email',
        label: 'Email',
        errorMessage: 'Enter correct - email !',
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true
        }
      },
      password: {
        value: '',
        type: 'password',
        label: 'Password',
        errorMessage: 'Enter correct - password !',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6
        }
      }
    }
  }

  loginHandler = async () => {
    const authData = {
      email: this.state.formControls.email.value,
      password: this.state.formControls.password.value,
      returnSecureToken: true
    }
    try {
      const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAsTJqiAJ8JTrTzYJ17B-v0pGvM3-4BzY4', authData)
      console.log(response)
    } catch (e) {
      console.log(e)
    }
  }

  registerHandler = async () => {
    const authData = {
      email: this.state.formControls.email.value,
      password: this.state.formControls.password.value,
      returnSecureToken: true
    }
    try {
      const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAsTJqiAJ8JTrTzYJ17B-v0pGvM3-4BzY4', authData)
      console.log(response)
    } catch (e) {
      console.log(e)
    }
  }

  submitHandler = (event) => {
    event.preventDefault()
  }

  validateControl(value, validation) {
    if (!validation) {
      return true
    }

    let isValid = true 

    if (validation.required) {
      isValid = value.trim() !== '' && isValid
    }

    if (validation.email) {
      isValid = is.email(value) && isValid
    }

    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid
    }

    return isValid
  }

  onChangeHandler = (event, controlName) => {
    const formControls = { ...this.state.formControls }
    const control = { ...formControls[controlName] }

    control.value = event.target.value
    control.touched = true
    control.valid = this.validateControl(control.value, control.validation)

    formControls[controlName] = control

    let isFormValid = true
    Object.keys(formControls).forEach(name => {
      isFormValid = formControls[name].valid && isFormValid
    })

    this.setState({ formControls, isFormValid })
  }

  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName]
      return (
        <Input 
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          errorMessage={control.errorMessage}
          shouldValidate={!!control.validation}
          onChange={event => this.onChangeHandler(event, controlName)}
        />
      )
    })
  }

  render() {
    return (
        <div className="auth">
        <div className="container">
        <Slide top>
          <form onSubmit={this.submitHandler} className="auth-form">
          <h1>Login Form</h1>
            { this.renderInputs() }
            <div className="auth-form-btn">
              <Button
                className="w-50 h-25 me-3"
                onClick={this.loginHandler}
                color="primary"
                size="small"
                variant="contained"
                disabled={!this.state.isFormValid}
              >
                Sign In
              </Button>
              <Button
                className="w-50 h-25"
                onClick={this.registerHandler}
                color="secondary"
                size="small"
                variant="contained"
                disabled={!this.state.isFormValid}
              >
                Sign Up
              </Button>
            </div>
          </form>
          </Slide>
        </div>
      </div>
    )
  }
}
