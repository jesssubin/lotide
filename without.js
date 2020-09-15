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
    console.log(`🥰🥰🥰 ${arr1} is equal to ${arr2}`);
  } else {
    console.log(`🙅🏻‍♀️🙅🏻‍♀️🙅🏻‍♀️ ${arr1} is NOT equal to ${arr2}`);
  }
};

const without = function(source, itemsToRemove){
  let newArray = []; 
  for(let i = 0; i < source.length; i++){
    for(let j = 0; j < itemsToRemove.length; j++){
      if(source[i] !== itemsToRemove[j]){
        newArray.push(source[i]); 
      }
    }
  }
  return newArray; 
}; 
console.log(without([1, 2, 3], [1, 2])); 

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
