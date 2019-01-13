export default class HeaderController {
  constructor($scope, $rootScope, $cookieStore, $translate) {
    this.cookieStore = $cookieStore;
    this.rootScope = $rootScope;
    this.scope = $scope;
    this.translate = $translate;

    this.rootScope.globals = this.cookieStore.get('globals') || {};

    this.setLanguages();
  }

  setLanguages() {
    this.translate(['header.langs.ru', 'header.langs.en', 'header.langs.cn']).then((t) => {
      this.scope.langs = [
        {
          id: 1, name: t['header.langs.ru'], flag_name: 'ru', langKey: 'ru',
        },
        {
          id: 2, name: t['header.langs.en'], flag_name: 'gb', langKey: 'en',
        },
        {
          id: 3, name: t['header.langs.cn'], flag_name: 'cn', langKey: 'cn',
        },
      ];
    });
  }

  changeLanguage(langKey) {
    this.translate.use(langKey);
    this.cookieStore.put('language', langKey);
    this.scope.langs = [];
    this.setLanguages();
  }
}
