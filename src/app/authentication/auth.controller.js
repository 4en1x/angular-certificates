const epamLogo = require('../../public/img/epam-logo.svg');

export default class LoginController {
  constructor($scope, $rootScope, $location, AuthenticationService) {
    this.scope = $scope;
    this.rootScope = $rootScope;
    this.location = $location;
    this.AuthenticationService = AuthenticationService;
    AuthenticationService.ClearCredentials();

    this.scope.epamLogo = epamLogo;
  }

  login() {
    this.scope.dataLoading = true;
    this.AuthenticationService.Login(this.scope.email, this.scope.password, (response) => {
      if (response.success) {
        this.AuthenticationService.SetCredentials(this.scope.email, this.scope.password);
        this.location.path('/');
      } else {
        this.scope.error = response.message;
        this.scope.dataLoading = false;
      }
    });
  }
}
