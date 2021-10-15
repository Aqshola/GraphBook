// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps } from 'react'

import { Story, Meta } from '@storybook/react'
import BookCard from './BookCard'

//👇 This default export determines where your story goes in the story list
export default {
  title: 'BookCard',
  component: BookCard,
} as Meta

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof BookCard>> = (args) => (
  <BookCard {...args} />
)

export const Base = Template.bind({})
Base.args = {
  title: 'The Book of Wandering',
  genre: [
    {
      id: '1',
      name: 'Action',
    },
    {
      id: '2',
      name: 'Drama',
    },
  ],
}
