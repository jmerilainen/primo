import React from 'react';
import FeatherIcon from 'feather-icons-react';

import { formatForecast } from '../services/metno/helpers';

import { WeatherItem } from './WeatherItem';
import useSWR from 'swr';
import useGeoloaction from '../hooks/useGeolocation';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const weatherWetcher = (url: string) =>
    fetcher(url)
        .then((result) =>
            formatForecast(result, {
                interval: 3,
                maxItems: 5,
            })
        )
        .then((result) =>
            result.map((item, index) => {
                return { key: index, ...item };
            })
        );

const useWeather = () => {
    const { longitude, latitude, error: locationError } = useGeoloaction();

    const { data, error } = useSWR(
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

    if (error) {
        return (
            <div className="transition duration-500 delay-[5000ms] -translate-y-2 opacity-0" data-qa="weather-error">
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
        <div className="flex justify-center text-xl text-muted" data-qa="weather">
            {data.map((item) => (
                <WeatherItem
                    key={item.key}
                    icon={item.icon}
                    time={item.time}
                    temperature={item.temperature}
                    delay={item.key}
                />
            ))}
        </div>
    );
};
