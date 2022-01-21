import { addHours, parseISO, format } from 'date-fns';
import { Forecast } from '../../types';

const now = () => new Date();

interface FromatOptions {
    interval: number;
    maxItems: number;
}

export const formatForecast = (data: any, { interval, maxItems }: FromatOptions ): Forecast[] => {
    const until = addHours(now(), (maxItems * interval));

    return data?.properties?.timeseries.filter(({time}: any) => {
        const parsed = parseISO(time);
        return parsed < until;
    }).filter((item: any, index: number) => {
        return index % interval === 0;
    }).filter((item: any, index: number) => {
        return index < maxItems;
    }).map((item: any) => ({
        timestamp: item.time,
        time: format(parseISO(item.time), 'kk:mm'),
        icon: item.data.next_1_hours.summary.symbol_code,
        temperature: Math.round(
            item.data.instant.details.air_temperature
        ),
    }));
}
