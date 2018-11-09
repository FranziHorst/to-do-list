import React, { Component } from 'react'
import './ToDoList.css'

export default class ToDoList extends Component {
  render() {
    const { text, clickDone } = this.props

    return <li onClick={clickDone}>{text}</li>
  }
}
