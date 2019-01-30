/**
 * Test suite for the Input class.
 */

'use strict';

const Input     = require('../src/Input.js');
const PointerData = require('../src/PointerData.js');

describe('Module exists', () => {
  expect(Input).toBeDefined();
});

let event = {
  type: 'mousedown',
  clientX: 42,
  clientY: 43,
  target: document
};

// let event = new MouseEvent('mousedown');
// document.dispatchEvent(event);

describe('constructor', function() {
  let input;
  test('Can be instantiated', () => {
    expect(() => input = new Input(event, 1234)).not.toThrow();
  });

  test('has an initial event', function() {
    expect(input.initial).toBeInstanceOf(PointerData);
  });

  test('has a current event', function() {
    expect(input.current).toBeInstanceOf(PointerData);
    expect(input.current).toEqual(input.current);
  });

  test('has a previous event', function() {
    expect(input.previous).toBeInstanceOf(PointerData);
    expect(input.previous).toEqual(input.current);
  });
});

describe('getters', () => {
  let input = new Input(event, 1234);

  describe('phase', () => {
    test('Returns the current phase of the Input', () => {
      expect(input.phase).toBe('start');
    });
  });

  describe('currentTime', () => {
    test('Returns the time of the current event', () => {
      expect(input.currentTime).toBe(input.current.time);
    });
  });

  describe('startTime', () => {
    test('Returns the time of the initial event', () => {
      expect(input.startTime).toBe(input.initial.time);
    });

  });
});

describe('update', function() {
  let input = new Input(event, 1234);
  test('updates the current event', function() {
    let newEvent = {
      type: 'mousemove',
      clientX: 45,
      clientY: 41,
      target: document
    };
    input.update(newEvent, 4321);
    expect(input.previous).not.toBe(input.current);
  });
});

describe('getProgressOfGesture', function() {
  let input = new Input(event, 1234);

  test('should have no progress initially', function() {
    expect(input.getProgressOfGesture('tap')).toEqual({});
  });

  test(`should have be able to store metadata in the progress object.`,
    function() {
    expect(input.getProgressOfGesture('tap')).toEqual({});
    input.getProgressOfGesture('tap').foo = 8;
    expect(input.getProgressOfGesture('tap').foo).toEqual(8);
  });
});

