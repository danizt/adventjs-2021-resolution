function pangram(letter) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const normalizedLetter = letter.toLowerCase().normalize('NFD')
  const includesEn = letter.includes('ñ')

  normalizedLetter.split('').forEach((l) => {
    if (alphabet.includes(l)) {
      alphabet = alphabet.replace(l, '')
    }
  })

  return alphabet.length === 0 && includesEn
}

console.log(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho')) // true

console.log(
  pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!')
) // true

console.log(
  pangram(
    'Esto es una frase larga pero no tiene todas las letras del abecedario'
  )
) // false

console.log(pangram('De la a a la z, nos faltan letras')) // false
