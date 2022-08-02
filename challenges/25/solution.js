function canMouseEat(direction, game) {
  let mouseEats = false
  const gameMaxX = game[0].length
  const gameMaxY = game.length

  game.forEach((row, index) => {
    if (row.indexOf('m') > -1) {
      const mouse = [index, row.indexOf('m')]
      let eat = null

      switch (direction) {
        case 'up':
          eat = [mouse[0] - 1, mouse[1]]
          break
        case 'down':
          eat = [mouse[0] + 1, mouse[1]]
          break
        case 'left':
          eat = [mouse[0], mouse[1] - 1]
          break
        case 'right':
          eat = [mouse[0], mouse[1] + 1]
          break
      }

      const validEatX = eat[1] >= 0 && eat[1] < gameMaxX
      const validEatY = eat[0] >= 0 && eat[0] < gameMaxY

      mouseEats = validEatX && validEatY && game[eat[0]][eat[1]] === '*'
    }
  })

  return mouseEats
}

// const room = [
//   [' ', ' ', ' '],
//   [' ', ' ', 'm'],
//   [' ', ' ', '*'],
// ]

// console.log(canMouseEat('up', room)) // false
// console.log(canMouseEat('down', room)) // true
// console.log(canMouseEat('right', room)) // false
// console.log(canMouseEat('left', room)) // false

// const room2 = [
//   ['*', ' ', ' ', ' '],
//   [' ', 'm', '*', ' '],
//   [' ', ' ', ' ', ' '],
//   [' ', ' ', ' ', '*'],
// ]

// console.log(canMouseEat('up', room2)) // false
// console.log(canMouseEat('down', room2)) // false
// console.log(canMouseEat('right', room2)) // true
// console.log(canMouseEat('left', room2)) // false

const room3 = [['*', 'm']]

console.log(canMouseEat('up', room3)) // false
// console.log(canMouseEat('down', room3)) // false
// console.log(canMouseEat('right', room3)) // false
// console.log(canMouseEat('left', room3)) // false
