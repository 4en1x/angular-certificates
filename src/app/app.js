import angular from 'angular';
import ngRoute from 'angular-route';
import ngCookies from 'angular-cookies';
import '../style/app.css';

import auth from './authentication/auth.module';
import home from './home/home.module';

import appConfig from './app.config';
import appRun from './app.run';

angular
  .module('app', [
    'auth',
    'home',
    ngRoute,
    ngCookies,
  ])
  .config(['$routeProvider', '$locationProvider', appConfig])
  .run(['$rootScope', '$location', '$cookieStore', '$http', appRun]);
