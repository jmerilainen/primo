import { useEffect, useState } from 'react';

export default function useMounted() {
    const [mounted, setMounded] = useState(false);

    useEffect(() => {
        setMounded(true);
    }, []);

    return mounted;
}
