import React, { useState } from 'react';
import { useTimeout, useInterval } from 'react-use';

import { TimeValue } from './TimeValue';
import { TimeSeprator } from './TimeSeprator';

const format = (time: number) => (time < 10 ? `0${time}` : time);

const getTime = () => {
    const date = new Date();
    return [date.getHours(), date.getMinutes(), date.getSeconds()].map(format);
};

export const Time = () => {
    const [time, setTime] = useState(getTime());
    const [visible] = useTimeout(100);

    useInterval(() => {
        setTime(getTime());
    }, 1000);

    return (
        <div
            className={`text-6xl text-center transition ease-in-out duration-1000 transform ${
                !visible() ? 'translate-y-12 opacity-0' : ''
            }`}
        >
            {time.map((value, index) => (
                <React.Fragment key={index}>
                    {index ? <TimeSeprator /> : ''}
                    <TimeValue value={value} />
                </React.Fragment>
            ))}
        </div>
    );
};
