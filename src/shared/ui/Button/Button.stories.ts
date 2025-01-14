import { Button, buttonVariant } from './Button';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: {
      type: 'string',
      control: {
        type: 'text',
      },
      description: 'Текст кнопки',
      defaultValue: 'Текст по умолчанию',
    },
    variant: {
      options: Object.keys(buttonVariant),
      control: { type: 'select' },
      description: 'Вариант кнопки',
    },
  },
};

export const Default: Story = {
  args: {
    children: 'Текст по умолчанию',
  },
};

export default meta;
