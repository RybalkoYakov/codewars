function century(year) {
  return  year % 100 === 0 ? year / 100 : ((year - year % 100)/ 100) + 1;
}

console.log(century(1923))