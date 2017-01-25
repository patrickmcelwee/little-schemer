/*jshint esversion: 6*/
const car = require('../car.js');
const cdr = require('../functions/cdr.js');
const isAtom = require('../functions/isAtom.js');
const isNull = require('../functions/isNull.js');

const isLat = function(candidate) {
  if (isNull(candidate)) { return true; }
  if (isAtom(car(candidate))) { return isLat(cdr(candidate)); }
  return false;
};

module.exports = isLat;
