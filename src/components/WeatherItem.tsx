import React from 'react';
import FeatherIcon from 'feather-icons-react';
import { transformIcon } from '../services/icons/helpers';
import type { Forecast } from '../types';
import useMounted from '../hooks/useMounted';

export const WeatherItem = (
    props: Omit<Forecast, 'timestamp'> & { delay: number }
) => {
    const mounted = useMounted();
    const symbol = '°C';
    const icon = transformIcon(props.icon);
    const delay = props.delay * 110 + 500;

    return (
        <div
            style={{'--delay': delay + 'ms'} as React.CSSProperties}
            className={`p-6 flex flex-col items-center transition ease-in-out duration-700 delay-[var(--delay)]  transform 'translate-y-8 hover:-translate-y-2 group ${! mounted ? 'opacity-0' : ''}`}
        >
            <div className="py-4 text-xs transition duration-700 ease-in-out transform scale-50 translate-y-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100">
                {props.time}
            </div>
            <FeatherIcon
                icon={icon}
                size="24"
                className="transition duration-700 ease-in-out text-foreground opacity-40 group-hover:opacity-100"
            />
            <div className="py-4 text-xs transition duration-700 ease-in-out transform scale-75 -translate-y-3 opacity-50 text-primary group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100">
                {props.temperature}{symbol}
            </div>
        </div>
    );
};
