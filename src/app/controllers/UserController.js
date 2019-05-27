const { User } = require('../models')

class UserController {
  async store (req, res) {
    await User.create(req.body)

    return res.end()

    // return res.redirect('/login')
  }
}

module.exports = new UserController()
