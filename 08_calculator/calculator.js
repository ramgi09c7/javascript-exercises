const add = function(a, b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(nums) {
	return nums.reduce((acc, num) => acc + num, 0)
};

const multiply = function(nums) {
  return nums.reduce((acc, num) => acc * num, 1)
};

const power = function(a,b) {
  return Array(b).fill(4).reduce((acc,num) => acc * num, 1)
};

const factorial = function(number) {

  let start = number

  Array.from(Array(number), (_, index) => { 
    return start - index
  })
};

factorial(5)

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
