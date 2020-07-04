import React from 'react';
import FeatherIcon from 'feather-icons-react';

import { Time } from './components/Time';
import { Weather } from './components/Weather';
import { DateValue } from './components/DateValue';
import { Modal } from './components/Modal';
import { Backdrop } from './components/Backdrop';
import { useState } from 'react';

import { useTheme } from './services/theme/useTheme';

import './App.css';

function App() {

    const [activeModal, setActiveModal] = useState(false);

    const openModal = () => setActiveModal(true);
    const closeModel = () => setActiveModal(false);

    // eslint-disable-next-line
    const [theme, setTheme] = useTheme('night-owl');

    const themes = [
        'night-owl',
        'snazzy',
        'github',
        'nord',
    ];

    const onChangeTheme = event => setTheme(event.target.value);

    return (
        <div className="bg-background min-h-screen flex flex-col">
            <div className="p-12 text-white text-xs flex justify-end">
                <button className="opacity-25">
                    <FeatherIcon icon={! activeModal ? 'menu' : 'x'} onClick={openModal} />
                </button>
                {activeModal ? <>
                    <Modal onClick={closeModel}>
                        <label htmlFor="theme">Theme</label>
                        <select id="theme" name="theme" id="theme" onChange={onChangeTheme}>
                            {themes.map(value => <option value={value} selected={value === theme}>{value}</option>)}
                        </select>
                    </Modal>
                    <Backdrop />
                </> : ''}

            </div>
            <div className="flex-grow flex flex-col items-center justify-center font-mono">
                <Time />
                <DateValue />
                <div className="mt-4">
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
