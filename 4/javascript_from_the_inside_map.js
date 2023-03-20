Array.prototype.mapArr = function (cb, thisArg) {
  const arr = new Array(this.length)

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      arr[i] = cb.call(thisArg, this[i], i, this)
    }
  }

  return arr
}


let a = [1,2,3,4,5,6,7,8,9]
a[25] = 50


// console.log(a.mapArr(value => value * 2))
console.log(a.map(value => value * 2))
