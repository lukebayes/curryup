'use strict';
const constructor = require('../').constructor;

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

describe('Constructor', () => {
  let BazCurry = constructor(Baz);
  let BarCurry = constructor(Bar, ['baz']);
  let FooCurry = constructor(Foo, ['bar', 'baz']);

  it.skip('works with same new', () => {
    var foo = new FooCurry('abcd', 'efgh');
    assert.equal(foo.bar, 'abcd');
    assert.equal(foo.baz, 'efgh');
  });

  it.skip('curries to new', () => {
    FooCurry = FooCurry.withBar('abcd')
      .withBaz('efgh');

    var foo = new FooCurry();
    assert.equal(foo.bar, 'abcd');
    assert.equal(foo.baz, 'efgh');
  });
});

