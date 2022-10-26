const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Home')
})

//receive the data from contact form and send it to the email
app.post('/contact', (req, res) => {
    res.send('Contact')
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

// Export the Express API
module.exports = app;