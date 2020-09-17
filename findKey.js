
const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
    return `${actual} is equal to ${expected}`;
  } else if (actual !== expected) {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
    return `${actual} is not equal to ${expected}`;
  }
};

const findKey = (object, callback) => {
  for(const key in object){
    // console.log(key); 
    if(callback(object[key])){
      return key; 
    } 
  }
}

const obj = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}
// console.log(obj.noma); 
// console.log(obj.noma.stars); 

//TEST CODE
console.log(findKey(obj, x => x.stars === 2));  // => "noma"