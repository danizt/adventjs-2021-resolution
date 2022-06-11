function isValid(letter) {
  let wellFormedLetter = true
  let openedParentheses = false
  let parenthesesHasContent = false
  const arrayFromLetter = Array.from(letter)

  for (const char of arrayFromLetter) {
    // Validate only one opening parenthesis active at a time
    if (char === '(') {
      if (openedParentheses) {
        wellFormedLetter = false
        return false
      }
      openedParentheses = true
      continue
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
      wellFormedLetter = false
      return false
    }

    // Validate well closed parentheses and not empty value
    if (char === ')') {
      if (!openedParentheses || !parenthesesHasContent) {
        wellFormedLetter = false
        return false
      }
      openedParentheses = false
      parenthesesHasContent = false
    }

    if (openedParentheses === true && char !== ')') {
      parenthesesHasContent = true
    }

    wellFormedLetter = true
  }

  return wellFormedLetter
}

console.log('✅ -> ' + isValid('(balón)'))
console.log('❌ -> ' + isValid('(balón))'))

console.log('✅ -> ' + isValid('bici coche (balón) bici coche peluche'))
console.log('✅ -> ' + isValid('(muñeca) consola bici'))

console.log('❌ -> ' + isValid('bici coche (balón bici coche'))
console.log('❌ -> ' + isValid('peluche (bici [coche) bici coche balón'))
console.log('❌ -> ' + isValid('(peluche {) bici'))
console.log('❌ -> ' + isValid('() bici'))

console.log('❌ -> ' + isValid('(a() bici (a)'))
