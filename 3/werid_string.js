function toWeirdCase(string){
  let words = string.split(/\s+/g).map(word => {return  word.split('')});
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (j % 2 === 0) {
        words[i][j] = words[i][j].toUpperCase();
      } else {
        words[i][j] = words[i][j].toLowerCase();
      }
    }
    words[i] = words[i].join('')
  }
  return words.join(' ')
}

console.log(toWeirdCase('Weird       string   case'))