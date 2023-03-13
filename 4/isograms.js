function isIsogram(str){
  return str.length === new Set(str.split('').map(value => value.toLowerCase())).size
}

console.log(isIsogram('Dermatoglyphics'))