import { addHours, parseISO, format } from 'date-fns';

const now = () => new Date();

export const formatForecast = (data, { interval, maxItems }) => {
    const until = addHours(now(), (maxItems * interval));
    
    return data.properties.timeseries.filter(({time}) => {
        const parsed = parseISO(time);
        return parsed < until;
    }).filter((item, index) => {
        return index % interval === 0;
    }).filter((item, index) => {
        return index < maxItems;
    }).map(item => ({
        timestamp: item.time,
        time: format(parseISO(item.time), 'kk:mm'),
        icon: item.data.next_1_hours.summary.symbol_code,
        temperature: Math.round(
            item.data.instant.details.air_temperature
        ),
    }));
}


