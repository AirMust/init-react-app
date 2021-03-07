import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { i18General } from '../boot/i18';
import { i18HeaderApp } from './components';
import { i18Home } from '../pages';

export type LocalNames = 'ru' | 'en';

type TranslationProps = {
    main: typeof i18Home.ru;
    general: typeof i18General.ru;
    headerApp: typeof i18HeaderApp.ru;
};

type ResourcesProps = Record<LocalNames, { translation: TranslationProps }>;

const resources: ResourcesProps = {
    ru: {
        translation: {
            main: i18Home.ru,
            general: i18General.ru,
            headerApp: i18HeaderApp.ru,
        },
    },
    en: {
        translation: {
            main: i18Home.en,
            general: i18General.en,
            headerApp: i18HeaderApp.en,
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'ru',
    keySeparator: false, // we do not use keys in form messages.welcome
    returnObjects: true,
    interpolation: {
        escapeValue: false, // react already safes from xss
    },
});

declare module 'react-i18next' {
    type DefaultResources = typeof resources['ru'];
    interface Resources extends DefaultResources {}
}
