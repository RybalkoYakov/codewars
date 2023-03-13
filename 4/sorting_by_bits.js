function sortByBit(arr) {
  const count = (string) => {
    let counter = 0
    for (let i = 0; i < string.length; i++) {
      if (string[i] === '1') counter++
    }
    return counter
  }
  return [...arr].map(value => value.toString(2)).sort((a, b) => count(a) - count(b) || parseInt(a,2) - parseInt(b,2)).map(value => parseInt(value, 2))
}

console.log(sortByBit([3, 8, 3, 6, 5, 7, 9, 1]))