import React, { Component } from 'react'
import User from './User'

export default class Users extends Component {
  render () {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <User >John</User>
        <User age='30'>Jill</User>
        <User age='40'>Peter</User>
      </div>
    )
  }
}
