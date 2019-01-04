import HomeController from './home.controller';
import HomeService from './service/home.service';
import './view/home.css';

export default angular.module('home', [])
  .controller('HomeController', HomeController)
  .factory('HomeService', HomeService);
