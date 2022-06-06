function contarOvejas(ovejas) {
  ovejas = ovejas.filter((oveja) => {
    const isRed = oveja.color.toLowerCase() == 'rojo'
    const containsNLetter = oveja.name.toLowerCase().includes('n')
    const containsALetter = oveja.name.toLowerCase().includes('a')

    return isRed && containsNLetter && containsALetter
  })

  return ovejas
}

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' },
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo' },
]

console.log(contarOvejas(ovejas))
