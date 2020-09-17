const eqArrays = function (arr1, arr2) {
  let result = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      result = true;
    } else {
      result = false;
    }
  }
  return result;
}

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`💚💚💚 ${arr1} is equal to ${arr2}`);
  } else {
    console.log(`💔💔💔 ${arr1} is NOT equal to ${arr2}`);
  }
};


const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item)); 
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
  }
  return results;
}
const results1 = map(words, word => word[0]);
console.log(results1);

const a1 = ['g', 'c', 't', 'm', 't']; 

//i dont need to console.log assertArrayEqual since it already has console.log part insde of the function itself 
assertArraysEqual(a1, results1);
