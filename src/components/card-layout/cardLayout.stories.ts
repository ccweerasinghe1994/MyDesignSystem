import { Meta, StoryObj } from "@storybook/react";
import { CardLayout } from "./cardLayout";

const meta = {
  title: "Card Layout",
  component: CardLayout,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof CardLayout>;

export const Primary: Story = {
  args: {},
};
