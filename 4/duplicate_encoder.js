function duplicateEncode(word){
  word = word.toLowerCase()
  let counter = {}
  let out = ''

  for (let i = 0; i < word.length; i++) {
    if (!counter[word[i]]) {
      counter[word[i]] = 1
    } else {
      counter[word[i]]++
    }
  }

  for (let i = 0; i < word.length; i++) {
    if (counter[word[i]] > 1) {
      out += ')'
    } else {
      out += '('
    }
  }
  return out
}

console.log(duplicateEncode('recede'))