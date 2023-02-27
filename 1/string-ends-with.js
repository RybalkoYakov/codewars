function solution(str, ending){
  return str.slice(str.lastIndexOf(ending)) === ending;
}

console.log(solution('abcabc', 'bc'))