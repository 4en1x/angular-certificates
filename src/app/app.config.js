export default function config($routeProvider, $locationProvider) {
  $routeProvider
    .when('/login', {
      controller: 'LoginController',
      template: require('./authentication/view/login.html'),
      hideMenus: true,
    })

    .when('/', {
      controller: 'HomeController',
      template: require('./home/view/home.html'),
    })

    .otherwise({ redirectTo: '/login' });

  $locationProvider.html5Mode(true);
}
