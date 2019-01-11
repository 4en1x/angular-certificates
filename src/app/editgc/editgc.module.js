import EditGCController from './editgc.controller';
import EditGCService from './service/edit.service';
import AlertHelper from '../helpers/alert/alert.helper';
import './view/edit.css';

export default angular.module('editgc', [])
  .controller('EditGCController', EditGCController)
  .factory('EditGCService', EditGCService)
  .factory('AlertHelper', AlertHelper);
