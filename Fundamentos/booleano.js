let texto = false
console.log(texto)

console.log('ELEMENTOS VERDADEIROS:')
console.log(!!'a')
console.log(!!' ')
console.log(!!3)
console.log(!![])
console.log(!!{})

console.log('\nELEMENTOS FALSOS: ')
console.log(!!0)
console.log(!!"")
console.log(!!NaN)
console.log(!!null)
console.log(!!undefined)

//Diferenças entre Null e undefined
let teste = null
console.log(teste)

console.log('testando o ou')
console.log(!!('' || null || 0 || " "))