function brightest(colors){
  colors = colors.map(value => value.replace('#', ''));
  function v(color){
    let digits = [];
    for (let i = 0; i < color.length; i++) {
      if (i % 2 !== 0) {
        digits.push(color.slice(i - 1, i + 1));
      }
    }
    return digits.map(value => parseInt(value, 16)).sort((a, b) => b - a)[0];
  }
  let tmp = [...colors.map((value, index) => v(value))]
  let maxIndex = tmp.indexOf(Math.max(...tmp))
  return `#${colors[maxIndex]}`
}

console.log(brightest([`#545D46`,`#63BD9D`,`#42E3F8`,`#69217E`]))