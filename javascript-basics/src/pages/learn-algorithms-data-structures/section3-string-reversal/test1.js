// Remember, you can solve this problem either in this exercise editor or in your own code editor!

// Given a string, return a new string with the reversed order of characters.

// Examples:

// reverse('apple') === 'leppa'
// reverse('hello') === 'olleh'
// reverse('Greetings!') === '!sgniteerG'
// You should put your implementation into the reverse function that was defined for you below.  You don't need to call reverse yourself.
// Example of what your completed code should look like:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

//หา length เป็นค่าเริ่มต้น
//index = 0 คือตัวสุดท้าย

// solution
function reverse(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    console.log(i, str[i]);
    newString = newString + str[i];
  }
  return newString;
}
// console.log(reverse("apple"));
// console.log("done");

console.log(reverse("Greetings!"));
console.log("done");
