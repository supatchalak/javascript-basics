// /////1
// const first = () => {
//   const greet = "Hi";
//   const second = () => {
//     console.log(greet);
//   };
//   return second;
// };

// const newFunc = first();
// newFunc();

/////2 Closure

const first = () => {
  const greet = "Hi";
  const second = () => {
    const name = "bobby";
    console.log(greet);
  };
  return second;
};

const newFunc = first();
newFunc();

// /////3 Currying
// const multiply = (a, b) => a * b;
// const curriedMultiply = (a) => (b) => a * b;
// const multiplyBy5 = curriedMultiply(5);

// // console.log(multiply(3, 4));

// // console.log(curriedMultiply(3)(4)); //a as 3 , b as 4
// console.log(multiplyBy5(10));

/////4 Compose

const mulN = function () {
  return function (x) {
    return x;
  };
};
const mul2 = mulN();
console.log(mul2(5)); //10
console.log(mul2(3)); //6

const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;

console.log(compose(sum, sum)(0));

///
const compose2 = (f, g) => (a) => f(7);

const sum2 = (num) => num + 1;

console.log(compose2(sum2, sum2)(5));

//Avoiding side effects, functional party
var a = 1;
function b() {
  a = 2;
  return a;
}
console.log(b());
