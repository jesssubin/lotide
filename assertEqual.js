// FUNCTION IMPLEMENTATION


const assertEqual = function(actual, expected) {
  
  if (console.assert === true) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  } else if (console.assert !== true) {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
  }

  return actual + " is equal to " + expected;
};

// TEST CODE

console.assert(assertEqual("Lighthouse Labs", "Bootcamp") === "Lighthouse Labs is equal to Bootcamp");
console.assert(assertEqual(1, 1) === "1 is equal to 1");

