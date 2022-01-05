import React from 'react';
import { format } from 'date-fns';

export const DateValue = () => {
    const value = format(new Date(), 'eeee, MMMM d')

    return (
        <div>
            <span className="text-sm text-muted">{value}</span>
        </div>
    );
}
