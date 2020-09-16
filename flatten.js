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

const flatten = function (arr) {
  let newArray = []; 
  let smallArray = ""; 
  for (let i = 0; i < arr.length; i++){
    let check = Array.isArray(arr[i]); 
    if(check === true){
      let nestedArr = arr[i]; 
      for (let j = 0; j < nestedArr.length; j++){
        newArray.push(nestedArr[j]); 
      }
    } else {
      newArray.push(arr[i]); 
    }
  }
  return newArray; 
}

console.log(flatten([1, 2, [3, 4], 5, [6]])); 