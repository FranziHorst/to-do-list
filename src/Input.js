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
  render() {
    return (
      <InputEl
        type="text"
        placeholder="Add your To Do"
        onKeyUp={event => {
          this.props.keyupfunction(event)
        }}
      />
    )
  }
}
