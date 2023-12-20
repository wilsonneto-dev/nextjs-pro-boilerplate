import type { Meta, StoryObj } from '@storybook/react';
import Button from "@/components/button/button"

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        children: {
            type: 'string',
            description: 'Button text',
            defaultValue: 'Click me',
            control: {
                type: 'text',
            },
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Click me',
    },
};
