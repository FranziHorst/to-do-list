import React, { Component } from 'react'
import uid from 'uid'
import './App.css'
import ToDoListItem from './ToDoListItem'
import Input from './Input'
import Counter from './Counter'
import Seperator from './Seperator'

console.clear()

class App extends Component {
  state = {
    todos: this.load()
  }

  addToDoArray = event => {
    if (event.key === 'Enter') {
      const newEntry = [
        { text: event.target.value, done: false, id: uid() },
        ...this.state.todos
      ]
      this.setState({
        todos: newEntry
      })
      event.target.value = ''
    }
  }

  toggleDone = id => {
    const { todos } = this.state
    const index = todos.findIndex(todo => todo.id === id)
    const newArray = [
      ...todos.slice(0, index),
      { ...todos[index], done: !todos[index].done },
      ...todos.slice(index + 1)
    ]
    this.setState({
      todos: newArray
    })
  }

  deleteListItem = id => {
    const { todos } = this.state
    const index = todos.findIndex(todo => todo.id === id)
    const newArray = [...todos.slice(0, index), ...todos.slice(index + 1)]
    this.setState({
      todos: newArray
    })
  }

  counterToDo = () => {
    return this.state.todos.filter(item => item.done).length
  }

  save() {
    localStorage.setItem('todo-app--todos', JSON.stringify(this.state.todos))
  }

  load() {
    try {
      return JSON.parse(localStorage.getItem('todo-app--todos')) || []
    } catch (err) {
      return []
    }
  }

  renderOpenTodos() {
    return this.state.todos
      .filter(todo => !todo.done)
      .map(todo => (
        <ToDoListItem
          key={todo.id}
          text={todo.text}
          isDone={todo.done}
          click={() => this.toggleDone(todo.id)}
          deleteEl={() => this.deleteListItem(todo.id)}
        />
      ))
  }

  renderDoneTodos() {
    return this.state.todos
      .filter(todo => todo.done)
      .map(todo => (
        <ToDoListItem
          key={todo.id}
          text={todo.text}
          isDone={todo.done}
          click={() => this.toggleDone(todo.id)}
          deleteEl={() => this.deleteListItem(todo.id)}
        />
      ))
  }

  render() {
    this.save()
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
            <Seperator text="TODO" />
            {this.renderOpenTodos()}
            <Seperator text="DONE" />
            {this.renderDoneTodos()}
          </section>
        </main>
      </div>
    )
  }
}
export default App
