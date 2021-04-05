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

app.post('/create', (req, res) => {
    const name = req.body.name
    const title = req.body.title
    const description = req.body.description

    if (title.trim() === '' && description.trim() === '') {
        res.render('create', { error: true, msg: 'You should not submit empty title' })
    }

    res.render('create')
})

const notes = ['Some awesome title', 'Some awesome title 2']

app.get('/notes', (req, res) => {
    res.render('notes', { notes: notes })
})

app.get('/notes/details', (req, res) => {
    res.render('details')
})

app.get('/posts', (req, res) => {
    res.render('posts')
})

app.listen(8000, err => {
    if (err) console.log(err)

    console.log('Server is running on port 8000...')
})