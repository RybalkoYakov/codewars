function isPowerOfTwo(n){
  if (n === 1) return true
  n = n / 2;
  if (n === 1) {
    return true
  } else if (n >= 1) {
    return isPowerOfTwo(n);
  } else {
    return false;
  }
}

console.log(isPowerOfTwo(1));