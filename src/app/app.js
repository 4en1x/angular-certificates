import angular from 'angular';
import ngRoute from 'angular-route';
import ngCookies from 'angular-cookies';
import ngMaterial from 'angular-material';
import '../style/app.css';

import auth from './authentication/auth.module';
import home from './home/home.module';
import header from './header/header.module';

import appConfig from './app.config';
import appRun from './app.run';

angular
  .module('app', [
    'auth',
    'home',
    'header',
    ngRoute,
    ngCookies,
    ngMaterial,
  ])
  .config(['$routeProvider', '$locationProvider', appConfig])
  .config(($mdThemingProvider) => {
    $mdThemingProvider.definePalette('black', {
      50: '000000',
      100: '000000',
      200: '000000',
      300: '000000',
      400: '000000',
      500: '000000',
      600: '000000',
      700: '000000',
      800: '000000',
      900: '000000',
      A100: '000000',
      A200: '000000',
      A400: '000000',
      A700: '000000',
      contrastDefaultColor: 'light',
    });
  })
  .run(['$rootScope', '$location', '$cookieStore', '$http', appRun]);
