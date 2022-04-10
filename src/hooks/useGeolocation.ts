import { useEffect, useState } from "react";

interface GeolocationState {
    loading: boolean;
    latitude: number | null;
    longitude: number | null;
    error: boolean;
}

export default function useGeoloaction(options?: PositionOptions) {
    const [state, setState] = useState<GeolocationState>({
        loading: true,
        latitude: null,
        longitude: null,
        error: false,
    });

    const onSucess = (event: any) => {
        setState({
            loading: false,
            error: false,
            latitude: event.coords.latitude,
            longitude: event.coords.longitude,
        });
    }

    const onError = () => {
        setState({
            loading: false,
            error: true,
            latitude: null,
            longitude: null,
        });
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(onSucess, onError, options)
    }, []);

    return state;
}
