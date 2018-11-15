import React, { Component } from 'react'
import styled from 'styled-components'

const HeadlineStyle = styled.h2`
  font-family: 'Patrick Hand', cursive;
  font-size: 35px;
  margin-top: 10px;
  margin-bottom: 10px;
`

export default class Counter extends Component {
  render() {
    return <HeadlineStyle>To Do done: {this.props.num}</HeadlineStyle>
  }
}
