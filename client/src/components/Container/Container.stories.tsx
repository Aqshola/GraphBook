
import React, { ComponentProps } from 'react';

import { Story, Meta } from '@storybook/react';
import Container from './Container';



//👇 This default export determines where your story goes in the story list
export default {
    title: 'Container',
    component: Container,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Container>> = (args) => <Container {...args} />;

export const Base = Template.bind({})
Base.args = {
    className: "block min-h-screen border-2",
    size: "xl"
}



