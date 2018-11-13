import React, { Component } from 'react'
import uid from 'uid'
import ToDoListItem from './ToDoListItem'
import Input from './Input'
import Counter from './Counter'
import Seperator from './Seperator'
import styled from 'styled-components'

console.clear()

const Layout = styled.div`
  box-sizing: border-box;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #0d2843 155px, #2980b9);
`

const StyleEl = styled.div`
  width: 436px;
  position: relative;
  height: 436px;
  background: #ffcc00;
  border-radius: 29% 71% 22% 78% / 57% 72% 28% 43%;
`

const Container = styled.main`
  background: white;
  width: 300px;
  min-height: 50vh;
  margin: auto;
  border-radius: 10px;
  padding: 15px;
  position: absolute;
`

const ListContainer = styled.section`
  background: #f9f9f9;
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
`

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
      <Layout>
        <StyleEl />
        <Container>
          <header>
            <Counter num={this.counterToDo()} />
          </header>
          <section>
            <Input keyupfunction={this.addToDoArray} />
          </section>

          <ListContainer className="listContainer">
            <Seperator text="TODO" />
            {this.renderOpenTodos()}
            <Seperator text="DONE" />
            {this.renderDoneTodos()}
          </ListContainer>
        </Container>
      </Layout>
    )
  }
}
export default App
