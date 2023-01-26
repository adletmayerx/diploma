import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import Switch from "./Switch";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Switch",
  component: Switch,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Switch>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const SwitchStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SwitchStory.args = {
  value: true,
};
