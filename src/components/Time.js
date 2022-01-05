import React, { useState } from 'react';
import { useTimeout, useInterval } from 'beautiful-react-hooks';

import { TimeValue } from './TimeValue';
import { TimeSeprator } from './TimeSeprator';

const format = (time) => time < 10 ? `0${time}` : time;

const getTime = () => {
  const date = new Date();
  return [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ].map(format);
}

export const Time = () => {
    const [time, setTime] = useState(getTime());
    const [visible, setVisible] = useState(false);

    useInterval(() => {
      setTime(getTime());
    }, 1000)

    useTimeout(() => {
        setVisible(true);
    }, 100);

    return (
        <div className={`text-6xl text-center transition ease-in-out duration-1000 transform ${! visible ? 'translate-y-12 opacity-0' : ''}`}>
            {time.map((value, index) => (
              <React.Fragment key={index}>
                {index ? <TimeSeprator /> : ''}
                <TimeValue value={value} />
              </React.Fragment>
            ))}
        </div>
    );
}
