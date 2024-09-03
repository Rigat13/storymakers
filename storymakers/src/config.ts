import {Pathnames, LocalePrefix} from 'next-intl/routing';

export const defaultLocale = 'es' as const;
export const locales = ['en', 'es'] as const;

export const pathnames = {
  '/': '/',
  '/pathnames': {
    en: '/pathnames',
    es: '/direccion'
  }
} satisfies Pathnames<typeof locales>;

export const localePrefix: LocalePrefix<typeof locales> = 'always';