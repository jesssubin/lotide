
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
  if (eqArrays(arr1, arr2)) {
    console.log(`💚💚💚 ${arr1} is equal to ${arr2}`);
  } else {
    console.log(`💔💔💔 ${arr1} is NOT equal to ${arr2}`);
  }
};

const takeUntil = function (array, callback) {
  const results = []; 
  for (let item of array){
    //callback(item) is going to give a boolean value; only the condition is true; 
    if (callback(item)){
      return results; 
    } else {
      results.push(item); 
    }
  }
  return results; 
}

//Test Cases
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


assertArraysEqual([1, 2, 5, 7, 2], results1); 
//Expected Output 
// [1, 2, 5, 7, 2]
// ---
//   ['I\'ve', 'been', 'to', 'Hollywood']

