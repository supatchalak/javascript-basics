//advanced array
const array = [1, 2, 10, 16];

const double = [];
const newArray = array.forEach((num) => {
  double.push(num * 2);
  //   console.log(num, double);
});
console.log("forEach : ", double);

// map ,filter, reduce

//map
const mapArray = array.map((num) => {
  console.log(num);

  return num * 2;
});
console.log("map : ", mapArray);

//filter
const filterArray1 = array.filter((num) => num > 5);

const filterArray = array.filter((num) => {
  return num > 5;
});

console.log("filter : ", filterArray1);
console.log("filter : ", filterArray);

//reduce

//prev = accumulator, curr = num
const reduceArray = array.reduce((accumulator, num) => {
  console.log("accumulator : ", accumulator, "num", num);
  return accumulator + num;
}, 5);
console.log("reduce", reduceArray);
