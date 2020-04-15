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
