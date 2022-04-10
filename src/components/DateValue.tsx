import React from 'react';

export const DateValue = () => {
    const now = new Date();
    const value = new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'long', day: 'numeric'}).format(now);

    return (
        <span className="text-sm text-muted">{value}</span>
    );
};
