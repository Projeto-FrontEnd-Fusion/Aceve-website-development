import React from "react";
import { Meta, Story } from "@storybook/react";
import { ButtonPrimarySmall, IButtonItem } from "../Menu/Button";

export default {
  title: "Components/ButtonItem", // Este é o título que aparecerá no painel do Storybook
  component: ButtonPrimarySmall, // Este é o componente que você está testando
} as Meta;

const Template: Story<IButtonItem> = (args: any) => (
  <ButtonPrimarySmall {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: "Primary Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: "Disabled Button",
  disabled: true,
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  title: "Custom Size Button",
  style: { width: "200px", height: "50px" },
};
