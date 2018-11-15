import React, { Component } from 'react'
import ToggleButton from './ToggleButton'

export default class Config extends Component {
  render() {
    const { showDoneTodos, onToggle } = this.props

    return (
      <section>
        <h2> Config </h2>
        <ToggleButton
          defaultText="Hide done todos"
          alternativeText="Show done Todos"
          isDefault={showDoneTodos}
          onClick={onToggle}
        />
      </section>
    )
  }
}
