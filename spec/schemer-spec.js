/*jshint esversion: 6*/
var car = require('../car.js');
var cdr = require('../functions/cdr.js');

describe('car', function() {

  it('returns first item of short lists', function() {
    expect(car([1])).toBe(1);
    expect(car(['2'])).toBe('2');
  });


  it('returns first item of longer lists', function() {
    expect(car([1, 2])).toBe(1);
  });

  it('is undefined for empty lists', function() {
    expect(car([])).toBe(undefined);
  });

  it('is undefined for numbers', function() {
    expect(car(1)).toBe(undefined);
  });

  it('is undefined for strings', function() {
    expect(car('string')).toBe(undefined);
  });
});

describe('cdr', function() {
  it('returns empty list for short lists', function() {
    expect(cdr([1])).toEqual([]);
    expect(cdr(['string'])).toEqual([]);
  });

  it('returns everything but the first item of a list', function() {
    expect(cdr([1, 2, 3, 4])).toEqual([2, 3, 4]);
  });

  it('is undefined for empty lists', function() {
    expect(car([])).toBe(undefined);
  });

  it('is undefined for numbers', function() {
    expect(car(1)).toBe(undefined);
  });

  it('is undefined for strings', function() {
    expect(car('string')).toBe(undefined);
  });
});
