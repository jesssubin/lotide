// index.js
const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual'); 
const assertEqual = require('./assertEqual'); 
const assertObjectsEqual = require('./assertObjectsEqual'); 
const eqArrays = require('./eqArrays'); 
const eqObjects = require('./eqObjects'); 
const countLetter = require('./countLetters'); 
const countOnly = require('./countOnly'); 
const findKey = require('./findKey'); 
const findKeyByValue = require('./findKeyByValue'); 
const flatten = require('./flatten'); 
const letterPosition = require('./letterPositions'); 
const map = require('./map'); 
const takeUntil = require('./takeUntil');
const without = require('./without'); 
const letterPositions = require('./letterPositions');

module.exports = {
  head: head,
  tail: tail,
  middle: middle, 
  assertArraysEqual: assertArraysEqual, 
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual, 
  eqArrays: eqArrays, 
  eqObjects: eqObjects, 
  countLetter: countLetter, 
  countOnly: countOnly, 
  findKey: findKey, 
  findKeyByValue: findKeyByValue, 
  flatten: flatten, 
  letterPosition: letterPosition, 
  map: map, 
  takeUntil: takeUntil, 
  without: without, 
  letterPositions: letterPositions
};