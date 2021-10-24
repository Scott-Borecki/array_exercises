// Calculate Daily Pay
//
// Trisha gets paid $22 each time she walks a dog. The array below holds 7
// numbers, the number of dog walks she took each day last week. Iterate over
// the array, and print out “Trisha earned $__ today!” for each day.
//
// var dogWalks = [4, 5, 2, 2, 6, 1, 3]

var dogWalks = [4, 5, 2, 2, 6, 1, 3];

for (var i = 0; i < dogWalks.length; i++) {
  var moneyEarned = dogWalks[i] * 22;

  console.log(`Trisha earned $${moneyEarned} today!`);
};
