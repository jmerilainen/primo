import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Primo in footer', () => {
  const { getByText } = render(<App />);
  const mainElement = getByText(/Primo/i);
  expect(mainElement).toBeInTheDocument();
});
