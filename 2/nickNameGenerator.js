function nicknameGenerator(name){
  if (name.length < 4) return 'Error: Name too short';
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.some(value => value === name[2])) {
    return name.slice(0,4);
  } else {
    return name.slice(0,3)
  }
}

console.log(nicknameGenerator('Jacob'));