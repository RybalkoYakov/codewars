function getCard() {
  const BINGO = ['B', 'I', 'N', 'G', 'O'];
  const result = [];

  function getRandomNumber(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
  }
  function getRandomNumbers(min, max, amount) {
    const result = []
    while (result.length < amount) {
      let number = getRandomNumber(min, max);
      if (result.some(value => {return value === number})) {
        continue;
      }
      result.push(number);
    }
    return result;
  }

  let min = 1;
  let max = 15;
  let amount = 5;

  BINGO.forEach(word => {
    if (word === 'N') {
      amount = 4
    } else {
      amount = 5
    }
    const numbers = getRandomNumbers(min, max, amount);
    min += 15;
    max += 15;
    const wordResult = [];
    for (let i = 0; i < amount; i++) {
      wordResult.push(`${word}${numbers[i]}`)
    }
    result.push(...wordResult);
  })

  return result;
}

console.log(getCard())