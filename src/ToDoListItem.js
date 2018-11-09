import React, { Component } from 'react'
import './ToDoListItem.css'

export default class ToDoList extends Component {
  render() {
    const { text, click, isDone } = this.props

    return (
      <li onClick={click} className={isDone ? 'done' : ''}>
        {text}
      </li>
    )
  }
}
