// Remember, you can solve this problem either in this exercise editor or in your own code editor!

// Given a string, return a new string with the reversed order of characters.

// Examples:

// reverse('apple') === 'leppa'
// reverse('hello') === 'olleh'
// reverse('Greetings!') === '!sgniteerG'
// You should put your implementation into the reverse function that was defined for you below.  You don't need to call reverse yourself.
// Example of what your completed code should look like:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// solution#1
function reverse(str) {
  //   const arr = str.split(""); //ได้ array ของ string
  //   arr.reverse();
  //   return arr.join("");
  return str.split("").reverse().join("");
}
console.log(reverse("apple"));
console.log("done");
//inplace บางทีไปแก้ตัว input ของ function
//=======

function reverse2(str) {
  const arr = str.split("");
  arr.reverse();
  return arr.join("");
}
console.log(reverse2("Greetings!"));
console.log("done");
