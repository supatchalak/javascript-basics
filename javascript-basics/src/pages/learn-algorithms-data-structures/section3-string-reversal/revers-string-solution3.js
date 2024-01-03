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
  return str.split("").reduce((reversed, character) => {
    console.log("reversed : ", reversed, "character : ", character);
    return character + reversed;
  }, "");
}

// // solution#3-2
// function reverse(str) {
//   return str.split("").reduce((rev, char) => char + rev, "");
// }

// console.log(reverse("Greetings!"));
// console.log("done");
function merg(x, y) {
  return x + y;
}

// let d = [1, 2, 3];
// console.log(d.reduce(merg, 0));
// console.log(d.reduce((x, y) => x + y, 0));

// console.log(d.map((x) => x * 2));
// console.log(d);

let b = true;
console.log(b, !b, !!b);

let x = 0;
console.log(x, !x, !!x, !!!x); //ใช้ convert เป็น boolean ส่วนใหญ่ใช้ !!x, !(!!x)

// d.reduce(function (prev, curr) {
//   console.log(prev, curr);
//   let ret = prev + curr;
//   console.log(ret);
//   return ret;
// }, 0);

//รอบแรก เอาค่า initial ไปเป็นค่า prev กับ item แรกใน array
