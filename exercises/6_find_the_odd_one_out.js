// Find the Odd (or Even) One Out
//
// Write a function that takes in one argument - an array of numbers. The array
// must have at least 3 elements. All numbers except for one of them will be
// either even or odd. You job is to return that one number that is the
// exception. Below are some example inputs and outputs. Make sure your
// function works on them all.
//
// Input: `[1, 3, 5, 6]`, Output: `6`
//
// Input: `[10, 15, 20, 30, 40, 50]`, Output: `15`
//
// Input: `[19, 5, 42, 1, 77]`, Output: `42`

function oddOneOut(numbers) {
  var oddArray = [], evenArray = [];

  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      evenArray.push(numbers[i]);
    } else {
      oddArray.push(numbers[i]);
    }
  }

  console.log(oddArray.length == 1 ? oddArray[0] : evenArray[0]);
}

var numbers = [1, 3, 5, 6];
oddOneOut(numbers);

var numbers = [10, 15, 20, 30, 40, 50];
oddOneOut(numbers);

var numbers = [19, 5, 42, 1, 77];
oddOneOut(numbers);
