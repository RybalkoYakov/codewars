function add(num1, num2) {
  let result = []
  let longer, shorter;

  if (num1 > num2) {
    longer = num1.toString().split('').map(value => parseInt(value)).reverse()
    shorter = num2.toString().split('').map(value => parseInt(value)).reverse()
  } else {
    longer = num2.toString().split('').map(value => parseInt(value)).reverse()
    shorter = num1.toString().split('').map(value => parseInt(value)).reverse()
  }

  for (let i = 0; i < longer.length; i++) {
    if (shorter[i]) {
      result.unshift(longer[i] + shorter[i])
    } else {
      result.unshift(longer[i])
    }
  }

  return parseInt(result.join(''))
}

console.log(add(15, 167)) // 1712
console.log(add(122, 81)) // 1103
console.log(add(49999, 49999)) // 818181818