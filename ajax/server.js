const bodyParser = require('body-parser')

const express = require('express')
const app = express()

app.use(express.static('.'))
// dentro do diretorio atual sirva todos os arquivos estaticos

app.use(bodyParser.urlencoded({extended: true}))
// usado para converter dados de formulario

app.use(bodyParser.json)
//usado para transformar json em informações trataveis no servidor

app.get('/teste', (req, res) => res.send('OK'))

app.listen(8080, () => console.log('Executando'))