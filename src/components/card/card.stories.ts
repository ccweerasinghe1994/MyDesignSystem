import { Meta, StoryObj } from "@storybook/react";
import { Card } from "./card";

const meta = {
  title: "Card",
  component: Card,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    brand: "react",
    key: "react",
  },
};
