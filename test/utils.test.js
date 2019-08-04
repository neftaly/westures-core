/*
 * Test suite for the utils module.
 */

'use strict';

const {
  setDifference,
  setFilter,
} = require('../src/utils.js');

describe('setFilter(set, predicate)', () => {
  let set;

  beforeAll(() => {
    set = new Set([1,2,3,42,'blah',1]);
  });

  test('Throws TypeError if no set provided', () => {
    expect(() => setFilter()).toThrow(TypeError);
  });

  test('Throws TypeError if no predicate provided', () => {
    expect(() => setFilter(set)).toThrow(TypeError);
  });

  test('Returns a filtered set of elements matching the predicate', () => {
    const match = new Set([2,42]);
    const predicate = e => e % 2 == 0;
    expect(setFilter(set, predicate)).toMatchObject(match);
  });
});

describe('setDifference(left, right)', () => {
  let left, right, match;

  beforeAll(() => {
    left = new Set([1,2,3,42,'blah',1]);
    right = new Set([1,2,42]);
    match = new Set([3,'blah']);
  });

  test('Throws TypeError if left not provided', () => {
    expect(() => setDifference()).toThrow(TypeError);
    expect(() => setDifference(undefined, right)).toThrow(TypeError);
  });

  test('Throws TypeError if right not provided', () => {
    expect(() => setDifference(left)).toThrow(TypeError);
  });

  test('Returns a set consisting of (left - right)', () => {
    expect(setDifference(left, right)).toMatchObject(match);
    expect(setDifference(right, left)).toMatchObject(new Set());
  });
});

