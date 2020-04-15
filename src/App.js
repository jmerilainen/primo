import React from 'react';
import FeatherIcon from 'feather-icons-react';

import { Time } from './components/Time';
import { Weather } from './components/Weather';
import { DateValue } from './components/DateValue';
import { Modal } from './components/Modal';
import { Backdrop } from './components/Backdrop';
import { useState } from 'react';

import './App.css';

function App() {

    const [activeModal, setActiveModal] = useState(false);

    const openModal = () => setActiveModal(true);
    const closeModel = () => setActiveModal(false);

    return (
        <div className="theme-night-owl bg-background min-h-screen flex flex-col">
            <div className="p-12 text-white text-xs flex justify-end">
                <div className="opacity-25">
                    <FeatherIcon icon={! activeModal ? 'menu' : 'x'} onClick={openModal} />
                </div>
                {activeModal ? <>
                    <Modal onClick={closeModel} />
                    <Backdrop />
                </> : ''}

            </div>
            <div className="flex-grow flex flex-col items-center justify-center font-mono">
                <Time />
                <DateValue />
                <div className="mt-16">
                    <Weather />
                </div>
            </div>
            <div className="p-12 text-white text-xs opacity-25">
                Primo
            </div>
        </div>
    );
}

export default App;
