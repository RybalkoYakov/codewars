const countBits = function (n) {
  let amount = 0;
  n.toString(2).split('').forEach(value => {if (value > 0) amount++});
  return amount;
};


console.log(countBits(10))