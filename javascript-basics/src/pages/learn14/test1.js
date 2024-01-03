let arr = [1, 2, 3, 5, 4];

function minMax(arr) {
  let min = 10000;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
    // console.log(i, min, max);
  }
  return [min, max];
}

console.log(minMax(arr));

console.log("done");
