function getLengthOfMissingArray(arrayOfArrays) {
  arrayOfArrays.forEach(value => {
    if (!value) return 0
  })
  if (!arrayOfArrays || !arrayOfArrays.length) return 0

  arrayOfArrays.sort((a, b) => {
    if (a && b && a.length && b.length) return a.length - b.length
  });


  let expectedLength = arrayOfArrays[0].length;

  for (let array of arrayOfArrays) {
    if (!array || array.length === 0) return 0

    if (array.length !== expectedLength) return expectedLength

    expectedLength++;
  }
}