const epamLogo = require('../../public/img/epam-logo.svg');

export default class LoginController {
  constructor($scope, $rootScope, $location, AuthenticationService, $window) {
    this.scope = $scope;
    this.rootScope = $rootScope;
    this.location = $location;
    this.AuthenticationService = AuthenticationService;
    this.window = $window;
    AuthenticationService.ClearCredentials();

    this.scope.epamLogo = epamLogo;
  }

  login() {
    this.scope.dataLoading = true;
    this.AuthenticationService.Login(this.scope.email, this.scope.password, (response) => {
      if (response.success) {
        this.AuthenticationService.SetCredentials(this.scope.email, this.scope.password, response.username);
        this.location.path('/');
      } else {
        this.scope.error = response.message;
        this.scope.dataLoading = false;
      }
    });
  }

  register() {
    this.scope.dataLoading = true;
    this.AuthenticationService.Register(this.scope.email, this.scope.userName, this.scope.password, (response) => {
      if (response.success) {
        this.location.path('/login');
      } else {
        this.scope.error = response.message;
        this.scope.dataLoading = false;
      }
    });
  }

  redirectRegister() {
    this.window.location = '/register';
  }

  redirectLogin() {
    this.window.location = '/login';
  }
}
