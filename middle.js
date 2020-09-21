const assertArraysEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

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



module.exports = middle; 