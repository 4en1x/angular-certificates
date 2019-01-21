import { assert } from 'chai';
import EditGCController from '../src/app/editgc/editgc.controller';
import EditGCService from '../src/app/editgc/service/edit.service';

let component;

describe('EditGCController', () => {
  let $rootScope;
  let $routeParams;
  let $location;
  let $http;

  beforeEach(() => {
    angular.mock.module('app');

    angular.mock.inject((_$rootScope_, _$routeParams_, _$location_, _$http_) => {
      $rootScope = _$rootScope_;
      $routeParams = _$routeParams_;
      $location = _$location_;
      $http = _$http_;
    });
  });


  it('Init Edit GC When route = /add', () => {
    component = new EditGCController(
      $rootScope,
      $routeParams,

    );
    assert.deepEqual(component.scope.gc, {});
  });

  it('Init Edit GC When route = /edit/:id', () => {
    $routeParams.id = 1;
    component = new EditGCController(
      $rootScope,
      $routeParams,
      {},
      $location,
      new EditGCService($http),
    );
    assert.deepEqual(component.scope.gc, {});
  });
});
