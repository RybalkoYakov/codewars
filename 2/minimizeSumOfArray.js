function minSum(arr) {
  arr.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < arr.length / 2; i++) {
    sum += arr[i] * arr[arr.length - 1 - i];
  }
  return sum;
}

console.log(minSum([12,6,10,26,3,24])) // 342