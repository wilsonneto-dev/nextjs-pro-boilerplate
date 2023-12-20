import '@testing-library/jest-dom'
import {render, screen} from "@testing-library/react";

test('Button renders ok with the text', () => {
    render(<button>Click me</button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
});