import useIcon from './useIcon';

test('it finds icon alias', () => {
    expect(useIcon('rainshowersandthunder_day')).toBe('cloud-lightning');
});

test('it fallbacks if icon alias is not found', () => {
    expect(useIcon('none')).toBe('minus');
});
