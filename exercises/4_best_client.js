// ### Best Client
//
// Kayla gets paid various amounts by each client for a dog walk. The array
// below holds 7 numbers, the hourly amounts. Write a function that takes one
// argument, an Array of Numbers, and that returns her highest paying
// dog-walking gig.
//
// If this were the array representing Kayla’s different hourly rates:
// `var hourlyPay = [22, 17, 29, 16, 18]`, this function should return the
// Number `29`.

var hourlyPay = [22, 17, 29, 16, 18];

function bestClient(hourlyPay) {
  var mostPay = 0;

  for (var i = 0; i < hourlyPay.length; i++) {
    if (hourlyPay[i] > mostPay) { mostPay = hourlyPay[i]; }
  }
  
  console.log(mostPay);
}

bestClient(hourlyPay);
