function sumPairs(numbers, result) {
  for (var i = 0; i < numbers.length; i++) {
    for (var j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === result) {
        return [numbers[i], numbers[j]]
      }
    }
  }
  return null
}

function sumPairsOneLoop(numbers, result) {
  for (var i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i]
    const searchedNumber = result - currentNumber
    numbers[i] = null

    if (numbers.includes(searchedNumber)) {
      return [currentNumber, searchedNumber]
    }
  }

  return null
}

console.log(sumPairs([3, 5, 7, 2], 10)) // [3, 7]
console.log(sumPairs([-3, -2, 7, -5], 10)) // null
console.log(sumPairs([2, 2, 3, 1], 4)) // [2, 2]
console.log(sumPairs([6, 7, 1, 2], 8)) // [6, 2]
console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)) // [1, 5]

console.log('--------')

console.log(sumPairsOneLoop([3, 5, 7, 2], 10)) // [3, 7]
console.log(sumPairsOneLoop([-3, -2, 7, -5], 10)) // null
console.log(sumPairsOneLoop([2, 2, 3, 1], 4)) // [2, 2]
console.log(sumPairsOneLoop([6, 7, 1, 2], 8)) // [6, 2]
console.log(sumPairsOneLoop([0, 2, 2, 3, -1, 1, 5], 6)) // [1, 5]
