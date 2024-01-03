const data = [1, 2, 3, 4, 5, 6];
//หาผลรวมของตัวเลขคู่ใน arr
//หาเลขคู่
//คูณ 3 แล้วหาผลรวม

const filterEvent = data.filter((num) => {
  return num % 2 === 0;
});

// console.log(filterEvent);

const mapEvent = filterEvent.map((num) => {
  console.log(num);
  return num * 3;
});

// console.log(mapEvent);

const sumEvent = mapEvent.reduce((prev, curr) => {
  console.log(prev, curr);
  return prev + curr;
}, 0);

console.log(sumEvent);

///=====
console.log("===============");

const result = data
  .filter((num) => num % 2 === 0)
  .map((num) => num * 2)

  .reduce((prev, curr) => prev + curr, 0);

console.log(result);
