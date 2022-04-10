import React from 'react';
import { TimeValue } from './TimeValue';
import { TimeSeprator } from './TimeSeprator';
import useTime from '../hooks/useTime';

export const Time = () => {
    const time = useTime();

    return (
        <div className="text-6xl text-center">
            {time.map((value, index) => (
                <React.Fragment key={index}>
                    {index ? <TimeSeprator /> : ''}
                    <TimeValue value={value} />
                </React.Fragment>
            ))}
        </div>
    );
};
