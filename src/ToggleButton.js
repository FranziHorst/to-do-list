import React, { Component } from 'react'
import styled from 'styled-components'

const ToggleButtonEl = styled.button`
  width: 100px;
  height: 30px;
  background: #006194;
  border-radius: 10px;
  color: white;

  &.active {
    background: #ffcc00;
    color: #006194;
  }
`

export default class ToggleButton extends Component {
  state = {
    isDefault: this.props.isDefault
  }

  handleToggle = () => {
    this.setState({
      isDefault: !this.state.isDefault
    })
    this.props.onClick()
  }

  render() {
    const { defaultText, alternativeText } = this.props
    const { isDefault } = this.state
    return (
      <ToggleButtonEl
        className={isDefault ? '' : 'active'}
        onClick={this.handleToggle}
      >
        {isDefault ? defaultText : alternativeText}
      </ToggleButtonEl>
    )
  }
}
