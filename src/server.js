const express = require('express')

const app = express()
const port = process.env.PORT || 5000

app.get('/preferences', (req, res) => {
  res.send({ name: 'Giamma' })
})

app.listen(port, () => console.log(`Listening on port ${port}`))
