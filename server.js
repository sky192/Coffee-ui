/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import express from 'express'

import path from 'path'

import {
  getAllCoffees, getCoffeeByTitle, saveNewCoffee, deleteCoffee,
} from './controllers/coffees'

const app = express()

app.use(express.static('public'))

app.get('/api/coffee', getAllCoffees)

app.get('/api/coffee/:title', getCoffeeByTitle)

// app.post('/api/coffee', bodyParser.json(), saveNewCoffee)

app.delete('/api/coffee/:id', deleteCoffee)

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'public', 'index.html')))

app.listen(1337, () => {
  console.log('listening on port 1337...')
})
