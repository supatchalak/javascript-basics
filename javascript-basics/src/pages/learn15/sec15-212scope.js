//====1
// var b = "Can I access this?";

// function bb() {
//   b = "hello";
// }
// console.log(b);

////====2
// //root scope
// var fun = 5;
// function funFunction() {
//   var fun = "hellooo";
//   //child scope
//   console.log(1, fun);
// }

// function funerFunction() {
//   //child scope
//   var fun = "Bye";
//   console.log(2, fun);
// }

// function funestFunction() {
//   //child scope
//   //fun = "AHHHH";

//   var fun = "AHHHH";
//   console.log(3, fun);
// }

// console.log("window", fun); //function
// funFunction();
// funerFunction();
// funestFunction();
// console.log("window2", fun); //function

//====3
var fun = 5;

function funestFunction() {
  //child scope
  console.log(fun);
}
