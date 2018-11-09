import React, { Component } from 'react'
import './App.css'
import ToDoList from './ToDoList'
import Input from './Input'

console.clear()

class App extends Component {
  state = {
    todos: [
      { text: 'coding', done: false },
      { text: 'sleep', done: false },
      { text: 'training', done: false }
    ]
  }

  render() {
    return (
      <div className="layout">
        <ul>
          {this.state.todos.map((todoItem, index) => (
            <ToDoList
              key={index}
              text={todoItem.text}
              onKeyup={() => this.Enter}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default App
