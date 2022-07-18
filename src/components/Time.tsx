import React from 'react';
import { TimeValue } from './TimeValue';
import { TimeSeprator } from './TimeSeprator';
import useTime from '../hooks/useTime';

export const Time = () => {
    const { hours, minutes, seconds } = useTime();

    return (
        <div className="text-center text-6xl">
            <TimeValue value={hours} />
            <TimeSeprator />
            <TimeValue value={minutes} />
            <TimeSeprator />
            <TimeValue value={seconds} />
        </div>
    );
};
