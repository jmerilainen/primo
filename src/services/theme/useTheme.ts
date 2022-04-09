import { useLocalStorage } from 'react-use';
import { Dispatch, SetStateAction, useLayoutEffect } from 'react';
import themes from './../../themes';

export const useTheme = <T extends string>(
    defaultTheme: T
): [T, Dispatch<SetStateAction<T | undefined>>] => {
    const [theme, setTheme] = useLocalStorage<T>('theme', defaultTheme);

    useLayoutEffect(() => {
        if (!theme) return;
        const json = themes[theme];

        for (const key in json) {
            document.documentElement.style.setProperty(`--${key}`, json[key]);
        }
    }, [theme]);

    return [theme ?? defaultTheme, setTheme];
};
