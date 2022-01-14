import React from 'react';
import FeatherIcon from 'feather-icons-react';
import { motion, AnimatePresence } from 'framer-motion';

import { Time } from './components/Time';
import { Weather } from './components/Weather';
import { DateValue } from './components/DateValue';
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
        <div className="flex flex-col min-h-screen transition-colors duration-700 bg-background">
            <div className="flex justify-end p-12 text-xs text-foreground">
                <div className="relative space-y-2 text-right">
                    <AnimatePresence exitBeforeEnter initial={false}>
                        <button
                            className="z-50 p-4 -m-4 transition opacity-25 hover:opacity-90"
                            onClick={() => activeModal ? closeModel() : openModal() }
                        >
                            {activeModal ? (
                                <motion.span
                                    className="block"
                                    key="open"
                                    animate={{ opacity: 1, scale: 1 }}
                                    initial={{ opacity: 0, scale: 0 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    <FeatherIcon icon="x" />
                                </motion.span>
                            ): (
                                <motion.span
                                    className="block"
                                    key="closed"
                                    animate={{ opacity: 1, scale: 1 }}
                                    initial={{ opacity: 0, scale: 0 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    <FeatherIcon icon="eye" />
                                </motion.span>
                            )}
                        </button>
                    </AnimatePresence>
                    <AnimatePresence>
                    {activeModal ? (
                    <>
                        <div className="absolute right-0 w-40">
                            <ul className="grid gap-1">
                                {themes.map((value, index) => (
                                    <motion.li
                                        initial={{ opacity: 0, translateX: '1rem' }}
                                        animate={{ opacity: 1, translateX: 0 }}
                                        exit={{ opacity: 0, translateX: '1rem' }}
                                        transition={{ duration: 0.2, delay: 0 + (index * 0.05) }}
                                        key={index}
                                    >
                                        <button className="transition hover:scale-125" onClick={() => setTheme(value)}>

                                            { theme === value ? (
                                            <>
                                                <span className="pr-1 text-primary">{value}</span>
                                                <span className="text-primary">•</span>
                                            </>
                                            ) : <span>{value}</span>}
                                        </button>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </>) : ''}
                    </AnimatePresence>
                </div>

            </div>
            <div className="flex flex-col items-center justify-center flex-grow font-mono">
                <div className="grid gap-6 text-center">
                    <Time />
                    <DateValue />
                </div>
                <div className="mt-4">
                    <Weather />
                </div>
            </div>
            <div className="p-12 text-xs opacity-25 text-foreground">
                Primo
            </div>
        </div>
    );
}

export default App;
