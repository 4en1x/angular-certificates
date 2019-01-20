import { assert } from 'chai';
import EditGCController from './editgc.controller';

const theControllerInjector = require('inject-loader!../app.js');

let component;

describe('EditGCController', () => {
  component = theControllerInjector().ComponentController;
  console.log(theControllerInjector())
  it('should start with default counter value = 20', () => {
    assert.deepEqual(component.scope.gc, {});
  });
});
