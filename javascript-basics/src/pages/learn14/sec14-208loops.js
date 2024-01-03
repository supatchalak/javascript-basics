var todos = [
  "clean room",
  "brush teeeth",
  "exercise",
  "study javascript",
  "eat healthy",
];

var todosImportant = [
  "clean room!",
  "brush teeeth!",
  "exercise!",
  "study javascript!",
  "eat healthy!",
];

//=== for
// var todosLength = todos.length;
// for (var i = 0; i < todos.length; i++) {
//   console.log(todos[i]);
// }

// todos.forEach(function (todo, i) {
//   console.log(todo, i);
// });

//====
function logTodos(todo, i) {
  console.log(todo, i);
}

todos.forEach(logTodos);
todosImportant.forEach(logTodos);

//=== while
// var counterOne = 10;
// while (counterOne > 10) {
//   console.log("while : ", counterOne);
//   counterOne--;
// }

//=== while do
// var conterTwo = 10;
// do {
//   console.log("do : " + conterTwo);
//   conterTwo--;
// } while (conterTwo > 0);
