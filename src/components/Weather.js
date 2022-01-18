import React, { useEffect, useState } from 'react';
import { useGeolocation } from 'beautiful-react-hooks';
import FeatherIcon from 'feather-icons-react';

import { fetchForecast } from '../services/metno/api';
import { formatForecast } from '../services/metno/helpers';

import { WeatherItem } from './WeatherItem';
import { haversine } from '../utils/haversine';
import useSWR from 'swr';

const fetcher = url => fetch(url).then(r => r.json())

const weatherWetcher = url => fetcher(url)
    .then(result => formatForecast(result, {
        interval: 3,
        maxItems: 5,
    }))
    .then(result => result.map((item, index) => {
        return { key: index, ...item };
    }))

export const Weather = () => {
    const [geoState, { onChange, onError }] = useGeolocation();
    const [coords, setCoords] = useState(null);
    const { data, loading, error } = useSWR(coords ? `https://api.met.no/weatherapi/locationforecast/2.0?lat=${coords.latitude}&lon=${coords.longitude}` : null, weatherWetcher);

    const [hasError, setError] = useState(null);

    onError(() => setError(true))

    onChange((position) => {
        if (coords) {
            let distanceDiffInKm = haversine(coords, position.coords);
            if (distanceDiffInKm < 5) {
                return;
            }
        }

        setCoords({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
        });
    });

    if (hasError || error) {
        return (
            <div className="transition duration-500 delay-[5000ms] -translate-y-2 opacity-0">
                <div className="flex items-center justify-center gap-2 text-center text-muted">
                    <div className="flex justify-center text-xl">
                        <FeatherIcon icon="alert-circle" />
                    </div>
                    <div className="text-[0.5em]">
                        Couldn't retrive weather forecast
                    </div>
                </div>
            </div>
        )
    }

    if (loading || ! data) {
        return (
            <div className="flex justify-center text-xl text-muted">
                <span className="spin"><FeatherIcon icon="compass" /></span>
            </div>
        )
    }

    return (
        <div className="flex justify-center text-xl text-muted">
            {data.map(item =>
                <WeatherItem
                    key={item.key}
                    icon={item.icon}
                    time={item.time}
                    temperature={item.temperature}
                    delay={item.key}
                />
            )}
        </div>
    );
}
