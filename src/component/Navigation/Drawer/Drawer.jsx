import React, { Component } from 'react'
import Backdrop from '../../UI/Backdrop'
import { NavLink } from 'react-router-dom'

import './Drawer.scss'

const links = [
  {to: '/', label: 'Test List', exact: true},
  {to: '/auth', label: 'Authorization', exact: false},
  {to: '/quiz-creator', label: 'Creation Test', exact: false},
]

export default class Drawer extends Component {

  clickHandler = () => {
    this.props.onClose()
  }

  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink 
            to={link.to} 
            exact={link.exact}  
            activeClassName={'active'}
            onClick={this.clickHandler}
          >
            {link.label}
          </NavLink>
        </li>
      )
    }) 
  }

  render() {
    const cls = ['drawer']

    if (!this.props.isOpen) {
      cls.push('close')
    }

    return (
      <React.Fragment>
        <nav className={cls.join(' ')}>
          <ul>
            {this.renderLinks()}
          </ul>
        </nav>
        { this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null }
      </React.Fragment>
      
    )
  }
}
