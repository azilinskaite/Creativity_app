import type { Meta, StoryObj } from "@storybook/nextjs";
import Button from "../components/Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Login: Story = {
  args: {
    children: "Log In",
    variant: "primary",
  },
};
export const SignUp: Story = {
  args: {
    children: "Sign Up",
    variant: "secondary",
  },
};

