const express = require('express')
var nodemailer = require('nodemailer');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Home')
})

//receive the data from contact form and send it to the email
app.post('/contact', (req, res) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: 'your email',
        pass: 'your password'
        }
    });
    
    var mailOptions = {
        from: 'your email',
        to: 'receiver email',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
        console.log(error);
        } else {
        console.log('Email sent: ' + info.response);
        }
    });
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

// Export the Express API
module.exports = app;