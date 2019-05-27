// const cors = require('cors')
const express = require('express')

class App {
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production'

    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.express.use(express.urlencoded({ extended: false }))
    // this.express.use(cors())
  }

  routes () {
    this.express.use(require('./routes'))
  }
}

module.exports = new App().express
