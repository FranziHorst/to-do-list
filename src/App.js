import React, { Component } from 'react'
import './App.css'
import ToDoListItem from './ToDoListItem'
import Input from './Input'
import Counter from './Counter'

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

  counterToDo = () => {
    return this.state.todos.filter(item => item.done).length
  }

  render() {
    return (
      <div className="layout">
        <div className="styleEl" />
        <main className="container">
          <header>
            <Counter num={this.counterToDo()} />
          </header>
          <section>
            <Input keyupfunction={this.addToDoArray} />
          </section>
          <section className="listContainer">
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
          </section>
        </main>
      </div>
    )
  }
}
export default App
