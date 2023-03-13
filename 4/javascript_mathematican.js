function calculate() {
  let outerSum = 0
  Array.from(arguments).forEach(value => outerSum += value)
  return function () {
    let innerSum = 0
    Array.from(arguments).forEach(value => innerSum += value)
    return outerSum + innerSum
  }
}

console.log(calculate(1,2,3,-2)(1,8))