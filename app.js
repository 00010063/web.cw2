const express = require('express')
const app = express()
const fs = require('fs')


app.set('view engine', 'pug')
app.use('/static', express.static('public'))
app.use(express.urlencoded({ extended: false }))

//localhost:8000
app.get('/', (req, res) => {
    res.render('home')
})


app.get('/create', (req, res) => {
    res.render('create')
})

const notes = ['Some awesome title', 'Some awesome title 2']

app.get('/notes', (req, res) => {
    res.render('notes', { notes: notes })
})

app.get('/notes/details', (req, res) => {
    res.render('details')
})

app.listen(8000, err => {
    if (err) console.log(err)

    console.log('Server is running on port 8000...')
})