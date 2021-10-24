// YELLING
//
// Iterate over an array of strings. For each string, print out the YELLING
// version of it. Look into how to convert a string to uppercase!

var strings = ['hello!', 'I want candy!', 'I want my mommy'];

for (var i = 0; i < strings.length; i++) {
  var capitalizedString = strings[i].toUpperCase();

  console.log(capitalizedString);
}
