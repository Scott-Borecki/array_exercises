// ### Sum of Two
//
// Write a function that takes one argument, an Array of Numbers. It should
// return the sum of the two lowest positive numbers in that array (an array
// with a minimum of 4 numbers will be passed in). No empty arrays will be
// passed in. For example, when an array is passed in like `[19, 5, 42, 2, 77]`,
// the output should be `7` because `5 + 2 = 7`.

var numbers = [19, 5, 42, 2, 77];

function sumOfTwo(numbers) {
  var lowestPositiveNumbers = [];

  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      continue;
    } else if (lowestPositiveNumbers.length < 2 ) {
      lowestPositiveNumbers.push(numbers[i]);
    } else if (lowestPositiveNumbers[0] > numbers[i] ||
      lowestPositiveNumbers[1] > numbers[i]) {
        if (lowestPositiveNumbers[0] > lowestPositiveNumbers[1]) {
          lowestPositiveNumbers[0] = numbers[i];
        } else {
          lowestPositiveNumbers[1] = numbers[i];
        }
    }
  }

  var sum = lowestPositiveNumbers[0] + lowestPositiveNumbers[1];
  console.log(sum);
}

sumOfTwo(numbers);
