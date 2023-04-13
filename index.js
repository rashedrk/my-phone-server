const express = require('express')
const app = express()
const port = 3000
const phone = require('./phone.json')

app.get('/',(req,res) => {
    res.send('phone data is coming soon.......')
})

app.get('/phone', (req, res) => {
    res.send(phone)
})

app.get('/phone/:id', (req, res) => {
    const id = parseInt(req.params.id)
    res.send(phone.find(phone => phone.id === id) || {})
})

app.listen(port, () => {
    console.log('server running at : ', port);
})