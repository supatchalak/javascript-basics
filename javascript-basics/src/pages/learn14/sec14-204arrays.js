var list = ["tiger", "cat", "bear", "bird"];
// console.log(list[1]);

var number = [1, 2, 3, 4];
// var boolean = [true, fale, true];

var functionList = [
  function apple() {
    console.log("apple");
  },
];

var mixedList = [
  "apples",
  3,
  undefined,
  true,
  function apple() {
    console.log("apple");
  },
];

var list = [["tiger", "cat", "bear", "bird"]];
console.log(list[0][2]);

// list.shift();

// list.pop();

list.push("elephant");
console.log(list);

list.concat(["bee", "deer"]);

list.sort();
