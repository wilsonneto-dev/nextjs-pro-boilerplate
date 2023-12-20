import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from "@/components/header/header";

test('contains the necessary links', () => {
    render(<Header />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Mission')).toBeInTheDocument();
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
});

test('contains a quotation button', () => {
    render(<Header />);
    const button = screen.getByRole('button', { name: 'Contact' });
    expect(button).toBeInTheDocument();
});
