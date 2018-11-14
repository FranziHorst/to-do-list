import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import ToDoListItem from '../ToDoListItem'
import Seperator from '../Seperator'
import Counter from '../Counter'
import Input from '../Input'
import ToggleButton from '../ToggleButton'
import ProgressBar from '../ProgressBar'
import GlobalStyle from '../GlobalStyle'
import { text, boolean, number } from '@storybook/addon-knobs'

storiesOf('ToDoListItem', module)
  .add('with short text', () => (
    <React.Fragment>
      <ToDoListItem
        text="Hello world"
        isDone={false}
        click={action('toggle')}
        deleteEl={action('delete')}
      />
      <GlobalStyle />
    </React.Fragment>
  ))
  .add('with long text', () => (
    <React.Fragment>
      <ToDoListItem
        text="Hello world my Name is Lisa Popaworth"
        isDone={false}
        click={action('toggle')}
        deleteEl={action('delete')}
      />
      <GlobalStyle />
    </React.Fragment>
  ))
  .add('with done text', () => (
    <React.Fragment>
      <ToDoListItem
        text="Have a great day"
        isDone={true}
        click={action('toggle')}
        deleteEl={action('delete')}
      />
      <GlobalStyle />
    </React.Fragment>
  ))

storiesOf('Seperator', module)
  .add('with short text', () => <Seperator text="Hello world" />)
  .add('with long text', () => (
    <Seperator text={text('Display text', 'Hello World')} />
  ))

storiesOf('ProgressBar', module)
  .add('20 percentage', () => <ProgressBar percentage={0.2} />)
  .add('50 percentage', () => <ProgressBar percentage={0.5} />)
  .add('70 percentage', () => <ProgressBar percentage={0.7} />)
  .add('100 percentage', () => <ProgressBar percentage={1} />)

storiesOf('Counter', module).add('counter headline', () => <Counter />)

storiesOf('Input', module).add('input', () => (
  <Input onEnter={action('Enter is pressed')} />
))

storiesOf('ToggleButton', module)
  .add('Togglebutton with default Text', () => (
    <ToggleButton
      defaultText="default text"
      onClick={action('toggle')}
      isDefault={true}
    />
  ))
  .add('Togglebutton with alternative Text', () => (
    <ToggleButton
      alternativeText="alt. text"
      onClick={action('toggle')}
      isDefault={false}
    />
  ))
