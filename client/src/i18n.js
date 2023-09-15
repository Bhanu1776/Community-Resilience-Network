import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './assets/locales/en/translation.json';
import hiTranslation from './assets/locales/hi/translation.json';
import teTranslation from './assets/locales/te/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      hi: {
        translation: hiTranslation,
      },
      te: {
        translation: teTranslation,
      }
    },
    fallbackLng: 'en', // Default language
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
