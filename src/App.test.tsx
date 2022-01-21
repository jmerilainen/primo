import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Primo in footer', () => {
    render(<App />)
    const mainElement = screen.getByText(/Primo/i);
    expect(mainElement).toBeInTheDocument();
});
