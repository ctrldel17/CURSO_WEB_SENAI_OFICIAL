console.log("senai")
{
    {
        console.log("erro")
    }
}

//variaveis var ficam disponiveis globalmente e permitem dupla declaração
//variaveis let ficam disponiveis localmente (em um unico bloco de codigo) e não permitem dupla declaração
var a = "texto"
let b = "texto2"
console.log(a,b)

a="teste"
b="teste2"
console.log(a,b)

//constante const não deixa alterar valor, sobreescrever e o valor é setado na declaração apenas
const c = 5
console.log(c)
