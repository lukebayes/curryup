const assert = require('assert');
const cap = require('../src/capitalize');

describe('Helpers', () => {
  it('capitalizes a multi-character string', () => {
    assert.equal(cap('abcd'), 'Abcd');
  });

  it('leaves an already-capitalized string', () => {
    assert.equal(cap('Abcd'), 'Abcd');
  });

  it('capitalizes a single character string', () => {
    assert.equal(cap('b'), 'B');
  });

  it('does not fail with number', () => {
    assert.equal(cap(123), '123');
  });

  it('does not fail with empty string', () => {
    assert.equal(cap(''), '');
  });

  it('fails with null', () => {
    assert.throws(() => {
      cap(null);
    }, /Cannot capitalize/);
  });

  it('fails with undefined', () => {
    assert.throws(() => {
      cap(undefined);
    }, /Cannot capitalize/);
  });
});

