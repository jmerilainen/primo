import React from 'react';
import { render, screen } from '@testing-library/react';
import { WeatherItem } from './WeatherItem';


test('renders Modal', () => {
    render(<WeatherItem
        time="10:00"
        temperature={20}
        icon="clody"
    />);
    const mainElement = screen.getByText('20°C');
    expect(mainElement).toBeInTheDocument();
});
