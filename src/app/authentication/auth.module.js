import LoginController from './auth.controller';
import AuthenticationService from './service/auth.service';
import Base64 from './service/base64.service';
import AlertHelper from '../helpers/alert/alert.helper';
import './view/login.css';

export default angular.module('auth', [])
  .controller('LoginController', LoginController)
  .factory('AuthenticationService', AuthenticationService)
  .factory('Base64', Base64)
  .factory('AlertHelper', AlertHelper);
