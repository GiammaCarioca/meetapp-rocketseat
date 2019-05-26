const express = require('express')

const routes = express.Router()

routes.get('/preferences', (req, res) => {
  return res.send({ name: 'Giamma' })
})

module.exports = routes
