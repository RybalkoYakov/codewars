function myLanguages(results) {
  let tmp = []
  Object.values(results).map((value, index) => {
    if (value >= 60) {
      tmp.push(Object.keys(results)[index])
    }
  })
  return tmp.sort((a, b) => results[b] - results[a])
}

console.log(myLanguages({"Java": 10, "Ruby": 80, "Python": 65}))