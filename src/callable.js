
var callable = function(callee) {

  function wrapper() {
    // TODO(lbayes): Ensure the scope where the returned function is
    // called, is where the provided function is called.
    return callee.apply(this, arguments);
  };

  return wrapper;
};

module.exports = callable;

