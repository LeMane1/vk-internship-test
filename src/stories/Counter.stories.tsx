import type { Meta, StoryObj } from '@storybook/react';
import {Counter} from 'src/components/counter/Counter'

const meta = {
  title: 'App/Counter',
  component: Counter,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes:{
    type:{
      control: { type: 'radio' },
      options: ['primary', 'secondary']
    },
    size:{
      control:{ type: 'radio' },
      options: [28, 36, 56, 20, 24]
    },
  },
  args: {
    type: 'primary',
    size: 24,
    hasStroke: false,
    quantity: 0,
    hasPulse: false,
    customColor: ''
  },
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryCounter: Story = {
  args: {
    quantity: 23,
    size: 24,
  },
};

export const SecondaryCounter: Story = {
  args: {
    type: 'secondary',
    quantity: 23,
    size: 24,
  },
};

export const PulsedCounter: Story = {
  args: {
    type: 'primary',
    quantity: 23,
    size: 8,
    hasPulse: true
  },
};

export const CustomColorCounter: Story = {
  args: {
    type: 'primary',
    quantity: 23,
    size: 24,
    customColor: '#d32424'
  },
};