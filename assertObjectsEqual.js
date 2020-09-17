const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  let length1 = keys1.length;
  let length2 = keys2.length;
  // let result = true; 

  if (length1 !== length2) {
    return false;
  } else {
    for (const key of keys1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        // console.log(eqArrays(object1[key], object2[key])); 
        return eqArrays(object1[key], object2[key])
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  };
}

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
  if(eqObjects(actual, expected)){
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`); 
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`); 
  }

};


const obj1 = { a: '1', b: 2 }; 
const obj2 = { b: 2, a: '1' }; 

assertObjectsEqual(obj1, obj2); 