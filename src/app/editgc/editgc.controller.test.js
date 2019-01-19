import { assert } from 'chai';
import EditGCController from './editgc.controller';
import EditGCModule from './editgc.module';

let component;

describe('EditGCController', () => {
  beforeEach(() => {
    component = new EditGCController();
  });

  it('should start with default counter value = 20', () => {
    assert.deepEqual(component.scope.gc, {});
  });
});
