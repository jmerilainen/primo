import React from 'react';

interface TimeValueProps {
    value: number | string;
}

export const TimeValue = ({ value }: TimeValueProps) => {
    return <span className="text-primary">{value}</span>;
};
