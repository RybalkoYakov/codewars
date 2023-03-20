const runLengthEncoding = function(str){
  let result = []
  let tmp = []
  for (let i = 0; i < str.length; i++) {
    if (tmp.length) {
      if (tmp[tmp.length - 1] === str[i]) {
        tmp.push(str[i])
        if (i === str.length -1) {
          result.push([tmp.length, tmp[0]])
          tmp.length = 0
          tmp.push(str[i])
        }
      } else {
        result.push([tmp.length, tmp[0]])
        tmp.length = 0
        tmp.push(str[i])
        if (i === str.length -1) {
          result.push([tmp.length, tmp[0]])
          tmp.length = 0
          tmp.push(str[i])
        }
      }
    } else {
      tmp.push(str[i])
    }
  }
  return result
}

console.log(runLengthEncoding('hello world!'))