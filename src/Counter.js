import React, { Component } from 'react'
import './App.css'

export default class Counter extends Component {
  render() {
    return <h2>To Do done: {this.props.num}</h2>
  }
}
