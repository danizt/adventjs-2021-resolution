function checkSledJump(heights) {
  let estado = true // true = subiendo, false = bajando
  let result = true

  heights.forEach((height, index) => {
    if (index === 0) return ''
    let prevHeight = heights[index - 1]

    if ((height > prevHeight && !estado) || height === prevHeight) {
      result = false
    }

    if (height < prevHeight) estado = false
  })

  return result && !estado
}

console.log(checkSledJump([1, 2, 3, 2, 1])) // true: sube y baja de forma estricta
console.log(checkSledJump([0, 1, 0])) // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 3, 2, 1])) // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 1000, 1])) // -> true: sube y baja de forma estricta

console.log(checkSledJump([2, 4, 4, 6, 2])) // false: no sube de forma estricta
console.log(checkSledJump([1, 2, 3])) // false: sólo sube
console.log(checkSledJump([1, 2, 3, 2, 1, 2, 3])) // false: sube y baja y sube... ¡no vale!
