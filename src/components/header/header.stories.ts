import type { Meta, StoryObj } from '@storybook/react';
import Header from "@/components/header/header";

const meta = {
    title: 'Layout/header',
    component: Header,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
