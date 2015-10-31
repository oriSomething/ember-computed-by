# Ember-computed-by

`Ember computed by` made to allow `computed.oneWay` that still has its bindings to original property.

CAVEAT: if you need to **set** property as `undefined` you might have some issues and it would better to have `computed.oneWay` addition to an `observer`.


## Installation

`npm install ember-computed-by`


## Using

```js
import Ember from 'ember';
import computedBy from 'ember-computed-by';

export default Ember.Component.extend({
  finalValue: computedBy('value');
});

```
