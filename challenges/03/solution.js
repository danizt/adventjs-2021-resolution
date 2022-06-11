function isValid(letter) {
  let goodClosedParentheses = true
  let hasBrackets = false
  let openedParentheses = false

  const arrayFromLetter = Array.from(letter)

  arrayFromLetter.forEach((char, index) => {
    if (goodClosedParentheses) {
      if (char === '(') {
        openedParentheses = true
      }

      // Validate well closed parentheses and not empty value
      if (char === ')') {
        if (openedParentheses) {
          const emptyParentheses = arrayFromLetter[index - 1] === '('
          if (!emptyParentheses) {
            goodClosedParentheses = true
            openedParentheses = false
          } else {
            goodClosedParentheses = false
          }
        } else {
          goodClosedParentheses = false
        }
      }

      // Validate brackets and only one item without spaces
      if (
        openedParentheses &&
        (char === '{' ||
          char === '[' ||
          char === '}' ||
          char === ']' ||
          char === ' ')
      ) {
        hasBrackets = true
      }
    }
  })

  return goodClosedParentheses && !hasBrackets
}

console.log('✅ -> ' + isValid('(balón)')) // -> ✅
console.log('❌ -> ' + isValid('(balón))')) // -> ❌

console.log('✅ -> ' + isValid('bici coche (balón) bici coche peluche')) // -> ✅
console.log('✅ -> ' + isValid('(muñeca) consola bici')) // ✅

console.log('❌ -> ' + isValid('bici coche (balón bici coche')) // -> ❌
console.log('❌ -> ' + isValid('peluche (bici [coche) bici coche balón')) // -> ❌
console.log('❌ -> ' + isValid('(peluche {) bici')) // -> ❌
console.log('❌ -> ' + isValid('() bici')) // ❌
