import React from 'react';
import FeatherIcon from 'feather-icons-react';
import type { Forecast } from '../types';
import useIcon from '../hooks/useIcon';

export const WeatherItem = (props: Omit<Forecast, 'timestamp'>) => {
    const symbol = '°C';
    const icon = useIcon(props.icon);

    return (
        <div className="flex flex-col items-center transition duration-700 ease-in-out transform hover:-translate-y-2 group">
            <div className="py-4 text-xs transition duration-700 ease-in-out transform scale-50 translate-y-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100">
                {props.time}
            </div>
            <FeatherIcon
                icon={icon}
                size="24"
                className="transition duration-700 ease-in-out text-foreground opacity-40 group-hover:opacity-100"
            />
            <div className="py-4 text-xs transition duration-700 ease-in-out transform scale-75 -translate-y-3 opacity-50 text-primary group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100">
                {props.temperature}
                {symbol}
            </div>
        </div>
    );
};
