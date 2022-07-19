function wrapGifts(gifts) {
  const giftLenght = gifts[0].length
  let wrapedGifts = []

  wrapedGifts.push('*'.repeat(giftLenght + 2))
  gifts.forEach((gift) => {
    wrapedGifts.push('*' + gift + '*')
  })
  wrapedGifts.push('*'.repeat(giftLenght + 2))

  return wrapedGifts
}

console.log(wrapGifts(['📷', '⚽️']))
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

console.log(wrapGifts(['🏈🎸', '🎮🧸']))
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

console.log(wrapGifts(['📷']))
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/
