'use strict';

// Two Sum: Write a function that takes an array of integers and a target integer. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in an array like so: [index1, index2].
// input: [1, 2, 3, 4, 5, 6, 7], 13
// output: [5,6]
// input: [1, 3, 5, 7, 9], 8
// output: [0,3]

// Write tests for it
// Some hints to get you started if you want to use Mocha test suite with the Chai Assertion library
// npm init
// npm install mocha chai --save

var testArr = [1, 3, 5, 7, 9];
var testArr2 = [1, 2, 3, 4, 5, 6, 7];

function twoSum(intArr, targetInt) {
  for (let i = 0; i < intArr.length; i++) {
    if (intArr.includes(targetInt - intArr[i])) {
      return [intArr.indexOf(intArr[i]), intArr.indexOf(targetInt - intArr[i])];
    }
  }
}

// Works as expected:
console.log(twoSum(testArr, 8));
console.log(twoSum(testArr2, 13));

module.exports = twoSum;
