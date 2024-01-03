// Remember, you can solve this problem either in this exercise editor or in your own code editor!

// Given a string, return a new string with the reversed order of characters.

// Examples:

// reverse('apple') === 'leppa'
// reverse('hello') === 'olleh'
// reverse('Greetings!') === '!sgniteerG'
// You should put your implementation into the reverse function that was defined for you below.  You don't need to call reverse yourself.
// Example of what your completed code should look like:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// solution#2
function reverse(str) {
  let reversed = "";

  // for (let i = 0; i < str.length; i++) {
  //   console.log(i);
  // }

  for (let i in str) {
    console.log(i, str.charAt(i), str[i]);
  }

  // for (let character of str) {
  //   console.log(typeof character, character);
  //   reversed = character + reversed;
  // }
  // console.log(str);

  return reversed;
}
console.log(reverse("Greetings!"));
console.log("done");

//for let in ==> index
//for let of ==> value การวนของใน arr
