import i18n from 'i18next';
import moment from 'moment';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

/**
 * For each supported language, import the corresponding language file.
 * Consumed by i18next.
 */
import * as englishTranslation from './locales/en/translation.json';
import * as frenchTranslation from './locales/fr/translation.json';
import * as germanTranslation from './locales/de/translation.json';
import * as spanishTranslation from './locales/es/translation.json';

/**
 * For each supported language other than English, import the corresponding moment locale
 * Used for time formatting and things like `fromNow()` ("[...] ago")
 */
import 'moment/locale/fr';
import 'moment/locale/de';
import 'moment/locale/es';

const translations = {
  de: {
    translation: germanTranslation,
  },
  en: {
    translation: englishTranslation,
  },
  fr: {
    translation: frenchTranslation,
  },
  es: {
    translation: spanishTranslation,
  },
};

const defaultLanguage = {
  languageTag: 'en-US',
  isRTL: false,
};

const { languageTag } =
  RNLocalize.findBestAvailableLanguage(Object.keys(translations)) ||
  defaultLanguage;

/**
 * Moment will use detected language throughout the app.
 */
moment.locale(languageTag);

i18n
  .use(initReactI18next) // bind react-i18next to the instance
  .init({
    resources: translations,
    lng: languageTag,
    fallbackLng: 'en',
    returnEmptyString: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
