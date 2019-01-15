const epamLogo = require('../../public/img/epam-logo.svg');

export default class AuthController {
  constructor($scope, $rootScope, $location, AuthenticationService, $window, AlertHelper) {
    this.scope = $scope;
    this.AlertHelper = AlertHelper;
    this.rootScope = $rootScope;
    this.location = $location;
    this.AuthenticationService = AuthenticationService;
    this.window = $window;
    AuthenticationService.ClearCredentials();

    this.scope.epamLogo = epamLogo;
  }

  validateForm(form) {
    if (this.scope.password !== this.scope.repeatPassword) {
      form.password.$setValidity('validatePasswordsMatch', false);
      form.repeatPassword.$setValidity('validatePasswordsMatch', false);
    } else {
      form.password.$setValidity('validatePasswordsMatch', true);
      form.repeatPassword.$setValidity('validatePasswordsMatch', true);
    }
  }

  login() {
    this.scope.dataLoading = true;
    this.AuthenticationService.Login(this.scope.email, this.scope.password, (response) => {
      this.AuthenticationService.SetCredentials(this.scope.email, this.scope.password, this.scope.email);
      this.AlertHelper.successCallback(response);
      this.location.path('/');
    }, this.errorCallback.bind(this));
  }

  errorCallback(error) {
    this.AlertHelper.errorCallback(error);
    this.scope.dataLoading = false;
  }

  register() {
    this.scope.dataLoading = true;
    this.AuthenticationService.Register(this.scope.userName, this.scope.password, (response) => {
      this.location.path('/login');
      this.scope.dataLoading = false;
      this.AlertHelper.successCallback(response);
    }, this.errorCallback.bind(this));
  }

  redirectRegister() {
    this.window.location = '/register';
  }

  redirectLogin() {
    this.window.location = '/login';
  }
}
