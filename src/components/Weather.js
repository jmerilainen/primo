import React, { useState } from 'react';
import { useGeolocation } from 'beautiful-react-hooks';
import FeatherIcon from 'feather-icons-react';

import { fetchForecast } from '../services/metno/api';
import { formatForecast } from '../services/metno/helpers';

import { WeatherItem } from './WeatherItem';



export const Weather = () => {
    const [geoState, { onChange }] = useGeolocation({
        enableHighAccuracy: false,
    });

    const [isPositionSet, setIsPositionSet] = useState(false);

    const [apiError, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const [items, setItems] = useState([]);

    onChange(() => {
        if (! geoState.isSupported || ! geoState.position || isPositionSet) {
            return;
        }

        const fetchData = async () => {
            try {
                const result = await fetchForecast({
                    lat: geoState.position.coords.latitude,
                    lon: geoState.position.coords.longitude,
                });

                const items = formatForecast(await result, {
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
            setIsPositionSet(true);
          };

          fetchData();

    }, [geoState, isPositionSet])

    return (
        <div className="text-muted flex justify-center text-xl">
            {apiError ? <FeatherIcon icon="alert-circle" /> : ''}
            {isLoaded ? items.map(item =>
                <WeatherItem
                    key={item.key}
                    icon={item.icon}
                    time={item.time}
                    temperature={item.temperature}
                    delay={item.key}
                />
            ) : <FeatherIcon icon="compass" />}
        </div>
    );
}
