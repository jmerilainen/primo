import React, { useEffect, useState } from 'react';
import { useGeolocation } from 'beautiful-react-hooks';
import FeatherIcon from 'feather-icons-react';

import { fetchForecast } from '../services/metno/api';
import { formatForecast } from '../services/metno/helpers';

import { WeatherItem } from './WeatherItem';
import { haversine } from '../utils/haversine';

export const Weather = () => {
    const [geoState, { onChange, onError }] = useGeolocation();

    const [coords, setCoords] = useState(null);
    const [hasError, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

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

    useEffect(() => {
        if (! coords) return;

        const fetchData = async () => {
            try {
                const result = await fetchForecast({
                    lat: coords.latitude,
                    lon: coords.longitude,
                });

                const items = formatForecast(result, {
                    interval: 3,
                    maxItems: 5,
                }).map((item, index) => {
                    return { key: index, ...item };
                })

                setItems(items);
            } catch (error) {
                setError(true);
            }

            setIsLoaded(true);
        };

        fetchData();
    }, [coords]);

    if (hasError) {
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

    if (! isLoaded) {
        return (
            <div className="flex justify-center text-xl text-muted">
                <span className="spin"><FeatherIcon icon="compass" /></span>
            </div>
        )
    }

    return (
        <div className="flex justify-center text-xl text-muted">
            {items.map(item =>
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
