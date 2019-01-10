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
      this.AuthenticationService.SetCredentials(this.scope.email, this.scope.password, 'Потом сменить');
      this.location.path('/');
    }, this.errorCallback.bind(this));
  }

  errorCallback(error) {
    console.log(error);
    this.scope.dataLoading = false;
  }

  register() {
    this.scope.dataLoading = true;
    this.AuthenticationService.Register(this.scope.userName, this.scope.password, (response) => {
      if (response.success) {
        this.location.path('/login');
      } else {
        this.scope.error = response.message;
        this.scope.dataLoading = false;
      }
    }, this.errorCallback.bind(this));
  }

  redirectRegister() {
    this.window.location = '/register';
  }

  redirectLogin() {
    this.window.location = '/login';
  }
}
