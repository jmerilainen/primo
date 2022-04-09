import React from 'react';
import { render, screen } from '@testing-library/react';
import { Modal } from './Modal';

test('renders Modal', () => {
    render(<Modal onClick={() => console.log('close')}>Inner</Modal>);
    const mainElement = screen.getByText(/Inner/i);
    expect(mainElement).toBeInTheDocument();
});
