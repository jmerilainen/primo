import React from 'react';
import { useTimeout } from 'react-use';
import FeatherIcon from 'feather-icons-react';
import { transformIcon } from '../services/icons/helpers';
import type { Forecast } from '../types';

export const WeatherItem = (props: Omit<Forecast, 'timestamp'> & { delay: number }) => {

    const symbol = true;
    const icon = transformIcon(props.icon);
    const delay = (props.delay * 110) + 500;
    const [visible] = useTimeout(delay);

    return (
        <div className={`p-6 flex flex-col items-center transition ease-in-out duration-700 transform ${! visible() ? 'translate-y-8 opacity-0' : ''} hover:-translate-y-2 group`}>
            <div className="py-4 text-xs transition duration-700 ease-in-out transform scale-50 translate-y-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100">
                {props.time}
            </div>
            <FeatherIcon icon={icon} size="24" className="transition duration-700 ease-in-out text-foreground opacity-40 group-hover:opacity-100" />
            <div className="py-4 text-xs transition duration-700 ease-in-out transform scale-75 -translate-y-3 opacity-50 text-primary group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100">
                {props.temperature}{`${symbol ? '°C' : ''}`}
            </div>
        </div>
    );
}
