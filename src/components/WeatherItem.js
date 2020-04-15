import React, { useState } from 'react';
import { useTimeout } from 'beautiful-react-hooks';
import FeatherIcon from 'feather-icons-react';
import { transformIcon } from '../services/icons/helpers';


export const WeatherItem = (props) => {
    const [visible, setVisible] = useState(false);

    const symbol = true;
    const icon = transformIcon(props.icon);
    const delay = (props.delay * 110) + 500;

    useTimeout(() => {
        setVisible(true);
    }, delay);

    return (
        <div className={`p-6 flex flex-col items-center transition ease-in-out duration-700 transform ${! visible ? 'translate-y-8 opacity-0' : ''} hover:-translate-y-2 group`}>
            <div className="text-xs py-4 transition ease-in-out duration-700 transform scale-50 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100">
                {props.time}
            </div>
            <FeatherIcon icon={icon} size="24" className="transition ease-in-out duration-700 group-hover:text-muted" />
            <div className="text-xs py-4 text-primary transition ease-in-out duration-700 transform opacity-50 scale-75 -translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100">
                {props.temperature}{`${symbol ? '°C' : ''}`}
            </div>
        </div>
    );
}
