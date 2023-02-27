function sortMyString(S) {
  const even = [];
  const odd = [];
  for (let i = 0; i < S.length; i++) {
    if (i % 2 === 0) {
      odd.push(S[i]);
    } else {
      even.push(S[i]);
    }
  }
  return `${odd.join('')} ${even.join('')}`;
}

console.log(sortMyString('0123456789'))