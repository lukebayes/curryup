'use strict';
const assert = require('assert');
const curryup = require('../');

class Baz {
}

class Bar {
  constructor(baz) {
    this.baz = baz;
  }
}

class Foo {
  constructor(bar, baz) {
    this.bar = bar;
    this.baz = baz;
  }
}

describe('Curryup', () => {
  let BazCurry = curryup.constructor(Baz);
  let BarCurry = curryup.constructor(Bar, ['baz']);
  let FooCurry = curryup.constructor(Foo, ['bar', 'baz']);


  describe('constructor', () => {
    it('works with same new', () => {
      var foo = new FooCurry('abcd', 'efgh');
      assert.equal(foo.bar, 'abcd');
      assert.equal(foo.baz, 'efgh');
    });

    it.only('curries to new', () => {
      FooCurry = FooCurry.withBar('abcd')
        .withBaz('efgh');

      var foo = new FooCurry();
      assert.equal(foo.bar, 'abcd');
      assert.equal(foo.baz, 'efgh');
    });
  });
});

