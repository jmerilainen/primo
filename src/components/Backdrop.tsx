import React from 'react';

export const Backdrop = () => {
    return (
        <div className="absolute inset-0 z-40 flex flex-col items-center justify-center opacity-75 bg-background"></div>
    );
};
