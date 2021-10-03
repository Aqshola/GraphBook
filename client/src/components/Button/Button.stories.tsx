// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps } from 'react'

import { Story, Meta } from '@storybook/react'
import Button from './Button'

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Button',
  component: Button,
} as Meta

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Button>> = (args) => (
  <Button {...args} />
)

export const Base = Template.bind({})
Base.args = {
  variant: 'base',
  children: 'Base Button',
}

export const Variants = () => {
  return (
    <div className="flex space-x-10">
      <Button variant="primary" Btnsize="md">
        Primary
      </Button>
      <Button variant="secondary" Btnsize="md">
        Secondary
      </Button>
      <Button variant="outline-primary" Btnsize="md">
        Outline Primary
      </Button>
      <Button variant="outline-secondary" Btnsize="md">
        Outline Secondary
      </Button>
    </div>
  )
}

export const Size = () => {
  return (
    <div className="space-x-10">
      <Button variant="primary" Btnsize="lg">
        Large
      </Button>
      <Button variant="primary" Btnsize="md">
        Medium
      </Button>
      <Button variant="primary" Btnsize="sm">
        Small
      </Button>
    </div>
  )
}
