const loginTemplate = require('./authentication/view/login.html');
const homeTemplate = require('./home/view/home.html');
const registerTemplate = require('./authentication/view/registration.html');

export default function config($routeProvider, $locationProvider) {
  $routeProvider
    .when('/login', {
      controller: 'LoginController',
      controllerAs: 'vm',
      template: loginTemplate,
      hideMenus: true,
    })

    .when('/', {
      controller: 'HomeController',
      controllerAs: 'vm',
      template: homeTemplate,
    })

    .when('/register', {
      controller: 'LoginController',
      controllerAs: 'vm',
      template: registerTemplate,
      hideMenus: true,

    })

    .otherwise({ redirectTo: '/login' });

  $locationProvider.html5Mode(true);
}
