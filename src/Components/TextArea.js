import React, { Component } from 'react'
import styled from 'styled-components'

const Textarea = styled.textarea`
  width: 100%;
  height: 150px;
  border: 0;
`

export default class TextArea extends Component {
  render() {
    return (
      <div>
        <Textarea />
      </div>
    )
  }
}
