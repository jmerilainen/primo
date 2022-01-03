import React from 'react';
import FeatherIcon from 'feather-icons-react';

import { Time } from './components/Time';
import { Weather } from './components/Weather';
import { DateValue } from './components/DateValue';
import { Modal } from './components/Modal';
import { Backdrop } from './components/Backdrop';
import { useState } from 'react';

import { useTheme } from './services/theme/useTheme';

function App() {

    const [activeModal, setActiveModal] = useState(false);

    const openModal = () => setActiveModal(true);
    const closeModel = () => setActiveModal(false);

    // eslint-disable-next-line
    const [theme, setTheme] = useTheme('night-owl');

    const themes = [
        'night-owl',
        'snazzy',
        'github',
        'nord',
    ];

    const onChangeTheme = event => setTheme(event.target.value);

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <div className="flex justify-end p-12 text-xs text-white">
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
            <div className="flex flex-col items-center justify-center flex-grow font-mono">
                <Time />
                <DateValue />
                <div className="mt-4">
                    <Weather />
                </div>
            </div>
            <div className="p-12 text-xs text-white opacity-25">
                Primo
            </div>
        </div>
    );
}

export default App;
