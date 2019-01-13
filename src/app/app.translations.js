import ruTranslations from './translations/ru/common';
import enTranslations from './translations/en/common';
import cnTranslations from './translations/cn/common';

export default function translationsConfig($translateProvider) {
  $translateProvider
    .translations('ru', ruTranslations)
    .translations('en', enTranslations)
    .translations('cn', cnTranslations)
    .preferredLanguage('en');
}
