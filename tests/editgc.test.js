import { assert } from 'chai';
import EditGCController from '../src/app/editgc/editgc.controller';

let component;

describe('EditGCController', () => {
  let $rootScope;
  let $routeParams;

  beforeEach(() => {
    // load the module we want to test
    angular.mock.module('app');

    // inject the services we want to test
    angular.mock.inject((_$rootScope_, _$routeParams_) => {
      $rootScope = _$rootScope_;
      $routeParams = _$routeParams_;
    });
  });


  it('should start with default counter value = 20', () => {
    component = new EditGCController(
      $rootScope,
      $routeParams,

    );
    assert.deepEqual(component.scope.gc, {});
  });
});
