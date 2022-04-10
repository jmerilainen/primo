import { useLayoutEffect } from 'react';
import useLocalStorage from './useLocalStorage';
import themes from '../themes';

export const useTheme = <T extends string>(
    defaultTheme: T
) => {
    const [theme, setTheme] = useLocalStorage('theme', defaultTheme);

    useLayoutEffect(() => {
        const json = themes[theme];

        for (const key in json) {
            document.documentElement.style.setProperty(`--${key}`, json[key]);
        }
    }, [theme]);

    return [theme, setTheme];
};
