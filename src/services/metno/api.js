// Documentation: https://api.met.no/weatherapi/documentation

const BASE_URI = 'https://api.met.no/weatherapi';

const queryString = (params = {}) => Object
    .keys(params)
    .map(key => `${key}=${params[key]}`)
    .join('&');

const request = async (endpoint, params = {}) => {
    const query = queryString(params);
    return await fetch(`${BASE_URI}${endpoint}?${query}`);
}

export const fetchForecast = async ({lat, lon}) => {
    const query = { lat, lon };
    
    const response = await request('/locationforecast/2.0', query);
    
    return await response.json();
};