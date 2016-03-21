'use strict';
const assert = require('assert');
const callable = require('../').callable;

describe('Callable', () => {
  // Simple function that sums all arguments provided.
  function sumArgs(var_args) {
    let sum = 0;
    for (let i = 0, len = arguments.length; i < len; i++) {
      sum += arguments[i];
    }
    return sum;
  };

  it('is a function', () => {
    assert(typeof callable === 'function');
  });

  it('can be called', () => {
    const callee = callable(() => { return 1; });

    assert.equal(callee(), 1);
  });

  it('caller scope is used', () => {
    function func() {
      return this.name;
    };
    const scope = {name: 'abcd'};
    const callee = callable(func);

    // Call the returned function with a scope, it should forward
    // the binding to the provided function when executing it.
    assert.equal(callee.call(scope), 'abcd');
  });

  it('forwards args', () => {
    const sumCallable = callable(sumArgs);
    const value = sumCallable(1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
    assert.equal(value, 10);
  });

  it('returns funcs until arg count');
});

