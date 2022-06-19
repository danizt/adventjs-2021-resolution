function contains(store, product) {
  const storeString = JSON.stringify(store)
  const productString = JSON.stringify(product)

  return storeString.includes(productString)
}

const almacen = {
  estanteria1: {
    cajon1: {
      producto1: 'coca-cola',
      producto2: 'fanta',
      producto3: 'sprite',
    },
  },
  estanteria2: {
    cajon1: 'vacio',
    cajon2: {
      producto1: 'pantalones',
      producto2: 'camiseta', // <- ¡Está aquí!
    },
  },
}

console.log('✅ ->' + contains(almacen, 'camiseta')) // true

const otroAlmacen = {
  baul: {
    fondo: {
      objeto: 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando',
    },
  },
}

console.log('❌ ->' + contains(otroAlmacen, 'gameboy')) // false
