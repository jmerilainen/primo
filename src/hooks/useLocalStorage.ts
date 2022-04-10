import { useCallback, useState } from 'react';

export default function useLocalStorage(
    key: string,
    initialValue: string
): [string, (value: string) => void] {
    const [value, setValue] = useState(() => {
        return localStorage.getItem(key) || initialValue;
    });

    const set = useCallback(
        (value: string) => {
            localStorage.setItem(key, value);
            setValue(value);
        },
        [key, setValue]
    );

    return [value, set];
}
