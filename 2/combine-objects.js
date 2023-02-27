const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
const objC = { a: 5, d: 11, e: 8 }
const objD = { c: 3 }

function combine() {
  let result = {}
  for (let i = 0; i < arguments.length; i++) {
    for (const prop in arguments[i]) {
      if (Object.keys(result).some(value => {return value === prop})) {
        result[prop] += arguments[i][prop]
      } else {
        result[prop] = arguments[i][prop]
      }
    }
  }
  return result
}

console.log(combine(objA, objB, objC, objD))