function decodeNumber(symbols) {
  const symbolsArray = symbols.split('')
  const symbolsValues = { '.': 1, ',': 5, ':': 10, ';': 50, '!': 100 }
  let decodedNumber = 0

  symbolsArray.forEach((symbol, index) => {
    const currentSymbolValue = symbolsValues[symbol]
    const nextSymbolValue = symbolsValues[symbolsArray[index + 1]]

    if (symbolsArray.length - 1 === index) {
      decodedNumber += currentSymbolValue
    }

    if (currentSymbolValue >= nextSymbolValue) {
      decodedNumber += currentSymbolValue
    }

    if (currentSymbolValue < nextSymbolValue) {
      decodedNumber -= currentSymbolValue
    }
  })

  return decodedNumber
}

console.log(decodeNumber('...')) // 3
console.log(decodeNumber('.,')) // 4 (5 - 1)
console.log(decodeNumber(',.')) // 6 (5 + 1)
console.log(decodeNumber(',...')) // 8 (5 + 3)
console.log(decodeNumber('.........!')) // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
console.log(decodeNumber('.;')) // 49 (50 - 1)
console.log(decodeNumber('..,')) // 5 (-1 + 1 + 5)
console.log(decodeNumber('..,!')) // 95 (1 - 1 - 5 + 100)
console.log(decodeNumber('.;!')) // 49 (-1 -50 + 100)
console.log(decodeNumber('!!!')) // 300
console.log(decodeNumber(';!')) // 50
console.log(decodeNumber(';.W')) // NaN
