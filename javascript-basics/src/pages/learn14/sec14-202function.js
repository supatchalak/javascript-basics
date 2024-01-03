//202. JavaScript On Our Webpage
// 4 + 3;
// if (4 + 3 === 7) {
//   //   alert("You're smart!");
//   console.log("helloooo");
// }

//203. Functions
//Function Declaration
function sayHello() {
  console.log("Hello");
}

// sayHello();

var sayBye = function () {
  console.log("Bye");
};

// sayBye();

function sing() {
  console.log("AHHHHH");
  console.log("TEEEEE");
}

// sing();

function sing2(song) {
  console.log(song);
}
// sing2("laaa deee  daaa");
// sing2("Hello");
// sing2("test");

//======
// function multiply(a, b) {
//   console.log(a, b);
//   return a * b;
// }

// multiply(5, 10);

// function multiply(a, b) {
//   if (a > 10 || b > 10) {
//     return "that's too hard";
//   } else {
//     return a * b;
//   }
//   return a * b;
// }

// multiply(5, 10);

//=======
function multiply(a, b) {
  return a * b;
}
// alert(multiply(5, 10));

var total = multiply(4, 5);
alert(total);

// parameters
// arguments
