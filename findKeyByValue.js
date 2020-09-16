
const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
    return `${actual} is equal to ${expected}`;
  } else if (actual !== expected) {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
    return `${actual} is not equal to ${expected}`;
  }
};

const findKeyByValue = function (obj, value){
  //Object.keys returns an array with the name of all the keys 
  //keys = ['sci_fi', 'commedy', 'drama']
  let keys = Object.keys(obj); 
  for (const key of keys) {
    //obj[key] will access to the values in obj
    if(obj[key] === value){
      return key; 
    }
  }
    
  }; 

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);