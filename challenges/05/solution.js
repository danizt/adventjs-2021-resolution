function daysToXmas(date) {
  const xmas = new Date(2021, 11, 25) // Dec 25, 2021
  const diff = xmas.getTime() - date.getTime()

  const oneDay = 1000 * 60 * 60 * 24

  return Math.ceil(diff / oneDay)
}

console.log(daysToXmas(new Date('Dec 25, 2021'))) // 0

console.log(daysToXmas(new Date('Dec 26, 2021'))) //-1

console.log(daysToXmas(new Date('Dec 31, 2021'))) // -6

console.log(daysToXmas(new Date('Jan 1, 2022 00:00:01'))) // -7

console.log(daysToXmas(new Date('Jan 1, 2022 23:59:59'))) // -7
