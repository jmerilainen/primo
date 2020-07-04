import React from 'react';
import FeatherIcon from 'feather-icons-react';

export const Modal = (props) => {
    return (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-50">
            <div className="w-full max-w-3xl p-8">
                <div className="text-gray-900 bg-gray-200 p-8">
                    <div className="flex justify-end">
                        <button onClick={() => props.onClick()}>
                            <FeatherIcon icon="x" />
                        </button>
                    </div>
                    {props.children}
                </div>
            </div>
        </div>
    );
};
