import React from 'react';

export const Modal = (props) => {
    return (
        <div onClick={() => props.onClick()} className="absolute inset-0 flex flex-col items-center justify-center z-50">
            <div className="w-full max-w-4xl p-8">
                <div className="text-gray-900 bg-gray-200 p-8">
                    hello
                </div>
            </div>
        </div>
    );
};
