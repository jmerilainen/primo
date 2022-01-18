import React, { useEffect, useState } from 'react';
import { useDebounce, useGeolocation, useLocalStorage } from 'react-use';
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

const useLoaction = () => {
    const [coords, setCoords] = useLocalStorage('location', null);

    const location = useGeolocation({
        timeout: 5000,
        maximumAge: Number.POSITIVE_INFINITY,
    });

    useDebounce(() => {
        if (coords) return;
        if (location.loading) return;

        setCoords({
            longitude: location.longitude,
            latitude: location.latitude,
        })
    }, 500, [location]);

    return [coords, location.error];
}

export const Weather = () => {
    const [location, locationError] = useLoaction();
    const { data, error } = useSWR(location ? `https://api.met.no/weatherapi/locationforecast/2.0?lat=${location.latitude}&lon=${location.longitude}` : null, weatherWetcher);

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
