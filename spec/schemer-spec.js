/*jshint esversion: 6*/
const car = require('../car.js');
const cdr = require('../functions/cdr.js');
const cons = require('../functions/cons.js');
const isAtom = require('../functions/isAtom.js');
const isNull = require('../functions/isNull.js');
const isLat = require('../functions/isLat.js');

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

describe('cons', function() {
  it('appends items onto the front of a list', function() {
    expect(cons('peanut', ['butter', 'and', 'jelly'])).toEqual(
      ['peanut', 'butter', 'and', 'jelly']
    );
  });

  it('can nest lists', function() {
    expect(cons(['peanut'], ['butter', 'and', 'jelly'])).toEqual(
      [['peanut'], 'butter', 'and', 'jelly']
    );
  });

  it('works with the empty list', function() {
    expect(cons(1, [])).toEqual([1]);
  });

  it('will put two numbers into a list', function() {
    // this is questionable behavior
    expect(cons(1, 2)).toEqual([1, 2]);
  });

  it('will put two strings into a list', function() {
    // this is questionable behavior
    expect(cons('1', '2')).toEqual(['1', '2']);
  });
});

describe('isAtom', function() {
  it('is true for numbers', function() {
    expect(isAtom(1)).toBe(true);
  });

  it('is true for strings', function() {
    expect(isAtom('abcd')).toBe(true);
  });

  it('is false for lists', function() {
    expect(isAtom([])).toBe(false);
  });
});

describe('isNull', function() {
  it('is true for a empty list', function() {
    expect(isNull([])).toBe(true);
  });

  it('is false for a list with a member', function() {
    expect(isNull([1])).toBe(false);
  });

  it('is false for atoms', function() {
    expect(isNull(1)).toBe(false);
    expect(isNull('abcd')).toBe(false);
  });
});

describe('isLat', function() {
  it('is true for the empty list', function() {
    expect(isLat([])).toBe(true);
  });

  it('is true for a list with atomic members', function() {
    expect(isLat([1])).toBe(true);
    expect(isLat(['1'])).toBe(true);
    expect(isLat([1, '1'])).toBe(true);
  });

  it('is false for a list with list members', function() {
    expect(isLat([ [] ])).toBe(false);
    expect(isLat([ 1, [] ])).toBe(false);
    expect(isLat([ 1, '2', ['3', 4] ])).toBe(false);
  }); 
});
