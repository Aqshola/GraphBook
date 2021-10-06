import React, { ComponentProps } from 'react'

import { Story, Meta } from '@storybook/react'
import Nav from './Nav'

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Nav',
  component: Nav,
} as Meta

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Nav>> = (args) => <Nav {...args} />

export const Base = Template.bind({})
Base.args = {
  className: 'w-screen max-w-screen-sm',
}
