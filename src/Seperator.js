import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  @import url('https://fonts.googleapis.com/css?family=Patrick+Hand');
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

const Line = styled.div`
  width: 100%;
  margin: 0 10px 0;
  border-bottom: ${props => props.width || 4}px solid black;
`
const Text = styled.span`
  white-space: nowrap;
  font-family: 'Patrick Hand', cursive;
`

export default class Seperator extends Component {
  render() {
    return (
      <Wrapper>
        <Line width={2} />
        <Text>{this.props.text}</Text>
        <Line width={2} />
      </Wrapper>
    )
  }
}
