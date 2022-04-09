import React from 'react';

interface TimeSepratorProps {
    char?: string;
}

export const TimeSeprator = ({ char = ' ' }: TimeSepratorProps) => (
    <span className="font-light text-muted">{char}</span>
);
