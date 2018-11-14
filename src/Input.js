import React, { Component } from 'react'
import styled from 'styled-components'

const InputEl = styled.input`
  &[type='text'] {
    height: 20px;
    width: 100%;
    font-family: 'Roboto';
    margin-bottom: 20px;
  }
`

export default class Input extends Component {
  handleKeyUp = event => {
    const input = event.target
    if (event.key === 'Enter') {
      this.props.onEnter(input.value)
      input.value = ''
      input.focus()
    }
  }

  render() {
    return (
      <InputEl
        type="text"
        placeholder="Add your To Do"
        onKeyUp={this.handleKeyUp}
      />
    )
  }
}
