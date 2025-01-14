import { Navbar } from './ui/Navbar';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Navbar>;

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  tags: ['autodocs'],
};

export const Default: Story = {
  args: {},
};

export default meta;
