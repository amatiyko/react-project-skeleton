/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 *   IMPORTANT: This file is used by the internal build
 *   script `extract-intl`, and must use CommonJS module syntax
 *   You CANNOT use import/export in this file.
 */

/* eslint-disable */
const { addLocaleData } = require('react-intl');
const en = require('react-intl/locale-data/en');
const ru = require('react-intl/locale-data/ru');
const uk = require('react-intl/locale-data/uk');

const enTranslationMessages = require('./translations/en.json');
const ruTranslationMessages = require('./translations/ru.json');
const ukTranslationMessages = require('./translations/uk.json');

/* eslint-enable */

addLocaleData([...en, ...ru, ...uk]);

export const DEFAULT_LOCALE = 'ru';
export const DEFAULT_DATE_FORMAT = 'DD/MM/YYYY';

export const formatTranslationMessages = (
  locale: string,
  messages: any
): any => {
  const defaultFormattedMessages =
    locale !== DEFAULT_LOCALE
      ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
      : {};

  const flattenFormattedMessages = (formattedMessages: any, key: string) => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LOCALE
        ? defaultFormattedMessages[key]
        : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  };

  return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

export const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
  ru: formatTranslationMessages('ru', ruTranslationMessages),
  uk: formatTranslationMessages('uk', ukTranslationMessages),
};
