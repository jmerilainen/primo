import github from './github.json';
import nightowl from './night-owl.json';
import nord from './nord.json';
import solarized from './solarized.json';
import snazzy from './snazzy.json';

interface Theme {
    [key: string]: string;
}

const themes: { [key: string]: Theme } = {
    github,
    nightowl,
    nord,
    solarized,
    snazzy,
};

export default themes;
