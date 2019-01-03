const authTemplate = require('./authentication/view/login.html');
const homeTemplate = require('./home/view/home.html');

export default function config($routeProvider, $locationProvider) {
  $routeProvider
    .when('/login', {
      controller: 'LoginController',
      controllerAs: 'vm',
      template: authTemplate,
      hideMenus: true,
    })

    .when('/', {
      controller: 'HomeController',
      controllerAs: 'vm',
      template: homeTemplate,
    })

    .otherwise({ redirectTo: '/login' });

  $locationProvider.html5Mode(true);
}
