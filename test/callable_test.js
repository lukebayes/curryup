const assert = require('assert');
const callable = require('../').callable;

describe('Callable', () => {

  it('is a function', () => {
    assert(typeof callable === 'function');
  });
});

