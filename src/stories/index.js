import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import ToDoListItem from '../Components/ToDoListItem'
import Seperator from '../Components/Seperator'
import Counter from '../Components/Counter'
import Input from '../Components/Input'
import ToggleButton from '../Components/ToggleButton'
import ProgressBar from '../Components/ProgressBar'
import GlobalStyle from '../Components/GlobalStyle'
import { text, boolean, number } from '@storybook/addon-knobs'

storiesOf('ToDoListItem', module).add('with short text', () => (
  <React.Fragment>
    <ToDoListItem
      text={text('Display text', 'Hello World')}
      isDone={boolean('False', false)}
      click={action('toggle')}
      deleteEl={action('delete')}
    />

    <ToDoListItem
      text="Hello world my Name is Lisa Popaworth"
      isDone={false}
      click={action('toggle')}
      deleteEl={action('delete')}
    />
    <ToDoListItem
      text="Have a great day"
      isDone={true}
      click={action('toggle')}
      deleteEl={action('delete')}
    />
    <GlobalStyle />
  </React.Fragment>
))

storiesOf('Seperator', module).add('edit long text', () => (
  <Seperator text={text('Seperator text', 'Hello World')} />
))

storiesOf('ProgressBar', module).add('0% / 20% / 50% / 70% / 100%', () => (
  <React.Fragment>
    <ProgressBar percentage={0} />
    <ProgressBar percentage={0.2} />
    <ProgressBar percentage={0.5} />
    <ProgressBar percentage={0.7} />
    <ProgressBar percentage={1} />
  </React.Fragment>
))

storiesOf('Counter', module).add('counter headline', () => (
  <Counter num={number('Label, defaultNumber)')} />
))

storiesOf('Input', module).add('input', () => (
  <Input onEnter={action('Enter is pressed')} />
))

storiesOf('ToggleButton', module)
  .add('Togglebutton with default Text', () => (
    <ToggleButton
      defaultText="default text"
      onClick={action('toggle')}
      isDefault={boolean('True', true)}
    />
  ))
  .add('Togglebutton with alternative Text', () => (
    <ToggleButton
      alternativeText="alt. text"
      onClick={action('toggle')}
      isDefault={boolean('False', false)}
    />
  ))
