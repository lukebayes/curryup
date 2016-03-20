
module.exports = function(str) {
  if (str === null || str === undefined) {
    throw new TypeError('Cannot capitalize null or undefined');
  }
  var parts = String(str).split('');
  parts[0] = parts[0] ? parts[0].toUpperCase() : parts[0];
  return parts.join('');
};

