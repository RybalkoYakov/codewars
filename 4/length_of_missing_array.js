function getLengthOfMissingArray(arrayOfArrays) {
  if (!arrayOfArrays || !arrayOfArrays.length) return 0
  const arr = arrayOfArrays.map(value => value.length).sort((a, b) => a - b)
  const diff = arr[0]
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] !== i + diff) return i + diff
  }
}


console.log(getLengthOfMissingArray(null))