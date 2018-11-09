import React, { Component } from 'react'
import './ToDoListItem.css'

export default class ToDoListItem extends Component {
  render() {
    const { text, click, isDone, deleteEl } = this.props

    return (
      <li>
        <span onClick={click} className={isDone ? 'done' : ''}>
          {text}
        </span>
        <button onClick={deleteEl}>X</button>
      </li>
    )
  }
}
