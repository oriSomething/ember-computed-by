import Ember from 'ember';
const { run, Object: EmberObject } = Ember;
import computedBy from 'ember-computed-by';
import { module, test } from 'qunit';


module('Unit | computed by');

test('it equals in the beginning', function(assert) {
  const Obj = EmberObject.extend({
    a: 1,
    b: computedBy('a'),
    c: computedBy('b')
  });

  let obj = run(Obj, 'create');
  assert.strictEqual(obj.get('a'), obj.get('b'), '1 indirect connection works');

  obj = run(Obj, 'create');
  assert.strictEqual(obj.get('a'), obj.get('c'), '2 indirect connection works');
});

test('the computed property is changed', function(assert) {
  const Obj = EmberObject.extend({
    a: 1,
    b: computedBy('a')
  });

  let obj = run(Obj, 'create');

  run(obj, 'set', 'b', 2);
  assert.strictEqual(obj.get('a'), 1, 'The `by` property is the same');
  assert.strictEqual(obj.get('b'), 2, 'The computed property is changed');
});

test('the computed property is changed when `by` property changed', function(assert) {
  const Obj = EmberObject.extend({
    a: 1,
    b: computedBy('a')
  });


  let obj = run(Obj, 'create');

  run(obj, 'set', 'a', 3);
  assert.strictEqual(obj.get('a'), 3, 'The `by` property is changed');
  assert.strictEqual(obj.get('b'), 3, 'The computed property is changed');
});

test('the computed property is changed when `by` property changed after computed property changed', function(assert) {
  const Obj = EmberObject.extend({
    a: 1,
    b: computedBy('a')
  });


  let obj = run(Obj, 'create');

  obj = run(Obj, 'create');
  run(obj, 'set', 'b', 2);
  assert.strictEqual(obj.get('b'), 2, 'The computed property is changed');

  run(obj, 'set', 'a', 7);
  assert.strictEqual(obj.get('a'), 7, 'The `by` property is changed');
  assert.strictEqual(obj.get('b'), 7, 'The computed property is changed');
});
