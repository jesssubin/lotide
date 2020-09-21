const assertEqual = require('./assertEqual'); 

const eqArrays = function (arr1, arr2){
  let result = true; 
  for (let i = 0; i < arr1.length; i++){
  if (arr1[i] === arr2[i]){
    result = true; 
  } else {
    result = false; 
  }
  return result; 
  }
} 

module.exports = eqArrays; 