import ru from './local/ru.json';
import en from './local/en.json';

export type NamePages = keyof typeof ru;

export const i18HeaderApp = {
    ru,
    en,
};
