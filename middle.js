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
    console.log(`⭕️⭕️⭕️${arr1} is equal to ${arr2}`);
  } else {
    console.log(`❌❌❌${arr1} is NOT equal to ${arr2}`);
  }
}; 

const middle = function (arr) {
  let arrLength = arr.length;
  let middleArr = [];
  let middleIndex = Math.floor(arrLength / 2); 

  if(arrLength <= 2) {
    middleArr; 
  } else if (arrLength % 2 === 1) {
    middleArr.push(arr[middleIndex]); 
  } else if (arrLength % 2 === 0) {
    middleArr.push(arr[middleIndex - 1], arr[middleIndex]);  
  }
  return middleArr; 
}

//TEST CODES
console.log(middle([1])) // => []
console.log(middle([1, 2]))// => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5]))// => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]