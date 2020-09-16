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

const letterPositions = function (sentence) {
  const results = {};
  let letterIndex = 0; 
  for(let i = 0; i < sentence.length; i++) {
    let letter = sentence[i]; 
    if (letter !== " "){
     if (results[letter]){
      letterIndex = i; 
      results[letter].push(letterIndex); 
    } else {
      results[letter] = [i]; 
    }
  }
  }

  return results;
};




console.log(assertArraysEqual(letterPositions("hello").e, [1])); 
console.log(letterPositions("lighthouse in the house"));
//Expected output: 
// {
// l: [0],
// i: [1, 11],
// g: [2],
// h: [3, 5, 15, 18],
// t: [4, 14],
// o: [6, 19],
// u: [7, 20],
// s: [8, 21],
// e: [9, 16, 22],
// n: [12]
// }