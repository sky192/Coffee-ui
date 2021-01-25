/* eslint-disable no-console */
import express from 'express'

import bodyParser from 'body-parser'
import path from 'path'

import { getAllCoffees, getCoffeeByTitle, saveNewCoffee, deleteCoffee } from './controllers/coffees'

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/api', (request, response) => response.render('api'))

app.get('/api/coffee', getAllCoffees)

app.get('/api/coffee/:title', getCoffeeByTitle)

app.post('/api/coffee', bodyParser.json(), saveNewCoffee)

app.delete('/api/coffee/:id', deleteCoffee)

/* app.get('/coffee', (request, response) => {
    return response.render('coffee')
}) */

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'public', 'index.html')))

app.listen(1337, () => {
  console.log('listening on port 1337...')
})
