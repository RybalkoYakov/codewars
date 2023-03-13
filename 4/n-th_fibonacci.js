function nthFibo(n) {
  const fibonacciNumbers = [0,1]
  if (n <= 2) return fibonacciNumbers[n - 1]
  for (let i = 1; i <= n - 2; i++) {
    fibonacciNumbers.push(fibonacciNumbers[i] + fibonacciNumbers[i - 1])
  }
  return fibonacciNumbers[fibonacciNumbers.length - 1]
}

console.log(nthFibo(4))

// 0 1 1 2 3 5 8 13 21