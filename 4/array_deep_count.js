function deepCount(a){
  let counter = 0;
  for (let i = 0; i < a.length; i++) {
    if (typeof a[i] !== 'object') {
      counter++
    } else {
      counter += deepCount(a[i]) + 1
    }
  }
  return counter
}

console.log(deepCount([1, 2, [3, 4, [5]]]))