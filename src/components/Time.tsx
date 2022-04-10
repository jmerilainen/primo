import React from 'react';
import { TimeValue } from './TimeValue';
import { TimeSeprator } from './TimeSeprator';
import useTime from '../hooks/useTime';

export const Time = () => {
    const { hours, minutes, seconds } = useTime();

    return (
        <div className="text-6xl text-center">
            <TimeValue value={hours} />
            <TimeSeprator />
            <TimeValue value={minutes} />
            <TimeSeprator />
            <TimeValue value={seconds} />
        </div>
    );
};
