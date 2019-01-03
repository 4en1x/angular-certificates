export default class HeaderController {
  constructor($scope) {
    this.scope = $scope;
    this.scope.langs = [
      { id: 1, name: 'RUSSIAN', flag_name: 'ru' },
      { id: 2, name: 'ENGLISH', flag_name: 'gb' },
      { id: 3, name: 'CHINESE', flag_name: 'cn' },
    ];
  }
}
