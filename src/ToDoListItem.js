import React, { Component } from 'react'
import styled from 'styled-components'

const ListItem = styled.li`
  display: flex;
  align-items: flex-end;
  font-family: 'Roboto';
  font-size: 14px;
  width: 290px;
  background: #ffcc00;
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 5px;

  &:nth-child(even) {
    background: #ebe1d3;
  }
`

const DeleteButton = styled.button`
  background: #006194;
  color: white;
  margin-left: auto;
  border: 0;
  border-radius: 5px;

  &:hover {
    background: #ececec;
    color: #006194;
  }
`

const Text = styled.span`
  &.done {
    color: #0080bc91;
    text-decoration: line-through;
  }
`

export default class ToDoListItem extends Component {
  render() {
    const { text, click, isDone, deleteEl } = this.props

    return (
      <ListItem>
        <Text onClick={click} className={isDone ? 'done' : ''}>
          {text}
        </Text>
        <DeleteButton onClick={deleteEl}>&times;</DeleteButton>
      </ListItem>
    )
  }
}
