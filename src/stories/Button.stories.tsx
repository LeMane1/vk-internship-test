import type { Meta, StoryObj } from '@storybook/react';
import { Button } from 'src/components/button/Button';
import { fn } from '@storybook/test';
import type { ICounterProps } from 'src/components/counter/Counter';

const meta = {
  title: 'App/Button',
  component: Button,
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
      options: [28, 36, 56]
    },
  },
  args: {
    children: 'Do anything',
    type: 'primary',
    size: 56,
    isActive: true,
    isLoading: false,
    counter: undefined,
    onClick: fn
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryButton: Story = {
  args: {
    size: 56,
  },
};

export const SecondaryButton: Story = {
  args: {
    type: 'secondary',
    size: 56,
  },
};

export const ButtonWithCounter: Story = {
  args: {
    type: 'primary',
    size: 56,
    counter: {
      quantity: 23,
      customColor: '#FFFFFF20'
    } as ICounterProps
  }
}

export const LoadingState: Story = {
  args: {
    type: 'primary',
    isLoading: true,
    size: 56,
  }
}

export const InactiveState: Story = {
  args: {
    type: 'primary',
    isActive: false,
    size: 56,
  }
}