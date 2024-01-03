var database = [
  { username: "sally", password: "123" },
  //   { username: "andrei", password: "supersecret" },
  { username: "ingrid", password: "777" },
];

//function return pass ที่ยาวที่สุด
//กรณียาวเท่ากัน return อันแรกก่อน

function maxLength(database) {
  let maxPass = "";
  let maxIndex = 0;

  for (let i = 1; i < database.length; i++) {
    // console.log(i, database[i]);
    // console.log(i, database[i].password.length);
    console.log(maxPass, "<", database[i].password);
    if (database[maxIndex].password.length <= database[i].password.length) {
      maxIndex = i;
      //   console.log(maxPass, database[i].password);
    }
  }
  return database[maxIndex].password;
}

function a() {
  return 10;
}

console.log(maxLength(database));
console.log("done");
