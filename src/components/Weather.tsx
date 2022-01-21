import React from 'react';
import { useDebounce, useGeolocation, useLocalStorage } from 'react-use';
import FeatherIcon from 'feather-icons-react';

import { formatForecast } from '../services/metno/helpers';

import { WeatherItem } from './WeatherItem';
import useSWR from 'swr';

import type { Coordinates } from '../types';

const fetcher = (url: string) => fetch(url).then(r => r.json())

const weatherWetcher = (url: string) => fetcher(url)
    .then(result => formatForecast(result, {
        interval: 3,
        maxItems: 5,
    }))
    .then(result => result.map((item, index) => {
        return { key: index, ...item };
    }))

const useLoaction = (): [Coordinates, boolean] => {
    const defaultCoordinates: Coordinates = { longitude: 0, latitude: 0 };
    let [coords, setCoords] = useLocalStorage<Coordinates>('location', defaultCoordinates);

    const location = useGeolocation({
        timeout: 5000,
        maximumAge: Number.POSITIVE_INFINITY,
    });

    useDebounce(() => {
        if (! coords) return;
        if (location.loading) return;

        setCoords({
            longitude: location.longitude ?? 0,
            latitude: location.latitude ?? 0,
        })
    }, 500, [location]);

    let error = false;

    if (location.error) {
        error = true;
    }

    if (! coords) {
        coords = defaultCoordinates;
    }

    return [coords, error];
}

export const Weather = () => {
    const [location, locationError] = useLoaction();
    const { data, error } = useSWR(location.longitude && location.latitude ? `https://api.met.no/weatherapi/locationforecast/2.0?lat=${location.latitude}&lon=${location.longitude}` : null, weatherWetcher);

    if (locationError || error) {
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

    if (! data) {
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
