Array.prototype.filter1 = function (cb, thisArg) {
  const arr = []
  const originalLength = this.length

  for (let i = 0; i < originalLength; i++) {
    if (cb.call(thisArg, this[i], i, this)) {
      arr.push(this[i])
    }
  }

  return arr
}

let a = [1,2,3,4,5]

let b = a.filter1(function (value) {
  return value >= 2
})

console.log(b)