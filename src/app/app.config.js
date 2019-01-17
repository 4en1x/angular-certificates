const loginTemplate = require('./authentication/view/login.html');
const homeTemplate = require('./home/view/home.html');
const myHomeTemplate = require('./home/view/my-home.html');
const registerTemplate = require('./authentication/view/registration.html');
const editGCTemplate = require('./editgc/view/edit.html');

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

    .when('/my', {
      controller: 'MyHomeController',
      controllerAs: 'vm',
      template: myHomeTemplate,
    })

    .when('/register', {
      controller: 'LoginController',
      controllerAs: 'vm',
      template: registerTemplate,
      hideMenus: true,
    })

    .when('/edit/:id', {
      controller: 'EditGCController',
      controllerAs: 'vm',
      template: editGCTemplate,
      hideMenus: true,
    })

    .when('/add', {
      controller: 'EditGCController',
      controllerAs: 'vm',
      template: editGCTemplate,
      hideMenus: true,
    })

    .otherwise({ redirectTo: '/' });

  $locationProvider.html5Mode(true);
}
