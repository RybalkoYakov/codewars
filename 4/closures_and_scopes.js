function createFunctions(n) {
  const cb = []
  for (let i = 0; i < n; i++) {
    cb.push(function (i) {
      return i
    })
  }
  return cb
}