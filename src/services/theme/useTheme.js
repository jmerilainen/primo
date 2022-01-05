import { useLocalStorage } from 'beautiful-react-hooks';
import { useState, useLayoutEffect } from 'react';

export const useTheme = (defaultTheme = null) => {
    const [theme, setTheme] = useLocalStorage('theme', defaultTheme);

    useLayoutEffect(() => {
        import(`./../../themes/${theme}.json`).then(props => {
            const json = props.default;
            for (const key in json) {
                // Update css variables in document's root element
                document.documentElement.style.setProperty(`--${key}`, json[key]);
            }
        });
        // Iterate through each value in theme object

    }, [theme]); // Only call again if theme object reference changes

    return [theme, setTheme];
}
