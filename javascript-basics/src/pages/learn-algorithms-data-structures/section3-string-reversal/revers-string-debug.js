// Remember, you can solve this problem either in this exercise editor or in your own code editor!

// Given a string, return a new string with the reversed order of characters.

// Examples:

// reverse('apple') === 'leppa'
// reverse('hello') === 'olleh'
// reverse('Greetings!') === '!sgniteerG'
// You should put your implementation into the reverse function that was defined for you below.  You don't need to call reverse yourself.
// Example of what your completed code should look like:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// solution#3
function reverse(str) {
  debugger;
  return str.split("").reduce((reversed, character) => {
    return character + reversed;
  }, "");
}

// // solution#3-2
// function reverse(str) {
//   return str.split("").reduce((rev, char) => char + rev, "");
// }

console.log(reverse("Greetings!"));
console.log("done");
