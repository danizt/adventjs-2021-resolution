function getMinJump(obstacles) {
  for (let jumpSize = 1; ; jumpSize++) {
    if (obstacles.every((obstacle) => obstacle % jumpSize !== 0)) {
      return jumpSize
    }
  }
}

console.log(getMinJump([5, 3, 6, 7, 9])) // -> 4
console.log(getMinJump([2, 4, 6, 8, 10])) // -> 7
console.log(getMinJump([1, 2, 3, 5])) // -> 4
console.log(getMinJump([3, 7, 5])) // -> 2
console.log(getMinJump([9, 5, 1])) // -> 2
