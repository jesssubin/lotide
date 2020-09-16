const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
    return `${actual} is equal to ${expected}`;
  } else if (actual !== expected) {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
    return `${actual} is not equal to ${expected}`;
  }
};

const countLetters = function (str) {
  let outcome = {}; 
  for(const letter of str){
    console.log("letter", letter); 
    console.log("str[letter]", str[letter])
    //if the letter exists already in the outcome 
    if(outcome[letter]){
      // console.log("str[letter]", str[letter]); 
      outcome[letter] += 1;
    } else{
      outcome[letter] = 1; //0 is a falsy value; 
    }
  }
  return outcome; 
}

console.log(countLetters("lighthouselabs")); 