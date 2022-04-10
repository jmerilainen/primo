import React from 'react';
import { TimeValue } from './TimeValue';
import { TimeSeprator } from './TimeSeprator';
import useMounted from '../hooks/useMounted';
import useTime from '../hooks/useTime';

export const Time = () => {
    const mounted = useMounted();
    const time = useTime();

    return (
        <div
            className={`text-6xl text-center transition ease-in-out duration-1000 delay-100 transform ${! mounted ? 'translate-y-12 opacity-0' : ''}`}
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
