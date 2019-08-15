const valores = [10, 5, 9.3, 8]
console.log(valores[5])

valores[5]=100
console.log(valores[5])
console.log(valores.length)
valores.push('teste')
console.log(valores.length)
console.log(valores)

//recuperar/exclui da ultima posição
console.log(valores.pop)
console.log(typeof valores)
console.log(valores[5])

//recupera o ultimo valor sem excluir
console.log(valores[valores.length-1])