function canCarry(capacity, trip) {
  const steps = []
  let gitAcumulator = 0
  let result = true

  trip.forEach(([giftCount, collectionPoint, deliveryPoint]) => {
    steps.push([giftCount, collectionPoint, 'c'])
    steps.push([giftCount, deliveryPoint, 'd'])
  })

  steps.sort(function (a, b) {
    return a[1] - b[1]
  })

  steps.forEach(([giftCount, _, type]) => {
    type === 'c' ? (gitAcumulator += giftCount) : (gitAcumulator -= giftCount)

    if (gitAcumulator > capacity) result = false
  })

  return result
}

console.log(
  canCarry(4, [
    [2, 5, 8],
    [3, 6, 10],
  ])
) // false
// En el punto 5 recoge 2 regalos...
// En el punto 6 recoge 3 regalos...
// Del punto 6 al 8 tendría 5 regalos en total
// Y su capacidad es 4... así que ¡no podría!

console.log(
  canCarry(3, [
    [1, 1, 5],
    [2, 2, 10],
  ])
) // true
// En el punto 1 recoge 1 regalo...
// En el punto 2 recoge 2 regalos...
// En el punto 5 entrega 1 regalo...
// En el punto 10 entrega 2 regalos...
// ¡Sí puede! Nunca superó la carga máxima de 3 regalos

console.log(
  canCarry(3, [
    [2, 1, 5],
    [3, 5, 7],
  ])
) // true -> nunca supera el máximo de capacidad

console.log(
  canCarry(4, [
    [2, 3, 8],
    [2, 5, 7],
  ])
) // true -> del punto 5 al 7 lleva 4 regalos y no supera el máximo

console.log(canCarry(1, [[2, 3, 8]])) // false -> no podría ni con el primer viaje

console.log(
  canCarry(2, [
    [1, 2, 4],
    [2, 3, 8],
  ])
) // false -> del punto 3 al 4 supera la capacidad máxima porque llevaría 3 regalos
