import React, { useEffect, useState } from 'react';
import FeatherIcon from 'feather-icons-react';

import { formatForecast } from '../lib/metno';

import { WeatherItem } from './WeatherItem';
import useGeoloaction from '../hooks/useGeolocation';
import useFetch from '../hooks/useFetch';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const weatherWetcher = (url: string) =>
    fetcher(url).then((result) =>
        formatForecast(result, {
            interval: 3,
            maxItems: 5,
        })
    );

const useWeather = () => {
    const { longitude, latitude, error: locationError } = useGeoloaction();

    const { data, error } = useFetch(
        longitude && latitude
            ? `https://api.met.no/weatherapi/locationforecast/2.0?lat=${latitude}&lon=${longitude}`
            : null,
        weatherWetcher
    );

    return {
        data,
        error: error || locationError,
    };
};

export const Weather = () => {
    const { data, error } = useWeather();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (!data) return;
        setMounted(true);
    }, [data]);

    if (error) {
        return (
            <div
                className="transition duration-500 delay-[5000ms] -translate-y-2 opacity-0"
                data-qa="weather-error"
            >
                <div className="flex items-center justify-center gap-2 text-center text-muted">
                    <div className="flex justify-center text-xl">
                        <FeatherIcon icon="alert-circle" />
                    </div>
                    <div className="text-[0.5em]">
                        Couldn&apos;t retrive weather forecast
                    </div>
                </div>
            </div>
        );
    }

    if (!data) {
        return (
            <div className="flex items-center justify-center h-full text-xl text-muted">
                <span className="spin">
                    <FeatherIcon icon="compass" />
                </span>
            </div>
        );
    }

    return (
        <div
            className="flex justify-center text-xl text-muted"
            data-qa="weather"
        >
            {data.map((item, index) => (
                <div
                    key={index}
                    style={
                        {
                            '--delay': index * 110 + 500 + 'ms',
                        } as React.CSSProperties
                    }
                    className={`p-6 flex flex-col items-center transition ease-in-out duration-700 delay-[var(--delay)] ${
                        !mounted ? 'opacity-0 translate-y-8' : ''
                    }`}
                >
                    <WeatherItem
                        icon={item.icon}
                        time={item.time}
                        temperature={item.temperature}
                    />
                </div>
            ))}
        </div>
    );
};
