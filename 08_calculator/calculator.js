const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
    return array.length
      ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
      : 0;
};

const power = function(a, b) {
  return a**b;
};

const factorial = function(x) {
  let sum = 1;
  for (let i = x; i > 0; i--){
    sum *= i;
  }
  return sum;
};

// This is another implementation of Factorial that uses recursion
// THANKS to @ThirtyThreeB!
const recursiveFactorial = function(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial (n-1);
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
