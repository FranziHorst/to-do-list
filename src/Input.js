import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    return (
      <input
        type="text"
        placeholder="Insert Text"
        onKeyUp={event => {
          this.props.keyupfunction(event)
        }}
      />
    )
  }
}
