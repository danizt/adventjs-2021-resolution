function countDecorations(bigTree) {
  let decorations = 0

  decorations += bigTree.value
  bigTree.left ? (decorations += countDecorations(bigTree.left)) : null
  bigTree.right ? (decorations += countDecorations(bigTree.right)) : null

  return decorations
}

const tree = {
  value: 1, // el nodo raíz siempre es uno, porque es la estrella ⭐
  left: {
    value: 2, // el nodo izquierdo necesita dos decoraciones
    left: null, // no tiene más ramas
    right: null, // no tiene más ramas
  },
  right: {
    value: 3, // el nodo de la derecha necesita tres decoraciones
    left: null, // no tiene más ramas
    right: null, // no tiene más ramas
  },
}

console.log(countDecorations(tree)) // 6

const bigTree = {
  value: 1,
  left: {
    value: 5,
    left: {
      value: 7,
      left: {
        value: 3,
        left: null,
        right: null,
      },
      right: null,
    },
    right: null,
  },
  right: {
    value: 6,
    left: {
      value: 5,
      left: null,
      right: null,
    },
    right: {
      value: 1,
      left: null,
      right: null,
    },
  },
}

/*
        1
      /   \
     5     6
    /     / \
   7     5   1
  /
 3
*/

console.log(countDecorations(bigTree)) // 28
