function canReconfigure(from, to) {
  if (from.length !== to.length) {
    return false
  }

  let dictionary = new Map()
  for (let i = 0; i < from.length; i++) {
    var checkValue = dictionary.get(from[i])
    if (checkValue) {
      if (checkValue !== to[i]) {
        return false
      } else {
        dictionary.set(from[i], to[i])
        continue
      }
    }

    const values = [...dictionary.values()]
    if (values.includes(to[i])) {
      return false
    }

    dictionary.set(from[i], to[i])
  }

  return true
}

const from = 'BAL'
const to = 'LIB'
console.log(canReconfigure(from, to)) // true

const from2 = 'CON'
const to2 = 'JUU'
console.log(canReconfigure(from2, to2)) // false

const from3 = 'XBOX'
const to3 = 'XXBO'
console.log(canReconfigure(from3, to3)) // false

const from4 = 'XBOX'
const to4 = 'XOBX'
console.log(canReconfigure(from4, to4)) // true

const from5 = 'MMM'
const to5 = 'MID'
console.log(canReconfigure(from5, to5)) // false

const from6 = 'AA'
const to6 = 'MID'
console.log(canReconfigure(from6, to6)) // false
