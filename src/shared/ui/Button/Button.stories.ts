import { Button, buttonVariant } from './ui/Button';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Кнопка с различными вариантами стилей и состояний.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      type: 'string',
      control: 'text',
      description: 'Текст, отображаемый на кнопке.',
      defaultValue: 'Текст по умолчанию',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Текст по умолчанию' },
      },
    },
    variant: {
      options: Object.keys(buttonVariant),
      control: 'select',
      description: 'Вариант стиля кнопки.',
      defaultValue: 'primary',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    isActive: {
      control: 'boolean',
      description: 'Активное состояние кнопки.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    className: {
      control: 'text',
      description: 'Дополнительные CSS-классы для кнопки.',
      table: {
        type: { summary: 'string' },
      },
    },
    ref: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    children: 'Текст по умолчанию',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Вторичная кнопка',
    variant: 'secondary',
  },
};

export const Active: Story = {
  args: {
    children: 'Активная кнопка',
    isActive: true,
  },
};

export const CustomClass: Story = {
  args: {
    children: 'Кнопка с классом',
    className: 'custom-class',
  },
};
