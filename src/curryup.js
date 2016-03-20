var capitalize = require('./capitalize');


var withParams = function(Constr, params) {
  var values = {};

  function buildParamValues() {
  };

  function result(var_args) {
    // TODO(lbayes): Figure out how to call an ES6 constr with dynamic args
    return new Constr();
  };

  /*
  var result = function(var_args) {
    console.log('values:', values);

    var instance = new Constr();


    return instance;
  };
  */

  if (params && params.length > 0) {
    params.forEach(function(param) {
      console.log('yo:', capitalize(param));
      result['with' + capitalize(param)] = function(value) {
        values[param] = value;
        return result;
      };
    });
  }

  result.build = function() {
    return new result();
  };

  return result;
};

module.exports = {
  constructor: function(Constr, params) {
    return withParams(Constr, params);
  },

  callable: function(callable) {
  }
};

