function listGifts(letter) {
  var giftsList = letter.split(' ').filter(function (gift) {
    const isSpace = gift === ''
    const isStrikethrough = gift.startsWith('_')
    return !isSpace && !isStrikethrough
  })

  const result = {}

  for (let gift of giftsList) {
    result[gift] = (result[gift] || 0) + 1
  }

  return result
}

const carta = 'bici  coche balón _playstation bici coche peluche'

console.log(listGifts(carta))
