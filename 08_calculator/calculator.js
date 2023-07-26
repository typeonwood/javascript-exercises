const add = (num1, num2) => num1 + num2

const subtract = (num1, num2) => num1 - num2

const sum = function(array) {
  let output = 0;
  array.forEach((item) => {
    output += item
  })
  return output
}

const multiply = function(array) {
  let output = 0;
  array.forEach((item) => {
    if (output === 0) {
      output = item
    }
    else {
      output *= item
    }
  })
  return output
}

const power = (num1, num2) => num1 ** num2

const factorial = function(num) {
  output = num
  if (num === 0 || num === 1) return 1
  for (let i = num; i > 1; i--) {
    output *= (i - 1)
  }
  return output
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
