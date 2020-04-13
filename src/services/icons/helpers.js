const icons = [
    {
        icon: 'cloud',
        alias: ['cloudy'],
        
    },
    {
        icon: 'sun',
        alias: ['fair_day', 'partlycloudy_day'],  
    },
];

export const transformIcon = icon => {
    const data = icons.find(item => {
        return item.alias.includes(icon);
    });

    if (! data) {
        return 'minus';
    }

    return data.icon;
};