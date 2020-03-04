// Core
import React from 'react';
import { IntlProvider } from 'react-intl';

// Types
import { LocaleProviderProps } from './types';

const LocaleProvider: React.FC<LocaleProviderProps> = ({
  locale = 'en',
  children,
  messages,
}: LocaleProviderProps) => (
  <IntlProvider locale={locale} key={locale} messages={messages[locale]}>
    {React.Children.only(children)}
  </IntlProvider>
);

export default LocaleProvider;
