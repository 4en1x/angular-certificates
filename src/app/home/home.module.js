import HomeController from './home.controller';
import HomeService from './service/home.service';
import PagerService from './service/pager.service';
import AlertHelper from '../helpers/alert/alert.helper';
import './view/home.css';
import './view/pagination.css';

export default angular.module('home', [])
  .controller('HomeController', HomeController)
  .factory('HomeService', HomeService)
  .factory('PagerService', PagerService)
  .factory('AlertHelper', AlertHelper);
