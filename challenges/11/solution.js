function shouldBuyFidelity(times) {
  const ticketPrice = 12
  const fidelityPrice = 250
  const fidelityDiscount = 0.75

  let ticketsTotalPrice = ticketPrice * times
  let fidelityTotalPrice = fidelityPrice

  Array.from(Array(times)).map((_, i) => {
    let elevate = ++i
    fidelityTotalPrice += ticketPrice * fidelityDiscount ** elevate
  })

  return fidelityTotalPrice < ticketsTotalPrice
}

// Ejemplo comprar 3 entradas:
// Entrada normal: 12$ * 3 = 36$
// Tarjeta fidelidad: 250$ + (12$ * 0,75) +  (12$ * 0,75 * 0,75) + (12$ * 0,75 * 0,75 * 0,75) = 270,8125$
console.log(shouldBuyFidelity(3)) // false

console.log(shouldBuyFidelity(1)) // false -> Mejor comprar tickets de un sólo uso
console.log(shouldBuyFidelity(100)) // true -> Mejor comprar tarjeta fidelidad
