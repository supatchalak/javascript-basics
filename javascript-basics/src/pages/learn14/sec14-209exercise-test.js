var database = [
  { username: "andrei", password: "supersecret" },
  { username: "sally", password: "123" },
  { username: "ingrid", password: "777" },
];

var newsFeed = [
  { username: "Bobby", password: "So tired from all that learning!" },
  { username: "Sally", password: "Javascript is so cool!" },
  { username: "Mitch", password: "Javascript is prety cool!" },
];

function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (
      database[i].username === username &&
      database[i].password === password
    ) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  // let valid = isUserValid(username, password);
  let valid = false;
  for (var i = 0; i < database.length; i++) {
    console.log(i);
    if (
      database[i].username === username &&
      database[i].password === password
    ) {
      valid = true;
      // break;
      continue;
    }
    console.log("1111111");
  }
  // return false;

  // if (isUserValid(username, password))
  if (valid) {
    console.log("success");

    // console.log(newsFeed);
  } else {
    console.log("Sorry, wrong username and password");
    // alert("Sorry, wrong username and password");
  }
}
var usernamePrompt = prompt("Whai's your username");
var passwordPrompt = prompt("Whai's your password");

signIn(usernamePrompt, passwordPrompt);
