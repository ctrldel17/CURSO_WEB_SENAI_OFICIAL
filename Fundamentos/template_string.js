const nome = 'Jorge'
const concatenacao = nome + 'Luiz'

console.log(concatenacao)

const template = `${nome} Luiz`
console.log(template)

console.log( `10 + 15= ${10+15}` )

const caixa = texto => texto.toUpperCase() 
console.log( ` Olá ${caixa('fulano')} ` )