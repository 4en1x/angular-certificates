import angular from 'angular';
import ngRoute from 'angular-route';
import ngCookies from 'angular-cookies';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-messages';
import ngAnimate from 'angular-animate';
import '../style/app.css';
import '../style/alert.css';

import auth from './authentication/auth.module';
import home from './home/home.module';
import header from './header/header.module';
import editgc from './editgc/editgc.module';

import appConfig from './app.config';
import appRun from './app.run';

require('ng-toast');

angular
  .module('app', [
    'auth',
    'home',
    'header',
    'editgc',
    ngRoute,
    ngCookies,
    ngMaterial,
    ngMessages,
    ngAnimate,
    require('angular-sanitize'),
    'ngToast',
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
