function maxTriSum(numbers){
  numbers = Array.from(new Set(numbers.sort((b, a) => a - b)))
  return numbers[0] + numbers[1] + numbers[2]
}

console.log(maxTriSum([3,2,6,8,2,3])) // 17
console.log(maxTriSum([2,9,13,10,5,2,9,5])) // 32
console.log(maxTriSum([2,1,8,0,6,4,8,6,2,4])) // 18