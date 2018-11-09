import React, { Component } from 'react'
import './App.css'
import ToDoListItem from './ToDoListItem'
import Input from './Input'

console.clear()

class App extends Component {
  state = {
    todos: []
  }

  addToDoArray = event => {
    if (event.key === 'Enter') {
      const newEntry = [
        { text: event.target.value, done: false },
        ...this.state.todos
      ]
      this.setState({
        todos: newEntry
      })
      event.target.value = ''
    }
  }

  toggleDone = index => {
    const { todos } = this.state
    const newArray = [
      ...todos.slice(0, index),
      { ...todos[index], done: !todos[index].done },
      ...todos.slice(index + 1)
    ]
    this.setState({
      todos: newArray
    })
  }

  deleteListItem = index => {
    const { todos } = this.state
    const newArray = [...todos.slice(0, index), ...todos.slice(index + 1)]
    this.setState({
      todos: newArray
    })
  }

  render() {
    return (
      <div className="layout">
        <Input keyupfunction={this.addToDoArray} />
        <ul>
          {this.state.todos.map((todoItem, index) => (
            <ToDoListItem
              key={index}
              isDone={todoItem.done}
              text={todoItem.text}
              click={() => this.toggleDone(index)}
              deleteEl={() => this.deleteListItem(index)}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default App
