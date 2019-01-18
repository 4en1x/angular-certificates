import angular from 'angular';
import ngRoute from 'angular-route';
import ngCookies from 'angular-cookies';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-messages';
import ngAnimate from 'angular-animate';
import ngSanitize from 'angular-sanitize';
import ngTranslate from 'angular-translate';

import '../style/app.css';
import '../style/alert.css';

import auth from './authentication/auth.module';
import home from './home/home.module';
import header from './header/header.module';
import editgc from './editgc/editgc.module';

import appConfig from './app.config';
import appRun from './app.run';
import translationsConfig from './app.translations';
import blackButtonConfig from './helpers/button/blackButton.helper';

require('ng-toast');

angular
  .module('app', [
    'auth',
    'home',
    'header',
    'editgc',
    'ngToast',
    ngRoute,
    ngCookies,
    ngMaterial,
    ngMessages,
    ngAnimate,
    ngSanitize,
    ngTranslate,
  ])
  .config(['$routeProvider', '$locationProvider', appConfig])
  .config(['$translateProvider', translationsConfig])
  .config(['$mdThemingProvider', blackButtonConfig])
  .run(['$rootScope', '$location', '$cookieStore', '$http', '$translate', appRun]);
