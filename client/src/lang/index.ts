import { en as defaultLanguage } from './en';

export type KnownLanguages = 'en';

export type LangKeys = keyof typeof defaultLanguage;

export type LocaleData = { [key in LangKeys]: string };

export const loadLocaleData = (locale: KnownLanguages): LocaleData => {
  return /en/gi.test(locale) ? defaultLanguage : defaultLanguage;
};
