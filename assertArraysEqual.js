const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
    return `${actual} is equal to ${expected}`;
  } else if (actual !== expected) {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
    return `${actual} is not equal to ${expected}`;
  }
};

const eqArrays = function (arr1, arr2) {
  let result = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      result = true;
    } else {
      result = false;
    }
    return result;
  }
} 

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)){
    console.log(`⭕️⭕️⭕️${arr1} is equal to ${arr2}`); 
  } else {
    console.log(`❌❌❌${arr1} is NOT equal to ${arr2}`);
  }
};

let a1 = ['cat', 'dog', 'fish']; 
let a2 = ['cat', 'dog', 'fish']; 

assertArraysEqual(a1, a2); 



