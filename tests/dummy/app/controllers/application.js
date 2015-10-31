import Ember from 'ember';
import computedBy from 'ember-computed-by';

export default Ember.Controller.extend({
  a: 'Hello',
  b: computedBy('a'),
  c: computedBy('b')
});
