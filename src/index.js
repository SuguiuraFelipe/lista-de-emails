const express = require('express')
const path = require('node:path')

const app = express()

const storageEmails = []

// Configuração do EJS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Configuração do body
app.use(express.urlencoded({extends: true}))

app.get('/', (req, res) =>{
    res.render('form')
})

app.post('/success', (req, res) =>{
    const email = req.body.email
    storageEmails.push(email)
    res.render('success')
})

app.get('/usuarios', (req, res) =>{
    res.render('users', {users: storageEmails})
})

const PORT = 3000
app.listen(PORT, () => console.log('Servidor iniciado!'))