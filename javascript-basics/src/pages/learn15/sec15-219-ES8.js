// //     Turle
// console.log("Turle".padStart(10));
// //Turle
// console.log("Turle".padEnd(10));

// //

// const fun = (a, b, c, d) => {
//   console.log(a);
// };

// fun(1, 2, 3, 4);

// //

// Object.values;
// Object.entries;
// Object.keys;

let obj = {
  username0: "Santa",
  username1: "Rudolf",
  username2: "Mr.Granch",
};

// Object.keys(obj).forEach((key, index) => {
//   console.log(key, obj[key]);
// });

// Object.values(obj).forEach((value) => {
//   console.log(value);
// });

// Object.entries(obj).forEach((value) => {
//   console.log(value);
// });

Object.entries(obj).map((value) => {
  console.log(obj, value);

  return value[1] + value[0].replace("username", "");
});
console.log("=====");
