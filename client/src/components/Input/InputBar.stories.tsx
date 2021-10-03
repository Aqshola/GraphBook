// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps } from 'react'

import { Story, Meta } from '@storybook/react'
import InputBar from './InputBar'

//👇 This default export determines where your story goes in the story list
export default {
  title: 'InputBar',
  component: InputBar,
} as Meta

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof InputBar>> = (args) => (
  <InputBar {...args} />
)

export const Base = Template.bind({})
Base.args = {
  placeholder: 'Input default',
}
