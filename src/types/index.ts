export interface Coordinates {
    longitude: number;
    latitude: number;
}

export interface Forecast {
    timestamp: string;
    time: Date;
    icon: string;
    temperature: number;
}
