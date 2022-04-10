import { Forecast } from '../types';

const now = () => new Date();

const addHours = (date: Date, hours: number) => {
    date.setTime(date.getTime() + hours * 60 * 60 * 1000);

    return date;
};

const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

const getTime = (timestamp: string) => {
    const date = new Date(timestamp);

    return [date.getHours(), date.getMinutes()].map(formatTime).join(':');
};

interface FromatOptions {
    interval: number;
    maxItems: number;
}

export const formatForecast = (
    data: any,
    { interval, maxItems }: FromatOptions
): Forecast[] => {
    const until = addHours(now(), maxItems * interval);

    return data?.properties?.timeseries
        .filter(({ time }: any) => {
            const parsed = new Date(time);
            return parsed < until;
        })
        .filter((item: unknown, index: number) => {
            return index % interval === 0;
        })
        .filter((item: unknown, index: number) => {
            return index < maxItems;
        })
        .map((item: any) => ({
            timestamp: item.time,
            time: getTime(item.time),
            icon: item.data.next_1_hours.summary.symbol_code,
            temperature: Math.round(item.data.instant.details.air_temperature),
        }));
};
