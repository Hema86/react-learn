import React, { Component } from 'react'
import User from './User'

export default class Users extends Component {
  state = {
    users: [
      {name:'John', age: 20},
      {name:'Jill', age: 30},
      {name:'Peter', age: 40}
    ],
    title:'Users List'
  }

  makeMeYounger = () => {

    const newUser = this.state.users.map(user => {
      const tempUser=user
      if(tempUser.age > 10) {
      tempUser.age -=10
      }
      return tempUser
    })
    this.setState({
      users: newUser
    })
  }
  render () {
    return (
      <div>
        <button onClick={this.makeMeYounger}>make us 10 year younger</button>
        <h1>{this.state.title}</h1>
       {
         this.state.users.map(user => {
           return <User age={user.age}>{user.name}</User>
         })
       }
      </div>
    )
  }
}
