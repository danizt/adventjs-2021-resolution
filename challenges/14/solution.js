function missingReindeer(ids) {
  const orderedIds = ids.sort(function (a, b) {
    return a - b
  })

  for (let i = 0; i < orderedIds.length; i++) {
    if (orderedIds[i] !== i) {
      return i
    }
  }

  return ids.length
}

console.log(missingReindeer([0, 2, 3])) // -> 1
console.log(missingReindeer([5, 6, 1, 2, 3, 7, 0])) // -> 4
console.log(missingReindeer([0, 1])) // -> 2 (¡es el último el que falta!)
console.log(missingReindeer([3, 0, 1])) // -> 2
console.log(missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1])) // -> 8
console.log(missingReindeer([0])) // -> 1 (¡es el último el que falta!)
console.log(
  missingReindeer([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])
) // -> 17
