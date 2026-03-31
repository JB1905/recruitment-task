import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { usersLocales } from '@/features/users';
import commonLocales from '@/locales/common/en.json';
import notFoundLocales from '@/locales/not-found/en.json';

const resources = {
  en: {
    common: commonLocales,
    notFound: notFoundLocales,
    users: usersLocales,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  debug: import.meta.env.DEV,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
