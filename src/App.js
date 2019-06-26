import React, { Component } from 'react'
import User from './Users/Users'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <User title='Users lists' />
      </div>
    )
  }
}

export default App
