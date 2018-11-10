import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    return (
      <input
        type="text"
        placeholder="Add your To Do"
        onKeyUp={event => {
          this.props.keyupfunction(event)
        }}
      />
    )
  }
}
