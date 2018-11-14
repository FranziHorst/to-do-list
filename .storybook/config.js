import { configure, setAddon } from '@storybook/react'
import { addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

function loadStories() {
  require('../src/stories')
}

addDecorator(withKnobs)

configure(loadStories, module)
