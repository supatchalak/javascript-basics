////4 Compose

const mulN = function (n) {
  return function (x) {
    return x * n;
  };
};
const mul2 = mulN(2);
console.log(mul2(5)); //10
console.log(mul2(3)); //6

console.log(mulN(3)(5)); //high order function

////#1 fn รับ n return  fn x รับ x return x+n
const mulNN = (n) => (x) => x * n;
console.log(mulNN(2)(4));

const compose = (f, g) => (a) => f(g(a));
console.log(compose(mulNN(5), mulNN(3))(2)); //f(g(a)) 5*3*2

//10+3*2
const ff = (n) => 10 + n;
const gg = (n) => 3 * n;
console.log(compose(ff, gg)(2));
//15 - 8 / 4
console.log(
  compose(
    (n) => 15 - n,
    (n) => 8 / n
  )(4)
);

//   const sum = (num) => num + 1;

//   console.log(compose(sum, sum)(0));

//   ///
//   const compose2 = (f, g) => (a) => f(7);

//   const sum2 = (num) => num + 1;

//   console.log(compose2(sum2, sum2)(5));

/////

// let x = 0;
const counter = function () {
  //   let x = 0;

  return function () {
    let x = 0;
    x = x + 1;
    return x;
  };
};

const c1 = counter();
const c2 = counter(); //ถ้าใช้ let x = 0 ข้างนอก c1 และ c2 ไปเรียก x ที่ refer ตัวเดียวกัน
console.log("c1 :", c1());
console.log("c1 :", c1());
console.log("c1 :", c1());

console.log("c2 :", c2());
