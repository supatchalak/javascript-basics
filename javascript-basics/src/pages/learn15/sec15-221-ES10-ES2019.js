const array = [1, 2, 3, 4, 5];
console.log(array.flat());

const array2 = [1, [2, 3], [4, 5]];
console.log(array2.flat());

const array3 = [1, [2, 3, 4, [5]]];
console.log(array3.flat());

const array4 = [1, 2, 3, 4, [5]];
console.log(array4.flat());

///
const entries = ["bob", "sally", , , , , , "cindy"];
console.log(entries.flat());

const jurasicPark = [["🐵", "🐶"], "🐕", "🐩", ["🐺", "🐱"], [[["🐈"]]], "🦁"];
const jurasicParkChaos = jurasicPark.flatMap((creature) => creature + "🐈");
console.log(jurasicParkChaos);

const userEmail1 = "   eddy@gmail.com";
const userEmail2 = "jhudy@gmail.com         ";
console.log(userEmail1.trimStart());
console.log(userEmail2.trimEnd());
