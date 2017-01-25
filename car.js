var car = function(list) {
  if (typeof list === 'string') {
    return undefined;
  } else {
    return list[0];
  }
};

module.exports = car;
