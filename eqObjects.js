const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
    return `${actual} is equal to ${expected}`;
  } else if (actual !== expected) {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
    return `${actual} is not equal to ${expected}`;
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqArrays = function (arr1, arr2) {
  let result = true;
  if (arr1.length !== arr2.length){
    return false; 
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      result = true;
    } else {
      result = false;
    }
    return result;
  }
} 

const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1); 
  const keys2 = Object.keys(object2); 
  let length1 = keys1.length; 
  let length2 = keys2.length;
  // let result = true; 

  if (length1 !== length2){
    return false; 
  } else {
     for (const key of keys1){
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        // console.log(eqArrays(object1[key], object2[key])); 
        return eqArrays(object1[key], object2[key])
      } else if (object1[key] !== object2[key]){
        return false; 
      }
      }
      return true; 
    }; 
}
  // return result; 




const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertEqual(eqObjects(ab, ba), true)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(assertEqual(eqObjects(ab, abc), false)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertEqual(eqObjects(cd, dc), true)); // =>true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertEqual(eqObjects(cd, cd2), false)); // => false

