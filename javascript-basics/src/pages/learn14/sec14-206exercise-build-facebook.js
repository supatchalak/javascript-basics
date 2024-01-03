var database = [{ username: "andrei", password: "supersecret" }];

var newsFeed = [
  { username: "Bobby", password: "So tired from all that learning!" },
  { username: "Sally", password: "Javascript is so cool!" },
  { username: "Mitch", password: "Javascript is prety cool!" },
];

function signIn(username, password) {
  if (username === database[0].username && password === database[0].password) {
    console.log(newsFeed);
  } else {
    alert("Sorry, wrong username and password");
  }
}

var usernamePrompt = prompt("Whai's your username");
var passwordPrompt = prompt("Whai's your password");

signIn(usernamePrompt, passwordPrompt);
