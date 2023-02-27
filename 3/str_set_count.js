function strCount(obj){
  let counter = 0
  Object.values(obj).forEach(value => {
    if (typeof value === 'string') {
      counter++
    } else if (typeof value === 'object' && value !== null) {
      counter += strCount(value);
    }
  })
  return counter
}

console.log(strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
}))