const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const bodyParser =require('body-parser')

 const heroRouter = require('./routes/api/heros')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))

app.use('/api/hero', heroRouter)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message })
})

module.exports = app
