function vowelOne(s){
  let out = '';
  const vowels =['a', 'o', 'i', 'e', 'u', 'y'];
  for(let i = 0; i < s.length; i++) {
    if (vowels.some(value => value === s[i].toLowerCase())) {
      out += '1'
    } else {
      out += '0'
    }
  }
  return out;
}

console.log(vowelOne('vowelOne'))