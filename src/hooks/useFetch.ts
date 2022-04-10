import { useEffect, useState } from 'react';

export default function useFetch<T>(
    url: string | null,
    fetcher: (url: string) => Promise<T>
) {
    const [data, setData] = useState<T>();
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!url) return;

        fetcher(url)
            .then((data) => setData(data))
            .catch(() => setError(true));
    }, [url]);

    return { data, error };
}
