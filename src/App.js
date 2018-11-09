import React, { Component } from 'react'
import './App.css'
import ToDoList from './ToDoList'
import Input from './Input'

class App extends Component {
  todos = ['coding', 'sleep']

  render() {
    return (
      <div className="layout">
        <ul>
          {this.todos.map(todoItem => (
            <ToDoList text={todoItem} onKeyup={() => this.Enter} />
          ))}
        </ul>
      </div>
    )
  }
}
export default App
