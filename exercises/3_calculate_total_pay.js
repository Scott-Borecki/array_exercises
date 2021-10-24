// ### Calculate Total Pay
//
// Trisha gets paid $22 each time she walks a dog. The array below holds 7
// numbers, the number of dog walks she took each day last week. Write a
// function that takes one argument, an Array of Numbers, and that returns
// her total pay.
//
// `var dogWalks = [4, 5, 2, 2, 6, 1, 3]`

var dogWalks = [4, 5, 2, 2, 6, 1, 3];

function calculateTotalPay(dogWalks) {
  var totalPay = 0;

  for (let i = 0; i < dogWalks.length; i++) {
    totalPay = totalPay + dogWalks[i] * 22;
  };

  console.log(totalPay);
};

calculateTotalPay(dogWalks);
