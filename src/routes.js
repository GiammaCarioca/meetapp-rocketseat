const express = require('express')

const routes = express.Router()

const UserController = require('./app/controllers/UserController')

routes.post('/signup', UserController.store)

routes.get('/preferences', (req, res) => {
  return res.send({ name: 'Giamma' })
})

module.exports = routes
