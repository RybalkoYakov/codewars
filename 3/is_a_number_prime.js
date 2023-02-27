function isPrime(num) {
  const limit = Math.floor(Math.sqrt(num));
  let counter = 0;
  if (num <= 1) return false;
  for (let i = 0; i <= limit; i++) {
    if (num % i === 0) {
      ++counter;
    }
  }
  return counter + 1 < 3
}


console.log(isPrime(5))