import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Shared/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ButtonStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ButtonStory.args = {
  text: 'button',
};


