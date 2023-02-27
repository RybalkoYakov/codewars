function nbDig(n, d) {
  let numbers = '';
  for (let i = 0; i <= n; i++) {
    let number = (i * i).toString();
    if (number.indexOf(d) !== -1) {
      numbers += number;
    }
  }
  return numbers.match(new RegExp(`${d}`, 'g')).length;
}

console.log(nbDig(25, 1))