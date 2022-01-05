const icons = [
    {
        icon: 'cloud',
        alias: ['cloudy', 'partlycloudy_night'],
    },
    {
        icon: 'sun',
        alias: ['fair_day', 'partlycloudy_day'],
    },
    {
        icon: 'cloud-snow',
        alias: ['snow', 'lightsnow', 'sleet', 'lightsleet'],
    },
    {
        icon: 'cloud-rain',
        alias: ['rain', 'heavyrain'],
    },
    {
        icon: 'cloud-drizzle',
        alias: ['lightrain'],
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
