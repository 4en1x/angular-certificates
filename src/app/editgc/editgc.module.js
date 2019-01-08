import EditGCController from './editgc.controller';
import EditGCService from './service/edit.service';
import './view/edit.css';

export default angular.module('editgc', [])
  .controller('EditGCController', EditGCController)
  .factory('EditGCService', EditGCService);
