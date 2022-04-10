import React, { useEffect, useState } from 'react';

const format = (time: number) => (time < 10 ? `0${time}` : time);

const getTime = () => {
    const date = new Date();
    return [date.getHours(), date.getMinutes(), date.getSeconds()].map(format);
};

export default function useTime() {
    const [time, setTime] = useState(getTime());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTime(getTime());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return time;
}
