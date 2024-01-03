//https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&modules=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.23.6&externalPlugins=&assumptions=%7B%7D
//const a = (x,z) => x+z;
// ECMAScript === Javascript

// //let + const

// const player = "bobby";
// let experience = 100;
// let wizardLevel = false;

// if (experience > 90) {
//   let wizardLevel = true;
//   console.log("inside", wizardLevel);
// }
// console.log("outside", wizardLevel);

// //let + const2

// const player2 = "bobby";
// let experience2 = 100;
// var wizardLevel2 = false;

// if (experience2 > 90) {
//   var wizardLevel2 = true;
//   console.log("inside", wizardLevel2);
// }
// console.log("outside", wizardLevel2);

// //1
// const obj = {
//   player: "bobby",
//   experience: 100,
//   wizardLevel: false,
// };

// const player = obj.player;
// const experience = obj.experience;
// let wizardLevel = obj.wizardLevel;

// console.log(player);
// console.log(experience);
// console.log(wizardLevel);

// ////2

// const name = "john snow";

// const obj2 = { [name]: "hello", [1 + 2]: "hihi" };
// console.log(obj2);

// ////3

// const a = "Simon";
// const b = true;
// const c = {};

// const obj3 = { a: a, b: b, c: c };
// const obj4 = { a, b, c };
// console.log("obj3 : ", obj3);
// console.log("obj4 : ", obj4);

// //3
// const name3 = "Sally";
// const age = 30;
// const pet = "horse";

// //// const greeting = "Hello " + name3 + "you seem to be doing" + greeting + "!";
// const greetingBest = `Hello ${name3} you seem to be ${
//   age - 10
// }.what a lovely ${pet} `;
// console.log(greetingBest);

// ////4
// function greet(name = "", age = 30, pet = "cat") {
//   return `Hello ${name} you seem to be ${age - 10}.what a lovely ${pet} `;
// }
// console.log(greet());

////5
// let sys1 = Symbol();
// let sys2 = Symbol("foo");
// let sys3 = Symbol("foo");

// console.log(sys1);
// console.log(sys2);
// console.log(sys3);

// console.log(sys2 === sys3);

////6

function add(a, b) {
  return a + b;
}
console.log(add(1, 2));

const add2 = (a, b) => a + b;
console.log(add2(1, 2));
