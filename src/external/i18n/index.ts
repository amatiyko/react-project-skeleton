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
require('@formatjs/intl-relativetimeformat/dist/locale-data/en');
require('@formatjs/intl-relativetimeformat/dist/locale-data/uk');
require('@formatjs/intl-relativetimeformat/dist/locale-data/ru');

const enTranslationMessages = require('./translations/en.json');
const ruTranslationMessages = require('./translations/ru.json');
const ukTranslationMessages = require('./translations/uk.json');

/* eslint-enable */

export const DEFAULT_LOCALE = 'en';
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
