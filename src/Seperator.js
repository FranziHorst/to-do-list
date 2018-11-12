import React, { Component } from 'react'
import './Seperator.css'

export default class Seperator extends Component {
  render() {
    return (
      <section className="Seperator">
        <div className="hr" />
        <span>{this.props.text}</span>
        <div className="hr" />
      </section>
    )
  }
}
