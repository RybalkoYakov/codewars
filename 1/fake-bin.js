function fakeBin(x){
  return x.split('').map((value) => value < 5 ? '0' : '1').join('')
}

console.log(fakeBin('123456789984157246'))