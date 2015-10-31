import Ember from 'ember';
const { computed } = Ember;

/**
 * @param  {string} key
 * @return {Ember.ComputedProperty}
 */
export default function computedBy(key) {
  return computed(key, {
    get() {
      return this.get(key);
    },

    set(_, value) {
      return value;
    }
  });
}
